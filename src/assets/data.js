import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

// Features section
export const features = [
  {
    icon: "🟣",
    title: "Built for impact",
    description: "We identify and nurture a truly diverse team of designers, developers and marketers",
  },
  {
    icon: "🔴",
    title: "In sync with you",
    description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
  },
];

// Services section
export const services = [
  {
    icon: <BsStack className="w-8 h-8 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more",
  },
  {
    icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more",
  },
  {
    icon: <FiSettings className="w-8 h-8 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more",
  },
  {
    icon: <BiTime className="w-8 h-8 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more",
  },
];

// Testimonials section
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];

// Footer section
export const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  getHelp: [
    { name: "Support Carrer", href: "#" },
    { name: "24h Service", href: "#" },
    { name: "Quick Chat", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Policy", href: "#" },
    { name: "Business", href: "#" },
  ],
  contact: [
    { name: "WhatsApp", href: "#" },
    { name: "Support 24", href: "#" },
  ],
};