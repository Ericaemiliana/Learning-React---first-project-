// Code goes here
var Product = React.createClass({
  
  buy: function(){
    alert("You bought an android mobile");
  },
  render: function(){
    return(
    <div>
      <p> android --- $199</p>
      <button onClick= {this.buy}>Buy</button>
    </div>
  );
  }
});

React.render(<Product/>, document.getElementById("root"));
