$(".run").on("click", function () {
  var output; //Assign this your final output to this variable

  var arr = [
    { id: "10", class: "child-of-9" },
    { id: "11", class: "child-of-10" },
  ];

  for (var i = 0; i < arr.length; i++) {
    document.write("<br><br>array index: " + i);
    var obj = arr[i];
    for (var key in obj) {
      var value = obj[key];
      document.write("<br> - " + key + ": " + value);
    }
  }

  $(".console").append("<p>" + output + "</p>");
});
$(".clear").on("click", function () {
  $(".console").empty();
});
