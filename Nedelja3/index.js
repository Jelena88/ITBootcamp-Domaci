
var order = 0;
const counterOrder = document.getElementById('counter')
const orderBtnClassName = 'btn-order';
let orderBtn = document.getElementsByClassName(orderBtnClassName);

for (let button of orderBtn) {
    button.addEventListener('click', function () {
        select(button);
    });
}
function select(button) {
    order++;
    counterOrder.innerHTML = order;
}

const orderBtnClassName2 = 'btn-order-now';
let btnOrderNow = document.getElementsByClassName(orderBtnClassName2);

for (let button of btnOrderNow) {
    button.addEventListener('click', function () {
        select2(button);
    });
} {
    function select2(button) {
        if (order > 0) {
            var reset = 0;
            var dateTimeNow = new Date();
            var day = dateTimeNow.getDate();
            var month = dateTimeNow.getMonth() + 1;
            var year = dateTimeNow.getFullYear();
            var hours = dateTimeNow.getHours();
            var minutes = dateTimeNow.getMinutes();
            var seconds = dateTimeNow.getSeconds();

            counterOrder.innerHTML = order = reset + `<p>Наручили сте ${order} <br> Датум: ${day}. ${month}. ${year}. <br>Време: ${hours}: ${minutes}: ${seconds}</p>`;
            order = 0;
        }
        else if (order === 0) { counterOrder.innerHTML = `Нисте унели количину`; }
    }
}

