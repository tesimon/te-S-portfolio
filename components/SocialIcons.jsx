import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-center items-center gap-6 ">
        <Link
          href={"https://www.linkedin.com/in/t-e-simon-5163b2275/"}
          target="_blank"
          className="flex justify-center items-center gap-1 "
        >
          <FaLinkedin size={22} className="dark:text-white text-black" />
        </Link>

        <Link
          href={"https://discord.com/users/1060203256829190194"}
          target="_blank"
          className="flex justify-center items-center gap-1"
        >
          <FaDiscord size={22} className="dark:text-white text-black" />
        </Link>

        <Link
          href={"https://github.com/tesimon"}
          target="_blank"
          className="flex justify-center items-center gap-1"
        >
          <FaGithub size={22} className="dark:text-white text-black" />
        </Link>
      </div>
    </div>
  );
};
