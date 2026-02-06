import Image from "next/image";
import coding from "../../public/assets/coding.png";

const About = () => {
  return (
    <>
      <section
        id="About"
        className="relative flex-row justify-center items-center w-full py-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        
        <div className="relative z-10 lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6">
          <div className="w-full flex-row items-center justify-center gap-2 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold my-6">
              About me<span className="gradient-text">.</span>
            </h1>
            <div className="glass rounded-2xl p-8 hover-lift">
              <div className="flex-col w-full pr-2 text-wrap space-y-4">
             <p className="text-sm md:text-base leading-relaxed opacity-90">
  I’m a software engineer with over three years of hands-on experience building
  and collaborating on a wide range of software projects. Throughout my journey,
  I’ve developed a strong focus on optimization, clean architecture, and
  productivity. I’m comfortable working in fast-paced environments and enjoy
  continuously challenging myself to learn, improve, and deliver better
  solutions.
</p>
<p className="text-sm md:text-base leading-relaxed opacity-90">
  I’m motivated by the opportunity to work on meaningful products and contribute
  to high-impact teams. As a full-stack developer, I’m passionate about turning
  ideas into reliable, scalable solutions that create real value. I’m committed
  to continuous learning, technical excellence, and strong collaboration as I
  grow in my career.
</p>

              </div>
            </div>
          </div>
          
          <div className="w-full flex items-center justify-center mt-8 ml-2 lg:mt-0 animate-fade-in-up delay-200">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r lg:mt-24 from-red-400 via-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative glass rounded-2xl lg:h-[540px] lg:mt-24">
                <Image
                  src={coding}
                  alt="Brainard Ordona Software Engineer"
                  className="flex justify-center items-center rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
