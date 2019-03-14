
var Product = React.createClass({

  getInitialState: function() {

    return {qty: 0};

  },



  buy: function() {

    this.setState({qty: this.state.qty +1});

  },



  render: function() {

    return (

      <div>

        <p>{this.props.name} - ${this.props.price}</p>

        <button onClick={this.buy}>Buy</button>

        <h4>Qty: {this.state. qty} item(s)</h4>

        <hr/>

      </div>

    );

  }

});



var Total = React.createClass({

  render: function() {

    return (

      <div>

        <h3>Total Cash: </h3>

      </div>

    );

  }

});



var ProductList = React.createClass({

  render: function() {

    return (

      <div>

        <Product name= "Android" price= "29"/>

        <Product name= "Apple" price= "100"/>

        <Product name= "Nokia" price= "30"/>

        <Total/>

      </div>

    );

  }

});



React.render(<ProductList/>, document.getElementById("root"));
