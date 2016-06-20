export const login = (horizon, provider) => {
  if (provider === 'facebook') {
    window.location.pathname = 'https://yogofrozen.gr:8181/horizon/facebook'
    return
  }
  horizon.authEndpoint(provider).subscribe((endpoint) => {
    window.location.pathname = 'https://yogofrozen.gr:8181' + endpoint
  })
}
