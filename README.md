## thesystem.at

this repository uses [@magic](https://magic.github.io) to build the page hosted at [thesystem.at](https://thesystem.at)

#### Things you can do with this repository:

first, open a terminal/console/bash

#### get copy of this homepage to work on locally:

if you do not have set up your ssh keys or do not know what they are:

```bash
git clone https://github.com/thesystemcollective/thesystem.at
```

if you have set up your ssh keys (see [github help](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent))

```bash
git clone git@github.com:thesystemcollective/thesystem.at
```

now you have a local copy in ./thesystem.at:

```bash
cd ./thesystem.at
```

#### git tasks:
* #### git status
  shows changed files, run to check which files changed

* #### git add . / git add src / git add docs
  adds all changed files to history

* #### git commit -m "commit message (event eventName)"
  add all git changes to the history

* #### git push
  push all committed changes to github

* #### git pull
  load all changes from github

#### npm run tasks:

* #### npm run
  shows all available npm commands

* #### npm run build
  creates production build in public directory

* #### npm run dev
  start the development server in development mode

* #### npm run prod
  start the development server in production mode

#### workflow for changing content:

first, run the development server:
```bash
npm run dev
```
then load [http://localhost:2323](http://localhost:2323)

you should see a preview of the page now.

you can now change any files in the src/ directory and see the changes once you reload the page.

done changing content and happy with the result?

```bash
# build the files from ./src/ to ./docs/
npm run build

# add src dir to save your changes in git
git add src
git commit -m "description of what changed"

# add docs dir to save build output that gets served
git add docs
git commit -m "update docs"

# push changes to github
git push
```
