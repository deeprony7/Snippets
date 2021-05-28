Git Snippets

make current branch master

git checkout better_branch
git merge --strategy=ours master # keep the content of this branch, but record a merge
git checkout master
git merge better_branch # fast-forward master up to the merge

Get current remote url:
git config --get remote.origin.url

git remote -v

# View existing remotes

# origin https://github.com/user/repo.git (fetch)

# origin https://github.com/user/repo.git (push)

git remote set-url origin https://github.com/user/repo2.git

# Change the 'origin' remote's URL

git remote -v

# Verify new remote URL

# origin https://github.com/user/repo2.git (fetch)

# origin https://github.com/user/repo2.git (push)

Delete remote branch

git push origin --delete feature/login

Ammend last commit message
git commit --amend -m "New and correct message"

To undo last commit/merge
git reset --hard HEAD~1
It will get you back 1 commit.

compare files from two different branches?
git diff can show you the difference between two commits:
git diff mybranch master -- myfile.cs

### Deleting Multiple Branches in Git

- `git branch | grep "<pattern>"`
- `git branch | grep "<pattern>" | xargs git branch -D`

### Remove Accidentally cached files

- `https://stackoverflow.com/questions/50675829/remove-node-modules-from-git-in-vscode`
- `git rm -r --cached .`
- `git add .`
- `git commit -m "remove gitignore files"`
- `git push`
