// Code goes here

var Hello = React.createClass({
  render:function(){
    return (
      <h2>Hello World </h2>);
  }
});
React.render(<Hello/>, document.getElementById("root"));