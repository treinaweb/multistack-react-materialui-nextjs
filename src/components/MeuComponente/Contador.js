import  myStyle from  './contador.module.css'



function Contador(props){
    const numero = 1

    return (
        <div className={myStyle['meu-contador']}>
            Contador : {numero > 2 ? 'SIM' : 'NÃO'}

            <span> {props.nome} {props.idade} </span>

            {props.children}
        </div>
    )
        
}

export default Contador