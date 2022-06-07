class Nav extends React.Component {
    render() {
        return ( 
            <div id = "navDiv" >
            <ul>
            <li> Dashboard </li> 
            <li> Widget </li> 
            <li> Reviews </li> 
            <li> Customers </li> 
            <li> Online Analysis </li> 
            <li> Settings </li> 
            </ul >
            </div>
        )
    }
}
class Reviews extends React.Component {
    render() {
        return ( 
        <div className = "reviewsDiv" >
            <h1> Reviews </h1> 
            <p> 1281 </p> 
            </div>
        )
    }
}

class Darkbox extends React.Component {
    render() {
        return ( 
            <div className = "darkboxDiv" >
                div in div
            </div>
        )
    }
}
class Visit extends React.Component {
    render() {
        return ( 
            <div className = "visitDiv">
            <h1> Website Visitors </h1> 
            <p> 821 </p>  
            <Darkbox/>
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return ( 
            <div>
            <Nav/>
            <Reviews/>
            <Reviews/>
            <Reviews/>
            <Visit/>
            </div>
        )
    }
}

ReactDOM.render( < App / > , document.querySelector(".main"));
