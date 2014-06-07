# json-diet

skeletonize your json object

returns last elements type

## use in node-js

	npm install json-diet

in `wtf_name_you_want.js`

	var diet=require("json-diet");

## supports AMD

	require(["json-diet"],function(diet){
	});

## wild web is support

	<script src="json-diet.js"></script>

## USAGE

	diet({
		"do": "doe a deer a female deer",
		"re": "a drop of golden sun",
		"me":{
			"name": "I call my self"
		},
		"fa": "a long long way to run",
		"so": {
			"needle": {
				"pulling": 0,
				"thread": "~"
			}
		},
		"la": "a note to follow sew",
		"ti": {
			"drink": {
				"with": ["jam", "bread"]
			}
		}
	}).result();

### USAGE RESULT

	{
		do: 'string',
		re: 'string',
		me: { name: 'string' },
		fa: 'string',
		so: { needle: { pulling: 'number', thread: 'string' } },
		la: 'string',
		ti: { drink: { with: 'array' } }
	}

## NOTE

test yourself. works for me.

# LICENSE

MIT
