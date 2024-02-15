const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const servicesContainer = document.getElementById('services-container');
const servicesList = document.getElementById('services-list');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
   
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'admin' && password === 'password') {
       
        loginContainer.style.display = 'none';
        displayServices();
    } else {
        alert('Password o Username non valide. Riprova.');
    }
});

function displayServices() {

    const services = ['Via del B&B', 'Ristorante ', 'Bar', 'Agropoli...'];

    
    servicesList.innerHTML = '';

   
    services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        servicesList.appendChild(li);
    });

    // Mostrare il container dei servizi
    servicesContainer.style.display = 'block';
}
