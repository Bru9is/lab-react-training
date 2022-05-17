function Random(props){
    function minmax (min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    
    
    return(
        <p className="minmax"> Random value between: {props.min} and {props.max} =>
        {minmax(props.min, props.max)}</p>
    )

}

export default Random