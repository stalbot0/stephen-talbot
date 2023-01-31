"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

//1. Write a function called isBoolean that returns true if the parameter has a data type of boolean. Otherwise, it returns false. Examples: console.log(isBoolean(42)); // outputs false console.log(isBoolean("true")); // outputs false console.log(isBoolean(false)); // outputs true
function isBoolean(userInput) {
    return userInput === true || userInput === false;
}

console.log(isBoolean(true));

//2. Write a function called hasBoolean that returns true if the array parameter contains at least one element that is a boolean. Otherwise, it returns false.
function hasBoolean(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true || arr[i] === false) {
            return true
        }
    }
    return false;
}

console.log(hasBoolean([1, 2, 4, "hello"]))

//array for problems 3-5
const people = [{
    name: "Bob",
    age: 42
}, {
    name: "Sue",
    age: 27
}, {
    name: "Lou",
    age: 33
}, {
    name: "Zanzibar",
    age: 18
}, {
    name: "Gladys",
    age: 39
}
];

//3. Write a function called minAge that takes an array of people as a parameter and returns the smallest age in the array.
function minAge(array) {
    return array.reduce((accumulator, current) => {
        return accumulator.age < current.age ? accumulator.age : current;
    }, 100000000);
}

console.log(minAge(people));

//4. Write a function called longestName that takes an array of people as a parameter and returns the longest name in the array.
function longestName(array) {
    return array.reduce((accumulator, current) => {
        return accumulator.length > current.name.length ? accumulator : current.name;
    }, "");
}

console.log(longestName(people));

//5. Write a function called createPerson that takes a name parameter and an age parameter and returns an object containing the given name and age as properties.
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

console.log(createPerson("Stephen", 28));

//6. When the button with an id of bold-btn is clicked, that button's font weight should change to bold.
$(function () {
    $('#bold-btn').click(function () {
        $(this).css('font-weight', 'bold');
    })

// var boldBtn = document.querySelector('#bold-btn');
// var changeBtn = function () {
//     boldBtn.style.fontWeight = "bold"
// }
// boldBtn.addEventListener('click', changeBtn);


//7. When the button with an id of reload-btn is clicked, the page should reload (i.e., refresh).
    $('#reload-btn').click(function () {
        location.reload();
    })

// var reloadBtn = document.querySelector('#reload-btn');
// var refreshPageBtn = function () {
//     location.reload();
// }
// reloadBtn.addEventListener('click', refreshPageBtn);


//8. Whenever a list item with a class of loud-item is clicked, display that list item's text in an alert().
    $('.loud-item').click(function () {
        alert($(this).text());
    })

//9. Whenever a list item with a class of data-item is hovered over, display that list item's data-id value in the span with an id of data-display.
    $('.data-item').hover(
        function () {
            $('#data-display').text($(this).attr('data-id'));
        },
        function () {
            $('#data-display').text("");
        }
    );

//10. Whenever the button with an id of change-text-btn is clicked, change that button's text to whatever has been typed in the input with an id of change-text-input.
    $('#change-text-btn').click(function () {
        // $(this).text($('#change-text-input').value);
        var inputVal = $('#change-text-input').val();
        $(this).text(inputVal);
    })

});



