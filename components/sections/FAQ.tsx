'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Learn how to use the builder',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Create awesome accordions',
    answer:
      'Based on Bootstrap framework, our accordions provide a flexible and customizable way to organize your content. They work seamlessly across all devices and screen sizes.',
  },
  {
    question: 'Can I customize the styles?',
    answer:
      'Absolutely! You can easily modify colors, typography, and animations through CSS or your preferred framework. Each component is designed to be developer-friendly and flexible.',
  },
  {
    question: 'Is it mobile responsive?',
    answer:
      'Yes, all components are fully responsive and optimized for all screen sizes, ensuring a smooth user experience across desktops, tablets, and mobile devices.',
  },
  {
    question: 'Do I need any coding experience?',
    answer:
      'Not necessarily. Our builder offers a drag-and-drop interface, but developers can also dive into the code for advanced customization and functionality.',
  },
];


export default function FAQ() {
  return (
    <section className="py-20 md:min-h-screen md:flex md:items-center bg-white">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-16 max-w-6xl mx-auto">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-6">
              <MessageCircle className="w-12 h-12 text-orange-500 stroke-[1.5]" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Have questions?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              From logo design to video animation, web development to website copy, expert designers,
              developers and digital talent are ready to complete your projects.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-3 text-base font-semibold rounded-full shadow-lg transition-all hover:scale-105"
            >
              <a href="mailto:ovanthra@gmail.com">SEND US A MESSAGE</a>
            </Button>
          </div>

          <div className="flex-1 w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg bg-gray-50 px-6 data-[state=open]:bg-white transition-colors"
                >
                  <AccordionTrigger className="text-gray-800 font-semibold hover:text-orange-500 transition-colors text-left py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
