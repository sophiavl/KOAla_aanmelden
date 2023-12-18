import styles from '../styles/koala.module.scss';

function Koala(props){
    return(
        <button className={styles.koala} onClick={props.onClick}>
            <p className={styles.title}>{props.title}</p>
        </button>
    )
}

export default Koala;