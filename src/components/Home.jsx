import { motion } from "framer-motion"
import Image from "../assets/profile.jpg"

const Home = () => {
  return (
    <div className="min-h-min flex flex-col justify-center items-center">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={Image}
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full border-4 border-blue-500"
        />
      </motion.div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Vedant Ghole
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-400 mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Full Stack Developer
      </motion.p>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {["React", "Node.js", "MongoDB", "Express"].map((tech) => (
          <motion.div
            key={tech}
            className="bg-gray-800 p-4 rounded-lg text-center"
            whileHover={{ scale: 1.05, backgroundColor: "#4A5568" }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="font-semibold text-gray-300">{tech}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Home

