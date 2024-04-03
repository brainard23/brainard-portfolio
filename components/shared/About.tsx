import Image from "next/image";
import coding from "../../public/assets/coding.png";

const About = () => {
  return (
    <>
      <section
        id="About"
        className="flex-row justify-center items-center w-full"
      >
        <div className="lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6">
          <div className="w-full flex-row items-center justify-center gap-2">
            <h1 className="text-4xl font-semibold my-6">
              About me<span className="text-blue-700">.</span>
            </h1>
            <div className="flex-col w-full pr-2 text-wrap">
              <p className="mb-4 text-sm">
                I am software Engineer with more than 2 years of experience. My
                journey has been marked by collaborations on diverse software
                projects, allowing me to hone my keen eye for optimization and
                productivity. I pride myself on my ability to navigate and
                thrive in dynamic environments, consistently pushing the
                boundaries of what I can learn and achieve.
              </p>
              <p className="text-sm">
                Looking forward, I am eager to continue contributing to
                impactful projects and teams. As a developer, I am passionately
                dedicated to turning innovative ideas into reality. My goal is
                to leverage my skills in full-stack development, to drive
                innovation and efficiency. As I grow in my career, I remain
                committed to excellence, continuous learning, and the
                collaborative spirit that has characterized my journey so far.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src={coding}
              alt="Brainard Ordona Software Engineer"
              className="flex justify-center items-center "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
