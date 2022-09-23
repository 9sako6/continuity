import { fromMarkdown } from "mdast-util-from-markdown";
import type {
  List,
  ListItem,
  Paragraph,
  Text,
  Parent,
} from "mdast-util-from-markdown/lib";

type TaskCount = { title: string; count: number };

const acceptableListItem = (
  node: Parent
): node is ListItem & {
  type: "listItem";
  children: [Paragraph, List | undefined];
} => {
  return (
    node.type === "listItem" &&
    node.children[0].type === "paragraph" &&
    // Optional nested list item
    (!node.children[1] ||
      (node.children[1] && node.children[1].type === "list"))
  );
};

const acceptableParagraph = (
  node: Parent
): node is Paragraph & { children: [Text] } => {
  return node.type === "paragraph" && node.children[0].type === "text";
};

const acceptableTodoList = (title: string) => {
  return (
    (title.startsWith("[x] ") || title.startsWith("[ ] ")) && title.length > 4
  );
};

const parseListItem = (node: Parent) => {
  if (!acceptableListItem(node)) return;

  const [paragraphNode, subListNode, _] = node.children;
  if (!acceptableParagraph(paragraphNode)) return;

  let { value: title } = paragraphNode.children[0];
  let count = 0;

  if (subListNode) {
    /**
     * There is a nested list.
     * For example:
     *
     * ```markdown
     * - Task
     *   - [ ] Task1
     *   - [ ] Task2
     * ```
     */
    subListNode.children.forEach((listItem) => {
      const result = parseListItem(listItem);
      if (result) {
        count += result.count;
      }
    });
  } else {
    /**
     * For example:
     *
     * ```markdown
     * - [ ] Task
     * ```
     */
    if (!acceptableTodoList(title)) return;
    count = title.startsWith("[x] ") ? 1 : 0;
    title = title.slice(4);
  }

  return { title, count };
};

export const parseIssueBody = (text: string) => {
  const tasks: TaskCount[] = [];
  const ast = fromMarkdown(text);
  const queue: [Parent, number][] = [];
  queue.push([ast, 0]);

  while (queue.length) {
    const [node, depth] = queue.shift()!;

    node.children.forEach((child) => {
      if ("children" in child) {
        if (child.type === "list" && depth === 0) {
          queue.push([child, depth + 1]);
        } else if (child.type === "listItem") {
          const task = parseListItem(child);
          if (task) tasks.push(task);
        }
      }
    });
  }

  return tasks;
};
