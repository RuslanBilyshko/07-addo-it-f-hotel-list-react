var React = require('react');

class LifeBlock extends React.Component {
  constructor() {
    super();
    console.log('constructor');
  }

  componentWillMount() {
    console.log("я буду монтирован");
  }

  componentDidMount() {
    console.log("я монтирован");
  }

  render() {
    console.log("render");
    return (
      <div style={{color:'red'}}>
         Test
       </div>
    );
  }
}

module.exports = LifeBlock;
