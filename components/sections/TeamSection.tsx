'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa6';

const teamMembers = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Visionary leader with 10+ years in AI automation.'
  },
  {
    name: 'David Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Architect behind the OneLearn platform.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Award-winning UI/UX expert crafting experiences.'
  },
  {
    name: 'Michael Ross',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Full-stack wizard specializing in React and Node.'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-orange-50/50">
      <Container>
        <div className="text-center mb-16">
          <h4 className="text-orange-500 font-bold uppercase tracking-wider mb-2">Our Experts</h4>
          <h2 className="text-4xl font-bold text-gray-900">Meet the Team</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The brilliant minds behind Ovanthra working tirelessly to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <a href="#" className="p-2 bg-gray-100 text-gray-600 hover:bg-orange-500 hover:text-white rounded-full transition-colors">
                    <FaLinkedinIn size={16} />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 text-gray-600 hover:bg-orange-500 hover:text-white rounded-full transition-colors">
                    <FaTwitter size={16} />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 text-gray-600 hover:bg-orange-500 hover:text-white rounded-full transition-colors">
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;