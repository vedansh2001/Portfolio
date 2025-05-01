import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Blogs from "@/components/blogs"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-slate-50 -mx-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <Projects />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tech Stack</h2>
          <Skills />
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="py-16 bg-slate-50 -mx-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>
            <Blogs />
            {/* <div className="text-center mt-8">
              <Link href="/blogs" className="inline-flex items-center text-slate-800 hover:text-slate-600 font-medium">
                View all blogs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div> */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <Contact />
        </section>
      </div>
    </main>
  )
}
