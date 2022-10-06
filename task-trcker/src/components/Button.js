function Button({color, text, onClick}){//passing objects
   
return (
<button 
onClick={onClick} 
style={{backgroundColor: color}}
className="btn" >
{text}
</button>
);
}

export default Button;