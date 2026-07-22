#!/bin/bash

# Build Vite app
echo "Building Vite app..."
npx vite build

# Check if TinaCMS credentials are set
if [ -z "$NEXT_PUBLIC_TINA_CLIENT_ID" ] || [ -z "$TINA_TOKEN" ]; then
  echo ""
  echo "⚠️  TinaCMS credentials not found in environment variables."
  echo "   Admin interface will not be available until you set:"
  echo "   - NEXT_PUBLIC_TINA_CLIENT_ID"
  echo "   - TINA_TOKEN"
  echo ""
  echo "   See TINACMS_SETUP.md for instructions."
  exit 0
fi

# Build TinaCMS if credentials are available
echo "Building TinaCMS admin interface..."
npx tinacms build || {
  echo ""
  echo "⚠️  TinaCMS build failed. Possible reasons:"
  echo "   1. Client ID or Token is invalid"
  echo "   2. Project not found in TinaCMS Cloud"
  echo "   3. Check that your TinaCMS project was created successfully"
  echo ""
  echo "   Continuing without TinaCMS admin interface..."
  echo "   See TINACMS_SETUP.md for instructions."
  exit 0
}
