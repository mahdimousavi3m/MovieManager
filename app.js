let movies = [] ; 

const addMovie = (id , title , director , year , genre , rating) => {
    for(let i = 0 ; i < movies.length ; i++){
        if(id === movies[i].id){
            return false; 
        }     
   }

      let movie = {
            id , 
            title , 
            director ,
            year, 
            genre , 
            rating
        }


        movies.push(movie);
    
        return true ; 
}

const editMovie = (id , newTtile , newDirector , newYear , nawGenre , newRating) => {
    for(let i = 0 ; i < movies.length ; i++){
        if(id === movies[i].id){
            movies[i].title = newTile ; 
            movies[i].director = newDirector ; 
            movies[i].year = newYear ; 
            movies[i].genre = newGenre ; 
            movies[i].rating = newRating ; 

            return true; 
        }
    }
    return false ; 
}

const rateMovie = (id , newRating) => {
    for(let i = 0 ; i < movies.length ; i++){
        if(id === movies[i].id){
            movies[i].rating = newRating; 

            return true; 
        }
    }

    return false; 
}

const deleteMovie = (id) => {
        for(let i = 0 ; i < movies.length ; i++){
            if(id === movies[i].id){
                movies.splice(i,1);
                return true;
            }
        }

        return false; 
}

const searchMovieById = (id) => {
    for(let i = 0 ; i < movies.length ; i++){
        if(id === movies[i].id){
            return movies[i]
        }
    }
    
    return null; 

}

const searchMovieByTitle = (title) => {
    for(let i = 0 ; i < movies.length ;i++){
        if(title === movies[i].title){
            return movies[i]; 
        }
    }

    return null; 
}

const searchMoviesByGenre = (genre) => {
    let result = []; 
    for(let i = 0 ; i < movies.length ; i++){
        if(genre === movies[i].genre){
            result.push(movies[i]); 
        }
    }

    return result ; 
}


const searchMovieByTitleKeyword = (title) => {
     let result = []; 
     for (let i = 0 ; i < movies.length ; i++){
        if(movies[i].title.includes(title)){
            result.push(movies[i]); 
        }
     }

     return result; 
}


const averageRating = () => {

    if(movies.length === 0){
        return null ; 
    }

    let sumRating = 0 ; 
     
    for(let i = 0 ; i < movies.length ; i++){
        sumRating += movies[i].rating; 
    }

    return sumRating / movies.length; 
} 

const highestRatedMovie = () => {
    if(movies.length === 0){
        return null;
    }

    let bestMovie = movies[0]; 

    for(let i = 0 ; i < movies.length ; i++){
       if(bestMovie.rating < movies[i].rating){
           bestMovie = movies[i]; 
       }
    }

    return bestMovie; 
}

const lowestRatingMovie = () => {
    if(movies.length === 0){
        return null ; 
    }

    let lowestMovie = movies[0]; 
    for(let i = 0 ; i < movies.length ; i++){
        if(movies[i].rating < lowestMovie.rating) {

            lowestMovie = movies[i]; 
            
        } 
        
    }

    return lowestMovie; 
}



// bouid by sort method
const getMoviesSortedByRating = () => {
    if(movies.length === 0){
        return null ; 
    }

    let sortResult = [] ; 
    let tempMovie = [...movies];
    while(tempMovie.length !== 0 ){
        let bestMovie = tempMovie[0]; 
        let bestIndex = 0 ; 
        for (let i = 0 ; i < tempMovie.length ;i++){
            if(bestMovie.rating < tempMovie[i].rating){
                bestMovie = tempMovie[i]; 
                bestIndex = i ; 
            }
        }

        sortResult.push(bestMovie); 

        tempMovie.splice(bestIndex , 1); 
    }
    

    return sortResult;
    
}

// sort version 
const getMoviesSortedByRating = () => {
     if(movies.length === 0){
        return null; 
     }

     return [...movies].sort((a , b) => b.rating - a.rating);
}

const getMoviesByDirector = (director) => {
    let result = []; 
    for(let i = 0 ; i < movies.length ; i++){

        if(director === movies[i].director){

            result.push(movies[i]);

        }
    }


    return result; 

}

const getMoviesByYearRange= (startYear , endYear) => {
    let result = []; 
    
    for(let i = 0 ; i < movies.length ; i++){

        if(startYear <= movies[i].year && movies[i].year <= endYear){
            result.push(movies[i]); 
        }

    }

    return result; 
}

const getMoviesAboveRating = (rating) => {
    let result = []; 

    for(let i = 0 ; i < movies.length ; i++){
        if(movies[i].rating >= rating){
            result.push(movies[i]); 
        }
    }

    return result; 
}


const  removeMoviesBelowRating = (rating) => {
     for(let i = movies.length - 1 ; i >=0 ; i--){
        if(movies[i].rateMovie < rating){
            movies.splice(i , 1);
        }
     }
}


const getGenreStatistics = () => {
    let statistics = {} ; 
    for(let i = 0 ; i < movies.length ; i++){
      if(statistics[movies[i].genre] === undefined){
        statistics[movies[i].genre] = 1 ; 
      }
      else{
        statistics[movies[i].genre]++ ; 
      }

    }
    
    return statistics; 
}


const removeMoviesByGenre = (genre) => {
    for(let i = movies.length - 1 ; i >= 0 ; i--){

        if(genre === movies[i].genre){
            movies.splice(i , 1);
        }
    }
}


const getMoviesStatistics = () => {
    if(movies.length === 0){
        return null; 
    }

    let statistics = {
        totalMovies : movies.length,
        averageRating : averageRating(),
        highestRated : highestRatedMovie(),
        lowestRated : lowestRatingMovie(),

    }

    return statistics; 
}

