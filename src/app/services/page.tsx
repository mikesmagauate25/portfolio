import Reveal from "@/components/reveal";

const Page = () => {
  return (
    <div className="container max-w-[1480px] mx-auto px-2 lg:px-0  min-h-screen">
      <div className="max-w-3xl mx-auto mt-10">
        <Reveal>
          <div className="bg-white shadow-md rounded-md p-6 mb-6 service">
            <h2 className="text-xl font-semibold mb-2 service-title">
              Amazon Listing Optimization
            </h2>
            <p className="text-gray-700 service-description">
              Unlock the full potential of your Amazon listings with our expert
              optimization services. From keyword-rich product titles to
              compelling descriptions and eye-catching images, we ensure that
              your listings stand out and attract maximum visibility.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white shadow-md rounded-md p-6 mb-6 service">
            <h2 className="text-xl font-semibold mb-2 service-title">
              Amazon A+ Content Creation
            </h2>
            <p className="text-gray-700 service-description">
              Elevate your brand storytelling and engage customers on a deeper
              level with our Amazon A+ Content creative services. Through
              visually stunning imagery, captivating videos, and compelling
              copy, we help you convey your brand&apos;s unique value
              proposition and enhance the shopping experience for your
              customers.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white shadow-md rounded-md p-6 mb-6 service">
            <h2 className="text-xl font-semibold mb-2 service-title">
              Google Ads Optimization
            </h2>
            <p className="text-gray-700 service-description">
              Drive targeted traffic and boost your conversions with our Google
              Ads optimization strategies. From keyword research to ad
              copywriting and ongoing campaign management, we help you achieve
              optimal results and maximize your return on investment.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white shadow-md rounded-md p-6 mb-6 service">
            <h2 className="text-xl font-semibold mb-2 service-title">
              Amazon Store Design
            </h2>
            <p className="text-gray-700 service-description">
              Transform your Amazon store into a captivating and cohesive brand
              experience with our professional store design services. From
              layout design to branding elements and navigation optimization, we
              create a seamless shopping journey that reflects your brand
              identity and boosts customer confidence.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white shadow-md rounded-md p-6 mb-6 service">
            <h2 className="text-xl font-semibold mb-2 service-title">
              Web Design and WordPress Development
            </h2>
            <p className="text-gray-700 service-description">
              Whether you&apos;re starting from scratch or looking to revamp
              your existing website, our web design and WordPress development
              services are tailored to your needs. From responsive design to
              custom functionality and seamless integration with e-commerce
              platforms, we create visually stunning and user-friendly websites
              that drive results.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white shadow-md rounded-md p-6 mb-6 service">
            <h2 className="text-xl font-semibold mb-2 service-title">
              Data Entry Services
            </h2>
            <p className="text-gray-700 service-description">
              Simplify your workflow and ensure accuracy with our reliable data
              entry services. Whether it&apos;s updating product information,
              managing inventory or inputting customer data, our team is
              committed to delivering efficient and error-free results, allowing
              you to focus on growing your business.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Page;
