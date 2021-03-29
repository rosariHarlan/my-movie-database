const Filter = (props) => {
  return (
    <div>
      <div className="first-filters">
        <form>
          <input
            onInput={(e) => props.searchByTitle(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder="Search title"
          />
        </form>
        <button onClick={(e) => props.showRandom()}>
          I can't choose &#128555; Surprise me!
        </button>
      </div>
      <div className="accordion">
        <div>
          <input type="checkbox" name="filter" id="filter" />
          <label htmlFor="filter">More Filters</label>
          <div className="accordion-content">
            <button onClick={(e) => props.sortByAscending()}>
              Sort by Date Ascending
            </button>
            <button onClick={(e) => props.sortByDescending()}>
              Sort by Date Descending
            </button>
            <button onClick={(e) => props.sortByBestRate()}>Best Rating</button>
            <button onClick={(e) => props.sortFromAtoZ()}>
              Sort from A - Z
            </button>
            <button onClick={(e) => props.sortFromZtoA()}>
              Sort from Z - A
            </button>
            <select onChange={(e) => props.sortByGenre(e)}>
              <option>Choose Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Biography">Biography</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Film-noir">Film-Noir</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Music">Music</option>
              <option value="Musical">Musical</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Sci-fi">Sci-Fi</option>
              <option value="Sport">Sport</option>
              <option value="Thriller">Thriller</option>
              <option value="War">War</option>
              <option value="Western">Western</option>
            </select>
            <button onClick={(e) => window.location.reload(false)}>
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
