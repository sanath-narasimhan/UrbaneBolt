"use client"

export default function About() {
  return (
    <div>
      {/* Section 1: About Us - White background */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                About Us
              </h2>
              <p className="text-gray-600">
                We're committed to providing fast, reliable, and efficient delivery services, tailored to your specific needs. 
                Our team of experts leverages cutting-edge technology to streamline operations and ensure timely deliveries.
              </p>
              <p className="text-gray-600 mt-4">
                We have strategically launched our operations in Bangalore and Hyderabad, two major metropolitan cities in India. 
                These cities serve as ideal hubs for our logistics services, given their robust infrastructure and high demand for efficient delivery solutions.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <img 
                src="/images/about-1.jpg" 
                alt="About UrbaneBolt" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Vision - Dark background */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Image */}
            <div className="md:w-1/2">
              <img 
                src="/images/about-2.jpg" 
                alt="Our Vision" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-100">
                Our Vision
              </h2>
              <p className="text-gray-400">
                Urbanebolt is committed to becoming a one-stop shop for all logistics needs of organizations and businesses. 
                Our mission is to provide reliable, efficient, and innovative logistics solutions that cater to the diverse requirements of our clients.
              </p>
              <p className="text-gray-400 mt-4">
                With a strong focus on customer satisfaction, we're redefining the future of local logistics, making same-day delivery 
                the new standard across all metro Tier 1 cities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
