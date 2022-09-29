module.exports = {
    extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
    rules: {
        'jsx-a11y/anchor-is-valid': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/__tests__/**', // jest pattern
                    '**/__mocks__/**', // jest pattern
                    '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
                    'jest.config.js', // jest config
                    'jest.setup.ts', // jest setup
                    '**/*.stories*', // storybook
                    '**/webpack.config.js', // webpack config
                    '**/webpack.config.*.js', // webpack config
                    '**/.eslintrc.js', // eslint config
                    './prettier.config.js',
                    './src/utils/reactTestingLibrary.tsx', // test utilities
                    './src/setupTests.ts',
                ],
                optionalDependencies: false,
            },
        ],
        'react/jsx-no-bind': 'off',
        'react/require-default-props': 'warn',
    },
};
