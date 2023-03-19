import React, { useState } from 'react';
import './moviecollection.css';
import GaadiBox from '../Assests/GaadiBox.jpg'
import VarisuBox from '../Assests/VarisuBox.jpg'
import AvaBox from '../Assests/AvaBox.jpg'
import GindariBox from '../Assests/GindariBox.jpg'
import GajaBox from '../Assests/GajaBox.jpg'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// Call setAppElement to avoid accessibility warnings
Modal.setAppElement('#root');

export default function MovieCollection() {
  const [showGaadiModal, setShowGaadiModal] = useState(false);
  const [showVarisuModal, setShowVarisuModal] = useState(false);
  const [showAvaModal, setShowAvaModal] = useState(false);
  const [showGinModal, setShowGinModal] = useState(false);
  const [showGajaModal, setShowGajaModal] = useState(false);

  const handleGaadiModalOpen = () => {
    setShowGaadiModal(true);
  };
  const handleVarisuModalOpen = () => {
    setShowVarisuModal(true);
  };
  const handleAvaModalOpen = () => {
    setShowAvaModal(true);
  };
  const handleGinModalOpen = () => {
    setShowGinModal(true);
  };
  const handleGajaModalOpen = () => {
    setShowGajaModal(true);
  };


  const handleGaadiModalClose = () => {
    setShowGaadiModal(false);
  };
  const handleVarisuModalClose = () => {
    setShowVarisuModal(false);
  };
  const handleAvaModalClose = () => {
    setShowAvaModal(false);
  };
  const handleGinModalClose = () => {
    setShowGinModal(false);
  };
  const handleGajaModalClose = () => {
    setShowGajaModal(false);
  };

  return (
    
    <div className='MovieCollection'> 
    <span className="movies">Movies</span>
    <button className="nowShow">Now Showing</button>
    <button className="comingSoon">Coming Soon</button>
    <hr className="solid" />

    <div className='card-container'>
      <div className='cards'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card" onClick={() => handleGaadiModalOpen(true)}>
              <img src={GaadiBox} className="boximg" alt="Gaadi" />
              <div className="card-body">
                <h5 className="text">Gaadi</h5>
                <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" onClick={() => handleVarisuModalOpen(true)}>
                <img src={VarisuBox} class="boximg" alt="Varisu"/>
                <div class="card-body">
                  <h5 class="text">Varisu</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col" onClick={() => handleAvaModalOpen(true)}>
              <div class="card">
                <img src={AvaBox} class="boximg" alt="Avatar"/>
                <div class="card-body">
                  <h5 class="text">Avatar [3D]</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" onClick={() => handleGinModalOpen(true)}>
              <img src={GindariBox} class="boximg" alt="Avatar"/>
                <div class="card-body">
                  <h5 class="text">Gindari 3</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" onClick={() => handleGajaModalOpen(true)}>
                <img src={GajaBox} class="boximg" alt="Gajaman"/>
                <div class="card-body">
                  <h5 class="text">Gajaman [3D]</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
          </div>
     </div>



</div>
<Link to='/Signup'>
<button className='Signupnow'>
  <span>Sign Up</span>
</button>
</Link>


<Modal isOpen={showGaadiModal} onRequestClose={handleGaadiModalClose}>
  <h1 className='Topic'>Gaadi</h1>

  <p className='body'>Gaadi (Sinhala: ගාඩි) is a 2019 Sri Lankan Sinhala historical road film directed by Prasanna Vithanage. It is co-produced as a Sri Lankan-Indian joint production by H.D. Premasiri, Sandya Salgado for Film Island, Prasanna Vithanage Productions and Alan McAlex and Ajay Rai for Mumbai-based Jar Pictures, an Indian motion picture production company. It stars Sajitha Anthony with debut actress Dinara Punchihewa in lead roles along with Shyam Fernando and Ravindra Randeniya. Music composed by K.

It is a period drama set in 1814, during the last days of the Kandyan Kingdom. The story revolves around the journey of Tikiri who was stripped from nobility and forcibly married to an outcast by the monarchy.

Gaadi premiered on 8 October 2019 at the 24th Busan International Film Festival amidst stellar reviews. The film has been selected one of the 100 Asian films that audiences should watch by International Film Festival 2019.

In January 2020, the film won a Special Jury Award at 18th International Dhaka Film Festival.</p>

<h3 className="sub">Plot</h3>

<p className="body">Stripped of her Radala cast and forcibly married to an outcast by the monarch, a woman fights to keep her dignity by rejecting to succumb to her destiny.</p>

<h3 className="sub">Cast</h3>

<li className="body">Sajitha Anthony as Vijaya</li>
<li className="body">Ravindra Randeniya as Ehelepola Adigar</li>
<li className="body">Shyam Fernando as Bulathgama Disawe</li>
<li className="body">Iranganie Serasinghe as Bulathgama Disawe's mother</li>



<h3 className="sub">Awards</h3>

<li className="body">18th Dhaka International Film Festival (Best Film - Special Jury Mention)</li>
<li className="body">3rd Independent Film Festival of Chennai (Emerald Dove Award)</li>
<li className="body">14th Asia Pacific Screen Awards: Cultural Diversity Award (UNESCO)</li>

</Modal>

<Modal isOpen={showVarisuModal} onRequestClose={handleVarisuModalClose}>
  <h1 className='Topic'>Varisu</h1>

  <p className='body'>Varisu (pronounced [ʋaːɾisɯ] transl. Heir) is a 2023 Indian Tamil-language action drama film directed by Vamshi Paidipally who co-wrote it with Hari and Ashishor Solomon. Produced jointly by Dil Raju and Sirish under the banner of Sri Venkateswara Creations and PVP Cinema, the film stars Vijay and Rashmika Mandanna, with R. Sarathkumar, Prabhu, Jayasudha, Prakash Raj, Srikanth and Shaam in supporting roles. It focuses on a business magnate's youngest son being named the chairman of his father's business, much to the dismay of his two elder brothers.

The film was announced in September 2021 under the tentative title Thalapathy 66, as it is Vijay's 66th film in a leading role. Principal photography began in April 2022 and concluded in December. The film was shot mostly in Chennai and Hyderabad, with sporadic schedules in Visakhapatnam, Ballari and Ladakh. The music was composed by Thaman S, cinematography handled by Karthik Palani and editing was by Praveen K. L. </p>

<h3 className="sub">Plot</h3>

<p className="body">The film revolves around the disowned youngest son of a business magnate who launches a food delivery startup, and his family's struggles as the father is diagnosed with terminal cancer and must choose a successor. The elder brothers are revealed to be untrustworthy, leaving the responsibility to the younger son who initially refuses, but eventually takes over the business empire. Family secrets and struggles are revealed, but in the end, the family reunites and scatters the father's ashes together.</p>

<h3 className="sub">Cast</h3>

<li className="body">Vijay as Vijay Rajendran[9]</li>
<li className="body">Rashmika Mandanna as Divya</li>
<li className="body">R. Sarathkumar as Rajendran Palanisamy, Vijay’s father</li>
<li className="body">Jayasudha as Sudha Rajendran, Vijay’s mother</li>
<li className="body">Srikanth as Jai Rajendran, Vijay’s first elder brother</li>
<li className="body">Shaam as Ajay Rajendran, Vijay’s second elder brother</li>
<li className="body">Prakash Raj as Jayaprakash "JP"</li>


</Modal>

<Modal isOpen={showAvaModal} onRequestClose={handleAvaModalClose}>
  <h1 className='Topic'>Avatar: The Way of Water</h1>

  <p className='body'>Avatar: The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron. He co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao, and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in an additional role.[6] New cast members include Kate Winslet, Cliff Curtis, Edie Falco, and Jemaine Clement. Its story follows a Na'vi named Jake Sully (Worthington) as he and his family, under renewed human threat, seek refuge with the Metkayina clan of Pandora.</p>

<h3 className="sub">Plot</h3>

<p className="body">Sixteen years after the Na'vi defeated the RDA, the RDA returns to Pandora led by their new leader, Frances Ardmore, with the Recombinants – Na'vi avatars implanted with human soldiers' memories – as their leaders. Jake and Neytiri have a family with adopted children and are living with the Omatikaya clan when the RDA captures their children. The family retreats to the eastern seaboard of Pandora, where they learn from the Metkayina clan. When Quaritch tracks them down, they confront the RDA, resulting in the death of one of Jake's children and Quaritch's defeat. The family decides to stay with the Metkayina and live a new life at sea.</p>

<h3 className="sub">Cast</h3>

<li className="body">Sam Worthington as Jake Sully</li>
<li className="body">Zoe Saldaña as Neytiri te Tskaha Mo'at'ite (Neytiri Sully)</li>
<li className="body">Sigourney Weaver as Kiri te Suli Kireysi'ite (Kiri Sully)</li>



<h3 className="sub">Awards</h3>

<li className="body">Academy Awards, USA (2023)</li>
<li className="body">Oscar [Winner]
Best Achievement in Visual Effects</li>
<li className="body">Oscar [Nominee]
Best Sound and Best Achievement in Production Design</li>

</Modal>

<Modal isOpen={showGinModal} onRequestClose={handleGinModalClose}>
  <h1 className='Topic'>Gindari 3</h1>

  <p className='body'>Gindari 2: Bahubuthayo 3 (Sinhala: ගින්දරී 2 - බහුබූතයෝ 3) is a 2022 Sinhalese comedy mystery film written and directed and produced by Udayakantha Warnasuriya. The film served as a sequel to the 2015 film Gindari, which is the third installment of Bahubuthayo film series. Rodney Warnakula, Mahendra Perera and Paboda Sandeepani in reprise their lead roles along with Saman Hemaratne and Srinath Maddumage. Music composed by Ananda Perera.</p>

<h3 className="sub">Producion</h3>

<p className="body">The filming starts in January 2019. Scenes in the film were shot in and around the towns of Colombo, Sri Lanka for 45 days.</p>

<h3 className="sub">Cast</h3>

<li className="body">Paboda Sandeepani as Tikiri</li>
<li className="body">Mahendra Perera as Lanti</li>
<li className="body">Rodney Warnakula as Bunty</li>
<li className="body">Tishen Wanhof as Supiri</li>
<li className="body">Richerd Manamudali as Chaminda</li>
<p></p>
<h3 className="sub">International screening</h3>

<p className="body">The special screening of the film was held during "The Scope Film Festival" which was held daily from the 4th to the 8th of September 2020 at the Liberty Cinema Hall, Colombo at 10.30, 2.30 and 7.00 screenings. On 20 December 2020, the film's first international premiere will take place at 7pm at Mill Park and Narre Warren in Melbourne, Australia. All tickets for these seasons were distributed online and are now sold out.

The movie was screened on the 13 February 2021 at 4.30 pm at the Cinema Village Hobbit in Tasmania. This was the first time that a Sri Lankan film was screened in Tasmania.</p>

</Modal>

<Modal isOpen={showGajaModal} onRequestClose={handleGajaModalClose}>
  <h1 className='Topic'>Gajaman</h1>

  <p className='body'>Gajaman (Sinhala: ගජමෑන්), sometimes referred to as Camillus' Gajaman 3D, is a 2023 Sri Lankan Sinhala 3D animation comedy film directed by Chanaka Perera and co-produced by John Fonseka and Chamika Jinadasa for Studio 101. The film makes the hallmark in Sri Lankan cinema industry by becoming the first ever three dimensional (3D) animation movie in Sri Lanka using motion capture technology. The two lead characters of the film was dubbed by popular dubbing artist duet, Suneth Chitrananda and Gaminda Priyaviraj. Other cast includes, Rashi Prabodha, Yureni Noshika and Sunil Perera. Background score composed by Ravihans Wetakepotha and songs composed by Anushka Udana (Wasthi Productions). Sound designing & re-recording mixing was accomplished by Nisal Gangodage.

The motion capture cast includes Dasun Pathirana, Paboda Sandeepani and many newcomers. Film trailer was released at a press conference held at the National Film Corporation's Tharangani Cinema in April 2018.</p>

<h3 className="sub">Plot</h3>

<p className="body">The film opens with Gajaman's house in the morning. In his bedroom, he wakes up and gets his foot stuck in a mousetrap. Afterwards he continues to live his normal routine and goes to Magodis's mansion where he informs Gajaman to pick up his daughter Padmavathi from the airport which results in humorous circumstances. Afterwards he returns some of his friends home to put posters of Magodis in the middle of the night.</p>

<h3 className="sub">Cast</h3>

<li className="body">Gaminda Priyaviraj as Gajaman</li>
<li className="body">Suneth Chithrananda as Amda</li>
<li className="body">Yureni Noshika as Sweety</li>


<h3 className="sub">Songs</h3>

<li className="body">Man Thaniwama (Sinhala: මං තනිවම) - Artist: Dinesh Gamage</li>
<li className="body">Pichchamal Wassakin (Sinhala: පිච්ච මල් වැස්සකින්) - Artist: Ridma Weerawardena</li>
<li className="body">Bombe Motai (Sinhala: බොම්බෙ මොටයි) - Artist: Anushka Udana ft Sunil Perera</li>

</Modal>


</div>
    
  );
  
}



