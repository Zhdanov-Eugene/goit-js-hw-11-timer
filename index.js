// все переменние хранятся в начале скрипта
const refs = {
    daysCount: document.querySelector('.value[data-value="days"]'),
    hoursCount: document.querySelector('.value[data-value="hours"]'),
    minsCount: document.querySelector('.value[data-value="mins"]'),
    secsCount: document.querySelector('.value[data-value="secs"]')
}
// класс и его методи
class CountdownTimer {
    timeComponents = { days: 0, hours: 0, mins: 0, secs: 0 };

    constructor({ targetDate }) {
        this.targetDate = targetDate;
    }

    // функция счетчик
    count() {
        const startTime = this.targetDate;

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            this.getTime(deltaTime);
            this.updateMarkup();
        }, 1000);
    }

    // метод pad 
    pad(value) {
        return String(value).padStart(2, '0');
    }

    // калькулятор времени
    getTime(time) {
        this.timeComponents.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.timeComponents.hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.timeComponents.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.timeComponents.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        // return { days, hours, mins, secs };
    }

    // текущее время
    updateMarkup() {
        refs.daysCount.textContent = this.timeComponents.days;
        refs.hoursCount.textContent = this.timeComponents.hours;
        refs.minsCount.textContent = this.timeComponents.mins;
        refs.secsCount.textContent = this.timeComponents.secs;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('September 01, 2021'),
})

// счетчик 
timer.count()

// ЗАДАНИЕ
// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.Такой плагин может использоваться в блогах и интернет - магазинах, страницах регистрации событий, во время технического обслуживания и т.д.

//     preview

// Плагин ожидает следующую HTML - разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX: XX: XX: XX.Количество дней может состоять из более чем двух цифр.

// < div class="timer" id = "timer-1" >
//   <div class="field">
//     <span class="value" data-value="days">11</span>
//     <span class="label">Days</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="hours">11</span>
//     <span class="label">Hours</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="mins">11</span>
//     <span class="label">Minutes</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="secs">11</span>
//     <span class="label">Seconds</span>
//   </div>
// </ >
//     Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);