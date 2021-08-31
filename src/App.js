import "./App.css";
import Developer from "./components/Developers";

function App() {
  const daniel = { name: "Daniel", age: 23, country: "Brasil" };
  const gabriel = { name: "Gabriel", age: 25, country: "Brasil" };
  const jack = { name: "Jack", age: 19, country: "Estados Unidos" };
  return (
    <div>
      <div className="pai">
        <Developer
          name={daniel.name}
          age={daniel.age}
          country={daniel.country}
        />
        <Developer
          name={gabriel.name}
          age={gabriel.age}
          country={gabriel.country}
        />
        <Developer name={jack.name} age={jack.age} country={jack.country} />
      </div>
    </div>
  );
}

export default App;
