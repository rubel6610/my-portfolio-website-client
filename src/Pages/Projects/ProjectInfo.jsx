import SpreadKnowledge from "../../assets/ProjectsImage/Spread-knowledge.png"
import FoodSave from "../../assets/ProjectsImage/FoodSave.png"
import Ridex from "../../assets/ProjectsImage/ridex.png"
import PlantTracker from "../../assets/ProjectsImage/Plant-tracker.png"

export const projectInfo = [
 {
    id: 1,
    name: "RideX - Sharing Platform",
    img: Ridex,
    stack: ["NextJs", "Node.js", "MongoDB","ShadCn","Leaflet",   "Socket.io","GSAP","Tailwind CSS","React Query",],
    description:
    "RideX is a smart ride-sharing platform with AI integrated chatbot and content generating, real-time tracking, rider verification using face comparison, secure authentication, and an intuitive dashboard for users, riders, and admins. This was a team project where I led a team of 6 developers, responsible for architecture decisions, task delegation, and code reviews.",
    liveLink: "https://ridex-ride-sharing.vercel.app",
    repoLink: "https://github.com/rubel6610/RideX-Frontend",
    challenges: [
      "Integrating real-time updates Booking,Notification and Support Chat",
      "Ensuring secure authentication with JWT",
      "Coordinating tasks among 6 team members and maintaining code quality",
      "Implementing complex features like face verification and real-time tracking"
    ],
    futurePlans: [
      "Add AI-based Traffic and Map Controls",
      "Implement location-based different vehicle Systems.",
    ],
    isTeamProject: true,
    teamSize: 6,
    role: "Project Lead & Full Stack Developer"
  },
  {
    id: 2,
    name: "Full Stack Food Save",
    img: FoodSave,
    stack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    description:
      "A platform that connects donors with NGOs and volunteers to distribute surplus food to the needy.",
    liveLink: "https://sage-gumption-dbbe8e.netlify.app/",
    repoLink: "https://github.com/rubel6610/food-donation-client-side",
    challenges: [
      "Integrating real-time updates for donations.",
      "Ensuring secure authentication for donors and NGOs.",
    ],
    futurePlans: [
      "Add AI-based food demand prediction.",
      "Implement location-based donation suggestions.",
    ],
  },
  {
    id: 3,
    name: "Spread Knowledge",
    img: SpreadKnowledge,
    stack: ["React", "Tailwind CSS","Express", "MongoDB", ],
    description:
      "An educational platform where users can share knowledge through blogs, tutorials, and courses.",
    liveLink: "https://knowledge-spread.netlify.app/",
    repoLink: "https://github.com/rubel6610/spread-knowledge-client-side",
    challenges: [
      "Managing user-generated content moderation.",
      "Implementing SEO for better reach.",
    ],
    futurePlans: [
      "Add video lecture support.",
      "Integrate AI for personalized learning suggestions.",
    ],
  },
  {
    id: 4,
    name: "Plant Tracker",
    img: PlantTracker,
    stack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "An application to help users track plant growth, watering schedules, and care tips.",
    liveLink: "https://plant-trackr.netlify.app",
    repoLink: "https://github.com/rubel6610/plant-tracker--care-client-side",
    challenges: [
      "Implementing push notifications for watering reminders.",
      "Designing a clean and intuitive UI.",
    ],
    futurePlans: [
      "Add plant disease detection using image recognition.",
      "Allow sharing plant progress on social media.",
    ],
  },
];