function bookShelf(input) {
    let shelves = new Map();
    
    for (let line of input) {
        if (line.includes(' -> ')) {
            let [id, genre] = line.split(' -> ');
            if (!shelves.has(id)) {
                shelves.set(id, {
                    id: id,
                    genre: genre,
                    books: []
                });
            }
        } else {
            let [title, rest] = line.split(': ');
            let [author, genre] = rest.split(', ');
            
            for (let [_, shelf] of shelves) {
                if (shelf.genre === genre) {
                    shelf.books.push({
                        title: title,
                        author: author
                    });
                    break;
                }
            }
        }
    }
    
    let shelvesArray = Array.from(shelves.values());
    
    shelvesArray.sort((a, b) => b.books.length - a.books.length);
    
    for (let shelf of shelvesArray) {
        shelf.books.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    let result = [];
    for (let shelf of shelvesArray) {
        if (shelf.books.length > 0) {
            result.push(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`);
            for (let book of shelf.books) {
                result.push(`--> ${book.title}: ${book.author}`);
            }
        }
    }
    
    return result.join('\n');
}

// console.log(bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']));

// console.log(bookShelf(['1 -> mystery', '2 -> sci-fi',
//     'Child of Silver: Bruce Rich, mystery',
//     'Lions and Rats: Gabe Roads, history',
//     'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi',
//     'Name of Earth: Jo Bell, sci-fi']
//     ));
