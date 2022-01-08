console.log('labas')
const postTitle = document.querySelector('.post-title');
const postAuthor = document.querySelector('.post-author');
const postContent = document.querySelector('.post-content');

const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const postId = urlParams.get('post_id');
console.log(queryParams);
console.log(urlParams);
console.log(postId);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {

        console.log(post.title);
        console.log(post.body);
        console.log(post.userId);

        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => res.json())
            .then(user => {
                console.log(user.name);
                postAuthor.innerHTML = `Author: <a href="user.html?user_id=${user.id}">${user.name}</a>`;
            })



        postTitle.textContent = post.title;

        postContent.textContent = post.body






    })