$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      alert('Sahhh my guy');
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('carna ah sah dude');
    });
    });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function() {
      alert('Im so ronerry');
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('Leave me alone');
    });
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      alert('GET AWAY!');
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('All offense intended');
    });
  });
});

$("button#salaid")
