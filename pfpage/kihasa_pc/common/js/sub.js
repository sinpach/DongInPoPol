(function($){

	
	$(document).ready(function(){
	


		// 기관변천사 팝업
		$(".inDetail").click(function () {

			$(".Popup").fadeIn();
			$(".Popup").css("display", "flex");

		});

		$(".popContent>a.closeBtn").click(function () {
			$(".Popup").fadeOut();
		});

		$(".popupBg").click(function () {
			$(".Popup").fadeOut();
		});

		//연혁 팝업
		$(".careerArea a.link").click(function () {

			$(".Popup").fadeIn();
			$(".Popup").css("display", "flex");

		});

		

		


	});

	// 기관변천사 팝업 스크롤
	$(window).on("load", function () {
		$(".popScroll").mCustomScrollbar({
			axis: "y",
			scrollInertia: 500,
			theme: "light-3",
		});
	});

 // 역대기관장 
	function paddingLeft(){
		var leftPx = $(".subTopTit").css("margin-left");
		$(".topListArea .mCSB_container").css("padding-left", leftPx)
	}

	$(window).resize(function () {
		
		paddingLeft();
		
	});


	// 역대기관장 스크롤
	$(window).on("load", function () {
		
		$(".pdScrollArea").mCustomScrollbar({
			axis: "x",
			scrollInertia: 500,
			theme: "light-3",
			mouseWheel: "disable",
		});
		paddingLeft();
	});
	$(document).ready(function () {
			$(".our").mousemove(function (e) {
				var parentOffset = $(this).offset();
				var relX = e.pageX - parentOffset.left;
				var relY = e.pageY - parentOffset.top;
				$(".imgName").css({
					"top": relY - 30,
					"left": relX,
				});
			});
		$(".our a").mouseover(function(e){
			if (!$(this).hasClass("logo")) {
				var text = $(this).children("img").attr("alt")
				$(".imgName span").text(text)
			}
			
		});
		$(".our ").mouseover(function () {
			$(".imgName").show();
		});
		$(".our ").mouseout(function(){
			$(".imgName").hide();
		});
		
	});

	//테마별 클릭 
	$(document).ready(function () {
		$(".pr_list>ul>li>a").click(function () {
			
			var idx = $(this).parent().index();
			$(".themaCon>li>.timeLineDetail_2").hide();
			$(".themaCon>li").eq(idx).children(".timeLineDetail_2").fadeIn();
		});

		//연구자들 팝업
		$(".researchersList>a").click(function () {
			var name = $(this).text();

			$(".researchersPopup .rpName").html(name);
			$(".researchersPopup").fadeIn();
			$(".researchersPopup").css("display","flex");

		});
		
		$(".rpContent>a.closeBtn").click(function () {
			$(".researchersPopup").fadeOut();
		});

		$(".popupBg").click(function () {
			$(".researchersPopup").fadeOut();
		})

		// 기관별 클릭 
		$(".agencyList .list li>a").click(function () {
			$('.agencyList .list li a').removeClass("on");
			$(this).addClass("on");
		});

		$('.tableArea .list li a').click(function () {
			var conText = $(this).text();
			var con = $(this).parent().parent(".list").siblings('.detailInfo')
			con.children('h4').text(conText);
						
			$(this).parent().siblings().children('.on').removeClass('on')
			$(this).addClass("on");
		});

	});


	$(window).on("load", function () {
		$(".historyCon").mCustomScrollbar({
			axis: "y",
			scrollInertia: 500,
			theme: "light-3",
		});
	});
	
	// 연구자들 연도 가로 스크롤 
	
	$(window).on("load", function () {
		$(".scrollArea").mCustomScrollbar({
			axis: "x",
			scrollInertia: 500,
			theme: "light-3",
		});
	});

	// 정책과 연구 스크롤 
	$(window).on("load", function () {
		$(".policy .timeLine").mCustomScrollbar({
			axis: "x",
			scrollInertia: 500,
			setLeft: "-140px",
			theme: "light-3",
			mouseWheel: "disable",

		});
	});
	//연구성과 스크롤
	$(window).on("load", function () {
		$(".research .timeLine").mCustomScrollbar({
			axis: "x",
			scrollInertia: 500,
			// setLeft: "-140px",
			theme: "light-3",
			mouseWheel: "disable",

		});
	});
// 정책과 연구 클릭
$(document).ready(function () {
	$(".linkCon").click(function () {
		$('.timeLineDetail').addClass('on')
	});
});
// 연구성과 클릭
$(document).ready(function () {
	$(".linkArea>li>a").click(function () {
		// $('.timeLineDetail_2>.tableArea').removeClass('on')
		$('.timeLineDetail_2>.tableArea').addClass('on')
	});
});


var bindDiv = $("#lineGraph")
window.onload = function () {
	
	
	

		// //연구자들 차트
	if (document.getElementById('myChart')) {
		var ctx = document.getElementById('myChart').getContext('2d');
		var labels = ["보건분야", "보건사회분야", "사회분야"];
		var colorhex = ['rgb(92, 155, 213)', 'rgb(240, 136, 66)', 'rgb(165, 165, 165)'];
		var cnt = ['30%', '0%', '70%']
		var myChart = new Chart(ctx, {
			type: 'pie',

			data: {
				datasets: [{
					data: [97, 1, 244],
					backgroundColor: colorhex
				}],
				labels: labels,
				conut: cnt,


			},
			options: {

				events: [],

				responsive: true,
				legend: false,
				plugins: {
					datalabels: {
						color: ['#0459a6', '#ed6c00', '#000'],
						anchor: 'end',
						align: 'end',
						offset: 3,
						formatter: function (value, context) {
							return context.chart.data.labels[context.dataIndex] + '\n' + value + '건\n' + context.chart.data.conut[context.dataIndex];
						},
						font: {
							size: '14'
						},
						textAlign: 'center',
						padding: [{
								top: 10,
								bottom: 0,
								left: 45,
								rigght: 0,

							},
							{
								top: 250,
								bottom: 0,
								left: 20,
								rigght: 0,

							},
							{
								top: 30,
								bottom: 0,
								left: 30,
								rigght: 0,

							},
						],



					},
					labels: {
						render: 'image',
						position: 'outside',
						textMargin: -2,
						images: [{
								src: './common/img/sub/bd_icon1.png',
								width: 107,
								height: 7
							},
							{
								src: './common/img/sub/bd_icon2.png',
								width: 111,
								height: 7
							},
							{
								src: './common/img/sub/bd_icon3.png',
								width: 97,
								height: 7
							}
						]
					}
				}
			},
		})
	}
	if (document.getElementById('graph1')) {
		var ctx = document.getElementById('graph1').getContext('2d');
		var labels = ["정기간행물", "보고서"];
		var colorhex = ['rgb(92, 155, 213)', 'rgb(240, 136, 66)'];
		var cnt = ['30%', '0%']
		var myChart = new Chart(ctx, {
			type: 'pie',

			data: {
				datasets: [{
					data: [85, 322],
					backgroundColor: colorhex
				}],
				labels: labels,
				conut: cnt,


			},
			options: {

				events: [],

				responsive: true,
				legend: false,
				plugins: {
					datalabels: {
						color: ['#0459a6', '#ed6c00', '#000'],
						anchor: 'center',
						align: 'end',
						offset: 3,
						formatter: function (value, context) {
							return context.chart.data.labels[context.dataIndex] + '\n' + value + '건\n' + context.chart.data.conut[context.dataIndex];
						},
						font: {
							size: '14'
						},
						textAlign: 'center',
						padding: [{
								top: -60,
								bottom: 10,
								left: 160,
								rigght: 0,

							},
							{
								top: -50,
								bottom: 0,
								left: 180,
								rigght: 0,

							},
							{
								top: 30,
								bottom: 0,
								left: 30,
								rigght: 0,

							},
						],



					},
					labels: {
						render: 'image',
						position: 'outside',
						textMargin: -2,
						images: [{
								src: './common/img/sub/bd_icon1.png',
								width: 107,
								height: 7
							},
							{
								src: './common/img/sub/bd_icon4.png',
								width: 111,
								height: 7
							},
							{
								src: './common/img/sub/bd_icon3.png',
								width: 97,
								height: 7
							}
						]
					}
				}
			},
		})
	}
	if (document.getElementById('graph2')) {
		var ctx = document.getElementById('graph2').getContext('2d');
		var labels = ["보건분야", "보건사회분야", "사회분야"];
		var colorhex = ['rgb(92, 155, 213)', 'rgb(240, 136, 66)', 'rgb(165, 165, 165)'];
		var cnt = ['30%', '0%', '70%']
		var myChart = new Chart(ctx, {
			type: 'pie',

			data: {
				datasets: [{
					data: [97, 1, 244],
					backgroundColor: colorhex
				}],
				labels: labels,
				conut: cnt,


			},
			options: {

				events: [],

				responsive: true,
				legend: false,
				plugins: {
					datalabels: {
						color: ['#0459a6', '#ed6c00', '#000'],
						anchor: 'end',
						align: 'end',
						offset: 3,
						formatter: function (value, context) {
							return context.chart.data.labels[context.dataIndex] + '\n' + value + '건\n' + context.chart.data.conut[context.dataIndex];
						},
						font: {
							size: '14'
						},
						textAlign: 'center',
						padding: [{
								top: 10,
								bottom: 0,
								left: 45,
								rigght: 0,

							},
							{
								top: 250,
								bottom: 0,
								left: 20,
								rigght: 0,

							},
							{
								top: 30,
								bottom: 0,
								left: 30,
								rigght: 0,

							},
						],



					},
					labels: {
						render: 'image',
						position: 'outside',
						textMargin: -2,
						images: [{
								src: './common/img/sub/bd_icon1.png',
								width: 107,
								height: 7
							},
							{
								src: './common/img/sub/bd_icon2.png',
								width: 111,
								height: 7
							},
							{
								src: './common/img/sub/bd_icon3.png',
								width: 97,
								height: 7
							}
						]
					}
				}
			},
		})
	}
	
};



$(document).ready(function () {

	// 사진아카이브 시대별 오버 
	$(".ageListArea>ul>li").mouseover(function () {
		if ($(this).children("a").hasClass("hoverCon")){
				$(this).children(".hoverCon").addClass("on");
		}
	});
	$(".ageListArea>ul>li").mouseout(function () {
		if ($(this).children('.hoverCon').hasClass('on')){
			$(this).children('.hoverCon').removeClass("on");
		}
	});

	// 사진아카이브 시대별 년도 nav 

		$(".yearNav ul li a").click(function(){
			var oneYear = $(this).parent().parent();
			var dekad = oneYear.siblings("ul");
			
			var nextYear = $(this).text();
			var prevYear = $(this).text();
			nextYear++
			prevYear--

			dekad.removeClass("oneYear");
			oneYear.addClass("oneYear");

			$(".yearNav ul li a").removeClass('on');
			$(this).addClass("on");
			var prev = '<i class="far fa-arrow-alt-circle-left"></i>'
			var next = '<i class="far fa-arrow-alt-circle-right"></i>'
			$('.yearBtn .yearPrevBtn').html(prev + nextYear);
			$('.yearBtn .yearNextBtn').html(prevYear + next);
			$('.yearBtn .yearThisBtn').html($(this).text());
		});
		

});
	
})(jQuery)

