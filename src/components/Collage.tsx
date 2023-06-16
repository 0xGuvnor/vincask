import Image from "next/image";

const aboutImages = [
  { path: "/about/about1.jpeg", description: "Whisky barrels" },
  { path: "/about/about2.jpg", description: "Whisky warehouse" },
  { path: "/about/about3.jpg", description: "NFT image" },
  { path: "/about/about4.jpg", description: "NFT image" },
  { path: "/about/about5.jpg", description: "NFT image" },
  { path: "/about/about6.jpg", description: "Whisky barrels" },
];

const Collage = () => {
  return (
    <div className="relative flex-1 h-[75vh]">
      <div className="absolute h-[75vh] left-0 grid grid-flow-col grid-rows-6 gap-4 space-y-4x top-0">
        {aboutImages.map((image, id) => (
          <div
            key={id}
            className={`
            ${id === 0 && "row-span-6 self-center"} 
            ${id === 1 && "row-span-3 self-end"}
            ${id === 2 && "row-span-3 self-start"}
            ${id === 3 && "row-span-2 self-end translate-y-10"} 
            ${id === 4 && "row-span-2 self-center"}
            ${id === 5 && "row-span-2 self-start -translate-y-10"} 
            relative top-0 left-0 w-60 h-60 2xl:h-[300px] 2xl:w-[300px]`}
          >
            <Image
              src={image.path}
              alt={image.description}
              fill
              className="object-cover rounded-lg shadow-2xl shadow-rose-900"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Collage;
