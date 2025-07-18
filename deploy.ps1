# Deploy to GitHub Pages using PowerShell

Write-Host "Step 1: Stashing any working changes..."
git stash

Write-Host "Step 2: Building the project..."
npm run build

Write-Host "Step 3: Copying build contents to temporary location..."
$TempDeployDir = "$env:TEMP\deploy-gh-pages-tmp"
if (Test-Path $TempDeployDir) { Remove-Item -Path $TempDeployDir -Recurse -Force }
New-Item -ItemType Directory -Path $TempDeployDir | Out-Null
Copy-Item -Path "build/*" -Destination $TempDeployDir -Recurse -Force

Write-Host "Step 4: Saving current branch name..."
$CurrentBranch = git rev-parse --abbrev-ref HEAD

Write-Host "Step 5: Switching to gh-pages branch..."
git checkout gh-pages

Write-Host "Step 6: Copying required build contents from temp to root..."
$itemsToCopy = @("_app", "images", ".nojekyll", "favicon.png", "index.html")
foreach ($item in $itemsToCopy) {
    $source = Join-Path $TempDeployDir $item
    if (Test-Path $source) {
        Write-Host "Copying $item..."
        Copy-Item -Path $source -Destination "." -Recurse -Force
    } else {
        Write-Host "$item not found in build output."
    }
}

Write-Host "Step 7: Adding, committing, and pushing changes..."
git add .
git commit -m "Deploy to GitHub Pages through script"
git push origin gh-pages

Write-Host "Step 8: Switching back to original branch..."
git checkout $CurrentBranch

Write-Host "Step 9: Restoring stashed changes..."
git stash pop

Write-Host "Step 10: Cleaning up temporary deploy folder..."
Remove-Item -Path $TempDeployDir -Recurse -Force

Write-Host "Deployment script finished."
