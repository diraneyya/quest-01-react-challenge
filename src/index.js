import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const MyComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.email}</h4>
      <h4>{props.phone}</h4> <br />
      <button>Delete</button> <br />
      <br />
      <br />
    </div>
  );
};

export const App = (
  <div>
    <div>
      <h1>My contacts list 📱</h1>
    </div>
    <MyComponent
      name="Lilliana"
      email="📧lilliana.davila.test@dell.com"
      phone="📞015227011406"
    />
    <MyComponent
      name="Cecilia"
      email="📧cecilia.reeder.test@kroger.com"
      phone="📞01523342678"
    />
    <MyComponent
      name="Aydin"
      email="📧aydin.farr.test@kroger.com"
      phone="📞2235567009"
    />
    <MyComponent
      name="Weiss"
      email="📧enoch.weiss.test@gd.com"
      phone="📞1234567890"
    />
    <MyComponent
      name="Lewis"
      email="📧lewis.test@nike.com"
      phone="📞0123456998"
    />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
