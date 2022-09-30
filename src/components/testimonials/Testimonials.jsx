import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Luis Bermudez",
      title: "CEO of Solupro in Costa Rica",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "tremendous person, passionate and dedicated to his work",
    },
    {
      id: 2,
      name: "Fernando Olivares",
      title: "Co-Founder of MAMAZUCA, AND GESSIND",
      img: "assets/fernando.jpg",
      icon: "assets/instagram.svg",
      desc: "trust is scarce these days, Luis Alejandro is an unconditional and efficient person, that is priceless.",
      featured: true,
    },
    {
      id: 3,
      name: "Luis Enrique Martinez",
      title: "IT Manager CVG Networks",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "works under pressure, great ability to solve problems and creativity",
    },
    {
      id: 4,
      name: "Milervis Martinez",
      title: "CEO of CompraDesdeVenezuelaPzo",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "professional, responsible, dedicated and patient",
    },
 
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="left" src="assets/right-arrow.png" alt="" />
              <img className="user" 
              src={d.img} alt="" />
              <img className="right" 
              src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
              </div>

            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
