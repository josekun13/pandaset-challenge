import { APITester } from "./APITester";
import "./index.css";
import "./components/PointCloudReader"

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { PointCloudReader } from "./components/PointCloudReader";

export function App() {
  return (
    <div className="app">

      <PointCloudReader ></PointCloudReader>

    </div>
  );

}

export default App;
