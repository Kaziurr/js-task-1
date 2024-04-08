const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function() {
    const inputValue = this.value.trim();
    const expectedLength = parseInt(this.getAttribute('data-length'));

    if (inputValue.length === expectedLength) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
});