import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard";
import { Github, Linkedin, Mail, Download } from "lucide-react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const projects = [
  {
    title: "Virtual Assistant",
    description:
      "A Python based virtual assistant with voice interaction capabilities.",
    image:
      "https://img.freepik.com/free-photo/smart-speaker-house-control-innovative-technology_53876-102350.jpg?t=st=1738580584~exp=1738584184~hmac=f2e2276624cb9ef982456c2169bdb9e37f5580e09df959e086a80fe6195a0d02&w=826",
    repoLink: "https://github.com/yamini749/Virtual-Assistant",
    features: ["Voice Interaction", "Task Automation"],
  },
  {
    title: "Phishing and Spam Mail Classifier",
    description:
      "Advanced mail classification system using NLP to detect both spam and phishing emails.",
    image: "https://miro.medium.com/v2/resize:fit:600/0*igDW-qYQQh_FS0Ky.jpg",
    repoLink: "https://github.com/yamini749/Spam-Mail-Detection",
    features: ["Phishing Detection", "NLP", "Machine Learning Integration"],
  },
  {
    title: "Facial Emotion Detection",
    description: "Real time facial expression analysis system.",
    image:
      "https://www.softwebsolutions.com/wp-content/uploads/2023/07/emotion-recognition-using-Azure-Cognitive.png",
    repoLink: "https://github.com/yamini749/Facial-Emotion-Detection",
    features: ["Real Time Expression Detection with OpenCV", "Seamless Computer Vision Integration"],
  },
  {
    title: "Early Paralysis Detection",
    description: "Deep Learning Model for early detection of paralysis symptoms.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    repoLink: "https://github.com/yamini749/Early-Paralysis-Detection-model",
    features: ["Early Detection", "Intelligent Health Tracking"],
  },
  {
    title: "ALS Detection based on Voice Signals using Deep Learning",
    description: "GAN based system for detecting ALS using phonetic audio inputs.",
    image:
      "https://alsnewstoday.com/wp-content/uploads/2018/07/shutterstock_374660479.jpg",
    repoLink: "https://github.com/yamini749/ALS-detection-", 
    features: ["GAN-based Analysis", "Audio Signal Processing"],
  },
  {
    title: "Spring AI Email Generator",
    description: "An intelligent email management system powered by Spring Boot and Gemini AI.",
    image:
      "https://penji.co/wp-content/uploads/2024/02/ai-email-generator.jpg.webp",
    repoLink: "https://github.com/yamini749/Spring-AI-Email-Generator", 
    features: ["Spring Boot", "Gemini API", "Java "],
  },
  {
    title: "Weather Application",
    description: "MERN stack weather application with real time updates.",
    image:
      "https://i.ytimg.com/vi/MIYQR-Ybrn4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD1b0XOWuIiAJ105lCfSAjWIrOBfw",
    repoLink: "https://github.com/yamini749/Weather-Application",
    features: ["Real Time Data Fetching", "Responsive Design"],
  },
];

  return (
    <div className="min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className="lg:ml-64">
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center gap-8 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 p-8"
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://raw.githubusercontent.com/yamini749/my-portofolio/main/src/assets/profile.jpg"
                  alt="Yamini Settipalli"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Yamini Settipalli
            </h1>
            <p className="text-xl text-blue-800 mb-6">
              Code🔁Create🔁Innovate🔁
            </p>
            <p className="text-blue-900 mb-8">
              I am a passionate Python developer with expertise in AI and machine learning. 
              I specialize in Python and Flask. I also enjoy working with web development, building dynamic and responsive applications using Node.js, React, and Angular. and I love solving complex
              problems and continuously expanding my knowledge every day.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yamini749"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yamini-settipalli-a5b913254/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:yaminisettipalli3@gmail.com"
                className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <section id="about" className="py-16 px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Java",
                    "C",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React js",
                    "Node js",
                    "MySQL",
                    "MongoDB",
                    "Data Structures and Algorithms",
                    "Object Oriented Programming System",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  Core Subjects
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Computer Networks",
                    "Operating Systems",
                    "Data Base Management System",
                    "Machine Learning",
                    "Deep Learning",
                    "Artificial Intelligence",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Communication",
                    "Problem Solving",
                    "Adaptability",
                    "Time Management",
                    "Teamwork",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="py-16 px-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Experience
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-900">
                Software Development Engineer in Test (SDET) Intern
              </h3>
              <p className="text-blue-700">Amazon</p>
              <p className="text-gray-600">
                Chennai, Tamil Nadu | July 2024 - August 2024
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>
                  Automated processes like skip OOBE and floor plan generation
                  using ADB commands
                </li>
                <li>
                  Developed automation code for Android devices using Appium
                  framework
                </li>
                <li>
                  Worked with both real and simulated Android environments
                </li>
              </ul>
              <a
                href="https://drive.google.com/file/d/1f8dl783KQf8xIH-Lcbns_Y1FyQEhcBrE/view?usp=drive_link"
                className="text-blue-600 hover:underline"
              >
                View Certificate
              </a>
            </div>
          </section>

          <section id="projects" className="py-16 px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          <section id="education" className="py-16 px-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Education</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-900">
                  B.Tech CSE(AIML)
                </h3>
                <p className="text-blue-700">
                  Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada, Andhra Pradesh, India
                </p>
                <p className="text-gray-600">2022 - 2026</p>
                <p className="text-gray-700"><strong>CGPA:</strong> 9.43</p>
                <a
                  href="https://drive.google.com/file/d/1f-uTevT48HvHWfp-ofuRdNwVOyyQukup/view?usp=drive_link"
                  className="text-blue-600 hover:underline"
                >
                  View Certificate
                </a>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-900">
                  Intermediate (MPC)
                </h3>
                <p className="text-blue-700">SR Junior College, Vijayawada, Andhra Pradesh, India</p>
                <p className="text-gray-600">2020 - 2022</p>
                <p className="text-gray-700"><strong>CGPA:</strong> 9.70</p>
                <a
                  href="https://drive.google.com/file/d/1f11q_KO4-SBQQMMnvHi6fYKTzE1uO1Np/view?usp=drivesdk"
                  className="text-blue-600 hover:underline"
                >
                  View Certificate
                </a>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-900">
                  Secondary Education
                </h3>
                <p className="text-blue-700">Adarsha Vidya Nikethan, Raghavapuram, Andhra Pradesh, India</p>
                <p className="text-gray-600">2020</p>
                <p className="text-gray-700"><strong>CGPA:</strong> 9.88</p>
                <a
                  href="https://drive.google.com/file/d/1f79_Fu1Fx4eJGUiWSINnWQQ0deTFj98s/view?usp=drive_link"
                  className="text-blue-600 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </section>

          <section id="contact" className="py-16 px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact</h2>
            <button
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/file/d/1evBUYtjuP1ccxCiZbAftKs-NZrlwWvU9/view?usp=drivesdk")
              }
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </button>
            <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
              <div className="space-y-4">
                <a
                  href="mailto:yaminisettipalli3@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Mail size={20} />
                  <span>yaminisettipalli3@gmail.com</span>
                </a>
                <a
                  href="https://github.com/yamini749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Github size={20} />
                  <span>github.com/yamini749</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yamini-settipalli-a5b913254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
