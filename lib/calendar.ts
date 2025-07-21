import type { Event } from '@/types/event'
import { createEvent } from 'ics'

export interface CalendarEvent {
  title: string
  description: string
  startDate: Date
  endDate: Date
  location?: string
  organizer?: {
    name: string
    email: string
  }
}

export function generateICSFile(event: Event): Promise<string> {
  const startDate = new Date(event.date)
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000) // 1 hour duration

  const priceInfo = event.price === "free" ? "Free event" : `Price: €${event.price}`
  
  // Add what to bring information
  const whatToBring = event.what_to_bring && event.what_to_bring.length > 0 
    ? `\n\nWhat to bring:\n${event.what_to_bring.map(item => `• ${item}`).join('\n')}`
    : '\n\nWhat to bring: Just yourself and an open mind!'
  
  const fullDescription = `${event.description}\n\n${priceInfo}${whatToBring}`

  const calendarEvent: CalendarEvent = {
    title: event.title,
    description: fullDescription,
    startDate,
    endDate,
    location: 'Main Studio',
    organizer: {
      name: 'Yoga Wellness Studio',
      email: 'info@yogastudio.com'
    }
  }

  return new Promise((resolve, reject) => {
    createEvent(
      {
        title: calendarEvent.title,
        description: calendarEvent.description,
        start: [
          calendarEvent.startDate.getFullYear(),
          calendarEvent.startDate.getMonth() + 1,
          calendarEvent.startDate.getDate(),
          calendarEvent.startDate.getHours(),
          calendarEvent.startDate.getMinutes()
        ],
        end: [
          calendarEvent.endDate.getFullYear(),
          calendarEvent.endDate.getMonth() + 1,
          calendarEvent.endDate.getDate(),
          calendarEvent.endDate.getHours(),
          calendarEvent.endDate.getMinutes()
        ],
        location: calendarEvent.location,
        organizer: {
          name: calendarEvent.organizer?.name || 'Yoga Wellness Studio',
          email: calendarEvent.organizer?.email || 'info@yogastudio.com'
        },
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        categories: [event.category],
        url: window.location.href
      },
      (error, value) => {
        if (error) {
          reject(error)
        } else {
          resolve(value || '')
        }
      }
    )
  })
}

export function downloadICSFile(icsContent: string, filename: string) {
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function addToCalendar(event: Event): Promise<void> {
  return generateICSFile(event)
    .then(icsContent => {
      const filename = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`
      downloadICSFile(icsContent, filename)
    })
    .catch(error => {
      console.error('Error generating calendar file:', error)
      throw error
    })
} 