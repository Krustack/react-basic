function Header(props) {
  return (
    <>
      <h1>{props.appLogo}</h1>
      <nav>{props.children}</nav>
    </>
  );
}
export default Header;
