import './App.css';
import './normalize.css';
import img1 from "./corona.jpg.webp"
import img2 from "./Veikkaus.jpg.webp"
function App() {
  return (
    <div className="App">
      <div className="titleblue">
        <TitleHeader/>
      </div>
      <div className="subwhite">
        <SubHeader/>
      </div>
      <div className="NoticeContainer">
        <Notice title="DIAMOND OF THE DAY" value=" Klarna challenges installment services to price competition - The widespread “buy now, pay later” payment method can encourage reckless borrowing"/>
        <Notice title="SATURDAY" value=" Physical book under threat: Now book professionals are explaining why the consequences of the loss of print are fatal"/>
        <Notice title="ADVERTISEMENT" value=" Start your morning with Hesar. Check it out now for 2 weeks for free!" class="Advert"/>
      </div>
      <div className="NewsBodyContainer container">
        <div className="NewsBlockContainer">
          <NewsBlock src={img1} topicColor="pink" topic="coronavirus" tag="Welfare" time="6:13" value="Piia's husband refused coroner vaccinations, and that led to his death - Now the widow tells her husband of &#34;vain death&#34;"/>
          <NewsBlock src={img2} topicColor="scarlett" topic="Gambling" tag="HS Visio" time="6:14" value="Young politicians feel that Veikkaus' monopoly position has come to an end - and so does the company itself. This is how the future of gambling is built in Finland."/>
        </div>
        <div className="MostReadTopContainer">
          <div className="MostReadHeader">
            Most read
          </div>
          <div className="MostReadItemContainer">
            <MostRead order="1" topic="coronavirus" value="Piia's husband refused coroner vaccinations, and that led to his death - Now the widow tells her husband of &#34;vain death&#34;" />
            <MostRead order="2" topic="Housing" value="A resident found an armored Mersu in his own parking lot"/>
            <MostRead order="3" topic="consumer" value="Neighbor's smoking grandmother smoked mountain runner Susanna Saapung out of the apartment: &#34;I couldn't be in the cabin anymore&#34;"/>
            <MostRead order="4" topic="HS-analysis" value="Pipeline assault in Lahti threatens to become costly for the victim: the Court of Appeal ordered him to pay two guards more than 13,000 euros in legal costs"/>
            <MostRead order="5" topic="coronavirus" value="&#34;He’s kind of terrorizing the series&#34; - The most beloved figure in Grey’s Anatomy was suddenly written out of the series six years ago, now it was revealed why"/>
            <MostRead order="6" topic="HS Vantaa" value="The physical book is under threat: Now book professionals are explaining why the consequences of print loss are fatal"/>
            <MostRead order="7" topic="Television" value="The dramatic burning of the house caused Minka Kuustonen to change the direction of her life - She decided to see her life happy instead of tragedy"/>
          </div>
        </div>

      </div>
    </div>
  );
}

