import { contactDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <section
        id="Contact"
        className="relative flex-row justify-center items-center w-full py-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        
        <div className="relative z-10 lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6 ">
          <div className="w-full flex-row items-center justify-center gap-2">
            <h1 className="text-4xl md:text-5xl font-bold my-6 animate-fade-in-up">
              Contact<span className="gradient-text">.</span>
            </h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
              {contactDetails.map((item, i) => (
                <Link 
                  href={item.link} 
                  target="_blank" 
                  key={i}
                  className="block"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="glass rounded-xl p-4 h-20 hover-lift group cursor-pointer transition-all duration-300 border border-border/30 hover:border-primary/50">
                    <div className="flex gap-4 items-center h-full">
                      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Image src={item.icon} alt={item.label} width={40} height={40} />
                      </div>
                      <div className="flex justify-center items-center font-medium group-hover:gradient-text transition-all duration-300">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
