async function register() {

    const username =
        document.getElementById('username').value;

    const email =
        document.getElementById('email').value;

    const password =
        document.getElementById('password').value;

    const role =
        document.getElementById('role').value;

    const response =
        await fetch(
            'http://localhost:5000/api/auth/register',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    username,
                    email,
                    password,
                    role
                })
            }
        );

    const data =
        await response.json();

    alert(data.message);

    if(response.ok){
        window.location.href =
        'login.html';
    }

}



async function login() {

    const email =
        document.getElementById(
            'loginEmail'
        ).value;

    const password =
        document.getElementById(
            'loginPassword'
        ).value;

    const response =
        await fetch(
            'http://localhost:5000/api/auth/login',
            {
                method:'POST',

                headers:{
                    'Content-Type':
                    'application/json'
                },

                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

    const data =
        await response.json();

    alert(
        data.message ||
        'Login Successful'
    );
    localStorage.setItem(
'loggedIn',
'true'
);

    window.location.href =
    'dashboard.html';

}



function logout(){

    localStorage.removeItem(
'loggedIn'
);

    window.location.href =
    'login.html';

}