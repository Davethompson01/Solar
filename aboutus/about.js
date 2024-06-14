let sellDiv = document.querySelector(".sameDiv");
let swaps = [
    {
        svg: `
        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="100" fill="#F9FDF9" fill-opacity="0.9"/>
<path d="M77.4046 50L53.3762 56.3174V72.7331L79.0459 64.2536L88.7487 54.7006L77.4046 50ZM104.996 62.1899C103.459 62.2284 102.898 62.592 105.183 63.7147C118.335 70.1882 138.031 88.4089 127.56 90.5689C94.5038 97.4337 73.3531 106.694 56.339 127.759C51.5416 133.704 50 150 50 150H139.88C139.88 150 111.001 145.488 109.172 133.811C106.077 114.093 149.583 111.848 149.999 91.0607C150.186 81.8221 131.653 64.3306 111.686 62.7203C110.523 62.6262 106.97 62.1407 104.996 62.1899ZM71.0261 70.9367L64.2342 73.1822V99.3157L71.7117 97.1771L71.0261 70.9367Z" fill="#35A137"/>
</svg>

        `,
        small: 'Blaze a Trail',
        sell: "Blaze a TrailTackle problems head-on. Lead the way.  Build unique services, products, markets and opportunities for all."
    },
    {
        svg: `<svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="#F9FDF9" fill-opacity="0.9"/>
        <path d="M77.4046 50L53.3762 56.3174V72.7331L79.0459 64.2536L88.7487 54.7006L77.4046 50ZM104.996 62.1899C103.459 62.2284 102.898 62.592 105.183 63.7147C118.335 70.1882 138.031 88.4089 127.56 90.5689C94.5038 97.4337 73.3531 106.694 56.339 127.759C51.5416 133.704 50 150 50 150H139.88C139.88 150 111.001 145.488 109.172 133.811C106.077 114.093 149.583 111.848 149.999 91.0607C150.186 81.8221 131.653 64.3306 111.686 62.7203C110.523 62.6262 106.97 62.1407 104.996 62.1899ZM71.0261 70.9367L64.2342 73.1822V99.3157L71.7117 97.1771L71.0261 70.9367Z" fill="#35A137"/>
        </svg>
        
        `,
        small: 'Blaze a Trail',
        sell: "Blaze a TrailTackle problems head-on. Lead the way.  Build unique services, products, markets and opportunities for all."
    },
    {
        svg: `
        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="100" fill="#F9FDF9" fill-opacity="0.9"/>
<path d="M77.4046 50L53.3762 56.3174V72.7331L79.0459 64.2536L88.7487 54.7006L77.4046 50ZM104.996 62.1899C103.459 62.2284 102.898 62.592 105.183 63.7147C118.335 70.1882 138.031 88.4089 127.56 90.5689C94.5038 97.4337 73.3531 106.694 56.339 127.759C51.5416 133.704 50 150 50 150H139.88C139.88 150 111.001 145.488 109.172 133.811C106.077 114.093 149.583 111.848 149.999 91.0607C150.186 81.8221 131.653 64.3306 111.686 62.7203C110.523 62.6262 106.97 62.1407 104.996 62.1899ZM71.0261 70.9367L64.2342 73.1822V99.3157L71.7117 97.1771L71.0261 70.9367Z" fill="#35A137"/>
</svg>

        `,
        small: 'Blaze a Trail',
        sell: "Blaze a TrailTackle problems head-on. Lead the way.  Build unique services, products, markets and opportunities for all."
    },
    {
        svg: `<svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="#F9FDF9" fill-opacity="0.9"/>
        <path d="M77.4046 50L53.3762 56.3174V72.7331L79.0459 64.2536L88.7487 54.7006L77.4046 50ZM104.996 62.1899C103.459 62.2284 102.898 62.592 105.183 63.7147C118.335 70.1882 138.031 88.4089 127.56 90.5689C94.5038 97.4337 73.3531 106.694 56.339 127.759C51.5416 133.704 50 150 50 150H139.88C139.88 150 111.001 145.488 109.172 133.811C106.077 114.093 149.583 111.848 149.999 91.0607C150.186 81.8221 131.653 64.3306 111.686 62.7203C110.523 62.6262 106.97 62.1407 104.996 62.1899ZM71.0261 70.9367L64.2342 73.1822V99.3157L71.7117 97.1771L71.0261 70.9367Z" fill="#35A137"/>
        </svg>        
        `,
        small: 'Blaze a Trail',
        sell: "Blaze a TrailTackle problems head-on. Lead the way.  Build unique services, products, markets and opportunities for all."
    }
];
swaps.map(swap => {
    sellDiv.innerHTML += `
    <div style= "background:red;  margin-top: 2rem; width: 343px; display: flex; gap: 2.5rem; flex-direction:column; justify-content:center; padding-bottom: 3rem;">
    <svg>${swap.svg}</svg>
    <h1 style= "font-size:3rem;color: white;">${swap.small}</h1>
    <p style= "">${swap.sell}</p>
    </div>
    `
})