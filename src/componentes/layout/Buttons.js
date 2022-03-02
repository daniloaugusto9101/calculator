import styles from './Buttons.module.css'
import Button from '../forms/Button'

function Buttons(){
    return(
        <div className={styles.buttons}>
            <Button customClass="botao__sinais" label="C"/>
            <Button customClass="botao__sinais" label="+"/>
            <Button customClass="botao__sinais" label="%"/>
            <Button customClass="botao__sinais" label="/"/>
            <Button label="7"/>
            <Button  label="8"/>
            <Button  label="9"/>
            <Button customClass="botao__sinais" label="x"/>
            <Button  label="4"/>
            <Button  label="5"/>
            <Button  label="6"/>
            <Button customClass="botao__sinais" label="-"/>
            <Button  label="1"/>
            <Button  label="2"/>
            <Button  label="3"/>
            <Button customClass="botao__sinais" label="+"/>
            <Button  label="0"/>
            <Button  label="."/>
            <Button  label="C"/>
            <Button customClass="botao__sinais" label="="/>
        </div>
    )
}

export default Buttons