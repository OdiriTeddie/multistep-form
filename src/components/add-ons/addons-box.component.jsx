import './add-ons.styles.scss'



const AddonsBox = (props) => {
    
    return(
        <div className= {props.checked ? 'addons-box addons-box--checked flex' : 'addons-box flex'   }>
            <input 
                type="checkbox" 
                name= {props.name}
                checked = {props.checked}
                onChange = {props.onChange}
            />
            <div>
                <h3>{props.addonTitle}</h3>
                <p>{props.addonSubtitle}</p>
            </div>
            <div>
                <p className="addon-month">+{props.addonMonths}/mo</p>
            </div>
        </div>
    )
}

export default AddonsBox