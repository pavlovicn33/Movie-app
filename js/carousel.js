window.onload = () => {
    
    const popularMovies = [{"_id":1,"name":"The Shawshank Redemption","year":"1994","rating":"9.3","description":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","duration":"142","director":"Frank Darabont","genre":"drama","image":"911USrdQtPL._AC_SL1500_2cc46831-caf7-4de2-93b7-2583561d1798.jpg"},{"_id":2,"name":"The Godfather","year":"1972","rating":"9.2","description":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.","duration":"175","director":"Francis Ford Coppola","genre":"drama","image":"download.jpg"},{"_id":3,"name":"The Dark Knight","year":"2008","rating":"9.0","description":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice. ","duration":"152","director":"Christopher Nolan","genre":"action", "image":"download (1).jpg"},{"_id":4,"name":"Pulp Fiction","year":"1994","rating":"8.9","description":"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","duration":"154","director":"Quentin Tarantino","genre":"drama", "image":"fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg"},{"_id":5,"name":"Schindler's List","year":"1993","rating":"8.9","description":"In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis. ","duration":"185","director":"Steven Spielberg","genre":"drama", "image":"MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},{"_id":6,"name":"12 Angry Men","year":"1957","rating":"8.9","description":"A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court. ","duration":"96","director":"Sidney Lumet","genre":"drama", "image":"e6520b78339627.5ca24af435882.png"},{"_id":7,"name":"Interstellar","year":"2014","rating":"8.6","description":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.","duration":"169","director":"Christopher Nolan","genre":"sci-fi", "image":"interstellar-ice-walk-i23290.jpg"},{"_id":8,"name":"Fight Club","year":"1999","rating":"8.9","description":"An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...","duration":"145","director":"David Fincher","genre":"drama", "image":"14290080_max.jpg"},{"_id":9,"name":"Inception","year":"2010","rating":"8.8","description":"A thief who steals corporate secrets through use of the dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.","duration":"148","director":"Christopher Nolan","genre":"action", "image":"MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"},{"_id":10,"name":"Up","year":"2009","rating":"8.3","description":"Seventy-eight year old Carl Fredricksen travels to Paradise Falls in his home equipped with balloons, inadvertently taking a young stowaway.","duration":"96","director":"Pete Docter","genre":"comedy", "image":"81RG2NB+CzL._AC_SY679_.jpg"},{"_id":11,"name":"The Pianist","year":"2002","rating":"7.9","description":"A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.","duration":"150","director":"Roman Polanski","genre":"drama", "image":"MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"},{"_id":12,"name":"Dogville","year":"2004","rating":"8.1","description":"A woman on the run from the mob is reluctantly accepted in a small Colorado town. In exchange, she agrees to work for them. As a search visits town, she finds out that their support has a price. Yet her dangerous secret is never far away... ","duration":"178","director":"Lars von Trier","genre":"drama", "image":"MV5BMTkwNTg2MTI1NF5BMl5BanBnXkFtZTcwMDM1MzUyMQ@@._V1_.jpg"},{"_id":13,"name":"Silent Hill","year":"2006","rating":"6.6","description":"A woman goes in search for her daughter within the confines of a strange, desolate town called Silent Hill.","duration":"125","director":"Christophe Gans","genre":"horror", "image":"28cb46dd2f4d2bc8b69a882848630634.jpg"}] 


    var span = document.getElementsByTagName("span")
    var movie = document.getElementsByClassName("movie")
    var I = 0
    span[1].onclick = () => {
        I++;
        for(var i of movie){
            if(I == 0) {i.style.left = "0px";}
            if(I == 1) {i.style.left = "-740px";}
            if(I == 2) {i.style.left = "-1280px";}
            if(I == 3) {i.style.left = "-1820px";}
            if(I == 4) {i.style.left = "-2460px";}
         
     
            if(I > 4) {I = 4;}
        }
    }

    span[0].onclick = () => {
        I--;
        for(var i of movie){
            if(I == 0) {i.style.left = "0px";}
            if(I == 1) {i.style.left = "-740px";}
            if(I == 2) {i.style.left = "-1280px";}
            if(I == 3) {i.style.left = "-1820px";}
            if(I == 4) {i.style.left = "-2460px";}
            if(I < 0) {I = 0;}
        }
    }

   function refreshMovies() {
       let movieDiv = document.getElementById("films")
       let out = ""

       for (let i = 0; i < popularMovies.length; i++) {
          
           out += `<img class="movie" width="100%" height="100%" src="/img/${popularMovies[i].image}">`
       }
    
       movieDiv.innerHTML = out
   }

   refreshMovies()
   
   let dropdown = document.getElementById("dropdown")
   
   dropdown.addEventListener("click",() => {
     let sidebar = document.getElementById("sidebar")
     sidebar.style.display = "block"
   })
   


}
