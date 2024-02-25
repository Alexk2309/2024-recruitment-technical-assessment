import '../styles/SideBar.css';
import uniElectivesIcon from '../assets/unilectives.svg';
import bookIcon from '../assets/book_icon.svg';
import termsIcon from '../assets/terms_icon.svg';
import expandIcon from '../assets/expand_icon.svg'
import myAccountIcon from '../assets/my_account_icon.svg'
import darkModeIcon from '../assets/darkmode_icon.svg'
import loginIcon from '../assets/login_icon.svg'


function SideBar() {
  return (
    <div id='side-bar'>
      <div id='side-bar-wrapper'>
        <div>
          <img alt='Website Icon' id='uni-electives-icon' src={uniElectivesIcon}></img>
          <img alt='Book Icon' className='icon' src={bookIcon}></img>
          <img alt='Terms Icon' className='icon' src={termsIcon}></img>
        </div>

        <div id='bottom-box'>
          <img alt='Expand Icon' className='icon' src={expandIcon}></img>
          <img alt='My Account Icon' className='icon' src={myAccountIcon}></img>
          <img alt='Dark Mode Icon' className='icon' src={darkModeIcon}></img>
          <img alt='Login Icon' className='icon' src={loginIcon}></img>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
