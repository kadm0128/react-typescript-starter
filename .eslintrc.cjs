module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
   ],
   ignorePatterns: [
      'dist',
      '.eslintrc.cjs',
      'babel.config.js',
      'webpack.config.js',
   ],
   parser: '@typescript-eslint/parser',
   plugins: [
      'react',
      'react-hooks',
      'import',
      'jsx-a11y',
      '@typescript-eslint',
      'prettier',
      'react-refresh',
   ],
   rules: {
      'react-refresh/only-export-components': [
         'warn',
         { allowConstantExport: true },
      ],
      'prettier/prettier': [
         'error',
         {
            endOfLine: 'auto',
         },
      ],
   },
   settings: {
      react: {
        version: "detect"
      }
    }
};
