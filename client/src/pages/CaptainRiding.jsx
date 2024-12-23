import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {
  const [finishRidePanelOpen, setFininshRidePanelOpen] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(() => {
    gsap.to(finishRidePanelRef.current, {
      translateY: finishRidePanelOpen ? "0%" : "110%",
      duration: 0.2,
    });
  }, [finishRidePanelOpen]);

  return (
    <div className="h-screen relative flex flex-col">
      <img
        src="/assets/uberlogo.png"
        className="h-20 absolute z-10 top-0 left-0"
      />
      <Link
        to="/captain-login"
        className="fixed right-2 top-5 p-2 rounded-full bg-white"
      >
        <FaSignOutAlt className="text-neutral-900" />
      </Link>
      <div className="flex-1">
        <img
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          className="h-full object-cover"
        />
      </div>
      <div
        className="p-5 flex justify-between items-center relative pt-10"
        onClick={() => {
          setFininshRidePanelOpen(true);
        }}
      >
        <button
          className="absolute -top-3 left-1/2 -translate-x-1/2  flex  justify-center items-center text-lg font-medium bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4"
          onClick={() => {}}
        >
          <MdKeyboardArrowUp />
        </button>
        <h3 className="text-xl font-medium ">4km Away</h3>
        <button className="bg-blue-800 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed bottom-0 w-full z-10 bg-white"
      >
        <FinishRide setFinishRidePanelOpen={setFininshRidePanelOpen} />
      </div>
    </div>
  );
}

export default CaptainRiding;
