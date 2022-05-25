import style from '../style/phoneConfirm.module.css';
import { Link } from 'react-router-dom';

function CodeConfirm() {
    return (
        <div className={style.phoneConfirmationContainer}>
            <Link to="/get_username" className="btn btn-success mb-3">Back</Link>
            <div className='text-center'>
                <h1 style={{
                    width: '100%', 
                    marginBottom: '10px'
                }}>
                    Enter the code we just texted you
                </h1>
                <input type="text" 
                    style={{ 
                        width: '100%',  
                        border: 'none', 
                        textAlign: 'center', 
                        outline: 'none'}}
                />
                <p className='mt-2' style={{ maxWidth: '100%', }}>Didn't received it? <span>Tap to resend.</span></p>
            </div>
            <Link to='/allow_notification' 
                className='btn btn-primary d-flex align-items-center mt-2'
            >Next</Link>
        </div>
    )
}

export default CodeConfirm;