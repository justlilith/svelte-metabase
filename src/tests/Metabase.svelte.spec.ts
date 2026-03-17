import { page } from 'vitest/browser';
import { describe, expect, it, suite } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Metabase from '$lib/Metabase.svelte';
import type { MetabaseConfig } from '$lib/types/metabase.d.ts';
import { test } from './test-extend.ts'

const configs: Record<string, MetabaseConfig> = {
	valid: {
		instanceUrl: 'https://localhost',
		theme: {
			preset: 'dark'
		}
	},
	invalid: {
		instanceUrl: 'localhosts',
		theme: {
			preset: 'dark'
		}
	}
}
suite('Metabase.svelte', () => {
	test('set metabase config on window', () => {
		// describe('Metabase.svelte', () => {
		render(Metabase, { config: configs.valid, token: 'misc-token' });

		expect((window as any)?.['metabaseConfig']).toBeTruthy()
	});
	test('attempts to load embed script', () => {
		render(Metabase, { config: configs.valid, token: 'misc-token' });

		expect([...document.head.querySelectorAll('script')].some(script => {
			return script.src.includes('embed.js')
		})).toBeTruthy()
	})
});
// });