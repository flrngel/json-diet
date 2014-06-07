(function(){
	var _this=this;

	/*
	 * implement modules for browser
	 *
	 * `extend` function from "https://github.com/Raynos/xtend"
	 *
	 * */

	function extend(){
		var target = {};
		for (var i = 0; i < arguments.length; i++){
			var source = arguments[i];
			for (var key in source){
				if( source.hasOwnProperty(key) ){
					target[key] = source[key];
				}
			}
		}
		return target;
	}

	function isEmptyObject(obj){
		for(var key in obj){
			if( obj.hasOwnProperty(key) === false ) continue;
			return false;
		}
		return true;
	}

	/*
	 * json-diet definition
	 *
	 * */

	var diet,def;

	def=function(obj,opt){
		return new diet(obj,opt);
	};

	diet=function(obj,opt){
		this.obj=obj;
		var defaultOptions={
		};

		this.options=extend(defaultOptions,opt);

		this.obj=$diet.digest(this.obj,this.options);

		return this;
	};

	var $diet=diet.prototype;

	$diet.digest=function(obj){
		var res={};
		for(var key in obj){
			if( obj.hasOwnProperty(key) === false ) continue;

			if( typeof obj[key] === "object" ){
				var ret=null;
				if( Array.isArray(obj[key]) === true ){
					// determine if array has hash.
					var hasHash=false;

					for(var i in obj[key]){
						if( typeof obj[key][i] === "object" ){
							hasHash=true;
							break;
						}
					}

					if( hasHash === true ){
						ret=$diet(obj[key]);
					}else{
						ret="array";
					}
				}else{
					ret=$diet.digest(obj[key]);
				}
				res[key]=ret;
			}else{
				res[key]=typeof obj[key];
			}
		}

		/*
		 * return as empty object ( not using, for future options )
		 *
		 * if( isEmptyObject(res) === true ) return "empty object";
		 *
		 * */

		
		return res;
	};

	$diet.overwrite=function(obj){
		this.obj=extend(this.obj,obj);
		return this;
	};

	$diet.result=function(){
		return this.obj;
	};

	/*
	 * check wheter if called from node.js or browser
	 * 
	 * */

	if( typeof module !== 'undefined' && typeof module.exports !== "undefined" ){
		/*
		 * node.js implement
		 *
		 * */
		module.exports=def;
	}else if( typeof define === "function" && define.amd ){
		/*
		 * AMD implement
		 *
		 * */
		define("json-diet",[],def);
	}else{
		_this.diet=def;
	}
})();
