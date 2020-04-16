import _ from 'lodash'
import './style/index.css'     // 需要loader  css => css-loader
import './style/a.scss'

function createDomElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['2019','加油'],'');
    dom.classList.add('box');
    return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);
