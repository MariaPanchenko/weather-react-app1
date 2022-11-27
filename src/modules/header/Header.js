import React from 'react';
import './Header.css';

export default function Header({ handleSubmit, handleCityChange }) {
  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row search-form">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city.."
            className="form-control"
            autoComplete="off"
            onChange={handleCityChange}
          />
        </div>
        <div className=" col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100 submit-search"
          />
        </div>
      </div>
    </form>
  );
}
