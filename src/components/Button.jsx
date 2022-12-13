const Button = ({vieillir, plus}) => {
    return ( 
        <button onClick={vieillir}>
            +{plus}
        </button>
     );
}
 
export default Button;