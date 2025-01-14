import { FaSquare } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { MdKeyboardArrowDown, MdPayment } from "react-icons/md";

function WatingRideComfirmation({
  waitingRideConfirmationPanelOpen,
  setWatingRideComfirmationPanelOpen,
}) {
  return (
    <div>
      <div className="px-5 py-10 relative">
        <button
          className={`absolute -top-3 left-1/2 -translate-x-1/2  ${
            waitingRideConfirmationPanelOpen ? "flex" : "hidden"
          } justify-center items-center text-lg font-medium bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4`}
          onClick={() => setWatingRideComfirmationPanelOpen(false)}
        >
          <MdKeyboardArrowDown />
        </button>
        <h1 className="text-2xl font-medium mb-5">Looking for a Ride</h1>
        <div className="flex flex-col items-center">
          <div className="border-b pb-2 w-full flex justify-center">
            <img className="h-32" src="/assets/car.png" />
          </div>
          <div className="w-full flex flex-col gap-2 py-3">
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
        </div>
      </div>
    </div>
  );
}

export default WatingRideComfirmation;
