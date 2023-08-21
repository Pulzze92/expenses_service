import React from 'react';
import styles from './AppBar.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';

const AppBar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav className={styles.AppBar}>
            <div className={styles.logo}>
                <Button
                    color="primary"
                    type="text"
                    shape="rounded"
                    size="medium"
                    onClick={() => navigate('/')}
                >
                    Main
                </Button>
            </div>
            <div className={styles.menu}>
                <Button
                    color="primary"
                    type="text"
                    shape="rounded"
                    size="medium"
                    onClick={() => navigate('/profile')}
                >
                    Profile
                </Button>
                <Button
                    color="primary"
                    type="text"
                    shape="rounded"
                    size="medium"
                    onClick={() => navigate('/managment')}
                >
                    Managment
                </Button>
                <Button
                    color="primary"
                    type="text"
                    shape="rounded"
                    size="medium"
                    onClick={() => navigate('/statistic')}
                >
                    Statistic
                </Button>
                <Button
                    color="primary"
                    type="text"
                    shape="rounded"
                    size="medium"
                    onClick={() => navigate('/budget')}
                >
                    Budget
                </Button>
                <Button
                    color="primary"
                    type="text"
                    shape="rounded"
                    size="medium"
                >
                    Logout
                </Button>
            </div>
        </nav>
    );
};

export default AppBar;
