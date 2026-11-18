function Header({ token, onSetToken, onSetEmail }) {
  function handleLogOff() {
    onSetToken("");
    onSetEmail("");
  }

  return (
    <header>
      <h1>Checkmate</h1>
      {token && (
        <button type="button" onClick={handleLogOff}>
          Log Off
        </button>
      )}
    </header>
  );
}

export default Header;
