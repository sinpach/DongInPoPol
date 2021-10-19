

var sideMenu = document.querySelectorAll(".vmenu a:not(.title)");
var alertBtn = document.querySelectorAll(".alert a.btn");


  
jui.ready(["ui.tab"], (tab) =>{
    
    ui_tab = tab("#ui_tab", {
      
      nodes: [
        { text: sideMenu[0].innerText, tabNum: 0, url: sideMenu[0].getAttribute("data-url") },
      ],
      
      event: {
        click: (data, e) =>{
          
          if (e.target.classList.contains("icon")) {
            return false;
            
          }
          //  else if (e.target.getAttribute('tab-num') >= sideMenu.length ){
          //   alert(e.target.getAttribute('tab-num'))
          // }
          else{
            var existenceIframe = document.querySelector("#iframe_wrap li[tab-num='" + e.target.getAttribute('tab-num') + "']");
            var activeIframe = document.querySelectorAll("#iframe_wrap li");
            var activeUrl = ui_tab.options.nodes[e.target.getAttribute('tab-num')].url;
            activeIframe.forEach(e => {
              e.classList.remove("active");
            });
            if (existenceIframe == null) {
              iframeAdd(e.target.getAttribute('tab-num'), activeUrl)
            } else {
              
              activeSide(e.target.getAttribute('tab-num'))
            }
            document.querySelector("#iframe_wrap li[tab-num='" + e.target.getAttribute('tab-num') + "']").classList.add("active")
            swiper.update();
            
          }
         
        },
        change: ()=>{
          tabCallBack();
        },

        
      },
      tpl: {
        node: "<li class='swiper-slide'><a href='#' tab-num='<!= tabNum !>'><!= text !></a><button class='tab_close' onclick='tab_close(this,<!= tabNum !>)'><span class='icon icon-close'></span></button></li>"
      },
      

    });

    for (var i = 0; i < sideMenu.length; i++ ) {
      sideMenu[i].setAttribute("tab-num", i);
      var sideMenuUrl = sideMenu[i].getAttribute("data-url"); 
      var sideMenuText = sideMenu[i].innerText;
      if (i > 0) ui_tab.options.nodes.push({ text: sideMenuText, tabNum: i, url: sideMenuUrl});
    }

  
  for (var l = 0; l < alertBtn.length; l++) {
    alertBtn[l].setAttribute("tab-num", i + l);
    var sideMenuUrl = alertBtn[l].getAttribute("data-url");
    var sideMenuText = alertBtn[l].getAttribute("title");
    if (i > 0) ui_tab.options.nodes.push({ text: sideMenuText, tabNum: i + l, url: sideMenuUrl });
  }
  
  });

function iframeAdd(i , url ,cl){
  if(cl){
    $("#iframe_wrap").append("<li  tab-num='" + i + "' class='" + cl + "'><iframe src='" + url + "' frameborder='0'></iframe></li>");
  }else{
    $("#iframe_wrap").append("<li  tab-num='" + i + "'><iframe src='" + url + "' frameborder='0'></iframe></li>");

  }
}
function activeSide (e){
  if (e >= sideMenu.length) {
    return false;
  }else{
    var activeSideA = document.querySelectorAll(".vmenu a[tab-num='" + e + "']");
    var twoDepth = activeSideA[0].parentElement.parentElement
    var threeDepth = activeSideA[0].parentElement.parentElement.parentElement.parentElement

    if (threeDepth.classList.contains('submenu')) {
      threeDepth.previousElementSibling.click();

    } else if (twoDepth.classList.contains('submenu')) {
      twoDepth.previousElementSibling.click();
    }
    activeSideA[0].click();
  }
  
}

for (let i = 0; i < sideMenu.length; i++) {
  sideMenu[i].addEventListener("click", (e) => {
    var tabIndex = e.target.getAttribute("tab-num");

    var tabTitle = ui_tab.options.nodes[tabIndex].text;
    var num = ui_tab.options.nodes[tabIndex].tabNum;
    var tabUrl = ui_tab.options.nodes[tabIndex].url;

    var tabChk = document.querySelectorAll("#ui_tab li a");

    arr = new Array();
    tabChk.forEach(el => {
      var arrData = el.getAttribute("tab-num")
      arr.push(arrData);
    });
    if (!arr.includes(tabIndex)) {
      ui_tab.append({ text: tabTitle, tabNum: num, url: tabUrl});
    }
    
    var showTab = document.querySelectorAll("#ui_tab a[tab-num='" + tabIndex + "']")
    showTab[0].click()
    
  });
  
}

