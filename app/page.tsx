import FeaturedEvents from "@/components/FeaturedEvents";
import Hero from "@/components/Hero";
import {
  ArrowRight,
  Award,
  Book,
  Globe,
  Heart,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cores of Light - Spiritual Awakening & Holistic Wellness",
  description:
    "Ignite your inner potential with intuitive guidance, energy healing, and personalized self-discovery journeys. Experience spiritual awakening through yoga, meditation, and holistic therapies.",
  keywords:
    "spiritual awakening, energy healing, holistic wellness, yoga, meditation, self-discovery, conscious teaching, personal empowerment",
};

// Force dynamic rendering to always fetch fresh data
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <Hero />

      {/* Services Overview Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Life Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                Spiritual Awakening
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience profound healing and self-empowerment through our
              comprehensive range of spiritual and holistic services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Energy Healing",
                description:
                  "Experience profound healing and self-empowerment through energetic healing techniques and spiritual awakening guidance.",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: Lightbulb,
                title: "Conscious Teaching",
                description:
                  "Navigate your path with clarity and purpose, becoming your own energetic healer and conscious teacher.",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Sparkles,
                title: "Spiritual Awakening",
                description:
                  "Empower yourself with conscious teachings, harnessing the wisdom of inner work and spiritual evolution.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: Users,
                title: "Community Building",
                description:
                  "Connect with like-minded souls and create supportive spiritual communities for collective growth.",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: Book,
                title: "Guided Resources",
                description:
                  "Access curated spiritual resources and materials to deepen your practice and accelerate your journey.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Award,
                title: "Personal Empowerment",
                description:
                  "Develop your inner strength and become your own source of light and transformation.",
                color: "from-violet-500 to-purple-500",
              },
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 sm:py-24 ">
        <div className="max-w-full mx-auto">
          <FeaturedEvents className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                  Cores of Light
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We are dedicated to spiritual awakening, energy healing, and
                conscious teaching. Our mission is to help you become your own
                source of light and empowerment through dedicated inner work.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    Energy Healing & Transformation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    Conscious Teaching & Guidance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    Global Impact & Community
                  </span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Our Philosophy
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We believe in the power of community, excellence in
                        teaching, and creating global impact through spiritual
                        awakening.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Community Focus
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Building supportive spiritual communities that foster
                        collective growth and transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Spiritual{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                Resources
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover curated resources to support your spiritual awakening
              journey. From energy healing guides to conscious teaching
              materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Energy Healing Fundamentals",
                description:
                  "Learn the basics of energy healing and how to work with your own energy field for healing and transformation.",
                category: "Energy Healing",
                type: "Guide",
              },
              {
                title: "Conscious Teaching Methods",
                description:
                  "Discover how to become a conscious teacher and guide others on their spiritual journey with wisdom and compassion.",
                category: "Teaching",
                type: "Course",
              },
              {
                title: "Spiritual Awakening Practices",
                description:
                  "Essential practices and techniques to support your spiritual awakening and deepen your connection to your higher self.",
                category: "Awakening",
                type: "Practice Guide",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/resources"
              className="inline-flex items-center space-x-2 bg-purple-600 dark:bg-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      {/* <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                Us
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to begin your spiritual awakening journey? Get in touch with
              us to learn more about our services and upcoming events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">thasos111@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+357 000000000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Feidiou 14, Lemesos 3075
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <Link
                  href="/events"
                  className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      View Events
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      Learn About Us
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link
                  href="/resources"
                  className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Book className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      Browse Resources
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
