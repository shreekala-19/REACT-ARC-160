import Login, { Profile, Setting, UserKey } from "./UserComponent.jsx";

function App() {
  return (
    <div>
      <h1>Importing and Exporting Components</h1>
      <Login />
      <Profile />
      <Setting />
      <h2>{UserKey}</h2>
    </div>
  );
}

export default App;
