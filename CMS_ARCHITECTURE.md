# Decap CMS Architecture

## How Your Visual Editor Works

```
┌─────────────────────────────────────────────────────────────┐
│                   YOUR WEBSITE VISITOR                      │
│                   https://altiild.no                        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     └──► React App loads content
                          from JSON files
                          
┌─────────────────────────────────────────────────────────────┐
│                    YOUR ADMIN PANEL                         │
│                   https://altiild.no/admin/                 │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Decap CMS - Visual Content Editor                    │ │
│  │  ✓ Login with GitHub                                 │ │
│  │  ✓ Edit content visually                             │ │
│  │  ✓ Upload images                                     │ │
│  │  ✓ Publish changes                                   │ │
│  └────────────────────┬───────────────────────────────────┘ │
└─────────────────────┼───────────────────────────────────────┘
                      │
                      │ Saves content changes
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                  GITHUB REPOSITORY                          │
│                 gibbyn05/altiild                            │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ /content/                                             │ │
│  │ ├── /pages/                                           │ │
│  │ │   ├── om-oss.json                                  │ │
│  │ │   └── tjenester.json                               │ │
│  │ ├── /services/                                        │ │
│  │ │   ├── peisinstallasjon.json                        │ │
│  │ │   ├── ovnsmontering.json                           │ │
│  │ │   └── piperehabilitering.json                      │ │
│  │ └── /posts/                                           │ │
│  │     └── blog-article.json                            │ │
│  │                                                       │ │
│  │ /public/uploads/                                      │ │
│  │ └── [images uploaded via CMS]                         │ │
│  │                                                       │ │
│  │ /public/admin/                                        │ │
│  │ ├── index.html      [CMS interface]                  │ │
│  │ └── config.yml      [CMS configuration]              │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Every time you publish:
                      │ 1. Content is updated
                      │ 2. Git commit is created
                      │ 3. Repository is synced
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                      DEPLOYMENT                             │
│                   Vercel (automatic)                        │
│                                                              │
│  Detects GitHub changes →                                   │
│  Rebuilds website →                                         │
│  Updates https://altiild.no                                 │
└─────────────────────────────────────────────────────────────┘
```

## Content Storage Structure

All content is stored as **JSON files** in your GitHub repository:

```
/content/
├── pages/
│   ├── om-oss.json
│   ├── dokumentasjon.json
│   └── ...
├── services/
│   ├── peisinstallasjon.json
│   ├── ovnsmontering.json
│   ├── piperehabilitering.json
│   └── ...
└── posts/
    ├── first-article.json
    └── ...

/public/uploads/
└── [all images uploaded via CMS]
```

## Example Content File

When you edit and publish content, it's stored like this:

**File: `/content/services/peisinstallasjon.json`**
```json
{
  "title": "Peisinstallasjon",
  "description": "Profesjonell installasjon av moderne peiser",
  "body": "Vi installerer alle typer peiser med høyeste kvalitetsstandard. Sertifisert montør med lang erfaring.",
  "image": "/uploads/fireplace-image.jpg",
  "publishedAt": "2026-07-22T10:30:00Z"
}
```

## Security & Permissions

- **Editor access**: Controlled via GitHub account authentication
- **Content changes**: Tracked in Git commit history
- **Images**: Automatically uploaded and committed to repository
- **Rollback**: Any changes can be reverted through Git history

## How to Connect Content to Your Website

Your React app can load content in two ways:

### Option 1: Import Statically
```tsx
import serviceData from '@/content/services/peisinstallasjon.json';

export default function ServicePage() {
  return <h1>{serviceData.title}</h1>;
}
```

### Option 2: Fetch Dynamically
```tsx
const [content, setContent] = useState(null);

useEffect(() => {
  fetch('/content/services/peisinstallasjon.json')
    .then(r => r.json())
    .then(setContent);
}, []);

return content && <h1>{content.title}</h1>;
```

## Workflow

1. **Customer/Editor** visits `/admin/` on website
2. **Logs in** with GitHub account
3. **Edits content** in visual editor
4. **Uploads images** directly through the interface
5. **Publishes** changes
6. **Git commits** are created automatically
7. **Website updates** when Vercel detects changes

---

**Result**: Non-technical users can edit website content visually, all changes are tracked in Git, and deployment is automatic! 🚀
