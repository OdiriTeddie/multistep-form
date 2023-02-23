
import SidebarStep from './sidebar-steps.component';
import './sidebar.styles.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__content">
               <SidebarStep  
                    number = "1" 
                    stepNumber = "1" 
                    stepInfo="Your Info" 
                    current="sidebar__content_number--current" 
                    to = "/"
                />

               <SidebarStep  
                    number = "2" 
                    stepNumber = "2" 
                    stepInfo="Select Plan" 
                    to="/select-plan"
                />

               <SidebarStep  
                    number = "3" 
                    stepNumber = "3" 
                    stepInfo="Add-Ons" 
                    to="/add-ons"
                />

               <SidebarStep  
                    number = "4" 
                    stepNumber = "4" 
                    stepInfo="Summary"
                    to="/summary"
                />
            </ul>
        </div>
    )
}

export default Sidebar;