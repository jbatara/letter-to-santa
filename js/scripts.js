$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInput = $("input#person1").val();
    var presentInput = $("input#present").val();
    $("span.person").append(personInput);
    $(".present").append(presentInput);
    $("#letter").show();
    event.preventDefault();
  });
});
