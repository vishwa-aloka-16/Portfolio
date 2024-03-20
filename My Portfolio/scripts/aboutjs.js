// //About Page Buttons fuction
const aboutButtons = document.getElementsByClassName('b');
const personalInfo = document.getElementById("PersonalInfomation");
const acedemicInfo = document.getElementById("AcedemicInfomation");
const otherInfo = document.getElementById("OtherInformation");
personalInfo.style.height="50%"
acedemicInfo.style.height="5%"
otherInfo.style.height="4%"
function aboutButtonsstyleremove(e) {
    aboutButtons[e].style.backgroundColor="var(--dark)";
    aboutButtons[e].style.color="var(--lightest)";
    aboutButtons[e].style.border="2px solid var(--dark)";
}
function aboutButtonsstyleadd(e) {
    aboutButtons[e].style.backgroundColor="var(--lightest)" ;
    aboutButtons[e].style.color="var(--dark)" ;
    aboutButtons[e].style.border="2px solid var(--dark)" ;
}
// function colorchangeabouttext(p) {
//     p.style.backgroundColor="var(--dark)";
//     p.style.color="var(--lightest)";
// }
// function colorchangeabouttextback(p) {
//     p.style.color="var(--darkMax)";
//     p.style.backgroundColor="var(--lightest)";
// }
aboutButtonsstyleadd(0);
// colorchangeabouttext(personalInfo);
for (let index = 0; index < aboutButtons.length; index++) {
    const aboutButton = aboutButtons[index];
    aboutButton.addEventListener("click",function aboutInfoFunction() {
        personalInfo.style.height="4%";
        acedemicInfo.style.height="4%";
        otherInfo.style.height="3%";
        aboutButtonsstyleremove(0);
        aboutButtonsstyleremove(1);
        aboutButtonsstyleremove(2);
        // colorchangeabouttextback(personalInfo);
        // colorchangeabouttextback(acedemicInfo);
        // colorchangeabouttextback(otherInfo);
        if (aboutButton == aboutButtons[0]) {
            personalInfo.style.height="100%";
            // colorchangeabouttext(personalInfo);
            aboutButtonsstyleadd(0);
        }else if (aboutButton == aboutButtons[1]) {
            acedemicInfo.style.height="100%";
            aboutButtonsstyleadd(1);
            // colorchangeabouttext(acedemicInfo);
        }else{
            otherInfo.style.height="100%";
            aboutButtonsstyleadd(2);
            // colorchangeabouttext(otherInfo);
        }
    })
}