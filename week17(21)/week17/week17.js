// Задание 1
// Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
// Подсказка: имена классов пишем с большой буквы

//Ваш код
class Worker {
    constructor (name, surname){
        this.name = name;
        this.surname = surname};

	fullName() {
		return {
     	  name: this.name,
		  surname: this.surname,
			}
		}
	}
//Создаём объекта на основе класса Worker
const worker = new Worker('Имя', 'Фамилия');
//Выводим созданный объект в консоль
console.log(1, worker);

//Задание 2
//Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя". Создайте объект worker2 на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName

//Ваш код

//Создаём объект worker2 на основе класса Worker
const worker2 = new Worker('Имя', 'Фамилия');
//Выводим полное имя объекта worker2 в консоль с помощью метода fullName
console.log(2, worker2.fullName());

//Задание 3
//Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.
class Car {
	constructor(brand, model) {
	  this.brand = brand;
	  this.model = model;}

	  getAge() {
		return {
		  brand: this.brand,
		  model: this.model,
     	  age: Number(year) - 2010
			}
		}
	}

const car1 = new Car('brend', 'model');
console.log(3, car1);

//Ваш код

//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.

//Ваш код
let now = new Date();
console.log(5, now.getFullYear())
let year = now.getFullYear();
//Создаём объект car2 на основе класса Car
const car2 = new Car('Brand', 'Model', 'age');
//Выводим возраст объекта car2 в консоль с помощью метода getAge
console.log(4, car2.getAge());

//Задание 5
//Создайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.
class Rectangle {
	constructor(width, height) {
	  this.width = width;
	  this.height = height;}
	getArea() {
		return {
			res: this.height * this.width
		}
	}

}
const rectangle = new Rectangle(25, 45);
console.log(6, rectangle);
//Ваш код

//Задание 6
//Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle2 на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.

const rectangle1 = new Rectangle(2, 5);
console.log(7, rectangle1.getArea());



//Ваш код

//Задание 7
//Создайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.

class Circle {
	constructor(radius) {
	  this.radius = radius;}

	  calculateArea() {
		return {
			result: this.radius * this.radius * 3.14
		}
	  }
	}
   
   const circle = new Circle (3)
   console.log(8, circle);

//Ваш код

//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать 
//площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте 
//объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью
//метода calculateArea.

const circle1 = new Circle (3)
   console.log(8, circle1.calculateArea());

//Ваш код

//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе
// объект student и выведите его свойства в консоль.

class Student {
	constructor(name, age, grade) {
	  this.name = name;
	  this.age = age;
	  this.grade = grade;}

	  increaseGrade() {
		return {
			mark: +this.grade + 1
		}
	  }
	}
   const student = new Student ()
   console.log(9, student);
//Ваш код

//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на
 //1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода
 // increaseGrade и выведите новую оценку в консоль.

 const student1 = new Student ('ivan', 20, 5)
   console.log(9, student1.increaseGrade());

//Ваш код

//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе 
//объект book и выведите его свойства в консоль.

class Book {
	constructor(title, author, grade) {
	  this.title = title;
	  this.author = author;
	  this.year = year;}

	  getTitleAndAuthor() {
		return {
			reult3: this.title + "-" + this.author

		}
	  }
	}
   const book = new Book ()
   console.log(10, book);
//Ваш код

//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку 
//в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его
// название и автора в консоль с помощью метода getTitleAndAuthor.
const book2 = new Book ('Война и мир', 'Толстой', 1863)
   console.log(11, book2.getTitleAndAuthor())
//Ваш код

//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. 
//Создайте на его основе объект account и выведите его свойства в консоль.

class Bankaccount {
	constructor(accountNumber, balance) {
	  this.accountNumber = accountNumber;
	  this.balance = balance;
	  }

	  deposit(e) {
		return {
			depositResulat: +this.balance + Number()
		}
	  }
	}
   const bankAccount = new Bankaccount ()
   console.log(12, bankAccount);

//Ваш код

//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс
// на заданную сумму. Создайте объект account2 на основе класса BankAccount, 
//пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.

const bankAccount1 = new Bankaccount (33, 51)
console.log(13, bankAccount1.deposit(4));
//Ваш код

