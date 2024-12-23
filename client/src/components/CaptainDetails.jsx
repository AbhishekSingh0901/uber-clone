import { LuNotepadText } from "react-icons/lu";
import { MdAccessTime, MdSpeed } from "react-icons/md";

function CaptainDetails() {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <img
            className="h-14 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&s"
          />
          <h4 className="text-lg font-medium">Joginder Bhati</h4>
        </div>
        <div className="text-xl font-medium text-right">
          <h4>₹ 1350</h4>
          <p className="text-xs tracking-widest font-thin -mt-1">Earned</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-neutral-200 p-2 rounded-lg">
        <div className="text-center flex flex-col items-center ">
          <MdAccessTime className="text-xl text-neutral-800" />
          <h5 className="text-xl font-medium">10.2</h5>
          <p className="text-sm text-neutral-800">Hours Online</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <MdSpeed className="text-xl text-neutral-800" />
          <h5 className="text-xl font-medium">10.2</h5>
          <p className="text-sm text-neutral-800">Hours Online</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <LuNotepadText className="text-xl text-neutral-800" />
          <h5 className="text-xl font-medium">10.2</h5>
          <p className="text-sm text-neutral-800">Hours Online</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails;
