document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('post');

                const titleElement = document.createElement('h2');
                titleElement.textContent = post.title;

                const dateElement = document.createElement('div');
                dateElement.classList.add('date');
                dateElement.textContent = `${post.date} by ${post.author}`;

                const summaryElement = document.createElement('p');
                summaryElement.textContent = post.summary;

                const readMoreLink = document.createElement('a');
                readMoreLink.href = `post.html?id=${post.id}`;
                readMoreLink.target = '_blank';
                readMoreLink.textContent = 'Ler postagem';
                readMoreLink.classList.add('read-more');

                postElement.appendChild(titleElement);
                postElement.appendChild(dateElement);
                postElement.appendChild(summaryElement);
                postElement.appendChild(readMoreLink);

                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
