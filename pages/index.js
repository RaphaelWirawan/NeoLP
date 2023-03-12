import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="Container m-0 p-0 h-screen w-screen bg-slate-900 flex items-center justify-center">
        <Head>
          <title>ravi</title>
          <link rel="icon" href="/ravi.jpg" />
        </Head>

        <div className="p-7 w-80 h-96 bg-slate-800 flex flex-col shadow-lg rounded-xl justify-evenly">
          <div className="flex flex-col">
            <p class="font-light font-RobotoMono text-base text-slate-400">
              Hello, I'm
            </p>
            <h1 class="font-Roboto font-extrabold text-4xl text-slate-100 tracking-wide">
              Raphael
            </h1>
            <p class="font-RobotoMono font-bold text-lg text-slate-300 mt-2">
              Anything Developer
            </p>
          </div>
          <div className="flex flex-col pt-3 gap-1">
            <a
              className="font-RobotoMono font-light text-slate-400 hover:text-slate-600 transition"
              href="cv.pdf"
            >
              &lt;resume/&gt;
            </a>
            <a
              href="coming soon"
              className="font-RobotoMono font-light text-slate-400 hover:text-slate-600 transition pointer-events-none"
            >
              &lt;blog/&gt;
            </a>
            <a
              href="https://github.com/RaphaelWirawan"
              className="font-RobotoMono font-light text-slate-400 hover:text-slate-600 transition"
            >
              &lt;github/&gt;
            </a>
            <a
              href="mailto:alessandrowirawan@gmail.com"
              className="font-RobotoMono font-light text-slate-400 hover:text-slate-600 transition"
            >
              &lt;mail/&gt;
            </a>
            <a
              href="https://www.linkedin.com/in/raphaelwirawan"
              className="font-RobotoMono font-light text-slate-400 hover:text-slate-600 transition"
            >
              &lt;linkedin/&gt;
            </a>
            <a
              href="https://www.instagram.com/raphaelwirawan/"
              className="font-RobotoMono font-light text-slate-400 hover:text-slate-600 transition"
            >
              &lt;instagram/&gt;
            </a>
          </div>

          {/* <div className="flex flex-col w-1/2">
          <div className="m-2 p-0 h-16 bg-darkerorange flex shadow-lg rounded-xl"></div>
          <div className="flex flex-row">
            <div className="m-2 p-0 w-20 h-16 bg-darkerorange flex shadow-lg rounded-xl"></div>
            <div className="m-2 p-0 w-20 h-16 bg-darkerorange flex shadow-lg rounded-xl"></div>
            <div className="m-2 p-0 w-20 h-16 bg-darkerorange flex shadow-lg rounded-xl"></div>
            <div className="m-2 p-0 w-20 h-16 bg-darkerorange flex shadow-lg rounded-xl"></div>
          </div>
        </div> */}
        </div>
      </div>
      {/* <div className="m-0 p-0 w-screen">
        <p>raphael 2023</p>
      </div> */}
    </>
  );
}
