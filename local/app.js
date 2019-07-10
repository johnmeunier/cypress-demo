if(localStorage.getItem('logged') == "true"){
    //INIT
    const articles = [
        {
            "title": "Titre de mon 1er article",
            "content": "Contenu de mon 1er article",
        },
        {
            "title": "Titre de mon 2ème article",
            "content": "Contenu de mon 2ème article",
        },
    ];
    localStorage.setItem('articles', JSON.stringify(articles));

    // ADD ARTICLE
    document.querySelector('.write__button').addEventListener('click', () => {
        const curr = JSON.parse(localStorage.getItem('articles'));
        curr.push({
            "title" : document.querySelector('.write__title').value,
            "content": document.querySelector('.write__content').value
        })
        document.querySelector('.write__title').value = "";
        document.querySelector('.write__content').value = "";
        localStorage.setItem('articles', JSON.stringify(curr))
    });

    // DISPLAY ARTICLES
    setInterval(() => {
        document.querySelector('.articles').innerHTML = "";
        JSON.parse(localStorage.getItem('articles')).forEach(article => {
            const art = document.createElement('article');
            art.innerHTML = `
                <h3> ${article.title} </h3>
                <p> ${article.content} </p>
            `
            document.querySelector('.articles').appendChild(art);
        });
    }, 1000);
} else {
    document.location.href = "http://localhost:8000/login.html";
}
