import InteractiveMap from "@/components/InteractiveMap";
import {
  Award,
  Globe,
  Heart,
  Lightbulb,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Cores of Light | Spiritual Awakening & Wellness",
  description:
    "Learn about Cores of Light's mission to support spiritual awakening, energy healing, and conscious teaching. Discover our philosophy and services.",
  keywords: [
    "spiritual awakening",
    "energy healing",
    "conscious teaching",
    "cores of light",
    "spiritual wellness",
    "inner work",
    "self-discovery",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Cores of Light
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are dedicated to spiritual awakening, energy healing, and
            conscious teaching. Our mission is to help you become your own
            source of light and empowerment through dedicated inner work.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To guide individuals on their spiritual awakening journey through
              energy healing, conscious teaching, and personalized
              self-discovery experiences.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Energy Healing
                  </h3>
                  <p className="text-muted-foreground">
                    Experience profound healing and self-empowerment through
                    energetic healing techniques and spiritual awakening
                    guidance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Conscious Teaching
                  </h3>
                  <p className="text-muted-foreground">
                    Navigate your path with clarity and purpose, becoming your
                    own energetic healer and conscious teacher.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/60 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Self-Discovery
                  </h3>
                  <p className="text-muted-foreground">
                    Empower yourself with conscious teachings, harnessing the
                    wisdom of inner work and spiritual evolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of spiritual awakening and the journey of
              self-discovery. Our teachings are rooted in ancient wisdom and
              modern consciousness practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Community
              </h3>
              <p className="text-muted-foreground">
                We foster a supportive community of spiritual seekers, healers,
                and conscious teachers who share the journey of awakening and
                transformation.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Excellence
              </h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in spiritual teaching and
                energy healing, ensuring authentic and transformative
                experiences for all participants.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Global Impact
              </h3>
              <p className="text-muted-foreground">
                Our mission extends beyond individual transformation to create
                positive change in the world through conscious awareness and
                spiritual evolution.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive range of spiritual and wellness services
              designed to support your journey of awakening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Energy Healing Sessions",
              "Spiritual Counseling",
              "Conscious Teaching Programs",
              "Meditation & Mindfulness",
              "Chakra Balancing",
              "Crystal Healing",
              "Sound Healing Therapy",
              "Personal Empowerment Coaching",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Contact Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Visit Our Studio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the transformative energy of our sacred space in the
              heart of Lemesos.
            </p>
          </div>

          <div className="max-w-full mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                Find Us
              </h3>
              <InteractiveMap height="384px" />
              <p className="text-center text-sm text-muted-foreground mt-3">
                Click on the map to open in Google Maps
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
