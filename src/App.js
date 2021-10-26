
import './App.css';
import Profile from './componet/Profile';
 import photo from './componet/photo.jpg'

function App() {
  const myfunction=(name)=>{alert(` hi i'm ${name}`)}
  return (
    <div className="App">
    <Profile profession='student' photo={photo} bio="this is bio" fullName="Baraa" myfunction={myfunction}/>
   
    
    
    </div>
  );
}

export default App;
