function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Example function calls
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 10)); // Including number of tracks
console.log(make_album("Artist 3", "Album 3", 12)); // Another example with tracks
