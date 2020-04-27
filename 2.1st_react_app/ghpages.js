const ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    branch: "master",
    repo: "https://github.com/bertearazvan/deploy_gh_pages.git",
    message: "auto-commit",
    dest: "react_app",
  },
  (err) => {
    console.log(err);
  }
);
