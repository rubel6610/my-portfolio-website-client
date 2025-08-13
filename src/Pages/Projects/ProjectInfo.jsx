
import SpreadKnowledge from "../../assets/ProjectsImage/Spread-knowledge.png"
import FoodSave from "../../assets/ProjectsImage/FoodSave.png"
import PlantTracker from "../../assets/ProjectsImage/Plant-tracker.jpeg"

export const projectInfo = [
  {
    id: 1,
    name: "Food Donation Website",
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
    id: 2,
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
    id: 3,
    name: "Plant Tracker",
    img: PlantTracker,
    stack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "An application to help users track plant growth, watering schedules, and care tips.",
    liveLink: "https://plant-trackr.surge.sh/",
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