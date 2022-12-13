

const Affichage = ({age,nom}) => {
    return ( 
        <h2
        style={{backgroundColor: age < 35 ? 'dodgerblue':'crimson', color: 'white'}}
        >
            Membre: {nom.toUpperCase()} - {age} ans
        </h2>
     );
}
 
export default Affichage;