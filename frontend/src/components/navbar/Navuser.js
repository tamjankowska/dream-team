import React from "react";
import "./Navuser.css"

const Sloth = () => {
    return (
        <div className="search-categories">
            <div className="select">                
                <select name="search_categories" id="search_categories">
                    <option value="" disabled selected>Categories</option>
                    <option className="dropdown-item" value="horror">Horror games</option>
                    <option className="dropdown-item" value="Happy">Happy games</option>
                    <option className="dropdown-item" value="Sad">Sad games</option>
                    <option className="dropdown-item" value="Weird">Weird games</option>
                </select>
            </div>
        </div>

    )
}





export default Sloth;