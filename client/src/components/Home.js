import './Home.css';
import logo from '../img/icon-512x512.png'

function Home() {
  return (
    <div className="Home">
      <div id="lama-title">
        <h1>LAMA</h1>
      </div>
      <div id="lama-logo">
        <img id="logo" src={logo} alt="Lama logo"></img>
        <div id="logo-text">
          <h2><span className="first-letter">L</span>.ife</h2>
          <h2><span className="first-letter">A</span>.dmin</h2>
          <h2><span className="first-letter">M</span>.anagement</h2>
          <h2><span className="first-letter">A</span>.dvisor</h2>
        </div>
      </div>
      {/* <div id="showcase">
        <section>What is this</section>
        <section>How to use</section>
        <section>Start using now</section>
      </div>
      <footer>Footer footer footer footer footer footer footer footer footer</footer> */}
    </div>
  );
}

export default Home;
