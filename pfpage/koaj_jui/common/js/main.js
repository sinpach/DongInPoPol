var dt;


dt = new Date();
$(document).ready(() => {
  // datepicker 위치
  var dateOn = false;//
  var onCalendar = document.querySelectorAll(".date");
  
  for (let i = 0; i < onCalendar.length; i++) {
    var calendar = document.querySelector(".datepicker");
    onCalendar[i].addEventListener("click", (e) => {
      

      if (e.target.parentElement.parentElement.classList.contains("date")) {
        var dateWrap = e.target.parentElement.parentElement
      } else if (e.target.parentElement.classList.contains("date")){
        var dateWrap = e.target.parentElement
      }
     
      if (onCalendar[i].classList.contains("on")) {

        calendar.classList.remove("on")
        dateWrap.classList.remove("on")
        return dateOn = false;
      } else {
        onCalendar.forEach(el => {
          el.classList.remove("on")
        });

        calendar.classList.add("on")
        dateWrap.classList.add("on")

        var dateEl = document.querySelector(".date.on").getBoundingClientRect()
        calendar.style.left = dateEl.left + "px";
        calendar.style.top = dateEl.top + dateEl.height + "px";
        return dateOn = true;
      }
      
    });

    
  }
  dateW(year, month);
  document.addEventListener("click", (e) => {
    var elOn = e.target.closest("#datepicker")
    if (dateOn) {
       if (!elOn) {
         var a = e.target.closest(".date")
         if (!a) {
           
           document.querySelectorAll(".date").forEach(el => {
             el.classList.remove("on")
           });
           document.querySelector("#datepicker").classList.remove("on")
           return dateOn = false;
         }
      } 
    }
  });
  
  
});




function dp (){
  var y = document.querySelector("#dateYear select")
  var m = document.querySelector("#dateMonth select")

  dateP.page(y.options[y.selectedIndex].value, m.options[m.selectedIndex].value);
  var nextBtn = document.querySelector(".datepicker .next")
  var prevBtn = document.querySelector(".datepicker .prev");

  if (y.options[y.selectedIndex].value == maxYear && m.options[m.selectedIndex].value == 12) {
    nextBtn.style.display = "none"
  } else {
    nextBtn.style.display = "block"
  }

  if (y.options[y.selectedIndex].value == minYear && m.options[m.selectedIndex].value == 1) {

    prevBtn.style.display = "none"
  } else {
    prevBtn.style.display = "block"
  }
}


function fn_sel_y(val) {
  var ele = document.querySelector("#dateYear select")

  for (i = 0, j = ele.length; i < j; i++) {
    if (ele.options[i].value == val) {
      ele.options[i].selected = true;
      break;
    }else{
      ele.options[i].selected = false;
    }
  }
}
function fn_sel_m(val) {
  var ele = document.querySelector("#dateMonth select")

  for (i = 0, j = ele.length; i < j; i++) {
    if (ele.options[i].value == val) {
      ele.options[i].selected = true;
      break;
    } else {
      ele.options[i].selected = false;
    }
  }
}



function dateW(year,month){
  
    maxYear = year + 5;
    minYear = year - 5;
  
  var yearSelect = document.querySelector("#dateYear select");
  var monthSelect = document.querySelector("#dateMonth select");

  for (var i = minYear; i < maxYear + 1; i++) {
    var yaerOption = document.createElement("option");
    yaerOption.text = i + "년";
    yaerOption.value = i;
    if (i == year) {
      yaerOption.selected = true;
    }
    yearSelect.options.add(yaerOption);

  }


  for (var i = 1; i < 13; i++) {
    var monthOption = document.createElement("option");
    monthOption.text = i + "월";
    monthOption.value = i;
    if (i == month) {
      monthOption.selected = true;
    }
    monthSelect.options.add(monthOption);
  }
}














var checkbox = document.querySelectorAll(".chk i");
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", (e) => {
    var checked = e.target.previousElementSibling
    if (e.target.classList.contains("icon-checkbox")) {
      e.target.className = "icon-checkbox2"
      checked.checked = false;
    } else {
      e.target.className = "icon-checkbox"
      checked.checked = true;
    }
  });

}


function dateHide() {
  var removeDateOn = document.querySelectorAll(".on");
  removeDateOn.forEach(el => {
    el.classList.remove('on');
  });
}

jui.ready(["ui.datepicker"], function (datepicker) {
  dateP = datepicker("#datepicker", {
    titleFormat: "",
    format: "yyyy-MM-dd",
    event: {
      next: function (e) {
        var m = document.querySelector("#dateMonth select");
        var selectDateM = m.options[m.selectedIndex].value;

        var y = document.querySelector("#dateYear select");
        var selectDateY = y.options[y.selectedIndex].value;

        var nextBtn = document.querySelector(".datepicker .next")
        var prevBtn = document.querySelector(".datepicker .prev");
        prevBtn.style.display = "block";
        selectDateY = parseFloat(selectDateY);
        selectDateM++;
        if (selectDateM > 12) {
          selectDateM = 1;
          selectDateY++;

        }
        if (selectDateY == maxYear && selectDateM == 12) {
          nextBtn.style.display = "none"
        } else {
          nextBtn.style.display = "block"
        }
        fn_sel_y(selectDateY);
        fn_sel_m(selectDateM);
        dp()

        dt.setFullYear(selectDateY);
        dt.setMonth(selectDateM);
        dateP.setOption("date", dt)

      },
      prev: function (e) {
        var m = document.querySelector("#dateMonth select");
        var selectDateM = m.options[m.selectedIndex].value;

        var y = document.querySelector("#dateYear select");
        var selectDateY = y.options[y.selectedIndex].value;

        var nextBtn = document.querySelector(".datepicker .next")
        var prevBtn = document.querySelector(".datepicker .prev");
        nextBtn.style.display = "block";
        selectDateM--;
        selectDateY = parseFloat(selectDateY);
        if (selectDateM < 1) {
          selectDateM = 12;
          selectDateY--;
        }
        if (selectDateY == minYear && selectDateM == 1) {

          prevBtn.style.display = "none"
        } else {
          prevBtn.style.display = "block"
        }
        fn_sel_y(selectDateY);
        fn_sel_m(selectDateM);
        dp()

        dt.setFullYear(selectDateY);
        dt.setMonth(selectDateM);
        dateP.setOption("date", dt)

      },
      select: function (date, e) {
        var selectInput = document.querySelector(".date.on input")
        selectInput.value = date;
        document.querySelector(".date.on").classList.remove("on")
        document.querySelector(".datepicker").classList.remove("on")

      },

    },
    tpl: {
      date: $("#tpl_date").html()
    }

  });



  var todayDateY = dateP.getDate().getFullYear();
  var todayDateM = dateP.getDate().getMonth() + 1;
  year = todayDateY
  month = todayDateM;

});