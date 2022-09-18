import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";

const Project = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="relative" key={Math.random()}>
            <div
              className="mt-8 border-l-[2px] border-[#d63129] pb-2 px-10  before:content-['⦿'] before:absolute before:-top-5 before:-left-[5px]  text-slate-700 mx-auto "
              
            >
              <div className="relative -top-[1rem]">
                <ProjectTitle>{item.title}</ProjectTitle>
              </div>
              <div className=" relative -top-2">
                <ProjectDesc>{item.description}</ProjectDesc>
              </div>

              <ProjectFeatures features={item.features} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface ProjectTitleType {
  children: React.ReactNode;
}

interface ProjectFeaturesType {
  features: string[];
}

const ProjectTitle: React.FC<ProjectTitleType> = ({ children }) => {
  return <div>{children}</div>;
};

interface ProjectDesc extends ProjectTitleType {}

const ProjectDesc: React.FC<ProjectDesc> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const ProjectFeatures: React.FC<ProjectFeaturesType> = ({ features }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {isActive && (
        <div className="">
          {features.map((feat: string) => {
            return (
              <div key={Math.random()}>
                <div className="flex items-baseline mt-1">
                  <FaDotCircle size={10} className="mr-1" /> {feat}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div onClick={() => setIsActive(!isActive)} className="text-[#d63129]">
        {isActive ? "see less" : "see features"}
      </div>
    </>
  );
};

export default Project;

type DataObjectType = {
  title: string;
  description: string;
  stack: string;
  features: Array<string>;
};

const data: Array<DataObjectType> = [
  {
    title: "OPEN SOURCE CONTRIBUTION",
    description: `Worked on an Israel based agriculture startup website. Wrote most of the
    components from scratch and implemented E2E testing.`,
    stack: `Nextjs, express, styled components, sql.`,
    features: [
      "Implemented Chartjs library to filter and show charts based on submitted Data",
      "Feature to upload Images",
      "Admin and User View & sepration of routes based on role",
      "Implemented multiple Context Providers for the flow of data throughout the application",
      "Implemented Authentication flow on frontend side.",
      "Used Styled components library heavily for styling",
    ],
  },
  {
    title: "OPEN SOURCE CONTRIBUTION",
    description: `Contributed to implementing dashboard for a highly functional discord bot from very
      scratch. The dashboard allowed the admin to control various setting and features of
      the bot.`,
    stack: "Reactjs and context Provider, sql with Flask graphql Apis",
    features: [
      "Directly helped in creation of multiple apis.",
      "Implemented Auth flow and routes.",
      "learnt and worked with discord developer API",
    ],
  },
  {
    title: "MY HEALTH",
    description: `The main
    functionalities of this app are the ability to store medical reports, prescription and
    share them at ease with the added functionality of filtering and searching records.
    Additional features include nearby hospitals, pharmacies and emergency contacts.`,
    stack:
      "Nextjs with Typescript, tailwindCss, redux, GoogleApis, Trpc,NextjsAuth, prisma, postgres",
    features: [
      "Implemented Auth via Nextjs Package",
      "Implemented and managed Scope via GoogleApis package",
      "Fetched Google Calendar events and mutated the data to show them in react-big-calendar to track prescription.",
      "Accessed Google Drive of user to upload and fetch reports",
      "Used Cloudinary to store prescription Images medical reports",
    ],
  },
];
