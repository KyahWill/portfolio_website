<script lang="ts">
	import { initializeApp } from 'firebase/app';
	import {  getFirestore, collection, addDoc, } from 'firebase/firestore';

	let app = initializeApp({
	    apiKey: "AIzaSyAJpsslLvybu5YrFGz9BG5KawP8GZDA554",
	    authDomain: "portfolio-d7ee8.firebaseapp.com",
	    projectId: "portfolio-d7ee8",
	    storageBucket: "portfolio-d7ee8.appspot.com",
	    messagingSenderId: "542050548444",
	    appId: "1:542050548444:web:8119bbec1dff71d6915219",
	    measurementId: "G-NTWY6762JX"
	});

	let db = getFirestore(app);

	let name: string;
	let email: string;
	let message: string;

	let collection_name = 'portfolio';
	const isEmailValid = () => {
	    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	      if (email.match(validRegex)) {
		alert("Valid email address!");
		return true;
	      } else {
		return false;
	      }
	    }
	

	const submit = async () => {
		if (!name) {
			window.alert('Name is required.');
			return;
		}
		if (!email) {
			window.alert('Email is required.');
			return;
		}
		if (!message) {
			window.alert('Message is required.');
			return;
		}
		if (!isEmailValid()) {
			window.alert('Email Is Invalid');
			return;
		}
		try {
			const docRef = await addDoc(collection(db, collection_name), {
				name: name,
				email: email,
				message: message,
				date: Date.now().toString(),
			});

			console.log('Document written with ID: ', docRef.id);
			window.alert('form submitted');
			location.reload();
		} catch (e) {
			window.alert('error in submitting forms');
			console.error('Error adding document: ', e);
		}
	};
</script>
<section class="hero min-h-screen" >
  <div class="hero-content text-center">
    <div class="max-w-md -mt-12">
	<h1 class="mb-5 text-5xl font-bold">Quick, Efficient, Methodical</h1>
      <p class="py-6">I provide quality websites with efficient timelines, quality output, and wonderful outputs </p>
      <button class="btn btn-primary">Let's Connect</button>
    </div>
  </div>
</section>

<section id="experience " >
  <h2 class="text-4xl font-bold mb-6"> Experience </h2>
  <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical md:w-1/2">
  <li>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end mb-10">
      <time class="font-mono italic">July 2021 - August 2022</time>
      <div class="text-lg font-black">Ethos Bytes</div>
	<ul>
	  <li>- Managed 1 major project under the supervision of the CEO, facilitated 3+ retrospectives per live release.</li>
	  <li>- Acted as a developer to temporarily increase development speed by 20% to meet deadlines.</li>
	  <li>- Acted as the scrum master for  a team of 3 developers. </li>
	  <li>- Assisted the development team with manual testing of the project.</li>
	  <li>- Serves as the liaison between the development team and the clients</li>
	</ul>
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end mb-10">
      <time class="font-mono italic">August 2022 - December 2022</time>
      <div class="text-lg font-black"> Halcyon Digital Media Design </div>
	<ul>
	  <li>- Provided documentation towards major projects.</li>
	  <li>- Identifies customer needs and wants and creates specifications, via charts or diagrams when deemed necessary.</li>
	  <li>- Identifies project milestones and phases and creates user manuals.</li>
	  <li>- Establishes project budgets.</li>
	  <li>- Holds a similar role as the product owner during the development phase</li>
	  <li>- Serves as the middle man between the clients and developers.</li>
	</ul>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end  mb-10">
      <time class="font-mono italic">June 2023 - September 2023</time>
      <div class="text-lg font-black">Tribe Inc.</div>
	<ul>
	  <li>- Coordinates with the Indian development team to determine product status </li>
	  <li>- Researches the recent trends within the Digital Fitness Industry</li>
	  <li>- Meets with potential clients and determines product roadmap</li>
	  <li>- Handles various tasks as per request of the Senior Product Manager</li>
	</ul>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end mb-10">
      <time class="font-mono italic">September 2023 - April 2024</time>
      <div class="text-lg font-black">Sermonshots</div>
	<ul>
	  <li>- Aided the Development team with improving a video-clipping & transcription service for various churches globally. </li>
	  <li>- Created an onboarding system for future users </li>
	  <li>- Assisted in the upcomming product launch of the new website</li>
	</ul>
    </div>
    <hr />
  </li>
</ul>
</section>

<section id="projects" class="mt-3 md:mt-20" >
  <h2 class="text-4xl font-bold mb-6"> Projects </h2>

  <br />
  <h3 class="text-xl font-semibold mb-6"> FluFluent </h3>
  <div class="mockup-browser border bg-base-300 md:w-[75dvw] h-[75dvh]">
    <div class="mockup-browser-toolbar ">
      <div class="input">https://flufluent.com</div>
    </div>
    <iframe title="flufluent" class="w-full h-full" src="https://flufluent.com" frameborder="0"></iframe> 
  </div>
  <br />
  <h3 class="text-xl font-semibold mb-6"> Thus </h3>
  <div class="mockup-browser border bg-base-300 md:w-[75dvw] h-[75dvh]">
    <div class="mockup-browser-toolbar ">
      <div class="input">https://thus.ph</div>
    </div>
    <iframe title="thus magazine" class="w-full h-full overflow-hidden" scrolling="no" src="https://thus.ph" frameborder="0"></iframe> 
  </div>
</section>

<section id="contact" class="mt-10 md:mt-20 flex flex-col items-center">
  <h2 class="text-4xl font-bold mb-6 "> Contact Me </h2>
  <div class="md:w-1/2 flex flex-col ">
    <div class="mb-1 mt-5">
      <label for="name" class="font-bold text-xl mb-1 mt-3">Name</label>
      <br />
      <input id="name" bind:value={name} type="text" placeholder="Type here" class="input input-bordered input-primary w-full" /> 
    </div>
    <div class="mb-1 mt-3">
      <label for="email"  class="font-bold text-xl ">Email</label>
      <br />
      <input id="email" bind:value={email} type="email" placeholder="Type here" class="input input-bordered input-primary w-full " /> 
    </div>
    <div class="mb-1 mt-3">
      <label for="message" class="font-bold text-xl ">Message </label>
      <br />
      <textarea id="message" bind:value={message} class="textarea textarea-primary w-full" placeholder="Type here"></textarea>
      <br />
    </div>
    <button class="btn btn-primary mt-5" on:click={submit}> Submit </button>
  </div>
</section>

