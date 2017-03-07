var React = require('react');
var ReactDOM = require('react-dom');
/*var LifeBlock = require('./life');*/

let data = [
  {
    id: 12,
    name: "Bill"
  },
  {
    id: 20,
    name: "dfgdf"
  },
  {
    id: 59,
    name: "Billdgfdg"
  }
];

class LifeBlock extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      name: "Statr name",
      data: props.data
    }
  }

  componentWillMount() {
    console.log("я буду монтирован");
  }

  componentDidMount() {
    console.log("я монтирован");
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      data: newProps.data
    });
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  onClickElement(event) {

    this.props.parentMethod(this.state.data.id);
    this.setState({
      name: "My new Name"
    });
  }

  render() {
    console.log("render");
    return (
      <div style={{color:'red'}} onClick={this.onClickElement.bind(this)}>
         Test {this.props.text} - {this.props.data.name} <br/>
         {this.state.name}<br/>
         {this.props.testType}
       </div>
    );
  }
}

LifeBlock.propTypes = {
  testType: React.PropTypes.number
};

LifeBlock.defaultProps = {
  testType: "sdg"
};



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data
    }
  }

  myClick(id) {
    let newData = this.state.data.filter((item)=> {
      return item.id != id;
    });
    this.setState({
      data: newData
    });
  }

  render() {
    let testData = this.state.data.map((item)=> {
      return (
        <LifeBlock key={item.id} defaultProps="sdfgdgdf" text="Test text" data={item} parentMethod={this.myClick.bind(this)}/>
      )
    })
    return (
      <div>
        <h1>Hello world</h1>
        {testData}
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
