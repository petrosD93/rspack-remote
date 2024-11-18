module.exports = {
    name: 'remote',
    exposes: {
        './button': './src/button.tsx',
    },
    shared: ['react', 'react-dom'],

}
