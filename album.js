const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const albumId = urlParams.get('album_id');


fetch(`https://picsum.photos/v2/list?page=2&limit=50`)
    .then(res => res.json())
    .then(photos => {
        const photosWrapper = document.createElement('div');
        photosWrapper.classList.add('photos-wrapper');
        photos.map(photo => {
            const image = document.createElement('img');
            image.setAttribute('src', photo.download_url);
            image.setAttribute('width', 150);
            image.setAttribute('height', 150);

            photosWrapper.append(image);
        })
        document.body.prepend(photosWrapper);
    })


/*const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const albumId = urlParams.get('album_id');
fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=50`)
    .then(res => res.json())
    .then(photos => {
        const photosWrapper = document.createElement('div');
        photosWrapper.classList.add('photos-wrapper');
        photos.map(photo => {
            const image = document.createElement('img');
            image.setAttribute('src', photo.thumbnailUrl);
            photosWrapper.append(image);
        })
        document.body.prepend(photosWrapper);
    })*/