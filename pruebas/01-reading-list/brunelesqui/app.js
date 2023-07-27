const json_library = `
{
  "library": [
      {
          "book": {
              "title": "El Señor de los Anillos",
              "pages": 1200,
              "genre": "Fantasía",
              "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
              "synopsis": "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
              "year": 1954,
              "ISBN": "978-0618640157",
              "author": {
                  "name": "J.R.R. Tolkien",
                  "otherBooks": [
                      "El Hobbit",
                      "El Silmarillion"
                  ]
              }
          }
      },
      {
        "book": {
            "title": "Juego de Tronos",
            "pages": 694,
            "genre": "Fantasía",
            "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
            "synopsis": "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
            "year": 1996,
            "ISBN": "978-0553103540",
            "author": {
                "name": "George R. R. Martin",
                "otherBooks": [
                    "Choque de Reyes",
                    "Tormenta de Espadas",
                    "Festín de Cuervos"
                ]
            }
        }
    },
    {
      "book": {
          "title": "Harry Potter y la piedra filosofal",
          "pages": 223,
          "genre": "Fantasía",
          "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
          "synopsis": "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
          "year": 1997,
          "ISBN": "978-0747532699",
          "author": {
              "name": "J.K. Rowling",
              "otherBooks": [
                  "Harry Potter y la cámara secreta",
                  "Harry Potter y el prisionero de Azkaban",
                  "Harry Potter y el cáliz de fuego"
              ]
          }
      }
  },
  {
    "book": {
        "title": "1984",
        "pages": 328,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
        "synopsis": "Una inquietante visión de un futuro distópico y totalitario.",
        "year": 1949,
        "ISBN": "978-0451524935",
        "author": {
            "name": "George Orwell",
            "otherBooks": [
                "Rebelión en la granja"
            ]
        }
    }
},
  {
    "book": {
        "title": "Apocalipsis Zombie",
        "pages": 444,
        "genre": "Zombies",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg",
        "synopsis": "Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo",
        "year": 2001,
        "ISBN": "978-4444532611",
        "author": {
            "name": "Manel Loreiro",
            "otherBooks": []
        }
    }
},
{
  "book": {
      "title": "Dune",
      "pages": 412,
      "genre": "Ciencia ficción",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
      "synopsis": "En el inhóspito planeta desértico de Arrakis, una gran intriga política y familiar se desarrolla.",
      "year": 1965,
      "ISBN": "978-0441172719",
      "author": {
          "name": "Frank Herbert",
          "otherBooks": [
              "El mesías de Dune",
              "Hijos de Dune"
          ]
      }
  }
},
{
  "book": {
      "title": "La Guía del Autoestopista Galáctico",
      "pages": 216,
      "genre": "Ciencia ficción",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg",
      "synopsis": "Un viaje absurdo y cómico por el espacio, con toallas.",
      "year": 1979,
      "ISBN": "978-0345391803",
      "author": {
          "name": "Douglas Adams",
          "otherBooks": [
              "El restaurante del fin del mundo",
              "La vida, el universo y todo lo demás"
          ]
      }
  }
},
{
  "book": {
      "title": "Neuromante",
      "pages": 271,
      "genre": "Ciencia ficción",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
      "synopsis": "Una visión profética de la ciber-realidad y la inteligencia artificial.",
      "year": 1984,
      "ISBN": "978-0441569595",
      "author": {
          "name": "William Gibson",
          "otherBooks": [
              "Conde Cero",
              "Mona Lisa Acelerada"
          ]
      }
  }
},
{
  "book": {
      "title": "Fahrenheit 451",
      "pages": 249,
      "genre": "Ciencia ficción",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
      "synopsis": "Una sociedad futura donde los libros están prohibidos y 'bomberos' queman cualquier libro que encuentren.",
      "year": 1953,
      "ISBN": "978-1451673319",
      "author": {
          "name": "Ray Bradbury",
          "otherBooks": [
              "Crónicas marcianas",
              "El hombre ilustrado"
          ]
      }
  }
},
  {
    "book": {
        "title": "El resplandor",
        "pages": 688,
        "genre": "Terror",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg",
        "synopsis": "Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.",
        "year": 1977,
        "ISBN": "978-0307743657",
        "author": {
            "name": "Stephen King",
            "otherBooks": [
                "Carrie",
                "It"
            ]
        }
    }
},
{
    "book": {
        "title": "Drácula",
        "pages": 418,
        "genre": "Terror",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
        "synopsis": "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
        "year": 1897,
        "ISBN": "978-0486411095",
        "author": {
            "name": "Bram Stoker",
            "otherBooks": [
                "La joya de las siete estrellas",
                "La madriguera del gusano blanco"
            ]
        }
    }
},
{
    "book": {
        "title": "Frankenstein",
        "pages": 280,
        "genre": "Terror",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg",
        "synopsis": "Un científico obsesionado crea una criatura viva a partir de partes de cuerpos robadas, con consecuencias desastrosas.",
        "year": 1818,
        "ISBN": "978-0486282114",
        "author": {
            "name": "Mary Shelley",
            "otherBooks": [
                "El último hombre",
                "Valperga"
            ]
        }
    }
},
{
  "book": {
      "title": "La llamada de Cthulhu",
      "pages": 43,
      "genre": "Terror",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
      "synopsis": "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
      "year": 1928,
      "ISBN": "978-1542461690",
      "author": {
          "name": "H.P. Lovecraft",
          "otherBooks": [
              "El horror de Dunwich",
              "En las montañas de la locura"
          ]
      }
    }
  }
]
}`;

