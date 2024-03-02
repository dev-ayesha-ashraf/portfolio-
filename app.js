let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none"
})

window.addEventListener("hashchange", function () {
    const url = this.window.location.href;
    const [_, section = null] = url.split("#");

    if (section === "home" || !section) {
        document.getElementById("home").style.display = "inline-table";
    } else {
        document.getElementById("home").style.display = "none";

    }
});
let isSideBarOpen = false;
document.querySelector("#checkbtn").addEventListener("click", () => {
    const sideBar = document.querySelector(".header");
    if (isSideBarOpen) {
        sideBar.style.left = "-285px"
        isSideBarOpen = false;
    } else {
        isSideBarOpen = true;
        sideBar.style.left = "-0px"
    }
})

let readLess = document.getElementById("readless").style.display = "none"

function handleBtn() {
    let fullText = " Welcome to my professional portfolio! As a seasoned MERN stack developer, I specialize in crafting elegant and high-performance web solutions that leverage MongoDB, Express.js, React.js, and Node.js. With a meticulous eye for detail and proficiency in both frontend and backend technologies, I deliver comprehensive digital experiences that seamlessly integrate user interfaces with robust server-side functionality. I am passionate about developing dynamic applications and building websites that not only showcase your brand but also provide exceptional user experiences. My expertise in HTML, CSS, JavaScript, React.js, and Node.js allows me to bring your designs to life while ensuring they are responsive, scalable, and performant across various devices and browsers.  I am constantly exploring new technologies and industry trends to stay ahead of the curve and enhance the user experiences of the projects I work on. Let's collaborate to elevate your online presence and create a cutting-edge digital experience that leaves a lasting impression on your audience. Explore my work, and let's turn your vision into reality with the power of the MERN stack.";
    document.getElementById("aboutPara").innerHTML = fullText;
    let readBtn = document.getElementById("readBtn").style.display = "none";
    let readLess = document.getElementById("readless").style.display = "block"
}
function handleLessBtn() {
    let originalText = "Welcome to my professional portfolio! As a seasoned MERN stack developer, I specialize in crafting elegant and high-performance web solutions that leverage MongoDB, Express.js, React.js, and Node.js. With a meticulous eye for detail and proficiency in both frontend and backend technologies, I deliver comprehensive digital experiences that seamlessly integrate user interfaces with robust server-side functionality."
    document.getElementById("aboutPara").innerHTML = originalText;
    readBtn.style.display = "block"
    readBtn.style.marginLeft = "30%"
    let readLess = document.getElementById("readless").style.display = "none"
}

let number = document.getElementById("number")
let counter = 0;
setInterval(() => {
    if(counter == 95){
clearInterval()
    }
    else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
   
}, 30)
let numberTwo = document.getElementById("number-two")
let counterTwo = 0;
setInterval(() => {
    if(counterTwo == 80){
clearInterval()
    }
    else{
        counterTwo += 1;
        numberTwo.innerHTML = counter + "%";
    }
   
}, 30)