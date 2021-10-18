import "./App.css";
import RepoList from "./components/ReposList/RepoList";
function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="header-text">Github Browser</h1>
      </div>
      <RepoList />
    </div>
  );
}

export default App;
