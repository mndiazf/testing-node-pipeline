module.exports = {
  apps: [{
    name: 'my-app',
    script: './index.js',
    watch: true,
    ignore_watch: ['node_modules', 'logs'],
    env: {
      NODE_ENV: 'production'
    }
  }]
};
