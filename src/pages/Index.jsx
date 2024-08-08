import { useState, useEffect } from 'react';
import { ChevronDown, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F2E8CF] text-[#6B4423] min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-4">Guillaume</h1>
          <p className="text-2xl mb-8">Founder of Vercel</p>
          <Button className="bg-[#D68C45] hover:bg-[#C17A3A] text-white">
            Learn More
          </Button>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} />
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507371341162-763b5e419408')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#D68C45]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#F2E8CF]">About Guillaume</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="Guillaume" className="rounded-lg shadow-lg mx-auto object-cover w-full h-[400px]" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <p className="text-lg mb-4 text-[#F2E8CF]">
                Guillaume is a visionary entrepreneur and the founder of Vercel, a cloud platform for static sites and Serverless Functions. With a passion for web development and performance optimization, Guillaume has revolutionized the way developers build and deploy web applications.
              </p>
              <p className="text-lg text-[#F2E8CF]">
                His innovative approach to frontend development has made Vercel a go-to platform for developers worldwide, enabling them to create fast, scalable, and user-friendly websites with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#AA5C39]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#F2E8CF]">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F2E8CF] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#6B4423]">Founded Vercel</h3>
              <p className="text-[#6B4423]">Created a powerful platform for frontend developers, revolutionizing web deployment.</p>
            </div>
            <div className="bg-[#F2E8CF] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#6B4423]">Next.js Framework</h3>
              <p className="text-[#6B4423]">Spearheaded the development of Next.js, a popular React framework for production.</p>
            </div>
            <div className="bg-[#F2E8CF] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#6B4423]">Industry Leader</h3>
              <p className="text-[#6B4423]">Recognized as a thought leader in the JAMstack and serverless ecosystems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#8C5E3B]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#F2E8CF]">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F2E8CF] p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4 text-[#6B4423]">"Guillaume's vision for Vercel has transformed the way we think about web development and deployment. His leadership is truly inspiring."</p>
              <p className="font-bold text-[#6B4423]">- Sarah Johnson, Senior Developer</p>
            </div>
            <div className="bg-[#F2E8CF] p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4 text-[#6B4423]">"Vercel has made our development process so much smoother. Guillaume's commitment to performance and user experience is evident in every aspect of the platform."</p>
              <p className="font-bold text-[#6B4423]">- Michael Chen, CTO of TechInnovate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#6B4423]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#F2E8CF]">Get in Touch</h2>
          <p className="text-xl mb-8 text-[#F2E8CF]">Interested in collaborating or learning more about Vercel?</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/vercel" target="_blank" rel="noopener noreferrer">
              <Github size={32} className="text-[#F2E8CF] hover:text-[#D68C45]" />
            </a>
            <a href="https://twitter.com/vercel" target="_blank" rel="noopener noreferrer">
              <Twitter size={32} className="text-[#F2E8CF] hover:text-[#D68C45]" />
            </a>
            <a href="https://www.linkedin.com/company/vercel" target="_blank" rel="noopener noreferrer">
              <Linkedin size={32} className="text-[#F2E8CF] hover:text-[#D68C45]" />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#D68C45]"
        style={{ width: `${(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
      ></div>
    </div>
  );
};

export default Index;
