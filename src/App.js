import "./App.css";
import SubscribeButton from "./Components/SubscribeButton";

function App() {
  return <div className="container">
    <div className="content">
        <div>
          <div className="intro p-1">
            <h1>Join our community</h1>
            <h3>30-day, hassle-free money back guarantee</h3>
            <p>Gain acces to our full libary of tutorials along with expert code reviews. 
              Perfect for any developers who are serious about honing their skills.</p>
          </div>
          <div className="bottom-wrapper">
            <div className="cyan p-1 subscription">
              <h2>Monthly Subscription</h2>
              <div>
                <h5>$29</h5>
                <h4>per month</h4>
              </div>
              <p className="white">Full access for less than $1 a day</p>
              <SubscribeButton/>
            </div>
            <div className="light-cyan p-1 lead">
              <h2>Why Us</h2>
              <ul>
                <li>Tutorials by industry experts</li>
                <li>Peer &amp; expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
  </div>;
}

export default App;
