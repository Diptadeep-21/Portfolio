import bus from "../assets/bus1.png";
import learning from "../assets/learning1.png";
import hospital from "../assets/hospital1.png";
import network from "../assets/network.png";
import restaurant from "../assets/food.png";
import spotify from "../assets/spotify.png";


export const projects = [
  {
    title: "Glide-Way",
    description:
      "Full-stack bus booking platform with real-time tracking, role-based access, and analytics dashboard.",
    tech: "MERN Stack",
    github: "https://github.com/Diptadeep-21/Glide-Way",
    image: bus,
  },
  {
    title: "Accessible Learning Platform",
    description:
      "AI-powered platform with voice navigation and audio-based learning for visually impaired users.",
    tech: "MERN + Web Speech API",
    github:
      "https://github.com/Diptadeep-21/Accessible-Learning-Platform-for-Visually-Impaired",
    image: learning,
  },
  {
    title: "SmartClinic Queue",
    description:
      "Priority-based hospital queue system with real-time tracking and optimized doctor allocation.",
    tech: "Spring Boot + React",
    github: "https://github.com/Diptadeep-21/SmartClinic-Queue",
    image: hospital,
  },
  {
    title: "Network Intrusion Detection",
    description:
      "ML-based system using XGBoost to detect cyber threats from network traffic.",
    tech: "Python + XGBoost",
    github: "https://github.com/Diptadeep-21/Network-Intrusion-Detection",
    image: network,
  },
  {
    title: "Restaurant Management System",
    description:
      "Role-based system for managing orders and menus with efficient database design.",
    tech: "Laravel + PHP",
    github:
      "https://github.com/Diptadeep-21/Restaurant-Management-System",
    image: restaurant,
  },
  {
    title: "Soft Tunes",
    description:
      "Modern music streaming UI with responsive design and smooth UX.",
    tech: "React",
    github: "#",
    image: spotify,
  },
];