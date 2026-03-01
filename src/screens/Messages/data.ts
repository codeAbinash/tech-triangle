export type Message = {
  id: string
  text: string
  sent: boolean
  timestamp: Date
}

export function newMessage(text: string, sent: boolean): Message {
  return { id: Date.now().toString() + Math.random(), text, sent, timestamp: new Date() }
}

export const demoMessages: Message[] = [
  { id: '1', text: 'Hey! How is everything going?', sent: false, timestamp: new Date(Date.now() - 300000) },
  {
    id: '2',
    text: 'Pretty good! Just been working on some cool stuff lately.',
    sent: true,
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: '3',
    text: 'Oh nice, what kind of things are you building?',
    sent: false,
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: '4',
    text: 'A real-time chat screen with WebSocket support. Looks clean and minimal.',
    sent: true,
    timestamp: new Date(Date.now() - 120000),
  },
  { id: '5', text: 'That sounds awesome! Is it working well?', sent: false, timestamp: new Date(Date.now() - 60000) },
  {
    id: '6',
    text: 'Yeah, feeling smooth now. Why not try sending a message yourself!',
    sent: true,
    timestamp: new Date(Date.now() - 10000),
  },
]
