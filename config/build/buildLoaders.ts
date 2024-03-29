import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const {isDev} = options;

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                        localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    return [
        typescriptLoader,
        cssLoader,
        fontLoader,
    ]
}
