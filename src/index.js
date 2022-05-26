document.write('hello world')


import mdHtml from '../record.md'
const content = document.createElement('div')
content.className = 'content'
content.innerHTML = mdHtml
document.body.appendChild(content)