# res.redirect and res.render

## res.redirect
res.redirect(some URL) is for you to want to return a 30x status code to the browser and tell the browser to go to a new URL. This is often done on the server as part of a login process and occasionally when the user finds themselves at an old URL that has been changed to something different.  res.redirect() should only be used for these types of forced navigation to a different URL and should never be part of any standard rendering process.

## res.render
res.render(filename, data) is how one would typically use EJS (or any other template engine plugged into Express) to fill in a template with some data and return the "rendered" HTML page back to the requesting browser so the browser can render it.