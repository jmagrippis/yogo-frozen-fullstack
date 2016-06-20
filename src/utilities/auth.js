export const login = (horizon, provider) => {
  if (provider === 'facebook') {
    window.location.assign('https://yogofrozen.gr:8181/horizon/facebook')
    return
  }
  horizon.authEndpoint(provider).subscribe((endpoint) => {
    window.location.assign('https://yogofrozen.gr:8181' + endpoint)
  })
}
