const express = require('express')
const app = express()

let books = [{
        "id": 1,
        "title": "L'isola del tesoro",
        "author": "Robert Louis Stevenson ",
        "categoria": [
            "romanzo", "avventura", "ragazzi"
        ],
        "pagine": 80,
        "anno": "1853",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at consequat orci. Nam at ipsum ultrices augue molestie scelerisque non quis ex. Aenean at tristique enim, ut maximus diam. Curabitur scelerisque ut mauris ut porta. Nulla porttitor convallis facilisis. Praesent aliquet sapien nibh, id mattis metus iaculis non. Vivamus dictum a eros in porttitor. Cras sed ipsum maximus, auctor mauris id, eleifend eros. Nam a ex ac nunc placerat ullamcorper...",
        "stars": 4,
        "price": 12.35,
        "isbn": "985-7458-125-12",
        "images": [
            "assets/img/copertine/isoladeltesoro.jpg"
        ],
        "email": "info@ilquadrifoglio.com"
    },
    {
        "id": 2,
        "title": "La freccia nera",
        "author": "Robert Louis Stevenson ",
        "categoria": [
            "romanzo", "avventura", "ragazzi"
        ],
        "pagine": 110,
        "anno": "1858",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at consequat orci. Nam at ipsum ultrices augue molestie scelerisque non quis ex. Aenean at tristique enim, ut maximus diam. Curabitur scelerisque ut mauris ut porta. Nulla porttitor convallis facilisis. Praesent aliquet sapien nibh, id mattis metus iaculis non. Vivamus dictum a eros in porttitor. Cras sed ipsum maximus, auctor mauris id, eleifend eros. Nam a ex ac nunc placerat ullamcorper...",
        "stars": 3,
        "price": 9.50,
        "isbn": "565-5214-547-47",
        "images": [
            "assets/img/copertine/lafreccianera.jpg"
        ],
        "email": "info@ilquadrifoglio.com"
    },
    {
        "id": 3,
        "title": "Harry Potter e la pietra filosofale",
        "author": "J. K. Rowling ",
        "categoria": [
            "romanzo", "avventura", "ragazzi", "fantasy"
        ],
        "pagine": 150,
        "anno": "1998",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at consequat orci. Nam at ipsum ultrices augue molestie scelerisque non quis ex. Aenean at tristique enim, ut maximus diam. Curabitur scelerisque ut mauris ut porta. Nulla porttitor convallis facilisis. Praesent aliquet sapien nibh, id mattis metus iaculis non. Vivamus dictum a eros in porttitor. Cras sed ipsum maximus, auctor mauris id, eleifend eros. Nam a ex ac nunc placerat ullamcorper...",
        "stars": 4,
        "price": 10.99,
        "isbn": "258-4587-587-16",
        "images": [
            "assets/img/copertine/harrypotterlapietrafilosofale.jpg"
        ],
        "email": "info@ilquadrifoglio.com"
    },
    {
        "id": 4,
        "title": "Il maialino di Natale",
        "author": " J. K. Rowling  ",
        "categoria": [
            "romanzo", "fantasy", "ragazzi"
        ],
        "anno": "2021",
        "pagine": 220,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at consequat orci. Nam at ipsum ultrices augue molestie scelerisque non quis ex. Aenean at tristique enim, ut maximus diam. Curabitur scelerisque ut mauris ut porta. Nulla porttitor convallis facilisis. Praesent aliquet sapien nibh, id mattis metus iaculis non. Vivamus dictum a eros in porttitor. Cras sed ipsum maximus, auctor mauris id, eleifend eros. Nam a ex ac nunc placerat ullamcorper...",
        "stars": 5,
        "price": 17.96,
        "isbn": "9788831010757",
        "images": [
            "assets/img/copertine/ilmaialinodinatale.jpg"
        ],
        "email": "info@ilquadrifoglio.com"
    },
    {
        "id": 5,
        "title": "Sandokan, la tigre della Malesia",
        "author": "Emilio salgari ",
        "categoria": [
            "romanzo", "avventura", "ragazzi", "storico"
        ],
        "pagine": 102,
        "anno": "1893",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at consequat orci. Nam at ipsum ultrices augue molestie scelerisque non quis ex. Aenean at tristique enim, ut maximus diam. Curabitur scelerisque ut mauris ut porta. Nulla porttitor convallis facilisis. Praesent aliquet sapien nibh, id mattis metus iaculis non. Vivamus dictum a eros in porttitor. Cras sed ipsum maximus, auctor mauris id, eleifend eros. Nam a ex ac nunc placerat ullamcorper...",
        "stars": 3,
        "price": 7.99,
        "isbn": "9788847730243",
        "images": [
            "assets/img/copertine/Sandokan ,la tigre della malesia.jpg"
        ],
        "email": "info@ilquadrifoglio.com"
    },
    {
        "id": 6,
        "title": "Il libro della jungla",
        "author": "Rudyard Kipling  ",
        "categoria": [
            "romanzo", "avventura", "ragazzi", "geografico"
        ],
        "pagine": 112,
        "anno": "1886",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at consequat orci. Nam at ipsum ultrices augue molestie scelerisque non quis ex. Aenean at tristique enim, ut maximus diam. Curabitur scelerisque ut mauris ut porta. Nulla porttitor convallis facilisis. Praesent aliquet sapien nibh, id mattis metus iaculis non. Vivamus dictum a eros in porttitor. Cras sed ipsum maximus, auctor mauris id, eleifend eros. Nam a ex ac nunc placerat ullamcorper...",
        "stars": 4,
        "price": 8.99,
        "isbn": "5000000465594",
        "images": [
            "assets/img/copertine/illibrodellajungla.jpg"
        ],
        "email": "info@ilquadrifoglio.com"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Ciao Lucio</h1>')
})

app.get('/api/books', (req, res) => {
    res.json(books)
})

const PORT = 3002
app.listen(PORT)
console.log(`Server running on port ${PORT}`)