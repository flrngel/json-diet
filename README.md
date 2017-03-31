# json-diet

![Travis](https://travis-ci.org/flrngel/json-diet.svg?branch=master)

skeletonize your json object

returns last elements type

## use in node-js

```bash
npm install json-diet
```

usage

```js
var diet=require("json-diet");
```

## supports AMD

```js
  require(["json-diet"],function(diet){
  });
```

## wild web is support

```HTML
  <script src="json-diet.js"></script>
```

## USAGE

```js
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
```

### USAGE RESULT

```
{
  do: 'string',
  re: 'string',
  me: { name: 'string' },
  fa: 'string',
  so: { needle: { pulling: 'number', thread: 'string' } },
  la: 'string',
  ti: { drink: { with: 'array' } }
}
```

# LICENSE

MIT
