// parseFloat will take a string or number with 1 decimal allowance and turn it into a number in order to do mathimatical equations
        function add() {
            const num1 = parseFloat(document.getElementById('addInput1').value);
            const num2 = parseFloat(document.getElementById('addInput2').value);
            const result = num1 + num2;
            document.getElementById('addResult').innerText = `Result: ${result}`;
        }

        function subtract() {
            const num1 = parseFloat(document.getElementById('subInput1').value);
            const num2 = parseFloat(document.getElementById('subInput2').value);
            const result = num1 - num2;
            document.getElementById('subResult').innerText = `Result: ${result}`;
        }

        function multiply() {
            const num1 = parseFloat(document.getElementById('mulInput1').value);
            const num2 = parseFloat(document.getElementById('mulInput2').value);
            const result = num1 * num2;
            document.getElementById('mulResult').innerText = `Result: ${result}`;
        }
    
