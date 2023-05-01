import { createRandomSong } from "../data";

const SongPlaylist = () => {
    // To do:
    // Get list of songs
    const songPlaylist: any = [];

    const handleSongAdd = (song: any) => {
        // To do
        // Add song to list of songs
    }

    const handleSongRemove = (song: any) => {
        // To do
        // Remove song from list of songs

    }

    const renderedSongs = songPlaylist.map((song: any) => {
        return (
            <li key={song}>
                {song}
                <button onClick={() => handleSongRemove(song)} className="button is-danger">
                    X
                </button>
            </li>
        )
    })

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Song Playlist</h3>
                <div className="buttons">
                    <button className="button is-link" onClick={() => handleSongAdd(createRandomSong())}>+ Add Song to Playlist</button>
                </div>
            </div>

            <ul>{renderedSongs}</ul>
        </div>
    )
}

export default SongPlaylist;