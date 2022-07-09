import Home from "./routes/Home"
import Detail from "./routes/Detail"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
function App() {
  return <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </Router>
}

export default App;
