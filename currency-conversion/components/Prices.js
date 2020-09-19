class Prices extends React.Component {
  state = {
    currency: "USD",
  };

  render() {
    let list = "";

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            {console.log(this.props.bpi)}
            Bitcoin rate for {this.props.bpi.bpi.USD.description}:{" "}
            <span className="badge badge-primary">
              {this.props.bpi.bpi.USD.code}
            </span>{" "}
            <strong>{this.props.bpi.bpi.USD.rate}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Prices;
