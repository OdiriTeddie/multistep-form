import './summary.styles.scss'
import SectionTitle from "../shared/section-title.component"



const Summary = () => {
    return (
        <div className="summary">
            <SectionTitle 
                title = "Finishing up"
                subtitle = "Double-check everything looks OK before confirming"
            />
        </div>
    )
}


export default Summary