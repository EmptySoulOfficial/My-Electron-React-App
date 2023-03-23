import './DemoContent.css'
import { getLang } from '../../../assets/js/ELanguage/ELanguage'
import Icon from '../../../assets/js/Icon/Icon'
import logo from '../../../logo.svg';

function DemoContent({packageversion}) {

    const eLang = getLang()

    return (
        <div className="DemoContent">
            <img src={logo} className="App-logo" alt="logo" />
                <p>
                  {eLang.reactboilerplate} <Icon name="heart" size="25" color=""/>
                </p>
                <a
                  className="App-link"
                  href="https://github.com/EmptySoulOfficial/My-Electron-React-App/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open GitHub
                </a>
            <p className="text-watermark">Version: {packageversion}</p>
      </div>
    )
}

export default DemoContent
