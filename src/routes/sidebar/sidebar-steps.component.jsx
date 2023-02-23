import { Link } from "react-router-dom"

const SidebarStep = (props) => {
    return (
        <li className="sidebar__content_steps">
            <Link to={props.to} className=" link flex">
                <div className={`sidebar__content_number ${props.current}`}>{props.number}</div>

                <div className="sidebar__content_details">
                    <p>Step {props.stepNumber} </p>
                    <h2> {props.stepInfo} </h2>
                </div>
            </Link>

        </li>
    )
}

export default SidebarStep