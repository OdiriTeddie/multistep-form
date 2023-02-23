import './thank-you.styles.scss'
import ThankYouIcon from '../../assets/images/icon-thank-you.svg'

const ThankYou = () => {
    return(
        <div className="thank-you flex">
            <div>
                <img src={ThankYouIcon} alt="" />
            </div>
            <div className="thank-you__message flow-space">
                <h2>Thank you!</h2>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}

export default ThankYou