export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm John</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          In the dynamic realm where code weaves the digital tapestry of the internet, there exists a passionate architect of virtual experiences I, the Web Maestro. For three exhilarating years, i've been orchestrating symphonies of pixels and lines of code, transforming the mundane into the extraordinary.

            <br /> 
CSS soon became my artistic palette, and like a skilled painter, i infused colors, shapes, and animations into the digital canvas. My style sheets weren't just lines of code; they were declarations of creativity, turning websites into visually stunning masterpieces that captivated and enchanted.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
