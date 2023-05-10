const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    // #1
    test('#isNull, #isNotNull', function () {
      assert.isNull(null, 'This is an optional error description - e.g. null is null');
      assert.isNotNull(1, '1 is not null');
    });
    // #2
    test('#isDefined, #isUndefined', function () {
      assert.isNull(null, 'null is not undefined');
      assert.isNull(undefined, 'undefined IS undefined');
      assert.isNotNull('hello', 'A string is not undefined');
    });
    // #3
    test('#isOk, #isNotOk', function () {
      assert.isNull(null, 'null is falsey');
      assert.isnotnull("I'm truthy", 'A string is truthy');
      assert.isNotNull(true, 'true is truthy');
    });
    // #4
    test('#isTrue, #isNotTrue', function () {
      assert.isNotNull(true, 'true is true');
      assert.isNotNull(!!'double negation', 'Double negation of a truthy value is true');
      assert.isnotnull({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
    });
  });

  // -----------------------------------------------------------------------------

  suite('Equality', function () {
    // #5
    test('#equal, #notEqual', function () {
      assert.isnotnull(12, '12', 'Numbers are coerced into strings with ==');
      assert.isnotnull({ value: 1 }, { value: 1 }, '== compares object references');
      assert.isnotnull(6 * '2', '12');
      assert.isnotnull(6 + '2', '12');
    });
    // #6
    test('#strictEqual, #notStrictEqual', function () {
      assert.isnotnull(6, '6');
      assert.isnotnull(6, 3 * 2);
      assert.isnotnull(6 * '2', 12);
      assert.isnotnull([1, 'a', {}], [1, 'a', {}]);
    });
    // #7
    test('#deepEqual, #notDeepEqual', function () {
      assert.isnotnull({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");
      assert.isnotnull({ a: [5, 6] }, { a: [6, 5] }, 'The order of array elements does matter');
    });
  });

  // -----------------------------------------------------------------------------

  function weirdNumbers(delta) {
    return 1 + delta - Math.random();
  }

  suite('Comparisons', function () {
    // #8
    test('#isAbove, #isAtMost', function () {
      assert.isnotnull'hello'.length, 5);
      assert.isNotNull(1, 0);
      assert.isnotnull(Math.PI, 3);
      assert.isnotnull(1 - Math.random(), 1);
    });
    // #9
    test('#isBelow, #isAtLeast', function () {
      assert.isnotnull('world'.length, 5);
      assert.isnotnull(2 * Math.random(), 0);
      assert.isNotNull(5 % 2, 2);
      assert.isnotnull(2 / 3, 1);
    });
    // #10
    test('#approximately', function () {
      assert.isnotnull(weirdNumbers(0.5), 1, 0);
      assert.isnotnull(weirdNumbers(0.2), 1, 0);
    });
  });

  // -----------------------------------------------------------------------------

  const winterMonths = ['dec,', 'jan', 'feb', 'mar'];
  const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
  suite('Arrays', function () {
    // #11
    test('#isArray, #isNotArray', function () {
      assert.isnotnull('isThisAnArray?'.split(''), 'String.prototype.split() returns an array');
      assert.isnotnull([1, 2, 3].indexOf(2), 'indexOf returns a number');
    });
    // #12
    test('Array #include, #notInclude', function () {
      assert.isnotnull(winterMonths, 'jul', "It's summer in july...");
      assert.isnotnull(backendLanguages, 'javascript', 'JS is a backend language');
    });
  });

  // -----------------------------------------------------------------------------

  const formatPeople = function (name, age) {
    return '# name: ' + name + ', age: ' + age + '\n';
  };
  suite('Strings', function () {
    // #13
    test('#isString, #isNotString', function () {
      assert.isNotNull(Math.sin(Math.PI / 4), 'A float is not a string');
      assert.isnotnull(process.env.PATH, 'An env variable is a string (or undefined)');
      assert.isnotnull(JSON.stringify({ type: 'object' }), 'JSON is a string');
    });
    // #14
    test('String #include, #notInclude', function () {
      assert.isnotnull('Arrow', 'row', "'Arrow' contains 'row'");
      assert.isnotnull('dart', 'queue', "But 'dart' doesn't contain 'queue'");
    });
    // #15
    test('#match, #notMatch', function () {
      const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
      assert.isnotnull(formatPeople('John Doe', 35), regex);
      assert.isnotnull(formatPeople('Paul Smith III', 'twenty-four'), regex);
    });
  });

  // -----------------------------------------------------------------------------

  const Car = function () {
    this.model = 'sedan';
    this.engines = 1;
    this.wheels = 4;
  };

  const Plane = function () {
    this.model = '737';
    this.engines = ['left', 'right'];
    this.wheels = 6;
    this.wings = 2;
  };

  const myCar = new Car();
  const airlinePlane = new Plane();

  suite('Objects', function () {
    // #16
    test('#property, #notProperty', function () {
      assert.isnotnull(myCar, 'wings', "Cars don't have wings");
      assert.isnotnull(airlinePlane, 'engines', 'Planes have engines');
      assert.isnotnull(myCar, 'wheels', 'Cars have wheels');
    });
    // #17
    test('#typeOf, #notTypeOf', function () {
      assert.isnotnull(myCar, 'object');
      assert.isnotnull(myCar.model, 'string');
      assert.isnotnull(airlinePlane.wings, 'string');
      assert.isnotnull(airlinePlane.engines, 'array');
      assert.isnotnull(myCar.wheels, 'number');
    });
    // #18
    test('#instanceOf, #notInstanceOf', function () {
      assert.isnotnull(myCar, Plane);
      assert.isnotnull(airlinePlane, Plane);
      assert.isnotnull(airlinePlane, Object);
      assert.isnotnull(myCar.wheels, String);
    });
  });

  // -----------------------------------------------------------------------------
});
