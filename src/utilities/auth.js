export const login = (horizon, provider) => {
  horizon.authEndpoint(provider).subscribe((endpoint) => {
    window.location.pathname = 'https://yogofrozen.gr:8181' + endpoint
  })
}
