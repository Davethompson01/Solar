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
    img: `/sell swap/image 27.jpg`,
    sell: " Audit Technical SiteSurvey (TSS)",
  },
  {
    img: `/sell swap/image 25.jpg`,
    sell: `System Design and
Recommendation`,
  },
  {
    img: `
       /sell swap/image 26.jpg
        `,
    sell: `Installation and Commisioning and Swap`,
  },
];

swaps.map((swap) => {
  sellDiv.innerHTML += `
  <div class="bg-white mt-8 rounded-lg grid place-items-center h-auto gap-y-8 py-12">
  <div><img src="${swap.img}" class="" ></div>
  <h1 class="text-green-900 font-bold text-center" style="font-size:23px;">${swap.sell}
 </h1>
  </div>
  `;
});

let aboutUs = document.querySelector(".aboutUsDiv");
let happys = [
  {
    number: `266+`,
    text: `Happy Paying Customers`,
  },
  {
    number: `2MW+`,
    text: `Current Installed Capacity`,
  },
  {
    number: `9MWh+`,
    text: `Current Storage Capacity`,
  },
  {
    number: `7+`,
    text: `Years in Business`,
  },
];

happys.map((happy) => {
  let gradient = "linear-gradient( #d2e115, #24a237)";
  aboutUs.innerHTML += `
  <div style="width:245px;height:120px;background:${gradient};" class="rounded-lg flex flex-col justify-center mt-7">
  <h1 style="font-size:2.6rem;" class="font-bold">${happy.number}</h1>
  <p style="font-size:14px;" class="font-semibold">${happy.text}</p>
  </div>
  `;
});

