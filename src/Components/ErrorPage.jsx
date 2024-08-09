import { Link } from "react-router-dom"

function ErrorPage(){
    return(<>
        This url is invalid, please return to the <Link to="/">Home Page</Link>
    </>)
}

export default ErrorPage;