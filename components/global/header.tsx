import styles from '@/styles/Header.module.css';

function Header(){
    return(
        <div className="layoutContainer">
            <header>
                <div className={styles.headerWrapper}>
                    <div className={styles.logoWrapper}>
                        <span className={styles.logo}>travel x labor</span>
                    </div>
                    <div className={styles.catsWrapper}>
                        Cats
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;