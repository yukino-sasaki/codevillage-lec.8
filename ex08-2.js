const body = document.body
const newh1 = document.createElement('h1')
newh1.textContent = 'DOM'
body.appendChild(newh1)

const newp = document.createElement('p')
newp.textContent = 'JavaScriptからHTMLを扱うための仕組み'
body.appendChild(newp)

const newh2 = document.createElement('h2')
newh2.textContent = '印象に残っているトピック'
body.appendChild(newh2)

const newul = document.createElement('ul')
body.appendChild(newul)

const newli = document.createElement('li')
newli.textContent = 'documentオブジェクト'
newul.appendChild(newli)

const newlimid = document.createElement('li')
newlimid.textContent = 'getElementById'
newul.appendChild(newlimid)

const newli2 = document.createElement('li')
newli2.textContent = 'イベントリスナ'
newul.appendChild(newli2)





/*
<body>
  <h1>DOM</h1>
  <p>JavaScriptからHTMLを扱うための仕組み</p>
  <h2>印象に残っているトピック</h2>
  <ul>
    <li>documentオブジェクト</li>
    <li>getElementById</li>
    <li>イベントリスナ</li>
  </ul>
</body>

*/