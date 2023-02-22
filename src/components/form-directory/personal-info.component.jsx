import './personal-info.styles.scss'
import { useState } from 'react'
import FormInput from '../shared/form-input.component'
import SectionTitle from '../shared/section-title.component'

const defaultFormFields = {
    name: '',
    email: '',
    phone: '',
}

const PersonalInfo = () => {

    const [formFields, setFormFields] = useState({defaultFormFields})

    function handleChange(e) {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form">
            
            <SectionTitle 
                title = "Personal info"
                subtitle = "Please provide your name, email address, and phone number."
            />

            <form>
                <FormInput 
                    label="Name" 
                    type="text" 
                    name = "name"
                    placeholder="e.g. Stephen King" 
                    value= {defaultFormFields.name}
                    onChange = {handleChange}
                />

                <FormInput 
                    label="Email Address" 
                    type="email" 
                    name = 'email'
                    placeholder="stephenking@lorem.com"
                    value= {defaultFormFields.email}
                    onChange = {handleChange} 
                />

                <FormInput 
                    label="Phone Number" 
                    type="text" 
                    name = "phone"
                    placeholder="e.g. +1 234 567 890"
                    value= {defaultFormFields.phone}
                    onChange = {handleChange} 
                />
            </form>
        </div>
    )
}

export default PersonalInfo