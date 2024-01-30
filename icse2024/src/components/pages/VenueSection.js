import React from "react";
import "../css/VenueSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function VenueSection() {
    return (
        <>
            <div className="venue-section">
                <div className="venue-container">
                    <div className="venue-container-row">
                        <div className="venue-container-col">
                            <div className="venue-text-wrapper">
                                <h2 className="venue-subheading">April 14-20</h2>
                                <h1 className="venue-heading">Centro Cultural de Belém</h1>
                                <Link to="https://www.ccb.pt/">
                                    <Button buttonStyle="btn-primary" buttonSize='btn--wide' buttonColor='primary'>EXPLORE</Button>
                                </Link>
                                
                            </div>
                        </div>
                        <div className="venue-container-col-special">
                            <div className="venue-img-wrapper">
                                <img src="images/venueSection/CCB-2.jpg" alt="Venue" className="venue-img" width='100%' />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default VenueSection;
