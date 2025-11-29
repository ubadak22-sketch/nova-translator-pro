// script.js
const loginForm = document.getElementById('login-form');
const demoLink = document.getElementById('demo-link');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('https://adolfo-blondish-sublaryngeally.ngrok-free.dev/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = 'translator.html';
        } else {
            alert('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
    }
});

demoLink.addEventListener('click', async () => {
    try {
        const response = await fetch('https://adolfo-blondish-sublaryngeally.ngrok-free.dev/demo', {
            method: 'POST'
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = 'translator.html';
        } else {
            alert('Demo failed');
        }
    } catch (error) {
        console.error(error);
    }
});
