import React from 'react';
import comptiaA from '../assets/comptia_a.jpg';
import comptiaNetwork from '../assets/comptia_network.jpg';
import comptiaSecurity from '../assets/comptia_security.jpg';
import testoutPCPro from '../assets/Testout_PCPro.jpg';
import testoutNetworkPro from '../assets/Testout_NetworkPro.jpg';
import microsoftOffice from '../assets/microsoft_office_specialist.jpg';
import CEH from '../assets/CEH.png';
import pentestPlus from '../assets/comptia-pentest.png';

const Certifications = () => {
  return (
    <section className="section certifications" id="Certifications">
      <h2>Certifications</h2>
      <div className="cert-container">
        <img src={comptiaA} alt="CompTIA A+" width="250" />
        <p>CompTIA A+</p>
      </div>
      <div className="cert-container">
        <img src={comptiaNetwork} alt="CompTIA Network+" width="250" />
        <p>CompTIA Network+</p>
      </div>
      <div className="cert-container">
        <img src={comptiaSecurity} alt="CompTIA Security+" width="250" />
        <p>CompTIA Security+</p>
      </div>
      <div className="cert-container">
        <img src={testoutPCPro} alt="TestOut PC Pro" width="250" />
        <p>TestOut PC Pro</p>
      </div>
      <div className="cert-container">
        <img src={testoutNetworkPro} alt="TestOut Network Pro" width="250" />
        <p>TestOut Network Pro</p>
      </div>
      <div className="cert-container">
        <img src={microsoftOffice} alt="Microsoft Office Specialist" width="250" />
        <p>Microsoft Office Specialist</p>
      </div>
      <h3>In progress...</h3>
      <div className="cert-container">
        <img src={CEH} alt="Certified Ethical Hacker" width="250" />
        <p>Certified Ethical Hacker (In progress)</p>
      </div>
      <div className="cert-container">
        <img src={pentestPlus} alt="CompTIA Pentest+" width="250" />
        <p>CompTIA Pentest+ (In progress)</p>
      </div>
    </section>
  );
};

export default Certifications;
