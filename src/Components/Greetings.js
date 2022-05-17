function Greetings(props){
    function greeting(lang){
        switch (lang){
            case 'de':
            return 'Hallo';
            case 'en':
            return 'Hello';
            case 'es':
            return 'Hola';
            case 'fr':
            return 'Bonjour';
        }
    }

    return(
        <p className="lang"> {greeting(props.lang)} {props.children}</p>
    )

}

export default Greetings