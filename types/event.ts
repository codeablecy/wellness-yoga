export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  category: EventCategory;
  price: string;
  image?: string;
  what_to_bring: string[];
  created_at?: string;
  updated_at?: string;
}

export interface CreateEventData {
  title: string;
  date: string;
  description: string;
  category: EventCategory;
  price: string;
  image?: string;
  what_to_bring: string[];
}

export interface UpdateEventData {
  id: string;
  title: string;
  date: string;
  description: string;
  category: EventCategory;
  price: string;
  image?: string;
  what_to_bring: string[];
}

export type EventCategory =
  | 'Yoga'
  | 'Meditation'
  | 'Pilates'
  | 'Tai Chi'
  | 'Qi Gong'
  | 'Reiki'
  | 'Sound Healing'
  | 'Aromatherapy'
  | 'Crystal Healing'
  | 'Chakra Balancing'
  | 'Breathwork'
  | 'Mindfulness'
  | 'Stress Relief'
  | 'Energy Healing'
  | 'Holistic Wellness'
  | 'Spiritual Counseling'
  | 'Energy Mentoring'
  | 'Active-Spiritual Nutrition'
  | 'Zhineng Qigong'
  | 'Personal Empowerment'
  | 'Conscious Teaching'
  | 'Energy Center Cleansing'
  | 'Conscious Awakening'
  | 'Theosophy'
  | 'Universal Healing'
  | 'Self-Awareness'
  | 'Harmonization';

export const EVENT_CATEGORIES: EventCategory[] = [
  'Yoga',
  'Meditation',
  'Pilates',
  'Tai Chi',
  'Qi Gong',
  'Reiki',
  'Sound Healing',
  'Aromatherapy',
  'Crystal Healing',
  'Chakra Balancing',
  'Breathwork',
  'Mindfulness',
  'Stress Relief',
  'Energy Healing',
  'Holistic Wellness',
  'Spiritual Counseling',
  'Energy Mentoring',
  'Active-Spiritual Nutrition',
  'Zhineng Qigong',
  'Personal Empowerment',
  'Conscious Teaching',
  'Energy Center Cleansing',
  'Conscious Awakening',
  'Theosophy',
  'Universal Healing',
  'Self-Awareness',
  'Harmonization',
];

export const CATEGORY_COLORS: Record<EventCategory, string> = {
  'Yoga': 'bg-blue-100 text-blue-800',
  'Meditation': 'bg-purple-100 text-purple-800',
  'Pilates': 'bg-green-100 text-green-800',
  'Tai Chi': 'bg-teal-100 text-teal-800',
  'Qi Gong': 'bg-indigo-100 text-indigo-800',
  'Reiki': 'bg-pink-100 text-pink-800',
  'Sound Healing': 'bg-yellow-100 text-yellow-800',
  'Aromatherapy': 'bg-orange-100 text-orange-800',
  'Crystal Healing': 'bg-violet-100 text-violet-800',
  'Chakra Balancing': 'bg-rose-100 text-rose-800',
  'Breathwork': 'bg-cyan-100 text-cyan-800',
  'Mindfulness': 'bg-emerald-100 text-emerald-800',
  'Stress Relief': 'bg-lime-100 text-lime-800',
  'Energy Healing': 'bg-fuchsia-100 text-fuchsia-800',
  'Holistic Wellness': 'bg-slate-100 text-slate-800',
  'Spiritual Counseling': 'bg-purple-100 text-purple-800',
  'Energy Mentoring': 'bg-indigo-100 text-indigo-800',
  'Active-Spiritual Nutrition': 'bg-green-100 text-green-800',
  'Zhineng Qigong': 'bg-red-100 text-red-800',
  'Personal Empowerment': 'bg-yellow-100 text-yellow-800',
  'Conscious Teaching': 'bg-blue-100 text-blue-800',
  'Energy Center Cleansing': 'bg-pink-100 text-pink-800',
  'Conscious Awakening': 'bg-purple-100 text-purple-800',
  'Theosophy': 'bg-violet-100 text-violet-800',
  'Universal Healing': 'bg-teal-100 text-teal-800',
  'Self-Awareness': 'bg-emerald-100 text-emerald-800',
  'Harmonization': 'bg-cyan-100 text-cyan-800',
};
