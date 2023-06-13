import './About.css';
import lama_hi_img from './../img/img-lama-hi.jpg';

function About() {
  return (
    <div className="About">
      <div id="about-container">
        <img id="about-llama-pic" src={lama_hi_img} alter="Pretty llama"></img>
        <div id="about-title">
          <h3>Some facts about llamas</h3>
          <p>...hover below to discover!</p>
        </div>
        <ul>
          <li>
            Llamas are known for their spitting abilities, but they don't actually spit out of
            anger. They usually spit to communicate with each other or to express their annoyance.
            So, if a llama spits at you, it's their way of saying, "Hey, back off!"
          </li>
          <li>
            Llamas have a unique hairstyle called a "topknot." Their hair naturally grows longer on
            the top of their head, giving them a stylish and somewhat comical appearance.
          </li>
          <li>
            Llamas are excellent hikers and can navigate through rough terrains with ease. They have
            been known to climb mountains at altitudes of over 13,000 feet. Imagine a llama
            conquering the summit!
          </li>
          <li>
            Llamas have a reputation for being quirky and can display amusing behaviors. They often
            make funny facial expressions and have been known to photobomb unsuspecting tourists
            taking selfies. Watch out for those photogenic llamas!
          </li>
          <li>
            Llamas have a unique way of showing affection. When they're fond of someone, they may
            give them a gentle nuzzle or a "kiss" by pressing their lips against the person's cheek.
            Who wouldn't want a smooch from a llama?
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
