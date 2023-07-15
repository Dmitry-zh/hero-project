import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  //const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      host: '0.0.0.0'
    },
    plugins: [react(), tsconfigPaths()]
    // vite config
    // define: {
    //   __APP_ENV__: env.APP_ENV,
    // },
  };
});