class App extends React.Component {
  state = {
    hotels: hotelsData,
    filtersInfo : {
      initialDate: moment(),
      finalDate: moment().add(15, 'days'),
      country:"",
      price:"",
      rooms:"",
    }

  };
    
  handleInput = (e) => {
    e.persist()   
    this.setState({
      filtersInfo : {
        ...this.state.filtersInfo ,
        [e.target.name]: e.target.value
         
        
      }
     
    }) 
    //selection(filtersInfo);
  
   //console.log(selection(hotels,filtersInfo));
}   


// selection = (p,f) => {
  // this.state.hotels.filter( obj => obj.country === selectionData.country )
  //p.filter( obj => obj.country === f.country )
//}

  render() { 
    
    
   const { filtersInfo, hotels } = this.state 
   //let selection =hotels;
   //if (filtersInfo.country!="" ) {
   // selection=  hotels.filter( obj => obj.country === filtersInfo.country &&  obj.price === filtersInfo.price) 
   //} else {
     
  // }
  let selection= hotels
  if (filtersInfo.country!="") {
    selection=  hotels.filter( obj => obj.country === filtersInfo.country)

    if (filtersInfo.price!="") {
      selection=  hotels.filter( obj => obj.price === filtersInfo.price)
    }
  }else{
    selection= hotels

  }
    
 
   console.log(selection);
   console.log(hotels);

   // console.log(filtersInfo)
    return (
      <div>
       <Header 
          filtersInfo={filtersInfo} 
       /> 
       <Filters 
          onChange={this.handleInput} 
          data={hotels}
       />
       <CardsContainer  
          data={selection}
       />
      </div>
       )}
}

const root = document.getElementById("app");
ReactDOM.render(<App />, root);
