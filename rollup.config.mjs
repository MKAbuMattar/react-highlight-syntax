import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'highlight.js'],
    plugins: [
      terser(),
      typescript({
        tsconfig: 'tsconfig.json',
        declaration: true,
        declarationDir: 'lib/types',
        rootDir: 'src',
        sourceMap: false,
      }),
    ],
    output: [
      {
        file: 'lib/index.js',
        name: 'ReactHighlightSyntax',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'lib/index.mjs',
        name: 'ReactHighlightSyntax',
        format: 'es',
        sourcemap: false,
      },
    ],
  },
  {
    input: 'lib/types/index.d.ts',
    external: ['glob', 'path'],
    plugins: [dts()],
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
  },
];
