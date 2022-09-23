import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { getHistory } from "../lib/get-history";
import type { History } from "../lib/get-history";
import { getIssues } from "../lib/issue";
import { HistoryCalendar } from "../components/history-calendar";

type Props = {
  history: History;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const issues = await getIssues({ owner: "9sako6", repo: "continuity" });
  const history = getHistory(issues);

  return {
    props: { history },
  };
};

const Home: NextPage<Props> = ({ history }) => {
  return (
    <div className="">
      <Head>
        <title>Continuity</title>
        <meta
          name="description"
          content="Heatmap of ongoing habits. Continuity is power."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center flex-col min-h-screen">
        <h1 className="pb-12 text-2xl font-mono text-zinc-300 text-left">
          Continuity
        </h1>
        <HistoryCalendar history={history} />
      </main>

      <footer className="font-mono flex items-center justify-center pt-4 pb-4 border-t border-gray-800 text-zinc-500">
        Powered by
        <a
          className="pl-2"
          href="https://github.com/9sako6/continuity"
          target="_blank"
          rel="noreferrer"
        >
          continuity
        </a>
      </footer>
    </div>
  );
};

export default Home;
