<script lang="ts">
  import { onMount } from "svelte";

  // --- Data from your CV (cleaned of invalid syntax) ---
  const experience = [
    {
      role: "Tech Lead / Lead Expert - Solutions Architecture",
      company: "Globe Telecom",
      period: "Feb 2025 - Present",
      tasks: [
        "Assess Client requirements and transform them into validated tech solutions.",
        "Leads a team of 3 developers and conducts typical code reviews.",
        "Serves as the liaison between the Business Stakeholders and the Technical development team.",
      ],
    },
    {
      role: "Software Developer & Project Manager",
      company: "Freelance",
      period: "March 2023 - Present",
      tasks: [
        "Assesses client needs and translates them into actionable requirements that align with the client's business needs.",
        "Maintains the server and deploys changes on the production server.",
        "Served as a Project Coordinator for a team of 3-5 developers.",
        "Evaluated risks and mitigated them in the development phase.",
      ],
    },
    {
      role: "Software Developer",
      company: "Sermon Shots. Inc",
      period: "September 2023 - April 2024",
      tasks: [
        "Builds web solutions to improve business processes.",
        "Currently assists the Development team in improving a video clipping and transcription service for various churches globally.",
      ],
    },
    {
      role: "Business Analyst / Technical Sales Engineer",
      company: "Tribe Inc.",
      period: "June 2023 - September 2023",
      tasks: [
        "Coordinates with the Indian development team to determine product status",
        "Researches the recent trends within the Digital Fitness Industry",
        "Meets with potential clients and determines product roadmap",
      ],
    },
  ];

  const skills = {
    Languages: ["Python", "JavaScript", "TypeScript", "Dart", "Rust", "PHP"],
    Frontend: [
      "Vue (2 & 3)",
      "Nuxt (3)",
      "React",
      "Next",
      "Svelte (3 & 5)",
      "SvelteKit",
      "Tailwind",
      "Bootstrap",
    ],
    Backend: ["Django", "Node.js", "Laravel"],
    "Databases & Cloud": [
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
      "AWS",
      "DigitalOcean",
      "Vercel",
    ],
    "Tools & Methodologies": [
      "Git",
      "Jira",
      "Agile",
      "Scrum",
      "Kanban",
      "CI/CD",
    ],
  };

  const awards = [
    {
      title: "MVP",
      event: "Globe Code To Career Hackathon",
      description:
        "Awarded for showing exemplary showmanship and leadership during Globe's Code to Career hackathon.",
    },
    {
      title: "Merit Scholarship",
      event: "DOST Scholarship",
      description:
        "Awarded for scoring within the top percentile within the scholarship exams.",
    },
  ];

  const organizations = [
    {
      role: "President",
      org: "Rotary Club of Fort Bonifacio Global City",
      period: "July 2025 - Present",
      description:
        "Spearheaded the donation of books to 2 major recipients. Provided relief goods for 150+ families.",
    },
    {
      role: "Core Volunteer",
      org: "Python Philippines",
      period: "July 2023 - Present",
      description:
        "Volunteered as an emcee for Pycon 2023 and headed the emcee committee for a 200+ person event for 2024.",
    },
  ];

  // --- Icon Components ---
  const GithubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
  const ExternalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;
  const MailIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
</script>

<svelte:head>
  <title>Will Vincent Parrone | Solutions Architect</title>
  <meta
    name="description"
    content="The portfolio of Will Vincent Parrone, a Solutions Architect, Software Developer, and Project Manager."
  />
  <style>
    html {
      scroll-behavior: smooth;
    }
  </style>
</svelte:head>

