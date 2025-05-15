import React from 'react';

function Hero() {
    return ( 
        <div>
            <section class="home" id="home">
    <div class="home-img">
        <img src="./assets/srikar.jpg" alt="Image of SrikarDhanpal" />
    </div>
    <div class="home-content">
        <h1>Hi, It's <span>SrikarDhanpal</span></h1>
        <h3 class="typing-text">I'm a <span> </span></h3>
        <p>  Keen on exploring opportunities to apply my technical expertise and problem-solving abilities to real-world challenges.A dedicated Information Technology student at Sreenidhi College, actively seeking a suitable software job to leverage my skills and knowledge.</p>
    <div class="social-icons">
        <a href="https://www.linkedin.com/in/srikar-dhanpal-558ba6250/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/SrikarDhanpal" target="_blank"><i class="fa-brands fa-github"></i></a>
        {/* <a href="https://www.instagram.com/__srikardhanpal__" target="_blank"><i class="fa-brands fa-instagram"></i></a> */}
       
        
    </div>
    <a href="#contact" class="btn">Hire me</a>
    </div>
</section>
        </div>
     );
}

export default Hero;