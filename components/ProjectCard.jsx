"use client";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard() {
  const [isSelected, setisSelected] = useState(null);
  const post = projects.find((post) => post.id === isSelected);
  return (
    <motion.div
      className={`flex  flex-wrap justify-center items-center gap-4 not-prose `}
    >
      {projects.map((item) => (
        <motion.div
          className="bg-transparent border border-cyan-100  rounded-md  relative aspect-auto sm:min-w-[350px]"
          layoutId={item.id}
          onClick={() => setisSelected(item.id)}
          key={item.id}
          whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 flex flex-col  justify-end items-start  cursor-pointer bg-black/90 opacity-0  hover:opacity-100 duration-200 px-3 sm:px-5 py-3 sm:py-5 rounded-md overflow-hidden "
            whileHover={{ scale: 1, transition: { duration: 0.4 } }}
          >
            <h2 className="text-red-50 text-center text-[15px] sm:text-xl">
              {item.name}
            </h2>
            <p className="text-white my-2 text-[12px] sm:my-3"> {item.about}</p>

            <span className=" flex gap-2 flex-wrap  text-white">
              {item.techStacks.map((tech, i) => (
                <p
                  className="bg-slate-800 text-white px-2 self-center text-center py-1   rounded-md flex-wrap text-[12px]"
                  key={i}
                >
                  {tech}
                </p>
              ))}
            </span>
          </motion.div>
          <div className="w-full">
            <Image
              src={item.image}
              width={500}
              height={500}
              alt=""
              className="object-cover aspect-auto  w-full rounded-md"
              priority
            />
          </div>
        </motion.div>
      ))}

      <div>
        {isSelected && (
          <motion.aside
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            layoutId={isSelected}
            className="fixed inset-x-0 inset-y-0 w-fit lg:inset-x-[40%] lg:right-0  overflow-auto
            py-3 px-5 lg:px-7 rounded-md dark:bg-slate-950 bg-slate-200 border border-slate-600  scrollbar-none"
          >
            <div
              className="flex  gap-1  cursor-pointer hover:scale-105 hover:underline duration-300 w-fit mb-6 py-2 "
              onClick={() => setisSelected(null)}
            >
              <Image
                src={"/assets/back-icon.png"}
                width={30}
                height={30}
                alt=""
                className="w-fit rounded-md text-center "
                priority
              />
              back
            </div>
            <div className="con  flex flex-col  gap-3  items-start h-fit mx-3  justify-center  rounded-md ">
              <div className="my-3 flex justify-start items-center  ">
                <Image
                  src={post.image}
                  width={600}
                  height={600}
                  alt=""
                  className="aspect-auto object-cover rounded-md "
                />
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-1 ">
                <div className=" dark:text-slate-200 text-slate-700 my-2 ">
                  <span className="font-bold underline underline-offset-2">
                    About
                  </span>
                  <p>{post.description}</p>
                </div>
                <div className="">
                  <div className=" gap-2 items-center text-base font-bold flex flex-wrap text-center ">
                    <p className="text-start"> Tech Stacks :</p>
                    <span className="flex gap-2 flex-wrap">
                      {post.techStacks.map((tech, i) => (
                        <p
                          className="bg-slate-600 text-white px-2 py-1 w-max rounded-md flex  gap-3"
                          key={i}
                        >
                          {tech}
                        </p>
                      ))}
                    </span>
                  </div>
                  <div className="my-5 ">
                    <span>Live site : </span>
                    <Link
                      href={post.link}
                      className="text-gray-600 hover:text-black dark:hover:text-white hover:underline"
                      target="_blank"
                    >
                      {post.link}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </div>
    </motion.div>
  );
}
