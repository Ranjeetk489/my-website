import React from "react";
import PageTitle from "../components/PageTitle";
import Project from "../components/Project";

const projects = () => {
  return (
    <div className="w-[80vw] mx-auto mt-8">
      <PageTitle>Projects.</PageTitle>
      <div className="h-full mt-[1.5rem]">
        <Project></Project>
      </div>
    </div>
  );
};

export default projects;
