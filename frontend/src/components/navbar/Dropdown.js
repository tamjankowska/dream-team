import React, {useState}  from 'react'
import "./Dropdown.css"

function Dropdown() {
    return (
        <Navvy>        
            <NavvyItem icon="Category" >
                <DroppyMenu />
            </NavvyItem>
        </Navvy>
    );
}
function DroppyMenu() {
    function DroppyItem(props){
        return (
            <a href="#" className="menu-item">
                {props.children}
            </a>
        )
    }
    return (
        <div className="dropdown">
            <DroppyItem>Horror Games</DroppyItem>
            <DroppyItem>Action Games</DroppyItem>
            <DroppyItem>Other Games</DroppyItem>
            <DroppyItem>Random Games</DroppyItem>
        </div>
    )
}

function Navvy(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"> {props.children}</ul>
        </nav>
    )
}

function NavvyItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

export default Dropdown;
