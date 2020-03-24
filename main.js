let length, width, diagonal, ratio, ppi;
let devicesData = [
    ['Android',
        [
            ['Mi 10', 2340, 1080, 6.67],
            ['Mi 10 Pro', 2340, 1080, 6.67],
            ['Redmi 6', 1440, 720, 5.45],
            ['Redmi 7', 1520, 720, 6.26],
            ['Redmi 7A', 1440, 720, 5.45],
            ['Redmi 8', 1520, 720, 6.22],
            ['Redmi Note 8', 2340, 1080, 6.3],
            ['Redmi Note 8 Pro', 2340, 1080, 6.53],
            ['OnePlus 7T', 2400, 1080, 6.55],
            ['OnePlus 7T Pro', 3120, 1440, 6.67],
            ['Sony Xperia 5', 2520, 1080, 6.1],
            ['Sony Xperia 1', 3840, 1644, 6.5],
            ['Sony Xperia 10 Plus', 2520, 1080, 6.5],
            ['Sony Xperia XZ3', 2880, 1440, 6],
            ['OPPO Find X2', 3168, 1440, 6.7],
            ['vivo NEX 3S', 2256, 1080, 6.89]
        ]
    ],
    ['iPhone',
        [
            ['iPhone 4', 960, 240, 3.5],
            ['iPhone 4s', 960, 240, 3.5],
            ['iPhone 5', 1136, 640, 4],
            ['iPhone 5s', 1136, 640, 4],
            ['iPhone 6', 1334, 750, 4.7],
            ['iPhone 6 Plus', 1920, 1080, 5.5],
            ['iPhone 6s', 1334, 750, 4.7],
            ['iPhone 6s Plus', 1920, 1080, 5.5],
            ['iPhone 7', 1334, 750, 4.7],
            ['iPhone 7 Plus', 1920, 1080, 5.5],
            ['iPhone 8', 1334, 750, 4.7],
            ['iPhone 8 Plus', 1920, 1080, 5.5],
            ['iPhone X', 2436, 1125, 5.8],
            ['iPhone XR', 1792, 828, 6.1],
            ['iPhone XS', 2436, 1125, 5.8],
            ['iPhone XS Max', 2688, 1242, 6.5],
            ['iPhone 11', 1792, 828, 6.1],
            ['iPhone 11 Pro', 2436, 1125, 5.8],
            ['iPhone 11 Pro Max', 2688, 1242, 6.5]
        ]
    ],
    ['Surface',
        [
            ['Surface Go', 1800, 1200, 10],
            ['Surface Book 2', 3000, 2000, 13.5],
            ['Surface Laptop 2', 2256, 1504, 13.5],
            ['Surface Laptop 3 13.5”', 2256, 1504, 13.5],
            ['Surface Laptop 3 15”', 2496, 1664, 15],
            ['Surface Pro 6', 2736, 1824, 12.3],
            ['Surface Pro 7', 2736, 1824, 12.3],
            ['Surface Pro X', 2880, 1920, 13],
            ['Surface Studio', 4500, 3000, 28],
            ['Surface Studio 2', 4500, 3000, 28]
        ]
    ],
    ['iPad',
        [
            ['iPad', 2160, 1620, 10.2],
            ['iPad Air', 2224, 1668, 10.5],
            ['iPad 11”', 2388, 1668, 11],
            ['iPad 12.9”', 2732, 2048, 12.9]
        ]
    ],
    ['Watch',
        [
            ['Apple Watch Series 3 38mm', 340, 272, 1.496],
            ['Apple Watch Series 3 42mm', 390, 312, 1.654],
            ['Apple Watch Series 5 40mm', 394, 324, 1.575],
            ['Apple Watch Series 5 44mm', 448, 368, 1.732],
        ]
    ],
    ['VR',
        [
            ['HTC VIVE Cosmos', 1700, 1440, 3.4],
            ['HTC VIVE Cosmos Elite', 1700, 1440, 3.4],
            ['HTC VIVE Pro Eye', 1600, 1440, 3.5]
        ]
    ],
    ['Television',
        [
            ['Redmi TV 98”', 3840, 2160, 98],
            ['Redmi TV 70”', 3840, 2160, 70],
            ['Art TV 65”', 3840, 2160, 65],
            ['Mi TV All-Screen E55A', 3840, 2160, 55]
        ]
    ],
];

function update() {
    length = document.querySelector('#length').value
    width = document.querySelector('#width').value
    diagonal = document.querySelector('#diagonal').value
    calc()
}
function outputData() {
    if (list.selectedIndex && bList.firstChild.value != 'unselected')
        console.log(`${bList.options[bList.selectedIndex].value} : ${length} x ${width} (${ratio.replace(/ /g, '')}),${ppi} PPI`)
    else if (ppi)
        console.log(`${length} x ${width} (${ratio.replace(/ /g, '')}), ${ppi} PPI`)
    else
        throw 'Cannot get the PPI. Please check if you have input the required information. '
}

function getGCF(a, b) {
    a > b ? true : [a, b] = [b, a]
    for (let i = b; i > 0; i--)
        if (a % i == 0 && b % i == 0)
            return i
}

function calc() {
    let gcf = getGCF(length, width) // The gcf means Greatest Common Factor
    ratio = `${length / gcf} : ${width / gcf}`
    ppi = Math.round((length ** 2 + width ** 2) ** 0.5 / diagonal)
    document.querySelector('#ppi').innerHTML = ppi
    document.querySelector('#ratio').innerHTML = ratio
}
