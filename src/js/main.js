import '../css/style.css';

document.querySelector('#app').innerHTML = `
<div class="modal opened" aria-hidden="true">
  <div class="modal-dialog">
        <a href="#" class="btn-close closemodal" aria-hidden="true"></a>
        <div class="modal-content">
            <div class="modal-preview">
                <img src="./src/assets/shirt1.png" alt="preview">
                <div class="preview-additional">
                    <a href="#"><img src="./src/assets/shirt2.png" alt="preview"></a>
                    <a href="#"><img class="active-preview" src="./src/assets/shirt3.png" alt="preview"></a>
                    <a href="#"><img src="./src/assets/shirt4.png" alt="preview"></a>
                </div>
            </div>
            <div class="modal-order">
                <h3 class="modal-header">Футболка "Эволюционируй или сдохни"</h3>
                <h3 class="modal-points">100 баллов</h3>
                <button class="button blue" type="submit">Заказать</button>
                <div class="modal-balance">
                    <p>Твой баланс:<span>3 945 баллов</span></p>
                </div>
                <div class="modal-merch-colors">
                    <h3 class="modal-colors-header">Цвета:</h3>

                    <div class="modal-radio-colors">
                        <input type="radio" id="radioBlue" name="radioColors" value="blue" checked>
                        <label for="radioBlue">
                            <div class="radioColors">
                            <span class="radio-blue"></span>Синий</div>
                        </label>

                        <input type="radio" id="radioBeige" name="radioColors" value="beige">
                        <label for="radioBeige">
                            <div class="radioColors">
                            <span class="radio-beige"></span>Бежевый</div>
                        </label>

                        <input type="radio" id="radioGray" name="radioColors" value="gray">
                        <label for="radioGray">
                            <div class="radioColors">
                            <span class="radio-gray"></span>Серый</div>
                        </label>
                    </div>

                    <h3 class="modal-size-header">Размер:</h3>
                    <div class="modal-size">
                        <input type="radio" id="radioS" name="radioSize" value="S" checked>
                        <label for="radioS">S</label>

                        <input type="radio" id="radioM" name="radioSize" value="M">
                        <label for="radioM">M</label>

                        <input type="radio" id="radioL" name="radioSize" value="L">
                        <label for="radioL">L</label>
                    </div>

                    <h3 class="modal-details-header">Детали:</h3>
                    <p class="details">Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%</p>

                    <h3 class="modal-add-details-header">Как выбрать размер:</h3>
                    <p class="add-details">Написать дяде Рику для уточнения.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
`;
