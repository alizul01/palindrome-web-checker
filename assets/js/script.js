const userInput = document.getElementById('user-input'),
    checkButton = document.getElementById('check-button');
let filter;
const infoPalindrome = document.getElementById('info-palindrome');

checkButton.addEventListener('click', (e) => {
    let reverseInput = userInput.value.split('').reverse().join('');
    e.preventDefault();
    infoPalindrome.style.display = 'block';
    if (userInput.value === reverseInput) {
        return infoPalindrome.innerHTML = `Correct! <span> ' ${userInput.value} ' </span> is a palindrome`;
    } else {
        return infoPalindrome.innerHTML = `Incorrect! <span> ' ${userInput.value} ' </span> is not a palindrome`;
    }
});

userInput.addEventListener('keyup', (e) => {
    filter = userInput.value.replace(/[^a-zA-Z0-9]/ig, '').toLowerCase();
    e.preventDefault();
    if (filter) {
        return checkButton.classList.add('active'), checkButton.classList.remove('inactive');
    }
    checkButton.classList.remove('active');
    checkButton.classList.add('inactive');
});