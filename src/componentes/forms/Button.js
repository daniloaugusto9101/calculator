import styles from './Button.module.css'

function Button({customClass, label, onClick}){
    return(
        <div className={`${styles.botao} ${styles[customClass]} `} onClick={onClick}>{label}</div>
    )
}

export default Button