import React from 'react';
function About() {
    return (  
        <div>
            <section id="about">
    <div class="content">

      <h1 class="about-title">About me</h1>
      <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">20th march, 2020</h3>
                  <h1 class="school-name">Kakatiya olympiad school</h1>
                  <p> I have completed my schooling from Kakatiya olympiad School, Nizamabad. I have secured a score of 9.8 CGPA out of 10. </p>
                </div>
              </li>
              <li>
                <div class="timeline-content hidden">
                  <h3 class="date">20th june, 2022</h3>
                  <h1  class="school-name">Sri Kakatiya jr. College</h1>
                  <p>My Intermediate Education was done at Sri Kakatiya Junior College, Nizamabad under the Mathematics Stream. I was able to score academically a percentage of 92.3%.</p>
                </div>
              </li>
              <li>
                <div class="timeline-content hidden">
                  <h3 class="date">8th oct, 2026</h3>
                  <h1  class="school-name">Sreenidhi Institute of science and technology</h1>
                  <p class="txt">I am pursuing my Pre-graduate at Sreenidhi Institute of science and technology, Hyderabad. I have secured a CGPA of 8.5.</p>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </section>
        </div>
    );
}

export default About;
