import ContactInfo from "@/components/ContactInfo";
const Info = () => {
  return (
    <>
      <div className="dark:font-light leading-7 tracking-wide text-[15px]">
        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h1 className="text-[20px] dark:text-cyan-50">Overview</h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h3 className="text-[1rem] text-zinc-500 ">
            From Technician to Technophile
          </h3>
          <p className="">
            {`   My initial experience as a mobile technician provided a strong
            foundation of hard work and perseverance, qualities I continue to
            carry with me in my coding endeavors. This unique blend of technical
            proficiency and determined work ethic empowers me to approach
            challenges systematically, dissecting complex problems into
            actionable solutions. It's this synthesis of technical skills
            and unwavering commitment that I leverage to deliver seamless,
            user-centric web experiences.`}
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h3 className="text-[1rem] text-zinc-500 ">
            Discovering My Coding Calling
          </h3>
          <p className=" ">
            My journey from a pragmatic beginning to a passionate pursuit has
            been transformative. What began as a monetary endeavor gradually
            evolved into a personal passion. With each line of code I write, I
            recognize the immense potential that web development holds—a
            potential to catalyze change, innovation, and tangible impact on the
            world around us. This realization fueled my commitment to not only
            excel but also to contribute meaningfully to the digital landscape.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h3 className="text-[1rem] text-zinc-500 ">
            Interests in Building a Freelance Career
          </h3>
          <p className=" ">
            Building a freelance career as a frontend web developer offers an
            exciting platform to apply my skills and creativity. What interests
            me most is the flexibility to work on diverse projects, collaborate
            with different clients, and continuously expand my skill set while
            creating tangible value. The autonomy to choose projects aligned
            with my interests, coupled with the opportunity to work with a
            variety of industries and professionals, motivates me to excel in
            this dynamic and evolving field.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h3 className="text-[1rem] text-zinc-500 ">
            Types of Projects I Would Like to Work On
          </h3>
          <p className="">
            {`
        I am drawn to projects that allow me to leverage my frontend development skills to create innovative and impactful solutions. I am particularly interested in working on projects involving modern web applications, responsive designs, interactive user interfaces, and implementing the latest trends and technologies in web development. Projects that challenge me to push the boundaries of what's possible in frontend development, while contributing to meaningful user experiences, are the ones that inspire me the most.
`}
          </p>
        </div>

        <div className="flex flex-col justify-start items-start gap-2 my-5">
          <h1 className="text-[20px] dark:text-green-50">Next Steps</h1>
          <h3 className="text-[1rem] dark:text-green-100 ">
            Embarking on Future Endeavors
          </h3>
          <p className="">
            As I journey forward, I am excited to build upon my experiences,
            collaborate with fellow developers, and engage with projects that
            challenge me to stretch my boundaries. My portfolio serves as a
            testament to my commitment, showcasing my growth from a determined
            novice to a passionate frontend web developer poised to make a
            meaningful impact.
          </p>
        </div>
        <div className="my-10">
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
