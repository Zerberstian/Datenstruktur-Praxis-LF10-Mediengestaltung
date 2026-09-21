const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');

const benutzer = {
    name: "Anna",
    alter: 28,
    email: "anna@example.com",
    hobbies: ["Lesen", "Radfahren"]
};

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === '' || email === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Here you can add code to handle the form submission, e.g., send data to a server
    console.log('Name:', name);
    console.log('Email:', email);



    }
);