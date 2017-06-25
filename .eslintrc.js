module.exports = {
    env: {
        browser: true,
        meteor: true,
        mongo: true,
        node: true,
    },
    extends: ['eslint-config-airbnb-base'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaOptions: {
            jsx: false,
        },
        ecmaVersion: 8,
        sourceType: 'module',
    },
    plugins: ['import'],
};
