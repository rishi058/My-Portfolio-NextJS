"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C / C++</li>
        <li>Flutter / Dart</li>
        <li>HTML / CSS / Javascript</li>
        <li>React JS / Next JS / Node JS / Vue</li>
        <li>Firebase / Mongo DB / PostgreSQL / MySQL</li>
        <li>Golang / Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pursuing B.Tech in IIIT Bhagalpur from CSE branch.</li>
        <li>Scored 89% in Class XII(2018-2020) Adarsh Vikas Vidyalaya CBSE</li>
        <li>Scored 89.8% in Class X(2020) JMV Residential School CBSE</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://www.udemy.com/certificate/UC-1cda2755-f86a-4132-a53d-9b5f74e36b56/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email" target="_blank" rel="noopener noreferrer">Flutter & Dart - The Complete Guide</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg  text-justify">
          Hello, I&apos;m Rishi, a CSE undergraduate from IIIT Bhagalpur in Patna, Bihar. My focus lies in Web & App development and problem solving, with expertise in HTML, CSS, Javascript, C/C++, Flutter, Firebase, and GitHub. I&pos;ve crafted various apps & websites, some available on Google Play Store, ranging from basic utilities to advanced E-commerce and Appointment booking apps. Proficient core subjects like OS, OOP, CN, DSA, DAA, and DBMS. I applied my skills during an internship at Duckcart, gaining hands-on experience with extra tools loke Notion, Jira, Slack, and GitLab. As the lead of my college&pos;s app development club, I organized meetings and showcased leadership.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
