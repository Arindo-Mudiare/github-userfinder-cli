"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    // repos: Repo[];
    function Repo(repo) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks;
        // this.repos = repos;
    }
    return Repo;
}());
exports.Repo = Repo;
