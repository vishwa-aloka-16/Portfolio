const ProjectList = document.getElementsByClassName("material-symbols-outlined"); 
const CloseButton = document.getElementById("closebtn2");
const DisplayData = document.getElementById("projectdisplayitem");
const nameid = document.getElementById("name");
const yearid = document.getElementById("year");
const lanid = document.getElementById("lan");
const Statuesid = document.getElementById("Statues");
const linkid = document.getElementById("link");
const pid = document.getElementById("p");
const projectimg = document.getElementById("projectimg")
var projctOne = { 
    ProjectName : "Ganthera Safari" , 
    Year  : 2021 , 
    LanguagesUsed:"HTML / CSS / JAVASCRIPT",
    SiteStatues:"Online",
    link:"gantherasafari.co",
    img:"/resources/img/project_gantera.PNG",
    p:"Our front-end website showcases the boat safari experiences offered by our company along the picturesque Maadu River. Designed with a focus on affordability, our site aims to efficiently present our services while minimizing production and operational costs. With a clean and straightforward layout, visitors can easily navigate through information about our safari packages, explore captivating images of the Maadu River. Our goal is to provide an immersive online experience that mirrors the beauty and tranquility of the Maadu River, all while remaining cost-effective.",
  };
  var projctTwo = { 
    ProjectName : "My Portfolio" , 
    Year  : 2024 , 
    LanguagesUsed:"HTML / CSS / JAVASCRIPT",
    SiteStatues:"Offline",
    link:"mysite.com",
    img:"/resources/img/project_myport.PNG",
    p:"Our front-end website showcases the boat safari experiences offered by our company along the picturesque Maadu River. Designed with a focus on affordability, our site aims to efficiently present our services while minimizing production and operational costs. With a clean and straightforward layout, visitors can easily navigate through information about our safari packages, explore captivating images of the Maadu River. Our goal is to provide an immersive online experience that mirrors the beauty and tranquility of the Maadu River, all while remaining cost-effective.",
  };
CloseButton.addEventListener('click', function closefunction() {
    DisplayData.style.bottom="-150vh";
});
for (let i = 0; i < ProjectList.length; i++) {
    const project = ProjectList[i];
    project.addEventListener('click', function closefunction() {
        DisplayData.style.bottom="0";
        if (project == ProjectList[0]) {
            nameid.textContent="Project Name: "+projctOne.ProjectName;
            yearid.textContent="Year : "+projctOne.Year;
            lanid.textContent="Languages Used: "+projctOne.LanguagesUsed;
            Statuesid.textContent=projctOne.link;
            Statuesid.textContent=projctOne.p;
            projectimg.src=projctOne.img;
        }else if (project == ProjectList[1]) {
            nameid.textContent="Project Name: "+projctTwo.ProjectName;
            yearid.textContent="Year : "+projctTwo.Year;
            lanid.textContent="Languages Used: "+projctTwo.LanguagesUsed;
            Statuesid.textContent=projctTwo.link;
            Statuesid.textContent=projctTwo.p;
            projectimg.src=projctTwo.img;
        }
    });
}