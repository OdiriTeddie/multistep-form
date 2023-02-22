

const PlanBox = (props) => {
    return (
        <div className="planbox flex">
            <div>
                <img src={props.src} alt="" />
            </div>
            <div>
                <h3>{props.plan}</h3>
                {props.isChecked  ? <p>${props.yearlyFee}/yr</p> : <p>${props.monthlyFee}/m</p>}
                {props.isChecked  && <p>2 months free</p>}
            </div>
        </div>
    )
}

export default PlanBox