document.addEventListener('DOMContentLoaded', function () {
	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		titleFormat: function (date) {
			return date.date.year + ". " + (date.date.month + 1) + ".";
		},
		height: "auto",
		fixedWeekCount: false,
		showNonCurrentDates: false,
		titleRangeSeparator: '.',
		defaultRangeSeparator: ' ',
		headerToolbar: {
			left: 'today',
			center: 'title',
			right: 'prev,next'
		},

		buttonText: {
			today: "오늘"
		},
		events: [{
			title: '', // a property!
			start: '2020-09-21', // a property!
			end: '2020-09-21', // a property! ** see important note below about 'end' **
		},
		{
			title: '', // a property!
			start: '2020-09-27', // a property!
			end: '2020-09-27', // a property! ** see important note below about 'end' **
		}
		],
		eventClick: function (info) {
		$(".event_wrap").show();
		}
		// eventDisplay: '',
		
	});

	calendar.render();

});
