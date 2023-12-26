import logo from './logo.svg';
import desktop from './images/illustration-woman-online-desktop.svg';
import mobile from './images/illustration-woman-online-mobile.svg';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      
        <div className="hero">
          <img className='desktop' src={desktop}></img>
          <img className='mobile' src={mobile}></img>
        </div>
        <div className="box-hero">a</div>
        <div className='content'>
          <h1>FAQ</h1>

          <section>
          <h2>How many team members can I invite</h2><button className='arrowdown'>V</button>
          <p> You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
          </section>

          <section>
          <h2>What is the maximum file upload size?</h2><button className='arrowdown'>V</button>
          <p className='show'>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </section>

          <section>
          <h2>What is the maximum file upload size?</h2><button className='arrowdown'>V</button>
          <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </section>

          <section>
          <h2>How do I reset my password?</h2><button className='arrowdown'>V</button>
          <p>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
          </section>

          <section>
          <h2>Can I cancel my subscription?</h2><button className='arrowdown'>V</button>
          <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
          </section>

          <section>
          <h2>Do you provide additional support?</h2><button className='arrowdown'>V</button>
          <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
          </section>


        </div>
      </div>

    </div>
  );
}

export default App;
