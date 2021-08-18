import React from "react";
import { useEffect } from "react";
import MainLayout from "../../components/mainLayout/MainLayout";
import ProjectCell from "../../components/projectCell/ProjectCell";
import apiEndPoint from "../../lib/apiEndPoint";

export default function Projects(): JSX.Element {
  useEffect(()=> {
    fetchProjects();
  },[])
  
  const fetchProjects = async () => {
    const apiResponse = await fetch(apiEndPoint + "project/getprojects");
  }


  return (
    <MainLayout pageTitle={"projects"}>
      <div>HELLO</div>
      
    </MainLayout>
  );
}
