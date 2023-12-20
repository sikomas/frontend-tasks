function showContent(contentId) {
    const contentElements = document.querySelectorAll('.content');
    for (const element of contentElements) {
        element.style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'flex';
}

const captchaTextElement = document.getElementById("captcha-text");
const captchaInputElement = document.getElementById("captcha-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
let isMathCaptcha = false;

// Генерируем случайную строку из букв разного регистра
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

// Генерируем случайные числа и устанавливаем текст капчи с математическим примером
function generateMathCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    captchaTextElement.textContent = `Введите сумму ${num1} + ${num2}`;
    captchaTextElement.dataset.answer = String(num1 + num2);
    isMathCaptcha = true;
}

function generateRandomCaptcha() {
    const randomString = generateRandomString(5);
    captchaTextElement.textContent = `Введите "${randomString}"`;
    captchaTextElement.dataset.answer = randomString;
    isMathCaptcha = false;
}

// Проверка на пустой ввод
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Обработчик кнопки отправки капчи
submitButton.addEventListener("click", function () {
    const inputText = captchaInputElement.value;
    const captchaAnswer = captchaTextElement.dataset.answer;
    
    if (isEmpty(inputText)) {
        errorMessage.textContent = "Напиши хоть что-нибудь!";
    } else if (inputText === captchaAnswer) {
        errorMessage.textContent = "";
        alert("Успех!");
    } else if (isMathCaptcha && !isNaN(inputText) && parseInt(inputText) === parseInt(captchaAnswer)) {
        errorMessage.textContent = "";
        alert("Успех!");
    } else {
        errorMessage.textContent = "Неправильное значение";
        if (!isMathCaptcha) {
            generateMathCaptcha();
        }
    }
});

// Генерируем начальную текстовую капчу при загрузке страницы
generateRandomCaptcha();

class Accumulator {
    constructor(startingValue) {
        this.value = startingValue;

        this.read = function () {
            var userInput = parseFloat(prompt("Введите число:"));

            if (!isNaN(userInput)) {
                this.value += userInput;
                document.getElementById("value").textContent = this.value;
            } else {
                alert("Вы ввели некорректное значение. Попробуйте еще раз.");
            }
        };
    }
}
  
var accumulator = new Accumulator(0);
  
document.getElementById("readButton").addEventListener("click", function () {
    accumulator.read();
});

function truncate(str, maxlength) {
    return str.length <= maxlength ? str : str.slice(0, maxlength - 1) + "…";
}
  
window.addEventListener('load', function() {
    const maxLength = 20;
    const textElements = document.querySelectorAll('.card_text');
    
    textElements.forEach(function(textElement) {
      const originalText = textElement.textContent;
      const truncatedText = truncate(originalText, maxLength);
      textElement.textContent = truncatedText;
    });
  });