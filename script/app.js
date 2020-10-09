function handleFloatingLabel() {

}

const handlePasswordSwitcher = () => {
    const passwordInput = document.querySelector('.js-password-input');
    const passwordToggle = document.querySelector('.js-password-toggle');

    passwordToggle.addEventListener('change', (e) => {
        passwordInput.type = e.currentTarget.checked ? 'text' : 'password';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});
