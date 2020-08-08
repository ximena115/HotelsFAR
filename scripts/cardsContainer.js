class CardsContainer extends React.Component {
  
  
  render() {
      const { data } = this.props
     
      return (
        <div className="cardsContainer">
          
          
          {data.map(hotels=> (
           <Card key={hotels.slug} {...hotels}/>


          ))}
        </div>
      );
    }
  }
  