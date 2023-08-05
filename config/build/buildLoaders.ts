import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const imgLoader: webpack.RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  // Если использовать js, то добавить babel
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    imgLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
}
