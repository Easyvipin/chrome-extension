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
