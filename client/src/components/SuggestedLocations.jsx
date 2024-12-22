import { MdLocationOn } from "react-icons/md";

function SuggestedLocations({ input, setLocation, setInput }) {
  const handleSelect = (location) => {
    console.log(input);
    setLocation(location);
    setInput(location);
  };

  const locations = [
    "23B, Greenfield Road, Sector 11, Metro City",
    "45A, Sunset Avenue, Block D, Sunnyvale",
    "12C, Ocean Drive, Bay Area, Coastside",
    "78D, Maple Street, Hilltop Enclave, Hilltown",
  ];

  return (
    <div className="flex flex-col gap-3">
      {locations.map((location) => (
        <div
          key={location}
          onClick={() => handleSelect(location)}
          className="flex justify-start items-center gap-2 text-lg cursor-pointer py-2"
        >
          <MdLocationOn className="text-neutral-500 text-3xl p-1 rounded-full bg-neutral-300" />
          {location}
        </div>
      ))}
    </div>
  );
}

export default SuggestedLocations;
