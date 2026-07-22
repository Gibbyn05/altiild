# Decap CMS Setup Guide

Your website now has a visual content editor at `/admin`. Follow these steps to enable your customer to edit content.

## Step 1: Create a GitHub OAuth Application

1. Go to GitHub Settings → Developer settings → OAuth Apps → New OAuth App
2. Fill in the form:
   - **Application name**: Alt i Ild CMS
   - **Homepage URL**: https://altiild.no
   - **Authorization callback URL**: https://altiild.no/admin/

3. After creating, copy the **Client ID**

## Step 2: Add Environment Variables

The client needs to set up a simple backend service to handle OAuth token exchange. For now, you have two options:

### Option A: Use GitHub's External Auth Service (Easiest)
Update `public/admin/config.yml`:
```yaml
backend:
  name: github
  repo: gibbyn05/altiild
  branch: main
  auth_endpoint: api/auth
```

This uses Decap CMS's built-in GitHub auth flow.

### Option B: Deploy a Backend Service
If OAuth isn't working, deploy a simple Node.js backend:
- Clone/deploy the auth service from: https://github.com/decaporg/netlify-cms-github-backend
- Update `public/admin/config.yml` with your backend URL

## Step 3: Test the Admin Interface

1. Visit https://altiild.no/admin/
2. Click "Login with GitHub"
3. Authorize the app
4. Start editing content!

## How It Works

- Content is stored directly in your GitHub repository in JSON format
- Changes are automatically committed to the `main` branch
- Your website can read the JSON files and display content
- Non-technical team members can edit through the visual interface

## Content Collections

The CMS manages:
- **Sider** (Pages) - Site pages
- **Tjenester** (Services) - Service descriptions
- **Blog Posts** - Blog content

Each item includes:
- Title
- Description
- Content (with rich text editor)
- Image uploads (saved to `/public/uploads`)
- Publishing date

## Next Steps

After confirming the CMS works:
1. Integrate content loading into your React components
2. Create a content API layer to read JSON files
3. Update pages to display CMS content dynamically
