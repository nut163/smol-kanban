addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { url } = request
  const { pathname } = new URL(url)

  if (pathname.startsWith('/login')) {
    return login(request)
  } else if (pathname.startsWith('/logout')) {
    return logout(request)
  } else if (pathname.startsWith('/kanban')) {
    return setupPage(request)
  } else {
    return new Response('Not Found', { status: 404 })
  }
}

async function login(request) {
  const { authenticate } = await import('./authentication.js')
  return authenticate(request)
}

async function logout(request) {
  const { logout } = await import('./logout.js')
  return logout(request)
}

async function setupPage(request) {
  const { setupPage } = await import('./setup.js')
  return setupPage(request)
}