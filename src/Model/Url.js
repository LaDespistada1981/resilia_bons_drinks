import React, {useState, useEffect} from 'react'

const Url = (props) => {
    const [dados, setDados] = useState('Enviar')

    function handleClick(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => {response.json()})
            .then(json => setDados(json.drinks[0]))
            console.log(json.drinks[0])
    };

    useEffect(()=> {
        handleClick()
    }, [])

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default Url
