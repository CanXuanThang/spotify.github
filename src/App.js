import { useState } from 'react';
import DetailSong from './components/layouts/DetailSong/DetailSong';
import ListSong from './components/layouts/ListSong/ListSong';
import Navbar from './components/layouts/Navbar/Navbar';
import Playing from './components/layouts/Playing/Playing';
import { Songs } from './Context';
import DataSongs from './data/songs.json';

function App() {
    const [song, setSong] = useState(DataSongs[0]);

    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) setSong(DataSongs[0]);
        else setSong(song);
    };

    return (
        <div>
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <div className="App">
                    <Navbar />
                </div>
                <div style={{ display: 'flex' }}>
                    <DetailSong />
                    <ListSong />
                </div>
                <Playing />
            </Songs.Provider>
        </div>
    );
}

export default App;
