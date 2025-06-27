export const getResume = async () => {
  return {
    error: "",
    data: {
      full_name: "Ellen Kohler",
      tag_line: "UX Engineer",
      about:
        "Seasoned engineer with over 10 years of experience specializing in delivering high-impact features from ideation to implementation. Proven ability to lead projects end-to-end, mentor peers, and collaborate across teams to drive results. Experiences in creating scalable solutions that solve real user needs, with a strong focus on product outcomes and data-driven decision-making. Excited to contribute by owning technical and design challenges, fostering a culture of collaboration, and driving meaningful product improvements.",
      contact: {
        phone_number: "949-697-2186",
        email_address: "ellenshimada@gmail.com",
      },
      skills: {
        linked_in_skills: [
          {
            id: 1,
            name: "Usability",
            level: 3,
          },
          {
            id: 2,
            name: "Visual Design",
            level: 3,
          },
          {
            id: 3,
            name: "Prototyping",
            level: 3,
          },
          {
            id: 4,
            name: "Figma (Software)",
            level: 3,
          },
          {
            id: 5,
            name: "User Experience (UX)",
            level: 3,
          },
          {
            id: 6,
            name: "User Experience Design (UED)",
            level: 2,
          },
          {
            id: 7,
            name: "User Interface Design",
            level: 2,
          },
          {
            id: 8,
            name: "Design Systems",
            level: 2,
          },
          {
            id: 9,
            name: "Product Design",
            level: 1,
          },
          {
            id: 10,
            name: "Mental Models",
            level: 0,
          },
        ],
        experience_skills: [
          {
            id: 1,
            title: "Design",
            skills: "Figma, Adobe CS",
          },
          {
            id: 2,
            title: "Front-End",
            skills:
              "HTML, CSS, JavaScript, Vue.js, React.js, TailwindCSS, Ajax, Json, Axios",
          },
          {
            id: 3,
            title: "Back-End",
            skills:
              "Laravel, PHP, PHPUnit, mySQL, PostgreSQL, API interfaces, Node, Ruby, Ruby on Rails",
          },
          {
            id: 4,
            title: "Others",
            skills: "Git, GitHub, Jira, Sourcetree, AWS, S3, FullStory",
          },
        ],
        technical_skills: [
          {
            id: 1,
            title: "Frontend Languages and Frameworks",
            description:
              "JavaScript, React, Vue.js, HTML5, CSS3, Tailwind CSS, SCSS, JSON, Axios",
          },
          {
            id: 2,
            title: "Backend Languages and Frameworks",
            description: "Ruby, Ruby on Rails, Laravel, PHP, MySQL, PostgreSQL",
          },
          {
            id: 3,
            title: "Design Tools",
            description: "Figma, Adobe Creative Suite, Procreate",
          },
          {
            id: 4,
            title: "Prototyping & Development",
            description:
              "Interactive Prototypes, UI/UX Design, Responsive Design",
          },
          {
            id: 5,
            title: "Collaboration Tools",
            description:
              "Git, GitHub, Jira, Slack, Confluence, Asana, Google Suite",
          },
          {
            id: 6,
            title: "Soft Skills",
            description:
              "Cross-Functional Collaboration, Team Leadership, Highly Diplomatic, Deeply Compassionate, Exceptionally Empathic, Excellent Communicator",
          },
          {
            id: 7,
            title: "Other Tools",
            description:
              "FullStory, AWS, Heroku, CircleCI, Code Climate, Segment",
          },
        ],
      },
      education: {
        college: "University of California, Los Angeles",
        degree: "Humanities, B.A.",
      },
      experiences: [
        {
          id: 1,
          title: "UX Engineer Contractor",
          company: "Milo",
          location: "San Francisco, CA",
          years: "2025, February - March",
          is_remote: true,
          items: [
            "Sole developer to re-engineer large monolithic codebase into a modularized set of components for onboarding. Introduced a simple json driven interface for non-developers to have the ability to dictate modifications, re-ordering, and addition of new steps based on various step types.",
            "Adopted existing landing page code progress from another developer to quickly implement the remaining 95% of work needed to deploy the new landing page to production including optimization of visual assets for different screen sizes and pixel densities, cross-reference checks across provided design and design system to identify reusable code and elements, simultaneous inspection across mobile and desktop to ensure cohesive quality and experience of the finished product.",
            "Thoughtfully introduced code changes without compromising the integrity of the existing codebase.",
            "Implemented A/B testing for UI/UX experiments, collecting data to guide product decisions and optimize the user journey.",
            "Developed clear documentation of key information and changes for a smooth hand-off.",
          ],
        },
        {
          id: 2,
          title: "Full Stack Engineer • Lead UI/UX Designer",
          company: "Rocksbox, Inc.",
          location: "San Francisco, CA",
          years: "2023 - Present",
          is_remote: true,
          items: [
            "Owned the design and development of the company's internal design system, ensuring consistency across engineering teams and improving development efficiency through reusable components in Figma and React.",
            "Collaborated cross-functionally with product, design, marketing, and engineering teams to create scalable and accessible web interfaces, directly impacting user experience and product goals.",
            "Drove outcomes by working closely with product managers to prioritize and ship critical features, leading to quicker turnaround times and higher user satisfaction.",
            "Implemented A/B testing for UI/UX experiments, collecting data to guide product decisions and optimize the user journey.",
            "Built dashboards using FullStory, enabling data-driven improvements to user flows and contributing to measurable improvements in engagement and usability.",
          ],
        },
        {
          id: 3,
          title: "Senior Software Engineer • Lead Designer",
          years: "2022 - 2023",
          company: "Amava, Inc.",
          location: "Menlo Park, CA",
          is_remote: true,
          items: [
            "Led technical projects from concept to implementation, owning UI/UX design and full-stack development of responsive, high-conversion web pages using Vue.js and Tailwind CSS.",
            "Collaborated across functions with marketing and product teams, aligning technical efforts with branding and growth initiatives.",
            "Played a pivotal role in a major site redesign, directly contributing to increased customer acquisition and engagement metrics through thoughtful and visually appealing design implementations.",
          ],
        },
        {
          id: 4,
          title: "Software Engineer",
          years: "2020 - 2021",
          company: "Shelterluv, Inc.",
          location: "Palo Alto, CA",
          is_remote: true,
          items: [
            "Solely responsible for developing marketing and sales applications while contributing to core engineering efforts.",
            "Architected new features in Vue.js/Nuxt and Laravel, aligning technical decisions with product needs to enhance performance and user experience.",
            "Partnered with the product team to develop and implement UI/UX features, ensuring alignment with customer needs and company objectives.",
          ],
        },
      ],
      achievements: [
        {
          id: 1,
          title: "End-to-End Ownership",
          description:
            "Successfully led multiple high-impact projects from concept through implementation, resulting in measurable improvements in user experience and product performance.",
        },
        {
          id: 2,
          title: "Mentorship",
          description:
            "Mentored junior and senior engineers, shaping the technical strategy and promoting continuous learning within teams.",
        },
        {
          id: 3,
          title: "Cross-Functional Collaboration",
          description:
            "Demonstrated strong collaboration skills across engineering, design, and product teams to drive feature development and align on key product goals.",
        },
        {
          id: 4,
          title: "Focus on Impact",
          description:
            "Delivered features that resulted in increased conversion rates and user engagement by focusing on real user needs and leveraging data to inform decisions.",
        },
        {
          id: 5,
          title: "Curious & Self-Driven Fast Learner",
          description:
            "Proven ability to quickly adapt to new technologies and processes. In just a few months, self-taught Ruby to contribute effectively as a Full Stack Engineer at Rocksbox, enhancing both frontend and backend development efforts.",
        },
      ],
    },
  };
};
