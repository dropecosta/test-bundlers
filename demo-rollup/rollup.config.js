// import resolve from '@rollup/plugin-node-resolve';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import serve from 'rollup-plugin-serve';
// import typescript from '@rollup/plugin-typescript';
// import postcss from 'rollup-plugin-postcss';
// import html from '@rollup/plugin-html';
// import handlebars from 'handlebars';
// import htmlTemplate from './rollup-plugin-html.js';
// import commonjs from '@rollup/plugin-commonjs';
// //import dts from 'rollup-plugin-dts';

// import pkg from './package.json' assert { type: "json" };

// // Function to generate HTML template
// const generateHTMLTemplate = () => `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Your App</title>
//   </head>
//   <body>
//       <div id="app"></div>
//       <script src="index.js"></script>
//   </body>
//   </html>
// `;

// export default [
//   {
//     input: 'src/index.js',
//     output: [
//       // {
//       //   file: pkg.main,
//       //   format: 'cjs',
//       //   sourceMap: true,
//       // },
//       {
//         file: pkg.module,
//         format: 'esm',
//         sourceMap: true,
//       },
//     ],
//     plugins: [
//       nodeResolve(),
//       commonjs(),
//       postcss({
//         extract: true
//       }),
//       typescript({
//         tsconfig: './tsconfig.json' 
//       }),
//       html({
//         template: generateHTMLTemplate // Provide the function as template
//       }),
//       serve({
//         open: true, // Open the served URL in the default browser
//         contentBase: ['dist/esm'], // Serve from the 'dist' directory
//         port: 5000 // Use port 5000 for serving
//       })
//     ],
//   },
// ];


import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import html from '@rollup/plugin-html';

const NODE_ENV = process.env.NODE_ENV || "development";

 const generateHTMLTemplate = () => `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Demo Rollup</title>
       <link rel="stylesheet" href="bundle.css">
   </head>
   <body>
       <div id="app"></div>
      <script src="bundle.js"></script>
   </body>
   </html>
 `;

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    image(),
    postcss({
      extract: true
     }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({
      presets: ["@babel/preset-react"],
      exclude: "node_modules/**"
    }),
    commonjs(),
    resolve(),
    html({
      template: generateHTMLTemplate
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist"],
      host: "localhost",
      port: 4000,
    }),
    livereload({ watch: "dist" }),
    (NODE_ENV !== 'production' && serve({ contentBase: '' })),
    (NODE_ENV !== 'production' && livereload())
  ]
}