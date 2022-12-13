import Affichage from "./Affichage";
const Membre = ({nom, children, age}) => {
    return ( 
        <>
            <Affichage 
                nom={nom}
                age={age}
            />
            <input type="text" value={nom} />&nbsp;
            <button>X</button>
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