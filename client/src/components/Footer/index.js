// import jsx via React
import React from "react";

//functional component Footer is defined here
function Footer() {
  return (
    // footer tag
    <footer>
      <hr />
      {/* p-tag  */}
      <p className="pull-right">
        {/* github icon with React js plug */}
        <i className="fab fa-github" /> リアクトで作られたアップリです。
      </p>
    </footer>
  );
}

// export the functional component Footer
export default Footer;
