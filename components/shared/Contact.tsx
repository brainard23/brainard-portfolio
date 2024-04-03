import { contactDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <section
        id="Contact"
        className="flex-row justify-center items-center w-full"
      >
        <div className="lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6 ">
          <div className="w-full flex-row items-center justify-center gap-2">
            <h1 className="text-4xl font-semibold my-6">
              Contact<span className="text-blue-700">.</span>
            </h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex gap-2 mb-1 bg-white p-2 rounded-md h-14">
                  <div className="bg-white rounded-md flex items-center justify-center">
                    <Image src={item.icon} alt={item.label} width={50} />
                  </div>
                  <div className="flex dark:text-black justify-center items-center">
                    <Link href={item.link} target="_blank">{item.label}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
