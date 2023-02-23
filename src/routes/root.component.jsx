import { Outlet } from 'react-router';
import Sidebar from './sidebar/sidebar.component';
import './root.styles.scss'


const Root = () => {
    return (
    <>
        <div className="root">
            <div className="wrapper">
                    <Sidebar />
                <div className="wrapper-inner">            
                    <Outlet />
                </div>
            </div>
        </div>


    </>
    )
}

export default Root;