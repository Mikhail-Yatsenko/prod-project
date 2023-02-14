import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildRules} from "./buildRules";
import {buildResolvers} from "./buildResolvers";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildRules(),
        },
        resolve: buildResolvers(),
    }
}
