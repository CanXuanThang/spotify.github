import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('logo')}>
                <FontAwesomeIcon icon={faSpotify} />
                <span>Spotify</span>
            </span>
        </div>
    );
}

export default Navbar;
