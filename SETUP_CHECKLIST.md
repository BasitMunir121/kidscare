# GitHub Pages Deployment Setup Checklist

Follow these steps to set up automatic deployment:

## ✅ Pre-Deployment Checklist

- [x] GitHub Actions workflow file created (`.github/workflows/deploy.yml`)
- [x] Angular build configuration added (`github-pages` configuration in `angular.json`)
- [x] Build script added to `package.json` (`build:github-pages`)
- [x] Documentation created (`DEPLOYMENT.md`)

## 🚀 Setup Steps

1. **Initialize Git Repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit with CI/CD setup"
   ```

2. **Create GitHub Repository**
   - Go to GitHub and create a new repository
   - **Don't** initialize with README, .gitignore, or license (we already have these)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/<username>/<repository-name>.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

5. **Update baseHref** (if repository name is not the root)
   - If your repository is `username/kidscare`, update `angular.json`:
     ```json
     "github-pages": {
       "baseHref": "/kidscare/",
       ...
     }
     ```
   - If it's your main GitHub Pages site, keep `baseHref: "/"`

6. **Push Changes**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push
   ```

7. **Verify Deployment**
   - Go to **Actions** tab in GitHub
   - Wait for the workflow to complete (usually 2-3 minutes)
   - Visit your site at: `https://<username>.github.io/<repository-name>/`

## 📝 Notes

- The workflow automatically runs on every push to `main` or `master` branch
- You can also trigger it manually from the **Actions** tab
- Build logs are available in the **Actions** tab if something goes wrong

## 🎉 That's it!

Your site will now automatically deploy on every push to the main branch!
