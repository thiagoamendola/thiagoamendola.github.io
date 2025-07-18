# Deploy to GitHub Pages using PowerShell

# Step 1: Build the project
npm run build

# Step 1.5: Stash any working changes
git stash

# Step 2: Save current branch name
$CurrentBranch = git rev-parse --abbrev-ref HEAD

# Step 3: Switch to gh-pages branch (create if doesn't exist)
git checkout gh-pages

# Step 4: Remove all files except .git (clean branch)
Get-ChildItem -Path . -Exclude ".git" | Remove-Item -Recurse -Force

# Step 5: Copy build contents to root
Copy-Item -Path "build/*" -Destination "." -Recurse -Force

# Step 6: Add, commit, and push
git add .
git commit -m "Deploy to GitHub Pages through script"
git push origin gh-pages

# Step 7: Switch back to original branch
git checkout $CurrentBranch

# Step 7.5: Restore stashed changes
git stash pop
