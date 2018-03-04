const Style = {
  root: (isActive) => ({
    maxHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: isActive ? 'underline' : 'none',
  }),
}

export default Style