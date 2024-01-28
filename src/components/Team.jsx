import React from 'react'

const Team = () => {
    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ "maxWidth": "600px" }}>
                        <h5 className="fw-bold  text-uppercase">Team Members</h5>
                    </div>
                    <div className="row g-5 ">
                        <div className="card " style={{ width: "30rem", marginRight: "15%", border:'AppWorkspace' }}>
                            <img src="./image/vasudha.jpg" className="  " alt="..." style={{borderRadius:"10rem", marginTop:"2rem"}} />
                            <div className="card-body">
                                <div className="text-center py-4">
                                    <h4 className="">Vasudha Gokhale</h4>
                                    <p className="text-uppercase m-0">Front developer</p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default Team