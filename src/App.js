import "./App.css";
import Layout from "./components/hoc/layout";
import UserSlider from "./components/utils/User/userSlider";
import Dashboard from "./components/utils/User";
function App() {
  return (
    <div className="App">
      <Layout>
        <div className="main-section">
          <UserSlider />
          <Dashboard />
        </div>
      </Layout>
    </div>
  );
}

export default App;
