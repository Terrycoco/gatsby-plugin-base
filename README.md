# gatsby-plugin-base

Basic scaffolding to start to program a gatsby-plugin.

Includes:

- Gatsby as Peer Dependency
- Babel with presets and config file
- ESLint and config file
- Prettier for formatting with config file
- Jest for testing with config file
- npm scripts:

  - build
  - watch
  - format
  - lint
  - test

- Example gatsby-node onCreateNode script
- Example jest test script
- setup for public npm publishing

# How to Use

1. `git clone https://github.com/Terrycoco/gatsby-plugin-base.git <yourProjectName>`

2. `cd <yourProjectName>`

3. `npm install`

4. add a .gitignore file at root and insert following:

   `gatsby-\*`<br>
   `!src/**`<br>
   `!test/**`<br>
   <br>
   `/node_modules`

5. in package.json, change title, description and author of your project

6. test to see if it works `npm run test`

# To transfer to your own github repo

1. create your github repo with your new project name

2. change the remote origin of the project in terminal
   `git remote set-url origin <url of yourProjectName repo>`

3. `git add .`

4. `git commit -m 'first commit'`

5. `git push origin master`
