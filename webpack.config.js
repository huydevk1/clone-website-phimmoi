module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        // loader: 'file-loader',
                        loader: 'file-loader?name=./images/[name].[ext]',
                    },
                ],
            },
        ],
    },
};
