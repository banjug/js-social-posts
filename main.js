/*
1. creare un array di oggetti
    1.1 ogni oggetto contiene un singolo post
    1.2 ogni oggetto deve contenere i dati relativi al post (nome autore/foto profilo/data/testo del post/immagine [se c'è]/numero di like)
2. stampare i post inserendo l'html in pagina
3. al click sul tasto mi piace aumentare il contatore dei like
    3.1 al click cambiare l'aspetto del tasto
    3.2 il tasto può aumentare il contatore solo di uno
    3.3 se clicco nuovamente il like viene rimosso e il contatore diminuisce di uno
*/

let postCont = document.getElementById('container');

let socialPost = [
    {
        'authorName' : 'Phil Mangione',
        'profilePic' : 'https://unsplash.it/300/300',
        'postDate' : '4 mesi fa',
        'postText' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'postImg' : 'https://unsplash.it/600/300',
        'likeNumber' : 80
    },

    {
        'authorName' : 'Phil Mangione',
        'profilePic' : 'https://unsplash.it/300/300',
        'postDate' : '4 mesi fa',
        'postText' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'postImg' : '',
        'likeNumber' : 80
    },

    {
        'authorName' : 'Phil Mangione',
        'profilePic' : 'https://unsplash.it/300/300',
        'postDate' : '4 mesi fa',
        'postText' : '',
        'postImg' : 'https://unsplash.it/600/300',
        'likeNumber' : 80
    },

    {
        'authorName' : 'Phil Mangione',
        'profilePic' : 'https://unsplash.it/300/300',
        'postDate' : '4 mesi fa',
        'postText' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'postImg' : 'https://unsplash.it/600/300',
        'likeNumber' : 80
    }
]

for (let i = 0; i < socialPost.length; i++) {
    
    const {authorName, profilePic, postDate, postText, postImg, likeNumber} = socialPost[i];

    postCont.innerHTML += `<div class="post"></div>`

    const innerPost = document.getElementsByClassName('post')[i];

    innerPost.innerHTML += `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${profilePic}" alt="${authorName}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${authorName}</div>
                    <div class="post-meta__time">${postDate}</div>
                </div>                    
            </div>
        </div>
    `
    if (postText !== '') {
        innerPost.innerHTML += `
            <div class="post__text">${postText}</div>
        `
    }

    if (postImg !== '') {
        innerPost.innerHTML += `
            <div class="post__image">
                <img src="${postImg}" alt="">
            </div>
        `
    }

    innerPost.innerHTML += `
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likeNumber}</b> persone
                </div>
            </div> 
        </div>
    `
}