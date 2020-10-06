function submit() {
  //   var submitButton = document.getElementById("submitButton").innerHTML;

  //   var numbertotal = document.getElementById("numbertotal").innerHTML;

  //   var lettertotal = document.getElementById("lettertotal").innerHTML;

  var Quizes = parseInt(document.getElementById("Quizes").value);
  var Midterm = parseInt(document.getElementById("Midterm").value);
  var FinalTest = parseInt(document.getElementById("FinalTest").value);
  var Oral = parseInt(document.getElementById("Oral").value);

  let total = Quizes + Midterm + FinalTest + Oral;
  document.getElementById("total_grades").innerHTML = total;
  if (total >= 90) {
    document.getElementById("final_grade").innerHTML = "(A) درجتك بالاحرف هي";
  } else if (total >= 80) {
    document.getElementById("final_grade").innerHTML = "(B) درجتك بالاحرف هي";
  } else if (total >= 70) {
    document.getElementById("final_grade").innerHTML = "(C) درجتك بالاحرف هي";
  } else if (total >= 60) {
    document.getElementById("final_grade").innerHTML = "(D) درجتك بالاحرف هي";
  } else
    document.getElementById("final_grade").innerHTML = "(F) درجتك بالاحرف هي";
}
