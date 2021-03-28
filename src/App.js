import "./App.css";
import MoviesBox from "./components/MoviesBox";
import movies from "./movies";
import React from "react";
import Filter from "./components/Filter";

class App extends React.Component {
  state = {
    movieList: movies,
  };

  sortByAscending() {
    this.setState({
      movieList: movies.sort((a, b) => a.year - b.year),
    });
  }

  sortByDescending() {
    this.setState({
      movieList: movies.sort((a, b) => b.year - a.year),
    });
  }

  sortByBestRate() {
    this.setState({
      movieList: movies.sort((a, b) => b.rate - a.rate),
    });
  }

  sortFromAtoZ() {
    this.setState({
      movieList: movies.sort((a, b) => a.title.localeCompare(b.title)),
    });
  }

  sortFromZtoA() {
    this.setState({
      movieList: movies.sort((a, b) => b.title.localeCompare(a.title)),
    });
  }

  sortByGenre(e) {
    this.setState({
      movieList: movies.filter((item) => item.genre.includes(e.target.value)),
    });
  }

  searchByTitle(e) {
    e.preventDefault();
    this.setState({
      movieList: movies.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
    // if (e.target.value === "12345") {
    //   console.log("Movie not found");
    // }
  }

  // showRandom() {
  //   const randomIndex = Math.floor(Math.random() * movies.length);
  //   this.setState({
  //     movieList:
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Binge Central</h1>
        <Filter
          sortByAscending={(e) => this.sortByAscending()}
          sortByDescending={(e) => this.sortByDescending()}
          sortByBestRate={(e) => this.sortByBestRate()}
          sortFromAtoZ={(e) => this.sortFromAtoZ()}
          sortFromZtoA={(e) => this.sortFromZtoA()}
          sortByGenre={(e) => this.sortByGenre(e)}
          searchByTitle={(e) => this.searchByTitle(e)}
        />
        <div className="gallery">
          {this.state.movieList.map((item, index) => (
            <MoviesBox
              key={index}
              title={item.title}
              year={item.year}
              director={item.director}
              duration={item.duration}
              rate={item.rate}
              genre={item.genre}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
