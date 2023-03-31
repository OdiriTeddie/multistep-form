import { useState } from 'react'
import SectionTitle from '../shared/section-title.component'
import './add-ons.styles.scss'
import AddonsBox from './addons-box.component'



const AddOns = () => {

    const [checked, setChecked] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false
    })

    const handleCheck = (event) => {
        const targetCheckbox = event.target.name;
        const isChecked = event.target.checked;

            setChecked((prevState) => ({
                ...prevState,
                [targetCheckbox]: isChecked
            }));
    }

    return (
        <div class="addons flex">
            <SectionTitle 
                title = "Pick add-ons"
                subtitle = "Add-ons help enhance gaming experience."
            />

            <form className="addons-wrapper flex" >

                <AddonsBox 
                    addonTitle = "Online service"
                    addonSubtitle = "Access to multiplayer games"
                    addonMonths = "1"
                    name = "checkbox1"
                    checked = {checked.checkbox1}
                    onChange = {handleCheck}
                />
                <AddonsBox 
                    addonTitle = "Larger storage"
                    addonSubtitle = "Extra 1TB of cloud save"
                    addonMonths = "2"
                    name = "checkbox2"
                    checked = {checked.checkbox2}
                    onChange = {handleCheck}
                />
                <AddonsBox 
                    addonTitle = "Customizable profile"
                    addonSubtitle = "Custom theme on your profile"
                    addonMonths = "2"
                    name = "checkbox3"
                    checked = {checked.checkbox3}
                    onChange = {handleCheck}
                />
            </form>
        </div>
    )
}

export default AddOns