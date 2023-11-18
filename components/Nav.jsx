"use client";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function Logo() {
  return (
    <motion.div
      transition={{ duration: 0.4 }}
      whileInView={{ x: [-50, 0], opacity: [0, 1] }}
    >
      <Link href={"/"}>
        <Image
          src="/assets/mylogo.svg"
          alt="logo"
          width={100}
          height={100}
          className=" -ml-5 filter brightness-0 dark:brightness-100"
          priority
        />
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  let pathname = usePathname() || "/";
  const params = useParams();

  let dpath =
    pathname === `/blogs/${params.id}` ? `/blogs/${params.id}` : "/blogs";

  const navItems = {
    "/": {
      name: "home",
    },
    "/projects": {
      name: "works",
    },
    [dpath]: {
      name: "blogs",
    },
    "/info": {
      name: "info",
    },
  };

  return (
    <div className="flex flex-col sm:flex-row  justify-between sm:items-center mx-6 lg:mx-0 ">
      <div className="logo">
        <Logo />
      </div>
      <div className="pair flex flex-col sm:flex-row">
        <motion.div
          transition={{ duration: 0.5 }}
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          className="menu"
        >
          <LayoutGroup id="sidebar">
            <nav className="fade  text-base" id="nav">
              <div className="flex items-center  gap-5 ">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={clsx(
                        "transition-transform duration-300  hover:scale-110 hover:text-orange-500 flex align-middle",
                        "flex justify-between gap-3 ",
                        {
                          "text-slate-700 dark:text-white/60 ": !isActive,
                          "font-bold text-orange-600 bg-slate-950 rounded-md px-2 py-1":
                            isActive,
                        }
                      )}
                    >
                      <span className="transition_add">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="bg-slate-950 text-orange-600 rounded-md z-[-1]"
                            layoutId="sidebar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                            initial={{ opacity: 0.6, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </LayoutGroup>
        </motion.div>
      </div>
      <div className="socials hidden sm:block">
        <div className="flex sm:flex-row flex-col items-start sm:justify-center  sm:items-center gap-6 ">
          <Link
            href={"https://www.linkedin.com/in/t-e-simon-5163b2275/"}
            target="_blank"
            className="flex justify-center items-center gap-1 "
          >
            <Image
              src={"/assets/linkedin-icon8.png"}
              width={25}
              height={25}
              alt="linkedin"
            />
          </Link>

          <Link
            href={"https://discord.com/channels/@tesimon#2079"}
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <Image
              src={"/assets/discord-icon.png"}
              width={25}
              height={25}
              alt="discord"
            />
          </Link>
          <Link
            href={"https://discord.com/channels/@tesimon#2079"}
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <Image
              src={"/assets/instagram.png"}
              width={25}
              height={25}
              alt="instagram"
            />
          </Link>
          <Link
            href={"https://github.com/tesimon"}
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <Image
              src={"/assets/animated-github.gif"}
              width={20}
              height={20}
              alt="instagram"
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
