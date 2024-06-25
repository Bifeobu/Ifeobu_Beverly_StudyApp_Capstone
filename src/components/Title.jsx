function Title({ children }) {

    //returns the children prop 
    //anything in the Title tag will be h1
    return(
        <h1 className="title">{children}</h1>
    )
}

export default Title