"use client";

import React from "react";
import TopHeader from "@/components/Top_Header";
import NavBar from "@/components/Navber";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopHeader/>
      <NavBar/>
      
      <main>{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 Your Website. All rights reserved.
      </footer>
      </>
  );
};

export default Layout;