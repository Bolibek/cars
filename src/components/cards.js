import data from "../../db.json";

function cards() {
	class CarCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classess) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classess = classess;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 1000;
		}

		render() {
			const element = document.createElement("div");
			element.innerHTML = `
        <div class="menu__item">
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Price:</div>
            <div class="menu__item-total"><span>${(this.price * this.transfer).toLocaleString()}</span> $</div>
          </div>
        </div>
      `;
			this.parent.append(element);
		}
	}

	data.menu.forEach(({ img, altimg, title, descr, price }) => {
		new CarCard(img, altimg, title, descr, price, ".menu .container").render();
	});
}

export default cards;
