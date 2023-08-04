const Alumnos = ({amigos, clase}) => {

    // const{alumnos, clase} = props ==> si viene props como parametro

    return (
        <>
            <h3>Amigos: {clase}</h3>
            {
              amigos.map(amigo => {
                return (
                    <div>
                        <p>{amigo.name}</p>
                        <span>{amigo.age}</span>
                    </div>
                )
              })  
            }
        </>
    )
}

export default Alumnos;