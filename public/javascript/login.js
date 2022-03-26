const loginFormHandler = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');
    fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value
        }),
        heaaders: { "Content-Type": "application/json"}
    })
    .then(function() {
        document.locaation.replace('/dashboard');
    })
    .catch(err => console.log(err));
};

document.querySelector("#login-form").addEventListener('submit', loginFormHandler);