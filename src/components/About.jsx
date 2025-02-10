import { motion } from "framer-motion"
import {
  FaReact,
  FaHtml5,
  FaCss3
} from "react-icons/fa"
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
} from "react-icons/si"

const frontendSkills = [
  { name: "React", icon: FaReact, level: 70 },
  { name: "JavaScript", icon: SiJavascript, level: 75 },
  { name: "HTML5", icon: FaHtml5, level: 95 },
  { name: "CSS3", icon: FaCss3, level: 95 },
]

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, level: 50 },
  { name: "Express", icon: SiExpress, level: 45 },
  { name: "MongoDB", icon: SiMongodb, level: 70 },
  { name: "Git", icon: SiGit, level: 60 },

]

const SkillCard = ({ title, skills }) => (
  <motion.div
    className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-4 text-blue-400">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-base font-medium text-gray-300 flex items-center">
                <skill.icon className="mr-2" /> {skill.name}
              </span>
              <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
)

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Hi I'm Vedant , Full Stack Developer with a knack for creating user-friendly and visually appealing web experiences. I have a solid foundation in HTML5, CSS, React Js and JavaScript, which allows me to build responsive and engaging websites. My knowledge of Mongo DB helps me integrate and manage data seamlessly, ensuring that everything runs smoothly behind the scenes.

            I’m also comfortable with version control using Git and GitHub, which means I can work well in team settings and keep our codebase organized and up-to-date. Right now, I’m diving into Next JS to expand my toolkit and build even more dynamic web applications.

            I’m passionate about learning and always strive to keep up with the latest trends and best practices in web development. Let’s connect and see how we can collaborate on some exciting projects!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard title="Frontend Skills" skills={frontendSkills} />
          <SkillCard title="Backend Skills" skills={backendSkills} />
        </div>
      </div>
    </div>
  )
}

export default About

