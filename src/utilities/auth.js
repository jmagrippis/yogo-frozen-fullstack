export const login = (horizon, provider) => {
  horizon.authEndpoint(provider).subscribe((endpoint) => {
    window.location.pathname = endpoint
  })
}
