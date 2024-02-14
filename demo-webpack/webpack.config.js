import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url';

// Get the current module's file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory path of the current module
const __dirname = path.dirname(__filename);

const config = {
  entry: './src/index.js',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,       
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/' 
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
        favicon: "./public/favicon.ico",
        manifest: "./public/manifest.json",
        template: './public/index.html', 
        filename: 'index.html', 
        inject: 'body'
      })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    port: 4000
  }
};

export default config