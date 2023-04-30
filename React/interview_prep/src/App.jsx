import "./App.css";
import BGChange from "./Components/BGChange";
import Counter from "./Components/Counter";
import DbMap from "./Components/DbMap";
import RandomNum from "./Components/RandomNum";

function App() {
    return (
        <div className="App">
            <Counter />
            <BGChange />
            <RandomNum />
            <DbMap />
        </div>
    );
}

export default App;
