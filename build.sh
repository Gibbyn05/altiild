#!/bin/bash

# Build Vite app
echo "Building Vite app..."
npx vite build

echo ""
echo "✅ Build complete!"
echo ""
echo "Decap CMS admin interface is available at /admin"
echo "   - GitHub OAuth is required to login"
echo "   - Visit: https://altiild.no/admin (on production)"
echo "   - Visit: http://localhost:3000/admin (in development)"
