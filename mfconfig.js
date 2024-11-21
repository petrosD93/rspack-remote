module.exports = {
    name: 'remote',
    filename:'remoteAppEntry.js',
    exposes: {
        './button': './src/button.tsx',
        './getItem': './src/util.ts',
    },
    shared: ['react', 'react-dom'],
    runtimePlugins: [require.resolve('./offline-remote.js')],

}
