import React from "react";  
import ProjectList from "./ProjectList"; 

const projectsData = [  
  {  
    name: "Project One",  
    about: "This is a brief about Project One.",  
    technologies: ["React", "Node.js", "Express"],  
  },  
  {  
    name: "Project Two",  
    about: "This is a brief about Project Two.",  
    technologies: ["HTML", "CSS", "JavaScript"],  
  },  

];  

function App() {  
  return (  
    <div>  
      <ProjectList projects={projectsData} />  
    </div>  
  );  
}  

export default App;