import '../App.css';
import '../reset.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-header__logo" src="" alt="logo"/>
        <p className="App-header__name">Blog Name</p>
        <ul className="App-header__social">
          <li className="App-header__social-link"></li>
          <li className="App-header__social-link"></li>
          <li className="App-header__social-link"></li>
          <li className="App-header__social-link"></li>
        </ul>
      </header>
      <div className="banner">
        {/*<img className="banner-img" src="/" alt="banner" />*/}
        Full-width banner image
      </div>
      <main>
        <div className='main-section'>
          <div className='main-section__one'>
            <h2 className='main-section__one-header'>Blog</h2>
            <div className='main-section__one-section'></div>
            <div className='main-section__one-section'></div>
            <div className='main-section__one-section'></div>
            <div className='main-section__one-section'></div>
          </div>
          <div className='main-section__two'>
            <h2 className='main-section__one-header'>News</h2>
            <div className='main-section__two-section'></div>
            <div className='main-section__two-section'></div>
            <div className='main-section__two-section'></div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default App;
