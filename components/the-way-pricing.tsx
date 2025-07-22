import { PricingSection } from "@/components/ui/pricing-section"
import { Heart, Sparkles, Crown } from "lucide-react"

const theWayTiers = [
  {
    name: "Seeker",
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Begin your spiritual journey with essential tools and resources",
    icon: <Heart className="w-8 h-8 text-slate-600" />,
    features: [
      {
        name: "5 Messages Per Month",
        description: "Limited conversations with WayFinder AI",
        included: true,
      },
      {
        name: "Free Faith Resources",
        description: "Access to curated spiritual content and materials",
        included: true,
      },
      {
        name: "Basic Scripture Insights",
        description: "Essential biblical guidance and context",
        included: true,
      },
      {
        name: "Community Access",
        description: "Join discussions with fellow believers",
        included: true,
      },
      {
        name: "Advanced AI Features",
        description: "Full WayFinder AI capabilities",
        included: false,
      },
    ],
    buttonText: "Start Free",
  },
  {
    name: "Disciple",
    price: {
      monthly: 19.99,
      yearly: 191.9, // 20% discount
    },
    description: "Unlock the full power of WayFinder AI for deeper spiritual growth",
    highlight: true,
    badge: "Most Popular",
    icon: <Sparkles className="w-8 h-8 text-slate-700" />,
    features: [
      {
        name: "Unlimited WayFinder AI",
        description: "Full access to our Christ-centered AI assistant",
        included: true,
      },
      {
        name: "Advanced AI Model Access",
        description: "Including upcoming enhanced capabilities",
        included: true,
      },
      {
        name: "Complete Resource Library",
        description: "All premium faith resources and materials",
        included: true,
      },
      {
        name: "Personalized Spiritual Guidance",
        description: "AI that understands your unique journey",
        included: true,
      },
      {
        name: "Early Access to New Features",
        description: "Be first to experience latest updates",
        included: true,
      },
    ],
    buttonText: "Begin Your Journey",
  },
  {
    name: "Apostle",
    price: {
      monthly: 49.99,
      yearly: 479.9,
    },
    description: "Advanced features for spiritual leaders and those called to greater impact",
    icon: <Crown className="w-8 h-8 text-slate-600" />,
    comingSoon: true,
    features: [
      {
        name: "Everything in Disciple",
        description: "All features from the Disciple plan",
        included: true,
      },
      {
        name: "Leadership Tools",
        description: "Resources for discipling and leading others",
        included: true,
      },
      {
        name: "Advanced Analytics",
        description: "Insights into your spiritual growth journey",
        included: true,
      },
      {
        name: "Priority Support",
        description: "Direct access to our team for guidance",
        included: true,
      },
      {
        name: "Custom Integrations",
        description: "Connect with your favorite spiritual tools",
        included: true,
      },
    ],
  },
]

export function TheWayPricing() {
  return <PricingSection tiers={theWayTiers} />
}