function TitleHeader() {
  return (
    <div className="TitleHeader container">
      <div className="HSLogo">
      </div>
      <TitleSection value="News"/>
      <TitleSection value="Foliage"/>
      <div className="TitleMiscContainer">
        <TitleSection value="Room" class="SubscriptionButton Boldened"/>
        <TitleSection value="Log in" class="Boldened" svg="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,15.370875 C9.74381308,15.370875 7.84401072,16.2183182 7.62113217,16.9048142 L7.60372928,16.9777055 L7.33292135,19.6968871 C8.69374868,20.5238067 10.2912639,21 12,21 C13.7083154,21 15.3054647,20.5240411 16.6660736,19.6974978 L16.4008916,17.0260638 C16.2898692,16.2799933 14.3356092,15.370875 12,15.370875 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,14.4015645 3.94063642,16.5834316 5.47358219,18.1972742 L5.61951658,16.7316862 C5.92092353,14.7062315 8.79194002,13.370875 12,13.370875 C15.1152653,13.370875 17.9134018,14.631157 18.3525315,16.6041236 L18.3851043,16.7800445 L18.5264178,18.1972742 C20.0593636,16.5834316 21,14.4015645 21,12 C21,7.02943725 16.9705627,3 12,3 Z M12,5 C14.2087221,5 16,6.79078303 16,9 C16,11.2085695 14.2085695,13 12,13 C9.79078303,13 8,11.2087221 8,9 C8,6.7906305 9.7906305,5 12,5 Z M12,7 C10.8952,7 10,7.8952 10,9 C10,10.104 10.8952,11 12,11 C13.104,11 14,10.104 14,9 C14,7.8952 13.104,7 12,7 Z"/>
        <TitleSection value="Hae" class="Boldened" svg="M10,1 C14.9705627,1 19,5.02943725 19,10 C19,12.124779 18.2636898,14.0775836 17.0323074,15.6171757 L22.2426407,20.8284271 C22.633165,21.2189514 22.633165,21.8521164 22.2426407,22.2426407 C21.8521164,22.633165 21.2189514,22.633165 20.8284271,22.2426407 L15.6171757,17.0323074 C14.0775836,18.2636898 12.124779,19 10,19 C5.02943725,19 1,14.9705627 1,10 C1,5.02943725 5.02943725,1 10,1 Z M10,3 C6.13400675,3 3,6.13400675 3,10 C3,13.8659932 6.13400675,17 10,17 C13.8659932,17 17,13.8659932 17,10 C17,6.13400675 13.8659932,3 10,3 Z"/>
        <TitleSection value="Menu" class="Boldened" svg="M22,17 C22.5522847,17 23,17.4477153 23,18 C23,18.5522847 22.5522847,19 22,19 L2,19 C1.44771525,19 1,18.5522847 1,18 C1,17.4477153 1.44771525,17 2,17 L22,17 Z M22,11 C22.5522847,11 23,11.4477153 23,12 C23,12.5522847 22.5522847,13 22,13 L2,13 C1.44771525,13 1,12.5522847 1,12 C1,11.4477153 1.44771525,11 2,11 L22,11 Z M22,5 C22.5522847,5 23,5.44771525 23,6 C23,6.55228475 22.5522847,7 22,7 L2,7 C1.44771525,7 1,6.55228475 1,6 C1,5.44771525 1.44771525,5 2,5 L22,5 Z"/>
      </div>
    </div>
  );
}

function SubHeader() {
  return (
    <div className="SubHeader container">
      <SubSection value="Front page"/>
      <SubSection value="HS Visio"/>
      <SubSection value="Most read"/>
      <SubSection value="The lastest"/>
      <SubSection value="Policy"/>
      <SubSection value="City"/>
      <SubSection value="Culture"/>
      <SubSection value="Science"/>
      <SubSection value="Welfare"/>
      <SubSection value="Food"/>
      <SubSection value="Now"/>
    </div>
  );
}

function SubSection(props) {
  return (
    <div className="SubSection">
      {props.value}
    </div>
  );
}
function TitleSection(props) {
  var classString = "TitleSection ";
  if (!!props.class) {
    classString += props.class;
  }
  var svg = '';
  if (!!props.svg){
    svg = <svg><g stroke="none" stroke-width="1"><path d={props.svg}></path></g></svg>;
  }
  return (
    <div className={classString}>
      <div>{props.value}</div>
      {svg}
    </div>
  );
}

function Notice(props) {
  var classString = "Boldened Notice container ";
  if (!!props.class) {
    classString += props.class;
    }
  return (
    <div className={classString}>
      <span className="InlineTitle">{props.title}</span>:{props.value}
    </div>
  );
}

function NewsBlock(props) {
  var titleClass = "NewsBlockTitle " + props.topicColor;
  return (
    <div className="NewsBlock">
      <div className="NewsBlockImageContainer">
        <img src={props.src}/>
      </div>
      <div>
        <span class={titleClass}>{props.topic} | </span>{props.value}
      </div>
      <div className="NewsBlockFooter">
        <div>
          {props.tag} {props.time}
        </div>
        <div>
          <svg className="NewsBlockSVG">
            <path d="M18.5,2 C18.7454599,2 18.9496084,2.17687516 18.9919443,2.41012437 L19,2.5 L19,22 L12,17.6067969 L5,22 L5,2.5 C5,2.25454011 5.17687516,2.05039163 5.41012437,2.00805567 L5.5,2 L18.5,2 Z M18,3 L6,3 L6,20.028 L12,16.3673948 L18,20.029 L18,3 Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function MostRead(props) {
  return (
    <div className="MostRead">
      <div className="Rank">
        {props.order}
      </div>
      <div className="MostReadContentContainer">
        <span className="MostReadItemTopic">{props.topic} | </span>{props.value}
      </div>
    </div>
  );
}

export default App;
