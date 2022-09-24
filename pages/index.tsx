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
    <div className="flex flex-col m-auto font-serif p-1.5 max-w-6xl min-h-screen text-zinc-400">
      <Head>
        <title>Continuity</title>
        <meta
          name="description"
          content="Heatmap of ongoing habits. Continuity is power."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 text-zinc-400">
        <h1 className="pt-14 pb-14 text-2xl text-left">Continuity</h1>
        <HistoryCalendar history={history} />
      </main>

      <footer className="relative bottom-0 flex justify-center pt-8 pb-4">
        Powered by
        <a
          className="pl-1 hover:text-zinc-200"
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
