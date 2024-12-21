import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import SuggestedLocations from "../components/SuggestedLocations";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedInput, setSelectedInput] = useState("pickup");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");

  const [findTripPanelOpen, setFindTripPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    gsap.to(panelRef.current, {
      top: !findTripPanelOpen ? "72%" : "0%",
      duration: 0.2,
    });
  }, [findTripPanelOpen]);

  useGSAP(() => {}, []);

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
      {!pickupLocation || !destinationLocation ? (
        <div
          ref={panelRef}
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
                  setFindTripPanelOpen(true);
                }}
                value={pickup}
                onChange={(e) => {
                  setSelectedInput("pickup");
                  setPickup(e.target.value);
                }}
                type="text"
                placeholder="Add your pickup location"
                className="w-full px-7 py-3 rounded-md bg-neutral-100 outline-none"
              />
              <input
                onClick={() => {
                  setFindTripPanelOpen(true);
                }}
                value={destination}
                onChange={(e) => {
                  setSelectedInput("destination");
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
                setlocation={setPickupLocation}
              />
            ) : (
              <SuggestedLocations
                input={destination}
                setLocation={setDestinationLocation}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="absolute bottom-0 w-full z-50 rounded-t-2xl flex flex-col gap-3 bg-white p-5 py-10">
          <h2 className="text-2xl font-medium">Choose your vehicle</h2>
          <div className="flex justify-start items-center gap-3 relative p-2 border-2 border-white active:border-black rounded-lg">
            <img src="/assets/car.png" className="h-16" />
            <div className="">
              <div className="font-medium text-lg flex items-center gap-2">
                <p>Uber Go</p>
                <div className="flex gap-1 items-center text-neutral-700 rounded-md text-base">
                  <FaUser className="text-sm" /> 4
                </div>
              </div>
              <p className="text-sm font-medium -mt-1">2 mins away ~ 15:24</p>
              <p className="text-neutral-600 -mt-1 text-sm">
                Affordable, comfortable rides
              </p>
            </div>
            <h3 className="absolute  top-2 right-2 text-lg font-medium">
              ₹190.00
            </h3>
          </div>
          <div className="flex justify-start items-center gap-3 relative p-2 border-2 border-white active:border-black rounded-lg">
            <img src="/assets/bike.jpg" className="h-16" />
            <div className="">
              <div className="font-medium text-lg flex items-center gap-2">
                <p>Uber Bike</p>
                <div className="flex gap-1 items-center text-neutral-700 rounded-md text-base">
                  <FaUser className="text-sm" /> 1
                </div>
              </div>
              <p className="text-sm font-medium -mt-1">3 mins away ~ 15:24</p>
              <p className="text-neutral-600 -mt-1 text-sm">
                Affordable, quicker rides
              </p>
            </div>
            <h3 className="absolute  top-2 right-2 text-lg font-medium">
              ₹90.00
            </h3>
          </div>
          <div className="flex justify-start items-center gap-3 relative p-2 border-2 border-white active:border-black rounded-lg">
            <img src="/assets/auto.png" className="h-14" />
            <div className="">
              <div className="font-medium text-lg flex items-center gap-2">
                <p>Uber Auto</p>
                <div className="flex gap-1 items-center text-neutral-700 rounded-md text-base">
                  <FaUser className="text-sm" /> 3
                </div>
              </div>
              <p className="text-sm font-medium -mt-1">5 mins away ~ 15:24</p>
              <p className="text-neutral-600 -mt-1 text-sm">
                Affordable, compact rides
              </p>
            </div>
            <h3 className="absolute  top-2 right-2 text-lg font-medium">
              ₹105.60
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
