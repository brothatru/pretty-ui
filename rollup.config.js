import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default {
  input: './src/components/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    // Preferably set as first plugin.
    peerDepsExternal(),
    typescript({
      // "useTsconfigDeclarationDir": true
      tsconfig: './config/tsconfig.rollup.json',
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
  ],
  external: ['react', 'react-dom'],
};
