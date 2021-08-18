import React from "react";
import { useEffect } from "react";
import MainLayoutBackoffice from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import ProjectCellBackoffice from "../../../components/projectCellBackoffice/ProjectCellBackoffice";
import apiEndPoint from "../../../lib/apiEndPoint";

export default function Projects(): JSX.Element {
  useEffect(()=> {
    fetchProjects();
  },[])
  
  const fetchProjects = async () => {
    const apiResponse = await fetch(apiEndPoint + "project/getprojects");
  }


  return (
    <MainLayoutBackoffice pageTitle={"projects"}>
      <div>HELLO</div>
      
    </MainLayoutBackoffice>
  );
}
