export const Store = {
  news: {
    cornerstone: {
      label: 'Launch',
      date: '12.18.17',
      content: 'This site found earth.'
    },
  },
  projects: {
    disaggregator: {
      to: 'https://github.com/0bey/energy-disaggregator',
      label: 'Energy Disaggregation',
    },
    shake: {
      to: 'https://github.com/0bey/shake',
      label: 'Handshake Detection',
    },
    bloom: {
      to: 'https://github.com/0bey/bloom',
      label: 'Bloom: Modular Membrane',
    },  
    harryschnaper: {
      to: ['https://github.com/0bey/harryschnaper', 'www.harryschnaper.com'],
      label: 'Harry Schnaper',
    }
  },
  navigation: {
    emblem: {
      to: "/",
      label: `0bey`,
    },
    news: {
      to: "/news",
      label: "posts",
    },
  }
}

export const keys = {
  pages: {
    news: 'news'
  }
}

export default Store