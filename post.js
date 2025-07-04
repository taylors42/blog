document.addEventListener('DOMContentLoaded', () => {
    const postTitle = document.getElementById('post-title');
    const postContainer = document.getElementById('post-content-container');
    
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const post = posts.find(p => p.id == postId);

            if (post) {
                postTitle.textContent = post.title;
                
                const postElement = document.createElement('article');
                postElement.classList.add('post');

                const dateElement = document.createElement('div');
                dateElement.classList.add('date');
                dateElement.textContent = `${post.date} by ${post.author}`;

                const contentElement = document.createElement('p');
                contentElement.textContent = post.content;

                postElement.appendChild(dateElement);
                postElement.appendChild(contentElement);

                postContainer.appendChild(postElement);
            } else {
                postContainer.innerHTML = '<p>Postagem não encontrada.</p>';
            }
        })
        .catch(error => console.error('Error fetching post:', error));
});
