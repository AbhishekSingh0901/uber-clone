import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdKeyboardArrowDown } from "react-icons/md";

import SuggestedLocations from "../components/SuggestedLocations";
import SelectRide from "../components/SelectRide";
import ConfirmRide from "../components/ConfirmRide";
import WatingRideComfirmation from "../components/WatingRideComfirmation";
import WatingForDriver from "../components/WatingForDriver";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedInput, setSelectedInput] = useState("pickup");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");

  const [findTripPanelOpen, setFindTripPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(true);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [
    waitingRideConfirmationPanelOpen,
    setWaitingRideConfirmationPanelOpen,
  ] = useState(false);

  const findTripPanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confiremRidePanelRef = useRef(null);
  const waitingRideConfirmationPanelRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    gsap.to(findTripPanelRef.current, {
      top: !findTripPanelOpen ? "72%" : "0%",
      duration: 0.2,
    });
  }, [findTripPanelOpen]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      translateY: !vehiclePanelOpen ? "100%" : "0%",
      duration: 0.2,
    });
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    gsap.to(confiremRidePanelRef.current, {
      translateY: !confirmRidePanelOpen ? "100%" : "0%",
      duration: 0.2,
    });
  }, [confirmRidePanelOpen]);

  useGSAP(() => {
    gsap.to(waitingRideConfirmationPanelRef.current, {
      translateY: !waitingRideConfirmationPanelOpen ? "100%" : "0%",
      duration: 0.2,
    });
  }, [waitingRideConfirmationPanelOpen]);
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src="/assets/uberlogo.png"
        className="h-20 absolute z-10 top-0 left-0"
      />
      <div className="h-full">
        <img
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          className="h-full object-cover"
        />
      </div>
      <div
        ref={findTripPanelRef}
        className="absolute overflow-hidden z-40 h-screen top-[72%] shadow-3xl w-full  flex flex-col justify-end "
      >
        <div className="bg-white pt-5 px-5 rounded-t-xl flex h-[28%] flex-col gap-3 relative">
          <h2 className="text-2xl font-medium mb-2">Find a trip</h2>
          <MdKeyboardArrowDown
            className={`${
              findTripPanelOpen ? "opacity-100" : "opacity-0"
            } absoulte text-2xl absolute top-6 right-5 bg-neutral-200 rounded-full transition-all duration-500`}
            onClick={() => setFindTripPanelOpen(false)}
          />
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-3 mb-4 relative"
          >
            <div className=" line absolute h-16 w-1 top-5 left-3 rounded-full bg-black"></div>
            <input
              onClick={() => {
                setSelectedInput("pickup");
                setFindTripPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              type="text"
              placeholder="Add your pickup location"
              className="w-full px-7 py-3 rounded-md bg-neutral-100 outline-none"
            />
            <input
              onClick={() => {
                setSelectedInput("destination");
                setFindTripPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
              placeholder="Enter your destination"
              className="w-full px-7 py-3  rounded-md bg-neutral-100 outline-none"
            />
          </form>
        </div>
        <div className="bg-white flex-1 px-5 ">
          {selectedInput === "pickup" ? (
            <SuggestedLocations
              input={pickup}
              setInput={setPickup}
              setLocation={setPickupLocation}
            />
          ) : (
            <SuggestedLocations
              input={destination}
              setInput={setDestination}
              setLocation={setDestinationLocation}
            />
          )}
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className=" absolute bottom-0 w-full z-50 rounded-t-2xl flex flex-col justify-end gap-3 bg-white "
      >
        <SelectRide
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          vehiclePanelOpen={vehiclePanelOpen}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>
      <div
        ref={confiremRidePanelRef}
        className=" absolute bottom-0 w-full z-50 rounded-t-2xl flex flex-col justify-end gap-3 bg-white "
      >
        <ConfirmRide
          confirmRidePanelOpen={confirmRidePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setWaitingRideConfirmationPanelOpen={
            setWaitingRideConfirmationPanelOpen
          }
        />
      </div>
      <div
        ref={waitingRideConfirmationPanelRef}
        className=" absolute bottom-0 w-full z-50 rounded-t-2xl flex flex-col justify-end gap-3 bg-white "
      >
        <WatingRideComfirmation
          waitingRideConfirmationPanelOpen={waitingRideConfirmationPanelOpen}
          setWatingRideComfirmationPanelOpen={
            setWaitingRideConfirmationPanelOpen
          }
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className=" absolute bottom-0 w-full z-50 rounded-t-2xl flex flex-col justify-end gap-3 bg-white "
      >
        <WatingForDriver />
      </div>
    </div>
  );
}

export default Home;
