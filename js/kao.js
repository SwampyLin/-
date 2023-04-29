//AJAX
var xhr = new XMLHttpRequest()
xhr.open(
  'get',
  'https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c',
  false
)
xhr.send(null)

//DOM選擇元素
var list = document.querySelector('.list')
var section = document.querySelector('.detail')
var total = JSON.parse(xhr.responseText)
var Attraction = total.data.XML_Head.Infos.Info
var top = document.querySelector('.popular')
var block = document.querySelector('.block')
//console.log(Attraction.length) //確認有抓取到資料，返回長度是328

//函式
function changeList(e) {
  var section = e.target.value
  selectSection(section)
}

function selectSection(S) {
  block.textContent = S
  var str = ''
  for (var i = 0; i < Attraction.length; i++) {
    if (Attraction[i].Add.substr(6, 3) === S) {
      str += `<div class="attraction">
      <li class="banner"><img src="${Attraction[i].Picture1}" class="picture">
        <p class="Name">${Attraction[i].Name}</p>
        <p class="Section">${Attraction[i].Add.substr(6, 3)}</p>
      </li>
      <div class="information">
        <div class="informationCPP">
          <div class="clock"><img src="img/kao/icons_clock.png" class="icon">
            <p>${Attraction[i].Opentime}</p>
          </div>
          <div class="pin"><img src="img/kao/icons_pin.png" class="icon">
            <p>${
              Attraction[i].Add.substr(0, 3) + Attraction[i].Add.substr(6)
            }</p>
          </div>
          <div class="phone"><img src="img/kao/icons_phone.png" class="icon">
            <p>${0 + Attraction[i].Tel.substr(4)}</p>
          </div>
        </div>
        <div class="ticket">
          <div class="tag"><img src="img/kao/icons_tag.png" class="icon">
            <p>${Attraction[i].Ticketinfo}</p>
          </div>
        </div>
      </div>
    </div>
  `
      section.innerHTML = str
    }
  }
}
//console.log(Attraction[0].Add.substr(6, 3))//從地址抓出某某區，判斷該景點屬於哪一區
//console.log(Attraction[0].Add.substr(0, 3) + Attraction[0].Add.substr(6))//用地址拆開組字串方式跳過郵遞區號出現在地址上

function dafaultList() {
  block.textContent = '鹽埕區'
  var str = ''
  for (var i = 0; i < Attraction.length; i++) {
    if (Attraction[i].Add.substr(6, 3) === '鹽埕區') {
      str += `<div class="attraction">
    <li class="banner"><img src="${Attraction[i].Picture1}" class="picture">
      <p class="Name">${Attraction[i].Name}</p>
      <p class="Section">${Attraction[i].Add.substr(6, 3)}</p>
    </li>
    <div class="information">
      <div class="informationCPP">
        <div class="clock"><img src="img/kao/icons_clock.png" class="icon">
          <p>${Attraction[i].Opentime}</p>
        </div>
        <div class="pin"><img src="img/kao/icons_pin.png" class="icon">
          <p>${Attraction[i].Add.substr(0, 3) + Attraction[i].Add.substr(6)}</p>
        </div>
        <div class="phone"><img src="img/kao/icons_phone.png" class="icon">
          <p>${0 + Attraction[i].Tel.substr(4)}</p>
        </div>
      </div>
      <div class="ticket">
        <div class="tag"><img src="img/kao/icons_tag.png" class="icon">
          <p>${Attraction[i].Ticketinfo}</p>
        </div>
      </div>
    </div>
  </div>
`
      section.innerHTML = str
    }
  }
}

//監聽事件
list.addEventListener('change', changeList, false)
top.addEventListener(
  'click',
  function (e) {
    switch (e.target.value) {
      case '苓雅區':
        selectSection('苓雅區')
        break
      case '三民區':
        selectSection('三民區')
        break
      case '新興區':
        selectSection('新興區')
        break
      case '鹽埕區':
        selectSection('鹽埕區')
        break
    }
  },
  false
)

//預設執行函式
dafaultList()
