const Button=({children,delateItem})=>{
    return(
        <button onClick={delateItem} style={{padding:'8px 20px', border:'none', backgroundColor:'lightblue',fontWeight:'bold',borderRadius:'4px'}}>
            {children}
        </button>
    )
}

export default Button