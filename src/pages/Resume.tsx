import React from "react";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";


import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface DefaultLayoutExampleProps {
  fileUrl: string;
}

const Resume = () => {
  return (
    <div className="w-[90vw] mx-auto mt-[1rem]">
      <div>
        <PageTitle>Resume.</PageTitle>
      </div>
      <div className="text-slate-800">
        Reach out to me via my contact page.{" "}
        <Link href="#">
          <span>view</span>
        </Link>{" "}
        or download the resume
      </div>
      <Link href="#">Download Resume</Link>
            <DefaultLayoutExample fileUrl="https://drive.google.com/file/d/1vwrFfbLbTxXkL88H8mA7_FEKB4AcV9U7/view" />

    </div>
  );
};

export default Resume;

const DefaultLayoutExample: React.FC<DefaultLayoutExampleProps> = ({
  fileUrl,
}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};
