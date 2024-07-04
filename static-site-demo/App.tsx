import React from 'react';

const App = () => {
  return (
    <>
      <nav>
        <div className="nav-left-container">
          <div className="razorpay-logo">
            <img src="./razorpay.svg" width="120px" />
          </div>
          <div className="menu">
            <button>Payments</button>
            <button>Banking+</button>
            <button>Payroll</button>
            <button>Partners</button>
          </div>
        </div>
        <div className="nav-right-container">
          <a className="primary">Login</a>
          <button className="primary">Sign Up</button>
        </div>
      </nav>

      <main>
        <div className="hero-container">
          <div className="hero-text-container">
            <h1 className="title">
              <span className="color-primary">Advanced Payment Solutions</span>
              <br />
              for India's finest disruptors
            </h1>
            <p>100+ Payment Methods | Easy Integration | Powerful Dashboard</p>
            <div className="hero-cta-container">
              <button className="primary">Sign Up Now</button>
              <a className="primary">Know More</a>
            </div>
          </div>
          <img className="hero-image" src="./hero.png" loading="lazy" width="600px" />
        </div>

        <div className="second-fold">
          <h1 className="title">
            The all in one <span className="color-green">finance platform</span>
            <br /> you've been looking for
          </h1>
          <div className="flex razorpay-features">
            <p>With Razorpay, you can:</p>
            <p>Accept Payments</p>
            <p>Make Payouts</p>
            <p>Start Business Banking</p>
          </div>
        </div>
      </main>
    </>
  );
};


export default App;