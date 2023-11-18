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
            My initial experience as a mobile technician provided a strong
            foundation of hard work and perseverance, qualities I continue to
            carry with me in my coding endeavors. This unique blend of technical
            proficiency and determined work ethic empowers me to approach
            challenges systematically, dissecting complex problems into
            actionable solutions. It\'s this synthesis of technical skills and
            unwavering commitment that I leverage to deliver seamless,
            user-centric web experiences.
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
            Crafting Digital Experiences that Resonate
          </h3>
          <p className="">
            Embracing web development has granted me the ability to merge
            creativity and functionality, crafting digital landscapes that
            engage, inspire, and resonate. I\'ve realized that through coding, I
            have the privilege to shape user experiences, influence
            interactions, and contribute to the broader digital ecosystem. This
            awareness drives me to continually refine my skills, keep pace with
            industry trends, and pursue novel solutions that stand at the
            intersection of aesthetics and functionality.
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
