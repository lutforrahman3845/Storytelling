
const navIcon = document.querySelector('#navIcon');
const showNavDiv = document.querySelector('#show-navDiv');
const clossIcon = document.querySelector('#closs-icon');


//show nav div
navIcon.addEventListener('click', function(){
  showNavDiv.style.display = 'block';
});
clossIcon.addEventListener('click', function(){
  showNavDiv.style.display = 'none';
});

//text show and show less
function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


//clike nav link automatic scrolling veiw linked div
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

//Hide and Show Unitydiv
function showContent(unitydivId) {
  // Hide all Unitydiv divs
  document.querySelectorAll('.u-div').forEach(function(unityDiv) {
      unityDiv.style.display = 'none';
  });

  // Show the selected Unitydiv div
  document.getElementById(unitydivId).style.display = 'block';

  resetButtonScale();
}

//Hide and Show Tutorial Div
function showTutorial(tutorialdivId) {
  document.querySelectorAll('.t-div').forEach(function(tutorialDiv) {
      tutorialDiv.style.display = 'none';
  });

  document.getElementById(tutorialdivId).style.display = 'block';

  resetTutorialButtonScale();
}

  // Change the scale of the button
function scaleButton(buttonId) {

  var buttons = document.querySelectorAll("#unitydiv-button button");
  buttons.forEach(function(button) {
      button.classList.remove("btn-scale");
  });
  
  document.getElementById(buttonId).classList.add("btn-scale");
}

 // Reset the scale for all buttons
function resetButtonScale() {
  var buttons = document.querySelectorAll("#unitydiv-button button");
        buttons.forEach(function(button) {
            button.classList.remove("btn-scale");
        });
}
function resetTutorialButtonScale() {
  var buttons = document.querySelectorAll("#tutorials-btn button");
        buttons.forEach(function(button) {
            button.classList.remove("btn-scale");
        });
}


// Animation catagory box 

gsap.from('#top-div', {
  y:'300',
  opacity:0,
  duration:2.5,
    scrollTrigger : {
    trigger :"#top-div",
    scroller : "body",
    }
})