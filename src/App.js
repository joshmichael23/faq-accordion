import logo from './logo.svg';
import desktop from './images/illustration-woman-online-desktop.svg';
import mobile from './images/illustration-woman-online-mobile.svg';
import './style.css';
import { useState } from 'react';

function App() {
  const [sectionOne, setSectionOne] = useState(false);
  const [sectionTwo, setSectionTwo] = useState(false);
  const [sectionThree, setSectionThree] = useState(false);
  const [sectionFour, setSectionFour] = useState(false);
  const [sectionFive, setSectionFive] = useState(false);
  

  return (
    <div className="App">
      <div className='wrapper'>
      
        <div className="hero">
          <img className='desktop' alt="Woman facing the monitor" src={desktop}></img>
          <img className='mobile' alt="Woman facing the monitor" src={mobile}></img>
        </div>
        <div className="box-hero">a</div>
        <div className='content'>
          <h1>FAQ</h1>

          <section>
            <label for="sectionOne">
              <h2 className={sectionOne ? 'active': ''}>How many team members can I invite</h2>
              <button id="sectionOne" className={sectionOne ? 'arrowdown active': 'arrowdown'} onClick={()=> setSectionOne(sectionOne => !sectionOne)}></button>
            </label>
            <p className={sectionOne ? 'show': ''}> You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
          </section>

          <section>
            <label>
              <h2 className={sectionTwo ? 'active': ''}>What is the maximum file upload size?</h2>
              <button className={sectionTwo ? 'arrowdown active': 'arrowdown'} onClick={()=> setSectionTwo(sectionTwo => !sectionTwo)}></button>
            </label>
            <p className={sectionTwo ? 'show': ''}>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </section>

          <section>
          <label>
            <h2 className={sectionThree ? 'active': ''}> How do I reset my password?</h2>
            <button className={sectionThree ? 'arrowdown active': 'arrowdown'} onClick={()=> setSectionThree(sectionThree => !sectionThree)}></button>
          </label>
          <p className={sectionThree ? 'show': ''}>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
          </section>

          <section>
          <label>
            <h2 className={sectionFour ? 'active': ''}>Can I cancel my subscription?</h2>
            <button className={sectionFour ? 'arrowdown active': 'arrowdown'} onClick={()=> setSectionFour(sectionFour => !sectionFour)}></button>
          </label>
          <p className={sectionFour ? 'show': ''}>Yes! Send us a message and we’ll process your request no questions asked.</p>
          </section>

          <section>
          <label>
            <h2 className={sectionFive ? 'active': ''}>Do you provide additional support?</h2>
            <button className={sectionFive ? 'arrowdown active': 'arrowdown'} onClick={()=> setSectionFive(sectionFive => !sectionFive)}></button>
          </label>
          <p className={sectionFive ? 'show': ''}>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
          </section>


        </div>
      </div>

    </div>
  );
}

export default App;
