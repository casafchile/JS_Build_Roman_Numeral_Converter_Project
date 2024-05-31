const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    let num = number.value;
    const convertToRoman = (num) => {
    let romanNumeral = "";
    let romanLookup = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ];

    for (let i = 0; i < romanLookup.length; i++) {
        while (num >= romanLookup[i][1]) {
            romanNumeral += romanLookup[i][0]
            num -= romanLookup[i][1]
        }
    };

    return romanNumeral;
}
    if (num === "") {
        output.textContent = "Please enter a valid number"
    } else if (num <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1"
    } else if (num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999"
    } else {
        output.textContent = convertToRoman(num);
    }
    output.style.border = "2px solid var(--red)";
    output.style.padding = ".5rem";
});
