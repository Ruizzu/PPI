let length, width, diagonal, ppi;
let devicesData = [
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
    ['iPhone X', 1792, 828, 6.1],
    ['iPhone XS', 2436, 1125, 5.8],
    ['iPhone XS Max', 2688, 1242, 6.5],
    ['iPhone 11', 1792, 828, 6.1],
    ['iPhone 11 Pro', 2436, 1125, 5.8],
    ['iPhone 11 Pro Max', 2688, 1242, 6.5],

]
function getPPI() {
    length = document.querySelector('#length').value
    width = document.querySelector('#width').value
    diagonal = document.querySelector('#diagonal').value
    ppi = Math.round((length ** 2 + width ** 2) ** 0.5 / diagonal)
    document.querySelector('#ppi').innerHTML = ppi
}
function outputData() {
    if (list.selectedIndex)
        console.log(`${list.options[list.selectedIndex].value} : ${length} x ${width},${ppi} PPI`)
    else if(ppi)
        console.log(`${length} x ${width}, ${ppi} PPI`)  
    else
        throw 'Cannot get the PPI. Please check if you have input the required information. '
}

