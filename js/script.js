// Global Variables
// Get the header
var arrowDown = document.getElementById("arrow-down");

// Get the offset position of the navbar
var sticky = 0;

var active = document.getElementById("list-section1");

window.addEventListener('scroll', arrowDown);
window.addEventListener('scroll', checkScrollPosition);
// When the user scrolls the page, execute myFunction


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function arrowDown() {
  if (window.pageYOffset > sticky) {
    arrowDown.classList.add("hide");
  } else {
    arrowDown.classList.remove("hide");
  }
}


function changeTime(){
    var hour = moment().format("HH");
    var minute = moment().format("mm");
    var second = moment().format("ss");

    var h1 = document.getElementById("hour-1");
    var h2 = document.getElementById("hour-2");
    var m1 = document.getElementById("minute-1");
    var m2 = document.getElementById("minute-2");
    var s1 = document.getElementById("second-1");
    var s2 = document.getElementById("second-2");
    
    changeText(h1, hour.substr(0,1));
    changeText(h2, hour.substr(1,1));
    changeText(m1, minute.substr(0,1));
    changeText(m2, minute.substr(1,1));
    changeText(s1, second.substr(0,1));
    changeText(s2, second.substr(1,1));
    setTimeout(changeTime, 1000);
}

function changeText(obj, text){
    if(obj.innerText != text){
        obj.innerText = text;
    }
}

changeTime();

function findDifferenceInDate(){
    var start = moment("2019-12-31", "YYYY-MM-DD");
    var end = moment().startOf('day');

    //Difference in number of days
    var noOfDays = moment.duration(end.diff(start)).asDays();
    var days = document.getElementById("day-1");
    changeText(days, noOfDays);
    setTimeout(findDifferenceInDate, 1000);

    console.log(start);
    console.log(end);
    console.log(noOfDays);
}

findDifferenceInDate();

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 800);
            return false;
        }
    }
});


function defineActive(){
    var active = document.getElementById("list-section1");
    console.log(active);
    return active;
}


function checkScrollPosition(clicked_id){
    
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var section1 = document.getElementById("section1").offsetTop-100;
    var section2 = document.getElementById("section2").offsetTop-100;
    var section3 = document.getElementById("section3").offsetTop-100;
    var section4 = document.getElementById("section4").offsetTop-100;
    var section5 = document.getElementById("section5").offsetTop-100;
    var section6 = document.getElementById("section6").offsetTop-100;
    var section7 = document.getElementById("section7").offsetTop-100;
    var section8 = document.getElementById("section8").offsetTop-100;
    var section9 = document.getElementById("section9").offsetTop-100;
    var section10 = document.getElementById("section10").offsetTop-100;
    if(scrollPosition<section1 ){
        console.log("help0");
        var none = "none";
        setListItemActive(none);
    }else if(scrollPosition>= section1 && scrollPosition< section2){
        console.log("help1");
        setListItemActive("list-section1");
    }else if(scrollPosition>= section2 && scrollPosition< section3){
        console.log("help2");
        setListItemActive("list-section2");
    }else if(scrollPosition>= section3 && scrollPosition< section4){
        console.log("help3");
        setListItemActive("list-section3");
    }else if(scrollPosition>= section4 && scrollPosition< section5){
        console.log("help4");
        setListItemActive("list-section4");
    }else if(scrollPosition>= section5 && scrollPosition < section6){
        console.log("help5");
        setListItemActive("list-section5");
    }else if(scrollPosition>= section6 && scrollPosition < section7){
        setListItemActive("list-section6");
    }else if(scrollPosition>= section7 && scrollPosition < section8){
        setListItemActive("list-section7");
    }else if(scrollPosition>= section8 && scrollPosition < section9){
        setListItemActive("list-section8");
    }else if(scrollPosition>= section9 && scrollPosition < section10){
        setListItemActive("list-section9");
    }else if(scrollPosition>= section10){
        setListItemActive("list-section10");
    }

}
function setListItemActive(clicked_id){
   // console.log("help");
   // create a variable that hold the previous active

    //console.log(section);
    //console.log(active);
    active.classList.forEach(item=>{
        if(item.startsWith('active')) {
            active.classList.remove(item);
        }
    });

    if(clicked_id == "none"){
        active = document.getElementById("list-section1");
    }else{
        var section = document.getElementById(clicked_id);
        section.classList.add("active");

        active = document.getElementById(clicked_id);
    }
}


/*
window.addEventListener('scroll', colorChangeOnScroll);
// Get the offset position
function colorChangeOnScroll() {
    var width = window.innerWidth;
    var bodyWrapper = document.getElementById("body-wrapper");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // double check if I really need a mobile one

        var sectionOne = document.getElementById("section-one-desktop");
        var sectionTwo = document.getElementById("section-two-desktop");
        var sectionThree = document.getElementById("section-three-desktop");

    var sectionOneScrollPosition = sectionOne.offsetTop - 700;
    var sectionTwoScrollPosition = sectionTwo.offsetTop - 400;
    var sectionThreeScrollPosition = sectionThree.offsetTop - 400;
    //console.log(sectionOneScrollPosition);
    
    if(scrollPosition < sectionOneScrollPosition){
        // remove any class with the color-
        bodyWrapper.classList.forEach(item=>{
            if(item.startsWith('color')) {
                bodyWrapper.classList.remove(item);
            }
        });
        bodyWrapper.classList.add("color-lightBlue");

    }else if(scrollPosition > sectionOneScrollPosition && scrollPosition < sectionTwoScrollPosition){
        // remove any class with the color-
        bodyWrapper.classList.forEach(item=>{
            if(item.startsWith('color')) {
                bodyWrapper.classList.remove(item);
            }
        });
        bodyWrapper.classList.add("color-lightBlue");

    }else if(scrollPosition > sectionTwoScrollPosition && scrollPosition < sectionThreeScrollPosition){
        // remove any class with the color-
        bodyWrapper.classList.forEach(item=>{
            if(item.startsWith('color')) {
                bodyWrapper.classList.remove(item);
            }
        });
        bodyWrapper.classList.add("color-transparent");

    }else if(scrollPosition > sectionThreeScrollPosition){
        // remove any class with the color-
        bodyWrapper.classList.forEach(item=>{
            if(item.startsWith('color')) {
                bodyWrapper.classList.remove(item);
            }
        });
        bodyWrapper.classList.add("color-black");

    }
  
}
*/