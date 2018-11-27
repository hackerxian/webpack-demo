import component from './com';

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./com.js', function () {
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}
