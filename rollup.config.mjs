import pkg from  './package.json' assert { type: "json" };
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const config = [
  {
    treeshake: true,
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: "inline",
        strict: false,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
        inlineSources: true,
        sourceMap: true,
      }),
      commonjs(),
      resolve({
        browser: true,
      }),
      terser()
    ],
    external: ["react"],
  },
];

export default config;
