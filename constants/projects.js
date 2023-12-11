export let projects = [
  {
    name: "Fully functional full stack blog app",
    about:
      "full-stack blog web application that allows users to create, read, write, and comment on the posts",
    description:
      "this  is a full-stack blog web application that allows users to create, read, write, and comment on the posts, and so on . It provides a seamless user experience by integrating Google and github sign-in for easy authentication. The application offers a robust article editing and adding images functionality while writing users own articles based on user preferences, it also gives a blog filtering options based on catagory. this blog site  also features a system-based and user preference theme options, with a dark mode recommended for optimal user experience.",
    images: ["/blog-app.gif", "/assets/Modern-Blog.png"],
    link: "https://thoughtfulperspectives.vercel.app",
    id: 3,
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
    id: 1,
  },

  {
    name: "Full stack Ai prompt Craft App",
    description:
      "Prompt Craft is a full-stack web application that allows users to create, update, edit, and delete AI prompts. It provides a seamless user experience by integrating Google sign-in for easy authentication. The application offers a robust search functionality based on user name, email, and prompt content, enabling users to quickly find relevant prompts. AI Prompt Craft also features a system-based theme, with a dark mode recommended for optimal user experience.",
    about:
      "Prompt Craft is a full-stack web application that allows users to create, update, edit, and delete AI prompts",
    techStacks: ["Next.js", "React", "tailwindcss"],
    images: ["/ai-prompt-app.gif", "/assets/promtopia-App-light-mode.png"],
    link: "https://aipromptcraft.vercel.app/",
    id: 2,
  },
];
