import ProjectCard from "@/components/ProjectCard";
import { Suspense } from "react";
const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <ProjectCard />
    </Suspense>
  );
};

export default Page;
