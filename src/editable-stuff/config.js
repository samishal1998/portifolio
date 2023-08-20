// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sami",
  middleName: "",
  lastName: "Mis'hal",
  message: " Passionate about building tools and utilities that elevate our coding experience ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/samishal1998",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sami-mishal-612261161/",
    },
    {
      image: "fa-npm",
      url: "https://www.npmjs.com/~sami.mishal",
    },
    {
      image: "fa-hackerrank",
      url: "https://www.hackerrank.com/sami_mishal_1998",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/sami-sameer.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sami-sameer.jpg"),
  imageSize: 375,
  message:
    "My name is Sami Mis'hal. I’m a graduate of 2021 with a B.Sc. in Electronics and Communications Engineering from The British University in Egypt and a B.Eng. from London South Bank University (dual certificate program). I'm most passionate about building tools and utilities that elevate our coding experience, and my goal is to pursue this passion within the field of software engineering.",
  resume: "https://drive.google.com/file/d/1m7jLISOCtyJHa1IXvbvSmvxumS0CVUVc/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "samishal1998", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
      "react-controlled-state-hook",
      "react-mui-snackbar-helper",
      "vcard-builder",
      "Frost-ORM/frost-web-docs",
  ],
};

const extraRepos = {
  show: false,
  heading: "Frost-ORM",
  gitHubUsername: "Frost-ORM", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
      "frost-web-docs",
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/sami-sameer.jpg"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/sami-sameer.jpg"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "TS/JS", value: 90 },
    { name: "Web3 (ethers,wagmi,SIWE,WalletConnect,...)", value: 90 },
    { name: "Solidity", value: 50 },
    { name: "React/React Native", value: 90 },
    { name: "Android Native", value: 85 },
    { name: "Flutter", value: 90 },
    { name: "HTML/CSS", value: 60 },
    { name: "Java/Kotlin", value: 85 },
    { name: "Docker", value: 80 },
    { name: "SQL", value: 75 },
    { name: "MongoDB", value: 75 },
    { name: "Linux/Shell", value: 90 },
    // { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 50 },
    // { name: "JavaScript", value: 90 },
    // { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "DRY Coder", value: 100 },
    { name: "Learning Speed", value: 98 },

    { name: "Goal-Oriented", value: 80 },
    // { name: "Collaboration", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "samishal.1998@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Web3 Consultant',// Here Add Company Name
      companylogo: require('../assets/img/d3servelabs.png'),
      date: 'May 2023 – Present',
      url:"https://www.linkedin.com/company/d3servelabs/"
    },
    {
      // role: 'Head Full-Stack Developer',// Here Add Company Name
      companylogo: require('../assets/img/knot.png'),
      date:
          <>
            (Head Full-Stack Developer) Dec 2022 – June 2023<br/>
            (Tech Lead) June 2023 – August 2023<br/>
            (Head/Supervisor of Development) August 2023 – now<br/>
          </>,
      url:"https://myknot.co"
    },
    {
      role: 'Head Full-Stack Developer',
      companylogo: require('../assets/img/mq.png'),
      date: 'Jun 2022 – Dec 2022 ',
      url:'https://www.moqawlaty.com/'
    },
    {
      // role: 'Head Full-Stack Developer',
      companylogo: require('../assets/img/fluidmeet.png'),
      // date: 'Jul 2021 – Oct 2021 ',
      date: <>
        (Senior Full-Stack Dev) Jul 2021 – Oct 2021<br/>
        (Head Developer) Oct 2021 – Jun 2022<br/>
      </>,
      url:'https://www.fluidmeet.com/'
    },
    {
      // role: 'Head Full-Stack Developer',
      companylogo: require('../assets/img/wk.webp'),
      // date: 'Jul 2021 – Oct 2021 ',
      date: <>
        (Senior Android Developer) Jul 2017 – Jun 2018<br/>
        (Android Tech Lead) Jun 2018 – Nov 2020<br/>
      </>,
      url:'https://www.facebook.com/WellknownApp'
    },

  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos,extraRepos, skills, leadership, getInTouch, experiences };
