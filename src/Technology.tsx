const Technology = () => {
  return (
    <section className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center text-center ">
        <h1 className="font-bold text-3xl text-white mb-4 md:text-6xl hover:text-green-500 transition duration-500 ">
          Technologies /
          <span className="text-green-500 hover:text-white transition duration-500">
            Stack
          </span>
        </h1>
        <h1 className="font-bold text-3xl text-white md:text-6xl">I use</h1>
      </div>
      <div className=" flex flex-col justify-center items-center w-full text-white text-lg md:text-2xl mt-8">
        <div className="border-white border-solid border w-3/4 md:w-2/6 flex flex-col justify-around items-center p-4 hover:scale-105 transition duration-500 m-2 hover:bg-white hover:text-gray-900">
          <div>Databases</div>
          <div className="border-green-600 border-solid border-2 text-center text-green-500 p-2 md:text-xl">
            MongoDB
          </div>
        </div>
        <div className="border-white border-solid border w-3/4 md:w-2/6 flex flex-col justify-around items-center p-4 hover:scale-105 transition duration-500 m-2 hover:bg-white hover:text-gray-900">
          <div>Backend</div>
          <div className="border-green-600 border-solid border-2 text-center text-green-500 p-2 md:text-xl">
            Express / NodeJS
          </div>
        </div>
        <div className="border-white border-solid border w-3/4 md:w-2/6 flex flex-col justify-around items-center p-4 hover:scale-105 transition duration-500 m-2 hover:bg-white hover:text-gray-900">
          <div>Frontend</div>
          <div className="border-green-600 border-solid border-2 text-center text-green-500 p-2 md:text-xl">
            React / Vanilla JS
          </div>
        </div>
        <div className="border-white border-solid border w-3/4 md:w-2/6 flex flex-col justify-around items-center p-4 hover:scale-105 transition duration-500 m-2 hover:bg-white hover:text-gray-900">
          <div>Styling</div>
          <div className="border-green-600 border-solid border-2 text-center text-green-500 p-2 md:text-xl">
            CSS / SCSS / Tailwind
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
