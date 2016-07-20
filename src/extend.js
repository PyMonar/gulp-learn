/**
 * 原型链
 * 
 * 原型链中出现过的构造函数，instanceof操作符会返回true
 * 
 * 缺点：
 * 1. 超类的引用类型的实例属性可能成为子类的原型属性，导致共享属性问题。
 * 2. 构建子类的实例时，不能向超类传递参数。
 */
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue());

/**
 * 借用构造函数
 */
function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}

function SubType() {
    SuperType.call(this);
}

// OR 向超类构造函数传递参数

function SuperType(name) {
    this.name = name;
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

/**
 * 组合继承(最常用)
 * 
 * 缺点：多调用一次超类构造函数，会多生成一些多余的属性，可以通过寄生组合继承解决。
 */
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
}



