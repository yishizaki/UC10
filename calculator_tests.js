// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    currentInput = '0';
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    currentInput = '0';
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    currentInput = '0';
});
//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test("Changes the sign of the current input", function (assert) {
    currentInput = '0';
    addDigit('42');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-42", "Passed - expected -42");
    currentInput = '0';
});


//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
QUnit.test("Change current input into a percentage", function (assert) {
    currentInput = '0';
    addDigit('28');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.28", "Passed - expected 0.28");
    currentInput = '0';
});


//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test("Calculate the inverse of a number", function (assert) {
    currentInput = '0';
    addDigit('');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.28", "Passed - expected 0.28");
    currentInput = '0';
});

//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.


//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.


//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.


//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.


//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.


//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
