import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const About = () => {
  const skills = [
    { title: "Java", url: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" },
    { title: "Spring Boot", url: "https://www.yessinfotech.com/wp-content/uploads/2019/11/spring-boot-logo.png" },
    { title: "React", url: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256" },
    { title: "Tailwind CSS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
    { title: "Kafka", url: "https://static-00.iconduck.com/assets.00/kafka-icon-2048x935-cvu4503l.png" },
    { title: "Redis", url: "https://1000logos.net/wp-content/uploads/2020/08/Redis-Logo.png" },
    { title: "MySQL", url: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" },
    { title: "Microservices", url: "https://solace.com/wp-content/uploads/2020/05/microservices.png" },
  ];

  const skillItems = skills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center"
      style={{ padding: "10px" }}
    >
      <img
        src={skill.url}
        alt={skill.title}
       className="w-40 h-40 sm:w-[20rem] sm:h-[20rem] object-contain"
      />
    </div>
  ));

  return (
    <section
      id="about"
      className="bg-gray-100 text-gray-900 min-h-screen py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-down">
          About Me
        </h2>

        <p
          className="text-lg leading-relaxed text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          I'm a passionate <strong>Java Backend Developer</strong> and{" "}
          <strong>MERN Stack Specialist</strong> with expertise in building
          scalable, secure, and efficient applications. My skills include
          Java, Spring Boot, React, Kafka, Redis, and more. I enjoy tackling
          challenges, learning new technologies, and creating innovative
          solutions for real-world problems.
          My skills include
          Java, Spring Boot, React, Kafka, Redis, and more. I enjoy tackling
          challenges, learning new technologies, and creating innovative
          solutions for real-world problems.
          My skills include
          Java, Spring Boot, React, Kafka, Redis, and more. I enjoy tackling
          challenges, learning new technologies, and creating innovative
          solutions for real-world problems.
        </p>

        <h3
          className="text-2xl font-semibold mb-6 text-center"
          data-aos="fade-right"
        >
          Skills & Technologies
        </h3>

        {/* Alice Carousel */}
        <div data-aos="fade-up">
          <AliceCarousel
            items={skillItems}
            autoPlay
            infinite
            autoPlayInterval={500}
            disableButtonsControls
            disableDotsControls
            responsive={{
              0: { items: 4 },
              768: { items: 5 },
              1024: { items: 6 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
