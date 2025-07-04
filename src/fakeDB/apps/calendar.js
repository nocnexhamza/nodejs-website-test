import mock from "../mock";

const date = new Date()
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

const nextMonth = date.getMonth() === 11
  ? new Date(date.getFullYear() + 1, 0, 1)
  : new Date(date.getFullYear(), date.getMonth() + 1, 1)

const prevMonth = date.getMonth() === 11
  ? new Date(date.getFullYear() - 1, 0, 1)
  : new Date(date.getFullYear(), date.getMonth() - 1, 1)

const data = {
  events: [
    {
      id: 1,
      url: '',
      title: 'Design Review',
      start: date,
      end: nextDay,
      allDay: false,
      extendedProps: {
        calendar: 'Business'
      }
    },
    {
      id: 2,
      url: '',
      title: 'Meeting With Client',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
      allDay: true,
      extendedProps: {
        calendar: 'Business'
      }
    },
    {
      id: 3,
      url: '',
      title: 'Running Training',
      allDay: true,
      start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
      extendedProps: {
        calendar: 'Holiday'
      }
    },
    {
      id: 4,
      url: '',
      title: "Visa Application at UK Embassy",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
      allDay: true,
      extendedProps: {
        calendar: 'Personal'
      }
    },
    {
      id: 5,
      url: '',
      title: 'Crossfit',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: 'Personal'
      }
    },
    {
      id: 6,
      url: '',
      title: 'Weekly Meeting',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: 'Flatlogic'
      }
    },
    {
      id: 7,
      url: '',
      title: 'Product Review',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: 'Business'
      }
    },
    {
      id: 8,
      url: '',
      title: 'Meeting With Alex',
      start: nextMonth,
      end: nextMonth,
      allDay: true,
      extendedProps: {
        calendar: 'Business'
      }
    },
    {
      id: 9,
      url: '',
      title: 'Monthly Checkup',
      start: prevMonth,
      end: prevMonth,
      allDay: true,
      extendedProps: {
        calendar: 'Personal'
      }
    }
  ]
}

// GET: Return calendar events
mock.onGet('/apps/calendar/events').reply(config => {
  // Get requested calendars as Array
  const calendars = config.calendars

  return [200, data.events.filter(event => calendars.includes(event.extendedProps.calendar))]
})

// POST: Add new event
mock.onPost('/apps/calendar/add-event').reply( config => {
  // get event from post data
  const { event } = JSON.parse(config.data)

  const { length } = data.events
  let lastIndex = 0
  if (length) {
    lastIndex = data.events[length - 1].id
  }
  event.id = lastIndex + 1

  data.events.push(event)
  return [201, { event }]
})

// POST: Update event
mock.onPost('/apps/calendar/update-event').reply(config => {
  const { event: eventData } = JSON.parse(config.data)
  // convert Id to Number
  eventData.id = Number(eventData.id)

  const event = data.events.find(ev => ev.id === Number(eventData.id))
  Object.assign(event, eventData)

  return [200, { event }]
})

// DELETE: Remove event
mock.onDelete('/apps/calendar/remove-event').reply( config => {
  let { id } = config
  // convert Id to Number
  const eventId = Number(id)
  const eventIndex = data.events.findIndex(ev => ev.id = eventId)
  data.events.splice(eventIndex, 1)
  return [200]
})
