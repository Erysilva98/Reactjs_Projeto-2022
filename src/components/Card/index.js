import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor (valor + 1 )
    }

    function Remover(){
        setValor (valor - 1 )
    }

    return (
        <div className="card">
            <div className="card-header">
                Gerencia Lista 2022
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                
                <p> </p>

                <Button
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </Button>

                {/*  Contagem */}
                <p>{valor}</p>  
            </div>
        </div>
    )
}

export default Card;