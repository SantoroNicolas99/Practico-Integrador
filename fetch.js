// Tendencias con la utilización de API 
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer b801b643a02ea6a26379208e34d3fa9f'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (objeto) {
        console.log(objeto.name)
    })
    .catch(function(error){
        console.error(error);
    });

//Funcion para renderizar las películas en tendencia
function tendencias(){
    fetch("https://api.themoviedb.org/3/trending/movie/{time_window}")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(peliculas){
        //manipulación del DOM
        const contenedor = document.getElementById("contenedor-peliculas");

        //bucle for-each
        peliculas.results.forEach(function(dato){
            //creacion de <article>
            const article = document.createElement("article");
            //estilo a article
            article.classList.add("tarjeta");
            //contenido dentro de la tarjeta article
            article.innerHTML = `
            <img src="${dato.poster_path}" alt="Imagen de la pelicula ${dato.title}" class="movie_img-size">
            <label>
            `;
        })
    })
    .catch()

}