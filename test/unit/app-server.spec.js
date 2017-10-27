const AppServer = require('./../../src/app-server');


describe('app-server.js', () => {

  it('has some methods', () => {
  let appServer = new AppServer();
  expect(appServer).to.have.a.property('start').to.be.a('function');
  expect(appServer).to.have.a.property('stop').to.be.a('function');
  })

});
