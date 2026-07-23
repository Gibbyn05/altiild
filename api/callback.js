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

    const contentJson = JSON.stringify(content);

    const html = `<!doctype html>
<html>
<head><meta charset="utf-8" /><title>Logger inn...</title></head>
<body style="font-family: sans-serif; text-align: center; padding: 40px;">
  <p id="status">Logger inn... Du kan lukke dette vinduet.</p>
  <script>
    (function() {
      var provider = 'github';
      var content = ${contentJson};
      var message = 'authorization:' + provider + ':success:' + JSON.stringify(content);

      function sendToOpener() {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage(message, '*');
          return true;
        }
        return false;
      }

      function receiveMessage(e) {
        sendToOpener();
      }

      window.addEventListener('message', receiveMessage, false);

      if (window.opener && !window.opener.closed) {
        // Announce we are authorizing; the CMS replies and we resend the token.
        window.opener.postMessage('authorizing:' + provider, '*');
        // Also send the token directly and repeatedly, in case the handshake
        // message is missed (e.g. opener chain affected by cross-origin nav).
        var attempts = 0;
        var timer = setInterval(function() {
          attempts++;
          var ok = sendToOpener();
          if (attempts > 20 || !window.opener || window.opener.closed) {
            clearInterval(timer);
            document.getElementById('status').textContent =
              'Innlogging fullført. Du kan lukke dette vinduet.';
          }
        }, 250);
      } else {
        document.getElementById('status').textContent =
          'Fant ikke redigeringsvinduet. Lukk dette vinduet og prøv å logge inn på nytt fra /admin.';
      }
    })();
  </script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send(`OAuth callback error: ${err.message}`);
  }
}
