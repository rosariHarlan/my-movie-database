import "./App.css";
import MoviesBox from "./components/MoviesBox";
import movies from "./movies";

function App() {
  return (
    <div className="gallery">
      {movies.map((item, index) => (
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
  );
}

export default App;
