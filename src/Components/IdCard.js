import Card from "./Card"

function IdCard() {
    
    return(
        <>
            <Card 
            picture = "https://randomuser.me/api/portraits/men/44.jpg"
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            />
            <Card 
            picture = "https://randomuser.me/api/portraits/women/44.jpg"
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            />
        </>
    )

}

export default IdCard