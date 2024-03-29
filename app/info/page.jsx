import ContactInfo from "@/components/ContactInfo";
const Info = () => {
  return (
    <>
      <div className="leading-7 tracking-wide text-[1.05rem]">
        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h3 className="text-[1rem] text-zinc-500 ">
            From Technician to Technophile
          </h3>
          <p>
            {`   My journey began in mobile repair, fostering a strong work ethic. Now, as a passionate front-end developer (4 years), I leverage this blend of technical proficiency and dedication to deliver seamless, user-focused websites. I excel at crafting innovative solutions and tackling unique logic challenges using d3.js, JavaScript, React, and Next.js, prioritizing efficient development throughout the process.`}
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h3 className="text-[1rem] text-zinc-500 ">
            Discovering My Coding Calling & Freelance Aspirations:
          </h3>
          <p>
            Coding, initially a job, blossomed into a passion. I see its
            potential to create tangible impact, fueling my commitment to excel
            and contribute meaningfully. My interest in freelancing stems from
            the desire to work on diverse projects, collaborate with various
            clients, and continuously expand my skills while delivering real
            value. The autonomy and variety within this dynamic field motivate
            me to keep pushing boundaries.
          </p>
        </div>

        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h3 className="text-[1rem] text-zinc-500 ">
            Projects that Inspire Me:
          </h3>
          <p>
            {`
        I'm drawn to projects that utilize my front-end skills, particularly those involving modern web applications, responsive designs, engaging user interfaces, and implementing the latest web development trends. My experience with React and Next.js allows me to tackle these projects efficiently and effectively. Ultimately, projects that challenge me to push my limits while contributing to meaningful user experiences are the ones that inspire me the most.`}
          </p>
        </div>

        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h3 className="text-[1rem] text-zinc-500 ">Next steps</h3>
          <p>
            {`
        I'm eager to build upon my experiences, collaborate with fellow developers, and tackle projects that challenge me to grow.
`}
          </p>
        </div>

        <div className="my-6">
          <span className="dark:text-neutral-200  font-light   ">
            Thank you for visiting my portfolio. I invite you to explore the
            projects that encapsulate my progression, passions, and aspirations.
          </span>
        </div>
        <div className="contactInfo">
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

export default Info;
