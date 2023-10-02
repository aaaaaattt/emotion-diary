import "./Button.css"

const Button = ({text, type, onClick }) => {
    console.log(text)
    console.log(type)
    const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return(
    <button
    className={["Button",`Button_${btnType}`].join(" ")} 
    onClick={onClick}>
    {text}
  </button>  
  ) 
};

Button.defaultProps = {
    type: "default",
};

export default Button;