import Register from "./components/Register";
// import Login from "./components/Login";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App bg-gray-700">
      <div className="flex justify-center items-center w-screen h-screen gap-20">
        <Register />
        {/* <Login /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
