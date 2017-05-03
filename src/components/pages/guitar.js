import React from "react";
import NotFound from "./notfound";
import GuitarData from "../../data/guitars";

export default class Guitar extends React.Component {
    render() {
        const id = this.props.params.guitarId;
        const guitar = GuitarData.find((g) => g.id == id);

        if (!guitar) {
            return <NotFound />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">                        
                        <h1>{guitar.name} {guitar.manufacturer}</h1>
                    </div>
                </div>
                <div className="main row">
                    <div className="col-md-6">
                        <img className="img-responsive" src={"../img/"+guitar.image} />
                    </div>
                    <div className="col-md-6">
                        <h3>Description</h3>
                        <ul>
                            <li>Name: {guitar.name}</li>
                            <li>Manufacturer: {guitar.manufacturer}</li>
                            <li>Owner: {guitar.owner}</li>
                            <li>Albums: {guitar.albums}</li>
                            <li>Info: {guitar.info}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}