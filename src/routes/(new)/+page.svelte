<script lang="ts">
  import type { EngagementSummary } from "./../../types/Engagements";
  import type { ProjectSummary } from "./../../types/Project";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { fly, fade } from "svelte/transition";
  export let data: PageData;
  const projects: ProjectSummary[] = data.props.output;
  let projectIndex = 0;
  let engagementIndex = 0;
  let option = "";
  let options = [
    "I wanna know something if this works",
    "I will update the content of this",
    "Once I ever know how to do this.",
  ];
  let flashlightImageChoices = ["/images/waist - PARRONE.png", "/images/developer_picture.jpg"]
  let flashlightImage = "/images/waist - PARRONE.png"
  let flashlightDialogueList = [
    "I also don't like bright lights by the way.",
    "That hurts! Please put the flashlight away.",
    "Thank you, perhaps you can now look at my projects.",
    "Or perhaps not.",
    "You might as well keep on flashing me you know.",
    "I was being sarcastic but that one's on me.",
    "Okay then, you've had your fun. Come on, let's wrap it up so we can do other things.",
    "Don't be a jackass man come on no lightsies.",
    "Now, PLEASE just scroll down.",
    "Did I ever do something bad to you???.",
    "Listen, I am just an inanimate object that has no sentience, why do you keep on bothering me?",
    "Oh, for crying out loud",
    "I swear to not using his name in vain",
    "Okay that's it. Put the flashlight away no mister.",
  ]
  let flashlightDialogueCounter = 0
  let flashlightDialogue = flashlightDialogueList[flashlightDialogueCounter]
  const engagements: EngagementSummary[] = data.props.engagements;

  let m = { x: 0, y: 0 };
  let circle: HTMLDivElement;
  let element: HTMLDivElement;
  let circle_string: String[];
  let circleText = " - PLEASE HIRE ME - PLEASE HIRE ME - PLEASE HIRE ME - PLEASE HIRE ME "
  circle_string = circleText.split("");
  let circleOutput: string = circle_string
      .map((char, index) => {
        return (
          `<span style="
            transform:rotate(` +
          index * 5.4 +
          `deg);
            position:absolute;
            left:50%;
            transform-origin:0 210px;
          ">` +
          char +
          `</span>`
        );
      })
      .join("");
  let ready_animate: Boolean = false;
  
  onMount(() => {    
    circle.innerHTML = circleOutput
    ready_animate = true;
  });

  function scaleDownMouse() {
    element.style.width = "20px";
    element.style.height = "20px";
  }
  function scaleUpMouse() {
    element.style.width = "400px";
    element.style.height = "400px";
  }
  function handleMousemove(event: MouseEvent) {
    m.x = event.clientX;
    m.y = event.clientY;
    // console.log(element.style, element.style.y)
    element?.animate(
      {
        left: m.x + "px",
        top: m.y + "px",
      },
      { duration: 1500, fill: "forwards" }
    );
  }
</script>

