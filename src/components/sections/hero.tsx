"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Rocket, Zap } from "lucide-react"

// Define types for motion components
type MotionDivProps = HTMLMotionProps<"div">
type MotionHeadingProps = HTMLMotionProps<"h1">
type MotionParagraphProps = HTMLMotionProps<"p">

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-20">
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <span className="px-3 py-1 text-sm border rounded-full">
              🚀 Transforming Ideas into Digital Reality
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Building the Future of
            <br />
            <span className="text-primary">Digital Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            We craft cutting-edge software solutions that empower businesses
            to thrive in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Custom Development",
                description: "Tailored solutions for your unique needs",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Rapid Delivery",
                description: "Fast and efficient development process",
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Scalable Solutions",
                description: "Built to grow with your business",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="p-6 rounded-lg border bg-card"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero 