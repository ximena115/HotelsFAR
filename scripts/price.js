class Price extends React.Component {
  render() {
    const { cost } = this.props;

    let dollarSing = [];
    for (var i = 0; i < cost; i++) {
      if (i >= cost) {
      }
      dollarSing.push(<i className="fas fa-dollar-sign" key={i}></i>);
    }
   
    return (
      <div className="info">
        <h4 className="infoContent">{dollarSing}</h4>
      </div>
    );
  }
}
