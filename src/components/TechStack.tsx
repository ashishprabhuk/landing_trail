// Import all images
import "./TechStack.css"
import ReactIcon from "/techStacks/React.png";
import NextJSIcon from "/techStacks/NextJS.png";
import NodeJSIcon from "/techStacks/NodeJS.png";
import AWSIcon from "/techStacks/AWS.png";
import MongoDBIcon from "/techStacks/MongoDB.png";
import GCPIcon from "/techStacks/GCP.png";
import AzureIcon from "/techStacks/Azure.png";
import DockerIcon from "/techStacks/Docker.png";
import FigmaIcon from "/techStacks/Figma.png";
import KubernetesIcon from "/techStacks/Kubernetes.png";
import FlutterIcon from "/techStacks/Flutter.png";
import FastAPIIcon from "/techStacks/FastAPI.png";
import TensorflowIcon from "/techStacks/TensorFlow.png";
import PytorchIcon from "/techStacks/PyTorch.png";
import IllustratorIcon from "/techStacks/Illustrator.png";
import TailwindIcon from "/techStacks/Tailwind.png";
import SpringIcon from "/techStacks/Spring.png";
import PostmanIcon from "/techStacks/Postman.png";
import HTML5Icon from "/techStacks/HTML5.png";
import ExpressIcon from "/techStacks/Express.png";
import CSS3Icon from "/techStacks/CSS3.png";
import AngularIcon from "/techStacks/Angular.png";
import DataBricksIcon from "/techStacks/DataBricks.png";


export default function TechStack() {
  const techStack = [
    { name: "HTML 5", icon: HTML5Icon },
    { name: "CSS 3", icon: CSS3Icon },
    { name: "React", icon: ReactIcon },
    { name: "React Native", icon: ReactIcon },
    { name: "Angular JS", icon: AngularIcon },
    { name: "Figma", icon: FigmaIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Next.js", icon: NextJSIcon },
    { name: "Node.js", icon: NodeJSIcon },
    { name: "Spring", icon: SpringIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "DataBricks", icon: DataBricksIcon },
    { name: "GCP", icon: GCPIcon },
    { name: "Azure", icon: AzureIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Kubernetes", icon: KubernetesIcon },
    { name: "Flutter", icon: FlutterIcon },
    { name: "FastAPI", icon: FastAPIIcon },
    { name: "Tensorflow", icon: TensorflowIcon },
    { name: "Pytorch", icon: PytorchIcon },
    { name: "Adobe Illustrator", icon: IllustratorIcon },
  ];

  const firstRow = techStack.slice(0, 9);
  const secondRow = techStack.slice(9);

  return (
    <section className="py-20 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Built with Modern Technology</h2>
        <p className="text-gray-400 mb-12">
          Fast, scalable, and SEO-optimized solutions using cutting-edge tools.
        </p>
      </div>

      <div className="relative">
        {/* First row */}
        <div className="flex mb-8 overflow-hidden relative group">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-left group-hover:pause gap-6 whitespace-nowrap">
            {[...firstRow, ...firstRow].map((tech, i) => (
              <div
                key={i}
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 flex items-center gap-3"
              >
                <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row */}
        <div className="flex overflow-hidden relative group">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-right group-hover:pause gap-6 whitespace-nowrap">
            {[...secondRow, ...secondRow].map((tech, i) => (
              <div
                key={i}
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 flex items-center gap-3"
              >
                <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
