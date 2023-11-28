import 'webpack-dev-server';
import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";


type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'build-[contenthash].js',
            clean: true,
        },
        module: {
            rules: [
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
            new webpack.ProgressPlugin(), //лучше не использовать в проде тк силно замедляет сборку
        ],
    }
    return config
};