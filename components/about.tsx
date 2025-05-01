"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong
          foundation in both frontend and backend technologies, I create seamless, user-friendly experiences that solve
          real-world problems.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          My journey in software development began from the 2nd year of college, and since then, I've worked on a diverse range of
          projects from e-commerce platforms to real-time applications and llms integration. I'm constantly learning and
          adapting to new technologies to stay at the forefront of web development.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or
          working on a side project. I believe in writing clean, maintainable code and creating applications that
          provide exceptional user experiences.
        </p>
      </div>
    </motion.div>
  )
}

export default About
