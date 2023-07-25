import React from 'react';
import './Login.css'

const Login = () => {
    // const containerStyle = {
    //     backgroundColor: '#9A616D',
    // };

    const cardStyle = {
        borderRadius: '1rem',
    };

    const imgStyle = {
        borderRadius: '1rem 0 0 1rem',
    };

    // const logoStyle = {
    //     color: '#ff6219',
    // };

    const textStyle = {
        letterSpacing: '4px',
        textAlign: 'center',
        height: '20px',

    };

    const linkStyle = {
        color: '#393f81',
    };

    return (
        <div>
            <section className="vh-90" >
                <div className="container py-5 h-90">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={cardStyle}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            // src='img/wave.png'
                                            alt="login form"
                                            className="img-fluid"
                                            style={imgStyle}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-5 p-lg-6 ">
                                            <form>
                                                <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '30px', padding: '10px' }}>WELCOME</h1>
                                                <div className="d-flex align-items-center mb-2 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-11" style={{ paddingLeft: '90px' }}></i>
                                                    <span className=""><img src="https://hopingminds.com/wp-content/uploads/2023/01/Asset-5.png" alt="" style={{ width: '150px', height: 'auto' }} /></span>
                                                    {/* <span className="h1 fw-bold mb-0"><img src="img/cartoon-573.gif" alt="" /></span> */}
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3 " style={textStyle}>Sign into your account</h5>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                    <input type="email" id="form2Example17" className="form-control" />

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                                    <input type="password" id="form2Example27" className="form-control " />

                                                </div>
                                                <div className="pt-1 mb-2">
                                                    <button className="btn1 btn-success" style={{alignItem:'center'}}>Login</button>
                                                </div>
                                                <a className="fw-bold" href="#!" style={{ fontFamily: '-moz-initial', float: 'right' }}>Forgot password?</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
