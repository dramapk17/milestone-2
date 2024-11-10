import Image from "next/image";

const About1 = () => {
  return (
    <div id="about-container">
    <div id="about">
      <div id="left">
        <Image
          src={"/about-pic.png"}
          alt="SYED ADEEL AHMED "
          width={500}
          height={500}
        />
      </div>
      <div id="right">
        <h2>About Me</h2>
        <h1>
          I am <span>Syed ADEEL </span>
        </h1>
        <p>
          Aspiring developer learning TypeScript, Next.js, and PHOTOSHOP to
          build scalable, dynamic web applications and strengthen
          full-stack programming skills. 
        </p>
      </div>
    </div>
  </div>
  )
}

export default About1
