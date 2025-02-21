import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <Link href="/">
          <Image
            src="/airbnb-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="hidden sm:block"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
