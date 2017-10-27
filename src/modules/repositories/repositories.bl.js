const dockerHubApi = require('docker-hub-api');

class RepositoriesBL {

  /**
   * Get the repositories for the given user.
   * Doesn't require authentication.
   *
   * @param username
   */
  static async get(username) {
    let repos = await dockerHubApi.repositories(username);
    return repos;
  }

}

module.exports = RepositoriesBL;
