window.onload = function () {
  var width = window.innerWidth;
  makeNavDisappear();
  proj_img_overlay();
  project_resize();
  removePic(width);
  removeProject(width);
  loadAllProjects();
  carousel(width);
  scrollToElement();
}

var addEvent = function (object, type, callback) {
  if (object == null || typeof (object) == 'undefined') return;
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent("on" + type, callback);
  } else {
    object["on" + type] = callback;
  }
};


function removePic(x) {
  var myPic = document.getElementsByClassName('my-gif')[0];
  if (myPic && x < 992) {
    myPic.style.display = "none";
  } else if (myPic && myPic.style.display == "none") {
    myPic.style.display = "block";
  }
}
function loadAllProjects() {
  let loadAllBtn = document.getElementById('load-all-btn');

  loadAllBtn.addEventListener('click', function () {
    let loadContent = document.getElementById('load-all-content');
    if (!loadContent.style.display || loadContent.style.display == 'none') {
      showAll(loadContent,this);
    } else {
      loadContent.style.display = 'none';
      this.textContent = "View All"
    }
  });
}

function showAll(loadContent,loadAllBtn){
    if(!loadAllBtn){
      loadAllBtn = document.getElementById('load-all-btn');
      loadContent = document.getElementById('load-all-content');
    }

    loadContent.style.display = 'block';
    loadAllBtn.textContent = "View Less"
}

function removeProject(x) {
  var bigScreen = document.querySelectorAll('.myBigScreen')[0];
  var projectTag = document.getElementById('projectTag');
  // var smallScreen=document.querySelectorAll('.mySmallScreen')[0];
  // if (x < 992) {
  //   bigScreen.style.display = "none";
  //   projectTag.style.display = "none";
  // } else {
  //   bigScreen.style.display = "block";
  //   projectTag.style.display = "block";
  // }
}

function project_resize() {
  addEvent(window, "resize", function (event) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;
    removeProject(x);
    removePic(x);

  });
}

function proj_img_overlay() {
  var projectImg = document.getElementsByClassName('img-container');
  for (var i = 0; i < projectImg.length; ++i) {
    projectImg[i].addEventListener('mouseenter', function () {
      for (var ix = 0; ix < this.childNodes.length; ++ix) {
        if (this.childNodes[ix].className &&
          this.childNodes[ix].className.includes("centered")) {
          this.childNodes[ix].style.display = 'block';
        }
      }
    });

    projectImg[i].addEventListener('mouseleave', function () {
      for (var ix = 0; ix < this.childNodes.length; ++ix) {
        if (this.childNodes[ix].className &&
          this.childNodes[ix].className.includes("centered")) {
          this.childNodes[ix].style.display = 'none';
        }
      }
    });
  }
}

function carousel(x) {
  let slidesToShow = 3;
  if (x < 992) {
    slidesToShow = 1;
  }
  $(document).ready(function () {
    $('.my-slides').slick({
      dots: false,
      prevArrow: false,
      nextArrow: false,
      autoplay: true,
      slidesToShow,
      infinite: true,
      cssEase: 'linear',
      autoplaySpeed: 3000,
    });
  });
}

function makeNavDisappear() {
  var navBar = document.querySelectorAll(".navbar-toggler")[0];
  var navBtn = document.querySelectorAll(".myDis");
  if (screen.width <= 992) {
    for (var i = 0; i < navBtn.length; ++i) {
      navBtn[i].addEventListener("click", function () {
        if (screen.width <= 992) {
          console.log(screen.width);
          navBar.click();
        }

      });
    }
  }
}

function scrollToElement() {
  let url = window.location.href;
  let id = url.split('=')[1];
  let element = document.getElementById(id);

  if(element){
    showAll()
    element.scrollIntoView();
    window.scrollBy(0, -100);  
  }
}

addEvent(window, "resize", function (event) {
  makeNavDisappear();
});


