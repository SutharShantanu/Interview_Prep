import "./App.css";
import BGChange from "./Components/BGChange";
import Counter from "./Components/Counter";
import DbMap from "./Components/DbMap";
import RandomNum from "./Components/RandomNum";
import Todo from "./Components/Todo";

function App() {
    let obj={
        name:"Ram",
    }
    obj.hasOwnPropery(name);

    return (
        <div className="App">
            <Counter />
            <BGChange />
            <RandomNum />
            <DbMap />
            <Todo />
        </div>
    );
}

export default App;
