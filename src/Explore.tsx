const Explore = () => {
  return (
    <section className="bg-gray-300 text-sky-800 border-b border-sky-700 text-center lg:py-16 py-10 w-full md:px-12 px-4 flex flex-col items-center justify-center relative gap-10">
      <div className="py-10 mx-auto w-10/12">
        <h2 className="text-5xl font-semibold leading-9 mb-10">About me</h2>
        <p className="text-xl md:text-3xl text-black text-justify">
          Second-year Computer Science student with a passion for development
          and open-source. Experienced in building complex web applications with
          a focus on user authentication, leveraging technologies such as
          Express, Node.js, MongoDB, etc . Currently seeking internship
          opportunities to further enhance my skills and contribute to
          real-world projects.
        </p>
      </div>
      <div className="py-14 w-10/12 mx-auto">
        <h3 className="font-semibold text-4xl">Contact me!</h3>
        <ul className="flex items-center justify-center gap-10">
          <li className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/yash-khambhatta/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
                className="w-12 h-12"
              />
            </a>
          </li>
          <li className="flex items-center justify-center gap-4 mt-4">
            <a href="https://github.com/Yash456k" target="_blank">
              <img
                src="https://img.icons8.com/color/48/000000/github.png"
                alt="linkedin"
                className="w-12 h-12"
              />
            </a>
          </li>
          <li className="flex items-center justify-center gap-4 mt-4">
            <a href="https://twitter.com/yash654k" target="_blank">
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="linkedin"
                className="w-12 h-12"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Explore;
