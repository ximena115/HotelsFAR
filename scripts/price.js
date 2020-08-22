class Price extends React.Component {
  render() {
    const { price } = this.props;

    let icons = [];
    for (var i = 0; i < price; i++) {
      if (i >= price) {
      }
      icons.push(<i className="fas fa-dollar-sign" key={i}></i>);
    }
    console.log(price);
    return (
      <div className="info">
        <h4 className="infoContent">{icons}</h4>
      </div>
    );
  }
}
