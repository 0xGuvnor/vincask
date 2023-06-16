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
    <div className="relative flex-1x h-[550px] md:h-[75vh] w-full bg-whitex">
      <div className="absolute grid h-full grid-flow-col grid-rows-5 gap-4 -top-9 md:top-0 -left-20 md:left-0 md:grid-rows-6">
        {aboutImages.map((image, id) => (
          <div
            key={id}
            className={`
            ${id === 0 && "row-span-6 self-center hidden md:block"} 
            ${id === 1 && "row-span-3 self-end -translate-y-7 md:translate-y-0"}
            ${
              id === 2 &&
              "row-span-2 md:row-span-3 self-start -translate-y-7 md:translate-y-0"
            }
            ${
              id === 3 && "row-span-2 md:row-span-2 self-end md:translate-y-10"
            } 
            ${
              id === 4 &&
              "row-span-1 md:row-span-2 self-center translate-y-9 md:translate-y-0"
            }
            ${
              id === 5 &&
              "row-span-2 md:row-span-2 self-start md:-translate-y-10 translate-y-[74px]"
            } 
            relative top-0 left-0 w-44 h-44 md:w-60 md:h-60 2xl:h-[300px] 2xl:w-[300px]`}
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
