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
      className={`flex  flex-wrap justify-center items-center gap-4  `}
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
            className="absolute inset-0 flex flex-col  justify-end items-start cursor-pointer bg-black/90 opacity-0  hover:opacity-100 duration-200 px-3 py-1 rounded-md overflow-hidden"
            whileHover={{ scale: 1, transition: { duration: 0.4 } }}
          >
            <h2 className="text-red-50 text-center text-[17px] sm:text-2xl">
              {item.name}
            </h2>
            <p className="text-white"> {item.about}</p>

            <span className=" flex flex-wrap  text-white">
              {item.techStacks.map((tech, i) => (
                <p
                  className="bg-slate-800 text-white px-1 self-center text-center py-1 mx-1 rounded-md flex-wrap text-[12px]"
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
              className="object-cover aspect-video  w-full rounded-md h-[300px]"
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
            className="fixed inset-x-0 inset-y-0 w-fit md:inset-x-[50%] md:right-0  overflow-auto
            py-3 px-2 lg:px-7 rounded-md dark:bg-slate-950 bg-slate-200 border border-slate-600  scrollbar-none"
          >
            <div
              className="flex items-center gap-1  lg:my-4 cursor-pointer hover:scale-105 hover:underline duration-300 w-fit my-3 "
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
            <div className="con  flex flex-col  gap-3  items-start h-full mx-3  justify-center  rounded-md ">
              <div className="flex-1 flex justify-center items-center ">
                <Image
                  src={post.image}
                  width={500}
                  height={500}
                  alt=""
                  className="aspect-video object-cover rounded-md "
                />
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-1 ">
                <motion.h3 initial={{ y: 100, opacity: 0 }} className="my-0">
                  {post.name}
                </motion.h3>
                <p className=" dark:text-white my-0"> {post.description}</p>
                <div className="m-0">
                  <span className="m-0  gap-3 items-center text-base font-bold flex flex-wrap">
                    Tech Stacks :
                    {post.techStacks.map((tech, i) => (
                      <p
                        className="bg-slate-600 text-white px-2 py-1 w-max rounded-md flex  gap-3"
                        key={i}
                      >
                        {tech}
                      </p>
                    ))}
                  </span>
                  <div>
                    <span>Live site : </span>
                    <Link
                      href={post.link}
                      className="text-gray-600"
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
