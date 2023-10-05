import { useState } from "react"

const Form = () => {
    // Aosciacion del estado con los input
    // Estados de Input
    const [form, setForm] = useState({
        email: '',
        contraseña: ''
    })
    // Estado para error
    const [error, setError] = useState({
        email: '',
        contraseña: ''
    })

    // Funcion para asociar
    const handleOnChange = (event) => {
        setForm({
            // Aqui se esta haciendo una copia del objeto
            ...form,
            // Se accede al input con el name en el que estamos trabajando. Ahi se cambia el valor.
            [event.target.name]: event.target.value,
         })
         validate()
    }

    const validate = () => {
        if(!/\S+@\S+\.\S+/.test(form.email)){
            setError({
                ...error,
                email: 'El email es incorrecto'
            })
        }
        else setError({...error, email: ''})

        if(form.contraseña.length < 8){
            setError({
                ...error,
                contraseña: 'Minimo 8 caracteres'
            })
        }
        else setError({...error, contraseña: ''})
    }

    const disabledBoton = () => {
        return !form.email || !form.contraseña || error.email || error.contraseña
    }

    const handlerOnSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handlerOnSubmit}>
            <h1>Formulario</h1>

            <label htmlFor="email">Email:</label>
            <input name="email" type="email" placeholder="Ingrese su email" value={form.email} onChange={handleOnChange}/>
            {error.email && <p>{error.email}</p>}

            <hr />

            <label htmlFor="contraseña">Contraseña:</label>
            <input name="contraseña" type="contraseña" placeholder="Ingrese una constraseña" value={form.contraseña} onChange={handleOnChange}/>
            {error.contraseña && <p>{error.contraseña}</p>}


            <hr />

            <button disabled={disabledBoton()}>Enviar</button>

        </form>
    )
}

export default Form
