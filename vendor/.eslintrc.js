module.exports = {
    parser: 'babel-eslint',
    env: { browser: true, meteor: true, node: true, },
    extends: ['eslint-config-airbnb-base'],
    plugins: ['import'],
    parserOptions: {
        ecmaOptions: { jsx: true },
        ecmaVersion: 8,
    },
};
