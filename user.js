console.log('labas')

const queryParams = window.location.search;
console.log(queryParams)
const urlParams = new URLSearchParams(queryParams);
const userId = urlParams.get('user_id');
console.log(userId);


fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(response => response.json())
    .then(user => {
        console.log(user)

        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        const userName = document.createElement('h2');
        userName.classList.add('user-name');
        userName.textContent = `${user.name} (${user.username})`;
        const userPersonalInfo = document.createElement('ul');
        userPersonalInfo.classList.add('user-personal-info');
        const userEmail = document.createElement('li');
        userEmail.innerHTML = `Email: <a href="mailto:${user.email}">${user.email}</a>`;
        const userAddress = document.createElement('li');
        userAddress.innerHTML = `Address: <a href="https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat}%2C${user.address.geo.lng}" target="_blank">${user.address.street} st. ${user.address.suite}, ${user.address.city} (zipcode: ${user.address.zipcode})</a>`;
        const userPhone = document.createElement('li');
        userPhone.innerHTML = `Phone: <a href="tel:${user.phone}">${user.phone}</a>`;
        const userWeb = document.createElement('li');
        userWeb.innerHTML = `Website: <a href="http://${user.website}" target="_blank">${user.website}</a>`;
        const userWork = document.createElement('li');
        userWork.textContent = `Work: ${user.company.name}`;
        userPersonalInfo.append(userEmail, userAddress, userPhone, userWeb, userWork);
        userInfo.append(userName, userPersonalInfo);
        document.body.prepend(userInfo);

        fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
            .then(response => response.json())
            .then(posts => {
                const postsWrapper = document.createElement('div');
                postsWrapper.classList.add('posts-wrapper');
                document.querySelector('body').append(postsWrapper);
                posts.map(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `<h2><a href="post.html?post_id=${post.id}">${post.title}</a></h2><p>${post.body}</p>`;
                    postsWrapper.append(postElement);
                })
                fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
                    .then(res => res.json())
                    .then(albums => {
                        const albumsWrapper = document.createElement('div');
                        albumsWrapper.classList.add('albums-wrapper');
                        const albumsList = document.createElement('ul');
                        albumsList.classList.add('albums-list');
                        albums.map(album => {
                            albumsList.innerHTML += `<li><a href="album.html?album_id=${album.id}">${album.title}</a></li>`;
                        })
                        albumsWrapper.append(albumsList);
                        document.body.append(albumsWrapper);
                    })
            });
    });