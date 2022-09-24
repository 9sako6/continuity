import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { getHistory } from "../lib/get-history";
import type { History } from "../lib/get-history";
import { getIssues } from "../lib/issue";
import { HistoryCalendar } from "../components/history-calendar";

type Props = {
  history: History;
  owner: string;
  repo: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [owner, repo] = process.env.REPOSITORY!.split("/");
  const issues = await getIssues({
    owner,
    repo,
  });
  const history = getHistory(issues);

  return {
    props: { history, owner, repo },
  };
};

const Home: NextPage<Props> = ({ history, owner, repo }) => {
  return (
    <div className="flex flex-col m-auto font-serif p-1.5 max-w-6xl min-h-screen text-zinc-400">
      <Head>
        <title>Continuity</title>
        <meta
          name="description"
          content="Heatmap calendar of your continuity."
        />
        <meta property="og:title" content={"Continuity"} />
        <meta
          property="og:image"
          content={`https://${owner}.github.io/${repo}/ogp.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 text-zinc-400">
        <h1 className="text-lg pt-14 pb-14 md:text-2xl text-left">
          Continuity
        </h1>
        <HistoryCalendar history={history} />
      </main>

      <footer className="text-sm relative bottom-0 flex justify-center pt-8 pb-4">
        Powered by
        <a
          className="pl-1 hover:underline"
          href={`https://github.com/${owner}/${repo}`}
          target="_blank"
          rel="noreferrer"
        >
          {repo}
        </a>
      </footer>
    </div>
  );
};

export default Home;
