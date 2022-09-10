import React, { FC } from "react";

type PageTitleProps = {
  children: string;
};

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <div className="text-[3.5rem] tracking-[2px]">{children}</div>;
};

export default PageTitle;
