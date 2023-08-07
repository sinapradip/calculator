const outputField = document.getElementById('output-field');
let currentexpression = '';


// Targeting all <button> elements
let buttons = document.querySelectorAll('button');

// Adding event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // Get the value of the clicked button


    currentexpression = currentexpression + e.target.innerHTML;
    document.getElementById('output-field').value = currentexpression;

    // Clear the input field if the button value is 'AC'
    if (e.target.innerHTML === "AC") {
      currentexpression = '';
      document.getElementById('output-field').value = currentexpression;
    } else if (e.target.innerHTML === "DEL") {
      currentexpression = currentexpression.slice(0, -4);
      document.getElementById('output-field').value = currentexpression;
    }
    // Calculate the result if the button value is '='
    else if (e.target.innerHTML === '=') {
      try {
        currentexpression = currentexpression.slice(0, -1);
        currentexpression = eval(currentexpression);
        document.getElementById('output-field').value = currentexpression;
      } catch (error) {
        document.getElementById('output-field').value = 'Error';

        //show error and revert back after .5 sec
        setTimeout(() => {
          document.getElementById('output-field').value = currentexpression;
        }, 500);

      }
    }


  })

})

//try to remove eval() and use your own mathematical logic










