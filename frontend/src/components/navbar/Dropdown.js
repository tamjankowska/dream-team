import React, { useState, useEffect } from "react";
import axios from "axios"
import "./Dropdown.css"

const Categories = (props) => {

    const [categories, setCategories] = useState([]);
    
    const getResponse = () => {
        axios.get("http://localhost:5000/games/categories").then((res) => {
            setCategories(res.data)
        });
    };
    
    useEffect(() => {
        if (categories.length == 0) {
            getResponse()
        }
    });
    

    return (
            <div className="search-categories">
                <div className="select">
                    <select className="select-css" name="search_categories" id="search_categories" >
                        <option value="Categories" disabled selected>Categories</option>
                        {categories.map((category,index) => 
                            <option className="dropdown-item" key={index}>{category}</option> 
                        )}
                    </select>
                </div>
            </div>
    );
}
export default Categories;