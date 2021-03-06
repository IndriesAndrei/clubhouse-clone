import React, { useState } from 'react';
import style from '../style/phoneConfirm.module.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

function PhoneConfirmation() {
    const [value, setValue] = useState();

    return (
        <div className={style.phoneConfirmationContainer}>
            <Link to="/" className="btn btn-success mb-3">
                Back to Home
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput 
                international 
                defaultCountry='US' 
                value={value} 
                onChange={setValue}
                className="mb-2"
            />
            <p>By entering your number, you-re agreeing to our {""}
                <span>Terms of Service and Privacy Policy. </span>
                Thanks!
            </p>
            <Link to="/code_confirm"
                className='btn btn-primary'
            >
                Next
            </Link>
        </div>
    )
}

export default PhoneConfirmation;