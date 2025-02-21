import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end space-x-4 text-gray-500">
      <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
      <GlobeAltIcon className="h-6 cursor-pointer" />
      <div className="flex space-x-2 border-2 p-2 rounded-full">
        <Bars3Icon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
    </div>
  );
};

export default Navbar;
