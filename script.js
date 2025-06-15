
function checkPassword() {
    const input = document.getElementById('password').value;
    const correct = '1021';
    if (input === correct) {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        document.getElementById('error-msg').innerText = 'Cute try, but wrong password!';
    }
}
