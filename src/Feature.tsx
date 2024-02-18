const Feature = () => {
  return (
    <div className="bg-cyan-600 py-16">
      <h1 className="text-sky-800 text-6xl text-center font-bold">
        My Projects
      </h1>

      <div className="md:flex md:justify-center items-center flex-col md:space-x-8 md:px-14">
        <div className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img
              className="w-65"
              src={"https://yash456k-react-portfolio.netlify.app/marcus.png"}
              alt=""
            />
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
                onClick={() => window.open("https://google.com")}
              >
                View Demo
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img
              className="w-65"
              src="https://yash456k-react-portfolio.netlify.app/portfolio.png"
              alt=""
            />
            <div className="mt-4 text-sky-600 text-center">
              <h1 className="text-xl font-bold">Porfolio Website</h1>
              <p className="mt-4 text-gray-600">
                The website you are currently viewing ! Built using React,
                framer-motion and SCSS.
              </p>
              <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200">
                View Demo
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img
              className="w-full"
              src="https://yash456k-react-portfolio.netlify.app/inprogress.jpg"
              alt=""
            />
            <div className="mt-4 text-sky-600 text-center">
              <h1 className="text-xl font-bold">Optimized Performance</h1>
              <p className="mt-4 text-gray-600">
                Maintain high performance standards with components that are
                optimized for speed and efficiency
              </p>
              <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200">
                View Demo
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 py-4 px-4 bg-whit w-3/4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img
              className="w-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww"
              alt=""
            />
            <div className="mt-4 text-sky-600 text-center">
              <h1 className="text-xl font-bold">Optimized Performance</h1>
              <p className="mt-4 text-gray-600">
                Maintain high performance standards with components that are
                optimized for speed and efficiency
              </p>
              <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
