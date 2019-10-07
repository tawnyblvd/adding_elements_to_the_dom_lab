//Make a website with a heading, an input text field and a button.
//Clicking the button should change the heading's text to be the text in the input. -->

<!DOCTYPE html>
<html>
<head>
  </head>
<body>

<h1>This is my heading.</h1>

<input type="text" id="inputText" placeholder="new heading text">

<button onclick="changeHeading()">Move the heading</button>

<script>
  function changeHeading(){
    let firstElement = document.getElementById("h1");
    let newElement = document.getElementById("#inputText");
    let newElement.innerText = body.replaceChild(newElement, firstElement);
  }
  </script>

</body>

</html>
