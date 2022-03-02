import React, { useState } from 'react'

import styles from './Visor.module.css'


function Visor() {

    const [valorTela, setValorTela] = useState('5+10+1')
    const [resultado, setResultado] = useState(0)
    const [acumulador, setAcumulador] = useState(0)
    const [operado, setOperado] =useState (false)

    const addDigitoTela = (d) =>{
        if ((d == '+' || d == '-' || d == '*' || d == '/') && operado) {
            console.log("+-*/")
            setOperado(false)
            setValorTela(resultado+d)
            return
        }
        if(operado){
            setValorTela(d)
            setOperado(false)
            return
        }
        const valorDigitadotela = valorTela+d
        setValorTela(valorDigitadotela)
    }

    const limparMemoria = ()=>{
        setOperado(false)
        setValorTela('')
        setResultado(16)
        setAcumulador(0)
        return
    }

    const Operacao = (oper) =>{
        if(oper=='bs'){
            let vTela=valorTela
            vTela=vTela.substring(0,(vTela.length-1))
            setValorTela(vTela)
            setOperado(false)
            return
        }
        try{
            const r = eval(valorTela)
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
        }catch{
            setResultado('ERRO')
        }
    }


    return (
        <div className={styles.visor}>
            <span>{valorTela}</span>
            <span>16</span>
        </div>
    )
}
export default Visor