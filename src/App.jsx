import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"

// const pages = ["Home", "About", "Projects", "Contact"]

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home")

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="pt-20 px-4 sm:px-6 lg:px-8"
        >
          {currentPage === "Home" && <Home />}
          {currentPage === "About" && <About />}
          {currentPage === "Projects" && <Projects />}
          {currentPage === "Contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

