import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Monza Motorsporets</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>Cars</h3>
        <p>
          Monza Motorsports is a boutique-style vehicle reseller specializing in
          premium imports. We aim to provide an unmatched experience to our
          clients and our vehicles are meticulously reconditioned to the highest
          standards. We offer customizable leasing and financing options on on
          all our vehicles.
        </p>
        <h3>Personalization</h3>
        <p>
          We offer a full spectrum of vehicle reconditioning and personalization
          options. From window tinting to custom wrapping to protective film
          installation, all our products and services adhere to the highest
          standards of quality and craftsmanship. Rest assured that we only use
          the best supplies and equipment.
        </p>
        <h3>About</h3>
        <p>
          Since 2012 Monza Motorsports has been the leading destination for
          premium imported vehicles. We do things differently by marketing
          chiefly through personal referrals as we seek to cultivate life-long
          clients. Professionalism and transparency are our operating principles
          while delivering real value to our clients is our ultimate goal.
          Contact us today to start your journey.
        </p>
        <a
          className="App-Link"
          href="https://www.facebook.com/MonzaMotorsports/"
          target="blank"
          rel="noopener noreferrer"
        >
          Inventory
        </a>
        <h3>Contact</h3>
      </header>
    </div>
  );
}

export default App;
