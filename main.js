let block = document.querySelector(".svg")
let hideDiv = document.querySelector(".hideDiv")
block.addEventListener('click', function () {
    hideDiv.style.display = 'block'
    hideDiv.style.display = 'flex'
})
let hide = document.querySelector(".cancel")
hide.addEventListener('click', function () {
    hideDiv.style.display = 'none'
})
// let sellDiv = document.querySelector(".sameDiv")
// let swaps = [
//     {
//         svg:`<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="75" cy="75" r="75" fill="#002D01"/>
//         <path d="M59.9916 66.9514V70.4411L70.4968 62.8446L59.9916 56V59.1102C55.7638 59.5058 51.849 61.5357 49.0604 64.7783C46.2718 68.0208 44.8238 72.2267 45.0171 76.5223C45.2105 80.8178 47.0304 84.8728 50.0987 87.8449C53.1671 90.817 57.248 92.4778 61.4939 92.4821C65.2757 92.4821 70.4968 91.1345 73.5013 87.9214C77.2516 83.5345 81.7233 72.4874 81.7233 72.4874L68.3257 81.2825C67.4227 82.3146 66.2913 83.1158 65.0241 83.6204C63.7569 84.1251 62.3898 84.319 61.0344 84.1862C59.6791 84.0535 58.374 83.5979 57.2257 82.8567C56.0775 82.1154 55.1187 81.1096 54.4277 79.9213C53.7367 78.733 53.333 77.396 53.2497 76.0196C53.1664 74.6431 53.4059 73.2662 53.9485 72.0014C54.4911 70.7366 55.3214 69.6197 56.3717 68.742C57.422 67.8643 58.6624 67.2507 59.9916 66.9514Z" fill="white"/>
//         <path d="M90.0084 83.0522V79.5625L79.5032 87.1625L90.0084 94V90.8933C94.2362 90.4977 98.151 88.4678 100.94 85.2253C103.728 81.9827 105.176 77.7768 104.983 73.4813C104.789 69.1857 102.97 65.1307 99.9013 62.1586C96.8329 59.1865 92.752 57.5258 88.5061 57.5214C84.7243 57.5214 79.5032 58.8691 76.5022 62.0821C72.7484 66.4691 68.2767 77.5162 68.2767 77.5162L81.6743 68.721C82.5776 67.6912 83.7086 66.8922 84.9749 66.3892C86.2412 65.8863 87.607 65.6938 88.9608 65.8272C90.3146 65.9607 91.6181 66.4164 92.7649 67.1572C93.9116 67.898 94.8692 68.9029 95.5595 70.0899C96.2498 71.2769 96.6532 72.6123 96.7368 73.9873C96.8204 75.3623 96.5819 76.7378 96.0407 78.0016C95.4994 79.2654 94.6708 80.3817 93.6225 81.2594C92.5742 82.1372 91.3358 82.7515 90.0084 83.0522Z" fill="white"/>
//         </svg>`,
//         sell:'Sell and Swap',
//         small:'Our outright sale option allows customers to pay the outright cost to purchase a system.'
//     }
// ] 
// swaps.map(swap=> {
//     let div = document.createElement("div")
//     div.style.background = 'blue'


//     div.appendChild(swap)
//     sellDiv.appendChild(div)
// })



