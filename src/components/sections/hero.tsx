"use client"

import { MotionDiv, MotionH1, MotionP } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Award-winning Development Team
              </div>
              
              <MotionH1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Build Better Software,
                <br />
                <span className="text-primary">Faster</span>
              </MotionH1>

              <MotionP
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl"
              >
                Expert software development that turns complex challenges into elegant solutions. 
                Let&apos;s build something great together.
              </MotionP>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </MotionDiv>

              {/* Trust Signals */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12"
              >
                <p className="text-sm text-muted-foreground mb-4">
                  TRUSTED BY INDUSTRY LEADERS
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  {/* Replace with actual client logos */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-8 w-24 bg-muted/30 rounded animate-pulse" />
                  ))}
                </div>
              </MotionDiv>
            </MotionDiv>

            {/* Right Column - Dashboard Preview */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative lg:block"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border bg-background">
                {/* Header Bar */}
                <div className="flex items-center gap-2 p-4 border-b bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 h-6 bg-muted/30 rounded-md" />
                </div>
                
                {/* Content Area */}
                <div className="aspect-[16/10] relative bg-gradient-to-br from-background to-muted p-4">
                  <div className="grid grid-cols-12 gap-4 h-full">
                    {/* Sidebar */}
                    <div className="col-span-3 bg-card rounded-lg p-3 space-y-3">
                      <div className="h-8 bg-muted/50 rounded-md" />
                      <div className="space-y-2">
                        {[1,2,3,4].map((i) => (
                          <div key={i} className="h-6 bg-muted/30 rounded-md" />
                        ))}
                      </div>
                    </div>

                    {/* Main Content - Updated Chart Design */}
                    <div className="col-span-9 space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        {[1,2,3].map((i) => (
                          <div key={i} className="h-24 bg-card rounded-lg p-3">
                            <div className="h-4 w-20 bg-muted/30 rounded mb-2" />
                            <div className="h-8 w-16 bg-primary/10 rounded" />
                          </div>
                        ))}
                      </div>

                      {/* Updated Chart Area */}
                      <div className="h-[200px] bg-card rounded-lg p-4">
                        <div className="h-4 w-32 bg-muted/30 rounded mb-4" />
                        <div className="relative h-[140px]">
                          {/* New Chart Design */}
                          <div className="absolute inset-0 flex items-end">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                              <div
                                key={i}
                                className="flex-1 mx-1"
                                style={{
                                  height: `${30 + Math.random() * 70}%`,
                                  background: `linear-gradient(to top, var(--primary) ${20 + i * 10}%, transparent)`
                                }}
                              />
                            ))}
                          </div>
                          {/* Grid Lines */}
                          <div className="absolute inset-0 grid grid-rows-4">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className="border-t border-muted/20"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/20 rounded-lg blur-2xl" />
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-primary/10 rounded-lg blur-2xl" />
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 