let sellFour = document.querySelector(".sameFour");
let qualitys = [
  {
    svg: `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path d="M45.4805 52.1035C45.1641 51.6738 45 51.1582 45 50.6426C45 49.1816 46.2891 48 47.8828 48H60.6914C62.0039 48 63.2344 48.6338 63.9023 49.665L71.9297 61.9219C66.2812 62.5771 61.2305 64.9941 57.4688 68.5713L45.4805 52.1035ZM104.508 52.1035L92.5312 68.5713C88.7695 64.9941 83.7188 62.5771 78.0703 61.9219L86.0977 49.665C86.7773 48.6338 87.9961 48 89.3086 48H102.117C103.711 48 105 49.1816 105 50.6426C105 51.1582 104.836 51.6738 104.52 52.1035H104.508ZM54.375 84.0938C54.375 79.0795 56.548 74.2706 60.4159 70.725C64.2839 67.1794 69.5299 65.1875 75 65.1875C80.4701 65.1875 85.7161 67.1794 89.5841 70.725C93.452 74.2706 95.625 79.0795 95.625 84.0938C95.625 89.108 93.452 93.9169 89.5841 97.4625C85.7161 101.008 80.4701 103 75 103C69.5299 103 64.2839 101.008 60.4159 97.4625C56.548 93.9169 54.375 89.108 54.375 84.0938ZM75.9844 73.8994C75.5859 73.1475 74.4258 73.1475 74.0156 73.8994L71.3906 78.7764C71.2266 79.0771 70.9219 79.2812 70.5703 79.3242L64.6875 80.1084C63.7852 80.2266 63.4336 81.2363 64.0781 81.8271L68.332 85.6299C68.5898 85.8662 68.707 86.1885 68.6484 86.5215L67.6406 91.8818C67.4883 92.6982 68.4258 93.332 69.2344 92.9453L74.4844 90.4102C74.8008 90.2598 75.1875 90.2598 75.5039 90.4102L80.7539 92.9453C81.5625 93.332 82.5 92.709 82.3477 91.8818L81.3398 86.5215C81.2812 86.1992 81.3984 85.8662 81.6562 85.6299L85.9102 81.8271C86.5664 81.2471 86.2031 80.2373 85.3008 80.1084L79.4297 79.3242C79.0781 79.2812 78.7617 79.0664 78.6094 78.7764L75.9844 73.8994Z" fill="white"/>
        </svg>`,
    sell: "Quality Products",
    small:
      "All our products are based on international Solar and highway traffic standard/certification.",
  },
  {
    svg: `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path d="M48.25 104.999H100.75V97.4993H48.25V104.999ZM93.25 74.9993H85.45C83.5445 74.9993 82 73.4548 82 71.5493V70.4407C82 67.2333 83.0406 64.1817 84.5148 61.3329C85.5824 59.2692 86.0266 56.8341 85.5754 54.2524C84.782 49.7079 81.0672 45.9673 76.5215 45.1763C69.4164 43.9399 63.25 49.3739 63.25 56.2493C63.25 57.9087 63.6156 59.4767 64.2684 60.8876C65.8305 64.2685 67 67.8157 67 71.5411V71.5493C67 73.4548 65.4555 74.9993 63.55 74.9993H55.75C49.5367 74.9993 44.5 80.036 44.5 86.2493V89.9993C44.5 92.07 46.1793 93.7493 48.25 93.7493H100.75C102.821 93.7493 104.5 92.07 104.5 89.9993V86.2493C104.5 80.036 99.4633 74.9993 93.25 74.9993Z" fill="white"/>
        </svg>`,
    sell: `Service Warranty`,
    small: `All our installations and products comes with warranty. Also, services warranty available too.`,
  },
  {
    svg: `
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="75" cy="75" r="75" fill="#002D01"/>
<path d="M90.1946 79.873C88.9023 78.5805 88.1763 76.8277 88.1763 75C88.1763 73.1723 88.9023 71.4195 90.1946 70.127C91.4869 68.8346 92.2129 67.0817 92.2129 65.2541C92.2129 63.4264 91.4869 61.6735 90.1946 60.3811L89.6205 59.807C88.3281 58.5147 86.5753 57.7888 84.7476 57.7888C82.9199 57.7888 81.1671 58.5147 79.8746 59.807C79.2346 60.4471 78.4748 60.9549 77.6385 61.3014C76.8023 61.6478 75.906 61.8261 75.0008 61.8261C74.0956 61.8261 73.1993 61.6478 72.3631 61.3014C71.5268 60.9549 70.767 60.4471 70.127 59.807C68.8346 58.5147 67.0817 57.7888 65.2541 57.7888C63.4264 57.7888 61.6735 58.5147 60.3811 59.807L59.807 60.3795C58.5147 61.6719 57.7888 63.4248 57.7888 65.2524C57.7888 67.0801 58.5147 68.833 59.807 70.1254C60.4471 70.7654 60.9549 71.5252 61.3014 72.3615C61.6478 73.1977 61.8261 74.094 61.8261 74.9992C61.8261 75.9044 61.6478 76.8007 61.3014 77.6369C60.9549 78.4732 60.4471 79.233 59.807 79.873C58.5147 81.1654 57.7888 82.9183 57.7888 84.7459C57.7888 86.5736 58.5147 88.3265 59.807 89.6189L60.3795 90.193C61.6719 91.4853 63.4248 92.2112 65.2524 92.2112C67.0801 92.2112 68.833 91.4853 70.1254 90.193C70.7654 89.5529 71.5252 89.0451 72.3615 88.6986C73.1977 88.3522 74.094 88.1739 74.9992 88.1739C75.9044 88.1739 76.8007 88.3522 77.6369 88.6986C78.4732 89.0451 79.233 89.5529 79.873 90.193C81.1654 91.4853 82.9183 92.2112 84.7459 92.2112C86.5736 92.2112 88.3265 91.4853 89.6189 90.193L90.193 89.6205C91.4853 88.3281 92.2112 86.5752 92.2112 84.7476C92.2112 82.9199 91.4853 81.1671 90.193 79.8746M51.4865 45H98.5135C102.096 45 105 47.9041 105 51.4865V98.5135C105 102.096 102.096 105 98.5135 105H51.4865C47.9041 105 45 102.096 45 98.5135V51.4865C45 47.9041 47.9041 45 51.4865 45ZM89.1892 67.7027C87.3613 67.7027 85.6084 66.9766 84.3159 65.6841C83.0234 64.3916 82.2973 62.6387 82.2973 60.8108C82.2973 58.983 81.5712 57.23 80.2787 55.9375C78.9862 54.645 77.2333 53.9189 75.4054 53.9189H74.5946C72.7668 53.9189 71.0138 54.645 69.7213 55.9375C68.4288 57.23 67.7027 58.983 67.7027 60.8108C67.7027 62.6387 66.9766 64.3916 65.6841 65.6841C64.3916 66.9766 62.6387 67.7027 60.8108 67.7027C58.983 67.7027 57.23 68.4288 55.9375 69.7213C54.645 71.0138 53.9189 72.7668 53.9189 74.5946V75.4054C53.9189 77.2333 54.645 78.9862 55.9375 80.2787C57.23 81.5712 58.983 82.2973 60.8108 82.2973C62.6387 82.2973 64.3916 83.0234 65.6841 84.3159C66.9766 85.6084 67.7027 87.3613 67.7027 89.1892C67.7027 91.017 68.4288 92.77 69.7213 94.0625C71.0138 95.355 72.7668 96.0811 74.5946 96.0811H75.4054C77.2333 96.0811 78.9862 95.355 80.2787 94.0625C81.5712 92.77 82.2973 91.017 82.2973 89.1892C82.2973 87.3613 83.0234 85.6084 84.3159 84.3159C85.6084 83.0234 87.3613 82.2973 89.1892 82.2973C91.017 82.2973 92.77 81.5712 94.0625 80.2787C95.355 78.9862 96.0811 77.2333 96.0811 75.4054V74.5946C96.0811 72.7668 95.355 71.0138 94.0625 69.7213C92.77 68.4288 91.017 67.7027 89.1892 67.7027Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        `,
    sell: `Highly Experienced`,
    small: `7 years plus of experience in providing sustainable solar electricity for both small and big companies.`,
  },
  {
    svg: `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path d="M93.0003 54.4738C90.6134 54.4738 88.3242 53.4756 86.6363 51.699C84.9485 49.9223 84.0003 47.5126 84.0003 45M93.0003 60.7896C90.6134 60.7896 88.3242 61.7877 86.6363 63.5644C84.9485 65.3411 84.0003 67.7507 84.0003 70.2633M57.0001 54.4738C59.3871 54.4738 61.6763 53.4756 63.3641 51.699C65.0519 49.9223 66.0002 47.5126 66.0002 45M57.0001 60.7896C59.3871 60.7896 61.6763 61.7877 63.3641 63.5644C65.0519 65.3411 66.0002 67.7507 66.0002 70.2633M54.0001 99.9099H60.7801C63.8101 99.9099 66.8792 100.245 69.8282 100.883C75.0932 102.021 80.5105 102.147 85.8183 101.255C88.4223 100.813 90.9783 100.134 93.2943 98.9593C95.3824 97.8951 97.9414 96.4014 99.6604 94.7246C101.376 93.0509 103.164 90.313 104.43 88.1719C105.522 86.334 104.994 84.0824 103.272 82.715C102.305 81.9741 101.139 81.575 99.9424 81.575C98.7458 81.575 97.58 81.9741 96.6124 82.715L91.1913 87.0256C89.0913 88.6993 86.7963 90.2372 84.0633 90.6951C83.7333 90.7488 83.3883 90.7993 83.0283 90.8435M83.0283 90.8435C82.9184 90.8569 82.8084 90.8695 82.6983 90.8814M83.0283 90.8435C83.5085 90.7068 83.9487 90.4463 84.3093 90.0856C84.7614 89.6739 85.1305 89.1711 85.395 88.6068C85.6594 88.0425 85.8138 87.4282 85.8491 86.8C85.8843 86.1719 85.7996 85.5427 85.6001 84.9496C85.4006 84.3565 85.0902 83.8114 84.6873 83.3466C84.2964 82.8897 83.841 82.4989 83.3373 82.1876C74.9462 76.9171 61.8871 80.9308 54.0001 86.8203M83.0283 90.8435C82.9199 90.8683 82.8092 90.881 82.6983 90.8814M82.6983 90.8814C80.889 91.0728 79.0663 91.077 77.2562 90.894M91.2423 68.4128C93.0003 66.5623 93.0003 63.5875 93.0003 57.6317C93.0003 51.6758 93.0003 48.7011 91.2423 46.8505C89.4843 45 86.6583 45 81.0003 45H69.0002C63.3421 45 60.5161 45 58.7581 46.8505C57.0001 48.7011 57.0001 51.6758 57.0001 57.6317C57.0001 63.5875 57.0001 66.5623 58.7581 68.4128C60.5161 70.2633 63.3421 70.2633 69.0002 70.2633H81.0003C86.6583 70.2633 89.4843 70.2633 91.2423 68.4128ZM78.0002 57.6317C78.0002 58.4692 77.6842 59.2724 77.1216 59.8647C76.5589 60.4569 75.7959 60.7896 75.0002 60.7896C74.2046 60.7896 73.4415 60.4569 72.8789 59.8647C72.3163 59.2724 72.0002 58.4692 72.0002 57.6317C72.0002 56.7941 72.3163 55.9909 72.8789 55.3987C73.4415 54.8065 74.2046 54.4738 75.0002 54.4738C75.7959 54.4738 76.5589 54.8065 77.1216 55.3987C77.6842 55.9909 78.0002 56.7941 78.0002 57.6317ZM49.5 79.7371C51.9853 79.7371 54.0001 81.8579 54.0001 84.474V100.264C54.0001 102.88 51.9853 105 49.5 105C47.0147 105 45 102.88 45 100.264V84.474C45 81.8579 47.0147 79.7371 49.5 79.7371Z" stroke="white" stroke-width="5" stroke-linecap="round"/>
        </svg>
        `,
    sell: `Save Energy Cost`,
    small: `Saving energy cost over the years by maintenance of the original solar products gotten from us.`,
  },
];

