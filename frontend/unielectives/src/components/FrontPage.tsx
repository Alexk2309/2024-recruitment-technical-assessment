import '../styles/FrontPage.css';
import Dropdown from './DropDown';
import Subjects from './Subjects';

function FrontPage() {
  return (
    <div id='front-page-structure'>
      <img alt="landing page graphic" src='https://unilectives.devsoc.app/_next/static/media/navbar.473c44fb.svg' id='top-image'></img>
      <div id='front-page-content'>
        <div id='title-div'>
          <label>DevSoc presents</label>
          <span id='unielectives-title'>unielectives</span>
          <span id='unielectives-description'>Your one-stop shop for UNSW course and elective reviews.</span>
        </div>
          <div id ='search-bar-div'>
            <input type='text' id='search-bar' placeholder='Search for a course e.g. COMP1511'></input>
          </div>
          <Dropdown></Dropdown>
          <Subjects></Subjects>

      </div>
    </div>
  );
}

export default FrontPage;
