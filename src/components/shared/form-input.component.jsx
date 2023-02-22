


const FormInput = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}> {props.label} </label>
            <input 
                id={props.name}
                className="form-input"         
                type= {props.type} 
                placeholder= {props.placeholder} 
                name = {props.name}
                onChange = {props.onChange}
                required
            />
        </div>
    )
}

export default FormInput;