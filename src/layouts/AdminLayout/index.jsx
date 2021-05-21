import React from 'react'
import HeaderComponent from "./components/Header"
import SidebarComponent from "./components/Sidebar"

const AdminLayout = ({ children }) => {
    return (
        <div>
            <HeaderComponent user={{ name: "Neha" }} />
            <div style={{marginTop: "80px"}}>
                <SidebarComponent />
                <div >
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
