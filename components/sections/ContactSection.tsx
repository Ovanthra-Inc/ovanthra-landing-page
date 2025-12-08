'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form Data:', data);
    toast.success('Message sent successfully! We will get back to you soon.');
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information & Map */}
          <div className="space-y-8">
            <div>
              <h4 className="text-orange-500 font-bold tracking-wider uppercase mb-2">Get in Touch</h4>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's start a conversation</h2>
              <p className="text-gray-600">
                Have a project in mind? Looking for a partner to help you build your next big thing? 
                Reach out to us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Our Location</h5>
                  <p className="text-gray-600">123 Innovation Drive, Tech Valley, CA 94043</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Email Us</h5>
                  <p className="text-gray-600">hello@ovanthra.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Call Us</h5>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Embedded Map (Iframe) */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner mt-8 border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.628236506486!2d-122.08373968469227!3d37.42206597982452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615852277024!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input 
                    id="name"
                    placeholder="John Doe" 
                    className="focus-visible:ring-orange-500"
                    {...register('name', { required: 'Name is required' })} 
                  />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com" 
                    className="focus-visible:ring-orange-500"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })} 
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input 
                  id="subject"
                  placeholder="Project Inquiry" 
                  className="focus-visible:ring-orange-500"
                  {...register('subject', { required: 'Subject is required' })} 
                />
                {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message}</span>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about your project..."
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
              >
                {isSubmitting ? 'Sending...' : (
                  <span className="flex items-center gap-2">
                    Send Message <Send size={18} />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;