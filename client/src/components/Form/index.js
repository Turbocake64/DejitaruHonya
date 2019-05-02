// import jsx via React
import React from "react";

// defining functional component Form to take in the props q, handleInputChange, and handleFormSubmit
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      
      <div className="form-group">
        <label htmlFor="Query">
          <strong>書名</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          検索
        </button>
      </div>
    </form>
  );
}

export default Form;
