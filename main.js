const title = document.getElementById('title')
console.log(`h1タグの中身のテキストは${title.textContent}です
`)

const list = document.querySelector('.list')
console.log(`ulタグの二つ目の子要素のテキストは${list.children[1].textContent}です`)

const newItem = document.createElement(`li`)
newItem.textContent = `もも`
list.appendChild(newItem)

const button = document.getElementById('#botton')
document.addEventListener(`click`, event => {
    confirm("削除してもよろしいですか")
})


//idには取得するときに#がどういうときに必要なのか