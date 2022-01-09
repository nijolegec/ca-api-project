console.log('labas')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        const usersListElement = document.querySelector('#users-list');

        users.map(user => {
            console.log(user);
            const userElement = document.createElement('li');
            userElement.textContent = user.name;
            usersListElement.append(userElement);
        })
    })