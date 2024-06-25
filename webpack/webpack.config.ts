import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import WebpackGlobalThis from './webpack.plugins';
import AutoImport from 'unplugin-auto-import/webpack';

const isProduction = process.env.NODE_ENV === 'production';

const config: webpack.Configuration = {
      target:  [ 'web', 'es3' ],
      entry:   path.resolve(__dirname, '../index.ts'),
      devtool: false,
      watch:   false,
      stats:   'errors-only',
      plugins: [
            new WebpackGlobalThis(),
            new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
            AutoImport({ dirs: [ 'src/**' ], dts: 'src/@types/auto-imports.d.ts' })
      ],
      output: {
            clean:             true,
            path:              path.resolve(__dirname, '../dist'),
            compareBeforeEmit: false,
            iife:              false
      },
      module: {
            rules: [
                  {
                        test:    /\.(ts|tsx)$/i,
                        loader:  'ts-loader',
                        exclude: [ '/node_modules/' ],
                        options: { transpileOnly: true }
                  }
            ]
      },
      resolve: { extensions: [ '.tsx', '.ts' ] }
};

if (isProduction)
{
      config.mode = 'production';
}
else
{
      config.mode = 'development';
      config.optimization = {
            chunkIds:             'deterministic',
            concatenateModules:   true,
            mangleExports:        false,
            mangleWasmImports:    true,
            mergeDuplicateChunks: true,
            moduleIds:            'deterministic',
            providedExports:      true,
            usedExports:          true,
            minimize:             true,
            minimizer:            [
                  new TerserPlugin({
                        terserOptions: {
                              mangle: false,
                              format: {
                                    beautify:          true,
                                    braces:            true,
                                    comments:          false,
                                    keep_numbers:      true,
                                    keep_quoted_props: true,
                                    wrap_func_args:    false
                              },
                              compress: false
                        },
                        extractComments: false
                  })
            ]
      };
}

export default config;
