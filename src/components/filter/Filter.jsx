// Filter.jsx
import React from "react";
import "./Filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>Search results for <b>London</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            className="input"
            type="text"
            name="city"
            id="city"
            placeholder="City Location"
          />
        </div>
        </div>
        <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select className="select" name="type" id="type">
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
            <option value="">Any</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="Property">Property</label>
          <select name="Property" id="Property">
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            className="input"
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            className="input"
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            className="input"
            type="number"
            id="bedrooms"
            name="bedrooms"
            placeholder="any"
          />
        </div>

      <button >
        <img src="/search.png" alt="" />
      </button>
    </div>
    </div>
  );
}

export default Filter;
