const About = () => {
  return (
    <section className="flex flex-col max-container items-center overflow-hidden bg-center  max-w-full">
      <div className="padding-container max-container 3xl:px-20 bg-about-us bg-no-repeat bg-cover w-full flex justify-start py-12 h-64 md:h-80 lg:h-96">
        <h2 className="text-4xl lg:text-6xl font-bold">About Us</h2>
      </div>

      <div className="px-4 sm:px-8 lg:px-16 w-full pb-24">
        <div className="flex flex-col lg:flex-row py-10 gap-5 lg:gap-10">
          <h2 className="text-2xl lg:text-4xl font-bold lg:w-1/3">Company History</h2>
          <p className="text-base lg:text-lg text-gray-700 lg:w-2/3">Sejak didirikan pada tahun 2015, <strong>CowBoys IT Solutions</strong> telah berkomitmen untuk memberikan solusi IT terbaik bagi bisnis di seluruh dunia. Dari awal yang sederhana, kami telah mencapai berbagai tonggak penting dalam industri.</p>
        </div>

        <div className="flex flex-col lg:flex-row py-10 gap-5 lg:gap-10">
          <h2 className="text-2xl lg:text-4xl font-bold lg:w-1/3">Team:</h2>
          <p className="text-base lg:text-lg text-gray-700 lg:w-2/3">Tim kami terdiri dari para profesional berpengalaman di bidang IT dan teknologi.</p>
        </div>

        <div className="flex flex-col lg:flex-row py-10 gap-5 lg:gap-10">
          <h2 className="text-2xl lg:text-4xl font-bold lg:w-1/3">Culture:</h2>
          <p className="text-base lg:text-lg text-gray-700 lg:w-2/3">Kami percaya pada kerja tim, inovasi, dan integritas. Budaya kami adalah tentang mendorong batasan teknologi dan menciptakan lingkungan kerja yang mendukung perkembangan pribadi dan profesional.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
