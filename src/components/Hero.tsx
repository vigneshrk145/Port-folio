import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mypdf from '../../public/file/vignesh-resume (2).pdf'


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive web experiences with modern technologies and clean code
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
            </a>
            <a href={mypdf} download rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/vigneshrk145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-r-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            
            {/* <a
              href="mailto:vignesh032rk@gmail.com"
              className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a> */}
          </div>


        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
