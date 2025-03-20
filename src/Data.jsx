import digiCosmetics from './assets/digiCosmetics.png';
import portfolio from './assets/portfolio.png';
import appleStore from './assets/appleStore.png';
import golsam from './assets/golsam.png';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Projects',
    path: 'projects',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const service = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Custom Development',
    description:
      'I can develop custom websites using the latest frontend technologies, such as React.js, Next.js, and JavaScript, to create fast and dynamic websites.',
  },
  {
    id: 2,
    name: 'User Experience',
    title: 'User Experience Design',
    description:
      'I can design user experiences that are intuitive, easy to use, and visually appealing, so your customers will keep coming back.',
  },
  {
    id: 3,
    name: 'Web Optimization',
    title: 'Speed Optimization',
    description:
      ' I can optimize speed and performance of your website, so it loads quickly and efficiently, which can improve your search engine rankings and keep your customers engaged.',
  },
  {
    id: 4,
    name: 'Web Maintenance',
    title: 'Maintenance and Support',
    description:
      'I can provide ongoing maintenance and support for your website, including bug fixes, security updates, and content updates, so you can focus on growing your business.',
  },
  {
    id: 5,
    name: 'Interactive Effects',
    title: 'Animations and Effects',
    description:
      'Animations and interactive effects can make your website more engaging and memorable. I can create custom animations and effects using CSS, framer-motion and three.js to bring your website to life.',
  },
];

export const skill = [
  {
    id: 1,
    name: 'HTML',
    percentage: 99,
    description:
      'Hypertext Markup Language (HTML) is the standard markup language used to create web pages and web applications.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 90,
    description:
      'JavaScript is a scripting language used for creating dynamic web pages and web applications.',
  },

  {
    id: 3,
    name: 'React.js',
    percentage: 85,
    description:
      'A popular JavaScript library for building user interfaces, React is used to create dynamic and responsive web applications.',
  },

  {
    id: 4,
    name: 'Node.js',
    percentage: 55,
    description:
      'Node.js is a JavaScript runtime built on Chromes V8 engine for building scalable and efficient server-side applications.',
  },

  {
    id: 5,
    name: 'TypeScript',
    percentage: 40,
    description:
      'TypeScript is a superset of JavaScript that adds optional static typing and other features to the language.',
  },

  {
    id: 6,
    name: 'Tailwind CSS',
    percentage: 60,
    description:
      'Tailwind CSS is a utility-first CSS framework that provides developers with a set of pre-built CSS classes for styling web applications.',
  },

  {
    id: 7,
    name: 'Git',
    percentage: 80,
    description:
      'Git is a widely used version control system that is essential for collaborative development and project management. ',
  },

  {
    id: 8,
    name: 'Webpack',
    percentage: 50,
    description:
      'Webpack is a module bundler for modern JavaScript applications. It bundles assets, modules, and dependencies into a single file.',
  },

  {
    id: 9,
    name: 'GraphQL',
    percentage: 30,
    description:
      'GraphQL is a query language for APIs that provides a more efficient, powerful and flexible alternative to RESTful APIs.',
  },

  {
    id: 10,
    name: 'RESTful API',
    percentage: 90,
    description:
      'RESTful API is an interface that two computer systems use to exchange information securely over the internet.',
  },

  {
    id: 11,
    name: 'Sass',
    percentage: 45,
    description:
      'Sass is a CSS preprocessor that allows developers to write CSS in a more concise and structured way.',
  },

  {
    id: 12,
    name: 'Bootstrap',
    percentage: 85,
    description:
      'Bootstrap is a popular CSS framework that provides developers with a set of pre-built UI components.',
  },

  {
    id: 13,
    name: 'Redux',
    percentage: 80,
    description:
      'Redux is a predictable state container for JavaScript apps, used to manage the state of complex applications.',
  },

  {
    id: 14,
    name: 'Zustand',
    percentage: 65,
    description:
      'Zustand is a small, fast and scalable status management solution. Its state management is centralized and action-based.',
  },

  {
    id: 15,
    name: 'Jest & Cypress',
    percentage: 25,
    description:
      'Jest and Cypress are JavaScript-based testing framework designed to ensure correctness of any JavaScript codebase.',
  },
];

