export const scroll = (location) => {
  let el = document.getElementById(location)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth' })
}
