import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: () => ({
			// Configuration to enable hot reload on Svelte.
			// The "usePolling" is enabled, so it can work
			// with WSL2 on windows.
			server: {
				watch: {
					usePolling: true
				}
			},
			resolve: {
				// Add a alias to the absolute paths of our app.
				alias: {
					$assets: path.resolve('./src/assets'),
					$lib: path.resolve('./src/lib'),
					$components: path.resolve('./src/components'),
					$styles: path.resolve('./src/styles')
				}
			}
		})
	}
}

export default config;
