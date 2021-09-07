function resetMessages() {
  $(".noUsernameEntered,.wrongUsernameEntered, .incompleteUsername, .everythingRight,.Fetched").fadeOut();
}
$(function () {
  var FetchedDetails = null;

  $(".Fetched, .wrongUsernameEntered, .incompleteUsername, .everythingRight").hide();
  
  $("#github-username").keyup(function () {
    if ($(this).val().trim().length > 0) {
       $("#check").prop("disabled",false);
       if(!$(".noUsernameEntered").is(":visible")) {
        resetMessages();
        $(".noUsernameEntered").fadeIn();
       }
    } else {
      $("#check").prop("disabled",true);
    }
  })
  $("#check").click( function (e) {
    e.preventDefault();
    $("#github-username, #check").prop("disabled",true);
    //Gets JSON of github api for specific user
    $.getJSON("https://api.github.com/users/" + $("#github-username").val(), function(res){
      FetchedDetails = res;
      resetMessages();
      $(".everythingRight").fadeIn();
      $("#fetch").prop("disabled",false);
    }
    ).fail(function() {
      resetMessages();
      $(".wrongUsernameEntered").fadeIn();
    })
  });
  $("#fetch").click(function (e) {
    e.preventDefault();
    $(".Fetched #avatar_url").attr("src",FetchedDetails.avatar_url);
    $(".Fetched #login").text(FetchedDetails.login);
    $(".Fetched #name").text(FetchedDetails.name);
    $(".Fetched #company").text(FetchedDetails.company);
    $(".Fetched #hireable").text(FetchedDetails.hireable);
    $(".Fetched #blog").text(FetchedDetails.blog);
    $(".Fetched #location").text(FetchedDetails.location);
    $(".Fetched #bio").text(FetchedDetails.bio);
    $(".Fetched #twitter_username").text(FetchedDetails.twitter_username);
    resetMessages();
    $(".Fetched").fadeIn();
    $(this).after(
      ` <button type="button" class="btn btn-primary" onclick="location.reload();">Again</button>`
    );
  });
});