export const project = [
  {
    id: 1,
    img: digiCosmetics,
    category: 'Landing',
    title: 'digiCosmetics',
    description:
      'Landing page designed for selling cosmetic products. It typically includes a visually appealing design, easy navigation, and clear product descriptions.',
    url: 'https://digicosmetics.netlify.app',
    // sourceUrl: 'https://github.com/khakiiman/digiCosmetics',
  },

  {
    id: 2,
    img: portfolio,
    category: 'Portfolio',
    title: 'Developer Portfolio',
    description:
      'This Portfolio involves creating a visually appealing and user-friendly website that showcases the skills and portfolio of a frontend developer.',
    url: 'https://portfolio-blush-nine-51.vercel.app/#home',
    sourceUrl: 'https://github.com/maddy2730/Portfolio',
  },

  {
    id: 3,
    img: appleStore,
    category: 'Ecommerce',
    title: 'AgHub',
    description:
      'India’s farmers are constantly threatened by adverse weather and environmental conditions',
    url: 'https://ag-hub.vercel.app/',
    sourceUrl: 'https://github.com/maddy2730/AgHub',
  },

  {
    id: 4,
    img: golsam,
    category: 'Blog',
    title: 'Golsam Sepahan',
    description:
      'A new design blog provides informative content related to the agricultural industry, including tips and advice on the use of fertilizers and pesticides. ',
    url: 'https://golsamsepahan.netlify.app',
    sourceUrl: 'https://github.com/khakiiman/golsam-sepahan',
  },
];

export const cv = [
  {
    id: 1,
    title: 'CodeCamp Web Development Certification',
    subtitle: 'Web Development',
    date: 'June-2024 - Aug-2024',
    description:
      'FreeCodeCamp offers a comprehensive Web Development certification covering HTML, CSS, JavaScript, Node.js, React, and other essential web development technologies.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Azure Fundamentals',
    subtitle: 'web applications',
    date: 'Dec-2024 - Jan-2025',
    description:
      ' This certification is ideal if you re interested in cloud services for web applications. It covers the basics of cloud computing and how to use Azure for building and hosting web applications.',
    category: 'education',
  },

  {
    id: 3,
    title: ' Coursera',
    subtitle: 'Full-Stack Web Development ',
    date: '2025 - PRESENT',
    description:
      'This Coursera certification is perfect for developers who want to specialize in full-stack development using React, Node.js, and other technologies.',
    category: 'education',
  },

  // {
  //   id: 4,
  //   title: 'Coming Soon...',
  //   subtitle: 'Coming Soon...',
  //   date: '0000 - 0000',
  //   description:
  //     'Coming Soon...',
  //   category: 'education',
  // },

  {
    id: 5,
    title: 'Exposy-Data-lab',
    subtitle: 'Web Development ',
    date: 'Jan-2023 - Feb-2023',
    description:
      'This is perfect for us to specialize in full-stack development using React, Node.js, and other technologies.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'VBS-Tech-Solution',
    subtitle: 'Web Developer',
    date: 'March-2023 - PRESENT',
    description:
      'As a web developer at VBS-Tech-Solution, I am responsible for designing, developing, and maintaining web applications for clients across various industries. My role involves collaborating closely with the design and product teams to create visually appealing and highly functional websites and applications. With a focus on modern web technologies, I use tools like HTML, CSS, JavaScript, React, and Node.js to build responsive, user-friendly, and efficient digital solutions.',
    category: 'experience',
  },

  // {
  //   id: 7,
  //   title: 'Coming Soon...',
  //   subtitle: 'Coming Soon...',
  //   date: '000 - 0000',
  //   description:
  //     'Coming Soon....',
  //   category: 'experience',
  // },
  
  // {
  //   id: 8,
  //   title: 'Coming Soon...',
  //   subtitle: 'Coming Soon...',
  //   date: '000 - 0000',
  //   description:
  //     'Coming Soon....',
  //   category: 'experience',
  // },

];

