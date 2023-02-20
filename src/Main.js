import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Titulo = (props) => {

    useEffect(() => {
        // componentDidMount

        console.log("Component Titulo cargado...");

        return () => {
            // componentWillUnmount
            console.log("Component Titulo Eliminado...");

            props.setName("Jane Doe");
        }

    }, [])

    return (
        <>
        <h1>Hola Mundo desde Una Funcion</h1>
        {/* <input type="text" onChange={(e) => props.setName(e.target.value)}/> */}
        </>
    )
}

class SubTitulo extends React.Component {

    componentDidMount(){
        console.log("Component Subtitulo cargado...");
    }

    componentWillUnmount(){
        console.log("Component Subtitulo va a ser eliminado...");
    }

    render(){
        return (
            <h1>Hola Mundo desde una Clase</h1>
        )
    }
}

const Main = () => {
    // useState 
    const [name, setName] = useState("John Doe") // const [valor, function] = useState(initialValue);

    //let nombres = ["Hugo", "Paco", "Luis"];
    const [nombres, setNombres] = useState(["Hugo", "Paco", "Luis"])

    const [person, setPerson] = useState({
        name: 'John',
        lastname: 'Doe'
    })

    const [show, setShow] = useState(false);

    const saludo = () => {
        alert("Hola Mundo");
    }

    const evitarIrAGoogle = (evento) => {
        evento.preventDefault();

        setShow(true);
    }

    useEffect(() => {
        // componentDidMount

        console.log("Component Main cargado...");

        return () => {
            // componentWillUnmount
            console.log("Component Main Eliminado...");

            
        }

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className='list-group'>
                        {
                            nombres.map((nombre, index) => {
                                return (
                                    <li key={index} className="list-group-item">{nombre}</li>
                                )
                            })
                        }
                    </ul>
                    <h3>{name}</h3>
                    <h3>{person.name} {person.lastname}</h3>

                    <div className="input-group">
                        <input type={show ? "text" : "password"} className="form-control" placeholder='*******' />
                        <button className={'btn btn-' + (show ? "danger":"primary") }onClick={() => setShow(!show)}>
                            {
                                show ? <FaEyeSlash /> : <FaEye />
                            }
                        </button>
                    </div>

                    <h3>
                        {
                            show ? "Ocultar" : "Mostrar"
                        }
                    </h3>
                    <button onClick={() => setShow(!show)}>
                        {
                            show ? "Ocultar" : "Mostrar"
                        }
                    </button>

                    <button onClick={(evento) => {
                        //alert("Evento Click")
                        setName("Jane Doe");
                    }} className="btn btn-info">Click</button>


                    <button className="btn btn-info" onClick={saludo}>Saludar</button>

                    <a href="https://google.com" target={"_blank"} onClick={evitarIrAGoogle}> Google</a>


                    {
                        show &&
                        (
                            <>
                            <Titulo setName={setName} />
                            <SubTitulo />
                            </>
                        )
                    }

                    <button onClick={() => {
                        setShow(!show);
                    }} className="btn btn-info">{ show ? "Ocultar": "Mostrar"} titulo</button>

                </div>
            </div>
        </div>
    )
}

export default Main