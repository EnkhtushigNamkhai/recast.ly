var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={_.debounce(props.onSearch, 500)($('input').val())}/>
    <button className="btn hidden-sm-down" onClick={() => props.onSearch($('input').val())}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
