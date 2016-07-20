/**
 * 工厂模式
 * 缺点：无法解决对象识别问题
 */
let createPerson = (name, age, job) => {
    let o = {};
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}

/**
 * 构造函数模式
 * 
 * 使用的时候过程：
 * 1. 创建新对象
 * 2. 将this指针指向新建对象
 * 3. 执行构造函数中的代码
 * 4. 返回新对象
 * 
 * 新建的对象都有一个constructor属性，这个属性指向构造函数
 * 
 * 缺点：每个方法都要在每个实例上创建一遍
 */
function Person (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}

/**
 * 新建的对象都有一个constructor属性，这个属性指向构造函数
 * p1.constructor === Person // true
 * p1 instanceof Person // true
 * p1 instanceof Object // true
 * 
 */
var p1 = new Person('Monar', 21, 'coder');


/**
 * 原型模式
 * 
 * JS创建的每一个函数都有一个prototype属性，这个属性是一个指针，指向一个对象。
 * 这个对象对于所有该函数产生的对象实例共享。
 * 
 * 默认情况下，原型对象拥有一个constructor属性，指向构造函数。
 * 构造函数创建的对象实例内部将会包含一个指针，指向构造函数的原型对象。这个指针为[[prototype]], 比如chrome中为_proto_。
 * 注意：上述链接存在于对象实例与原型对象之间，而非对象实例与构造函数之间。
 * Object.getPrototypeOf(object)返回某个对象的原型对象。
 * 
 * 如果给对象定义一个与原型中同名的属性，那么实例属性会覆盖原型属性。
 * object.hasOwnProterty(property)返回属性是否为实例属性。in 操作符只要能访问到则返回true。
 * for..in..返回对象上所有可枚举的属性。Object.keys()返回对象实例上的所有可枚举属性。
 * 
 * 缺点：如果原型中的共享属性是引用类型的话会导致问题。
 */
function Person () {}

Person.prototype.name = 'Monar';
Person.prototype.age = 21;
Person.prototype.job = 'coder';

Person.prototype.sayName = function() {
    console.log(this.name);
}

/**
 * 通过对象字面量来重新定义的原型对象唯一的问题在于，prototype对象中的constructor属性指向Object。
 */
Person.prototype = {
    //...
}

/**
 * 组合使用构造函数模式和原型模式
 * 
 * 原型定义共享属性和方法
 */

function Person (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['A', 'B'];
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
};






