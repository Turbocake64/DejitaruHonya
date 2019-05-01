// import jsx via React
import React from "react";
// importing the ListItem component
import { ListItem } from "../List";
// importing the Row & Col components from /Grid
import { Row, Col } from "../Grid";
// import styles from a css file
import "./style.css";

// the functional component Book is defined here with the props / arguments in curly braces on line 11
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    // calling the ListItem Components within the functional component Book
    <ListItem>
      {/* calling the Row Component and defining it's class as "flex-wrap-reverse" */}
      <Row className="flex-wrap-reverse">
        {/* calling the Col Component and defining it's size by bootstrap grid size class */}
        <Col size="md-8">
          {/* the props argument title is being fed to this <h3> tag */}
          <h3 className="font-italic">{title}</h3>
          {/* the props argument 'subtitle' is being fed to this <h5> tag */}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}  
        </Col>
        {/* calling the Col Component again defining it by a smaller bootstrap grid size */}
        <Col size="md-4">
          {/* a div that will contain a button */}
          <div className="btn-container">
            {/* a bootstrap button that takes in the proprs argument 'link' */}
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            {/* ASK ABOUT THIS!!!!! */}
            <Button />
          </div>
        </Col>
      </Row>
      {/* calling the Row Component again */}
      <Row>
        {/* calling the Col Component again */}
        <Col size="md-6">
          {/* a p-tag that will be passed the 'author' props */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      {/* calling the Row Component again */}
      <Row>
        {/* calling the Col Component again */}
        <Col size="12 sm-4 md-2">
          {/* an img tag that will be passed the 'image' and 'title' props */}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        {/* calling the Col Component again */}
        <Col size="12 sm-8 md-10">
          {/* a p-tag that will be passed the 'description' props */}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

// exporting the Book functional component
export default Book;
