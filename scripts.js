fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then(posts => {
        const postsWrapper = document.createElement('div');
        postsWrapper.classList.add('posts-wrapper');
        document.querySelector('body').prepend(postsWrapper);
        posts.map(post => {
            fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
                .then(res => res.json())
                .then(userData => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    const showCommentsButton = document.createElement('button');
                    showCommentsButton.classList.add('comments-button');
                    showCommentsButton.textContent = 'Read Comments';
                    showCommentsButton.addEventListener('click', () => {
                        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                            .then(res => res.json())
                            .then(comments => {
                                const commentsList = document.createElement('div');
                                commentsList.classList.add('comments-list');
                                comments.map(comment => {
                                    console.log(comment);
                                    const commentElement = document.createElement('div');
                                    commentElement.classList.add('comment-wrapper');
                                    commentElement.innerHTML = `<h3>${comment.name}</h3>
                                              <span>Message by: ${comment.email}</span>
                                              <p>${comment.body}</p>`;
                                    commentsList.append(commentElement);
                                })
                                postElement.append(commentsList);
                                showCommentsButton.remove();
                            })
                    })
                    postElement.innerHTML = `<h2><a href="post.html?post_id=${post.id}">${post.title}</a></h2>                                 
                      <span>Author: <a href="user.html?user_id=${post.userId}">${userData.name}</a></span>                                   
                                   <p>${post.body}</p>`;
                    postElement.append(showCommentsButton);
                    postsWrapper.append(postElement);
                })
        })
    })