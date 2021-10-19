var clickEl = document.querySelectorAll(".vmenu a");
// var depth_2 = document.querySelectorAll(".vmenu>ul>li a");

for (var i = 0; i < clickEl.length; i++) {
  clickEl[i].addEventListener("click", (e)=>{
    var n = e.target.getAttribute("tab-num");
    
    if (n == null) {
      var avtiveAll = document.querySelectorAll(".vmenu .title.active")
      if (e.target.classList.contains("subtitle")){
        return false;
      }else{
        avtiveAll.forEach(e => {
          e.classList.remove("active")
          e.nextElementSibling.classList.remove("active")
        });
        e.target.classList.add("active")
        e.target.nextElementSibling.classList.add("active")
      }
      
    }else{
      if (e.target.classList.contains("active")) {
        return false;
      } else {
        var avtiveAll = document.querySelectorAll(".vmenu .active")
        avtiveAll.forEach(e => {
          e.classList.remove("active")
        });
        
        var secondDepth = e.target.parentElement.parentElement
        
        if (secondDepth.classList.contains("submenu")) {
          var thirdDdepth = e.target.parentElement.parentElement.parentElement.parentElement
          if (thirdDdepth.classList.contains("submenu")) {
            thirdDdepth.classList.add("active")
            thirdDdepth.previousElementSibling.classList.add("active")
          }else{
            secondDepth.classList.add("active")
            secondDepth.previousElementSibling.classList.add("active")
          }
          
        }
        document.querySelector(".vmenu a[tab-num='" + n + "']").classList.add("active")
      }
    }
    

  });
}

