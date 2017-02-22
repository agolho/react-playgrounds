var React = require('react');
var styles = require('.././styles/style');

function MainContainer(props){
  return(
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBackground}>
      {props.children}
    </div>
  )
}
module.exports = MainContainer;
