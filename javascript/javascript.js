function convertToAll() {
    let celsius = parseFloat(document.getElementById("celciusInput").value);

    if (isNaN(celsius)) {
        alert("Masukkan nilai suhu yang valid dalam Celsius.");
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    document.getElementById("fahrenheitOutput").value = fahrenheit.toFixed(2);
    document.getElementById("kelvinOutput").value = kelvin.toFixed(2);
}

function resetFields() {
    document.getElementById("celciusInput").value = "";
    document.getElementById("fahrenheitOutput").value = "";
    document.getElementById("kelvinOutput").value = "";
}

// function reverseText() {
//     let textArea = document.getElementById("celciusInput");
//     let reversedText = textArea.value.split('').reverse().join('');
//     textArea.value = reversedText;
// }

function reverseText() {
    let textArea = document.getElementById("celciusInput");
    let text = textArea.value;
    let reversedText = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }

    textArea.value = reversedText;
}