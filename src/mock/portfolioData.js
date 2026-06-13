export const portfolioData = {
  personalInfo: {
    name: "Pradeep Raj R",
    title: "Senior Software Engineer & Founding Developer",
    bio: "With over 6 years of experience, I specialize in building robust enterprise solutions. I build complete React.js and React Native technology stacks from the ground up, delivering scale-resilient GIS applications, monitoring platforms, and AI-driven mobile tools.",
    email: "rpredeepraj@gmail.com",
    phone: "+91 8428402482",
    location: "Chennai, Tamil Nadu, India 600096",
    linkedin: "https://linkedin.com/in/pradeepraj-r-739a7a168",
    linkedinDisplay: "linkedin.com/in/pradeepraj-r-739a7a168",
    resumeUrl: "Pradeep_Raj_Resume.pdf",
    profileImg: "profile.jpg"
  },
  skillsData: [
    {
      id: "frontend",
      label: "Frontend & Mobile",
      icon: "layout",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "React Native", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Redux / State Management", level: "Expert" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "Ant Design (Antd)", level: "Advanced" },
        { name: "jQuery", level: "Intermediate" },
        { name: "Webpack & Babel", level: "Intermediate" }
      ]
    },
    {
      id: "backend",
      label: "Backend & Database",
      icon: "hard-drive",
      skills: [
        { name: "Adobe ColdFusion (CFML)", level: "Expert" },
        { name: "CFScript", level: "Expert" },
        { name: "ColdFusion Components (CFCs)", level: "Expert" },
        { name: "SQL / Query Optimization", level: "Advanced" },
        { name: "ColdFusion ORM / cfquery", level: "Advanced" },
        { name: "REST API Development", level: "Advanced" },
        { name: "Google Maps API", level: "Advanced" },
        { name: "BillDesk Payment Gateway", level: "Advanced" },
        { name: "AI Image Recognition Integration", level: "Intermediate" }
      ]
    },
    {
      id: "gis",
      label: "GIS & Mapping",
      icon: "map",
      skills: [
        { name: "OpenLayers (OLMap)", level: "Expert" },
        { name: "GeoServer", level: "Advanced" },
        { name: "Mapbox GL", level: "Advanced" },
        { name: "GeoJSON API Integration", level: "Expert" },
        { name: "Geofencing & Geo-tagging", level: "Expert" },
        { name: "GIS Coordinate Systems", level: "Advanced" }
      ]
    },
    {
      id: "cloud",
      label: "Cloud & Tools",
      icon: "cloud",
      skills: [
        { name: "AWS Amplify", level: "Advanced" },
        { name: "AWS S3", level: "Advanced" },
        { name: "AWS CloudFront", level: "Advanced" },
        { name: "AWS CloudWatch Monitoring", level: "Advanced" },
        { name: "AWS CodeCommit", level: "Advanced" },
        { name: "Git / GitHub", level: "Expert" },
        { name: "Jira & Agile Workflows", level: "Expert" },
        { name: "VS Code / Sublime Text", level: "Expert" }
      ]
    }
  ],
  experienceData: [
    {
      date: "Jan 2021 – Present",
      company: "FarmwiseAI Pvt Ltd, Chennai",
      title: "Senior Software Engineer (Founding Engineer)",
      desc: "Joined as the founding engineer and built the company's complete React.js and React Native technology stack from the ground up, establishing frontend architecture and delivery workflows.",
      bullets: [
        "Built and delivered React Native mobile applications for Android, including geofencing, interactive maps, AI image recognition, and multi-language support for accessibility.",
        "Integrated AWS S3, Amplify, CloudFront, CloudWatch, and CodeCommit for scalable, secure cloud infrastructure across all products.",
        "Worked directly with clients and product stakeholders to gather requirements, define UI/UX workflows, and ensure on-time delivery.",
        "Monitored application performance using AWS CloudWatch, identified bottlenecks, and implemented fixes that delivered a 30% improvement in efficiency.",
        "Mentored interns and junior engineers through code reviews, pair programming, and structured knowledge-transfer sessions on React and React Native best practices."
      ],
      tags: ["React.js", "React Native", "Redux", "TypeScript", "OpenLayers", "AWS"]
    },
    {
      date: "Jan 2019 – Jan 2021",
      company: "Mitrahsoft Technologies Pvt Ltd, Kovilpati",
      title: "ColdFusion Developer",
      desc: "Maintained and enhanced professional enterprise site planning and web application platforms — managing ongoing ColdFusion (CFML) backend stability, bug resolution, performance tuning, and feature enhancements.",
      bullets: [
        "Built robust ColdFusion Components (CFCs) to encapsulate business logic, manage application state via Application.cfc, and deliver reusable backend services.",
        "Integrated Google Maps API and security camera simulations into enterprise web applications, enabling real-time visual site planning for integrators.",
        "Implemented CF Scheduled Tasks for automated data sync, report generation, and maintenance jobs — reducing manual intervention by 40%.",
        "Designed and optimized SQL queries via ColdFusion ORM and cfquery, improving data retrieval performance and reducing page load times.",
        "Resolved critical CFML and server configuration defects in production, maintaining 99%+ application uptime for strict SLA requirements.",
        "Mentored junior team members on CFML coding standards, ColdFusion debugging techniques, and application architecture patterns."
      ],
      tags: ["Adobe ColdFusion", "CFScript", "CFCs", "SQL", "Google Maps API", "jQuery"]
    }
  ],
  servicesData: [
    {
      icon: "smartphone",
      title: "Cross-Platform Mobile Apps",
      desc: "Native-performing iOS and Android apps using React Native. Perfect for geofencing, mapping, offline support, and AI tools."
    },
    {
      icon: "globe",
      title: "Custom Web Applications",
      desc: "Interactive web interfaces using React.js and TypeScript. Complete state management with Redux, integration with backend REST APIs."
    },
    {
      icon: "map",
      title: "GIS & Geospatial Portals",
      desc: "Map dashboards with OpenLayers, Mapbox GL, and GeoServer. Seamless geofencing, custom marker clusters, and layers overlay."
    },
    {
      icon: "cpu",
      title: "ColdFusion Backend & APIs",
      desc: "Highly secure enterprise backends, CFC business components, secure REST endpoints, database optimization, and scheduling tasks."
    }
  ]
};
