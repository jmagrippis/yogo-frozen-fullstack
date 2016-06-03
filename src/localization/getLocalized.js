const getLocalized = (element, key, lang) => {
  if (element.key) return element
  element[key] = element[key + '_' + lang] ? element[key + '_' + lang] : element[key + '_' + 'en']
  return element
}

export default getLocalized
