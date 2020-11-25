import React from "react";
import "../faq/Faq.css";
import age3 from '../faq/images/age3.jpg';
import age7 from '../faq/images/age7.jpg';
import age12 from '../faq/images/age12.jpg';
import age16 from '../faq/images/age16.jpg';
import age18 from '../faq/images/age18.jpg';
import Violence from '../faq/images/violence.jpg';
import BadLanguage from '../faq/images/badlanguage.jpg';
import Gambling from '../faq/images/gambling.jpg';
import SexualContent from '../faq/images/sexualcontent.jpg';
import Drugs from '../faq/images/drugs.jpg';

const FAQ = () => {
  return (
    <div className="faq-wrapper">
    <div class="faq-header">Frequently Asked Questions</div>
      <div className="faq-header">
        <div className="faq-content">
          <div class="faq-question">
            <input id="q0" type="checkbox" class="panel" />
            <div class="plus">+</div>
            <label for="q0" class="panel-title">
              What is this site?
            </label>
            <div class="panel-content">
              <p>Bloody hard work</p>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div class="faq-question">
            <input id="q1" type="checkbox" class="panel" />
            <div class="plus">+</div>
            <label for="q1" class="panel-title">
              What are the age ratings?
            </label>
            <div class="panel-content">
                <img className="age-pic" src={age3} alt = "age 3" />
                <h2>PEGI 3</h2>
                <br/>
                <p>The content of games with a PEGI 3 rating is considered suitable for all age groups. The game should not contain any sounds or pictures that are likely to frighten young children. A very mild form of violence (in a comical context or a childlike setting) is acceptable. No bad language should be heard.</p>
                <img className="age-pic" src={age7} alt = "age 7" />
                <h2>PEGI 7</h2>
                <br/>
                <p>Game content with scenes or sounds that can possibly frightening to younger children should fall in this category. Very mild forms of violence (implied, non-detailed, or non-realistic violence) are acceptable for a game with a PEGI 7 rating.</p>
                <img className="age-pic" src={age12} alt = "age 12" />
                <h2>PEGI 12</h2>
                <br/>
                <p>Video games that show violence of a slightly more graphic nature towards fantasy characters or non-realistic violence towards human-like characters would fall in this age category. Sexual innuendo or sexual posturing can be present, while any bad language in this category must be mild. Gambling as it is normally carried out in real life in casinos or gambling halls can also be present.</p>
                <img className="age-pic" src={age16} alt = "age 16" />
                <h2>PEGI 16</h2>
                <br/>
                <p>This rating is applied once the depiction of violence (or sexual activity) reaches a stage that looks the same as would be expected in real life. The use of bad language in games with a PEGI 16 rating can be more extreme, while games of chance, and the use of tobacco, alcohol or illegal drugs can also be present.</p>
                <img className="age-pic" src={age18} alt = "age 18" />
                <h2>PEGI 18</h2>
                <br/>
                <p>The adult classification is applied when the level of violence reaches a stage where it becomes a depiction of gross violence, apparently motiveless killing, or violence towards defenceless characters. The glamorisation of the use of illegal drugs and explicit sexual activity should also fall into this age category.</p>  
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div class="faq-question">
            <input id="q2" type="checkbox" class="panel" />
            <div class="plus">+</div>
            <label for="q2" class="panel-title">
              What do the labels mean?
            </label>
            <div class="panel-content">
            <img className="age-pic" src={Violence} alt = "violence label" />
            <h2>Violence</h2>
            <br/>
            <p>The game contains depictions of violence. In games rated PEGI 7 this can only be non-realistic or non-detailed violence. Games rated PEGI 12 can include violence in a fantasy environment or non-realistic violence towards human-like characters, whereas games rated PEGI 16 or 18 have increasingly more realistic-looking violence.​</p>
            <img className="age-pic" src={BadLanguage} alt = "explicit language label" />
            <h2>Explicit Language</h2>
            <br/>
            <p>The game contains bad language. This descriptor can be found on games with a PEGI 12 (mild swearing), PEGI 16 (e.g. sexual expletives or blasphemy) or PEGI 18 rating (e.g. sexual expletives or blasphemy).</p>
            <img className="age-pic" src={Gambling} alt = "gambling label" />
            <h2>Gambling</h2>
            <br/>
            <p>The game contains elements that encourage or teach gambling. These simulations of gambling refer to games of chance that are normally carried out in casinos or gambling halls. Games with this sort of content are PEGI 12, PEGI 16 or PEGI 18.</p>
            <img className="age-pic" src={SexualContent} alt = "sexual content label" />
            <h2>Sex and Nudity</h2>
            <br/>
            <p>This content descriptor can accompany a PEGI 12 rating if the game includes sexual posturing or innuendo, a PEGI 16 rating if there is erotic nudity or sexual intercourse without visible genitals or a PEGI 18 rating if there is explicit sexual activity in the game. Depictions of nudity in a non-sexual content do not require a specific age rating, and this descriptor would not be necessary.</p>
            <img className="age-pic" src={Drugs} alt = "drugs label" />
            <h2>Drugs</h2>
            <br/>
            <p>The game refers to or depicts the use of illegal drugs, alcohol or tobacco. Games with this content descriptor are always PEGI 16 or PEGI 18.</p>
            
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div class="faq-question">
            <input id="q3" type="checkbox" class="panel" />
            <div class="plus">+</div>
            <label for="q3" class="panel-title">
              How do we rate games?
            </label>
            <div class="panel-content">
                <p>Many console and PC games are still released as a physical product and sold via retailers. To ensure that these games always display the correct age classification on the box, a robust procedure is crucial:</p>
                <ul className="faq-list">
                    <li>Prior to release, publishers fill in a content assessment form for every version of their product. This questionnaire enquires about the content of the product, looking at the possible presence of violence, sex, bad language and other audiovisual content that may be considered as not appropriate for all ages.</li>
                    <li>Based on the responses  from the publisher, PEGI's online rating system automatically determines a provisional age rating with content descriptors.</li>
                    <li>The PEGI administrators receive the game from the publisher and thoroughly review the provisional age rating. NICAM takes care of the games rated 3 and 7, whereas the VSC Rating Board reviews the 12, 16 and 18 ratings.</li>
                    <li>Depending on the review, the administrators approve or alter the provisional rating, and PEGI delivers a license to the publisher for the use of the age rating icon and the relevant content descriptor(s).</li>
                    <li>The publisher is now authorised to reproduce the appropriate age rating logo and content descriptor(s) on the packaging or at the digital point of sale in accordance with the PEGI Labelling Guidelines and the PEGI Code of Conduct.</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div class="faq-question">
            <input id="q4" type="checkbox" class="panel" />
            <div class="plus">+</div>
            <label for="q4" class="panel-title">
              How do I post a review?
            </label>
            <div class="panel-content">
                <p>Ask Tam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
