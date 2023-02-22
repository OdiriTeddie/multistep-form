import { useState } from 'react'
import SectionTitle from '../shared/section-title.component'
import './add-ons.styles.scss'
import AddonsBox from './addons-box.component'



const AddOns = () => {

    const [checkboxState, setCheckboxState] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    })


    const handleCheckboxChange = (e) => {
        setCheckboxState(prevState => ({
            ...prevState,
            [e.target.name] : e.target.checked,
        }))

         
    }




    return (
        <div class="addons flex">
            <SectionTitle 
                title = "Pick add-ons"
                subtitle = "Add-ons help enhance gaming experience."
            />

            <div className="addons-wrapper flex" onChange = {handleCheckboxChange}>

                <AddonsBox 
                    addonTitle = "Online service"
                    addonSubtitle = "Access to multiplayer games"
                    addonMonths = "1"
                    name = "checkbox1"
                    id= "checkbox1"
                    onChange = {handleCheckboxChange}
                    checked = {checkboxState[0]}
                />
                <AddonsBox 
                    addonTitle = "Larger storage"
                    addonSubtitle = "Extra 1TB of cloud save"
                    addonMonths = "2"
                    name = "checkbox2"
                    id= "checkbox2"
                    onChange = {handleCheckboxChange}
                    checked = {checkboxState[1]}
                />
                <AddonsBox 
                    addonTitle = "Customizable profile"
                    addonSubtitle = "Custom theme on your profile"
                    addonMonths = "2"
                    name = "checkbox3"
                    id= "checkbox3"
                    onChange = {handleCheckboxChange}
                    checked = {checkboxState[2]}
                />
            </div>
        </div>
    )
}

export default AddOns