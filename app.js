fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
        .then(response => response.json())
        .then(data => {
        let photoContainer = document.getElementById('photo-container');

        data.forEach(photo => {
        let photoElement = document.createElement('div');
        photoElement.classList.add('photo');

        let image = document.createElement('img');
        image.src = photo.thumbnailUrl;
        image.alt = photo.title;

        let title = document.createElement('h3');
        title.textContent = photo.title;

        let id = document.createElement('p');
        id.textContent = `ID: ${photo.id}`;

        photoElement.appendChild(image);
        photoElement.appendChild(title);
        photoElement.appendChild(id);

        photoContainer.appendChild(photoElement);
        });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });