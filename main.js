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

let postCont = document.querySelector('.post');

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