$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var thou = ["", "M", "MM","MMM"]
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    var tens = ["","X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var ones = ["","I", "II", "III", "IV", "V","VI","VII","VIII","IX"];

    var text = $("#textRoman").val();

    var input = JSON.stringify(text);
    var answer = [];

    if (input.length === 4){
      var arrayPlacement = (input.charAt(0));
      var arrayPlacement1 = (input.charAt(1));
      var arrayPlacement2 = (input.charAt(2));
      var arrayPlacement3 = (input.charAt(3));
      var romanSetThou = input.replace(arrayPlacement, (thou[arrayPlacement])).replace(arrayPlacement1, (hundreds[arrayPlacement1])) .replace(arrayPlacement2, (tens[arrayPlacement2])) .replace(arrayPlacement3, (ones[arrayPlacement3]));
      answer.push(romanSetThou);

    } else if (input.length === 3){
      var arrayPlacement = (input.charAt(0));
      var arrayPlacement1 = (input.charAt(1));
      var arrayPlacement2 = (input.charAt(2));
      var romanSetHundreds = input.replace(arrayPlacement1, (tens[arrayPlacement1])) .replace(arrayPlacement2, (ones[arrayPlacement2])) .replace(arrayPlacement, (hundreds[arrayPlacement]));
      answer.push(romanSetHundreds);

    } else if (input.length === 2){
      var arrayPlacement = (input.charAt(0));
      var arrayPlacement1 = (input.charAt(1));
      var romanSetTens = input.replace(arrayPlacement, (tens[arrayPlacement])).replace(arrayPlacement1, (ones[arrayPlacement1]));
       answer.push(romanSetTens);

    } else if (input.length === 1){
      var arrayPlacement = (input.charAt(0));
      var romanSetOne = input.replace(arrayPlacement, (ones[arrayPlacement]));
      answer.push(romanSetOne);
     }

     $('#result').text(answer);
  });
});
