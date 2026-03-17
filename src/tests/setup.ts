import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'


export const restHandlers = [
  http.get('https://localhost/app/embed.js', () => {
    return HttpResponse.json(true)
  }),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers())

// Close server after all tests
afterAll(() => server.close())