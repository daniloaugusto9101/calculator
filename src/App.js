import { useState } from 'react';



function App() {

    const [resultato, setResultato] = useState();
    const [valor, setValor] = useState();

    const [digito, setDigito] = useState();

    function addDigito(event, label) {
        // let text = event.target.value;
        console.log(label);
    }

    return (
        <div>
            <h3>Calculador</h3>
            <span>{resultato}</span>
            <span>{valor}</span>
            <div>
                <button onClick={addDigito(label)} >1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>=</button>
            </div>

        </div>
    );
}


export default App;
