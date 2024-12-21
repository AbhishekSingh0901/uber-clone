import { MdLocationOn } from "react-icons/md";

function SuggestedLocations({ input, setLocation }) {
  const handleSelect = (location) => {
    setLocation(location);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={() => handleSelect("Location 1")}
        className="flex justify-start items-center gap-2 text-lg cursor-pointer"
      >
        <MdLocationOn className="text-neutral-500 text-3xl p-1 rounded-full bg-neutral-300" />
        Location 1
      </div>
      <div
        onClick={() => handleSelect("Location 2")}
        className="flex justify-start items-center gap-2 text-lg cursor-pointer"
      >
        <MdLocationOn className="text-neutral-500 text-3xl p-1 rounded-full bg-neutral-300" />
        Location 2
      </div>
      {/* Add more suggested locations as needed */}
      <div
        onClick={() => handleSelect("Location 3")}
        className="flex justify-start items-center gap-2 text-lg cursor-pointer"
      >
        <MdLocationOn className="text-neutral-500 text-3xl p-1 rounded-full bg-neutral-300" />
        Location 3
      </div>
    </div>
  );
}

export default SuggestedLocations;
