import { NavLink } from "react-router-dom";

function TitleBox(props){
    return(
        <div className="all-title-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>{props.title}</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/home">Home</NavLink></li>
                        <li className="breadcrumb-item active">{props.title}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TitleBox;