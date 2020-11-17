function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar--col">
        <div className="titleContainer">
          <h3 className="navbar--title">Travelize</h3>
          <p className="navbar--subtitle">
            <em>My Traveling Experiences</em>
          </p>
        </div>
      </div>
      <div className="navbar--col">
        <button className="button">Home</button>
        <button className="button">Blog</button>
        <button className="button button--filled button--state-primary">About</button>
      </div>
    </div>
  );
}

export default Navbar;
