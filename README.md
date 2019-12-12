# Develop chrome-extension
### MANIFEST.JSON
> This is a .json file which contains all the information about your extension.It also contains the information about the permission on browser.
Like ` "permissions": ["activeTab"]`.
manifest.json
```
{
  "manifest_version": 2,
  "name": "Quotes day",
  "description": "Quotes for you Everyday!.Get inspired from best quotes of the world",
  "version": "1",
  "author": "Easyvipin",
  "browser_action": {
    "default_icon": "icon.png",
    "default_title": "QUOTES AT RESCUE",
    "default_popup": "quotes.html"
  },
  "permissions": ["activeTab"],
  "content_security_policy": "script-src 'self' https://ajax.googleapis.com; object-src 'self'"
}
```
### Html and JS (if you want to run some script otherwise its not necessary)
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="index.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet">
    <link rel="Stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
        <div class="row">
                <div class="col s12 m7">
                  <div class="card">
                    <div class="card-image">
                      <img src="" id="back">
                      <span class="card-title"></span>
                    </div>
                    <div class="card-content" style="background: black;">
                            <p id="quotes"></p>
                          </div>
                  </div>
                </div>
    
  </body>
</html>
```
I just used some Api call to generate a random quote with a background,here's a script.
```
window.onload = function() {
  $.ajax({
    url: `http://quotes.rest/qod.json?category=inspire  `,
    dataType: "json",
    type: "GET"
  })
    .done(function(response) {
      console.log(response);
      let img_path = response.contents.quotes[0].background;
      let line = response.contents.quotes[0].quote;
      document.getElementById("back").src = img_path;
      document.getElementById("quotes").innerHTML = line;
    })
    .catch(() => {
      document.getElementById("quotes").innerHTML =
        "Check your Internet connection";
    });
};

```
### ALL DONE
# PUBLISH ON WEB STORE
[WEB STORE](https://chrome.google.com/webstore/developer/dashboard)
