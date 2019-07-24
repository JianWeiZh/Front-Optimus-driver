module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-use-before-define': 'error', // 在定义变量之前不允许使用变量
    'no-unused-vars': 'error', // 禁止未使用的变量
    'no-multiple-empty-lines': 'error', // 不允许多个空行
    'no-multi-spaces': 'error', // 不允许多个空格
    'no-extra-bind': 'error', // 不允许不必要的调用.bind()
    'no-eval': 'error', // 不允许使用eval()
    'eqeqeq': 'error', // 需要使用===和!==
    'indent': ['error', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
