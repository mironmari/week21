const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];

console.log(1, data);

class Transport {
  constructor (type, price, brand){
      this.type = type;
      this.price = price;
      this.brand = brand};

      getInfo() {
          return { type: this.type,
                   price: this.price,
                   brand: this.brand}
               }
      getPrice() {
          return {
                  price: this.price,}
                }
                getInfo = this.getInfo.bind(this);
      }

class Car extends Transport{
    constructor(doors) {
      super();
      this.doors = doors;
    }
    getDoorsCount() {
      return  `Кол-во дверей: ${this.doors}`
    }
  }

  class Bike extends Transport{
    constructor(maxSpeed) {
      super();
      this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
      return `Максимальная скорость: ${this.maxSpeed}`
    }
  }

const transport1 = new Transport(data[0].type, data[0].price, data[0].brand);
console.log(2, transport1.getInfo());
console.log(3, transport1.getPrice());
const transport2 = new Car(data[0].doors);
console.log(4, transport2.getDoorsCount());
const transport3 = new Bike(data[3].maxSpeed);
console.log(5, transport3.getMaxSpeed());
