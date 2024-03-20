packs = document.getElementsByClassName('pack');
packBtns = document.getElementsByClassName('packageBtn')
function active(btn) {
    btn.style.backgroundColor="var(--dark)";
}
function deactive(btn1) {
    btn1.style.backgroundColor="var(--light)";
}
packBtns[1].style.backgroundColor="var(--light)";
packBtns[0].style.backgroundColor="var(--lightest)";
packBtns[0].style.border="2px solid var(--darkMax)";
packBtns[1].style.border="2px solid var(--light)";
for (let i = 0; i < packBtns.length; i++) {
    const pakagebtn = packBtns[i];
    packs[1].style.height="0%";
    packs[i].style.overflow="hidden";
    packs[i].style.transition="1s linear" ;
    pakagebtn.addEventListener('click',function packageFunction() {
    if(pakagebtn == packBtns[0]){
            packs[0].style.height="100%";
            packs[1].style.height="0%";
            packBtns[1].style.backgroundColor="var(--light)";
            packBtns[0].style.backgroundColor="var(--lightest)";
            packBtns[0].style.border="2px solid var(--darkMax)";
            packBtns[1].style.border="2px solid var(--light)";
        }else if(pakagebtn == packBtns[1]){
            packs[1].style.height="100%";
            packs[0].style.height="0%";
            packBtns[0].style.backgroundColor="var(--light)";
            packBtns[1].style.backgroundColor="var(--lightest)";
            packBtns[1].style.border="2px solid var(--darkMax)";
            packBtns[0].style.border="2px solid var(--light)";
        }
    });
};