import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen bg-gray-50 w-full flex flex-col justify-between bg-[url(https://images.unsplash.com/photo-1542789392-618ecac2c626?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover">
      <img src="/assets/uberlogo.png" className="h-24 w-fit" />
      <div className="bg-gray-200 p-5 flex flex-col gap-4">
        <h2 className="text-2xl font-medium">Get Started With Uber</h2>
        <Link
          to={"/user-login"}
          className=" text-center text-lg bg-neutral-900 text-white rounded-xl p-3"
        >
          Continue &rarr;
        </Link>
      </div>
    </div>
  );
}

export default Home;
