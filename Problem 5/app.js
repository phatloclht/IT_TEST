document
  .getElementById('userForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    //  Form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const color = document.getElementById('color').value;

    // Display the values
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Name: ${name}</p><p>Age: ${age}</p><p>Favorite Color: ${color}</p>`;

    // Change the background color
    document.body.style.backgroundColor = color;
  });
