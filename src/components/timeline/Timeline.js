import React from 'react';

import './Timeline.css';
import MdPizza from 'react-ionicons/lib/MdPizza';
import MdCodeWorking from 'react-ionicons/lib/MdCodeWorking';
import MdBeer from 'react-ionicons/lib/MdBeer';
import MdPeople from 'react-ionicons/lib/MdPeople';
import MdPaperPlane from 'react-ionicons/lib/MdPaperPlane';
import MdHappy from 'react-ionicons/lib/MdHappy';
import MdBarcode from 'react-ionicons/lib/MdBarcode';
import MdMicrophone from 'react-ionicons/lib/MdMicrophone';

function App() {

	if(document.body.offsetWidth > 600){
  return (
    <div id="timeline" className="timeline">

      <div className="head">
        Schedule
      </div>





     <section id="cd-timeline" class="cd-container">

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			{/* <div class="cd-timeline-content">
				<h2>Penta Consulting</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-certificate" aria-hidden="true"></i>
            Front End Developer
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            June 2016 - Present
          </span>
        </div>
				<p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
        <ul class="content-skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Wordpress</li>
        </ul>
			</div>
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div>  */}

			<div class="cd-timeline-content">
				<h2>
				<div style={{marginBottom : "3%"}}>
					--> Entries Starts
				</div>
				<div style={{marginBottom : "3%"}}>
					--> Reporting of the Teams
				</div>
				<div >
					-->  Announcement Presentation
				</div>

</h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p> */}
				<span class="cd-date"> 01:00 PM</span>
			</div>
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>




			<div class="cd-timeline-content">
				<h2> <MdCodeWorking fontSize="4em" color="#46FF66" />  --> Hackathon Begins </h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p> */}
				<span class="cd-date ev"> 02:00 PM</span>
			</div>
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div>



			<div class="cd-timeline-content">
				<h2><MdPeople fontSize="3em" color="red" /> --> Mentor Round </h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p> */}
				<span class="cd-date ev"> 04:00 PM</span>
			</div>
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div>



			<div class="cd-timeline-content">
				<h2><MdPaperPlane fontSize="3em" color="#FF6646"/>  --> Dinner </h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p> */}
				<span class="cd-date ev"> 8:00 PM</span>
			</div>
		</div>


		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">

			</div>
			<div class="cd-timeline-content">
				<h2> <MdPizza shake={true} fontSize="3em" color="orange" /> --> Midnight Snacks </h2>

				<span class="cd-date">12:00 AM</span>
			</div>
			</div>

			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">

			</div>
			<div class="cd-timeline-content">
				<h2><MdBarcode fontSize="3em" color="#FF4666" />  --> Judgement Round - 01 </h2>

				<span class="cd-date ev">01:00 AM</span>
			</div>
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">

			</div>
			<div class="cd-timeline-content">
				<h2> <MdBeer shake={true} fontSize="3em" color="brown" /> --> Breakfast </h2>

				<span class="cd-date ev">8:00 AM</span>
			</div>
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">

			</div>
			<div class="cd-timeline-content">
				<h2> <MdPeople fontSize="3em" color="yellow" /> --> Judgement Round - 02 </h2>

				<span class="cd-date ev">10:00 AM</span>
			</div>
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">

			</div>
			<div class="cd-timeline-content">
				 <h2 > <MdMicrophone beat={true} color="#FF4666" fontSize="2em"/> > Final Pitch </h2>

				<span class="cd-date ev">01:00 PM</span>
			</div>
			</div>




			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">

			</div>
			<div class="cd-timeline-content">
				<h2> <MdPizza shake={true} fontSize="3em" color="orange" /> --> Lunch </h2>

				<span class="cd-date ev">02:00 PM</span>
			</div>
			</div>


	</section>






    </div>
  );
		}
		else{
			return(
				<div className="timeline">

				<div className="head">
				  Schedule
				</div>





			   <section id="cd-timeline" class="cd-container">

				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-picture">
					  </div>

					  {/* <div class="cd-timeline-content">
						  <h2>Penta Consulting</h2>
				  <div class="timeline-content-info">
					<span class="timeline-content-info-title">
					  <i class="fa fa-certificate" aria-hidden="true"></i>
					  Front End Developer
					</span>
					<span class="timeline-content-info-date">
					  <i class="fa fa-calendar-o" aria-hidden="true"></i>
					  June 2016 - Present
					</span>
				  </div>
						  <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
				  <ul class="content-skills">
				  <li>HTML5</li>
				  <li>CSS3</li>
				  <li>JavaScript</li>
				  <li>jQuery</li>
				  <li>Wordpress</li>
				  </ul>
					  </div>
				  </div>

				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  </div>  */}

					  <div class="cd-timeline-content">
						  <h2>
						  <div style={{marginBottom : "3%"}}>
							  > Reporting of Teams
						  </div>
						  <div style={{marginBottom : "3%"}}>
							  > Announcement Presentation
						  </div>


		  </h2>
						  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p> */}
						  <span class="cd-date"> 01:00 PM</span>
					  </div>
				  </div>

				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-picture">
					  </div>




					  <div class="cd-timeline-content">
						  <h2> <MdCodeWorking fontSize="2em" color="#46FF66" />  > Hackathon Begins</h2>
						  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p> */}
						  <span class="cd-date ev"> 2:00 PM</span>
					  </div>
				  </div>

				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-location">
					  </div>



					  <div class="cd-timeline-content">
						  <h2><MdPeople fontSize="2em" color="red" /> > Mentor Round</h2>
						  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p> */}
						  <span class="cd-date ev"> 04:00 PM</span>
					  </div>
				  </div>

				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-location">
					  </div>



					  <div class="cd-timeline-content">
						  <h2><MdPaperPlane fontSize="2em" color="#FF6646"/>  > Dinner</h2>
						  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p> */}
						  <span class="cd-date ev"> 08:00 PM</span>
					  </div>
				  </div>


				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">

					  </div>
					  <div class="cd-timeline-content">
						  <h2> <MdPizza shake={true} fontSize="2em" color="orange" /> > Midnight Snacks </h2>

						  <span class="cd-date">12:00 AM</span>
					  </div>
					  </div>

					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">

					  </div>
					  <div class="cd-timeline-content">
						  <h2><MdBarcode fontSize="2em" color="#FF4666" />  > Judgement Round - 01 </h2>

						  <span class="cd-date ev">01:00 AM</span>
					  </div>
					  </div>



					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">

					  </div>
					  <div class="cd-timeline-content">
						  <h2> <MdBeer shake={true} fontSize="2em" color="brown" /> > Breakfast </h2>

						  <span class="cd-date ev">08:00 AM</span>
					  </div>
					  </div>



					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">

					  </div>
					  <div class="cd-timeline-content">
						  <h2> <MdPeople fontSize="2em" color="yellow" /> >  Judgement Round - 02 </h2>

						  <span class="cd-date ev">10:00 AM</span>
					  </div>
					  </div>



					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">

					  </div>
					  <div class="cd-timeline-content">
						  <h2 > <MdMicrophone beat={true} color="#FF4666" fontSize="2em"/> > Final Pitch </h2>

						  <span class="cd-date ev">01:00 PM</span>
					  </div>
					  </div>




					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">

					  </div>
					  <div class="cd-timeline-content">
						  <h2> <MdPizza shake={true} fontSize="2em" color="orange" /> > Lunch </h2>

						  <span class="cd-date ev">02:00 PM</span>
					  </div>
					  </div>




			  </section>






			  </div>
			);

		}
}

export default App;