//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. 
//Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". 
//Создайте объект account3 на основе класса BankAccount, попробуйте снять с него сумму, 
//превышающую баланс, и выведите соответствующее сообщение в консоль.

class Bankaccount1 {

	constructor(balance) {
		this.balance = balance;}

	  withdraw(amount)

		{if (amount <= this.balance) {
			return {
			result4: this.balance - Number(amount)}}
			//Уменьшите баланс на заданную сумму
		else
			{console.log(17, "Превышает")}
			//Выводите в консоль сообщение
		}
	}

const bankAccount3 = new Bankaccount1 (7)
console.log(18, bankAccount3.withdraw(9));

//Создайте объект account3 на основе класса BankAccount
//Попытайтесь снять сумму, превышающую баланс

//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.

class Animal {
	constructor(name, sound) {
	  this.name = name;
	  this.sound = sound;
	  }

	  makeSound() {
		return {
			sound: this.sound
		}
	  }
	}
   const animal = new Animal()
   console.log(18, animal);

//Ваш код

//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте
// объект animal2 на основе класса Animal и вызовите метод makeSound.
const animal12 = new Animal()
console.log(19, animal12.makeSound())
//Ваш код

//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.

class Point1 {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	  }

	  makeSound() {
		return {
			sound: this.sound
		}
	  }
	}
   const point = new Point1()
   console.log(20, point);


//Ваш код

//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point2 на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}
const point1 = new Point(2,4)
console.log(21, point1.getDistance());
//Ваш код

//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calculator на основе класса Calculator, вызовите каждый из методов и выведите результаты в консоль.

class Calculator {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	  add() {
		return this.x + this.y
	  }
	  subtract() {
		return this.x - this.y
	  }
	  multiply() {
		return this.x * this.y
	  }
	  divide() {
		return this.x / this.y
	  }
	}
   const calculator = new Calculator(2, 5)
   console.log(20, calculator.add());
   console.log(21, calculator.subtract());
   console.log(22, calculator.multiply());
   console.log(23, calculator.divide());
//Ваш код

//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person и выведите его свойства в консоль.

class Person {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.city = city;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}
const person = new Person()
console.log(24, person);

//Ваш код

//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person2 на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.

//Ваш код

//Задание 23
//Создайте класс Employee. Класс должен содержать свойства name, position и salary. Создайте на его основе объект employee и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект employee и вывести его свойства.
class Employee {
	constructor(name, position, salary) {
		this.name = name;
		this.position = position;
		this.salary = salary;
	}
}
const employee = new Employee()
console.log(28, employee);
//Ваш код

//Задание 24
//Добавьте в класс Employee метод calculateBonus, который будет принимать процент бонуса и увеличивать зарплату сотрудника на соответствующую сумму. Создайте объект employee2 на основе класса Employee и вызовите метод calculateBonus с процентом 10. Выведите новую зарплату сотрудника в консоль.
//Подсказка: Используйте метод call или apply, чтобы вызвать метод calculateBonus для объекта employee2 и передать процент бонуса.

//Ваш код

//Задание 25
//Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте на его основе объект product и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект product и вывести его свойства.

//Ваш код

//Задание 26
//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product2 на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.

//Ваш код

//Задание 27
//Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, которые представляют длины сторон треугольника. Создайте на его основе объект triangle и выведите его свойства в консоль.

//Ваш код

//Задание 28
//Добавьте в класс Triangle метод calculatePerimeter, который будет возвращать периметр треугольника (сумма длин всех сторон). Создайте объект triangle2 на основе класса Triangle со сторонами 3, 4 и 5. Выведите периметр треугольника в консоль с помощью метода calculatePerimeter.

//Ваш код

//Задание 29
//Создайте класс Square. Класс должен содержать свойство side, представляющее длину стороны квадрата. Создайте на его основе объект square и выведите его свойство в консоль.

//Ваш код

//Задание 30
//Добавьте в класс Square метод calculateArea, который будет вычислять и возвращать площадь квадрата (произведение длины стороны на саму себя). Создайте объект square2 на основе класса Square со стороной 5 и выведите его площадь квадрата в консоль с помощью метода calculateArea.

//Ваш код
