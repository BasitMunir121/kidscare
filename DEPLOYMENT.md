# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Repository Setup

1. Push your code to a GitHub repository
2. Go to your repository **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Branch Configuration

The workflow automatically deploys when you push to:
- `main` branch
- `master` branch

To change this, edit `.github/workflows/deploy.yml` and modify the `branches` section:

```yaml
on:
  push:
    branches:
      - main  # Change to your preferred branch
```

### 3. Repository Name Consideration

**Important**: If your repository name is different from the root URL (e.g., `username/kidscare`), you may need to update the `baseHref` in `angular.json`.

For example, if your repository is `username/kidscare`, update the `github-pages` configuration:

```json
"github-pages": {
  "baseHref": "/kidscare/",
  ...
}
```

If your repository is set as the GitHub Pages source for your user/organization (repository name matches the username), use:

```json
"github-pages": {
  "baseHref": "/",
  ...
}
```

### 4. Manual Deployment

The workflow can also be triggered manually:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

### 5. View Your Site

After deployment, your site will be available at:
- `https://<username>.github.io/<repository-name>/` (if repository-specific)
- `https://<username>.github.io/` (if it's your main GitHub Pages site)

## How It Works

1. **Push to repository** → Triggers GitHub Actions workflow
2. **Build step** → Installs dependencies and builds Angular app
3. **Deploy step** → Uploads built files to GitHub Pages
4. **Automatic deployment** → Your site is live!

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure `package.json` dependencies are correct
- Verify Node.js version compatibility

### Site Not Updating
- Check if the workflow completed successfully
- Verify GitHub Pages source is set to "GitHub Actions"
- Clear browser cache or try incognito mode

### 404 Errors
- Verify `baseHref` matches your repository name
- Check that `.nojekyll` file exists in the output directory
- Ensure routing is configured correctly (HashLocationStrategy if needed)

## Local Testing

To test the GitHub Pages build locally:

```bash
npm run build:github-pages
npx http-server dist/kids-care-app/browser -p 8080
```

Then visit `http://localhost:8080` in your browser.
