import  myStyle from  './contador.module.css'



function Contador(){
    const numero = 1
    return (
        <div className={myStyle['meu-contador']}>
            Contador : {numero > 2 ? 'SIM' : 'NÃO'}
        </div>
    )
        
}

export default Contador