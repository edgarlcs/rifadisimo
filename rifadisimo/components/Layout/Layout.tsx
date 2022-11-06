import Navbar from "./Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
