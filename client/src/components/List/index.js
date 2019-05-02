// import react package and jsx
import React from "react";
// importing css
import "./style.css";

// This declares and exports the List functional component
// This returns a List component populated with other components and props
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

// Declaring and Exporting the ListItem functional component
// This returns a ListItem compenent populated w/ other components and props
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
