"use client";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { SocialIcons } from "./SocialIcons";

function Logo() {
  return (
    <motion.div
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: [0, 1] }}
      className="flex justify-between items-center mb-2"
    >
      <Link href={"/"}>
        <Image
          src="/assets/mylogo.svg"
          alt="logo"
          width={120}
          height={120}
          className=" -ml-5 filter brightness-0 dark:brightness-100"
          priority
        />
      </Link>
      <div className="sm:hidden block ">
        <SocialIcons />
      </div>
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
          transition={{ duration: 0.9 }}
          whileInView={{ opacity: [0, 1] }}
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
                        "ease-linear  duration-500  hover:text-slate-950 dark:hover:text-slate-50  flex align-middle",
                        "flex justify-between gap-3 ",
                        {
                          "text-slate-700 dark:text-white/80 ": !isActive,
                          "font-bold text-slate-200 bg-slate-950 hover:text-white/70 rounded-md px-2 py-1":
                            isActive,
                        }
                      )}
                    >
                      <span>
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="bg-slate-950 text-orange-600 rounded-md z-[-1]"
                            layoutId="sidebar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 60,
                            }}
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
      <div className="sm:block hidden">
        <SocialIcons />
      </div>
    </div>
  );
}
