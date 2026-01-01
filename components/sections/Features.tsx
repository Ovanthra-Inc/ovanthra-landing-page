'use client';

import { motion } from 'motion/react';
import { Sparkles, Zap, Shield, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, staggerChild, viewportOnce } from '@/lib/animations';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Automation',
    description: 'Streamline your workflows with intelligent automation that learns and adapts to your business needs. Reduce manual tasks by up to 80%.',
  },
  {
    icon: Brain,
    title: 'Intelligent Learning Platform',
    description: 'Empower your team with personalized learning paths and AI-guided content generation. OneLearn adapts to each user\'s goals and performance.',
  },
  {
    icon: Zap,
    title: 'Real-Time Analytics',
    description: 'Make data-driven decisions with dynamic dashboards and predictive insights. Monitor performance and stay ahead with AI-powered forecasts.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built with security first. End-to-end encryption, biometric authentication, and AI threat detection keep your data safe at every layer.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:min-h-screen md:flex md:items-center bg-gray-50">
      <div className="container mx-auto px-4 w-full">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewportOnce}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything is Possible with AI
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            From intelligent automation to personalized learning, Ovanthra empowers businesses 
            to work smarter, faster, and more efficiently. Transform your workflow with AI.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12"
          variants={staggerContainer}
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewportOnce}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-start space-x-6"
              variants={staggerChild}
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-16 h-16 text-orange-500 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg transition-all"
          >
            <motion.a 
              href="#cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED WITH AI
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
