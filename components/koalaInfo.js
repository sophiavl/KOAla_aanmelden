import styles from '../styles/koalaInfo.module.scss';

function KoalaInfo(props){
    return(
        <section className={styles.koalaInfo}>
            <h1 className={styles.name}>{props.name}</h1>
            <p className={styles.description}>{props.description}</p>
            <button className={styles.aanmelden} onClick={props.onAanmeldClick}>Aanmelden</button>
        </section>
    )
}

export default KoalaInfo;