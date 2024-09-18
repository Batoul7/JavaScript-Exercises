let theInput = document.querySelector('.get-repos input'),
    getButton = document.querySelector('.button'),
    reposData = document.querySelector('.show');

getButton.onclick = function () {
    getRepos();
}
    function getRepos() {
        if(theInput.value == "") {
            reposData.innerHTML = "<span>Please Write Github Username</span>";
        } else {
            fetch(`https://api.github.com/users/${theInput.value}/repos`)

                .then ((response) => {
                    return response.json();
                })

                .then ((data) =>{
                    reposData.innerHTML = '';
                    
                    data.forEach(repo => {
                        let mainDiv = document.createElement('div');
                        let repoName = document.createTextNode(repo.name);
                        mainDiv.appendChild(repoName);

                        let theUrl = document.createElement('a');
                        let urlText = document.createTextNode('visit');
                        theUrl.appendChild(urlText);
                        theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
                        theUrl.setAttribute('target', '_blank');
                        mainDiv.appendChild(theUrl);

                        let stars = document.createElement('span');
                        let starsText = document.createTextNode(`stars ${repo.stargazers_count}`);
                        stars.appendChild(starsText);
                        mainDiv.appendChild(stars);

                        mainDiv.className = "box";
                        reposData.appendChild(mainDiv);
                    });
                })
        }
    }
