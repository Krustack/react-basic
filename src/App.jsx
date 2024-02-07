import Header from './components/Header';
import NavMenu from './components/NavMenu';
function App() {
  const myApp = "❤ My React App"
  return (
    <Header appLogo={myApp}>
      <NavMenu />
    </Header>
  );
}

export default App;
