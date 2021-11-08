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

// seleziona il container dove inserire i post 
let postCont = document.getElementById('container');

// array di oggetti(ogni oggetto un post)
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
        'likeNumber' : 60
    },

    {
        'authorName' : 'Phil Mangione',
        'profilePic' : 'https://unsplash.it/300/300',
        'postDate' : '4 mesi fa',
        'postText' : '',
        'postImg' : 'https://unsplash.it/600/300',
        'likeNumber' : 35
    },

    {
        'authorName' : 'Phil Mangione',
        'profilePic' : 'https://unsplash.it/300/300',
        'postDate' : '4 mesi fa',
        'postText' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'postImg' : 'https://unsplash.it/600/300',
        'likeNumber' : 10
    }
]

// ciclo che genera i post 

for (let i = 0; i < socialPost.length; i++) {
    
    // mi salvo i valori delle chiavi dei post 
    const {authorName, profilePic, postDate, postText, postImg, likeNumber} = socialPost[i];

    // inserisco il container del singolo post 
    postCont.innerHTML += `<div class="post"></div>`

    // seleziono il container del singolo post che mi interessa
    const innerPost = document.getElementsByClassName('post')[i];

    // inserisco l'header del post
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

    // se il post ha testo lo inserisco
    if (postText !== '') {
        innerPost.innerHTML += `
            <div class="post__text">${postText}</div>
        `
    }

    // se il post ha un immagine la inserisco
    if (postImg !== '') {
        innerPost.innerHTML += `
            <div class="post__image">
                <img src="${postImg}" alt="">
            </div>
        `
    }

    // inserisco il footer del post 
    innerPost.innerHTML += `
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="javascript:void(0)" data-postid="${i}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${i}" class="js-likes-counter">${likeNumber}</b> persone
                </div>
            </div> 
        </div>
    `

}

// seleziono tutti i pulsanti in un array
let likeBtn = document.querySelectorAll('.like-button');
console.log(likeBtn);

// seleziono i contatori dei like
let likeCounter = document.querySelectorAll('.js-likes-counter');
console.log(likeCounter);

// al click sul pulsante like aumento il contatore dei like 
for (let i = 0; i < socialPost.length; i++) {

    // al click aumento il valore del contatore e cambio la classe del pulsante
    
    // ne faccio una copia per confronto
    const baseLike = socialPost[i].likeNumber;
    likeBtn[i].addEventListener('click',
        function() {
            // se il contatore è uguale al valore originale del post aumenta, altrimenti diminuisce
            if (likeCounter[i].innerHTML == baseLike) {
                socialPost[i].likeNumber++
                likeCounter[i].innerHTML++
                console.log(socialPost[i].likeNumber);
            } else {
                socialPost[i].likeNumber--
                likeCounter[i].innerHTML--
                console.log(socialPost[i].likeNumber);
            }

            // al click aggiunge la classe, cliccando di nuovo la toglie
            likeBtn[i].classList.toggle('like-button--liked');
        }
    );
}