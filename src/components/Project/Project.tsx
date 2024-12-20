import React, { useState, useEffect, useRef } from 'react';
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Modal from '../Modal/Modal';
import Project1 from '../../assets/Frame 1.jpg'
import Project2 from '../../assets/Frame 2.jpg'
import Project3 from '../../assets/Frame 3.jpg'
import Project5 from '../../assets/Frame 5.jpg'
import Project6 from '../../assets/Frame 6.png'
import Project7 from '../../assets/Frame 7.png'
import Project8 from '../../assets/Frame 8.png'
import Project9 from '../../assets/Frame 9.png'

// Define TypeScript types
interface ProjectType {
  title: string;
  description: string;
  imageSrc: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

const projects: ProjectType[] = [
  {
    title: 'Ajar Car Rental Mobile App',
    description: '',
    imageSrc: Project6,
    techStack: ['Flutter', 'Dart', 'Firebase', 'Bloc','Notifications'],
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'Khata App',
    description: '',
    imageSrc: Project7,
    techStack: ['Flutter', 'Dart', 'Firebase', 'Bloc', 'AI Chatbot'],
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'Online Grocery Shopping Store',
    description: 'Develop a comprehensive online grocery store solution with mobile applications for users and administrators, and a web-based admin panel. Built with Flutter and Firebase, this project offers a seamless experience across platforms and integrates advanced features for both user and administrative functionalities.',
    imageSrc: Project1,
    techStack: ['Flutter', 'Dart', 'Firebase', 'Stripe', 'Provider'],
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'WeChat – Chatting Mobile Application',
    description: 'The WeChat mobile application offers a dynamic and interactive chat experience, allowing users to connect with friends, share media, and enjoy real-time communication. Built with Flutter and Firebase, this application provides a seamless and engaging user experience across platforms. Leveraging advanced technologies, including AI-powered chatbots and real-time messaging, it ensures users stay connected and informed effortlessly.',
    imageSrc: Project3,
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Gemini AI', 'GetX'],
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'Reuse Mart',
    description: 'Reuse Mart is a feature-rich Flutter-based application designed to streamline the process of buying and selling items. Utilizing Firebase for backend services, this app allows sellers to list items with multiple images and detailed descriptions, while buyers can easily contact sellers through integrated chat for negotiations. The application supports both dark and light modes, ensuring a pleasant user experience in various lighting conditions. Leveraging Riverpod for state management, Reuse Mart provides efficient and responsive updates throughout the app.',
    imageSrc: Project2,
    techStack: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'Music App',
    description: 'The Music App is a sophisticated Flutter-based application designed to offer an immersive and intuitive music experience. Utilizing Bloc for state management, this app allows users to manage their music collection effectively, create and organize playlists, and enjoy their favorite tracks seamlessly. Users can load songs from their mobile device, create personalized playlists, and mark their favorite songs for easy access. The application features a modern and responsive design, ensuring a delightful user experience.',
    imageSrc: Project5,
    techStack: ['Flutter', 'Dart', 'Firebase', 'Bloc'],
    githubLink: '',
    liveLink: ''
  },


];

export function Project() {
  // Projects File
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Set up IntersectionObserver to show tooltip
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTooltipVisible(true);
        } else {
          setTooltipVisible(false);
        }
      });
    }, { threshold: 0.5 });

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div
              className="project"
              ref={el => projectRefs.current[index] = el}
            >
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                  <title>Folder</title> 
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
                </svg>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Live Site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-image" onClick={() => openModal(project.imageSrc)}>
                  <img src={project.imageSrc} alt={project.title} />
                  {tooltipVisible && (
                    <div className="tooltip">
                      Click on the image to zoom in
                    </div>
                  )}
                </div>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      <Modal imageSrc={selectedImage} onClose={closeModal} />
    </Container>
  );
}
