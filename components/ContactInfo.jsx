import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="">
      <h2 className="text-black dark:text-orange-200  font-sans text-lg my-5">
        Reach Out to Me
      </h2>
      <div className="flex gap-20 flex-col sm:flex-row items-start sm:items-end my-10  ">
        <div className="">
          <Image src={"/assets/email.png"} alt="email" width={40} height={40} />
          <Link
            href="mailto:tesimon3536@gmail.com"
            className="text-zinc-500 font-serif dark:text-cyan-100 my-4 hover:text-orange-500"
          >
            tesimon3536@gmail.com
          </Link>
        </div>
        <div className="flex sm:flex-row flex-col items-start sm:justify-center  sm:items-center gap-10 ">
          <Link
            href={"https://www.linkedin.com/in/t-e-simon-5163b2275/"}
            target="_blank"
            className="flex justify-center items-center gap-1 "
          >
            <Image
              src={"/assets/linkedin-icon8.png"}
              width={40}
              height={40}
              alt="linkedin"
            />
            <span className="hover:text-orange-500">linkedin</span>
          </Link>

          <Link
            href={"https://discord.com/channels/@tesimon#2079"}
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <Image
              src={"/assets/discord-icon.png"}
              width={40}
              height={40}
              alt="discord"
            />
            <span className="hover:text-orange-500">discord</span>
          </Link>
          <Link
            href={"https://discord.com/channels/@tesimon#2079"}
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <Image
              src={"/assets/instagram.png"}
              width={35}
              height={35}
              alt="instagram"
            />
            <span className="hover:text-orange-500"> instagram</span>
          </Link>
          <Link
            href={"https://github.com/tesimon"}
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <Image
              src={"/assets/animated-github.gif"}
              width={35}
              height={35}
              alt="instagram"
              className="rounded-full"
            />
            <span className="hover:text-orange-500"> github</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
