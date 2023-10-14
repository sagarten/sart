import "./Header.css";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import HomeBody from "./HomeBody";
import Writing from "./Writing";
import Love from "./Love";

function App() {
  return (
    <div className="App">
      <div className="Home_container">
        <div className="Home_sub_container">
          <Header />
          <HomeBody></HomeBody>
          <Love></Love>
          <Writing></Writing>
          <Form></Form>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;