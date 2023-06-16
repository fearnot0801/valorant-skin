const menus = [
    {
        id: 1,
        name: '럭스 고스트',
        price: '875 VP',
        url: 'image/luxe_ghost.jpg'
    },
    {
        id: 2,
        name: '럭스 스펙터',
        price: '875 VP',
        url: 'image/luxe_spectre.jpg'
    },
    {
        id: 3,
        name: '럭스 저지',
        price: '875 VP',
        url: 'image/luxe_judge.jpg'
    },
    {
        id: 4,
        name: '럭스 밴달',
        price: '875 VP',
        url: 'image/luxe_vandal.jpg'
    },
    {
        id: 5,
        name: '럭스 오퍼레이터',
        price: '875 VP',
        url: 'image/luxe_operator.jpg'
    },
    {
        id: 6,
        name: '럭스 나이프',
        price: '1750 VP',
        url: 'image/luxe_knife.jpg'
    },
    {
        id: 7,
        name: '아리스토크랫 셰리프',
        price: '1275 VP',
        url: 'image/Aristocrat_sheriff.jpg'
    },
    {
        id: 8,
        name: '아리스토크랫 스팅어',
        price: '1275 VP',
        url: 'image/Aristocrat_stinger.jpg'
    },
    {
        id: 9,
        name: '아리스토크랫 불독',
        price: '1275 VP',
        url: 'image/Aristocrat_bulldog.jpg'
    },
    {
        id: 10,
        name: '아리스토크랫 밴달',
        price: '1275 VP',
        url: 'image/Aristocrat_vandal.jpg'
    },
    {
        id: 11,
        name: '아리스토크랫 아레스',
        price: '1275 VP',
        url: 'image/Aristocrat_ares.jpg'
    },
]

const list = document.querySelector('.list')

function showList(val='') {
    list.innerHTML = '';
    const res = menus.forEach(menus => {
        if(menus.name.includes(val)) {
            const li = document.createElement('li');
            li.innerHTML = `
            <div class="list-wrap">
                <div class="list-img-wrap">
                    <img class="list-img" src='${menus.url}' alt='${menus.name}'>
                </div>
                <div class="list-info-wrap">
                    <p>${menus.name}</p>
                    <p>${menus.price}</p> 
                </div>
            </div>
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