function Header({ email, token, onSetToken, onSetEmail }) {
  function handleLogOff() {
    onSetToken("");
    onSetEmail("");
  }

  return (
    <header>
      <h1>Checkmate</h1>
      {token && (
        <div>
          <span>{email}</span>
          <button type="button" onClick={handleLogOff}>
            Log Off
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