let sellDiv = document.querySelector(".sameDiv");
let swaps = [
    {
        svg: `<svg width="140" height="140" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path d="M59.9916 66.9514V70.4411L70.4968 62.8446L59.9916 56V59.1102C55.7638 59.5058 51.849 61.5357 49.0604 64.7783C46.2718 68.0208 44.8238 72.2267 45.0171 76.5223C45.2105 80.8178 47.0304 84.8728 50.0987 87.8449C53.1671 90.817 57.248 92.4778 61.4939 92.4821C65.2757 92.4821 70.4968 91.1345 73.5013 87.9214C77.2516 83.5345 81.7233 72.4874 81.7233 72.4874L68.3257 81.2825C67.4227 82.3146 66.2913 83.1158 65.0241 83.6204C63.7569 84.1251 62.3898 84.319 61.0344 84.1862C59.6791 84.0535 58.374 83.5979 57.2257 82.8567C56.0775 82.1154 55.1187 81.1096 54.4277 79.9213C53.7367 78.733 53.333 77.396 53.2497 76.0196C53.1664 74.6431 53.4059 73.2662 53.9485 72.0014C54.4911 70.7366 55.3214 69.6197 56.3717 68.742C57.422 67.8643 58.6624 67.2507 59.9916 66.9514Z" fill="white"/>
        <path d="M90.0084 83.0522V79.5625L79.5032 87.1625L90.0084 94V90.8933C94.2362 90.4977 98.151 88.4678 100.94 85.2253C103.728 81.9827 105.176 77.7768 104.983 73.4813C104.789 69.1857 102.97 65.1307 99.9013 62.1586C96.8329 59.1865 92.752 57.5258 88.5061 57.5214C84.7243 57.5214 79.5032 58.8691 76.5022 62.0821C72.7484 66.4691 68.2767 77.5162 68.2767 77.5162L81.6743 68.721C82.5776 67.6912 83.7086 66.8922 84.9749 66.3892C86.2412 65.8863 87.607 65.6938 88.9608 65.8272C90.3146 65.9607 91.6181 66.4164 92.7649 67.1572C93.9116 67.898 94.8692 68.9029 95.5595 70.0899C96.2498 71.2769 96.6532 72.6123 96.7368 73.9873C96.8204 75.3623 96.5819 76.7378 96.0407 78.0016C95.4994 79.2654 94.6708 80.3817 93.6225 81.2594C92.5742 82.1372 91.3358 82.7515 90.0084 83.0522Z" fill="white"/>
        </svg>`,
        sell: 'Sell and Swap',
        small: 'Our outright sale option allows customers to pay the outright cost to purchase a system.'
    }, {
        svg: `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M102.838 99H47.1614C46.7218 99.0001 46.2927 98.868 45.9311 98.6212C45.5696 98.3745 45.2929 98.0248 45.1379 97.6189C44.9829 97.213 44.957 96.7701 45.0636 96.3492C45.1702 95.9284 45.4043 95.5496 45.7346 95.2635C49.6194 91.8992 51.6169 90.1989 51.7282 90.1616C51.9379 90.1019 52.1454 90.0389 52.3465 89.9803C58.246 88.1936 59.6566 86.648 60.1884 84.9424C61.1655 84.5114 61.5309 84.2149 61.7254 83.1898C61.8465 82.5392 61.9416 80.3525 61.8487 79.5952C61.2898 79.0565 60.9861 77.6709 60.7159 77.1173C60.0889 75.8362 59.9787 75.1738 59.3766 73.0181C59.2848 72.7301 59.0859 72.712 58.9464 72.6554C58.7367 72.5701 58.5541 72.4314 58.3606 72.1712C57.8126 71.4394 58.1552 71.0256 57.6418 69.6357C56.9879 68.0549 56.7241 66.4944 57.2224 66.0272C57.5575 65.7306 57.7845 65.9226 57.9477 65.9824C58.0558 66.0229 57.9725 65.753 57.8763 65.3637C57.4818 63.7722 57.4591 60.5957 57.4591 60.5957L57.5197 60.5946C57.3175 59.2666 57.364 58.0431 58.2568 56.1893C59.1356 54.2938 59.9214 54.7119 60.3646 54.2255C62.227 52.1551 63.9402 52.1018 65.2265 51.5546C68.1179 50.3226 70.5553 51.4138 72.5052 52.2191C73.3267 52.5679 75.7166 52.8378 76.5154 54.5786C76.9802 55.5919 77.3887 57.3253 77.5465 57.4799C77.713 58.2277 77.8038 59.433 77.7173 60.7546C77.6114 62.3866 77.6092 63.736 77.218 65.3285C77.1185 65.7157 77.0331 65.9866 77.1423 65.945C77.3077 65.8842 77.513 65.6645 77.8481 65.96C78.3442 66.4272 78.2426 68.0549 77.5887 69.6357C77.0774 71.0256 77.3596 71.2816 77.0331 71.8512C76.8926 72.0997 76.7953 72.4357 76.3727 72.5872C76.2322 72.6384 76.0614 72.761 75.9965 73.0586C75.5404 75.1536 75.4258 75.5354 74.9481 77.1077C74.7697 77.6944 74.3622 78.9605 73.8239 79.4586C73.7115 80.3589 73.9774 82.6693 74.1298 83.1898C74.4865 84.409 74.827 84.6469 75.5209 84.9424C76.3403 86.6331 76.9802 88.8187 82.8257 89.8992C83.1824 89.5024 83.3769 89.1035 83.5034 88.6907C84.2081 88.3749 84.4708 88.1573 84.6102 87.4064C84.6978 86.9285 84.7659 85.3253 84.6999 84.7696C84.2968 84.3749 84.0773 83.3584 83.8828 82.952C83.432 82.0133 83.3531 81.5269 82.9186 79.9472C82.8527 79.7349 82.7089 79.7221 82.6084 79.6805C82.4363 79.6044 82.29 79.4811 82.1868 79.3253C81.7923 78.7888 82.0388 78.4858 81.668 77.4661C81.1978 76.3066 81.0087 75.1621 81.3675 74.8197C81.6086 74.6032 81.7707 74.7429 81.8896 74.7877C81.9674 74.8165 81.908 74.6192 81.8377 74.3333C81.5534 73.1664 81.5372 70.8378 81.5372 70.8378L81.5805 70.8357C81.4356 69.8618 81.4691 68.9648 82.1123 67.6048C82.7457 66.216 83.3121 66.5221 83.6298 66.1648C84.9723 64.6469 86.2056 64.6074 87.132 64.2064C89.2149 63.3029 90.9713 64.104 92.3754 64.6938C92.9667 64.9498 94.6885 65.1472 95.2636 66.424C95.5986 67.1685 95.8937 68.4389 96.0072 68.553C96.1261 69.1002 96.1921 69.9845 96.1304 70.953C96.0548 72.1498 96.0526 73.1397 95.7705 74.3077C95.6981 74.5914 95.6365 74.7898 95.7165 74.7589C95.8354 74.7162 95.9824 74.5541 96.2245 74.7706C96.5812 75.113 96.5088 76.3066 96.0375 77.4661C95.67 78.4858 95.8721 78.6736 95.6376 79.0906C95.5359 79.273 95.4668 79.5194 95.162 79.6304C95.0604 79.6677 94.9371 79.7584 94.8907 79.976C94.5621 81.512 94.4799 81.7925 94.1351 82.9456C94.0076 83.3765 93.7136 84.3045 93.3244 84.6693C93.2444 85.3307 93.4358 87.0245 93.546 87.4064C93.8022 88.3003 94.0476 88.4741 94.548 88.6907C95.163 89.9824 95.6365 91.6667 100.354 92.4208C100.569 92.4549 100.79 92.488 101.024 92.5189L104.245 95.2475C104.58 95.5312 104.819 95.9093 104.93 96.3311C105.041 96.7528 105.018 97.198 104.865 97.6066C104.712 98.0153 104.435 98.3679 104.073 98.617C103.711 98.8661 103.28 98.9997 102.838 99Z" fill="white"/>
        </svg>`,
        sell: `Consultation`,
        small: `Arnergy's finance model allows customers to lease the asset towards ownership after 36 months.`
    }, {
        svg: `
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path d="M73.2083 48V53.9446L69.0535 49.8608L65.9048 53.0119L69.9817 57.1667H64.0417V61.75H69.9862L65.9048 65.9048L69.0535 69.0535L73.2083 64.9767V70.9167H77.7917V64.9721L81.9465 69.0535L85.0975 65.9048L81.0115 61.75H86.9583V57.1667H81.0138L85.0975 53.0119L81.9465 49.8608L77.7917 53.9469V48H73.2083ZM75.5 54.875C78.0254 54.875 80.0833 56.9329 80.0833 59.4583C80.0833 61.9838 78.0254 64.0417 75.5 64.0417C72.9746 64.0417 70.9167 61.9838 70.9167 59.4583C70.9167 56.9329 72.9746 54.875 75.5 54.875ZM53.0852 75.5L48 95.8385V103H103V95.8385L97.9148 75.5H53.0852ZM56.6648 80.0833H94.3375L98.4167 96.4115V98.4167H52.5833V96.4115L56.6648 80.0833ZM59.4583 82.375L58.5279 86.5298H63.3267L64.0417 82.375H59.4583ZM68.625 82.375L68.1942 86.5298H72.9929L73.2083 82.375H68.625ZM77.7917 82.375L78.0071 86.5298H82.8035L82.375 82.375H77.7917ZM86.9583 82.375L87.6756 86.5298H92.4721L91.5417 82.375H86.9583ZM57.5952 91.1131L56.7404 96.125H61.9654L62.6827 91.1108L57.5952 91.1131ZM67.9077 91.1131L67.4792 96.125H72.7798L72.9929 91.1108L67.9077 91.1131ZM78.0071 91.1131L78.2202 96.125H83.5208L83.09 91.1108L78.0071 91.1131ZM88.3196 91.1131L89.0346 96.125H94.2642L93.4048 91.1108L88.3196 91.1131Z" fill="white"/>
        </svg>
        `,
        sell: `Solar upgrade and install`,
        small: `Our outright sale option allows customers to pay the outright cost to purchase a system.`
    }
];

