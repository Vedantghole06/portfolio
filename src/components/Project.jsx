import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/ecommerce.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind Css"],
    category: "fullstack",
    link: "https://e-com-flame.vercel.app/",
    // github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 2,
    title: "Fraud Hunter",
    description: "A Authentication app built with Html, Css & Javascript",
    image: "/fraud.png",
    tags: ["Html", "Css", "Javascript", "Vercel"],
    category: "frontend",
    link: "https://fraud-hunter.vercel.app/",
    github: "https://github.com/Vedantghole06/FraudHunter",
  },
  {
    id: 3,
    title: "Copy Cat AI",
    description: "An analytics dashboard for social media platforms",
    image: "/copycat.png",
    tags: ["Next.js", "Open AI", "Tailwind Css", "Vercel"],
    category: "fullstack",
    link: "https://copy-cat-omega.vercel.app/",
    github: "https://github.com/Vedantghole06/CopyCat",
  },
  {
    id: 4,
    title: "Tars Tech",
    description: "A Tars Consultancy Website",
    image: "/tars.png",
    tags: ["React", "Node.js", "Express", "Cloudinary", "MongoDB"],
    category: "fullstack",
    link: "https://tars-tech.vercel.app/",
    // github: "https://github.com/yourusername/weather-forecast-app",
  },
  {
    id: 5,
    title: "WildSoul Safaries",
    description: "A WildLife Safaries Booking Website",
    image: "/wildsoul.png",
    tags: ["React", "Node.js", "Express", "Vercel"],
    category: "fullstack",
    link: "https://wildsoulsafaris.vercel.app/",
    // github: "https://github.com/yourusername/weather-forecast-app",
  },
  {
    id: 6,
    title: "My Portfolio",
    description: "A Personalize Portfolio",
    image: "/portfolio.png",
    tags: ["React", "Tailwind Css", "Vercel"],
    category: "frontend",
    link: "https://vedant06-portfolio.vercel.app/",
    github: "https://github.com/Vedantghole06/portfolio",
  },
  {
    id: 7,
    title: "Invoice Generator",
    description: "A Invoice Generator that generates invoices in seconds",
    image: "/invoice.png",
    tags: ["React", "Css", "Vercel"],
    category: "frontend",
    link: "https://invoicegenerator06.netlify.app/",
    github: "https://github.com/Vedantghole06/Invoice_generator",
  },
]

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-blue-600 text-xs font-semibold rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaExternalLinkAlt className="mr-2" />
          View Project
        </motion.a>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="mr-2" />
          GitHub
        </motion.a>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="flex justify-center space-x-4 mb-8">
          {["all", "frontend", "fullstack"].map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === category ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Projects

