import React from "react";
import Navbar from "../navbar/Navbar";

interface Layout{
  children:React.ReactNode;
}

export default function Layout({children}:Layout){
  return(<>
  <Navbar/>
  {
    children
  }
  </>);

};