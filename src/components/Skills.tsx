
import { Code2, Database, Globe, Smartphone, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile & Responsive",
      skills: ["React Native", "Progressive Web Apps", "Mobile-First Design", "Cross-Platform"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["Tailwind CSS", "Figma", "Adobe XD", "Responsive Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Backend & Tools",
      skills: ["Node.js", "Firebase", "MongoDB", "Git", "Webpack"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["REST APIs", "GraphQL", "WebSockets", "Service Workers"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Performance",
      skills: ["Optimization", "SEO", "Accessibility", "Testing"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-600/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
