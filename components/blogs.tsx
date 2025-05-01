"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const blogsData = [
  {
    id: 1,
    title: "Do you really know fetch API?",
    excerpt:
      "Unlocking the Mysteries of the Fetch API: Beyond the Basics",
    image: "/Blog_Fetch_API.png",
    date: "May 25, 2024",
    readTime: "2 min read",
    url: "https://vedansh.hashnode.dev/unlocking-the-mysteries-of-the-fetch-api-beyond-the-basics",
  },
  {
    id: 2,
    title: "AWS for Beginners: A Simple Introduction",
    excerpt:
      "A beginner-friendly guide that explains core AWS concepts in a simple and easy-to-understand way for new learners.",
    image: "/Blog_WhatIsAWS.png",
    date: "July 13, 2023",
    readTime: "4 min read",
    url: "https://vedanshm.hashnode.dev/aws-for-beginners-a-simple-introduction",
  },
  {
    id: 3,
    title: "What is AWS community builder?",
    excerpt:
      "What is an AWS Community Builder? Let’s understand it in a very simple and beginner-friendly way.",
    image: "/Blog_WhatisAWS_Comminity.png",
    date: "July 12, 2023",
    readTime: "2 min read",
    url: "https://vedanshm.hashnode.dev/what-is-aws-community-builder",
  },
]

const Blogs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div ref={ref}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {blogsData.map((blog) => (
          <motion.div key={blog.id} variants={item}>
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription className="flex items-center text-sm text-slate-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  {blog.date} · {blog.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-600 dark:text-slate-400">{blog.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href={blog.url}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Blogs
