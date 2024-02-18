const Header = ({ setOpen }) => {
  return (
    <header className="p-4 bg-gray-900">
      <nav className="container mx-auto flex justify-between items-cente">
        <h1 className="text-2xl font-bold text-sky-50">Yash K</h1>

        <button
          onClick={() => setOpen((prev: boolean) => !prev)}
          className="fixed z-50 top-4 right-4 hover:scale-125 transition duration-200"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
