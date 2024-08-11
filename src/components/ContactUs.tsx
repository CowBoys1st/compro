const ContactUs = () => {
  return (
    <section id="contact-us" className="flexCenter max-container flex-col py-5 mb-10 lg:py-10">
      <div className="max-container w-full get-app padding-container">
        <div className="text-center">
          <h2 className="bold-32 lg:bold-52 text-white">
            Contact Us
          </h2>
          <p className="regular-16 text-white mt-4 lg:max-w-[600px] mx-auto">
            We would love to hear from you. Please fill out the form below, and we will get in touch with you as soon as possible.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-8">
          <form className="flex-1 bg-white p-6 shadow-lg rounded-3xl">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input-field"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input-field"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="input-field"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-gray-50 text-white py-3 px-6 rounded-lg hover:bg-gray-30"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="flex-1 bg-gray-50 p-6 text-white shadow-lg rounded-3xl flex flex-col justify-between">
            <h3 className="bold-64 sm:bold-40 mb-4 text-center">Get in Touch</h3>
            <p className="regular-24 mb-6 text-center">
              You can reach us by phone, email, or visit our office at the address below.
            </p>
            <div className="space-y-4">
              <p><strong>Phone:</strong> +62 858 4007 9641</p>
              <p><strong>Email:</strong> cowboysit@solution.com</p>
              <p><strong>Address:</strong> Jl. Rusak No. 33 Tangerang, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
