import { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    // Here you would typically send the form data to a server
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <FaEnvelope className="mr-2 text-blue-500" />
                vedantghole06@gmail.com
              </p>
              <p className="flex items-center text-gray-300">
                <FaPhone className="mr-2 text-blue-500" />
                +91 7743955542
              </p>
              <p className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                Nagpur, Maharashtra
              </p>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="name"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="email"
                placeholder="your@email.com"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                placeholder="Your message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
              ></textarea>
            </div>
            <motion.button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact

