import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Songs } from '../../../Context';
import styles from './DetailSong.module.scss';

const cx = classNames.bind(styles);

function DetailSong() {
    const { song, DataSongs } = useContext(Songs);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('title-1')}>Now Playing</p>
            <p className={cx('name-song')}>{song.name}</p>
            <div className={cx('container')}>
                <div className={cx('avatar')}>
                    <img src={song.links.images[0].url} alt="Avatar" />
                </div>
                <div className={cx('name')}>
                    <img src={song.links.images[1].url} alt="Avatar" />
                    <span>{song.author}</span>
                </div>
            </div>
            ;
        </div>
    );
}

export default DetailSong;
