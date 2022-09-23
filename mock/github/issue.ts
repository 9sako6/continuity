import { Issue } from "../../types/github";
import { mockLabel } from "./label";

type Params = Partial<Issue>;

export const mockIssue = (params?: Params): Issue => {
  return {
    ...sampleIssue,
    ...params,
  };
};

// https://docs.github.com/ja/rest/issues/issues
const sampleIssue: Issue = {
  id: 1,
  node_id: "MDU6SXNzdWUx",
  url: "https://api.github.com/repos/octocat/Hello-World/issues/1347",
  repository_url: "https://api.github.com/repos/octocat/Hello-World",
  labels_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
  comments_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
  events_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
  html_url: "https://github.com/octocat/Hello-World/issues/1347",
  number: 1347,
  state: "open",
  title: "Found a bug",
  body: "I'm having a problem with this.",
  user: {
    login: "octocat",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://github.com/images/error/octocat_happy.gif",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
  },
  labels: [
    {
      id: 208045946,
      node_id: "MDU6TGFiZWwyMDgwNDU5NDY=",
      url: "https://api.github.com/repos/octocat/Hello-World/labels/bug",
      name: "bug",
      description: "Something isn't working",
      color: "f29513",
      default: true,
    },
  ],
  assignee: {
    login: "octocat",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://github.com/images/error/octocat_happy.gif",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
  },
  assignees: [
    {
      login: "octocat",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url:
        "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false,
    },
  ],
  milestone: {
    url: "https://api.github.com/repos/octocat/Hello-World/milestones/1",
    html_url: "https://github.com/octocat/Hello-World/milestones/v1.0",
    labels_url:
      "https://api.github.com/repos/octocat/Hello-World/milestones/1/labels",
    id: 1002604,
    node_id: "MDk6TWlsZXN0b25lMTAwMjYwNA==",
    number: 1,
    state: "open",
    title: "v1.0",
    description: "Tracking milestone for version 1.0",
    creator: {
      login: "octocat",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url:
        "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false,
    },
    open_issues: 4,
    closed_issues: 8,
    created_at: "2011-04-10T20:09:31Z",
    updated_at: "2014-03-03T18:58:10Z",
    closed_at: "2013-02-12T13:22:01Z",
    due_on: "2012-10-09T23:39:01Z",
  },
  locked: true,
  active_lock_reason: "too heated",
  comments: 0,
  pull_request: {
    url: "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
    html_url: "https://github.com/octocat/Hello-World/pull/1347",
    diff_url: "https://github.com/octocat/Hello-World/pull/1347.diff",
    patch_url: "https://github.com/octocat/Hello-World/pull/1347.patch",
  },
  closed_at: null,
  created_at: "2011-04-22T13:33:48Z",
  updated_at: "2011-04-22T13:33:48Z",
  closed_by: {
    login: "octocat",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://github.com/images/error/octocat_happy.gif",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
  },
  author_association: "COLLABORATOR",
  state_reason: "completed",
};

export const realIssues: Issue[] = [
  {
    url: "https://api.github.com/repos/9sako6/continuity/issues/8",
    repository_url: "https://api.github.com/repos/9sako6/continuity",
    labels_url:
      "https://api.github.com/repos/9sako6/continuity/issues/8/labels{/name}",
    comments_url:
      "https://api.github.com/repos/9sako6/continuity/issues/8/comments",
    events_url:
      "https://api.github.com/repos/9sako6/continuity/issues/8/events",
    html_url: "https://github.com/9sako6/continuity/issues/8",
    id: 1383160624,
    node_id: "I_kwDOIDDyGs5ScVsw",
    number: 8,
    title: "Continuity on 2022/09/23",
    user: {
      login: "github-actions[bot]",
      id: 41898282,
      node_id: "MDM6Qm90NDE4OTgyODI=",
      avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/github-actions%5Bbot%5D",
      html_url: "https://github.com/apps/github-actions",
      followers_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/followers",
      following_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
      gists_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
      organizations_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
      repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
      events_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
      type: "Bot",
      site_admin: false,
    },
    labels: [mockLabel({ name: "continuity" })],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: "2022-09-23T00:48:09Z",
    updated_at: "2022-09-23T19:04:27Z",
    closed_at: null,
    author_association: "NONE",
    active_lock_reason: null,
    body: "- [ ] Go to the gym\n- [x] Learn English\n- [x] Study computer science\n",
    reactions: {
      url: "https://api.github.com/repos/9sako6/continuity/issues/8/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/9sako6/continuity/issues/8/timeline",
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: "https://api.github.com/repos/9sako6/continuity/issues/7",
    repository_url: "https://api.github.com/repos/9sako6/continuity",
    labels_url:
      "https://api.github.com/repos/9sako6/continuity/issues/7/labels{/name}",
    comments_url:
      "https://api.github.com/repos/9sako6/continuity/issues/7/comments",
    events_url:
      "https://api.github.com/repos/9sako6/continuity/issues/7/events",
    html_url: "https://github.com/9sako6/continuity/issues/7",
    id: 1382879565,
    node_id: "I_kwDOIDDyGs5SbRFN",
    number: 7,
    title: "Continuity on 2022/09/22",
    user: {
      login: "github-actions[bot]",
      id: 41898282,
      node_id: "MDM6Qm90NDE4OTgyODI=",
      avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/github-actions%5Bbot%5D",
      html_url: "https://github.com/apps/github-actions",
      followers_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/followers",
      following_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
      gists_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
      organizations_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
      repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
      events_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
      type: "Bot",
      site_admin: false,
    },
    labels: [mockLabel({ name: "continuity" })],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: "2022-09-22T18:55:17Z",
    updated_at: "2022-09-23T19:04:21Z",
    closed_at: null,
    author_association: "NONE",
    active_lock_reason: null,
    body: "- [x] Go to the gym\n- [x] Learn English\n- [x] Study computer science\n",
    reactions: {
      url: "https://api.github.com/repos/9sako6/continuity/issues/7/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/9sako6/continuity/issues/7/timeline",
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: "https://api.github.com/repos/9sako6/continuity/issues/6",
    repository_url: "https://api.github.com/repos/9sako6/continuity",
    labels_url:
      "https://api.github.com/repos/9sako6/continuity/issues/6/labels{/name}",
    comments_url:
      "https://api.github.com/repos/9sako6/continuity/issues/6/comments",
    events_url:
      "https://api.github.com/repos/9sako6/continuity/issues/6/events",
    html_url: "https://github.com/9sako6/continuity/issues/6",
    id: 1382876444,
    node_id: "I_kwDOIDDyGs5SbQUc",
    number: 6,
    title: "Continuity Thursday, September 22nd",
    user: {
      login: "github-actions[bot]",
      id: 41898282,
      node_id: "MDM6Qm90NDE4OTgyODI=",
      avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/github-actions%5Bbot%5D",
      html_url: "https://github.com/apps/github-actions",
      followers_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/followers",
      following_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
      gists_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
      organizations_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
      repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
      events_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
      type: "Bot",
      site_admin: false,
    },
    labels: [mockLabel({ name: "continuity" })],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: "2022-09-22T18:52:23Z",
    updated_at: "2022-09-22T18:52:24Z",
    closed_at: null,
    author_association: "NONE",
    active_lock_reason: null,
    body: "- [ ] Go to the gym\n- [ ] Learn English\n- [ ] Study computer science\n",
    reactions: {
      url: "https://api.github.com/repos/9sako6/continuity/issues/6/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/9sako6/continuity/issues/6/timeline",
    performed_via_github_app: null,
    state_reason: null,
  },
];
