import { MdLocationOn } from "react-icons/md";

function LocationSearchPanel() {
  return (
    <div className="flex justify-start items-center gap-2 text-lg">
      <MdLocationOn className="text-neutral-500 text-3xl p-1 rounded-full bg-neutral-300" />{" "}
      LocationSerachPanel
    </div>
  );
}

export default LocationSearchPanel;
