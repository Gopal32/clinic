import React from 'react'

const BookAppt = () =>{

    return(
        <>
        <div className="bookappt_main">
            <div className="main_head">
                <h3>Book an Appointment</h3>
            </div>
            <form>
                <div className="field">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="last Name" style={{ marginLeft:"10px"}}/>
                </div>
                <div className="field">
                    <input type="text" placeholder="Email Id" />
                    <input type="text" placeholder="Phone Number" style={{ marginLeft:"10px"}}/>
                </div>
                <div className="field">
                    <input type="date" placeholder="DOB" />
                    <select className="select" style={{marginLeft:"10px"}}>
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="field">
                    <select className="select">
                        <option>Select City</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Bangalore</option>
                    </select>
                    <select className="select" style={{marginLeft:"10px"}}>
                        <option>Select Clinic</option>
                        <option>Krione clinic T Nagar</option>
                        <option>Krione clinic Madipakkam</option>
                    </select>
                </div>
                <div className="field">
                    <select className="select">
                        <option>Select Speciality</option>
                        <option>Cardiologist</option>
                        <option>Urologist</option>
                    </select>
                    <select className="select" style={{marginLeft:"10px"}}>
                        <option>Select Doctor</option>
                        <option>Dr. Rahul Masam</option>
                        <option>Dr. Darshan Manjrekar</option>
                        <option>Dr. Deepak Pal</option>
                    </select>
                </div>
                <div className="field">
                    <input type="date" placeholder="DOB" />
                    <select className="select" style={{marginLeft:"10px"}}>
                        <option>Select Slot</option>
                        <option>11:30 am</option>
                        <option>12:00 pm</option>
                    </select>
                </div>
                <div className="field1">
                    <select className="select">
                        <option>Select Mode</option>
                        <option>Physical Consult</option>
                        <option>Tele Consult</option>
                    </select>
                    <input type="checkbox" />
                    <h3>I Agree "<span style={{color:"rgb(25, 103, 210)"}}>Patient Information Consent</span>"</h3>
                </div>
                <button className="btn_sub">Submit</button>
            </form>
        </div>
        </>
    )
}

export default BookAppt;
