import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

function CaptainHome() {
  const [ridePopupPanelOpen, setRidePopupPanelOpen] = useState(true);
  const [confirmRidePopupPanelOpen, setConfirmRidePopupPanelOpen] =
    useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(ridePopupPanelRef.current, {
      translateY: ridePopupPanelOpen ? "0%" : "110%",
      duration: 0.2,
    });
  }, [ridePopupPanelOpen]);

  useGSAP(() => {
    gsap.to(confirmRidePopupPanelRef.current, {
      translateY: confirmRidePopupPanelOpen ? "0%" : "110%",
      duration: 0.2,
    });
  }, [confirmRidePopupPanelOpen]);

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
      <div className="p-5">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className=" fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12"
      >
        <RidePopup
          setRidePopupPanelOpen={setRidePopupPanelOpen}
          setConfirmRidePopupPanelOpen={setConfirmRidePopupPanelOpen}
        />
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className=" fixed w-full z-10 bottom-0 bg-white "
      >
        <ConfirmRidePopup
          setRidePopupPanelOpen={setRidePopupPanelOpen}
          setConfirmRidePopupPanelOpen={setConfirmRidePopupPanelOpen}
        />
      </div>
    </div>
  );
}

export default CaptainHome;
