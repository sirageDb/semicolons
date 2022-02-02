import { useContext } from "react";
import apiEndPoint from "../config/apiEndPoint";
import { AuthContext } from "../lib/AuthContext";

export default class ProjectSDK {

  private authContext = useContext(AuthContext);
    //===================================================================================
    public unpublishProject = async (project_id : string) : Promise<void> => {
        const apiResponse = await fetch(apiEndPoint + "/project/privitiseproject", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization : this.authContext.getToken()
            },
            body: JSON.stringify({
              project_id: project_id,
            }),
          });
          if (apiResponse.status === 200) {
            window.alert("Project unpublished successfully");
            window.location.reload();
          } else {
            window.alert("Error unpublishing project");
          }
    }

    //===================================================================================
    public publishProject = async (project_id : string) :Promise<void>  => {
        const apiResponse = await fetch(apiEndPoint + "/project/publishproject", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization : this.authContext.getToken()
            },
            body: JSON.stringify({
              project_id: project_id,
            }),
          });
      
          if(apiResponse.status === 200){
            window.alert("Project published successfully");
            window.location.reload();
          }
          else {
            window.alert("Error publishing project")
          } 
    }


    //===================================================================================
    public deleteProject = async(project_id : string) : Promise<void> => {
        const isConfirmed = window.confirm("Delete project ?");
        if (isConfirmed) {
          const apiResponse = await fetch(apiEndPoint + "/project/deleteproject", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization : this.authContext.getToken()
            },
            body: JSON.stringify({
              project_id: project_id,
            }),
          });
          if (apiResponse.status === 200) {
            window.alert("Project deleted successfully");
            window.location.reload();
        } else {
            window.alert("Error deleting project");
          }
        }
    }
}