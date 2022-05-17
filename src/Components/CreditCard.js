
function CreditCard(props){

    return(
        <div className="credcard">
            <p><span>{props.type}</span></p>
            <p><span>{props.number}</span></p>
            <p><span>{props.expirationMonth}</span></p>
            <p><span>{props.expirationYear}</span></p>
            <p><span>{props.bank}</span></p>
            <p><span>{props.owner}</span></p>
            <p><span>{props.bgColor}</span></p>
            <p><span>{props.color}</span></p>
        </div>
    )

}

export default CreditCard