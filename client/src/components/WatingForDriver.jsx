import { GrLocationPin } from "react-icons/gr";

function WatingForDriver() {
  return (
    <div className="px-5 py-10 relative">
      {/* <button
        className={`absolute -top-3 left-1/2 -translate-x-1/2  ${
          confirmRidePanelOepn ? "flex" : "hidden"
        } justify-center items-center text-lg font-medium bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4`}
        onClick={() => setConfirmRidePanelOpen(false)}
      >
        <MdKeyboardArrowDown />
      </button> */}
      <div className="flex justify-between items-center border-b pb-4 mb-2">
        <h1 className="text-2xl font-medium mb-5">Meet at pickup point</h1>
        <div className="p-4 px-6 flex flex-col items-center justify-center text-white bg-black">
          <p>2</p>
          <p>min</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2 border-b pb-2">
        <img src="/assets/car.png" className="h-24" />
        <div className="flex flex-col items-end">
          <p className="font-medium text-neutral-500">SANTH</p>
          <h3 className="text-xl font-bold">DL3S1A0000</h3>
          <p className="font-medium text-neutral-500">Lord Alto LXI</p>
        </div>
      </div>
      <div className="flex justify-start gap-3 items-center border-b py-2">
        <GrLocationPin className=" text-xl" />
        <div>
          <h4 className="text-xl font-bold">512/11-A</h4>
          <p className=" text-lg text-neutral-500">Saket, New Delhi</p>
        </div>
      </div>
    </div>
  );
}

export default WatingForDriver;
