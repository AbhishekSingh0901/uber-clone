import { FaUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const data = [
  {
    id: 1,
    name: "Uber Go",
    image: "/assets/car.png",
    seats: 4,
    price: 225.0,
  },
  {
    id: 2,
    name: "Uber Bike",
    image: "/assets/bike.jpg",
    seats: 1,
    price: 75.65,
  },
  {
    id: 3,
    name: "Uber Auto",
    image: "/assets/auto.png",
    seats: 3,
    price: 140.95,
  },
];

function SelectRide({
  vehiclePanelOpen,
  setVehiclePanelOpen,
  setConfirmRidePanelOpen,
}) {
  return (
    <div className="relative p-5 py-10">
      <button
        className={`absolute -top-3 left-1/2 -translate-x-1/2  ${
          vehiclePanelOpen ? "flex" : "hidden"
        } justify-center items-center text-lg font-medium bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4`}
        onClick={() => setVehiclePanelOpen(false)}
      >
        <MdKeyboardArrowDown />
      </button>
      <h2 className="text-2xl font-medium">Choose your vehicle</h2>
      {data.map((vehicle) => (
        <div
          onClick={() => {
            setVehiclePanelOpen(false);
            setConfirmRidePanelOpen(true);
          }}
          key={vehicle.id}
          className="flex justify-start items-center gap-3 relative p-2 border-2 border-white active:border-black rounded-lg"
        >
          <img src={vehicle.image} className="h-16" />
          <div className="">
            <div className="font-medium text-lg flex items-center gap-2">
              <p>{vehicle.name}</p>
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
            ₹{vehicle.price}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default SelectRide;
