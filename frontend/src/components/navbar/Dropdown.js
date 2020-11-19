import React from "react";
import axios from "axios"
import "./Dropdown.css"

const Categories = () => {


    return (
        <div className="search-categories">
            <div className="select">                
                <select  class="select-css" name="search_categories" id="search_categories">
                    <option value="" disabled selected>Categories</option>
                    <option className="dropdown-item" value="horror">Shown from database</option>
                    <option className="dropdown-item" value="Happy">Shown from database</option>
                    {/* <optgroup label="horror">Horror</optgroup> */}
                    <option className="dropdown-item" value="Sad">Shown from database</option>
                    <option className="dropdown-item" value="Weird">Shown from database</option>
                </select>
            </div>
        </div>

    )
}

export default Categories;