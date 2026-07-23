export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.status(500).send('Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET environment variable');
    return;
  }

  const { code } = req.query;

  if (!code) {
    res.status(400).send('Missing authorization code');
    return;
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error || !data.access_token) {
      res.status(401).send(`OAuth error: ${data.error_description || data.error || 'no access token'}`);
      return;
    }

    const content = {
      token: data.access_token,
      provider: 'github',
    };

    const html = `<!doctype html><html><body><script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify(content)}',
            e.origin
          );
          window.removeEventListener('message', receiveMessage, false);
        }
        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script></body></html>`;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send(`OAuth callback error: ${err.message}`);
  }
}