swaps.map(swap => {
    let div = document.createElement("div");
    div.style.background = '#fff'
    div.style.marginTop = '2rem'
    div.style.height = '290px'
    div.style.borderRadius = `12px`
    div.style.display = `grid`
    div.style.placeItems = `center`

    let svgElement = document.createElement("div");
    svgElement.innerHTML = swap.svg;
    div.appendChild(svgElement)
    let sellText = document.createElement("h1");
    sellText.textContent = swap.sell;
    sellText.style.fontSize = `24px`
    sellText.style.color = `green`
    let smallText = document.createElement("p");
    smallText.textContent = swap.small
    smallText.style.fontSize = `15px`
    smallText.style.width = `250px`
    smallText.style.textAlign = 'center';
    div.appendChild(sellText)
    div.appendChild(smallText)
    sellDiv.appendChild(div)
})
let aboutUs = document.querySelector(".aboutUsDiv")
let happys = [
    {
        number: `266+`,
        text: `Happy Paying Customers`
    }, {
        number: `2MW+`,
        text: `Current Installed Capacity`
    }, {
        number: `9MWh+`,
        text: `Current Storage Capacity`
    }, {
        number: `7+`,
        text: `Years in Business`
    }
]
happys.map(happy => {
    let gradient = "linear-gradient( #d2e115, #24a237)";
    let div = document.createElement('div')

    div.style.width = `290px`
    div.style.background = gradient
    div.style.borderRadius = `12px`
    div.style.height = `120px`
    div.style.display = `flex`
    div.style.flexDirection = `column`
    div.style.justifyContent = `center`
    div.style.marginTop = `30px`
    let h1 = document.createElement("h1")
    h1.textContent = happy.number 
    h1.style.fontSize = `2.6rem`
    let p = document.createElement("p")
    p.textContent = happy.text
    p.style.fontSize = `14px`

    div.appendChild(h1)
    div.appendChild(p)
    aboutUs.appendChild(div)
})

