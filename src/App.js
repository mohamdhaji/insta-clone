import "./App.css";
import Layout from "./components/hoc/layout";
import UserSlider from "./components/utils/User/userSlider";
import Dashboard from "./components/utils/User";
function App() {
  return (
    <div className="App">
      <Layout>
        <UserSlider />
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
