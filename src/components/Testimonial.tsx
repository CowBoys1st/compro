import Image from "next/image";
import TestimonialSite from "./TestimonialSite";

const Testimonial = () => {
    return (
      <section className="2xl:max-container relative mb-10 flex flex-col rounded-3xl">
        <div className=" mt-10 px-6">
            <div className="bg-gray-50 p-8  xl:max-w-[1440px] xl:rounded-5xl xl:px-16 xl:py-5 relative w-full overflow-hidden rounded-3xl">
                <h2 className="regular-24 text-center md:regular-32 2xl:regular-64 capitalize text-white">
                <strong>What Our Clients Say</strong>
                </h2>
                <p className="regular-14 xl:regular-16 mt-5 text-white text-center">
                We are proud to have earned the trust and satisfaction of our clients.
                </p>
                <Image 
                src="/quote.svg"
                alt="quote"
                width={186}
                height={219}
                className="camp-quote"
                />
            </div>

            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto ">
                <TestimonialSite 
                    name="Bill Gates"
                    position="CEO of Microsoft Corporation"
                    testimonial="Their innovative approach and attention to detail were impressive. The results exceeded our expectations."
                    image="/person-1.jpg"
                />
                <TestimonialSite 
                    name="Steve Jobs"
                    position="CEO of Apple Inc."
                    testimonial="Working with this company was a transformative experience. Their commitment to excellence is unparalleled."
                    image="/person-2.jpg"
                />
                <TestimonialSite 
                    name="John Cena"
                    position="WWE Superstars"
                    testimonial="They were not just a service provider; they became a true partner. Every aspect of the project was handled with professionalism."
                    image="/person-3.jpeg"
                />
                <TestimonialSite 
                    name="Brock Lesnar"
                    position="Kicked WWE Superstars"
                    testimonial="The team's expertise and dedication were evident in every phase of the project. I would recommend them without hesitation."
                    image="/person-4.jpg"
                />
            </div>
  
        
        </div>
      </section>
    );
  };
  
  export default Testimonial;
  