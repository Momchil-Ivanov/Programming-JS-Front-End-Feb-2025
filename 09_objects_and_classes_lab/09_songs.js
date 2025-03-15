function filterSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const n = Number(input[0]);
    const songs = [];
    
    for (let i = 1; i <= n; i++) {
        const [typeList, name, time] = input[i].split('_');
        songs.push(new Song(typeList, name, time));
    }
    
    const filterType = input[n + 1];
    
    songs.forEach(song => {
        if (filterType === 'all' || song.typeList === filterType) {
            console.log(song.name);
        }
    });
}

// filterSongs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite'])

// filterSongs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']);

// filterSongs([2,
//     'like_Replay_3:48',
//     'ban_Photography_3:13',
//     'all']);
