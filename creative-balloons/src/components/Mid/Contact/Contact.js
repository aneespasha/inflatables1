import React from 'react';
import './Contact.css'
function Contact(params) {
    return (
        <section className="conSecRow">
            <div className='ConInnerSec jxtStart '>
                <div className="col1 txtStrt" id='disBlock'>
                    <div className=" heading dark disBlock">CONTACT DETAILS
                        <div className="condetails">
                            <div className="conPerson disFlex">
                                <div className='cntctPicpan'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8 16.5C10.0726 14.302 13.9051 14.1986 16 16.5M14.2179 9.75C14.2179 10.9926 13.2215 12 11.9925 12C10.7634 12 9.76708 10.9926 9.76708 9.75C9.76708 8.50736 10.7634 7.5 11.9925 7.5C13.2215 7.5 14.2179 8.50736 14.2179 9.75Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div className="cntactTextpan">
                                    <div>Contact person</div>
                                    <div className="text">seema mohammad (Director)</div>
                                </div>
                            </div>
                            <div className="address disFlex">
                                <div className="cntctPicpan">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="#141B34" stroke-width="1.5" />
                                        <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="#141B34" stroke-width="1.5" />
                                    </svg>
                                </div>
                                <div className="cntactTextpan">
                                    <div> Address:</div>
                                    <div >Ganesh sky Balloon</div>
                                    <div className="text">Head Office D-/155,street No.7,<br />
                                        sultanpuri,New Delhi - 110086, Delhi,<br />
                                        India
                                    </div>
                                </div>
                            </div>
                            <div className="callUs disFlex">
                                <div className="cntctPicpan">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <div className="cntactTextpan">
                                    <div>Call us:</div>
                                    <div className="text">0804764734</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <div className="heading">CONTACT US</div>
                    <div className='form'>
                        <label> <input type="text" id='label' placeholder='requirements' /></label>
                        <label><input type="text" id='label' placeholder='number' /></label>
                        <label><input type="text" id='label' placeholder='name' /></label>
                    </div>
                    {/* <input type="text" id="requirements" placeholder="To Get Best QUOTES Discribe Your Requirements In Details Like in:
                                - What Are You Looking For
                                - Features / Sidpecifications
                                - Application / Usage
                                - Minimum Order Quantity, etc">
                            <input type="text" id="number" placeholder="Enter Your Phone Number">
                                <input type="text" id="name" placeholder="Enter Your Name"> */}

                    <button type="button">CONTACT US</button>
                </div>
            </div>
        </section>
    );
}
export default Contact;