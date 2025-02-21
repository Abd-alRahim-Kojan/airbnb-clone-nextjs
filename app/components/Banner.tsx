import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="/airbnb-banner.webp"
        alt="banner"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold text-white mb-2 md:text-2xl backdrop-blur-sm bg-black/30 p-4 rounded-lg">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg shadow-md rounded-full font-bold my-2 sm:my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;