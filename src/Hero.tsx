const Hero = () => {
  return (
    <section className="bg-gray-900 h-screen flex flex-col md:flex-row">
      <div className="container mx-auto flex flex-col items-center h-full p-10  py-24 md:py-24  gap-6 text-center">
        <div className="w-full sm:w-full lg:flex items-center justify-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-purple-800 font-extrabold leading-7 md:leading-10 mb-14">
            Yash Khambhatta
          </h1>
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-800 font-extrabold leading-10 md:leading-normal tracking-wider ">
            Full Stack developer
          </h1>
          <p className="mt-5 mt-20 lg:w-10/12 text-white font-normal text-xl text-center ">
            Building fun stuff to just try it out Currently learning React,
            Express , MongoDB and NodeJs
          </p>
        </div>
        <div className="flex  items-center scale-150 md:scale-110">
          <button className="  bg-sky-700 transition duration-150 ease-in-out hover:bg-sky-600 lg:text-xl lg:font-bold  rounded-full text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
            View my Projects
          </button>
          <button className="ml-4   bg-transparent transition duration-150 ease-in-out hover:border-sky-600 lg:text-xl lg:font-bold  hover:text-sky-600 rounded-full border border-sky-700 text-sky-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
            Contact me
          </button>
        </div>
      </div>
      <div className="flex text-2xl justify-center items-center mx-auto py-4 sm:py-24 gap-6 w-4/5 invisible md:visible h-full">
        <img
          className="object-cover h-full"
          src="https://yash456k-react-portfolio.netlify.app/jojo-removebg-preview.png"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
