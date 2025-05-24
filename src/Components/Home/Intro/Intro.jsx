import IntroData from "./IntroData";

export default function Intro() {
  return (
    <main className="intro-parent">
      {IntroData.map((item)=>(
        <div className="intro" key={item.id}>

        <img src={item.img} alt={item.title} className="intro-img"/>
        <div className="intro-info">
            <h2 className="intro-title">{item.title}</h2>
            <p className="intro-text">{item.text}</p>
            <button className="intro-btn">Go to Collection</button>
        </div>

        

      </div>))}
    </main>
  );
}
