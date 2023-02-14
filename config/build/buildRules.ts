import webpack from "webpack";

export const buildRules = (): webpack.RuleSetRule[] => {

    const typescriptRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptRule,
    ]
}
