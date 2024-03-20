//Home Projects Slider
const projectList = document.getElementsByClassName("projectSliderProjects");
for (let i = 0; i < projectList.length; i++) {
    const project = projectList[i];
    project.style.opacity= "20%";
    
};
let e = 0;
function focused() {
    projectList[e].style.opacity= "100%";
    projectList[e].style.width= "40vw";
    if (e > 0){
        projectList[e-1].style.opacity= "20%";
        projectList[e-1].style.width= "20vw";
        
    }if(e==0){
        projectList[projectList.length-1].style.opacity= "20%";
        projectList[projectList.length-1].style.width= "20vw";
    }
    if(e < projectList.length-1){
        e++;
    }else{
        e=0;
    }
};
setInterval(focused, 2000);
