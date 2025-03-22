function manageMovies(commands) {
    const movies = [];

    commands.forEach(command => {
        const addMovieMatch = command.match(/^addMovie (.+)$/);
        const directedByMatch = command.match(/^(.*) directedBy (.+)$/);
        const onDateMatch = command.match(/^(.*) onDate (.+)$/);

        if (addMovieMatch) {
            const movieName = addMovieMatch[1];
            movies.push({ name: movieName, director: null, date: null, order: [] });
        } else if (directedByMatch) {
            const movieName = directedByMatch[1];
            const director = directedByMatch[2];
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
                movie.order.push('director');
            }
        } else if (onDateMatch) {
            const movieName = onDateMatch[1];
            const date = onDateMatch[2];
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
                movie.order.push('date');
            }
        }
    });

    const completeMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    
    completeMovies.forEach(movie => {
        const output = {};
        output.name = movie.name;

        if (movie.order[0] === 'director') {
            output.director = movie.director;
            output.date = movie.date;
        } else {
            output.date = movie.date;
            output.director = movie.director;
        }

        console.log(JSON.stringify(output));
    });
}

// manageMovies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);

// manageMovies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);