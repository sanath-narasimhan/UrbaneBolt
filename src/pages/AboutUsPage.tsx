import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 ">
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[35vh] flex items-center justify-center pb-6 bg-[#007632]">
        <div className="absolute inset-0 z-0">
        <img
            src="/carousel/sdd.jpg"
            alt="Services Background"
            className="w-full h-full object-cover brightness-50 "
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center opacity-75 z-10">
          About UrbaneBolt
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 mt-4 max-w-4xl">
        {/* Company Overview Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#007632] mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
          Our Technology Orchestrates, humans deliver your dreams to your doorstep<br/>

            Forget the robots, ditch the drones. We're delivering your orders on the same day, fuelled by the smartest tech and the strongest hearts in your city.<br/>
            <b>Introducing UrbaneBolt:</b><br/> The symphony of tech and human hustle. We don't just automate, we empower. Our tech maestro conducts the orchestra, optimizing routes, predicting demand, and matching deliveries with local heroes: your neighbours, your friends, the people who know your city like the back of their hand.<br/>

            Our tech maestro uses real-time data to dance around gridlock, predict peak times, and choreograph the perfect delivery ballet.
            We handpick and train local heroes, people who care about your package like it's their own.
            Our intuitive app connects everyone, creating a transparent, feel-good experience from click to door knock.
            UrbaneBolt is more than a delivery service. We're reimagining community, one package at a time. We're empowering & fuelling businesses and creating a greener future for deliveries.<br/>

            A future where delivery isn't just a transaction, but a connection. A future where technology lifts humans up, not replaces them.<br/>

            Are you ready to <span style={{ color: '#40AC49' }}>BOLT</span> with us?
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#]">
            <p className="text-gray-600 italic">
              With a strong focus on customer satisfaction, we're redefining the future of local logistics.
            </p>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
          <h2 className="text-2xl font-bold text-[#007632] mb-6">
            Our Headquarters
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#007632] rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Bengaluru, Karnataka</h3>
              <p className="text-gray-600">Strategic Hub for Innovation and Operations</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-[#007632] rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#007632]">Our Vision & Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To become a one-stop shop for all logistics needs of organizations and businesses, setting new standards in the industry through innovation and excellence. Our mission is to provide reliable, efficient, and innovative logistics solutions that cater to the diverse requirements of our clients. We have strategically launched our operations in Bengaluru and Hyderabad, two major metropolitan cities in India. These cities serve as ideal hubs for our logistics services, given their robust infrastructure and high demand for efficient delivery solutions.
          </p>
        </div>
      </div>
      <div id="contact" className="scroll-mt-20 relative z-20">
            
            
            <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage; 