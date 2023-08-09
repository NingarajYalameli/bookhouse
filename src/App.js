import "./App.css";
import { Footer, Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
//This is the entry point for all components
function App() {
  return (
    <div className="dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