export const testimonial = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Barbara Wilson has been an incredible asset to our company. Her strategic vision and leadership have been crucial in driving growth and success. We highly recommend her services.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Charlie Smith is a creative genius. His designs consistently exceed expectations and help bring our ideas to life. His professionalism and attention to detail are unmatched.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Roy Wang has transformed our fitness center with his dedication to excellence. His customer service skills are top-notch, and he has a natural ability to motivate and inspire others.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Jennifer Smith’s expertise in leadership and business strategy has been invaluable to our organization. Her innovative approach has helped us navigate challenges and achieve new heights.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Paul Freeman is a phenomenal photographer with an eye for detail and a creative vision that captures the essence of every subject. Working with him was an unforgettable experience.',
  },
];


export const post = [
  {
    id: 1,
    date: 'October 31, 2022',
    imgURL:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/freeCodeCamp-Cover.png',
    title: 'Introduction to React Hooks',
    description:
      'Learn how to use React Hooks to simplify state management and improve performance in your frontend applications.',
  },
  {
    id: 2,
    date: 'November 19, 2022',
    imgURL: 'https://softagency.in/wp-content/uploads/2023/02/vuejsfeat.jpg',
    title: 'Getting Started with Vue.js',
    description:
      'Explore the basics of Vue.js, a progressive JavaScript framework for building user interfaces.',
  },
  {
    id: 3,
    date: 'April 12, 2022',
    imgURL:
      'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qF8LfAwUhl57g9T0BVvVdg.jpeg',
    title: 'Best Practices for Responsive Web Design',
    description:
      'Discover the key principles and techniques for creating responsive web designs that look great on any device.',
  },
  {
    id: 4,
    date: 'March 5, 2022',
    imgURL:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--CHCog3Bn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/3200/1%2AtiS4RzayAJdIeTEkNL1ztw.png',
    title: 'Mastering CSS Flexbox',
    description:
      'Get up to speed with CSS Flexbox, a powerful layout tool for building modern, flexible, and responsive web designs.',
  },
  {
    id: 5,
    date: 'June 25, 2022',
    imgURL:
      'https://silktide.com/app/uploads/2021/05/We-analyzed-6554-websites-1024x576.jpg',
    title: 'Creating Accessible Web Content',
    description:
      'Learn how to make your web content more accessible to users with disabilities, including tips for designing for screen readers and other assistive technologies.',
  },
  {
    id: 6,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OyXMz4TaaY4FJOg00N6c7zsYKuqAAA8VUA&usqp=CAU',
    title: '10 Tips for Writing Clean Code in JavaScript',
    description:
      'Discover best practices for writing clean, maintainable, and efficient JavaScript code that will help you become a better developer.',
  },
  {
    id: 7,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lU_0yLYzO5o9oKAeShqM-8y_s1BWudtcyQ&usqp=CAU',
    title: 'The Future of Frontend Development: What to Expect in 2022',
    description:
      'Explore the latest trends and technologies in frontend development.',
  },
  {
    id: 8,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANuqChNWRh2a5AbtgPZYPnAogzqDsBQ-dAg&usqp=CAU',
    title: '10 Essential Tools for Every Frontend Developer',
    description:
      'Check out our list of must-have tools for frontend developers, from code editors.',
  },
  {
    id: 9,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpPs_cWDHKLvC45gy0btz4sNfD9LOArjcdA&usqp=CAU',
    title: 'Mastering the Fundamentals of Web Development',
    description:
      'Learn the basics of web development, including HTML, CSS, and JavaScript, and start building your own web applications from scratch.',
  },
  {
    id: 10,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KXJ50sZkMTcGcKBRpGj3Vnwz8g6iTnqKSQ&usqp=CAU',
    title: 'Creating Beautiful and Responsive UI Designs with CSS Grid',
    description:
      'Get up to speed with CSS Grid, a powerful layout tool for creating complex and responsive user interfaces that adapt to any screen size.',
  },
];
