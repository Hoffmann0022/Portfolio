const repositorios = document.querySelector('.repositorios');

function convertToHtml(item) {
    return `
        <a class=" ${item.name} fade-in-element " href="${item.html_url}" target="_blank">
            <div class=" hover-element repositorio ">
                <i class="bi bi-box-arrow-up-right"></i>
                <div class="title">
                    <h3 class="name">${item.name}</h3>
                    <div class="open">
                        <i class="bi bi-github"></i>
                    </div>
                </div>
                <p class="description">${item.description}</p>
            </div>
        </a>
    `;
}

function loadRepositories(repositories) {
    const newHtml = repositories.map(convertToHtml).join('');
    repositorios.innerHTML += newHtml;
}

function getRepositories() {
    fetch('https://api.github.com/users/Hoffmann0022/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            const repositories = await res.json();
            loadRepositories(repositories);
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
}

getRepositories();
