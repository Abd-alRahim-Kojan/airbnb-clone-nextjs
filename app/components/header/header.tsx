import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
      <div className="container grid grid-cols-3 gap-2">
        <Link href="/" className="relative h-12 w-28 flex">
          <Image
            src="/airbnb-logo.png"
            alt="logo"
            fill
            // width={100}
            // height={100}
            className="object-contain object-left"
          />
        </Link>
        <Searchbar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
