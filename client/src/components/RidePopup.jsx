import { FaSquare } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { MdKeyboardArrowDown, MdPayment } from "react-icons/md";

function RidePopup({ setRidePopupPanelOpen, setConfirmRidePopupPanelOpen }) {
  return (
    <div>
      <button
        className={`absolute -top-3 left-1/2 -translate-x-1/2  flex  justify-center items-center text-lg font-medium bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4`}
        onClick={() => {
          setRidePopupPanelOpen(false);
        }}
      >
        <MdKeyboardArrowDown />
      </button>
      <h1 className="text-2xl font-medium mb-5">New Ride For You</h1>
      <div className="flex flex-col items-center">
        <div className="border-b p-2 bg-neutral-100 rounded-md flex w-full justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHPmPXafZyy3z2iVjXPHHLEvDikIuXdVJkA&s"
            />
            <div>
              <h3 className="text-lg font-medium">Salena Chaturvedi</h3>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">(2.5 Km)</h3>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 p-2 py-3">
          <div className="flex justify-start gap-3 items-center border-b py-2">
            <GrLocationPin className=" text-xl" />
            <div>
              <h4 className="text-lg font-bold">512/11-A</h4>
              <p className="text-neutral-500">Saket, New Delhi</p>
            </div>
          </div>
          <div className="flex justify-start gap-3 items-center border-b py-2">
            <FaSquare className=" text-xl" />
            <div>
              <h4 className="text-lg font-bold">Third Wave Coffee</h4>
              <p className="text-neutral-500">
                Select City Walk, Saket ,New Delhi
              </p>
            </div>
          </div>
          <div className="flex justify-start gap-3 items-center  py-2">
            <MdPayment className=" text-xl" />
            <div>
              <h4 className="text-lg font-bold">₹193.20</h4>
              <p className="text-neutral-500">Cash</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-2 w-full">
          <button
            onClick={() => setRidePopupPanelOpen(false)}
            className="w-full bg-neutral-200 hover:bg-neutral-300  text-blue-900 py-3 font-medium px-4 rounded"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              setConfirmRidePopupPanelOpen(true);
            }}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 font-medium px-4 rounded"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default RidePopup;