import Image from 'next/image';

const Services = () => {
  return (
    <section className="max-container py-24 padding-container">
      <div className="text-center mb-12">
        <h2 className="bold-40 lg:bold-64">Our Services</h2>
        <p className="regular-16 text-gray-30">We offer a wide range of services to meet your IT needs.</p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:flex-wrap lg:justify-center">
        <div className="flex flex-col lg:flex-row gap-6 bg-gray-10 p-6 rounded-lg shadow-md w-full lg:w-[48%] hover:shadow-2xl">
          <div className="relative w-full h-32 lg:w-48 lg:h-auto flex-shrink-0">
            <Image src="/software-dev.jpg" alt="Custom Software Development" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div>
            <h3 className="bold-32 pb-10">Custom Software Development Services</h3>
            <p className="regular-16 text-gray-30">
              We are considering the software development services support all stages of the application life cycle from requirements through design, test, and implementation. We are experts on delivering innovative business solutions to address the key goals of your organization. Our Division of Application Development has many experiences for developing applications using Java, PHP, .NET for Intranet/Internet Application including Mobile Application Development.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 bg-gray-10 p-6 rounded-lg shadow-md w-full lg:w-[48%] hover:shadow-2xl">
          <div className="relative w-full h-32 lg:w-48 lg:h-auto flex-shrink-0">
            <Image src="/integration-service.jpg" alt="Middleware / Integration Services" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div>
            <h3 className="bold-32 pb-10">Middleware / Integration Services</h3>
            <p className="regular-16 text-gray-30">
              Rapid deployment services from Quadra can help you speed up time to value by providing an integrated solution for complex, multiproduct deployments. We help you manage complexities and realize new opportunities by integrating disparate systems into seamless process flows with a range of our middleware service.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 bg-gray-10 p-6 rounded-lg shadow-md w-full lg:w-[48%] hover:shadow-2xl">
          <div className="relative w-full h-32 lg:w-48 lg:h-auto flex-shrink-0">
            <Image src="/managed-it.jpg" alt="Managed Services" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div>
            <h3 className="bold-32 pb-10">Managed Services</h3>
            <p className="regular-16 text-gray-30">
              We understand how significant it is for you to maintain and focus on your business operation. Quadra can help you in day-to-day management responsibility and function as a strategic method for improving IT operations. Quadra as a Manage Service Provider manages and assumes responsibility for providing a defined set of services to its clients either proactively or as the MSP determines that services are needed.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 bg-gray-10 p-6 rounded-lg shadow-md w-full lg:w-[48%] hover:shadow-2xl">
          <div className="relative w-full h-32 lg:w-48 lg:h-auto flex-shrink-0">
            <Image src="/data-warehouse.jpg" alt="Data Warehouse Business Intelligence" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div>
            <h3 className="bold-32 pb-10">Data Warehouse Business Intelligence</h3>
            <p className="regular-16 text-gray-30">
              We are capable in the area of Database Services including Backup Recovery, Maintenance, Tuning and Data Warehousing. Another expertise Quadra may bring to your organization is in Business Intelligence area. Business Intelligence technologies are capable of handling large amounts of unstructured data to help identify, develop and otherwise create new strategic business opportunities.
            </p>
          </div>
        </div>
      
      
      </div>
    </section>
  );
};

export default Services;