for (let i = 0; i < alertBtn.length; i++) {
  alertBtn[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("icon")) {
      var tabIndex = e.target.parentElement.getAttribute("tab-num");

      var tabTitle = ui_tab.options.nodes[tabIndex].text;
      var num = ui_tab.options.nodes[tabIndex].tabNum;
      var tabUrl = ui_tab.options.nodes[tabIndex].url;

      var tabChk = document.querySelectorAll("#ui_tab li a");

      arr = new Array();
      tabChk.forEach(el => {
        var arrData = el.getAttribute("tab-num")
        arr.push(arrData);
      });
      if (!arr.includes(tabIndex)) {
        ui_tab.append({ text: tabTitle, tabNum: num, url: tabUrl });
      }

      var showTab = document.querySelectorAll("#ui_tab a[tab-num='" + tabIndex + "']")
      showTab[0].click()
    }else{
      var tabIndex = e.target.getAttribute("tab-num");

      var tabTitle = ui_tab.options.nodes[tabIndex].text;
      var num = ui_tab.options.nodes[tabIndex].tabNum;
      var tabUrl = ui_tab.options.nodes[tabIndex].url;

      var tabChk = document.querySelectorAll("#ui_tab li a");

      arr = new Array();
      tabChk.forEach(el => {
        var arrData = el.getAttribute("tab-num")
        arr.push(arrData);
      });
      if (!arr.includes(tabIndex)) {
        ui_tab.append({ text: tabTitle, tabNum: num, url: tabUrl });
      }

      var showTab = document.querySelectorAll("#ui_tab a[tab-num='" + tabIndex + "']")
      showTab[0].click()
    }
    

  });

}

function tab_close (el, idx){
  
  var removeEl = $("#ui_tab a[tab-num='" + idx + "']").parent().index();
  var tabLength = el.parentElement.parentElement.children.length - 1;
  if (el.parentElement.classList.contains("active")) {
    
    if (removeEl == tabLength) {
      var activeFirst = document.querySelectorAll(".vmenu a[tab-num='0']");
      activeFirst[0].click();
      
    }else{
      var n = el.parentElement.nextElementSibling.childNodes[0].getAttribute("tab-num")
      
      var activeNext = document.querySelectorAll(".vmenu a[tab-num='"+n+"']");
      var twoDepth = activeNext[0].parentElement.parentElement
      var threeDepth = activeNext[0].parentElement.parentElement.parentElement.parentElement

      if (threeDepth.classList.contains('submenu')) {
        
        
        var activeRemove = document.querySelectorAll(".vmenu .active");
        activeRemove.forEach(e => {
          e.classList.remove("active")
        });
        threeDepth.classList.add("active")
        threeDepth.previousElementSibling.classList.add("active")
        activeNext[0].classList.add("active")

        document.querySelector("#iframe_wrap .active").classList.remove("active");
        document.querySelector("#iframe_wrap li[tab-num='" + n + "']").classList.add("active");



      } else if (twoDepth.classList.contains('submenu')) {
        var activeRemove = document.querySelectorAll(".vmenu .active");
        activeRemove.forEach(e => {
          e.classList.remove("active")
        });
        twoDepth.classList.add("active")
        twoDepth.previousElementSibling.classList.add("active")
        activeNext[0].classList.add("active")
        
        document.querySelector("#iframe_wrap .active").classList.remove("active");
        document.querySelector("#iframe_wrap li[tab-num='" + n + "']").classList.add("active");
        
      }else {
        var activeRemove = document.querySelectorAll(".vmenu .active");
        activeRemove.forEach(e => {
          e.classList.remove("active")
        });
        activeNext[0].classList.add("active")
        
        document.querySelector("#iframe_wrap .active").classList.remove("active");
        document.querySelector("#iframe_wrap li[tab-num='" + n + "']").classList.add("active");
      }
    }
   
  }
  ui_tab.remove(removeEl);
  swiper.update();
  
}
var slideMaxLength = 12;
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: slideMaxLength,
  spaceBetween: 3,
  allowTouchMove: false,
  on: {
    slidesLengthChange:  ()=> {
      var tabLength = document.querySelectorAll("#ui_tab li").length
      
      if (slideMaxLength < tabLength) {
        var moveToSlide = tabLength - slideMaxLength
        swiper.slideTo(moveToSlide)
      }
    },
  }

});




$(document).ready(()=>{
  var startIframeData = ui_tab.options.nodes[0];
  iframeAdd(startIframeData.tabNum, startIframeData.url, 'active')
  swiper.update();
});


function tabCallBack(){
  var tabLength = document.querySelectorAll("#ui_tab li").length
  var moveToSlide = tabLength - slideMaxLength

  if (slideMaxLength > ui_tab.activeIndex()) {
    if (moveToSlide > 0) {
      swiper.slideTo(0)
    } 
  } else{
    swiper.slideTo(ui_tab.activeIndex() - slideMaxLength + 1)
  }
}

function elementIndexNum(ele){
  var _i = 0;
  while ((ele = ele.previousSibling) != null) {
    _i++;
  }
  return _i;
}
