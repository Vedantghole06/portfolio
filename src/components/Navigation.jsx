import { motion } from "framer-motion"

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = ["Home", "About", "Projects", "Contact"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0 text-2xl font-bold text-blue-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            VG
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === item ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setCurrentPage(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.button
              key={item}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                currentPage === item ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setCurrentPage(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

