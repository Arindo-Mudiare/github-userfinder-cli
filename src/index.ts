import * as _ from 'lodash';
import { Repo } from './Repo';
import { User } from './User';
import { GithubApiService } from './GithubApiService';

let svc = new GithubApiService();
if (process.argv.length < 3) {
  console.log("Please pass in the username");
} else {
  let username = process.argv[2];
  svc.getUserInfo(username, (user: User) => {
  svc.getRepos(username, (repos: Repo[]) => {
    let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size*-1]);
    let filteredRepos = _.take(sortedRepos, 3);
    user.repos = filteredRepos;
    console.log(user);
  });
});
}
