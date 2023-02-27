import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center py-5 h-100">
        <div className="col-md-12 col-xl-5">
          <div className="card cardStyle">
            <div className="card-body text-center">
              <ProfilePhoto />
              <FullName />
              <Address />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
