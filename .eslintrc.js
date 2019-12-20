module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new':0,
    'no-unused-vars': ['error', {'args': 'none' }],
    'eqeqeq':0,//设置为0，代表 == 也可以不必要非得 ===
    'quotes':0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
