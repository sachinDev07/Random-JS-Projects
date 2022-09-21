const button = document.getElementById('btn');
const colorCode = document.getElementById('hashCode');

const getColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomColor.toString(16);
    document.body.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

button.addEventListener('click', getColor);

getColor();