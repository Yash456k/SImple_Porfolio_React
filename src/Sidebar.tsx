const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <div>
      <div
        className={`${
          open ? "translate-x-0 " : "-translate-x-full"
        } bg-opacity-95 bg-gray-100 h-full w-60 fixed top-0 left-0 z-40 transition-transform duration-300   `}
      >
        <div className="h-full flex justify-center items-center">
          <ul className=" text-black text-2xl flex flex-col justify-center items-center gap-10 hover:scale-105 transition duration-500 ">
            <li className="hover:scale-125 transition duration-200 cursor-pointer">
              Home
            </li>
            <li className="hover:scale-125 transition duration-200 cursor-pointer">
              About
            </li>
            <li className="hover:scale-125 transition duration-200 cursor-pointer">
              Projects
            </li>
            <li className="hover:scale-125 transition duration-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
