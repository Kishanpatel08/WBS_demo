import React from 'react';
import './whoattend.css';
import { WhoAttendData, WhoAttendPeopleData } from '../../data';

const WhoAttend = () => {
    return (
        <section className="who_attends">
            <div className="container">
                <div className="who_attends_inr">
                    <div className="title_box_small">
                        <h2>WHO ATTENDS WORLD BLOCKCHAIN SUMMIT</h2>
                    </div>
                    <p>Meet influential thought leaders, innovative solution providers and industry peers - all under one roof</p>
                    <div className="who_attends_sector d-flex align-items-center justify-content-between">
                        {WhoAttendData && WhoAttendData.length > 0 && WhoAttendData.map((data, index) => {
                            return (
                                <div key={`who_attends_sector_item ${index}`} className="who_attends_sector_item">
                                    <small> {data.Sector}</small>
                                </div>
                            )
                        })}

                    </div>
                    <div className="who_attends_points">
                        <ul className="d-flex align-items-center justify-content-between flex-wrap">
                            {WhoAttendPeopleData && WhoAttendPeopleData.length > 0 && WhoAttendPeopleData.map((data, index) => {
                                return (
                                    <li key={`who_attends_points ${index}`}>  {data.people}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhoAttend