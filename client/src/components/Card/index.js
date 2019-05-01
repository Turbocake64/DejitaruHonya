// import jsx via React
import React from "react";

// the functional component 'Card' is defined here to take in the 'icon', 'title', & 'children' props
function Card({ icon, title, children }) {
  return (
    // a card div is created
    <div className="card mt-4">
      {/* card header div */}
      <div className="card-header">
        {/* h3 element created */}
        <h3>
          {/* bold stylings for the nested i tag */}
          <strong>
            {/* the icon props argument and title props argument are fed in here */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* the children props argument are passed into card body */}
      <div className="card-body">{children}</div>
    </div>
  );
}

//export the functional component Card
export default Card;
