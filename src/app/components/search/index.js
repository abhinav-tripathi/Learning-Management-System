import React from "react";

const Search = props => {
  let searchRef = React.createRef();
  return (
    <div className="col-md-10 common-form align-center-no-gap">
      <div className="input-group md-form form-sm form-2 pl-0">
        <input
          className="form-control my-0 py-1 amber-border"
          ref={searchRef}
          onKeyUp={() =>
            props.search(searchRef.current.value, props.loggedInUserID)
          }
          type="text"
          placeholder={props.placeholder}
          aria-label={props.placeholder}
        />
      </div>
    </div>
  );
};

export default Search;
