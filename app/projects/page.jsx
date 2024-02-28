import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Image src={"/Cube-1s-200px"} width={200} height={200} alt="" />
        </div>
      }
    >
      <ProjectCard />
    </Suspense>
  );
};

export default Page;
