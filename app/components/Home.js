var React = require('react');
var Link = require('react-router-dom').Link;

function Home() {
  return (
    <div className='home-container'>
      <h1>Battle yo friendzzz!</h1>
      <Link className='button' to='/battle'>Battle</Link>
      <br/>
      <p>
        Note: this is from a tutorial in <a href="https://online.reacttraining.com">online.reacttraining.com</a>. The original web app can be found <a href="https://rt-react-fundamentals.firebaseapp.com/">here</a>. -carl
      </p>
    </div>
  )
}

module.exports = Home;