<main on:mousemove={handleMousemove}>
  <div>
    <div class="pointer" bind:this={element} />
    <section class="firstSection">
      {#if ready_animate}
        <div in:fade={{ delay: 50 }}>
          <div class="box --with-dots" style="">
            <table>
              {#each Array(6) as _}
                <tr>
                  {#each Array(7) as _}
                    <td style="padding-right:35px; padding-bottom:30px;">
                      <span class="dot" />
                    </td>
                  {/each}
                </tr>
              {/each}
            </table>
          </div>
          <div class="box --with-text">
            <span> EXPLORING </span>
            <span> BOUNDARIES </span>
            <span> CREATING </span>
            <span> IDEAS </span>
          </div>
        </div>
        <div in:fade class="findHidden">
          <h1
            on:mouseenter={() => scaleUpMouse()}
            on:mouseleave={() => scaleDownMouse()}
          >
            Discovering what the universe has in store
          </h1>
        </div>
        <article class="navbar">
          <a href="" class="navbarItem"> Resume </a>
          <a href="#secondPart" class="navbarItem"> About Me </a>
          <a href="#thirdPart" class="navbarItem"> Projects </a>
          <a href="#fourthPart" class="navbarItem"> Contact Me </a>
        </article>
      {/if}
    </section>

    <section
      class="secondPart"
      id="#secondPart"
      on:mouseover={() => {
      element.style.width = "100px";
      element.style.height = "100px";
      element.style.backgroundColor = "white";
      element.innerHTML = `
      <img 
        src="/images/flashlight.png" 
        style="width:100px;height:100px;"
        />`;
      }}
      on:focus={() => {}}
      on:mouseleave={() => {
        element.style.width="20px";
        element.style.height="20px";
        element.style.backgroundColor="black";
        element.innerHTML = "";
      }}
    >
      <h1>This is me</h1>
      <div class="secondPartFlex">
        <div
          class="body"
          style="
        position:relative;
        width:420px;
        height:420px;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;"
        >
          <div class="body_circle" bind:this={circle}>

          </div>
          <img src={flashlightImage} alt="will vincent parrone" 
            on:mouseover={()=> {
              flashlightImage = flashlightImageChoices[1]
              flashlightDialogueCounter +=1
              flashlightDialogue = flashlightDialogueList[flashlightDialogueCounter]
              }
            }
            on:focus={()=>{}}
            on:mouseleave={()=>{
              flashlightImage = flashlightImageChoices[0]
              flashlightDialogueCounter+=1
              flashlightDialogue = flashlightDialogueList[flashlightDialogueCounter]
              }
            }
            />
        </div>
        <div class="body" style="height:500px">
          <h2>
            I'm a jack of all trades in the world of tech. I write code, I test
            software, I can talk to clients.
          </h2>
          <h2>You name it, I'll do it.</h2>
          <br />
          <h3>{flashlightDialogue}</h3>
        </div>
        <div />
      </div>
    </section>
    <section class="thirdPart">
      <h1>Here's some projects I did</h1>
      <div class="custom-carousel">
        <div class="image">
          <button
            on:click={() => {
              projectIndex =
                (projectIndex + projects.length - 1) % projects.length;
            }}
          >
            <img
              src="/images/arrow button.png"
              alt="previous button"
              style="    
              height:40px;
              width:40px;
            "
            />
          </button>
          {#key projectIndex}
            <img
              in:fade={{ duration: 1000 }}
              src={projects[projectIndex].imageLink}
              alt={projects[projectIndex].title}
              style=""
            />
          {/key}
          <button
            on:click={() => {
              projectIndex = (projectIndex + 1) % projects.length;
            }}
          >
            <img
              src="/images/arrow button.png"
              alt="next button"
              style="    
                height:40px;
                width:40px;
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
                "
            />
          </button>
        </div>
        {#key projectIndex}
          <div class="description" in:fly={{ y: 100, duration: 1000 }}>
            <h1>
              {projects[projectIndex].title}
            </h1>
            <h2>
              {projects[projectIndex].description}
            </h2>
          </div>
        {/key}
      </div>
    </section>
    <section class="fourthPart">
      <h1>I also got involved here</h1>
      <div class="custom-carousel">
        {#key engagementIndex}
          <div class="description" in:fade={{ duration: 400 }}>
            <h1>
              {engagements[engagementIndex].title}
            </h1>
            <h2>
              {engagements[engagementIndex].description}
            </h2>
          </div>
        {/key}
        <div class="image">
          <button
            on:click={() => {
              engagementIndex =
                (engagementIndex + engagements.length - 1) % engagements.length;
            }}
          >
            <img
              src="/images/arrow button.png"
              alt="previous button"
              style="    
                height:40px;
                width:40px;
              "
            />
          </button>
          {#key engagementIndex}
            <img
              in:fade
              src={engagements[engagementIndex].imageLink}
              alt={engagements[engagementIndex].title}
              style="height:300px;width:300px"
            />
          {/key}
          <button
            on:click={() => {
              engagementIndex = (engagementIndex + 1) % engagements.length;
            }}
          >
            <img
              src="/images/arrow button.png"
              alt="next button"
              style="    
                height:40px;
                width:40px;
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
              "
            />
          </button>
        </div>
      </div>
    </section>
    <section
      class="fifthPart"
      on:mouseover={() => {
        element.innerHTML = `<img src="/images/pointing-finger.png" style="left:-50px"/>`;
        element.style.width= "0px"
      }}
      on:focus={() => {}}
      on:mouseleave={() => {
        element.style.width= "20px"
        element.style.height="20px"
        element.innerHTML = "";
      }}
    >
      <h1 style="width:700px">Here's why working with me is a great idea</h1>
      <div class="monitor_container" style="display:flex;flex-direction:row;">
        <div class="computer_base" style="width:600px; height:500px;">
          <div
            class="monitor_exterior"
            style="margin-left:auto; margin-right:auto; margin-top:40px; width:540px; height:300px; border-style:solid; border-radius:20px; background:white;"
          >
            <div
              class="monitor_interior"
              style="width:510px; height:270px; margin:auto; margin-top:10px; border-style:solid; border-radius:20px; background:white;"
            >
              {#key option}
                <p in:fade style="background:white">
                  {option}
                </p>
              {/key}
            </div>
          </div>
          <div
            class="monitor_neck"
            style="border-style:solid; width:200px; margin-left:auto; margin-right:auto; height:50px; background:white; position:relative; top:-3px;"
          />
          <div
            class="monitor_base"
            style="border-style:solid; width:400px; height:40px; margin-left:auto; margin-right:auto; background:white; position:relative; top:-6px; "
          />
        </div>
        <div
          class="button_list"
          style="margin-left:20px; display:flex; flex-direction:column; width:400px;"
        >
          <button on:click={() => (option = options[0])}> test </button>
          <button on:click={() => (option = options[1])}> teset </button>
          <button on:click={() => (option = options[2])}> test </button>
        </div>
      </div>
    </section>
    <section class="sixthPart">
      <h1>Let's build something cool</h1>
      <form
        on:submit={(event) => {
          event.preventDefault();
        }}
      >
        <label style="height: 60px;">
          <p>Email:</p>
          <input type="text" />
        </label>
        <label style="height: 60px;">
          <p>Subject:</p>
          <input type="text" />
        </label>
        <label style="height: 220px;">
          <p>Message:</p>
          <textarea />
        </label>
        <label>
          <p />
          <input class="submit" type="submit" value="send" />
        </label>
      </form>
    </section>
  </div>
</main>

<style scoped>
  .button_list button:active {
    background: #e5e5e5;
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
  }
  .button_list button {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border-color: #000;
    border-style: solid;
    margin-bottom: 16px;
  }
  .sixthPart form label .submit {
    width: 120px;
    align-self: left;
  }
  .sixthPart form textarea {
    width: 400px;
    height: 200px;
    background: white;
    font: serif;
    font-size: 20px;
    font-weight: 200;
  }
  .sixthPart form input {
    width: 400px;
    background: white;
    height: 40px;
    font: serif;
    font-size: 20px;
    font-weight: 200;
  }
  .sixthPart form label p {
    width: 200px;
    margin-top: 0px;
  }
  .sixthPart form label {
    font-size: 40px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: start;
    height: 60px;
  }
  .sixthPart form {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-self: center;
  }
  .sixthPart {
    display: flex;
    flex-direction: column;
  }
  .custom-carousel .description {
    width: 800px;
  }
  .custom-carousel button {
    margin-left: 4px;
    margin-right: 4px;
    border-style: none;
  }
  .custom-carousel .image img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border-width: 2px;
    background-color: white;
    padding: 2px;
    border-style: solid;
    object-fit: fill;
  }
  .custom-carousel .image {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .custom-carousel {
    display: flex;
    flex-direction: row;
  }
  @keyframes rotateText {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .body_circle {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: rotateText 10s linear infinite;
  }
  .secondPartFlex .body h2 {
    font-size: 36px;
    text-justify: inter-word;
  }
  .secondPartFlex .body {
    min-width: 50%;
  }
  .secondPartFlex {
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 900px;
  }
  .secondPart h1 {
    width: 1200px;
    text-align: center;
  }
  .secondPart img {
    height: 360px;
    width: 360px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
  }
  .navbarItem {
    padding-top: 4px;
    padding-bottom: 4px;
    text-decoration: underline;
    color: black;

    font-size: 36px;
  }
  .navbar {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 40px;
    left: 980px;
  }
  .findHidden {
    position: absolute;
    left: 706px;
    bottom: 56px;
    background: none;
    z-index: 10;
  }
  .findHidden h1 {
    width: 350px;
    font-size: 56px;
    z-index: 10;
    color: yellow;
    background: none;
  }
  .pointer {
    width: 20px;
    height: 20px;
    position: fixed;
    z-index: 8;
    border-radius: 50%;
    background: black;
    transition: 0.5s;
    pointer-events: none;
    translate: -50% -50%;
  }
  section h1 {
    font-size: 64px;
  }
  section {
    width: 1200px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }
  .firstSection {
    position: relative;
    padding-top: 50px;
    min-height: 100vh;
  }
  main {
    min-height: 100vh;
  }
  .--with-dots {
    width: 363px;
    height: 320px;
    padding-left: 35px;
    padding-top: 35px;
    z-index: 0;
  }
  .--with-text {
    position: absolute;
    width: 371px;
    height: 331px;
    left: 220px;
    top: 190px;
    padding-left: 10px;
    padding-top: 10px;
    z-index: 7;
    display: flex;
    flex-direction: column;
  }
  .--with-text span {
    font-size: 64px;
  }
  .box {
    border-width: 2px;
    border-style: solid;
  }
  .dot {
    height: 10px;
    width: 10px;
    background-color: #000;
    border-radius: 50%;
    display: inline-block;
  }
  * {
    background-color: yellow;
    font-family: "Inter";
    font-weight: 600;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    src: url("/fonts/Inter/Inter-VariableFont_slnt,wght.ttf") format("truetype");
  }
</style>
