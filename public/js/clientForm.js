window.onload = function() {
  var width = window.innerWidth;
  makeNavDisappear();
  proj_img_overlay();
  project_resize();
  removePic(width);
  removeProject(width);
  loadAllProjects();
  carousel(width);
}

var addEvent = function(object, type, callback) {
  if (object == null || typeof(object) == 'undefined') return;
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
function loadAllProjects(){
  let loadAllBtn = document.getElementById('load-all-btn');

    loadAllBtn.addEventListener('click',function(){
        let loadContent = document.getElementById('load-all-content');
        console.log('click')
        console.log(loadContent.style.display)
        if(!loadContent.style.display || loadContent.style.display == 'none'){
            loadContent.style.display = 'block';
            this.textContent = "View Less"
        }else{
            loadContent.style.display = 'none';
            this.textContent = "View All"
        }
    });
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
  addEvent(window, "resize", function(event) {
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
    projectImg[i].addEventListener('mouseenter', function() {
      for (var ix = 0; ix < this.childNodes.length; ++ix) {
        if (this.childNodes[ix].className &&
          this.childNodes[ix].className.includes("centered")) {
          this.childNodes[ix].style.display = 'block';
        }
      }
    });

    projectImg[i].addEventListener('mouseleave', function() {
      for (var ix = 0; ix < this.childNodes.length; ++ix) {
        if (this.childNodes[ix].className &&
          this.childNodes[ix].className.includes("centered")) {
          this.childNodes[ix].style.display = 'none';
        }
      }
    });
  }
}

function carousel(x){
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
      cssEase:'linear',
      autoplaySpeed: 3000,
    });
  });
}

function makeNavDisappear() {
  var navBar = document.querySelectorAll(".navbar-toggler")[0];
  var navBtn = document.querySelectorAll(".myDis");
  if (screen.width <= 992) {
    for (var i = 0; i < navBtn.length; ++i) {
      navBtn[i].addEventListener("click", function() {
        if (screen.width <= 992) {
          console.log(screen.width);
          navBar.click();
        }

      });
    }
  }
}

addEvent(window, "resize", function(event) {
  makeNavDisappear();
});


