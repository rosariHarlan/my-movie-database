const Filter = (props) => {
  const yearAscending = () => {
    props.sortByAscending();
  };

  const yearDescending = () => {
    props.sortByDescending();
  };

  const byBestRate = () => {
    props.sortByBestRate();
  };

  const fromAtoZ = () => {
    props.sortFromAtoZ();
  };

  const fromZtoA = () => {
    props.sortFromZtoA();
  };

  const byGenre = (e) => {
    props.sortByGenre(e);
  };

  const byTitle = (e) => {
    props.searchByTitle(e);
  };

  // const showRandom = (e) => {
  //   props.showRandom();
  // };

  return (
    <div>
      <form>
        <input
          onInput={(e) => byTitle(e)}
          type="search"
          name="search"
          id="search"
          placeholder="Search title"
        />
      </form>
      {/* <button>
        I can't choose &#128553; Surprise me!
      </button> */}
      <div className="accordion">
        <div>
          <input type="checkbox" name="filter" id="filter" />
          <label htmlFor="filter">More Filters</label>
          <div className="accordion-content">
            <button onClick={(e) => yearAscending()}>
              Sort by Date Ascending
            </button>
            <button onClick={(e) => yearDescending()}>
              Sort by Date Descending
            </button>
            <button onClick={(e) => byBestRate()}>Best Rating</button>
            <button onClick={(e) => fromAtoZ()}>Sort from A - Z</button>
            <button onClick={(e) => fromZtoA()}>Sort from Z - A</button>
            <select onChange={(e) => byGenre(e)}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
