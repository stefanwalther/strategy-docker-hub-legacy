const RepositoriesBL = require('./../../src/modules/repositories/repositories.bl');

describe.only('repositories.bl', () => {

  const username = 'stefanwalther';

  it('should ideally succeed', () => {
    expect(true).to.be.true;
  });

  it.only('.get() returns the repos', async () => {

    let repos = await RepositoriesBL.get(username);
    expect(repos).to.exist;
    expect(repos).to.be.an('array');
  })

});
