import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section className="relative bg-gray-900 py-16 md:py-24" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl" data-aos="fade-right">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-400" data-aos="fade-right" data-aos-delay="150">
                Ready to revolutionize your logistics? Contact us today for a customized solution.
              </p>
            </div>

            <div className="space-y-6" data-aos="fade-right" data-aos-delay="300">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                <a href="mailto:contact@urbanebolt.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@urbanebolt.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-blue-500" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6 text-blue-500" />
                <span className="text-gray-400">
                  123 Logistics Ave, Transport City, TC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-8" data-aos="fade-left">
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
} 