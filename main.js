const menus = [
    {
        id: 1,
        name: '프라임 밴달',
        type: '프라임',
        url: 'image/prime-vandal.jpg'
    },
    {
        id: 2,
        name: 'DOTEXE 밴달',
        type: 'DOTEXE',
        url: 'image/dotexe-vandal.jpg'
    },
    {
        id: 3,
        name: '드래곤 밴달',
        type: '드래곤',
        url: 'image/dragon-vandal.jpg'
    },
    {
        id: 4,
        name: '글리치팝 밴달',
        type: '글리치팝',
        url: 'image/glitch-vandal.jpg'
    },
]

const list = document.querySelector('.list')

function showList(val='') {
    list.innerHTML = '';
    const res = menus.forEach(menus => {
        if(menus.name.includes(val)) {
            const li = document.createElement('li');
            li.innerHTML = `
            <img src='${menus.url}' alt='${menus.name}'>
            <p>이름: ${menus.name}</p>
            <p>속성: ${menus.type}</p> 
            `
            list.appendChild(li);
        }
    }) 
}

showList();

const searchInput = document.querySelector('.searchTerm');
const searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = searchInput.value;
    showList(val);
})