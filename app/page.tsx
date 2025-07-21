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
      <section className="py-24 sm:py-32 relative overflow-hidden">
        {/* Organic Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 dark:from-blue-800/10 dark:to-cyan-800/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Transform Your Life Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                Spiritual Awakening
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience profound healing and self-empowerment through our
              comprehensive range of spiritual and holistic services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Energy Healing",
                description:
                  "Experience profound healing and self-empowerment through energetic healing techniques and spiritual awakening guidance.",
                color: "from-red-500 to-pink-500",
                bgColor:
                  "from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10",
              },
              {
                icon: Lightbulb,
                title: "Conscious Teaching",
                description:
                  "Navigate your path with clarity and purpose, becoming your own energetic healer and conscious teacher.",
                color: "from-yellow-500 to-orange-500",
                bgColor:
                  "from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10",
              },
              {
                icon: Sparkles,
                title: "Spiritual Awakening",
                description:
                  "Empower yourself with conscious teachings, harnessing the wisdom of inner work and spiritual evolution.",
                color: "from-purple-500 to-indigo-500",
                bgColor:
                  "from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10",
              },
              {
                icon: Users,
                title: "Community Building",
                description:
                  "Connect with like-minded souls and create supportive spiritual communities for collective growth.",
                color: "from-green-500 to-teal-500",
                bgColor:
                  "from-green-50 to-teal-50 dark:from-green-900/10 dark:to-teal-900/10",
              },
              {
                icon: Book,
                title: "Guided Resources",
                description:
                  "Access curated spiritual resources and materials to deepen your practice and accelerate your journey.",
                color: "from-blue-500 to-cyan-500",
                bgColor:
                  "from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10",
              },
              {
                icon: Award,
                title: "Personal Empowerment",
                description:
                  "Develop your inner strength and become your own source of light and transformation.",
                color: "from-violet-500 to-purple-500",
                bgColor:
                  "from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10",
              },
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 backdrop-blur-sm rounded-3xl"></div>
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-full mx-auto">
          <FeaturedEvents className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        {/* Organic Background Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-green-200/20 to-emerald-200/20 dark:from-green-800/10 dark:to-emerald-800/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                  Cores of Light
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                We are dedicated to spiritual awakening, energy healing, and
                conscious teaching. Our mission is to help you become your own
                source of light and empowerment through dedicated inner work.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white font-medium">
                    Energy Healing & Transformation
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white font-medium">
                    Conscious Teaching & Guidance
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white font-medium">
                    Global Impact & Community
                  </span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-3 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-lg transition-colors duration-300 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-3xl p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 backdrop-blur-sm rounded-3xl"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        Our Philosophy
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        We believe in the power of community, excellence in
                        teaching, and creating global impact through spiritual
                        awakening.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        Community Focus
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
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
      <section className="py-24 sm:py-32 relative overflow-hidden">
        {/* Organic Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 dark:from-blue-800/10 dark:to-cyan-800/10 rounded-full blur-3xl translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 dark:from-green-800/10 dark:to-emerald-800/10 rounded-full blur-3xl -translate-x-40 translate-y-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Spiritual{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                Resources
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover curated resources to support your spiritual awakening
              journey. From energy healing guides to conscious teaching
              materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Energy Healing Fundamentals",
                description:
                  "Learn the basics of energy healing and how to work with your own energy field for healing and transformation.",
                category: "Energy Healing",
                type: "Guide",
                bgColor:
                  "from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10",
              },
              {
                title: "Conscious Teaching Methods",
                description:
                  "Discover how to become a conscious teacher and guide others on their spiritual journey with wisdom and compassion.",
                category: "Teaching",
                type: "Course",
                bgColor:
                  "from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10",
              },
              {
                title: "Spiritual Awakening Practices",
                description:
                  "Essential practices and techniques to support your spiritual awakening and deepen your connection to your higher self.",
                category: "Awakening",
                type: "Practice Guide",
                bgColor:
                  "from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br ${resource.bgColor} rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 backdrop-blur-sm rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100/50 dark:bg-purple-900/30 px-4 py-2 rounded-full backdrop-blur-sm">
                      {resource.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/resources"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
