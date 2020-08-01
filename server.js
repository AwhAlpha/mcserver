const ScriptServer = require('scriptserver');

const server = new ScriptServer({
  core: {
    jar: 'minecraft_server.jar',
    args: ['-Xmx512M'],
      rcon: {
      port: '25575',
      password: 'password'
    }
  }
});

server.start();