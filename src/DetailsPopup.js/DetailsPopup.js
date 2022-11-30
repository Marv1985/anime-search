import "/home/marv/react-projects/anime-search/src/DetailsPopup.js/detailsPopup.css";
import React from "react";

export default function DetailsPopup(props) {
  const { handleSubmit, name, changes, seconds } = props;

  return (
    <div className="dis">
      <div className="details-popup">
        <h1>Your Time:</h1>
        <form onSubmit={handleSubmit}>
          <p id="time" type="text" value={seconds}>
            {seconds}
          </p>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter name"
            id="name"
            type="text"
            value={name}
            required="required"
            onChange={changes}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}
