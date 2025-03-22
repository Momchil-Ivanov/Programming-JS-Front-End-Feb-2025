function comments(input) {
    let users = new Set();
    let articles = new Set();
    let comments = {};

    for (let line of input) {
        if (line.startsWith('user ')) {
            users.add(line.substring(5));
        } else if (line.startsWith('article ')) {
            const article = line.substring(8);
            articles.add(article);
            comments[article] = [];
        } else {
            const match = line.match(/^(.+?) posts on (.+?): (.+?), (.+)$/);
            if (!match) continue;

            const [_, username, article, title, content] = match;

            if (!users.has(username) || !articles.has(article)) continue;

            comments[article].push({
                username,
                title,
                content
            });
        }
    }

    const sortedArticles = [...articles]
        .sort((a, b) => comments[b].length - comments[a].length);

    let result = [];
    for (let article of sortedArticles) {
        if (comments[article].length === 0) continue;

        result.push(`Comments on ${article}`);
        
        const sortedComments = comments[article]
            .sort((a, b) => a.username.localeCompare(b.username));

        for (let comment of sortedComments) {
            result.push(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
        }
    }

    return result.join('\n');
}

// console.log(comments(
//     ['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']
// ));

// console.log(comments(
//     ['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']
// ));
