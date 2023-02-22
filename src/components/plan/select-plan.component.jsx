import SectionTitle from "../shared/section-title.component"
import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvancedIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'
import './select-plan.styles.scss'
import { useState } from "react"
import PlanBox from "./planbox-component"


const SelectPlan = () => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheck = () => {
        setIsChecked(!isChecked)
    }


    return (
        <div className="selectPlan flex">
            <SectionTitle 
                title = "Select your plan"
                subtitle = "You have the option of montly or yearly billing."
            />

            <div className="plan-wrapper flex">
                <PlanBox 
                    src={ArcadeIcon}
                    plan = "Arcade"
                    monthlyFee = "9"
                    yearlyFee = "90"
                    isChecked = {isChecked}
                /> 

                <PlanBox 
                    src={AdvancedIcon}
                    plan = "Arcade"
                    monthlyFee = "12"
                    yearlyFee = "120"
                    isChecked = {isChecked}
                /> 

                <PlanBox 
                    src={ProIcon}
                    plan = "Arcade"
                    monthlyFee = "15"
                    yearlyFee = "150"
                    isChecked = {isChecked}
                /> 
            </div>

            <div className="plan-switcher flex">
                <p>Monthly</p>
                <div className = "switcher-wrapper">
                    <input 
                        type="checkbox"
                        checked={isChecked}
                        onClick = {handleCheck}
                        className = "switcher"
                    />
                    <span></span>
                </div>
                <p>Yearly</p>
            </div>
        </div>
    )
}

export default SelectPlan