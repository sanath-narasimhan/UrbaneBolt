"use client"


import { BuildingOffice2Icon, RocketLaunchIcon } from '@heroicons/react/24/solid';

export default function About() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gray-900 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 text-gray-100">About UrbaneBolt</h1>
            <p className="text-xl text-gray-400">
              A leading hyperlocal logistics startup revolutionizing same-day delivery in all metro Tier 1 cities.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {/* About description */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-gray-600 mb-6">
                We're committed to providing fast, reliable, and efficient delivery services, tailored to your specific needs. 
                Our team of experts leverages cutting-edge technology to streamline operations and ensure timely deliveries. 
                With a strong focus on customer satisfaction, we're redefining the future of local logistics.
              </p>
            </div>

            {/* Headquarters info */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <BuildingOffice2Icon className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Headquartered in Bengaluru, Karnataka</h2>
              </div>
              <p className="text-blue-100">
                We have strategically launched our operations in Bangalore and Hyderabad, two major metropolitan cities in India. 
                These cities serve as ideal hubs for our logistics services, given their robust infrastructure and high demand for efficient delivery solutions.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <RocketLaunchIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision & Mission</h2>
              </div>
              <p className="text-gray-600">
                Urbanebolt is committed to becoming a one-stop shop for all logistics needs of organizations and businesses. 
                Our mission is to provide reliable, efficient, and innovative logistics solutions that cater to the diverse requirements of our clients.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