<div class="bg-cream font-sans text-charcoal">
  <header class="p-4 md:px-8 max-w-5xl mx-auto">
    <nav class="flex justify-between items-center">
      <a href="/" class="font-bold text-lg hover:text-accent transition-colors"
        >Will Vincent Parrone</a
      >
      <ul class="hidden md:flex space-x-6 text-stone font-medium">
        <li>
          <a href="#about" class="hover:text-accent transition-colors">About</a>
        </li>
        <li>
          <a href="#experience" class="hover:text-accent transition-colors"
            >Experience</a
          >
        </li>
        <li>
          <a href="#skills" class="hover:text-accent transition-colors"
            >Skills</a
          >
        </li>
        <li>
          <a href="#contact" class="hover:text-accent transition-colors"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>

  <main class="max-w-5xl mx-auto p-4 md:px-8">
    <section id="hero" class="min-h-screen flex flex-col justify-center py-20">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight">
        Exploring Boundaries, Creating Ideas.
      </h1>
      <p class="mt-4 text-xl text-stone">
        Solutions Architect • Software Developer • Project Manager
      </p>
    </section>

    <section id="about" data-observe class="py-20">
      <h2 class="text-3xl font-bold mb-4">About</h2>
      <p class="text-lg max-w-3xl text-stone leading-relaxed">
        I'm a generalist with extensive experience working as a Software
        Developer and a Project Manager, while also organizing charity projects
        on the side.
      </p>
    </section>

    <section id="experience" data-observe class="py-20">
      <h2 class="text-3xl font-bold mb-12">Experience</h2>
      <div class="space-y-12">
        {#each experience as job}
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="md:col-span-1">
              <p class="text-stone font-medium">{job.period}</p>
            </div>
            <div class="md:col-span-3 border border-gray-200 rounded-xl p-6">
              <h3 class="text-xl font-bold">{job.role}</h3>
              <p class="text-lg text-stone font-medium">{job.company}</p>
              <ul class="mt-4 list-disc list-inside space-y-2 text-stone">
                {#each job.tasks as task}
                  <li>{task}</li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section id="skills" data-observe class="py-20">
      <h2 class="text-3xl font-bold mb-12">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {#each Object.entries(skills) as [category, list]}
          <div>
            <h3 class="text-lg font-bold mb-4">{category}</h3>
            <div class="flex flex-wrap gap-2">
              {#each list as skill}
                <span
                  class="bg-gray-200 text-stone font-medium py-1 px-3 rounded-full text-sm"
                  >{skill}</span
                >
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section
      id="awards-orgs"
      data-observe
      class="py-20 opacity-0 transform translate-y-4 transition-all duration-700 ease-in-out"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 class="text-3xl font-bold mb-8">Awards</h2>
          <div class="space-y-8">
            {#each awards as award}
              <div>
                <h3 class="text-xl font-bold">{award.title}</h3>
                <p class="text-lg text-stone font-medium">{award.event}</p>
                <p class="mt-2 text-stone">{award.description}</p>
              </div>
            {/each}
          </div>
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-8">Organizations</h2>
          <div class="space-y-8">
            {#each organizations as org}
              <div>
                <h3 class="text-xl font-bold">{org.role}</h3>
                <p class="text-lg text-stone font-medium">
                  {org.org} • {org.period}
                </p>
                <p class="mt-2 text-stone">{org.description}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <footer id="contact" class="text-center pb-20">
      <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
      <p class="text-stone text-lg mb-8 max-w-lg mx-auto">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>
      <a
        href="mailto:wvparrone@gmail.com"
        class="inline-block bg-charcoal text-cream font-bold py-3 px-6 rounded-lg hover:bg-accent transition-colors"
      >
        Say Hello
      </a>
      <div class="mt-12 flex justify-center space-x-6">
        <a
          href="https://github.com/kyahwill/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-stone hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          {@html GithubIcon}
        </a>
        <a
          href="mailto:wvparrone@gmail.com"
          class="text-stone hover:text-accent transition-colors"
          aria-label="Email"
        >
          {@html MailIcon}
        </a>
        <a
          href="https://www.willvincentparrone.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="text-stone hover:text-accent transition-colors"
          aria-label="Professional Website"
        >
          {@html ExternalLinkIcon}
        </a>
      </div>
      <p class="mt-12 text-sm text-stone">
        © {new Date().getFullYear()} Will Vincent Parrone. All rights reserved.
      </p>
    </footer>
  </main>
</div>