qualitys.map((quality) => {
  sellFour.innerHTML += `
  <div class="bg-white mt-8 rounded-lg grid place-items-center text-center w-full p-6 gap-y-6" style="height:100%"> 
  <div>${quality.svg}</div>
  <h1 style="font-size:24px; color:#35A137;">${quality.sell}</h1>
  <p class=" text-center text-lg font-bold ">${quality.small}</p>
  </div>
  `;
});

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
  <img src="${object.image}" style=" width:140px;" alt="CLIENT" />
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
let threepics = document.querySelector(".threePics");
let threeImg = [
  { image: `/three background pics/Frame 712.png` },
  { image: `/three background pics/Frame 712.png` },
  { image: `/three background pics/Frame 712.png` },
];

threeImg.map((three) => {
  threepics.innerHTML += `
  <div class="p-4 grid place-items-center">
  <img src="${three.image}" alt="" class="w-full" style="height:100%;"/>
  </div>
  `;
});

let rounded = document.querySelector(".rounded");
let rounds = [
  {
    image: `/rounded/Rectangle 130.png`,
    sell: "Career",
    small: "Explore available opportunities on the UNAB team.",
  },
  {
    image: `/rounded/Rectangle 130.png`,
    sell: `Career`,
    small: `Explore available opportunities 
        on the UNAB team.`,
  },
  {
    image: `/rounded/Rectangle 130.png
        `,
    sell: `Career`,
    small: `Explore available opportunities 
        on the UNAB team.`,
  },
];

rounds.forEach((round) => {
  rounded.innerHTML += `
        <div class=" max-w-2xl mt-8 rounded-lg grid gap-y-10 place-items-center pb-12" style="box-shadow: 0 0 5px gray;">
            <img src="${round.image}" class="w-full h-auto" alt="" / >
            <h1 style="font-size: 24px; color: #35A137;" class="font-bold">${round.sell}</h1>
            <p class="max-w-2xl text-center text-2xl font-bold;">${round.small}</p>
        </div>
    `;
});
