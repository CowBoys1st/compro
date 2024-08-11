import Image from "next/image";

interface TestimonialProps {
  name: string;
  position: string;
  testimonial: string;
  image: string;
}

const TestimonialSite = ({ name, position, testimonial, image }: TestimonialProps) => {
  return (
    <div className="h-full w-full min-w-[300px] bg-white my-2 lg:rounded-5xl 2xl:rounded-5xl shadow-lg max-h-[300px]">
      <div className="flex h-full flex-col items-start justify-between p-6 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-gray-500 p-1">
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-gray-50">{name}</h4>
            <p className="regular-14 text-gray-30">{position}</p>
          </div>
        </div>

        <p className="regular-14 text-gray-50 mt-6">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialSite;
