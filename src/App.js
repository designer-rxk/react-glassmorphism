import './App.css';

function App() {
  return (
    <div className={"blurred-wrapper"}>
      <header className={"main-header container"}>
        <a href={"#"} className={"logo"}>Wallet</a>
        <a href={"#"} className={"btn sign-up"}>Sign Up</a>
      </header>
      <section className={"hero container"}>
        <div className={"content-wrapper"}>
        <h5 className={"tagline"}>More than just a wallet</h5>
        <h1 className={"title"}>
          Make paying easier by using Wallet<span>.</span>
        </h1>
        <p className={"message"}>
          Carry your cards on any device so that you can pay in-person, online, or with the app.
        </p>
        <a href={"#"} className={"btn cta"}>Learn More</a>
        </div>
      </section>


    </div>
  );
}

export default App;
