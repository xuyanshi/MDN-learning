const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const storyText = '今天气温 34 摄氏度，xItem 出去遛弯。当走到yItem门前时，突然就zItem。人们都惊呆了，李雷全程目睹但并没有慌，因为xItem是一个 130 公斤的胖子，天气又辣么热。\n';
const insertX = ['怪兽威利', '大老爹', '圣诞老人'];
const insertY = ['肯德基', '迪士尼乐园', '白宫'];
const insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    if (customName.value !== '') {
        let name = customName.value;
        xItem = name;
    }

    if (document.getElementById("american").checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
