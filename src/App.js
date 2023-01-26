import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data/Data';

//Testing
import CardTest from './components/CardTest';

function App() {
  const cards = Data.map((card) => {
    return (
      <CardTest 
      key={card.id} 
      card={card}
      />
    )
  })

  return (
    <div className="App">
      <div>
        <NavBar/>
        <Hero />
        <h1 className='sellers--text'>Our most famous Sellers!</h1>
        <section className='cards--list'>
          {cards}
        </section>
      </div>
    </div>
  );
}

export default App;
