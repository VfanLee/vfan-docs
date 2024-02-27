let calendar

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar')
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    views: {
      multiMonthFourMonth: {
        type: 'multiMonthYear',
        multiMonthMaxColumns: 1
      }
    },
    headerToolbar: {
      left: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay timeGridWeek,timeGridDay listWeek multiMonthFourMonth,multiMonthYear'
    },
    footerToolbar: {
      right: 'prevYear,prev,next,nextYear today'
    },
    titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
    buttonText: {
      today: '今儿',
      multiMonthFourMonth: 'Multi-Month Stack',
      multiMonthYear: 'Multi-Month Grid'
    },
    buttonIcons: {
      prev: 'chevron-left',
      next: 'chevron-right',
      prevYear: 'chevrons-left',
      nextYear: 'chevrons-right'
    },
    height: '80vh',
    aspectRatio: 1.8,
    events: [
      {
        title: 'event title',
        start: new Date()
      }
    ],
    eventClick(info) {
      console.log('eventClick', info)
    },
    eventMouseEnter(info) {
      console.log('eventMouseEnter', info)
    },
    eventMouseLeave(info) {
      console.log('eventMouseLeave', info)
    },
    locale: 'zh-cn'
  })
  calendar.render()

  console.log(calendar)
})
