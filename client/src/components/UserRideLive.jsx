import { FaHome } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";

function UserRideLive() {
  return (
    <div className="h-screen relative">
      <img
        src="/assets/uberlogo.png"
        className="h-20 absolute z-10 top-0 left-0"
      />
      <Link
        to="/home"
        className="fixed right-2 top-5 p-2 rounded-full bg-neutral-200"
      >
        <FaHome className="text-neutral-500" />
      </Link>
      <div className="h-1/2">
        <img
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          className="h-full object-cover"
        />
      </div>
      <div className="h-1/2 p-5 overflow-y-scroll">
        <div className="flex justify-between items-center mb-2 border-b pb-2">
          <img src="/assets/car.png" className="h-24" />
          <div className="flex flex-col items-end">
            <p className="font-medium text-neutral-500">SANTH</p>
            <h3 className="text-xl font-bold">DL3S1A0000</h3>
            <p className="font-medium text-neutral-500">Lord Alto LXI</p>
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
        <button className="w-full p-2 bg-blue-900 text-white rounded-md">
          Make a payment
        </button>
      </div>
    </div>
  );
}

export default UserRideLive;
