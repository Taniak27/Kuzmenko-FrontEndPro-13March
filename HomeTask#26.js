/*
1. Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
2. Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
3. Зробити завдання використовуючи проміси, перехопити помилки.
*/

<!DOCTYPE html>
<html>
<head>
    <title>Fiding Post by ID</title>
</head>
<body>
    <label for="postId">Введіть ID поста (1-100):</label>
    <input type="number" id="postId" min="1" max="100" />
    <button id="fetchButton">Знайти пост</button>

    <div id="postContainer" style="display: none;">
        <h2>Пост</h2>
        <div id="postTitle"></div>
        <div id="postBody"></div>
        <button id="fetchCommentsButton">Читати коментарі</button>
        <ul id="commentsList"></ul>
    </div>

    <script>
        function fetchPostById(id) {
            return new Promise((resolve, reject) => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then(response => {
                        if (response.ok) {
                            resolve(response.json());
                        } else {
                            reject(new Error(`Не вдалося отримати пост. Статус: ${response.status}`));
                        }
                    })
                    .catch(error => {
                        reject(new Error(`Не вдалося отримати пост: ${error.message}`));
                    });
            });
        }

        function fetchCommentsByPostId(postId) {
            return new Promise((resolve, reject) => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then(response => {
                        if (response.ok) {
                            resolve(response.json());
                        } else {
                            reject(new Error(`Не вдалося отримати коментарі. Статус: ${response.status}`));
                        }
                    })
                    .catch(error => {
                        reject(new Error(`Не вдалося отримати коментарі: ${error.message}`));
                    });
            });
        }

        const fetchButton = document.getElementById('fetchButton');
        const fetchCommentsButton = document.getElementById('fetchCommentsButton');
        const postContainer = document.getElementById('postContainer');
        const postTitle = document.getElementById('postTitle');
        const postBody = document.getElementById('postBody');
        const commentsList = document.getElementById('commentsList');

        fetchButton.addEventListener('click', () => {
            const postId = document.getElementById('postId').value;
            fetchPostById(postId)
                .then(post => {
                    postContainer.style.display = 'block';
                    postTitle.innerText = post.title;
                    postBody.innerText = post.body;
                })
                .catch(error => {
                    console.error(error);
                });
        });

        fetchCommentsButton.addEventListener('click', () => {
            const postId = document.getElementById('postId').value;
            fetchCommentsByPostId(postId)
                .then(comments => {
                    commentsList.innerHTML = '';
                    comments.forEach(comment => {
                        const li = document.createElement('li');
                        li.innerText = comment.body;
                        commentsList.appendChild(li);
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        });
    </script>
</body>
</html>
