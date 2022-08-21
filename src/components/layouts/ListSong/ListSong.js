import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clasnames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Songs } from '../../../Context';
import styles from './ListSong.module.scss';

const cx = clasnames.bind(styles);

function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    const handleSong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    };
    useEffect(() => {
        setIdSong(song.id);
    }, [song]);

    return (
        <div className={cx('wrapper')}>
            <table cellSpacing={0}>
                <thead height="48px">
                    <tr className={cx('menu')}>
                        <th width="10%">#</th>
                        <th width="60%">Title</th>
                        <th width="20%">Author</th>
                        <th width="10%">
                            <FontAwesomeIcon icon={faDownload} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            className={cx('list-song', `${idSong === song.id && 'active'}`)}
                            onClick={() => handleSong(song.id)}
                        >
                            <td>{index + 1}</td>
                            <td>{song.name}</td>
                            <td>{song.author}</td>
                            <td>
                                <a href={song.url}>
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;
