import { Book, Heart, Lightbulb, Sparkles, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Cores of Light | Spiritual Awakening & Wellness",
  description:
    "Discover curated spiritual resources, energy healing guides, and conscious teaching materials to support your spiritual awakening journey.",
  keywords: [
    "spiritual resources",
    "energy healing guides",
    "conscious teaching",
    "meditation resources",
    "spiritual awakening",
    "self-discovery materials",
  ],
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6">
            <Book className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Spiritual{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Resources
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover curated resources to support your spiritual awakening
            journey. From energy healing guides to conscious teaching materials,
            find everything you need for your path of self-discovery.
          </p>
        </div>

        {/* Featured Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked materials to deepen your spiritual practice and
              accelerate your awakening journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Energy Healing Fundamentals",
                description:
                  "Learn the basics of energy healing and how to work with your own energy field for healing and transformation.",
                icon: Heart,
                category: "Energy Healing",
                type: "Guide",
              },
              {
                title: "Conscious Teaching Methods",
                description:
                  "Discover how to become a conscious teacher and guide others on their spiritual journey with wisdom and compassion.",
                icon: Lightbulb,
                category: "Teaching",
                type: "Course",
              },
              {
                title: "Spiritual Awakening Practices",
                description:
                  "Essential practices and techniques to support your spiritual awakening and deepen your connection to your higher self.",
                icon: Sparkles,
                category: "Awakening",
                type: "Practice Guide",
              },
              {
                title: "Community Building",
                description:
                  "Learn how to create and nurture spiritual communities that support collective awakening and transformation.",
                icon: Users,
                category: "Community",
                type: "Workshop",
              },
              {
                title: "Inner Work Techniques",
                description:
                  "Advanced techniques for deep inner work and self-discovery to unlock your full spiritual potential.",
                icon: Heart,
                category: "Self-Discovery",
                type: "Advanced Guide",
              },
              {
                title: "Meditation & Mindfulness",
                description:
                  "Deepen your meditation practice with guided sessions and mindfulness techniques.",
                icon: Heart,
                category: "Meditation",
                type: "Audio Collection",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">
                    {resource.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {resource.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resource Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Resource Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of spiritual resources
              organized by category to support your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Energy Healing",
                description:
                  "Comprehensive guides and practices for energy healing, chakra balancing, and energetic wellness.",
                resources: [
                  "Chakra Balancing Techniques",
                  "Energy Field Protection",
                  "Healing Touch Methods",
                  "Aura Cleansing Practices",
                ],
              },
              {
                title: "Spiritual Awakening",
                description:
                  "Resources to support your spiritual awakening journey and deepen your connection to higher consciousness.",
                resources: [
                  "Consciousness Expansion",
                  "Higher Self Connection",
                  "Spiritual Integration",
                  "Awakening Practices",
                ],
              },
              {
                title: "Conscious Teaching",
                description:
                  "Learn how to become an effective spiritual teacher and guide others on their awakening path.",
                resources: [
                  "Teaching Methodologies",
                  "Student Guidance",
                  "Classroom Management",
                  "Curriculum Development",
                ],
              },
              {
                title: "Self-Discovery",
                description:
                  "Tools and techniques for deep self-exploration and personal transformation.",
                resources: [
                  "Shadow Work Practices",
                  "Inner Child Healing",
                  "Personal Boundaries",
                  "Self-Awareness Tools",
                ],
              },
              {
                title: "Community Building",
                description:
                  "Resources for creating and nurturing spiritual communities and collective consciousness.",
                resources: [
                  "Group Dynamics",
                  "Sacred Space Creation",
                  "Collective Healing",
                  "Community Leadership",
                ],
              },
              {
                title: "Meditation & Mindfulness",
                description:
                  "Guided meditations, mindfulness practices, and techniques for deepening your practice.",
                resources: [
                  "Guided Meditations",
                  "Breathwork Techniques",
                  "Mindfulness Practices",
                  "Meditation Retreats",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.resources.map((resource, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {resource}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Audio & Video Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Audio & Video Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in our collection of audio and video content
              designed to support your spiritual journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Guided Meditations
                </h3>
                <p className="text-muted-foreground mb-6">
                  Access our library of guided meditations for spiritual
                  awakening, energy healing, and conscious awareness.
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                  Listen Now
                </button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Teaching Videos
                </h3>
                <p className="text-muted-foreground mb-6">
                  Watch in-depth teachings on spiritual awakening, energy
                  healing, and conscious living practices.
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            Access Your Spiritual Resources
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join our community to access exclusive spiritual resources and
            deepen your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors duration-200">
              Join Community
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
