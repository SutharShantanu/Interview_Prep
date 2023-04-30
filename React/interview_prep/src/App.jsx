import "./App.css";
import BGChange from "./Components/BGChange";
import Counter from "./Components/Counter";
import RandomNum from "./Components/RandomNum";

function App() {
    return (
        <div className="App">
            <Counter />
            <BGChange />
            <RandomNum />
        </div>
    );
}

export default App;