let sellFour = document.querySelector(".sameFour");
let qualitys = [
    {
        svg: `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path d="M45.4805 52.1035C45.1641 51.6738 45 51.1582 45 50.6426C45 49.1816 46.2891 48 47.8828 48H60.6914C62.0039 48 63.2344 48.6338 63.9023 49.665L71.9297 61.9219C66.2812 62.5771 61.2305 64.9941 57.4688 68.5713L45.4805 52.1035ZM104.508 52.1035L92.5312 68.5713C88.7695 64.9941 83.7188 62.5771 78.0703 61.9219L86.0977 49.665C86.7773 48.6338 87.9961 48 89.3086 48H102.117C103.711 48 105 49.1816 105 50.6426C105 51.1582 104.836 51.6738 104.52 52.1035H104.508ZM54.375 84.0938C54.375 79.0795 56.548 74.2706 60.4159 70.725C64.2839 67.1794 69.5299 65.1875 75 65.1875C80.4701 65.1875 85.7161 67.1794 89.5841 70.725C93.452 74.2706 95.625 79.0795 95.625 84.0938C95.625 89.108 93.452 93.9169 89.5841 97.4625C85.7161 101.008 80.4701 103 75 103C69.5299 103 64.2839 101.008 60.4159 97.4625C56.548 93.9169 54.375 89.108 54.375 84.0938ZM75.9844 73.8994C75.5859 73.1475 74.4258 73.1475 74.0156 73.8994L71.3906 78.7764C71.2266 79.0771 70.9219 79.2812 70.5703 79.3242L64.6875 80.1084C63.7852 80.2266 63.4336 81.2363 64.0781 81.8271L68.332 85.6299C68.5898 85.8662 68.707 86.1885 68.6484 86.5215L67.6406 91.8818C67.4883 92.6982 68.4258 93.332 69.2344 92.9453L74.4844 90.4102C74.8008 90.2598 75.1875 90.2598 75.5039 90.4102L80.7539 92.9453C81.5625 93.332 82.5 92.709 82.3477 91.8818L81.3398 86.5215C81.2812 86.1992 81.3984 85.8662 81.6562 85.6299L85.9102 81.8271C86.5664 81.2471 86.2031 80.2373 85.3008 80.1084L79.4297 79.3242C79.0781 79.2812 78.7617 79.0664 78.6094 78.7764L75.9844 73.8994Z" fill="white"/>
        </svg>`,
        sell: 'Quality Products',
        small: "All our products are based on international Solar and highway traffic standard/certification."
    }, {
        svg: `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path d="M48.25 104.999H100.75V97.4993H48.25V104.999ZM93.25 74.9993H85.45C83.5445 74.9993 82 73.4548 82 71.5493V70.4407C82 67.2333 83.0406 64.1817 84.5148 61.3329C85.5824 59.2692 86.0266 56.8341 85.5754 54.2524C84.782 49.7079 81.0672 45.9673 76.5215 45.1763C69.4164 43.9399 63.25 49.3739 63.25 56.2493C63.25 57.9087 63.6156 59.4767 64.2684 60.8876C65.8305 64.2685 67 67.8157 67 71.5411V71.5493C67 73.4548 65.4555 74.9993 63.55 74.9993H55.75C49.5367 74.9993 44.5 80.036 44.5 86.2493V89.9993C44.5 92.07 46.1793 93.7493 48.25 93.7493H100.75C102.821 93.7493 104.5 92.07 104.5 89.9993V86.2493C104.5 80.036 99.4633 74.9993 93.25 74.9993Z" fill="white"/>
        </svg>`,
        sell: `Service Warranty`,
        small: `All our installations and products comes with warranty. Also, services warranty available too.`
    }, {
        svg: `
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="75" cy="75" r="75" fill="#002D01"/>
<path d="M90.1946 79.873C88.9023 78.5805 88.1763 76.8277 88.1763 75C88.1763 73.1723 88.9023 71.4195 90.1946 70.127C91.4869 68.8346 92.2129 67.0817 92.2129 65.2541C92.2129 63.4264 91.4869 61.6735 90.1946 60.3811L89.6205 59.807C88.3281 58.5147 86.5753 57.7888 84.7476 57.7888C82.9199 57.7888 81.1671 58.5147 79.8746 59.807C79.2346 60.4471 78.4748 60.9549 77.6385 61.3014C76.8023 61.6478 75.906 61.8261 75.0008 61.8261C74.0956 61.8261 73.1993 61.6478 72.3631 61.3014C71.5268 60.9549 70.767 60.4471 70.127 59.807C68.8346 58.5147 67.0817 57.7888 65.2541 57.7888C63.4264 57.7888 61.6735 58.5147 60.3811 59.807L59.807 60.3795C58.5147 61.6719 57.7888 63.4248 57.7888 65.2524C57.7888 67.0801 58.5147 68.833 59.807 70.1254C60.4471 70.7654 60.9549 71.5252 61.3014 72.3615C61.6478 73.1977 61.8261 74.094 61.8261 74.9992C61.8261 75.9044 61.6478 76.8007 61.3014 77.6369C60.9549 78.4732 60.4471 79.233 59.807 79.873C58.5147 81.1654 57.7888 82.9183 57.7888 84.7459C57.7888 86.5736 58.5147 88.3265 59.807 89.6189L60.3795 90.193C61.6719 91.4853 63.4248 92.2112 65.2524 92.2112C67.0801 92.2112 68.833 91.4853 70.1254 90.193C70.7654 89.5529 71.5252 89.0451 72.3615 88.6986C73.1977 88.3522 74.094 88.1739 74.9992 88.1739C75.9044 88.1739 76.8007 88.3522 77.6369 88.6986C78.4732 89.0451 79.233 89.5529 79.873 90.193C81.1654 91.4853 82.9183 92.2112 84.7459 92.2112C86.5736 92.2112 88.3265 91.4853 89.6189 90.193L90.193 89.6205C91.4853 88.3281 92.2112 86.5752 92.2112 84.7476C92.2112 82.9199 91.4853 81.1671 90.193 79.8746M51.4865 45H98.5135C102.096 45 105 47.9041 105 51.4865V98.5135C105 102.096 102.096 105 98.5135 105H51.4865C47.9041 105 45 102.096 45 98.5135V51.4865C45 47.9041 47.9041 45 51.4865 45ZM89.1892 67.7027C87.3613 67.7027 85.6084 66.9766 84.3159 65.6841C83.0234 64.3916 82.2973 62.6387 82.2973 60.8108C82.2973 58.983 81.5712 57.23 80.2787 55.9375C78.9862 54.645 77.2333 53.9189 75.4054 53.9189H74.5946C72.7668 53.9189 71.0138 54.645 69.7213 55.9375C68.4288 57.23 67.7027 58.983 67.7027 60.8108C67.7027 62.6387 66.9766 64.3916 65.6841 65.6841C64.3916 66.9766 62.6387 67.7027 60.8108 67.7027C58.983 67.7027 57.23 68.4288 55.9375 69.7213C54.645 71.0138 53.9189 72.7668 53.9189 74.5946V75.4054C53.9189 77.2333 54.645 78.9862 55.9375 80.2787C57.23 81.5712 58.983 82.2973 60.8108 82.2973C62.6387 82.2973 64.3916 83.0234 65.6841 84.3159C66.9766 85.6084 67.7027 87.3613 67.7027 89.1892C67.7027 91.017 68.4288 92.77 69.7213 94.0625C71.0138 95.355 72.7668 96.0811 74.5946 96.0811H75.4054C77.2333 96.0811 78.9862 95.355 80.2787 94.0625C81.5712 92.77 82.2973 91.017 82.2973 89.1892C82.2973 87.3613 83.0234 85.6084 84.3159 84.3159C85.6084 83.0234 87.3613 82.2973 89.1892 82.2973C91.017 82.2973 92.77 81.5712 94.0625 80.2787C95.355 78.9862 96.0811 77.2333 96.0811 75.4054V74.5946C96.0811 72.7668 95.355 71.0138 94.0625 69.7213C92.77 68.4288 91.017 67.7027 89.1892 67.7027Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        `,
        sell: `Highly Experienced`,
        small: `7 years plus of experience in providing sustainable solar electricity for both small and big companies.`
    },{
        svg: `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#002D01"/>
        <path d="M93.0003 54.4738C90.6134 54.4738 88.3242 53.4756 86.6363 51.699C84.9485 49.9223 84.0003 47.5126 84.0003 45M93.0003 60.7896C90.6134 60.7896 88.3242 61.7877 86.6363 63.5644C84.9485 65.3411 84.0003 67.7507 84.0003 70.2633M57.0001 54.4738C59.3871 54.4738 61.6763 53.4756 63.3641 51.699C65.0519 49.9223 66.0002 47.5126 66.0002 45M57.0001 60.7896C59.3871 60.7896 61.6763 61.7877 63.3641 63.5644C65.0519 65.3411 66.0002 67.7507 66.0002 70.2633M54.0001 99.9099H60.7801C63.8101 99.9099 66.8792 100.245 69.8282 100.883C75.0932 102.021 80.5105 102.147 85.8183 101.255C88.4223 100.813 90.9783 100.134 93.2943 98.9593C95.3824 97.8951 97.9414 96.4014 99.6604 94.7246C101.376 93.0509 103.164 90.313 104.43 88.1719C105.522 86.334 104.994 84.0824 103.272 82.715C102.305 81.9741 101.139 81.575 99.9424 81.575C98.7458 81.575 97.58 81.9741 96.6124 82.715L91.1913 87.0256C89.0913 88.6993 86.7963 90.2372 84.0633 90.6951C83.7333 90.7488 83.3883 90.7993 83.0283 90.8435M83.0283 90.8435C82.9184 90.8569 82.8084 90.8695 82.6983 90.8814M83.0283 90.8435C83.5085 90.7068 83.9487 90.4463 84.3093 90.0856C84.7614 89.6739 85.1305 89.1711 85.395 88.6068C85.6594 88.0425 85.8138 87.4282 85.8491 86.8C85.8843 86.1719 85.7996 85.5427 85.6001 84.9496C85.4006 84.3565 85.0902 83.8114 84.6873 83.3466C84.2964 82.8897 83.841 82.4989 83.3373 82.1876C74.9462 76.9171 61.8871 80.9308 54.0001 86.8203M83.0283 90.8435C82.9199 90.8683 82.8092 90.881 82.6983 90.8814M82.6983 90.8814C80.889 91.0728 79.0663 91.077 77.2562 90.894M91.2423 68.4128C93.0003 66.5623 93.0003 63.5875 93.0003 57.6317C93.0003 51.6758 93.0003 48.7011 91.2423 46.8505C89.4843 45 86.6583 45 81.0003 45H69.0002C63.3421 45 60.5161 45 58.7581 46.8505C57.0001 48.7011 57.0001 51.6758 57.0001 57.6317C57.0001 63.5875 57.0001 66.5623 58.7581 68.4128C60.5161 70.2633 63.3421 70.2633 69.0002 70.2633H81.0003C86.6583 70.2633 89.4843 70.2633 91.2423 68.4128ZM78.0002 57.6317C78.0002 58.4692 77.6842 59.2724 77.1216 59.8647C76.5589 60.4569 75.7959 60.7896 75.0002 60.7896C74.2046 60.7896 73.4415 60.4569 72.8789 59.8647C72.3163 59.2724 72.0002 58.4692 72.0002 57.6317C72.0002 56.7941 72.3163 55.9909 72.8789 55.3987C73.4415 54.8065 74.2046 54.4738 75.0002 54.4738C75.7959 54.4738 76.5589 54.8065 77.1216 55.3987C77.6842 55.9909 78.0002 56.7941 78.0002 57.6317ZM49.5 79.7371C51.9853 79.7371 54.0001 81.8579 54.0001 84.474V100.264C54.0001 102.88 51.9853 105 49.5 105C47.0147 105 45 102.88 45 100.264V84.474C45 81.8579 47.0147 79.7371 49.5 79.7371Z" stroke="white" stroke-width="5" stroke-linecap="round"/>
        </svg>
        `,
        sell: `Save Energy Cost`,
        small: `Saving energy cost over the years by maintenance of the original solar products gotten from us.`
    }
];

