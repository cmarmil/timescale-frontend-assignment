function Navbar() {
  return (
    <div className="navbar">
      <div className="col--center">
        <div className="titleContainer">
          <h3 className="navbar--title">Travelize</h3>
          <p className="navbar--subtitle">
            <em>My Traveling Experiences</em>
          </p>
        </div>
      </div>
      <div className="col--center">
        <button className="button">Home</button>
        <button className="button">Blog</button>
        <a href="#profileContent" className="button button--filled button--state-primary">About</a>
      </div>
    </div>
  );
}

export default Navbar;