const obj_library = JSON.parse(json_library); 

let obj_book_read = JSON.parse(localStorage.getItem("count-read-list"));

const genres_tag = document.getElementById('genres');
const range = document.getElementById('range_pages');
const content_book_list_tag = document.getElementById('content-book-list');
const content_read_list_tag = document.getElementById('content-read-list');

/* Carga los géneros en etiqueta Select.
   genres_list contiene todos los generos que se agregan
   para que no se repitan.
*/
function load_genres() {
  let genres_list = []; 
  for (let i = 0; i < obj_library.library.length; i++) {
    if(genres_list.find(e => e == obj_library.library[i].book.genre) == undefined) {
      genres_tag.innerHTML += `
        <option value="${obj_library.library[i].book.genre}">${obj_library.library[i].book.genre}
        </option>`;
      genres_list.push(obj_library.library[i].book.genre);
    }
  }
}

/* Carga los libros desde obj_library según el género y rango seleccionado.
*/
function load_book_list (select_genre_, select_range_) {
  content_book_list_tag.innerHTML = "";
  
  for (let i = 0; i < obj_library.library.length; i++) {
    if(select_genre_ == obj_library.library[i].book.genre 
        || select_genre_ == "Todas") {
      if(obj_library.library[i].book.pages <= select_range_) 
        add_figure (content_book_list_tag, i, "sel_book");
    }
  }  
}

/* Agrega un libro.
*/
function add_figure (tag_, value_, fnc_) {
  tag_.innerHTML += `
    <figure id="${value_}" onclick="${fnc_}(this)">
      <img src="${obj_library.library[value_].book.cover}" alt="Portada ${obj_library.library[value_].book.title}">
      <figcaption>${obj_library.library[value_].book.title}</figcaption>
    </figure>`;
}

/* Aplicar filtros.
*/
function filter() { 
  const selected = document.getElementById('genres');
  load_book_list(
    selected.options[selected.selectedIndex].text, 
    range.value
  );
}

/* Seleciona un libro para lectura, siempre que no exista en la sección lectura.
*/
function sel_book(book_) {
  // Si id existe entonces no lo agrega
  if(exists(book_.id))
    return;

  add_figure(content_read_list_tag, book_.id, "sel_read");

  totals_upd(content_read_list_tag.children.length);

  obj_book_read.push(book_.id);

  local_storage_save();
}

function exists (id_) {
  for(let i=0; i < content_read_list_tag.children.length; i++) {
    if(id_ == content_read_list_tag.children[i].id)
      return true;
  }
  return false;
}

function sel_read(book_) { 
  for(let i=0; i < content_read_list_tag.children.length; i++) { 
    if(book_.id == content_read_list_tag.children[i].id) { 
      content_read_list_tag.children[i].remove();

      totals_upd(content_read_list_tag.children.length);

      obj_book_read = obj_book_read.filter(index => index != book_.id);

      local_storage_save();

      return;
    }
  }
}

function totals_upd (len_) {
  document.getElementById('count-read-list').innerHTML = 
    len_;

  document.getElementById('count-book-list').innerHTML = 
    obj_library.library.length - len_; 

  status_upd(len_);
}

function status_upd (len_) {
  if (len_ > 0)
    document.getElementById('status').firstElementChild.innerHTML = 
      "Con libros en la lista de lectura";
  else
    document.getElementById('status').firstElementChild.innerHTML = 
      "Sin libros en la lista de lectura";
}

function local_storage_save () {
  localStorage.setItem("count-read-list", JSON.stringify(obj_book_read));  
}

/* Carga de lisbros guardados.
*/
function load_storage_book () {
  const content_read_list_tag = document.getElementById('content-read-list');
  content_read_list_tag.innerHTML = "";

  for(let i=0; i < obj_book_read.length; i++) { 
    add_figure(content_read_list_tag, obj_book_read[i], "sel_read");

    totals_upd(content_read_list_tag.children.length);
  }
}

/* Inicio
   Establecer los valores de rango de páginas.
*/
range.setAttribute("min", Math.min(...obj_library.library.map(i => i.book.pages))); 
range.setAttribute("max", Math.max(...obj_library.library.map(i => i.book.pages)));
range.value = Math.max(...obj_library.library.map(i => i.book.pages));

/* Sincronización de pestañas.
*/
window.addEventListener("storage", event => {
  if (event.key === "count-read-list") { 
    obj_book_read = JSON.parse(event.newValue);
    load_storage_book();
  }
});

/* Libros guardados.
*/
if(obj_book_read == null) 
  obj_book_read = [];

/* Carga de controles y libros en la lista.
*/
load_genres();
load_book_list("Todas", range.value);
load_storage_book();