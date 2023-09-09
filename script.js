let movie1= {
    name:"rush" , img:"https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
}
let movie2= {
    name:"rush 21", img:"https://pbs.twimg.com/media/F1Y0SKjXwAAS9gs?format=webp&name=medium"
}
let movie3={
    name:"cars", img:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1fwkhcm_90dc1edd.jpeg?region=0%2C0%2C300%2C450"
}
let movies=[];
movies.push(movie1,movie2,movie3)


let movieContainer = document.getElementById("container");

movies.forEach(element => {
    movieContainer.innerHTML += `
    <div class="movie">
    <img src="${element.img}" alt="movie picture" />
    <h2>${element.name}</h2>
    </div>
   `;  
});