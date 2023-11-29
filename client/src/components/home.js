import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-screen">
          <h1 className="text-9xl font-bold">InnoVest</h1>
          <p className="py-6 text-2xl">Innovate - Invest - Inspire</p>
          <a className="btn btn-outline btn-circle svg-icon" href="#dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="10"
              viewBox="0 0 320 512"
            >
              <path d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div id="dashboard" className="p-10">
      <div className="flex w-full py-5">
        <Link
          to={"/marketplace"}
          className="btn btn-outline flex-grow grid h-20 card bg-base-200 rounded-box place-items-center"
        >
          Startup Marketplace
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          to={"/sharktank"}
          className="btn btn-outline flex-grow grid h-20 card bg-base-200 rounded-box place-items-center"
        >
          Virtual SharkTank
        </Link>
      </div>
      <div className="flex w-full py-5">
        <Link
          to={"/evaluate"}
          className="btn btn-outline flex-grow grid h-20 card bg-base-200 rounded-box place-items-center"
        >
          Evaluate Idea
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          to={"/bizzgpt"}
          className="btn btn-outline flex-grow grid h-20 card bg-base-200 rounded-box place-items-center"
        >
          BizzGPT
        </Link>
      </div>
      <div className="flex w-full py-5">
        <Link
          to={"/showcase"}
          className="btn btn-outline flex-grow grid h-20 card bg-base-200 rounded-box place-items-center"
        >
          Idea Showcase
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          to={"/news"}
          className="btn btn-outline flex-grow grid h-20 card bg-base-200 rounded-box place-items-center"
        >
          News
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Dashboard></Dashboard>
    </div>
  );
}