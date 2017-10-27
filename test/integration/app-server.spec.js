const AppServer = require('./../../src/app-server');

describe('app-server.js', () => {

  let appServer = null;

  beforeEach(async () => {
    appServer = new AppServer();
    await appServer.start();
  });

  afterEach(async () => {
    await appServer.stop();
  });

  it('should start successfully', async () => {

    expect(appServer.server).to.exist;
    expect(appServer.app).to.exist;

  });

});
