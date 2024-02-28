export let projects = [
  {
    id: 5,
    techStacks: ["javascript", "d3.js", "css", "html"],
    images: ["/scatter-plot.png"],
    link: "https://interective-scatter-plot.netlify.app",
    sourceCode: "https://github.com/tesimon/interactive-scatter-plot-with-d3",
    name: "interective scatter plot",
    about:
      "interective scatter plot that visualize and shows the data of the iris dataset",
    description:
      "This is a interective scatter plot created with d3 and vanila js, this scatter plot offers 2 main features:color legend and the hover effect on it",
  },
  {
    id: 4,
    techStacks: ["javascript", "d3.js", "css", "html"],
    images: ["/choropleth-map.png"],
    link: "https://interective-choropleth-map.netlify.app",
    sourceCode: "https://github.com/tesimon/choropleth-map-with-d3",
    name: "choropleth map",
    about:
      "interective choropleth map that visualize and shows the data of world's gdp per capita of 2021",
    description:
      "This is a interective choropleth map created with d3 and vanila js this map offers 3 main features: (1) zoom in/out with the mouse wheel , (2) rotation with mouse by draging , (3) when hover on the map it shows the each country name and data",
  },

  {
    id: 3,
    techStacks: ["javascript", "css", "tailwind", "html"],
    images: ["/Image-Editor.png"],
    link: "https://to-canvas-editor.netlify.app/",
    sourceCode: "https://github.com/tesimon/image-editor-app",
    name: "canvas editor",
    about:
      "This is a web-based image editor that allows users to apply various filters, rotate, and flip images.",
    description:
      "This is a web-based image editor that allows users to apply various filters, rotate, and flip images. The application leverages Object-Oriented Programming (OOP) principles and modern features to provide a user-friendly and interactive experience.",
  },
  {
    name: "E-Commerce Shop",
    about: "Enhance Your Shopping Experience with E-Commerce-Shop",
    description: `
    Key Features
    1. Anonymous Cart & Merging Capability: Explore products without commitment.
    2. Quantity Adjustment: Easily manage product quantities in your cart.
    3. Google Sign-In: Access additional features while signed in with Google.
    4. Efficient Pagination: Navigate through products with a sleek pagination bar.
    5. Robust Search Functionality: Find items effortlessly with a powerful search bar.
    6. Aesthetic UI Design: Enjoy a visually appealing interface for a delightful shopping experience.
    7. Dark/Light Theme Modes: Customize your browsing with preferred themes.
    8. Detailed Product Pages: Dive into comprehensive product views for informed decisions.
    9. SSR Rendering: Experience enhanced speed and performance with server-side rendering.
    `,
    techStacks: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
    images: ["/E-commerce-shop.png", "/E-commerce-shop.png"],
    link: "https://e-commerceshop.vercel.app",
    id: 2,
  },
  {
    name: "Fully functional full stack blog app",
    about:
      "full-stack blog web application that allows users to create, read, write, and comment on the posts",
    description:
      "this is a full-stack blog web application that allows users to create, read, write, and comment on the posts, and so on . It provides a seamless user experience by integrating Google and github sign-in for easy authentication. The application offers a robust article editing and adding images functionality while writing users own articles based on user preferences, it also gives a blog filtering options based on catagory. this blog site  also features a system-based and user preference theme options, with a dark mode recommended for optimal user experience.",
    images: ["/blog-app.gif", "/assets/Modern-Blog.png"],
    link: "https://thoughtfulperspectives.vercel.app",
    id: 1,
    techStacks: [
      "Next.js",
      "React",
      "tailwindcss",
      "mongodb",
      "firebase",
      "prisma",
      "next-auth",
    ],
  },
];
