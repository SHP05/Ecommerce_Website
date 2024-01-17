import "./footer.css";
const Footer = () =>{
    return(
        <>
        <div class="footer" id="contact">
      <h1 class="py-5 mx-5">CONTACT ME</h1>
      <div class="d-flex">
        <h4><i class="fa-solid fa-envelope"></i></h4>&nbsp;
      <h5>suman.h.pankhaniya555@gmail.com</h5>
      </div>

      <div class="d-flex">
        <h4><i class="fa-solid fa-house"></i></h4>&nbsp;
        <h5>Rajkot , Gujarat , India</h5>
      </div>
      <div id="icon">
        <a href="https://www.linkedin.com/in/suman-pankhaniya-1286a2222" title="linkedin">
          <h2><i class="fa-brands fa-linkedin" title="Viite Linkedin Profile"></i></h2>
        </a>
        <a href="https://github.com/SHP05" title="github">
          <h2><i class="fa-brands fa-github" style={{"color":"#10f000"}} title="Viite Github Profile"></i></h2>
        </a>
        <a href="https://instagram.com/s.p_5758?igshid=MzNlNGNkZWQ4Mg==" title="insta">
          <h2><i class="fa-brands fa-instagram" style={{"color":"#f000dc"}} title="Viite insta Profile"></i></h2>
        </a>
      </div>
    </div>  

        </>
    )
}

export default Footer;