qualitys.map(quality => {
    let div = document.createElement("div");
    div.style.background = '#fff'
    div.style.marginTop = '2rem'
    div.style.height = '290px'
    div.style.width = '343px'
    div.style.borderRadius = `12px`
    div.style.display = `grid`
    div.style.placeItems = `center`

    let svgElement = document.createElement("div");
    svgElement.innerHTML = quality.svg;
    div.appendChild(svgElement)
    let sellText = document.createElement("h1");
    sellText.textContent = quality.sell;
    sellText.style.fontSize = `24px`
    sellText.style.color = `#35A137`
    let smallText = document.createElement("p");
    smallText.textContent = quality.small
    smallText.style.fontSize = `16px`
    smallText.style.width = `280px`
    smallText.style.textAlign = 'center';
    div.appendChild(sellText)
    div.appendChild(smallText)
    sellFour.appendChild(div)
})

let partner = document.querySelector(".partner")
let client = document.querySelector(".clients")
let clientObject = [
    {image:`/cl and partner/image 10.png`},
    {image:`/cl and partner/image 10.png`},
    {image:`/cl and partner/image 10.png`},
    {image:`/cl and partner/image 10.png`}
]
clientObject.map(object => {
    let div = document.createElement("div")
    let image = document.createElement("img")
    image.src = object.image
    div.appendChild(image)
    
client.style.display = 'grid'; 
client.style.gridTemplateColumns = 'repeat(2, 1fr)';
    client.appendChild(div)
})
clientObject.map(object => {
    let div = document.createElement("div")
    
    let image = document.createElement("img")
    image.src = object.image
    div.appendChild(image)  
    partner.style.display = 'grid'; 
    partner.style.gridTemplateColumns = 'repeat(2, 1fr)';  
    partner.appendChild(div)
})






let threepics = document.querySelector(".threePics")
let threeImg = [
    {image:`/three background pics/Frame 712.png`},
    {image:`/three background pics/Frame 712.png`},
    {image:`/three background pics/Frame 712.png`}
]
threeImg.map(three => {
    let div = document.createElement("div")
    div.style.width = `100%`
    div.style.padding = `1rem`
    let image = document.createElement("img")
    image.src = three.image
    image.style.width = `100%`
    div.appendChild(image)
    threepics.appendChild(div)
})