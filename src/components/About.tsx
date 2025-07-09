
import { Coffee, Code, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Passion for Code" }
  ];

  const interests = [
    { icon: Code, label: "Clean Code", description: "Writing maintainable, scalable code" },
    { icon: Lightbulb, label: "Innovation", description: "Exploring new technologies and trends" },
    { icon: Heart, label: "User Experience", description: "Creating delightful user interactions" },
    { icon: Coffee, label: "Coffee & Code", description: "Fueling creativity one cup at a time" }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Profile"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Hello, I'm a Frontend Developer</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                With over 3 years of experience in frontend development, I specialize in creating 
                beautiful, responsive, and user-friendly web applications. My journey started with 
                a curiosity about how websites work, and it has evolved into a passion for crafting 
                digital experiences that make a difference.
              </p>
              <p>
                I believe in the power of clean, efficient code and am constantly learning new 
                technologies to stay at the forefront of web development. When I'm not coding, 
                you'll find me exploring new design trends, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving to deliver 
                solutions that not only look great but perform exceptionally well across all devices 
                and browsers.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <interest.icon className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{interest.label}</h4>
              <p className="text-slate-300 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
