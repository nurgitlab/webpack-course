import 'webpack-dev-server';
import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {Configuration as DevServerConfiguration} from "webpack-dev-server"

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode,
    port: number | string,
}

export default (env: EnvVariables) => {
    console.log(env)
    const isDev = env.mode === 'development'
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'build-[contenthash].js',
            clean: true,
        },
        module: {
            rules: [
                //порядок важен!
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
            isDev && new webpack.ProgressPlugin(), //лучше не использовать в проде тк сильно замедляет сборку
        ].filter(Boolean),
        devtool: isDev && "inline-source-map",
        devServer: {
            port: env.port || 3033,
            open: true
        },
    }
    return config
};