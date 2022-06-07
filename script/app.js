const sideBars = {
  backgroundColor: '#DEDDDD',
    boxShadow: '0px 0px 10px #000000',
    width: '200px',
    height: '650px',
    textAlign: 'center',
    marginLeft: '34px',
    display:  'grid',
}
const threeBoxes = {
  display: 'Grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '2em',
    height: '200px',
}
const box1 = {
  backgroundColor: '#DEDDDD',
  boxShadow: '0px 0px 10px #000000',
}
const box3 = {
  backgroundColor: '#DEDDDD',
  boxShadow: '0px 0px 10px #000000',
  textAlign: 'center',
}

const Apps = {
  backgroundColor: '#EAEAEA', 
  height: '700px',
  alignItems: 'center',
  display: 'flex',
}
const WebVisitors = {
  backgroundColor: '#DEDDDD',
  boxShadow: '0px 0px 10px #000000',
  height: '425px'
}
const miniVisitors = {
  border: '#000000 solid 2px',
backgroundColor: '#939393',
width: '75%',
display: 'block',
height: '270px',
marginLeft: '130px'
}
const mainBody = {
  marginLeft: '35px',
  width: '75%'
}


class TopBoxes extends React.Component {
  render() {
    return (
      <div className='threeBoxes' style={threeBoxes}>
        <div className= "box1" style={box1}>
        <h5>Reviews</h5>
        <h3>1,281</h3>
        </div>
      <div className="box2" style={box1}>
        <h5>Average Rating</h5>
        <h3>4.6</h3>
      </div>
      <div className="box3" style={box3}>
        <h5>Sentiment Analysis</h5>
        <h3>960</h3>
        <h3>122</h3>
        <h3>321</h3>

      </div>
</div>
    );
  }
}
class SideBar extends React.Component {
  render() {
    return (
      <div className='sideBars' style={sideBars}>
          <h5>Dashboard</h5>
          <h5>Widget</h5>
          <h5>Reviews</h5>
          <h5>Customers</h5>
          <h5>Online Analysis</h5>
          <h5>Settings</h5>
        </div>
   );
  }
}

class WebVisitor extends React.Component {
  render() {
    return (
      <div className='WebVisitors' style={WebVisitors}>
        <h5>Website Visitors</h5>
        <h3>821</h3>
        {this.props.children}
      </div>
    );
  }
}
class miniVisitor extends React.Component{
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='Apps' style={Apps}>
        <SideBar />
        <div className= 'mainBody' style={mainBody}>
        <TopBoxes/>
        <WebVisitor >
        <miniVisitor className='miniVisitors' style={miniVisitors} />
        </WebVisitor >
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".main"));
