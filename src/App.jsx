import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
    <Cart />
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
