type Theme = {
  gradient: [string, string]
  content: 'light-content' | 'dark-content' | 'default'
  color: { color: string }
}

export const themeList: Array<Theme> = [
  {
    gradient: ['#697380', '#525b67'],
    content: 'light-content' as const,
    color: { color: '#fff' },
  },
  {
    gradient: ['#204cb7', '#51396d'],
    color: { color: 'white' },
    content: 'light-content',
  },
  {
    gradient: ['#222aa7', '#120d34'],
    color: { color: 'white' },
    content: 'light-content',
  },
  {
    gradient: ['#1c72c9', '#5c5ba1'],
    color: { color: 'white' },
    content: 'light-content',
  },
  {
    gradient: ['#1897da', '#4079c6'],
    color: { color: 'white' },
    content: 'light-content',
  },

]
