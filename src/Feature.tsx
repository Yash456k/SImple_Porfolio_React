import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div id="Projects" className="bg-cyan-600 py-16">
      <h1 className="text-sky-800 text-6xl text-center font-bold">
        My Projects
      </h1>

      <div className="md:flex md:justify-center flex justify-center items-center flex-col  md:px-14">
        <motion.div
          whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }} // Animation duration and easing
          className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg  mx-auto md:mx-0"
        >
          <div className="w-sm">
            <div>
              <img className="w-65" src={"/NotesApp.png"} alt="" />
            </div>
            <div className="mt-4 text-sky-600 text-center">
              <h1 className="text-xl font-bold">Notes App</h1>
              <p className="mt-4 text-gray-600">
                The project is Notes app which uses the MERN stack fully ,
                Frontend i use Zustand for state management , and it
                communicates with a hosted server written in express , i use
                mongoDb for database management the user can login / signup ( i
                store info using JWT and make sure user is logged in for hours
                before they choose to logout ) the user can make a note , update
                it or delete the notes as they choose , the notes get saved to
                each user in database
              </p>
              <button
                className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200"
                onClick={() =>
                  window.open(
                    "https://yash456k-basic-notes-mern-app.netlify.app/"
                  )
                }
              >
                View Demo
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }} // Animation duration and easing
          className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg  mx-auto md:mx-0"
        >
          <div className="w-sm">
            <div>
              <img className="w-65" src={"/marcus.png"} alt="" />
            </div>
            <div className="mt-4 text-sky-600 text-center">
              <h1 className="text-xl font-bold">Marcus Aurelius</h1>
              <p className="mt-4 text-gray-600">
                A fullstack website , allowing you to signup/login , and
                bookmark some handpicked quotes by Marcus Aurelius. Uses
                Express, nodeJs and MongoDB(The website might take time to load
                on first try ! This is because it is hosted on render's free
                tier)
              </p>
              <button
                className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200"
                onClick={() =>
                  window.open("https://marcus-aurelius-3n3y.onrender.com/")
                }
              >
                View Demo
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }} // Animation duration and easing
          className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg  mx-auto md:mx-0"
        >
          <div className="w-sm">
            <div>
              <img className="w-65" src="/oldPortfolio.png" alt="" />
            </div>
            <div className="mt-4 text-sky-600 text-center">
              <h1 className="text-xl font-bold">Animated Porfolio Website</h1>
              <p className="mt-4 text-gray-600">
                Another porfolio website I made! If possible view it on PC ,
                framer-motion seems to make it lag on mobile devices. Built
                using React, framer-motion and SCSS.
              </p>
              <button
                onClick={() =>
                  window.open("https://yash456k-react-portfolio.netlify.app/")
                }
                className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200"
              >
                View Demo
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }} // Animation duration and easing
          className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg  mx-auto md:mx-0"
        >
          <div className="w-sm">
            <img
              className="w-full object-cover"
              src="NewPortfolio.png"
              alt=""
            />
            <div className="mt-4 text-sky-600 text-center">
              <h1 className="text-xl font-bold">
                My Current Porfolio Website ! (The one you are viewing right
                now)
              </h1>
              <p className="mt-4 text-gray-600">
                A porfolio website I made using React, framer-motion and
                TailwindCSS. I wanted to try out TailwindCSS and use little
                animations , keeping it simple and this is what I came up with.
              </p>
              <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200">
                View Demo
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }} // Animation duration and easing
          className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg  mx-auto md:mx-0"
        >
          <div className="w-sm">
            <img className="w-full" src="/inprogress.jpg" alt="" />
            <div className="mt-4 text-sky-600 text-center">
              <h1 className="text-xl font-bold">
                (In progress) A fullstack E-commerce website
              </h1>
              <p className="mt-4 text-gray-600">
                Currently working on a fullstack E-commerce website using React,
                Redux, Express, NodeJs and MongoDB. The website will allow users
                to signup/login, add items to cart, checkout and make payments.
                The website will also have an admin panel, allowing the admin to
                add new products, edit existing products and delete products.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
