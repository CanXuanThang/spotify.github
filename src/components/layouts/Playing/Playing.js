import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import classNames from 'classnames/bind';
import styles from './Playing.module.scss';
import { useContext } from 'react';
import { Songs } from '../../../Context';

const cx = classNames.bind(styles);

function Playing() {
    const { song, handleSetSong } = useContext(Songs);

    const handleClickNext = () => {
        handleSetSong(song.id + 1);
    };

    const handleClickPre = () => {
        handleSetSong(song.id - 1);
    };

    return (
        <div>
            <AudioPlayer
                className={cx('audio')}
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
            />
        </div>
    );
}

export default Playing;
