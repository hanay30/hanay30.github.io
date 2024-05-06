function acceptScientificNumber() {
    const input = document.getElementById('scientificInput').value.trim();

    // Regular expression to match a scientific number format
    const scientificRegex = /^[+-]?\d*\.?\d+([eE][+-]?\d+)?$/;

    if (scientificRegex.test(input)) {
        document.getElementById('result').textContent = `${input} is a valid scientific number.`;
    } else {
        document.getElementById('result').textContent = `${input} is not a valid scientific number.`;
    }
}
