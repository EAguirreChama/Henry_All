import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        setErrors(validate())
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/home");
    }

    const validate = () => {
        const error = {};
        if(!/\S+@\S+\.\S+/.test(form.email)){
            error.email = "Email invalido" 
        }
        if(form.password.length < 6){
            error.password = "Debe tener minimo 6 caracteres"
        }
        return error;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" value={form.email} onChange={handleChange}/>
            {errors.email && <span style={{color: "red"}}>{errors.email}</span>}

            <hr/>

            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={form.password} onChange={handleChange}/>
            {errors.password && <span style={{color: "red"}}>{errors.password}</span>}
            
            <hr/>

            <button type="submit">Ingresar</button>
        </form>
    )
}

export default Formulario;