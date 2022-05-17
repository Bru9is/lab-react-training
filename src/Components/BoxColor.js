function BoxColor(props){
    let hexaDecimal =
    '#' +
    ('0' + props.r.toString(16)).substr(-2) +
    ('0' + props.g.toString(16)).substr(-2) +
    ('0' + props.b.toString(16)).substr(-2);

    return(
        <div className="box" style={{background: `rgb(${props.r},${props.g},${props.b})`}}>
            <p> rgb({props.r},{props.g},{props.b}) </p> 
            <p>{hexaDecimal}</p>   
        </div>
        
    )

}

export default BoxColor