# Admin Setup Guide - Visual Content Editor

Your website now has a professional visual content editor at `/admin` where you (or your team) can edit website content without needing to know how to code.

## How to Access the Editor

Simply visit: **https://altiild.no/admin/**

## One-Time Setup (Required for OAuth)

Before you or your team can edit content, you need to set up GitHub OAuth authentication. Follow these steps **once**:

### Step 1: Create a GitHub OAuth Application

1. Go to: https://github.com/settings/developers
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in the form:
   - **Application name**: `Alt i Ild CMS`
   - **Homepage URL**: `https://altiild.no`
   - **Authorization callback URL**: `https://altiild.no/admin/`
4. Click **Register application**
5. Copy the **Client ID** (you'll need this)

### Step 2: Environment Variables on Vercel

1. Go to your Vercel project settings: https://vercel.com
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   ```
   DECAP_CMS_GITHUB_CLIENT_ID=<paste your Client ID from Step 1>
   ```

### Step 3: Install GitHub App (Optional but Recommended)

For a better experience, you can install the Decap CMS GitHub app:
1. Visit: https://github.com/apps/decap-cms
2. Click **Install**
3. Select your account and authorize

## Using the Content Editor

Once GitHub OAuth is set up:

1. Visit **https://altiild.no/admin/**
2. Click **Login with GitHub**
3. Authorize the app (this is safe - we only access your repository)
4. You'll see the content editor dashboard

### Managing Content

The editor has these content types:

#### **Sider** (Pages)
Edit main website pages like:
- About Us (Om Oss)
- Services (Tjenester)
- Documentation (Dokumentasjon)

#### **Tjenester** (Services)
Manage individual service listings:
- Peisinstallasjon (Fireplace Installation)
- Ovnsmontering (Stove Installation)
- Piperehabilitering (Pipe Rehabilitation)

#### **Blog Posts**
Create and edit blog articles with:
- Title
- Description
- Rich text content
- Featured images

### Editing Content

1. Click on any content type
2. Select an item to edit
3. Use the visual editor to:
   - Edit text
   - Upload images
   - Add formatted content
   - Set publishing dates
4. Click **Publish** or **Save Draft**
5. Changes are automatically saved to GitHub

### Adding New Content

1. Click **New** button in any collection
2. Fill in the content
3. Upload images if needed
4. Click **Publish**
5. Your website updates automatically!

## Image Uploads

- Images are automatically saved to `/public/uploads/`
- Supported formats: JPG, PNG, WebP, SVG
- Images are committed to GitHub with your content

## How Changes Work

When you publish content:
1. The editor creates/updates a JSON file in your GitHub repository
2. Git commits the change with a message
3. GitHub Actions may trigger a rebuild (if configured)
4. Your website updates with the new content

All changes are tracked in Git, so you can:
- See edit history
- Revert changes if needed
- Collaborate with team members

## Troubleshooting

### "Login with GitHub" button doesn't work
- Make sure OAuth is set up (Step 2 above)
- Check that the GitHub Client ID is correct in environment variables
- Wait 5 minutes after setting environment variables

### Images won't upload
- Check that `/public/uploads/` folder exists
- Make sure you have write permissions to the repository
- Try with a smaller file size first

### Can't see any content
- Make sure content files exist in `/content/` folders
- Check that YAML collection configuration is correct
- Refresh the page

## For Your Development Team

To connect the CMS content to your React components:

1. Import content from JSON files:
```typescript
import serviceData from '@/content/services/peisinstallasjon.json';

export function ServicePage() {
  return (
    <div>
      <h1>{serviceData.title}</h1>
      <p>{serviceData.description}</p>
      <div>{serviceData.body}</div>
    </div>
  );
}
```

2. Or fetch dynamically:
```typescript
const loadContent = async () => {
  const response = await fetch('/content/services/peisinstallasjon.json');
  return response.json();
};
```

## Next Steps

1. ✅ Access the editor at `/admin/`
2. ✅ Create GitHub OAuth app
3. ✅ Set environment variables
4. ✅ Login and start editing!
5. (Optional) Connect content to React components

## Support

If you have questions about using the editor:
- The visual editor interface is intuitive and self-explanatory
- Hover over fields for helpful tooltips
- Check the preview before publishing

---

**Your website content is now fully editable!** 🎉
