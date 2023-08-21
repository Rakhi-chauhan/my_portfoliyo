import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        As a passionate React.js developer with 1+ year of experience, I have a strong enthusiasm for building web applications and creating interactive user interfaces. My expertise lies in working with modern web technologies, including React, JavaScript, HTML, and CSS, which allows me to craft seamless and visually appealing user experiences.

Throughout my journey as a React developer, I have honed my skills in creating reusable and maintainable components, promoting code reusability and enhancing development efficiency. I have experience in handling data flow and state management using React's props and state, ensuring smooth communication between different parts of the application.
        </p>

        <br />

        <p className="text-xl">
        In addition to my technical skills, I have a deep understanding of UI/UX principles, enabling me to design intuitive and user-friendly interfaces. My focus on performance optimization and responsive design ensures that applications are efficient and accessible across various devices and screen sizes.
        </p>
      </div>
    </div>
  );
};

export default About;
