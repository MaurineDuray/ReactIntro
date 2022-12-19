import Affichage from "./Affichage";
import Button from "./Button";

const Membre = ({nom, children, age, handleChange,  hideName, plus, handleClick}) => {
    return ( 
        <>
            <Affichage 
                nom={nom}
                age={age}
            />
            <input type="text" value={nom} onChange={handleChange} />&nbsp;
            <Button 
                plus={plus}
                vieillir={handleClick}
            />
            <button onClick={hideName}>X</button>
            {children ? <h1>{children}</h1> : null}
        </>
     );
}
 
export default Membre;

// const Membre = (props) => {
//     return ( 
//         <>
//             <h2>Membre : {props.nom.toUpperCase()} - {props.age} ans</h2>
//             {props.children ? <p>{props.children} </p>:null}
//         </>
//      );
// }
 
// export default Membre;