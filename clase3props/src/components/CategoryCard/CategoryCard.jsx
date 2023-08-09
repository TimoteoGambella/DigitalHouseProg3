import React from "react";
import "./categoryCard.css"

function CategoryCard(props){
    return(
        <article className="card">
            <p>{props.categoryName}</p>
        </article>
    )
}

export default CategoryCard