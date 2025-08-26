@echo off
echo Setting up Git repository for Team Dashboard...
echo.

echo Step 1: Installing Git (if not already installed)
echo Please download Git from: https://git-scm.com/download/win
echo After installation, restart this script
echo.
pause

echo Step 2: Initializing Git repository...
git init

echo Step 3: Adding all files to Git...
git add .

echo Step 4: Making first commit...
git commit -m "Initial commit: Team Dashboard with React frontend and Node.js backend"

echo Step 5: Setting main branch...
git branch -M main

echo Step 6: Adding remote origin...
git remote add origin git@github.com:lawsmiley/Team-dashboard.git

echo Step 7: Pushing to GitHub...
git push -u origin main

echo.
echo Git repository setup completed!
echo Your Team Dashboard is now on GitHub at: https://github.com/lawsmiley/Team-dashboard
echo.
pause
