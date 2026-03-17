import { test as testBase } from 'vitest'
import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'

const worker = setupWorker(
    http.get('https://localhost/app/embed.js', () => {
        return HttpResponse.json(true)
    }),
)

export const test = testBase.extend({
    worker: [
        async ({ }, use) => {
            // Start the worker before the test.
            await worker.start()

            // Expose the worker object on the test's context.
            await use(worker)

            // Remove any request handlers added in individual test cases.
            // This prevents them from affecting unrelated tests.
            worker.resetHandlers()

            // Stop the worker after the test.
            worker.stop()
        },
        {
            auto: true,
        },
    ],
})