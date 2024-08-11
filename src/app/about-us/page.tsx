import Button from "@/components/Button";
import TeamLeader from "@/components/Chief";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col max-container items-center overflow-hidden bg-center  max-w-full">
      <div className="padding-container max-container 3xl:px-20 bg-about-us bg-no-repeat bg-cover w-full flex justify-start py-12 h-64 md:h-80 lg:h-96">
        <h2 className="text-4xl lg:text-6xl font-bold">About Us</h2>
      </div>
      <div className="padding-container max-container flex-col w-full pb-24">
        <div className="flex flex-col items-center mt-10 gap-5 lg:gap-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-center lg:w-1/3">Company History</h2>
          <p className="text-base lg:text-lg text-gray-700 lg:w-2/3">Since its establishment in 2015, CowBoys IT Solutions has been committed to providing the best IT solutions for businesses worldwide. From humble beginnings, we have reached various significant milestones in the industry.</p>
        </div>

        <div className="flex flex-col mt-10 items-center gap-5 lg:gap-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-center lg:w-1/3">Team</h2>
          <p className="text-base lg:text-lg text-gray-700 lg:w-2/3">Our team consists of experienced professionals in the fields of IT and technology.</p>
        </div>
        
        <TeamLeader />

        <div className="flex justify-center">
          <Link href="/teams">
            <Button
            type='button'
            title='more'
            variant='btn_white_text'
            />
          </Link>
        </div>      
        <div className="flex flex-col py-10 items-center gap-5 lg:gap-10">
          <p className="text-base lg:text-lg text-gray-700 lg:w-2/3">We believe in teamwork, innovation, and integrity. Our culture is about pushing the boundaries of technology and creating a work environment that supports personal and professional growth.</p>
        </div>
      </div>      
    </section>
  );
}

export default About;
