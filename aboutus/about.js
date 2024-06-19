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

let sellDiv = document.querySelector(".sameDiv");
let swaps = [
  {
    svg: `
        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="100" fill="#F9FDF9" fill-opacity="0.9"/>
<path d="M77.4046 50L53.3762 56.3174V72.7331L79.0459 64.2536L88.7487 54.7006L77.4046 50ZM104.996 62.1899C103.459 62.2284 102.898 62.592 105.183 63.7147C118.335 70.1882 138.031 88.4089 127.56 90.5689C94.5038 97.4337 73.3531 106.694 56.339 127.759C51.5416 133.704 50 150 50 150H139.88C139.88 150 111.001 145.488 109.172 133.811C106.077 114.093 149.583 111.848 149.999 91.0607C150.186 81.8221 131.653 64.3306 111.686 62.7203C110.523 62.6262 106.97 62.1407 104.996 62.1899ZM71.0261 70.9367L64.2342 73.1822V99.3157L71.7117 97.1771L71.0261 70.9367Z" fill="#35A137"/>
</svg>

        `,
    small: "Blaze a Trail",
    sell: "Tackle problems head-on. Lead the way.  Build unique services, products, markets and opportunities for all.",
  },
  {
    svg: `<svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="#F9FDF9" fill-opacity="0.9"/>
        <path d="M77.4046 50L53.3762 56.3174V72.7331L79.0459 64.2536L88.7487 54.7006L77.4046 50ZM104.996 62.1899C103.459 62.2284 102.898 62.592 105.183 63.7147C118.335 70.1882 138.031 88.4089 127.56 90.5689C94.5038 97.4337 73.3531 106.694 56.339 127.759C51.5416 133.704 50 150 50 150H139.88C139.88 150 111.001 145.488 109.172 133.811C106.077 114.093 149.583 111.848 149.999 91.0607C150.186 81.8221 131.653 64.3306 111.686 62.7203C110.523 62.6262 106.97 62.1407 104.996 62.1899ZM71.0261 70.9367L64.2342 73.1822V99.3157L71.7117 97.1771L71.0261 70.9367Z" fill="#35A137"/>
        </svg>
        
        `,
    small: "Blaze a Trail",
    sell: "Tackle problems head-on. Lead the way.  Build unique services, products, markets and opportunities for all.",
  },
  {
    svg: `
        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="100" fill="#F9FDF9" fill-opacity="0.9"/>
<path d="M77.4046 50L53.3762 56.3174V72.7331L79.0459 64.2536L88.7487 54.7006L77.4046 50ZM104.996 62.1899C103.459 62.2284 102.898 62.592 105.183 63.7147C118.335 70.1882 138.031 88.4089 127.56 90.5689C94.5038 97.4337 73.3531 106.694 56.339 127.759C51.5416 133.704 50 150 50 150H139.88C139.88 150 111.001 145.488 109.172 133.811C106.077 114.093 149.583 111.848 149.999 91.0607C150.186 81.8221 131.653 64.3306 111.686 62.7203C110.523 62.6262 106.97 62.1407 104.996 62.1899ZM71.0261 70.9367L64.2342 73.1822V99.3157L71.7117 97.1771L71.0261 70.9367Z" fill="#35A137"/>
</svg>

        `,
    small: "Blaze a Trail",
    sell: "Tackle problems head-on. Lead the way.  Build unique services, products, markets and opportunities for all.",
  },
  {
    svg: `<svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="#F9FDF9" fill-opacity="0.9"/>
        <path d="M77.4046 50L53.3762 56.3174V72.7331L79.0459 64.2536L88.7487 54.7006L77.4046 50ZM104.996 62.1899C103.459 62.2284 102.898 62.592 105.183 63.7147C118.335 70.1882 138.031 88.4089 127.56 90.5689C94.5038 97.4337 73.3531 106.694 56.339 127.759C51.5416 133.704 50 150 50 150H139.88C139.88 150 111.001 145.488 109.172 133.811C106.077 114.093 149.583 111.848 149.999 91.0607C150.186 81.8221 131.653 64.3306 111.686 62.7203C110.523 62.6262 106.97 62.1407 104.996 62.1899ZM71.0261 70.9367L64.2342 73.1822V99.3157L71.7117 97.1771L71.0261 70.9367Z" fill="#35A137"/>
        </svg>        
        `,
    small: "Blaze a Trail",
    sell: "Tackle problems head-on. Lead the way.  Build unique services, products, markets and opportunities for all.",
  },
];
swaps.map((swap) => {
  sellDiv.innerHTML += `
    <div class=" flex flex-col justify-center items-center gap-3 p-4 rounded-lg text-white text-center ">
    <svg width=150 height=150>${swap.svg}</svg>
    <h1 class= "text-3xl text-green-500 text-bold">${swap.small}</h1>
    <p class="text-small ">${swap.sell}</p>
    </div>

   
  </div>
  
</div>

    `;
});
let climate = document.querySelector(".climate");
let climateObjs = [
  {
    h1: "UNAB and Climate Change",
    p1: "UNAB's solar-powered solution provides clean, renewable energy for businesses and households and presents a sustainable alternative to fossil fuels. This is very important in combating the climate change issues we currently face in many parts, including Africa.",
    p2: "Every kilowatt of power generated through our solar solutions representsthe power that would have otherwise been generated by burning fossil fuels that release CO2 and other greenhouse gases(gases that warm the atmosphere).",
    p3: "At UNAB, we collect this data to help us track our efforts towards reducingglobal warming in line with international climate change agreements like the Paris Agreement.",
    image: "/aboutus/background/image 16.png",
  },
];
climateObjs.forEach((climateObj) => {
  climate.innerHTML += `
    <div class="flex flex-col gap-y-7 justify-center items-center px-4">
    <h1 class="text-3xl text-f9fdf9" style="width:300px ;">${climateObj.h1}</h1>
    <p class="text-f9fdf9">${climateObj.p1}</p>
    <p>${climateObj.p2}</p>
    <p>${climateObj.p3}</p>
    <img src="${climateObj.image}" alt="" class="w-full my-8">
    </div>  `;
});
let focusArea = document.querySelector(".focusArea");
let focusObjs = [
  {
    h1: "Our Focus Area",
    p: "We improve businesses and economic outcomes by emphasising reliable energy for productive use and reducing OPEX costs that threaten the sustainability of our target business clusters. We have perfected our role as a distributed utility by reducing pressure on the national grid and allowing local grid activity to serve industrial zones and the public good, thus stimulating economic growth.",
  },
  {
    h1: "FOCUS 1",
    p: "We can deliver quality solutions with superior customer service and timely after-sales technical support",
  },
  {
    h1: "FOCUS 1",
    p: "We can deliver quality solutions with superior customer service and timely after-sales technical support",
  },
  {
    h1: "FOCUS 1",
    p: "We can deliver quality solutions with superior customer service and timely after-sales technical support",
  },
];
let firstOBJ = focusObjs[0];
focusArea.innerHTML += `
<div class="w-full grid place-items-center gap-y-12 px-3 text-center">
<h1 class="text-3xl font-bold">${firstOBJ.h1}</h1>
<p style="font-size:14px; width:95%;" class="text-#131313">${firstOBJ.p}</p>
</div>    
`;
for (let i = 1; i < focusObjs.length; i++) {
  focusArea.innerHTML += `
  <div class="w-full text-center my-4 grid place-items-center mb-12">
    <h1 class ="text-2xl font-bold text-green-600">${focusObjs[i].h1}</h1>
    <p class="text-1xl" style="width:95%;">${focusObjs[i].p}</p>
  </div>
  `;
}

let partner = document.querySelector(".partner");
let client = document.querySelector(".clients");
let clientObject = [
  { image: `/cl and partner/image 10.png` },
  { image: `/cl and partner/image 10.png` },
  { image: `/cl and partner/image 10.png` },
  { image: `/cl and partner/image 10.png` },
];
clientObject.map((object) => {
  client.innerHTML += `
  <div>
  <img src="${object.image}"  class="grid gap-x-12" style=" width:140px;" alt="CLIENT" />
  </div>
  `;
});
clientObject.map((object) => {
  partner.innerHTML += `
  <div>
  <img src="${object.image}" style=" width:140px;" alt="CLIENT" />
  </div>
  `;
});
