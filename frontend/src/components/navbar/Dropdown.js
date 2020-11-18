import React from "react";
import axios from "axios"
import "./Dropdown.css"

const Categories = () => {


    return (
        <div className="search-categories">
            <div className="select">                
                <select  class="select-css" name="search_categories" id="search_categories">
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





export default Categories;