var test=require("tape");
var assert=require("assert");
var diet=require("./json-diet.js");

test("basic functions test",function(assert){
	assert.deepEqual(diet({
		a: 1234
	}).result(),{
		a: "number"
	});

	assert.deepEqual(diet({
		a: {
			b: 1234
		},
		c: 4321
	}).result(),{
		a: {
			b: "number"
		},
		c: "number"
	});

	assert.deepEqual(diet({
		a: {
			b: {
			},
			c: {
				d: [1,2,3,4]
			}
		},
		e: {
		}
	}).result(),{
		a: {
			b: {},
			c: {
				d: "array"
			}
		},
		e: {}
	});

	assert.deepEqual(diet("owijefoijwef").result(),"string");
	assert.deepEqual(diet(1234).result(),"number");

	assert.end();
});
