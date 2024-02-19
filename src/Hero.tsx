import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <section
      id="Home"
      className="bg-gray-900 h-screen flex flex-col md:flex-row"
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="container mx-auto flex flex-col items-center h-full p-10  py-8 md:py-24  gap-6 text-center"
      >
        <div className="w-full sm:w-full lg:flex items-center justify-center flex-col  mb-5 sm:mb-10">
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-purple-800 font-extrabold leading-7 md:leading-10 mb-14"
          >
            Yash Khambhatta
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-800 font-extrabold leading-10 md:leading-normal tracking-wider "
          >
            Full Stack developer
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="mt-5 mt-20 lg:w-10/12 text-white font-normal text-xl text-center "
          >
            Building fun stuff to just try it out Currently learning React,
            Express , MongoDB and NodeJs
          </motion.p>
        </div>
        <motion.div
          variants={textVariants}
          className="flex  items-center scale-150 md:scale-110"
        >
          <a href="#Projects">
            <button className="  bg-sky-700 transition duration-150 ease-in-out hover:bg-sky-600 lg:text-xl lg:font-bold  rounded-full text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
              My Projects
            </button>
          </a>
          <a href="#Contact">
            <button className="ml-4   bg-transparent transition duration-150 ease-in-out hover:border-sky-600 lg:text-xl lg:font-bold  hover:text-sky-600 rounded-full border border-sky-700 text-sky-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
              Contact me
            </button>
          </a>
        </motion.div>
      </motion.div>
      <div className="flex text-2xl justify-center items-top mx-auto py-4 sm:py-24 gap-6 w-4/5  h-full overflow-hidden">
        <img
          className="object-cover  md:h-full h-3/4"
          src="https://yash456k-react-portfolio.netlify.app/jojo-removebg-preview.png"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
