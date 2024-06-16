const interactions = {
  block: document.querySelector(".svg"),
  hideDiv: document.querySelector(".hideDiv"),
  hide: document.querySelector(".cancel"),

  init() {
    this.block.addEventListener("click", () => {
      this.hideDiv.style.display = "flex";
    });

    this.hide.addEventListener("click", () => {
      this.hideDiv.style.display = "none";
    });
  },
};

interactions.init();

let solarBenefits = document.querySelector(".solarBenefits");
let solarOBJS = [
  {
    p: `How does solar energy save money?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  },
  {
    p: `What are the environmental benefits of solar energy?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How can i know how much I pay for electricity?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How do I decide how big my system should be?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `What is net metering?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How does installing solar impact the values of my property?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How do solar photovoltaic (PV) panels work?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Do my solar panels produce power when the sun isn’t shining?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Can rain affect my solar panels?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Can I go off grid with solar panels?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Will I still receive an electric bill if I have solar panels?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Do solar panels work in a blackout?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How can I maintain my solar energy system?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How much will solar panel maintenance cost?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Can I afford to go solar?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Can I afford to go solar?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Is my roof suitable for solar panels?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `What size solar energy system should I get?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How long will my solar power system last?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `What happens if I sell my solar house?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `Can I sell or swap my solar system?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How can I get a free solar consultation?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `What are the top benefits of installing a solar energy system?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `What is the difference between an AC-coupled battery and a DC-coupled battery configuration?`,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `What type of solar panel should I buy for my business space?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `What should I look for in an installer?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
  {
    p: `How long does it take to install a system?
    `,
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12 12L22 2" stroke="#131313" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  },
];
solarOBJS.map((solarOBJ) => {
  solarBenefits.innerHTML += `
  <div class = "flex justify-between items-center border-b-2 border-green-200 gap-x-8 py-2">
  <p>${solarOBJ.p}</p>
  <h1>${solarOBJ.icon}</h1>
  </div>
  `;
});
