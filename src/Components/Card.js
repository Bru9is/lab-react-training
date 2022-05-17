

function Card(props){

    return(
        <div className="card">
                <img src= {props.picture} alt="card" />
            
            <div className="Id">
                <p><b>First Name: </b><span>{props.firstName}</span></p>
                <p><b>Last Name: </b><span>{props.lastName}</span></p>
                <p><b>Gender: </b><span>{props.gender}</span></p>
                <p><b>Height: </b><span>{props.height}</span></p>
                <p><b>Birth: </b><span>{props.birth.toDateString()}</span></p>
            </div>
            
        </div>
    )

}

export default Card