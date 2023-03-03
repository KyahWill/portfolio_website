<script lang="ts">
  let m = { x: 0, y: 0 };
  let element: HTMLDivElement;
  function scaleDownMouse(event) {
    element.style.width = "20px";
    element.style.height = "20px";
  }
  function scaleUpMouse(event) {
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
      { duration: 1500, fill: "forwards"}
    );
  }
</script>

<main on:mousemove={handleMousemove}>
  <div>
    <div class="pointer" bind:this={element} />
    <section class="firstSection">
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
      <div class="findHidden">
        <h1
          on:mouseenter={() => scaleUpMouse()}
          on:mouseleave={() => scaleDownMouse()}
        >
          Discovering what the universe has in store
        </h1>
      </div>
      <section class="navbar">
        <a href="" class="navbarItem"> Resume </a>
        <a href="#secondPart" class="navbarItem"> About Me </a>
        <a href="#thirdPart" class="navbarItem"> Projects </a>
        <a href="#fourthPart" class="navbarItem"> Contact Me </a>
      </section>
    </section>
    <section class="secondPart" id="#secondPart">
      <h1>This is me</h1>
      <img src="" alt="will vincent parrone" />
      <h2> I like working in tech. I love learning new things and experimenting <h2>
      <h2> I also kinda need a job </h2>

    </section>
    <section class="thirdPart">
      <h1>Here's some projects I did</h1>
    </section>
    <section class="fourthPart">
      <h1>I also got involved here</h1>
      
    </section>
    <section class="fifthPart">
      <h1>Here's why working with me is a great idea</h1>

    </section>
    <section class="sixthPart">
      <h1>Let's build something new</h1>

    </section>    
  </div>
</main>

<style scoped>
  .navbarItem {
    padding-top:4px;
    padding-bottom:4px;
    text-decoration:underline;
    color:black;

    font-size:36px;
  }
  .navbar {
    position: absolute;
    display:flex;
    flex-direction:column;
    top: 40px;
    left: 980px;
  }
  .findHidden {
    position: absolute;
    left: 706px;
    top: 257px;
    background: none;
    z-index: 10;
  }
  .findHidden h1 {
    width:300px;
    font-size: 48px;
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
    translate:-50% -50%;
  }
  section {
    min-height:100vh;
  }
  .firstSection {
    position: relative;
    margin-left:auto;
    margin-right:auto;
    width:1200px;
    padding-top:50px;
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
