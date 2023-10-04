document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const registeredData = document.getElementById('registeredData');
    // const imagePreview = document.getElementById('imagePreview');
    const clearButton = document.getElementById('clearButton');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(registrationForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            imageLink: formData.get('imageLink'),
            gender: formData.get('gender'),
            skills: formData.getAll('skills[]')
        };

        const personContainer = document.createElement('div');
        personContainer.className = 'person-container';
        personContainer.innerHTML = `
            <h3>${data.name}</h3>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Gender: ${data.gender}</p>
            <p>Skills: ${data.skills.join(', ')}</p>
        `;

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        imageContainer.innerHTML = ` <img src="${data.imageLink}" alt="Image Preview"> `;
        registeredData.appendChild(personContainer);
        registeredData.appendChild(imageContainer);
        registrationForm.reset();
    });

    clearButton.addEventListener('click', () => {
        registeredData.innerHTML = ''; 
        imagePreview.src = ''; 
    });
});
