import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "CRM House Vacating Platform",
      description: "5AAB helps customers by providing a house vacating platform through the CRM panel.",
      image: "https://portfolio-zeta-seven-z8ij54kyt5.vercel.app/static/media/5aab.59cc657fab2e3196607f.png",
      technologies: ["React Js", "Next.Js 15", "MUI"],
      liveUrl: "https://5aabadminctrl.vercel.app",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Ecommerce Web Application",
      description: "Gemtrove is an e-commerce web application focused on selling diamonds online and providing a seamless customer user experience..",
      image: "https://portfolio-zeta-seven-z8ij54kyt5.vercel.app/static/media/gemtrove.50202f5495883ba5c00a.png",
      technologies: ["React Js", "Next.Js 15", "Tailwind Css"],
      liveUrl: "https://gemtrove.com.au/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "CRM",
      description: "Workplace Sherpa is an IT park administration company related to workplace services..",
      image: "https://portfolio-zeta-seven-z8ij54kyt5.vercel.app/static/media/workplacesherpa.57577f94ea159efb0983.png",
       technologies: ["React Js", "Next.Js 15", "MUI"],
      liveUrl: "https://foodiewebapp.vercel.app/",
      githubUrl: "#",
     featured: true
    },
    {
      title: "CRM",
      description: "Our service manages vending machine product listings, detailed product information, and transaction records. Administrators have access to all essential information through the dashboard..",
      image: "https://portfolio-zeta-seven-z8ij54kyt5.vercel.app/static/media/my-service.c7953169fc2be0b0eddd.png",
       technologies: ["React Js", "Next.Js 15", "MUI"],
      liveUrl: "https://my-service-zeta.vercel.app",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Social Media App",
      description: "A social media platform with real-time messaging, image sharing, and user profiles.",
      image: "photo-1581091226825-a6a2a5aee158",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts and real-time data visualization.",
      image: "photo-1500673922987-e212871fec22",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02] group">
              <div className="relative overflow-hidden">
                <img 
                  src={`${project.image}`}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <Eye size={16} className="mr-2" />
                      Preview
                    </Button>
                  </div>
                </div> */}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <NavLink to={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button  variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  </NavLink>
                  {/* <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700 text-xs">
                    <ExternalLink size={12} className="mr-1" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700 text-xs">
                    <Github size={12} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
