import crypto from 'crypto';

export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    res.status(500).send('Missing GITHUB_CLIENT_ID environment variable');
    return;
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const redirectUri = `https://${host}/api/callback`;
  const state = crypto.randomBytes(16).toString('hex');

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    state,
  });

  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
  });
  res.end();
}
