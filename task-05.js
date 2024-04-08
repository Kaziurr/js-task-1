document.getElementById('name-input').addEventListener('input', function() {
    document.getElementById('name-output').textContent = this.value.trim() || 'Anonymous';
});