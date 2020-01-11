import React from 'react';
import '../styles/Greetings.css'


const Greetings = ({lang, children}) => {
    const language = {
        'es': 'Hola',
        'de': 'Hallo',
        'fr': 'Bonjour',
        'en': 'Hello'
    }
    return ( 
        
        <h3 className="helloLanguage">{`${language[lang]} ${children}`}</h3>
     );
}
 
export default Greetings;