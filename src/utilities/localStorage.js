export const loadState = () => {
  if (typeof localStorage === 'undefined') return undefined
  try {
    const serializedState = localStorage.getItem('state')
    return serializedState !== null ? JSON.parse(serializedState) : undefined
  } catch (err) {
    console.log('Could not retrieve from localStorage')
    return undefined
  }
}

export const saveState = (state) => {
  if (typeof localStorage === 'undefined') return
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log('Could not save from localStorage')
  }
}
