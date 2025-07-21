import type { Event } from "@/types/event"
import { createClient } from '@supabase/supabase-js'

// Supabase client configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database operations
export async function getEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true })

    if (error) {
      console.error('Error fetching events:', error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Failed to fetch events:', error)
    throw new Error('Failed to fetch events')
  }
}

export async function createEvent(eventData: Omit<Event, "id">): Promise<Event> {
  try {
    const { data, error } = await supabase
      .from('events')
      .insert([eventData])
      .select()
      .single()

    if (error) {
      console.error('Error creating event:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Failed to create event:', error)
    throw new Error('Failed to create event')
  }
}

export async function updateEvent(id: string, eventData: Partial<Event>): Promise<Event> {
  try {
    const { data, error } = await supabase
      .from('events')
      .update(eventData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating event:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Failed to update event:', error)
    throw new Error('Failed to update event')
  }
}

export async function deleteEvent(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting event:', error)
      throw error
    }
  } catch (error) {
    console.error('Failed to delete event:', error)
    throw new Error('Failed to delete event')
  }
}

// Helper function to check if Supabase is properly configured
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseKey)
}
