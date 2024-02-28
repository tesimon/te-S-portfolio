import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "./SocialIcons";
const ContactInfo = () => {
  return (
    <div className="">
      <h2 className="text-black dark:text-orange-200  font-sans text-lg my-5">
        Reach Out to Me
      </h2>
      <div className="flex gap-20 flex-col sm:flex-row items-start sm:items-end my-10  ">
        <div>
          <Image src={"/assets/email.png"} alt="email" width={30} height={30} />
          <Link
            href="mailto:tesimontolance@gmail.com"
            className="text-zinc-500  dark:text-cyan-100 my-4 hover:text-orange-500"
          >
            tesimontolance@gmail.com
          </Link>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactInfo;
