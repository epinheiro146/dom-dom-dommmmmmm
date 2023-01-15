window.addEventListener('DOMContentLoaded', function () {     // make sure all the DOM Content is inside this function so it will all load

    let btn = document.createElement('button');            // making a button that will be appended to the HTML body
    btn.className = ('btn');
    let btnText = document.createTextNode('Add Square');
    btn.appendChild(btnText)
    document.body.appendChild(btn);


    let squareCount = 1;    /* Set the 1st square's ID to '1' HERE
    
    LATER, the event listener's function will increase the count by 1
    each time the button is clicked */


    let squaresDiv = document.createElement('div');     // make a div for the square elements to go inside of
    squaresDiv.className = ('squares-div');
    document.body.appendChild(squaresDiv);





    btn.addEventListener('click', function () {    // lots of important elements are going to be defined in here, so you're nesting quite a few EventListeners inside this

        let square = document.createElement('div');  // making the square element
        square.className = ('square');
        squaresDiv.appendChild(square);
        square.id = squareCount;                    // give numerical ID to the newly created square
        squareCount++;                              // make the square counter go up by 1, which will be given as an ID to the next square you create





        square.addEventListener('mouseenter', function () {     // when you hover over the square, creates and appends some text telling you its ID

            let idText = document.createTextNode(square.id);  // NOTE: You can't style a text node, so be careful. If you wanna style, use an element instead.
            idText.className = ('id-text');
            square.appendChild(idText);
        })

        square.addEventListener('mouseleave', function () {     // when you move the cursor away from the square, it removes the ID text
            square.innerHTML = '';                              // replacing the HTML properties of the square with 'nothing'
        })




        square.addEventListener('click', function () {          // change the color of the square on click

            square.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            // this line of code returns a random hexadecimal color value. There's other methods for getting random colors, like generating RGB values.
        })





        square.addEventListener('dblclick', function () {       // on double-clicking a square:

            if (square.id % 2 == 0) {                           // if the ID is an even number:

                if (square.nextElementSibling != null) {        // and if another square in the squaresDiv exists following this one
                    squaresDiv.removeChild(square.nextElementSibling);      // delete it
                } else {
                    alert("Can't remove the next square! This is the last square!");
                }
            } else {                                            // otherwise, it's an odd number

                if (square.previousElementSibling != null) {    // and then if another square in the squaresDiv exists PRIOR to this one
                    squaresDiv.removeChild(square.previousElementSibling);      //delete that
                } else {
                    alert("Can't remove the previous square! This is the first square!");
                }
            }
        })




    });








})