import React from "react";
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";

const Layout = ({ children, title, image }) => {
  return (
    <>
      <Header title={title} image={image} />
      <main className="relative">
        <Menu />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
