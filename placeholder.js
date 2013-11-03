function Wine (name, year, price) {
    this.name = name;
    this.year = year;
    this.price = price;
}

Wine.prototype = {
    getName: function () {
        return this.name;
    },
    getYear: function () {
        return this.year;
    },
    getPrice: function () {
        return this.price;
    },
    getPriceIVA: function () {
        return this.price + 0.15 * this.price;
    }

}

var wine = new Wine("vino", 2003, 15);
