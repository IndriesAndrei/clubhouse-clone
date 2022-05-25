import style from '../style/phoneConfirm.module.css';
import { Link } from 'react-router-dom';

export default function AllowNotification() {
    return (
        <div className={style.phoneConfirmationContainer}>
            <div className='text-center'>
                <h1 className="mb-4">Last, important step!</h1>
                <h1 className='mb-3'>Enable notification to know when people are talking</h1>
                <div className={style.notificationContainer}>
                    <div className='p-3'>
                        <h3>"Clubhouse" Would Like to Send You Notifications</h3>
                        <p>Notifications may include alerts, sounds and icon badges</p>
                    </div>
                    <div className={style.action_btn}>
                        <Link to="/">Don't Allow</Link>
                        <Link to="/">Allow</Link>
                        <img src="https://www.downloadclipart.net/large/22840-pointer-finger-design.png" className={style.hand_icon} alt="hand icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}