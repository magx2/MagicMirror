var config = {
	port: 9999,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_right',
			config: {
				showPeriodUpper: true
			}
		},
		{
			module: 'calendar',
			header: 'Kalendarz',
			position: 'top_right',
			config: {
				maximumEntries: 25,
				
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'https://calendar.google.com/calendar/ical/martin.grzeslowski%40gmail.com/private-18a95defd98f0fc2b552925b0311efa7/basic.ics'
					},
					{
						symbol: 'tripadvisor ',
						url: 'https://calendar.google.com/calendar/ical/1jvicjgqdfl9pq65mj2a1b9uv8%40group.calendar.google.com/private-c4b8729cec6a20cf00d727ec247df304/basic.ics',
						repeatingCountTitle: 'Airbnb'
					},
					{
						symbol: 'cogs ',
						url: 'https://calendar.google.com/calendar/ical/uu3stjobudouuictf8pjflkqfs%40group.calendar.google.com/private-9ffcd6643240256a444d7c698c44e249/basic.ics'
						repeatingCountTitle: 'Praca'
					}
				]
			}
		},
		{
			module: 'currentweather',
			position: 'top_left',
			config: {
				location: 'Wroclaw, Poland',
				appid: '39640ff4c824892da2d2dc8afa830a4a'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_left',
			header: 'Weather Forecast',
			config: {
	            		location: 'Wroclaw, Poland',
	            		appid: '39640ff4c824892da2d2dc8afa830a4a'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Antyweb",
						url: "http://feeds.feedburner.com/Antyweb?format=xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
