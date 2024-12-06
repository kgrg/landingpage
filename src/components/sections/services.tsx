"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Bot, 
  Globe 
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Custom Software Development",
    description: "Tailored solutions designed to meet your specific business needs and challenges.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that power your digital transformation.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Database Management",
    description: "Robust database solutions ensuring data security, performance, and reliability.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage cutting-edge AI and ML technologies.",
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Web Development",
    description: "Modern web applications built with the latest technologies and best practices.",
    color: "bg-cyan-500/10 text-cyan-500"
  }
]

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5
    }
  })
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of software development services
            to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="group relative overflow-hidden rounded-lg border bg-background p-8 hover:shadow-lg transition-shadow"
            >
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity", service.color.split(' ')[0] + "/5")} />
              <div className={cn("relative rounded-full w-16 h-16 flex items-center justify-center mb-4", service.color)}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 