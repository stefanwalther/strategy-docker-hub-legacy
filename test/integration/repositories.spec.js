const RepositoriesBL = require('./../../src/modules/repositories/repositories.bl');

describe('repositories.bl', () => {

  const username = 'stefanwalther';

  it('should ideally succeed', () => {
    expect(true).to.be.true;
  });

  it('.get() returns the repos', async () => {

    let repos = await RepositoriesBL.get(username);
    expect(repos).to.exist;
    expect(repos).to.be.an('array');
  });

});
