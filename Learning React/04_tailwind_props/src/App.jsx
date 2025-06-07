import "./App.css";
import Card from "./components/Card";
function App() {
  let myObj = {
    name: "Demo User",
    age: 69,
  };

  let arr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-500 text-black p-2 rounded-2xl mb-4">
        Tailwind CSS TEST
      </h1>
      <Card username="Mr Demo" someObj={myObj} someArr={arr} />
      <Card username="Mr Demo 2" text="Hi !!" />
    </>
  );
}

export default App;
