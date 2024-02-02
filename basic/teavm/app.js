"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.cn=f;}
function $rt_cls(cls){return AXB(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AYX(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.e.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return ARD(t);}
function $rt_throwableCause(t){return ARJ(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AYY());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AEW();}
function $rt_setThread(t){return AA6(t);}
function $rt_createException(message){return AYZ(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var H=$rt_throw;var Bm=$rt_compare;var AY0=$rt_nullCheck;var J=$rt_cls;var Bg=$rt_createArray;var Dg=$rt_isInstance;var Rl=$rt_nativeThread;var Ge=$rt_suspending;var ALx=$rt_resuming;var AFA=$rt_invalidPointer;var B=$rt_s;var W=$rt_eraseClinit;var D4=$rt_imul;var Bw=$rt_wrapException;var AY1=$rt_checkBounds;var AY2=$rt_checkUpperBound;var AY3=$rt_checkLowerBound;var AY4=$rt_wrapFunction0;var AY5=$rt_wrapFunction1;var AY6=$rt_wrapFunction2;var AY7=$rt_wrapFunction3;var AY8=$rt_wrapFunction4;var G=$rt_classWithoutFields;var R
=$rt_createArrayFromData;var EE=$rt_createCharArrayFromData;var AY9=$rt_createByteArrayFromData;var AYT=$rt_createShortArrayFromData;var F9=$rt_createIntArrayFromData;var AY$=$rt_createBooleanArrayFromData;var AY_=$rt_createFloatArrayFromData;var AZa=$rt_createDoubleArrayFromData;var US=$rt_createLongArrayFromData;var SF=$rt_createBooleanArray;var BE=$rt_createByteArray;var Or=$rt_createShortArray;var D=$rt_createCharArray;var Z=$rt_createIntArray;var AZb=$rt_createLongArray;var Ce=$rt_createFloatArray;var AZc
=$rt_createDoubleArray;var Bm=$rt_compare;var AZd=$rt_castToClass;var AZe=$rt_castToInterface;var AZf=$rt_equalDoubles;var AWX=Long_toNumber;var T=Long_fromInt;var AZg=Long_fromNumber;var F=Long_create;var B2=Long_ZERO;var AZh=Long_hi;var U=Long_lo;
function C(){this.cG=null;this.$id$=0;}
function AZi(){var a=new C();CI(a);return a;}
function HF(b){var c;if(b.cG===null){c=new Il;CF();c.cC=AZj;b.cG=c;}b=b.cG;c=b.cC;if(c===null){CF();b.cC=AZj;}else{CF();if(c!==AZj){c=new BH;c.c=1;c.d=1;c.f=B(0);H(c);}}b.dk=b.dk+1|0;}
function D9(b){var c,d,e;if(!GY(b)){c=b.cG;d=c.cC;CF();if(d===AZj){e=c.dk-1|0;c.dk=e;if(!e)c.cC=null;GY(b);return;}}b=new Iy;b.c=1;b.d=1;H(b);}
function AXK(b){ALu(b,1);}
function ALu(b,c){var d,e,$p,$z;$p=0;if(ALx()){var $T=Rl();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.cG===null){d=new Il;CF();d.cC=AZj;b.cG=d;}d=b.cG;if(d.cC===null){CF();d.cC=AZj;}e=d.cC;CF();if(e===AZj){d.dk=d.dk+c|0;return;}$p=1;case 1:AF9(b,c);if(Ge()){break _;}return;default:AFA();}}Rl().s(b,c,d,e,$p);}
function AW_(b,c,d){var e,f,g;CF();e=AZj;f=b.cG;if(f===null){f=new Il;f.cC=e;b.cG=f;if(e!==e)AZj=e;AZj.fq=EY();b=b.cG;b.dk=b.dk+c|0;b=null;d.gM.ju(b);return;}if(f.cC===null){f.cC=e;if(e!==e)AZj=e;AZj.fq=EY();b=b.cG;b.dk=b.dk+c|0;b=null;d.gM.ju(b);return;}if(f.fg===null)f.fg=AMX();f=f.fg;g=new PX;g.rB=e;g.rC=b;g.rz=c;g.rA=d;d=g;f.push(d);}
function AXP(b){AFJ(b,1);}
function AFJ(b,c){var d,e;if(!GY(b)){d=b.cG;e=d.cC;CF();if(e===AZj){c=d.dk-c|0;d.dk=c;if(c>0)return;d.cC=null;d=d.fg;if(d!==null&&!(d.length?0:1)){d=new Sx;d.sf=b;Rq(d,0);}else GY(b);return;}}b=new Iy;b.c=1;b.d=1;H(b);}
function ASe(b){var c,d,e;if(!GY(b)){c=b.cG;if(c.cC===null){b=c.fg;if(b!==null&&!(b.length?0:1)){b=c.fg.shift();Bz();if(b!==null&&!(b instanceof $rt_objcls()))b=Cg(b);d=b;c.fg=null;b=d.rB;c=d.rC;e=d.rz;d=d.rA;CF();if(AZj!==b)AZj=b;AZj.fq=EY();c=c.cG;c.cC=b;c.dk=c.dk+e|0;b=null;d.gM.ju(b);}return;}}}
function GY(a){var b,c;b=a.cG;if(b===null)return 1;a:{if(b.cC===null){c=b.fg;if(!(c!==null&&!(c.length?0:1))){b=b.oK;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.cG=null;return 1;}
function CI(a){}
function AQd(a){var b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BZ;c.C=b;d=c;b.classObject=d;}}return c;}
function AJb(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOs(a,b){return a!==b?0:1;}
function AHO(a){var b,c,d,e,f,g,h;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=Bj(a.$id$,4);b=new O;b.b=D(16);I(b,b.a,B(1));e=b.a;if(d===null)d=B(2);I(b,e,d);c=new M;f=b.b;g=b.a;P();h=D(g);c.e=h;L(f,0,h,0,g);return c;}
function Mo(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ANq(a){var b,c,d;if(!Dg(a,EV)&&a.constructor.$meta.item===null){b=new Rm;b.c=1;b.d=1;H(b);}b=AFv(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function L1(a){var b,c,d;a:{b=a.cG;if(b!==null){c=b.cC;CF();if(c===AZj){d=1;break a;}}d=0;}if(!d){b=new Iy;b.c=1;b.d=1;H(b);}b=b.oK;if(b===null)return;while(!(b.length?0:1)){c=b.shift();Bz();if(c!==null&&!(c instanceof $rt_objcls()))c=Cg(c);c=c;if(!c.KD())Rq(c,0);}a.cG.oK=null;}
function AF9(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.ju=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.AB=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AXa(callback);thread.suspend(function(){try{AW_(b,c,callback);}catch($e){callback.AB($rt_exception($e));}});return null;}
var Y1=G();
function AVG(b){var c;c=new By;c.di=1.0;c.dh=0.0;AZk=c;c=new By;c.di=0.0;c.dh=1.0;AZl=c;c=new By;c.di=0.0;c.dh=0.0;AZm=c;AZn=new By;AZo=new By;AZp=new By;AZq=new By;AZr=new By;AZs=new By;AZt=new Em;AZu=new Em;AZv=0.10000000149011612;AEj();AZw=J($rt_floatcls());AZx=Bg(Hr,111);AZy=new By;AZz=new By;AZA=new C;XY();AZB=J($rt_intcls());Wc();AZC=J($rt_longcls());AZD=J($rt_charcls());AZE=Bg(Dr,128);Tw();ZV();AZF=1;AZG=new By;AZH=new By;AZI=new By;AZJ=0.4000000059604645;AZK=0.10000000149011612;AZL=new By;AZM=new By;AZN
=new By;AZO=new By;AZP=new By;AZQ=new By;VJ();ABj();AZR=0.0;AZS=Ce(3);AZT=1;AZU=new JL;AZV=new JK;c=new I1;c.lq=BE(1);AZW=c;c=new IJ;c.lq=BE(1);AZX=c;AZY=J($rt_doublecls());W2();c=new Ca;c.bj=0;c.bC=0;AZZ=c;c=new Ca;c.bj=1;c.bC=0;AZ0=c;AZ1=0;AZ2=1;AZ3=new Db;AZ4=new Db;AZ5=new Db;AZ6=new Ep;AZ7=new Ep;AZ8=new Ep;AZ9=new DJ;AZ$=new DJ;AZ_=new DJ;A0a=new Ed;A0b=new Ed;A0c=new Ed;A0d=new Er;A0e=new Er;A0f=new Er;A0g=new Eb;A0h=new Eb;A0i=new Eb;A0j=new DY;A0k=new DY;A0l=new DY;VI();A0m=new DX;A0n=new DX;A0o=new DX;A0p
=new DA;A0q=new DA;A0r=new DA;A0s=new Dz;A0t=new Dz;A0u=new Dz;A0v=new D1;A0w=new D1;A0x=new D1;A0y=new Da;A0z=new Da;A0A=new Da;A0B=new DB;A0C=new DB;A0D=new DB;A0E=new D0;A0F=new D0;A0G=new D0;A0H=new DV;A0I=new DV;A0J=new DV;A0K=new Eg;A0L=new Eg;A0M=new Eg;T8();AB$();AEo();AB1();YB();Tk();ZW();AEe();AA_();Ys();YN();Uh();U1();ABv();Ul();c=AYS(B(3));c.kn=0;c.g4=0;c.mp=1;c.l9=1;VA(new KG,AWe(),c);}
var F4=G();
var A0N=0;var A0O=0;var A0P=0;var A0Q=0;var A0R=0;function A0S(){A0S=W(F4);AMu();}
function AMu(){A0N=CN($rt_str($rt_globals.navigator.platform),B(4));A0O=CN($rt_str($rt_globals.navigator.platform),B(5));A0P=CN($rt_str($rt_globals.navigator.platform),B(6));A0Q=!CN($rt_str($rt_globals.navigator.platform),B(7))&&!CN($rt_str($rt_globals.navigator.platform),B(8))?0:1;A0R=!CN($rt_str($rt_globals.navigator.platform),B(9))&&!CN($rt_str($rt_globals.navigator.platform),B(10))&&!CN($rt_str($rt_globals.navigator.platform),B(11))?0:1;}
var Ml=G(0);
var K2=G();
var CT=G(0);
var ACI=G(K2);
var CL=G(0);
var FM=G();
var C2=G(0);
var BX=G(0);
function BC(){var a=this;C.call(a);a.t=null;a.q=0;}
function ACy(a){return a.q;}
function ALy(a){return a.t;}
var EB=G(BC);
var A0T=null;var A0U=null;var A0V=null;var A0W=null;function AWx(){AWx=W(EB);AR2();}
function AR2(){var b,c,d;b=new EB;AWx();b.t=B(12);b.q=0;A0T=b;c=new EB;c.t=B(13);c.q=1;A0U=c;d=new EB;d.t=B(14);d.q=2;A0V=d;A0W=R(EB,[b,c,d]);}
var FR=G();
var K6=G(0);
var Iz=G(FR);
var AZn=null;function AMk(){AZn=new By;}
var Gk=G(0);
var Dh=G(0);
var GG=G();
var Gt=G(0);
var BS=G();
var AZo=null;function AT5(){AZo=new By;}
var G3=G(BS);
var AAI=G(G3);
var FT=G(BC);
var A0X=null;var A0Y=null;var A0Z=null;function ATT(){ATT=W(FT);AGq();}
function AGq(){var b,c;b=new FT;ATT();b.t=B(15);b.q=0;A0X=b;c=new FT;c.t=B(16);c.q=1;A0Y=c;A0Z=R(FT,[b,c]);}
var LH=G(0);
var IE=G(0);
var Fm=G(0);
var Do=G();
var ACp=G(Do);
var Lt=G(GG);
var Hx=G();
var AZp=null;var AZq=null;function AKF(){AZp=new By;AZq=new By;}
var VS=G();
var S8=G();
var Sp=G(0);
var KB=G();
var AAp=G(KB);
var XP=G(FM);
var OZ=G();
var A00=null;function A01(){A01=W(OZ);ANZ();}
function ANZ(){var b,c;ATT();b=Z((A0Z.cn()).data.length);c=b.data;A00=b;c[A0X.q]=1;c[A0Y.q]=2;}
var Zd=G();
var Qp=G();
var A02=null;function A03(){A03=W(Qp);AIr();}
function AIr(){var b,c;Zz();b=Z((A04.cn()).data.length);c=b.data;A02=b;c[A05.q]=1;c[A06.q]=2;c[A07.q]=3;}
var ACo=G(Do);
var Fs=G();
var Qk=G(Fs);
var GC=G();
var A08=0;var A09=0;var A0$=0;var A0_=0;var A1a=0;function A1b(){A1b=W(GC);AUi();}
function AUi(){A08=CN($rt_str($rt_globals.navigator.platform),B(4));A09=CN($rt_str($rt_globals.navigator.platform),B(5));A0$=CN($rt_str($rt_globals.navigator.platform),B(6));A0_=!CN($rt_str($rt_globals.navigator.platform),B(7))&&!CN($rt_str($rt_globals.navigator.platform),B(8))?0:1;A1a=!CN($rt_str($rt_globals.navigator.platform),B(9))&&!CN($rt_str($rt_globals.navigator.platform),B(10))&&!CN($rt_str($rt_globals.navigator.platform),B(11))?0:1;}
var KO=G();
var Sl=G(G3);
var AZr=null;function ANk(){AZr=new By;}
var OE=G();
var AZs=null;function AUS(){AZs=new By;}
var Ji=G();
var A1c=null;var A1d=null;var A1e=null;function A1f(){A1f=W(Ji);ARL();}
function ARL(){var b;b=new BN;b.bf=1;b.r=Bg(C,16);A1c=b;b=new Bl;CD();A1d=b;A1e=new Em;}
var Ly=G();
var Ip=G(Fs);
var Sm=G(Fs);
var DI=G(BS);
var AZv=0.0;function ATb(){AZv=0.10000000149011612;}
var Sb=G(Ip);
var U8=G(FM);
var JY=G(0);
var YT=G(FM);
var W7=G();
var Mf=G();
var A1g=null;function A1h(){A1h=W(Mf);ATu();}
function ATu(){var b,c;Zz();b=Z((A04.cn()).data.length);c=b.data;A1g=b;c[A1i.q]=1;c[A1j.q]=2;c[A1k.q]=3;c[A05.q]=4;c[A06.q]=5;c[A07.q]=6;c[A1l.q]=7;c[A1m.q]=8;c[A1n.q]=9;c[A1o.q]=10;}
var Cq=G(BC);
var A05=null;var A06=null;var A07=null;var A1l=null;var A1n=null;var A1o=null;var A1m=null;var A1i=null;var A1j=null;var A1k=null;var A04=null;function Zz(){Zz=W(Cq);AIj();}
function AIj(){var b,c,d,e,f,g,h,i,j,k;b=new Cq;Zz();b.t=B(17);b.q=0;A05=b;c=new Cq;c.t=B(18);c.q=1;A06=c;d=new Cq;d.t=B(19);d.q=2;A07=d;e=new Cq;e.t=B(20);e.q=3;A1l=e;f=new Cq;f.t=B(21);f.q=4;A1n=f;g=new Cq;g.t=B(22);g.q=5;A1o=g;h=new Cq;h.t=B(23);h.q=6;A1m=h;i=new Cq;i.t=B(24);i.q=7;A1i=i;j=new Cq;j.t=B(25);j.q=8;A1j=j;k=new Cq;k.t=B(26);k.q=9;A1k=k;A04=R(Cq,[b,c,d,e,f,g,h,i,j,k]);}
var B_=G();
var E5=G(B_);
var Xy=G(E5);
var AAd=G(E5);
var CJ=G(B_);
var ET=G(CJ);
var Tj=G(ET);
var Uy=G();
var L7=G(B_);
var Vg=G(L7);
var Wu=G(B_);
var YP=G(B_);
var ABn=G(B_);
var ABR=G();
var KJ=G(B_);
var Yx=G(KJ);
var VD=G(CJ);
var ACk=G(CJ);
var ACJ=G(ET);
var AAE=G(B_);
var AAO=G(ET);
var ADI=G(CJ);
var ADg=G(CJ);
var WK=G(B_);
var Yh=G(CJ);
var Yo=G(B_);
var WY=G(B_);
var Yy=G(E5);
var TO=G(CJ);
var ADJ=G(B_);
var AAl=G(ET);
var WN=G(E5);
var ZU=G(B_);
var Uz=G(CJ);
var XX=G(CJ);
var NP=G();
var A1p=null;function AEj(){A1p=R(BZ,[J(Kv),J(Bn),J(PM),J(Qk),J(Sm),J(Ip),J(Sb),J(Gn),J(Pk),J(Ry),J(Q8),J(O0),J(RY),J(Ju),J(R_),J(Qm),J(M2),J(RT),J(Gy),J(PF),J(Rt),J(PC),J(O7),J(Ni)]);}
var CU=G(Iz);
var C4=G(CU);
var A1q=null;var A1r=null;var A1s=null;var A1t=null;var A1u=null;var A1v=null;var A1w=null;var A1x=null;function A1y(){A1y=W(C4);AR8();}
function AR8(){var b,c;b=new Bn;Ec();b.b2=0.0;b.b1=0.0;b.b0=1.0;b.bZ=1.0;C$(b);A1q=b;b=new Bn;b.b2=1.0;b.b1=0.0;b.b0=0.0;b.bZ=1.0;C$(b);A1r=b;b=new Bn;b.b2=0.0;b.b1=1.0;b.b0=0.0;b.bZ=1.0;C$(b);A1s=b;b=new Sg;c=new BN;c.bf=0;c.r=Bg(C,16);b.bU=c;b.dy=2147483647;A1t=b;b=new Sf;AFn();A1u=b;A1v=new Se;A1w=new Sd;A1x=new Sc;}
var F1=G(C4);
var Kw=G(F1);
var Vz=G(Kw);
var ACm=G(BS);
var Ld=G(CU);
var Pq=G(0);
var EI=G();
var WD=G(EI);
var C9=G(FR);
var TZ=G(C9);
var ACl=G(BS);
var BO=G();
var A1z=null;var A1A=null;var A1B=null;var A1C=null;var A1D=null;var A1E=null;var A1F=null;function AFn(){AFn=W(BO);AG2();}
function AG2(){var b;b=new Hr;AFn();b.zA=0.0;A1z=b;A1A=new Qw;A1B=new Qt;A1C=new Qs;A1D=new Qv;A1E=new Qu;A1F=new Qr;}
var Qv=G(BO);
var AAq=G(BO);
var JQ=G(DI);
var Yu=G(JQ);
var Se=G(BO);
var ADy=G(BS);
var Hq=G(C4);
var AZy=null;var AZz=null;function AIo(){AZy=new By;AZz=new By;}
var AAr=G(BO);
var Gi=G(0);
var Em=G();
var AZt=null;var AZu=null;function ARW(){AZt=new Em;AZu=new Em;}
var Ee=G(Em);
var A1G=null;function AYP(){AYP=W(Ee);AGf();}
function A1H(){var a=new Ee();ZY(a);return a;}
function ZY(a){AYP();}
function AGf(){var b,c,d,e,f,g,$$je;Kr();b=A1I;c=Cv(b,J(Ee));b=c<0?null:b.cl.data[c];if(b===null){b=new Ik;d=new BN;d.bf=0;d.r=Bg(C,4);b.bU=d;b.dy=100;a:{try{d=K8(J(Ee),null);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof CE){}else{throw $$e;}}try{d=Kk(J(Ee),null);I$(d,1);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof Dk){}else{throw $$e;}}d=null;}b.gY=d;if(d===null){b=new BF;d=new O;d.b=D(16);I(d,d.a,B(27));if(J(Ee).X===null)J(Ee).X=$rt_str(J(Ee).C.$meta.name);e=J(Ee).X;I(d,d.a,e);e=new M;f=d.b;c
=d.a;P();g=D(c);e.e=g;L(f,0,g,0,c);b.c=1;b.d=1;b.f=e;H(b);}BD(A1I,J(Ee),b);}A1G=b;}
var WG=G(EI);
var Fo=G(C9);
var AZG=null;var AZH=null;var AZI=null;var AZJ=0.0;var AZK=0.0;function AUD(){AZG=new By;AZH=new By;AZI=new By;AZJ=0.4000000059604645;AZK=0.10000000149011612;}
var VH=G(Fo);
var X1=G(BS);
var Og=G(0);
var ABq=G();
var Gn=G();
var Gy=G(Gn);
var Q8=G(Gy);
var Lp=G(C9);
var Xf=G(Lp);
var AEr=G(Ld);
var JZ=G(CU);
var AEQ=G(F1);
var LK=G(C9);
var Sc=G(BO);
var Rt=G();
var WV=G();
var Yv=G(BS);
var Zi=G(Do);
var Xz=G();
var ABa=G(BS);
var AEg=G(DI);
var XZ=G(Hx);
var Qr=G(BO);
var Qu=G(BO);
var P0=G(0);
var Ju=G();
var M2=G(Ju);
var WE=G(EI);
var ACj=G(KO);
var ACn=G(Ly);
var ADz=G(BS);
var ADA=G(DI);
var Sd=G(BO);
var Ea=G();
var A1J=null;var A1K=null;var A1L=null;var A1M=null;var A1N=null;var A1O=null;var A1P=null;var A1Q=null;var A1R=null;function A1S(){A1S=W(Ea);AIE();}
function AIE(){var b;b=new Js;b.mq=0.0;A1J=b;b=new Js;b.mq=1.0;A1K=b;E7();A1L=A1T.data[128];E7();b=A1T.data[129];A1M=b;A1N=b;E7();A1O=A1T.data[130];E7();A1P=A1T.data[132];E7();A1Q=A1T.data[136];E7();A1R=A1T.data[144];}
var Pk=G(Gy);
var Ya=G(BS);
var Ub=G(Do);
var Qw=G(BO);
var VV=G(CU);
var X0=G(BS);
var PC=G();
function Hr(){BO.call(this);this.zA=0.0;}
var AZx=null;function ATw(){AZx=Bg(Hr,111);}
var WW=G(JZ);
var Qs=G(BO);
var Px=G(C9);
var AZL=null;function ATM(){AZL=new By;}
var X9=G(Lt);
var RT=G();
var J5=G(C9);
var A1U=null;var A1V=null;function A1W(){A1W=W(J5);AGk();}
function AGk(){var b,c;b=new Bn;Ec();A1U=b;b=new C5;Ek();c=new BN;c.bf=1;c.r=Bg(C,1);b.cE=c;c=new Dq;c.dJ=1;c.bL=Z(2);b.b7=c;A1V=b;}
var Ni=G();
var AAs=G(BO);
var Sf=G(BO);
var ABW=G(Hq);
var Qt=G(BO);
var O0=G();
var AEc=G();
var Dn=G(BC);
var A1X=null;var A1Y=null;var A1Z=null;var A10=null;var A11=null;var A12=null;function AYt(){AYt=W(Dn);AQu();}
function AQu(){var b,c,d,e,f;b=new Dn;AYt();b.t=B(28);b.q=0;A1X=b;c=new Dn;c.t=B(29);c.q=1;A1Y=c;d=new Dn;d.t=B(30);d.q=2;A1Z=d;e=new Dn;e.t=B(31);e.q=3;A10=e;f=new Dn;f.t=B(32);f.q=4;A11=f;A12=R(Dn,[b,c,d,e,f]);}
var AEl=G(BO);
var XQ=G(Do);
function CA(){var a=this;C.call(a);a.dy=0;a.fC=0;a.bU=null;}
function Im(a,b){var c,d,e;if(b===null){b=new Be;b.c=1;b.d=1;b.f=B(33);H(b);}c=a.bU;if(c.l<a.dy){Cj(c,b);d=a.fC;e=a.bU.l;if(d>e)e=d;a.fC=e;if(Dg(b,CL))b.dK();}else if(Dg(b,CL))b.dK();}
function ALH(a,b){if(Dg(b,CL))b.dK();}
function AIQ(a,b){if(Dg(b,CL))b.dK();}
function L2(a,b){var c,d,e,f,g,h,i;if(b===null){b=new Be;b.c=1;b.d=1;b.f=B(34);H(b);}c=a.bU;d=a.dy;e=0;f=b.l;while(e<f){if(e>=b.l){g=new Y;c=new O;c.b=D(16);I(c,c.a,B(35));N(c,c.a,e,10);I(c,c.a,B(36));d=b.l;N(c,c.a,d,10);b=new M;h=c.b;e=c.a;P();i=D(e);b.e=i;L(h,0,i,0,e);g.c=1;g.d=1;g.f=b;H(g);}g=b.r.data[e];if(g!==null){if(c.l<d){Cj(c,g);if(Dg(g,CL))g.dK();}else if(Dg(g,CL))g.dK();}e=e+1|0;}d=a.fC;e=c.l;if(d>e)e=d;a.fC=e;}
var Sg=G(CA);
var T3=G();
var RY=G();
var PM=G();
var Qm=G();
var Jj=G(BS);
var AZM=null;function AGi(){AZM=new By;}
var Ua=G(Do);
var ADB=G(LK);
var T7=G(0);
var Yb=G(BS);
var AEG=G(CU);
var AAc=G(CU);
var X$=G(DI);
var Lw=G();
var WC=G(Lw);
var ADn=G(FR);
var TF=G(BS);
var AB6=G(F1);
var Zw=G(BS);
var AD7=G(DI);
var Ry=G(Gn);
var AAg=G(CU);
var PF=G();
var O7=G();
var Zl=G(C9);
var AEh=G(GG);
var TG=G(BS);
var QO=G(CU);
var AZN=null;function ANG(){AZN=new By;}
var AEq=G(Jj);
var TH=G(C4);
var WF=G(EI);
var SN=G();
var R_=G();
var DQ=G();
var A13=null;var A14=null;var A15=null;var A16=null;var A17=null;var A18=null;var A19=null;var A1$=null;var A1_=null;var A2a=null;var A2b=null;function A2c(){A2c=W(DQ);AOd();}
function AOd(){var b;A13=Ce(16);b=new Dw;HE();b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=1.0;A14=b;b=new Dw;b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=1.0;A15=b;b=new Bl;CD();A16=b;A17=new Bl;A18=new Bl;A19=new Bl;A1$=Fp();A1_=new Bl;A2a=new Bl;A2b=new Bl;}
var Bk=G();
var A2d=null;var A2e=null;var A2f=null;var A2g=null;var A2h=null;var A2i=null;var A2j=null;var A2k=null;var A2l=null;var A2m=null;var A2n=null;var A2o=null;var A2p=null;var A2q=null;var A2r=null;var A2s=null;var A2t=null;var A2u=null;var A2v=null;var A2w=null;var A2x=null;var A2y=null;var A2z=null;var A2A=null;var A2B=null;var A2C=null;var A2D=null;var A2E=null;var A2F=null;var A2G=null;var A2H=null;var A2I=null;var A2J=null;var A2K=null;var A2L=null;var A2M=null;var A2N=null;var A2O=null;var A2P=null;var A2Q
=null;var A2R=null;var A2S=null;var A2T=null;var A2U=null;function DP(){DP=W(Bk);AHk();}
function AHk(){var b,c;b=new Q4;DP();A2d=b;A2e=new QW;A2f=new QV;b=new QY;A2g=b;A2h=b;b=new EM;b.dS=2;A2i=b;b=new HB;b.dS=2;A2j=b;A2k=b;b=new Hu;b.dS=2;A2l=b;A2m=b;A2n=new QX;A2o=new Q0;b=new EM;b.dS=3;A2p=b;b=new HB;b.dS=3;A2q=b;b=new Hu;b.dS=3;A2r=b;A2s=new QZ;A2t=new Q2;b=new EM;b.dS=4;A2u=b;b=new HB;b.dS=4;A2v=b;b=new Hu;b.dS=4;A2w=b;b=new EM;b.dS=5;A2x=b;b=new HB;b.dS=5;A2y=b;b=new Hu;b.dS=5;A2z=b;A2A=new Q1;A2B=new Qc;A2C=new Qe;b=new Gw;b.jf=2.0;b.jC=10.0;c=IR(2.0,(-10.0));b.j6=c;b.jE=1.0/(1.0-c);A2D
=b;b=new PA;b.jf=2.0;b.jC=10.0;c=IR(2.0,(-10.0));b.j6=c;b.jE=1.0/(1.0-c);A2E=b;b=new Sv;AAn(b,2.0,10.0);A2F=b;A2G=AV_(2.0,5.0);A2H=AWv(2.0,5.0);A2I=AXw(2.0,5.0);A2J=AWM();A2K=AWz();A2L=AYb();A2M=AX4(2.0,10.0,7,1.0);A2N=AWi(2.0,10.0,6,1.0);A2O=AXM(2.0,10.0,7,1.0);A2P=AWF(1.5);A2Q=AYJ(2.0);A2R=AXy(2.0);A2S=AWS(4);A2T=AXr(4);A2U=AWd(4);}
function UI(){Bk.call(this);this.Cm=0.0;}
function AYJ(a){var b=new UI();AKo(b,a);return b;}
function AKo(a,b){DP();a.Cm=b;}
var XS=G();
var QZ=G(Bk);
var ADR=G();
function EM(){Bk.call(this);this.dS=0;}
var HB=G(EM);
var Hu=G(EM);
var I8=G(0);
var Vi=G();
var Q2=G(Bk);
var ACw=G();
var QY=G(Bk);
function Hw(){var a=this;Bk.call(a);a.pS=0.0;a.mM=0.0;a.mX=0.0;a.nM=0.0;}
function AX4(a,b,c,d){var e=new Hw();AMR(e,a,b,c,d);return e;}
function AMR(a,b,c,d,e){DP();a.pS=b;a.mM=c;a.mX=e;a.nM=d*3.1415927410125732*(d%2|0?(-1):1);}
var QX=G(Bk);
var QW=G(Bk);
var IZ=G();
var AZO=null;var AZP=null;var AZQ=null;function AI6(){AZO=new By;AZP=new By;AZQ=new By;}
var S6=G(CA);
var IM=G(0);
function By(){var a=this;C.call(a);a.di=0.0;a.dh=0.0;}
var AZk=null;var AZl=null;var AZm=null;function AIB(){var b;b=new By;b.di=1.0;b.dh=0.0;AZk=b;b=new By;b.di=0.0;b.dh=1.0;AZl=b;b=new By;b.di=0.0;b.dh=0.0;AZm=b;}
var Z8=G(Bk);
function AWz(){var a=new Z8();APj(a);return a;}
function APj(a){DP();}
function Gw(){var a=this;Bk.call(a);a.jf=0.0;a.jC=0.0;a.j6=0.0;a.jE=0.0;}
function AV_(a,b){var c=new Gw();AAn(c,a,b);return c;}
function AAn(a,b,c){DP();a.jf=b;a.jC=c;c=IR(b, -c);a.j6=c;a.jE=1.0/(1.0-c);}
var Zj=G();
var Q4=G(Bk);
var Sv=G(Gw);
function AXw(a,b){var c=new Sv();ALX(c,a,b);return c;}
function ALX(a,b,c){DP();a.jf=b;a.jC=c;c=IR(b, -c);a.j6=c;a.jE=1.0/(1.0-c);}
var WR=G();
var ED=G(BC);
var A2V=null;var A2W=null;var A2X=null;var A2Y=null;function AX1(){AX1=W(ED);ATR();}
function ATR(){var b,c,d;b=new ED;AX1();b.t=B(37);b.q=0;A2V=b;c=new ED;c.t=B(38);c.q=1;A2W=c;d=new ED;d.t=B(39);d.q=2;A2X=d;A2Y=R(ED,[b,c,d]);}
var PJ=G();
var A2Z=null;function A20(){A20=W(PJ);ANb();}
function ANb(){var b;b=new Bl;CD();A2Z=b;}
function H2(){var a=this;Bk.call(a);a.yy=null;a.xc=null;}
function AWd(a){var b=new H2();ON(b,a);return b;}
function ON(a,b){var c,d,e,f,g,h,i;DP();if(b>=2&&b<=5){a:{c=Ce(b);a.yy=c;d=Ce(b);e=d.data;a.xc=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Be;g=new O;g.b=D(16);I(g,g.a,B(40));N(g,g.a,b,10);h=new M;c=g.b;i=g.a;P();d=D(i);h.e=d;L(c,0,d,0,i);f.c=1;f.d=1;f.f=h;H(f);}
var X5=G(H2);
function AXr(a){var b=new X5();AM3(b,a);return b;}
function AM3(a,b){ON(a,b);}
var Qc=G(Bk);
var ZN=G();
var QV=G(Bk);
function DW(){var a=this;C.call(a);a.i8=0.0;a.i7=0.0;a.i$=0.0;a.i6=0.0;}
var A21=null;var A22=null;var A23=null;var A24=null;var A25=null;function AXO(){AXO=W(DW);AUV();}
function AUV(){var b;b=new DW;AXO();b.i8=1.0;b.i7=0.0;b.i$=0.0;b.i6=0.0;A21=b;b=new DW;b.i8=0.0;b.i7=1.0;b.i$=0.0;b.i6=0.0;A22=b;b=new DW;b.i8=0.0;b.i7=0.0;b.i$=1.0;b.i6=0.0;A23=b;b=new DW;b.i8=0.0;b.i7=0.0;b.i$=0.0;b.i6=1.0;A24=b;b=new DW;b.i8=0.0;b.i7=0.0;b.i$=0.0;b.i6=0.0;A25=b;}
var T5=G(Hw);
function AWi(a,b,c,d){var e=new T5();AGh(e,a,b,c,d);return e;}
function AGh(a,b,c,d,e){DP();a.pS=b;a.mM=c;a.mX=e;a.nM=d*3.1415927410125732*(d%2|0?(-1):1);}
function Xs(){Bk.call(this);this.xw=0.0;}
function AWF(a){var b=new Xs();AHb(b,a);return b;}
function AHb(a,b){DP();a.xw=b*2.0;}
var U9=G();
var AEy=G();
var Q0=G(Bk);
function ADt(){Bk.call(this);this.zp=0.0;}
function AXy(a){var b=new ADt();ANw(b,a);return b;}
function ANw(a,b){DP();a.zp=b;}
var Z9=G(Bk);
function AYb(){var a=new Z9();ANO(a);return a;}
function ANO(a){DP();}
var Xo=G(Hw);
function AXM(a,b,c,d){var e=new Xo();AIV(e,a,b,c,d);return e;}
function AIV(a,b,c,d,e){DP();a.pS=b;a.mM=c;a.mX=e;a.nM=d*3.1415927410125732*(d%2|0?(-1):1);}
var JA=G();
var A26=null;var A27=null;var A28=null;function A29(){A29=W(JA);AFR();}
function AFR(){var b,c,d,e,f,g;A26=Bg(Bl,15);b=Bg(Bl,8);A27=b;c=Bg(Bl,9);d=c.data;A28=c;e=0;f=d.length;while(e<f){g=new Bl;CD();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bl;CD();b[e]=g;e=e+1|0;}}
function JV(){var a=this;C.call(a);a.tl=null;a.ty=null;a.sJ=null;a.tz=null;}
var A2$=null;function AYV(){AYV=W(JV);ARQ();}
function AAv(a,b,c){var d,e,f,g,h,i,j,k;d=a.tl;e=b.k;f=c.k;if(e<f)f=e;e=b.j;g=c.j;if(e<g)g=e;e=b.i;h=c.i;if(e<h)h=e;d.k=f;d.j=g;d.i=h;i=a.ty;e=b.k;g=c.k;if(e>g)g=e;e=b.j;h=c.j;if(e>h)h=e;e=b.i;f=c.i;if(e>f)f=e;i.k=g;i.j=h;i.i=f;b=a.sJ;h=d.k;j=d.j;k=d.i;b.k=h;b.j=j;b.i=k;e=i.k;f=i.j;g=i.i;h=h+e;j=j+f;k=k+g;b.k=h;b.j=j;b.i=k;f=h*0.5;g=j*0.5;e=k*0.5;b.k=f;b.j=g;b.i=e;b=a.tz;g=i.k;h=i.j;j=i.i;b.k=g;b.j=h;b.i=j;e=d.k;f=d.j;k=d.i;g=g-e;e=h-f;f=j-k;b.k=g;b.j=e;b.i=f;return a;}
function ARQ(){var b;b=new Bl;CD();A2$=b;}
function KL(){var a=this;C.call(a);a.xm=null;a.Bg=null;}
var A2_=null;function AXu(){AXu=W(KL);AR5();}
function AR5(){var b;b=new Bl;CD();A2_=b;}
var Vm=G();
var Ts=G();
var AA7=G();
var Xq=G();
var QH=G();
var A3a=null;function AXG(){AXG=W(QH);AMI();}
function Kp(b){var c;AXG();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function AMI(){var b,c,d,e;b=new P5;c=AJ7(Gj(T(4.294967296E9*$rt_globals.Math.random()+(-2.147483648E9)|0),32),T(4.294967296E9*$rt_globals.Math.random()+(-2.147483648E9)|0));if(Cn(c,B2))c=F(0, 2147483648);d=Bf(Jk(c,Bh(c,33)),F(3981806797, 4283543511));d=Bf(Jk(d,Bh(d,33)),F(444984403, 3301882366));e=Jk(d,Bh(d,33));d=Bf(Jk(e,Bh(e,33)),F(3981806797, 4283543511));d=Bf(Jk(d,Bh(d,33)),F(444984403, 3301882366));d=Jk(d,Bh(d,33));b.wp=e;b.wq=d;A3a=b;}
var Ck=G();
var A3b=null;var A3c=null;var A3d=null;var A3e=null;var A3f=null;var A3g=null;var A3h=null;var A3i=null;var A3j=null;var A3k=null;var A3l=null;var A3m=null;var A3n=null;var A3o=null;var A3p=null;var A3q=null;var A3r=null;var A3s=null;var A3t=null;var A3u=null;var A3v=null;var A3w=null;var A3x=null;var A3y=null;function A3z(){A3z=W(Ck);AI4();}
function AI4(){var b,c;b=new Bl;CD();A3b=b;A3c=new Bl;A3d=new Bl;b=new Jg;b.l7=1;b.bX=Ce(16);A3e=b;b=new Jg;b.l7=1;b.bX=Ce(16);A3f=b;A3g=new By;A3h=new By;A3i=new By;A3j=new By;A3k=new By;A3l=new By;A3m=new By;A3n=new By;A3o=new By;b=new Jm;c=new Bl;b.fa=c;b.f0=0.0;c.k=0.0;c.j=0.0;c.i=0.0;b.f0=0.0;A3p=b;A3q=new Bl;A3r=new Bl;A3s=new Bl;A3t=new Bl;A3u=new Bl;A3v=new Bl;A3w=new Bl;A3x=new Bl;A3y=new Bl;}
var Uf=G();
var WH=G(H2);
function AWS(a){var b=new WH();AOP(b,a);return b;}
function AOP(a,b){ON(a,b);}
function DF(){C.call(this);this.cH=null;}
var A3A=null;var A3B=null;var A3C=null;var A3D=null;var A3E=null;var A3F=null;var A3G=null;var A3H=null;var A3I=null;var A3J=null;var A3K=null;function Gq(){Gq=W(DF);AGe();}
function Fp(){var a=new DF();ABx(a);return a;}
function ABx(a){var b,c;Gq();b=Ce(16);c=b.data;a.cH=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;}
function Ig(a,b){var c;c=b.data;b=a.cH.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;}
function PZ(a,b){var c,d,e,f,g;Gq();c=A3A;d=c.data;e=a.cH.data;f=e[0];g=b.cH.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]
=e[2]*g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Ig(a,c);}
function Ir(a){var b;b=a.cH.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;}
function Ue(a,b,c,d,e){var f,g,h,i;Ir(a);f=1.0/ASj(d*0.017453292519943295/2.0);d=c+b;g=b-c;h=d/g;g=2.0*c*b/g;i=a.cH.data;i[0]=f/e;i[1]=0.0;i[2]=0.0;i[3]=0.0;i[4]=0.0;i[5]=f;i[6]=0.0;i[7]=0.0;i[8]=0.0;i[9]=0.0;i[10]=h;i[11]=(-1.0);i[12]=0.0;i[13]=0.0;i[14]=g;i[15]=0.0;return a;}
function ZS(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;Ir(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.cH.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;}
function Wb(a,b,c){var d,e,f,g,h,i;Gq();d=A3D;e=b.k;f=b.j;g=b.i;d.k=e;d.j=f;d.i=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/BQ(f);f=d.k*e;g=d.j*e;e=d.i*e;d.k=f;d.j=g;d.i=e;}d=A3E;e=b.k;f=b.j;g=b.i;d.k=e;d.j=f;d.i=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/BQ(f);f=d.k*e;g=d.j*e;e=d.i*e;d.k=f;d.j=g;d.i=e;}b=Io(A3E,c);e=b.k;e=e*e;f=b.j;e=e+f*f;f=b.i;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/BQ(e);h=b.k*g;e=b.j*g;f=b.i*g;b.k=h;b.j=e;b.i=f;}b=A3F;c=A3E;e=c.k;f=c.j;g=c.i;b.k=e;b.j=f;b.i=g;b=Io(b,A3D);e=b.k;e=e*e;f=b.j;e=
e+f*f;f=b.i;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/BQ(f);f=b.k*e;g=b.j*e;e=b.i*e;b.k=f;b.j=g;b.i=e;}Ir(a);i=a.cH.data;b=A3E;i[0]=b.k;i[4]=b.j;i[8]=b.i;b=A3F;i[1]=b.k;i[5]=b.j;i[9]=b.i;b=A3D;i[2]= -b.k;i[6]= -b.j;i[10]= -b.i;return a;}
function Th(b,c){var d,e,f;Gq();d=b.data;c=c.data;e=Ce(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+
d[6]*c[5]+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];L(e,0,b,0,16);}
function ADu(b){Gq();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]
*b[4]*b[10]*b[15]+b[0]*b[5]*b[10]*b[15];}
function Wr(b){var c,d,e;Gq();c=Ce(16);d=ADu(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]
*b[10]*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]
=b[12]*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]
*b[3]-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;}
function XE(b,c,d){var e,f,g,h,i,j,k,l;Gq();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;}
function AGe(){var b;A3A=Ce(16);b=new Dw;HE();b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=1.0;A3B=b;b=new Dw;b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=1.0;A3C=b;b=new Bl;CD();A3D=b;A3E=new Bl;A3F=new Bl;A3G=new Bl;A3H=Fp();A3I=new Bl;A3J=new Bl;A3K=new Bl;}
var ND=G(0);
var K7=G();
function P5(){var a=this;K7.call(a);a.wp=B2;a.wq=B2;}
var Z7=G(Bk);
function AWM(){var a=new Z7();ATU(a);return a;}
function ATU(a){DP();}
var Q1=G(Bk);
function I_(){var a=this;C.call(a);a.gJ=null;a.e$=null;a.lV=null;}
var A3L=null;var A3M=null;var A3N=null;function AMx(){AMx=W(I_);ANg();}
function AXR(){var a=new I_();Tu(a);return a;}
function Tu(a){var b,c,d,e,f,g;AMx();b=Bg(Jm,6);c=b.data;a.gJ=b;b=Bg(Bl,8);d=b.data;e=new Bl;CD();d[0]=e;d[1]=new Bl;d[2]=new Bl;d[3]=new Bl;d[4]=new Bl;d[5]=new Bl;d[6]=new Bl;d[7]=new Bl;a.e$=b;a.lV=Ce(24);f=0;while(f<6){e=new Jm;g=new Bl;e.fa=g;e.f0=0.0;g.k=0.0;g.j=0.0;g.i=0.0;e.f0=0.0;c[f]=e;f=f+1|0;}}
function AAm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;AMx();c=A3M;d=c.data;L(c,0,a.lV,0,d.length);c=b.cH;e=a.lV;f=0;Gq();g=0;while(g<8){XE(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.e$.data[f];c=a.lV.data;j=h+1|0;i.k=c[h];g=j+1|0;i.j=c[j];h=g+1|0;i.i=c[g];f=f+1|0;}b=a.gJ.data[0];c=a.e$.data;i=c[1];k=c[0];l=c[2];m=b.fa;n=i.k;o=i.j;p=i.i;m.k=n;m.j=o;m.i=p;q=k.k;r=k.j;s=k.i;q=n-q;o=o-r;n=p-s;m.k=q;m.j=o;m.i=n;p=k.k-l.k;r=k.j-l.j;s=k.i-l.i;t=o*s-n*r;s=n*p-q*s;q=q*r-o*p;m.k=t;m.j=s;m.i=q;p=t*t+s*s+q*q;if
(p!==0.0&&p!==1.0){o=1.0/BQ(p);p=m.k*o;q=m.j*o;o=m.i*o;m.k=p;m.j=q;m.i=o;}k=b.fa;b.f0= -(i.k*k.k+i.j*k.j+i.i*k.i);b=a.gJ.data[1];c=a.e$.data;i=c[4];k=c[5];l=c[7];m=b.fa;r=i.k;s=i.j;n=i.i;m.k=r;m.j=s;m.i=n;o=k.k;p=k.j;q=k.i;o=r-o;p=s-p;q=n-q;m.k=o;m.j=p;m.i=q;AER(Zf(m,k.k-l.k,k.j-l.j,k.i-l.i));b.f0= -ADd(i,b.fa);b=a.gJ.data[2];c=a.e$.data;IN(b,c[0],c[4],c[3]);b=a.gJ.data[3];c=a.e$.data;IN(b,c[5],c[1],c[6]);b=a.gJ.data[4];c=a.e$.data;IN(b,c[2],c[3],c[6]);b=a.gJ.data[5];c=a.e$.data;IN(b,c[4],c[0],c[1]);}
function ANg(){var b,c,d,e,f,g,h,i,j;b=Bg(Bl,8);c=b.data;d=new Bl;CD();d.k=(-1.0);d.j=(-1.0);d.i=(-1.0);c[0]=d;d=new Bl;d.k=1.0;d.j=(-1.0);d.i=(-1.0);c[1]=d;d=new Bl;d.k=1.0;d.j=1.0;d.i=(-1.0);c[2]=d;d=new Bl;d.k=(-1.0);d.j=1.0;d.i=(-1.0);c[3]=d;d=new Bl;d.k=(-1.0);d.j=(-1.0);d.i=1.0;c[4]=d;d=new Bl;d.k=1.0;d.j=(-1.0);d.i=1.0;c[5]=d;d=new Bl;d.k=1.0;d.j=1.0;d.i=1.0;c[6]=d;d=new Bl;d.k=(-1.0);d.j=1.0;d.i=1.0;c[7]=d;A3L=b;b=Ce(24);e=b.data;A3M=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]=d.k;j=i+1|0;e[i]
=d.j;f=j+1|0;e[j]=d.i;h=h+1|0;}A3N=new Bl;}
function Dw(){var a=this;C.call(a);a.cc=0.0;a.ca=0.0;a.cb=0.0;a.cr=0.0;}
var A3O=null;var A3P=null;function HE(){HE=W(Dw);ALT();}
function V2(a,b,c,d,e){a.cc=b;a.ca=c;a.cb=d;a.cr=e;return a;}
function Fb(a){a.cc= -a.cc;a.ca= -a.ca;a.cb= -a.cb;return a;}
function ALT(){var b;b=new Dw;HE();b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=0.0;A3O=b;b=new Dw;b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=0.0;A3P=b;}
var S0=G();
var AAa=G();
function Bl(){var a=this;C.call(a);a.k=0.0;a.j=0.0;a.i=0.0;}
var A3Q=null;var A3R=null;var A3S=null;var A3T=null;var A3U=null;function CD(){CD=W(Bl);AGG();}
function AER(a){var b,c,d;b=a.k;b=b*b;c=a.j;b=b+c*c;c=a.i;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/BQ(c);c=a.k*b;d=a.j*b;b=a.i*b;a.k=c;a.j=d;a.i=b;return a;}return a;}
function ADd(a,b){return a.k*b.k+a.j*b.j+a.i*b.i;}
function Io(a,b){var c,d,e,f,g,h,i;c=a.j;d=b.i;e=c*d;f=a.i;g=b.j;h=e-f*g;e=b.k;f=f*e;i=a.k;d=f-i*d;c=i*g-c*e;a.k=h;a.j=d;a.i=c;return a;}
function Zf(a,b,c,d){var e,f,g,h;e=a.j;f=e*d;g=a.i;h=f-g*c;g=g*b;f=a.k;d=g-f*d;b=f*c-e*b;a.k=h;a.j=d;a.i=b;return a;}
function AGG(){var b;b=new Bl;CD();b.k=1.0;b.j=0.0;b.i=0.0;A3Q=b;b=new Bl;b.k=0.0;b.j=1.0;b.i=0.0;A3R=b;b=new Bl;b.k=0.0;b.j=0.0;b.i=1.0;A3S=b;b=new Bl;b.k=0.0;b.j=0.0;b.i=0.0;A3T=b;A3U=Fp();}
var WU=G();
var VW=G(CA);
var PA=G(Gw);
function AWv(a,b){var c=new PA();AOY(c,a,b);return c;}
function AOY(a,b,c){DP();a.jf=b;a.jC=c;c=IR(b, -c);a.j6=c;a.jE=1.0/(1.0-c);}
var AAt=G();
var Ut=G();
var ACL=G();
function Jm(){var a=this;C.call(a);a.fa=null;a.f0=0.0;}
function IN(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.fa;f=b.k;g=b.j;h=b.i;e.k=f;e.j=g;e.i=h;i=c.k;j=c.j;k=c.i;f=f-i;g=g-j;k=h-k;e.k=f;e.j=g;e.i=k;h=c.k-d.k;j=c.j-d.j;l=c.i-d.i;i=g*l-k*j;k=k*h-f*l;f=f*j-g*h;e.k=i;e.j=k;e.i=f;f=i*i+k*k+f*f;if(f!==0.0&&f!==1.0){k=1.0/BQ(f);f=e.k*k;g=e.j*k;k=e.i*k;e.k=f;e.j=g;e.i=k;}c=a.fa;a.f0= -(b.k*c.k+b.j*c.j+b.i*c.i);}
var Qe=G(Bk);
var ACN=G();
var Ux=G();
var AA3=G();
var ACK=G();
var ZH=G(0);
var W0=G();
var Q9=G();
var A3V=null;function VJ(){var b,c;A3V=Ce(16384);b=0;while(b<16384){A3V.data[b]=ASN((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=A3V.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);}
function C5(){var a=this;C.call(a);a.cE=null;a.b7=null;a.cY=0;a.o1=0.0;a.la=0.0;}
var A3W=null;var A3X=null;function Ek(){Ek=W(C5);AJe();}
function A3Y(){var a=new C5();ADM(a);return a;}
function A3Z(a,b){var c=new C5();Uw(c,a,b);return c;}
function A30(a,b,c,d,e,f){var g=new C5();ABd(g,a,b,c,d,e,f);return g;}
function A31(a,b,c,d,e,f,g,h,i){var j=new C5();ABQ(j,a,b,c,d,e,f,g,h,i);return j;}
function ADM(a){var b;Ek();b=new BN;b.bf=1;b.r=Bg(C,1);a.cE=b;b=new Dq;b.dJ=1;b.bL=Z(2);a.b7=b;}
function Uw(a,b,c){var d;Ek();d=new BN;d.bf=1;d.r=Bg(C,1);a.cE=d;d=new Dq;d.dJ=1;d.bL=Z(2);a.b7=d;GX(a,b,c,0,c.hl(),b.IH(),0.0,8,0,null);}
function ABd(a,b,c,d,e,f,g){var h;Ek();h=new BN;h.bf=1;h.r=Bg(C,1);a.cE=h;h=new Dq;h.dJ=1;h.bL=Z(2);a.b7=h;GX(a,b,c,0,c.hl(),d,e,f,g,null);}
function ABQ(a,b,c,d,e,f,g,h,i,j){var k;Ek();k=new BN;k.bf=1;k.r=Bg(C,1);a.cE=k;k=new Dq;k.dJ=1;k.bL=Z(2);a.b7=k;GX(a,b,c,d,e,f,g,h,i,j);}
function GX(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;ACV(a);k=b.iI;if(d==e){a.la=k.eM;return;}if(i)g=Jr(g,k.p0*3.0);l=!i&&j===null?0:1;m=Jw(f);ADG(a.b7,0,m);n=k.jv;if(n)Ff(A3X,m);o=0;p=0.0;q=k.ks;r=null;s=null;t=m;u=d;a:{b:while(true){c:{v=0;if(d==e){if(u==e)break a;o=1;w=e;}else{i=d+1|0;if(d<0)break b;x=c.e.data;if(d>=x.length)break b;d:{switch(x[d]){case 10:w=i-1|0;v=1;d=i;break c;case 91:if(!n){d=i;break d;}y=AAP(a,c,i,e);if(y>=0){w=i-1|0;d=i+(y+1|0)|0;if(d==e){o=1;break c;}m=
Pw(A3X);break c;}if(y!=(-2)){d=i;break d;}d=i+1|0;break d;default:}d=i;}continue b;}}f=A3W;b=f.bU;i=b.l;if(!i)b=KF(f);else{if(!i){b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}i=i-1|0;b.l=i;x=b.r.data;b=x[i];x[i]=null;}z=b;z.ei=0.0;z.lc=p;NI(k,z,c,u,w,s);a.cY=a.cY+z.bF.l|0;if(m!=t){b=a.b7;i=FS(b,b.bd-2|0);ba=a.cY;if(i!=ba){Ff(a.b7,ba);Ff(a.b7,m);}else{b=a.b7;IW(b,b.bd-1|0,m);}t=m;}e:{if(!z.bF.l){Im(A3W,z);if(r===null)break e;}else if(r!==null){TA(r,z);Im(A3W,z);}else{Cj(a.cE,z);r=z;}if(!v&&!o)s=AEa(r.bF);else{Rh(a,k,
r);s=null;}if(l&&r.bF.l&&!(!v&&!o)){bb=Oo(r.b9)+NX(r.b9,1);bc=2;while(bc<r.b9.bE){b=r.bF;y=bc-1|0;bd=FX(b,y);if(bb+(bd.cO+bd.dx|0)*k.e2-k.fl-9.999999747378752E-5<=g)bb=bb+r.b9.bX.data[bc];else{if(j!==null){T0(a,k,r,g,j);break a;}ba=SX(k,r.bF,bc);if(!(!ba&&r.ei===0.0)&&ba<r.bF.l)y=ba;r=ACf(a,k,r,y);if(r===null)break e;Cj(a.cE,r);p=p+q;r.ei=0.0;r.lc=p;bb=Oo(r.b9)+NX(r.b9,1);bc=1;}bc=bc+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.r9;}u=d;}b=new X;b.c=1;b.d=1;H(b);}a.la=k.eM+Fy(p);VN(a,k);ZD(a,g,h);if(n)A3X.bd=
0;}
function VN(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=0.0;d=a.cE;e=d.r;f=0;g=d.l;while(f<g){d=e.data[f];h=d.b9.bX.data;i=d.ei+h[0];j=0.0;k=d.bF;l=k.r;m=0;n=k.l;while(m<n){k=l.data[m];j=Jr(j,i+(k.cO+k.dx|0)*b.e2-b.fl);m=m+1|0;i=i+h[m];}i=Jr(i,j);j=d.ei;i=i-j;d.mb=i;c=Jr(c,j+i);f=f+1|0;}a.o1=c;}
function ZD(a,b,c){var d,e,f,g,h;a:{if(!(c&8)){d=!(c&1)?0:1;e=a.cE;f=e.r;g=0;h=e.l;while(true){if(g>=h)break a;e=f.data[g];e.ei=e.ei+(!d?b-e.mb:0.5*(b-e.mb));g=g+1|0;}}}}
function T0(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=c.bF.l;Ek();g=A3W;h=g.bU;i=h.l;if(!i)g=KF(g);else{if(!i){b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}i=i-1|0;h.l=i;j=h.r.data;g=j[i];j[i]=null;}k=g;NI(b,k,e,0,e.hl(),null);l=0.0;h=k.b9;m=h.bE;if(m>0){g=k.bF;n=g.l;if(!n){b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}g=g.r.data[n-1|0];if(!g.j1)h.bX.data[m-1|0]=(g.cO+g.dx|0)*b.e2-b.fl;j=h.bX;o=1;while(o<m){l=l+j.data[o];o=o+1|0;}}d=d-l;n=0;p=c.ei;q=c.b9;r=q.bX;a:{while(true){if(n>=q.bE)break a;p=p+r.data[n];if(p>d)break;n
=n+1|0;}}if(n<=1){s=c.bF;j=s.r;i=0;n=s.l;g=null;if(i>n){b=new Be;b.c=1;b.d=1;H(b);}while(i<n){r=j.data;o=i+1|0;r[i]=g;i=o;}s.l=0;q.bE=0;JO(q,h.bX,0,h.bE);}else{MM(c.bF,n-1|0);h=c.b9;if(h.bE>n)h.bE=n;g=c.bF;n=g.l;if(!n){b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}g=g.r.data[n-1|0];if(!g.j1)h.bX.data[h.bE-1|0]=(g.cO+g.dx|0)*b.e2-b.fl;g=k.b9;i=g.bE;if(i>0)RF(h,g,1,i-1|0);}b:{i=f-c.bF.l|0;if(i>0){a.cY=a.cY-i|0;if(b.jv)while(true){b=a.b7;i=b.bd;if(i<=2)break b;if(FS(b,i-2|0)<a.cY)break b;b=a.b7;b.bd=b.bd-2|0;}}}b=c.bF;c
=k.bF;j=c.r;n=c.l;r=b.r;t=r.data;o=b.l;m=o+n|0;if(m>t.length){f=8;if(f<=m)f=m;o=o*1.75|0;if(f>o)o=f;r=VK(b,o);}L(j,0,r,b.l,n);b.l=m;a.cY=a.cY+e.hl()|0;Im(A3W,k);}
function ACf(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;e=c.bF;f=e.l;g=c.b9;h=d;a:{while(true){if(h<=0)break a;i=h-1|0;if(i>=f)break;b:{switch(e.r.data[i].fb&65535){case 9:case 10:case 13:case 32:break;default:j=0;break b;}j=1;}if(!j)break a;h=h+(-1)|0;}c=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,i,10);I(b,b.a,B(36));d=e.l;N(b,b.a,d,10);k=new M;l=b.b;j=b.a;P();m=D(j);k.e=m;L(l,0,m,0,j);c.c=1;c.d=1;c.f=k;H(c);}c:{while(true){j=Bm(d,f);if(j>=0)break c;if(j>=0)break;d:{switch(e.r.data[d].fb&65535){case 9:case 10:case 13:case 32:break;default:i
=0;break d;}i=1;}if(!i)break c;d=d+1|0;}c=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,d,10);I(b,b.a,B(36));d=e.l;N(b,b.a,d,10);k=new M;l=b.b;j=b.a;P();m=D(j);k.e=m;L(l,0,m,0,j);c.c=1;c.d=1;c.f=k;H(c);}k=null;if(j>=0){MM(e,h);f=h+1|0;if(g.bE>f)g.bE=f;n=d-h|0;if(n>0){a.cY=a.cY-n|0;if(b.jv){g=a.b7;if(FS(g,g.bd-2|0)>a.cY){o=Pw(a.b7);while(true){g=a.b7;d=FS(g,g.bd-2|0);j=a.cY;if(d<=j)break;g=a.b7;g.bd=g.bd-2|0;}g=a.b7;IW(g,g.bd-2|0,j);g=a.b7;IW(g,g.bd-1|0,o);}}}}else{Ek();p=A3W;k=p.bU;k=k.l?JN(k):KF(p);e:{k=k;p
=k.bF;Tm(p,e,0,h);VG(e,0,d-1|0);c.bF=p;k.bF=e;q=k.b9;RF(q,g,0,h+1|0);S$(g,1,d);g.bX.data[0]=( -(AEI(e)).dx|0)*b.e2-b.lK;c.b9=q;k.b9=g;j=c.bF.l;i=k.bF.l;n=(f-j|0)-i|0;d=a.cY-n|0;a.cY=d;if(b.jv&&n>0){r=d-i|0;s=a.b7.bd-2|0;while(true){if(s<2)break e;t=FS(a.b7,s);if(t<=r)break;IW(a.b7,s,t-n|0);s=s+(-2)|0;}}}}if(h)Rh(a,b,c);else{Ek();Im(A3W,c);JN(a.cE);}return k;}
function Rh(a,b,c){var d,e;d=c.bF;e=d.l;if(!e){b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}d=d.r.data[e-1|0];if(!d.j1){c=c.b9;c.bX.data[c.bE-1|0]=(d.cO+d.dx|0)*b.e2-b.fl;}}
function AAP(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c==d)return (-1);if(c>=0){e=b.e;f=e.data;g=f.length;if(c<g){switch(f[c]){case 35:h=0;i=c+1|0;a:{while(true){if(i>=d)break a;if(i<0)break;if(i>=g)break;j=f[i];if(j==93){if(i<(c+2|0))break a;if(i<=(c+9|0)){c=i-c|0;if(c<8)h=h<<((9-c|0)<<2)|255;Ek();b=A3X;d=((h&(-16711936))>>>8|0)|(h&16711935)<<8;Ff(b,(d>>>16|0)+(d<<16)|0);return c;}break a;}k=(h<<4)+j|0;if(j>=48&&j<=57)h=k+(-48)|0;else if(j>=65&&j<=70)h=k+(-55)|0;else{if(j<97)break a;if(j>102)break a;h=k+(-87)|0;}i
=i+1|0;}b=new X;b.c=1;b.d=1;H(b);}return (-1);case 91:break;case 93:Ek();b=A3X;c=b.bd;if(c>1)b.bd=c-1|0;return 0;default:l=c+1|0;b:{while(l<d){if(l<0)break b;i=Bm(l,g);if(i>=0)break b;if(f[l]==93){d=Bm(c,l);if(d>0){b=new Y;b.c=1;b.d=1;H(b);}if(!d){P();b=A32;}else if(!(!c&&!i)){b=new M;d=l-c|0;P();f=D(d);b.e=f;L(e,c,f,0,d);}AKk();m=A33;d=Cv(m,b);m=d<0?null:m.cl.data[d];if(m===null)return (-1);Ek();Ff(A3X,Jw(m));return l-c|0;}l=l+1|0;}return (-1);}b=new X;b.c=1;b.d=1;H(b);}return (-2);}}b=new X;b.c=1;b.d=1;H(b);}
function ACV(a){var b,c,d,e,f,g,h;Ek();L2(A3W,a.cE);b=a.cE;c=b.r;d=0;e=b.l;f=null;if(d>e){b=new Be;b.c=1;b.d=1;H(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.l=0;a.b7.bd=0;a.cY=0;a.o1=0.0;a.la=0.0;}
function APF(a){var b,c,d,e,f,g,h,i,j;if(!a.cE.l)return B(42);b=new O;b.b=D(128);c=a.o1;DK(b,b.a,c);d=b.a;Bc(b,d,d+1|0);b.b.data[d]=120;c=a.la;DK(b,b.a,c);d=b.a;Bc(b,d,d+1|0);b.b.data[d]=10;e=0;d=a.cE.l;while(e<d){f=a.cE;if(e>=f.l){g=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,e,10);I(b,b.a,B(36));e=f.l;N(b,b.a,e,10);f=new M;h=b.b;d=b.a;P();i=D(d);f.e=i;L(h,0,i,0,d);g.c=1;g.d=1;g.f=f;H(g);}f=TQ(f.r.data[e]);I(b,b.a,f);j=b.a;Bc(b,j,j+1|0);b.b.data[j]=10;e=e+1|0;}e=b.a-1|0;b.a=e;f=new M;h=b.b;P();i=D(e);f.e
=i;L(h,0,i,0,e);return f;}
function AJe(){var b,c,d,e,f,g,$$je;Kr();b=A1I;c=Cv(b,J(Ex));b=c<0?null:b.cl.data[c];if(b===null){b=new Ik;d=new BN;d.bf=0;d.r=Bg(C,4);b.bU=d;b.dy=100;a:{try{d=K8(J(Ex),null);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof CE){}else{throw $$e;}}try{d=Kk(J(Ex),null);I$(d,1);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof Dk){}else{throw $$e;}}d=null;}b.gY=d;if(d===null){b=new BF;d=new O;d.b=D(16);I(d,d.a,B(27));if(J(Ex).X===null)J(Ex).X=$rt_str(J(Ex).C.$meta.name);e=J(Ex).X;I(d,d.a,e);e=new M;f=d.b;c
=d.a;P();g=D(c);e.e=g;L(f,0,g,0,c);b.c=1;b.d=1;b.f=e;H(b);}BD(A1I,J(Ex),b);}A3W=b;e=new Dq;e.dJ=1;e.bL=Z(4);A3X=e;}
function DR(){var a=this;C.call(a);a.de=null;a.l5=0.0;a.ia=0.0;a.vw=0.0;a.l3=0.0;a.hY=0;a.iC=0;}
function Je(a,b,c,d,e){var f,g,h;f=a.de.d2;g=1.0/f.d5;h=1.0/f.dY;Uv(a,b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.hY=d;if(e<0)e= -e|0;a.iC=e;}
function Uv(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.de.d2;g=f.d5;h=f.dY;i=Fy(d-b);j=g;i=i*j;a.hY=i+Ci(i)*0.5|0;k=Fy(e-c);i=h;k=k*i;l=k+Ci(k)*0.5|0;a.iC=l;if(a.hY==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.l5=b;a.ia=c;a.vw=d;a.l3=e;}
function V8(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.l5*a.de.d2.d5;e=d+Ci(d)*0.5|0;d=a.ia*a.de.d2.dY;f=d+Ci(d)*0.5|0;g=a.hY;h=a.iC/c|0;i=g/b|0;j=$rt_createMultiArray(DR,[i,h]);k=j.data;l=0;while(l<h){m=0;n=e;while(m<i){o=k[l].data;p=new DR;p.de=a.de;Je(p,n,f,b,c);o[m]=p;m=m+1|0;n=n+b|0;}l=l+1|0;f=f+c|0;}return j;}
var Z4=G(DR);
function Kv(){var a=this;C.call(a);a.iI=null;a.fw=null;a.e4=null;a.xe=0;a.v2=0;a.pl=0;}
function A34(a,b,c){var d=new Kv();WX(d,a,b,c);return d;}
function WX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;a.xe=b.nL;a.iI=b;a.v2=d;if(c!==null&&c.l){a.fw=c;a.pl=0;}else{e=b.h$;if(e===null){b=new Be;b.c=1;b.d=1;b.f=B(43);H(b);}f=e.data.length;c=new BN;c.bf=1;c.r=Bg(C,f);a.fw=c;g=0;while(g<f){h=b.ur;if(h!==null){i=A35;c=b.h$.data[g];j=h.iS;k=AA0(i.h2,c,j);}else{c=A35;h=b.h$.data[g];k=new HK;i=c.h2;IT();Iw(k,i,h,A36);}c=a.fw;h=new DR;l=new HI;m=null;j=Yr(k,Q6(k),m,0);i=A37;m=i.m.createTexture();n=i.eE;i.eE=n+1|0;Cc(i.e_,n,Cg(m));NS();k=A38;l.hf=k;l.im=k;Mh();k=A39;l.gT=k;l.hh
=k;l.jX=1.0;l.dX=3553;l.hv=n;LQ(l,j);k=A3$;i=A3_;if(k===null){i=i.cq.data[0];while(i!==null&&i.cB!==null){i=i.cQ;}}else{d=Mo(k);e=i.cq.data;i=e[d&(e.length-1|0)];while(i!==null&&!(i.el==d&&T1(k,i.cB))){i=i.cQ;}}i=i===null?null:i.dL;if(i===null){i=new BN;i.bf=1;i.r=Bg(C,16);}Cj(i,l);Gx(A3_,k,i);h.de=l;k=l.d2;Je(h,0,0,k.d5,k.dY);Cj(c,h);g=g+1|0;}a.pl=1;}a.e4=AYk(a,a.v2);AEA(a,b);}
function AEA(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.gd.data;d=c.length;e=0;a:while(true){if(e>=d){f=b.na;if(f!==null){g=a.fw;d=f.h0;if(d>=g.l){f=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,d,10);I(b,b.a,B(36));d=g.l;N(b,b.a,d,10);g=new M;c=b.b;e=b.a;P();h=D(e);g.e=h;L(c,0,h,0,e);f.c=1;f.d=1;f.f=g;H(f);}MR(b,f,g.r.data[d]);}return;}b:{h=c[e];if(h!==null){h=h.data;i=h.length;j=0;while(true){if(j>=i)break b;f=h[j];if(f!==null){g=a.fw;k=f.h0;if(k>=g.l)break a;MR(b,f,g.r.data[k]);}j=j+1|0;}}}e=e+1|0;}b=new Y;l=new O;l.b
=D(16);I(l,l.a,B(35));N(l,l.a,k,10);I(l,l.a,B(36));d=g.l;N(l,l.a,d,10);f=new M;c=l.b;e=l.a;P();h=D(e);f.e=h;L(c,0,h,0,e);b.c=1;b.d=1;b.f=f;H(b);}
function Ix(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$$je;Qo(a.e4);f=a.e4;g=c.e.data.length;h=null;Kr();i=A1I;j=Cv(i,J(C5));i=j<0?null:i.cl.data[j];if(i===null){i=new Ik;k=new BN;CI(k);k.bf=0;k.r=Bg(C,4);i.bU=k;i.dy=100;a:{try{k=K8(J(C5),null);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof CE){}else{throw $$e;}}try{k=Kk(J(C5),null);I$(k,1);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof Dk){}else{throw $$e;}}k=null;}i.gY=k;if(k===null){b=new BF;c=new O;Ia(c,16);CM(c,c.a,B(27));if(J(C5).X===null)J(C5).X=$rt_str(J(C5).C.$meta.name);i
=J(C5).X;CM(c,c.a,i);i=new M;l=c.b;j=c.a;P();m=D(j);i.e=m;L(l,0,m,0,j);b.c=1;b.d=1;b.f=i;H(b);}BD(A1I,J(C5),i);}k=i.bU;n=k.l;if(!n)k=i.i_();else{if(!n){b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}n=n-1|0;k.l=n;l=k.r.data;k=l[n];l[n]=null;}i=k;Cj(f.i3,i);GX(i,f.fL,c,0,g,f.l1,0.0,8,0,h);PV(f,i,d,e+f.fL.iI.i9);Oi(a.e4,b);return i;}
var QJ=G();
var A4a=null;function A4b(){A4b=W(QJ);ATY();}
function ATY(){var b;b=new Bn;Ec();A4a=b;}
function Bn(){var a=this;C.call(a);a.b2=0.0;a.b1=0.0;a.b0=0.0;a.bZ=0.0;}
var A4c=null;var A4d=null;var A4e=null;var A4f=null;var A4g=null;var A4h=0.0;var A4i=null;var A4j=null;var A4k=null;var A4l=null;var A4m=null;var A4n=null;var A4o=null;var A4p=null;var A4q=null;var A4r=null;var A4s=null;var A4t=null;var A4u=null;var A4v=null;var A4w=null;var A4x=null;var A4y=null;var A4z=null;var A4A=null;var A4B=null;var A4C=null;var A4D=null;var A4E=null;var A4F=null;var A4G=null;var A4H=null;var A4I=null;var A4J=null;var A4K=null;function Ec(){Ec=W(Bn);AFg();}
function C$(a){var b,c;b=a.b2;if(b<0.0)a.b2=0.0;else if(b>1.0)a.b2=1.0;c=a.b1;if(c<0.0)a.b1=0.0;else if(c>1.0)a.b1=1.0;c=a.b0;if(c<0.0)a.b0=0.0;else if(c>1.0)a.b0=1.0;c=a.bZ;if(c<0.0)a.bZ=0.0;else if(c>1.0)a.bZ=1.0;return a;}
function AJL(a,b){var c,d,e,f;if(a===b)return 1;if(b!==null){c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BZ;d.C=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BZ;c.C=e;f=c;e.classObject=f;}}if(d===c){c=b;return Jw(a)!=Jw(c)?0:1;}}return 0;}
function ANM(a){var b,c,d;b=a.b2;c=31*(b===0.0?0:($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b))|0;b=a.b1;c=31*(c+(b===0.0?0:($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b))|0)|0;d=a.b0;c=31*(c+(d===0.0?0:($rt_globals.isNaN(d)?1:0)?2143289344:$rt_floatToRawIntBits(d))|0)|0;d=a.bZ;return c+(d===0.0?0:($rt_globals.isNaN(d)?1:0)?2143289344:$rt_floatToRawIntBits(d))|0;}
function ADj(a){return $rt_intBitsToFloat(((255.0*a.bZ|0)<<24|(255.0*a.b0|0)<<16|(255.0*a.b1|0)<<8|255.0*a.b2|0)&(-16777217));}
function Jw(a){return (255.0*a.bZ|0)<<24|(255.0*a.b0|0)<<16|(255.0*a.b1|0)<<8|255.0*a.b2|0;}
function AI7(a){var b,c,d,e,f;b=Bj((255.0*a.b2|0)<<24|(255.0*a.b1|0)<<16|(255.0*a.b0|0)<<8|255.0*a.bZ|0,4);while(b.e.data.length<8){c=new O;c.b=D(16);I(c,c.a,B(44));I(c,c.a,b);b=new M;d=c.b;e=c.a;P();f=D(e);b.e=f;L(d,0,f,0,e);}return b;}
function Cd(b,c){Ec();b.b2=((c&(-16777216))>>>24|0)/255.0;b.b1=((c&16711680)>>>16|0)/255.0;b.b0=((c&65280)>>>8|0)/255.0;b.bZ=(c&255)/255.0;}
function AFg(){var b;b=new Bn;Ec();b.b2=1.0;b.b1=1.0;b.b0=1.0;b.bZ=1.0;C$(b);A4c=b;b=new Bn;Cd(b,(-1077952513));A4d=b;b=new Bn;Cd(b,2139062271);A4e=b;b=new Bn;Cd(b,1061109759);A4f=b;b=new Bn;b.b2=0.0;b.b1=0.0;b.b0=0.0;b.bZ=1.0;C$(b);A4g=b;A4h=ADj(A4c);b=new Bn;b.b2=0.0;b.b1=0.0;b.b0=0.0;b.bZ=0.0;C$(b);A4i=b;b=new Bn;b.b2=0.0;b.b1=0.0;b.b0=1.0;b.bZ=1.0;C$(b);A4j=b;b=new Bn;b.b2=0.0;b.b1=0.0;b.b0=0.5;b.bZ=1.0;C$(b);A4k=b;b=new Bn;Cd(b,1097458175);A4l=b;b=new Bn;Cd(b,1887473919);A4m=b;b=new Bn;Cd(b,(-2016482305));A4n
=b;b=new Bn;b.b2=0.0;b.b1=1.0;b.b0=1.0;b.bZ=1.0;C$(b);A4o=b;b=new Bn;b.b2=0.0;b.b1=0.5;b.b0=0.5;b.bZ=1.0;C$(b);A4p=b;b=new Bn;Cd(b,16711935);A4q=b;b=new Bn;Cd(b,2147418367);A4r=b;b=new Bn;Cd(b,852308735);A4s=b;b=new Bn;Cd(b,579543807);A4t=b;b=new Bn;Cd(b,1804477439);A4u=b;b=new Bn;Cd(b,(-65281));A4v=b;b=new Bn;Cd(b,(-2686721));A4w=b;b=new Bn;Cd(b,(-626712321));A4x=b;b=new Bn;Cd(b,(-5963521));A4y=b;b=new Bn;Cd(b,(-1958407169));A4z=b;b=new Bn;Cd(b,(-759919361));A4A=b;b=new Bn;Cd(b,(-1306385665));A4B=b;b=new Bn;Cd(b,
(-16776961));A4C=b;b=new Bn;Cd(b,(-13361921));A4D=b;b=new Bn;Cd(b,(-8433409));A4E=b;b=new Bn;Cd(b,(-92245249));A4F=b;b=new Bn;Cd(b,(-9849601));A4G=b;b=new Bn;b.b2=1.0;b.b1=0.0;b.b0=1.0;b.bZ=1.0;C$(b);A4H=b;b=new Bn;Cd(b,(-1608453889));A4I=b;b=new Bn;Cd(b,(-293409025));A4J=b;b=new Bn;Cd(b,(-1339006721));A4K=b;}
function JB(){var a=this;C.call(a);a.dX=0;a.hv=0;a.hf=null;a.im=null;a.gT=null;a.hh=null;a.jX=0.0;}
var AZR=0.0;function AAU(a,b,c,d){if(b!==null&&!(!d&&a.gT===b)){A37.ig(a.dX,10242,b.j8);a.gT=b;}if(c!==null&&!(!d&&a.hh===c)){A37.ig(a.dX,10243,c.j8);a.hh=c;}}
function S5(a,b,c,d){if(b!==null&&!(!d&&a.hf===b)){A37.ig(a.dX,10241,b.eO);a.hf=b;}if(c!==null&&!(!d&&a.im===c)){A37.ig(a.dX,10240,c.eO);a.im=c;}}
function WO(){var b,c,d,e,f;b=AZR;if(b>0.0)return b;if(!(A4L.g7.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){AZR=1.0;return 1.0;}if(!AZT){c=Ce(16);d=c.data.length;e=new HP;f=0+d|0;e.w=(-1);e.z=d;e.g=d;e.h=0;e.g=f;e.h9=0;e.jm=0;e.ht=c;}else{e=new Cp;c=BE(64);e.w=(-1);e.z=64;e.g=64;B7();e.bg=A4M;e.bn=0;e.W=c;e.h=0;e.g=64;e.b$=1;e.bB=0;e.bg=C8();e=Fj(e);}BU(e,0);Cz(e,e.z);A4N.kB(34047,e);b=Pi(e,0);AZR=b;return b;}
function AD2(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;if(c===null)return;if(!c.go)NV(c);AFS();if(A4O===A4P){c=new Ba;c.c=1;c.d=1;c.f=B(45);H(c);}if(!c.go){e=new Ba;e.c=1;e.d=1;e.f=B(46);H(e);}c.go=0;f=c.il;c.il=null;g=1;h=c.hd;e=f.by;if(e===null){GV();e=A4Q;}else e=HW(e.b5);if(h===e)e=f;else{e=new Hs;h=f.by;Jl(e,h===null?f.cU:h.cJ,h===null?f.cW:h.cI,c.hd);HM();h=A4R;e.jk=h;i=e.by;if(i===null){Fn(e);h=e.cp;GL();i=$rt_ustr(A4S.t);h.globalCompositeOperation=i;}else{j=h!==h?1:0;QF(i.cv,j);}i=f.by;g=i===null?f.cU:i.cJ;k
=i===null?f.cW:i.cI;h=e.by;if(h===null){Fn(f);JC(e,f.eX,0,0,g,k,0,0,g,k);}else{l=i.cv;m=h.cv;LS(l,m,0,0,g,k,0,0,g,k);}if(f.hs){e=new Ba;e.c=1;e.d=1;e.f=B(47);H(e);}I3();HU(A4T,f.iY);h=f.by;if(h!==null)LG(h.cv);f.hs=1;g=1;}A37.mV(3317,1);if(c.s3)ABB(b,e,Kz(e),KY(e));else{h=A37;c=e.by;if(c===null)k=6408;else a:{j=c.b5;switch(j){case 1:k=6406;break a;case 2:k=6410;break a;case 3:case 5:k=6407;break a;case 4:case 6:k=6408;break a;default:}c=new Ba;e=new O;e.b=D(16);CM(e,e.a,CZ(B(48)));N(e,e.a,j,10);h=new M;n=e.b;d
=e.a;o=D(d);h.e=o;L(n,0,o,0,d);c.c=1;c.d=1;c.f=h;H(c);}l=c===null?e.cU:c.cJ;p=c===null?e.cW:c.cI;q=c===null?6408:AS4(c.b5);c=e.by;h.f_(b,d,k,l,p,0,q,c===null?5121:ATp(c.b5),ABO(e));}if(g)NF(e);}
function ALL(){AZR=0.0;}
function HI(){JB.call(this);this.d2=null;}
var A3_=null;function LQ(a,b){var c,d;a.d2=b;if(!b.go)NV(b);A37.h6(a.dX,a.hv);AD2(3553,b,0);S5(a,a.hf,a.im,1);AAU(a,a.gT,a.hh,1);c=a.jX;d=WO();if(d!==1.0){c=ABJ(c,d);A4N.oU(3553,34046,c);a.jX=c;}A37.h6(a.dX,0);}
function AO0(a){var b,c,d,e,f,g,h;b=a.d2;if(!(b instanceof Kf)){b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=Bj(a.$id$,4);b=new O;b.b=D(16);I(b,b.a,B(1));e=b.a;if(d===null)d=B(2);I(b,e,d);c=new M;f=b.b;g=b.a;P();h=D(g);c.e=h;L(f,0,h,0,g);return c;}c=b;if(!c.$id$){d=$rt_nextId();c.$id$=d;}d=Bj(b.$id$,4);b=new O;b.b=D(16);I(b,b.a,B(1));e=b.a;if(d===null)d=B(2);I(b,e,d);c=new M;f=b.b;g=b.a;P();h=D(g);c.e=h;L(f,0,h,0,g);return c;}
function ABj(){var b,c,d,e;b=new Gl;c=HX(16);b.eA=0;d=Bg(EJ,c);e=d.data;b.cq=d;b.ik=0.75;b.fj=e.length*0.75|0;A3_=b;}
function BN(){var a=this;C.call(a);a.r=null;a.l=0;a.bf=0;a.g1=null;}
function AYI(){var a=new BN();AHJ(a);return a;}
function AV4(a,b){var c=new BN();AIz(c,a,b);return c;}
function AHJ(a){a.bf=1;a.r=Bg(C,16);}
function AIz(a,b,c){a.bf=b;a.r=Bg(C,c);}
function Cj(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.r;d=c.data;e=a.l;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BZ;i.C=h;f=i;h.classObject=f;}}f=Dd(i);if(f===null){b=new CB;b.c=1;b.d=1;H(b);}if(f===J($rt_voidcls())){b=new Be;b.c=1;b.d=1;H(b);}if(g<0){b=new C3;b.c=1;b.d=1;H(b);}f=Dv(f.C,g);j=f.data;k=a.l;l=j.length;if(k<l)l=k;DH(c,0,f,0,l);a.r=f;}f=f.data;g=a.l;a.l=g+1|0;f[g]=b;}
function Xd(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.r;d=b.l;e=a.r;f=e.data;g=a.l;h=g+d|0;if(h<=f.length)i=e;else{j=8;if(j<=h)j=h;g=g*1.75|0;if(j>g)g=j;i=e.constructor;if(i===null)b=null;else{b=i.classObject;if(b===null){b=new BZ;b.C=i;k=b;i.classObject=k;}}b=Dd(b);if(b===null){b=new CB;b.c=1;b.d=1;B9(b);H(b);}if(b===J($rt_voidcls())){b=new Be;b.c=1;b.d=1;B9(b);H(b);}if(g<0){b=new C3;b.c=1;b.d=1;B9(b);H(b);}i=Dv(b.C,g);b=i.data;j=a.l;l=b.length;if(j<l)l=j;DH(e,0,i,0,l);a.r=i;}DH(c,0,i,a.l,d);a.l=h;}
function Tm(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;if((c+d|0)>b.l){e=new Be;f=new O;f.b=D(16);I(f,f.a,B(49));N(f,f.a,c,10);I(f,f.a,B(50));N(f,f.a,d,10);I(f,f.a,B(51));c=b.l;N(f,f.a,c,10);b=new M;g=f.b;d=f.a;P();h=D(d);b.e=h;L(g,0,h,0,d);e.c=1;e.d=1;e.f=b;H(e);}g=b.r;h=a.r;i=h.data;j=a.l;k=j+d|0;if(k<=i.length)b=h;else{l=8;if(l<=k)l=k;j=j*1.75|0;if(l>j)j=l;f=h.constructor;if(f===null)e=null;else{e=f.classObject;if(e===null){e=new BZ;e.C=f;m=e;f.classObject=m;}}b=Dd(e);if(b===null){b=new CB;b.c=1;b.d=1;B9(b);H(b);}if
(b===J($rt_voidcls())){b=new Be;b.c=1;b.d=1;B9(b);H(b);}if(j<0){b=new C3;b.c=1;b.d=1;B9(b);H(b);}b=Dv(b.C,j);e=b.data;l=a.l;n=e.length;if(l<n)n=l;DH(h,0,b,0,n);a.r=b;}DH(g,c,b,a.l,d);a.l=k;}
function FX(a,b){var c,d,e,f,g,h;if(b<a.l)return a.r.data[b];c=new Y;d=new O;d.b=D(16);I(d,d.a,B(35));N(d,d.a,b,10);I(d,d.a,B(36));b=a.l;N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function Vs(a,b,c){var d,e,f;a:{d=a.r;if(!(!c&&b!==null)){e=0;f=a.l;while(e<f){if(d.data[e]===b){QP(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.l;while(true){if(e>=f)break a;if(BA(b,d.data[e])){QP(a,e);return 1;}e=e+1|0;}}}return 0;}
function QP(a,b){var c,d,e,f,g,h,i;c=a.l;if(b<c){d=a.r;e=d.data;f=e[b];g=c-1|0;a.l=g;if(!a.bf)e[b]=e[g];else L(d,b+1|0,d,b,g-b|0);e[a.l]=null;return f;}f=new Y;h=new O;h.b=D(16);I(h,h.a,B(35));N(h,h.a,b,10);I(h,h.a,B(36));c=a.l;N(h,h.a,c,10);i=new M;e=h.b;b=h.a;P();d=D(b);i.e=d;L(e,0,d,0,b);f.c=1;f.d=1;f.f=i;H(f);}
function VG(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.l;if(c>=d){e=new Y;f=new O;f.b=D(16);I(f,f.a,B(52));N(f,f.a,c,10);I(f,f.a,B(36));g=a.l;N(f,f.a,g,10);h=new M;i=f.b;c=f.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}if(b>c){e=new Y;h=new O;h.b=D(16);I(h,h.a,B(53));N(h,h.a,b,10);I(h,h.a,B(54));N(h,h.a,c,10);f=new M;i=h.b;c=h.a;P();j=D(c);f.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=f;H(e);}i=a.r;g=(c-b|0)+1|0;k=d-g|0;if(a.bf){c=b+g|0;L(i,c,i,b,d-c|0);}else{l=c+1|0;if(k>l)l=k;L(i,l,i,b,d-l|0);}l=k;while(l<d){i.data[l]
=null;l=l+1|0;}a.l=k;}
function JN(a){var b,c,d,e;b=a.l;if(b){c=b-1|0;a.l=c;d=a.r.data;e=d[c];d[c]=null;return e;}e=new BH;e.c=1;e.d=1;e.f=B(41);H(e);}
function AEa(a){var b,c;b=a.l;if(b)return a.r.data[b-1|0];c=new BH;c.c=1;c.d=1;c.f=B(41);H(c);}
function AEI(a){var b;if(a.l)return a.r.data[0];b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}
function V_(a){var b,c,d,e,f,g;b=a.r;c=0;d=a.l;e=null;if(c>d){e=new Be;e.c=1;e.d=1;H(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.l=0;}
function AC0(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Be;d=new O;d.b=D(16);I(d,d.a,B(55));N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}g=a.l;i=g+b|0;f=a.r;if(i>f.data.length){if(8>i)i=8;b=g*1.75|0;if(i>b)b=i;d=f.constructor;if(d===null)c=null;else{c=d.classObject;if(c===null){c=new BZ;c.C=d;e=c;d.classObject=e;}}c=Dd(c);if(c===null){c=new CB;c.c=1;c.d=1;H(c);}if(c===J($rt_voidcls())){c=new Be;c.c=1;c.d=1;H(c);}if(b<0){c=new C3;c.c=1;c.d=1;H(c);}d=Dv(c.C,b);c=d.data;i
=a.l;j=c.length;if(i<j)j=i;DH(f,0,d,0,j);a.r=d;}return a.r;}
function VK(a,b){var c,d,e,f,g,h;c=a.r;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BZ;e.C=d;f=e;d.classObject=f;}}e=Dd(e);if(e===null){e=new CB;e.c=1;e.d=1;H(e);}if(e===J($rt_voidcls())){e=new Be;e.c=1;e.d=1;H(e);}if(b<0){e=new C3;e.c=1;e.d=1;H(e);}e=Dv(e.C,b);d=e.data;g=a.l;h=d.length;if(g<h)h=g;DH(c,0,e,0,h);a.r=e;return e;}
function Pd(a){var b;if(A4U){b=new Gd;b.dv=1;b.fI=a;b.js=1;return b;}if(a.g1===null){b=new J7;b.k6=a;b.lY=1;a.g1=b;}return O3(a.g1);}
function MM(a,b){var c,d,e,f,g,h,i;if(b>=0){c=a.l;if(c<=b)return;d=b;while(d<c){a.r.data[d]=null;d=d+1|0;}a.l=b;return;}e=new Be;f=new O;f.b=D(16);I(f,f.a,B(56));N(f,f.a,b,10);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);e.c=1;e.d=1;e.f=g;H(e);}
function AG0(a){var b,c,d,e,f,g,h;if(a.bf){b=a.r;c=1;d=0;e=a.l;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.dA()|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=$rt_nextId();g.$id$=h;}return a.$id$;}
function ANn(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.bf)return 0;if(!(b instanceof BN))return 0;c=b;if(!c.bf)return 0;d=a.l;if(d!=c.l)return 0;e=a.r;f=c.r;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.dH(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function AS9(a){var b,c,d,e,f,g,h,i,j,k;if(!a.l)return B(57);b=a.r;c=new II;d=D(32);e=d.data;c.bm=d;f=c.R;if(f==e.length)CP(c,f+1|0);b=b.data;e=c.bm.data;g=c.R;c.R=g+1|0;e[g]=91;h=b[0];if(h===null)Jh(c);else{h=h.s();if(h===null)Jh(c);else{i=h.e.data.length;j=c.R+i|0;if(j>c.bm.data.length)CP(c,j);G5(h,0,i,c.bm,c.R);c.R=j;}}k=1;while(k<a.l){i=B(58).e.data.length;j=c.R+i|0;if(j>c.bm.data.length)CP(c,j);G5(B(58),0,i,c.bm,c.R);c.R=j;h=b[k];if(h===null)Jh(c);else{h=h.s();if(h===null)Jh(c);else{g=h.e.data.length;i
=c.R+g|0;if(i>c.bm.data.length)CP(c,i);G5(h,0,g,c.bm,c.R);c.R=i;}}k=k+1|0;}f=c.R;if(f==c.bm.data.length)CP(c,f+1|0);b=c.bm;e=b.data;g=c.R;f=g+1|0;c.R=f;e[g]=93;if(!f)c=B(42);else{c=new M;P();e=D(f);c.e=e;L(b,0,e,0,f);}return c;}
function Jz(){var a=this;C.call(a);a.eR=0;a.c8=null;a.cl=null;a.sx=0.0;a.p8=0;a.jS=0;a.jP=0;a.oy=null;a.ox=null;}
var AZA=null;function Et(a,b){var c=new Jz();Zm(c,a,b);return c;}
function Zm(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.sx=c;d=LC(b,c);a.p8=d*c|0;b=d-1|0;a.jP=b;a.jS=Fl(T(b));a.c8=Bg(C,d);a.cl=Bg(C,d);return;}e=new Be;f=new O;f.b=D(16);I(f,f.a,B(59));DK(f,f.a,c);g=new M;h=f.b;d=f.a;P();i=D(d);g.e=i;L(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function Cv(a,b){var c,d,e;if(b===null){c=new Be;c.c=1;c.d=1;c.f=B(60);H(c);}d=a.c8;e=U(Bh(Bf(T(b.dA()),F(2135587861, 2654435769)),a.jS));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.dH(b))break;e=(e+1|0)&a.jP;}return e;}
function BD(a,b,c){var d,e,f;d=Cv(a,b);if(d>=0){e=a.cl.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.c8.data;e[d]=b;a.cl.data[d]=c;d=a.eR+1|0;a.eR=d;if(d>=a.p8)U7(a,e.length<<1);return null;}
function Ur(a,b){var c;c=Cv(a,b);return c<0?null:a.cl.data[c];}
function YU(a,b){var c,d,e,f,g,h,i,j;c=Cv(a,b);if(c<0)return null;d=a.c8;e=a.cl.data;f=e[c];g=a.jP;h=(c+1|0)&g;while(true){i=d.data;b=i[h];if(b===null)break;j=U(Bh(Bf(T(b.dA()),F(2135587861, 2654435769)),a.jS));if(((h-j|0)&g)>((c-j|0)&g)){i[c]=b;e[c]=e[h];c=h;}h=(h+1|0)&g;}i[c]=null;e[c]=null;a.eR=a.eR-1|0;return f;}
function U7(a,b){var c,d,e,f,g,h,i,j;a:{c=a.c8.data.length;a.p8=b*a.sx|0;d=b-1|0;a.jP=d;a.jS=Fl(T(d));e=a.c8;f=a.cl;a.c8=Bg(C,b);a.cl=Bg(C,b);if(a.eR>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.c8;b=U(Bh(Bf(T(g.dA()),F(2135587861, 2654435769)),a.jS));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.jP;}j[b]=g;a.cl.data[b]=h;}d=d+1|0;}}}}
function ACR(a){var b,c,d,e,f,g;if(A4U){b=new Jx;b.ey=1;b.hI=a;b.g$=(-1);b.cF=(-1);c=a.c8.data;d=c.length;a:{while(true){e=b.cF+1|0;b.cF=e;if(e>=d)break;if(c[e]===null)continue;else{b.dl=1;break a;}}b.dl=0;}return b;}if(a.oy===null){b=new Jx;b.ey=1;b.hI=a;b.g$=(-1);b.cF=(-1);c=a.c8.data;f=c.length;b:{while(true){e=b.cF+1|0;b.cF=e;if(e>=f)break;if(c[e]===null)continue;else{b.dl=1;break b;}}b.dl=0;}a.oy=b;b=new Jx;b.ey=1;b.hI=a;b.g$=(-1);b.cF=(-1);c:{while(true){e=b.cF+1|0;b.cF=e;if(e>=f)break;if(c[e]===null)continue;else
{b.dl=1;break c;}}b.dl=0;}a.ox=b;}b=a.oy;if(b.ey){g=a.ox;g.g$=(-1);g.cF=(-1);c=g.hI.c8.data;d=c.length;d:{while(true){e=g.cF+1|0;g.cF=e;if(e>=d)break;if(c[e]===null)continue;else{g.dl=1;break d;}}g.dl=0;}g.ey=1;b.ey=0;return g;}b.g$=(-1);b.cF=(-1);c=b.hI.c8.data;d=c.length;e:{while(true){e=b.cF+1|0;b.cF=e;if(e>=d)break;if(c[e]===null)continue;else{b.dl=1;break e;}}b.dl=0;}b.ey=1;a.ox.ey=0;return b;}
function AJM(){AZA=new C;}
var Xa=G(Jz);
var AEb=G();
function Eq(){var a=this;C.call(a);a.hy=0;a.dq=0;a.dT=0;a.dM=0;a.hk=0;a.dP=null;a.hV=0;a.hL=0;}
var AEk=G();
var Yj=G();
var Z6=G();
var Y6=G();
var O$=G();
var A4V=null;function A4W(){A4W=W(O$);AMW();}
function AMW(){var b,c,d;b=new JV;AYV();c=new Bl;CD();b.tl=c;d=new Bl;b.ty=d;b.sJ=new Bl;b.tz=new Bl;c.k=0.0;c.j=0.0;c.i=0.0;d.k=0.0;d.j=0.0;d.i=0.0;AAv(b,c,d);A4V=b;}
var TB=G();
var Zp=G();
var YQ=G();
var Za=G();
var ACu=G();
var WZ=G();
var ADr=G();
var X6=G();
var UB=G();
var Ve=G();
var FW=G(BC);
var A4X=null;var A4Y=null;var A4Z=null;function AXl(){AXl=W(FW);ALK();}
function ALK(){var b,c;b=new FW;AXl();b.t=B(61);b.q=0;A4X=b;c=new FW;c.t=B(62);c.q=1;A4Y=c;A4Z=R(FW,[b,c]);}
var Zs=G();
var QN=G(0);
var Dl=G();
var TK=G(Dl);
var TJ=G(Dl);
var YA=G(Dl);
var VT=G(Dl);
var AA9=G(Dl);
var KR=G(Dl);
var VO=G(KR);
var Hm=G(0);
var Wm=G();
var Fq=G(0);
var AA2=G();
var ADo=G();
var UX=G();
var EU=G();
var AAy=G(EU);
var Hh=G(EU);
var DE=G(Hh);
var A40=null;function A41(){A41=W(DE);AGB();}
function AGB(){var b;b=new Bl;CD();A40=b;}
var AAT=G();
var ACs=G(DE);
var Ye=G(DE);
var Si=G(EU);
var AZS=null;function AKy(){AZS=Ce(3);}
var Kq=G(EU);
var Tv=G(Kq);
var VL=G(DE);
var GJ=G(Hh);
var Y2=G(GJ);
var Yc=G(DE);
var Zc=G(DE);
var Y0=G(GJ);
var EF=G(BC);
var A42=null;var A43=null;var A44=null;var A45=null;function AWC(){AWC=W(EF);APn();}
function APn(){var b,c,d;b=new EF;AWC();b.t=B(63);b.q=0;A42=b;c=new EF;c.t=B(64);c.q=1;A43=c;d=new EF;d.t=B(65);d.q=2;A44=d;A45=R(EF,[b,c,d]);}
var FZ=G();
var Ln=G(FZ);
var SQ=G(Ln);
var EL=G(BC);
var A46=null;var A47=null;var A48=null;var A49=null;function AW4(){AW4=W(EL);AMn();}
function AMn(){var b,c,d;b=new EL;AW4();b.t=B(66);b.q=0;A46=b;c=new EL;c.t=B(67);c.q=1;A47=c;d=new EL;d.t=B(68);d.q=2;A48=d;A49=R(EL,[b,c,d]);}
var CH=G(FZ);
var HV=G(CH);
var UT=G();
var EW=G(CH);
var A4$=null;var A4_=null;var A5a=null;var A5b=null;function A5c(){A5c=W(EW);ANr();}
function ANr(){var b;b=new Bl;CD();A4$=b;A4_=new Bl;A5a=new Bl;b=new Dw;HE();b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=1.0;A5b=b;}
var Ez=G(EW);
var F2=G(Ez);
var Wl=G(F2);
var Ht=G(CH);
var AEB=G(Ht);
var ACr=G(CH);
var FE=G(CH);
var TE=G(FE);
var G2=G(CH);
var Wi=G(Ez);
var Xm=G(Ez);
var J$=G(CH);
var AAz=G(J$);
var Up=G(FE);
var Yi=G(F2);
var AAu=G(CH);
var Zh=G(FE);
var AAD=G(CH);
var ABs=G(EW);
var Xr=G(CA);
var UH=G(CA);
var UP=G(Ez);
var AAN=G(G2);
var ADP=G(HV);
var ZR=G(HV);
var ABi=G(G2);
var YM=G(F2);
var AD8=G(Ht);
var ER=G(FZ);
var Y4=G(ER);
var FJ=G();
var AAZ=G(FJ);
var ABE=G(ER);
var ACq=G(ER);
var AC1=G(FJ);
var V9=G(ER);
var ACv=G(FJ);
var JM=G(0);
var Mj=G(0);
function BZ(){var a=this;C.call(a);a.X=null;a.u2=null;a.C=null;a.hA=null;}
var A5d=0;function AQZ(a){var b=new BZ();ASs(b,a);return b;}
function ASs(a,b){var c;a.C=b;c=a;b.classObject=c;}
function AXB(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BZ;c.C=b;d=c;b.classObject=d;}return c;}
function ANS(a){var b,c,d,e,f,g;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;b=new O;b.b=D(16);I(b,b.a,B(69));N(b,b.a,d,10);c=new M;e=b.b;f=b.a;P();g=D(f);c.e=g;L(e,0,g,0,f);return c;}
function NM(a){var b,c,d,e,f,g,h,i;b=a.u2;if(b===null){if(a.C.$meta.item===null?0:1){b=NM(Dd(a));c=new O;c.b=D(16);d=c.a;if(b===null)b=B(2);I(c,d,b);I(c,c.a,B(57));b=new M;e=c.b;f=c.a;P();g=D(f);b.e=g;L(e,0,g,0,f);}else{h=a.C.$meta.enclosingClass;if(h===null)b=null;else{b=h.classObject;if(b===null){b=new BZ;b.C=h;c=b;h.classObject=c;}}if(b!==null){b=$rt_str(a.C.$meta.simpleName);if(b===null)b=B(42);}else{b=$rt_str(a.C.$meta.name);i=Ew(b,36,b.e.data.length-1|0);if(i==(-1)){f=Ew(b,46,b.e.data.length-1|0);if(f
!=(-1)){d=f+1|0;g=b.e;i=g.data.length;f=Bm(d,i);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A32;else if(!(!d&&i==i)){b=new M;f=i-d|0;e=D(f);b.e=e;L(g,d,e,0,f);}}}else{d=i+1|0;g=b.e;i=g.data.length;f=Bm(d,i);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A32;else if(!(!d&&i==i)){b=new M;f=i-d|0;e=D(f);b.e=e;L(g,d,e,0,f);}e=b.e.data;f=Bm(0,e.length);if(f>=0){b=new X;b.c=1;b.d=1;H(b);}if(e[0]>=48){if(f>=0){b=new X;b.c=1;b.d=1;H(b);}if(e[0]<=57)b=B(42);}}}}a.u2=b;}return b;}
function Dd(a){var b,c,d;b=a.C.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BZ;c.C=b;d=c;b.classObject=d;}}return c;}
function AM_(){Ee.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ZY(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AYP();AGf();return null;}}];Ex.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AKW(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes
:[Ex],returnType:$rt_voidcls(),callable:function(obj,args){TA(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AMZ(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:M,callable:function(obj,args){return TQ(obj);}}];C5.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ADM(obj);return null;}},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[Kv,HY],returnType:$rt_voidcls(),callable:function(obj,args){Uw(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Kv,HY,Bn,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){ABd(obj,args[0],args[1],args[2],ATc(args[3]),JU(args[4]),ALj(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Kv,HY,$rt_intcls(),$rt_intcls(),Bn,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),
M],returnType:$rt_voidcls(),callable:function(obj,args){ABQ(obj,args[0],args[1],JU(args[2]),JU(args[3]),args[4],ATc(args[5]),JU(args[6]),ALj(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Kv,HY],returnType:$rt_voidcls(),callable:function(obj,args){A5e(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Kv,HY,Bn,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A5f(obj,args[0],
args[1],args[2],ATc(args[3]),JU(args[4]),ALj(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Kv,HY,$rt_intcls(),$rt_intcls(),Bn,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),M],returnType:$rt_voidcls(),callable:function(obj,args){GX(obj,args[0],args[1],JU(args[2]),JU(args[3]),args[4],ATc(args[5]),JU(args[6]),ALj(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[W8],returnType:$rt_voidcls(),callable:function(obj,args){VN(obj,args[0]);return null;}},
{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){ZD(obj,ATc(args[0]),JU(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[W8,Ex,$rt_floatcls(),M],returnType:$rt_voidcls(),callable:function(obj,args){T0(obj,args[0],args[1],ATc(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[W8,Ex,$rt_intcls()],returnType:Ex,callable:function(obj,args){return ACf(obj
,args[0],args[1],JU(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[W8,Ex],returnType:$rt_voidcls(),callable:function(obj,args){Rh(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[L0,W8],returnType:$rt_floatcls(),callable:function(obj,args){return A5g(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers:0,accessLevel:1,parameterTypes:[BN,W8],returnType:$rt_floatcls(),callable:function(obj,args){return A5h(obj,args[0],args[1]);}},
{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[HY,$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){return AAP(obj,args[0],JU(args[1]),JU(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ACV(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:M,callable:function(obj,args){return APF(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes
:[],returnType:$rt_voidcls(),callable:function(obj,args){Ek();AJe();return null;}}];}
function Ma(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.C.$meta.primitive?1:0)&&!(a.C.$meta.item===null?0:1)){if(a.hA===null){if(!A5d){A5d=1;AM_();}b=a.C.$meta.methods;a.hA=Bg(Hl,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof $rt_objcls())?e:e.O;if(BA($rt_str(f.name),B(70))){g=f.parameterTypes;h=Bg(BZ,g.length);i=h.data;j=0;k=i.length;while(j<k){l=g[j];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BZ;e.C=l;m=e;l.classObject=m;}}i[j]=e;j=j+1|0;}i=a.hA.data;j=c+1|0;e=new Hl;g
=$rt_str(f.name);k=f.modifiers;n=f.accessLevel;f=Dp(f.callable,"call");e.fe=a;e.yr=g;e.jz=k;e.k4=n;e.fs=h;e.po=f;i[c]=e;c=j;}d=d+1|0;}h=a.hA;f=h.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BZ;g.C=f;e=g;f.classObject=e;}}e=Dd(g);if(e===null){e=new CB;e.c=1;e.d=1;H(e);}if(e===J($rt_voidcls())){e=new Be;e.c=1;e.d=1;H(e);}if(c<0){e=new C3;e.c=1;e.d=1;H(e);}h=h.data;f=Dv(e.C,c);d=h.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=h[c];c=c+1|0;}a.hA=f;}return a.hA.cn();}return Bg(Hl,0);}
function ADY(a){var b,c,d,e,f,g,h,i,j,k;b=(Ma(a)).data;c=b.length;d=Bg(Hl,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Ol(h.jz,h.k4)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=Bm(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BZ;h.C=j;k=h;j.classObject=k;}}j=Dd(h);if(j===null){h=new CB;h.c=1;h.d=1;H(h);}if(j===J($rt_voidcls())){h=new Be;h.c=1;h.d=1;H(h);}if(f<0){h=new C3;h.c=1;h.d=1;H(h);}k=Dv(j.C,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;}
function ACe(a,b){var c,d,e,f;c=(Ma(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new G$;f.c=1;f.d=1;H(f);}f=c[e];if(ACd(f.fs.cn(),b))break;e=e+1|0;}return f;}
function ACa(a,b){var c,d,e,f,g;c=(Ma(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new G$;f.c=1;f.d=1;H(f);}f=c[e];g=!(Ol(f.jz,f.k4)&1)?0:1;if(g&&ACd(f.fs.cn(),b))break;e=e+1|0;}return f;}
var Vh=G();
function AQC(b){var c,d,e,f,g;if(b===null)return null;c=BE(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof $rt_objcls())?g:g.O;e=e+1|0;}return c;}
function BT(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Dp(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var UM=G();
function AFv(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Qi(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Qi(d[e],c))return 1;e=e+1|0;}return 0;}
function FQ(b){return setTimeout(function(){$rt_threadStarter(AVM)(b);},0);}
function AVM(b){b.ex();}
function Rq(b,c){return setTimeout(function(){AVM(b);},c);}
function AMX(){return [];}
function Dc(){var a=this;C.call(a);a.f=null;a.cP=null;a.c=0;a.d=0;a.xH=null;}
function A5i(){var a=new Dc();CQ(a);return a;}
function A5j(a){var b=new Dc();HZ(b,a);return b;}
function CQ(a){a.c=1;a.d=1;}
function HZ(a,b){a.c=1;a.d=1;a.f=b;}
function B9(a){return a;}
function ARD(a){return a.f;}
function AK9(a){return a.is();}
function ARJ(a){var b;b=a.cP;if(b===a)b=null;return b;}
function ALO(a){var b,c;if(A5k===null){b=new Cu;b.b6=AZX;c=new O;c.b=D(16);b.ba=c;b.b4=D(32);b.cm=0;Ct();b.ce=A5l;A5k=b;}Jv(a,A5k);}
function Jv(a,b){var c,d,e,f,g,h,i,j,k;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BZ;d.C=c;e=d;c.classObject=e;}}if(d.X===null)d.X=$rt_str(d.C.$meta.name);e=d.X;c=b.ba;I(c,c.a,e);Cl(b);f=a.is();if(f!==null){c=new O;c.b=D(16);I(c,c.a,B(71));I(c,c.a,f);e=new M;g=c.b;h=c.a;P();i=D(h);e.e=i;L(g,0,i,0,h);c=b.ba;I(c,c.a,e);Cl(b);}a:{g=b.b4;g.data[0]=10;Nc(b,g,0,1);g=a.xH;if(g!==null){g=g.data;j=g.length;k=0;while(true){if(k>=j)break a;d=g[k];c=b.ba;I(c,c.a,B(72));Cl(b);e=b.ba;I(e,e.a,
d===null?B(2):d.s());h=e.a;Bc(e,h,h+1|0);e.b.data[h]=10;Cl(b);k=k+1|0;}}}c=a.cP;if(c!==null&&c!==a){e=b.ba;I(e,e.a,B(73));Cl(b);Jv(a.cP,b);}}
var CE=G(Dc);
function A5m(){var a=new CE();QS(a);return a;}
function A5n(a){var b=new CE();S3(b,a);return b;}
function QS(a){a.c=1;a.d=1;}
function S3(a,b){a.c=1;a.d=1;a.f=b;}
var BF=G(CE);
function AYZ(a){var b=new BF();R$(b,a);return b;}
function R$(a,b){a.c=1;a.d=1;a.f=b;}
var X_=G(BF);
var HY=G(0);
function M(){var a=this;C.call(a);a.e=null;a.bA=0;}
var A5o=null;var A32=null;var A5p=null;function P(){P=W(M);ATl();}
function AYX(a){var b=new M();Tz(b,a);return b;}
function AIb(a,b,c){var d=new M();SJ(d,a,b,c);return d;}
function ATo(a,b,c){var d=new M();SO(d,a,b,c);return d;}
function Tz(a,b){var c,d;P();c=b.data.length;d=D(c);a.e=d;L(b,0,d,0,c);}
function SJ(a,b,c,d){var e;P();e=D(d);a.e=e;L(b,c,e,0,d);}
function SO(a,b,c,d){var e,f,g,h,i,j,k,l;P();e=D(d*2|0);f=e.data;a.e=e;g=0;h=0;while(h<d){e=b.data;i=c+1|0;j=e[c];if(j<65536){k=g+1|0;f[g]=j&65535;}else{l=g+1|0;f[g]=(55296|(j-65536|0)>>10&1023)&65535;k=l+1|0;f[l]=(56320|j&1023)&65535;}h=h+1|0;c=i;g=k;}c=f.length;d=Bm(g,c);if(d<0){b=D(g);if(d<0)c=g;e=b.data;d=0;while(d<c){e[d]=f[d];d=d+1|0;}a.e=b;}}
function CO(a,b){var c,d;if(b>=0){c=a.e.data;if(b<c.length)return c[b];}d=new X;d.c=1;d.d=1;H(d);}
function Iv(a){return a.e.data.length;}
function G5(a,b,c,d,e){var f,g,h,i;if(b>=0&&b<=c){f=a.e;if(c<=f.data.length&&e>=0){g=d.data;h=c-b|0;if((e+h|0)<=g.length){L(f,b,d,e,h);return;}}}i=new Y;i.c=1;i.d=1;H(i);}
function I6(a,b,c){var d,e,f,g,h,i,j;d=b.e.data;e=d.length;f=c+e|0;g=a.e.data;h=g.length;if(f>h)return 0;i=0;a:{b:{while(true){f=Bm(i,e);if(f>=0)break;if(i<0)break a;if(f>=0)break a;j=d[i];f=c+1|0;if(c<0)break b;if(c>=h)break b;if(j!=g[c])return 0;i=i+1|0;c=f;}return 1;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function Fg(a,b){if(a===b)return 1;return I6(a,b,0);}
function Op(a,b){var c,d,e,f,g,h,i,j;if(a===b)return 1;c=b.e.data;d=c.length;e=a.e.data;f=e.length;if(d>f)return 0;g=0;h=f-d|0;a:{b:{while(true){i=Bm(h,f);if(i>=0)break;if(h<0)break a;if(i>=0)break a;j=e[h];i=g+1|0;if(g<0)break b;if(g>=d)break b;if(j!=c[g])return 0;h=h+1|0;g=i;}return 1;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function D5(a,b,c){var d,e,f,g;if(0>c)c=0;if(b<65536){d=b&65535;while(true){e=a.e.data;if(c>=e.length)return (-1);if(e[c]==d)break;c=c+1|0;}return c;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){e=a.e.data;if(c>=(e.length-1|0))return (-1);if(e[c]==f&&e[c+1|0]==g)break;c=c+1|0;}return c;}
function V5(a,b){return D5(a,b,0);}
function Ew(a,b,c){var d,e,f,g,h;d=a.e.data;e=d.length-1|0;if(c<e)e=c;if(b<65536){f=b&65535;while(true){if(e<0)return (-1);if(d[e]==f)break;e=e+(-1)|0;}return e;}g=(55296|(b-65536|0)>>10&1023)&65535;h=(56320|b&1023)&65535;while(true){if(e<1)return (-1);if(d[e]==h){b=e-1|0;if(d[b]==g)break;}e=e+(-1)|0;}return b;}
function Ki(a,b,c){var d,e,f,g,h,i,j,k,l;if(0>c)c=0;d=a.e.data;e=d.length;f=b.e.data;g=f.length;h=e-g|0;a:{b:{c:while(true){if(c>h)return (-1);i=0;while(true){j=Bm(i,g);if(j>=0)break c;k=c+i|0;if(k<0)break a;if(k>=e)break a;l=d[k];if(i<0)break b;if(j>=0)break b;if(l!=f[i])break;i=i+1|0;}c=c+1|0;}return c;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function AAC(a,b){return Ki(a,b,0);}
function Om(a,b,c){var d,e,f,g,h,i,j,k;d=a.e.data;e=d.length;f=b.e.data;g=f.length;h=e-g|0;if(c<h)h=c;a:{b:{c:while(true){if(h<0)return (-1);i=0;while(true){j=Bm(i,g);if(j>=0)break c;k=h+i|0;if(k<0)break a;if(k>=e)break a;k=d[k];if(i<0)break b;if(j>=0)break b;if(k!=f[i])break;i=i+1|0;}h=h+(-1)|0;}return h;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function Fv(a,b,c){var d,e,f,g;d=Bm(b,c);if(d>0){e=new Y;e.c=1;e.d=1;H(e);}if(!d){P();return A32;}if(!b&&c==a.e.data.length)return a;e=new M;f=a.e;c=c-b|0;P();g=D(c);e.e=g;L(f,b,g,0,c);return e;}
function Hg(a,b){var c,d,e,f,g;c=a.e;d=c.data.length;e=Bm(b,d);if(e>0){f=new Y;f.c=1;f.d=1;H(f);}if(!e){P();a=A32;}else if(!(!b&&d==d)){a=new M;e=d-b|0;P();g=D(e);a.e=g;L(c,b,g,0,e);}return a;}
function Ov(a,b,c){var d,e,f,g;d=Bm(b,c);if(d>0){e=new Y;e.c=1;e.d=1;H(e);}if(!d){P();e=A32;}else if(!b&&c==a.e.data.length)e=a;else{e=new M;f=a.e;c=c-b|0;P();g=D(c);e.e=g;L(f,b,g,0,c);}return e;}
function CN(a,b){var c,d,e,f,g,h,i,j,k;c=a.e.data;d=c.length;e=b.e.data;f=e.length;g=d-f|0;h=0;a:{b:{while(h<=g){i=0;while(true){j=Bm(i,f);if(j>=0)return 1;k=h+i|0;if(k<0)break a;if(k>=d)break a;k=c[k];if(i<0)break b;if(j>=0)break b;if(k!=e[i])break;i=i+1|0;}h=h+1|0;}return 0;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function Lq(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=new O;d.b=D(16);e=a.e.data.length-b.e.data.length|0;f=0;a:{b:{c:while(true){if(f>e){g=a.e;h=g.data.length;i=Bm(f,h);if(i>0){b=new Y;b.c=1;b.d=1;H(b);}if(!i){P();a=A32;}else if(!(!f&&h==h)){a=new M;i=h-f|0;P();j=D(i);a.e=j;L(g,f,j,0,i);}i=d.a;if(a===null)a=B(2);I(d,i,a);b=new M;j=d.b;h=d.a;P();g=D(h);b.e=g;L(j,0,g,0,h);return b;}k=0;d:{while(true){j=b.e.data;l=Bm(k,j.length);if(l>=0)break;i=f+k|0;if(i<0)break b;g=a.e.data;h=g.length;if(i>=h)break b;m=g[i];if(k<0)break c;if
(l>=0)break c;if(m!=j[k]){if(f<0)break a;if(f>=h)break a;h=g[f];i=d.a;Bc(d,i,i+1|0);d.b.data[i]=h;break d;}k=k+1|0;}I(d,d.a,c===null?B(2):c);f=f+(b.e.data.length-1|0)|0;}f=f+1|0;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function Yz(a){var b,c,d,e,f,g,h;b=0;c=a.e;d=c.data;e=d.length;f=e-1|0;a:{while(true){if(b>f)break a;if(b<0)break;if(b>=e)break;if(d[b]>32)break a;b=b+1|0;}g=new X;g.c=1;g.d=1;H(g);}b:{while(true){if(b>f)break b;if(f<0)break;if(f>=e)break;if(d[f]>32)break b;f=f+(-1)|0;}g=new X;g.c=1;g.d=1;H(g);}h=f+1|0;f=Bm(b,h);if(f>0){g=new Y;g.c=1;g.d=1;H(g);}if(!f){P();a=A32;}else if(!(!b&&h==e)){a=new M;h=h-b|0;P();d=D(h);a.e=d;L(c,b,d,0,h);}return a;}
function CZ(a){return a;}
function Kg(b){P();return b===null?B(2):b.s();}
function BA(a,b){var c,d,e,f,g,h,i;if(a===b)return 1;if(!(b instanceof M))return 0;c=b.e.data;d=c.length;e=a.e.data;f=e.length;if(d!=f)return 0;g=0;a:{b:{while(true){h=Bm(g,d);if(h>=0)break;if(g<0)break a;if(g>=f)break a;i=e[g];if(g<0)break b;if(h>=0)break b;if(i!=c[g])return 0;g=g+1|0;}return 1;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function ZK(a,b){var c,d,e,f,g,h,i,j,$$je;if(b===null){b=new Be;b.c=1;b.d=1;b.f=B(74);H(b);}DN(b);AW8();c=A5q;d=ZF(b);if(d===null){c=c.cq.data[0];while(c!==null&&c.cB!==null){c=c.cQ;}}else{a:{if(!d.bA){e=d.e.data;f=e.length;g=0;while(true){if(g>=f)break a;h=e[g];d.bA=(31*d.bA|0)+h|0;g=g+1|0;}}}h=d.bA;e=c.cq.data;c=e[h&(e.length-1|0)];while(c!==null){if(c.el==h){i=c.cB;if(d!==i&&!BA(d,i)?0:1)break;}c=c.cQ;}}c=c===null?null:c.dL;if(c===null){c=new Pa;c.c=1;c.d=1;c.zC=b;H(c);}e=a.e;g=e.data.length;b=new IC;j=0
+g|0;b.w=(-1);b.z=g;b.g=g;b.h=0;b.g=j;b.gC=0;b.id=0;b.gi=e;b:{try{d=c.jR();DS();b=Ok(Sh(PE(d,A5r),A5r),b);break b;}catch($$e){$$je=Bw($$e);if($$je instanceof FY){c=$$je;}else{throw $$e;}}d=new LU;d.c=1;d.d=1;d.f=B(75);d.cP=c;H(d);}h=b.h;if(!h&&b.g==b.z)e=b.W;else{e=BE(b.g-h|0);N4(b,e,0,e.data.length);}return e;}
function APB(a){var b,c,d,e;a:{if(!a.bA){b=a.e.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.bA=(31*a.bA|0)+e|0;d=d+1|0;}}}return a.bA;}
function Vr(a){var b,c,d,e,f,g,h;b=a.e.data;c=b.length;if(c?0:1)return a;d=0;e=0;f=0;a:{while(f<c){g=b[f];if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}if((BW(A5s,g)&65535)!=g){d=1;break a;}h=g&64512;g=h!=55296?0:1;if(!g&&!(h!=56320?0:1)?0:1)e=1;f=f+1|0;}}if(!d)return a;return !e?UZ(a):UN(a);}
function UZ(a){var b,c,d,e,f,g;b=D(a.e.data.length);c=b.data;d=0;while(true){e=a.e.data;if(d>=e.length)break;f=e[d];if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}c[d]=BW(A5s,f)&65535;d=d+1|0;}g=new M;P();f=c.length;c=D(f);g.e=c;L(b,0,c,0,f);return g;}
function UN(a){var b,c,d,e,f,g,h;b=Z(a.e.data.length);c=b.data;d=0;e=0;while(true){f=a.e.data;g=f.length;if(e>=g)break;a:{if(e!=(g-1|0)&&((f[e]&64512)!=55296?0:1)){g=e+1|0;if((f[g]&64512)!=56320?0:1){h=d+1|0;e=((f[e]&1023)<<10|f[g]&1023)+65536|0;if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}c[d]=BW(A5s,e);d=h;break a;}}h=d+1|0;g=f[e];if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}c[d]=BW(A5s,g)&65535;d=h;g=e;}e=g+
1|0;}return ATo(b,0,d);}
function ZF(a){var b,c,d,e,f,g,h;b=a.e.data;c=b.length;if(c?0:1)return a;d=0;e=0;f=0;a:{while(f<c){g=b[f];if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}if((BW(A5u,g)&65535)!=g){d=1;break a;}h=g&64512;g=h!=55296?0:1;if(!g&&!(h!=56320?0:1)?0:1)e=1;f=f+1|0;}}if(!d)return a;return !e?W1(a):Vk(a);}
function W1(a){var b,c,d,e,f,g;b=D(a.e.data.length);c=b.data;d=0;while(true){e=a.e.data;if(d>=e.length)break;f=e[d];if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}c[d]=BW(A5u,f)&65535;d=d+1|0;}g=new M;P();f=c.length;c=D(f);g.e=c;L(b,0,c,0,f);return g;}
function Vk(a){var b,c,d,e,f,g,h;b=Z(a.e.data.length);c=b.data;d=0;e=0;while(true){f=a.e.data;g=f.length;if(e>=g)break;a:{if(e!=(g-1|0)&&((f[e]&64512)!=55296?0:1)){g=e+1|0;if((f[g]&64512)!=56320?0:1){h=d+1|0;e=((f[e]&1023)<<10|f[g]&1023)+65536|0;if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}c[d]=BW(A5u,e);d=h;break a;}}h=d+1|0;g=f[e];if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}c[d]=BW(A5u,g)&65535;d=h;g=e;}e=g+
1|0;}return ATo(b,0,d);}
function YL(a,b){return Ib(Gb(b,0),a,0);}
function RZ(a,b,c){return Ib(Gb(b,0),a,c);}
function Wg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;b=OA(Gb(b,0),a);d=new J9;d.b=D(16);b.kK=0;e=b.hw;f=e.e.data.length;b.kN=f;g=b.dp;g.dn=0;g.hW=2;h=g.bI.data;i=0;j=h.length;if(i>j){b=new Be;CQ(b);H(b);}while(i<j){k=i+1|0;h[i]=(-1);i=k;}h=g.bz.data;l=0;i=h.length;if(l>i){b=new Be;CQ(b);H(b);}while(l<i){j=l+1|0;h[l]=(-1);l=j;}g.gj=e;g.c$=0;g.U=f;g.ep=0;b.k0=0;b.mR=null;g.h1=(-1);while(true){if(!G9(b)){c=b.hw;k=b.k0;m=c.e;l=m.data.length;n=Bm(k,l);if(n>0){b=new Y;b.c=1;b.d=1;B9(b);H(b);}if(!n){P();c=A32;}else if(!(!k
&&l==l)){c=new M;n=l-k|0;P();h=D(n);c.e=h;L(m,k,h,0,n);}l=c.e.data.length;PP(d,d.a,c,0,l);b=new M;h=d.b;n=d.a;P();m=D(n);b.e=m;L(h,0,m,0,n);return b;}b.nh=AAM(b,c);e=b.hw;i=b.k0;g=b.dp;if(!g.dn)break;if(0>=g.d0){b=new Y;P();c=new O;J8(c);Nf(c,0);d=new M;h=c.b;n=c.a;m=D(n);d.e=m;L(h,0,m,0,n);b.c=1;b.d=1;b.f=d;H(b);}l=g.bI.data[0];k=Bm(i,l);if(k>0){b=new Y;b.c=1;b.d=1;B9(b);H(b);}if(!k){P();g=A32;}else if(!i&&l==e.e.data.length)g=e;else{g=new M;h=e.e;k=l-i|0;P();m=D(k);g.e=m;L(h,i,m,0,k);}i=g.e.data.length;PP(d,
d.a,g,0,i);e=b.nh;I(d,d.a,e);e=b.dp;Yn(e,0);b.k0=e.bI.data[1];}b=new BH;QS(b);H(b);}
function ATl(){var b,c;b=D(0);A5o=b;c=new M;P();c.e=b;A32=c;A5p=new Ri;}
var FH=G(Dc);
var H7=G(FH);
var Xe=G(H7);
var Ey=G();
function EA(){Ey.call(this);this.fO=0;}
var AZB=null;var A1T=null;function Ke(b,c){var d;if(!(c>=2&&c<=36))c=10;d=new Bi;d.b=D(20);return (N(d,d.a,b,c)).s();}
function J1(b,c){if(b!==null)return R7(b,0,b.e.data.length,c);b=new B8;b.c=1;b.d=1;b.f=B(76);H(b);}
function R7(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=Bm(c,d);if(!f){b=new B8;b.c=1;b.d=1;b.f=B(77);H(b);}if(e>=2&&e<=36){g=0;if(c>=0){h=b.e.data;if(c<h.length){a:{switch(h[c]){case 43:i=c+1|0;break a;case 45:g=1;i=c+1|0;break a;default:}i=c;}j=0;if(i==d){b=new B8;b.c=1;b.d=1;H(b);}b:{while(i<d){k=i+1|0;if(i<0)break b;h=b.e.data;if(i>=h.length)break b;l=Ij(h[i]);if(l<0){m=new B8;if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f){P();n=A32;}else if(!c&&d==b.e.data.length)n=b;else{n=new M;h=b.e;d=d-c|0;P();o=D(d);n.e=o;L(h,
c,o,0,d);}P();if(n===null)n=B(2);b=new O;b.b=D(16);I(b,b.a,B(78));I(b,b.a,n);p=new M;h=b.b;d=b.a;o=D(d);p.e=o;L(h,0,o,0,d);m.c=1;m.d=1;m.f=p;H(m);}if(l>=e){m=new B8;q=Fv(b,c,d);if(q===null)q=B(2);b=new O;Ia(b,16);O_(b,B(79));CS(CS(EK(b,e),B(71)),q);IL(m,Cm(b));H(m);}j=D4(e,j)+l|0;if(j<0){if(k==d&&j==(-2147483648)&&g)return (-2147483648);m=new B8;b=Kg(Ov(b,c,d));p=E2();CS(CS(p,B(80)),b);IL(m,Cm(p));H(m);}i=k;}if(g)j= -j|0;return j;}b=new X;b.c=1;b.d=1;H(b);}}b=new X;b.c=1;b.d=1;H(b);}b=new B8;m=new O;m.b=D(16);I(m,
m.a,B(81));N(m,m.a,e,10);p=new M;h=m.b;d=m.a;P();o=D(d);p.e=o;L(h,0,o,0,d);b.c=1;b.d=1;b.f=p;H(b);}
function Cs(b){if(b!==null)return R7(b,0,b.e.data.length,10);b=new B8;b.c=1;b.d=1;b.f=B(76);H(b);}
function T9(b){var c;if(b>=(-128)&&b<=127){E7();return A1T.data[b+128|0];}c=new EA;c.fO=b;return c;}
function E7(){var b,c,d,e,f;a:{if(A1T===null){b=Bg(EA,256);c=b.data;A1T=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new EA;f.fO=d-128|0;c[d]=f;d=d+1|0;}}}}
function JU(a){return a.fO;}
function JW(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function En(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function ASk(){AZB=J($rt_intcls());}
function Bi(){var a=this;C.call(a);a.b=null;a.a=0;}
function A5w(){var a=new Bi();J8(a);return a;}
function A5x(a){var b=new Bi();Ia(b,a);return b;}
function J8(a){a.b=D(16);}
function Ia(a,b){a.b=D(b);}
function O_(a,b){I(a,a.a,b===null?B(2):b.s());return a;}
function AAA(a,b){return a.pi(a.a,b);}
function I(a,b,c){var d,e,f,g,h,i;if(b>=0){d=a.a;if(b<=d){if(c===null)c=B(2);else if(c.e.data.length?0:1)return a;a.ic(d+c.e.data.length|0);d=a.a;e=d-1|0;while(e>=b){f=a.b.data;f[e+c.e.data.length|0]=f[e];e=e+(-1)|0;}f=c.e.data;g=f.length;a.a=d+g|0;d=0;a:{while(true){e=Bm(d,g);if(e>=0)break;h=a.b;i=b+1|0;if(d<0)break a;if(e>=0)break a;h.data[b]=f[d];d=d+1|0;b=i;}return a;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}
function Nf(a,b){return N(a,a.a,b,10);}
function N(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Bc(a,b,b+1|0);else{Bc(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=H4(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=D4(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bc(a,b,b+i|0);if(e)e=b;else{f=a.b.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.b.data;b=e+1|0;f[e]=H4($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function PR(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(AJO(c,B2)){e=0;c=AOL(c);}a:{f=T(d);if(D3(c,f)<0){if(e)Bc(a,b,b+1|0);else{Bc(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=H4(U(c),d);}else{i=1;j=T(1);k=DO(T(-1),f);b:{while(true){l=Bf(j,f);if(D3(l,c)>0){l=j;break b;}i=i+1|0;if(D3(l,k)>0)break;j=l;}}if(!e)i=i+1|0;Bc(a,b,b+i|0);if(e)e=b;else{g=a.b.data;e=b+1|0;g[b]=45;}while(true){if(Cn(l,B2))break a;g=a.b.data;b=e+1|0;g[e]=H4(U((DO(c,l))),d);c=TP(c,l);l=DO(l,f);e=b;}}}return a;}
function DK(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bm(c,0.0);if(!d){if(1.0/c===Infinity){Bc(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bc(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bc(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bc(a,b,b+8|0);d=b;}else{Bc(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A5y;ZA(c,f);d=f.nF;g=f.nc;h=f.qV;i=1;j=1;if(h)j=2;k=9;l=ASH(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Pb(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bc(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.b.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.b.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.b.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.b.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function Oa(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bm(c,0.0);if(!d){if(1.0/c===Infinity){Bc(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bc(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bc(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bc(a,b,b+8|0);d=b;}else{Bc(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A5z;XO(c,f);g=f.oq;h=f.mO;i=f.qD;j=1;k=1;if(i)k=2;l=18;m=AQB(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Pb(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bc(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.b.data;k=b+1|0;e[b]=45;}p=F(1569325056, 23283064);if(o){e=a.b.data;b=k+1|0;e[k]
=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AJR(p,B2))d=0;else{d=U(Lo(g,p));g=S_(g,p);}e=a.b.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=Lo(p,T(10));q=q+1|0;}if(h){e=a.b.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ASH(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQB(b){var c,d,e,f,g;c=T(1);d=0;e=16;f=A5A.data;g=f.length-1|0;while(g>=0){if(Cn(S_(b,Bf(c,f[g])),B2)){d=d|e;c=Bf(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Yk(a,b){return a.pA(a.a,b);}
function AD3(a,b,c){Bc(a,b,b+1|0);a.b.data[b]=c;return a;}
function DD(a,b,c){I(a,b,c===null?B(2):c.s());return a;}
function M_(a,b){var c,d,e,f,g,h;c=a.b.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=D(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.b=g;}
function AOU(a){var b,c,d,e;b=new M;c=a.b;d=a.a;P();e=D(d);b.e=e;L(c,0,e,0,d);return b;}
function Zx(a,b,c,d,e){var f,g,h;if(d<=e&&e<=c.e.data.length&&d>=0){Bc(a,b,(b+e|0)-d|0);a:{while(d<e){f=a.b;g=b+1|0;if(d<0)break a;h=c.e.data;if(d>=h.length)break a;f.data[b]=h[d];d=d+1|0;b=g;}return a;}c=new X;c.c=1;c.d=1;H(c);}c=new Y;c.c=1;c.d=1;H(c);}
function JJ(a,b,c,d,e){var f,g,h,i;Bc(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function RS(a,b){var c,d,e,f;if(b>=0){c=a.a;if(b<c){c=c-1|0;a.a=c;while(b<c){d=a.b.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new X;f.c=1;f.d=1;H(f);}
function ADH(a,b,c){var d,e,f,g,h,i;if(b>=0){d=Bm(b,c);if(d<=0){e=a.a;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.a=e-(c-b|0)|0;g=0;while(g<f){h=a.b.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new X;i.c=1;i.d=1;H(i);}
function Bc(a,b,c){var d,e,f,g;d=a.a;e=d-b|0;a.ic((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.b.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.a=a.a+(c-b|0)|0;}
var Hb=G(0);
var O=G(Bi);
function E2(){var a=new O();AUq(a);return a;}
function AUq(a){a.b=D(16);}
function CS(a,b){I(a,a.a,b===null?B(2):b.s());return a;}
function Dy(a,b){I(a,a.a,b);return a;}
function EK(a,b){N(a,a.a,b,10);return a;}
function OU(a,b){PR(a,a.a,b,10);return a;}
function Fu(a,b){var c;c=a.a;Bc(a,c,c+1|0);a.b.data[c]=b;return a;}
function AEd(a,b,c){I(a,b,c===null?B(2):c.s());return a;}
function AAe(a,b,c){Bc(a,b,b+1|0);a.b.data[b]=c;return a;}
function ADF(a,b,c){ADH(a,b,c);return a;}
function FI(a,b,c){I(a,b,c);return a;}
function ABw(a,b,c){var d,e,f;if(b<=c&&b>=0&&c<=a.a){d=new M;e=a.b;c=c-b|0;P();f=D(c);d.e=f;L(e,b,f,0,c);return d;}d=new Y;d.c=1;d.d=1;H(d);}
function AM9(a,b,c,d,e){var f,g,h,i;Bc(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function AJA(a,b,c,d){var e,f,g,h,i;e=a.a;Bc(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.b.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
function GO(a){return a.a;}
function Cm(a){var b,c,d,e;b=new M;c=a.b;d=a.a;P();e=D(d);b.e=e;L(c,0,e,0,d);return b;}
function ANl(a,b){M_(a,b);}
function AN4(a,b,c){Bc(a,b,b+1|0);a.b.data[b]=c;return a;}
function CM(a,b,c){I(a,b,c);return a;}
var HN=G(H7);
var AAo=G(HN);
function A5B(a){var b=new AAo();AHW(b,a);return b;}
function AHW(a,b){a.c=1;a.d=1;a.f=b;}
var WM=G(HN);
function A5C(a){var b=new WM();AIq(b,a);return b;}
function AIq(a,b){a.c=1;a.d=1;a.f=b;}
function W$(){var a=this;C.call(a);a.l9=0;a.vI=0;a.oV=0;a.rd=null;a.vv=0;a.vM=null;a.mp=0;a.v5=null;a.kn=0;a.g4=0;a.nd=0;a.p7=0;a.sq=0;a.rJ=0;a.us=0;a.ta=0;a.tu=0;a.pD=0;a.ls=0;}
function AYS(a){var b=new W$();AGx(b,a);return b;}
function ABu(a){return !a.kn&&!a.g4?1:0;}
function AGx(a,b){a.l9=0;a.vI=1;a.oV=0;a.vv=1;a.vM=B(42);a.mp=0;a.kn=(-1);a.g4=(-1);a.nd=0;a.p7=0;a.sq=0;a.rJ=0;a.us=0;a.ta=0;a.tu=0;a.pD=0;a.ls=1;a.v5=b;}
var NZ=G(0);
function KG(){var a=this;C.call(a);a.et=null;a.jo=null;a.sn=null;a.tm=null;a.zx=null;a.d3=null;a.kA=null;a.hi=null;a.kd=null;a.ft=null;a.h8=null;a.my=0;a.pF=0;a.wR=null;a.jF=0;a.ki=null;a.xE=null;a.w5=null;a.jN=null;a.p$=null;a.fR=null;}
var A5D=null;function A5E(a,b){var c=new KG();VA(c,a,b);return c;}
function VA(a,b,c){var d;d=new BN;d.bf=1;d.r=Bg(C,4);a.kd=d;Iu();a.h8=A5F;a.my=(-1);a.pF=1;a.jF=1;a.xE=Et(51,0.800000011920929);d=new BN;d.bf=1;d.r=Bg(C,16);a.jN=d;d=new BN;d.bf=1;d.r=Bg(C,16);a.p$=d;IA();a.ft=A5G;a.d3=c;a.kA=b;ABU(a);}
function ABU(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;A5D=AOX();Km();DM(A5H,B(82),B(42));b=$rt_str(A5D.userAgent);Km();DM(A5H,B(83),b);if(A5D.windows?1:0){Km();DM(A5H,B(84),B(85));}else if(A5D.macOS?1:0)QQ(B(84),B(86));else if(!(A5D.linux?1:0))QQ(B(84),B(87));else QQ(B(84),B(7));c=new M7;d=a.d3.mp;c.uD=0;c.vZ=0;c.dr=1;c.dr=d;A5I=c;IA();b=$rt_str(A5G.d4.location.href);a.fR=b;if(CN(b,B(88))){c=Lq(a.fR,B(89),B(42));a.fR=c;a.fR=Lq(c,B(90),B(42));}e=D5(a.fR,63,0);if(e>=0)a.fR=Fv(a.fR,0,e);c=a.d3;A5J=c.vI;b=AXU(c);a.et=b;c
=AXs(a.fR,b.cD,a);a.ki=c;d=a.d3.vv;f=A5I;g=c.kO;h=new O;h.b=D(16);i=h.a;if(g===null)g=B(2);I(h,i,g);I(h,h.a,B(91));j=new M;k=h.b;l=h.a;m=D(l);j.e=m;L(k,0,m,0,l);g=new O;g.b=D(16);I(g,g.a,j);I(g,g.a,B(92));h=new M;m=g.b;n=g.a;k=D(n);h.e=k;L(m,0,k,0,n);Ty(f,1,h,AW5(c,B(92),d));a.jo=AVW(a.et.cD);a.sn=AV$(a.ki);a.tm=AWL();a.wR=AVL();a.w5=AXt();if(a.d3.oV)Y5(a);A3$=a;c=a.et;A4L=c;A37=QK(c);A4N=QK(a.et);A5K=TX(a.et);A5L=a.jo;A35=a.sn;A5M=a.tm;c=AYO();a.zx=c;A5N=c;c=Xc(a.ft);g=AX_(a);c.addEventListener("visibilitychange",
BT(g,"handleEvent"));ACz(a.ft,a);if(ABu(a.d3))Vc(a.ft,B(93),AV5(a));}
function XH(a){var b,c,d,e,f,g,h,$$je;b=a.h8;a:{try{b:{AXE();switch(A5O.data[ACy(b)]){case 1:c=XR(AFm());if(!c){Iu();a.h8=A5P;d=$rt_globals.window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.ki.n9;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=$rt_globals.window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=E2();Fu(EK(g,f),37);h=Cm(g);d.setProperty("width",$rt_ustr(h));}}break b;case 2:break;default:break b;}if(a.kA!==null){b=a.hi;if(b!==null)
{Zq(b);AAB(a.hi);}V4(a.jo,null);Pc(a.jo);V_(a.jN);a.hi=a.kA;a.kA=null;Iu();a.h8=A5Q;a.et.lX=B2;}TM(a,a.hi);}}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){h=$$je;break a;}else{throw $$e;}}b=a.ft;b.kt=a;$rt_globals.requestAnimationFrame(BT(b,"onAnimationFrame"));return;}if(A5k===null){d=new Cu;d.b6=AZX;b=new O;b.b=D(16);d.ba=b;d.b4=D(32);d.cm=0;Ct();d.ce=A5l;A5k=d;}Jv(h,A5k);H(h);}
function TM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;Vo(a.et);c=A4L.cD.width;d=A4L.cD.height;e=0;f=a.h8;Iu();if(f===A5Q){a.h8=A5P;g=new MS;g.kx=0;g.sh=b;f=b.dB;if(f!==null)f.lo();b.dB=g;g.o6();b.dB.l$(A4L.cD.width,A4L.cD.height);g=b.dB;if(g!==null)g.lO();e=1;}if(!(c==a.my&&d==a.pF&&!e)){a.my=c;a.pF=d;A37.mB(0,0,c,d);g=b.dB;if(g!==null)g.l$(c,d);}g=a.p$;f=a.jN;h=f.r;i=f.l;j=g.r;k=j.data;l=g.l;m=l+i|0;if(m<=k.length)f=j;else{e=8;if(e<=m)e=m;l=l*1.75|0;if(e>l)l=e;n=j.constructor;if(n===null)f=null;else{f=n.classObject;if
(f===null){f=new BZ;f.C=n;o=f;n.classObject=o;}}p=f.C.$meta.item;if(p===null)n=null;else{n=p.classObject;if(n===null){n=new BZ;n.C=p;f=n;p.classObject=f;}}if(n===null){b=new CB;CQ(b);H(b);}if(n===J($rt_voidcls())){b=new Be;CQ(b);H(b);}if(l<0){b=new C3;CQ(b);H(b);}f=Dv(n.C,l);n=f.data;d=g.l;c=n.length;if(d<c)c=d;DH(j,0,f,0,c);g.r=f;}DH(h,0,f,g.l,i);g.l=m;g=a.jN;k=g.r;e=0;l=g.l;f=null;if(e>l){b=new Be;b.c=1;b.d=1;H(b);}while(e<l){h=k.data;d=e+1|0;h[e]=f;e=d;}g.l=0;l=0;while(true){g=a.p$;e=g.l;if(l>=e)break;(FX(g,
l)).ex();l=l+1|0;}k=g.r;l=0;f=null;if(l>e){b=new Be;b.c=1;b.d=1;H(b);}while(l<e){h=k.data;d=l+1|0;h[l]=f;l=d;}g.l=0;g=a.et;q=CX(g.lX,T(1));g.lX=q;if(AWg(q,T(60)))XU(b);Pc(a.jo);}
function Y5(a){var b,c,d,e,f,g,h,i,j;b=a.ki;c=new Mz;c.wt=a;d=A5I;b=b.kO;e=new O;e.b=D(16);f=e.a;if(b===null)b=B(2);I(e,f,b);I(e,e.a,B(91));b=new M;g=e.b;h=e.a;P();i=D(h);b.e=i;L(g,0,i,0,h);e=new O;e.b=D(16);I(e,e.a,b);I(e,e.a,B(94));j=new M;g=e.b;h=e.a;i=D(h);j.e=i;L(g,0,i,0,h);L_(d,1,j,c);}
var R6=G(0);
function K_(){C.call(this);this.dB=null;}
function AAB(a){var b;b=a.dB;if(b!==null)b.lo();}
function Zq(a){var b;b=a.dB;if(b!==null)b.iE();}
function XU(a){var b;b=a.dB;if(b!==null)b.t4(A4L.jq);}
var AAQ=G(K_);
function AWe(){var a=new AAQ();ASb(a);return a;}
function ASb(a){}
var I2=G();
var A5R=null;var A5k=null;var A5H=null;function DH(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Li(b)&&(e+f|0)<=Li(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BZ;h.C=g;i=h;g.classObject=i;}}j=Dd(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BZ;h.C=g;i=h;g.classObject=i;}}i=Dd(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.C.$meta.primitive?1:0)&&!(i.C.$meta.primitive?1:0)){k=b;l=0;m
=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p=i.C;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&Qi(g.constructor,p)?1:0)){KQ(b,c,d,e,l);b=new Jn;b.c=1;b.d=1;H(b);}l=l+1|0;m=o;}KQ(b,c,d,e,f);return;}if(!(j.C.$meta.primitive?1:0))break a;if(i.C.$meta.primitive?1:0)break b;else break a;}b=new Jn;b.c=1;b.d=1;H(b);}}KQ(b,c,d,e,f);return;}b=new Jn;b.c=1;b.d=1;H(b);}b=new Y;b.c=1;b.d=1;H(b);}d=new CB;d.c=1;d.d=1;d.f=B(95);H(d);}
function L(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Li(b)&&(e+f|0)<=Li(d)){KQ(b,c,d,e,f);return;}b=new Y;b.c=1;b.d=1;H(b);}
function KQ(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EY(){return Long_fromNumber(new Date().getTime());}
function Km(){var b,c;if(A5H===null){b=new Lm;J_(b,11);DM(b,B(96),B(97));DM(b,B(84),B(98));DM(b,B(99),B(100));DM(b,B(101),B(102));DM(b,B(103),B(104));DM(b,B(105),B(106));DM(b,B(107),B(97));DM(b,B(108),B(100));c=new Lm;J_(c,11);c.AC=b;A5H=c;}}
function QQ(b,c){Km();return DM(A5H,b,c);}
var ABP=G();
function Bj(b,c){var d,e,f,g,h,i,j,k,l;if(!b)return B(44);d=1<<c;e=d-1|0;f=(((32-JW(b)|0)+c|0)-1|0)/c|0;g=D(f);h=g.data;i=D4(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=H4((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new M;P();c=h.length;h=D(c);l.e=h;L(g,0,h,0,c);return l;}
var E1=G(BC);
var A5F=null;var A5Q=null;var A5P=null;var A5S=null;function Iu(){Iu=W(E1);ANQ();}
function ANQ(){var b,c,d;b=new E1;Iu();b.t=B(109);b.q=0;A5F=b;c=new E1;c.t=B(110);c.q=1;A5Q=c;d=new E1;d.t=B(111);d.q=2;A5P=d;A5S=R(E1,[b,c,d]);}
var MD=G(0);
var B5=G(0);
var O9=G(0);
function K9(){var a=this;C.call(a);a.d4=null;a.kt=null;}
var A5G=null;function IA(){IA=W(K9);ALb();}
function Xc(a){return a.d4.document;}
function ACz(a,b){a.kt=b;$rt_globals.requestAnimationFrame(BT(a,"onAnimationFrame"));}
function Vc(a,b,c){var d;d=Dp(c,"handleEvent");a.d4.addEventListener($rt_ustr(b),BT(d,"handleEvent"));}
function ALb(){var b;b=new K9;IA();b.d4=$rt_globals.window;A5G=b;}
function AQj(a,b){var c;b;c=a.kt;a.kt=null;XH(c);}
var AAG=G();
var OS=G();
var A1I=null;function Kr(){Kr=W(OS);APl();}
function Z1(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;Kr();if(b===null){d=new Be;d.c=1;d.d=1;d.f=B(34);H(d);}d=null;e=0;f=b.l;while(e<f){if(e>=b.l){g=new Y;d=new O;d.b=D(16);I(d,d.a,B(35));N(d,d.a,e,10);I(d,d.a,B(36));c=b.l;N(d,d.a,c,10);b=new M;h=d.b;e=d.a;P();i=D(e);b.e=i;L(h,0,i,0,e);g.c=1;g.d=1;g.f=b;H(g);}a:{g=b.r.data[e];if(g!==null){if(d===null){d=A1I;j=g.constructor;if(j===null)k=null;else{k=j.classObject;if(k===null){k=new BZ;k.C=j;l=k;j.classObject=l;}}m=Cv(d,k);d=m<0?null:d.cl.data[m];if(d===null)break a;}k
=d.bU;if(k.l<d.dy){Cj(k,g);n=d.fC;o=d.bU.l;if(n>o)o=n;d.fC=o;if(Dg(g,CL))g.dK();}else if(Dg(g,CL))g.dK();if(!c)d=null;}}e=e+1|0;}}
function APl(){A1I=Et(51,0.800000011920929);}
function Js(){Ey.call(this);this.mq=0.0;}
var AZw=null;function ATc(a){return a.mq;}
function FO(b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.e.data;d=c.length;if(d?0:1){b=new B8;b.c=1;b.d=1;H(b);}e=0;while(e>=0&&e<d){if(c[e]>32){f=d;while(true){g=f-1|0;if(g<0)break;if(g>=d)break;if(c[g]>32){g=0;if(CO(b,e)==45){e=e+1|0;g=1;}else if(CO(b,e)==43)e=e+1|0;if(e==f){b=new B8;b.c=1;b.d=1;H(b);}a:{h=CO(b,e);i=0;j=(-1);k=100000000;l=0;if(h!=46){l=1;if(h>=48&&h<=57){b:{while(e<f){if(CO(b,e)!=48)break b;e=e+1|0;}}while(e<f){m=CO(b,e);if(m<48)break a;if(m>57)break a;if(k>0){i=i+D4(k,m-48|0)|0;k=$rt_udiv(k,10);}j
=j+1|0;e=e+1|0;}}else{b=new B8;QS(b);H(b);}}}if(e<f&&CO(b,e)==46){e=e+1|0;c:{while(true){if(e>=f)break c;d=CO(b,e);m=Bm(d,48);if(m<0)break c;if(d>57)break;if(!i&&!m)j=j+(-1)|0;else if(k>0){i=i+D4(k,d-48|0)|0;k=$rt_udiv(k,10);}e=e+1|0;l=1;}}if(!l)H(SD());}if(e<f){m=CO(b,e);if(m!=101&&m!=69)H(SD());m=e+1|0;d=0;if(m==f)H(SD());if(CO(b,m)==45){m=m+1|0;d=1;}else if(CO(b,m)==43)m=m+1|0;n=0;e=0;d:{while(true){if(m>=f)break d;k=CO(b,m);if(k<48)break d;if(k>57)break;n=(10*n|0)+(k-48|0)|0;e=1;m=m+1|0;}}if(!e)H(SD());if
(d)n= -n|0;j=j+n|0;}return AD5(i,j,g);}f=f+(-1)|0;}b=new X;b.c=1;b.d=1;H(b);}e=e+1|0;if(e==d){b=new B8;b.c=1;b.d=1;H(b);}}b=new X;b.c=1;b.d=1;H(b);}
function AQz(){AZw=J($rt_floatcls());}
function Jg(){var a=this;C.call(a);a.bX=null;a.bE=0;a.l7=0;}
function NH(a,b){var c,d,e,f,g;c=a.bX;d=c.data;e=a.bE;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Ce(f);g=d.data.length;if(e<g)g=e;L(c,0,d,0,g);a.bX=d;}c=d.data;f=a.bE;a.bE=f+1|0;c[f]=b;}
function RF(a,b,c,d){var e,f,g,h;if((c+d|0)<=b.bE){JO(a,b.bX,c,d);return;}e=new Be;f=new O;f.b=D(16);I(f,f.a,B(112));N(f,f.a,c,10);I(f,f.a,B(50));N(f,f.a,d,10);I(f,f.a,B(51));c=b.bE;N(f,f.a,c,10);b=new M;g=f.b;d=f.a;P();h=D(d);b.e=h;L(g,0,h,0,d);e.c=1;e.d=1;e.f=b;H(e);}
function JO(a,b,c,d){var e,f,g,h,i,j;e=a.bX;f=e.data;g=a.bE;h=g+d|0;if(h<=f.length)f=e;else{if(8>h)h=8;i=g*1.75|0;if(h>i)i=h;f=Ce(i);j=f.data.length;if(g<j)j=g;L(e,0,f,0,j);a.bX=f;}L(b,c,f,a.bE,d);a.bE=a.bE+d|0;}
function NX(a,b){var c,d,e,f,g,h;if(b<a.bE)return a.bX.data[b];c=new Y;d=new O;d.b=D(16);I(d,d.a,B(35));N(d,d.a,b,10);I(d,d.a,B(36));b=a.bE;N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function S$(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.bE;if(c>=d){e=new Y;f=new O;f.b=D(16);I(f,f.a,B(52));N(f,f.a,c,10);I(f,f.a,B(36));g=a.bE;N(f,f.a,g,10);h=new M;i=f.b;c=f.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}if(b<=c){g=(c-b|0)+1|0;k=d-g|0;if(a.l7){i=a.bX;c=b+g|0;L(i,c,i,b,d-c|0);}else{l=c+1|0;if(k>l)l=k;i=a.bX;L(i,l,i,b,d-l|0);}a.bE=k;return;}e=new Y;f=new O;f.b=D(16);I(f,f.a,B(53));N(f,f.a,b,10);I(f,f.a,B(54));N(f,f.a,c,10);h=new M;i=f.b;c=f.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function Oo(a){var b;if(a.bE)return a.bX.data[0];b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}
function ABK(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Be;d=new O;d.b=D(16);I(d,d.a,B(55));N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}i=a.bE;g=i+b|0;h=a.bX;if(g>h.data.length){if(8>g)g=8;b=i*1.75|0;if(g>b)b=g;f=Ce(b);j=f.data.length;if(i<j)j=i;L(h,0,f,0,j);a.bX=f;}return a.bX;}
var Xx=G();
function ASN(b){return Math.sin(b);}
function ASj(b){return Math.tan(b);}
function BQ(b){return Math.sqrt(b);}
function AJr(b){return Math.ceil(b);}
function IR(b,c){return Math.pow(b,c);}
function Pb(b,c){if(b>c)c=b;return c;}
function ABJ(b,c){return Math.min(b,c);}
function ASV(b,c){return ABJ(b,c);}
function Jr(b,c){return Math.max(b,c);}
function AHM(b,c){return Jr(b,c);}
function Fy(b){return Math.abs(b);}
function Ci(b){return Math.sign(b);}
function Ex(){var a=this;C.call(a);a.bF=null;a.b9=null;a.ei=0.0;a.lc=0.0;a.mb=0.0;}
function A5T(){var a=new Ex();AKW(a);return a;}
function AKW(a){var b;b=new BN;b.bf=1;b.r=Bg(C,16);a.bF=b;b=new Jg;b.l7=1;b.bX=Ce(16);a.b9=b;}
function TA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bF;d=b.bF;e=d.r;f=d.l;g=c.r;h=g.data;i=c.l;j=i+f|0;if(j<=h.length)d=g;else{k=8;if(k<=j)k=j;i=i*1.75|0;if(k>i)i=k;l=g.constructor;if(l===null)d=null;else{d=l.classObject;if(d===null){d=new BZ;d.C=l;m=d;l.classObject=m;}}l=Dd(d);if(l===null){b=new CB;CQ(b);H(b);}if(l===J($rt_voidcls())){b=new Be;CQ(b);H(b);}if(i<0){b=new C3;CQ(b);H(b);}d=Dv(l.C,i);l=d.data;k=c.l;n=l.length;if(k<n)n=k;DH(g,0,d,0,n);c.r=d;}DH(e,0,d,c.l,f);c.l=j;c=a.b9;o=c.bE;if(o<=0?0:1)c.bE=o-
1|0;b=b.b9;JO(c,b.bX,0,b.bE);}
function AMZ(a){var b,c,d,e,f,g,h;b=a.bF;c=b.r;d=0;e=b.l;f=null;if(d>e){b=new Be;b.c=1;b.d=1;H(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.l=0;a.b9.bE=0;}
function TQ(a){var b,c,d,e,f,g,h,i,j,k,l;b=new O;c=a.bF;d=c.l;b.b=D(d+32|0);e=0;while(e<d){if(e>=c.l){f=new Y;g=new O;g.b=D(16);I(g,g.a,B(35));N(g,g.a,e,10);I(g,g.a,B(36));e=c.l;N(g,g.a,e,10);b=new M;h=g.b;d=g.a;P();i=D(d);b.e=i;L(h,0,i,0,d);f.c=1;f.d=1;f.f=b;H(f);}j=c.r.data[e].fb&65535;k=b.a;Bc(b,k,k+1|0);b.b.data[k]=j;e=e+1|0;}I(b,b.a,B(58));l=a.ei;DK(b,b.a,l);I(b,b.a,B(58));l=a.lc;DK(b,b.a,l);I(b,b.a,B(58));l=a.mb;DK(b,b.a,l);c=new M;h=b.b;d=b.a;P();i=D(d);c.e=i;L(h,0,i,0,d);return c;}
function Dq(){var a=this;C.call(a);a.bL=null;a.bd=0;a.dJ=0;}
function Ff(a,b){var c,d,e,f,g;c=a.bL;d=c.data;e=a.bd;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Z(f);g=d.data.length;if(e<g)g=e;L(c,0,d,0,g);a.bL=d;}c=d.data;f=a.bd;a.bd=f+1|0;c[f]=b;}
function ADG(a,b,c){var d,e,f,g,h,i,j;d=a.bL;e=d.data;f=a.bd;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=Z(h);i=g.data.length;if(f<i)i=f;L(d,0,g,0,i);a.bL=g;}e=g.data;j=a.bd;e[j]=b;e[j+1|0]=c;a.bd=j+2|0;}
function FS(a,b){var c,d,e,f,g,h;if(b<a.bd)return a.bL.data[b];c=new Y;d=new O;d.b=D(16);I(d,d.a,B(35));N(d,d.a,b,10);I(d,d.a,B(36));b=a.bd;N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function IW(a,b,c){var d,e,f,g,h;if(b<a.bd){a.bL.data[b]=c;return;}d=new Y;e=new O;e.b=D(16);I(e,e.a,B(35));N(e,e.a,b,10);I(e,e.a,B(36));b=a.bd;N(e,e.a,b,10);f=new M;g=e.b;c=e.a;P();h=D(c);f.e=h;L(g,0,h,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function Pw(a){return a.bL.data[a.bd-1|0];}
function Z$(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Be;d=new O;d.b=D(16);I(d,d.a,B(55));N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}i=a.bd;g=i+b|0;h=a.bL;if(g>h.data.length){if(8>g)g=8;b=i*1.75|0;if(g>b)b=g;f=Z(b);j=f.data.length;if(i<j)j=i;L(h,0,f,0,j);a.bL=f;}return a.bL;}
function ANP(a){var b,c,d,e,f,g,h;if(a.dJ){b=a.bL;c=1;d=0;e=a.bd;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=$rt_nextId();g.$id$=h;}return a.$id$;}
function ATH(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.dJ)return 0;if(!(b instanceof Dq))return 0;c=b;if(!c.dJ)return 0;d=a.bd;if(d!=c.bd)return 0;e=a.bL;f=c.bL;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function ANu(a){var b,c,d,e,f,g,h,i;if(!a.bd)return B(57);b=a.bL;c=new II;d=D(32);e=d.data;c.bm=d;f=c.R;if(f==e.length)CP(c,f+1|0);b=b.data;e=c.bm.data;g=c.R;c.R=g+1|0;e[g]=91;MV(c,b[0],0,48);h=1;while(h<a.bd){g=B(58).e.data.length;i=c.R+g|0;if(i>c.bm.data.length)CP(c,i);G5(B(58),0,g,c.bm,c.R);c.R=i;MV(c,b[h],0,48);h=h+1|0;}f=c.R;if(f==c.bm.data.length)CP(c,f+1|0);b=c.bm;e=b.data;g=c.R;f=g+1|0;c.R=f;e[g]=93;if(!f)c=B(42);else{c=new M;P();e=D(f);c.e=e;L(b,0,e,0,f);}return c;}
var K0=G(0);
var Ka=G();
var EV=G(0);
function Gl(){var a=this;Ka.call(a);a.eA=0;a.cq=null;a.l8=0;a.ik=0.0;a.fj=0;}
function HX(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Yp(a,b){var c,d,e,f;if(b===null){c=a.cq.data[0];while(c!==null&&c.cB!==null){c=c.cQ;}}else{d=b.dA();e=a.cq.data;c=e[d&(e.length-1|0)];while(c!==null){if(c.el==d){f=c.cB;if(b!==f&&!b.dH(f)?0:1)break;}c=c.cQ;}}return c;}
function Gx(a,b,c){var d,e,f,g,h,i;if(b===null){d=a.cq.data;e=d[0];while(e!==null&&e.cB!==null){e=e.cQ;}if(e===null){a.l8=a.l8+1|0;f=null;e=new EJ;b=null;e.cB=f;e.dL=b;e.el=0;e.cQ=d[0];d[0]=e;g=a.eA+1|0;a.eA=g;if(g>a.fj)OO(a,d.length);}}else{h=b.dA();d=a.cq.data;i=h&(d.length-1|0);e=d[i];while(e!==null){if(e.el==h){f=e.cB;if(b!==f&&!b.dH(f)?0:1)break;}e=e.cQ;}if(e===null){a.l8=a.l8+1|0;e=new EJ;f=null;e.cB=b;e.dL=f;e.el=h;d=a.cq.data;e.cQ=d[i];d[i]=e;g=a.eA+1|0;a.eA=g;if(g>a.fj)OO(a,d.length);}}f=e.dL;e.dL=
c;return f;}
function OO(a,b){var c,d,e,f,g,h,i,j;c=HX(!b?1:b<<1);d=Bg(EJ,c);e=d.data;f=0;c=c-1|0;while(true){g=a.cq.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.el&c;j=h.cQ;h.cQ=e[i];e[i]=h;h=j;}f=f+1|0;}a.cq=d;a.fj=e.length*a.ik|0;}
function T1(b,c){return b!==c&&!b.dH(c)?0:1;}
var LY=G(0);
var Ri=G();
var Y=G(BF);
function A5U(){var a=new Y();UQ(a);return a;}
function A5V(a){var b=new Y();XB(b,a);return b;}
function UQ(a){a.c=1;a.d=1;}
function XB(a,b){a.c=1;a.d=1;a.f=b;}
var ZQ=G();
function Li(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A5W());}return b.data.length;}
function AQT(b,c){if(b===null){b=new CB;b.c=1;b.d=1;H(b);}if(b===J($rt_voidcls())){b=new Be;b.c=1;b.d=1;H(b);}if(c>=0)return Dv(b.C,c);b=new C3;b.c=1;b.d=1;H(b);}
function Dv(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var CB=G(BF);
var Jn=G(BF);
var Dr=G();
var AZD=null;var A5X=null;var A5u=null;var A5s=null;var A5Y=null;var AZE=null;var A5t=null;var A5v=null;var A5Z=null;var A50=null;function ADE(b){var c,d,e,f;c=new M;d=D(1);e=d.data;e[0]=b;P();f=e.length;e=D(f);c.e=e;L(d,0,e,0,f);return c;}
function ADh(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function UJ(b,c,d){var e;if(c<(d-1|0)){e=b.data;if((e[c]&64512)!=55296?0:1){d=c+1|0;if((e[d]&64512)!=56320?0:1)return ((e[c]&1023)<<10|e[d]&1023)+65536|0;}}return b.data[c];}
function YR(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function ADe(b){return (56320|b&1023)&65535;}
function ACY(b){if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}return BW(A5s,b)&65535;}
function XK(){if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}return A5s;}
function S7(b){if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}return BW(A5u,b)&65535;}
function Tx(){if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}return A5u;}
function BW(b,c){var d,e;d=b.s$.data;if(c<d.length)return c+d[c]|0;d=b.sS;e=ACA(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;}
function ACA(b,c){var d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=Bm(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;}
function Ij(b){var c,d,e,f,g,h;if(A5X===null){if(A5Z===null)A5Z=Xh();A5X=AUs((A5Z.value!==null?$rt_str(A5Z.value):null));}c=A5X.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=Bm(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);}
function H4(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function CC(b){var c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(A5Y===null){if(A50===null)A50=AEv();A5Y=AVr((A50.value!==null?$rt_str(A50.value):null));}e=A5Y.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.or)c=f+1|0;else{d=g.nB;if(b>=d)return g.nG.data[b-d|0];d=f-1|0;}}return 0;}
function Hc(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CC(b)!=16?0:1;}
function AGn(){AZD=J($rt_charcls());AZE=Bg(Dr,128);}
function C0(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function C1(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Xh(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AEv(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A\'G)FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
+" F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
+"L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F)A$J+Y(^+G*^*Y# G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
+"FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0G."
+"H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y"
+"&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^EA,=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#A&!# # #!#!#A9E$!#&E##F(\'F$"
+"\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F"
+"$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#Aeb&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@ FK G#5A#F#AmG$F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A"
+"\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+AWF<A#G$I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W$ F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( "
+"F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+b 7! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0b K` b&(* b Z\'#b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AK&A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =*!GOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B"
+"( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b G, F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^#Apb=5& A-"
+"^/A#^.A$^*A(^O ^(A)^/A%^*A(^*A(b=4#  ^XAFJ+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
var VE=G();
function AOX(){var userAgent=$rt_globals.navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
var Me=G(0);
function M7(){var a=this;C.call(a);a.bt=0;a.uD=0;a.vZ=0;a.dr=0;}
function XR(a){return a.bt;}
function U4(a,b,c,d,e,f){var g,h,i,j,k,l;a:{AYh();switch(A51.data[d.q]){case 1:if(a.dr){if(A5R===null){e=new Cu;e.b6=AZW;d=new O;d.b=D(16);e.ba=d;e.b4=D(32);e.cm=0;Ct();e.ce=A5l;A5R=e;}e=A5R;g=new O;g.b=D(16);I(g,g.a,B(113));I(g,g.a,c===null?B(2):c);d=new M;h=g.b;i=g.a;P();j=D(i);d.e=j;L(h,0,j,0,i);g=e.ba;I(g,g.a,d);k=g.a;Bc(g,k,k+1|0);g.b.data[k]=10;Cl(e);}a.bt=a.bt+1|0;d=new GH;d.em=a;d.fU=b;d.ee=c;d.ez=f;CF();c=null;e=null;d.dI=new C;d.dF=1;d.eG=e;d.e3=c;l=A52;A52=l+1|0;d.e0=T(l);c=new EX;c.eI=d;FQ(c);break a;case 2:d
=null;g=new MF;g.kg=a;g.iz=f;g.r2=d;g.vG=e;if(a.dr){if(A5R===null){e=new Cu;e.b6=AZW;d=new O;CI(d);d.b=D(16);e.ba=d;e.b4=D(32);e.cm=0;Ct();e.ce=A5l;A5R=e;}f=A5R;d=new O;d.b=D(16);CM(d,d.a,CZ(B(113)));CM(d,d.a,c===null?B(2):CZ(c));e=new M;h=d.b;i=d.a;j=D(i);e.e=j;L(h,0,j,0,i);d=f.ba;I(d,d.a,e);AD3(d,d.a,10);Cl(f);}a.bt=a.bt+1|0;d=new GI;d.ef=a;d.fF=b;d.ed=c;d.eP=g;CF();c=null;e=null;d.dI=new C;d.dF=1;d.eG=e;d.e3=c;l=A52;A52=l+1|0;d.e0=T(l);c=new EX;c.eI=d;FQ(c);break a;case 3:break;case 4:NY(a,b,c,AV2(a,f));break a;case 5:Y_(f,
c,null);break a;default:c=new Ba;e=new O;J8(e);CS(CS(e,B(114)),d);V0(c,Cm(e));H(c);}NY(a,b,c,f);}}
function Ty(a,b,c,d){var e,f,g,h,i,j,k;if(a.dr){if(A5R===null){e=new Cu;e.b6=AZW;f=new O;f.b=D(16);e.ba=f;e.b4=D(32);e.cm=0;Ct();e.ce=A5l;A5R=e;}e=A5R;f=new O;f.b=D(16);I(f,f.a,B(113));I(f,f.a,c===null?B(2):c);g=new M;h=f.b;i=f.a;P();j=D(i);g.e=j;L(h,0,j,0,i);f=e.ba;I(f,f.a,g);i=f.a;Bc(f,i,i+1|0);f.b.data[i]=10;Cl(e);}a.bt=a.bt+1|0;e=new GH;e.em=a;e.fU=b;e.ee=c;e.ez=d;CF();c=null;d=null;e.dI=new C;e.dF=1;e.eG=d;e.e3=c;k=A52;A52=k+1|0;e.e0=T(k);c=new EX;c.eI=e;FQ(c);}
function L_(a,b,c,d){var e,f,g,h,i,j,k;if(a.dr){if(A5R===null){e=new Cu;e.b6=AZW;f=new O;f.b=D(16);e.ba=f;e.b4=D(32);e.cm=0;Ct();e.ce=A5l;A5R=e;}e=A5R;f=new O;f.b=D(16);I(f,f.a,B(115));I(f,f.a,c===null?B(2):c);g=new M;h=f.b;i=f.a;P();j=D(i);g.e=j;L(h,0,j,0,i);f=e.ba;I(f,f.a,g);k=f.a;Bc(f,k,k+1|0);f.b.data[k]=10;Cl(e);}a.bt=a.bt+1|0;f=new $rt_globals.XMLHttpRequest();e=new ME;e.hU=a;e.gb=f;e.n4=b;e.k_=c;e.pg=d;e=BT(e,"handleEvent");f.onreadystatechange=e;e=new H$;e.pB=a;e.kv=d;d=BT(e,"handleEvent");f.onprogress
=d;f.open("GET",$rt_ustr(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();}
function NY(a,b,c,d){var e,f,g,h,i,j,k;if(a.dr){if(A5R===null){e=new Cu;e.b6=AZW;f=new O;f.b=D(16);e.ba=f;e.b4=D(32);e.cm=0;Ct();e.ce=A5l;A5R=e;}e=A5R;f=new O;f.b=D(16);I(f,f.a,B(113));I(f,f.a,c===null?B(2):c);g=new M;h=f.b;i=f.a;P();j=D(i);g.e=j;L(h,0,j,0,i);f=e.ba;I(f,f.a,g);i=f.a;Bc(f,i,i+1|0);f.b.data[i]=10;Cl(e);}a.bt=a.bt+1|0;e=new GI;e.ef=a;e.fF=b;e.ed=c;e.eP=d;CF();c=null;d=null;e.dI=new C;e.dF=1;e.eG=d;e.e3=c;k=A52;A52=k+1|0;e.e0=T(k);c=new EX;c.eI=e;FQ(c);}
var N1=G();
var A5I=null;function AFm(){return A5I;}
var Ku=G();
var AZT=0;var A5J=0;function ALQ(){AZT=1;}
var QB=G(0);
function J0(){var a=this;C.call(a);a.g7=null;a.cD=null;a.uV=null;a.hE=null;a.tn=null;a.xs=null;a.p9=0.0;a.mj=B2;a.lX=B2;a.jq=0.0;a.lP=0.0;a.pZ=0;}
var A53=0;var A4T=null;function I3(){I3=W(J0);AG1();}
function AXU(a){var b=new J0();YY(b,a);return b;}
function YY(a,b){var c,d,e,f,g,h,i,j,k;I3();a.p9=0.0;a.mj=EY();a.lX=T(-1);a.jq=0.0;a.lP=0.0;a.uV=b;IA();c=$rt_globals.window.document;d=b.v5;a.cD=c.getElementById($rt_ustr(d));e=AJG();d=!!b.us;e.alpha=d;d=!!b.rJ;e.antialias=d;d=!!b.sq;e.stencil=d;d=!!b.ta;e.premultipliedAlpha=d;d=!!b.tu;e.preserveDrawingBuffer=d;f=a.cD;if(b.l9)a.g7=f.getContext("webgl2",e);a:{if(b.l9){d=a.g7;if(d!==null){if(!b.pD)f=AYD(d);else{f=new M8;SR(f,d);}a.tn=f;a.hE=f;break a;}}f=f.getContext("webgl",e);a.g7=f;if(!b.pD)d=AYo(f);else{d
=new R2;P8(d,f);}a.hE=d;}d=a.hE.ji(7938);c=a.hE.ji(7936);g=a.hE.ji(7937);f=new Oq;Mm();YG(f,A54,d,c,g);a.xs=f;h=b.kn;if(!(h<0&&b.g4<0)){if(h&&b.g4?1:0)JG(a,h,b.g4);else{i=A5G;h=i.d4.document.documentElement.clientWidth-b.nd|0;j=i.d4.document.documentElement.clientHeight-b.p7|0;k=!b.ls?1.0:$rt_globals.devicePixelRatio||1;JG(a,k*h|0,k*j|0);}}b=a.cD;d=new QD;d.wH=a;Tt(b,BT(d,"fullscreenChanged"));}
function Vo(a){var b,c,d;b=EY();c=AWX(O8(b,a.mj))/1000.0;a.jq=c;a.mj=b;c=a.lP+c;a.lP=c;d=a.pZ+1|0;a.pZ=d;if(c>1.0){a.p9=d;a.lP=0.0;a.pZ=0;}}
function QK(a){return a.hE;}
function TX(a){return a.tn;}
function Sk(a){return a.cD.width;}
function SI(a){return a.cD.height;}
function JG(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.cD;e=b;d.width=e;d=a.cD;e=c;d.height=e;if(a.uV.ls){f=$rt_globals.devicePixelRatio||1;e=a.cD.style;g=b/f;AH8();h=new O;h.b=D(16);Oa(h,h.a,g);I(h,h.a,B(116));i=new M;j=h.b;k=h.a;P();l=D(k);i.e=l;L(j,0,l,0,k);e.setProperty("width",$rt_ustr(i));f=c/f;h=new O;h.b=D(16);Oa(h,h.a,f);I(h,h.a,B(116));d=new M;l=h.b;c=h.a;j=D(c);d.e=j;L(l,0,j,0,c);e.setProperty("height",$rt_ustr(d));}}
function AG1(){A53=0;A4T=Di(51,0.800000011920929);}
function Tt(b,c){if(b.requestFullscreen){$rt_globals.document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){$rt_globals.document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){$rt_globals.document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){$rt_globals.document.addEventListener("msfullscreenchange",c,false);}}
function Te(){var a=this;C.call(a);a.oH=null;a.jl=null;a.ln=null;a.jJ=null;a.jO=null;a.r3=null;a.kD=null;a.n9=0;a.kO=null;}
function AXs(a,b,c){var d=new Te();AM4(d,a,b,c);return d;}
function AM4(a,b,c,d){var e;a.oH=Et(51,0.800000011920929);a.jl=Et(51,0.800000011920929);a.ln=Et(51,0.800000011920929);a.jJ=Et(51,0.800000011920929);a.jO=Et(51,0.800000011920929);a.r3=Et(51,0.800000011920929);e=new BN;e.bf=1;e.r=Bg(C,16);a.kD=e;a.n9=(-1);a.kO=b;AB5(a,c,d);}
function AB5(a,b,c){var d,e,f;d=c.d3;if(d.rd!==null){e=b.ownerDocument;f=new OK;f.zY=a;e.addEventListener("dragenter",BT(f,"handleEvent"),!!0);f=new OL;f.BW=a;e.addEventListener("dragover",BT(f,"handleEvent"),!!0);f=new OI;f.rn=a;f.qP=c;f.qu=d;e.addEventListener("drop",BT(f,"handleEvent"));}}
function Xp(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(XC(a,b.nO)){b.kX=b.vb;b.jD=1;b.ho=0;b.ek=0;return 0;}if(b.ek)return 0;b.ho=0;b.jD=0;b.ek=1;c=b.nO;d=b.rD;e=b.rj;f=new OJ;f.Cx=a;f.dW=b;g=A5I;b=a.kO;h=new O;h.b=D(16);i=h.a;if(b===null)b=B(2);FI(h,i,b);FI(h,h.a,B(91));b=new M;j=h.b;k=h.a;P();l=D(k);b.e=l;L(j,0,l,0,k);h=new O;h.b=D(16);I(h,h.a,b);I(h,h.a,c===null?B(2):c);m=new M;j=h.b;k=h.a;l=D(k);m.e=l;L(j,0,l,0,k);b=new OH;b.lw=a;b.d$=f;b.lQ=d;b.k8=c;U4(g,1,m,d,e,b);return 1;}
function H9(a,b,c,d){a:{AYB();switch(A55.data[b.q]){case 1:break;case 2:BD(a.jl,c,d);break a;case 3:BD(a.jO,c,d);break a;case 4:BD(a.ln,c,d);break a;case 5:BD(a.oH,c,null);break a;default:break a;}BD(a.jJ,c,d);}}
function UK(a,b){var c,d,e,f,$$je;if(Cv(a.jJ,b)<0?0:1){a:{try{c=AI9(ZK(Ur(a.jJ,b),B(117)));}catch($$e){$$je=Bw($$e);if($$je instanceof Ow){break a;}else{throw $$e;}}return c;}return null;}if(Cv(a.jl,b)<0?0:1){b=new Lz;d=BE(1);e=d.data.length;b.iX=d;b.fB=0;b.n6=0;b.iR=0+e|0;return b;}if(Cv(a.jO,b)<0?0:1){c=a.jO;f=Cv(c,b);b=f<0?null:c.cl.data[f];c=new Ss;c.oQ=b;return c;}if(!(Cv(a.ln,b)<0?0:1))return null;b=new Lz;d=BE(1);e=d.data.length;b.iX=d;b.fB=0;b.n6=0;b.iR=0+e|0;return b;}
function XC(a,b){var c;c=Cv(a.jJ,b)<0?0:1;return !c&&!(Cv(a.jl,b)<0?0:1)&&!(Cv(a.jO,b)<0?0:1)&&!(Cv(a.ln,b)<0?0:1)&&!(Cv(a.oH,b)<0?0:1)?0:1;}
var Dt=G();
function AOw(a,b){}
var Qf=G(0);
var Eu=G(0);
function Zt(){var a=this;C.call(a);a.bN=null;a.iw=0;a.fi=null;a.eL=null;a.cj=null;a.ci=null;a.kF=null;a.kG=null;a.lD=null;a.i2=0;a.mC=null;a.lz=0;a.oe=null;a.pL=null;a.n_=null;a.dd=null;a.fG=B2;a.hQ=0;}
function AVW(a){var b=new Zt();AQx(b,a);return b;}
function AUR(b){var c,d,e,f;c=A5D;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(Fy(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
function AQx(a,b){a.iw=0;a.fi=Di(20,0.800000011920929);a.eL=SF(20);a.cj=Z(20);a.ci=Z(20);a.kF=Z(20);a.kG=Z(20);a.lD=AGC(51,0.800000011920929);a.i2=0;a.mC=SF(256);a.lz=0;a.oe=SF(256);a.pL=SF(5);a.n_=AGC(51,0.800000011920929);a.hQ=1;a.bN=b;Zo(a);}
function Zo(a){var b;b=a.bN.ownerDocument;b.addEventListener("mousedown",BT(a,"handleEvent"),!!0);b.addEventListener("mouseup",BT(a,"handleEvent"),!!0);b.addEventListener("mousemove",BT(a,"handleEvent"),!!0);b.addEventListener("wheel",BT(a,"handleEvent"),!!0);b.addEventListener("keydown",BT(a,"handleEvent"),!!0);b.addEventListener("keyup",BT(a,"handleEvent"),!!0);b.addEventListener("keypress",BT(a,"handleEvent"),!!0);a.bN.addEventListener("touchstart",BT(a,"handleEvent"),!!1);a.bN.addEventListener("touchmove",
BT(a,"handleEvent"),!!1);a.bN.addEventListener("touchcancel",BT(a,"handleEvent"),!!1);a.bN.addEventListener("touchend",BT(a,"handleEvent"),!!1);}
function ZG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;a:{c=$rt_str(b.type);if(BA(c,B(118))){$rt_globals.window.focus();d=b.target;e=a.bN;if(d!==e?0:1){f=a.eL.data;if(!f[0]){a.hQ=1;a.iw=1;f[0]=1;g=LA(b.button);Vp(a.lD,g);a.pL.data[g]=1;a.kF.data[0]=0;a.kG.data[0]=0;if(!K$(a)){h=Hn(a,b,a.bN);i=HJ(a,b,a.bN);a.cj.data[0]=h;a.ci.data[0]=i;}else{f=a.cj.data;f[0]=f[0]+b.movementX|0;f=a.ci.data;f[0]=f[0]+b.movementY|0;}a.fG=FA();j=a.dd;if(j!==null)j.wF(a.cj.data[0],a.ci.data[0],0,LA(b.button));b.preventDefault();b.stopPropagation();break a;}}k
=Hn(a,b,e);l=HJ(a,b,a.bN);if(!(k>=0.0&&k<=Sk(A4L)&&l>=0.0&&l<=SI(A4L)))a.hQ=0;return;}if(BA(c,B(119))){if(!a.eL.data[0])return;ADm(a.lD,LA(b.button));f=a.eL;f.data[0]=a.lD.eb<=0?0:1;if(!K$(a)){FG(a,0,Hn(a,b,a.bN)-a.cj.data[0]|0,HJ(a,b,a.bN)-a.ci.data[0]|0);a.cj.data[0]=Hn(a,b,a.bN);a.ci.data[0]=HJ(a,b,a.bN);}else{FG(a,0,b.movementX|0,b.movementY|0);f=a.cj.data;f[0]=f[0]+b.movementX|0;f=a.ci.data;f[0]=f[0]+b.movementY|0;}a.fG=FA();a.eL.data[0]=0;j=a.dd;if(j!==null)j.sc(a.cj.data[0],a.ci.data[0],0,LA(b.button));}
else if(!BA(c,B(120))){if(BA(c,B(121))){if(a.dd!==null){m=AUR(b);a.dd.D7(0.0,m|0);}a.fG=FA();}else if(BA(c,B(122))){a.iw=1;n=b.changedTouches;o=0;p=n.length;while(o<p){j=n.item(o);q=j.identifier;e=a.fi;r=AC_(a);Cc(e,q,T9(r));a.eL.data[r]=1;a.cj.data[r]=Ha(a,j,a.bN);a.ci.data[r]=HG(a,j,a.bN);a.kF.data[r]=0;a.kG.data[r]=0;j=a.dd;if(j!==null)j.wF(a.cj.data[r],a.ci.data[r],r,0);o=o+1|0;}a.fG=FA();b.preventDefault();}}else{if(!K$(a)){h=Hn(a,b,a.bN);i=HJ(a,b,a.bN);FG(a,0,h-a.cj.data[0]|0,i-a.ci.data[0]|0);a.cj.data[0]
=h;a.ci.data[0]=i;}else{FG(a,0,b.movementX|0,b.movementY|0);f=a.cj.data;f[0]=f[0]+b.movementX|0;f=a.ci.data;f[0]=f[0]+b.movementY|0;}a.fG=FA();j=a.dd;if(j!==null){if(!a.eL.data[0])j.EW(a.cj.data[0],a.ci.data[0]);else j.Ca(a.cj.data[0],a.ci.data[0],0);}}}if(BA(c,B(123))){n=b.changedTouches;o=0;p=n.length;while(o<p){s=n.item(o);q=s.identifier;t=JU(Mb(a.fi,q));FG(a,t,Ha(a,s,a.bN)-a.cj.data[t]|0,HG(a,s,a.bN)-a.ci.data[t]|0);a.cj.data[t]=Ha(a,s,a.bN);a.ci.data[t]=HG(a,s,a.bN);j=a.dd;if(j!==null)j.Ca(a.cj.data[t],
a.ci.data[t],t);o=o+1|0;}a.fG=FA();b.preventDefault();}if(BA(c,B(124))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=JU(Mb(a.fi,q));HU(a.fi,q);a.eL.data[t]=0;h=Ha(a,s,a.bN);i=HG(a,s,a.bN);FG(a,t,h-a.cj.data[t]|0,i-a.ci.data[t]|0);f=a.cj.data;f[t]=h;v=a.ci.data;v[t]=i;j=a.dd;if(j!==null)j.sc(f[t],v[t],t,0);o=o+1|0;}a.fG=FA();b.preventDefault();}if(BA(c,B(125))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=JU(Mb(a.fi,q));HU(a.fi,q);a.eL.data[t]=0;h=Ha(a,
s,a.bN);i=HG(a,s,a.bN);FG(a,t,h-a.cj.data[t]|0,i-a.ci.data[t]|0);f=a.cj.data;f[t]=h;v=a.ci.data;v[t]=i;j=a.dd;if(j!==null)j.sc(f[t],v[t],t,0);o=o+1|0;}a.fG=FA();b.preventDefault();}}
function Td(a,b){var c,d,e,f,g,h,i;c=$rt_str(b.type);if(!(BA(c,B(126))&&a.hQ)){if(BA(c,B(127))&&a.hQ){d=b.charCode&65535;e=a.dd;if(e!==null)e.we(d);if(d==9){b.preventDefault();b.stopPropagation();}}else if(BA(c,B(128))&&a.hQ){f=YI(b.keyCode);e=a.n_;if(!f)d=e.hJ;else{g=e.fr;h=U(Bh(Bf(T(f),F(2135587861, 2654435769)),e.hg));a:{while(true){d=g.data[h];if(!d){h= -(h+1|0)|0;break a;}if(d==f)break;h=(h+1|0)&e.ff;}}d=h<0?0:1;}if(d)b.preventDefault();g=a.mC.data;if(g[f]){a.i2=a.i2-1|0;g[f]=0;}e=a.dd;if(e!==null)e.DU(f);if
(f==61){b.preventDefault();b.stopPropagation();}}}else{b:{f=YI(b.keyCode);h=0;switch(f){case 67:h=8;break b;case 112:h=127;break b;default:}}e=a.n_;if(!f)d=e.hJ;else{g=e.fr;d=U(Bh(Bf(T(f),F(2135587861, 2654435769)),e.hg));c:{while(true){i=g.data[d];if(!i){d= -(d+1|0)|0;break c;}if(i==f)break;d=(d+1|0)&e.ff;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.dd;if(e!==null){e.wT(f);a.dd.we(h);}}else{g=a.mC.data;if(!g[f]){a.i2=a.i2+1|0;g[f]=1;a.lz=1;a.oe.data[f]=1;e=a.dd;if(e!==null)e.wT(f);}}if
(f==61){b.preventDefault();b.stopPropagation();}}}
function AC_(a){var b,c,d;b=0;while(true){if(b>=20)return (-1);c=a.fi;if(b>=(-128)&&b<=127){E7();d=A1T.data[b+128|0];}else{d=new EA;d.fO=b;}if(!AEi(c,d,0))break;b=b+1|0;}return b;}
function Pc(a){var b,c,d;a:{if(a.iw){a.iw=0;b=0;while(true){c=a.pL.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.lz){a.lz=0;d=0;while(true){c=a.oe.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}}
function FG(a,b,c,d){a.kF.data[b]=c;a.kG.data[b]=d;}
function Hn(a,b,c){var d,e;d=c.width*1.0/c.clientWidth;e=(b.clientX-(MW(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;if(BA($rt_str(b.compatMode),B(129)))b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Ci(d)*0.5|0;}
function HJ(a,b,c){var d,e;d=c.height*1.0/c.clientHeight;e=(b.clientY-(QG(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;if(BA($rt_str(b.compatMode),B(129)))b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Ci(d)*0.5|0;}
function Ha(a,b,c){var d,e;d=c.width*1.0/c.clientWidth;e=(b.clientX-(MW(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;if(BA($rt_str(b.compatMode),B(129)))b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Ci(d)*0.5|0;}
function HG(a,b,c){var d,e;d=c.height*1.0/c.clientHeight;e=(b.clientY-(QG(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;if(BA($rt_str(b.compatMode),B(129)))b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Ci(d)*0.5|0;}
function QG(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function MW(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function V4(a,b){a.dd=b;}
function K$(a){return ASZ(a.bN)?1:0;}
function ASZ(b){if($rt_globals.document.pointerLockElement===$rt_globals.canvas||$rt_globals.document.mozPointerLockElement===$rt_globals.canvas){return true;}return false;}
function AGc(a,b){ZG(a,b);Td(a,b);}
var PH=G(0);
function ABH(){C.call(this);this.h2=null;}
function AV$(a){var b=new ABH();ARm(b,a);return b;}
function ARm(a,b){a.h2=b;}
function AAR(){C.call(this);this.y_=null;}
function AWL(){var a=new AAR();ANx(a);return a;}
function ANx(a){var b,c,d,e;b=new Gl;c=HX(16);b.eA=0;d=Bg(EJ,c);e=d.data;b.cq=d;b.ik=0.75;b.fj=e.length*0.75|0;a.y_=b;}
var QC=G(0);
var W6=G();
function AVL(){var a=new W6();AMg(a);return a;}
function AMg(a){}
var NA=G(0);
function AAL(){var a=this;C.call(a);a.zd=0;a.k$=0;a.xp=null;a.op=null;}
function AXt(){var a=new AAL();AJN(a);return a;}
function AJN(a){var b;a.zd=0;a.k$=1;b=new PO;b.kH=a;a.xp=b;a.op=B(42);}
function ABY(b){if("clipboard" in $rt_globals.navigator){$rt_globals.navigator.clipboard.writeText(b);}}
var El=G();
var A3$=null;var A4L=null;var A5N=null;var A5L=null;var A35=null;var A5M=null;var A37=null;var A4N=null;var A5K=null;var Re=G(0);
var QL=G(0);
function Wp(){C.call(this);this.un=null;}
function AYO(){var a=new Wp();AHa(a);return a;}
function AHa(a){a.un=null;a.un=AYx();}
function Tf(){C.call(this);this.io=null;}
function AX_(a){var b=new Tf();AId(b,a);return b;}
function AId(a,b){a.io=b;}
function Wa(a,b){var c,$$je;if(!BA(B(130),$rt_str(a.io.ft.d4.document.visibilityState))){b=a.io.kd;HF(b);a:{try{c=Pd(b);while(Pj(c)){ZM(Kc(c));}D9(b);break a;}catch($$e){$$je=Bw($$e);c=$$je;}D9(b);H(c);}b=a.io.hi.dB;if(b!==null)b.lO();}else{b=a.io.kd;HF(b);b:{try{c=Pd(b);while(Pj(c)){AB9(Kc(c));}D9(b);break b;}catch($$e){$$je=Bw($$e);c=$$je;}D9(b);H(c);}b=a.io.hi.dB;if(b!==null)b.iE();}}
function AQX(a,b){Wa(a,b);}
function Tg(){C.call(this);this.i0=null;}
function AV5(a){var b=new Tg();AGY(b,a);return b;}
function AGY(a,b){a.i0=b;}
function AEw(a,b){var c,d,e,f,g;c=a.i0.ft.d4.document.documentElement.clientWidth;b=a.i0;d=c-b.d3.nd|0;e=b.ft.d4.document.documentElement.clientHeight;b=a.i0;f=b.d3;c=e-f.p7|0;if(d>0&&c>0){if(b.et!==null){if(f.ls){g=$rt_globals.devicePixelRatio||1;d=d*g|0;c=c*g|0;}JG(a.i0.et,d,c);}return;}}
function AUj(a,b){AEw(a,b);}
var Be=G(BF);
function AN5(a){var b=new Be();AEK(b,a);return b;}
function AEK(a,b){a.c=1;a.d=1;a.f=b;}
var Uq=G();
function LC(b,c){var d,e,f,g,h,i,j;if(b<0){d=new Be;e=new O;e.b=D(16);I(e,e.a,B(131));N(e,e.a,b,10);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);d.c=1;d.d=1;d.f=f;H(d);}j=AJr(b/c)|0;if(2>j)j=2;h=Kp(j);if(h<=1073741824)return h;d=new Be;e=new O;e.b=D(16);I(e,e.a,B(132));N(e,e.a,b,10);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);d.c=1;d.d=1;d.f=f;H(d);}
var Pv=G(Ey);
var AZC=null;function ACP(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;if(e>=2&&e<=36){f=Bm(c,d);if(!f){b=new B8;b.c=1;b.d=1;b.f=B(77);H(b);}g=0;if(c>=0){h=b.e.data;if(c<h.length){a:{switch(h[c]){case 43:i=c+1|0;break a;case 45:g=1;i=c+1|0;break a;default:}i=c;}j=B2;k=T(e);b:{while(i<d){l=i+1|0;if(i<0)break b;h=b.e.data;if(i>=h.length)break b;m=Ij(h[i]);if(m<0){n=new B8;if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f){P();o=A32;}else if(!c&&d==b.e.data.length)o=b;else{o=new M;h=b.e;d=d-c|0;P();p=D(d);o.e=p;L(h,c,p,0,d);}P();if
(o===null)o=B(2);b=new O;b.b=D(16);I(b,b.a,B(78));I(b,b.a,o);q=new M;h=b.b;d=b.a;p=D(d);q.e=p;L(h,0,p,0,d);HZ(n,q);H(n);}if(m>=e){n=new B8;b=Kg(Fv(b,c,d));q=new O;J8(q);O_(q,B(79));CS(CS(EK(q,e),B(71)),b);IL(n,Cm(q));H(n);}j=CX(Bf(k,j),T(m));if(AJO(j,B2)){if(l==d&&Cn(j,F(0, 2147483648))&&g)return F(0, 2147483648);n=new B8;b=Kg(Ov(b,c,d));q=E2();CS(CS(q,B(80)),b);IL(n,Cm(q));H(n);}i=l;}if(g)j=AOL(j);return j;}b=new X;b.c=1;b.d=1;H(b);}}b=new X;b.c=1;b.d=1;H(b);}b=new B8;n=new O;n.b=D(16);I(n,n.a,B(81));N(n,n.a,
e,10);q=new M;h=n.b;d=n.a;P();p=D(d);q.e=p;L(h,0,p,0,d);b.c=1;b.d=1;b.f=q;H(b);}
function Fl(b){var c,d;if(Cn(b,B2))return 64;c=0;d=Bh(b,32);if(AJ8(d,B2))c=32;else d=b;b=Bh(d,16);if(Cn(b,B2))b=d;else c=c|16;d=Bh(b,8);if(Cn(d,B2))d=b;else c=c|8;b=Bh(d,4);if(Cn(b,B2))b=d;else c=c|4;d=Bh(b,2);if(Cn(d,B2))d=b;else c=c|2;if(AJ8(Bh(d,1),B2))c=c|1;return (64-c|0)-1|0;}
function DO(b,c){return Long_udiv(b, c);}
function TP(b,c){return Long_urem(b, c);}
function D3(b,c){return Long_ucompare(b, c);}
function ALw(){AZC=J($rt_longcls());}
var Yw=G();
function AJG(){return {};}
var KW=G(0);
function H5(){var a=this;C.call(a);a.m=null;a.f6=0;a.fW=0;a.du=0;a.xx=0;a.xR=0;a.eE=0;a.gl=0;a.bV=null;a.cL=null;a.ea=null;a.z9=null;a.x8=null;a.e_=null;a.dm=null;a.dV=0;a.jT=null;a.ga=null;a.iD=null;a.j9=null;a.wP=null;}
function AYo(a){var b=new H5();P8(b,a);return b;}
function P8(a,b){a.f6=1;a.fW=1;a.du=1;a.xx=1;a.xR=1;a.eE=1;a.gl=1;a.bV=Di(51,0.800000011920929);a.cL=Di(51,0.800000011920929);a.ea=Di(51,0.800000011920929);a.z9=Di(51,0.800000011920929);a.x8=Di(51,0.800000011920929);a.e_=Di(51,0.800000011920929);a.dm=Di(51,0.800000011920929);a.dV=0;a.jT=new $rt_globals.Float32Array(40000);a.ga=new $rt_globals.Int32Array(12000);a.iD=new $rt_globals.Int16Array(12000);a.j9=new $rt_globals.Int8Array(12000);a.wP=new $rt_globals.Uint8Array(240000);a.m=b;b.pixelStorei(37441,0);}
function L9(a,b){var c,d,e,f,g;if(A5J){c=(!Dg(b,Ei)?null:b.fN.W.data).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Float32Array(c,d,e);}if((b.g-b.h|0)>a.jT.length)a.jT=new $rt_globals.Float32Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.jT;g=Pi(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.jT;e=f-b.h|0;return c.subarray(0,e);}
function Pz(a,b){var c,d,e,f,g;if(A5J){c=(!Dg(b,Ei)?null:b.fH.W.data).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Int16Array(c,d,e);}if((b.g-b.h|0)>a.iD.length)a.iD=new $rt_globals.Int16Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.iD;g=ABm(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.iD;e=f-b.h|0;return c.subarray(0,e);}
function R5(a,b){var c,d,e,f,g;if(A5J){c=(!Dg(b,Ei)?null:b.mH()).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Int32Array(c,d,e);}if((b.g-b.h|0)>a.ga.length)a.ga=new $rt_globals.Int32Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.ga;g=b.lS(e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.ga;e=f-b.h|0;return c.subarray(0,e);}
function K5(a,b){var c,d,e,f,g;if(A5J)return !Dg(b,Ei)?null:b.W.data;if((b.g-b.h|0)>a.j9.length)a.j9=new $rt_globals.Int8Array(b.g-b.h|0);c=b.h;d=0;while(true){e=b.g;if(c>=e)break;f=a.j9;g=SS(b,c);d;f[d]=g;c=c+1|0;d=d+1|0;}f=a.j9;c=e-b.h|0;return f.subarray(0,c);}
function ATN(a,b){if((b.g-b.h|0)>a.ga.length)a.ga=new $rt_globals.Int32Array(b.g-b.h|0);}
function AFb(a,b){var c,d,e,f,g;c=a.dm;d=a.dV;if(!d)c=!c.M?null:c.K;else{e=c.I;f=U(Bh(Bf(T(d),F(2135587861, 2654435769)),c.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.L;}}c=f<0?null:c.J.data[f];}c=c;if(!b)c=!c.M?null:c.K;else{e=c.I;d=U(Bh(Bf(T(b),F(2135587861, 2654435769)),c.N));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.L;}}c=d<0?null:c.J.data[d];}Bz();return c===null?null:c.O;}
function AMb(a,b){a.m.activeTexture(b);}
function ALl(a,b,c){var d,e,f,g,h,i;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();h=d===null?null:d.O;d=a.cL;if(!c)d=!d.M?null:d.K;else{e=d.I;b=U(Bh(Bf(T(c),F(2135587861, 2654435769)),d.N));b:{while(true){g=e.data[b];if(!g){b= -(b+1|0)|0;break b;}if(g==c)break;b=(b+1|0)&d.L;}}d=b<0?null:d.J.data[b];}i=d===null?null:d.O;a.m.attachShader(h,i);}
function AUc(a,b,c){var d,e,f,g,h;d=a.m;e=a.ea;if(!c)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(c),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.bindBuffer(b,e);}
function AH6(a,b,c){var d,e,f,g,h;d=a.m;e=a.e_;if(!c)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(c),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.bindTexture(b,e);}
function AM5(a,b,c){a.m.blendFunc(b,c);}
function AKS(a,b,c,d,e){a.m.blendFuncSeparate(b,c,d,e);}
function Oy(a,b,c,d,e){var f,g;if(d instanceof Eo){f=a.m;d=L9(a,d);f.bufferData(b,d,e);}else if(d instanceof GR){f=a.m;d=R5(a,d);f.bufferData(b,d,e);}else if(d instanceof GU){f=a.m;d=Pz(a,d);f.bufferData(b,d,e);}else if(d instanceof E$){f=a.m;g=K5(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Ba;f.c=1;f.d=1;f.f=B(133);H(f);}a.m.bufferData(b,c,e);}}
function Ox(a,b,c,d,e){var f,g;if(e instanceof Eo){f=a.m;e=L9(a,e);f.bufferSubData(b,c,e);}else if(e instanceof GR){f=a.m;g=R5(a,e);f.bufferSubData(b,c,g);}else if(e instanceof GU){f=a.m;e=Pz(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof E$)){f=new Ba;f.c=1;f.d=1;f.f=B(133);H(f);}f=a.m;e=K5(a,e);f.bufferSubData(b,c,e);}}
function ASx(a,b){a.m.clear(b);}
function AIh(a,b,c,d,e){a.m.clearColor(b,c,d,e);}
function AMa(a,b){var c,d,e,f;c=a.cL;if(!b)c=!c.M?null:c.K;else{d=c.I;e=U(Bh(Bf(T(b),F(2135587861, 2654435769)),c.N));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.L;}}c=e<0?null:c.J.data[e];}Bz();c=c===null?null:c.O;a.m.compileShader(c);}
function AUQ(a){var b,c;b=a.m.createProgram();c=a.f6;a.f6=c+1|0;Cc(a.bV,c,Cg(b));return c;}
function AQk(a,b){var c,d;c=a.m.createShader(b);d=a.fW;a.fW=d+1|0;Cc(a.cL,d,Cg(c));return d;}
function ASy(a,b){a.m.depthMask(!!b);}
function AP7(a,b){a.m.disable(b);}
function AO2(a,b){a.m.disableVertexAttribArray(b);}
function AIU(a,b,c,d){a.m.drawArrays(b,c,d);}
function AMN(a,b,c,d,e){var f,g;f=a.m;g=e.h;f.drawElements(b,c,d,g);}
function AOE(a,b,c,d,e){a.m.drawElements(b,c,d,e);}
function AT0(a,b){a.m.enable(b);}
function AS6(a,b){a.m.enableVertexAttribArray(b);}
function XM(a){var b,c;b=a.m.createBuffer();c=a.du;a.du=c+1|0;Cc(a.ea,c,Cg(b));return c;}
function AFa(a,b){a.m.generateMipmap(b);}
function AT$(a){var b,c;b=a.m.createTexture();c=a.eE;a.eE=c+1|0;Cc(a.e_,c,Cg(b));return c;}
function MY(a,b,c,d,e){var f,g,h,i,j;f=a.m;g=a.bV;if(!b)g=!g.M?null:g.K;else{h=g.I;i=U(Bh(Bf(T(b),F(2135587861, 2654435769)),g.N));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.L;}}g=i<0?null:g.J.data[i];}Bz();g=g===null?null:g.O;g=f.getActiveAttrib(g,c);Ej(d,g.size);Ej(e,g.type);d.h=0;d.g=d.z;d.w=(-1);e.h=0;e.g=e.z;e.w=(-1);return $rt_str(g.name);}
function Pn(a,b,c,d,e){var f,g,h,i,j;f=a.m;g=a.bV;if(!b)g=!g.M?null:g.K;else{h=g.I;i=U(Bh(Bf(T(b),F(2135587861, 2654435769)),g.N));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.L;}}g=i<0?null:g.J.data[i];}Bz();g=g===null?null:g.O;g=f.getActiveUniform(g,c);Ej(d,g.size);Ej(e,g.type);d.h=0;d.g=d.z;d.w=(-1);e.h=0;e.g=e.z;e.w=(-1);return $rt_str(g.name);}
function AJY(a,b,c){var d,e,f,g,h;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();h=d===null?null:d.O;return a.m.getAttribLocation(h,$rt_ustr(c));}
function K1(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new Ba;c.c=1;c.d=1;c.f=B(134);H(c);}L4(c,0,a.m.getParameter(b));c.h=0;c.g=c.z;c.w=(-1);}
function AUJ(a,b){var c,d,e,f,g;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;return $rt_str(c.getProgramInfoLog(d));}
function P4(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.m;f=a.bV;if(!b)f=!f.M?null:f.K;else{g=f.I;h=U(Bh(Bf(T(b),F(2135587861, 2654435769)),f.N));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.L;}}f=h<0?null:f.J.data[h];}Bz();f=f===null?null:f.O;Ej(d,e.getProgramParameter(f,c));}else{f=a.m;e=a.bV;if(!b)e=!e.M?null:e.K;else{g=e.I;i=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e.N));b:{while(true){h=g.data[i];if(!h){i= -(i+1|0)|0;break b;}if(h==b)break;i=(i+1|0)&
e.L;}}e=i<0?null:e.J.data[i];}Bz();e=e===null?null:e.O;Ej(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.h=0;d.g=d.z;d.w=(-1);}
function ANh(a,b){var c,d,e,f,g;c=a.m;d=a.cL;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;return $rt_str(c.getShaderInfoLog(d));}
function NW(a,b,c,d){var e,f,g,h,i;if(c!=35713&&c!=35712){e=a.m;f=a.cL;if(!b)f=!f.M?null:f.K;else{g=f.I;h=U(Bh(Bf(T(b),F(2135587861, 2654435769)),f.N));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.L;}}f=h<0?null:f.J.data[h];}Bz();f=f===null?null:f.O;Ej(d,e.getShaderParameter(f,c));}else{f=a.m;e=a.cL;if(!b)e=!e.M?null:e.K;else{g=e.I;h=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e.N));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h=(h+1|0)&e.L;}}e=h<0
?null:e.J.data[h];}Bz();e=e===null?null:e.O;Ej(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.h=0;d.g=d.z;d.w=(-1);}
function AKE(a,b){return $rt_str(a.m.getParameter(b));}
function AKz(a,b,c){var d,e,f,g,h,i;d=a.m;e=a.bV;if(!b)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d=d.getUniformLocation(e,$rt_ustr(c));if(d===null)return (-1);c=a.dm;if(!b)c=!c.M?null:c.K;else{i=c.I;h=U(Bh(Bf(T(b),F(2135587861, 2654435769)),c.N));b:{while(true){g=i.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&c.L;}}c=h<0?null
:c.J.data[h];}c=c;if(c===null){c=Di(51,0.800000011920929);Cc(a.dm,b,c);}h=a.gl;a.gl=h+1|0;Cc(c,h,Cg(d));return h;}
function AGP(a,b){var c,d,e,f,g;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c.linkProgram(d);}
function AIT(a,b,c){a.m.pixelStorei(b,c);}
function AE_(a,b,c){var d,e,f,g,h;d=a.m;e=a.cL;if(!b)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.shaderSource(e,$rt_ustr(c));}
function Qj(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;if(j===null){j=a.m;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.g>4){if(!A5J)l=!(j instanceof Eo)?$rt_globals.Uint8Array.from(K5(a,j)):L9(a,j);else{m=!Dg(j,Ei)?null:j.W.data;if(!(j instanceof Eo)){n=j.g-j.h|0;o=m.byteOffset+j.h|0;l=new $rt_globals.Uint8Array(m.buffer,o,n);}else{n=j.g-j.h|0;o=m.byteOffset+j.h|0;l=new $rt_globals.Float32Array(m.buffer,o,n);}}a.m.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=ACE(j,0);I3();j=A4T;if(!p)j=!j.M?null:j.K;else{q=j.I;n
=U(Bh(Bf(T(p),F(2135587861, 2654435769)),j.N));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.L;}}j=n<0?null:j.J.data[n];}k=j;r=k.eX;if(r===null&&k.by!==null?1:0){j=a.m;s=k.by.jW;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.hc!==null?1:0){j=a.m;s=k.hc;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.iL!==null?1:0){j=a.m;s=k.iL;j.texImage2D(b,c,d,h,i,s);}else{j=a.m;Fn(k);s=k.eX;j.texImage2D(b,c,d,h,i,s);}}}
function AN2(a,b,c,d){a.m.texParameterf(b,c,d);}
function APJ(a,b,c,d){var e,f;e=a.m;f=d;e.texParameterf(b,c,f);}
function AP6(a,b,c){var d,e,f,g,h,i;d=a.dm;e=a.dV;if(!e)d=!d.M?null:d.K;else{f=d.I;g=U(Bh(Bf(T(e),F(2135587861, 2654435769)),d.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.L;}}d=g<0?null:d.J.data[g];}d=d;if(!b)d=!d.M?null:d.K;else{f=d.I;g=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.L;}}d=g<0?null:d.J.data[g];}Bz();i=d===null?null:d.O;a.m.uniform1i(i,c);}
function AKD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;g=a.dm;f=a.dV;if(!f)g=!g.M?null:g.K;else{h=g.I;i=U(Bh(Bf(T(f),F(2135587861, 2654435769)),g.N));a:{while(true){c=h.data[i];if(!c){i= -(i+1|0)|0;break a;}if(c==f)break;i=(i+1|0)&g.L;}}g=i<0?null:g.J.data[i];}g=g;if(!b)g=!g.M?null:g.K;else{h=g.I;c=U(Bh(Bf(T(b),F(2135587861, 2654435769)),g.N));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.L;}}g=c<0?null:g.J.data[c];}Bz();j=g===null?null:g.O;g=a.m;k="uniformMatrix4fv";l=!!d;if(e===
null)m=null;else{e=e.data;b=e.length;m=new $rt_globals.Array(b);c=0;while(c<b){n=e[c];c;m[c]=n;c=c+1|0;}}g[k](j,l,m);}
function AGS(a,b){var c,d,e,f,g;a.dV=b;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c.useProgram(d);}
function ANE(a,b,c,d,e,f,g){a.m.vertexAttribPointer(b,c,d,!!e,f,g);}
function AFw(a,b,c,d,e){a.m.viewport(b,c,d,e);}
var PG=G(0);
function L6(){var a=this;H5.call(a);a.P=null;a.B_=null;a.A$=0;a.w6=null;a.xG=0;a.y2=null;a.wk=0;a.jL=null;a.jx=0;a.Aq=null;}
function AYD(a){var b=new L6();SR(b,a);return b;}
function SR(a,b){P8(a,b);a.B_=Di(51,0.800000011920929);a.A$=1;a.w6=Di(51,0.800000011920929);a.xG=1;a.y2=Di(51,0.800000011920929);a.wk=1;a.jL=Di(51,0.800000011920929);a.jx=1;a.Aq=new $rt_globals.Uint32Array(12000);a.P=b;}
function AK2(a,b){var c,d,e,f,g;c=a.P;d=a.jL;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c.bindVertexArray(d);}
function AOT(a,b,c,d,e){a.P.drawArraysInstanced(b,c,d,e);}
function AU$(a,b,c,d,e,f){a.P.drawElementsInstanced(b,c,d,e,f);}
function APm(a,b,c){var d,e,f,g;d=c.h;e=0;while(e<b){f=a.P.createVertexArray();g=a.jx;a.jx=g+1|0;Cc(a.jL,g,Cg(f));Ej(c,g);e=e+1|0;}BU(c,d);}
function AMT(a,b,c){if(b!=34045)K1(a,b,c);else{L4(c,0,a.P.getParameter(b));c.h=0;c.g=c.z;c.w=(-1);}}
var M8=G(L6);
function AJ4(a,b){var c,d,e,f,g,h,i,j;c=a.P;d=a.jL;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c.bindVertexArray(d);b=a.P.getError();if(!b)return;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function AHs(a,b,c,d,e){var f,g,h,i,j,k;a.P.drawArraysInstanced(b,c,d,e);b=a.P.getError();if(!b)return;f=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AT8(a,b,c,d,e,f){var g,h,i,j,k,l;a.P.drawElementsInstanced(b,c,d,e,f);b=a.P.getError();if(!b)return;g=new Ba;h=Bj(b,4);i=new O;i.b=D(16);I(i,i.a,B(135));N(i,i.a,b,10);I(i,i.a,B(58));b=i.a;if(h===null)h=B(2);I(i,b,h);j=new M;k=i.b;c=i.a;P();l=D(c);j.e=l;L(k,0,l,0,c);g.c=1;g.d=1;g.f=j;H(g);}
function AGH(a,b,c){var d,e,f,g,h,i,j,k;d=c.h;e=0;while(e<b){f=a.P.createVertexArray();g=a.jx;a.jx=g+1|0;Cc(a.jL,g,Cg(f));Ej(c,g);e=e+1|0;}BU(c,d);b=a.P.getError();if(!b)return;c=new Ba;h=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(h===null)h=B(2);I(f,b,h);i=new M;j=f.b;e=f.a;P();k=D(e);i.e=k;L(j,0,k,0,e);c.c=1;c.d=1;c.f=i;H(c);}
function AGm(a,b){var c,d,e,f,g,h,i;a.m.activeTexture(b);b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AHn(a,b,c){var d,e,f,g,h,i,j,k;d=a.m;e=a.e_;if(!c)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(c),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.bindTexture(b,e);b=a.P.getError();if(!b)return;d=new Ba;i=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(i===null)i=B(2);I(e,b,i);j=new M;f=e.b;c=e.a;P();k=D(c);j.e=k;L(f,0,k,0,c);d.c=1;d.d=1;d.f=j;H(d);}
function AST(a,b,c){var d,e,f,g,h,i;a.m.blendFunc(b,c);b=a.P.getError();if(!b)return;d=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function ASB(a,b){var c,d,e,f,g,h,i;a.m.clear(b);b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AN7(a,b,c,d,e){var f,g,h,i,j,k,l,m;a.m.clearColor(b,c,d,e);f=a.P.getError();if(!f)return;g=new Ba;h=Bj(f,4);i=new O;i.b=D(16);I(i,i.a,B(135));N(i,i.a,f,10);I(i,i.a,B(58));f=i.a;if(h===null)h=B(2);I(i,f,h);j=new M;k=i.b;l=i.a;P();m=D(l);j.e=m;L(k,0,m,0,l);g.c=1;g.d=1;g.f=j;H(g);}
function AGE(a,b){var c,d,e,f,g,h,i;a.m.depthMask(!!b);b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AS$(a,b){var c,d,e,f,g,h,i;a.m.disable(b);b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AJw(a,b,c,d){var e,f,g,h,i,j;a.m.drawArrays(b,c,d);b=a.P.getError();if(!b)return;e=new Ba;f=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new M;i=g.b;c=g.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AQv(a,b,c,d,e){var f,g,h,i,j,k;f=a.m;g=e.h;f.drawElements(b,c,d,g);b=a.P.getError();if(!b)return;e=new Ba;h=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(h===null)h=B(2);I(f,b,h);i=new M;j=f.b;c=f.a;P();k=D(c);i.e=k;L(j,0,k,0,c);e.c=1;e.d=1;e.f=i;H(e);}
function ARy(a,b){var c,d,e,f,g,h,i;a.m.enable(b);b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AE0(a,b){return $rt_str(a.m.getParameter(b));}
function AFU(a,b,c){var d,e,f,g,h,i;a.m.pixelStorei(b,c);b=a.P.getError();if(!b)return;d=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AOu(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o;Qj(a,b,c,d,e,f,g,h,i,j);b=a.P.getError();if(!b)return;j=new Ba;k=Bj(b,4);l=new O;l.b=D(16);I(l,l.a,B(135));N(l,l.a,b,10);I(l,l.a,B(58));b=l.a;if(k===null)k=B(2);I(l,b,k);m=new M;n=l.b;c=l.a;P();o=D(c);m.e=o;L(n,0,o,0,c);j.c=1;j.d=1;j.f=m;H(j);}
function AJk(a,b,c,d){var e,f,g,h,i,j;a.m.texParameterf(b,c,d);b=a.P.getError();if(!b)return;e=new Ba;f=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new M;i=g.b;c=g.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AKX(a,b,c,d,e){var f,g,h,i,j,k;a.m.viewport(b,c,d,e);b=a.P.getError();if(!b)return;f=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function ANm(a,b,c){var d,e,f,g,h,i,j,k;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();h=d===null?null:d.O;d=a.cL;if(!c)d=!d.M?null:d.K;else{e=d.I;b=U(Bh(Bf(T(c),F(2135587861, 2654435769)),d.N));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.L;}}d=b<0?null:d.J.data[b];}i=d===null?null:d.O;a.m.attachShader(h,i);b=a.P.getError();if
(!b)return;d=new Ba;j=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(j===null)j=B(2);I(h,b,j);i=new M;e=h.b;c=h.a;P();k=D(c);i.e=k;L(e,0,k,0,c);d.c=1;d.d=1;d.f=i;H(d);}
function ATJ(a,b,c){var d,e,f,g,h,i,j,k;d=a.m;e=a.ea;if(!c)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(c),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.bindBuffer(b,e);b=a.P.getError();if(!b)return;d=new Ba;i=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(i===null)i=B(2);I(e,b,i);j=new M;f=e.b;c=e.a;P();k=D(c);j.e=k;L(f,0,k,0,c);d.c=1;d.d=1;d.f=j;H(d);}
function AJ5(a,b,c,d,e){var f,g,h,i,j,k;a.m.blendFuncSeparate(b,c,d,e);b=a.P.getError();if(!b)return;f=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AOj(a,b,c,d,e){var f,g,h,i,j;Oy(a,b,c,d,e);b=a.P.getError();if(!b)return;d=new Ba;f=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new M;i=g.b;c=g.a;P();j=D(c);h.e=j;L(i,0,j,0,c);d.c=1;d.d=1;d.f=h;H(d);}
function ATE(a,b,c,d,e){var f,g,h,i,j;Ox(a,b,c,d,e);b=a.P.getError();if(!b)return;e=new Ba;f=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new M;i=g.b;c=g.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function APc(a,b){var c,d,e,f,g,h,i,j;c=a.cL;if(!b)c=!c.M?null:c.K;else{d=c.I;e=U(Bh(Bf(T(b),F(2135587861, 2654435769)),c.N));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.L;}}c=e<0?null:c.J.data[e];}Bz();g=c===null?null:c.O;a.m.compileShader(g);b=a.P.getError();if(!b)return;c=new Ba;h=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(h===null)h=B(2);I(g,b,h);i=new M;d=g.b;e=g.a;P();j=D(e);i.e=j;L(d,0,j,0,e);c.c=1;c.d=1;c.f=i;H(c);}
function AUP(a){var b,c,d,e,f,g,h,i;b=a.m.createProgram();c=a.f6;a.f6=c+1|0;Cc(a.bV,c,Cg(b));d=a.P.getError();if(!d)return c;b=new Ba;e=Bj(d,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,d,10);I(f,f.a,B(58));d=f.a;if(e===null)e=B(2);I(f,d,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);b.c=1;b.d=1;b.f=g;H(b);}
function AQM(a,b){var c,d,e,f,g,h,i;c=a.m.createShader(b);d=a.fW;a.fW=d+1|0;Cc(a.cL,d,Cg(c));b=a.P.getError();if(!b)return d;c=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;d=f.a;P();i=D(d);g.e=i;L(h,0,i,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function AUF(a,b){var c,d,e,f,g,h,i;a.m.disableVertexAttribArray(b);b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AG3(a,b,c,d,e){var f,g,h,i,j,k;a.m.drawElements(b,c,d,e);b=a.P.getError();if(!b)return;f=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AQP(a,b){var c,d,e,f,g,h,i;a.m.enableVertexAttribArray(b);b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function ASF(a,b){var c,d,e,f,g,h,i;a.m.generateMipmap(b);b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AL5(a,b,c,d,e){var f,g,h,i;f=MY(a,b,c,d,e);b=a.P.getError();if(!b)return f;d=new Ba;g=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(g===null)g=B(2);I(e,b,g);f=new M;h=e.b;c=e.a;P();i=D(c);f.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function ASz(a,b,c,d,e){var f,g,h,i;f=Pn(a,b,c,d,e);b=a.P.getError();if(!b)return f;d=new Ba;g=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(g===null)g=B(2);I(e,b,g);f=new M;h=e.b;c=e.a;P();i=D(c);f.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function AOH(a,b,c){var d,e,f,g,h,i,j;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();h=d===null?null:d.O;b=a.m.getAttribLocation(h,$rt_ustr(c));f=a.P.getError();if(!f)return b;c=new Ba;i=Bj(f,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,f,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);h=new M;e=d.b;f=d.a;P();j=D(f);h.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f
=h;H(c);}
function AKb(a,b,c){var d,e,f,g,h,i;if(b!=34045)K1(a,b,c);else{L4(c,0,a.P.getParameter(b));c.h=0;c.g=c.z;c.w=(-1);}b=a.P.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AIm(a,b,c,d){var e,f,g,h,i;P4(a,b,c,d);b=a.P.getError();if(!b)return;d=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AFT(a,b){var c,d,e,f,g,h,i,j;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c=$rt_str(c.getProgramInfoLog(d));b=a.P.getError();if(!b)return c;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;H(c);}
function AUN(a,b,c,d){var e,f,g,h,i;NW(a,b,c,d);b=a.P.getError();if(!b)return;d=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AGs(a,b){var c,d,e,f,g,h,i,j;c=a.m;d=a.cL;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c=$rt_str(c.getShaderInfoLog(d));b=a.P.getError();if(!b)return c;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;H(c);}
function AFV(a,b,c){var d,e,f,g,h,i,j;d=a.m;e=a.bV;if(!b)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;c=d.getUniformLocation(e,$rt_ustr(c));if(c===null)h=(-1);else{d=a.dm;if(!b)d=!d.M?null:d.K;else{f=d.I;h=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&d.L;}}d=h<0?null
:d.J.data[h];}d=d;if(d===null){d=Di(51,0.800000011920929);Cc(a.dm,b,d);}h=a.gl;a.gl=h+1|0;Cc(d,h,Cg(c));}b=a.P.getError();if(!b)return h;c=new Ba;i=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);e=new M;f=d.b;h=d.a;P();j=D(h);e.e=j;L(f,0,j,0,h);c.c=1;c.d=1;c.f=e;H(c);}
function AT2(a,b){var c,d,e,f,g,h,i,j;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c.linkProgram(d);b=a.P.getError();if(!b)return;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function AFQ(a,b,c){var d,e,f,g,h,i,j;d=a.m;e=a.cL;if(!b)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.shaderSource(e,$rt_ustr(c));b=a.P.getError();if(!b)return;c=new Ba;i=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);e=new M;f=d.b;g=d.a;P();j=D(g);e.e=j;L(f,0,j,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function AGO(a,b,c,d){var e,f,g,h,i,j,k;e=a.m;f=d;e.texParameterf(b,c,f);b=a.P.getError();if(!b)return;e=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);e.c=1;e.d=1;e.f=i;H(e);}
function AHH(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.dm;e=a.dV;if(!e)d=!d.M?null:d.K;else{f=d.I;g=U(Bh(Bf(T(e),F(2135587861, 2654435769)),d.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.L;}}d=g<0?null:d.J.data[g];}d=d;if(!b)d=!d.M?null:d.K;else{f=d.I;e=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));b:{while(true){h=f.data[e];if(!h){e= -(e+1|0)|0;break b;}if(h==b)break;e=(e+1|0)&d.L;}}d=e<0?null:d.J.data[e];}Bz();i=d===null?null:d.O;a.m.uniform1i(i,c);b=a.P.getError();if(!b)return;d
=new Ba;i=Bj(b,4);j=new O;j.b=D(16);I(j,j.a,B(135));N(j,j.a,b,10);I(j,j.a,B(58));b=j.a;if(i===null)i=B(2);I(j,b,i);k=new M;f=j.b;c=j.a;P();l=D(c);k.e=l;L(f,0,l,0,c);d.c=1;d.d=1;d.f=k;H(d);}
function AVg(a,b){var c,d,e,f,g,h,i,j;a.dV=b;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c.useProgram(d);b=a.P.getError();if(!b)return;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function ARb(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.m.vertexAttribPointer(b,c,d,!!e,f,g);b=a.P.getError();if(!b)return;h=new Ba;i=Bj(b,4);j=new O;j.b=D(16);I(j,j.a,B(135));N(j,j.a,b,10);I(j,j.a,B(58));b=j.a;if(i===null)i=B(2);I(j,b,i);k=new M;l=j.b;c=j.a;P();m=D(c);k.e=m;L(l,0,m,0,c);h.c=1;h.d=1;h.f=k;H(h);}
function Oq(){var a=this;C.call(a);a.p4=0;a.oJ=0;a.o7=0;a.wA=null;a.y6=null;a.fT=null;a.v_=B(136);}
function A56(a,b,c,d){var e=new Oq();YG(e,a,b,c,d);return e;}
function YG(a,b,c,d,e){a.v_=B(136);Mm();if(b===A57){F5();a.fT=A58;}else if(b===A59){F5();a.fT=A58;}else if(b===A5$){F5();a.fT=A5_;}else if(b===A6a){F5();a.fT=A5_;}else if(b!==A54){F5();a.fT=A6b;}else{F5();a.fT=A6c;}b=a.fT;F5();if(b===A58)Kt(a,B(137),c);else if(b===A6c)Kt(a,B(138),c);else if(b===A5_)Kt(a,B(139),c);else{a.p4=(-1);a.oJ=(-1);a.o7=(-1);d=B(42);e=B(42);}a.wA=d;a.y6=e;}
function Kt(a,b,c){var d,e,f,g,h,i,j,k,l;d=OA(Gb(b,0),c);if(G9(d)){b=d.dp;e=b.dn;if(!e){b=new BH;b.c=1;b.d=1;B9(b);H(b);}f=Bm(1,b.d0);if(f>=0){b=new Y;P();c=new O;CI(c);c.b=D(16);N(c,c.a,1,10);g=new M;h=c.b;i=c.a;j=D(i);g.e=j;L(h,0,j,0,i);b.c=1;b.d=1;b.f=g;H(b);}h=b.bI.data;if(h[2]<0)g=null;else{c=b.gj;if(!e){b=new BH;b.c=1;b.d=1;B9(b);H(b);}if(f>=0){b=new Y;P();c=new O;CI(c);c.b=D(16);N(c,c.a,1,10);R$(b,Cm(c));H(b);}g=Fv(c,h[2],YH(b,1));}h=(YL(g,B(140))).data;a.p4=Kn(a,h[0],2);k=h.length;a.oJ=k<2?0:Kn(a,h[1],
0);a.o7=k<3?0:Kn(a,h[2],0);}else{g=A3$;b=new O;b.b=D(16);I(b,b.a,B(141));I(b,b.a,c);l=new M;h=b.b;i=b.a;P();j=D(i);l.e=j;L(h,0,j,0,i);if(g.jF>=2){if(A5R===null){c=new Cu;c.b6=AZW;b=new O;b.b=D(16);c.ba=b;c.b4=D(32);c.cm=0;Ct();c.ce=A5l;A5R=c;}g=A5R;b=new O;b.b=D(16);I(b,b.a,B(136));I(b,b.a,B(71));I(b,b.a,l);c=new M;h=b.b;i=b.a;j=D(i);c.e=j;L(h,0,j,0,i);b=g.ba;I(b,b.a,c);i=b.a;Bc(b,i,i+1|0);b.b.data[i]=10;Cl(g);}a.p4=2;a.oJ=0;a.o7=0;}}
function Kn(a,b,c){var d,e,f,g,h,i,j,$$je;a:{try{d=Cs(b);}catch($$e){$$je=Bw($$e);if($$je instanceof B8){break a;}else{throw $$e;}}return d;}e=A3$;f=new O;f.b=D(16);I(f,f.a,B(142));I(f,f.a,b);I(f,f.a,B(143));N(f,f.a,c,10);b=new M;g=f.b;h=f.a;P();i=D(h);b.e=i;L(g,0,i,0,h);if(e.jF>=1){if(A5k===null){e=new Cu;e.b6=AZX;f=new O;f.b=D(16);e.ba=f;e.b4=D(32);e.cm=0;Ct();e.ce=A5l;A5k=e;}e=A5k;f=new O;f.b=D(16);I(f,f.a,B(144));I(f,f.a,B(71));I(f,f.a,b);b=new M;i=f.b;h=f.a;g=D(h);b.e=g;L(i,0,g,0,h);j=e.ba;I(j,j.a,b);h
=j.a;Bc(j,h,h+1|0);j.b.data[h]=10;Cl(e);}return c;}
var C7=G(BC);
var A57=null;var A5$=null;var A6d=null;var A6a=null;var A54=null;var A59=null;var A6e=null;function Mm(){Mm=W(C7);AIJ();}
function AIJ(){var b,c,d,e,f,g;b=new C7;Mm();b.t=B(4);b.q=0;A57=b;c=new C7;c.t=B(145);c.q=1;A5$=c;d=new C7;d.t=B(146);d.q=2;A6d=d;e=new C7;e.t=B(147);e.q=3;A6a=e;f=new C7;f.t=B(148);f.q=4;A54=f;g=new C7;g.t=B(149);g.q=5;A59=g;A6e=R(C7,[b,c,d,e,f,g]);}
var QR=G(0);
function QD(){C.call(this);this.wH=null;}
function AJo(a){}
var R2=G(H5);
function ASa(a,b){var c,d,e,f,g,h,i;a.m.activeTexture(b);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AUo(a,b,c){var d,e,f,g,h,i,j,k;d=a.m;e=a.e_;if(!c)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(c),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.bindTexture(b,e);b=a.m.getError();if(!b)return;d=new Ba;i=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(i===null)i=B(2);I(e,b,i);j=new M;f=e.b;c=e.a;P();k=D(c);j.e=k;L(f,0,k,0,c);d.c=1;d.d=1;d.f=j;H(d);}
function AQF(a,b,c){var d,e,f,g,h,i;a.m.blendFunc(b,c);b=a.m.getError();if(!b)return;d=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AIt(a,b){var c,d,e,f,g,h,i;a.m.clear(b);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AJh(a,b,c,d,e){var f,g,h,i,j,k,l,m;a.m.clearColor(b,c,d,e);f=a.m.getError();if(!f)return;g=new Ba;h=Bj(f,4);i=new O;i.b=D(16);I(i,i.a,B(135));N(i,i.a,f,10);I(i,i.a,B(58));f=i.a;if(h===null)h=B(2);I(i,f,h);j=new M;k=i.b;l=i.a;P();m=D(l);j.e=m;L(k,0,m,0,l);g.c=1;g.d=1;g.f=j;H(g);}
function AOi(a,b){var c,d,e,f,g,h,i;a.m.depthMask(!!b);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AUX(a,b){var c,d,e,f,g,h,i;a.m.disable(b);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AL_(a,b,c,d){var e,f,g,h,i,j;a.m.drawArrays(b,c,d);b=a.m.getError();if(!b)return;e=new Ba;f=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new M;i=g.b;c=g.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AUw(a,b,c,d,e){var f,g,h,i,j,k;f=a.m;g=e.h;f.drawElements(b,c,d,g);b=a.m.getError();if(!b)return;e=new Ba;h=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(h===null)h=B(2);I(f,b,h);i=new M;j=f.b;c=f.a;P();k=D(c);i.e=k;L(j,0,k,0,c);e.c=1;e.d=1;e.f=i;H(e);}
function AG8(a,b){var c,d,e,f,g,h,i;a.m.enable(b);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function ANc(a,b){return $rt_str(a.m.getParameter(b));}
function APh(a,b,c){var d,e,f,g,h,i;a.m.pixelStorei(b,c);b=a.m.getError();if(!b)return;d=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AKd(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o;Qj(a,b,c,d,e,f,g,h,i,j);b=a.m.getError();if(!b)return;j=new Ba;k=Bj(b,4);l=new O;l.b=D(16);I(l,l.a,B(135));N(l,l.a,b,10);I(l,l.a,B(58));b=l.a;if(k===null)k=B(2);I(l,b,k);m=new M;n=l.b;c=l.a;P();o=D(c);m.e=o;L(n,0,o,0,c);j.c=1;j.d=1;j.f=m;H(j);}
function AJF(a,b,c,d){var e,f,g,h,i,j;a.m.texParameterf(b,c,d);b=a.m.getError();if(!b)return;e=new Ba;f=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new M;i=g.b;c=g.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AUK(a,b,c,d,e){var f,g,h,i,j,k;a.m.viewport(b,c,d,e);b=a.m.getError();if(!b)return;f=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AFO(a,b,c){var d,e,f,g,h,i,j,k;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();h=d===null?null:d.O;d=a.cL;if(!c)d=!d.M?null:d.K;else{e=d.I;b=U(Bh(Bf(T(c),F(2135587861, 2654435769)),d.N));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.L;}}d=b<0?null:d.J.data[b];}i=d===null?null:d.O;a.m.attachShader(h,i);b=a.m.getError();if
(!b)return;d=new Ba;j=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(j===null)j=B(2);I(h,b,j);i=new M;e=h.b;c=h.a;P();k=D(c);i.e=k;L(e,0,k,0,c);d.c=1;d.d=1;d.f=i;H(d);}
function AEY(a,b,c){var d,e,f,g,h,i,j,k;d=a.m;e=a.ea;if(!c)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(c),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.bindBuffer(b,e);b=a.m.getError();if(!b)return;d=new Ba;i=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(i===null)i=B(2);I(e,b,i);j=new M;f=e.b;c=e.a;P();k=D(c);j.e=k;L(f,0,k,0,c);d.c=1;d.d=1;d.f=j;H(d);}
function AEV(a,b,c,d,e){var f,g,h,i,j,k;a.m.blendFuncSeparate(b,c,d,e);b=a.m.getError();if(!b)return;f=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AML(a,b,c,d,e){var f,g,h,i,j;Oy(a,b,c,d,e);b=a.m.getError();if(!b)return;d=new Ba;f=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new M;i=g.b;c=g.a;P();j=D(c);h.e=j;L(i,0,j,0,c);d.c=1;d.d=1;d.f=h;H(d);}
function AK3(a,b,c,d,e){var f,g,h,i,j;Ox(a,b,c,d,e);b=a.m.getError();if(!b)return;e=new Ba;f=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new M;i=g.b;c=g.a;P();j=D(c);h.e=j;L(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AU5(a,b){var c,d,e,f,g,h,i,j;c=a.cL;if(!b)c=!c.M?null:c.K;else{d=c.I;e=U(Bh(Bf(T(b),F(2135587861, 2654435769)),c.N));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.L;}}c=e<0?null:c.J.data[e];}Bz();g=c===null?null:c.O;a.m.compileShader(g);b=a.m.getError();if(!b)return;c=new Ba;h=Bj(b,4);g=new O;g.b=D(16);I(g,g.a,B(135));N(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(h===null)h=B(2);I(g,b,h);i=new M;d=g.b;e=g.a;P();j=D(e);i.e=j;L(d,0,j,0,e);c.c=1;c.d=1;c.f=i;H(c);}
function APD(a){var b,c,d,e,f,g,h,i;b=a.m.createProgram();c=a.f6;a.f6=c+1|0;Cc(a.bV,c,Cg(b));d=a.m.getError();if(!d)return c;b=new Ba;e=Bj(d,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,d,10);I(f,f.a,B(58));d=f.a;if(e===null)e=B(2);I(f,d,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);b.c=1;b.d=1;b.f=g;H(b);}
function AUT(a,b){var c,d,e,f,g,h,i;c=a.m.createShader(b);d=a.fW;a.fW=d+1|0;Cc(a.cL,d,Cg(c));b=a.m.getError();if(!b)return d;c=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;d=f.a;P();i=D(d);g.e=i;L(h,0,i,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function APA(a,b){var c,d,e,f,g,h,i;a.m.disableVertexAttribArray(b);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function ALc(a,b,c,d,e){var f,g,h,i,j,k;a.m.drawElements(b,c,d,e);b=a.m.getError();if(!b)return;f=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AUY(a,b){var c,d,e,f,g,h,i;a.m.enableVertexAttribArray(b);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AOQ(a,b){var c,d,e,f,g,h,i;a.m.generateMipmap(b);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AMO(a,b,c,d,e){var f,g,h,i;f=MY(a,b,c,d,e);b=a.m.getError();if(!b)return f;d=new Ba;g=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(g===null)g=B(2);I(e,b,g);f=new M;h=e.b;c=e.a;P();i=D(c);f.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function AHq(a,b,c,d,e){var f,g,h,i;f=Pn(a,b,c,d,e);b=a.m.getError();if(!b)return f;d=new Ba;g=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(g===null)g=B(2);I(e,b,g);f=new M;h=e.b;c=e.a;P();i=D(c);f.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function ALm(a,b,c){var d,e,f,g,h,i,j;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();h=d===null?null:d.O;b=a.m.getAttribLocation(h,$rt_ustr(c));f=a.m.getError();if(!f)return b;c=new Ba;i=Bj(f,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,f,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);h=new M;e=d.b;f=d.a;P();j=D(f);h.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f
=h;H(c);}
function AFB(a,b,c){var d,e,f,g,h,i;K1(a,b,c);b=a.m.getError();if(!b)return;c=new Ba;d=Bj(b,4);e=new O;e.b=D(16);I(e,e.a,B(135));N(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AKi(a,b,c,d){var e,f,g,h,i;P4(a,b,c,d);b=a.m.getError();if(!b)return;d=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AKn(a,b){var c,d,e,f,g,h,i,j;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c=$rt_str(c.getProgramInfoLog(d));b=a.m.getError();if(!b)return c;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;H(c);}
function AF2(a,b,c,d){var e,f,g,h,i;NW(a,b,c,d);b=a.m.getError();if(!b)return;d=new Ba;e=Bj(b,4);f=new O;f.b=D(16);I(f,f.a,B(135));N(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function ARd(a,b){var c,d,e,f,g,h,i,j;c=a.m;d=a.cL;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c=$rt_str(c.getShaderInfoLog(d));b=a.m.getError();if(!b)return c;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;H(c);}
function ASQ(a,b,c){var d,e,f,g,h,i,j;d=a.m;e=a.bV;if(!b)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;c=d.getUniformLocation(e,$rt_ustr(c));if(c===null)h=(-1);else{d=a.dm;if(!b)d=!d.M?null:d.K;else{f=d.I;h=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&d.L;}}d=h<0?null
:d.J.data[h];}d=d;if(d===null){d=Di(51,0.800000011920929);Cc(a.dm,b,d);}h=a.gl;a.gl=h+1|0;Cc(d,h,Cg(c));}b=a.m.getError();if(!b)return h;c=new Ba;i=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);e=new M;f=d.b;h=d.a;P();j=D(h);e.e=j;L(f,0,j,0,h);c.c=1;c.d=1;c.f=e;H(c);}
function ANJ(a,b){var c,d,e,f,g,h,i,j;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c.linkProgram(d);b=a.m.getError();if(!b)return;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function AUt(a,b,c){var d,e,f,g,h,i,j;d=a.m;e=a.cL;if(!b)e=!e.M?null:e.K;else{f=e.I;g=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.L;}}e=g<0?null:e.J.data[g];}Bz();e=e===null?null:e.O;d.shaderSource(e,$rt_ustr(c));b=a.m.getError();if(!b)return;c=new Ba;i=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);e=new M;f=d.b;g=d.a;P();j=D(g);e.e=j;L(f,0,j,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function ASL(a,b,c,d){var e,f,g,h,i,j,k;e=a.m;f=d;e.texParameterf(b,c,f);b=a.m.getError();if(!b)return;e=new Ba;g=Bj(b,4);h=new O;h.b=D(16);I(h,h.a,B(135));N(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new M;j=h.b;c=h.a;P();k=D(c);i.e=k;L(j,0,k,0,c);e.c=1;e.d=1;e.f=i;H(e);}
function AUO(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.dm;e=a.dV;if(!e)d=!d.M?null:d.K;else{f=d.I;g=U(Bh(Bf(T(e),F(2135587861, 2654435769)),d.N));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.L;}}d=g<0?null:d.J.data[g];}d=d;if(!b)d=!d.M?null:d.K;else{f=d.I;e=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));b:{while(true){h=f.data[e];if(!h){e= -(e+1|0)|0;break b;}if(h==b)break;e=(e+1|0)&d.L;}}d=e<0?null:d.J.data[e];}Bz();i=d===null?null:d.O;a.m.uniform1i(i,c);b=a.m.getError();if(!b)return;d
=new Ba;i=Bj(b,4);j=new O;j.b=D(16);I(j,j.a,B(135));N(j,j.a,b,10);I(j,j.a,B(58));b=j.a;if(i===null)i=B(2);I(j,b,i);k=new M;f=j.b;c=j.a;P();l=D(c);k.e=l;L(f,0,l,0,c);d.c=1;d.d=1;d.f=k;H(d);}
function AF3(a,b){var c,d,e,f,g,h,i,j;a.dV=b;c=a.m;d=a.bV;if(!b)d=!d.M?null:d.K;else{e=d.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),d.N));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.L;}}d=f<0?null:d.J.data[f];}Bz();d=d===null?null:d.O;c.useProgram(d);b=a.m.getError();if(!b)return;c=new Ba;h=Bj(b,4);d=new O;d.b=D(16);I(d,d.a,B(135));N(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new M;e=d.b;f=d.a;P();j=D(f);i.e=j;L(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function AH$(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.m.vertexAttribPointer(b,c,d,!!e,f,g);b=a.m.getError();if(!b)return;h=new Ba;i=Bj(b,4);j=new O;j.b=D(16);I(j,j.a,B(135));N(j,j.a,b,10);I(j,j.a,B(58));b=j.a;if(i===null)i=B(2);I(j,b,i);k=new M;l=j.b;c=j.a;P();m=D(c);k.e=m;L(l,0,m,0,c);h.c=1;h.d=1;h.f=k;H(h);}
function ABc(){var a=this;C.call(a);a.eU=0;a.I=null;a.J=null;a.K=null;a.M=0;a.r4=0.0;a.mn=0;a.N=0;a.L=0;}
function Di(a,b){var c=new ABc();AK1(c,a,b);return c;}
function AK1(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.r4=c;d=LC(b,c);a.mn=d*c|0;b=d-1|0;a.L=b;a.N=Fl(T(b));a.I=Z(d);a.J=Bg(C,d);return;}e=new Be;f=new O;f.b=D(16);I(f,f.a,B(59));DK(f,f.a,c);g=new M;h=f.b;d=f.a;P();i=D(d);g.e=i;L(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function OQ(a,b){return U(Bh(Bf(T(b),F(2135587861, 2654435769)),a.N));}
function Cc(a,b,c){var d,e,f,g,h;if(!b){d=a.K;a.K=c;if(!a.M){a.M=1;a.eU=a.eU+1|0;}return d;}e=a.I;f=U(Bh(Bf(T(b),F(2135587861, 2654435769)),a.N));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.L;}}if(f>=0){e=a.J.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.J.data[f]=c;b=a.eU+1|0;a.eU=b;if(b>=a.mn)ACg(a,g.length<<1);return null;}
function Mb(a,b){var c,d,e;if(!b)return !a.M?null:a.K;c=a.I;d=U(Bh(Bf(T(b),F(2135587861, 2654435769)),a.N));a:{while(true){e=c.data[d];if(!e){d= -(d+1|0)|0;break a;}if(e==b)break;d=(d+1|0)&a.L;}}return d<0?null:a.J.data[d];}
function HU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.M)return null;a.M=0;c=a.K;a.K=null;a.eU=a.eU-1|0;return c;}d=a.I;e=Bf(T(b),F(2135587861, 2654435769));f=a.N;g=U(Bh(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.L;}}if(g<0)return null;j=a.J.data;k=j[g];l=a.L;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=U(Bh(Bf(T(n),F(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.eU=a.eU-1|0;return k;}
function AEi(a,b,c){var d,e,f,g;a:{d=a.J;if(b===null){if(a.M&&a.K===null)return 1;d=d.data;e=a.I;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.K)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.M){g=a.K;if(b===g?1:g instanceof EA&&g.fO==b.fO?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof EA&&g.fO==b.fO?1:0)return 1;f=f+(-1)|0;}}return 0;}
function ACg(a,b){var c,d,e,f,g,h,i,j,k,l;a:{c=a.I.data.length;a.mn=b*a.r4|0;d=b-1|0;a.L=d;d=Fl(T(d));a.N=d;e=a.I;f=a.J;g=Z(b);a.I=g;h=Bg(C,b);a.J=h;if(a.eU>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=U(Bh(Bf(T(k),F(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.L;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
function YD(){var a=this;C.call(a);a.eb=0;a.fr=null;a.hJ=0;a.vP=0.0;a.mQ=0;a.hg=0;a.ff=0;}
function AGC(a,b){var c=new YD();AJH(c,a,b);return c;}
function AJH(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.vP=c;d=LC(b,c);a.mQ=d*c|0;b=d-1|0;a.ff=b;a.hg=Fl(T(b));a.fr=Z(d);return;}e=new Be;f=new O;f.b=D(16);I(f,f.a,B(59));DK(f,f.a,c);g=new M;h=f.b;d=f.a;P();i=D(d);g.e=i;L(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function Vp(a,b){var c,d,e,f;if(!b){if(a.hJ)return 0;a.hJ=1;a.eb=a.eb+1|0;return 1;}c=a.fr;d=U(Bh(Bf(T(b),F(2135587861, 2654435769)),a.hg));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.ff;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.eb+1|0;a.eb=b;if(b>=a.mQ)Vw(a,e.length<<1);return 1;}
function ADm(a,b){var c,d,e,f,g,h,i,j;if(!b){if(!a.hJ)return 0;a.hJ=0;a.eb=a.eb-1|0;return 1;}c=a.fr;d=Bf(T(b),F(2135587861, 2654435769));e=a.hg;f=U(Bh(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.ff;}}if(f<0)return 0;h=a.ff;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=U(Bh(Bf(T(b),F(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.eb=a.eb-1|0;return 1;}
function Vw(a,b){var c,d,e,f,g,h,i;a:{c=a.fr.data.length;a.mQ=b*a.vP|0;d=b-1|0;a.ff=d;d=Fl(T(d));a.hg=d;e=a.fr;f=Z(b);a.fr=f;if(a.eb>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=U(Bh(Bf(T(h),F(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.ff;}f[i]=h;}g=g+1|0;}}}}
var Ro=G(0);
function PO(){C.call(this);this.kH=null;}
function AFL(a){var b;b=a.kH;b.k$=1;ABY($rt_ustr(b.op));}
function AI1(a){var b;b=a.kH;b.k$=1;ABY($rt_ustr(b.op));}
function AFu(a){a.kH.k$=0;}
var So=G(0);
function Su(){var a=this;C.call(a);a.hS=null;a.pt=null;a.Bm=null;}
var A6f=0;function AYx(){var a=new Su();ATk(a);return a;}
function ATk(a){var b,c,d,e,f,g,h,$$je;b=AHR();a.hS=b;c=APx(b);a.pt=c;b=new Py;d=a.hS;e=new BN;e.bf=0;e.r=Bg(C,16);b.bU=e;b.dy=2147483647;b.xv=d;b.xU=c;a.Bm=b;b=A3$.kd;HF(b);a:{try{Cj(b,a);D9(b);break a;}catch($$e){$$je=Bw($$e);d=$$je;}D9(b);H(d);}if(a.hS.state!=='running'?1:0){b=new MQ;b.Ba=a;AH7(a.hS,BT(b,"unlockFunction"));}else{if(!A6f&&A3$.jF>=2){if(A5R===null){e=new Cu;e.b6=AZW;c=new O;CI(c);c.b=D(16);e.ba=c;e.b4=D(32);e.cm=0;Ct();e.ce=A5l;A5R=e;}e=A5R;c=new O;c.b=D(16);CM(c,c.a,CZ(B(150)));CM(c,c.a,CZ(B(71)));CM(c,
c.a,CZ(B(151)));b=new M;f=c.b;g=c.a;h=D(g);b.e=h;L(f,0,h,0,g);d=e.ba;I(d,d.a,b);g=d.a;Bc(d,g,g+1|0);d.b.data[g]=10;Cl(e);}A6f=1;}}
function AB9(a){a.pt.disconnect(a.hS.destination);}
function ZM(a){a.pt.connect(a.hS.destination);}
function AH7(b,c){var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){$rt_globals.document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){$rt_globals.document.addEventListener(eventName,unlock);});}
function AHR(){var AudioContext=$rt_globals.window.AudioContext||$rt_globals.window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
function APx(b){var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function Mz(){Dt.call(this);this.wt=null;}
var Rm=G(CE);
function Ik(){CA.call(this);this.gY=null;}
function AYM(a,b,c){var d=new Ik();AUb(d,a,b,c);return d;}
function AUb(a,b,c,d){var e,f,g,h,$$je;e=new BN;e.bf=0;e.r=Bg(C,c);a.bU=e;a.dy=d;a:{try{e=K8(b,null);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof CE){}else{throw $$e;}}try{e=Kk(b,null);I$(e,1);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof Dk){}else{throw $$e;}}e=null;}a.gY=e;if(e!==null)return;e=new BF;f=new O;f.b=D(16);I(f,f.a,B(27));if(b.X===null)b.X=$rt_str(b.C.$meta.name);b=b.X;I(f,f.a,b);b=new M;g=f.b;d=f.a;P();h=D(d);b.e=h;L(g,0,h,0,d);e.c=1;e.d=1;e.f=b;H(e);}
function KF(a){var b,c,d,e,f,g,h,i,$$je;a:{try{b=AEJ(a.gY,null);}catch($$e){$$je=Bw($$e);if($$je instanceof CE){c=$$je;break a;}else{throw $$e;}}return b;}d=new Ba;b=new O;b.b=D(16);I(b,b.a,B(152));e=a.gY.fy.fe;if(e.X===null)e.X=$rt_str(e.C.$meta.name);f=e.X;I(b,b.a,f);f=new M;g=b.b;h=b.a;P();i=D(h);f.e=i;L(g,0,i,0,h);d.c=1;d.d=1;d.f=f;d.cP=c;H(d);}
var Fi=G(0);
var N6=G(0);
var Pe=G(0);
var O5=G(0);
var Qd=G(0);
var Sj=G(0);
var Q3=G(0);
var NC=G(0);
var Kb=G(0);
var TR=G();
function APZ(a,b){b=a.lu(b);Bz();return b===null?null:b instanceof $rt_objcls()&&b instanceof Ds?b.O:b;}
function ASm(a,b,c){a.Ad($rt_str(b),Dp(c,"handleEvent"));}
function ARN(a,b,c){a.yl($rt_str(b),Dp(c,"handleEvent"));}
function APR(a,b,c,d){a.wN($rt_str(b),Dp(c,"handleEvent"),d?1:0);}
function ATV(a,b){return !!a.Ai(b);}
function AIa(a){return a.AX();}
function AFt(a,b,c,d){a.zs($rt_str(b),Dp(c,"handleEvent"),d?1:0);}
var KD=G();
function HT(){var a=this;KD.call(a);a.mx=0;a.f5=null;a.s1=0.0;a.mW=0;a.j7=0;a.jr=0;a.vX=0;}
var AZU=null;var AZV=null;function A6g(a){var b=new HT();J_(b,a);return b;}
function J_(a,b){var c,d,e;a.jr=(-1);if(b<0){c=new Be;c.c=1;c.d=1;H(c);}a.mx=0;if(!b)b=1;d=Bg(Iq,b);e=d.data;a.f5=d;b=e.length;a.j7=b;a.s1=0.75;a.mW=b*0.75|0;}
function DM(a,b,c){var d,e,f,g,h,i,j,k,l;HF(a);try{if(b!==null&&c!==null){a:{if(!b.bA){d=b.e.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.bA=(31*b.bA|0)+g|0;f=f+1|0;}}}h=b.bA&2147483647;d=a.f5.data;i=h%d.length|0;j=d[i];while(j!==null){b:{e=j.tD;if(!b.bA){d=b.e.data;f=d.length;g=0;while(true){if(g>=f)break b;k=d[g];b.bA=(31*b.bA|0)+k|0;g=g+1|0;}}}if(e==b.bA&&j.cB.dH(b)?1:0)break;j=j.lA;}if(j!==null){l=j.dL;j.dL=c;return l;}a.vX=a.vX+1|0;e=a.mx+1|0;a.mx=e;if(e>a.mW){Y9(a);i=h%a.f5.data.length|0;}if
(i<a.j7)a.j7=i;if(i>a.jr)a.jr=i;c:{l=new Iq;l.cB=b;l.dL=c;if(!b.bA){d=b.e.data;e=d.length;f=0;while(true){if(f>=e)break c;g=d[f];b.bA=(31*b.bA|0)+g|0;f=f+1|0;}}}l.tD=b.bA;d=a.f5.data;l.lA=d[i];d[i]=l;return null;}b=new CB;b.c=1;b.d=1;H(b);}finally{D9(a);}}
function Y9(a){var b,c,d,e,f,g,h,i,j;b=(a.f5.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Bg(Iq,b);e=d.data;f=a.jr+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.j7)break;h=a.f5.data[f];while(h!==null){i=(h.cB.dA()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.lA;h.lA=e[i];e[i]=h;h=j;}}a.j7=g;a.jr=c;a.f5=d;a.mW=e.length*a.s1|0;}
function AUU(){AZU=new JL;AZV=new JK;}
function Lm(){HT.call(this);this.AC=null;}
var W5=G();
var D6=G(BC);
var A5_=null;var A58=null;var A6c=null;var A6b=null;var A6h=null;function F5(){F5=W(D6);AOp();}
function AOp(){var b,c,d,e;b=new D6;F5();b.t=B(153);b.q=0;A5_=b;c=new D6;c.t=B(154);c.q=1;A58=c;d=new D6;d.t=B(148);d.q=2;A6c=d;e=new D6;e.t=B(155);e.q=3;A6b=e;A6h=R(D6,[b,c,d,e]);}
var Du=G();
var VQ=G(Du);
var Vn=G(Du);
var Ym=G(Du);
var ZZ=G(Du);
var Xi=G(Du);
function OK(){C.call(this);this.zY=null;}
function AMw(a,b){b.preventDefault();}
function OL(){C.call(this);this.BW=null;}
function AUx(a,b){b.preventDefault();}
function OI(){var a=this;C.call(a);a.qP=null;a.qu=null;a.rn=null;}
function Zv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new BN;e.bf=1;e.r=Bg(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=$rt_str(g.name);i=Ew(h,46,h.e.data.length-1|0);if(i==(-1))b=B(42);else{j=i+1|0;k=h.e;i=k.data.length;l=Bm(j,i);if(l>0){b=new Y;b.c=1;b.d=1;B9(b);H(b);}if(!l)b=A32;else if(!j&&i==i)b=h;else{b=new M;i=i-j|0;m=D(i);b.e=m;L(k,j,m,0,i);}}b=Vr(b);if(AHu(b)){E8();n=A6i;}else if(!BA(b,B(156))&&!BA(b,B(157))&&!BA(b,B(158))?0:1){E8();n=A6j;}
else if(!AL7(b)){E8();n=A6k;}else{E8();n=A6l;}o=new $rt_globals.FileReader();b=new Qy;b.lH=a;b.nv=n;b.p6=h;b.ku=e;b.qc=d;o.addEventListener("load",BT(b,"handleEvent"));E8();if(n!==A6k&&n!==A6j){if(n===A6i)o.readAsDataURL(g);else if(n===A6l)o.readAsText(g);}else o.readAsArrayBuffer(g);f=f+1|0;}}}}
function AQD(a,b){Zv(a,b);}
function Py(){var a=this;CA.call(a);a.xv=null;a.xU=null;}
var Ru=G(0);
function MQ(){C.call(this);this.Ba=null;}
function AJU(a){var b,c,d,e,f,g,h;if(!A6f&&A3$.jF>=2){if(A5R===null){b=new Cu;c=AZW;CI(b);b.b6=c;c=new O;Ia(c,16);b.ba=c;b.b4=D(32);b.cm=0;Ct();b.ce=A5l;A5R=b;}b=A5R;c=new O;c.b=D(16);DD(c,c.a,B(150));DD(c,c.a,B(71));DD(c,c.a,B(151));d=new M;e=c.b;f=c.a;P();g=D(f);d.e=g;L(e,0,g,0,f);h=b.ba;FI(h,h.a,d);AAe(h,h.a,10);Cl(b);}A6f=1;}
var Vf=G(Du);
function O2(){var a=this;C.call(a);a.G=null;a.cS=0;a.m4=null;a.qH=0;a.hK=0;a.fu=0;a.cf=0;a.s5=null;}
function OP(a,b){return OA(a,b);}
function Ib(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=new Id;d.bO=Bg(C,10);e=OA(a,b);f=0;g=0;if(!b.e.data.length){h=Bg(M,1);h.data[0]=B(42);return h;}a:{while(true){if(!G9(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.dp;if(!j.dn){b=new BH;b.c=1;b.d=1;B9(b);H(b);}if(0>=j.d0){b=new Y;P();d=new O;CI(d);d.b=D(16);N(d,d.a,0,10);e=new M;h=d.b;k=d.a;l=D(k);e.e=l;L(h,0,l,0,k);b.c=1;b.d=1;b.f=e;H(b);}f=j.bI.data[0];k=Bm(g,f);if(k>0){b=new Y;b.c=1;b.d=1;H(b);}if(!k){P();j=A32;}else if(!g&&f==b.e.data.length)j=b;else{j=new M;h=
b.e;k=f-g|0;P();l=D(k);j.e=l;L(h,g,l,0,k);}F7(d,d.be+1|0);h=d.bO.data;k=d.be;d.be=k+1|0;h[k]=j;d.cy=d.cy+1|0;j=e.dp;if(!j.dn)break;if(0>=j.d0){b=new Y;P();d=new O;CI(d);d.b=D(16);Nf(d,0);R$(b,Cm(d));H(b);}g=j.bI.data[1];f=i;}b=new BH;b.c=1;b.d=1;B9(b);H(b);}l=b.e;m=l.data.length;k=Bm(g,m);if(k>0){b=new Y;b.c=1;b.d=1;H(b);}if(!k){P();b=A32;}else if(!(!g&&m==m)){b=new M;k=m-g|0;P();h=D(k);b.e=h;L(l,g,h,0,k);}b:{F7(d,d.be+1|0);h=d.bO.data;m=d.be;d.be=m+1|0;h[m]=b;d.cy=d.cy+1|0;k=f+1|0;if(!c)while(true){k=k+(-1)
|0;if(k<0)break;if(Iv(HD(d,k)))break b;Rd(d,k);}}if(k<0)k=0;return V6(d,Bg(M,k));}
function N8(a){return a.G.cN;}
function Gb(b,c){var d;if(b===null){b=new CB;b.c=1;b.d=1;b.f=B(159);H(b);}if(c&&(c|255)!=255){b=new Be;b.c=1;b.d=1;b.f=B(42);H(b);}AZF=1;d=new O2;d.m4=Bg(De,10);d.hK=(-1);d.fu=(-1);d.cf=(-1);return Wt(d,b,c);}
function Wt(a,b,c){var d,e,f;a.G=AWw(b,c);a.cS=c;b=SC(a,(-1),c,null);a.s5=b;d=a.G;if(!d.b3&&!d.D&&d.E==d.db&&!(d.bQ===null?0:1)?1:0){if(a.qH)b.eY();return a;}b=new C_;e=d.cN;f=d.gO;b.c=1;b.d=1;b.bD=(-1);b.c2=B(42);b.c0=e;b.bD=f;H(b);}
function ADT(a,b){var c,d,e,f,g,h;c=new Cx;d=a.cS;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;Bv();g=new Bp;g.v=Z(64);c.y=g;g=new Bp;g.v=Z(2);c.B=g;c.lm=e;c.mz=f;while(true){h=a.G;d=h.b3;if(!d&&!h.D&&h.E==h.db&&!(h.bQ===null?0:1)?1:0)break;f=!d&&!h.D&&h.E==h.db&&!(h.bQ===null?0:1)?1:0;if(!(!f&&!(h.bQ===null?0:1)&&(d<0?0:1)?1:0))break;f=h.D;if(f&&f!=(-536870788)&&f!=(-536870871))break;Cr(h);CK(c,h.fd);g=a.G;if(g.b3!=(-536870788))continue;Cr(g);}g=KS(a,c);g.bw(b);return g;}
function SC(a,b,c,d){var e,f,g,h,i,j,k,l;e=new Id;e.bO=Bg(C,10);f=a.cS;g=0;if(c!=f)a.cS=c;a:{switch(b){case -1073741784:h=new Pl;c=a.cf+1|0;a.cf=c;Fr();i=AZF;AZF=i+1|0;d=new Bi;d.b=D(20);h.x=(N(d,d.a,i,10)).s();h.co=c;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Oj;j=a.cf+1|0;a.cf=j;Fr();c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);h.x=(N(d,d.a,c,10)).s();h.co=j;break a;case -33554392:h=new PS;k=a.cf+1|0;a.cf=k;Fr();c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);h.x=(N(d,d.a,c,10)).s();h.co=
k;break a;default:c=a.hK+1|0;a.hK=c;if(d===null){h=AWP();g=1;}else{h=new De;Fr();Jc(h);h.co=c;}i=a.hK;if(i<=(-1))break a;if(i>=10)break a;a.m4.data[i]=h;break a;}h=new Sw;Fr();i=AZF;AZF=i+1|0;d=new Bi;d.b=D(20);h.x=(N(d,d.a,i,10)).s();h.co=(-1);}while(true){if(Sq(a.G)&&F8(a.G)==(-536870788))l=ADT(a,h);else if(a.G.b3==(-536870788)){l=I5(h);BP(a.G);}else{l=NQ(a,h);if(FK(a.G)==(-536870788))BP(a.G);}if(l!==null)Jp(e,l);if(KC(a.G))break;if(FK(a.G)==(-536870871))break;}if(Wj(a.G)==(-536870788))Jp(e,I5(h));if(a.cS
!=f&&!g){a.cS=f;UF(a.G,f);}switch(b){case -1073741784:break;case -536870872:return AWf(e,h);case -268435416:return AVz(e,h);case -134217688:return AWc(e,h);case -67108824:return AWA(e,h);case -33554392:return AVJ(e,h);default:switch(Le(e)){case 0:break;case 1:return AXN(HD(e,0),h);default:return AW9(e,h);}return I5(h);}return AYK(e,h);}
function ABI(a){var b,c,d,e,f,g,h,i,j,k;b=new J9;b.b=D(16);while(true){c=a.G;d=c.b3;if(!d&&!c.D&&c.E==c.db&&!(c.bQ===null?0:1)?1:0)break;e=!d&&!c.D&&c.E==c.db&&!(c.bQ===null?0:1)?1:0;if(!(!e&&!(c.bQ===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.eK;e=f===null?0:1;if(!(!e&&!c.D)){e=f===null?0:1;if(!(!e&&(c.D<0?0:1))){d=c.D;if(d!=(-536870871)&&(d&(-2147418113))!=(-2147483608)&&d!=(-536870788)&&d!=(-536870876))break;}}Cr(c);g=c.fd;e=Bm(g,65536);if(!(e>=0&&
g<=1114111?1:0)){e=g&65535;h=b.a;Bc(b,h,h+1|0);b.b.data[h]=e;}else{if(e<0){i=D(1);i.data[0]=g&65535;}else i=EE([(55296|(g-65536|0)>>10&1023)&65535,(56320|g&1023)&65535]);i=i.data;e=0;h=i.length;d=b.a;Bc(b,d,d+h|0);j=h+e|0;while(e<j){k=b.b.data;g=d+1|0;h=e+1|0;k[d]=i[e];d=g;e=h;}}}h=a.cS;if(!((h&2)!=2?0:1))return AWV(b);if(!((h&64)!=64?0:1))return AYW(b);c=new Mk;e=AZF;AZF=e+1|0;c.x=Ke(e,10);c.bl=1;f=new O;f.b=D(16);e=0;while(e<AEt(b)){Fu(f,ACY(S7(SW(b,e))));e=e+1|0;}c.oo=Cm(f);c.bl=GO(f);return c;}
function ABT(a){var b,c,d,e,f,g,h,i,j;b=Z(4);c=(-1);d=(-1);e=a.G;f=e.b3;if(!(!f&&!e.D&&e.E==e.db&&!(e.bQ===null?0:1)?1:0)){g=!f&&!e.D&&e.E==e.db&&!(e.bQ===null?0:1)?1:0;if(!g&&!(e.bQ===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Cr(e);c=e.fd;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=D(3);b=h.data;b[0]=c&65535;e=a.G;i=e.b3;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Cr(e);e=a.G;i=e.b3;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Cr(e);e=new Ih;c=AZF;AZF=c+1|0;j=new Bi;j.b=D(20);e.x=(N(j,j.a,c,10)).s();e.e5=h;e.jM=3;return e;}j=new Ih;i
=AZF;AZF=i+1|0;e=new Bi;e.b=D(20);j.x=(N(e,e.a,i,10)).s();j.e5=h;j.jM=2;return j;}c=a.cS;if(!((c&2)!=2?0:1)){e=new ES;i=b[0];c=AZF;AZF=c+1|0;e.x=Ke(c,10);e.bl=1;e.c9=i;return e;}if((c&64)!=64?0:1)return AXX(b[0]);return AV3(b[0]);}h=b.data;c=1;while(c<4&&!KC(a.G)&&Sq(a.G)){i=c+1|0;e=a.G;Cr(e);h[c]=e.fd;c=i;}if(c==1&&!ANT(h[0]))return St(a,h[0]);if(!Es(a,2))return AYU(b,c);if(Es(a,64))return AYA(b,c);return AW$(b,c);}
function NQ(a,b){var c,d,e,f,g,h;c=a.G;d=c.b3;e=!d&&!c.D&&c.E==c.db&&!(c.bQ===null?0:1)?1:0;e=!e&&!(c.bQ===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.eK===null?0:1)&&(c.D<0?0:1)){if(!((a.cS&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!ABz(c)?ABI(a):LZ(a,b,Sn(a,b));}else{f=ABT(a);g=a.G;d=g.b3;if(!(!d&&!g.D&&g.E==g.db&&!(g.bQ===null?0:1)?1:0)&&!(d==(-536870871)&&!(b instanceof Hv))&&d!=(-536870788)){e=!d&&!g.D&&g.E==g.db&&!(g.bQ===null?0:1)?1:0;if(!(!e&&!(g.bQ===null?0:1)&&(d<0?0:1)?1:0))f=LZ(a,b,f);}}}else if(d!=
(-536870871))f=LZ(a,b,Sn(a,b));else{if(b instanceof Hv)H(Eh(B(42),Ef(c),Fz(a.G)));f=new Rz;TC(f,b);f.bl=0;}c=a.G;e=c.b3;h=!e&&!c.D&&c.E==c.db&&!(c.bQ===null?0:1)?1:0;if(!h&&!(e==(-536870871)&&!(b instanceof Hv))&&e!=(-536870788)){g=NQ(a,b);if(f instanceof DG&&!(f instanceof F6)&&!(f instanceof DL)&&!(f instanceof F3)){c=f;if(!g.cx(c.T))f=AV9(c);}if((g.jV()&65535)!=43)f.bw(g);else f.bw(g.T);}else{if(f===null)return null;f.bw(b);}if((f.jV()&65535)!=43)return f;return f.T;}
function LZ(a,b,c){var d,e,f,g,h,i;d=a.G;e=d.b3;if(c!==null&&!(c instanceof Co)){switch(e){case -2147483606:Cr(d);d=new SK;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);d.x=(N(g,g.a,f,10)).s();d.p=b;d.T=c;d.bP=e;Fr();c.bw(A6m);return d;case -2147483605:Cr(d);d=new Of;e=AZF;AZF=e+1|0;g=new Bi;g.b=D(20);d.x=(N(g,g.a,e,10)).s();d.p=b;d.T=c;d.bP=(-2147483606);Fr();c.bw(A6m);return d;case -2147483585:Cr(d);d=new N3;e=AZF;AZF=e+1|0;g=new Bi;CI(g);g.b=D(20);d.x=(N(g,g.a,e,10)).s();d.p=b;d.T=c;d.bP=(-536870849);Fr();c.bw(A6m);return d;case -2147483525:g
=new ML;h=d.bQ;Cr(d);d=h;f=a.fu+1|0;a.fu=f;i=AZF;AZF=i+1|0;g.x=Ke(i,10);g.p=b;g.T=c;g.bP=(-536870849);g.eH=d;g.dO=f;Fr();c.bw(A6m);return g;case -1073741782:case -1073741781:Cr(d);d=new Ph;Uj(d,c,b,e);c.bw(d);return d;case -1073741761:Cr(d);d=AWq(c,b,(-536870849));c.bw(b);return d;case -1073741701:h=new Q7;d=GT(d);e=a.fu+1|0;a.fu=e;Z0(h,d,c,b,(-536870849),e);c.bw(h);return h;case -536870870:case -536870869:BP(d);d=c.jV()!=(-2147483602)?AV6(c,b,e):Es(a,32)?AWD(c,b,e):AVX(c,b,e,N5(a.cS));c.bw(d);return d;case -536870849:BP(d);d
=AYN(c,b,(-536870849));c.bw(b);return d;case -536870789:h=new Ga;d=GT(d);e=a.fu+1|0;a.fu=e;S9(h,d,c,b,(-536870849),e);c.bw(h);return h;default:}return c;}g=null;if(c!==null)g=c;switch(e){case -2147483606:case -2147483605:BP(d);d=AX9(g,b,e);LO(g,d);return d;case -2147483585:BP(d);return AVE(g,b,(-2147483585));case -2147483525:return AYy(GT(d),g,b,(-2147483525));case -1073741782:case -1073741781:BP(d);d=AYq(g,b,e);LO(g,d);return d;case -1073741761:BP(d);return AYf(g,b,(-1073741761));case -1073741701:return AWQ(GT(d),
g,b,(-1073741701));case -536870870:case -536870869:BP(d);d=AXT(g,b,e);LO(g,d);return d;case -536870849:BP(d);return AXn(g,b,(-536870849));case -536870789:return AWk(GT(d),g,b,(-536870789));default:}return c;}
function Sn(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Hv;while(true){a:{e=a.G;f=e.b3;if((f&(-2147418113))==(-2147483608)){Cr(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.cS=g;else{if(f!=(-1073741784))g=a.cS;c=SC(a,f,g,b);e=a.G;if(e.b3!=(-536870871)){b=new C_;h=e.cN;i=e.gO;b.c=1;b.d=1;b.bD=(-1);b.c2=B(42);b.c0=h;b.bD=i;H(b);}Cr(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:BP(e);c
=new O4;Jc(c);break a;case -2147483582:BP(e);c=AS0(0);break a;case -2147483577:break;case -2147483558:BP(e);c=new R9;j=a.cf+1|0;a.cf=j;ACD(c,j);break a;case -2147483550:BP(e);c=AS0(1);break a;case -2147483526:BP(e);c=AYl();break a;case -536870876:BP(e);a.cf=a.cf+1|0;if(Es(a,8)){if(Es(a,1)){c=AWN(a.cf);break a;}c=AVD(a.cf);break a;}if(Es(a,1)){c=AXe(a.cf);break a;}c=AYd(a.cf);break a;case -536870866:BP(e);if(Es(a,32)){c=AYG();break a;}c=AXZ(N5(a.cS));break a;case -536870821:BP(e);i=0;if(FK(a.G)==(-536870818))
{i=1;BP(a.G);}c=Z3(a,i,b);if(FK(a.G)!=(-536870819))H(Eh(B(42),Ef(a.G),Fz(a.G)));NE(a.G,1);BP(a.G);break a;case -536870818:BP(e);a.cf=a.cf+1|0;if(!Es(a,8)){c=AYr();break a;}c=AYm(N5(a.cS));break a;case 0:e=N9(e);if(e!==null)c=KS(a,e);else{if(KC(a.G)){c=I5(b);break a;}c=AJq(f&65535);}BP(a.G);break a;default:break b;}BP(e);c=AWl();break a;}j=(f&2147483647)-48|0;if(a.hK<j)H(Eh(B(42),Ef(e),Fz(a.G)));BP(e);a.cf=a.cf+1|0;c=!Es(a,2)?AVI(j,a.cf):Es(a,64)?AWO(j,a.cf):AYQ(j,a.cf);a.m4.data[j].m0=1;a.qH=1;break a;}if(f
>=0&&!I7(e)){c=St(a,f);BP(a.G);}else if(f==(-536870788))c=I5(b);else{if(f!=(-536870871))H(Eh(!I7(a.G)?ADE(f&65535):(N9(a.G)).s(),Ef(a.G),Fz(a.G)));if(d)H(Eh(B(42),Ef(a.G),Fz(a.G)));c=I5(b);}}}if(f!=(-16777176))break;}return c;}
function Z3(a,b,c){var d;d=KS(a,GM(a,b));d.bw(c);return d;}
function GM(a,b){var c,d,e,f,g,h,i,j,k,l,$$je;c=new Cx;d=a.cS;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;Bv();f=new Bp;f.v=Z(64);c.y=f;f=new Bp;f.v=Z(2);c.B=f;c.lm=e;c.mz=d;E3(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){f=a.G;if(!f.b3&&!f.D&&f.E==f.db&&!I7(f)?1:0)break a;f=a.G;b=f.b3;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)CK(c,g);g=BP(a.G);if(FK(a.G)!=(-536870874)){g=38;break d;}if(F8(a.G)==(-536870821)){BP(a.G);h=1;g=(-1);break d;}BP(a.G);if(j){c=GM(a,0);break d;}if(FK(a.G)==(-536870819))break d;RW(c,
GM(a,0));break d;case -536870867:if(!j&&F8(f)!=(-536870819)&&F8(a.G)!=(-536870821)&&g>=0){BP(a.G);d=FK(a.G);if(I7(a.G))break c;if(d<0&&F8(a.G)!=(-536870819)&&F8(a.G)!=(-536870821)&&g>=0)break c;e:{try{if(ALF(d))break e;d=d&65535;break e;}catch($$e){$$je=Bw($$e);if($$je instanceof CE){break b;}else{throw $$e;}}}try{BI(c,g,d);}catch($$e){$$je=Bw($$e);if($$je instanceof CE){break b;}else{throw $$e;}}BP(a.G);g=(-1);break d;}if(g>=0)CK(c,g);g=45;BP(a.G);break d;case -536870821:if(g>=0){CK(c,g);g=(-1);}BP(a.G);e=
0;f=a.G;if(f.b3==(-536870818)){BP(f);e=1;}if(!h)SU(c,GM(a,e));else RW(c,GM(a,e));h=0;BP(a.G);break d;case -536870819:break;case -536870818:if(g>=0)CK(c,g);g=94;BP(a.G);break d;case 0:if(g>=0)CK(c,g);f=a.G.bQ;if(f===null)g=0;else{AED(c,f);g=(-1);}Cr(a.G);break d;default:if(g>=0)CK(c,g);f=a.G;Cr(f);g=f.fd;break d;}if(g>=0)CK(c,g);g=93;BP(a.G);}j=0;}H(Eh(B(42),N8(a),Fz(a.G)));}H(Eh(B(42),N8(a),Fz(a.G)));}if(!i){if(g>=0)CK(c,g);return c;}c=new C_;k=a.G;l=k.cN;b=k.gO-1|0;c.c=1;c.d=1;c.bD=(-1);c.c2=B(42);c.c0=l;c.bD
=b;H(c);}
function St(a,b){var c,d,e,f,g;c=b>=65536&&b<=1114111?1:0;d=a.cS;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Mq;b=b&65535;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);e.x=(N(g,g.a,f,10)).s();e.bl=1;e.l4=b;e.mD=GS(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Mi;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);e.x=(N(g,g.a,f,10)).s();e.bl=1;e.bl=2;if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}b=BW(A5u,b);if(A5s===null){if(A5t===null)A5t=C0();A5s
=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}e.n7=BW(A5s,b);return e;}if(b<=57343&&b>=56320?1:0){e=new IQ;b=b&65535;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);e.x=(N(g,g.a,f,10)).s();e.fx=b;return e;}if(b<=56319&&b>=55296?1:0)return AMh(b&65535);e=new Sa;b=b&65535;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);e.x=(N(g,g.a,f,10)).s();e.bl=1;b=BW(Tx(),b)&65535;e.kc=BW(XK(),b)&65535;return e;}}if(c)return AVS(b);if(AIn(b))return AXC(b&65535);if(!AN0(b))return AJq(b&65535);return AMh(b&65535);}
function KS(a,b){var c,d,e,f,g,h;if(!Ze(b)){if(!b.bu){if(b.iN())return AWK(b);return AYn(b);}if(b.iN())return AXv(b);return AW2(b);}c=T2(b);d=new Mv;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);d.x=(N(f,f.a,e,10)).s();d.kS=c;d.ml=c.Q;if(!b.bu){if(!b.iN()){c=new G8;f=new EC;b=If(b);Jc(f);f.bl=1;f.dZ=b;f.oG=b.Q;UU(c);c.gA=f;c.gp=d;return c;}c=new G8;f=new NB;b=If(b);e=AZF;AZF=e+1|0;g=new Bi;g.b=D(20);f.x=(N(g,g.a,e,10)).s();f.bl=1;f.k3=b;f.nQ=b.Q;e=AZF;AZF=e+1|0;b=new Bi;b.b=D(20);c.x=(N(b,b.a,e,10)).s();c.gA=f;c.gp=d;return c;}if
(!b.iN()){c=new G8;f=new DZ;b=If(b);e=AZF;AZF=e+1|0;g=new Bi;g.b=D(20);f.x=(N(g,g.a,e,10)).s();f.da=b;f.hx=b.Q;e=AZF;AZF=e+1|0;b=new Bi;b.b=D(20);c.x=(N(b,b.a,e,10)).s();c.gA=f;c.gp=d;return c;}c=new G8;f=new Mw;g=If(b);h=AZF;AZF=h+1|0;b=new Bi;b.b=D(20);f.x=(N(b,b.a,h,10)).s();f.da=g;f.hx=g.Q;e=AZF;AZF=e+1|0;b=new Bi;b.b=D(20);c.x=(N(b,b.a,e,10)).s();c.gA=f;c.gp=d;return c;}
function Vy(b){return Gb(b,0);}
function GS(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Es(a,b){return (a.cS&b)!=b?0:1;}
var UA=G();
function K8(b,c){var d,e,f,g,h,i,j,$$je;if(c!==null&&c.data.length){a:{b:{try{d=AHF(ACa(b,c));}catch($$e){$$je=Bw($$e);if($$je instanceof J4){d=$$je;break a;}else if($$je instanceof G$){d=$$je;break b;}else{throw $$e;}}return d;}e=new Dk;if(b.X===null)b.X=$rt_str(b.C.$meta.name);f=b.X;b=new O;b.b=D(16);I(b,b.a,B(160));g=b.a;if(f===null)f=B(2);I(b,g,f);h=new M;c=b.b;i=b.a;P();j=D(i);h.e=j;L(c,0,j,0,i);e.c=1;e.d=1;e.f=h;e.cP=d;H(e);}e=new Dk;if(b.X===null)b.X=$rt_str(b.C.$meta.name);f=b.X;b=new O;b.b=D(16);I(b,
b.a,B(161));g=b.a;if(f===null)f=B(2);I(b,g,f);I(b,b.a,B(162));h=new M;c=b.b;i=b.a;P();j=D(i);h.e=j;L(c,0,j,0,i);e.c=1;e.d=1;e.f=h;e.cP=d;H(e);}c=(ADY(b)).data;if(c.length<=0)b=null;else{b=new NG;b.fy=c[0];}return b;}
function Kk(b,c){var d,e,f,g,h,i,j,$$je;a:{try{d=AHF(ACe(b,c));}catch($$e){$$je=Bw($$e);if($$je instanceof J4){d=$$je;break a;}else if($$je instanceof G$){d=$$je;e=new Dk;if(b.X===null)b.X=$rt_str(b.C.$meta.name);b=b.X;f=new O;f.b=D(16);I(f,f.a,B(160));g=f.a;if(b===null)b=B(2);I(f,g,b);b=new M;c=f.b;h=f.a;P();i=D(h);b.e=i;L(c,0,i,0,h);e.c=1;e.d=1;e.f=b;e.cP=d;H(e);}else{throw $$e;}}return d;}e=new Dk;if(b.X===null)b.X=$rt_str(b.C.$meta.name);j=b.X;b=new O;b.b=D(16);I(b,b.a,B(163));g=b.a;if(j===null)j=B(2);I(b,
g,j);f=new M;c=b.b;h=b.a;P();i=D(h);f.e=i;L(c,0,i,0,h);e.c=1;e.d=1;e.f=f;e.cP=d;H(e);}
var Dk=G(CE);
function A6n(a,b){var c=new Dk();ABF(c,a,b);return c;}
function ABF(a,b,c){a.c=1;a.d=1;a.f=b;a.cP=c;}
function Ds(){C.call(this);this.O=null;}
var A6o=null;var A6p=null;var A6q=null;var A6r=null;var A6s=null;var A6t=null;function Bz(){Bz=W(Ds);AIp();}
function Cg(b){var c,d,e,f,g,h;Bz();if(b===null)return null;a:{c=b;if(A6p!==null){d=$rt_str(typeof c);if(!BA(d,B(164))&&!BA(d,B(165))){if(BA(d,B(166))){e=A6q.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=new Ds;g.O=c;h=g;A6q.set(c,new $rt_globals.WeakRef(h));M3(A6s,h,c);return g;}if(!BA(d,B(167)))break a;else{e=A6r.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=new Ds;g.O=c;h=g;A6r.set(c,new $rt_globals.WeakRef(h));M3(A6t,
h,c);return g;}}e=A6p.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=new Ds;g.O=c;A6p.set(c,new $rt_globals.WeakRef(g));return g;}}b=new Ds;b.O=c;return b;}
function AIp(){A6o=new $rt_globals.WeakMap();A6p=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();A6q=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();A6r=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();A6s=A6q===null?null:new $rt_globals.FinalizationRegistry(BT(new NK,"accept"));A6t=A6r===null?null:new $rt_globals.FinalizationRegistry(BT(new NL,"accept"));}
function M3(b,c,d){return b.register(c,d);}
var Kx=G(0);
var JL=G();
var Gv=G(0);
var JK=G();
var LM=G(0);
function Y3(){var a=this;C.call(a);a.xy=null;a.uU=null;a.hw=null;a.dp=null;a.kK=0;a.kN=0;a.k0=0;a.mR=null;a.nh=null;a.fv=null;}
function OA(a,b){var c=new Y3();AE2(c,a,b);return c;}
function AAM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=a.mR;if(c!==null&&BA(c,b)){if(a.fv===null)return a.nh;d=new O;d.b=D(16);e=0;while(true){b=a.fv;f=Bm(e,b.be);if(f>=0){b=new M;g=d.b;h=d.a;i=D(h);b.e=i;L(g,0,i,0,h);return b;}if(e<0)break;if(f>=0)break;b=b.bO.data[e];I(d,d.a,b===null?B(2):b.s());e=e+1|0;}b=new Y;b.c=1;b.d=1;H(b);}a.mR=b;g=b.e.data;i=D(g.length);j=i.data;f=0;e=j.length;while(f<e){j[f]=g[f];f=f+1|0;}c=new O;c.b=D(16);a.fv=null;h=0;k=0;l=0;a:{b:while(true){if(h>=e){b=a.fv;if(b!==null){h=c.a;f
=Bm(k,h);if(f){if(f<=0&&k>=0&&h<=h){m=new M;g=c.b;f=h-k|0;P();i=D(f);m.e=i;L(g,k,i,0,f);F7(b,b.be+1|0);g=b.bO.data;h=b.be;b.be=h+1|0;g[h]=m;b.cy=b.cy+1|0;}else{b=new Y;b.c=1;b.d=1;B9(b);H(b);}}}b=new M;g=c.b;h=c.a;P();i=D(h);b.e=i;L(g,0,i,0,h);return b;}if(j[h]==92&&!l){l=1;h=h+1|0;}c:{if(l){if(h>=e)break b;l=j[h];n=c.a;Bc(c,n,n+1|0);c.b.data[n]=l;l=0;}else if(j[h]!=36){n=j[h];o=c.a;Bc(c,o,o+1|0);c.b.data[o]=n;}else{if(a.fv===null){b=new Id;b.bO=Bg(C,10);a.fv=b;}d:{try{b=new M;h=h+1|0;SJ(b,i,h,1);f=Cs(b);if
(k==GO(c))break d;Jp(a.fv,ABw(c,k,GO(c)));k=GO(c);break d;}catch($$e){$$je=Bw($$e);if($$je instanceof CE){break a;}else{throw $$e;}}}try{Jp(a.fv,AXf(a,f));m=K3(a,f);k=k+Iv(m)|0;Dy(c,m);break c;}catch($$e){$$je=Bw($$e);if($$je instanceof CE){break a;}else{throw $$e;}}}}h=h+1|0;}b=new Y;b.c=1;b.d=1;H(b);}b=new Be;b.c=1;b.d=1;b.f=B(42);H(b);}
function K3(a,b){var c,d,e,f,g,h,i,j,k;c=a.dp;d=c.dn;if(!d){c=new BH;c.c=1;c.d=1;H(c);}if(b>=0){e=Bm(b,c.d0);if(e<0){a:{f=c.bI.data;g=b*2|0;if(f[g]<0)h=null;else{c=c.gj;if(!d){c=new BH;c.c=1;c.d=1;H(c);}if(b>=0&&e<0){i=f[g];if(!d){c=new BH;c.c=1;c.d=1;H(c);}if(b>=0&&e<0){g=f[g+1|0];b=Bm(i,g);if(b>0){c=new Y;c.c=1;c.d=1;H(c);}if(!b){P();h=A32;}else if(!i&&g==c.e.data.length)h=c;else{h=new M;f=c.e;b=g-i|0;P();j=D(b);h.e=j;L(f,i,j,0,b);}break a;}c=new Y;P();h=new O;h.b=D(16);N(h,h.a,b,10);k=new M;f=h.b;i=h.a;j
=D(i);k.e=j;L(f,0,j,0,i);c.c=1;c.d=1;c.f=k;H(c);}c=new Y;P();h=new O;h.b=D(16);N(h,h.a,b,10);k=new M;f=h.b;i=h.a;j=D(i);k.e=j;L(f,0,j,0,i);c.c=1;c.d=1;c.f=k;H(c);}}return h;}}c=new Y;P();h=new O;h.b=D(16);N(h,h.a,b,10);k=new M;f=h.b;i=h.a;j=D(i);k.e=j;L(f,0,j,0,i);c.c=1;c.d=1;c.f=k;H(c);}
function Mp(a,b){var c,d,e,f,g,h,i,j,k;c=a.hw;d=c.e.data.length;if(b>=0&&b<=d){e=a.dp;e.dn=0;e.hW=2;f=e.bI.data;g=0;h=f.length;if(g>h){c=new Be;CQ(c);H(c);}while(g<h){i=g+1|0;f[g]=(-1);g=i;}f=e.bz.data;g=0;h=f.length;if(g>h){c=new Be;CQ(c);H(c);}while(g<h){i=g+1|0;f[g]=(-1);g=i;}e.ep=e.c$;e.hW=1;e.ep=b;d=e.h1;if(d<0)d=b;e.h1=d;b=a.uU.cZ(b,c,e);if(b==(-1))a.dp.dc=1;if(b>=0){c=a.dp;b=c.dn;if(b){f=c.bI.data;if(f[0]==(-1)){g=c.ep;f[0]=g;f[1]=g;}if(!b){c=new BH;c.c=1;c.d=1;B9(c);H(c);}if(0<c.d0){c.h1=f[1];return 1;}c
=new Y;P();e=new O;CI(e);e.b=D(16);N(e,e.a,0,10);j=new M;f=e.b;d=e.a;k=D(d);j.e=k;L(f,0,k,0,d);c.c=1;c.d=1;c.f=j;H(c);}}a.dp.ep=(-1);return 0;}c=new Y;P();e=new O;e.b=D(16);N(e,e.a,b,10);j=new M;f=e.b;d=e.a;k=D(d);j.e=k;L(f,0,k,0,d);c.c=1;c.d=1;c.f=j;H(c);}
function G9(a){var b,c,d,e,f,g,h,i,j,k,l;b=a.hw.e.data.length;c=a.dp;if(!c.lg)b=a.kN;if(c.ep>=0&&c.hW==1){d=c.dn;if(!d){c=new BH;c.c=1;c.d=1;H(c);}e=Bm(0,c.d0);if(e>=0){c=new Y;P();f=new O;f.b=D(16);N(f,f.a,0,10);g=new M;h=f.b;b=f.a;i=D(b);g.e=i;L(h,0,i,0,b);c.c=1;c.d=1;c.f=g;H(c);}h=c.bI.data;j=h[1];c.ep=j;if(!d){c=new BH;c.c=1;c.d=1;H(c);}if(e>=0){c=new Y;P();f=new O;f.b=D(16);N(f,f.a,0,10);g=new M;h=f.b;b=f.a;i=D(b);g.e=i;L(h,0,i,0,b);c.c=1;c.d=1;c.f=g;H(c);}k=h[1];if(!d){c=new BH;c.c=1;c.d=1;H(c);}if(e<
0){if(k==h[0])c.ep=j+1|0;l=c.ep;return l<=b&&Mp(a,l)?1:0;}c=new Y;P();f=new O;f.b=D(16);N(f,f.a,0,10);g=new M;h=f.b;b=f.a;i=D(b);g.e=i;L(h,0,i,0,b);c.c=1;c.d=1;c.f=g;H(c);}return Mp(a,a.kK);}
function AE2(a,b,c){var d,e;a.kK=(-1);a.kN=(-1);a.xy=b;a.uU=b.s5;a.hw=c;a.kK=0;d=c.e.data.length;a.kN=d;e=AYp(c,0,d,b.hK,b.fu+1|0,b.cf+1|0);a.dp=e;e.gk=1;}
var B8=G(Be);
function SD(){var a=new B8();AGA(a);return a;}
function A6u(a){var b=new B8();IL(b,a);return b;}
function AGA(a){a.c=1;a.d=1;}
function IL(a,b){a.c=1;a.d=1;a.f=b;}
function NG(){C.call(this);this.fy=null;}
function AHF(a){var b=new NG();ATx(b,a);return b;}
function ATx(a,b){a.fy=b;}
function I$(a,b){}
function AEJ(a,b){var c,d,e,f,g,h,i,j,$$je;if(b===null)b=Bg(C,0);a:{b:{c:{try{c=ACi(a.fy,b);}catch($$e){$$je=Bw($$e);if($$je instanceof Be){c=$$je;break b;}else if($$je instanceof La){c=$$je;break c;}else if($$je instanceof JD){c=$$je;break a;}else if($$je instanceof MT){c=$$je;d=new Dk;e=a.fy.fe;if(e.X===null)e.X=$rt_str(e.C.$meta.name);e=e.X;f=new O;f.b=D(16);I(f,f.a,B(168));g=f.a;if(e===null)e=B(2);I(f,g,e);h=new M;b=f.b;i=f.a;P();j=D(i);h.e=j;L(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cP=c;H(d);}else{throw $$e;}}return c;}d
=new Dk;e=a.fy.fe;if(e.X===null)e.X=$rt_str(e.C.$meta.name);e=e.X;f=new O;f.b=D(16);I(f,f.a,B(169));DD(f,f.a,e);ABF(d,Cm(f),c);H(d);}d=new Dk;e=a.fy.fe;if(e.X===null)e.X=$rt_str(e.C.$meta.name);e=e.X;f=new O;f.b=D(16);I(f,f.a,B(170));g=f.a;if(e===null)e=B(2);I(f,g,e);h=new M;b=f.b;i=f.a;P();j=D(i);h.e=j;L(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cP=c;H(d);}d=new Dk;e=a.fy.fe;if(e.X===null)e.X=$rt_str(e.C.$meta.name);e=e.X;f=new O;f.b=D(16);I(f,f.a,B(169));g=f.a;if(e===null)e=B(2);I(f,g,e);h=new M;b=f.b;i=f.a;P();j=D(i);h.e
=j;L(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cP=c;H(d);}
var J4=G(BF);
var EG=G(CE);
var G$=G(EG);
function B3(){var a=this;C.call(a);a.p=null;a.cV=0;a.x=null;a.bP=0;}
var AZF=0;function Jc(a){var b,c;b=AZF;AZF=b+1|0;c=new Bi;c.b=D(20);a.x=(N(c,c.a,b,10)).s();}
function AJm(a,b,c,d){var e;e=d.U;while(true){if(b>e)return (-1);if(a.o(b,c,d)>=0)break;b=b+1|0;}return b;}
function ALd(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.o(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIL(a,b){a.bP=b;}
function AHG(a){return a.bP;}
function AON(a){var b,c,d,e,f,g,h;b=a.x;c=a.S();d=new O;d.b=D(16);e=d.a;Bc(d,e,e+1|0);d.b.data[e]=60;f=d.a;if(b===null)b=B(2);I(d,f,b);e=d.a;Bc(d,e,e+1|0);d.b.data[e]=58;f=d.a;if(c===null)c=B(2);I(d,f,c);e=d.a;Bc(d,e,e+1|0);g=d.b;g.data[e]=62;b=new M;e=d.a;P();h=D(e);b.e=h;L(g,0,h,0,e);return b;}
function ARo(a){var b,c,d,e,f,g,h;b=a.x;c=a.S();d=new O;d.b=D(16);e=d.a;Bc(d,e,e+1|0);d.b.data[e]=60;f=d.a;if(b===null)b=B(2);I(d,f,b);e=d.a;Bc(d,e,e+1|0);d.b.data[e]=58;f=d.a;if(c===null)c=B(2);I(d,f,c);e=d.a;Bc(d,e,e+1|0);g=d.b;g.data[e]=62;b=new M;e=d.a;P();h=D(e);b.e=h;L(g,0,h,0,e);return b;}
function ASd(a){return a.p;}
function LO(a,b){a.p=b;}
function ATj(a,b){return 1;}
function AUp(a){return null;}
function JE(a){var b;a.cV=1;b=a.p;if(b!==null){if(!b.cV){b=b.gv();if(b!==null){a.p.cV=1;a.p=b;}a.p.eY();}else if(b instanceof Hj&&b.c6.m0)a.p=b.p;}}
function AU1(){AZF=1;}
var ADZ=G();
var Wz=G();
var AEH=G();
var Kd=G(0);
var NK=G();
function AH4(a,b){var c;Bz();b=b===null?null:b instanceof $rt_objcls()?b:Cg(b);c=A6q;b=b===null?null:b.O;c.delete(b);}
var Xb=G();
var NL=G();
function AFy(a,b){var c;Bz();b=b===null?null:b instanceof $rt_objcls()?b:Cg(b);c=A6r;b=b===null?null:b.O;c.delete(b);}
var Mg=G(0);
function Hi(){var a=this;C.call(a);a.cB=null;a.dL=null;}
function Iq(){var a=this;Hi.call(a);a.lA=null;a.tD=0;}
function De(){var a=this;B3.call(a);a.m0=0;a.co=0;}
var A6m=null;function Fr(){Fr=W(De);AKa();}
function AGN(a,b,c,d){var e,f,g;e=a.co;f=d.bI.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.p.o(b,c,d);if(g<0){b=a.co;d.bI.data[(b*2|0)+1|0]=e;}return g;}
function AOt(a){return a.co;}
function ALP(a){return B(171);}
function AHo(a,b){return 0;}
function AKa(){var b,c,d;b=new Ng;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);b.x=(N(d,d.a,c,10)).s();A6m=b;}
function IY(){var a=this;C.call(a);a.bT=null;a.ct=0;a.fp=0;a.u8=0;a.fd=0;a.b3=0;a.D=0;a.db=0;a.bQ=null;a.eK=null;a.E=0;a.cg=0;a.gO=0;a.jj=0;a.cN=null;}
var A6v=null;var A6w=null;var A6x=0;function AWw(a,b){var c=new IY();ATn(c,a,b);return c;}
function ATn(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{a.fp=1;a.cN=b;if((c&16)>0){d=new O;d.b=D(16);I(d,d.a,B(172));e=0;while(true){f=Ki(b,B(173),e);if(f<0){g=b.e;f=g.data.length;h=Bm(e,f);if(h>0){b=new Y;b.c=1;b.d=1;H(b);}if(!h)b=A32;else if(!(!e&&f==f)){b=new M;h=f-e|0;i=D(h);b.e=i;L(g,e,i,0,h);}I(d,d.a,b);I(d,d.a,B(173));b=new M;i=d.b;f=d.a;g=D(f);b.e=g;L(i,0,g,0,f);break a;}j=f+2|0;h=Bm(e,j);if(h>0)break;if(!h)k=A32;else if(!e&&j==b.e.data.length)k=b;else{k=new M;g=b.e;h=j-e|0;i=D(h);k.e=i;L(g,e,i,0,h);}I(d,d.a,
k);I(d,d.a,B(174));e=j;}b=new Y;b.c=1;b.d=1;H(b);}else if((c&128)<=0){}}i=b.e.data;f=i.length;g=D(f+2|0);a.bT=g;l=D(f);m=l.data;h=0;e=m.length;while(h<e){m[h]=i[h];h=h+1|0;}L(l,0,g,0,f);i=a.bT.data;h=i.length;i[h-1|0]=0;i[h-2|0]=0;a.db=h;a.ct=c;Cr(a);Cr(a);}
function FK(a){return a.b3;}
function NE(a,b){if(b>0&&b<3)a.fp=b;if(b==1){a.D=a.b3;a.eK=a.bQ;a.E=a.jj;a.jj=a.gO;Cr(a);}}
function UF(a,b){var c;a.ct=b;a.D=a.b3;a.eK=a.bQ;c=a.gO;a.E=c+1|0;a.jj=c;Cr(a);}
function N9(a){return a.bQ;}
function I7(a){return a.bQ===null?0:1;}
function BP(a){Cr(a);return a.fd;}
function GT(a){var b;b=a.bQ;Cr(a);return b;}
function F8(a){return a.D;}
function Wj(a){return a.fd;}
function Cr(a){var b,c,d,e,f,g,h,$$je;a.fd=a.b3;a.b3=a.D;a.bQ=a.eK;a.gO=a.jj;a.jj=a.E;while(true){b=0;c=a.E>=a.bT.data.length?0:Lu(a);a.D=c;a.eK=null;if(a.fp==4){if(c!=92)return;c=a.E;d=a.bT.data;c=c>=d.length?0:d[D$(a)];a.D=c;switch(c){case 69:break;default:a.D=92;a.E=a.cg;return;}a.fp=a.u8;a.D=a.E>(a.bT.data.length-2|0)?0:Lu(a);}a:{c=a.D;if(c!=92){e=a.fp;if(e==1)switch(c){case 36:a.D=(-536870876);break a;case 40:if(a.bT.data[a.E]!=63){a.D=(-2147483608);break a;}D$(a);c=a.bT.data[a.E];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.D=(-134217688);D$(a);break b;default:H(Eh(B(42),Ef(a),a.E));}a.D=(-67108824);D$(a);}else{switch(c){case 33:break;case 60:D$(a);c=a.bT.data[a.E];e=1;break b;case 61:a.D=(-536870872);D$(a);break b;case 62:a.D=(-33554392);D$(a);break b;default:f=AEp(a);a.D=f;if(f<256){a.ct=f;f=f<<16;a.D=f;a.D=(-1073741784)|f;break b;}f=f&255;a.D=f;a.ct=f;f=f<<16;a.D=f;a.D=(-16777176)|f;break b;}a.D=(-268435416);D$(a);}}if(!e)break;}break a;case 41:a.D=(-536870871);break a;case 42:case 43:case 63:e
=a.E;d=a.bT.data;switch(e>=d.length?42:d[e]){case 43:a.D=c|(-2147483648);D$(a);break a;case 63:a.D=c|(-1073741824);D$(a);break a;default:}a.D=c|(-536870912);break a;case 46:a.D=(-536870866);break a;case 91:a.D=(-536870821);NE(a,2);break a;case 93:if(e!=2)break a;a.D=(-536870819);break a;case 94:a.D=(-536870818);break a;case 123:a.eK=ADp(a,c);break a;case 124:a.D=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.D=(-536870874);break a;case 45:a.D=(-536870867);break a;case 91:a.D=(-536870821);break a;case 93:a.D
=(-536870819);break a;case 94:a.D=(-536870818);break a;default:}}else{c=a.E>=(a.bT.data.length-2|0)?(-1):Lu(a);c:{a.D=c;switch(c){case -1:H(Eh(B(42),Ef(a),a.E));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.D
=AAh(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fp!=1)break a;a.D=(-2147483648)|c;break a;case 65:a.D=(-2147483583);break a;case 66:a.D=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:H(Eh(B(42),Ef(a),a.E));case 68:case 83:case 87:case 100:case 115:case 119:a.eK=Pu(AIb(a.bT,
a.cg,1),0);a.D=0;break a;case 71:a.D=(-2147483577);break a;case 80:case 112:break c;case 81:a.u8=a.fp;a.fp=4;b=1;break a;case 90:a.D=(-2147483558);break a;case 97:a.D=7;break a;case 98:a.D=(-2147483550);break a;case 99:c=a.E;d=a.bT.data;if(c>=(d.length-2|0))H(Eh(B(42),Ef(a),a.E));a.D=d[D$(a)]&31;break a;case 101:a.D=27;break a;case 102:a.D=12;break a;case 110:a.D=10;break a;case 114:a.D=13;break a;case 116:a.D=9;break a;case 117:a.D=Oh(a,4);break a;case 120:a.D=Oh(a,2);break a;case 122:a.D=(-2147483526);break a;default:}break a;}g
=ZP(a);h=0;if(a.D==80)h=1;try{a.eK=Pu(g,h);}catch($$e){$$je=Bw($$e);if($$je instanceof JI){H(Eh(B(42),Ef(a),a.E));}else{throw $$e;}}a.D=0;}}if(b)continue;else break;}}
function ZP(a){var b,c,d,e,f,g,h,i;b=new O;b.b=D(10);c=a.E;d=a.bT;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=new M;a.cg=c;if(a.ct&4)C6(a);else a.E=c+1|0;f=a.cg;P();e=D(1);b.e=e;L(d,f,e,0,1);g=new O;g.b=D(16);I(g,g.a,B(175));I(g,g.a,b);b=new M;d=g.b;h=g.a;e=D(h);b.e=e;L(d,0,e,0,h);return b;}a.cg=c;if(a.ct&4)C6(a);else a.E=c+1|0;c=0;a:{while(true){h=a.E;d=a.bT.data;if(h>=(d.length-2|0))break;a.cg=h;if(a.ct&4)C6(a);else a.E=h+1|0;c=d[a.cg];if(c==125)break a;h=b.a;Bc(b,h,h+1|0);b.b.data[h]=c;}}if(c!=125){b=new C_;i
=a.cN;c=a.E;b.c=1;b.d=1;b.bD=(-1);b.c2=B(42);b.c0=i;b.bD=c;H(b);}}c=b.a;if(!c){b=new C_;i=a.cN;c=a.E;b.c=1;b.d=1;b.bD=(-1);b.c2=B(42);b.c0=i;b.bD=c;H(b);}g=new M;d=b.b;P();e=D(c);g.e=e;L(d,0,e,0,c);h=g.e.data.length;if(h==1){b=new O;b.b=D(16);I(b,b.a,B(175));I(b,b.a,g);g=new M;d=b.b;h=b.a;e=D(h);g.e=e;L(d,0,e,0,h);return g;}b:{c:{if(h>3){if(g===B(175)?1:I6(g,B(175),0))break c;if(g===B(176)?1:I6(g,B(176),0))break c;}break b;}g=Fv(g,2,g.e.data.length);}return g;}
function ADp(a,b){var c,d,e,f,g,h,i,$$je;c=new O;c.b=D(4);d=(-1);e=2147483647;a:{while(true){f=a.E;g=a.bT.data;if(f>=g.length)break a;a.cg=f;if(a.ct&4)C6(a);else a.E=f+1|0;b=g[a.cg];if(b==125)break a;if(b==44&&d<0)try{d=J1(Cm(c),10);ADF(c,0,GO(c));continue;}catch($$e){$$je=Bw($$e);if($$je instanceof B8){break;}else{throw $$e;}}h=b&65535;f=c.a;Bc(c,f,f+1|0);c.b.data[f]=h;}c=new C_;i=a.cN;b=a.E;c.c=1;c.d=1;c.bD=(-1);c.c2=B(42);c.c0=i;c.bD=b;H(c);}if(b!=125){c=new C_;i=a.cN;b=a.E;c.c=1;c.d=1;c.bD=(-1);c.c2=B(42);c.c0
=i;c.bD=b;H(c);}if(c.a>0)b:{try{e=J1(Cm(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bw($$e);if($$je instanceof B8){}else{throw $$e;}}c=new C_;i=a.cN;b=a.E;c.c=1;c.d=1;c.bD=(-1);c.c2=B(42);c.c0=i;c.bD=b;H(c);}else if(d<0){c=new C_;i=a.cN;b=a.E;c.c=1;c.d=1;c.bD=(-1);c.c2=B(42);c.c0=i;c.bD=b;H(c);}if((d|e|(e-d|0))<0){c=new C_;i=a.cN;b=a.E;c.c=1;c.d=1;c.bD=(-1);c.c2=B(42);c.c0=i;c.bD=b;H(c);}f=a.E;g=a.bT.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.D=(-2147483525);a.cg=f;if(a.ct&4)C6(a);else a.E=f+
1|0;break c;case 63:a.D=(-1073741701);a.cg=f;if(a.ct&4)C6(a);else a.E=f+1|0;break c;default:}a.D=(-536870789);}c=new MH;c.fo=d;c.fm=e;return c;}
function Ef(a){return a.cN;}
function KC(a){return !a.b3&&!a.D&&a.E==a.db&&!(a.bQ===null?0:1)?1:0;}
function ALF(b){return b<0?0:1;}
function Sq(a){var b,c;b=a.b3;c=!b&&!a.D&&a.E==a.db&&!(a.bQ===null?0:1)?1:0;return !c&&!(a.bQ===null?0:1)&&(b<0?0:1)?1:0;}
function ABz(a){var b;b=a.b3;return b<=57343&&b>=56320?1:0;}
function AN0(b){return b<=56319&&b>=55296?1:0;}
function AIn(b){return b<=57343&&b>=56320?1:0;}
function Oh(a,b){var c,d,e,f,g,h,i,j,$$je;c=new O;c.b=D(b);d=a.bT.data.length-2|0;e=0;while(true){f=Bm(e,b);if(f>=0)break;g=a.E;if(g>=d)break;h=a.bT;a.cg=g;if(a.ct&4)C6(a);else a.E=g+1|0;g=h.data[a.cg];i=c.a;Bc(c,i,i+1|0);c.b.data[i]=g;e=e+1|0;}if(!f)a:{try{b=J1(Cm(c),16);}catch($$e){$$je=Bw($$e);if($$je instanceof B8){break a;}else{throw $$e;}}return b;}c=new C_;j=a.cN;b=a.E;c.c=1;c.d=1;c.bD=(-1);c.c2=B(42);c.c0=j;c.bD=b;H(c);}
function AAh(a){var b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.bT.data;e=d.length-2|0;f=Ij(d[a.E]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.E;a.cg=g;if(a.ct&4)C6(a);else a.E=g+1|0;a:{while(true){if(c>=b)break a;h=a.E;if(h>=e)break a;i=Ij(a.bT.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.E;a.cg=g;if(a.ct&4)C6(a);else a.E=g+1|0;c=c+1|0;}}return f;}j=new C_;k=a.cN;b=a.E;j.c=1;j.d=1;j.bD=(-1);j.c2=B(42);j.c0=k;j.bD=b;H(j);}
function AEp(a){var b,c,d,e,f,g,h;b=1;c=a.ct;a:while(true){d=a.E;e=a.bT.data;if(d>=e.length){f=new C_;g=a.cN;f.c=1;f.d=1;f.bD=(-1);f.c2=B(42);f.c0=g;f.bD=d;H(f);}b:{c:{switch(e[d]){case 41:a.cg=d;if(a.ct&4)C6(a);else a.E=d+1|0;return c|256;case 45:if(!b){h=new C_;g=a.cN;h.c=1;h.d=1;h.bD=(-1);h.c2=B(42);h.c0=g;h.bD=d;H(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.cg=d;if(a.ct&4)C6(a);else a.E=d+1|0;}a.cg=d;if(a.ct&4)C6(a);else a.E=d+1|0;return c;}
function D$(a){var b;b=a.E;a.cg=b;if(a.ct&4)C6(a);else a.E=b+1|0;return a.cg;}
function C6(a){var b,c,d,e;b=a.bT.data.length-2|0;a.E=a.E+1|0;a:while(true){c=a.E;if(c<b){b:{c=a.bT.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CC(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.E=a.E+1|0;continue;}}c=a.E;if(c>=b)break;d=a.bT.data;if(d[c]!=35)break;a.E=c+1|0;while(true){e=a.E;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.E
=e+1|0;}}return c;}
function AJj(b){var c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?F9([d,e]):F9([d,e,4519+f|0]);}return null;}
function ANT(b){return A6w.lS(b)==A6x?0:1;}
function AQo(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function Lu(a){var b,c,d,e,f;b=a.bT;c=a.E;a.cg=c;if(a.ct&4)C6(a);else a.E=c+1|0;b=b.data;d=a.cg;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.bT.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.E;a.cg=d;if(a.ct&4)C6(a);else a.E=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;}
function Fz(a){return a.gO;}
function C_(){var a=this;Be.call(a);a.c2=null;a.c0=null;a.bD=0;}
function Eh(a,b,c){var d=new C_();AGl(d,a,b,c);return d;}
function AGl(a,b,c,d){a.c=1;a.d=1;a.bD=(-1);a.c2=b;a.c0=c;a.bD=d;}
function AUk(a){var b,c,d,e,f,g,h,i,j,k;b=B(42);c=a.bD;if(c>=1){d=D(c);e=d.data;c=0;f=e.length;if(c>f){b=new Be;b.c=1;b.d=1;H(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new M;P();e=D(f);b.e=e;L(d,0,e,0,f);}h=a.c2;i=a.c0;if(i!==null&&i.e.data.length){j=a.bD;k=new O;k.b=D(16);N(k,k.a,j,10);I(k,k.a,B(58));I(k,k.a,i);I(k,k.a,B(58));I(k,k.a,b);b=new M;d=k.b;c=k.a;P();e=D(c);b.e=e;L(d,0,e,0,c);}else b=B(42);i=new O;i.b=D(16);j=i.a;if(h===null)h=B(2);I(i,j,h);I(i,i.a,b);b=new M;d=i.b;c=i.a;P();e=D(c);b.e=e;L(d,0,e,0,c);return b;}
var Ie=G(0);
var Hp=G();
function V6(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.be;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BZ;b.C=f;c=b;f.classObject=c;}}b=Dd(b);if(b===null){b=new CB;b.c=1;b.d=1;H(b);}if(b===J($rt_voidcls())){b=new Be;b.c=1;b.d=1;H(b);}if(d<0){b=new C3;b.c=1;b.d=1;H(b);}b=Dv(b.C,d);}e=0;g=0;h=a.cy;i=a.be;d=Bm(h,h);a:{while(true){j=Bm(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new LL;b.c=1;b.d=1;H(b);}k=g+1|0;if(g<0)break a;if(j>=
0)break a;b.data[e]=a.bO.data[g];e=h;g=k;}return b;}b=new Y;b.c=1;b.d=1;H(b);}
var Pp=G(0);
var My=G(0);
function J6(){Hp.call(this);this.cy=0;}
var QI=G(0);
function Id(){var a=this;J6.call(a);a.bO=null;a.be=0;}
function AXI(){var a=new Id();AKH(a);return a;}
function AKH(a){a.bO=Bg(C,10);}
function F7(a,b){var c,d,e,f,g,h,i,j;c=a.bO;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BZ;i.C=h;j=i;h.classObject=j;}}h=Dd(i);if(h===null){i=new CB;i.c=1;i.d=1;H(i);}if(h===J($rt_voidcls())){i=new Be;i.c=1;i.d=1;H(i);}if(f<0){i=new C3;i.c=1;i.d=1;H(i);}j=Dv(h.C,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.bO=j;}}
function HD(a,b){var c;if(b>=0&&b<a.be)return a.bO.data[b];c=new Y;c.c=1;c.d=1;H(c);}
function Le(a){return a.be;}
function Jp(a,b){var c,d;F7(a,a.be+1|0);c=a.bO.data;d=a.be;a.be=d+1|0;c[d]=b;a.cy=a.cy+1|0;return 1;}
function XV(a,b,c){var d,e,f;if(b>=0){d=a.be;if(b<=d){F7(a,d+1|0);d=a.be;e=d;while(e>b){f=a.bO.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.bO.data[b]=c;a.be=d+1|0;a.cy=a.cy+1|0;return;}}c=new Y;c.c=1;c.d=1;H(c);}
function Rd(a,b){var c,d,e,f;if(b>=0){c=a.be;if(b<c){d=a.bO.data;e=d[b];c=c-1|0;a.be=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.cy=a.cy+1|0;return e;}}e=new Y;e.c=1;e.d=1;H(e);}
var Pl=G(De);
function AF0(a,b,c,d){var e,f;e=a.co;f=d.bz.data;f[e]=b-f[e]|0;return a.p.o(b,c,d);}
function AI3(a){return B(177);}
function ARI(a,b){return 0;}
var Sw=G(De);
function AII(a,b,c,d){return b;}
function AME(a){return B(178);}
var Oj=G(De);
function AHD(a,b,c,d){var e;e=a.co;if(d.bz.data[e]!=b)b=(-1);return b;}
function ATd(a){return B(179);}
function PS(){De.call(this);this.qz=0;}
function AGg(a,b,c,d){var e,f;e=a.co;f=d.bz.data;f[e]=b-f[e]|0;a.qz=b;return b;}
function ASf(a){return B(180);}
function AQm(a,b){return 0;}
var Hv=G(De);
function AWP(){var a=new Hv();AS8(a);return a;}
function AS8(a){var b,c;Fr();b=AZF;AZF=b+1|0;c=new Bi;c.b=D(20);a.x=(N(c,c.a,b,10)).s();a.co=0;}
function ATF(a,b,c,d){if(d.hW!=1&&b!=d.U)return (-1);d.dn=1;d.bI.data[1]=b;return b;}
function AHV(a){return B(181);}
function Co(){B3.call(this);this.bl=0;}
function TC(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.p=b;a.bl=1;a.bP=1;}
function AU6(a,b,c,d){var e;if((b+a.cA()|0)>d.U){d.dc=1;return (-1);}e=a.cd(b,c);if(e<0)return (-1);return a.p.o(b+e|0,c,d);}
function ASD(a){return a.bl;}
function AMy(a,b){return 1;}
var Rz=G(Co);
function I5(a){var b=new Rz();AOD(b,a);return b;}
function AOD(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.p=b;a.bl=1;a.bP=1;a.bl=0;}
function AR7(a,b,c){return 0;}
function AKm(a,b,c,d){var e,f,g,h,i;e=d.U;f=d.c$;a:{b:{while(true){g=Bm(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;h=c.e.data;i=h.length;if(b>=i)break b;if(((h[b]&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=i)break a;if((h[g]&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.p.o(b,c,d)>=0)break;b=b+1|0;}return b;}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}
function AIs(a,b,c,d,e){var f,g,h,i,j;f=e.U;g=e.c$;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;h=d.e.data;i=h.length;if(c>=i)break b;if(((h[c]&64512)!=56320?0:1)&&c>g){j=c-1|0;if(j<0)break a;if(j>=i)break a;if((h[j]&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.p.o(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new X;d.c=1;d.d=1;H(d);}d=new X;d.c=1;d.d=1;H(d);}
function ALR(a){return B(182);}
function AGa(a,b){return 0;}
function Ch(){var a=this;B3.call(a);a.bS=null;a.c6=null;a.bG=0;}
function A6y(){var a=new Ch();UU(a);return a;}
function AW9(a,b){var c=new Ch();APL(c,a,b);return c;}
function UU(a){var b,c;b=AZF;AZF=b+1|0;c=new Bi;c.b=D(20);a.x=(N(c,c.a,b,10)).s();}
function APL(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.bS=b;a.c6=c;a.bG=c.co;}
function ALf(a,b,c,d){var e,f,g,h,i,j;e=a.bS;if(e===null)return (-1);f=a.bG;g=d.bI.data;h=f*2|0;i=g[h];g[h]=b;f=e.be;j=0;a:{while(true){if(j>=f){b=a.bG;d.bI.data[b*2|0]=i;return (-1);}e=a.bS;if(j<0)break a;if(j>=e.be)break a;h=e.bO.data[j].o(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new Y;c.c=1;c.d=1;H(c);}
function AQf(a,b){a.c6.p=b;}
function AMJ(a){return B(183);}
function ANI(a,b){var c,d,e,f,g;a:{b:{c=a.bS;if(c!==null){d=0;e=c.cy;f=c.be;while(true){if(!(d>=f?0:1))break b;if(e<c.cy){b=new LL;b.c=1;b.d=1;H(b);}g=d+1|0;if(d<0)break a;if(d>=c.be)break a;if(c.bO.data[d].cx(b))break;d=g;}return 1;}}return 0;}b=new Y;b.c=1;b.d=1;H(b);}
function AQ1(a,b){var c,d,e;c=a.bG;d=b.bI.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;}
function AIi(a){var b,c,d,e;a.cV=1;b=a.c6;if(b!==null&&!b.cV)JE(b);a:{b:{b=a.bS;if(b!==null){c=b.be;d=0;while(true){if(d>=c)break b;b=a.bS;if(d<0)break a;if(d>=b.be)break a;b=b.bO.data[d];e=b.gv();if(e===null)e=b;else{b.cV=1;Rd(a.bS,d);XV(a.bS,d,e);}if(!e.cV)e.eY();d=d+1|0;}}}if(a.p!==null)JE(a);return;}b=new Y;b.c=1;b.d=1;H(b);}
var L5=G(Ch);
function AYK(a,b){var c=new L5();AGv(c,a,b);return c;}
function AGv(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.bS=b;a.c6=c;a.bG=c.co;}
function APW(a,b,c,d){var e,f,g,h,i,j;e=a.bG;f=d.bz.data;g=f[e];f[e]=b;h=a.bS.be;e=0;a:{while(true){if(e>=h){b=a.bG;d.bz.data[b]=g;return (-1);}i=a.bS;if(e<0)break a;if(e>=i.be)break a;j=i.bO.data[e].o(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new Y;c.c=1;c.d=1;H(c);}
function ANY(a){return B(184);}
function ARg(a,b){var c;c=a.bG;return !b.bz.data[c]?0:1;}
var E4=G(L5);
function AVJ(a,b){var c=new E4();AMf(c,a,b);return c;}
function AMf(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.bS=b;a.c6=c;a.bG=c.co;}
function AJp(a,b,c,d){var e,f,g,h,i,j;e=a.bG;f=d.bz.data;g=f[e];f[e]=b;h=a.bS.be;i=0;a:{while(i<h){j=a.bS;if(i<0)break a;if(i>=j.be)break a;if(j.bO.data[i].o(b,c,d)>=0)return a.p.o(a.c6.qz,c,d);i=i+1|0;}b=a.bG;d.bz.data[b]=g;return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function AQ5(a,b){a.p=b;}
function AF7(a){return B(184);}
var SZ=G(E4);
function AWf(a,b){var c=new SZ();AK8(c,a,b);return c;}
function AK8(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.bS=b;a.c6=c;a.bG=c.co;}
function AP9(a,b,c,d){var e,f,g;e=a.bS.be;f=0;a:{while(f<e){g=a.bS;if(f<0)break a;if(f>=g.be)break a;if(g.bO.data[f].o(b,c,d)>=0)return a.p.o(b,c,d);f=f+1|0;}return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function ATq(a,b){return 0;}
function AUn(a){return B(185);}
var ACH=G(E4);
function AVz(a,b){var c=new ACH();AKl(c,a,b);return c;}
function AKl(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.bS=b;a.c6=c;a.bG=c.co;}
function AHf(a,b,c,d){var e,f,g;e=a.bS.be;f=0;a:{while(true){if(f>=e)return a.p.o(b,c,d);g=a.bS;if(f<0)break a;if(f>=g.be)break a;if(g.bO.data[f].o(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function ASO(a,b){return 0;}
function AK6(a){return B(186);}
var Xu=G(E4);
function AWc(a,b){var c=new Xu();ASI(c,a,b);return c;}
function ASI(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.bS=b;a.c6=c;a.bG=c.co;}
function AIc(a,b,c,d){var e,f,g,h,i;e=a.bS.be;f=d.lg?0:d.c$;a:{b:{g=a.p.o(b,c,d);if(g>=0){h=a.bG;d.bz.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.bS;if(h<0)break a;if(h>=i.be)break a;if(i.bO.data[h].c3(f,b,c,d)>=0){b=a.bG;d.bz.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function AVq(a,b){return 0;}
function APz(a){return B(187);}
var Z5=G(E4);
function AWA(a,b){var c=new Z5();AFX(c,a,b);return c;}
function AFX(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.bS=b;a.c6=c;a.bG=c.co;}
function AFo(a,b,c,d){var e,f,g;e=a.bS.be;f=a.bG;d.bz.data[f]=b;f=0;a:{while(true){if(f>=e)return a.p.o(b,c,d);g=a.bS;if(f<0)break a;if(f>=g.be)break a;if(g.bO.data[f].c3(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function ARz(a,b){return 0;}
function AHE(a){return B(188);}
function Hj(){Ch.call(this);this.ds=null;}
function AXN(a,b){var c=new Hj();AI0(c,a,b);return c;}
function AI0(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.ds=b;a.c6=c;a.bG=c.co;}
function AFM(a,b,c,d){var e,f,g;e=a.bG;f=d.bI.data;e=e*2|0;g=f[e];f[e]=b;e=a.ds.o(b,c,d);if(e>=0)return e;e=a.bG;d.bI.data[e*2|0]=g;return (-1);}
function AN9(a,b,c,d){var e;e=a.ds.cZ(b,c,d);if(e>=0){b=a.bG;d.bI.data[b*2|0]=e;}return e;}
function ARO(a,b,c,d,e){var f;f=a.ds.c3(b,c,d,e);if(f>=0){b=a.bG;e.bI.data[b*2|0]=f;}return f;}
function ANA(a,b){return a.ds.cx(b);}
function AQh(a){var b,c,d,e,f;b=new MK;c=a.ds;d=a.c6;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);b.x=(N(f,f.a,e,10)).s();b.ds=c;b.c6=d;b.bG=d.co;a.p=b;return b;}
function AUu(a){var b;a.cV=1;b=a.c6;if(b!==null&&!b.cV)JE(b);b=a.ds;if(b!==null&&!b.cV){b=b.gv();if(b!==null){a.ds.cV=1;a.ds=b;}a.ds.eY();}}
var Hz=G();
function Bo(){var a=this;Hz.call(a);a.Q=0;a.cT=0;a.y=null;a.l0=null;a.mF=null;a.bu=0;}
var A6z=null;function Bv(){Bv=W(Bo);AI5();}
function KA(a){var b;Bv();b=new Bp;b.v=Z(64);a.y=b;}
function AHi(a){return null;}
function AGr(a){return a.y;}
function Ze(a){return !a.cT?(H3(a.y,0)>=2048?0:1):AAY(a.y,0)>=2048?0:1;}
function ALD(a){return a.bu;}
function ASu(a){return a;}
function T2(a){var b,c;if(a.mF===null){b=a.fE();c=new RP;c.BQ=a;c.qR=b;b=new Bp;b.v=Z(64);c.y=b;a.mF=c;E3(c,a.cT);}return a.mF;}
function If(a){var b,c;if(a.l0===null){b=a.fE();c=new RO;c.AY=a;c.uJ=b;c.vc=a;b=new Bp;b.v=Z(64);c.y=b;a.l0=c;E3(c,a.Q);a.l0.bu=a.bu;}return a.l0;}
function AUm(a){return 0;}
function E3(a,b){var c;c=a.Q;if(c^b){a.Q=c?0:1;a.cT=a.cT?0:1;}if(!a.bu)a.bu=1;return a;}
function AKp(a){return a.Q;}
function Pu(b,c){Bv();b=ADC(A6z,b);if(!c&&b.hO===null)b.hO=b.bi();else if(c&&b.hp===null)b.hp=E3(b.bi(),1);return c?b.hp:b.hO;}
function AI5(){var b;b=new HQ;ARx();A6z=b;}
function Cx(){var a=this;Bo.call(a);a.lm=0;a.mz=0;a.hM=0;a.n3=0;a.eo=0;a.dN=0;a.B=null;a.bv=null;}
function CK(a,b){var c;a:{if(a.lm){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eo){Mc(a.B,GS(b&65535));break a;}Ll(a.B,GS(b&65535));break a;}if(a.mz&&b>128){a.hM=1;if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}b=BW(A5u,b);if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}b=BW(A5s,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.n3)Mc(a.y,b-55296|0);else Ll(a.y,b-55296|0);}if(a.eo)Mc(a.B,
b);else Ll(a.B,b);if(!a.bu&&(b>=65536&&b<=1114111?1:0))a.bu=1;return a;}
function AED(a,b){var c,d,e;if(!a.bu&&b.bu)a.bu=1;if(a.n3){if(!b.cT)GD(a.y,b.fE());else DT(a.y,b.fE());}else if(!b.cT)GA(a.y,b.fE());else{Go(a.y,b.fE());DT(a.y,b.fE());a.cT=a.cT?0:1;a.n3=1;}if(!a.dN&&b.b8()!==null){if(a.eo){if(!b.Q)GD(a.B,b.b8());else DT(a.B,b.b8());}else if(!b.Q)GA(a.B,b.b8());else{Go(a.B,b.b8());DT(a.B,b.b8());a.Q=a.Q?0:1;a.eo=1;}}else{c=a.Q;d=a.bv;if(d!==null){if(!c){e=new Nw;e.xl=a;e.vE=c;e.uY=d;e.uQ=b;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}else{e=new Nx;e.CF=a;e.sO=c;e.sC=d;e.sd=b;Bv();b
=new Bp;b.v=Z(64);e.y=b;a.bv=e;}}else{if(c&&!a.eo&&(a.B.bW?0:1)){d=new Nt;d.zQ=a;d.sG=b;Bv();b=new Bp;b.v=Z(64);d.y=b;a.bv=d;}else if(!c){d=new Nr;d.nK=a;d.mg=c;d.rk=b;Bv();b=new Bp;b.v=Z(64);d.y=b;a.bv=d;}else{d=new Ns;d.oO=a;d.mt=c;d.uT=b;Bv();b=new Bp;b.v=Z(64);d.y=b;a.bv=d;}a.dN=1;}}return a;}
function BI(a,b,c){var d;if(b>c){d=new Be;d.c=1;d.d=1;H(d);}a:{b:{if(!a.lm){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CK(a,b);b=b+1|0;}}if(a.eo)Tq(a.B,b,c+1|0);else IB(a.B,b,c+1|0);}return a;}
function SU(a,b){var c,d,e,f;if(!a.bu&&b.bu)a.bu=1;if(b.hM)a.hM=1;c=a.cT;if(!(c^b.cT)){if(!c)GA(a.y,b.y);else DT(a.y,b.y);}else if(c)GD(a.y,b.y);else{Go(a.y,b.y);DT(a.y,b.y);a.cT=1;}a:{if(!a.dN){d=b.dN;if((!d?b.B:null)!==null){c=a.Q;if(!(c^b.Q)){if(!c){GA(a.B,!d?b.B:null);break a;}DT(a.B,!d?b.B:null);break a;}if(c){GD(a.B,!d?b.B:null);break a;}Go(a.B,!d?b.B:null);DT(a.B,!b.dN?b.B:null);a.Q=1;break a;}}c=a.Q;e=a.bv;if(e!==null){if(c){f=new NT;f.xF=a;f.vg=c;f.qq=e;f.qB=b;KA(f);a.bv=f;}else{f=new Nm;f.wE=a;f.uf
=c;f.uS=e;f.vo=b;Bv();f.y=AQ7(2048);a.bv=f;}}else{if(!a.eo&&(a.B.bW?0:1)){if(!c){e=new Nu;e.CM=a;e.r7=b;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}else{e=new Nv;e.xT=a;e.va=b;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}}else if(!c){e=new Ny;e.uh=a;e.s2=b;e.sF=c;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}else{e=new Nz;e.tj=a;e.tv=b;e.tE=c;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}a.dN=1;}}}
function RW(a,b){var c,d,e,f;if(!a.bu&&b.bu)a.bu=1;if(b.hM)a.hM=1;c=a.cT;if(!(c^b.cT)){if(!c)DT(a.y,b.y);else GA(a.y,b.y);}else if(!c)GD(a.y,b.y);else{Go(a.y,b.y);DT(a.y,b.y);a.cT=0;}a:{if(!a.dN){d=b.dN;if((!d?b.B:null)!==null){c=a.Q;if(!(c^b.Q)){if(!c){DT(a.B,!d?b.B:null);break a;}GA(a.B,!d?b.B:null);break a;}if(!c){GD(a.B,!d?b.B:null);break a;}Go(a.B,!d?b.B:null);DT(a.B,!b.dN?b.B:null);a.Q=0;break a;}}c=a.Q;e=a.bv;if(e!==null){if(c){f=new Np;f.ya=a;f.tR=c;f.qm=e;f.ud=b;KA(f);a.bv=f;}else{f=new No;f.xh=a;f.uk
=c;f.qQ=e;f.sL=b;Bv();f.y=AQ7(2048);a.bv=f;}}else{if(!a.eo&&(a.B.bW?0:1)){if(!c){e=new Nk;e.x2=a;e.rR=b;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}else{e=new Nl;e.Cy=a;e.rV=b;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}}else if(!c){e=new Nq;e.v6=a;e.vD=b;e.tp=c;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}else{e=new Nj;e.to=a;e.t3=b;e.sP=c;Bv();b=new Bp;b.v=Z(64);e.y=b;a.bv=e;}a.dN=1;}}}
function AIy(a,b){var c;c=a.bv;if(c!==null)return a.Q^c.A(b);return a.Q^Cw(a.B,b);}
function AVp(a){if(!a.dN)return a.B;return null;}
function AJ_(a){return a.y;}
function ATa(a){var b,c;if(a.bv!==null)return a;b=!a.dN?a.B:null;c=new Nn;c.ws=a;c.kJ=b;Bv();b=new Bp;b.v=Z(64);c.y=b;return E3(c,a.Q);}
function AO_(a){var b,c,d,e,f,g,h,i,j,k;b=new O;b.b=D(16);c=H3(a.B,0);while(c>=0){if(c<65536){d=D(1);d.data[0]=c&65535;}else d=EE([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;f=0;g=e.length;h=b.a;Bc(b,h,h+g|0);g=g+f|0;while(f<g){d=b.b.data;i=h+1|0;j=f+1|0;d[h]=e[f];h=i;f=j;}g=b.a;Bc(b,g,g+1|0);b.b.data[g]=124;c=H3(a.B,c+1|0);}h=b.a;if(h>0)RS(b,h-1|0);k=new M;d=b.b;h=b.a;P();e=D(h);k.e=e;L(d,0,e,0,h);return k;}
function AKs(a){return a.hM;}
function JI(){var a=this;BF.call(a);a.Cs=null;a.BX=null;}
function EP(){B3.call(this);this.T=null;}
function Uj(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;}
function AVa(a){return a.T;}
function ARS(a,b){return !a.T.cx(b)&&!a.p.cx(b)?0:1;}
function ATA(a,b){return 1;}
function AOB(a){var b;a.cV=1;b=a.p;if(b!==null&&!b.cV){b=b.gv();if(b!==null){a.p.cV=1;a.p=b;}a.p.eY();}b=a.T;if(b!==null){if(!b.cV){b=b.gv();if(b!==null){a.T.cV=1;a.T=b;}a.T.eY();}else if(b instanceof Hj&&b.c6.m0)a.T=b.p;}}
function DG(){EP.call(this);this.bk=null;}
function AXT(a,b,c){var d=new DG();AP0(d,a,b,c);return d;}
function AP0(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;a.bk=b;}
function AFq(a,b,c,d){var e,f;e=0;a:{while((b+a.bk.cA()|0)<=d.U){f=a.bk.cd(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.p.o(b,c,d);if(f>=0)break;b=b-a.bk.cA()|0;e=e+(-1)|0;}return f;}
function AIf(a){return B(189);}
function F6(){DG.call(this);this.gy=null;}
function AWk(a,b,c,d){var e=new F6();ANt(e,a,b,c,d);return e;}
function ANt(a,b,c,d,e){var f,g;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);a.x=(N(g,g.a,f,10)).s();a.p=d;a.T=c;a.bP=e;a.bk=c;a.gy=b;}
function AGR(a,b,c,d){var e,f,g,h,i;e=a.gy;f=e.fo;g=e.fm;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bk.cA()|0)>d.U)break a;i=a.bk.cd(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.p.o(b,c,d);if(i>=0)break;b=b-a.bk.cA()|0;h=h+(-1)|0;}return i;}if((b+a.bk.cA()|0)>d.U){d.dc=1;return (-1);}i=a.bk.cd(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AHm(a){return P9(a.gy);}
var DL=G(EP);
function AV6(a,b,c){var d=new DL();ASo(d,a,b,c);return d;}
function ASo(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;}
function AFK(a,b,c,d){var e;if(!a.T.bp(d))return a.p.o(b,c,d);e=a.T.o(b,c,d);if(e>=0)return e;return a.p.o(b,c,d);}
function AL8(a){return B(190);}
var F3=G(DG);
function AXn(a,b,c){var d=new F3();AN$(d,a,b,c);return d;}
function AN$(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;a.bk=b;}
function AOh(a,b,c,d){var e;e=a.T.o(b,c,d);if(e<0)e=a.p.o(b,c,d);return e;}
function AVt(a,b){a.p=b;a.T.bw(b);}
var ACZ=G(DG);
function AV9(a){var b=new ACZ();AMs(b,a);return b;}
function AMs(a,b){var c,d,e,f;c=b.T;d=b.p;e=b.bP;f=AZF;AZF=f+1|0;b=new Bi;b.b=D(20);a.x=(N(b,b.a,f,10)).s();a.p=d;a.T=c;a.bP=e;a.bk=c;c.bw(a);}
function AUW(a,b,c,d){while((b+a.bk.cA()|0)<=d.U&&a.bk.cd(b,c)>0){b=b+a.bk.cA()|0;}return a.p.o(b,c,d);}
function AO4(a,b,c,d){var e,f,g;e=a.p.cZ(b,c,d);if(e<0)return (-1);f=e-a.bk.cA()|0;while(f>=b&&a.bk.cd(f,c)>0){g=f-a.bk.cA()|0;e=f;f=g;}return e;}
function Bu(){var a=this;C.call(a);a.hO=null;a.hp=null;}
function ARp(a,b){if(!b&&a.hO===null)a.hO=a.bi();else if(b&&a.hp===null)a.hp=E3(a.bi(),1);if(b)return a.hp;return a.hO;}
function MH(){var a=this;Hz.call(a);a.fo=0;a.fm=0;}
function P9(a){var b,c,d,e,f,g,h;b=a.fo;c=a.fm;if(c==2147483647)d=B(42);else{d=new Bi;d.b=D(20);d=(N(d,d.a,c,10)).s();}e=new O;e.b=D(16);c=e.a;Bc(e,c,c+1|0);e.b.data[c]=123;N(e,e.a,b,10);b=e.a;Bc(e,b,b+1|0);e.b.data[b]=44;f=e.a;if(d===null)d=B(2);I(e,f,d);b=e.a;Bc(e,b,b+1|0);g=e.b;g.data[b]=125;d=new M;b=e.a;P();h=D(b);d.e=h;L(g,0,h,0,b);return d;}
var Ng=G(B3);
function AM2(a,b,c,d){return b;}
function AP5(a){return B(191);}
function AQe(a,b){return 0;}
function Bp(){var a=this;C.call(a);a.v=null;a.bW=0;}
function AQ7(a){var b=new Bp();AFN(b,a);return b;}
function AFN(a,b){var c;if(b>=0){a.v=Z(((b+32|0)-1|0)/32|0);return;}c=new C3;c.c=1;c.d=1;H(c);}
function Ll(a,b){var c,d,e;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=b/32|0;if(b>=a.bW){I4(a,d+1|0);a.bW=b+1|0;}e=a.v.data;e[d]=e[d]|1<<(b%32|0);}
function IB(a,b,c){var d,e,f,g,h,i;if(b>=0){d=Bm(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.bW){I4(a,e+1|0);a.bW=c;}if(d==e){f=a.v.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.v.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new Y;i.c=1;i.d=1;H(i);}
function Mc(a,b){var c,d,e,f,g;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=b/32|0;e=a.v.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.bW-1|0))HS(a);}}
function Tq(a,b,c){var d,e,f,g,h,i;if(b>=0&&b<=c){d=a.bW;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.v.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.v.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}HS(a);return;}i=new Y;i.c=1;i.d=1;H(i);}
function Cw(a,b){var c,d,e;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=b/32|0;e=a.v.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
function H3(a,b){var c,d,e,f,g;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=a.bW;if(b>=d)return (-1);e=b/32|0;f=a.v.data;g=f[e]>>>(b%32|0)|0;if(g)return En(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+En(f[g])|0;g=g+1|0;}return (-1);}
function AAY(a,b){var c,d,e,f,g,h;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=a.bW;if(b>=d)return b;e=b/32|0;f=a.v.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return En(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+En(f[h]^(-1))|0;h=h+1|0;}return d;}
function I4(a,b){var c,d,e,f,g,h;c=a.v.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=Z(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.v=g;}
function HS(a){var b,c,d;b=(a.bW+31|0)/32|0;a.bW=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=JW(a.v.data[c]);if(d<32)break;c=c+(-1)|0;a.bW=a.bW-32|0;}a.bW=a.bW-d|0;}}
function I0(a,b){var c,d,e,f,g;c=a.v.data;d=c.length;e=b.v.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;}
function DT(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c.length;e=b.v.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.bW;i=b.bW;if(h<i)i=h;a.bW=i;HS(a);}
function GD(a,b){var c,d,e,f,g;c=a.v.data;d=c.length;e=b.v.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}HS(a);}
function GA(a,b){var c,d,e,f,g;c=a.bW;d=b.bW;if(c>d)d=c;a.bW=d;I4(a,(d+31|0)/32|0);e=a.v.data;c=e.length;f=b.v.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}}
function Go(a,b){var c,d,e,f,g;c=a.bW;d=b.bW;if(c>d)d=c;a.bW=d;I4(a,(d+31|0)/32|0);e=a.v.data;c=e.length;f=b.v.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}HS(a);}
function Mv(){var a=this;Ch.call(a);a.kS=null;a.ml=0;}
function Xn(a,b,c,d){var e,f,g,h,i,j,k;e=d.c$;f=d.U;g=b+1|0;f=Bm(g,f);if(f>0){d.dc=1;return (-1);}if(b>=0){h=c.e.data;if(b<h.length){i=h[b];if(!a.kS.A(i))return (-1);j=i&64512;k=j!=55296?0:1;a:{if(k){if(f>=0)break a;if(g>=0){h=c.e.data;if(g<h.length){if((h[g]&64512)!=56320?0:1)return (-1);break a;}}c=new X;c.c=1;c.d=1;H(c);}if((j!=56320?0:1)&&b>e){k=b-1|0;if(k>=0){h=c.e.data;if(k<h.length){if(!((h[k]&64512)!=55296?0:1))break a;return (-1);}}c=new X;c.c=1;c.d=1;H(c);}}return a.p.o(g,c,d);}}c=new X;c.c=1;c.d=
1;H(c);}
function AQp(a){var b,c,d,e,f,g,h;b=!a.ml?B(192):B(193);c=a.kS.s();d=new O;d.b=D(16);I(d,d.a,B(194));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new M;f=d.b;g=d.a;P();h=D(g);b.e=h;L(f,0,h,0,g);return b;}
function G8(){var a=this;Ch.call(a);a.gA=null;a.gp=null;}
function AGI(a,b,c,d){var e;e=a.gA.o(b,c,d);if(e<0)e=Xn(a.gp,b,c,d);if(e>=0)return e;return (-1);}
function APT(a,b){a.p=b;a.gp.p=b;a.gA.bw(b);}
function AQK(a){var b,c,d,e,f,g,h,i;b=a.gA;P();if(b===null)b=B(2);else{c=b.x;b=b.S();d=new O;d.b=D(16);e=d.a;Bc(d,e,e+1|0);d.b.data[e]=60;CM(d,d.a,c===null?B(2):CZ(c));e=d.a;Bc(d,e,e+1|0);d.b.data[e]=58;CM(d,d.a,b===null?B(2):CZ(b));e=d.a;Bc(d,e,e+1|0);f=d.b;f.data[e]=62;b=new M;e=d.a;g=D(e);b.e=g;L(f,0,g,0,e);}c=a.gp;if(c===null)h=B(2);else{d=c.x;h=!c.ml?B(192):B(193);c=c.kS.s();i=new O;i.b=D(16);DD(i,i.a,B(194));DD(i,i.a,h);DD(i,i.a,c);c=new M;g=i.b;e=i.a;f=D(e);c.e=f;L(g,0,f,0,e);i=new O;i.b=D(16);e=i.a;Bc(i,
e,e+1|0);i.b.data[e]=60;CM(i,i.a,d===null?B(2):CZ(d));e=i.a;Bc(i,e,e+1|0);i.b.data[e]=58;CM(i,i.a,CZ(c));e=i.a;Bc(i,e,e+1|0);g=i.b;g.data[e]=62;h=new M;e=i.a;f=D(e);h.e=f;L(g,0,f,0,e);}c=new O;c.b=D(16);I(c,c.a,B(195));I(c,c.a,b);I(c,c.a,B(196));I(c,c.a,h);b=new M;g=c.b;e=c.a;f=D(e);b.e=f;L(g,0,f,0,e);return b;}
function AHL(a,b){return 1;}
function AHh(a,b){return 1;}
function DZ(){var a=this;Ch.call(a);a.da=null;a.hx=0;}
function AW2(a){var b=new DZ();AQE(b,a);return b;}
function AQE(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.da=b.jw();a.hx=b.Q;}
function AJZ(a,b,c,d){var e,f,g,h,i;a:{e=d.U;if(b<e){f=b+1|0;if(b>=0){g=c.e.data;if(b<g.length){h=g[b];if(a.A(h)){i=a.p.o(f,c,d);if(i>0)return i;}if(f>=e)break a;e=f+1|0;if(f>=0){g=c.e.data;if(f<g.length){f=g[f];b=(h&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.A(((h&1023)<<10|f&1023)+65536|0))break a;else return a.p.o(e,c,d);}}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}}return (-1);}
function AUd(a){var b,c,d,e,f,g,h;b=!a.hx?B(192):B(193);c=a.da.s();d=new O;d.b=D(16);I(d,d.a,B(194));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new M;f=d.b;g=d.a;P();h=D(g);b.e=h;L(f,0,h,0,g);return b;}
function AKI(a,b){return a.da.A(b);}
function AGz(a,b){var c,d,e;if(b instanceof E9){c=a.da;d=b.g3;Bv();return c.A(d);}if(b instanceof ES){c=a.da;d=b.c9;Bv();return c.A(d);}if(b instanceof DZ){c=a.da;b=b.da;Bv();return c.b8()!==null&&b.b8()!==null?I0(c.b8(),b.b8()):1;}if(!(b instanceof EC))return 1;c=a.da;e=b.dZ;Bv();return c.b8()!==null&&e.b8()!==null?I0(c.b8(),e.b8()):1;}
function AMQ(a){return a.da;}
function ASp(a,b){a.p=b;}
function AKe(a,b){return 1;}
var Mw=G(DZ);
function AXv(a){var b=new Mw();AJg(b,a);return b;}
function AJg(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.da=b.jw();a.hx=b.Q;}
function AMz(a,b){var c;c=a.da;if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}b=BW(A5u,b);if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}return c.A(BW(A5s,b));}
function AUB(a){var b,c,d,e,f,g,h;b=!a.hx?B(192):B(193);c=a.da.s();d=new O;d.b=D(16);I(d,d.a,B(197));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new M;f=d.b;g=d.a;P();h=D(g);b.e=h;L(f,0,h,0,g);return b;}
function NB(){var a=this;Co.call(a);a.k3=null;a.nQ=0;}
function AWK(a){var b=new NB();APq(b,a);return b;}
function APq(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.bl=1;a.k3=b.jw();a.nQ=b.Q;}
function AM6(a,b,c){var d,e;d=a.k3;if(b>=0){e=c.e.data;if(b<e.length){b=e[b];if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}b=BW(A5u,b)&65535;if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}return !d.A(BW(A5s,b)&65535)?(-1):1;}}c=new X;c.c=1;c.d=1;H(c);}
function AHv(a){var b,c,d,e,f,g,h;b=!a.nQ?B(192):B(193);c=a.k3.s();d=new O;d.b=D(16);I(d,d.a,B(197));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new M;f=d.b;g=d.a;P();h=D(g);b.e=h;L(f,0,h,0,g);return b;}
function EC(){var a=this;Co.call(a);a.dZ=null;a.oG=0;}
function AYn(a){var b=new EC();AQN(b,a);return b;}
function AQN(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.bl=1;a.dZ=b.jw();a.oG=b.Q;}
function AEX(a,b,c){var d,e;d=a.dZ;if(b>=0){e=c.e.data;if(b<e.length)return !d.A(e[b])?(-1):1;}c=new X;c.c=1;c.d=1;H(c);}
function ANe(a){var b,c,d,e,f,g,h;b=!a.oG?B(192):B(193);c=a.dZ.s();d=new O;d.b=D(16);I(d,d.a,B(194));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new M;f=d.b;g=d.a;P();h=D(g);b.e=h;L(f,0,h,0,g);return b;}
function AQg(a,b){var c,d,e;if(b instanceof ES){c=a.dZ;d=b.c9;Bv();return c.A(d);}if(b instanceof EC){c=a.dZ;b=b.dZ;Bv();return c.b8()!==null&&b.b8()!==null?I0(c.b8(),b.b8()):1;}if(!(b instanceof DZ)){if(!(b instanceof E9))return 1;return 0;}c=a.dZ;e=b.da;Bv();return c.b8()!==null&&e.b8()!==null?I0(c.b8(),e.b8()):1;}
function Ih(){var a=this;Ch.call(a);a.e5=null;a.eW=null;a.jM=0;}
function AOe(a,b){a.p=b;}
function ARA(a){var b,c,d,e,f,g,h;if(a.eW===null){b=new M;c=a.e5;d=c.data;P();e=d.length;d=D(e);b.e=d;L(c,0,d,0,e);a.eW=b;}f=a.eW;b=new O;b.b=D(16);I(b,b.a,B(198));g=b.a;if(f===null)f=B(2);I(b,g,f);h=new M;c=b.b;e=b.a;P();d=D(e);h.e=d;L(c,0,d,0,e);return h;}
function AFc(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.U;f=Z(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0){j=c.e.data;if(b<j.length){k=j[b];j=AJj(k);if(j!==null){j=j.data;l=0;b=j.length;k=a.jM;if(b!=k)return (-1);while(true){if(l>=k)return a.p.o(i,c,d);if(j[l]!=a.e5.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=k;m=k-4352|0;if(m>=0&&m<19){a:{if(i<e){if(i>=0){j=c.e.data;if(i<j.length){k=j[i];g=k-4449|0;break a;}}c=new X;c.c=1;c.d=1;H(c);}}if(g>=0&&g<21){b:{b=i+1|0;f[1]=k;if(b<e){if(b>=0){j=c.e.data;if(b
<j.length){k=j[b];h=k-4519|0;break b;}}c=new X;c.c=1;c.d=1;H(c);}}if(h>=0&&h<28){c:{b=b+1|0;f[2]=k;if(a.jM==3){k=f[0];j=a.e5.data;if(k==j[0]&&f[1]==j[1]&&f[2]==j[2]){b=a.p.o(b,c,d);break c;}}b=(-1);}return b;}d:{if(a.jM==2){k=f[0];j=a.e5.data;if(k==j[0]&&f[1]==j[1]){b=a.p.o(b,c,d);break d;}}b=(-1);}return b;}return (-1);}return (-1);}}c=new X;c.c=1;c.d=1;H(c);}
function AHA(a,b){var c,d,e,f,g;a:{if(b instanceof Ih){b=b;if(b.eW===null){c=new M;d=b.e5;e=d.data;P();f=e.length;e=D(f);c.e=e;L(d,0,e,0,f);b.eW=c;}c=b.eW;if(a.eW===null){b=new M;d=a.e5;e=d.data;P();f=e.length;e=D(f);b.e=e;L(d,0,e,0,f);a.eW=b;}if(!BA(c,a.eW)){g=0;break a;}}g=1;}return g;}
function ATg(a,b){return 1;}
function ES(){Co.call(this);this.c9=0;}
function AJq(a){var b=new ES();AQQ(b,a);return b;}
function AQQ(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.bl=1;a.c9=b;}
function AMK(a){return 1;}
function ALA(a,b,c){var d,e;d=a.c9;if(b>=0){e=c.e.data;if(b<e.length)return d!=e[b]?(-1):1;}c=new X;c.c=1;c.d=1;H(c);}
function AJX(a,b,c,d){var e,f,g,h,i,j;if(c instanceof M){e=d.U;while(true){if(b>=e)return (-1);f=D5(c,a.c9,b);if(f<0)return (-1);g=a.p;b=f+1|0;if(g.o(b,c,d)>=0)break;}return f;}h=d.U;a:{b:{while(true){if(b>h){b=(-1);break b;}f=b+1|0;if(f>d.U){d.dc=1;i=(-1);}else{i=a.c9;if(b<0)break a;j=c.e.data;if(b>=j.length)break a;i=i!=j[b]?(-1):1;i=i<0?(-1):a.p.o(b+i|0,c,d);}if(i>=0)break;b=f;}}return b;}c=new X;CQ(c);H(c);}
function AMS(a,b,c,d,e){var f,g;if(d instanceof M){a:{while(true){if(c<b)return (-1);f=Ew(d,a.c9,c);if(f<0)break a;if(f<b)break a;if(a.p.o(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.U){e.dc=1;f=(-1);}else{f=a.c9;if(c<0)break b;g=d.e.data;if(c>=g.length)break b;f=f!=g[c]?(-1):1;f=f<0?(-1):a.p.o(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new X;CQ(d);H(d);}
function ATv(a){var b,c,d,e,f,g;b=a.c9;c=new O;c.b=D(16);d=c.a;Bc(c,d,d+1|0);e=c.b;e.data[d]=b;f=new M;d=c.a;P();g=D(d);f.e=g;L(e,0,g,0,d);return f;}
function AS7(a,b){var c,d,e,f,g;if(b instanceof ES)return b.c9!=a.c9?0:1;if(!(b instanceof EC)){if(b instanceof DZ)return b.A(a.c9);if(!(b instanceof E9))return 1;return 0;}b=b;c=a.c9;d=D(1);e=d.data;e[0]=c;P();f=e.length;g=D(f);e=g.data;L(d,0,g,0,f);b=b.dZ;if(0>=e.length){b=new X;b.c=1;b.d=1;H(b);}return (!b.A(e[0])?(-1):1)<=0?0:1;}
function Sa(){Co.call(this);this.kc=0;}
function AXX(a){var b=new Sa();AO1(b,a);return b;}
function AO1(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.bl=1;if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}b=BW(A5u,b)&65535;if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}a.kc=BW(A5s,b)&65535;}
function AE3(a,b,c){var d,e;d=a.kc;if(b>=0){e=c.e.data;if(b<e.length){b=e[b];if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}b=BW(A5u,b)&65535;if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}return d!=(BW(A5s,b)&65535)?(-1):1;}}c=new X;c.c=1;c.d=1;H(c);}
function APS(a){var b,c,d,e,f,g;b=a.kc;c=new O;c.b=D(16);I(c,c.a,B(199));d=c.a;Bc(c,d,d+1|0);e=c.b;e.data[d]=b;f=new M;d=c.a;P();g=D(d);f.e=g;L(e,0,g,0,d);return f;}
function Mq(){var a=this;Co.call(a);a.l4=0;a.mD=0;}
function AV3(a){var b=new Mq();ARr(b,a);return b;}
function ARr(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.bl=1;a.l4=b;a.mD=GS(b);}
function AFG(a,b,c){var d,e,f;d=a.l4;if(b>=0){e=c.e.data;f=Bm(b,e.length);if(f<0){a:{b:{if(d!=e[b]){d=a.mD;if(b<0)break a;if(f>=0)break a;if(d!=e[b]){b=(-1);break b;}}b=1;}return b;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}
function ALZ(a){var b,c,d,e,f,g;b=a.l4;c=new O;c.b=D(16);I(c,c.a,B(200));d=c.a;Bc(c,d,d+1|0);e=c.b;e.data[d]=b;f=new M;d=c.a;P();g=D(d);f.e=g;L(e,0,g,0,d);return f;}
function Gc(){var a=this;Ch.call(a);a.gn=0;a.eF=null;a.fV=null;a.fS=0;}
function AYU(a,b){var c=new Gc();AG7(c,a,b);return c;}
function AG7(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.gn=1;a.fV=b;a.fS=c;}
function AUr(a,b){a.p=b;}
function APU(a,b,c,d){var e,f,g,h,i,j,k;e=Z(4);f=d.U;if(b>=f)return (-1);g=KK(a,b,c,f);h=b+a.gn|0;i=A6v.zb(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;L(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=KK(a,h,c,f);while(b<4){if(!AQo(g)){k=b+1|0;i[b]=g;}else{j=(A6v.zb(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.gn|0;if(h>=f){b=k;break a;}g=KK(a,h,c,f);b=k;}}}if(b!=a.fS)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.p.o(h,c,d);if(j[g]!=a.fV.data[g])break;g
=g+1|0;}return (-1);}
function APE(a){var b,c,d,e,f,g,h,i;if(a.eF===null){b=new O;b.b=D(16);c=0;while(c<a.fS){d=a.fV.data[c];if(d<65536){e=D(1);e.data[0]=d&65535;}else e=EE([(55296|(d-65536|0)>>10&1023)&65535,(56320|d&1023)&65535]);f=e.data.length;JJ(b,b.a,e,0,f);c=c+1|0;}g=new M;h=b.b;d=b.a;P();e=D(d);g.e=e;L(h,0,e,0,d);a.eF=g;}i=a.eF;b=new O;b.b=D(16);I(b,b.a,B(201));c=b.a;if(i===null)i=B(2);I(b,c,i);g=new M;h=b.b;d=b.a;P();e=D(d);g.e=e;L(h,0,e,0,d);return g;}
function KK(a,b,c,d){var e,f,g,h;a:{a.gn=1;if(b>=(d-1|0)){if(b>=0){e=c.e.data;if(b<e.length){f=e[b];break a;}}c=new X;c.c=1;c.d=1;H(c);}d=b+1|0;if(b>=0){e=c.e.data;g=e.length;if(b<g){f=e[b];if(d>=0&&d<g){g=e[d];b=(f&64512)!=55296?0:1;if(b&&((g&64512)!=56320?0:1)?1:0){e=D(2);h=e.data;h[0]=f;h[1]=g;f=UJ(e,0,h.length);a.gn=2;}break a;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}return f;}
function AM8(a,b){var c,d,e,f,g,h,i,j,k;a:{if(b instanceof Gc){b=b;if(b.eF===null){c=new O;c.b=D(16);d=0;while(d<b.fS){e=b.fV.data[d];if(e<65536){f=D(1);f.data[0]=e&65535;}else f=EE([(55296|(e-65536|0)>>10&1023)&65535,(56320|e&1023)&65535]);g=f.data.length;JJ(c,c.a,f,0,g);d=d+1|0;}h=new M;f=c.b;e=c.a;P();i=D(e);h.e=i;L(f,0,i,0,e);b.eF=h;}c=b.eF;if(a.eF===null){b=new O;b.b=D(16);d=0;while(d<a.fS){j=a.fV.data[d];if(j<65536){f=D(1);f.data[0]=j&65535;}else f=EE([(55296|(j-65536|0)>>10&1023)&65535,(56320|j&1023)
&65535]);k=f.data.length;JJ(b,b.a,f,0,k);d=d+1|0;}h=new M;f=b.b;e=b.a;P();i=D(e);h.e=i;L(f,0,i,0,e);a.eF=h;}if(!BA(c,a.eF)){d=0;break a;}}d=1;}return d;}
function AQ8(a,b){return 1;}
var AD0=G(Gc);
function AYA(a,b){var c=new AD0();AL4(c,a,b);return c;}
function AL4(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.gn=1;a.fV=b;a.fS=c;}
var AAx=G(Gc);
function AW$(a,b){var c=new AAx();AHI(c,a,b);return c;}
function AHI(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.gn=1;a.fV=b;a.fS=c;}
var SK=G(DL);
function AIR(a,b,c,d){var e;while(true){e=a.T.o(b,c,d);if(e<=0)break;b=e;}return a.p.o(b,c,d);}
var Of=G(DL);
function AOR(a,b,c,d){var e;e=a.T.o(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.T.o(e,c,d);if(b<=e)break;e=b;}b=e;}return a.p.o(b,c,d);}
var H1=G(DL);
function AYN(a,b,c){var d=new H1();AFx(d,a,b,c);return d;}
function AFx(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;}
function ASl(a,b,c,d){var e;if(!a.T.bp(d))return a.p.o(b,c,d);e=a.T.o(b,c,d);if(e>=0)return e;return a.p.o(b,c,d);}
function ATK(a,b){a.p=b;a.T.bw(b);}
var N3=G(H1);
function AMP(a,b,c,d){var e;e=a.T.o(b,c,d);if(e<=0)e=b;return a.p.o(e,c,d);}
function APi(a,b){a.p=b;}
function Ga(){var a=this;DL.call(a);a.eH=null;a.dO=0;}
function A6A(a,b,c,d,e){var f=new Ga();S9(f,a,b,c,d,e);return f;}
function S9(a,b,c,d,e,f){var g,h;g=AZF;AZF=g+1|0;h=new Bi;h.b=D(20);a.x=(N(h,h.a,g,10)).s();a.p=d;a.T=c;a.bP=e;a.eH=b;a.dO=f;}
function AVn(a,b,c,d){var e,f,g,h;e=a.dO;e=d.eh.data[e];if(!a.T.bp(d))return a.p.o(b,c,d);if(e>=a.eH.fm)return a.p.o(b,c,d);f=a.dO;e=e+1|0;d.eh.data[f]=e;g=a.T.o(b,c,d);if(g>=0){b=a.dO;d.eh.data[b]=0;return g;}g=a.dO;e=e+(-1)|0;h=d.eh.data;h[g]=e;if(e>=a.eH.fo)return a.p.o(b,c,d);h[g]=0;return (-1);}
function ATS(a){return P9(a.eH);}
var ML=G(Ga);
function AL9(a,b,c,d){var e,f,g;e=0;f=a.eH.fm;a:{while(true){g=a.T.o(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.eH.fo)return (-1);return a.p.o(b,c,d);}
var Ph=G(DL);
function AUI(a,b,c,d){var e;if(!a.T.bp(d))return a.p.o(b,c,d);e=a.p.o(b,c,d);if(e>=0)return e;return a.T.o(b,c,d);}
var WP=G(H1);
function AWq(a,b,c){var d=new WP();AQq(d,a,b,c);return d;}
function AQq(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;}
function AHN(a,b,c,d){var e;if(!a.T.bp(d))return a.p.o(b,c,d);e=a.p.o(b,c,d);if(e<0)e=a.T.o(b,c,d);return e;}
var Q7=G(Ga);
function A6B(a,b,c,d,e){var f=new Q7();Z0(f,a,b,c,d,e);return f;}
function Z0(a,b,c,d,e,f){var g,h;g=AZF;AZF=g+1|0;h=new Bi;h.b=D(20);a.x=(N(h,h.a,g,10)).s();a.p=d;a.T=c;a.bP=e;a.eH=b;a.dO=f;}
function AGj(a,b,c,d){var e,f,g;e=a.dO;f=d.eh.data[e];if(!a.T.bp(d))return a.p.o(b,c,d);g=a.eH;if(f>=g.fm){e=a.dO;d.eh.data[e]=0;return a.p.o(b,c,d);}if(f<g.fo){e=a.dO;d.eh.data[e]=f+1|0;e=a.T.o(b,c,d);}else{e=a.p.o(b,c,d);if(e>=0){b=a.dO;d.eh.data[b]=0;return e;}e=a.dO;d.eh.data[e]=f+1|0;e=a.T.o(b,c,d);}return e;}
var X4=G(EP);
function AWD(a,b,c){var d=new X4();AGw(d,a,b,c);return d;}
function AGw(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;}
function AU8(a,b,c,d){var e;e=d.U;if(e>b)return a.p.c3(b,e,c,d);return a.p.o(b,c,d);}
function ASv(a,b,c,d){var e;e=d.U;if(a.p.c3(b,e,c,d)>=0)return b;return (-1);}
function AQO(a){return B(202);}
function UE(){EP.call(this);this.kP=null;}
function AVX(a,b,c,d){var e=new UE();AQG(e,a,b,c,d);return e;}
function AQG(a,b,c,d,e){var f,g;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);a.x=(N(g,g.a,f,10)).s();a.p=c;a.T=b;a.bP=d;a.kP=e;}
function AQi(a,b,c,d){var e,f,g,h;e=d.U;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.kP;if(f<0)break;h=c.e.data;if(f>=h.length)break;if(g.hT(h[f]))break a;f=f+1|0;}c=new X;c.c=1;c.d=1;H(c);}if(f>=0)e=f;if(e>b)return a.p.c3(b,e,c,d);return a.p.o(b,c,d);}
function AFk(a,b,c,d){var e,f,g,h,i,j,k;e=d.U;f=a.p.cZ(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.kP;if(g<0)break;i=c.e.data;if(g>=i.length)break;if(h.hT(i[g]))break a;g=g+1|0;}c=new X;c.c=1;c.d=1;H(c);}if(g>=0)e=g;j=a.p.c3(f,e,c,d);if(f>j)j=f;if(j<=0)k=j?(-1):0;else{k=j-1|0;b:{while(true){if(k<b){k=(-1);break b;}d=a.kP;if(k<0)break;i=c.e.data;if(k>=i.length)break;if(d.hT(i[k]))break b;k=k+(-1)|0;}c=new X;c.c=1;c.d=1;H(c);}}if(k>=b)b=k>=j?k:k+1|0;return b;}
function ARG(a){return B(203);}
var FL=G();
var A6C=null;var A6D=null;function N5(b){var c;if(!(b&1)){c=A6D;if(c!==null)return c;c=new Rc;A6D=c;return c;}c=A6C;if(c!==null)return c;c=new Rb;A6C=c;return c;}
var AEP=G(DG);
function AX9(a,b,c){var d=new AEP();AQ9(d,a,b,c);return d;}
function AQ9(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;a.bk=b;}
function AGo(a,b,c,d){var e;a:{while(true){if((b+a.bk.cA()|0)>d.U)break a;e=a.bk.cd(b,c);if(e<1)break;b=b+e|0;}}return a.p.o(b,c,d);}
var ACW=G(F3);
function AVE(a,b,c){var d=new ACW();AUE(d,a,b,c);return d;}
function AUE(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;a.bk=b;}
function AOM(a,b,c,d){var e;if((b+a.bk.cA()|0)<=d.U){e=a.bk.cd(b,c);if(e>=1)b=b+e|0;}return a.p.o(b,c,d);}
var U6=G(F6);
function AYy(a,b,c,d){var e=new U6();AOI(e,a,b,c,d);return e;}
function AOI(a,b,c,d,e){var f,g;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);a.x=(N(g,g.a,f,10)).s();a.p=d;a.T=c;a.bP=e;a.bk=c;a.gy=b;}
function ARX(a,b,c,d){var e,f,g,h,i;e=a.gy;f=e.fo;g=e.fm;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bk.cA()|0)>d.U)break a;i=a.bk.cd(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.p.o(b,c,d);}if((b+a.bk.cA()|0)>d.U){d.dc=1;return (-1);}i=a.bk.cd(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var WJ=G(DG);
function AYq(a,b,c){var d=new WJ();AVu(d,a,b,c);return d;}
function AVu(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;a.bk=b;}
function AP_(a,b,c,d){var e;while(true){e=a.p.o(b,c,d);if(e>=0)break;if((b+a.bk.cA()|0)<=d.U){e=a.bk.cd(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var AAJ=G(F3);
function AYf(a,b,c){var d=new AAJ();AKt(d,a,b,c);return d;}
function AKt(a,b,c,d){var e,f;e=AZF;AZF=e+1|0;f=new Bi;f.b=D(20);a.x=(N(f,f.a,e,10)).s();a.p=c;a.T=b;a.bP=d;a.bk=b;}
function AGu(a,b,c,d){var e;e=a.p.o(b,c,d);if(e>=0)return e;return a.T.o(b,c,d);}
var Xw=G(F6);
function AWQ(a,b,c,d){var e=new Xw();AQy(e,a,b,c,d);return e;}
function AQy(a,b,c,d,e){var f,g;f=AZF;AZF=f+1|0;g=new Bi;g.b=D(20);a.x=(N(g,g.a,f,10)).s();a.p=d;a.T=c;a.bP=e;a.bk=c;a.gy=b;}
function AR$(a,b,c,d){var e,f,g,h,i,j;e=a.gy;f=e.fo;g=e.fm;h=0;while(true){if(h>=f){a:{while(true){i=a.p.o(b,c,d);if(i>=0)break;if((b+a.bk.cA()|0)<=d.U){i=a.bk.cd(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bk.cA()|0)>d.U){d.dc=1;return (-1);}j=a.bk.cd(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var O4=G(B3);
function AYr(){var a=new O4();AJt(a);return a;}
function AJt(a){var b,c;b=AZF;AZF=b+1|0;c=new Bi;c.b=D(20);a.x=(N(c,c.a,b,10)).s();}
function AND(a,b,c,d){if(b&&!(d.gk&&b==d.c$))return (-1);return a.p.o(b,c,d);}
function AMo(a,b){return 0;}
function AOO(a){return B(204);}
function VR(){B3.call(this);this.u3=0;}
function AS0(a){var b=new VR();AMD(b,a);return b;}
function AMD(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.u3=b;}
function AHe(a,b,c,d){var e,f,g,h;a:{if(b>=d.U)e=32;else{if(b>=0){f=c.e.data;if(b<f.length){e=f[b];break a;}}c=new X;c.c=1;c.d=1;H(c);}}b:{if(!b)g=32;else{g=b-1|0;if(g>=0){f=c.e.data;if(g<f.length){g=f[g];break b;}}c=new X;c.c=1;c.d=1;H(c);}}h=d.lg?0:d.c$;return (e!=32&&!OR(a,e,b,h,c)?0:1)^(g!=32&&!OR(a,g,b-1|0,h,c)?0:1)^a.u3?(-1):a.p.o(b,c,d);}
function AHy(a,b){return 0;}
function AVl(a){return B(205);}
function OR(a,b,c,d,e){var f,g;a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CC(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;g=e.e.data;if(c>=g.length)break c;e:{f:{b=g[c];switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}f=1;break e;}f=0;}if(f)return 0;if(CC(b)!=6)return 1;}}return 1;}e=new X;e.c=1;e.d=1;H(e);}return 0;}
var UC=G(B3);
function AWl(){var a=new UC();ASr(a);return a;}
function ASr(a){var b,c;b=AZF;AZF=b+1|0;c=new Bi;c.b=D(20);a.x=(N(c,c.a,b,10)).s();}
function AMC(a,b,c,d){if(b!=d.h1)return (-1);return a.p.o(b,c,d);}
function AVi(a,b){return 0;}
function AGW(a){return B(206);}
function R9(){B3.call(this);this.jg=0;}
function AYd(a){var b=new R9();ACD(b,a);return b;}
function ACD(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.jg=b;}
function AQS(a,b,c,d){var e,f,g,h;e=d.gk?d.U:c.e.data.length;if(b>=e){f=a.jg;d.bz.data[f]=0;return a.p.o(b,c,d);}a:{g=e-b|0;if(g==2){if(b>=0){h=c.e.data;f=h.length;if(b<f){if(h[b]!=13)break a;e=b+1|0;if(e>=0&&e<f){if(h[e]!=10)break a;f=a.jg;d.bz.data[f]=0;return a.p.o(b,c,d);}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}}b:{c:{if(g==1){if(b>=0){h=c.e.data;if(b<h.length){f=h[b];if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}}c=new X;c.c=1;c.d=1;H(c);}}return (-1);}e
=a.jg;d.bz.data[e]=0;return a.p.o(b,c,d);}
function AID(a,b){var c,d,e;c=a.jg;d=b.bz.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AOo(a){return B(207);}
var ADf=G(B3);
function AYl(){var a=new ADf();AMq(a);return a;}
function AMq(a){var b,c;b=AZF;AZF=b+1|0;c=new Bi;c.b=D(20);a.x=(N(c,c.a,b,10)).s();}
function APP(a,b,c,d){if(b<(!d.lg?d.U:c.e.data.length))return (-1);d.dc=1;d.Bv=1;return a.p.o(b,c,d);}
function AE1(a,b){return 0;}
function ALe(a){return B(208);}
function TL(){B3.call(this);this.sW=null;}
function AYm(a){var b=new TL();AQU(b,a);return b;}
function AQU(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.sW=b;}
function AIg(a,b,c,d){var e,f,g,h,i;a:{b:{c:{if(b!=d.U){if(!b)break b;if(d.gk&&b==d.c$)break b;e=a.sW;f=b-1|0;if(f>=0){g=c.e.data;h=g.length;if(f<h){i=g[f];if(b<0)break a;if(b>=h)break a;if(!e.tW(i,g[b]))break c;else break b;}}c=new X;c.c=1;c.d=1;H(c);}}return (-1);}return a.p.o(b,c,d);}c=new X;c.c=1;c.d=1;H(c);}
function AKY(a,b){return 0;}
function AGD(a){return B(209);}
var AC$=G(Ch);
function AYG(){var a=new AC$();APu(a);return a;}
function APu(a){var b,c;b=AZF;AZF=b+1|0;c=new Bi;c.b=D(20);a.x=(N(c,c.a,b,10)).s();}
function AUM(a,b,c,d){var e,f,g,h,i,j,k;e=d.U;f=b+1|0;if(f>e){d.dc=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){i=Bm(g[b]&64512,55296);j=i?0:1;a:{if(j){k=b+2|0;if(k<=e){if(f>=0&&f<h){j=g[f];b=i?0:1;if(!(b&&((j&64512)!=56320?0:1)?1:0))break a;else return a.p.o(k,c,d);}c=new X;c.c=1;c.d=1;H(c);}}}return a.p.o(f,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function AJy(a){return B(210);}
function AHC(a,b){a.p=b;}
function APs(a){return (-2147483602);}
function AHB(a,b){return 1;}
function UW(){Ch.call(this);this.of=null;}
function AXZ(a){var b=new UW();AIA(b,a);return b;}
function AIA(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.of=b;}
function APG(a,b,c,d){var e,f,g,h,i,j,k,l;e=d.U;f=b+1|0;if(f>e){d.dc=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){i=g[b];j=Bm(i&64512,55296);k=j?0:1;a:{if(k){l=b+2|0;if(l<=e){if(f>=0&&f<h){k=g[f];b=j?0:1;if(!(b&&((k&64512)!=56320?0:1)?1:0))break a;else return a.of.hT(((i&1023)<<10|k&1023)+65536|0)?(-1):a.p.o(l,c,d);}c=new X;c.c=1;c.d=1;H(c);}}}return a.of.hT(i)?(-1):a.p.o(f,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function AIO(a){return B(211);}
function ARE(a,b){a.p=b;}
function AES(a){return (-2147483602);}
function AU4(a,b){return 1;}
function ACX(){B3.call(this);this.lb=0;}
function AXe(a){var b=new ACX();AKR(b,a);return b;}
function AKR(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.lb=b;}
function ANd(a,b,c,d){var e,f,g;e=d.gk?d.U:c.e.data.length;if(b>=e){e=a.lb;d.bz.data[e]=0;return a.p.o(b,c,d);}a:{if((e-b|0)==1){if(b>=0){f=c.e.data;if(b<f.length){if(f[b]!=10)break a;else{g=a.lb;d.bz.data[g]=1;return a.p.o(b+1|0,c,d);}}}c=new X;c.c=1;c.d=1;H(c);}}return (-1);}
function AKP(a,b){var c,d,e;c=a.lb;d=b.bz.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function ANR(a){return B(207);}
function Zr(){B3.call(this);this.lr=0;}
function AWN(a){var b=new Zr();ALE(b,a);return b;}
function ALE(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.lr=b;}
function APM(a,b,c,d){var e,f,g;if((d.gk?d.U-b|0:c.e.data.length-b|0)<=0){e=a.lr;d.bz.data[e]=0;return a.p.o(b,c,d);}if(b>=0){f=c.e.data;if(b<f.length){if(f[b]!=10)return (-1);g=a.lr;d.bz.data[g]=1;return a.p.o(b+1|0,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function AKC(a,b){var c,d,e;c=a.lr;d=b.bz.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AF4(a){return B(212);}
function ST(){B3.call(this);this.h5=0;}
function AVD(a){var b=new ST();AVo(b,a);return b;}
function AVo(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.h5=b;}
function AMd(a,b,c,d){var e,f,g,h;e=d.gk?d.U-b|0:c.e.data.length-b|0;if(!e){e=a.h5;d.bz.data[e]=0;return a.p.o(b,c,d);}a:{if(e<2){if(b>=0){f=c.e.data;if(b<f.length){g=f[b];h=97;break a;}}c=new X;c.c=1;c.d=1;H(c);}if(b>=0){f=c.e.data;h=f.length;if(b<h){g=f[b];e=b+1|0;if(e>=0&&e<h){h=f[e];break a;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}switch(g){case 10:case 133:case 8232:case 8233:e=a.h5;d.bz.data[e]=0;return a.p.o(b,c,d);case 13:if(h!=10){e=a.h5;d.bz.data[e]=0;return a.p.o(b,c,d);}e=a.h5;d.bz.data[e]
=0;return a.p.o(b,c,d);default:}return (-1);}
function AIG(a,b){var c,d,e;c=a.h5;d=b.bz.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AKZ(a){return B(213);}
function HR(){var a=this;Ch.call(a);a.iy=0;a.gG=0;}
function AYQ(a,b){var c=new HR();AIk(c,a,b);return c;}
function AIk(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.iy=b;a.gG=c;}
function AGp(a,b,c,d){var e,f,g,h,i,j,k;e=In(a,d);if(e!==null&&(b+e.e.data.length|0)<=d.U){f=0;a:{b:{c:{d:{while(true){g=e.e.data;h=g.length;i=Bm(f,h);if(i>=0){f=a.gG;d.bz.data[f]=h;return a.p.o(b+h|0,c,d);}if(f<0)break c;if(i>=0)break c;j=g[f];h=b+f|0;if(h<0)break d;k=c.e.data;if(h>=k.length)break d;if(j!=k[h]){if(f<0)break a;if(i>=0)break a;i=GS(g[f]);if(h<0)break b;k=c.e.data;if(h>=k.length)break b;if(i!=k[h])break;}f=f+1|0;}return (-1);}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d
=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}return (-1);}
function AQ4(a,b){a.p=b;}
function In(a,b){var c,d,e,f,g,h,i;a:{c=a.iy;d=b.bI.data;e=c*2|0;f=d[e];g=d[e+1|0];c=g|f;e=g-f|0;if((c|e)>=0){h=b.gj;i=h.e;c=Bm(g,i.data.length);if(c<=0){g=Bm(f,g);if(g>0){b=new Y;b.c=1;b.d=1;H(b);}if(!g){P();h=A32;}else if(!(!f&&!c)){h=new M;P();d=D(e);h.e=d;L(i,f,d,0,e);}break a;}}h=null;}return h;}
function AF$(a){var b,c,d,e,f,g;b=a.bG;c=new O;c.b=D(16);I(c,c.a,B(214));N(c,c.a,b,10);d=new M;e=c.b;f=c.a;P();g=D(f);d.e=g;L(e,0,g,0,f);return d;}
function ARi(a,b){var c,d,e;c=a.gG;d=b.bz.data;e=!d[c]?0:1;d[c]=(-1);return e;}
var AC2=G(HR);
function AVI(a,b){var c=new AC2();ATB(c,a,b);return c;}
function ATB(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.iy=b;a.gG=c;}
function AIP(a,b,c,d){var e,f,g;e=In(a,d);if(e!==null&&(b+e.e.data.length|0)<=d.U){f=!I6(c,e,b)?(-1):e.e.data.length;if(f<0)return (-1);g=a.gG;d.bz.data[g]=f;return a.p.o(b+f|0,c,d);}return (-1);}
function ATm(a,b,c,d){var e,f;e=In(a,d);f=d.c$;if(e!==null&&(b+e.e.data.length|0)<=f){while(true){if(b>f)return (-1);b=Ki(c,e,b);if(b<0)return (-1);if(a.p.o(b+e.e.data.length|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AF5(a,b,c,d,e){var f,g;f=In(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Om(d,f,c);if(g<0)break a;if(g<b)break a;if(a.p.o(g+f.e.data.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AOG(a,b){return 1;}
function ATI(a){var b,c,d,e,f,g;b=a.bG;c=new O;c.b=D(16);I(c,c.a,B(215));N(c,c.a,b,10);d=new M;e=c.b;f=c.a;P();g=D(f);d.e=g;L(e,0,g,0,f);return d;}
function Xg(){HR.call(this);this.wQ=0;}
function AWO(a,b){var c=new Xg();AKN(c,a,b);return c;}
function AKN(a,b,c){var d,e;d=AZF;AZF=d+1|0;e=new Bi;e.b=D(20);a.x=(N(e,e.a,d,10)).s();a.iy=b;a.gG=c;}
function AN1(a,b,c,d){var e,f,g,h,i,j,k;a:{e=a.iy;f=d.bI.data;g=e*2|0;h=f[g];i=f[g+1|0];e=i|h;g=i-h|0;if((e|g)>=0){j=d.gj;k=j.e;e=Bm(i,k.data.length);if(e<=0){i=Bm(h,i);if(i>0){c=new Y;c.c=1;c.d=1;B9(c);H(c);}if(!i){P();j=A32;}else if(!(!h&&!e)){j=new M;P();f=D(g);j.e=f;L(k,h,f,0,g);}break a;}}j=null;}if(j!==null&&(b+j.e.data.length|0)<=d.U){i=0;b:{c:{while(true){f=j.e.data;g=f.length;e=Bm(i,g);if(e>=0){e=a.gG;d.bz.data[e]=g;return a.p.o(b+g|0,c,d);}if(i<0)break b;if(e>=0)break b;e=f[i];if(A5u===null){if(A5v
===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}e=BW(A5u,e)&65535;if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}g=BW(A5s,e)&65535;h=b+i|0;if(h<0)break c;f=c.e.data;if(h>=f.length)break c;e=f[h];if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}e=BW(A5u,e)&65535;if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}if(g!=(BW(A5s,e)&65535))break;i=i+1|0;}return (-1);}c
=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}return (-1);}
function AHz(a){var b,c,d,e,f,g;b=a.wQ;c=new O;c.b=D(16);I(c,c.a,B(216));N(c,c.a,b,10);d=new M;e=c.b;f=c.a;P();g=D(f);d.e=g;L(e,0,g,0,f);return d;}
var J9=G(Bi);
function PP(a,b,c,d,e){Zx(a,b,c,d,e);return a;}
function AKv(a,b,c,d,e){var f,g,h,i;Bc(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function AHl(a,b,c,d){var e,f,g,h,i;e=a.a;Bc(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.b.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
function SW(a,b){var c;if(b>=0&&b<a.a)return a.b.data[b];c=new Y;c.c=1;c.d=1;H(c);}
function AEt(a){return a.a;}
function AHU(a,b){M_(a,b);}
function ASA(a,b,c){Bc(a,b,b+1|0);a.b.data[b]=c;return a;}
function AFD(a,b,c){I(a,b,c);return a;}
function Yd(){var a=this;Co.call(a);a.dj=null;a.np=null;a.ov=null;}
function AWV(a){var b=new Yd();AJf(b,a);return b;}
function AJf(a,b){var c,d,e,f,g,h;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.bl=1;d=new M;e=b.b;f=b.a;P();g=D(f);d.e=g;L(e,0,g,0,f);a.dj=d;c=b.a;a.bl=c;a.np=APr(c);a.ov=APr(a.bl);c=0;a:{b:{while(true){f=a.bl;if(c>=(f-1|0))break;b=a.np;d=a.dj;if(c<0)break a;e=d.e.data;if(c>=e.length)break a;O6(b,e[c],(f-c|0)-1|0);b=a.ov;d=a.dj;h=(a.bl-c|0)-1|0;if(h<0)break b;e=d.e.data;if(h>=e.length)break b;O6(b,e[h],h);c=c+1|0;}return;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function AJl(a,b,c){var d,e,f,g,h,i;d=0;a:{b:{c:{while(true){e=a.bl;if(d>=e)break;f=d+b|0;if(f<0)break a;g=c.e.data;if(f>=g.length)break a;h=g[f];i=a.dj;if(d<0)break b;g=i.e.data;if(d>=g.length)break b;if(h!=g[d]){b=0;break c;}d=d+1|0;}b=1;}if(!b)e=(-1);return e;}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}
function AG9(a,b,c,d){var e,f;e=d.U;while(true){if(b>e)return (-1);f=ADk(a,c,b,e);if(f<0)return (-1);if(a.p.o(f+a.bl|0,c,d)>=0)break;b=f+1|0;}return f;}
function AKV(a,b,c,d,e){while(true){if(c<b)return (-1);c=ACC(a,d,b,c);if(c<0)return (-1);if(a.p.o(c+a.bl|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AP2(a){var b,c,d,e,f,g;b=a.dj;c=new O;c.b=D(16);I(c,c.a,B(217));d=c.a;if(b===null)b=B(2);I(c,d,b);b=new M;e=c.b;f=c.a;P();g=D(f);b.e=g;L(e,0,g,0,f);return b;}
function ALN(a,b){var c,d,e,f,g,h,i;if(b instanceof ES){c=b.c9;d=a.dj.e.data;if(0<d.length)return c!=d[0]?0:1;b=new X;b.c=1;b.d=1;H(b);}if(b instanceof EC){b=b;e=a.dj;d=e.e;if(1!=d.data.length){e=new M;P();f=D(1);e.e=f;L(d,0,f,0,1);}b=b.dZ;d=e.e.data;if(0>=d.length){b=new X;b.c=1;b.d=1;H(b);}return (!b.A(d[0])?(-1):1)<=0?0:1;}if(!(b instanceof DZ)){if(!(b instanceof E9))return 1;a:{d=a.dj.e.data;g=d.length;if(g>1){h=b.g3;if(0>=g){b=new X;b.c=1;b.d=1;H(b);}i=d[0];if(1>=g){b=new X;UQ(b);H(b);}if(h==ADh(i,d[1]))
{c=1;break a;}}c=0;}return c;}b=b;d=a.dj.e.data;if(0>=d.length){b=new X;b.c=1;b.d=1;H(b);}b:{c:{if(!b.A(d[0])){d=a.dj.e.data;i=d.length;if(i<=1)break c;if(0>=i){b=new X;b.c=1;b.d=1;H(b);}h=d[0];if(1>=i){b=new X;b.c=1;b.d=1;H(b);}if(!b.A(((h&1023)<<10|d[1]&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;}
function ADk(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=a.dj;f=a.bl-1|0;if(f>=0){g=e.e.data;if(f<g.length){h=g[f];a:{b:{c:{while(true){i=a.bl;if(c>(d-i|0))return (-1);j=(c+i|0)-1|0;if(j<0)break c;g=b.e.data;k=g.length;if(j>=k)break c;f=g[j];if(f==h){j=0;d:{while(j<i){l=j+c|0;if(l<0)break a;if(l>=k)break a;m=g[l];e=a.dj;if(j<0)break b;n=e.e.data;if(j>=n.length)break b;if(m!=n[j]){k=0;break d;}j=j+1|0;}k=1;}if(k)break;}c=c+PN(a.np,f)|0;}return c;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}}b
=new X;b.c=1;b.d=1;H(b);}
function ACC(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.dj.e.data;if(0>=e.length){b=new X;b.c=1;b.d=1;H(b);}f=e[0];g=(b.e.data.length-d|0)-a.bl|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;e=b.e.data;g=e.length;if(d>=g)break c;h=e[d];if(h==f){i=0;d:{while(i<a.bl){j=i+d|0;if(j<0)break a;if(j>=g)break a;j=e[j];k=a.dj;if(i<0)break b;l=k.e.data;if(i>=l.length)break b;if(j!=l[i]){j=0;break d;}i=i+1|0;}j=1;}if(j)break;}d=d-PN(a.ov,h)|0;}return d;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}b
=new X;b.c=1;b.d=1;H(b);}
function Mk(){Co.call(this);this.oo=null;}
function AOa(a,b,c){var d,e,f,g,h;d=0;a:{b:{while(true){e=a.oo.e.data;f=e.length;g=Bm(d,f);if(g>=0)break;if(d<0)break a;if(g>=0)break a;f=e[d];h=b+d|0;if(h<0)break b;e=c.e.data;if(h>=e.length)break b;g=e[h];if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}g=BW(A5u,g)&65535;if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}if(f!=(BW(A5s,g)&65535))return (-1);d=d+1|0;}return f;}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=
1;H(c);}
function AL1(a){var b,c,d,e,f,g;b=a.oo;c=new O;c.b=D(16);I(c,c.a,B(218));d=c.a;if(b===null)b=B(2);I(c,d,b);b=new M;e=c.b;f=c.a;P();g=D(f);b.e=g;L(e,0,g,0,f);return b;}
function TD(){Co.call(this);this.n$=null;}
function AYW(a){var b=new TD();ALC(b,a);return b;}
function ALC(a,b){var c,d,e,f,g;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.bl=1;d=new M;e=b.b;f=b.a;P();g=D(f);d.e=g;L(e,0,g,0,f);a.n$=d;a.bl=b.a;}
function AR0(a,b,c){var d,e,f,g,h,i,j;d=0;a:{b:{c:{d:{while(true){e=a.n$.e.data;f=e.length;g=Bm(d,f);if(g>=0)break;if(d<0)break c;if(g>=0)break c;h=e[d];i=b+d|0;if(i<0)break d;j=c.e.data;if(i>=j.length)break d;if(h!=j[i]){if(d<0)break a;if(g>=0)break a;f=GS(e[d]);if(i<0)break b;e=c.e.data;if(i>=e.length)break b;if(f!=e[i])return (-1);}d=d+1|0;}return f;}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}
function AS_(a){var b,c,d,e,f,g;b=a.n$;c=new O;c.b=D(16);I(c,c.a,B(219));d=c.a;if(b===null)b=B(2);I(c,d,b);b=new M;e=c.b;f=c.a;P();g=D(f);b.e=g;L(e,0,g,0,f);return b;}
var AEN=G();
var HQ=G();
var A6E=null;var A6F=null;var A6G=null;function ARx(){ARx=W(HQ);AJI();}
function ADC(a,b){var c,d,e;c=0;while(true){ARx();d=A6G.data;if(c>=d.length){e=new JI;e.c=1;e.d=1;e.f=B(42);e.Cs=B(42);e.BX=b;H(e);}d=d[c].data;if(BA(b,d[0]))break;c=c+1|0;}return d[1];}
function AJI(){A6E=AYj();A6F=AW6();A6G=R($rt_arraycls(C),[R(C,[B(220),AYR()]),R(C,[B(221),AVB()]),R(C,[B(222),AYi()]),R(C,[B(223),AYz()]),R(C,[B(224),A6F]),R(C,[B(225),AXi()]),R(C,[B(226),AWY()]),R(C,[B(227),AVN()]),R(C,[B(228),AVH()]),R(C,[B(229),AVT()]),R(C,[B(230),AWr()]),R(C,[B(231),AVQ()]),R(C,[B(232),AXS()]),R(C,[B(233),AVy()]),R(C,[B(234),AYs()]),R(C,[B(235),AWn()]),R(C,[B(236),AXg()]),R(C,[B(237),AWj()]),R(C,[B(238),AXh()]),R(C,[B(239),AVZ()]),R(C,[B(240),AYF()]),R(C,[B(241),AWb()]),R(C,[B(242),AXq()]),
R(C,[B(243),AYg()]),R(C,[B(244),AYe()]),R(C,[B(245),AYC()]),R(C,[B(246),AVY()]),R(C,[B(247),AXY()]),R(C,[B(248),A6E]),R(C,[B(249),AXA()]),R(C,[B(250),AVO()]),R(C,[B(251),A6E]),R(C,[B(252),AVx()]),R(C,[B(253),A6F]),R(C,[B(254),AWG()]),R(C,[B(255),Bd(0,127)]),R(C,[B(256),Bd(128,255)]),R(C,[B(257),Bd(256,383)]),R(C,[B(258),Bd(384,591)]),R(C,[B(259),Bd(592,687)]),R(C,[B(260),Bd(688,767)]),R(C,[B(261),Bd(768,879)]),R(C,[B(262),Bd(880,1023)]),R(C,[B(263),Bd(1024,1279)]),R(C,[B(264),Bd(1280,1327)]),R(C,[B(265),Bd(1328,
1423)]),R(C,[B(266),Bd(1424,1535)]),R(C,[B(267),Bd(1536,1791)]),R(C,[B(268),Bd(1792,1871)]),R(C,[B(269),Bd(1872,1919)]),R(C,[B(270),Bd(1920,1983)]),R(C,[B(271),Bd(2304,2431)]),R(C,[B(272),Bd(2432,2559)]),R(C,[B(273),Bd(2560,2687)]),R(C,[B(274),Bd(2688,2815)]),R(C,[B(275),Bd(2816,2943)]),R(C,[B(276),Bd(2944,3071)]),R(C,[B(277),Bd(3072,3199)]),R(C,[B(278),Bd(3200,3327)]),R(C,[B(279),Bd(3328,3455)]),R(C,[B(280),Bd(3456,3583)]),R(C,[B(281),Bd(3584,3711)]),R(C,[B(282),Bd(3712,3839)]),R(C,[B(283),Bd(3840,4095)]),
R(C,[B(284),Bd(4096,4255)]),R(C,[B(285),Bd(4256,4351)]),R(C,[B(286),Bd(4352,4607)]),R(C,[B(287),Bd(4608,4991)]),R(C,[B(288),Bd(4992,5023)]),R(C,[B(289),Bd(5024,5119)]),R(C,[B(290),Bd(5120,5759)]),R(C,[B(291),Bd(5760,5791)]),R(C,[B(292),Bd(5792,5887)]),R(C,[B(293),Bd(5888,5919)]),R(C,[B(294),Bd(5920,5951)]),R(C,[B(295),Bd(5952,5983)]),R(C,[B(296),Bd(5984,6015)]),R(C,[B(297),Bd(6016,6143)]),R(C,[B(298),Bd(6144,6319)]),R(C,[B(299),Bd(6400,6479)]),R(C,[B(300),Bd(6480,6527)]),R(C,[B(301),Bd(6528,6623)]),R(C,[B(302),
Bd(6624,6655)]),R(C,[B(303),Bd(6656,6687)]),R(C,[B(304),Bd(7424,7551)]),R(C,[B(305),Bd(7552,7615)]),R(C,[B(306),Bd(7616,7679)]),R(C,[B(307),Bd(7680,7935)]),R(C,[B(308),Bd(7936,8191)]),R(C,[B(309),Bd(8192,8303)]),R(C,[B(310),Bd(8304,8351)]),R(C,[B(311),Bd(8352,8399)]),R(C,[B(312),Bd(8400,8447)]),R(C,[B(313),Bd(8448,8527)]),R(C,[B(314),Bd(8528,8591)]),R(C,[B(315),Bd(8592,8703)]),R(C,[B(316),Bd(8704,8959)]),R(C,[B(317),Bd(8960,9215)]),R(C,[B(318),Bd(9216,9279)]),R(C,[B(319),Bd(9280,9311)]),R(C,[B(320),Bd(9312,
9471)]),R(C,[B(321),Bd(9472,9599)]),R(C,[B(322),Bd(9600,9631)]),R(C,[B(323),Bd(9632,9727)]),R(C,[B(324),Bd(9728,9983)]),R(C,[B(325),Bd(9984,10175)]),R(C,[B(326),Bd(10176,10223)]),R(C,[B(327),Bd(10224,10239)]),R(C,[B(328),Bd(10240,10495)]),R(C,[B(329),Bd(10496,10623)]),R(C,[B(330),Bd(10624,10751)]),R(C,[B(331),Bd(10752,11007)]),R(C,[B(332),Bd(11008,11263)]),R(C,[B(333),Bd(11264,11359)]),R(C,[B(334),Bd(11392,11519)]),R(C,[B(335),Bd(11520,11567)]),R(C,[B(336),Bd(11568,11647)]),R(C,[B(337),Bd(11648,11743)]),R(C,
[B(338),Bd(11776,11903)]),R(C,[B(339),Bd(11904,12031)]),R(C,[B(340),Bd(12032,12255)]),R(C,[B(341),Bd(12272,12287)]),R(C,[B(342),Bd(12288,12351)]),R(C,[B(343),Bd(12352,12447)]),R(C,[B(344),Bd(12448,12543)]),R(C,[B(345),Bd(12544,12591)]),R(C,[B(346),Bd(12592,12687)]),R(C,[B(347),Bd(12688,12703)]),R(C,[B(348),Bd(12704,12735)]),R(C,[B(349),Bd(12736,12783)]),R(C,[B(350),Bd(12784,12799)]),R(C,[B(351),Bd(12800,13055)]),R(C,[B(352),Bd(13056,13311)]),R(C,[B(353),Bd(13312,19893)]),R(C,[B(354),Bd(19904,19967)]),R(C,[B(355),
Bd(19968,40959)]),R(C,[B(356),Bd(40960,42127)]),R(C,[B(357),Bd(42128,42191)]),R(C,[B(358),Bd(42752,42783)]),R(C,[B(359),Bd(43008,43055)]),R(C,[B(360),Bd(44032,55203)]),R(C,[B(361),Bd(55296,56191)]),R(C,[B(362),Bd(56192,56319)]),R(C,[B(363),Bd(56320,57343)]),R(C,[B(364),Bd(57344,63743)]),R(C,[B(365),Bd(63744,64255)]),R(C,[B(366),Bd(64256,64335)]),R(C,[B(367),Bd(64336,65023)]),R(C,[B(368),Bd(65024,65039)]),R(C,[B(369),Bd(65040,65055)]),R(C,[B(370),Bd(65056,65071)]),R(C,[B(371),Bd(65072,65103)]),R(C,[B(372),Bd(65104,
65135)]),R(C,[B(373),Bd(65136,65279)]),R(C,[B(374),Bd(65280,65519)]),R(C,[B(29),Bd(0,1114111)]),R(C,[B(375),AVR()]),R(C,[B(376),B$(0,1)]),R(C,[B(377),Jo(62,1)]),R(C,[B(378),B$(1,1)]),R(C,[B(379),B$(2,1)]),R(C,[B(380),B$(3,0)]),R(C,[B(381),B$(4,0)]),R(C,[B(382),B$(5,1)]),R(C,[B(383),Jo(448,1)]),R(C,[B(384),B$(6,1)]),R(C,[B(385),B$(7,0)]),R(C,[B(386),B$(8,1)]),R(C,[B(387),Jo(3584,1)]),R(C,[B(388),B$(9,1)]),R(C,[B(389),B$(10,1)]),R(C,[B(390),B$(11,1)]),R(C,[B(391),Jo(28672,0)]),R(C,[B(392),B$(12,0)]),R(C,[B(393),
B$(13,0)]),R(C,[B(394),B$(14,0)]),R(C,[B(395),AWU(983040,1,1)]),R(C,[B(396),B$(15,0)]),R(C,[B(397),B$(16,1)]),R(C,[B(398),B$(18,1)]),R(C,[B(399),AXb(19,0,1)]),R(C,[B(400),Jo(1643118592,1)]),R(C,[B(401),B$(20,0)]),R(C,[B(402),B$(21,0)]),R(C,[B(403),B$(22,0)]),R(C,[B(404),B$(23,0)]),R(C,[B(405),B$(24,1)]),R(C,[B(406),Jo(2113929216,1)]),R(C,[B(407),B$(25,1)]),R(C,[B(408),B$(26,0)]),R(C,[B(409),B$(27,0)]),R(C,[B(410),B$(28,1)]),R(C,[B(411),B$(29,0)]),R(C,[B(412),B$(30,0)])]);}
function Mi(){Co.call(this);this.n7=0;}
function AR4(a,b,c){var d,e,f,g;d=b+1|0;if(b>=0){e=c.e.data;f=e.length;if(b<f){g=e[b];if(d>=0&&d<f){d=e[d];b=a.n7;d=((g&1023)<<10|d&1023)+65536|0;if(A5u===null){if(A5v===null)A5v=C1();A5u=B0(B1((A5v.value!==null?$rt_str(A5v.value):null)));}d=BW(A5u,d);if(A5s===null){if(A5t===null)A5t=C0();A5s=B0(B1((A5t.value!==null?$rt_str(A5t.value):null)));}return b!=BW(A5s,d)?(-1):2;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}
function AVj(a){var b,c,d,e,f,g;b=new M;c=a.n7;if(c<65536){d=D(1);d.data[0]=c&65535;}else d=EE([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;P();f=e.length;e=D(f);b.e=e;L(d,0,e,0,f);g=new O;g.b=D(16);I(g,g.a,B(199));I(g,g.a,b);b=new M;d=g.b;f=g.a;e=D(f);b.e=e;L(d,0,e,0,f);return b;}
function IQ(){Ch.call(this);this.fx=0;}
function AXC(a){var b=new IQ();AHP(b,a);return b;}
function AHP(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.fx=b;}
function AP8(a,b){a.p=b;}
function NR(a,b,c,d){var e,f,g,h,i;e=b+1|0;if(e>d.U){d.dc=1;return (-1);}if(b>=0){f=c.e.data;g=f.length;if(b<g){a:{h=f[b];if(b>d.c$){i=b-1|0;if(i>=0&&i<g){if(!((f[i]&64512)!=55296?0:1))break a;return (-1);}c=new X;c.c=1;c.d=1;H(c);}}if(a.fx!=h)return (-1);return a.p.o(e,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function ALJ(a,b,c,d){var e,f,g,h,i,j;if(!(c instanceof M)){e=d.U;a:{while(true){if(b>e){b=(-1);break a;}if(NR(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.c$;g=d.U;b:{while(true){if(b>=g)return (-1);h=D5(c,a.fx,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;i=c.e.data;if(b>=i.length)break b;if((i[b]&64512)!=55296?0:1){b=h+1|0;continue;}}j=a.p;b=h+1|0;if(j.o(b,c,d)>=0)break;}return h;}c=new X;c.c=1;c.d=1;H(c);}
function AJv(a,b,c,d,e){var f,g,h;if(!(d instanceof M)){a:{while(true){if(c<b){c=(-1);break a;}if(NR(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.c$;b:{c:{while(true){if(c<b)return (-1);g=Ew(d,a.fx,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;h=d.e.data;if(c>=h.length)break b;if((h[c]&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.p.o(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new X;d.c=1;d.d=1;H(d);}
function ASJ(a){var b,c,d,e,f,g;b=a.fx;c=new O;c.b=D(16);d=c.a;Bc(c,d,d+1|0);e=c.b;e.data[d]=b;f=new M;d=c.a;P();g=D(d);f.e=g;L(e,0,g,0,d);return f;}
function AFZ(a,b){if(b instanceof ES)return 0;if(b instanceof EC)return 0;if(b instanceof DZ)return 0;if(b instanceof E9)return 0;if(b instanceof Lb)return 0;if(!(b instanceof IQ))return 1;return b.fx!=a.fx?0:1;}
function ASR(a,b){return 1;}
function Lb(){Ch.call(this);this.f4=0;}
function AMh(a){var b=new Lb();APH(b,a);return b;}
function APH(a,b){var c,d;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.f4=b;}
function AHS(a,b){a.p=b;}
function Mt(a,b,c,d){var e,f,g,h,i;e=d.U;f=b+1|0;e=Bm(f,e);if(e>0){d.dc=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){a:{i=g[b];if(e<0){if(f>=0&&f<h){if(!((g[f]&64512)!=56320?0:1))break a;return (-1);}c=new X;c.c=1;c.d=1;H(c);}}if(a.f4!=i)return (-1);return a.p.o(f,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function AQA(a,b,c,d){var e,f,g;if(!(c instanceof M)){e=d.U;a:{while(true){if(b>e){b=(-1);break a;}if(Mt(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.U;b:{while(true){if(b>=e)return (-1);f=D5(c,a.f4,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;g=c.e.data;if(b>=g.length)break b;if((g[b]&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.p.o(b,c,d)>=0)break;}return f;}c=new X;c.c=1;c.d=1;H(c);}
function ARY(a,b,c,d,e){var f,g,h;if(!(d instanceof M)){a:{while(true){if(c<b){c=(-1);break a;}if(Mt(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.U;b:{c:{while(true){if(c<b)return (-1);g=Ew(d,a.f4,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;h=d.e.data;if(c>=h.length)break b;if((h[c]&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.p.o(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new X;d.c=1;d.d=1;H(d);}
function AUL(a){var b,c,d,e,f,g;b=a.f4;c=new O;c.b=D(16);d=c.a;Bc(c,d,d+1|0);e=c.b;e.data[d]=b;f=new M;d=c.a;P();g=D(d);f.e=g;L(e,0,g,0,d);return f;}
function AJn(a,b){if(b instanceof ES)return 0;if(b instanceof EC)return 0;if(b instanceof DZ)return 0;if(b instanceof E9)return 0;if(b instanceof IQ)return 0;if(!(b instanceof Lb))return 1;return b.f4!=a.f4?0:1;}
function AQL(a,b){return 1;}
function E9(){var a=this;Co.call(a);a.gL=0;a.f8=0;a.g3=0;}
function AVS(a){var b=new E9();AU3(b,a);return b;}
function AU3(a,b){var c,d,e;c=AZF;AZF=c+1|0;d=new Bi;d.b=D(20);a.x=(N(d,d.a,c,10)).s();a.bl=1;a.bl=2;a.g3=b;if(b<65536){e=D(1);e.data[0]=b&65535;}else e=EE([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);e=e.data;a.gL=e[0];a.f8=e[1];}
function ARj(a,b,c){var d,e,f,g;d=b+1|0;if(b>=0){e=c.e.data;f=e.length;if(b<f){g=e[b];if(d>=0&&d<f){d=e[d];return a.gL==g&&a.f8==d?2:(-1);}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}
function APb(a,b,c,d){var e,f,g,h,i;if(c instanceof M){e=d.U;a:{while(b<e){b=D5(c,a.gL,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;f=c.e.data;if(b>=f.length)break a;g=f[b];if(a.f8==g&&a.p.o(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new X;c.c=1;c.d=1;H(c);}h=d.U;b:{c:{d:{while(true){if(b>h){b=(-1);break d;}if((b+a.bl|0)>d.U){d.dc=1;g=(-1);}else{g=b+1|0;if(b<0)break b;f=c.e.data;e=f.length;if(b>=e)break b;i=f[b];if(g<0)break c;if(g>=e)break c;e=f[g];g=a.gL==i&&a.f8==e?2:(-1);g=g<
0?(-1):a.p.o(b+g|0,c,d);}if(g>=0)break;b=b+1|0;}}return b;}c=new X;CQ(c);H(c);}c=new X;CQ(c);H(c);}
function AHQ(a,b,c,d,e){var f,g,h,i,j;if(d instanceof M){a:{b:{while(true){if(c<b)return (-1);c=Ew(d,a.f8,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.gL;if(c<0)break a;g=d.e.data;if(c>=g.length)break a;if(f==g[c]&&a.p.o(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new X;d.c=1;d.d=1;H(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.bl|0)>e.U){e.dc=1;f=(-1);}else{h=c+1|0;if(c<0)break c;g=d.e.data;f=g.length;if(c>=f)break c;i=g[c];if(h<0)break d;if(h>=f)break d;j=g[h];f=a.gL==i&&a.f8==j?2:
(-1);f=f<0?(-1):a.p.o(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new X;CQ(d);H(d);}d=new X;CQ(d);H(d);}
function ATL(a){var b,c,d,e,f,g,h;b=a.gL;c=a.f8;d=new O;d.b=D(16);e=d.a;Bc(d,e,e+1|0);d.b.data[e]=b;b=d.a;Bc(d,b,b+1|0);f=d.b;f.data[b]=c;g=new M;c=d.a;P();h=D(c);g.e=h;L(f,0,h,0,c);return g;}
function AQ$(a,b){if(b instanceof E9)return b.g3!=a.g3?0:1;if(b instanceof DZ)return b.A(a.g3);if(b instanceof ES)return 0;if(!(b instanceof EC))return 1;return 0;}
var Rb=G(FL);
function AH2(a,b){return b!=10?0:1;}
function ARc(a,b,c){return b!=10?0:1;}
var Rc=G(FL);
function AR_(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AUg(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ABg(){var a=this;C.call(a);a.pW=null;a.ms=null;a.iK=0;a.vS=0;}
function APr(a){var b=new ABg();AMA(b,a);return b;}
function AMA(a,b){var c,d;while(true){c=a.iK;if(b<c)break;a.iK=c<<1|1;}d=c<<1|1;a.iK=d;d=d+1|0;a.pW=Z(d);a.ms=Z(d);a.vS=b;}
function O6(a,b,c){var d,e,f,g;d=0;e=a.iK;f=b&e;while(true){g=a.pW.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.ms.data[f]=c;}
function PN(a,b){var c,d,e,f;c=a.iK;d=b&c;e=0;while(true){f=a.pW.data[d];if(!f)break;if(f==b)return a.ms.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.vS;}
var VB=G();
var UL=G();
function AUs(b){var c,d,e,f,g,h,i,j,k,l,m;c=new Lr;d=b.e.data;e=D(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}c.m1=e;g=GQ(c);d=Z(g*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<g){l=GQ(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=GQ(c);m=l/2|0;if(l%2|0)m= -m|0;j=j+m|0;m=h+1|0;e[h]=i;h=m+1|0;e[m]=j;k=k+1|0;}return d;}
function B1(b){var c,d,e,f,g,h,i,j,k,l;c=new Lr;d=b.e.data;e=D(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}c.m1=e;g=GQ(c);d=Z(g*2|0);e=d.data;h=0;i=0;while(i<g){h=h+GQ(c)|0;j=i*2|0;e[j]=h;k=j+1|0;l=GQ(c);j=l/2|0;if(l%2|0)j= -j|0;e[k]=j;i=i+1|0;}return d;}
function B0(b){var c,d,e,f,g,h,i,j,k,l,m;c=Z(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Be;l.c=1;l.d=1;H(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new Rp;l.sS=b;l.s$=c;return l;}
function KN(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AVr(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=Bg(Ic,16384);d=c.data;e=BE(16384).data;f=0;g=0;h=0;i=0;a:{b:{while(true){j=b.e.data;k=Bm(i,j.length);if(k>=0){l=c.constructor;if(l===null)b=null;else{b=l.classObject;if(b===null){b=new BZ;b.C=l;m=b;l.classObject=m;}}b=Dd(b);if(b===null){b=new CB;b.c=1;b.d=1;H(b);}if(b===J($rt_voidcls())){b=new Be;b.c=1;b.d=1;H(b);}if(g<0){b=new C3;b.c=1;b.d=1;H(b);}m=Dv(b.C,g);f=d.length;if(g<f)f=g;g=0;while(g<f){m.data[g]=d[g];g=g+1|0;}return m;}if(i<0)break;if(k>=0)break;n
=KN(j[i]);if(n==64){i=i+1|0;if(i<0)break b;j=b.e.data;if(i>=j.length)break b;n=KN(j[i]);o=0;p=1;q=0;while(q<3){i=i+1|0;if(i<0)break a;j=b.e.data;if(i>=j.length)break a;o=o|D4(p,KN(j[i]));p=p*64|0;q=q+1|0;}}else if(n<32)o=1;else{n=(n-32|0)<<24>>24;i=i+1|0;o=KN(CO(b,i));}if(!n&&o>=128){if(f>0){k=g+1|0;l=new Ic;p=h+f|0;j=BE(f);q=e.length;if(f<q)q=f;r=j.data;s=0;while(s<q){r[s]=e[s];s=s+1|0;}l.nB=h;l.or=p;l.nG=j;d[g]=l;g=k;}h=h+(f+o|0)|0;f=0;}else{k=f+o|0;p=e.length;if(k<p)q=g;else{q=g+1|0;l=new Ic;s=h+f|0;j=BE(f);if
(f<p)p=f;r=j.data;f=0;while(f<p){r[f]=e[f];f=f+1|0;}l.nB=h;l.or=s;l.nG=j;d[g]=l;h=h+k|0;f=0;}while(true){g=o+(-1)|0;if(o<=0)break;k=f+1|0;e[f]=n;f=k;o=g;}g=q;}i=i+1|0;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
var C3=G(BF);
var TI=G();
function Lr(){var a=this;C.call(a);a.m1=null;a.sv=0;}
var W4=G();
function GQ(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.m1.data;f=b.sv;b.sv=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+D4(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
var KX=G(Bu);
function AYj(){var a=new KX();AL$(a);return a;}
function AL$(a){}
function AL6(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return CK(BI(b,9,13),32);}
var Kh=G(Bu);
function AW6(){var a=new Kh();ASK(a);return a;}
function ASK(a){}
function AN3(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(b,48,57);}
var ABb=G(Bu);
function AYR(){var a=new ABb();ALg(a);return a;}
function ALg(a){}
function ARH(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(b,97,122);}
var ABX=G(Bu);
function AVB(){var a=new ABX();AMG(a);return a;}
function AMG(a){}
function ASS(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(b,65,90);}
var AB0=G(Bu);
function AYi(){var a=new AB0();AG$(a);return a;}
function AG$(a){}
function AJ0(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(b,0,127);}
var KU=G(Bu);
function AYz(){var a=new KU();AIS(a);return a;}
function AIS(a){}
function AIw(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(BI(b,97,122),65,90);}
var Lk=G(KU);
function AXi(){var a=new Lk();AMm(a);return a;}
function AMm(a){}
function AKJ(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(BI(BI(b,97,122),65,90),48,57);}
var AEC=G(Bu);
function AWY(){var a=new AEC();AOV(a);return a;}
function AOV(a){}
function ALI(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(BI(BI(b,33,64),91,96),123,126);}
var Md=G(Lk);
function AVN(){var a=new Md();AQY(a);return a;}
function AQY(a){}
function AE7(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(BI(BI(BI(BI(BI(b,97,122),65,90),48,57),33,64),91,96),123,126);}
var X7=G(Md);
function AVH(){var a=new X7();ASt(a);return a;}
function ASt(a){}
function AOC(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return CK(BI(BI(BI(BI(BI(BI(b,97,122),65,90),48,57),33,64),91,96),123,126),32);}
var YS=G(Bu);
function AVT(){var a=new YS();AR1(a);return a;}
function AR1(a){}
function AJd(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return CK(CK(b,32),9);}
var VF=G(Bu);
function AWr(){var a=new VF();AT7(a);return a;}
function AT7(a){}
function AOy(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return CK(BI(b,0,31),127);}
var Vj=G(Bu);
function AVQ(){var a=new Vj();AHw(a);return a;}
function AHw(a){}
function AUl(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(BI(BI(b,48,57),97,102),65,70);}
var AB7=G(Bu);
function AXS(){var a=new AB7();AGQ(a);return a;}
function AGQ(a){}
function APo(a){var b,c;b=new PY;b.zB=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var AEO=G(Bu);
function AVy(){var a=new AEO();ARa(a);return a;}
function ARa(a){}
function AFe(a){var b,c;b=new Ms;b.zR=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var ABh=G(Bu);
function AYs(){var a=new ABh();AHc(a);return a;}
function AHc(a){}
function AMj(a){var b,c;b=new Ps;b.yE=a;Bv();c=new Bp;c.v=Z(64);b.y=c;return b;}
var AAX=G(Bu);
function AWn(){var a=new AAX();AOA(a);return a;}
function AOA(a){}
function ARn(a){var b,c;b=new Pr;b.x5=a;Bv();c=new Bp;c.v=Z(64);b.y=c;return b;}
var ACF=G(Bu);
function AXg(){var a=new ACF();AIM(a);return a;}
function AIM(a){}
function AJa(a){var b,c;b=new RX;b.BL=a;Bv();c=new Bp;c.v=Z(64);b.y=c;IB(c,0,2048);b.bu=1;return b;}
var T$=G(Bu);
function AWj(){var a=new T$();AHZ(a);return a;}
function AHZ(a){}
function AJB(a){var b,c;b=new NN;b.Ao=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var Tn=G(Bu);
function AXh(){var a=new Tn();AN8(a);return a;}
function AN8(a){}
function AUa(a){var b,c;b=new Nd;b.Cw=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var ABt=G(Bu);
function AVZ(){var a=new ABt();AOW(a);return a;}
function AOW(a){}
function AE4(a){var b,c;b=new OW;b.zD=a;Bv();c=new Bp;c.v=Z(64);b.y=c;return b;}
var ABL=G(Bu);
function AYF(){var a=new ABL();AL0(a);return a;}
function AL0(a){}
function ANi(a){var b,c;b=new Mn;b.wd=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var We=G(Bu);
function AWb(){var a=new We();AF_(a);return a;}
function AF_(a){}
function AJJ(a){var b,c;b=new Mr;b.Av=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var YW=G(Bu);
function AXq(){var a=new YW();AH_(a);return a;}
function AH_(a){}
function AK0(a){var b,c;b=new M9;b.BI=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var AD4=G(Bu);
function AYg(){var a=new AD4();ANv(a);return a;}
function ANv(a){}
function ANo(a){var b,c;b=new N7;b.B5=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var ABG=G(Bu);
function AYe(){var a=new ABG();APf(a);return a;}
function APf(a){}
function ATh(a){var b,c;b=new N_;b.yU=a;Bv();c=new Bp;c.v=Z(64);b.y=c;return b;}
var W_=G(Bu);
function AYC(){var a=new W_();AH0(a);return a;}
function AH0(a){}
function AQR(a){var b,c;b=new Qn;b.AN=a;Bv();c=new Bp;c.v=Z(64);b.y=c;return b;}
var Wd=G(Bu);
function AVY(){var a=new Wd();ARq(a);return a;}
function ARq(a){}
function APe(a){var b,c;b=new PI;b.wm=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var AEM=G(Bu);
function AXY(){var a=new AEM();ALV(a);return a;}
function ALV(a){}
function ARB(a){var b,c;b=new MA;b.CS=a;Bv();c=new Bp;c.v=Z(64);b.y=c;b.bu=1;return b;}
var JS=G(Bu);
function AXA(){var a=new JS();AJT(a);return a;}
function AJT(a){}
function ANH(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return CK(BI(BI(BI(b,97,122),65,90),48,57),95);}
var ACQ=G(JS);
function AVO(){var a=new ACQ();AL3(a);return a;}
function AL3(a){}
function AOZ(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;b=E3(CK(BI(BI(BI(b,97,122),65,90),48,57),95),1);b.bu=1;return b;}
var Yg=G(KX);
function AVx(){var a=new Yg();ATO(a);return a;}
function ATO(a){}
function AG4(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;b=E3(CK(BI(b,9,13),32),1);b.bu=1;return b;}
var V7=G(Kh);
function AWG(){var a=new V7();AM1(a);return a;}
function AM1(a){}
function ALv(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;b=E3(BI(b,48,57),1);b.bu=1;return b;}
function Vt(){var a=this;Bu.call(a);a.sr=0;a.sQ=0;}
function Bd(a,b){var c=new Vt();AT9(c,a,b);return c;}
function AT9(a,b,c){a.sr=b;a.sQ=c;}
function ANL(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(b,a.sr,a.sQ);}
var VZ=G(Bu);
function AVR(){var a=new VZ();AUv(a);return a;}
function AUv(a){}
function AT3(a){var b,c;b=new Cx;Bv();c=new Bp;c.v=Z(64);b.y=c;c=new Bp;c.v=Z(2);b.B=c;return BI(BI(b,65279,65279),65520,65533);}
function XI(){var a=this;Bu.call(a);a.ph=0;a.md=0;a.rx=0;}
function B$(a,b){var c=new XI();AIF(c,a,b);return c;}
function AXb(a,b,c){var d=new XI();AT_(d,a,b,c);return d;}
function AIF(a,b,c){a.md=c;a.ph=b;}
function AT_(a,b,c,d){a.rx=d;a.md=c;a.ph=b;}
function AKx(a){var b,c,d;b=new Jt;c=a.ph;Bv();d=new Bp;d.v=Z(64);b.y=d;b.lt=c;if(a.rx)IB(d,0,2048);b.bu=a.md;return b;}
function X8(){var a=this;Bu.call(a);a.pf=0;a.mv=0;a.qA=0;}
function Jo(a,b){var c=new X8();AJK(c,a,b);return c;}
function AWU(a,b,c){var d=new X8();AE6(d,a,b,c);return d;}
function AJK(a,b,c){a.mv=c;a.pf=b;}
function AE6(a,b,c,d){a.qA=d;a.mv=c;a.pf=b;}
function AE5(a){var b,c,d;b=new Pm;c=a.pf;Bv();d=new Bp;d.v=Z(64);b.y=d;b.lt=c;if(a.qA)IB(d,0,2048);b.bu=a.mv;return b;}
function Rp(){var a=this;C.call(a);a.sS=null;a.s$=null;}
function Ic(){var a=this;C.call(a);a.nB=0;a.or=0;a.nG=null;}
var Uc=G();
function UV(b,c,d,e){var f,g;if(c<=d){while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}return;}e=new Be;e.c=1;e.d=1;H(e);}
function AQb(b,c,d,e){var f,g,h,i,j;if(c>d){f=new Be;f.c=1;f.d=1;H(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;}
function ARf(b,c,d,e){var f,g,h,i;if(c>d){f=new Be;f.c=1;f.d=1;H(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=Bm(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;}
function ACd(b,c){var d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;}
var X=G(Y);
var ABS=G();
function Wx(){var a=this;Dt.call(a);a.ra=null;a.q6=0;a.ip=null;}
function AW5(a,b,c){var d=new Wx();AH3(d,a,b,c);return d;}
function AH3(a,b,c,d){a.ip=b;a.ra=c;a.q6=d;}
function ASw(a,b){}
function AJQ(a,b){var c,d,e,f,g,h,i;if(A5R===null){c=new Cu;c.b6=AZW;b=new O;b.b=D(16);c.ba=b;c.b4=D(32);c.cm=0;Ct();c.ce=A5l;A5R=c;}b=A5R;c=a.ra;d=new O;d.b=D(16);I(d,d.a,B(413));e=d.a;if(c===null)c=B(2);I(d,e,c);f=new M;g=d.b;h=d.a;P();i=D(h);f.e=i;L(g,0,i,0,h);c=b.ba;I(c,c.a,f);h=c.a;Bc(c,h,h+1|0);c.b.data[h]=10;Cl(b);}
function TN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=(Ib(Gb(B(104),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.ip;b.n9=b.kD.l;if(a.q6){e=0;while(true){b=a.ip;c=b.kD;f=Bm(e,c.l);if(f>=0)break a;if(f>=0){g=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,e,10);I(b,b.a,B(36));e=c.l;N(b,b.a,e,10);c=new M;d=b.b;f=b.a;P();h=D(f);c.e=h;L(d,0,h,0,f);g.c=1;g.d=1;g.f=c;H(g);}Xp(b,c.r.data[e]);e=e+1|0;}}}return 0;}i=d[f];h=(Ib(Gb(B(102),0),i,0)).data;if(h.length!=4)break;g=h[0];j=Yz(h[1]);b=h[2];if(b===null){b=new B8;b.c
=1;b.d=1;b.f=B(76);H(b);}k=ACP(b,0,b.e.data.length,10);l=h[3];E8();m=A6l;if(BA(g,B(414)))m=A6i;if(BA(g,B(415)))m=A6k;if(BA(g,B(416)))m=A6j;if(BA(g,B(253)))m=A6H;if(m===A6j&&!A5I.uD)k=B2;n=new PK;n.nO=j;n.rD=m;n.vb=k;n.rj=l;BD(a.ip.r3,j,j);Cj(a.ip.kD,n);f=f+1|0;}b=new Ba;b.c=1;b.d=1;b.f=B(417);H(b);}
function AO6(a,b,c){return TN(a,b,c);}
var B4=G(BC);
var A6I=null;var A6J=null;var A6K=null;var A6L=null;var A6M=null;var A6N=null;var A6O=null;var A6P=null;var A6Q=null;var A6R=null;function AH8(){AH8=W(B4);AGd();}
function AGd(){var b,c,d,e,f,g,h,i,j;b=new RD;AH8();b.t=B(418);b.q=0;A6I=b;c=new RE;c.t=B(419);c.q=1;A6J=c;d=new RI;d.t=B(420);d.q=2;A6K=d;e=new RJ;e.t=B(421);e.q=3;A6L=e;f=new RG;f.t=B(422);f.q=4;A6M=f;g=new RH;g.t=B(423);g.q=5;A6N=g;h=new RB;h.t=B(424);h.q=6;A6O=h;i=new RC;i.t=B(425);i.q=7;A6P=i;j=new RA;j.t=B(426);j.q=8;A6Q=j;A6R=R(B4,[b,c,d,e,f,g,h,i,j]);}
function EJ(){var a=this;Hi.call(a);a.el=0;a.cQ=null;}
var AEn=G(0);
function AHu(b){return !BA(b,B(427))&&!BA(b,B(428))&&!BA(b,B(429))&&!BA(b,B(430))&&!BA(b,B(431))?0:1;}
function AL7(b){var c;a:{b:{if(BA(b,B(432)))break b;if(BA(b,B(433)))break b;if(BA(b,B(434)))break b;if(BA(b,B(435)))break b;if(BA(b,B(436)))break b;if(BA(b,B(437)))break b;if(BA(b,B(438)))break b;if(BA(b,B(439)))break b;if(!BA(b,B(440))){c=0;break a;}}c=1;}return c;}
var QU=G(0);
var VX=G();
function AT6(a,b,c){a.Dm($rt_str(b),Dp(c,"handleEvent"));}
function APv(a,b){return !!a.G0(b);}
function AHT(a,b,c){a.AF($rt_str(b),Dp(c,"handleEvent"));}
function AMU(a,b,c,d){a.Dy($rt_str(b),Dp(c,"handleEvent"),d?1:0);}
function ASi(a,b,c,d){a.GT($rt_str(b),Dp(c,"handleEvent"),d?1:0);}
function Qy(){var a=this;C.call(a);a.nv=null;a.p6=null;a.ku=null;a.qc=0;a.lH=null;}
function AAj(a,b){var c,d,e;c=b.target;d=null;e=a.nv;E8();if(e!==A6k&&e!==A6j){if(e===A6i){b=$rt_globals.window.document.createElement("img");d=$rt_ustr($rt_str(c.result));b.src=d;e=c.result;c=new $rt_globals.Int8Array(e);d=new H_;d.dz=c;d.oF=e;d.oW=b;}else if(e===A6l)d=$rt_str(c.result);}else{e=c.result;b=new $rt_globals.Int8Array(e);d=new H_;d.dz=b;d.oF=e;}if(d!==null){H9(a.lH.rn,a.nv,a.p6,d);Cj(a.ku,a.p6);if(a.ku.l==a.qc){b=a.lH.qP;d=new MC;d.on=a;Cj(b.jN,d);}}}
function AOm(a,b){AAj(a,b);}
function Dm(){BC.call(this);this.jH=null;}
var A6i=null;var A6j=null;var A6l=null;var A6k=null;var A6H=null;var A6S=null;function E8(){E8=W(Dm);APO();}
function APO(){var b,c,d,e,f;b=new Dm;E8();b.t=B(441);b.q=0;b.jH=B(414);A6i=b;c=new Dm;c.t=B(442);c.q=1;c.jH=B(416);A6j=c;d=new Dm;d.t=B(443);d.q=2;d.jH=B(444);A6l=d;e=new Dm;e.t=B(445);e.q=3;e.jH=B(415);A6k=e;f=new Dm;f.t=B(446);f.q=4;f.jH=B(253);A6H=f;A6S=R(Dm,[b,c,d,e,f]);}
var KI=G();
var A6T=null;var A6U=null;function ACG(b){var c,d,e,f,g,h,i,j,k,l;c=new O;c.b=D(16);d=ABM();e=0;f=A6U.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.a;if(i>0){Bc(c,i,i+1|0);c.b.data[i]=32;}j=d.data[e];I(c,c.a,j);}e=e+1|0;h=h+1|0;}j=new M;d=c.b;k=c.a;P();l=D(k);j.e=l;L(d,0,l,0,k);return j;}
function ABM(){if(A6T===null)A6T=R(M,[B(447),B(448),B(449),B(450),B(451),B(452),B(453),B(454),B(455),B(456),B(457),B(458)]);return A6T;}
function Tw(){A6U=F9([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
var Lj=G();
var Pg=G(0);
function Hl(){var a=this;Lj.call(a);a.fe=null;a.yr=null;a.jz=0;a.k4=0;a.fs=null;a.po=null;}
function AGK(a){var b,c,d,e,f,g,h;b=new O;b.b=D(16);c=ACG(Ol(a.jz,a.k4));I(b,b.a,c);d=b.a;if(d>0){Bc(b,d,d+1|0);b.b.data[d]=32;}c=a.fe;if(c.X===null)c.X=$rt_str(c.C.$meta.name);c=c.X;I(b,b.a,c);d=b.a;Bc(b,d,d+1|0);b.b.data[d]=40;e=a.fs.cn();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.a;Bc(b,h,h+1|0);b.b.data[h]=44;}c=g[f];if(c.X===null)c.X=$rt_str(c.C.$meta.name);c=c.X;I(b,b.a,c);f=f+1|0;}d=b.a;Bc(b,d,d+1|0);e=b.b;e.data[d]=41;c=new M;d=b.a;P();g=D(d);c.e=g;L(e,0,g,0,d);return c;}
function ACi(a,b){var c,d,e,f,g;if(a.jz&1){c=new La;c.c=1;c.d=1;H(c);}if(a.po===null){c=new JD;c.c=1;c.d=1;H(c);}d=b.data;e=d.length;if(e!=a.fs.data.length){c=new Be;c.c=1;c.d=1;H(c);}f=0;while(f<e){if(!(a.fs.data[f].C.$meta.primitive?1:0)&&d[f]!==null){c=a.fs.data[f];g=d[f];c=c.C;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&Qi(g.constructor,c)?1:0)){c=new Be;c.c=1;c.d=1;H(c);}}if((a.fs.data[f].C.$meta.primitive?1:0)&&d[f]===null){c=new Be;c.c=1;c.d=1;H(c);}f=f+1|0;}c=b.data;g=new (a.fe.C);a.po.call(g,
c);return g;}
function RP(){var a=this;Bo.call(a);a.qR=null;a.BQ=null;}
function AJ9(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cT^Cw(a.qR,c):0;}
function RO(){var a=this;Bo.call(a);a.uJ=null;a.vc=null;a.AY=null;}
function AFI(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cT^Cw(a.uJ,c):0;return a.vc.A(b)&&!d?1:0;}
function Nn(){var a=this;Bo.call(a);a.kJ=null;a.ws=null;}
function ANy(a,b){return a.Q^Cw(a.kJ,b);}
function AK_(a){var b,c,d,e,f,g,h,i,j,k;b=new O;b.b=D(16);c=H3(a.kJ,0);while(c>=0){if(c<65536){d=D(1);d.data[0]=c&65535;}else d=EE([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;f=0;g=e.length;h=b.a;Bc(b,h,h+g|0);g=g+f|0;while(f<g){d=b.b.data;i=h+1|0;j=f+1|0;d[h]=e[f];h=i;f=j;}g=b.a;Bc(b,g,g+1|0);b.b.data[g]=124;c=H3(a.kJ,c+1|0);}h=b.a;if(h>0)RS(b,h-1|0);k=new M;d=b.b;h=b.a;P();e=D(h);k.e=e;L(d,0,e,0,h);return k;}
function Nt(){var a=this;Bo.call(a);a.sG=null;a.zQ=null;}
function ARl(a,b){return a.sG.A(b);}
function Nr(){var a=this;Bo.call(a);a.mg=0;a.rk=null;a.nK=null;}
function AR3(a,b){return !(a.mg^Cw(a.nK.B,b))&&!(a.mg^a.nK.eo^a.rk.A(b))?0:1;}
function Ns(){var a=this;Bo.call(a);a.mt=0;a.uT=null;a.oO=null;}
function AN_(a,b){return !(a.mt^Cw(a.oO.B,b))&&!(a.mt^a.oO.eo^a.uT.A(b))?1:0;}
function Nw(){var a=this;Bo.call(a);a.vE=0;a.uY=null;a.uQ=null;a.xl=null;}
function AJE(a,b){return a.vE^(!a.uY.A(b)&&!a.uQ.A(b)?0:1);}
function Nx(){var a=this;Bo.call(a);a.sO=0;a.sC=null;a.sd=null;a.CF=null;}
function AET(a,b){return a.sO^(!a.sC.A(b)&&!a.sd.A(b)?0:1)?0:1;}
function Nu(){var a=this;Bo.call(a);a.r7=null;a.CM=null;}
function ALh(a,b){var c,d;c=a.r7;d=c.bv;return d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b);}
function Nv(){var a=this;Bo.call(a);a.va=null;a.xT=null;}
function AOb(a,b){var c,d;c=a.va;d=c.bv;return (d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b))?0:1;}
function Ny(){var a=this;Bo.call(a);a.s2=null;a.sF=0;a.uh=null;}
function ATr(a,b){var c,d,e;c=a.s2;d=c.bv;e=d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b);return !e&&!(a.sF^Cw(a.uh.B,b))?0:1;}
function Nz(){var a=this;Bo.call(a);a.tv=null;a.tE=0;a.tj=null;}
function AIY(a,b){var c,d,e;c=a.tv;d=c.bv;e=d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b);return !e&&!(a.tE^Cw(a.tj.B,b))?1:0;}
function Nm(){var a=this;Bo.call(a);a.uf=0;a.uS=null;a.vo=null;a.wE=null;}
function AVw(a,b){var c,d;a:{if(!(a.uf^a.uS.A(b))){c=a.vo;d=c.bv;if(!(d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b))){b=0;break a;}}b=1;}return b;}
function NT(){var a=this;Bo.call(a);a.vg=0;a.qq=null;a.qB=null;a.xF=null;}
function ALo(a,b){var c,d;a:{if(!(a.vg^a.qq.A(b))){c=a.qB;d=c.bv;if(!(d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b))){b=1;break a;}}b=0;}return b;}
function Nk(){var a=this;Bo.call(a);a.rR=null;a.x2=null;}
function AIW(a,b){var c,d;c=a.rR;d=c.bv;return d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b);}
function Nl(){var a=this;Bo.call(a);a.rV=null;a.Cy=null;}
function AKM(a,b){var c,d;c=a.rV;d=c.bv;return (d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b))?0:1;}
function Nq(){var a=this;Bo.call(a);a.vD=null;a.tp=0;a.v6=null;}
function AMF(a,b){var c,d,e;c=a.vD;d=c.bv;e=d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b);return e&&a.tp^Cw(a.v6.B,b)?1:0;}
function Nj(){var a=this;Bo.call(a);a.t3=null;a.sP=0;a.to=null;}
function AS1(a,b){var c,d,e;c=a.t3;d=c.bv;e=d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b);return e&&a.sP^Cw(a.to.B,b)?0:1;}
function No(){var a=this;Bo.call(a);a.uk=0;a.qQ=null;a.sL=null;a.xh=null;}
function AHp(a,b){var c,d;a:{if(a.uk^a.qQ.A(b)){c=a.sL;d=c.bv;if(d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b)){b=1;break a;}}b=0;}return b;}
function Np(){var a=this;Bo.call(a);a.tR=0;a.qm=null;a.ud=null;a.ya=null;}
function AQH(a,b){var c,d;a:{if(a.tR^a.qm.A(b)){c=a.ud;d=c.bv;if(d!==null?c.Q^d.A(b):c.Q^Cw(c.B,b)){b=0;break a;}}b=1;}return b;}
function Il(){var a=this;C.call(a);a.fg=null;a.oK=null;a.cC=null;a.dk=0;}
function D2(){var a=this;C.call(a);a.CH=null;a.e0=B2;a.fq=B2;a.dI=null;a.rE=null;a.eG=null;a.dF=0;a.e3=null;}
var A6V=null;var AZj=null;var A52=0;var A6W=0;var A6X=null;function CF(){CF=W(D2);AGZ();}
function YO(a){var b,c,$$je;a:{b:{c:{d:{try{CF();A6W=A6W+1|0;AA6(a);a.ex();}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){b=$$je;break d;}else{b=$$je;break c;}}b=a.dI;HF(b);e:{try{L1(b);D9(b);break e;}catch($$e){$$je=Bw($$e);c=$$je;}D9(b);H(c);}a.dF=0;A6W=A6W-1|0;b=A6V;if(AZj!==b)AZj=b;AZj.fq=EY();break a;}try{TT(W9(a),a,b);break b;}catch($$e){$$je=Bw($$e);b=$$je;}}c=a.dI;HF(c);f:{try{L1(c);D9(c);break f;}catch($$e){$$je=Bw($$e);b=$$je;}D9(c);H(b);}a.dF=0;A6W=A6W-1|0;c=A6V;if(AZj!==c)AZj=c;AZj.fq=EY();H(b);}b
=a.dI;HF(b);g:{try{L1(b);D9(b);break g;}catch($$e){$$je=Bw($$e);c=$$je;}D9(b);H(c);}a.dF=0;A6W=A6W-1|0;b=A6V;if(AZj!==b)AZj=b;AZj.fq=EY();}}
function AA6(b){CF();if(AZj!==b)AZj=b;AZj.fq=EY();}
function AEW(){CF();return AZj;}
function VP(b){var $p,$z;$p=0;if(ALx()){var $T=Rl();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:CF();$p=1;case 1:ADb(b);if(Ge()){break _;}return;default:AFA();}}Rl().s(b,$p);}
function AJC(b,c){var d,e;CF();d=AZj;e=new Ne;e.v7=d;e.uP=c;e.BT=Rq(e,AWh(b,T(2147483647))?2147483647:U(b));d.rE=e;}
function W9(a){var b;b=a.CH;if(b!==null)return b;CF();return A6X;}
function AGZ(){var b,c,d;b=new D2;CF();c=null;b.dI=new C;b.dF=1;b.eG=B(459);b.e3=c;d=A52;A52=d+1|0;b.e0=T(d);A6V=b;AZj=b;A52=1;A6W=1;A6X=new Pt;}
function ADb(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.ju=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.AB=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AXa(callback);thread.suspend(function(){try{AJC(b,callback);}catch($e){callback.AB($rt_exception($e));}});return null;}
var BH=G(BF);
function AWH(a){var b=new BH();AQa(b,a);return b;}
function AQa(a,b){a.c=1;a.d=1;a.f=b;}
var Iy=G(BF);
function ABy(){var a=this;C.call(a);a.bI=null;a.bz=null;a.eh=null;a.gj=null;a.d0=0;a.dn=0;a.c$=0;a.U=0;a.ep=0;a.lg=0;a.gk=0;a.dc=0;a.Bv=0;a.h1=0;a.hW=0;}
function AYp(a,b,c,d,e,f){var g=new ABy();AO8(g,a,b,c,d,e,f);return g;}
function AO8(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.h1=(-1);h=e+1|0;a.d0=h;i=Z(h*2|0);a.bI=i;j=Z(g);k=j.data;a.bz=j;e=0;g=k.length;l=Bm(e,g);if(l>0){b=new Be;b.c=1;b.d=1;H(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.eh=Z(f);i=i.data;h=0;m=i.length;e=Bm(h,m);if(e>0){b=new Be;b.c=1;b.d=1;H(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.dn=0;a.hW=2;f=0;if(e>0){b=new Be;b.c=1;b.d=1;H(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Be;b.c=1;b.d=1;H(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.gj=b;if(c>=0){a.c$
=c;a.U=d;}a.ep=a.c$;}
function YH(a,b){var c,d,e,f,g,h;if(!a.dn){c=new BH;c.c=1;c.d=1;H(c);}if(b>=0&&b<a.d0)return a.bI.data[(b*2|0)+1|0];c=new Y;P();d=new O;d.b=D(16);N(d,d.a,b,10);e=new M;f=d.b;g=d.a;h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function Yn(a,b){var c,d,e,f,g,h;if(!a.dn){c=new BH;c.c=1;c.d=1;H(c);}if(b>=0&&b<a.d0)return;c=new Y;P();d=new O;d.b=D(16);N(d,d.a,b,10);e=new M;f=d.b;g=d.a;h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
var ABC=G();
function YI(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function LA(b){if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
var WA=G();
function FA(){return AZg($rt_globals.performance.now()*1000000.0);}
function TW(b){return Lo(b,T(1000000));}
var Tp=G();
var F$=G(0);
function Sx(){C.call(this);this.sf=null;}
function ATt(a){ASe(a.sf);}
var RD=G(B4);
var RE=G(B4);
var RI=G(B4);
var RJ=G(B4);
var RG=G(B4);
var RH=G(B4);
var RB=G(B4);
var RC=G(B4);
var RA=G(B4);
var ACT=G();
var MO=G(0);
var Pt=G();
function TT(a,b,c){var d;if(A5k===null){d=new Cu;d.b6=AZX;b=new O;b.b=D(16);d.ba=b;d.b4=D(32);d.cm=0;Ct();d.ce=A5l;A5k=d;}Jv(c,A5k);}
var WL=G();
var Pf=G(0);
function O1(){C.call(this);this.gM=null;}
function AXa(b){var c;c=new O1;c.gM=b;return c;}
function AM0(a,b){a.gM.ju(b);}
function AUA(a,b){a.gM.AB(b);}
function PX(){var a=this;C.call(a);a.rB=null;a.rC=null;a.rz=0;a.rA=null;}
var MK=G(Hj);
function AKB(a,b,c,d){var e,f,g,h,i,j;e=0;f=d.U;a:{while(true){if(b>f){b=e;break a;}g=a.bG;h=d.bI.data;i=g*2|0;j=h[i];h[i]=b;e=a.ds.o(b,c,d);if(e>=0)break;i=a.bG;d.bI.data[i*2|0]=j;b=b+1|0;}}return b;}
function AVm(a,b,c,d,e){var f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.bG;h=e.bI.data;i=g*2|0;j=h[i];h[i]=c;f=a.ds.o(c,d,e);if(f>=0)break;i=a.bG;e.bI.data[i*2|0]=j;c=c+(-1)|0;}}return c;}
function AIC(a){return null;}
function TV(){var a=this;C.call(a);a.Kd=0;a.Kf=0;a.Gk=0;a.HJ=0;a.EC=null;}
function GH(){var a=this;D2.call(a);a.fU=0;a.ee=null;a.ez=null;a.em=null;}
function AQc(a){var b,c,d,e,f;b=new $rt_globals.XMLHttpRequest();c=new Ra;c.fk=a;c.hH=b;c=BT(c,"handleEvent");b.onreadystatechange=c;c=a.em;d=a.ez;e=new H$;e.pB=c;e.kv=d;c=BT(e,"handleEvent");b.onprogress=c;d=a.ee;f=a.fU;b.open("GET",$rt_ustr(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
var MB=G();
var A5O=null;function AXE(){AXE=W(MB);ARU();}
function ARU(){var b,c;Iu();b=Z((A5S.cn()).data.length);c=b.data;A5O=b;c[A5F.q]=1;c[A5P.q]=2;}
var ACS=G();
function ANF(a,b,c){a.Ad($rt_str(b),Dp(c,"handleEvent"));}
function AOx(a,b,c){a.yl($rt_str(b),Dp(c,"handleEvent"));}
function AFs(a,b,c,d){a.wN($rt_str(b),Dp(c,"handleEvent"),d?1:0);}
function AFF(a,b){return !!a.Ai(b);}
function ALi(a,b,c,d){a.zs($rt_str(b),Dp(c,"handleEvent"),d?1:0);}
var GK=G(0);
function ME(){var a=this;C.call(a);a.gb=null;a.n4=0;a.k_=null;a.pg=null;a.hU=null;}
function AD_(a,b){var c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(ALx()){var $T=Rl();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.gb.readyState==4){if(a.gb.status==200){if(a.hU.dr){if(A5R===null){c=new Cu;c.b6=AZW;b=new O;b.b=D(16);c.ba=b;c.b4=D(32);c.cm=0;Ct();c.ce=A5l;A5R=c;}d=A5R;b=a.k_;c=new O;c.b=D(16);I(c,c.a,B(460));e=c.a;if(b===null)b=B(2);I(c,e,b);f=new M;g=c.b;h=c.a;P();i=D(h);f.e=i;L(g,0,i,0,h);b=d.ba;I(b,b.a,f);h
=b.a;Bc(b,h,h+1|0);b.b.data[h]=10;Cl(d);}c=a.gb.response;IA();d=A5G.d4.document;f=d.createElement("script");b=d.createTextNode(c);f.appendChild(b);d.body.appendChild(f);$rt_str(a.gb.responseText);}else if(a.gb.status!=404&&a.gb.status!=403){try{j=T(100);$p=1;continue _;}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){}else{throw $$e;}}L_(a.hU,a.n4,a.k_,a.pg);}b=a.hU;b.bt=b.bt-1|0;}return;case 1:a:{try{VP(j);if(Ge()){break _;}break a;}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){}else{throw $$e;}}}L_(a.hU,a.n4,
a.k_,a.pg);b=a.hU;b.bt=b.bt-1|0;return;default:AFA();}}Rl().s(a,b,c,d,e,f,g,h,i,j,$p);}
function X2(a,b){var $p,$z;$p=0;if(ALx()){var $T=Rl();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AD_(a,b);if(Ge()){break _;}return;default:AFA();}}Rl().s(a,b,$p);}
var P1=G();
var A4U=0;function Gd(){var a=this;C.call(a);a.fI=null;a.js=0;a.g2=0;a.dv=0;}
function Pj(a){var b;if(a.dv)return a.g2>=a.fI.l?0:1;b=new Ba;b.c=1;b.d=1;b.f=B(461);H(b);}
function Kc(a){var b,c,d,e,f,g;b=a.g2;c=a.fI;if(b<c.l){if(a.dv){d=c.r.data;a.g2=b+1|0;return d[b];}c=new Ba;c.c=1;c.d=1;c.f=B(461);H(c);}c=new Jy;P();e=new O;e.b=D(16);N(e,e.a,b,10);f=new M;d=e.b;b=e.a;g=D(b);f.e=g;L(d,0,g,0,b);c.c=1;c.d=1;c.f=f;H(c);}
function J7(){var a=this;C.call(a);a.k6=null;a.lY=0;a.oD=null;a.oE=null;}
function O3(a){var b,c,d;if(A4U){b=new Gd;c=a.k6;d=a.lY;b.dv=1;b.fI=c;b.js=d;return b;}if(a.oD===null){b=new Gd;c=a.k6;d=a.lY;b.dv=1;b.fI=c;b.js=d;a.oD=b;b=new Gd;b.dv=1;b.fI=c;b.js=d;a.oE=b;}b=a.oD;if(b.dv){c=a.oE;c.g2=0;c.dv=1;b.dv=0;return c;}b.g2=0;b.dv=1;a.oE.dv=0;return b;}
function H_(){var a=this;C.call(a);a.oF=null;a.dz=null;a.oW=null;}
function ABA(a){var b,c,d,e,f,g,h,i,j;b=a.dz.length;c=new O;c.b=D(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{while(true){if(d>=b){e=new M;f=c.b;g=c.a;P();h=D(g);e.e=h;L(f,0,h,0,g);return e;}i=b-d|0;if(i<3){if(i>=2){g=((a.dz[d]&255)<<16)+((a.dz[d+1|0]&255)<<8)|0;Yk(c,CO(B(462),g>>18&63));Fu(c,CO(B(462),g>>12&63));Fu(c,CO(B(462),g>>6&63));Dy(c,B(463));}else{i=(a.dz[d]&255)<<16;g=i>>18&63;if(g<0)break a;f=B(462).e.data;if(g>=f.length)break a;j=f[g];g=c.a;Bc(c,g,g+1|0);c.b.data[g]=j;i=CO(B(462),i>>12&63);g=c.a;Bc(c,g,g
+1|0);c.b.data[g]=i;I(c,c.a,B(464));}}else{i=(((a.dz[d]&255)<<16)+((a.dz[d+1|0]&255)<<8)|0)+(a.dz[d+2|0]&255)|0;g=i>>18&63;if(g<0)break b;f=B(462).e.data;if(g>=f.length)break b;j=f[g];g=c.a;Bc(c,g,g+1|0);c.b.data[g]=j;g=i>>12&63;if(g<0)break c;f=B(462).e.data;if(g>=f.length)break c;j=f[g];g=c.a;Bc(c,g,g+1|0);c.b.data[g]=j;g=i>>6&63;if(g<0)break d;f=B(462).e.data;if(g>=f.length)break d;j=f[g];g=c.a;Bc(c,g,g+1|0);c.b.data[g]=j;i=i&63;if(i<0)break;f=B(462).e.data;if(i>=f.length)break;g=f[i];i=c.a;Bc(c,i,i+1|0);c.b.data[i]
=g;}d=d+3|0;}e=new X;e.c=1;e.d=1;H(e);}e=new X;e.c=1;e.d=1;H(e);}e=new X;e.c=1;e.d=1;H(e);}e=new X;e.c=1;e.d=1;H(e);}e=new X;e.c=1;e.d=1;H(e);}
function MC(){C.call(this);this.on=null;}
function AFl(a){var b,c,d,e,f,g,h;b=a.on.ku;c=b.r.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BZ;d.C=c;e=d;c.classObject=e;}}f=d.C.$meta.item;if(f===null)c=null;else{c=f.classObject;if(c===null){c=new BZ;c.C=f;d=c;f.classObject=d;}}g=b.l;if(c===null){b=new CB;b.c=1;b.d=1;B9(b);H(b);}if(c===J($rt_voidcls())){b=new Be;b.c=1;b.d=1;B9(b);H(b);}if(g<0){b=new C3;b.c=1;b.d=1;B9(b);H(b);}d=Dv(c.C,g);DH(b.r,0,d,0,b.l);h=d;a.on.lH.qu.rd.KT(h);}
var Sz=G(0);
var IV=G(0);
var QT=G(0);
var He=G();
function JT(){He.call(this);this.b6=null;}
function Cu(){var a=this;JT.call(a);a.cm=0;a.hu=0;a.ba=null;a.b4=null;a.ce=null;}
function Nc(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;d=d-c|0;f=new IC;g=e.length;h=c+d|0;f.w=(-1);f.z=g;f.g=g;f.h=c;f.g=h;f.gC=0;f.id=0;f.gi=b;i=1024;if(d<i)i=d;if(16>i)i=16;e=BE(i);h=e.data.length;j=new Cp;c=0+h|0;j.w=(-1);j.z=h;j.g=h;B7();j.bg=A4M;j.bn=0;j.W=e;j.h=0;j.g=c;j.b$=0;j.bB=0;k=ADV(a.ce);DS();l=A5r;if(l===null){f=new Be;f.c=1;f.d=1;f.f=B(465);H(f);}k.gw=l;k.gf=l;while(true){g=(J2(k,f,j,1)).bj!=1?0:1;i=j.h;l=a.b6;if(l===null)a.hu=1;if(a.hu?0:1)a:{try{l.m5(e,0,i);break a;}catch($$e){$$je=Bw($$e);if
($$je instanceof EQ){}else{throw $$e;}}a.hu=1;}j.h=0;j.g=j.z;j.w=(-1);if(!g)break;}while(true){g=(Mx(k,j)).bj!=1?0:1;i=j.h;f=a.b6;if(f===null)a.hu=1;if(a.hu?0:1)b:{try{f.m5(e,0,i);break b;}catch($$e){$$je=Bw($$e);if($$je instanceof EQ){}else{throw $$e;}}a.hu=1;}j.h=0;j.g=j.z;j.w=(-1);if(!g)break;}}
function Cl(a){var b,c,d,e,f,g,h,i,j;b=a.ba;c=b.a;d=a.b4;if(c>d.data.length)d=D(c);e=0;f=0;if(e>c){b=new Y;b.c=1;b.d=1;b.f=B(466);H(b);}while(e<c){g=d.data;h=f+1|0;i=b.b.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Nc(a,d,0,c);a.ba.a=0;}
function G1(){He.call(this);this.lq=null;}
var I1=G(G1);
var AZW=null;function AMM(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AQW(){var b;b=new I1;b.lq=BE(1);AZW=b;}
function H$(){var a=this;C.call(a);a.kv=null;a.pB=null;}
function APy(a,b){a.kv.jc(b.loaded);}
function D_(){var a=this;C.call(a);a.e8=null;a.hn=null;}
function DN(b){var c,d,e,f;c=b.e.data;d=c.length;if(d?0:1){e=new Jb;e.c=1;e.d=1;e.mJ=b;H(e);}if(0>=d){b=new X;b.c=1;b.d=1;H(b);}if(!ABD(c[0])){e=new Jb;e.c=1;e.d=1;e.mJ=b;H(e);}f=1;a:{while(true){c=b.e.data;d=Bm(f,c.length);if(d>=0)break;if(f<0)break a;if(d>=0)break a;b:{d=c[f];switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ABD(d))break b;else{e=new Jb;e.c=1;e.d=1;e.mJ=b;H(e);}}}f=f+1|0;}return;}b=new X;b.c=1;b.d=1;H(b);}
function ABD(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function APt(a){return a.e8;}
function AUh(a,b){var c,d,$$je;a:{try{c=a.jR();DS();b=Ok(Sh(PE(c,A5r),A5r),b);}catch($$e){$$je=Bw($$e);if($$je instanceof FY){d=$$je;break a;}else{throw $$e;}}return b;}c=new LU;c.c=1;c.d=1;c.f=B(75);c.cP=d;H(c);}
var L$=G(D_);
var A5l=null;function Ct(){Ct=W(L$);AJ1();}
function ADV(a){var b,c,d,e,f;b=new N$;c=BE(1);d=c.data;d[0]=63;DS();e=A6Y;b.gw=e;b.gf=e;f=d.length;if(f&&f>=b.e6){b.kl=a;b.jd=c.cn();b.jB=2.0;b.e6=4.0;b.i1=D(512);b.iH=BE(512);return b;}e=new Be;HZ(e,B(467));H(e);}
function AJ1(){var b,c,d,e,f;b=new L$;Ct();c=Bg(M,0);d=c.data;DN(B(117));e=d.length;f=0;while(f<e){DN(d[f]);f=f+1|0;}b.e8=B(117);b.hn=c.cn();A5l=b;}
function Jb(){Be.call(this);this.mJ=null;}
var KH=G(0);
var LI=G();
function AGb(a,b,c){}
function AK4(a){}
function AKq(a){}
function AK7(a){}
function MS(){var a=this;LI.call(a);a.sh=null;a.kx=0;}
function AKT(a){var b,c,d;b=new Qg;b.qI=a;c=new Ii;d=new MZ;d.s6=b;$rt_globals.window.physxOnInit=BT(d,"onInit");Nb(c,B(468),null,null);}
function AKf(a,b){var c,d,e;if(a.kx){a.kx=0;c=a.sh;d=AXd();e=c.dB;if(e!==null)e.lo();c.dB=d;d.o6();c.dB.l$(A4L.cD.width,A4L.cD.height);}}
var Jy=G(BF);
var Ba=G(BF);
function AOk(a,b){var c=new Ba();AF8(c,a,b);return c;}
function Fw(a){var b=new Ba();V0(b,a);return b;}
function AF8(a,b,c){a.c=1;a.d=1;a.f=b;a.cP=c;}
function V0(a,b){a.c=1;a.d=1;a.f=b;}
var VC=G();
function Ol(b,c){var d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function PY(){Bo.call(this);this.zB=null;}
function ATC(a,b){return CC(b)!=2?0:1;}
function Ms(){Bo.call(this);this.zR=null;}
function AGX(a,b){return CC(b)!=1?0:1;}
function Ps(){Bo.call(this);this.yE=null;}
function AGt(a,b){a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CC(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;}
function Pr(){Bo.call(this);this.x5=null;}
function AKw(a,b){return 0;}
function RX(){Bo.call(this);this.BL=null;}
function AMt(a,b){return !CC(b)?0:1;}
function NN(){Bo.call(this);this.Ao=null;}
function ATG(a,b){return CC(b)!=9?0:1;}
function Nd(){Bo.call(this);this.Cw=null;}
function AP1(a,b){return Hc(b);}
function OW(){Bo.call(this);this.zD=null;}
function ARw(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Mn(){Bo.call(this);this.wd=null;}
function AUZ(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Hc(b);}return b;}
function Mr(){Bo.call(this);this.Av=null;}
function AJs(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Hc(b);}return b;}
function M9(){Bo.call(this);this.BI=null;}
function ATZ(a,b){a:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function N7(){Bo.call(this);this.B5=null;}
function AOv(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;}
function N_(){Bo.call(this);this.yU=null;}
function AQ2(a,b){a:{switch(CC(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;}
function Qn(){Bo.call(this);this.AN=null;}
function ATs(a,b){return CC(b)!=3?0:1;}
function PI(){Bo.call(this);this.wm=null;}
function AUy(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Hc(b);}return b;}
function MA(){Bo.call(this);this.CS=null;}
function AJc(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Hc(b);}return b;}
function Jt(){Bo.call(this);this.lt=0;}
function AP4(a,b){return a.Q^(a.lt!=CC(b&65535)?0:1);}
var Pm=G(Jt);
function ASq(a,b){return a.Q^(!(a.lt>>CC(b&65535)&1)?0:1);}
function EX(){C.call(this);this.eI=null;}
function AGF(a){YO(a.eI);}
var Wh=G();
var Sr=G();
var A55=null;function AYB(){AYB=W(Sr);ASh();}
function ASh(){var b,c;E8();b=Z((A6S.cn()).data.length);c=b.data;A55=b;c[A6l.q]=1;c[A6i.q]=2;c[A6k.q]=3;c[A6j.q]=4;c[A6H.q]=5;}
var LL=G(BF);
var IJ=G(G1);
var AZX=null;function AKj(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AVv(){var b;b=new IJ;b.lq=BE(1);AZX=b;}
var Oc=G(Ey);
var AZY=null;function AIx(){AZY=J($rt_doublecls());}
var Gs=G();
var A6Z=null;var A60=null;var A5A=null;var A5z=null;var A5y=null;function XY(){A6Z=F9([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A60=US([T(1),T(10),T(100),T(1000),T(10000),T(100000),T(1000000),T(10000000),T(100000000),T(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);A5A=US([T(1),T(10),T(100),T(10000),T(100000000),F(1874919424, 2328306)]);A5z
=new QE;A5y=new Rj;}
var I9=G();
var A61=B2;var A62=null;var A63=null;function XO(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):F(0, 2146959360);c.qD=Cn(CG(d,F(0, 2147483648)),B2)?0:1;e=CG(d,F(4294967295, 1048575));f=U(AWW(d,52))&2047;if(Cn(e,B2)&&!f){c.oq=B2;c.mO=0;return;}if(f)e=AJ7(e,F(0, 1048576));else{e=Gj(e,1);while(Cn(CG(e,F(0, 1048576)),B2)){e=Gj(e,1);f=f+(-1)|0;}}g=A63;h=ARf(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=A63.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=IF(e,A62.data[i],j);if(AJR(k,
A61)){while(D3(k,A61)<=0){h=h+(-1)|0;k=CX(Bf(k,T(10)),T(9));}g=A63.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=IF(e,A62.data[i],j);}e=Gj(e,1);d=CX(e,T(1));g=A62.data;i=h+1|0;l=g[i];f=j-1|0;m=IF(d,l,f);l=IF(O8(e,T(1)),A62.data[i],f);n=T(1);while(true){o=Bf(n,T(10));if(D3(DO(k,o),DO(l,o))<=0)break;n=o;}p=T(1);while(true){q=Bf(p,T(10));if(D3(DO(k,q),DO(m,q))>=0)break;p=q;}i=D3(n,p);e=i>0?Bf(DO(k,n),n):i<0?CX(Bf(DO(k,p),p),p):Bf(DO(CX(k,Lo(p,T(2))),p),p);if(D3(e,F(2808348672, 232830643))>=0)while(true){h=h+1|0;e=DO(e,T(10));if
(D3(e,F(2808348672, 232830643))<0)break;}else if(D3(e,F(1569325056, 23283064))<0){h=h+(-1)|0;e=Bf(e,T(10));}c.oq=e;c.mO=h-330|0;}
function IF(b,c,d){var e,f,g,h,i,j,k,l;e=CG(b,T(65535));f=CG(Bh(b,16),T(65535));g=CG(Bh(b,32),T(65535));h=CG(Bh(b,48),T(65535));i=CG(c,T(65535));j=CG(Bh(c,16),T(65535));k=CG(Bh(c,32),T(65535));l=CG(Bh(c,48),T(65535));return CX(CX(CX(Gj(Bf(l,h),32+d|0),Gj(CX(Bf(l,g),Bf(k,h)),16+d|0)),Gj(CX(CX(Bf(l,f),Bf(k,g)),Bf(j,h)),d)),Bh(CX(CX(CX(Bf(k,e),Bf(j,f)),Bf(i,g)),Gj(CX(CX(CX(Bf(l,e),Bf(k,f)),Bf(j,g)),Bf(i,h)),16)),32-d|0));}
function W2(){A61=DO(T(-1),T(10));A62=US([F(3251292512, 2194092222),F(1766094183, 3510547556),F(553881887, 2808438045),F(443105509, 2246750436),F(3285949193, 3594800697),F(910772436, 2875840558),F(2446604867, 2300672446),F(2196580869, 3681075914),F(2616258154, 2944860731),F(1234013064, 2355888585),F(1974420903, 3769421736),F(720543263, 3015537389),F(1435428070, 2412429911),F(578697993, 3859887858),F(2180945313, 3087910286),F(885762791, 2470328229),F(3135207384, 3952525166),F(1649172448, 3162020133),F(3037324877, 2529616106),
F(3141732885, 4047385770),F(2513386308, 3237908616),F(1151715587, 2590326893),F(983751480, 4144523029),F(1645994643, 3315618423),F(3034782633, 2652494738),F(3996658754, 4243991581),F(2338333544, 3395193265),F(1870666835, 2716154612),F(4073513845, 2172923689),F(3940641775, 3476677903),F(575533043, 2781342323),F(2178413352, 2225073858),F(2626467905, 3560118173),F(3819161242, 2848094538),F(478348616, 2278475631),F(3342338164, 3645561009),F(3532863990, 2916448807),F(1108304273, 2333159046),F(55299919, 3733054474),
F(903233395, 2986443579),F(1581580175, 2389154863),F(1671534821, 3822647781),F(478234397, 3058118225),F(382587518, 2446494580),F(612140029, 3914391328),F(2207698941, 3131513062),F(48172235, 2505210450),F(77075576, 4008336720),F(61660460, 3206669376),F(3485302205, 2565335500),F(1281516232, 4104536801),F(166219527, 3283629441),F(3568949458, 2626903552),F(2274345296, 4203045684),F(2678469696, 3362436547),F(424788838, 2689949238),F(2057817989, 2151959390),F(3292508783, 3443135024),F(3493000485, 2754508019),F(3653393847, 2203606415),
F(1550462860, 3525770265),F(1240370288, 2820616212),F(3569276608, 2256492969),F(3133862195, 3610388751),F(1648096297, 2888311001),F(459483578, 2310648801),F(3312154103, 3697038081),F(1790729823, 2957630465),F(1432583858, 2366104372),F(3151127633, 3785766995),F(2520902106, 3028613596),F(1157728226, 2422890877),F(2711358621, 3876625403),F(3887073815, 3101300322),F(1391672133, 2481040258),F(1367681954, 3969664413),F(2812132482, 3175731530),F(2249705985, 2540585224),F(1022549199, 4064936359),F(1677032818, 3251949087),
F(3918606632, 2601559269),F(3692790234, 4162494831),F(2095238728, 3329995865),F(1676190982, 2663996692),F(3540899031, 4262394707),F(1114732307, 3409915766),F(32792386, 2727932613),F(1744220827, 2182346090),F(2790753324, 3491753744),F(3091596118, 2793402995),F(2473276894, 2234722396),F(2239256113, 3575555834),F(2650398349, 2860444667),F(402331761, 2288355734),F(2361717736, 3661369174),F(2748367648, 2929095339),F(3057687578, 2343276271),F(3174313206, 3749242034),F(3398444024, 2999393627),F(1000768301, 2399514902),
F(2460222741, 3839223843),F(3686165111, 3071379074),F(3807925548, 2457103259),F(3515700499, 3931365215),F(2812560399, 3145092172),F(532061401, 2516073738),F(4287272078, 4025717980),F(3429817663, 3220574384),F(3602847589, 2576459507),F(2328582306, 4122335212),F(144878926, 3297868170),F(115903141, 2638294536),F(2762425404, 4221271257),F(491953404, 3377017006),F(3829536560, 2701613604),F(3922622707, 2161290883),F(1122235577, 3458065414),F(1756781920, 2766452331),F(546432077, 2213161865),F(874291324, 3541058984),
F(1558426518, 2832847187),F(3823721592, 2266277749),F(3540974170, 3626044399),F(3691772795, 2900835519),F(3812411695, 2320668415),F(1804891416, 3713069465),F(1443913133, 2970455572),F(3732110884, 2376364457),F(2535403578, 3802183132),F(310335944, 3041746506),F(3684242592, 2433397204),F(3317807769, 3893435527),F(936259297, 3114748422),F(3325987815, 2491798737),F(1885606668, 3986877980),F(1508485334, 3189502384),F(2065781726, 2551601907),F(4164244222, 4082563051),F(2472401918, 3266050441),F(1118928075, 2612840353),
F(931291461, 4180544565),F(745033169, 3344435652),F(3173006913, 2675548521),F(3358824142, 4280877634),F(3546052773, 3424702107),F(1118855300, 2739761686),F(36090780, 2191809349),F(1775732167, 3506894958),F(3138572652, 2805515966),F(1651864662, 2244412773),F(1783990001, 3591060437),F(4004172378, 2872848349),F(4062331362, 2298278679),F(3922749802, 3677245887),F(1420212923, 2941796710),F(1136170338, 2353437368),F(958879082, 3765499789),F(1626096725, 3012399831),F(441883920, 2409919865),F(707014273, 3855871784),
F(1424604878, 3084697427),F(3716664280, 2467757941),F(4228675929, 3948412706),F(2523947284, 3158730165),F(2019157827, 2526984132),F(4089645983, 4043174611),F(2412723327, 3234539689),F(2789172121, 2587631751),F(2744688475, 4140210802),F(477763862, 3312168642),F(2959191467, 2649734913),F(3875712888, 4239575861),F(2241576851, 3391660689),F(2652254940, 2713328551),F(1262810493, 2170662841),F(302509870, 3473060546),F(3677981733, 2778448436),F(2083391927, 2222758749),F(756446706, 3556413999),F(1464150824, 2845131199),
F(2030314118, 2276104959),F(671522212, 3641767935),F(537217769, 2913414348),F(2147761134, 2330731478),F(2577424355, 3729170365),F(2061939484, 2983336292),F(4226531965, 2386669033),F(1608490388, 3818670454),F(2145785770, 3054936363),F(3434615534, 2443949090),F(1200417559, 3910318545),F(960334047, 3128254836),F(4204241074, 2502603868),F(1572824964, 4004166190),F(1258259971, 3203332952),F(3583588354, 2562666361),F(4015754449, 4100266178),F(635623181, 3280212943),F(2226485463, 2624170354),F(985396364, 4198672567),
F(3365297469, 3358938053),F(115257597, 2687150443),F(1810192996, 2149720354),F(319328417, 3439552567),F(2832443111, 2751642053),F(3983941407, 2201313642),F(2938332415, 3522101828),F(4068652850, 2817681462),F(1536935362, 2254145170),F(2459096579, 3606632272),F(249290345, 2885305818),F(1917419194, 2308244654),F(490890333, 3693191447),F(2969692644, 2954553157),F(657767197, 2363642526),F(3629407892, 3781828041),F(2044532855, 3025462433),F(3353613202, 2420369946),F(3647794205, 3872591914),F(3777228823, 3098073531),
F(2162789599, 2478458825),F(3460463359, 3965534120),F(2768370687, 3172427296),F(1355703090, 2537941837),F(3028118404, 4060706939),F(3281488183, 3248565551),F(1766197087, 2598852441),F(1107928421, 4158163906),F(27349277, 3326531125),F(21879422, 2661224900),F(35007075, 4257959840),F(28005660, 3406367872),F(2599384905, 2725094297),F(361521006, 2180075438),F(4014407446, 3488120700),F(3211525957, 2790496560),F(2569220766, 2232397248),F(3251759766, 3571835597),F(883420894, 2857468478),F(2424723634, 2285974782),F(443583977, 3657559652),
F(2931847559, 2926047721),F(1486484588, 2340838177),F(3237368801, 3745341083),F(12914663, 2996272867),F(2587312108, 2397018293),F(3280705914, 3835229269),F(3483558190, 3068183415),F(2786846552, 2454546732),F(1022980646, 3927274772),F(3395364895, 3141819817),F(998304997, 2513455854),F(3315274914, 4021529366),F(1793226472, 3217223493),F(3152568096, 2573778794),F(2467128576, 4118046071),F(1114709402, 3294436857),F(3468747899, 2635549485),F(1255029343, 4216879177),F(3581003852, 3373503341),F(2005809622, 2698802673),
F(3322634616, 2159042138),F(162254630, 3454467422),F(2706784082, 2763573937),F(447440347, 2210859150),F(715904555, 3537374640),F(572723644, 2829899712),F(3035159293, 2263919769),F(2279274491, 3622271631),F(964426134, 2897817305),F(771540907, 2318253844),F(2952452370, 3709206150),F(2361961896, 2967364920),F(1889569516, 2373891936),F(1305324308, 3798227098),F(2762246365, 3038581678),F(3927784010, 2430865342),F(2848480580, 3889384548),F(3996771382, 3111507638),F(620436728, 2489206111),F(3569679143, 3982729777),
F(1137756396, 3186183822),F(3487185494, 2548947057),F(2143522954, 4078315292),F(4291798741, 3262652233),F(856458615, 2610121787),F(2229327243, 4176194859),F(2642455254, 3340955887),F(395977285, 2672764710),F(633563656, 4276423536),F(3942824761, 3421138828),F(577279431, 2736911063),F(2179810463, 2189528850),F(3487696741, 3503246160),F(2790157393, 2802596928),F(3950112833, 2242077542),F(2884206696, 3587324068),F(4025352275, 2869859254),F(4079275279, 2295887403),F(1372879692, 3673419846),F(239310294, 2938735877),
F(2768428613, 2350988701),F(2711498862, 3761581922),F(451212171, 3009265538),F(2078956655, 2407412430),F(3326330649, 3851859888),F(84084141, 3081487911),F(3503241150, 2465190328),F(451225085, 3944304526),F(3796953905, 3155443620),F(3037563124, 2524354896),F(3142114080, 4038967834),F(3372684723, 3231174267),F(980160860, 2584939414),F(3286244294, 4135903062),F(911008517, 3308722450),F(728806813, 2646977960),F(1166090902, 4235164736),F(73879262, 3388131789),F(918096869, 2710505431),F(4170451332, 2168404344),F(4095741754, 3469446951),
F(2417599944, 2775557561),F(1075086496, 2220446049),F(3438125312, 3552713678),F(173519872, 2842170943),F(1856802816, 2273736754),F(393904128, 3637978807),F(2892103680, 2910383045),F(2313682944, 2328306436),F(1983905792, 3725290298),F(3305111552, 2980232238),F(67108864, 2384185791),F(2684354560, 3814697265),F(2147483648, 3051757812),F(0, 2441406250),F(0, 3906250000),F(0, 3125000000),F(0, 2500000000),F(0, 4000000000),F(0, 3200000000),F(0, 2560000000),F(0, 4096000000),F(0, 3276800000),F(0, 2621440000),F(0, 4194304000),
F(0, 3355443200),F(0, 2684354560),F(0, 2147483648),F(3435973836, 3435973836),F(1889785610, 2748779069),F(2370821947, 2199023255),F(3793315115, 3518437208),F(457671715, 2814749767),F(2943117749, 2251799813),F(3849994940, 3602879701),F(2221002492, 2882303761),F(917808535, 2305843009),F(3186480574, 3689348814),F(3408177918, 2951479051),F(1867548875, 2361183241),F(1270091283, 3777893186),F(157079567, 3022314549),F(984657113, 2417851639),F(3293438299, 3868562622),F(916763721, 3094850098),F(2451397895, 2475880078),
F(3063243173, 3961408125),F(2450594538, 3169126500),F(1960475630, 2535301200),F(3136761009, 4056481920),F(2509408807, 3245185536),F(1148533586, 2596148429),F(3555640657, 4153837486),F(1985519066, 3323069989),F(2447408712, 2658455991),F(2197867021, 4253529586),F(899300158, 3402823669),F(1578433585, 2722258935),F(1262746868, 2177807148),F(1161401530, 3484491437),F(3506101601, 2787593149),F(3663874740, 2230074519),F(3285219207, 3568119231),F(1769181906, 2854495385),F(1415345525, 2283596308),F(1405559381, 3653754093),
F(2842434423, 2923003274),F(3132940998, 2338402619),F(2435725219, 3741444191),F(1089586716, 2993155353),F(2589656291, 2394524282),F(707476229, 3831238852),F(3142961361, 3064991081),F(1655375629, 2451992865),F(2648601007, 3923188584),F(2977874265, 3138550867),F(664312493, 2510840694),F(2780886908, 4017345110),F(2224709526, 3213876088),F(3497754539, 2571100870),F(1301439967, 4113761393),F(2759138892, 3291009114),F(3066304573, 2632807291),F(3188100398, 4212491666),F(1691486859, 3369993333),F(3071176406, 2695994666),
F(1597947665, 2156795733),F(1697722806, 3450873173),F(3076165163, 2760698538),F(4178919049, 2208558830),F(2391303182, 3533694129),F(2772036005, 2826955303),F(3935615722, 2261564242),F(2861011319, 3618502788),F(4006795973, 2894802230),F(3205436779, 2315841784),F(2551718468, 3705346855),F(2041374775, 2964277484),F(2492093279, 2371421987),F(551375410, 3794275180),F(441100328, 3035420144),F(1211873721, 2428336115),F(1938997954, 3885337784),F(2410191822, 3108270227),F(210166539, 2486616182),F(1195259923, 3978585891),
F(97214479, 3182868713),F(1795758501, 2546294970),F(2873213602, 4074071952),F(580583963, 3259257562),F(3041447548, 2607406049),F(2289335700, 4171849679),F(2690462019, 3337479743),F(3870356534, 2669983794),F(3615590076, 4271974071),F(2033478602, 3417579257),F(4203763259, 2734063405),F(3363010607, 2187250724),F(2803836594, 3499601159),F(3102062734, 2799680927),F(763663269, 2239744742),F(2080854690, 3583591587),F(4241664129, 2866873269),F(4252324763, 2293498615),F(2508752324, 3669597785),F(2007001859, 2935678228),
F(3323588406, 2348542582),F(1881767613, 3757668132),F(4082394468, 3006134505),F(3265915574, 2404907604),F(2648484541, 3847852167),F(400800715, 3078281734),F(1179634031, 2462625387),F(2746407909, 3940200619),F(3056119786, 3152160495),F(2444895829, 2521728396),F(2193846408, 4034765434),F(2614070585, 3227812347),F(373269550, 2582249878),F(4033205117, 4131599804),F(4085557553, 3305279843),F(691465664, 2644223875),F(1106345063, 4230758200),F(885076050, 3384606560),F(708060840, 2707685248),F(2284435591, 2166148198),
F(2796103486, 3465837117),F(518895870, 2772669694),F(1274110155, 2218135755),F(2038576249, 3549017208),F(3348847917, 2839213766),F(1820084875, 2271371013),F(2053142340, 3634193621),F(783520413, 2907354897),F(3203796708, 2325883917),F(1690100896, 3721414268),F(3070067635, 2977131414),F(3315047567, 2381705131),F(3586089190, 3810728210),F(2868871352, 3048582568),F(4013084000, 2438866054),F(3843954022, 3902185687),F(1357176299, 3121748550),F(1085741039, 2497398840),F(1737185663, 3995838144),F(2248741989, 3196670515),
F(1798993591, 2557336412),F(3737383206, 4091738259),F(3848900024, 3273390607),F(1361133101, 2618712486),F(459826043, 4189939978),F(2085847752, 3351951982),F(4245658579, 2681561585),F(2498086431, 4290498537),F(280482227, 3432398830),F(224385781, 2745919064),F(1038502084, 2196735251),F(4238583712, 3514776401),F(2531873511, 2811821121),F(1166505349, 2249456897),F(2725402018, 3599131035),F(2180321615, 2879304828),F(3462244210, 2303443862),F(2103616899, 3685510180),F(1682893519, 2948408144),F(2205308275, 2358726515),
F(3528493240, 3773962424),F(3681788051, 3019169939),F(3804423900, 2415335951),F(74124026, 3864537523),F(1777286139, 3091630018),F(3139815829, 2473304014),F(2446724950, 3957286423),F(3675366878, 3165829138),F(363313125, 2532663311),F(3158281377, 4052261297),F(808638183, 3241809038),F(2364897465, 2593447230),F(3783835944, 4149515568),F(450088378, 3319612455),F(360070702, 2655689964),F(2294100042, 4249103942),F(117293115, 3399283154),F(952827951, 2719426523),F(2480249279, 2175541218),F(3109405388, 3480865949),
F(3346517769, 2784692759),F(3536207675, 2227754207),F(2221958443, 3564406732),F(59579836, 2851525386),F(3483637705, 2281220308),F(419859574, 3649952494),F(1194881118, 2919961995),F(955904894, 2335969596),F(4106428209, 3737551353),F(708162189, 2990041083),F(2284516670, 2392032866),F(1937239754, 3827252586),F(690798344, 3061802069),F(1411632134, 2449441655),F(2258611415, 3919106648),F(3524876050, 3135285318),F(242920462, 2508228255),F(388672740, 4013165208),F(2028925110, 3210532166),F(764146629, 2568425733),F(363641147, 4109481173),
F(2008899836, 3287584938),F(3325106787, 2630067950),F(1025203564, 4208108721),F(4256136688, 3366486976),F(2545915891, 2693189581),F(1177739254, 2154551665),F(1884382806, 3447282664),F(2366499704, 2757826131),F(1034206304, 2206260905),F(1654730086, 3530017448),F(3041770987, 2824013958),F(4151403708, 2259211166),F(629291719, 3614737867),F(3080413753, 2891790293),F(4182317920, 2313432234),F(4114728295, 3701491575),F(3291782636, 2961193260),F(2633426109, 2368954608),F(3354488315, 3790327373),F(106610275, 3032261899),
F(944281679, 2425809519),F(3228837605, 3881295230),F(2583070084, 3105036184),F(2925449526, 2484028947),F(1244745405, 3974446316),F(136802865, 3179557053),F(1827429210, 2543645642),F(3782880196, 4069833027),F(1308317238, 3255866422),F(3623634168, 2604693137),F(2361840832, 4167509020),F(1889472666, 3334007216),F(652584673, 2667205773),F(185142018, 4267529237),F(2725093992, 3414023389),F(3039068653, 2731218711),F(1572261463, 2184974969),F(4233605259, 3495959950),F(3386884207, 2796767960),F(2709507366, 2237414368),
F(3476218326, 3579862989),F(3639968120, 2863890391),F(2052981037, 2291112313),F(2425776200, 3665779701),F(1081627501, 2932623761),F(6308541, 2346099009),F(1728080585, 3753758414),F(2241457927, 3003006731),F(934172882, 2402405385),F(1494676612, 3843848616),F(336747830, 3075078893),F(1987385183, 2460063114),F(602835915, 3936100983),F(2200255650, 3148880786),F(901211061, 2519104629),F(3159924616, 4030567406),F(1668946233, 3224453925),F(1335156987, 2579563140),F(2136251179, 4127301024),F(2567994402, 3301840819),
F(2913388981, 2641472655),F(366455074, 4226356249),F(1152157518, 3381084999),F(1780719474, 2704867999),F(2283569038, 2163894399),F(1076730083, 3462231039),F(1720377526, 2769784831),F(517308561, 2215827865),F(827693699, 3545324584),F(1521148418, 2836259667),F(3793899112, 2269007733),F(916277824, 3630412374),F(1592015718, 2904329899),F(2132606034, 2323463919),F(835189277, 3717542271),F(4104125258, 2974033816),F(2424306747, 2379227053),F(3019897337, 3806763285),F(2415917869, 3045410628),F(3650721214, 2436328502),
F(2405180105, 3898125604),F(2783137543, 3118500483),F(3944496953, 2494800386),F(298240911, 3991680619),F(1097586188, 3193344495),F(878068950, 2554675596),F(3981890698, 4087480953),F(608532181, 3269984763),F(2204812663, 2615987810),F(3527700261, 4185580496),F(1963166749, 3348464397),F(4147513777, 2678771517),F(3200048207, 4286034428),F(4278025484, 3428827542),F(1704433468, 2743062034),F(2222540234, 2194449627),F(120090538, 3511119404),F(955065889, 2808895523),F(2482039630, 2247116418),F(3112269949, 3595386269),
F(3348809418, 2876309015),F(2679047534, 2301047212),F(850502218, 3681675540),F(680401775, 2945340432),F(3121301797, 2356272345),F(699115580, 3770035753),F(2277279382, 3016028602),F(103836587, 2412822882),F(1025131999, 3860516611),F(4256079436, 3088413288),F(827883168, 2470730631),F(3901593088, 3953169009)]);A63=AYT([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function QE(){var a=this;C.call(a);a.oq=B2;a.mO=0;a.qD=0;}
function D7(){var a=this;C.call(a);a.z=0;a.h=0;a.g=0;a.w=0;}
function ACB(a,b){a.w=(-1);a.z=b;a.g=b;}
function AJS(a){return a.z;}
function APK(a){return a.h;}
function BU(a,b){var c,d,e,f,g,h;if(b>=0&&b<=a.g){a.h=b;if(b<a.w)a.w=0;return a;}c=new Be;d=a.g;e=new O;e.b=D(16);I(e,e.a,B(469));N(e,e.a,b,10);I(e,e.a,B(470));N(e,e.a,d,10);d=e.a;Bc(e,d,d+1|0);f=e.b;f.data[d]=93;g=new M;d=e.a;P();h=D(d);g.e=h;L(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function ASU(a){return a.g;}
function Cz(a,b){var c,d,e,f,g,h;if(b>=0&&b<=a.z){if(a.w>b)a.w=(-1);a.g=b;if(a.h>b)a.h=b;return a;}c=new Be;d=a.z;e=new O;e.b=D(16);I(e,e.a,B(471));N(e,e.a,b,10);I(e,e.a,B(470));N(e,e.a,d,10);d=e.a;Bc(e,d,d+1|0);f=e.b;f.data[d]=93;g=new M;d=e.a;P();h=D(d);g.e=h;L(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function AEf(a){a.g=a.h;a.h=0;a.w=(-1);return a;}
function AS2(a){return a.g-a.h|0;}
var KT=G(0);
var K4=G(D7);
function M1(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Y;i=new O;i.b=D(16);I(i,i.a,B(472));N(i,i.a,g,10);I(i,i.a,B(473));N(i,i.a,f,10);j=new M;b=i.b;d=i.a;P();e=D(d);j.e=e;L(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}f=a.g;k=a.h;if((f-k|0)<d){h=new HL;h.c=1;h.d=1;H(h);}if(d>=0){g=0;l=k;while(g<d){m=c+1|0;f=l+1|0;e[c]=a.gi.data[l+a.gC|0];g=g+1|0;c=m;l=f;}a.h=k+d|0;return a;}h=new Y;i=new O;i.b=D(16);I(i,i.a,B(474));N(i,i.a,d,10);I(i,i.a,B(475));j=new M;b=i.b;d=i.a;P();e
=D(d);j.e=e;L(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}}b=b.data;h=new Y;d=b.length;i=new O;i.b=D(16);I(i,i.a,B(476));N(i,i.a,c,10);I(i,i.a,B(470));N(i,i.a,d,10);d=i.a;Bc(i,d,d+1|0);b=i.b;b.data[d]=41;j=new M;d=i.a;P();e=D(d);j.e=e;L(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}
function AEx(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(a.id){e=new DU;e.c=1;e.d=1;H(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new FF;e.c=1;e.d=1;H(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Y;j=new O;j.b=D(16);I(j,j.a,B(477));N(j,j.a,i,10);I(j,j.a,B(473));N(j,j.a,f,10);k=new M;b=j.b;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}if(d>=0){i=0;l=g;while(i<d){m=l+1|0;f=c+1|0;a.gi.data[l+a.gC|0]=h[c];i=i+1|0;l=m;c=f;}a.h=g+d|0;return a;}e=new Y;j=new O;j.b=D(16);I(j,j.a,B(474));N(j,j.a,d,10);I(j,
j.a,B(475));k=new M;b=j.b;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}}b=b.data;e=new Y;d=b.length;j=new O;j.b=D(16);I(j,j.a,B(476));N(j,j.a,c,10);I(j,j.a,B(470));N(j,j.a,d,10);f=j.a;Bc(j,f,f+1|0);b=j.b;b.data[f]=41;k=new M;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}
function J3(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.id){b=new DU;b.c=1;b.d=1;H(b);}e=d-c|0;f=a.g;g=a.h;if((f-g|0)<e){b=new FF;b.c=1;b.d=1;H(b);}if(c>=0){h=b.e.data.length;if(c<=h){if(d>h){b=new Y;i=new O;i.b=D(16);I(i,i.a,B(477));N(i,i.a,d,10);I(i,i.a,B(478));N(i,i.a,h,10);j=new M;k=i.b;d=i.a;P();l=D(d);j.e=l;L(k,0,l,0,d);b.c=1;b.d=1;b.f=j;H(b);}if(c<=d){a:{while(c<d){h=g+1|0;f=c+1|0;if(c<0)break a;k=b.e.data;if(c>=k.length)break a;YZ(a,g,k[c]);g=h;c=f;}a.h=a.h+e|0;return a;}b=new X;b.c=1;b.d=1;H(b);}b=new Y;i=new O;i.b
=D(16);I(i,i.a,B(479));N(i,i.a,c,10);I(i,i.a,B(480));N(i,i.a,d,10);j=new M;k=i.b;d=i.a;P();l=D(d);j.e=l;L(k,0,l,0,d);b.c=1;b.d=1;b.f=j;H(b);}}i=new Y;d=b.e.data.length;b=new O;b.b=D(16);I(b,b.a,B(479));N(b,b.a,c,10);I(b,b.a,B(470));N(b,b.a,d,10);d=b.a;Bc(b,d,d+1|0);k=b.b;k.data[d]=41;j=new M;d=b.a;P();l=D(d);j.e=l;L(k,0,l,0,d);i.c=1;i.d=1;i.f=j;H(i);}
function E$(){var a=this;D7.call(a);a.bn=0;a.W=null;a.bg=null;}
function N4(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Y;i=new O;i.b=D(16);I(i,i.a,B(481));N(i,i.a,g,10);I(i,i.a,B(473));N(i,i.a,f,10);j=new M;b=i.b;d=i.a;P();e=D(d);j.e=e;L(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}f=a.g;k=a.h;if((f-k|0)<d){h=new HL;h.c=1;h.d=1;H(h);}if(d>=0){g=k+a.bn|0;l=0;while(l<d){m=c+1|0;b=a.W.data;f=g+1|0;e[c]=b[g];l=l+1|0;c=m;g=f;}a.h=k+d|0;return a;}h=new Y;i=new O;i.b=D(16);I(i,i.a,B(474));N(i,i.a,d,10);I(i,i.a,B(475));j=new M;b=i.b;d=i.a;P();e
=D(d);j.e=e;L(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}}b=b.data;h=new Y;d=b.length;i=new O;i.b=D(16);I(i,i.a,B(476));N(i,i.a,c,10);I(i,i.a,B(470));N(i,i.a,d,10);d=i.a;Bc(i,d,d+1|0);e=i.b;e.data[d]=41;j=new M;d=i.a;P();b=D(d);j.e=b;L(e,0,b,0,d);h.c=1;h.d=1;h.f=j;H(h);}
function R1(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.bB){e=new DU;e.c=1;e.d=1;H(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new FF;e.c=1;e.d=1;H(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Y;j=new O;j.b=D(16);I(j,j.a,B(482));N(j,j.a,i,10);I(j,j.a,B(473));N(j,j.a,f,10);k=new M;b=j.b;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}if(d>=0){i=g+a.bn|0;l=0;while(l<d){b=a.W.data;m=i+1|0;f=c+1|0;b[i]=h[c];l=l+1|0;i=m;c=f;}a.h=g+d|0;return a;}e=new Y;j=new O;j.b=D(16);I(j,j.a,B(474));N(j,
j.a,d,10);I(j,j.a,B(475));k=new M;b=j.b;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}}b=b.data;e=new Y;d=b.length;j=new O;j.b=D(16);I(j,j.a,B(476));N(j,j.a,c,10);I(j,j.a,B(470));N(j,j.a,d,10);d=j.a;Bc(j,d,d+1|0);h=j.b;h.data[d]=41;k=new M;d=j.a;P();b=D(d);k.e=b;L(h,0,b,0,d);e.c=1;e.d=1;e.f=k;H(e);}
function Rg(a,b){a.bg=b;return a;}
function AQr(a,b){Cz(a,b);return a;}
function AF6(a,b){BU(a,b);return a;}
function FC(){C.call(this);this.pu=null;}
var A64=null;var A5r=null;var A6Y=null;function DS(){DS=W(FC);AOq();}
function AOq(){var b;b=new FC;DS();b.pu=B(483);A64=b;b=new FC;b.pu=B(484);A5r=b;b=new FC;b.pu=B(485);A6Y=b;}
var LE=G(0);
var RQ=G(0);
function Ne(){var a=this;C.call(a);a.v7=null;a.uP=null;a.zz=0;a.BT=0;}
function AQV(a){var b,c;if(!a.zz){b=a.v7;b.rE=null;CF();if(AZj!==b)AZj=b;AZj.fq=EY();c=a.uP;b=null;c.gM.ju(b);}}
var Kj=G(K4);
function TS(a){var b,c,d,e,f,g,h,i;if(a.id){b=new DU;b.c=1;b.d=1;H(b);}a:{c=a.g;d=a.h;e=c-d|0;if(d>0){f=0;while(true){if(f>=e)break a;c=d+1|0;g=a.gi.data;h=a.gC;i=g[d+h|0];g[f+h|0]=i;f=f+1|0;d=c;}}}a.h=e;a.g=a.z;a.w=(-1);return a;}
function IC(){var a=this;Kj.call(a);a.id=0;a.gC=0;a.gi=null;}
function YZ(a,b,c){a.gi.data[b+a.gC|0]=c;}
function KV(){var a=this;C.call(a);a.kl=null;a.jd=null;a.jB=0.0;a.e6=0.0;a.gw=null;a.gf=null;a.hq=0;}
function PE(a,b){var c;if(b!==null){a.gw=b;return a;}c=new Be;c.c=1;c.d=1;c.f=B(465);H(c);}
function AUG(a,b){}
function Sh(a,b){var c;if(b!==null){a.gf=b;return a;}c=new Be;c.c=1;c.d=1;c.f=B(465);H(c);}
function AMc(a,b){}
function J2(a,b,c,d){var e,f,g,h,i,j,k,$$je;a:{e=a.hq;if(e!=3){if(d)break a;if(e!=2)break a;}b=new BH;b.c=1;b.d=1;H(b);}a.hq=!d?1:2;while(true){try{f=Ud(a,b,c);}catch($$e){$$je=Bw($$e);if($$je instanceof BF){g=$$je;b=new Lc;b.c=1;b.d=1;b.cP=g;H(b);}else{throw $$e;}}e=f.bj;if(e?0:1){if(!d)return f;e=b.g-b.h|0;if(e<=0)return f;f=new Ca;f.bj=2;f.bC=e;}else if(e!=1?0:1)break;h=!(f.bj!=3?0:1)?a.gw:a.gf;b:{DS();if(h!==A5r){if(h===A64)break b;else return f;}i=c.g-c.h|0;j=a.jd;e=j.data.length;if(i<e)return AZ0;R1(c,
j,0,e);}k=b.h;e=f.bj;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Gf;b.c=1;b.d=1;H(b);}BU(b,k+f.bC|0);}return f;}
function Ok(a,b){var c,d,e,f,g,h;c=b.g-b.h|0;if(!c){b=new Cp;d=BE(0);b.w=(-1);b.z=0;b.g=0;B7();b.bg=A4M;b.bn=0;b.W=d;b.h=0;b.g=0;b.b$=0;b.bB=0;return b;}a.hq=0;e=c*a.jB|0;if(e<0){b=new Be;f=new O;f.b=D(16);I(f,f.a,B(486));N(f,f.a,e,10);g=new M;d=f.b;c=f.a;P();h=D(c);g.e=h;L(d,0,h,0,c);b.c=1;b.d=1;b.f=g;H(b);}f=new Cp;d=BE(e);f.w=(-1);f.z=e;f.g=e;B7();f.bg=A4M;f.bn=0;f.W=d;f.h=0;f.g=e;f.b$=0;f.bB=0;while(true){g=J2(a,b,f,0);if(g===AZZ)break;if(g===AZ0){f=M4(a,f);continue;}if(!YF(g))continue;ABV(g);}b=J2(a,b,
f,1);c=b.bj;e=c!=2?0:1;e=!e&&!(c!=3?0:1)?0:1;a:{if(e){switch(c){case 0:break;case 1:b=new LW;b.c=1;b.d=1;H(b);case 2:f=new Ls;e=b.bC;f.c=1;f.d=1;f.pN=e;H(f);case 3:f=new Ko;e=b.bC;f.c=1;f.d=1;f.pH=e;H(f);default:break a;}b=new Ks;b.c=1;b.d=1;H(b);}}while(true){c=(Mx(a,f)).bj;if(c?0:1)break;if(!(c!=1?0:1))continue;f=M4(a,f);}AEf(f);return f;}
function M4(a,b){var c,d,e,f,g,h,i;c=b.W.data;d=c.length;e=d*2|0;f=BE(e);if(e<d)d=e;g=f.data;e=0;while(e<d){g[e]=c[e];e=e+1|0;}d=g.length;h=new Cp;i=0+d|0;h.w=(-1);h.z=d;h.g=d;B7();h.bg=A4M;h.bn=0;h.W=f;h.h=0;h.g=i;h.b$=0;h.bB=0;BU(h,b.h);return h;}
function Mx(a,b){var c,d;c=a.hq;if(c!=2&&c!=4){b=new BH;b.c=1;b.d=1;H(b);}d=AZZ;if(d===d)a.hq=3;return d;}
function AOr(a,b){return AZZ;}
function AFE(a){a.hq=0;return a;}
function APX(a){}
function Ca(){var a=this;C.call(a);a.bj=0;a.bC=0;}
var AZZ=null;var AZ0=null;function AVU(a,b){var c=new Ca();Vq(c,a,b);return c;}
function Vq(a,b,c){a.bj=b;a.bC=c;}
function YF(a){var b,c;b=a.bj;c=b!=2?0:1;return !c&&!(b!=3?0:1)?0:1;}
function AAw(b){var c;c=new Ca;c.bj=2;c.bC=b;return c;}
function ABV(a){var b,c;switch(a.bj){case 0:b=new Ks;b.c=1;b.d=1;H(b);case 1:b=new LW;b.c=1;b.d=1;H(b);case 2:b=new Ls;c=a.bC;b.c=1;b.d=1;b.pN=c;H(b);case 3:b=new Ko;c=a.bC;b.c=1;b.d=1;b.pH=c;H(b);default:}}
function AJW(){var b;b=new Ca;b.bj=0;b.bC=0;AZZ=b;b=new Ca;b.bj=1;b.bC=0;AZ0=b;}
function Rj(){var a=this;C.call(a);a.nF=0;a.nc=0;a.qV=0;}
var Ei=G(0);
function Cp(){var a=this;E$.call(a);a.b$=0;a.bB=0;}
function SS(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.W.data[a.bn+b|0];c=new Y;d=a.g;e=new O;e.b=D(16);I(e,e.a,B(487));N(e,e.a,b,10);I(e,e.a,B(470));N(e,e.a,d,10);d=e.a;Bc(e,d,d+1|0);f=e.b;f.data[d]=41;g=new M;d=e.a;P();h=D(d);g.e=h;L(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function Zb(a){var b,c,d,e,f,g,h,i,j;if(a.bB){b=new DU;b.c=1;b.d=1;H(b);}a:{c=a.g;d=a.h;e=c-d|0;if(d>0){c=a.bn;f=c+d|0;g=0;while(true){if(g>=e)break a;h=a.W.data;i=c+1|0;j=f+1|0;h[c]=h[f];g=g+1|0;c=i;f=j;}}}a.h=e;a.g=a.z;a.w=(-1);return a;}
function L8(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/2|0;e=a.bg;B7();if(e!==A4M){e=new MN;f=a.bn+c|0;c=a.bB;e.w=(-1);e.z=d;e.g=d;e.h=0;e.g=d;e.hB=f;e.fH=a;e.nj=c;return e;}e=new On;b=a.bn+c|0;g=a.bB;e.w=(-1);e.z=d;e.g=d;e.h=0;e.g=d;e.hB=b;e.fH=a;e.nj=g;return e;}
function ACE(a,b){var c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.g){c=a.W.data;b=a.bn+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;h=a.bg;B7();if(h!==A4M)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}i=new Y;d=a.g-3|0;h=new O;h.b=D(16);I(h,h.a,B(487));N(h,h.a,b,10);I(h,h.a,B(470));N(h,h.a,d,10);d=h.a;Bc(h,d,d+1|0);c=h.b;c.data[d]=41;j=new M;d=h.a;P();k=D(d);j.e=k;L(c,0,k,0,d);i.c=1;i.d=1;i.f=j;H(i);}
function WI(a,b,c){var d,e,f,g,h;if(a.bB){d=new DU;d.c=1;d.d=1;H(d);}if(b>=0&&(b+3|0)<a.g){d=a.bg;B7();if(d!==A4M){e=a.W.data;b=a.bn+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.W.data;b=a.bn+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new Y;c=a.g-3|0;f=new O;f.b=D(16);I(f,f.a,B(487));N(f,f.a,b,10);I(f,f.a,B(470));N(f,f.a,c,10);c=f.a;Bc(f,c,c+1|0);e=f.b;e.data[c]=41;g=new M;c=f.a;P();h=D(c);g.e=h;L(e,
0,h,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function GE(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/4|0;e=a.bg;B7();if(e!==A4M){e=new M$;f=a.bn+c|0;c=a.bB;e.w=(-1);e.z=d;e.g=d;e.h=0;e.g=d;e.ha=f;e.g9=a;e.oj=c;return e;}e=new P3;b=a.bn+c|0;g=a.bB;e.w=(-1);e.z=d;e.g=d;e.h=0;e.g=d;e.ha=b;e.g9=a;e.oj=g;return e;}
function Fj(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/4|0;e=a.bg;B7();if(e!==A65){e=new M0;f=a.bn+c|0;c=a.bB;e.w=(-1);e.z=d;e.g=d;e.h=0;e.g=d;e.gR=f;e.fN=a;e.pM=c;return e;}e=new OX;b=a.bn+c|0;g=a.bB;e.w=(-1);e.z=d;e.g=d;e.h=0;e.g=d;e.gR=b;e.fN=a;e.pM=g;return e;}
function AVs(a){return a.W.data;}
function Gh(){C.call(this);this.tK=null;}
var A4M=null;var A65=null;var A66=null;function B7(){B7=W(Gh);AVd();}
function C8(){var b,c;B7();if(A66===null){b=new $rt_globals.ArrayBuffer(2);c=new $rt_globals.Int16Array(b);0;c[0]=1;A66=(new $rt_globals.Int8Array(b))[0]?A65:A4M;}return A66;}
function AVd(){var b;b=new Gh;B7();b.tK=B(488);A4M=b;b=new Gh;b.tK=B(489);A65=b;}
function EH(){var a=this;KV.call(a);a.i1=null;a.iH=null;}
function Ud(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=a.i1;e=0;f=0;g=a.iH;a:{while(true){if((e+32|0)>f){h=b.h;i=b.g;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;M1(b,d,j,f-j|0);e=0;}}j=c.h;m=c.g;if(!(j>=m?0:1)){j=b.h>=b.g?0:1;n=!j&&e>=f?AZZ:AZ0;break a;}k=g.data;h=m-j|0;m=k.length;if(h<m)m=h;o=new M5;o.gX=b;o.eJ=c;n=a.kh(d,e,f,g,0,m,o);e=o.hZ;l=o.ib;if(n===null){j=b.h>=b.g?0:1;if(!j&&e>=f)n=AZZ;else if(!(c.h>=c.g?0:1)&&e>=f)n=AZ0;}R1(c,g,0,l);if
(n!==null)break;}}BU(b,b.h-(f-e|0)|0);return n;}
var N$=G(EH);
function ANj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;n=h.eJ;if((n.g-n.h|0)<2?0:1)break a;i=AZ0;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{o=l&64512;m=Bm(o,55296);c=m?0:1;if(!(!c&&!(o!=56320?0:1)?0:1)){if((f+3|0)>g){j=j+(-1)|0;n=h.eJ;if((n.g-n.h|0)<3?0:1)break a;i=AZ0;break a;}k=e.data;c=f+1|0;k[f]=(224|l>>12)<<24>>24;f
=c+1|0;k[c]=(128|l>>6&63)<<24>>24;m=f+1|0;k[f]=(128|l&63)<<24>>24;}else{if(!(m?0:1)){i=new Ca;i.bj=2;i.bC=1;break a;}if(j>=d){n=h.gX;if(n.h>=n.g?0:1)break a;i=AZZ;break a;}p=j+1|0;m=k[j];if(!((m&64512)!=56320?0:1)){j=p+(-2)|0;i=new Ca;i.bj=2;i.bC=1;break a;}if((f+4|0)>g){j=p+(-2)|0;n=h.eJ;if((n.g-n.h|0)<4?0:1)break a;i=AZ0;break a;}k=e.data;o=((l&1023)<<10|m&1023)+65536|0;m=f+1|0;k[f]=(240|o>>18)<<24>>24;c=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=c+1|0;k[c]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j
=p;}}c=j;f=m;}j=c;}h.hZ=j;h.ib=f;return i;}
var EQ=G(CE);
var Is=G();
var A67=0;var A68=null;var A69=null;function ZA(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.qV=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nF=0;c.nc=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Cn(CG(T(d),T(8388608)),B2)){d=d<<1;f=f+(-1)|0;}}g=A69;h=AQb(g,0,g.data.length,f);if(h<0)h= -h|0;g=A69.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=A68.data[e];j=CG(T(d),F(4294967295, 0));k=U(Bh(Bf(j,CG(T(e),F(4294967295, 0))),32-i|0));if(k<A67){while($rt_ucmp(k,
A67)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=A69.data;e=h+1|0;i=9+(f-g[e]|0)|0;k=U(Bh(Bf(j,CG(T(A68.data[e]),F(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=A68.data;f=h+1|0;e=g[f];m=i-1|0;n=Bf(CG(T(l),F(4294967295, 0)),CG(T(e),F(4294967295, 0)));e=32-m|0;o=U(Bh(n,e));p=U(Bh(Bf(CG(T(d-1|0),F(4294967295, 0)),CG(T(g[f]),F(4294967295, 0))),e));q=1;while(true){r=q*10|0;if($rt_ucmp($rt_udiv(k,r),$rt_udiv(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if($rt_ucmp($rt_udiv(k,l),$rt_udiv(o,l))>=0)break;m=l;}s=$rt_ucmp(q,m);d=
s>0?D4($rt_udiv(k,q),q):s<0?D4($rt_udiv(k,m),m)+m|0:D4($rt_udiv((k+(m/2|0)|0),m),m);if(D3(T(d),T(1000000000))>=0)while(true){h=h+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.nF=d;c.nc=h-50|0;}
function Wc(){A67=$rt_udiv((-1),10);A68=F9([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A69=F9([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Zy(){var a=this;C.call(a);a.ne=null;a.qC=null;a.fA=null;a.f$=null;a.pO=null;a.kZ=0;a.g8=0;a.f2=0.0;a.sZ=B2;a.kp=B2;a.rh=B2;a.gh=null;a.oB=0;a.p5=0;a.no=0;a.me=0;a.ry=null;a.B6=null;a.vd=null;a.t8=null;a.hD=null;a.gu=null;a.gz=null;a.uL=0;a.qr=null;a.nr=null;a.o4=null;a.y9=null;a.nP=null;a.nR=null;a.c_=null;a.r5=null;a.Bn=null;a.iJ=null;a.oT=null;a.bR=null;a.fM=null;a.pm=null;}
function AXd(){var a=new Zy();ANU(a);return a;}
function ANU(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Kv;c=A35;d=new HK;e=c.h2;IT();Iw(d,e,B(490),A6$);e=A35;f=AA0(e.h2,B(491),A6$);e=AVK(d,0);g=new DR;h=new HI;i=null;d=Yr(f,Q6(f),i,0);i=A37;c=i.m.createTexture();j=i.eE;i.eE=j+1|0;Cc(i.e_,j,Cg(c));NS();c=A38;h.hf=c;h.im=c;Mh();c=A39;h.gT=c;h.hh=c;h.jX=1.0;h.dX=3553;h.hv=j;LQ(h,d);c=A3$;f=Yp(A3_,c);f=f===null?null:f.dL;if(f===null)f=AV4(1,16);Cj(f,h);Gx(A3_,c,f);g.de=h;c=h.d2;Je(g,0,0,c.d5,c.dY);k=Bg(DR,1);l=k.data;l[0]=g;c=new BN;m=l.length;d=k.constructor;if(d
===null)f=null;else{f=d.classObject;if(f===null)f=AQZ(d);}d=f.C.$meta.item;if(d===null)f=null;else{f=d.classObject;if(f===null)f=AQZ(d);}c.bf=1;f=AQT(f,m);c.r=f;c.l=m;DH(k,0,f,0,m);WX(b,e,c,1);b.pl=1;a.f$=b;b=new Dw;HE();b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=1.0;a.pO=b;a.gh=AWR(45.0,Sk(A4L),SI(A4L));j=$rt_globals.physx.PxTopLevelFunctions.prototype.get_PHYSICS_VERSION();a.oB=j;a.p5=j>>24;a.no=j>>16&255;a.me=j>>8&255;a.ry=AYa();b=AXF();a.B6=b;a.vd=UY(a.oB,a.ry,b);b=AX0();a.t8=b;a.hD=AYc(b);b=V1(a.oB,a.vd,a.t8);a.gu
=b;a.gz=PB(b,a.hD);a.uL=0;a.nr=ADQ(a.gu,0.5,0.5,0.5);b=new DY;AV7();P6(b,A6_<<24>>24);a.o4=b;a.c_=AYI();b=new LJ;AXD();AC7(b,A7a);a.iJ=b;a.fM=AXI();a.pm=AWE(2501,AXz(a.gh));}
function AOf(a){var b,c,d,e,f,g,h,i,j,k,l;if(A5R===null){b=new Cu;b.b6=AZW;c=new O;c.b=D(16);b.ba=c;b.b4=D(32);b.cm=0;Ct();b.ce=A5l;A5R=b;}d=A5R;e=a.p5;f=a.no;g=a.me;c=new O;c.b=D(16);I(c,c.a,B(492));N(c,c.a,e,10);h=c.a;Bc(c,h,h+1|0);c.b.data[h]=46;N(c,c.a,f,10);f=c.a;Bc(c,f,f+1|0);c.b.data[f]=46;N(c,c.a,g,10);b=new M;i=c.b;f=c.a;P();j=D(f);b.e=j;L(i,0,j,0,f);c=d.ba;I(c,c.a,b);f=c.a;Bc(c,f,f+1|0);c.b.data[f]=10;Cl(d);c=new LB;ACc();NJ(c,1000,null);a.fA=c;c=a.f$;Ec();b=A4C;c=c.e4.l1;c.b2=b.b2;c.b1=b.b1;c.b0=
b.b0;c.bZ=b.bZ;a.f2=0.0;a.g8=0;c=new DV;k=T(Wk(0.0,(-1.5),0.0));c.b_=1;c.u=k;a.bR=c;l=T(Vv(a.uL));if(Cn(l,B2))c=null;else{if(A7b===null)A7b=new E_;c=A7b;if(!c.b_)c.u=l;}a.qr=c;c=a.hD;b=a.bR;e=U(c.u);f=b===null?0:U(b.u);ADx(e,f);c=a.hD;b=a.qr;e=U(c.u);f=b===null?0:U(b.u);AAF(e,f);c=a.hD;l=T(AEF());if(Cn(l,B2))b=null;else{if(A7c===null)A7c=new Fe;b=A7c;if(!b.b_)b.u=l;}Wv(c,b);a.gz=PB(a.gu,a.hD);Rf(a.bR,100.0);R8(a.bR,(-1.0));Nh(a.bR,100.0);ADW(a.iJ,a.bR);a.oT=AXW(1,1,0,0);c=AVV(200.0,1.0,200.0);a.y9=c;a.nP=PU(a.gu,
c,a.nr,1,a.o4);a.nR=ADL(a.gu,a.iJ);ZE(a.nP,a.oT);ADD(a.nR,a.nP);Uu(a.gz,a.nR);X3(a);}
function ALp(a,b){A37.mL(1.0,1.0,1.0,1.0);A37.pe(16640);ADi(a);Um(a);ZO(a);}
function ADi(a){var b,c,d,e,f,g;a:{b:{c:{d:{b=a.f2+A4L.jq;a.f2=b;switch(a.g8){case 0:break;case 1:break d;case 2:break b;case 3:break c;case 4:break a;default:break a;}if(b<=1.5)break a;a.g8=1;a.f2=0.0;break a;}if(b<=1.5)break a;a.g8=2;a.f2=0.0;MI(a);break a;}if(b<=2.5)break a;a.g8=4;a.f2=0.0;MI(a);break a;}if(b>4.0){a.g8=3;a.f2=0.0;V3(a);Qq(a,a.ne);c=a.gh;d=c.bx;d.k=100.0;d.j=25.0;d.i=12.5;OF(c,100.0,25.0,100.0);c=a.gh;d=c.eT;CD();e=A3R;b=e.k;f=e.j;g=e.i;d.k=b;d.j=f;d.i=g;Jd(c,1);}}}
function Um(a){var b,c,d,e,f,g,h,i,j,k,l;a.kp=AZg($rt_globals.performance.now()*1000000.0);b=a.gz;c=A4L.jq;AA1(U(b.u),c)?1:0;T_(U(a.gz.u),!!1)?1:0;d=0;while(d<Le(a.fM)){b=a.pO;e=a.c_;if(d>=e.l){f=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,d,10);I(b,b.a,B(36));d=e.l;N(b,b.a,d,10);e=new M;g=b.b;h=b.a;P();i=D(h);e.e=i;L(g,0,i,0,h);f.c=1;f.d=1;f.f=e;H(f);}j=ZC(U((It(FD(e.r.data[d]))).u));e=a.c_;if(d>=e.l){f=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,d,10);I(b,b.a,B(36));d=e.l;N(b,b.a,d,10);e=new M;g=b.b;h
=b.a;P();i=D(h);e.e=i;L(g,0,i,0,h);f.c=1;f.d=1;f.f=e;H(f);}k=AEL(U((It(FD(e.r.data[d]))).u));e=a.c_;if(d>=e.l){f=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,d,10);I(b,b.a,B(36));d=e.l;N(b,b.a,d,10);S3(f,AIb(b.b,0,b.a));H(f);}V2(b,j,k,Wf(It(FD(e.r.data[d]))),YE(It(FD(FX(a.c_,d)))));Xt(HD(a.fM,d),a.pO);ADl(HD(a.fM,d),Zk(JX(FD(FX(a.c_,d)))),XA(JX(FD(FX(a.c_,d)))),AB3(JX(FD(FX(a.c_,d)))));AEs(a.pm,HD(a.fM,d));d=d+1|0;}l=a.kp;a.sZ=O8(AZg($rt_globals.performance.now()*1000000.0),l);}
function ZO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a.kp=AZg($rt_globals.performance.now()*1000000.0);Jd(a.gh,1);b=a.pm;Yt(b);c=b.iZ;while(true){d=c.ej;if(d===null)break;e=c.jY;f=e.bU;if(f.l<e.dy){Cj(f,d);g=e.fC;h=e.bU.l;if(g>h)h=g;e.fC=h;if(Dg(d,CL))d.dK();}else if(Dg(d,CL))d.dK();c.ej=c.ej.eC;}c.fJ=0;L2(b.mm,b.kL);b=b.kL;i=b.r;g=0;h=b.l;c=null;if(g>h){b=new Be;b.c=1;b.d=1;B9(b);H(b);}while(g<h){j=i.data;k=g+1|0;j[g]=c;g=k;}b.l=0;l=a.kp;a.rh=O8(AZg($rt_globals.performance.now()*1000000.0),l);W3(a.fA);c=a.f$;d
=a.fA;k=A4L.p9|0;e=new O;e.b=D(16);I(e,e.a,B(493));N(e,e.a,k,10);b=new M;j=e.b;g=e.a;P();i=D(g);b.e=i;L(j,0,i,0,g);Qo(c.e4);e=c.e4;m=b.e.data.length;f=null;Kr();n=A1I;o=Cv(n,J(C5));n=o<0?null:n.cl.data[o];if(n===null){n=AYM(J(C5),4,100);BD(A1I,J(C5),n);}p=n.bU;p=p.l?JN(p):n.i_();Cj(e.i3,p);GX(p,e.fL,b,0,m,e.l1,0.0,8,0,f);Vd(e,p,10.0,20.0);Oi(c.e4,d);b=a.f$;c=a.fA;g=a.p5;h=a.no;k=a.me;d=new O;Ia(d,16);EK(Fu(EK(Fu(EK(CS(d,B(494)),g),46),h),46),k);Ix(b,c,Cm(d),10.0,40.0);b=a.f$;c=a.fA;g=Le(a.fM);d=E2();EK(CS(d,
B(495)),g);Ix(b,c,Cm(d),10.0,60.0);b=a.f$;c=a.fA;l=TW(a.sZ);d=E2();CS(OU(CS(d,B(496)),l),B(497));Ix(b,c,Cm(d),10.0,80.0);b=a.f$;c=a.fA;l=TW(a.rh);d=E2();CS(OU(CS(d,B(498)),l),B(497));Ix(b,c,Cm(d),10.0,100.0);ACx(a.fA);}
function Qq(a,b){var c,d,e;a.kZ=0;Yq(a,b);c=0.5;while(c<50.0){d=(-25.0);while(d<25.0){b=new Bl;e=100.5+d;CD();b.k=e;b.j=c;b.i=100.0;Xl(a,b);a.kZ=a.kZ+1|0;d=d+1.0;}c=c+1.0;}}
function Yq(a,b){var c,d,e,f,g,h,i;c=V8(b,b.hY/50|0,b.iC/50|0);d=Bg(DR,2500);e=d.data;a.qC=d;f=0;g=0;while(g<50){h=0;while(h<50){d=c.data;i=f+1|0;e[f]=d[g].data[h];h=h+1|0;f=i;}g=g+1|0;}}
function Xl(a,b){var c,d,e,f,g,h,i,j,k;c=a.qC.data;d=a.kZ;e=c[d];f=e.ia;e.ia=e.l3;e.l3=f;e=c[d];APV();g=AV8();g.en.hb=e;Vl(g);e=g.en;e.hX=(-1);e.je=(-1);e=g.n8;e.di=1.0;e.dh=1.0;XN(g,1.0,1.0,1.0,1.0);e=g.bq;f=b.k;h=b.j;i=b.i;e.k=f;e.j=h;e.i=i;g.gt=0;e=a.fM;F7(e,e.be+1|0);c=e.bO.data;j=e.be;e.be=j+1|0;c[j]=g;e.cy=e.cy+1|0;e=a.bR;f=b.k;Ho(U(e.u),f);e=a.bR;f=b.j;GN(U(e.u),f);e=a.bR;f=b.i;Hf(U(e.u),f);b=a.iJ;e=a.bR;d=U(b.u);j=e===null?0:U(e.u);Wq(d,j);b=new Fk;k=T(NU(0.5,0.5,0.5));b.b_=1;b.u=k;a.Bn=b;b=PU(a.gu,
b,a.nr,1,a.o4);a.r5=b;e=a.oT;d=U(b.u);j=e===null?0:U(e.u);SL(d,j);e=ACh(a.gu,a.iJ);b=a.r5;d=U(e.u);j=b===null?0:U(b.u);AAV(d,j)?1:0;ARR(U(e.u),1.0);Cj(a.c_,e);d=U(a.gz.u);j=U(e.u);RV(d,j)?1:0;AKu(U(e.u));}
function AOS(a,b,c){}
function AGT(a){}
function ATD(a){}
function ARh(a){}
function MI(a){var b,c,d,e,f,g,h;Ho(U(a.bR.u),(-2500.0));GN(U(a.bR.u),5000.0);Hf(U(a.bR.u),10.0);b=a.c_;if(25>=b.l){c=new Y;d=new O;d.b=D(16);I(d,d.a,B(35));N(d,d.a,25,10);I(d,d.a,B(36));e=b.l;N(d,d.a,e,10);b=new M;f=d.b;g=d.a;P();h=D(g);b.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=b;H(c);}b=b.r.data[25];d=a.bR;e=U(b.u);g=d===null?0:U(d.u);Rv(e,g);Ho(U(a.bR.u),2500.0);GN(U(a.bR.u),5000.0);Hf(U(a.bR.u),10.0);b=a.c_;if(26>=b.l){c=new Y;d=new O;d.b=D(16);I(d,d.a,B(35));N(d,d.a,26,10);I(d,d.a,B(36));e=b.l;N(d,d.a,e,10);b
=new M;f=d.b;g=d.a;P();h=D(g);b.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=b;H(c);}b=b.r.data[26];d=a.bR;e=U(b.u);g=d===null?0:U(d.u);Rv(e,g);Ho(U(a.bR.u),(-2500.0));GN(U(a.bR.u),(-5000.0));Hf(U(a.bR.u),10.0);b=a.c_;if(75<b.l){OD(b.r.data[75],a.bR);Rf(a.bR,2500.0);R8(a.bR,5000.0);Nh(a.bR,10.0);OD(FX(a.c_,76),a.bR);return;}c=new Y;d=new O;d.b=D(16);I(d,d.a,B(35));N(d,d.a,75,10);AAA(d,B(36));XB(c,Cm(EK(d,b.l)));H(c);}
function V3(a){var b,c,d,e,f,g,h,i;b=0;while(true){c=a.c_;d=c.l;e=Bm(b,d);if(e>=0){f=c.r;b=0;g=null;if(b>d){c=new Be;c.c=1;c.d=1;H(c);}while(b<d){h=f.data;e=b+1|0;h[b]=g;b=e;}c.l=0;c=a.fM;f=c.bO;b=0;d=c.be;g=null;if(b>d){c=new Be;c.c=1;c.d=1;H(c);}while(b<d){h=f.data;e=b+1|0;h[b]=g;b=e;}c.be=0;c.cy=c.cy+1|0;return;}g=a.gz;if(e>=0){i=new Y;g=new O;g.b=D(16);I(g,g.a,B(35));N(g,g.a,b,10);I(g,g.a,B(36));b=c.l;N(g,g.a,b,10);c=new M;f=g.b;d=g.a;P();h=D(d);c.e=h;L(f,0,h,0,d);i.c=1;i.d=1;i.f=c;H(i);}c=c.r.data[b];d
=U(g.u);e=c===null?0:U(c.u);YV(d,e);c=a.c_;if(b>=c.l)break;AMY(U(c.r.data[b].u));b=b+1|0;}i=new Y;g=new O;g.b=D(16);I(g,g.a,B(35));N(g,g.a,b,10);I(g,g.a,B(36));b=c.l;N(g,g.a,b,10);c=new M;f=g.b;d=g.a;P();h=D(d);c.e=h;L(f,0,h,0,d);i.c=1;i.d=1;i.f=c;H(i);}
function X3(a){var b,c,d,e,f,g,h,i,j,k,l;b=new DR;c=new HI;d=A35;e=new HK;f=d.h2;IT();Iw(e,f,B(499),A36);g=null;f=Yr(e,Q6(e),g,0);g=A37;d=g.m.createTexture();h=g.eE;g.eE=h+1|0;Cc(g.e_,h,Cg(d));NS();d=A38;c.hf=d;c.im=d;Mh();d=A39;c.gT=d;c.hh=d;c.jX=1.0;c.dX=3553;c.hv=h;LQ(c,f);e=A3$;d=A3_;if(e===null){f=d.cq.data[0];while(f!==null&&f.cB!==null){f=f.cQ;}}else{h=Mo(e);i=d.cq.data;f=i[h&(i.length-1|0)];while(f!==null&&!(f.el==h&&T1(e,f.cB))){f=f.cQ;}}d=f===null?null:f.dL;if(d===null){d=new BN;d.bf=1;d.r=Bg(C,16);}Cj(d,
c);Gx(A3_,e,d);b.de=c;c=c.d2;Je(b,0,0,c.d5,c.dY);a.ne=b;b=a.gh;b.pv=1.0;b.oN=300.0;c=b.bx;c.k=50.0;c.j=25.0;c.i=50.0;OF(b,100.0,25.0,100.0);b=a.gh;c=b.eT;CD();d=A3R;j=d.k;k=d.j;l=d.i;c.k=j;c.j=k;c.i=l;Jd(b,1);Qq(a,a.ne);}
function Qg(){C.call(this);this.qI=null;}
var AB4=G();
var Wo=G();
function Ra(){var a=this;C.call(a);a.hH=null;a.fk=null;}
function AC5(a,b){var c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(ALx()){var $T=Rl();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.hH.readyState==4){if(a.hH.status==200){b=a.fk;if(b.em.dr){if(A5R===null){c=new Cu;c.b6=AZW;d=new O;d.b=D(16);c.ba=d;c.b4=D(32);c.cm=0;Ct();c.ce=A5l;A5R=c;}e=A5R;b=b.ee;d=new O;d.b=D(16);I(d,d.a,B(500));f=d.a;if(b===null)b=B(2);I(d,f,b);b=new M;g=d.b;h=d.a;P();i=D(h);b.e
=i;L(g,0,i,0,h);d=e.ba;I(d,d.a,b);h=d.a;Bc(d,h,h+1|0);d.b.data[h]=10;Cl(e);}b=a.fk;b.ez.iF(b.ee,$rt_str(a.hH.responseText));}else if(a.hH.status!=404&&a.hH.status!=403){try{j=T(100);$p=1;continue _;}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){}else{throw $$e;}}b=a.fk;d=b.em;f=b.fU;c=b.ee;b=b.ez;if(d.dr){if(A5R===null){k=new Cu;k.b6=AZW;e=new O;e.b=D(16);k.ba=e;k.b4=D(32);k.cm=0;Ct();k.ce=A5l;A5R=k;}l=A5R;e=new O;e.b=D(16);I(e,e.a,B(113));I(e,e.a,c===null?B(2):c);k=new M;g=e.b;m=e.a;P();i=D(m);k.e=i;L(g,0,
i,0,m);e=l.ba;I(e,e.a,k);m=e.a;Bc(e,m,m+1|0);e.b.data[m]=10;Cl(l);}d.bt=d.bt+1|0;e=new GH;e.em=d;e.fU=f;e.ee=c;e.ez=b;b=null;d=null;e.dI=new C;e.dF=1;e.eG=d;e.e3=b;h=A52;A52=h+1|0;e.e0=T(h);b=new EX;b.eI=e;FQ(b);}else{b=a.fk;b.ez.ir(b.ee);}b=a.fk.em;b.bt=b.bt-1|0;}return;case 1:a:{try{VP(j);if(Ge()){break _;}break a;}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){}else{throw $$e;}}}b=a.fk;d=b.em;f=b.fU;c=b.ee;b=b.ez;if(d.dr){if(A5R===null){k=new Cu;k.b6=AZW;e=new O;e.b=D(16);k.ba=e;k.b4=D(32);k.cm=0;Ct();k.ce
=A5l;A5R=k;}l=A5R;e=new O;e.b=D(16);I(e,e.a,B(113));I(e,e.a,c===null?B(2):c);k=new M;g=e.b;m=e.a;P();i=D(m);k.e=i;L(g,0,i,0,m);e=l.ba;I(e,e.a,k);m=e.a;Bc(e,m,m+1|0);e.b.data[m]=10;Cl(l);}d.bt=d.bt+1|0;e=new GH;e.em=d;e.fU=f;e.ee=c;e.ez=b;b=null;d=null;e.dI=new C;e.dF=1;e.eG=d;e.e3=b;h=A52;A52=h+1|0;e.e0=T(h);b=new EX;b.eI=e;FQ(b);b=a.fk.em;b.bt=b.bt-1|0;return;default:AFA();}}Rl().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function Xk(a,b){var $p,$z;$p=0;if(ALx()){var $T=Rl();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AC5(a,b);if(Ge()){break _;}return;default:AFA();}}Rl().s(a,b,$p);}
var AA8=G(0);
function LV(){var a=this;C.call(a);a.bx=null;a.hz=null;a.eT=null;a.nD=null;a.o$=null;a.jI=null;a.k7=null;a.pv=0.0;a.oN=0.0;a.nq=0.0;a.ou=0.0;a.tx=null;a.iO=null;a.wL=null;}
function ABe(a){var b,c,d;b=new Bl;CD();a.bx=b;b=new Bl;b.k=0.0;b.j=0.0;b.i=(-1.0);a.hz=b;b=new Bl;b.k=0.0;b.j=1.0;b.i=0.0;a.eT=b;a.nD=Fp();a.o$=Fp();a.jI=Fp();a.k7=Fp();a.pv=1.0;a.oN=100.0;a.nq=0.0;a.ou=0.0;a.tx=AXR();a.iO=new Bl;b=new KL;AXu();c=new Bl;b.xm=c;d=new Bl;b.Bg=d;c.k=0.0;c.j=0.0;c.i=0.0;d.k=0.0;d.j=0.0;d.i=0.0;a.wL=b;}
function OF(a,b,c,d){var e,f,g,h,i;e=a.iO;e.k=b;e.j=c;e.i=d;f=a.bx;g=f.k;h=f.j;i=f.i;b=b-g;c=c-h;d=d-i;e.k=b;e.j=c;e.i=d;c=b*b+c*c+d*d;if(c!==0.0&&c!==1.0){b=1.0/BQ(c);c=e.k*b;d=e.j*b;b=e.i*b;e.k=c;e.j=d;e.i=b;}e=a.iO;c=e.k;if(!(c===0.0&&e.j===0.0&&e.i===0.0?1:0)){f=a.eT;g=c*f.k+e.j*f.j+e.i*f.i;if(Fy(g-1.0)<9.999999717180685E-10){e=a.eT;f=a.hz;c=f.k;d=f.j;g=f.i;e.k=c;e.j=d;e.i=g;c=c*(-1.0);d=d*(-1.0);b=g*(-1.0);e.k=c;e.j=d;e.i=b;}else if(Fy(g+1.0)<9.999999717180685E-10){e=a.eT;f=a.hz;b=f.k;c=f.j;d=f.i;e.k=b;e.j
=c;e.i=d;}e=a.hz;f=a.iO;b=f.k;c=f.j;d=f.i;e.k=b;e.j=c;e.i=d;f.k=b;f.j=c;f.i=d;Io(f,a.eT);e=a.eT;f=a.iO;b=f.k;c=f.j;d=f.i;e.k=b;e.j=c;e.i=d;e=Io(e,a.hz);b=e.k;b=b*b;c=e.j;b=b+c*c;c=e.i;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/BQ(c);c=e.k*b;d=e.j*b;b=e.i*b;e.k=c;e.j=d;e.i=b;}}}
function Tl(){var a=this;LV.call(a);a.p2=0.0;a.uq=null;}
function AWR(a,b,c){var d=new Tl();AJ6(d,a,b,c);return d;}
function AJ6(a,b,c,d){var e;ABe(a);a.p2=67.0;e=new Bl;CD();a.uq=e;a.p2=b;a.nq=c;a.ou=d;Jd(a,1);}
function Jd(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.nq/a.ou;Ue(a.nD,Fy(a.pv),Fy(a.oN),a.p2,c);d=a.o$;e=a.bx;f=a.uq;g=e.k;h=e.j;i=e.i;f.k=g;f.j=h;f.i=i;j=a.hz;c=j.k;k=j.j;l=j.i;g=g+c;h=h+k;i=i+l;f.k=g;f.j=h;f.i=i;f=a.eT;j=A3G;j.k=g;j.j=h;j.i=i;c=e.k;k=e.j;l=e.i;c=g-c;k=h-k;l=i-l;j.k=c;j.j=k;j.i=l;Wb(d,j,f);f=A3H;c= -e.k;k= -e.j;l= -e.i;Ir(f);m=f.cH.data;m[12]=c;m[13]=k;m[14]=l;PZ(d,f);Ig(a.jI,a.nD.cH);Th(a.jI.cH,a.o$.cH);if(b){Ig(a.k7,a.jI.cH);Wr(a.k7.cH);AAm(a.tx,a.k7);}}
function BL(){var a=this;C.call(a);a.u=B2;a.b_=0;}
var AZ1=0;var AZ2=0;function ALS(a,b){return b instanceof BL&&Cn(b.u,a.u)?1:0;}
function AUC(a){return U(a.u);}
function ASc(a){return a.u;}
function AMp(a){var b,c,d,e,f,g,h,i,j;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BZ;c.C=b;d=c;b.classObject=d;}}c=NM(c);e=a.u;f=a.b_;b=new O;b.b=D(16);g=b.a;if(c===null)c=B(2);I(b,g,c);h=b.a;Bc(b,h,h+1|0);b.b.data[h]=40;PR(b,b.a,e,10);h=b.a;Bc(b,h,h+1|0);b.b.data[h]=44;I(b,b.a,!f?B(501):B(502));g=b.a;Bc(b,g,g+1|0);i=b.b;i.data[g]=41;c=new M;g=b.a;P();j=D(g);c.e=j;L(i,0,j,0,g);return c;}
function AFz(){AZ1=0;AZ2=1;}
var Db=G(BL);
var AZ3=null;var AZ4=null;var AZ5=null;var A7c=null;var A7d=null;var A7e=null;var A7b=null;function UY(b,c,d){var e,f,g;e=c===null?0:U(c.u);f=d===null?0:U(d.u);g=T(ADq(b,e,f));if(Cn(g,B2))return null;if(A7d===null)A7d=new DX;c=A7d;if(!c.b_)c.u=g;return c;}
function V1(b,c,d){var e,f,g;e=c===null?0:U(c.u);f=d===null?0:U(d.u);g=T(Xj(b,e,f));if(Cn(g,B2))return null;if(A7e===null)A7e=new P7;c=A7e;if(!c.b_)c.u=g;return c;}
function AM7(){AZ3=new Db;AZ4=new Db;AZ5=new Db;}
function AEF(){var returnedJSObj=$rt_globals.physx.PxTopLevelFunctions.prototype.DefaultFilterShader();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function ADq(b,c,d){var returnedJSObj=$rt_globals.physx.PxTopLevelFunctions.prototype.CreateFoundation(b,c,d);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function Xj(b,c,d){var returnedJSObj=$rt_globals.physx.PxTopLevelFunctions.prototype.CreatePhysics(b,c,d);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function Vv(b){var returnedJSObj=$rt_globals.physx.PxTopLevelFunctions.prototype.DefaultCpuDispatcherCreate(b);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
var Ep=G(BL);
var AZ6=null;var AZ7=null;var AZ8=null;function AYa(){var a=new Ep();SV(a);return a;}
function SV(a){var b;b=T(UO());a.b_=1;a.u=b;}
function ALk(){AZ6=new Ep;AZ7=new Ep;AZ8=new Ep;}
function UO(){var jsObj=new $rt_globals.physx.PxDefaultAllocator();return $rt_globals.physx.getPointer(jsObj);}
var DJ=G(BL);
var AZ9=null;var AZ$=null;var AZ_=null;function AJV(){AZ9=new DJ;AZ$=new DJ;AZ_=new DJ;}
var Ed=G(DJ);
var A0a=null;var A0b=null;var A0c=null;function AXF(){var a=new Ed();AEz(a);return a;}
function AEz(a){var b;b=T(ADa());a.b_=1;a.u=b;}
function AMv(){A0a=new Ed;A0b=new Ed;A0c=new Ed;}
function ADa(){var jsObj=new $rt_globals.physx.PxDefaultErrorCallback();return $rt_globals.physx.getPointer(jsObj);}
var Er=G(BL);
var A0d=null;var A0e=null;var A0f=null;function AX0(){var a=new Er();U_(a);return a;}
function U_(a){var b;b=T(AAf());a.b_=1;a.u=b;}
function AT4(){A0d=new Er;A0e=new Er;A0f=new Er;}
function AAf(){var jsObj=new $rt_globals.physx.PxTolerancesScale();return $rt_globals.physx.getPointer(jsObj);}
var Eb=G(BL);
var A0g=null;var A0h=null;var A0i=null;function AYc(a){var b=new Eb();ZI(b,a);return b;}
function ZI(a,b){var c;c=T(SM(b===null?0:U(b.u)));a.b_=1;a.u=c;}
function Wv(a,b){var c,d;c=U(a.u);d=b===null?0:U(b.u);T6(c,d);}
function ALY(){A0g=new Eb;A0h=new Eb;A0i=new Eb;}
function SM(b){var jsObj=new $rt_globals.physx.PxSceneDesc(b);return $rt_globals.physx.getPointer(jsObj);}
function ADx(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxSceneDesc);jsObj.set_gravity(c);}
function T6(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxSceneDesc);jsObj.set_filterShader(c);}
function AAF(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxSceneDesc);jsObj.set_cpuDispatcher(c);}
var DY=G(BL);
var A0j=null;var A0k=null;var A0l=null;function A7f(a){var b=new DY();P6(b,a);return b;}
function P6(a,b){var c;c=T(AAW(b));a.b_=1;a.u=c;}
function ASC(){A0j=new DY;A0k=new DY;A0l=new DY;}
function AAW(b){var jsObj=new $rt_globals.physx.PxShapeFlags(b);return $rt_globals.physx.getPointer(jsObj);}
var KZ=G(0);
var G0=G();
var A6_=0;var A7g=0;var A7h=0;var A7i=0;function AV7(){AV7=W(G0);AVk();}
function AVk(){A6_=$rt_globals.physx.eSIMULATION_SHAPE;A7g=$rt_globals.physx.eSCENE_QUERY_SHAPE;A7h=$rt_globals.physx.eTRIGGER_SHAPE;A7i=$rt_globals.physx.eVISUALIZATION;}
function LJ(){var a=this;BL.call(a);a.o0=null;a.ot=null;}
function A7j(a){var b=new LJ();AC7(b,a);return b;}
function AC7(a,b){var c;c=T(ATy(b));a.b_=1;a.u=c;}
function It(a){var b,c;b=T(AKr(U(a.u)));if(Cn(b,B2))return null;if(a.o0===null)a.o0=new E6;c=a.o0;if(!c.b_)c.u=b;return c;}
function JX(a){var b,c;b=T(ATQ(U(a.u)));if(Cn(b,B2))return null;if(a.ot===null)a.ot=new DV;c=a.ot;if(!c.b_)c.u=b;return c;}
function ADW(a,b){var c,d;c=U(a.u);d=b===null?0:U(b.u);Wq(c,d);}
function ATy(b){var jsObj=new $rt_globals.physx.PxTransform(b);return $rt_globals.physx.getPointer(jsObj);}
function AKr(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxTransform);var returnedJSObj=jsObj.get_q();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function ATQ(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxTransform);var returnedJSObj=jsObj.get_p();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function Wq(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxTransform);jsObj.set_p(c);}
var Q5=G();
var A7a=0;function AXD(){AXD=W(Q5);AO9();}
function AO9(){A7a=$rt_globals.physx.PxIdentity;}
function AC3(){var a=this;C.call(a);a.j4=null;a.f9=null;a.iZ=null;a.ly=null;a.mm=null;a.kL=null;}
function AWE(a,b){var c=new AC3();AG6(c,a,b);return c;}
function AG6(a,b,c){var d,e,f;d=new OC;e=new P_;f=new BN;f.bf=0;f.r=Bg(C,16);e.bU=f;e.dy=2147483647;d.jY=e;d.fJ=0;a.iZ=d;f=new Qx;f.Cv=a;e=new BN;e.bf=0;e.r=Bg(C,16);f.bU=e;f.dy=2147483647;a.mm=f;e=new BN;e.bf=1;e.r=Bg(C,16);a.kL=e;ZT(a,b);a.ly=c;}
function ZT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a.j4=Ce(b*24|0);Ky();c=A7k;if(A5K!==null)c=A7l;d=new IP;e=b*4|0;f=b*6|0;g=Bg(Eq,3);h=g.data;i=new Eq;i.hy=1;i.dq=3;i.dM=5126;i.dT=0;i.dP=B(503);i.hV=0;i.hL=En(1);h[0]=i;j=new Eq;j.hy=4;j.dq=4;j.dM=5121;j.dT=1;j.dP=B(504);j.hV=0;j.hL=En(4);h[1]=j;i=new Eq;i.hy=16;i.dq=2;i.dM=5126;i.dT=0;i.dP=B(505);i.hV=0;i.hL=En(16);h[2]=i;LT(d,c,0,e,f,ALq(g));a.f9=d;g=Or(f);h=g.data;k=0;l=0;b=h.length;while(l<b){h[l]=k<<16>>16;m=l+1|0;n=(k+2|0)<<16>>16;h[m]=n;m=l+2|0;o=(k+1|0)
<<16>>16;h[m]=o;h[l+3|0]=o;h[l+4|0]=n;h[l+5|0]=(k+3|0)<<16>>16;l=l+6|0;k=k+4|0;}d.cX.oM(g,0,b);}
function AEs(a,b){var c,d,e,f,g,h,i,j,k;c=!(b.en.hX!=(-1)?0:1)?1:0;d=a.iZ;e=null;d=d.ej;if(d!==null){while(true){f=d.eC;if(f===null)break;if(d.eZ>=c)break;d=f;}if(d.eZ==c)e=d.gr;}if(e===null){d=a.mm.bU;g=d.l;if(!g){d=new BN;d.bf=0;d.r=Bg(C,100);}else{if(!g){b=new BH;b.c=1;b.d=1;b.f=B(41);H(b);}g=g-1|0;d.l=g;h=d.r.data;d=h[g];h[g]=null;}e=d;h=e.r;g=0;i=e.l;d=null;if(g>i){b=new Be;b.c=1;b.d=1;H(b);}while(g<i){j=h.data;k=g+1|0;j[g]=d;g=k;}e.l=0;Cj(a.kL,e);Uo(a.iZ,c,e);}Cj(e,b);}
function Yt(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.ly;A37.jb(2929);c=b.hm;d=A4N;if(c.bh){Cy(c,c.ch,c.ck);c.bh=0;}d.lN(c.dg);c=b.hm;e=b.bH.jI;SA();f=IO(c,B(506),A7m);d=A4N;if(c.bh){Cy(c,c.ch,c.ck);c.bh=0;}g=e.cH;c=d.dm;h=d.dV;if(!h)c=!c.M?null:c.K;else{i=c.I;j=OQ(c,h);a:{while(true){k=i.data[j];if(!k){j= -(j+1|0)|0;break a;}if(k==h)break;j=(j+1|0)&c.L;}}c=j<0?null:c.J.data[j];}c=c;if(!f)c=!c.M?null:c.K;else{i=c.I;h=OQ(c,f);b:{while(true){j=i.data[h];if(!j){h= -(h+1|0)|0;break b;}if(j==f)break;h=(h+1|0)&c.L;}}c
=h<0?null:c.J.data[h];}Bz();e=c===null?null:c.O;c=d.m;d="uniformMatrix4fv";l=!!0;if(g===null)m=null;else{g=g.data;n=g.length;m=new $rt_globals.Array(n);h=0;while(h<n){o=g[h];h;m[h]=o;h=h+1|0;}}c[d](e,l,m);b=b.hm;d=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}d.kV(IO(b,B(507),A7m),0);b=a.iZ;if(A4U){c=new Lv;c.n2=b;c.jA=b.ej;c.kM=null;}else{c=b.u_;if(c!==null){c.jA=c.n2.ej;c.kM=null;}else{c=new Lv;c.n2=b;c.jA=b.ej;c.kM=null;b.u_=c;}}while(true){e=c.jA;if(!(e===null?0:1))break;c.kM=e;c.jA=e.eC;Va(a.ly,e.eZ,e.gr);AD9(a,
a.ly.hm,e.gr);if(e.eZ==1){A37.g5(3042);A37.hF(1);}}A37.g5(2929);}
function AD9(a,b,c){var d,e,f,g,h,i,j,k;d=null;e=0;if(A4U){f=new Gd;f.dv=1;f.fI=c;f.js=1;}else{if(c.g1===null){f=new J7;f.k6=c;f.lY=1;c.g1=f;}f=O3(c.g1);}while(f.dv){if(!(f.g2>=f.fI.l?0:1)){if(e>0){c=a.f9;g=a.j4;c.ev.hC(g,0,e);c=a.f9;IS(c,b,4,0,e/4|0,c.iT);}return;}h=Kc(f);if(!(d!==null&&AAK(d,h.en))){if(e>0){c=a.f9;g=a.j4;c.ev.hC(g,0,e);c=a.f9;IS(c,b,4,0,e/4|0,c.iT);e=0;}i=h.en;d=i.hb.de;A37.oi(33984);A37.h6(d.dX,d.hv);j=i.hX;if(!(j!=(-1)?0:1))A37.pb(j,i.je);d=h.en;}if(!h.gt){AEE(h);WT(h);}g=h.df;k=g.data;L(g,
0,a.j4,e,k.length);e=e+h.df.data.length|0;g=a.j4;if(e==g.data.length){a.f9.ev.hC(g,0,e);c=a.f9;IS(c,b,4,0,e/4|0,c.iT);e=0;}}c=new Ba;c.c=1;c.d=1;c.f=B(461);H(c);}
var PL=G(0);
function S1(){var a=this;C.call(a);a.mT=null;a.lW=null;a.j$=null;a.bH=null;a.hm=null;a.v9=null;}
function AXz(a){var b=new S1();ANa(b,a);return b;}
function ANa(a,b){var c,d,e,f,g,h;c=new Ot;c.AI=a;d=new BN;d.bf=0;d.r=Bg(C,16);c.bU=d;c.dy=2147483647;a.mT=c;c=new BN;c.bf=1;c.r=Bg(C,16);a.lW=c;a.j$=Et(51,0.800000011920929);a.bH=b;b=new Ou;b.bJ=a;a.v9=b;c=AKO(B(508),B(509));a.hm=c;if(c.eu)return;b=new Be;c=new O;c.b=D(16);I(c,c.a,B(510));d=a.hm;if(!d.eu)e=d.d6;else{e=A4N.ij(d.dg);d.d6=e;}I(c,c.a,e);d=new M;f=c.b;g=c.a;P();h=D(g);d.e=h;L(f,0,h,0,g);b.c=1;b.d=1;b.f=d;H(b);}
function Va(a,b,c){var d,e,f,g,h,i,j,k,l;a:{if(b==1){A37.jb(3042);A37.hF(0);d=a.v9;if(A7n===null)A7n=new KP;e=A7n;f=c.r;g=c.l;if(e.mN===null){c=new Rw;c.ix=7;c.fz=0;c.iq=Bg(C,256);c.pU=Z(40);c.fh=Z(40);e.mN=c;}S2(e.mN,f,d,0,g);}else{g=0;h=c.l;while(true){if(g>=h){f=c.r;b=0;g=c.l;d=null;if(b>g){c=new Be;c.c=1;c.d=1;H(c);}while(b<g){i=f.data;h=b+1|0;i[b]=d;b=h;}c.l=0;d=ACR(a.j$);while(AC8(d)){Xd(c,YX(d));}c=a.j$;if(c.eR){c.eR=0;f=c.c8.data;d=null;b=0;g=f.length;if(b>g){c=new Be;c.c=1;c.d=1;H(c);}while(b<g){h=
b+1|0;f[b]=d;b=h;}f=c.cl;UV(f,0,f.data.length,null);}L2(a.mT,a.lW);c=a.lW;UV(c.r,0,c.l,null);c.l=0;break a;}if(g>=c.l){e=new Y;d=new O;d.b=D(16);I(d,d.a,B(35));N(d,d.a,g,10);I(d,d.a,B(36));b=c.l;N(d,d.a,b,10);c=new M;f=d.b;g=d.a;P();i=D(g);c.e=i;L(f,0,i,0,g);e.c=1;e.d=1;e.f=c;H(e);}d=c.r.data[g];e=a.j$;b=Cv(e,d.en);e=b<0?null:e.cl.data[b];if(e===null){e=a.mT.bU;b=e.l;if(!b){e=new BN;e.bf=1;e.r=Bg(C,16);}else{if(!b){c=new BH;c.c=1;c.d=1;c.f=B(41);H(c);}b=b-1|0;e.l=b;f=e.r.data;e=f[b];f[b]=null;}e=e;f=e.r;b=0;j
=e.l;k=null;if(b>j)break;while(b<j){i=f.data;l=b+1|0;i[b]=k;b=l;}e.l=0;Cj(a.lW,e);BD(a.j$,d.en,e);}Cj(e,d);g=g+1|0;}c=new Be;c.c=1;c.d=1;H(c);}}}
var Ii=G();
var A7o=null;function Nb(a,b,c,d){var e,f,g,h,i,j,k,l;e=new O;e.b=D(16);I(e,e.a,B(91));f=e.a;g=b===null?B(2):b;a:{I(e,f,g);I(e,e.a,B(511));h=new M;i=e.b;j=e.a;P();k=D(j);h.e=k;L(i,0,k,0,j);g=A7o.nu;if(!h.bA){i=h.e.data;f=i.length;j=0;while(true){if(j>=f)break a;l=i[j];h.bA=(31*h.bA|0)+l|0;j=j+1|0;}}}l=h.bA;i=g.cq.data;g=i[l&(i.length-1|0)];while(g!==null){if(g.el==l){e=g.cB;if(h!==e&&!BA(h,e)?0:1)break;}g=g.cQ;}if(g===null?0:1)return;if(b!==null){if(A5R===null){c=new Cu;c.b6=AZW;b=new O;b.b=D(16);c.ba=b;c.b4
=D(32);c.cm=0;Ct();c.ce=A5l;A5R=c;}c=A5R;g=new O;g.b=D(16);I(g,g.a,B(512));I(g,g.a,h===null?B(2):h);b=new M;k=g.b;j=g.a;i=D(j);b.e=i;L(k,0,i,0,j);g=c.ba;I(g,g.a,b);j=g.a;Bc(g,j,j+1|0);g.b.data[j]=10;Cl(c);g=$rt_globals.window.document;e=g.createElement("script");b=$rt_ustr(h);e.src=b;b=new RN;b.CI=a;b.sw=h;b.tF=d;e.addEventListener("load",BT(b,"handleEvent"));g.body.appendChild(e);}}
function VI(){var b,c,d,e,f;b=new Rr;c=new Gl;d=HX(16);c.eA=0;e=Bg(EJ,d);f=e.data;c.cq=e;c.ik=0.75;c.fj=f.length*0.75|0;b.nu=c;A7o=b;}
var PD=G(0);
function MZ(){C.call(this);this.s6=null;}
function ALz(a){var b,c,d;b=a.s6.qI;c=new Qz;c.uz=b;b=new Ii;d=new R3;d.rT=c;$rt_globals.window.imguiOnInit=BT(d,"onInit");Nb(b,B(513),null,null);}
var DX=G(BL);
var A0m=null;var A0n=null;var A0o=null;function AMH(){A0m=new DX;A0n=new DX;A0o=new DX;}
function P7(){var a=this;BL.call(a);a.pY=null;a.nf=null;a.og=null;a.nx=null;}
function ACh(a,b){var c,d,e,f;c=U(a.u);d=b===null?0:U(b.u);e=T(AGU(c,d));if(Cn(e,B2))return null;f=new Rx;if(!f.b_)f.u=e;return f;}
function PB(a,b){var c,d,e;c=U(a.u);d=b===null?0:U(b.u);e=T(AUH(c,d));if(Cn(e,B2))return null;if(a.pY===null)a.pY=new D1;b=a.pY;if(!b.b_)b.u=e;return b;}
function ADL(a,b){var c,d,e;c=U(a.u);d=b===null?0:U(b.u);e=T(AOn(c,d));if(Cn(e,B2))return null;if(a.nf===null)a.nf=new Fd;b=a.nf;if(!b.b_)b.u=e;return b;}
function PU(a,b,c,d,e){var f,g,h,i,j;f=U(a.u);g=b===null?0:U(b.u);h=c===null?0:U(c.u);i=e===null?0:U(e.u);j=T(AQs(f,g,h,!!d,i));if(Cn(j,B2))return null;if(a.og===null)a.og=new Fc;b=a.og;if(!b.b_)b.u=j;return b;}
function ADQ(a,b,c,d){var e,f;e=T(AR9(U(a.u),b,c,d));if(Cn(e,B2))return null;if(a.nx===null)a.nx=new D0;f=a.nx;if(!f.b_)f.u=e;return f;}
function AGU(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createRigidDynamic(c);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AUH(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createScene(c);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AOn(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createRigidStatic(c);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AQs(b,c,d,e,f){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createShape(c,d,e,f);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AR9(b,c,d,e){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createMaterial(c,d,e);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function Ot(){CA.call(this);this.AI=null;}
function AN6(a){var b;b=new BN;b.bf=1;b.r=Bg(C,16);return b;}
function Ou(){C.call(this);this.bJ=null;}
function OC(){var a=this;C.call(a);a.jY=null;a.u_=null;a.fJ=0;a.ej=null;}
function Uo(a,b,c){var d,e,f,g,h,i;d=a.ej;if(d===null){e=a.jY;d=null;f=null;e=e.bU;g=e.l;if(!g)e=new H0;else{if(!g){c=new BH;c.c=1;c.d=1;c.f=B(41);H(c);}g=g-1|0;e.l=g;h=e.r.data;e=h[g];h[g]=null;}e=e;e.iU=d;e.eC=f;e.gr=c;e.eZ=b;a.ej=e;a.fJ=a.fJ+1|0;}else{e=d;while(true){i=e.eC;if(i===null)break;if(i.eZ>b)break;e=i;}g=Bm(b,e.eZ);if(g<=0){if(g>=0)e.gr=c;else{e=a.jY;i=null;e=e.bU;g=e.l;if(!g)e=new H0;else{if(!g){c=new BH;c.c=1;c.d=1;c.f=B(41);H(c);}g=g-1|0;e.l=g;h=e.r.data;e=h[g];h[g]=null;}f=e;f.iU=i;f.eC=d;f.gr
=c;f.eZ=b;d.iU=f;a.ej=f;a.fJ=a.fJ+1|0;}}else{d=a.jY.bU;g=d.l;if(!g)d=new H0;else{if(!g){c=new BH;c.c=1;c.d=1;c.f=B(41);H(c);}g=g-1|0;d.l=g;h=d.r.data;d=h[g];h[g]=null;}d=d;d.iU=e;d.eC=i;d.gr=c;d.eZ=b;e.eC=d;c=d.eC;if(c!==null)c.iU=d;a.fJ=a.fJ+1|0;}}return null;}
function Qx(){CA.call(this);this.Cv=null;}
function AS5(a){var b;b=new BN;b.bf=0;b.r=Bg(C,100);return b;}
var Un=G();
function W8(){var a=this;C.call(a);a.Ag=null;a.h$=null;a.ur=null;a.nL=0;a.vf=0.0;a.fl=0.0;a.m8=0.0;a.lK=0.0;a.oZ=0.0;a.eM=0.0;a.i9=0.0;a.hj=0.0;a.ks=0.0;a.r9=0.0;a.e2=0.0;a.vN=0.0;a.jv=0;a.gd=null;a.na=null;a.p0=0.0;a.nA=0.0;a.Af=null;a.q$=null;a.sg=null;}
function AVK(a,b){var c=new W8();AO5(c,a,b);return c;}
function AO5(a,b,c){a.eM=1.0;a.r9=1.0;a.e2=1.0;a.vN=1.0;a.gd=Bg($rt_arraycls(L0),128);a.nA=1.0;a.q$=EE([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.sg=EE([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.ur=b;a.nL=c;U5(a,b,c);}
function U5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$$je;if(a.h$!==null)H(AWH(B(514)));a.Ag=AD1(b);d=AXJ(AV0(AAb(b)),512);a:{b:{try{e=H6(d);if(e===null)H(Fw(B(515)));e=Hg(e,AAC(e,B(516))+8|0);f=(RZ(Fv(e,0,V5(e,32)),B(517),4)).data;if(f.length!=4)H(Fw(B(518)));a.vf=Cs(f[0]);a.fl=Cs(f[1]);a.m8=Cs(f[2]);a.lK=Cs(f[3]);g=a.vf+a.m8;e=H6(d);if(e===null)H(Fw(B(519)));f=(RZ(e,B(192),9)).data;h=f.length;if(h<3)H(Fw(B(520)));if(!Fg(f[1],B(521)))H(Fw(B(522)));a.oZ=Cs(Hg(f[1],
11));if(!Fg(f[2],B(523)))H(Fw(B(524)));c:{i=Cs(Hg(f[2],5));j=1;if(h<6)k=j;else if(f[5]===null)k=j;else if(!Fg(f[5],B(525)))k=j;else{try{k=Pb(1,Cs(Hg(f[5],6)));j=k;break c;}catch($$e){$$je=Bw($$e);if($$je instanceof B8){}else{throw $$e;}}k=j;}}a.h$=Bg(M,k);h=0;d:{e:{f:{while(true){if(h>=k)break d;e=H6(d);if(e===null)H(Fw(B(526)));g:{l=OP(Vy(B(527)),e);if(G9(l)){m=K3(l,1);try{if(Cs(m)!=h)break f;break g;}catch($$e){$$je=Bw($$e);if($$je instanceof B8){n=$$je;break e;}else{throw $$e;}}}}e=OP(Vy(B(528)),e);if(!G9(e))break;o
=K3(e,1);a.h$.data[h]=Wg(S4(SY(Tb(b),o)),B(529),B(100));h=h+1|0;}H(Fw(B(530)));}try{H(Fw(Cm(Dy(Dy(E2(),B(531)),m))));}catch($$e){$$je=Bw($$e);if($$je instanceof B8){n=$$je;}else{throw $$e;}}}H(AOk(Cm(Dy(Dy(E2(),B(532)),m)),n));}a.hj=0.0;h:{while(true){e=H6(d);if(e===null)break;if(Fg(e,B(533)))break h;if(Fg(e,B(534)))break h;if(!Fg(e,B(535)))continue;p=AHx();q=AC6(e,B(536));BG(q);BG(q);k=Cs(BG(q));if(k<=0)a.na=p;else{if(k>65535)continue;Sy(a,k,p);}p.fb=k;BG(q);p.qT=Cs(BG(q));BG(q);p.qU=Cs(BG(q));BG(q);p.cO=Cs(BG(q));BG(q);p.dD
=Cs(BG(q));BG(q);p.dx=Cs(BG(q));BG(q);if(c)p.ie=Cs(BG(q));else p.ie= -(p.dD+Cs(BG(q))|0)|0;BG(q);p.f7=Cs(BG(q));if(SE(q))BG(q);i:{if(SE(q))try{p.h0=Cs(BG(q));break i;}catch($$e){$$je=Bw($$e);if($$je instanceof B8){}else{throw $$e;}}}if(p.cO>0&&p.dD>0)a.hj=ASV(i+p.ie,a.hj);}}a.hj=a.hj+a.m8;j:{while(true){e=H6(d);if(e===null)break;if(!Fg(e,B(537)))break j;q=AC6(e,B(536));BG(q);BG(q);r=Cs(BG(q));BG(q);s=Cs(BG(q));if(r<0)continue;if(r>65535)continue;if(s<0)continue;if(s>65535)continue;p=GW(a,r&65535);BG(q);t=Cs(BG(q));if
(p!==null)AA4(p,s,t);}}u=0;v=0.0;w=0.0;x=0.0;y=0.0;z=0.0;ba=0.0;bb=0.0;if(e!==null&&Fg(e,B(534))){u=1;q=AC6(e,B(536));BG(q);BG(q);v=FO(BG(q));BG(q);w=FO(BG(q));BG(q);x=FO(BG(q));BG(q);y=FO(BG(q));BG(q);z=FO(BG(q));BG(q);ba=FO(BG(q));BG(q);bb=FO(BG(q));}bc=GW(a,32);if(bc===null){bc=AHx();bc.fb=32;bd=GW(a,108);if(bd===null)bd=PQ(a);bc.f7=bd.f7;Sy(a,32,bc);}if(!bc.cO){be=a.lK;bc.cO=be+bc.f7+a.fl|0;bc.dx= -be|0;}a.p0=bc.f7;bf=null;f=a.q$.data;k=f.length;h=0;k:{while(h<k){bf=GW(a,f[h]);if(bf!==null)break k;h=h+1
|0;}}if(bf===null)bf=PQ(a);a.nA=bf.dD-g;bg=null;f=a.sg.data;k=f.length;h=0;l:{while(h<k){bg=GW(a,f[h]);if(bg!==null)break l;h=h+1|0;}}if(bg!==null)a.eM=bg.dD;else{bh=a.gd.data;j=bh.length;k=0;while(k<j){m:{bi=bh[k];if(bi!==null){f=bi.data;h=f.length;r=0;while(true){if(r>=h)break m;p=f[r];if(p!==null){s=p.dD;if(s&&p.cO)a.eM=AHM(a.eM,s);}r=r+1|0;}}}k=k+1|0;}}g=a.eM-g;a.eM=g;i=i-g;a.i9=i;g= -a.oZ;a.ks=g;if(c){a.i9= -i;a.ks= -g;}if(u){a.i9=v;a.hj=w;a.ks=x;a.eM=y;a.oZ=z;a.p0=ba;a.nA=bb;}}catch($$e){$$je=Bw($$e);if
($$je instanceof CE){n=$$je;break b;}else{b=$$je;break a;}}SB(d);return;}try{H(AOk(Cm(CS(Dy(E2(),B(538)),b)),n));}catch($$e){$$je=Bw($$e);b=$$je;}}SB(d);H(b);}
function MR(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=c.de.d2;e=1.0/d.d5;f=1.0/d.dY;g=0.0;h=0.0;i=c.l5;j=c.ia;k=c.hY;l=c.iC;if(c instanceof OM){m=c;g=m.zF;h=(m.x9-m.AH|0)-m.zE;}n=b.qT;o=n;p=b.cO;q=n+p|0;n=b.qU;r=n;s=b.dD;t=n+s|0;if(g<=0.0)k=q;else{o=o-g;if(o<0.0){b.cO=p+o|0;b.dx=b.dx-o|0;o=0.0;}g=q-g;if(g<=k)k=g;else b.cO=b.cO-(g-k)|0;}if(h<=0.0)l=t;else{r=r-h;if(r<0.0){n=s+r|0;b.dD=n;if(n<0)b.dD=0;r=0.0;}g=t-h;if(g<=l)l=g;else{u=g-l;b.dD=b.dD-u|0;b.ie=b.ie+u|0;}}b.qf=i+o*e;b.q5=i+k*e;if(!a.nL){b.m2=
j+r*f;b.mk=j+l*f;}else{b.mk=j+r*f;b.m2=j+l*f;}}
function Sy(a,b,c){var d,e,f;d=a.gd.data;e=b/512|0;f=d[e];if(f===null){f=Bg(L0,512);d[e]=f;}f.data[b&511]=c;}
function PQ(a){var b,c,d,e,f,g,h,i;b=a.gd.data;c=b.length;d=0;a:while(true){if(d>=c){e=new Ba;e.c=1;e.d=1;e.f=B(539);H(e);}b:{f=b[d];if(f!==null){f=f.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.dD&&i.cO)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function GW(a,b){var c;c=a.gd.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function NI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;g=e-d|0;if(!g)return;h=a.jv;i=a.e2;j=b.bF;k=b.b9;AC0(j,g);ABK(b.b9,g+1|0);a:{while(true){l=d+1|0;if(d<0)break;m=c.e.data;if(d>=m.length)break;b:{n=m[d];if(n!=13){m=a.gd.data[n/512|0];o=m===null?null:m.data[n&511];if(o===null){o=a.na;if(o===null)break b;}Cj(j,o);if(f===null)p=o.j1?0.0:( -o.dx|0)*i-a.lK;else{c:{d=f.f7;m=f.k1;if(m!==null){m=m.data[n>>>9|0];if(m!==null){g=m.data[n&511];break c;}}g=0;}p=(d+g|0)*i;}NH(k,p);if(!h)f=o;else if(n!=91)f=o;else if(l>=e)f
=o;else{if(l<0)break a;m=c.e.data;if(l>=m.length)break a;if(m[l]!=91)f=o;else{l=l+1|0;f=o;}}}}if(l>=e){if(f!==null)NH(k,f.j1?f.f7*i:(f.cO+f.dx|0)*i-a.fl);return;}d=l;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function SX(a,b,c){var d,e,f,g,h,i;a:{d=c-1|0;e=b.r.data;f=e[d].fb&65535;switch(f){case 9:case 10:case 13:case 32:break;default:c=0;break a;}c=1;}if(c)return d;b:{g=a.Af;if(g===null)c=0;else{h=g.data;c=h.length;i=0;while(i<c){if(f==h[i]){c=1;break b;}i=i+1|0;}c=0;}}if(c)d=d+(-1)|0;c:{while(d>0){d:{c=e[d].fb&65535;switch(c){case 9:case 10:case 13:case 32:break;default:f=0;break d;}f=1;}if(f)break c;e:{if(g===null)c=0;else{h=g.data;f=h.length;i=0;while(i<f){if(c==h[i]){c=1;break e;}i=i+1|0;}c=0;}}if(c)break c;d
=d+(-1)|0;}return 0;}return d+1|0;}
function Gp(){var a=this;C.call(a);a.d6=null;a.eu=0;a.kb=null;a.so=null;a.t2=null;a.sU=null;a.er=null;a.sR=null;a.up=null;a.rN=null;a.dg=0;a.ns=0;a.qp=0;a.Ch=null;a.ch=null;a.ck=null;a.bh=0;a.BO=0;a.dU=null;a.iv=null;}
var A7m=0;var A7p=null;var A7q=null;var A7r=null;var A7s=null;function SA(){SA=W(Gp);AQ_();}
function AKO(a,b){var c=new Gp();AEm(c,a,b);return c;}
function AEm(a,b,c){var d,e,f,g,h;SA();a.d6=B(42);a.kb=IG(51,0.800000011920929);a.so=IG(51,0.800000011920929);a.t2=IG(51,0.800000011920929);a.er=IG(51,0.800000011920929);a.sR=IG(51,0.800000011920929);a.up=IG(51,0.800000011920929);a.BO=0;if(!AZT){d=Z(1);e=d.data.length;f=new Gg;g=0+e|0;f.w=(-1);f.z=e;f.g=e;f.h=0;f.g=g;f.gs=0;f.h_=0;f.f3=d;}else{h=new Cp;d=BE(4);h.w=(-1);h.z=4;h.g=4;B7();h.bg=A4M;h.bn=0;h.W=d;h.h=0;h.g=4;h.b$=1;h.bB=0;h.bg=C8();f=GE(h);}a.dU=f;if(!AZT){d=Z(1);e=d.data.length;f=new Gg;g=0+e|0;f.w
=(-1);f.z=e;f.g=e;f.h=0;f.g=g;f.gs=0;f.h_=0;f.f3=d;}else{h=new Cp;d=BE(4);h.w=(-1);h.z=4;h.g=4;B7();h.bg=A4M;h.bn=0;h.W=d;h.h=0;h.g=4;h.b$=1;h.bB=0;Rg(h,C8());f=GE(h);}a.iv=f;if(b===null)H(AN5(B(540)));if(c===null)H(AN5(B(541)));f=A7p;if(f!==null&&Iv(f)>0)b=Cm(Dy(Dy(E2(),A7p),b));f=A7q;if(f!==null&&Iv(f)>0)c=Cm(Dy(Dy(E2(),A7q),c));a.ch=b;a.ck=c;a.Ch=APa(16);Cy(a,b,c);if(ADs(a)){Ws(a);Zg(a);AAH(a,A3$,a);}}
function Cy(a,b,c){var d;a.ns=SH(a,35633,b);d=SH(a,35632,c);a.qp=d;if(a.ns!=(-1)&&d!=(-1)){d=A4N.nt();if(!d)d=(-1);d=ACM(a,d);a.dg=d;if(d!=(-1)){a.eu=1;return;}a.eu=0;return;}a.eu=0;}
function SH(a,b,c){var d,e,f,g,h,i,j,k;d=A4N;if(!AZT){e=Z(1);f=e.data.length;g=new Gg;h=0+f|0;g.w=(-1);g.z=f;g.g=f;g.h=0;g.g=h;g.gs=0;g.h_=0;g.f3=e;}else{i=new Cp;j=BE(4);i.w=(-1);i.z=4;i.g=4;B7();i.bg=A4M;i.bn=0;i.W=j;i.h=0;i.g=4;i.b$=1;i.bB=0;i.bg=C8();g=GE(i);}k=d.oA(b);if(!k)return (-1);d.pV(k,c);d.oc(k);d.od(k,35713,g);if(Fh(g,0))return k;i=d.ol(k);c=new O;c.b=D(16);d=a.d6;I(c,c.a,d);d=b!=35633?B(542):B(543);I(c,c.a,d);d=new M;j=c.b;k=c.a;P();e=D(k);d.e=e;L(j,0,e,0,k);a.d6=d;c=new O;c.b=D(16);I(c,c.a,d);I(c,
c.a,i);d=new M;j=c.b;k=c.a;e=D(k);d.e=e;L(j,0,e,0,k);a.d6=d;return (-1);}
function ACM(a,b){var c,d,e,f;c=A4N;if(b==(-1))return (-1);c.kU(b,a.ns);c.kU(b,a.qp);c.mf(b);d=new Cp;e=BE(4);d.w=(-1);d.z=4;d.g=4;B7();d.bg=A4M;d.bn=0;d.W=e;d.h=0;d.g=4;d.b$=1;d.bB=0;d.bg=C8();f=GE(d);c.iA(b,35714,f);if(Fh(f,0))return b;a.d6=A4N.ij(b);return (-1);}
function ADs(a){return a.eu;}
function IO(a,b,c){var d,e,f,g,h,i;d=a.kb;e=(-2);f=Fa(d,b);if(f>=0)e=d.dQ.data[f];if(e==(-2)){e=A4N.kk(a.dg,b);if(e==(-1)&&c){if(a.eu){d=new Be;g=new O;g.b=D(16);I(g,g.a,B(544));I(g,g.a,b);I(g,g.a,B(545));b=new M;h=g.b;e=g.a;P();i=D(e);b.e=i;L(h,0,i,0,e);d.c=1;d.d=1;d.f=b;H(d);}b=new BH;d=new O;d.b=D(16);I(d,d.a,B(546));if(!a.eu)g=a.d6;else{g=A4N.ij(a.dg);a.d6=g;}I(d,d.a,g);g=new M;h=d.b;e=d.a;P();i=D(e);g.e=i;L(h,0,i,0,e);b.c=1;b.d=1;b.f=g;H(b);}EZ(a.kb,b,e);}return e;}
function XG(a){if(a.bh){Cy(a,a.ch,a.ck);a.bh=0;}}
function AAH(a,b,c){var d,e;SA();d=A7r;e=Cv(d,b);d=e<0?null:d.cl.data[e];if(d===null){d=new BN;d.bf=1;d.r=Bg(C,16);}Cj(d,c);BD(A7r,b,d);}
function Zg(a){var b,c,d,e,f;b=a.dU;b.h=0;b.g=b.z;b.w=(-1);A4N.iA(a.dg,35718,b);c=Fh(a.dU,0);a.sU=Bg(M,c);d=0;while(d<c){b=a.dU;b.h=0;b.g=b.z;b.w=(-1);RR(b,0,1);b=a.iv;b.h=0;b.g=b.z;b.w=(-1);e=A4N.pE(a.dg,d,a.dU,b);f=A4N.kk(a.dg,e);EZ(a.kb,e,f);EZ(a.so,e,Fh(a.iv,0));EZ(a.t2,e,Fh(a.dU,0));a.sU.data[d]=e;d=d+1|0;}}
function Ws(a){var b,c,d,e,f;b=a.dU;b.h=0;b.g=b.z;b.w=(-1);A4N.iA(a.dg,35721,b);c=Fh(a.dU,0);a.rN=Bg(M,c);d=0;while(d<c){b=a.dU;b.h=0;b.g=b.z;b.w=(-1);RR(b,0,1);b=a.iv;b.h=0;b.g=b.z;b.w=(-1);e=A4N.pa(a.dg,d,a.dU,b);f=A4N.jp(a.dg,e);EZ(a.er,e,f);EZ(a.sR,e,Fh(a.iv,0));EZ(a.up,e,Fh(a.dU,0));a.rN.data[d]=e;d=d+1|0;}}
function AQ_(){var b,c,d,e;A7m=1;A7p=B(42);A7q=B(42);A7r=Et(51,0.800000011920929);if(!AZT){b=Z(1);c=b.data.length;d=new Gg;e=0+c|0;d.w=(-1);d.z=c;d.g=c;d.h=0;d.g=e;d.gs=0;d.h_=0;d.f3=b;}else{d=new Cp;b=BE(4);d.w=(-1);d.z=4;d.g=4;B7();d.bg=A4M;d.bn=0;d.W=b;d.h=0;d.g=4;d.b$=1;d.bB=0;d.bg=C8();d=GE(d);}A7s=d;}
var P_=G(CA);
function APQ(a){return new H0;}
var NO=G(0);
var Kl=G(Hp);
function Rr(){Kl.call(this);this.nu=null;}
function L0(){var a=this;C.call(a);a.fb=0;a.qT=0;a.qU=0;a.cO=0;a.dD=0;a.qf=0.0;a.mk=0.0;a.q5=0.0;a.m2=0.0;a.dx=0;a.ie=0;a.f7=0;a.k1=null;a.j1=0;a.h0=0;}
function AHx(){var a=new L0();ASn(a);return a;}
function ASn(a){a.h0=0;}
function AA4(a,b,c){var d,e,f;if(a.k1===null)a.k1=Bg($rt_arraycls($rt_bytecls()),128);d=a.k1.data;e=b>>>9|0;f=d[e];if(f===null){f=BE(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function ALt(a){var b,c,d,e,f;b=a.fb&65535;c=new M;d=D(1);e=d.data;e[0]=b;P();f=e.length;e=D(f);c.e=e;L(d,0,e,0,f);return c;}
function ABo(){var a=this;C.call(a);a.mE=0;a.gV=null;a.dQ=null;a.rK=0.0;a.m9=0;a.py=0;a.lL=0;}
function IG(a,b){var c=new ABo();ALB(c,a,b);return c;}
function ALB(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.rK=c;d=LC(b,c);a.m9=d*c|0;b=d-1|0;a.lL=b;a.py=Fl(T(b));a.gV=Bg(C,d);a.dQ=Z(d);return;}e=new Be;f=new O;f.b=D(16);I(f,f.a,B(59));DK(f,f.a,c);g=new M;h=f.b;d=f.a;P();i=D(d);g.e=i;L(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function Fa(a,b){var c,d,e,f,g,h;if(b===null){c=new Be;c.c=1;c.d=1;c.f=B(60);H(c);}a:{d=a.gV;if(!b.bA){e=b.e.data;f=e.length;g=0;while(true){if(g>=f)break a;h=e[g];b.bA=(31*b.bA|0)+h|0;g=g+1|0;}}}h=U(Bh(Bf(T(b.bA),F(2135587861, 2654435769)),a.py));while(true){c=d.data[h];if(c===null)return  -(h+1|0)|0;if(BA(c,b))break;h=(h+1|0)&a.lL;}return h;}
function EZ(a,b,c){var d,e;d=Fa(a,b);if(d>=0){a.dQ.data[d]=c;return;}d= -(d+1|0)|0;e=a.gV.data;e[d]=b;a.dQ.data[d]=c;c=a.mE+1|0;a.mE=c;if(c>=a.m9)ACO(a,e.length<<1);}
function ACO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.gV.data.length;a.m9=b*a.rK|0;d=b-1|0;a.lL=d;d=Fl(T(d));a.py=d;e=a.gV;f=a.dQ;g=Bg(C,b);a.gV=g;h=Z(b);a.dQ=h;if(a.mE>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k!==null){b:{l=f.data[j];if(!k.bA){g=k.e.data;m=g.length;n=0;while(true){if(n>=m)break b;o=g[n];k.bA=(31*k.bA|0)+o|0;n=n+1|0;}}}b=U(Bh(Bf(T(k.bA),F(2135587861, 2654435769)),d));while(h[b]!==null){b=(b+1|0)&a.lL;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
var ABl=G();
function APa(b){var c,d,e,f,g,h,i;if(!AZT){c=Ce(b);d=c.data.length;e=new HP;f=0+d|0;e.w=(-1);e.z=d;e.g=d;e.h=0;e.g=f;e.h9=0;e.jm=0;e.ht=c;return e;}b=b*4|0;if(b>=0){e=new Cp;c=BE(b);e.w=(-1);e.z=b;e.g=b;B7();e.bg=A4M;e.bn=0;e.W=c;e.h=0;e.g=b;e.b$=1;e.bB=0;e.bg=C8();return Fj(e);}e=new Be;g=new O;g.b=D(16);I(g,g.a,B(486));N(g,g.a,b,10);h=new M;c=g.b;d=g.a;P();i=D(d);h.e=i;L(c,0,i,0,d);e.c=1;e.d=1;e.f=h;H(e);}
var XD=G();
var GR=G(D7);
function ARK(a){a.h=0;a.g=a.z;a.w=(-1);return a;}
function AFf(a,b){BU(a,b);return a;}
function AO3(a){a.h=0;a.g=a.z;a.w=(-1);return a;}
var Eo=G(D7);
function IU(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.dw()){e=new DU;e.c=1;e.d=1;H(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new FF;e.c=1;e.d=1;H(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Y;j=new O;j.b=D(16);I(j,j.a,B(547));N(j,j.a,i,10);I(j,j.a,B(473));N(j,j.a,f,10);k=new M;b=j.b;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.ky(g,h[c]);i=i+1|0;g=l;c=f;}a.h=a.h+d|0;return a;}e=new Y;j=new O;j.b=D(16);I(j,j.a,B(474));N(j,j.a,d,10);I(j,j.a,B(475));k=
new M;b=j.b;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}}b=b.data;e=new Y;d=b.length;j=new O;j.b=D(16);I(j,j.a,B(476));N(j,j.a,c,10);I(j,j.a,B(470));N(j,j.a,d,10);d=j.a;Bc(j,d,d+1|0);h=j.b;h.data[d]=41;k=new M;d=j.a;P();b=D(d);k.e=b;L(h,0,b,0,d);e.c=1;e.d=1;e.f=k;H(e);}
function AOc(a){a.h=0;a.g=a.z;a.w=(-1);return a;}
function AHg(a){a.g=a.h;a.h=0;a.w=(-1);return a;}
function AK$(a,b){Cz(a,b);return a;}
function APk(a,b){BU(a,b);return a;}
function ALs(a){a.g=a.h;a.h=0;a.w=(-1);return a;}
function AVf(a){a.h=0;a.g=a.z;a.w=(-1);return a;}
function AQw(a,b){Cz(a,b);return a;}
function AUf(a,b){BU(a,b);return a;}
var P$=G(0);
function Kf(){var a=this;C.call(a);a.r0=null;a.d5=0;a.dY=0;a.hd=null;a.il=null;a.s3=0;a.go=0;}
var A7t=0;function Yr(a,b,c,d){var e=new Kf();AIH(e,a,b,c,d);return e;}
function AIH(a,b,c,d,e){a.d5=0;a.dY=0;a.go=0;a.r0=b;a.il=c;a.hd=d;a.s3=e;if(c!==null){b=Rn(a,c);a.il=b;c=b.by;a.d5=c===null?b.cU:c.cJ;a.dY=c===null?b.cW:c.cI;if(d===null){if(c===null){GV();b=A4Q;}else b=HW(c.b5);a.hd=b;}}}
function NV(a){var b,c;if(a.go){b=new Ba;b.c=1;b.d=1;b.f=B(548);H(b);}if(a.il===null){b=Rn(a,Q6(a.r0));a.il=b;c=b.by;a.d5=c===null?b.cU:c.cJ;a.dY=c===null?b.cW:c.cI;if(a.hd===null){if(c===null){GV();b=A4Q;}else b=HW(c.b5);a.hd=b;}}a.go=1;}
function Rn(a,b){var c,d,e,f,g,h,i,j;a:{if(A4N===null&&A7t){c=b.by;d=c===null?b.cU:c.cJ;e=c===null?b.cW:c.cI;f=Kp(d);g=Kp(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new Hs;c=b.by;if(c===null){GV();c=A4Q;}else c=HW(c.b5);Jl(h,f,g,c);c=h.by;if(c===null){Fn(b);JC(h,b.eX,0,0,d,e,0,0,d,e);}else{i=b.by.cv;j=c.cv;LS(i,j,0,0,d,e,0,0,d,e);}if(b.hs){c=new Ba;c.c=1;c.d=1;c.f=B(47);H(c);}I3();HU(A4T,b.iY);c=b.by;if(c!==null)LG(c.cv);b.hs=1;return h;}
function Hs(){var a=this;C.call(a);a.cU=0;a.cW=0;a.eX=null;a.cp=null;a.iY=0;a.h3=null;a.vn=0;a.vp=0;a.vr=0;a.vq=0.0;a.k9=null;a.jk=null;a.uR=null;a.BF=null;a.hc=null;a.iL=null;a.q3=0;a.by=null;a.hs=0;}
var A7u=null;function PW(){PW=W(Hs);ANf();}
function Q6(a){var b=new Hs();Tr(b,a);return b;}
function A7v(a,b,c){var d=new Hs();Jl(d,a,b,c);return d;}
function Tr(a,b){var c,d,e,f,g,h,i,j;PW();a.vn=255;a.vp=255;a.vr=255;a.k9=Lh(255,255,255,a.vq);HM();a.jk=A7w;AAS();a.uR=A7x;a.q3=0;c=b.cR;d=b.iu.jl;e=Cv(d,c);d=e<0?null:d.cl.data[e];if(A3$.d3.oV){f=AQC(d.dz);a.by=AXo(f,0,f.data.length,0);JH(a,(-1),(-1),null,null);}else{JH(a,(-1),(-1),d.oW,null);if(a.hc===null){d=new Ba;g=b.cR;b=new O;b.b=D(16);I(b,b.a,B(549));e=b.a;if(g===null)g=B(2);I(b,e,g);I(b,b.a,B(550));h=new M;i=b.b;j=b.a;P();f=D(j);h.e=f;L(i,0,f,0,j);d.c=1;d.d=1;d.f=h;H(d);}}}
function Jl(a,b,c,d){PW();a.vn=255;a.vp=255;a.vr=255;a.k9=Lh(255,255,255,a.vq);HM();a.jk=A7w;AAS();a.uR=A7x;a.q3=0;JH(a,b,c,null,null);}
function JH(a,b,c,d,e){var f,g,h;if(e!==null){a.iL=e;a.cU=e.getWidth();a.cW=e.getHeight();}else if(d===null){a.cU=b;a.cW=c;}else{a.hc=d;a.cU=d.width;a.cW=d.height;}if(!AZT){f=BE(4);g=f.data.length;d=new Cp;h=0+g|0;d.w=(-1);d.z=g;d.g=g;B7();d.bg=A4M;d.bn=0;d.W=f;d.h=0;d.g=h;d.b$=0;d.bB=0;}else{d=new Cp;f=BE(4);d.w=(-1);d.z=4;d.g=4;B7();d.bg=A4M;d.bn=0;d.W=f;d.h=0;d.g=4;d.b$=1;d.bB=0;d.bg=C8();}a.h3=d;I3();c=A53;A53=c+1|0;a.iY=c;WI(d,0,c);Cc(A4T,a.iY,a);}
function XL(a){var b,c;IA();b=A5G.d4.document.createElement("canvas");a.eX=b;c=a.cU;b.width=c;b=a.eX;c=a.cW;b.height=c;b=a.eX.getContext("2d");a.cp=b;PW();GL();c=$rt_ustr(A4S.t);b.globalCompositeOperation=c;}
function Lh(b,c,d,e){var f,g,h,i,j;PW();f=new O;f.b=D(16);I(f,f.a,B(551));N(f,f.a,b,10);g=f.a;Bc(f,g,g+1|0);f.b.data[g]=44;N(f,f.a,c,10);c=f.a;Bc(f,c,c+1|0);f.b.data[c]=44;N(f,f.a,d,10);c=f.a;Bc(f,c,c+1|0);f.b.data[c]=44;DK(f,f.a,e);d=f.a;Bc(f,d,d+1|0);h=f.b;h.data[d]=41;i=new M;c=f.a;P();j=D(c);i.e=j;L(h,0,j,0,c);return i;}
function Fn(a){var b,c;if(a.eX===null){XL(a);if(a.hc!==null){b=a.cp;GL();c=$rt_ustr(A7y.c4);b.globalCompositeOperation=c;b=a.cp;c=a.hc;b.drawImage(c,0.0,0.0);b=a.cp;c=$rt_ustr(A4S.c4);b.globalCompositeOperation=c;}if(a.iL!==null){c=a.cp;GL();b=$rt_ustr(A7y.c4);c.globalCompositeOperation=b;b=a.cp;c=a.iL;b.drawImage(c,0.0,0.0);b=a.cp;c=$rt_ustr(A4S.c4);b.globalCompositeOperation=c;}}}
function AA$(a,b,c,d,e,f,g,h,i,j){var k,l,m;k=a.by;if(k===null){Fn(b);JC(a,b.eX,c,d,e,f,g,h,i,j);}else{l=b.by.cv;m=k.cv;LS(l,m,c,d,e,f,g,h,i,j);}}
function Kz(a){var b;b=a.by;if(b===null)return a.cU;return b.cJ;}
function KY(a){var b;b=a.by;if(b===null)return a.cW;return b.cI;}
function NF(a){var b,c;if(a.hs){b=new Ba;b.c=1;b.d=1;b.f=B(47);H(b);}I3();HU(A4T,a.iY);c=a.by;if(c!==null)LG(c.cv);a.hs=1;}
function ZJ(a){var b,c,d,e,f,g,h;b=a.by;if(b===null)return 6408;a:{c=b.b5;switch(c){case 1:break;case 2:c=6410;break a;case 3:case 5:c=6407;break a;case 4:case 6:c=6408;break a;default:b=new Ba;d=new O;d.b=D(16);CM(d,d.a,CZ(B(48)));N(d,d.a,c,10);e=new M;f=d.b;g=d.a;h=D(g);e.e=h;L(f,0,h,0,g);b.c=1;b.d=1;b.f=e;H(b);}c=6406;}return c;}
function XW(a){var b,c,d,e,f,g,h;b=a.by;if(b===null)return 6408;a:{c=b.b5;switch(c){case 1:break;case 2:c=6410;break a;case 3:case 5:c=6407;break a;case 4:case 6:c=6408;break a;default:b=new Ba;d=new O;d.b=D(16);I(d,d.a,B(48));N(d,d.a,c,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);b.c=1;b.d=1;b.f=e;H(b);}c=6406;}return c;}
function AB8(a){var b,c,d,e,f,g,h;b=a.by;if(b===null)return 5121;a:{c=b.b5;switch(c){case 1:case 2:case 3:case 4:break;case 5:c=33635;break a;case 6:c=32819;break a;default:b=new Ba;d=new O;d.b=D(16);I(d,d.a,B(48));N(d,d.a,c,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);b.c=1;b.d=1;b.f=e;H(b);}c=5121;}return c;}
function ABO(a){return a.h3;}
function Ta(a,b){var c,d;a.jk=b;c=a.by;if(c===null){Fn(a);b=a.cp;GL();c=$rt_ustr(A4S.t);b.globalCompositeOperation=c;}else{HM();d=b!==A4R?1:0;QF(c.cv,d);}}
function JC(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v;Fn(a);k=a.jk;HM();if(k===A4R){a:{l=a.cp;k=$rt_ustr(A7u);l.fillStyle=k;l=a.cp;k=$rt_ustr(A7u);l.strokeStyle=k;l=a.cp;k="destination-out";l.globalCompositeOperation=k;a.cp.beginPath();m=a.cp;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);XT();l=A7z;Fn(a);AWI();switch(A7A.data[l.q]){case 1:break;case 2:a.cp.stroke();break a;default:break a;}a.cp.fill();}a.cp.closePath();r=a.cp;l=$rt_ustr(a.k9);r.fillStyle=l;r=a.cp;k=$rt_ustr(a.k9);r.strokeStyle=k;r=a.cp;GL();l=$rt_ustr(A4S.c4);r.globalCompositeOperation
=l;}if(e&&f&&i&&j){l=a.cp;n=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;l.drawImage(b,n,o,p,q,s,t,u,v);}a.BF=null;}
function ANf(){A7u=Lh(255,255,255,1.0);}
var JR=G();
var Zu=G();
var FU=G(BC);
var A4R=null;var A7w=null;var A7B=null;function HM(){HM=W(FU);ALa();}
function ALa(){var b,c;b=new FU;HM();b.t=B(552);b.q=0;A4R=b;c=new FU;c.t=B(553);c.q=1;A7w=c;A7B=R(FU,[b,c]);}
var Ft=G(BC);
var A7C=null;var A7x=null;var A7D=null;function AAS(){AAS=W(Ft);AR6();}
function AR6(){var b,c;b=new Ft;AAS();b.t=B(554);b.q=0;A7C=b;c=new Ft;c.t=B(555);c.q=1;A7x=c;A7D=R(Ft,[b,c]);}
function HK(){var a=this;JR.call(a);a.iu=null;a.cR=null;a.iS=null;}
function AA0(a,b,c){var d=new HK();Iw(d,a,b,c);return d;}
function Iw(a,b,c,d){var e,f,g,h,i,j;IT();if(d!==A36&&d!==A6$&&d!==A7E){b=new Ba;c=new O;c.b=D(16);I(c,c.a,B(556));I(c,c.a,d===null?B(2):d.t);I(c,c.a,B(557));d=new M;e=c.b;f=c.a;P();g=D(f);d.e=g;L(e,0,g,0,f);b.c=1;b.d=1;b.f=d;H(b);}a.iu=b;b=Lq(c,B(558),B(100));if(Op(b,B(100))){g=b.e;h=g.data.length;i=h-1|0;j=Bm(0,i);if(j>0){b=new Y;b.c=1;b.d=1;H(b);}if(!j)b=A32;else if(i!=h){b=new M;i=i-0|0;e=D(i);b.e=e;L(g,0,e,0,i);}}a.cR=b;a.iS=d;}
function S4(a){return a.cR;}
function AD1(a){var b,c,d,e,f,g;b=a.cR;c=Ew(b,47,b.e.data.length-1|0);if(c<0)b=a.cR;else{b=a.cR;c=c+1|0;d=b.e;e=d.data.length;f=Bm(c,e);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A32;else if(!(!c&&e==e)){b=new M;f=e-c|0;g=D(f);b.e=g;L(d,c,g,0,f);}}e=Ew(b,46,b.e.data.length-1|0);if(e==(-1))return b;f=Bm(0,e);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A32;else{g=b.e;if(e!=g.data.length){b=new M;f=e-0|0;d=D(f);b.e=d;L(g,0,d,0,f);}}return b;}
function AAb(a){var b,c,d,e,f,g,h,i;b=a.iS;IT();if(b===A7E){if(A7F===null){c=new MX;b=new Jf;d=new OY;e=A3$.d3.vM;d.ng=$rt_globals.window.localStorage;d.mP=e;AXm();b.hr=d;c.sk=b;b=new Jf;d=new Qb;e=new BN;e.bf=1;e.r=Bg(C,16);d.su=e;d.pq=Et(16,0.800000011920929);b.hr=d;c.nn=b;A7F=c;}b=A7F;return !ACU(b.nn,a)?RU(b.sk,a):RU(b.nn,a);}c=UK(a.iu,a.cR);if(c!==null)return c;c=new Ba;b=a.cR;d=new O;d.b=D(16);f=d.a;if(b===null)b=B(2);I(d,f,b);I(d,d.a,B(559));b=new M;g=d.b;h=d.a;P();i=D(h);b.e=i;L(g,0,i,0,h);c.c=1;c.d
=1;c.f=b;H(c);}
function SY(a,b){var c,d,e,f,g,h,i,j,k;c=new HK;d=a.iu;e=a.cR;if(e.e.data.length?0:1)e=B(42);else{f=!Op(e,B(100))?B(100):B(42);g=new O;g.b=D(16);I(g,g.a,e);I(g,g.a,f);e=new M;h=g.b;i=g.a;j=D(i);e.e=j;L(h,0,j,0,i);}g=new O;g.b=D(16);I(g,g.a,e);k=g.a;if(b===null)b=B(2);I(g,k,b);b=new M;j=g.b;i=g.a;P();h=D(i);b.e=h;L(j,0,h,0,i);Iw(c,d,b,a.iS);return c;}
function Tb(a){var b,c,d,e,f,g;b=a.cR;c=Om(b,B(100),b.e.data.length);d=B(42);if(c>0){d=a.cR;e=Bm(0,c);if(e>0){d=new Y;d.c=1;d.d=1;H(d);}if(!e)d=A32;else{f=d.e;if(c!=f.data.length){d=new M;e=c-0|0;g=D(e);d.e=g;L(f,0,g,0,e);}}}return AA0(a.iu,d,a.iS);}
function AVe(a){return a.cR;}
function YJ(){var a=this;C.call(a);a.cv=0;a.cJ=0;a.cI=0;a.b5=0;a.h4=null;a.jW=null;}
function AXo(a,b,c,d){var e=new YJ();AIK(e,a,b,c,d);return e;}
function AWy(a,b,c){var d=new YJ();AVh(d,a,b,c);return d;}
function AS4(b){var c,d,e,f,g,h;switch(b){case 1:break;case 2:return 6410;case 3:case 5:return 6407;case 4:case 6:return 6408;default:c=new Ba;d=new O;d.b=D(16);I(d,d.a,B(48));N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}return 6406;}
function ATp(b){var c,d,e,f,g,h;switch(b){case 1:case 2:case 3:case 4:break;case 5:return 33635;case 6:return 32819;default:c=new Ba;d=new O;d.b=D(16);I(d,d.a,B(48));N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}return 5121;}
function AIK(a,b,c,d,e){var f,g,h,i,j,k;f=Z(4);a.h4=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new $rt_globals.Array(i);j=0;while(j<i){k=b[j];j;h[j]=k;j=j+1|0;}}a.jW=ASP(g,h,c,d);b=a.h4.data;a.cv=b[0];a.cJ=b[1];a.cI=b[2];c=b[3];a.b5=c;if(e&&e!=c)U3(a,e);}
function AVh(a,b,c,d){var e;e=Z(4);a.h4=e;a.jW=ARk(e.data,b,c,d);e=a.h4.data;a.cv=e[0];a.cJ=e[1];a.cI=e[2];a.b5=e[3];}
function U3(a,b){var c,d,e,f,g;c=AWy(a.cJ,a.cI,b);QF(c.cv,0);d=a.cJ;e=a.cI;f=a.cv;g=c.cv;LS(f,g,0,0,d,e,0,0,d,e);LG(a.cv);a.cv=c.cv;a.b5=c.b5;a.cI=c.cI;a.h4=c.h4;a.jW=c.jW;a.cJ=c.cJ;}
function ASP(b,c,d,e){var cBufferSize=c.length*$rt_globals.Uint8Array.BYTES_PER_ELEMENT;var cBuffer=$rt_globals.Gdx._malloc(cBufferSize);$rt_globals.Gdx.writeArrayToMemory(c,cBuffer);var pixmap=$rt_globals.Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);$rt_globals.Gdx._free(cBuffer);var pixels=$rt_globals.Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=$rt_globals.Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]
=height;b[3]=format;var bytesPerPixel=$rt_globals.Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=$rt_globals.Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
function ARk(b,c,d,e){var pixmap=$rt_globals.Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=$rt_globals.Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=$rt_globals.Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=$rt_globals.Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=$rt_globals.Gdx.HEAPU8.slice(startIndex,
endIndex);return newArray;}
function LG(b){var nativeObject=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_free(nativeObject);}
function LS(b,c,d,e,f,g,h,i,j,k){var nativeObjectSrc=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);var nativeObjectDst=$rt_globals.Gdx.wrapPointer(c,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);}
function QF(b,c){var nativeObject=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);}
var Hd=G(GR);
function AS3(a){var b,c;b=a.h;if(b<a.g){a.h=b+1|0;return a.j0(b);}c=new HL;c.c=1;c.d=1;H(c);}
function Ej(a,b){var c,d;if(a.dw()){c=new DU;c.c=1;c.d=1;H(c);}d=a.h;if(d<a.g){a.h=d+1|0;a.lp(d,b);return a;}c=new FF;c.c=1;c.d=1;H(c);}
function Fh(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.j0(b);c=new Y;d=a.g;e=new O;e.b=D(16);I(e,e.a,B(487));N(e,e.a,b,10);I(e,e.a,B(470));N(e,e.a,d,10);d=e.a;Bc(e,d,d+1|0);f=e.b;f.data[d]=41;g=new M;d=e.a;P();h=D(d);g.e=h;L(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function RR(a,b,c){var d,e,f,g,h;if(a.dw()){d=new DU;d.c=1;d.d=1;H(d);}if(b>=0&&b<a.g){a.lp(b,c);return a;}d=new Y;c=a.g;e=new O;e.b=D(16);I(e,e.a,B(487));N(e,e.a,b,10);I(e,e.a,B(470));N(e,e.a,c,10);c=e.a;Bc(e,c,c+1|0);f=e.b;f.data[c]=41;g=new M;c=e.a;P();h=D(c);g.e=h;L(f,0,h,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function ANK(a){return a.dw();}
function Gg(){var a=this;Hd.call(a);a.h_=0;a.gs=0;a.f3=null;}
function APw(a,b){return a.f3.data[b+a.gs|0];}
function ANX(a,b,c){a.f3.data[b+a.gs|0]=c;}
function AE9(a){return a.h_;}
var G4=G(Eo);
function Pi(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.pR(b);c=new Y;d=a.g;e=new O;e.b=D(16);I(e,e.a,B(487));N(e,e.a,b,10);I(e,e.a,B(470));N(e,e.a,d,10);d=e.a;Bc(e,d,d+1|0);f=e.b;f.data[d]=41;g=new M;d=e.a;P();h=D(d);g.e=h;L(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function L4(a,b,c){var d,e,f,g,h,i;if(a.dw()){d=new DU;d.c=1;d.d=1;H(d);}if(b>=0&&b<a.g){a.ky(b,c);return a;}d=new Y;e=a.g;f=new O;f.b=D(16);I(f,f.a,B(487));N(f,f.a,b,10);I(f,f.a,B(470));N(f,f.a,e,10);e=f.a;Bc(f,e,e+1|0);g=f.b;g.data[e]=41;h=new M;e=f.a;P();i=D(e);h.e=i;L(g,0,i,0,e);d.c=1;d.d=1;d.f=h;H(d);}
function AJi(a){return a.dw();}
function HP(){var a=this;G4.call(a);a.jm=0;a.h9=0;a.ht=null;}
function AQI(a,b){return a.ht.data[b+a.h9|0];}
function API(a,b,c){a.ht.data[b+a.h9|0]=c;}
function APY(a){return a.jm;}
var Z_=G();
function CV(){BC.call(this);this.eO=0;}
var A38=null;var A7G=null;var A7H=null;var A7I=null;var A7J=null;var A7K=null;var A7L=null;var A7M=null;function NS(){NS=W(CV);AHr();}
function AHr(){var b,c,d,e,f,g,h;b=new CV;NS();b.t=B(560);b.q=0;b.eO=9728;A38=b;c=new CV;c.t=B(561);c.q=1;c.eO=9729;A7G=c;d=new CV;d.t=B(562);d.q=2;d.eO=9987;A7H=d;e=new CV;e.t=B(563);e.q=3;e.eO=9984;A7I=e;f=new CV;f.t=B(564);f.q=4;f.eO=9985;A7J=f;g=new CV;g.t=B(565);g.q=5;g.eO=9986;A7K=g;h=new CV;h.t=B(566);h.q=6;h.eO=9987;A7L=h;A7M=R(CV,[b,c,d,e,f,g,h]);}
function E0(){BC.call(this);this.j8=0;}
var A7N=null;var A39=null;var A7O=null;var A7P=null;function Mh(){Mh=W(E0);AL2();}
function AL2(){var b,c,d;b=new E0;Mh();b.t=B(567);b.q=0;b.j8=33648;A7N=b;c=new E0;c.t=B(568);c.q=1;c.j8=33071;A39=c;d=new E0;d.t=B(569);d.q=2;d.j8=10497;A7O=d;A7P=R(E0,[b,c,d]);}
var Ww=G();
function AU7(a,b){b=a.lu(b);Bz();return b===null?null:b instanceof $rt_objcls()&&b instanceof Ds?b.O:b;}
function AH9(a){return a.AX();}
var DA=G(BL);
var A0p=null;var A0q=null;var A0r=null;function AI2(){A0p=new DA;A0q=new DA;A0r=new DA;}
var Dz=G(DA);
var A0s=null;var A0t=null;var A0u=null;function APd(){A0s=new Dz;A0t=new Dz;A0u=new Dz;}
var D1=G(Dz);
var A0v=null;var A0w=null;var A0x=null;function Uu(a,b){var c,d;c=U(a.u);d=b===null?0:U(b.u);return RV(c,d)?1:0;}
function APN(){A0v=new D1;A0w=new D1;A0x=new D1;}
function RV(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxScene);var returnedJSObj=jsObj.addActor(c);return returnedJSObj;}
function YV(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxScene);jsObj.removeActor(c);}
function AA1(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxScene);var returnedJSObj=jsObj.simulate(c);return returnedJSObj;}
function T_(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxScene);var returnedJSObj=jsObj.fetchResults(c);return returnedJSObj;}
var Hk=G(BL);
function AMY(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxBase);jsObj.release();}
var Da=G(Hk);
var A0y=null;var A0z=null;var A0A=null;function AFC(){A0y=new Da;A0z=new Da;A0A=new Da;}
var DB=G(Da);
var A0B=null;var A0C=null;var A0D=null;function ARu(){A0B=new DB;A0C=new DB;A0D=new DB;}
var D0=G(DB);
var A0E=null;var A0F=null;var A0G=null;function AEZ(){A0E=new D0;A0F=new D0;A0G=new D0;}
function HH(){var a=this;Hd.call(a);a.g9=null;a.oj=0;a.ha=0;}
function ANs(a){return a.oj;}
var M$=G(HH);
function AKL(a,b){var c;c=a.g9.W.data;b=a.ha+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;}
function AE8(a,b,c){var d;d=a.g9.W.data;b=a.ha+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;}
var P3=G(HH);
function ASE(a,b){var c;c=a.g9.W.data;b=a.ha+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;}
function AGM(a,b,c){var d;d=a.g9.W.data;b=a.ha+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;}
function G7(){var a=this;G4.call(a);a.fN=null;a.pM=0;a.gR=0;}
function AP$(a){return a.pM;}
function AQ6(a){return a.fN.W.data;}
var M0=G(G7);
function ANz(a,b){var c;c=a.fN.W.data;b=a.gR+(b*4|0)|0;return $rt_intBitsToFloat((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);}
function AQ3(a,b,c){var d,e;d=($rt_globals.isNaN(c)?1:0)?2143289344:$rt_floatToRawIntBits(c);e=a.fN.W.data;b=a.gR+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;}
var OX=G(G7);
function AFh(a,b){var c;c=a.fN.W.data;b=a.gR+(b*4|0)|0;return $rt_intBitsToFloat(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);}
function ANp(a,b,c){var d,e;d=($rt_globals.isNaN(c)?1:0)?2143289344:$rt_floatToRawIntBits(c);e=a.fN.W.data;b=a.gR+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;}
var Gf=G(BF);
var DU=G(Gf);
var N0=G(0);
function LB(){var a=this;C.call(a);a.pJ=null;a.i5=null;a.d9=0;a.ka=null;a.vU=0.0;a.qG=0.0;a.gQ=0;a.uu=null;a.o3=null;a.lT=null;a.o8=0;a.t_=0;a.rG=0;a.rY=0;a.qe=0;a.gW=null;a.it=null;a.wK=0;a.z0=null;a.BU=0.0;a.kI=0;a.nI=0;a.pC=0;}
var A7Q=null;function ACc(){ACc=W(LB);AOJ();}
function A7R(a,b){var c=new LB();NJ(c,a,b);return c;}
function NJ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;ACc();a.d9=0;a.ka=null;a.vU=0.0;a.qG=0.0;a.gQ=0;a.uu=Fp();a.o3=Fp();a.lT=Fp();a.o8=0;a.t_=770;a.rG=771;a.rY=770;a.qe=771;a.it=null;d=new Bn;Ec();d.b2=1.0;d.b1=1.0;d.b0=1.0;d.bZ=1.0;C$(d);a.z0=d;a.BU=A4h;a.kI=0;a.nI=0;a.pC=0;if(b>8191){c=new Be;d=new O;d.b=D(16);I(d,d.a,B(570));N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}if(A5K===null)i=A7Q;else{Ky();i=A7l;}j=new IP;k=b*4|0;l=b*6|0;f=Bg(Eq,3);h=f.data;d=new Eq;d.hy=1;d.dq
=2;d.dM=5126;d.dT=0;d.dP=B(503);d.hV=0;d.hL=En(1);h[0]=d;d=new Eq;d.hy=4;d.dq=4;d.dM=5121;d.dT=1;d.dP=B(504);d.hV=0;d.hL=En(4);h[1]=d;d=new Eq;d.hy=16;d.dq=2;d.dM=5126;d.dT=0;d.dP=B(505);d.hV=0;d.hL=En(16);h[2]=d;LT(j,i,0,k,l,ALq(f));a.pJ=j;i=a.o3;m=A4L.cD.width;n=A4L.cD.height;ZS(i,0.0,0.0+m,0.0,0.0+n,0.0,1.0);a.i5=Ce(b*20|0);h=Or(l);f=h.data;o=0;p=0;while(p<l){f[p]=o;f[p+1|0]=(o+1|0)<<16>>16;b=p+2|0;g=(o+2|0)<<16>>16;f[b]=g;f[p+3|0]=g;f[p+4|0]=(o+3|0)<<16>>16;f[p+5|0]=o;p=p+6|0;o=(o+4|0)<<16>>16;}a.pJ.cX.oM(h,
0,f.length);if(c!==null)a.gW=c;else{a.gW=AA5();a.wK=1;}}
function AA5(){var b,c,d,e,f,g,h;ACc();b=AKO(B(571),B(572));if(b.eu)return b;c=new Be;d=new O;d.b=D(16);I(d,d.a,B(573));if(!b.eu)e=b.d6;else{e=A4N.ij(b.dg);b.d6=e;}I(d,d.a,e);b=new M;f=d.b;g=d.a;P();h=D(g);b.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=b;H(c);}
function W3(a){var b,c;if(a.gQ){b=new BH;b.c=1;b.d=1;b.f=B(574);H(b);}a.kI=0;A37.hF(0);c=a.it;if(c!==null)c.mr();else{c=a.gW;b=A4N;if(c.bh){Cy(c,c.ch,c.ck);c.bh=0;}b.lN(c.dg);}VM(a);a.gQ=1;}
function ACx(a){var b,c;if(!a.gQ){b=new BH;b.c=1;b.d=1;b.f=B(575);H(b);}if(a.d9>0)ID(a);a.ka=null;a.gQ=0;c=A37;c.hF(1);if(a.o8?0:1)c.g5(3042);}
function Yf(a,b,c,d,e){var f,g;if(!a.gQ){b=new BH;b.c=1;b.d=1;b.f=B(576);H(b);}f=a.i5.data.length;if(b!==a.ka){ID(a);a.ka=b;b=b.d2;a.vU=1.0/b.d5;a.qG=1.0/b.dY;g=f;}else{g=f-a.d9|0;if(!g){ID(a);g=f;}}if(g>=e)g=e;L(c,d,a.i5,a.d9,g);a.d9=a.d9+g|0;e=e-g|0;while(e>0){d=d+g|0;ID(a);g=f>=e?e:f;L(c,d,a.i5,0,g);a.d9=a.d9+g|0;e=e-g|0;}}
function ID(a){var b,c,d,e,f,g;b=a.d9;if(!b)return;a.kI=a.kI+1|0;a.nI=a.nI+1|0;c=b/20|0;if(c>a.pC)a.pC=c;b=c*6|0;d=a.ka;A37.h6(d.dX,d.hv);d=a.pJ;e=a.i5;f=a.d9;d.ev.hC(e,0,f);g=d.cX.oY(1);BU(g,0);Cz(g,b);if(a.o8)A37.g5(3042);else{A37.jb(3042);c=a.t_;if(c!=(-1))A37.o9(c,a.rG,a.rY,a.qe);}g=a.it;if(g===null)g=a.gW;IS(d,g,4,0,b,d.iT);a.d9=0;}
function VM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;PZ(Ig(a.lT,a.o3.cH),a.uu);b=a.it;if(b!==null){b.Kr(B(577),a.lT);a.it.Hy(B(507),0);}else{b=a.gW;c=a.lT;SA();d=IO(b,B(577),A7m);e=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}f=c.cH;b=e.dm;g=e.dV;if(!g)b=!b.M?null:b.K;else{h=b.I;i=U(Bh(Bf(T(g),F(2135587861, 2654435769)),b.N));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==g)break;i=(i+1|0)&b.L;}}b=i<0?null:b.J.data[i];}b=b;if(!d)b=!b.M?null:b.K;else{h=b.I;j=U(Bh(Bf(T(d),F(2135587861, 2654435769)),b.N));b:{while
(true){i=h.data[j];if(!i){j= -(j+1|0)|0;break b;}if(i==d)break;j=(j+1|0)&b.L;}}b=j<0?null:b.J.data[j];}Bz();k=b===null?null:b.O;b=e.m;e="uniformMatrix4fv";c=!!0;if(f===null)l=null;else{f=f.data;m=f.length;l=new $rt_globals.Array(m);j=0;while(j<m){n=f[j];j;l[j]=n;j=j+1|0;}}b[e](k,c,l);b=a.gW;c=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}c.kV(IO(b,B(507),A7m),0);}}
function AOJ(){Ky();A7Q=A7k;}
var DV=G(BL);
var A0H=null;var A0I=null;var A0J=null;function Zk(a){return Tc(U(a.u));}
function Rf(a,b){Ho(U(a.u),b);}
function XA(a){return AB2(U(a.u));}
function R8(a,b){GN(U(a.u),b);}
function AB3(a){return Zn(U(a.u));}
function Nh(a,b){Hf(U(a.u),b);}
function AHt(){A0H=new DV;A0I=new DV;A0J=new DV;}
function Wk(b,c,d){var jsObj=new $rt_globals.physx.PxVec3(b,c,d);return $rt_globals.physx.getPointer(jsObj);}
function Tc(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);return jsObj.get_x();}
function Ho(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);jsObj.set_x(c);}
function AB2(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);return jsObj.get_y();}
function GN(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);jsObj.set_y(c);}
function Zn(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);return jsObj.get_z();}
function Hf(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);jsObj.set_z(c);}
var Eg=G(BL);
var A0K=null;var A0L=null;var A0M=null;function AXW(a,b,c,d){var e=new Eg();WQ(e,a,b,c,d);return e;}
function WQ(a,b,c,d,e){var f;f=T(Y8(b,c,d,e));a.b_=1;a.u=f;}
function AI8(){A0K=new Eg;A0L=new Eg;A0M=new Eg;}
function Y8(b,c,d,e){var jsObj=new $rt_globals.physx.PxFilterData(b,c,d,e);return $rt_globals.physx.getPointer(jsObj);}
var Ev=G(BL);
var A7S=null;var A7T=null;var A7U=null;function T8(){A7S=new Ev;A7T=new Ev;A7U=new Ev;}
var Fk=G(Ev);
var A7V=null;var A7W=null;var A7X=null;function AVV(a,b,c){var d=new Fk();ACb(d,a,b,c);return d;}
function ACb(a,b,c,d){var e;e=T(NU(b,c,d));a.b_=1;a.u=e;}
function AB$(){A7V=new Fk;A7W=new Fk;A7X=new Fk;}
function NU(b,c,d){var jsObj=new $rt_globals.physx.PxBoxGeometry(b,c,d);return $rt_globals.physx.getPointer(jsObj);}
var Dx=G(BC);
var A6$=null;var A36=null;var A7Y=null;var A7Z=null;var A7E=null;var A70=null;function IT(){IT=W(Dx);AJ2();}
function AJ2(){var b,c,d,e,f;b=new Dx;IT();b.t=B(578);b.q=0;A6$=b;c=new Dx;c.t=B(579);c.q=1;A36=c;d=new Dx;d.t=B(580);d.q=2;A7Y=d;e=new Dx;e.t=B(581);e.q=3;A7Z=e;f=new Dx;f.t=B(582);f.q=4;A7E=f;A70=R(Dx,[b,c,d,e,f]);}
var D8=G(BC);
var A7k=null;var A71=null;var A72=null;var A7l=null;var A73=null;function Ky(){Ky=W(D8);AT1();}
function AT1(){var b,c,d,e;b=new D8;Ky();b.t=B(583);b.q=0;A7k=b;c=new D8;c.t=B(584);c.q=1;A71=c;d=new D8;d.t=B(585);d.q=2;A72=d;e=new D8;e.t=B(586);e.q=3;A7l=e;A73=R(D8,[b,c,d,e]);}
function IP(){var a=this;C.call(a);a.ev=null;a.cX=null;a.iT=0;a.jK=0;a.jh=null;a.lU=0;a.AW=null;}
var A74=null;function A75(a,b,c,d,e){var f=new IP();LT(f,a,b,c,d,e);return f;}
function LT(a,b,c,d,e,f){var g,h,i,j,k;a:{b:{a.iT=1;a.lU=0;g=new Bl;CD();a.AW=g;AXL();switch(A76.data[b.q]){case 1:a.ev=AXc(c,d,f);b=new IH;b.fQ=1;b.ja=0;b.rQ=1;if(!AZT){h=Or(e);e=h.data.length;f=new LP;i=0+e|0;CI(f);f.w=(-1);f.z=e;f.g=e;f.h=0;f.g=i;f.lG=0;f.mh=0;f.kY=h;}else{d=e*2|0;if(d<0){b=new Be;f=new O;f.b=D(16);CM(f,f.a,CZ(B(486)));N(f,f.a,d,10);g=new M;h=f.b;d=f.a;j=D(d);g.e=j;L(h,0,j,0,d);b.c=1;b.d=1;b.f=g;H(b);}f=new Cp;h=BE(d);f.w=(-1);f.z=d;f.g=d;B7();f.bg=A4M;f.bn=0;f.W=h;f.h=0;f.g=d;f.b$=1;f.bB
=0;f.bg=C8();f=L8(f);}b.e7=f;f.g=f.h;f.h=0;f.w=(-1);f=A4N;g=f.m.createBuffer();e=f.du;f.du=e+1|0;Cc(f.ea,e,Cg(g));b.m6=e;b.ll=!c?35048:35044;a.cX=b;a.jK=0;break a;case 2:break;case 3:a.ev=AW7(c,d,f);a.cX=AU2(c,e);a.jK=0;break a;case 4:break b;default:break b;}a.ev=AYE(c,d,f);a.cX=AU2(c,e);a.jK=0;break a;}b=new Na;ZX(b,0,d,f);a.ev=b;b=new Od;b.fQ=1;b.ja=0;b.rQ=1;if(!AZT){h=Or(e);d=h.data.length;f=new LP;k=0+d|0;ACB(f,d);f.h=0;f.g=k;f.lG=0;f.mh=0;f.kY=h;}else{c=e*2|0;if(c<0){b=new Be;f=new O;f.b=D(16);DD(f,f.a,
B(486));EK(f,c);AEK(b,Cm(f));H(b);}g=new Cp;h=BE(c);CI(g);g.w=(-1);g.z=c;g.g=c;B7();g.bg=A4M;g.bn=0;g.W=h;g.h=0;g.g=c;g.b$=1;g.bB=0;Rg(g,C8());f=L8(g);}b.e7=f;ADv(f);b.m6=XM(A4N);b.ll=35044;a.cX=b;a.jK=1;}Yl(A3$,a);}
function IS(a,b,c,d,e,f){var g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.ev.l2(b,g);g=a.jh;if(g!==null&&g.vO()>0)a.jh.l2(b,h);if(a.cX.i4()>0)a.cX.mr();}if(a.jK){if(a.cX.i4()<=0)A4N.kR(c,d,e);else{g=a.cX.oY(0);i=g.h;BU(g,d);A4N.n1(c,e,5123,g);BU(g,i);}}else{j=0;if(a.lU)j=a.jh.vO();if(a.cX.i4()<=0){if(a.lU&&j>0)A5K.vs(c,d,e,j);else A4N.kR(c,d,e);}else{if((e+d|0)>a.cX.m7()){b=new Ba;g=new O;g.b=D(16);I(g,g.a,B(587));N(g,g.a,e,10);I(g,g.a,B(588));N(g,g.a,d,10);I(g,g.a,B(589));c=a.cX.m7();N(g,g.a,c,10);I(g,g.a,
B(590));h=new M;k=g.b;d=g.a;P();l=D(d);h.e=l;L(k,0,l,0,d);b.c=1;b.d=1;b.f=h;H(b);}if(a.lU&&j>0)A5K.t0(c,e,5123,d*2|0,j);else A4N.oX(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.ev.lJ(b,g);g=a.jh;if(g!==null&&g.vO()>0)a.jh.lJ(b,h);if(a.cX.i4()>0)a.cX.t$();}}
function Yl(b,c){var d,e,f,g,h;d=A74;if(b===null){d=d.cq.data[0];while(d!==null&&d.cB!==null){d=d.cQ;}}else{e=b;if(!e.$id$){f=$rt_nextId();e.$id$=f;}g=b.$id$;h=d.cq.data;d=h[g&(h.length-1|0)];while(d!==null){if(d.el==g){f=d.cB;if(b!==f&&!(b!==f?0:1)?0:1)break;}d=d.cQ;}}d=d===null?null:d.dL;if(d===null){d=new BN;d.bf=1;d.r=Bg(C,16);}Cj(d,c);Gx(A74,b,d);}
function AEo(){var b,c,d,e;b=new Gl;c=HX(16);b.eA=0;d=Bg(EJ,c);e=d.data;b.cq=d;b.ik=0.75;b.fj=e.length*0.75|0;A74=b;}
function GZ(){C.call(this);this.rZ=null;}
function ZL(){var a=this;GZ.call(a);a.jZ=null;a.k5=null;a.gP=0;a.kw=0;a.oz=0;a.uv=0;}
function AXJ(a,b){var c=new ZL();AJz(c,a,b);return c;}
function AJz(a,b,c){a.rZ=new C;a.uv=(-1);if(c<0){b=new Be;b.c=1;b.d=1;H(b);}a.jZ=b;if(64>c)c=64;a.k5=D(c);}
function YK(a){var b;b=a.jZ;if(b!==null){b.o2.mo();a.jZ=null;return;}b=new EQ;b.c=1;b.d=1;H(b);}
function H6(a){var b,c,d,e,f,g;if(a.jZ===null){b=new EQ;b.c=1;b.d=1;H(b);}if(a.oz&&a.gP>=a.kw)return null;b=new O;b.b=D(16);a:{while(true){if(a.gP>=a.kw&&!PT(a,0))break a;c=a.k5.data;d=a.gP;e=d+1|0;a.gP=e;d=c[d];if(d==10)break;if(d==13){if(e>=a.kw&&!PT(a,0))break a;c=a.k5.data;e=a.gP;if(c[e]!=10)break a;a.gP=e+1|0;break a;}e=b.a;Bc(b,e,e+1|0);b.b.data[e]=d;}}f=new M;c=b.b;d=b.a;P();g=D(d);f.e=g;L(c,0,g,0,d);return f;}
function PT(a,b){var c,d;if(a.oz)return 0;a:{while(true){c=a.k5;d=c.data.length;if(b>=d)break a;d=Xv(a.jZ,c,b,d-b|0);if(d==(-1)){a.oz=1;break a;}if(!d)break;b=b+d|0;}}a.kw=b;a.gP=0;a.uv=(-1);return 1;}
function Ug(){var a=this;GZ.call(a);a.o2=null;a.px=null;a.CJ=null;a.eN=null;a.x6=null;a.gq=null;a.lZ=0;a.pr=0;}
function AV0(a){var b=new Ug();AFr(b,a);return b;}
function A77(a,b){var c=new Ug();ABk(c,a,b);return c;}
function AFr(a,b){var c,d;Ct();c=A5l;d=new Qa;AEu(d,c,0.3333333432674408,0.5);d.q2=BE(512);d.tL=D(512);DS();c=A5r;if(c!==null){d.iQ=c;d.o_=c;ABk(a,b,d);return;}c=new Be;c.c=1;c.d=1;c.f=B(591);H(c);}
function ABk(a,b,c){var d,e,f,g,h,i,j;a.rZ=new C;d=BE(8192);e=d.data;a.CJ=d;f=e.length;g=new Cp;h=0+f|0;g.w=(-1);g.z=f;g.g=f;B7();g.bg=A4M;g.bn=0;g.W=d;g.h=0;g.g=h;g.b$=0;g.bB=0;a.eN=g;d=D(1024);e=d.data;a.x6=d;i=e.length;g=new IC;j=0+i|0;g.w=(-1);g.z=i;g.g=i;g.h=0;g.g=j;g.gC=0;g.id=0;g.gi=d;a.gq=g;a.o2=b;a.px=c;BU(g,j);b=a.eN;BU(b,b.g);}
function Xv(a,b,c,d){var e,f,g,h;if(a.pr){e=a.gq;if(!(e.h>=e.g?0:1))return (-1);}f=0;a:{while(d>0){e=a.gq;g=e.g-e.h|0;if(d<g)g=d;M1(e,b,c+f|0,g);d=d-g|0;f=f+g|0;e=a.gq;h=e.h>=e.g?0:1;if(!h&&!ADN(a))break a;}}return f;}
function ADN(a){var b,c,d;if(a.pr)return 0;TS(a.gq);a:{while(true){b=a.eN;c=b.h>=b.g?0:1;if(!c&&!ABp(a))break a;if(!((Wn(a.px,a.eN,a.gq,a.lZ)).bj!=1?0:1))continue;else break;}}b=a.eN;c=b.h>=b.g?0:1;if(!c&&a.lZ){b=a.px;d=b.k2;if(d!=3&&d!=2){b=new BH;b.c=1;b.d=1;H(b);}b.k2=3;if(AZZ.bj?0:1)a.pr=1;}b=a.gq;b.g=b.h;b.h=0;b.w=(-1);return 1;}
function ABp(a){var b,c,d;if(a.lZ)return 0;Zb(a.eN);a:{while(true){b=a.eN;c=b.h;d=b.g;if(!(c>=d?0:1))break a;c=a.o2.sE(b.W,c,d-c|0);if(c==(-1)){a.lZ=1;break a;}b=a.eN;BU(b,b.h+c|0);if(!c)break;}}b=a.eN;b.g=b.h;b.h=0;b.w=(-1);return 1;}
function SP(){var a=this;C.call(a);a.dR=null;a.gc=null;a.pk=0;a.cM=0;}
function AC6(a,b){var c=new SP();ATz(c,a,b);return c;}
function ATz(a,b,c){if(b!==null){a.dR=b;a.gc=c;a.pk=0;a.cM=0;return;}b=new CB;b.c=1;b.d=1;H(b);}
function SE(a){var b,c,d,e,f;if(a.gc===null){b=new CB;b.c=1;b.d=1;H(b);}a:{b:{c=a.dR.e.data.length;d=a.cM;if(d<c){if(a.pk)return 1;while(true){if(d>=c)break b;b=a.gc;e=a.dR;if(d<0)break a;f=e.e.data;if(d>=f.length)break a;if(D5(b,f[d],0)==(-1))return 1;d=d+1|0;}}}return 0;}b=new X;b.c=1;b.d=1;H(b);}
function BG(a){var b,c,d,e,f,g,h,i;b=a.gc;if(b===null){b=new CB;b.c=1;b.d=1;H(b);}c=a.cM;d=a.dR.e.data;e=d.length;f=Bm(c,e);if(f<0){if(a.pk){if(c>=0&&f<0){if(D5(b,d[c],0)>=0){b=a.dR;c=a.cM;a.cM=c+1|0;if(c>=0){d=b.e.data;if(c<d.length){c=d[c];b=new M;d=D(1);g=d.data;g[0]=c;c=g.length;g=D(c);b.e=g;L(d,0,g,0,c);return b;}}b=new X;b.c=1;b.d=1;H(b);}a.cM=a.cM+1|0;while(true){f=a.cM;if(f>=e){b=a.dR;g=b.e;h=g.data.length;f=Bm(c,h);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A32;else if(!(!c&&h==h)){b=new M;f=h-c|0;d
=D(f);b.e=d;L(g,c,d,0,f);}return b;}b=a.gc;i=a.dR;if(f<0)break;d=i.e.data;if(f>=d.length)break;if(D5(b,d[f],0)>=0){b=a.dR;f=a.cM;h=Bm(c,f);if(h>0){b=new Y;b.c=1;b.d=1;H(b);}if(!h)i=A32;else if(!c&&f==b.e.data.length)i=b;else{i=new M;d=b.e;f=f-c|0;g=D(f);i.e=g;L(d,c,g,0,f);}return i;}a.cM=a.cM+1|0;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}a:{while(true){f=Bm(c,e);if(f>=0)break a;b=a.gc;i=a.dR;if(c<0)break;d=i.e.data;if(c>=d.length)break;if(D5(b,d[c],0)<0)break a;c=c+1|0;}b=new X;CQ(b);H(b);}a.cM=c;if
(f<0){a.cM=c+1|0;while(true){f=a.cM;if(f>=e)break;if(D5(a.gc,CO(a.dR,f),0)>=0)return Fv(a.dR,c,a.cM);a.cM=a.cM+1|0;}return Hg(a.dR,c);}}b=new Jy;b.c=1;b.d=1;H(b);}
var OT=G();
var A78=null;function SB(b){var $$je;a:{if(b!==null)try{YK(b);break a;}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){}else{throw $$e;}}}}
function AB1(){A78=BE(0);}
function Rk(){var a=this;C.call(a);a.fL=null;a.r1=0;a.p3=null;a.i3=null;a.vA=0;a.xu=0.0;a.xt=0.0;a.l1=null;a.x3=0.0;a.d_=null;a.fZ=null;a.ii=null;a.mw=null;}
var A79=null;function AXk(){AXk=W(Rk);ANV();}
function AYk(a,b){var c=new Rk();ADO(c,a,b);return c;}
function ADO(a,b,c){var d,e,f,g,h,i;AXk();d=new BN;d.bf=1;d.r=Bg(C,16);a.p3=d;d=new BN;d.bf=1;d.r=Bg(C,16);a.i3=d;d=new Bn;Ec();d.b2=1.0;d.b1=1.0;d.b0=1.0;d.bZ=1.0;C$(d);a.l1=d;a.fL=b;a.r1=c;e=b.fw.l;if(!e){b=new Be;b.c=1;b.d=1;b.f=B(592);H(b);}a:{a.d_=Bg($rt_arraycls($rt_floatcls()),e);a.fZ=Z(e);if(e>1){f=Bg(Dq,e);g=f.data;a.ii=f;h=0;i=g.length;while(true){if(h>=i)break a;b=new Dq;b.dJ=1;b.bL=Z(16);g[h]=b;h=h+1|0;}}}a.mw=Z(e);}
function Oi(a,b){var c,d,e,f,g,h,i;c=a.fL.fw;d=0;e=a.d_.data.length;while(d<e){f=a.fZ.data;if(f[d]>0){g=a.d_.data[d];if(d>=c.l){h=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,d,10);I(b,b.a,B(36));i=c.l;N(b,b.a,i,10);c=new M;f=b.b;d=b.a;P();g=D(d);c.e=g;L(f,0,g,0,d);h.c=1;h.d=1;h.f=c;H(h);}Yf(b,c.r.data[d].de,g,0,f[d]);}d=d+1|0;}}
function Qo(a){var b,c,d,e,f,g,h;a.xu=0.0;a.xt=0.0;Z1(a.i3,1);b=a.i3;c=b.r;d=0;e=b.l;f=null;if(d>e){b=new Be;b.c=1;b.d=1;H(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.l=0;b=a.p3;c=b.r;d=0;e=b.l;f=null;if(d>e){b=new Be;b.c=1;b.d=1;H(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.l=0;e=0;c=a.fZ.data;h=c.length;while(e<h){g=a.ii;if(g!==null)g.data[e].bd=0;c[e]=0;e=e+1|0;}}
function TY(a,b){var c,d,e,f,g,h,i,j,k,l,m;a:{if(a.d_.data.length==1)Q_(a,0,b.cY);else{c=a.mw.data;d=0;e=c.length;if(d>e){b=new Be;b.c=1;b.d=1;H(b);}while(d<e){f=d+1|0;c[d]=0;d=f;}g=0;b=b.cE;d=b.l;while(true){f=Bm(g,d);if(f>=0)break;if(f>=0){h=new Y;i=new O;i.b=D(16);I(i,i.a,B(35));N(i,i.a,g,10);I(i,i.a,B(36));g=b.l;N(i,i.a,g,10);b=new M;j=i.b;d=i.a;P();c=D(d);b.e=c;L(j,0,c,0,d);h.c=1;h.d=1;h.f=b;H(h);}i=b.r.data[g].bF;k=i.r;f=0;l=i.l;while(f<l){m=k.data[f].h0;c[m]=c[m]+1|0;f=f+1|0;}g=g+1|0;}g=0;while(true)
{if(g>=e)break a;Q_(a,g,c[g]);g=g+1|0;}}}}
function Q_(a,b,c){var d,e,f,g;d=a.ii;if(d!==null){e=d.data;if(c>e[b].bL.data.length)Z$(e[b],c-e[b].bd|0);}d=a.fZ.data;f=d[b]+(c*20|0)|0;e=a.d_.data;g=e[b];if(g===null)e[b]=Ce(f);else if(g.data.length<f){e=Ce(f);L(g,0,e,0,d[b]);a.d_.data[b]=e;}}
function U$(a,b){var c,d,e,f,g;c=Bg($rt_arraycls($rt_floatcls()),b);d=a.d_;L(d,0,c,0,d.data.length);a.d_=c;e=Z(b);c=a.fZ;L(c,0,e,0,c.data.length);a.fZ=e;d=Bg(Dq,b);f=0;e=a.ii;if(e!==null){f=e.data.length;L(e,0,d,0,f);}e=d.data;while(f<b){g=new Dq;g.dJ=1;g.bL=Z(16);e[f]=g;f=f+1|0;}a.ii=d;a.mw=Z(b);}
function PV(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;e=b.cE.l;if(!e)return;f=a.d_.data.length;g=a.fL.fw.l;if(f<g)U$(a,g);Cj(a.p3,b);TY(a,b);h=b.b7;i=0;j=0;k=0;l=0.0;f=0;while(f<e){m=b.cE;if(f>=m.l){n=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,f,10);I(b,b.a,B(36));e=m.l;N(b,b.a,e,10);m=new M;o=b.b;f=b.a;P();p=D(f);m.e=p;L(o,0,p,0,f);n.c=1;n.d=1;n.f=m;H(n);}m=m.r.data[f];n=m.bF;o=n.r;p=m.b9.bX;q=c+m.ei;r=d+m.lc;g=0;s=n.l;while(g<s){t=k+1|0;if(k==j){i=i+1|0;if(i>=h.bd){m=new Y;b=new O;b.b=D(16);I(b,
b.a,B(35));N(b,b.a,i,10);I(b,b.a,B(36));e=h.bd;N(b,b.a,e,10);n=new M;o=b.b;f=b.a;P();p=D(f);n.e=p;L(o,0,p,0,f);m.c=1;m.d=1;m.f=n;H(m);}l=$rt_intBitsToFloat(h.bL.data[i]&(-16777217));i=i+1|0;j=Bm(i,h.bd);if(j>=0)j=(-1);else{if(j>=0){m=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,i,10);I(b,b.a,B(36));e=h.bd;N(b,b.a,e,10);n=new M;o=b.b;f=b.a;P();p=D(f);n.e=p;L(o,0,p,0,f);m.c=1;m.d=1;m.f=n;H(m);}j=h.bL.data[i];}}u=p.data;v=o.data;q=q+u[g];ABN(a,v[g],q,r,l);g=g+1|0;k=t;}f=f+1|0;}Ec();a.x3=A4h;}
function ABN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.fL.iI;g=f.e2;h=f.vN;i=c+b.dx*g;j=d+b.ie*h;k=b.cO*g;l=b.dD*h;m=b.qf;n=b.q5;o=b.mk;p=b.m2;if(a.r1){i=i+Ci(i)*0.5|0;j=j+Ci(j)*0.5|0;k=k+Ci(k)*0.5|0;l=l+Ci(l)*0.5|0;}q=i+k;r=j+l;s=b.h0;t=a.fZ.data;u=t[s];t[s]=t[s]+20|0;t=a.ii;if(t!==null){b=t.data[s];v=a.vA;a.vA=v+1|0;Ff(b,v);}t=a.d_.data[s].data;v=u+1|0;t[u]=i;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=o;w=v+1|0;t[v]=i;s=w+1|0;t[w]=r;v=s+1|0;t[s]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=p;w
=v+1|0;t[v]=q;v=w+1|0;t[w]=r;w=v+1|0;t[v]=e;v=w+1|0;t[w]=n;w=v+1|0;t[v]=p;v=w+1|0;t[w]=q;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=n;t[w]=o;}
function Vd(a,b,c,d){PV(a,b,c,d+a.fL.iI.i9);}
function ANV(){var b;b=new Bn;Ec();b.b2=1.0;b.b1=1.0;b.b0=1.0;b.bZ=1.0;C$(b);A79=b;}
var CW=G(BC);
var A7$=null;var A7_=null;var A8a=null;var A8b=null;var A8c=null;var A8d=null;var A4Q=null;var A8e=null;function GV(){GV=W(CW);AE$();}
function HW(b){var c,d,e,f,g,h;GV();if(b==1)return A7$;if(b==2)return A8a;if(b==5)return A8b;if(b==6)return A8c;if(b==3)return A8d;if(b==4)return A4Q;c=new Ba;d=new O;d.b=D(16);I(d,d.a,B(593));N(d,d.a,b,10);e=new M;f=d.b;g=d.a;P();h=D(g);e.e=h;L(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function AE$(){var b,c,d,e,f,g,h;b=new CW;GV();b.t=B(223);b.q=0;A7$=b;c=new CW;c.t=B(594);c.q=1;A7_=c;d=new CW;d.t=B(595);d.q=2;A8a=d;e=new CW;e.t=B(596);e.q=3;A8b=e;f=new CW;f.t=B(597);f.q=4;A8c=f;g=new CW;g.t=B(598);g.q=5;A8d=g;h=new CW;h.t=B(599);h.q=6;A4Q=h;A8e=R(CW,[b,c,d,e,f,g,h]);}
var L3=G(Hk);
function HC(){L3.call(this);this.pw=null;}
function FD(a){var b,c;b=T(ATf(U(a.u)));if(Cn(b,B2))return null;if(a.pw===null)a.pw=new LJ;c=a.pw;if(!c.b_)c.u=b;return c;}
function ADD(a,b){var c,d;c=U(a.u);d=b===null?0:U(b.u);return AAV(c,d)?1:0;}
function ATf(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidActor);var returnedJSObj=jsObj.getGlobalPose();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AAV(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidActor);var returnedJSObj=jsObj.attachShape(c);return returnedJSObj;}
var LX=G(HC);
function ARR(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidBody);jsObj.setMass(c);}
var Rx=G(LX);
function OD(a,b){var c,d;c=U(a.u);d=b===null?0:U(b.u);Rv(c,d);}
function Rv(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidDynamic);jsObj.setLinearVelocity(c);}
function AKu(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidDynamic);jsObj.putToSleep();}
function GF(){var a=this;C.call(a);a.df=null;a.bq=null;a.ew=null;a.jU=null;a.sV=null;a.sK=null;a.n8=null;a.en=null;a.gt=0;}
var A8f=null;var A8g=null;var A8h=null;var A8i=null;function APV(){APV=W(GF);AKA();}
function AV8(){var a=new GF();Vx(a);return a;}
function Vx(a){var b;APV();a.df=Ce(24);b=new Bl;CD();a.bq=b;b=new Dw;HE();b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=1.0;a.ew=b;b=new By;b.di=1.0;b.dh=1.0;a.jU=b;b=new Bn;Ec();a.sV=b;a.sK=null;a.n8=new By;a.gt=0;a.en=new P2;}
function XN(a,b,c,d,e){var f,g;f=a.sV;f.b2=b;f.b1=c;f.b0=d;f.bZ=e;C$(f);b=$rt_intBitsToFloat(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));g=a.df.data;g[3]=b;g[9]=b;g[15]=b;g[21]=b;}
function Xt(a,b){var c,d,e,f,g;c=a.ew;d=b.cc;e=b.ca;f=b.cb;g=b.cr;c.cc=d;c.ca=e;c.cb=f;c.cr=g;a.gt=0;}
function ADl(a,b,c,d){var e;e=a.bq;e.k=b;e.j=c;e.i=d;a.gt=0;}
function WT(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.sK;if(b===null){c=0.0;d=c;}else{d= -b.di;c= -b.dh;}e=a.df.data;f=e[0]+d;b=a.jU;g=f*b.di;h=(e[1]+c)*b.dh;f=e[2];b=a.ew;i=b.cr;j=i*g;k=b.ca;j=j+k*f;l=b.cb;e[0]=j-l*h;j=i*h+l*g;m=b.cc;e[1]=j-m*f;e[2]=i*f+m*h-k*g;i= -m*g-k*h-l*f;Fb(b);e=a.df.data;f=e[0];j=e[1];k=e[2];b=a.ew;l=b.cc;m=i*l;n=b.cr;m=m+f*n;g=b.cb;m=m+j*g;h=b.ca;e[0]=m-k*h;e[1]=i*h+j*n+k*l-f*g;e[2]=i*g+k*n+f*h-j*l;Fb(b);e=a.df.data;f=e[0];b=a.bq;e[0]=f+b.k-d;e[1]=e[1]+b.j-c;e[2]=e[2]+b.i;f=e[6]+d;b=a.jU;f
=f*b.di;i=(e[7]+c)*b.dh;j=e[8];b=a.ew;k=b.cr;l=k*f;m=b.ca;l=l+m*j;n=b.cb;e[6]=l-n*i;l=k*i+n*f;g=b.cc;e[7]=l-g*j;e[8]=k*j+g*i-m*f;f= -g*f-m*i-n*j;Fb(b);e=a.df.data;i=e[6];j=e[7];k=e[8];b=a.ew;l=b.cc;m=f*l;n=b.cr;m=m+i*n;g=b.cb;m=m+j*g;h=b.ca;e[6]=m-k*h;e[7]=f*h+j*n+k*l-i*g;e[8]=f*g+k*n+i*h-j*l;Fb(b);e=a.df.data;f=e[6];b=a.bq;e[6]=f+b.k-d;e[7]=e[7]+b.j-c;e[8]=e[8]+b.i;f=e[12]+d;b=a.jU;f=f*b.di;i=(e[13]+c)*b.dh;j=e[14];b=a.ew;k=b.cr;l=k*f;m=b.ca;l=l+m*j;n=b.cb;e[12]=l-n*i;l=k*i+n*f;g=b.cc;e[13]=l-g*j;e[14]=k*j
+g*i-m*f;f= -g*f-m*i-n*j;Fb(b);e=a.df.data;i=e[12];j=e[13];k=e[14];b=a.ew;l=b.cc;m=f*l;n=b.cr;m=m+i*n;g=b.cb;m=m+j*g;h=b.ca;e[12]=m-k*h;e[13]=f*h+j*n+k*l-i*g;e[14]=f*g+k*n+i*h-j*l;Fb(b);e=a.df.data;f=e[12];b=a.bq;e[12]=f+b.k-d;e[13]=e[13]+b.j-c;e[14]=e[14]+b.i;f=e[18]+d;b=a.jU;f=f*b.di;i=(e[19]+c)*b.dh;j=e[20];b=a.ew;k=b.cr;l=k*f;m=b.ca;l=l+m*j;n=b.cb;e[18]=l-n*i;l=k*i+n*f;g=b.cc;e[19]=l-g*j;e[20]=k*j+g*i-m*f;f= -g*f-m*i-n*j;Fb(b);e=a.df.data;i=e[18];j=e[19];k=e[20];b=a.ew;l=b.cc;m=f*l;n=b.cr;m=m+i*n;g=b.cb;m
=m+j*g;h=b.ca;e[18]=m-k*h;e[19]=f*h+j*n+k*l-i*g;e[20]=f*g+k*n+i*h-j*l;Fb(b);e=a.df.data;f=e[18];b=a.bq;e[18]=f+b.k-d;e[19]=e[19]+b.j-c;e[20]=e[20]+b.i;a.gt=1;}
function AEE(a){var b,c,d,e,f,g;b=a.n8;c=b.di;d= -c/2.0;c=d+c;e=b.dh;f=e/2.0;e=f-e;g=a.df.data;g[0]=d;g[1]=f;g[2]=0.0;g[6]=c;g[7]=f;g[8]=0.0;g[12]=d;g[13]=e;g[14]=0.0;g[18]=c;g[19]=e;g[20]=0.0;a.gt=0;}
function Vl(a){var b,c,d,e,f;b=a.en.hb;c=a.df.data;d=b.l5;c[4]=d;e=b.ia;c[5]=e;f=b.vw;c[10]=f;c[11]=e;c[16]=d;d=b.l3;c[17]=d;c[22]=f;c[23]=d;}
function AKA(){var b;b=new Bl;CD();A8f=b;A8g=new Bl;A8h=new Bl;b=new Dw;HE();b.cc=0.0;b.ca=0.0;b.cb=0.0;b.cr=0.0;A8i=b;}
var EO=G(BL);
var A8j=null;var A8k=null;var A8l=null;function YB(){A8j=new EO;A8k=new EO;A8l=new EO;}
var E_=G(EO);
var A8m=null;var A8n=null;var A8o=null;function Tk(){A8m=new E_;A8n=new E_;A8o=new E_;}
var Fe=G(BL);
var A8p=null;var A8q=null;var A8r=null;function ZW(){A8p=new Fe;A8q=new Fe;A8r=new Fe;}
var Fc=G(Da);
var A8s=null;var A8t=null;var A8u=null;function ZE(a,b){var c,d;c=U(a.u);d=b===null?0:U(b.u);SL(c,d);}
function AEe(){A8s=new Fc;A8t=new Fc;A8u=new Fc;}
function SL(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxShape);jsObj.setSimulationFilterData(c);}
function UD(){var a=this;C.call(a);a.c7=null;a.eD=0;a.w0=B2;a.zv=0;a.A1=0;}
function ALq(a){var b=new UD();AOz(b,a);return b;}
function AOz(a,b){var c,d,e,f,g,h;b=b.data;a.w0=T(-1);a.zv=(-1);a.A1=(-1);c=b.length;if(!c){d=new Be;d.c=1;d.d=1;d.f=B(600);H(d);}e=Bg(Eq,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.c7=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.hk=c;switch(d.dM){case 5120:case 5121:break;case 5122:case 5123:g=2*d.dq|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.dq|0;break a;default:break b;}g=d.dq;break a;}g=0;}c=c+g|0;h=h+1|0;}a.eD=c;}
var JF=G();
var A8v=null;var A8w=null;function AD5(b,c,d){var e,f,g,h,i,j;e=50+c|0;if(b){f=A8v.data;if(e<=f.length&&e>=0){g=AZh(Bf(CG(T(b),F(4294967295, 0)),CG(T(f[e]),F(4294967295, 0))));h=A8w.data[e]-1|0;i=(32-JW(g)|0)-30|0;b=i>=0?g>>>i|0:g<<( -i|0);c=h+i|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){c=( -c|0)+1|0;e=32;if(c<e)e=c;b=b>>e;c=0;}j=(b>>>6|0)&8388607|c<<23;if(d)j=j^(-2147483648);return $rt_intBitsToFloat(j);}}return $rt_intBitsToFloat(!d?0:(-2147483648));}
function AA_(){A8v=F9([(-1598972629),(-924973963),(-82475629),(-1662160004),(-1003958181),(-181205903),(-1723866425),(-1081091207),(-277622185),(-1784126602),(-1156416428),(-371778711),(-1842974431),(-1229976214),(-463728444),(-1900443013),(-1301811943),(-553523104),(-1956564676),(-1371964021),(-641213203),(-2011370988),(-1440471911),(-726848064),(-2064892776),(-1507374146),(-810475859),(-2117160148),(-1572708361),(-892143627),(-41437709),(-1636511304),(-971897307),(-141129809),(-1698818867),(-1049781759),(-238485375),
(-1759666096),(-1125840795),(-333559170),(-1819087217),(-1200117198),(-426404673),(-1877115657),(-1272652747),(-517074110),(-1933784055),(-1343488244),(-605618481),(-1989124287),(-1412663534),(-692087594),(-2043167482),(-1480217529),(-776530087),(-2095944040),(-1546188227),(-858993459),(-2147483648),(-1610612736),(-939524096),(-100663296),(-1673527296),(-1018167296),(-198967296),(-1734967296),(-1094967296),(-294967296),(-1794967296),(-1169967296),(-388717296),(-1853561046),(-1243209483),(-480270030),(-1910781505),
(-1314735057),(-569676998),(-1966660859),(-1384584250),(-656988489),(-2021230542),(-1452796353),(-742253617),(-2074521247),(-1519409734),(-825520344),(-2126562951),(-1584461865),(-906835507),(-59802560),(-1647989336),(-986244846),(-159064233),(-1710027882),(-1063793028),(-255999461),(-1770612399),(-1139523675),(-350662770),(-1829776967)]);A8w=F9([(-35),(-32),(-29),(-25),(-22),(-19),(-15),(-12),(-9),(-5),(-2),1,5,8,11,15,18,21,25,28,31,35,38,41,45,48,51,55,58,61,64,68,71,74,78,81,84,88,91,94,98,101,104,108,111,
114,118,121,124,128,131,134,138,141,144,148,151,154,158,161,164,167,171,174,177,181,184,187,191,194,197,201,204,207,211,214,217,221,224,227,231,234,237,241,244,247,251,254,257,260,264,267,270,274,277,280,284,287,290,294]);}
var FN=G(BC);
var A7z=null;var A8x=null;var A8y=null;function XT(){XT=W(FN);AU_();}
function AU_(){var b,c;b=new FN;XT();b.t=B(601);b.q=0;A7z=b;c=new FN;c.t=B(602);c.q=1;A8x=c;A8y=R(FN,[b,c]);}
function Cf(){BC.call(this);this.c4=null;}
var A7y=null;var A8z=null;var A8A=null;var A8B=null;var A8C=null;var A8D=null;var A8E=null;var A8F=null;var A8G=null;var A4S=null;var A8H=null;var A8I=null;function GL(){GL=W(Cf);AK5();}
function AK5(){var b,c,d,e,f,g,h,i,j,k,l;b=new Cf;GL();b.t=B(603);b.q=0;b.c4=B(604);A7y=b;c=new Cf;c.t=B(605);c.q=1;c.c4=B(606);A8z=c;d=new Cf;d.t=B(607);d.q=2;d.c4=B(608);A8A=d;e=new Cf;e.t=B(609);e.q=3;e.c4=B(610);A8B=e;f=new Cf;f.t=B(611);f.q=4;f.c4=B(612);A8C=f;g=new Cf;g.t=B(613);g.q=5;g.c4=B(614);A8D=g;h=new Cf;h.t=B(615);h.q=6;h.c4=B(616);A8E=h;i=new Cf;i.t=B(617);i.q=7;i.c4=B(618);A8F=i;j=new Cf;j.t=B(619);j.q=8;j.c4=B(620);A8G=j;k=new Cf;k.t=B(621);k.q=9;k.c4=B(622);A4S=k;l=new Cf;l.t=B(623);l.q=10;l.c4
=B(624);A8H=l;A8I=R(Cf,[b,c,d,e,f,g,h,i,j,k,l]);}
var E6=G(BL);
var A8J=null;var A8K=null;var A8L=null;function Wf(a){return ADS(U(a.u));}
function YE(a){return AAk(U(a.u));}
function Ys(){A8J=new E6;A8K=new E6;A8L=new E6;}
function ZC(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxQuat);return jsObj.get_x();}
function AEL(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxQuat);return jsObj.get_y();}
function ADS(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxQuat);return jsObj.get_z();}
function AAk(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxQuat);return jsObj.get_w();}
var SG=G();
var A76=null;function AXL(){AXL=W(SG);ARC();}
function ARC(){var b,c;Ky();b=Z((A73.cn()).data.length);c=b.data;A76=b;c[A71.q]=1;c[A72.q]=2;c[A7l.q]=3;c[A7k.q]=4;}
var IX=G(0);
function KM(){var a=this;C.call(a);a.fK=null;a.h7=null;a.s8=0;a.B4=0;a.n0=0;a.jQ=0;a.kj=0;}
function AXc(a,b,c){var d=new KM();ZX(d,a,b,c);return d;}
function ZX(a,b,c,d){var e,f,g,h,i,j;a.jQ=0;a.kj=0;a.B4=b;a.fK=d;c=D4(d.eD/4|0,c);if(!AZT){e=Ce(c);f=e.data.length;d=new HP;g=0+f|0;d.w=(-1);d.z=f;d.g=f;d.h=0;d.g=g;d.h9=0;d.jm=0;d.ht=e;}else{c=c*4|0;if(c<0){d=new Be;h=new O;h.b=D(16);FI(h,h.a,B(486));N(h,h.a,c,10);i=new M;e=h.b;c=h.a;P();j=D(c);i.e=j;L(e,0,j,0,c);d.c=1;d.d=1;d.f=i;H(d);}h=new Cp;e=BE(c);h.w=(-1);h.z=c;h.g=c;B7();h.bg=A4M;h.bn=0;h.W=e;h.h=0;h.g=c;h.b$=1;h.bB=0;h.bg=C8();d=Fj(h);}a.h7=d;d.g=d.h;d.h=0;d.w=(-1);d=A4N;h=d.m.createBuffer();f=d.du;d.du
=f+1|0;Cc(d.ea,f,Cg(h));a.s8=f;a.n0=!b?35048:35044;}
function APC(a,b,c,d){var e,f,g;a.jQ=1;e=a.h7;f=null;g=e instanceof E$;if(g)f=Fj(e);else if(e instanceof Eo)f=e;if(f===null){f=new Ba;f.c=1;f.d=1;f.f=B(625);H(f);}f.h=0;f.g=f.z;f.w=(-1);BU(e,0);IU(f,b,c,d);BU(e,0);if(!g)Cz(e,d);else Cz(e,d<<2);BU(a.h7,0);Cz(a.h7,d);if(a.kj){e=A4N;f=a.h7;e.d7(34962,f.g,f,a.n0);a.jQ=0;}}
function AKg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=A4N;d.c1(34962,a.s8);if(a.jQ){e=a.h7;d.d7(34962,e.g,e,a.n0);a.jQ=0;}a:{f=a.fK.c7.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.fK.c7.data[g];j=h[g];if(j>=0){e=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}e.gF(j);k=i.dq;l=i.dM;m=i.dT;n=a.fK.eD;o=i.hk;e=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}e.gx(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.fK.c7.data[g];d=i.dP;e=b.er;p=(-1);j=Fa(e,d);if(j>=0)p=e.dQ.data[j];if(p>=0){e=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh
=0;}e.gF(p);j=i.dq;k=i.dM;l=i.dT;m=a.fK.eD;n=i.hk;e=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}e.gx(p,j,k,l,m,n);}g=g+1|0;}}a.kj=1;}
function AGL(a,b,c){var d,e,f,g,h,i,j,k,l;a:{d=A4N;e=a.fK.c7.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}h.ge(g);}f=f+1|0;}}i=0;while(i<e){j=a.fK.c7.data[i].dP;k=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}l=A4N;h=b.er;g=(-2);f=Fa(h,j);if(f>=0)g=h.dQ.data[f];if(g==(-2)){g=l.jp(b.dg,j);EZ(b.er,j,g);}if(g!=(-1))k.ge(g);i=i+1|0;}}d.c1(34962,0);a.kj=0;}
var JP=G(0);
function IH(){var a=this;C.call(a);a.e7=null;a.m6=0;a.rQ=0;a.fQ=0;a.ja=0;a.ll=0;}
function ALW(a){return a.e7.g;}
function AFY(a){return a.e7.z;}
function APg(a,b,c,d){var e;a.fQ=1;e=a.e7;e.h=0;e.g=e.z;e.w=(-1);RM(e,b,c,d);e=a.e7;c=e.h;e.g=c;e.h=0;e.w=(-1);if(a.ja){A4N.d7(34963,c,e,a.ll);a.fQ=0;}}
function AGy(a,b){a.fQ=a.fQ|b;return a.e7;}
function ATX(a){var b,c,d;b=a.m6;if(!b){c=new Ba;c.c=1;c.d=1;c.f=B(626);H(c);}A4N.c1(34963,b);if(a.fQ){c=A4N;d=a.e7;c.d7(34963,d.g,d,a.ll);a.fQ=0;}a.ja=1;}
function ARv(a){A4N.c1(34963,0);a.ja=0;}
function U2(){var a=this;C.call(a);a.fD=null;a.fc=null;a.e1=null;a.qy=0;a.q0=0;a.wJ=0;a.mG=0;a.jy=0;a.kC=0;}
function AYE(a,b,c){var d=new U2();AOF(d,a,b,c);return d;}
function AOF(a,b,c,d){var e,f,g,h,i,j,k;a.jy=0;a.kC=0;a.wJ=b;a.fD=d;c=D4(d.eD,c);if(!AZT){e=BE(c);f=e.data.length;d=new Cp;g=0+f|0;d.w=(-1);d.z=f;d.g=f;B7();d.bg=A4M;d.bn=0;d.W=e;d.h=0;d.g=g;d.b$=0;d.bB=0;}else{if(c<0){d=new Be;h=new O;h.b=D(16);FI(h,h.a,B(486));N(h,h.a,c,10);i=new M;e=h.b;c=h.a;P();j=D(c);i.e=j;L(e,0,j,0,c);d.c=1;d.d=1;d.f=i;H(d);}d=new Cp;e=BE(c);d.w=(-1);d.z=c;d.g=c;B7();d.bg=A4M;d.bn=0;d.W=e;d.h=0;d.g=c;d.b$=1;d.bB=0;d.bg=C8();}a.e1=d;a.q0=1;a.mG=!b?35048:35044;a.fc=Fj(d);d=A4N;h=d.m.createBuffer();k
=d.du;d.du=k+1|0;Cc(d.ea,k,Cg(h));A4N.c1(34962,k);A4N.d7(34962,a.e1.z,null,a.mG);A4N.c1(34962,0);a.qy=k;d=a.fc;d.g=d.h;d.h=0;d.w=(-1);d=a.e1;d.g=d.h;d.h=0;d.w=(-1);}
function AHd(a,b,c,d){var e,f,g;a.jy=1;if(!a.q0){e=a.fc;e.h=0;e.g=e.z;e.w=(-1);IU(e,b,c,d);e=a.fc;e.g=e.h;e.h=0;e.w=(-1);BU(a.e1,0);Cz(a.e1,a.fc.g<<2);}else{e=a.e1;f=null;g=e instanceof E$;if(g)f=Fj(e);else if(e instanceof Eo)f=e;if(f===null){f=new Ba;f.c=1;f.d=1;f.f=B(625);H(f);}f.h=0;f.g=f.z;f.w=(-1);BU(e,0);IU(f,b,c,d);BU(e,0);if(!g)Cz(e,d);else Cz(e,d<<2);BU(a.fc,0);Cz(a.fc,d);}if(a.kC){e=A4N;f=a.e1;e.iB(34962,0,f.g,f);a.jy=0;}}
function AO7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=A4N;d.c1(34962,a.qy);if(a.jy){Cz(a.e1,a.fc.g*4|0);e=a.e1;d.d7(34962,e.g,e,a.mG);a.jy=0;}a:{f=a.fD.c7.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.fD.c7.data[g];j=h[g];if(j>=0){e=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}e.gF(j);k=i.dq;l=i.dM;m=i.dT;n=a.fD.eD;o=i.hk;e=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}e.gx(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.fD.c7.data[g];p=i.dP;e=b.er;q=(-1);j=Fa(e,p);if(j>=0)q=e.dQ.data[j];if(q>=0){e=A4N;if
(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}e.gF(q);j=i.dq;k=i.dM;l=i.dT;m=a.fD.eD;n=i.hk;e=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}e.gx(q,j,k,l,m,n);}g=g+1|0;}}a.kC=1;}
function AKh(a,b,c){var d,e,f,g,h,i,j,k,l;a:{d=A4N;e=a.fD.c7.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}h.ge(g);}f=f+1|0;}}i=0;while(i<e){j=a.fD.c7.data[i].dP;k=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}l=A4N;h=b.er;g=(-2);f=Fa(h,j);if(f>=0)g=h.dQ.data[f];if(g==(-2)){g=l.jp(b.dg,j);EZ(b.er,j,g);}if(g!=(-1))k.ge(g);i=i+1|0;}}d.c1(34962,0);a.kC=0;}
function YC(){var a=this;C.call(a);a.gB=null;a.e9=null;a.td=0;a.y$=0;a.gK=0;a.kE=0;a.t9=0;}
function AU2(a,b){var c=new YC();AJP(c,a,b);return c;}
function AJP(a,b,c){var d,e,f,g,h,i,j,k;a.gK=1;a.kE=0;c=c*2|0;if(!AZT){d=BE(c);e=d.data.length;f=new Cp;g=0+e|0;f.w=(-1);f.z=e;f.g=e;B7();f.bg=A4M;f.bn=0;f.W=d;f.h=0;f.g=g;f.b$=0;f.bB=0;}else{if(c<0){f=new Be;h=new O;h.b=D(16);FI(h,h.a,B(486));N(h,h.a,c,10);i=new M;d=h.b;c=h.a;P();j=D(c);i.e=j;L(d,0,j,0,c);f.c=1;f.d=1;f.f=i;H(f);}f=new Cp;d=BE(c);f.w=(-1);f.z=c;f.g=c;B7();f.bg=A4M;f.bn=0;f.W=d;f.h=0;f.g=c;f.b$=1;f.bB=0;f.bg=C8();}a.e9=f;a.y$=1;a.t9=!b?35048:35044;f=L8(f);a.gB=f;f.g=f.h;f.h=0;f.w=(-1);f=a.e9;f.g
=f.h;f.h=0;f.w=(-1);f=A4N;h=f.m.createBuffer();k=f.du;f.du=k+1|0;Cc(f.ea,k,Cg(h));A4N.c1(34963,k);A4N.d7(34963,a.e9.z,null,a.t9);A4N.c1(34963,0);a.td=k;}
function AQ0(a){return a.gB.g;}
function AFi(a){return a.gB.z;}
function AMi(a,b,c,d){var e,f;a.gK=1;e=a.gB;e.h=0;e.g=e.z;e.w=(-1);RM(e,b,c,d);e=a.gB;e.g=e.h;e.h=0;e.w=(-1);BU(a.e9,0);Cz(a.e9,d<<1);if(a.kE){e=A4N;f=a.e9;e.iB(34963,0,f.g,f);a.gK=0;}}
function ASW(a,b){a.gK=a.gK|b;return a.gB;}
function AMV(a){var b,c,d;b=a.td;if(!b){c=new Ba;c.c=1;c.d=1;c.f=B(627);H(c);}A4N.c1(34963,b);if(a.gK){Cz(a.e9,a.gB.g*2|0);c=A4N;d=a.e9;c.iB(34963,0,d.g,d);a.gK=0;}a.kE=1;}
function AHK(a){A4N.c1(34963,0);a.kE=0;}
function OB(){var a=this;C.call(a);a.gS=null;a.gD=null;a.oP=0;a.Cf=0;a.ow=0;a.jG=0;a.ma=0;a.nm=0;a.eg=null;}
var A8M=null;function AWB(){AWB=W(OB);AVb();}
function AW7(a,b,c){var d=new OB();Vu(d,a,b,c);return d;}
function Vu(a,b,c,d){var e,f,g,h,i,j;AWB();a.jG=0;a.ma=0;a.nm=(-1);e=new Dq;e.dJ=1;e.bL=Z(16);a.eg=e;a.Cf=b;a.gS=d;c=D4(d.eD/4|0,c);if(!AZT){f=Ce(c);g=f.data.length;d=new HP;h=0+g|0;d.w=(-1);d.z=g;d.g=g;d.h=0;d.g=h;d.h9=0;d.jm=0;d.ht=f;}else{c=c*4|0;if(c<0){d=new Be;e=new O;e.b=D(16);FI(e,e.a,B(486));N(e,e.a,c,10);i=new M;f=e.b;c=e.a;P();j=D(c);i.e=j;L(f,0,j,0,c);d.c=1;d.d=1;d.f=i;H(d);}e=new Cp;f=BE(c);e.w=(-1);e.z=c;e.g=c;B7();e.bg=A4M;e.bn=0;e.W=f;e.h=0;e.g=c;e.b$=1;e.bB=0;e.bg=C8();d=Fj(e);}a.gD=d;d.g=d.h;d.h
=0;d.w=(-1);d=A4N;e=d.m.createBuffer();g=d.du;d.du=g+1|0;Cc(d.ea,g,Cg(e));a.oP=g;a.ow=!b?35048:35044;d=A8M;d.h=0;d.g=d.z;d.w=(-1);A5K.qN(1,d);d=A8M;c=d.h;if(c<d.g){d.h=c+1|0;a.nm=d.j0(c);return;}d=new HL;d.c=1;d.d=1;H(d);}
function AG_(a,b,c,d){var e,f,g;a.jG=1;e=a.gD;f=null;g=e instanceof E$;if(g)f=Fj(e);else if(e instanceof Eo)f=e;if(f===null){f=new Ba;f.c=1;f.d=1;f.f=B(625);H(f);}f.h=0;f.g=f.z;f.w=(-1);BU(e,0);IU(f,b,c,d);BU(e,0);if(!g)Cz(e,d);else Cz(e,d<<2);BU(a.gD,0);Cz(a.gD,d);if(a.ma){e=A4N;f=a.gD;e.d7(34962,f.g,f,a.ow);a.jG=0;}}
function ASG(a,b,c){var d;d=A5K;d.pX(a.nm);AB_(a,b,c);if(a.jG){d.c1(34962,a.oP);b=a.gD;Cz(b,b.g);b=a.gD;d.d7(34962,b.g,b,a.ow);a.jG=0;}a.ma=1;}
function AB_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.eg.bd;e=!d?0:1;a:{f=a.gS.c7.data.length;if(e){if(c===null){d=0;b:{while(true){if(!e)break b;if(d>=f)break b;g=a.gS.c7.data[d].dP;h=b.er;i=(-1);e=Fa(h,g);if(e>=0)i=h.dQ.data[e];g=a.eg;if(d>=g.bd)break;e=i!=g.bL.data[d]?0:1;d=d+1|0;}h=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,d,10);I(b,b.a,B(36));f=g.bd;N(b,b.a,f,10);g=new M;c=b.b;d=b.a;P();j=D(d);g.e=j;L(c,0,j,0,d);h.c=1;h.d=1;h.f=g;H(h);}}else{j=c.data;e=j.length!=d?0:1;d=0;while(e){if(d>=f)break a;e
=j[d]!=FS(a.eg,d)?0:1;d=d+1|0;}}}}c:{if(!e){d:{A37.c1(34962,a.oP);if(a.eg.bd){k=a.gS.c7.data.length;d=0;while(true){if(d>=k)break d;g=a.eg;if(d>=g.bd)break;i=g.bL.data[d];if(i>=0){g=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}g.ge(i);}d=d+1|0;}h=new Y;b=new O;b.b=D(16);I(b,b.a,B(35));N(b,b.a,d,10);I(b,b.a,B(36));f=g.bd;N(b,b.a,f,10);g=new M;c=b.b;d=b.a;P();j=D(d);g.e=j;L(c,0,j,0,d);h.c=1;h.d=1;h.f=g;H(h);}}a.eg.bd=0;d=0;while(true){if(d>=f)break c;l=a.gS.c7.data[d];if(c!==null){j=c.data;Ff(a.eg,j[d]);}else{g=a.eg;h
=l.dP;m=b.er;e=(-1);i=Fa(m,h);if(i>=0)e=m.dQ.data[i];Ff(g,e);}i=FS(a.eg,d);if(i>=0){g=A4N;if(b.bh){Cy(b,b.ch,b.ck);b.bh=0;}g.gF(i);e=l.dq;k=l.dM;n=l.dT;o=a.gS.eD;p=l.hk;g=A4N;XG(b);g.gx(i,e,k,n,o,p);}d=d+1|0;}}}}
function AJD(a,b,c){A5K.pX(0);a.ma=0;}
function AVb(){var b,c,d,e;if(!AZT){b=Z(1);c=b.data.length;d=new Gg;e=0+c|0;d.w=(-1);d.z=c;d.g=c;d.h=0;d.g=e;d.gs=0;d.h_=0;d.f3=b;}else{d=new Cp;b=BE(4);d.w=(-1);d.z=4;d.g=4;B7();d.bg=A4M;d.bn=0;d.W=b;d.h=0;d.g=4;d.b$=1;d.bB=0;d.bg=C8();d=GE(d);}A8M=d;}
var Na=G(KM);
var Od=G(IH);
var FB=G(BC);
var A4O=null;var A4P=null;var A8N=null;function AFS(){AFS=W(FB);AIv();}
function AIv(){var b,c;b=new FB;AFS();b.t=B(628);b.q=0;A4O=b;c=new FB;c.t=B(629);c.q=1;A4P=c;A8N=R(FB,[b,c]);}
var QA=G();
var A8O=0;function ABB(b,c,d,e){var f,g,h,i,j,k,l,m,n;if(!A8O){Oe(b,c,d,e);return;}Mm();f=A54;if(f!==A57&&f!==f&&f!==A59)ABf(b,c,d,e);else{g=A37;f=c.by;if(f===null)h=6408;else a:{e=f.b5;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Ba;g=new O;g.b=D(16);DD(g,g.a,B(48));N(g,g.a,e,10);f=new M;i=g.b;d=g.a;P();j=D(d);f.e=j;L(i,0,j,0,d);c.c=1;c.d=1;c.f=f;H(c);}k=f===null?c.cU:f.cJ;l=f===null?c.cW:f.cI;if(f===null)m=6408;else b:{m=f.b5;switch
(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Ba;g=new O;CI(g);g.b=D(16);AEd(g,g.a,B(48));N(g,g.a,m,10);f=new M;i=g.b;d=g.a;P();j=D(d);f.e=j;L(i,0,j,0,d);c.c=1;c.d=1;c.f=f;H(c);}if(f===null)n=5121;else c:{n=f.b5;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new Ba;g=new O;g.b=D(16);DD(g,g.a,B(48));N(g,g.a,n,10);f=new M;i=g.b;d=g.a;P();j=D(d);f.e=j;L(i,0,j,0,d);c.c=1;c.d=1;c.f=f;H(c);}n
=5121;}g.f_(b,0,h,k,l,0,m,n,c.h3);A4N.kQ(b);}}
function ABf(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=A4L.g7.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(A4L.g7.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=A4N.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BZ;h.C=g;i=h;g.classObject=i;}}if(h.X===null)h.X=$rt_str(h.C.$meta.name);if(!BA(h.X,B(630))&&A5K===null){Oe(b,c,d,e);break a;}}g=A37;i=c.by;if(i===null)j=6408;else b:{e=i.b5;switch(e){case 1:j=6406;break b;case 2:j=6410;break b;case 3:case 5:j=6407;break b;case 4:case 6:j
=6408;break b;default:}c=new Ba;g=new O;g.b=D(16);CM(g,g.a,CZ(B(48)));N(g,g.a,e,10);i=new M;k=g.b;d=g.a;l=D(d);i.e=l;L(k,0,l,0,d);c.c=1;c.d=1;c.f=i;H(c);}m=i===null?c.cU:i.cJ;n=i===null?c.cW:i.cI;if(i===null)o=6408;else c:{f=i.b5;switch(f){case 1:o=6406;break c;case 2:o=6410;break c;case 3:case 5:o=6407;break c;case 4:case 6:o=6408;break c;default:}c=new Ba;g=new O;g.b=D(16);DD(g,g.a,B(48));N(g,g.a,f,10);i=new M;k=g.b;d=g.a;P();l=D(d);i.e=l;L(k,0,l,0,d);c.c=1;c.d=1;c.f=i;H(c);}if(i===null)f=5121;else d:{f=i.b5;switch
(f){case 1:case 2:case 3:case 4:break;case 5:f=33635;break d;case 6:f=32819;break d;default:c=new Ba;g=new O;g.b=D(16);CM(g,g.a,CZ(B(48)));N(g,g.a,f,10);i=new M;k=g.b;d=g.a;l=D(d);i.e=l;L(k,0,l,0,d);c.c=1;c.d=1;c.f=i;H(c);}f=5121;}g.f_(b,0,j,m,n,0,o,f,c.h3);A4N.kQ(b);}}
function Oe(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=A37;g=c.by;if(g===null)h=6408;else a:{i=g.b5;switch(i){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Ba;f=new O;f.b=D(16);CM(f,f.a,CZ(B(48)));N(f,f.a,i,10);g=new M;j=f.b;d=f.a;k=D(d);g.e=k;L(j,0,k,0,d);c.c=1;c.d=1;c.f=g;H(c);}l=g===null?c.cU:g.cJ;m=g===null?c.cW:g.cI;if(g===null)n=6408;else b:{n=g.b5;switch(n){case 1:n=6406;break b;case 2:n=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n
=6408;break b;default:}c=new Ba;f=new O;f.b=D(16);DD(f,f.a,B(48));N(f,f.a,n,10);g=new M;j=f.b;d=f.a;P();k=D(d);g.e=k;L(j,0,k,0,d);c.c=1;c.d=1;c.f=g;H(c);}if(g===null)o=5121;else c:{o=g.b5;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new Ba;f=new O;f.b=D(16);CM(f,f.a,CZ(B(48)));N(f,f.a,o,10);g=new M;j=f.b;d=f.a;k=D(d);g.e=k;L(j,0,k,0,d);c.c=1;c.d=1;c.f=g;H(c);}f.f_(b,0,h,l,m,0,n,o,c.h3);if(A4N===null&&d!=e){c=new Ba;c.c=1;c.d=1;c.f=B(631);H(c);}f
=c.by;p=(f===null?c.cU:f.cJ)/2|0;i=(f===null?c.cW:f.cI)/2|0;h=1;while(p>0&&i>0){g=new Hs;f=c.by;if(f===null){GV();f=A4Q;}else f=HW(f.b5);Jl(g,p,i,f);HM();Ta(g,A4R);f=c.by;AA$(g,c,0,0,f===null?c.cU:f.cJ,f===null?c.cW:f.cI,0,0,p,i);if(h>1)NF(c);A37.f_(b,h,XW(g),Kz(g),KY(g),0,ZJ(g),AB8(g),g.h3);p=Kz(g)/2|0;i=KY(g)/2|0;h=h+1|0;c=g;}}
function YN(){A8O=1;}
var Qh=G();
var A7A=null;function AWI(){AWI=W(Qh);AU9();}
function AU9(){var b,c;XT();b=Z((A8y.cn()).data.length);c=b.data;A7A=b;c[A7z.q]=1;c[A8x.q]=2;}
function LR(){var a=this;C.call(a);a.yc=null;a.wh=0.0;a.y8=0.0;a.iV=null;a.iQ=null;a.o_=null;a.k2=0;}
function AEu(a,b,c,d){var e,f,g,h,i;a.iV=B(632);DS();e=A6Y;a.iQ=e;a.o_=e;if(c<=0.0){b=new Be;e=new O;e.b=D(16);I(e,e.a,B(633));DK(e,e.a,c);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);b.c=1;b.d=1;b.f=f;H(b);}if(d>0.0){a.yc=b;a.wh=c;a.y8=d;return;}b=new Be;e=new O;e.b=D(16);I(e,e.a,B(634));DK(e,e.a,d);f=new M;g=e.b;h=e.a;P();i=D(h);f.e=i;L(g,0,i,0,h);b.c=1;b.d=1;b.f=f;H(b);}
function Wn(a,b,c,d){var e,f,g,h,i,$$je;e=a.k2;if(!(e==2&&!d)&&e!=3){a.k2=d?2:1;while(true){try{f=ADc(a,b,c);}catch($$e){$$je=Bw($$e);if($$je instanceof BF){g=$$je;b=new Lc;b.c=1;b.d=1;b.cP=g;H(b);}else{throw $$e;}}e=f.bj;if(e!=1?0:1)break;if(e?0:1){if(d){e=b.h;h=b.g;if(e>=h?0:1){g=a.iQ;DS();if(g===A6Y){i=h-e|0;b=new Ca;b.bj=2;b.bC=i;return b;}if((c.g-c.h|0)<=a.iV.e.data.length)return AZ0;BU(b,e+(h-e|0)|0);if(a.iQ===A5r){b=a.iV;J3(c,b,0,b.e.data.length);}}}return f;}if(e!=2?0:1){g=a.iQ;DS();if(g===A6Y)return f;if
(g===A5r){i=c.g-c.h|0;g=a.iV;e=g.e.data.length;if(i<e)return AZ0;J3(c,g,0,e);}h=b.h;e=f.bj;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Gf;b.c=1;b.d=1;H(b);}BU(b,h+f.bC|0);}else if(e!=3?0:1){g=a.o_;DS();if(g===A6Y)return f;if(g===A5r){i=c.g-c.h|0;g=a.iV;e=g.e.data.length;if(i<e)return AZ0;J3(c,g,0,e);}h=b.h;e=f.bj;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Gf;b.c=1;b.d=1;H(b);}BU(b,h+f.bC|0);}}return f;}b=new BH;b.c=1;b.d=1;H(b);}
var GU=G(D7);
function RM(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.dw()){e=new DU;e.c=1;e.d=1;H(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new FF;e.c=1;e.d=1;H(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Y;j=new O;j.b=D(16);I(j,j.a,B(635));N(j,j.a,i,10);I(j,j.a,B(473));N(j,j.a,f,10);k=new M;b=j.b;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.nk(g,h[c]);i=i+1|0;g=l;c=f;}a.h=a.h+d|0;return a;}e=new Y;j=new O;j.b=D(16);I(j,j.a,B(474));N(j,j.a,d,10);I(j,j.a,B(475));k=
new M;b=j.b;d=j.a;P();h=D(d);k.e=h;L(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}}b=b.data;e=new Y;d=b.length;j=new O;j.b=D(16);I(j,j.a,B(476));N(j,j.a,c,10);I(j,j.a,B(470));N(j,j.a,d,10);d=j.a;Bc(j,d,d+1|0);h=j.b;h.data[d]=41;k=new M;d=j.a;P();b=D(d);k.e=b;L(h,0,b,0,d);e.c=1;e.d=1;e.f=k;H(e);}
function ATW(a){a.h=0;a.g=a.z;a.w=(-1);return a;}
function ADv(a){a.g=a.h;a.h=0;a.w=(-1);return a;}
function ARe(a,b){Cz(a,b);return a;}
function ARV(a,b){BU(a,b);return a;}
function ASX(a){a.g=a.h;a.h=0;a.w=(-1);return a;}
function AU0(a){a.h=0;a.g=a.z;a.w=(-1);return a;}
function AOl(a,b){Cz(a,b);return a;}
function AF1(a,b){BU(a,b);return a;}
function P2(){var a=this;C.call(a);a.hb=null;a.hX=0;a.je=0;}
function AAK(a,b){var c;if(b===null)return 0;c=b;return a.je==c.je&&a.hX==c.hX&&a.hb.de===c.hb.de?1:0;}
function AIe(a){var b,c,d,e;b=a.hb.de;if(b===null)c=0;else{d=b;if(!d.$id$){e=$rt_nextId();d.$id$=e;}c=b.$id$;}return (31*((31*c|0)+a.hX|0)|0)+a.je|0;}
var HO=G(GU);
function ABm(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.pQ(b);c=new Y;d=a.g;e=new O;e.b=D(16);I(e,e.a,B(487));N(e,e.a,b,10);I(e,e.a,B(470));N(e,e.a,d,10);d=e.a;Bc(e,d,d+1|0);f=e.b;f.data[d]=41;g=new M;d=e.a;P();h=D(d);g.e=h;L(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function AM$(a){return a.dw();}
function LP(){var a=this;HO.call(a);a.mh=0;a.lG=0;a.kY=null;}
function AKQ(a,b){return a.kY.data[b+a.lG|0];}
function AMB(a,b,c){a.kY.data[b+a.lG|0]=c;}
function AI_(a){return a.mh;}
var Lc=G(FH);
var FF=G(BF);
var Gr=G();
var A7F=null;function Uh(){A7F=null;}
var HL=G(BF);
var Fd=G(HC);
var A8P=null;var A8Q=null;var A8R=null;function U1(){A8P=new Fd;A8Q=new Fd;A8R=new Fd;}
var Oz=G(0);
function RN(){var a=this;C.call(a);a.sw=null;a.tF=null;a.CI=null;}
function AKG(a,b){var c;b=A7o;c=a.sw;Gx(b.nu,c,b);b=a.tF;if(b!==null)b.ex();}
function OM(){var a=this;DR.call(a);a.zF=0.0;a.zE=0.0;a.AH=0;a.x9=0;}
function KE(){var a=this;LR.call(a);a.q2=null;a.tL=null;}
function ADc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.q2;e=0;f=0;g=a.tL;a:{while(true){if((e+32|0)>f){h=b.h;i=b.g;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;N4(b,d,j,f-j|0);e=0;}}j=c.h;l=c.g;if(!(j>=l?0:1)){j=b.h>=b.g?0:1;m=!j&&e>=f?AZZ:AZ0;break a;}k=g.data;l=l-j|0;h=k.length;if(l<h)h=l;n=new Q$;n.li=b;n.uK=c;m=ADU(a,d,e,f,g,0,h,n);e=n.vJ;if(m===null&&0==n.mU)m=AZZ;AEx(c,g,0,n.mU);if(m!==null)break;}}BU(b,b.h-(f-e|0)|0);return m;}
var Qa=G(KE);
function ADU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;n=h.li;if((n.g-n.h|0)<2?0:1)break a;i=AZZ;break a;}o=k+1|0;k=j[k];if(!((k&192)!=128?0:1)){c=o+(-2)|0;i=new Ca;i.bj=2;i.bC=1;break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=o;}else if((l&240)!=224){if((l&248)!=240){c=k+(-1)|0;i=AVU(2,1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(XF(h,4))break a;i=
AZZ;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Us(h,2))break a;i=AZ0;break a;}o=k+1|0;m=j[k];c=o+1|0;o=j[o];k=c+1|0;p=j[c];if(!LF(a,m))break c;if(!LF(a,o))break c;if(!LF(a,p))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|p&63;c=f+1|0;j[f]=YR(q);m=c+1|0;j[c]=ADe(q);}else{if((k+2|0)>d){c=k+(-1)|0;n=h.li;if((n.g-n.h|0)<3?0:1)break a;i=AZZ;break a;}c=k+1|0;r=j[k];k=c+1|0;o=j[c];if(!((r&192)!=128?0:1))break b;if(!((o&192)!=128?0:1))break b;s=((l&15)<<12|(r&63)<<6|o&63)&65535;m=s&64512;c=m!=55296?0:1;if(!c&&!(m!=56320
?0:1)?0:1){c=k+(-3)|0;i=new Ca;i.bj=2;i.bC=3;break a;}j=e.data;m=f+1|0;j[f]=s;}c=k;f=m;}break a;}c=k+(-3)|0;i=AAw(1);break a;}c=k+(-3)|0;i=new Ca;i.bj=2;i.bC=1;}h.vJ=c;h.mU=f;return i;}
function LF(a,b){return (b&192)!=128?0:1;}
var VY=G();
function GP(){var a=this;HO.call(a);a.fH=null;a.nj=0;a.hB=0;}
function ALM(a){return a.nj;}
function ARt(a){return a.fH.W.data;}
var MN=G(GP);
function AIX(a,b){var c;c=a.fH.W.data;b=a.hB+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;}
function AH5(a,b,c){var d;d=a.fH.W.data;b=a.hB+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;}
var On=G(GP);
function APp(a,b){var c;c=a.fH.W.data;b=a.hB+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;}
function AIZ(a,b,c){var d;d=a.fH.W.data;b=a.hB+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;}
function MX(){var a=this;Gr.call(a);a.sk=null;a.nn=null;}
function Qz(){C.call(this);this.uz=null;}
var AC4=G();
function Jf(){Gr.call(this);this.hr=null;}
var A8S=0;function AXm(){AXm=W(Jf);AKK();}
function RU(a,b){var c,d,e,f,g,h,i,j,$$je;c=a.hr;d=b.cR;e=new O;e.b=D(16);I(e,e.a,B(636));f=e.a;if(d===null)d=B(2);I(e,f,d);g=new M;h=e.b;i=e.a;P();j=D(i);g.e=j;L(h,0,j,0,i);c=c.lx(g);a:{try{e=AI9(XJ(c));}catch($$e){$$je=Bw($$e);if($$je instanceof BF){e=$$je;break a;}else{throw $$e;}}return e;}c=a.hr;d=b.cR;b=new O;b.b=D(16);I(b,b.a,B(636));f=b.a;if(d===null)d=B(2);I(b,f,d);g=new M;h=b.b;i=b.a;j=D(i);g.e=j;L(h,0,j,0,i);c.v$(g);H(e);}
function ACU(a,b){var c,d,e,f,g,h,i,j;c=a.hr;d=b.cR;e=new O;e.b=D(16);I(e,e.a,B(637));f=e.a;if(d===null)d=B(2);a:{I(e,f,d);g=new M;h=e.b;i=e.a;P();j=D(i);g.e=j;L(h,0,j,0,i);if(c.lx(g)===null){c=a.hr;g=b.cR;b=new O;b.b=D(16);I(b,b.a,B(636));f=b.a;if(g===null)g=B(2);I(b,f,g);e=new M;h=b.b;i=b.a;j=D(i);e.e=j;L(h,0,j,0,i);if(c.lx(e)===null){f=0;break a;}}f=1;}return f;}
function AKK(){A8S=B(636).e.data.length;}
var Lf=G(0);
function OY(){var a=this;C.call(a);a.ng=null;a.mP=null;}
function AIN(a,b){var c,d,e,f,g,h,i;c=a.ng;d=a.mP;e=new O;e.b=D(16);f=e.a;if(d===null)d=B(2);I(e,f,d);f=e.a;if(b===null)b=B(2);I(e,f,b);d=new M;g=e.b;h=e.a;P();i=D(h);d.e=i;L(g,0,i,0,h);return $rt_str(c.getItem($rt_ustr(d)));}
function AQn(a,b){var c,d,e,f,g,h,i;c=a.ng;d=a.mP;e=new O;e.b=D(16);f=e.a;if(d===null)d=B(2);I(e,f,d);f=e.a;if(b===null)b=B(2);I(e,f,b);d=new M;g=e.b;h=e.a;P();i=D(h);d.e=i;L(g,0,i,0,h);c.removeItem($rt_ustr(d));}
function Qb(){var a=this;C.call(a);a.su=null;a.pq=null;}
function AQJ(a,b){var c,d;c=a.pq;d=Cv(c,b);return d<0?null:c.cl.data[d];}
function ASM(a,b){Vs(a.su,b,0);YU(a.pq,b);}
var MJ=G(0);
function R3(){C.call(this);this.rT=null;}
function AG5(a){a.rT.uz.kx=1;}
var Y$=G();
function M5(){var a=this;C.call(a);a.gX=null;a.eJ=null;a.hZ=0;a.ib=0;}
var HA=G();
function ATe(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.qX();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function ALG(a){}
function Lz(){var a=this;HA.call(a);a.iX=null;a.fB=0;a.n6=0;a.iR=0;}
function AI9(a){var b=new Lz();AHj(b,a);return b;}
function AHj(a,b){var c;c=b.data.length;a.iX=b;a.fB=0;a.n6=0;a.iR=0+c|0;}
function AIu(a){var b,c,d;b=a.fB;if(b>=a.iR)c=(-1);else{d=a.iX.data;a.fB=b+1|0;c=d[b]&255;}return c;}
function AUz(a,b,c,d){var e,f,g,h,i;e=a.iR-a.fB|0;if(d<e)e=d;f=0;while(f<e){g=b.data;d=c+1|0;h=a.iX.data;i=a.fB;a.fB=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function ALU(a){}
var Ow=G(EQ);
function PK(){var a=this;C.call(a);a.jD=0;a.ho=0;a.ek=0;a.kX=B2;a.nO=null;a.rD=null;a.vb=B2;a.rj=null;}
function H0(){var a=this;C.call(a);a.iU=null;a.eC=null;a.gr=null;a.eZ=0;}
var LD=G();
var A8T=null;var A8U=null;function XJ(b){var c,d,e,f,g,h,i,j,k,l;c=b.e.data;d=c.length;e=BE(d/2|0);f=e.data;g=0;h=f.length;a:{b:{while(g<h){i=g*2|0;if(i<0)break a;if(i>=d)break a;j=c[i];i=i+1|0;if(i<0)break b;if(i>=d)break b;k=c[i];l=A8U.data;f[g]=((l[j]<<4)+l[k]|0)<<24>>24;g=g+1|0;}return e;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function ABv(){var b,c,d,e;b=D(16);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;A8T=b;b=Z(128);d=b.data;A8U=b;e=0;while(e<c.length){d[c[e]]=e;if(c[e]>=65)d[(c[e]-65|0)+97|0]=e;e=e+1|0;}}
function Ss(){var a=this;HA.call(a);a.nZ=0;a.oQ=null;}
function AOg(a){var b,c;if(a.nZ==a.oQ.dz.length)return (-1);b=a.oQ;c=a.nZ;a.nZ=c+1|0;return b.dz[c]&255;}
function OJ(){var a=this;Dt.call(a);a.dW=null;a.Cx=null;}
function Lv(){var a=this;C.call(a);a.jA=null;a.kM=null;a.n2=null;}
var R0=G();
var A5q=null;function AW8(){AW8=W(R0);ARZ();}
function ARZ(){var b,c,d,e,f;b=new Gl;c=HX(16);b.eA=0;d=Bg(EJ,c);e=d.data;b.cq=d;b.ik=0.75;b.fj=e.length*0.75|0;A5q=b;e=Bg(D_,6).data;AWm();e[0]=A8V;e[1]=A8W;e[2]=A8X;e[3]=A8Y;e[4]=A8Z;e[5]=A80;c=e.length;f=0;while(f<c){b=e[f];Gx(A5q,b.e8,b);f=f+1|0;}}
function Pa(){Be.call(this);this.zC=null;}
function Lg(){var a=this;C.call(a);a.dl=0;a.hI=null;a.cF=0;a.g$=0;a.ey=0;}
var Jx=G(Lg);
function AC8(a){var b;if(a.ey)return a.dl;b=new Ba;b.c=1;b.d=1;b.f=B(461);H(b);}
function YX(a){var b,c,d,e,f;if(!a.dl){b=new Jy;b.c=1;b.d=1;H(b);}if(!a.ey){c=new Ba;c.c=1;c.d=1;c.f=B(461);H(c);}b=a.hI;d=b.cl.data;e=a.cF;c=d[e];a.g$=e;d=b.c8.data;f=d.length;a:{while(true){e=a.cF+1|0;a.cF=e;if(e>=f)break;if(d[e]===null)continue;else{a.dl=1;break a;}}a.dl=0;}return c;}
var FV=G();
var A8V=null;var A8W=null;var A8X=null;var A8Y=null;var A8Z=null;var A80=null;function AWm(){AWm=W(FV);AO$();}
function AO$(){var b,c,d,e,f,g,h,i;Ct();A8V=A5l;b=new Po;c=Bg(M,0);d=c.data;DN(B(638));e=d.length;f=0;while(f<e){DN(d[f]);f=f+1|0;}b.e8=B(638);b.hn=c.cn();A8W=b;b=new Os;c=Bg(M,0);d=c.data;DN(B(639));e=d.length;f=0;while(f<e){DN(d[f]);f=f+1|0;}b.e8=B(639);b.hn=c.cn();A8X=b;g=new IK;c=Bg(M,0);d=c.data;DN(B(640));h=d.length;i=0;while(i<h){DN(d[i]);i=i+1|0;}g.e8=B(640);g.hn=c.cn();g.lC=1;g.kf=0;A8Y=g;b=new IK;c=Bg(M,0);d=c.data;DN(B(641));h=d.length;i=0;while(i<h){DN(d[i]);i=i+1|0;}b.e8=B(641);b.hn=c.cn();b.lC
=0;b.kf=0;A8Z=b;b=new IK;c=Bg(M,0);d=c.data;DN(B(642));h=d.length;i=0;while(i<h){DN(d[i]);i=i+1|0;}b.e8=B(642);b.hn=c.cn();b.lC=0;b.kf=1;A80=b;}
var Po=G(D_);
function AFd(a){var b,c,d,e,f;b=new QM;c=BE(1);d=c.data;d[0]=63;DS();e=A6Y;b.gw=e;b.gf=e;f=d.length;if(f&&f>=b.e6){b.kl=a;b.jd=c.cn();b.jB=1.0;b.e6=1.0;b.i1=D(512);b.iH=BE(512);return b;}e=new Be;HZ(e,B(467));H(e);}
var Os=G(D_);
function ASg(a){var b,c,d,e,f;b=new RL;c=BE(1);d=c.data;d[0]=63;DS();e=A6Y;b.gw=e;b.gf=e;f=d.length;if(f&&f>=b.e6){b.kl=a;b.jd=c.cn();b.jB=1.0;b.e6=1.0;b.i1=D(512);b.iH=BE(512);return b;}e=new Be;HZ(e,B(467));H(e);}
function IK(){var a=this;D_.call(a);a.lC=0;a.kf=0;}
function AFW(a){var b,c,d,e,f,g,h;b=new N2;c=a.lC;d=a.kf;e=BE(1);f=e.data;f[0]=63;DS();g=A6Y;b.gw=g;b.gf=g;h=f.length;if(h&&h>=b.e6){b.kl=a;b.jd=e.cn();b.jB=2.0;b.e6=4.0;b.i1=D(512);b.iH=BE(512);b.nE=c;b.oa=d;return b;}g=new Be;HZ(g,B(467));H(g);}
function OH(){var a=this;Dt.call(a);a.d$=null;a.lQ=null;a.k8=null;a.lw=null;}
function AGV(a,b){a.d$.dW.kX=AZg(b);}
function AFp(a,b){b=a.d$.dW;b.ho=1;b.ek=0;}
function Y_(a,b,c){H9(a.lw,a.lQ,a.k8,c);b=a.d$.dW;b.jD=1;b.ek=0;return 0;}
function KP(){C.call(this);this.mN=null;}
var A7n=null;function Q$(){var a=this;C.call(a);a.li=null;a.uK=null;a.vJ=0;a.mU=0;}
function XF(a,b){var c;c=a.li;return (c.g-c.h|0)<b?0:1;}
function Us(a,b){var c;c=a.uK;return (c.g-c.h|0)<b?0:1;}
var FY=G(EQ);
var LU=G(FH);
var MG=G();
var A51=null;function AYh(){AYh=W(MG);ANW();}
function ANW(){var b,c;E8();b=Z((A6S.cn()).data.length);c=b.data;A51=b;c[A6l.q]=1;c[A6i.q]=2;c[A6k.q]=3;c[A6j.q]=4;c[A6H.q]=5;}
var La=G(EG);
var JD=G(EG);
var MT=G(EG);
function ZB(){var a=this;C.call(a);a.q8=0;a.B8=0;a.uj=null;}
function AXf(a,b){var c=new ZB();AJx(c,a,b);return c;}
function AJx(a,b,c){a.uj=b;a.B8=c;a.q8=c;}
function ANN(a){var b,c,d,e,f,g,h,i,j,k;b=a.uj;c=a.q8;b=b.dp;d=b.dn;if(!d){b=new BH;b.c=1;b.d=1;B9(b);H(b);}if(c>=0){e=Bm(c,b.d0);if(e<0){a:{f=b.bI.data;g=c*2|0;if(f[g]<0)h=null;else{b=b.gj;if(!d){b=new BH;b.c=1;b.d=1;B9(b);H(b);}if(c>=0&&e<0){i=f[g];if(!d){b=new BH;b.c=1;b.d=1;B9(b);H(b);}if(c>=0&&e<0){g=f[g+1|0];c=Bm(i,g);if(c>0){b=new Y;b.c=1;b.d=1;B9(b);H(b);}if(!c){P();h=A32;}else if(!i&&g==b.e.data.length)h=b;else{h=new M;f=b.e;c=g-i|0;P();j=D(c);h.e=j;L(f,i,j,0,c);}break a;}b=new Y;P();h=new O;CI(h);h.b
=D(16);N(h,h.a,c,10);k=new M;f=h.b;i=h.a;CI(k);j=D(i);k.e=j;L(f,0,j,0,i);b.c=1;b.d=1;B9(b);b.f=k;H(b);}b=new Y;P();h=new O;CI(h);h.b=D(16);N(h,h.a,c,10);k=new M;f=h.b;i=h.a;CI(k);j=D(i);k.e=j;L(f,0,j,0,i);b.c=1;b.d=1;B9(b);b.f=k;H(b);}}return h;}}b=new Y;P();h=new O;CI(h);h.b=D(16);N(h,h.a,c,10);k=new M;f=h.b;i=h.a;CI(k);j=D(i);k.e=j;L(f,0,j,0,i);b.c=1;b.d=1;B9(b);b.f=k;H(b);}
function Rw(){var a=this;C.call(a);a.f1=null;a.g_=null;a.ix=0;a.iq=null;a.kr=0;a.fz=0;a.pU=null;a.fh=null;}
function S2(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=b.data;a.fz=0;AMr(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){ADw(b,d,e,d+ADX(b,d,e,c)|0,c);return;}a.f1=b;a.g_=c;a.kr=0;h=0;i=g;while(i>=32){h=h|i&1;i=i>>1;}j=i+h|0;while(true){h=ADX(b,d,e,c);if(h>=j)i=h;else{i=g>j?j:g;ADw(b,d,d+i|0,d+h|0,c);}f=a.pU.data;k=a.fz;f[k]=d;a.fh.data[k]=i;a.fz=k+1|0;V$(a);d=d+i|0;g=g-i|0;if(!g)break;}ACt(a);a.f1=null;a.g_=null;f=a.iq;l=0;m=a.kr;while(l<m){f.data[l]=null;l=l+1|0;}}
function ADw(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=h;j=e;k=c;while(k<j){l=(k+j|0)>>>1|0;m=g[l];n=f.bJ.bH.bx;o=i.bq;p=o.k-n.k;q=o.j-n.j;r=o.i-n.i;s=BQ(p*p+q*q+r*r);n=f.bJ.bH.bx;m=m.bq;q=m.k-n.k;r=m.j-n.j;p=m.i-n.i;if((Ci(BQ(q*q+r*r+p*p)-s)|0)<0)j=l;else k=l+1|0;}a:{b:{t=e-k|0;switch(t){case 1:break b;case 2:g[k+2|0]=g[k+1|0];break b;default:}L(b,k,b,k+1|0,t);break a;}g[k+1|0]=g[k];}g[k]=h;e=e+1|0;}}
function ADX(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=c+1|0;if(f==d)return 1;a:{b=b.data;g=f+1|0;h=b[f];i=b[c];h=h;i=i;j=e.bJ.bH.bx;h=h.bq;k=h.k-j.k;l=h.j-j.j;m=h.i-j.i;n=BQ(k*k+l*l+m*m);h=e.bJ.bH.bx;i=i.bq;k=i.k-h.k;l=i.j-h.j;m=i.i-h.i;if((Ci(BQ(k*k+l*l+m*m)-n)|0)>=0)while(g<d){h=b[g];i=b[g-1|0];h=h;i=i;j=e.bJ.bH.bx;h=h.bq;k=h.k-j.k;l=h.j-j.j;m=h.i-j.i;n=BQ(k*k+l*l+m*m);h=e.bJ.bH.bx;i=i.bq;k=i.k-h.k;l=i.j-h.j;m=i.i-h.i;if((Ci(BQ(k*k+l*l+m*m)-n)|0)<0)break a;g=g+1|0;}else{while(g<d){h=b[g];i=b[g-1|0];h=h;i=i;j=
e.bJ.bH.bx;h=h.bq;k=h.k-j.k;l=h.j-j.j;m=h.i-j.i;n=BQ(k*k+l*l+m*m);h=e.bJ.bH.bx;i=i.bq;k=i.k-h.k;l=i.j-h.j;m=i.i-h.i;if((Ci(BQ(k*k+l*l+m*m)-n)|0)>=0)break;g=g+1|0;}o=g+(-1)|0;f=c;while(f<o){e=b[f];d=f+1|0;b[f]=b[o];p=o+(-1)|0;b[o]=e;f=d;o=p;}}}return g-c|0;}
function V$(a){var b,c;a:{b:while(true){b=a.fz;if(b<=1)break a;c:{d:{b=b-2|0;if(b>=1){c=a.fh.data;if(c[b-1|0]<=(c[b]+c[b+1|0]|0))break d;}if(b>=2){c=a.fh.data;if(c[b-2|0]<=(c[b]+c[b-1|0]|0))break d;}c=a.fh.data;if(c[b]>c[b+1|0])break b;break c;}c=a.fh.data;if(c[b-1|0]<c[b+1|0])b=b+(-1)|0;}OG(a,b);}}}
function ACt(a){var b,c;while(true){b=a.fz;if(b<=1)break;b=b-2|0;if(b>0){c=a.fh.data;if(c[b-1|0]<c[b+1|0])b=b+(-1)|0;}OG(a,b);}}
function OG(a,b){var c,d,e,f,g,h,i,j;c=a.pU.data;d=c[b];e=a.fh.data;f=e[b];g=b+1|0;h=c[g];i=e[g];e[b]=f+i|0;j=a.fz;if(b==(j-3|0)){b=b+2|0;c[g]=c[b];e[g]=e[b];}a.fz=j-1|0;c=a.f1;j=Ql(c.data[h],c,d,f,0,a.g_);b=d+j|0;j=f-j|0;if(!j)return;c=a.f1;d=MP(c.data[(b+j|0)-1|0],c,h,i,i-1|0,a.g_);if(!d)return;if(j>d)ADK(a,b,j,h,d);else Uk(a,b,j,h,d);}
function MP(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;c=c.data;h=0;i=1;j=d+f|0;k=c[j];l=b;b=k;k=g.bJ.bH.bx;m=l.bq;n=m.k-k.k;o=m.j-k.j;p=m.i-k.i;q=BQ(n*n+o*o+p*p);k=g.bJ.bH.bx;b=b.bq;n=b.k-k.k;o=b.j-k.j;p=b.i-k.i;if((Ci(BQ(n*n+o*o+p*p)-q)|0)>0){r=e-f|0;while(true){s=Bm(i,r);if(s>=0)break;k=c[j+i|0];b=g.bJ.bH.bx;m=l.bq;n=m.k-b.k;o=m.j-b.j;p=m.i-b.i;q=BQ(n*n+o*o+p*p);b=g.bJ.bH.bx;k=k.bq;n=k.k-b.k;o=k.j-b.j;p=k.i-b.i;if((Ci(BQ(n*n+o*o+p*p)-q)|0)<=0)break;e=(i<<1)+1|0;if(e>0){h=i;i=e;continue;}e=r;h=i;i=e;}if(s
<=0)r=i;e=h+f|0;f=r+f|0;}else{r=f+1|0;while(true){e=Bm(i,r);if(e>=0)break;b=c[j-i|0];k=g.bJ.bH.bx;m=l.bq;o=m.k-k.k;p=m.j-k.j;n=m.i-k.i;n=BQ(o*o+p*p+n*n);k=g.bJ.bH.bx;b=b.bq;o=b.k-k.k;p=b.j-k.j;t=b.i-k.i;if((Ci(BQ(o*o+p*p+t*t)-n)|0)>0)break;e=(i<<1)+1|0;if(e>0){h=i;i=e;continue;}e=r;h=i;i=e;}if(e<=0)r=i;e=f-r|0;f=f-h|0;}h=e+1|0;while(h<f){j=h+((f-h|0)>>>1|0)|0;b=c[d+j|0];k=g.bJ.bH.bx;m=l.bq;n=m.k-k.k;o=m.j-k.j;p=m.i-k.i;p=BQ(n*n+o*o+p*p);k=g.bJ.bH.bx;b=b.bq;n=b.k-k.k;o=b.j-k.j;t=b.i-k.i;if((Ci(BQ(n*n+o*o+t*t)
-p)|0)>0){h=j+1|0;j=f;}f=j;}return f;}
function Ql(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;c=c.data;h=1;i=0;j=d+f|0;k=c[j];l=b;b=k;k=g.bJ.bH.bx;m=l.bq;n=m.k-k.k;o=m.j-k.j;p=m.i-k.i;q=BQ(n*n+o*o+p*p);k=g.bJ.bH.bx;b=b.bq;n=b.k-k.k;o=b.j-k.j;p=b.i-k.i;if((Ci(BQ(n*n+o*o+p*p)-q)|0)>=0){r=e-f|0;while(true){e=Bm(h,r);if(e>=0)break;b=c[j+h|0];k=g.bJ.bH.bx;m=l.bq;o=m.k-k.k;p=m.j-k.j;n=m.i-k.i;n=BQ(o*o+p*p+n*n);k=g.bJ.bH.bx;b=b.bq;o=b.k-k.k;p=b.j-k.j;s=b.i-k.i;if((Ci(BQ(o*o+p*p+s*s)-n)|0)<0)break;e=(h<<1)+1|0;if(e>0){i=h;h=e;continue;}e=r;i=h;h=e;}if(e
<=0)r=h;e=i+f|0;f=r+f|0;}else{r=f+1|0;while(true){t=Bm(h,r);if(t>=0)break;k=c[j-h|0];b=g.bJ.bH.bx;m=l.bq;n=m.k-b.k;o=m.j-b.j;p=m.i-b.i;q=BQ(n*n+o*o+p*p);b=g.bJ.bH.bx;k=k.bq;n=k.k-b.k;o=k.j-b.j;p=k.i-b.i;if((Ci(BQ(n*n+o*o+p*p)-q)|0)>=0)break;e=(h<<1)+1|0;if(e>0){i=h;h=e;continue;}e=r;i=h;h=e;}if(t<=0)r=h;e=f-r|0;f=f-i|0;}h=e+1|0;while(h<f){j=h+((f-h|0)>>>1|0)|0;b=c[d+j|0];k=g.bJ.bH.bx;m=l.bq;n=m.k-k.k;o=m.j-k.j;p=m.i-k.i;p=BQ(n*n+o*o+p*p);k=g.bJ.bH.bx;b=b.bq;n=b.k-k.k;o=b.j-k.j;s=b.i-k.i;if((Ci(BQ(n*n+o*o+s*
s)-p)|0)<0)f=j;else h=j+1|0;}return f;}
function Uk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.f1;g=f.data;h=R4(a,c);L(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){L(h,i,f,j,c);return;}if(c==1){h=h.data;L(f,k,f,j,l);g[j+l|0]=h[i];return;}m=a.g_;n=a.ix;a:{b:while(true){o=0;p=0;d=j;e=k;q=i;while(true){r=h.data;s=g[e];t=r[q];u=s;s=t;t=m.bJ.bH.bx;u=u.bq;v=u.k-t.k;w=u.j-t.j;x=u.i-t.i;v=BQ(v*v+w*w+x*x);t=m.bJ.bH.bx;s=s.bq;w=s.k-t.k;x=s.j-t.j;y=s.i-t.i;if((Ci(BQ(w*w+x*x+y*y)-v)|0)<0){j=d+1|0;k=e+1|0;g[d]=g[e];p=p+1|0;o=0;l=
l+(-1)|0;if(!l)break a;e=k;i=q;}else{j=d+1|0;i=q+1|0;g[d]=r[q];o=o+1|0;p=0;c=c+(-1)|0;if(c==1){q=i;k=e;break a;}}if((o|p)>=n)break;d=j;q=i;}k=e;while(true){b=Ql(g[k],h,i,c,0,m);if(!b){d=j;q=i;}else{L(h,i,f,j,b);j=j+b|0;q=i+b|0;c=c-b|0;if(c<=1)break a;d=j;}j=d+1|0;e=k+1|0;g[d]=g[k];l=l+(-1)|0;if(!l){k=e;break a;}d=MP(r[q],f,e,l,0,m);if(!d){o=j;k=e;}else{L(f,e,f,j,d);j=j+d|0;k=e+d|0;l=l-d|0;if(!l)break b;o=j;}j=o+1|0;i=q+1|0;g[o]=r[q];c=c+(-1)|0;if(c==1){q=i;break a;}n=n+(-1)|0;if(!((b<7?0:1)|(d<7?0:1)))break;}if
(n<0)n=0;n=n+2|0;}}if(n<1)n=1;a.ix=n;if(c==1){L(f,k,f,j,l);g[j+l|0]=r[q];}else{if(!c){s=new Be;s.c=1;s.d=1;s.f=B(643);H(s);}L(h,q,f,j,c);}}
function ADK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.f1;g=f.data;h=R4(a,e);L(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];k=c+(-1)|0;if(!k){L(h,0,f,l-j|0,e);return;}if(e==1){h=h.data;b=l-k|0;L(f,(m-k|0)+1|0,f,b+1|0,k);g[b]=h[j];return;}n=a.g_;o=a.ix;a:{b:while(true){p=0;q=0;i=l;while(true){r=h.data;s=r[j];t=g[m];s=s;t=t;u=n.bJ.bH.bx;s=s.bq;v=s.k-u.k;w=s.j-u.j;x=s.i-u.i;v=BQ(v*v+w*w+x*x);s=n.bJ.bH.bx;t=t.bq;x=t.k-s.k;w=t.j-s.j;y=t.i-s.i;if((Ci(BQ(x*x+w*w+y
*y)-v)|0)<0){l=i+(-1)|0;c=m+(-1)|0;g[i]=g[m];p=p+1|0;q=0;k=k+(-1)|0;if(!k)break a;m=c;d=j;}else{l=i+(-1)|0;d=j+(-1)|0;g[i]=r[j];q=q+1|0;p=0;e=e+(-1)|0;if(e==1){c=m;j=d;break a;}}if((p|q)>=o)break;i=l;j=d;}j=d;while(true){d=k-Ql(r[j],f,b,k,k-1|0,n)|0;if(!d){p=l;c=m;}else{l=l-d|0;c=m-d|0;k=k-d|0;L(f,c+1|0,f,l+1|0,d);if(!k)break a;p=l;}l=p+(-1)|0;i=j+(-1)|0;g[p]=r[j];e=e+(-1)|0;if(e==1){j=i;break a;}p=e-MP(g[c],h,0,e,e-1|0,n)|0;if(!p){q=l;j=i;}else{l=l-p|0;j=i-p|0;e=e-p|0;L(h,j+1|0,f,l+1|0,p);if(e<=1)break b;q
=l;}l=q+(-1)|0;m=c+(-1)|0;g[q]=g[c];k=k+(-1)|0;if(!k){c=m;break a;}o=o+(-1)|0;if(!((d<7?0:1)|(p<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.ix=o;if(e==1){b=l-k|0;L(f,(c-k|0)+1|0,f,b+1|0,k);g[b]=r[j];}else{if(!e){s=new Be;s.c=1;s.d=1;s.f=B(643);H(s);}L(h,0,f,l-(e-1|0)|0,e);}}
function R4(a,b){var c;c=a.kr;if(c<=b)c=b;a.kr=c;if(a.iq.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=(c|c>>16)+1|0;if(c>=0){b=a.f1.data.length>>>1|0;if(c<b)b=c;}a.iq=Bg(C,b);}return a.iq;}
function AMr(b,c,d){var e,f,g,h,i;if(c<=d){if(c<0){e=new LN;f=new Bi;f.b=D(20);f=(N(f,f.a,c,10)).s();e.c=1;e.d=1;e.f=f;H(e);}if(d<=b)return;e=new LN;f=new Bi;f.b=D(20);f=(N(f,f.a,d,10)).s();e.c=1;e.d=1;e.f=f;H(e);}e=new Be;f=new O;f.b=D(16);I(f,f.a,B(644));N(f,f.a,c,10);I(f,f.a,B(645));N(f,f.a,d,10);I(f,f.a,B(590));g=new M;h=f.b;c=f.a;P();i=D(c);g.e=i;L(h,0,i,0,c);e.c=1;e.d=1;e.f=g;H(e);}
var QM=G(EH);
function ALr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j>=d){n=h.gX;if(!((n.g-n.h|0)<2?0:1)){i=AZZ;break a;}j=j+(-1)|0;break a;}if(!((k[j]&64512)!=56320?0:1)){i=new Ca;i.bj=2;i.bC=1;break a;}j=j+(-1)|0;i=new Ca;i.bj=3;i.bC=2;break a;}if(m!=56320?0:1){i=new Ca;i.bj=2;i.bC=1;}if(l>=128){i=new Ca;i.bj=3;i.bC=1;j=j+(-1)|0;break a;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.hZ=j;h.ib=f;return i;}
var RL=G(EH);
function ARM(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j==d){n=h.gX;if(!((n.g-n.h|0)<2?0:1)){i=AZZ;break a;}j=j+(-1)|0;break a;}if(!((k[j]&64512)!=56320?0:1)){i=new Ca;i.bj=2;i.bC=1;break a;}j=j+(-1)|0;i=new Ca;i.bj=3;i.bC=2;break a;}if(m!=56320?0:1){i=new Ca;i.bj=2;i.bC=1;}if(l>=256){j=j+(-1)|0;i=new Ca;i.bj=3;i.bC=1;break a;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.hZ=j;h.ib=f;return i;}
function N2(){var a=this;EH.call(a);a.nE=0;a.oa=0;}
function ARs(a,b,c,d,e,f,g,h){var i,j;if(a.nE){if((f+2|0)>g){h=h.eJ;return !(h.h>=h.g?0:1)?AZ0:null;}a.nE=0;if(!a.oa){i=e.data;j=f+1|0;i[f]=(-2);f=j+1|0;i[j]=(-1);}else{i=e.data;j=f+1|0;i[f]=(-1);f=j+1|0;i[j]=(-2);}}return !a.oa?Ui(a,b,c,d,e,f,g,h):T4(a,b,c,d,e,f,g,h);}
function T4(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new Ca;i.bj=2;i.bC=1;break a;}if((f+2|0)>g){c=k+(-1)|0;m=h.eJ;if((m.g-m.h|0)<2?0:1)break a;i=AZ0;break a;}j=e.data;c=f+1|0;j[f]=(l&255)<<24>>24;f=c+1|0;j[c]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.gX;if((m.g-m.h|0)<2?0:1)break a;i=AZZ;break a;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new Ca;i.bj=2;i.bC=1;break a;}if((f+4|0)
>g){c=c+(-2)|0;m=h.eJ;if((m.g-m.h|0)<4?0:1)break a;i=AZ0;break a;}j=e.data;k=f+1|0;j[f]=(l&255)<<24>>24;f=k+1|0;j[k]=l>>8<<24>>24;k=f+1|0;j[f]=(n&255)<<24>>24;f=k+1|0;j[k]=n>>8<<24>>24;}}}h.hZ=c;h.ib=f;return i;}
function Ui(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new Ca;i.bj=2;i.bC=1;break a;}if((f+2|0)>g){c=k+(-1)|0;m=h.eJ;if((m.g-m.h|0)<2?0:1)break a;i=AZ0;break a;}j=e.data;c=f+1|0;j[f]=l>>8<<24>>24;f=c+1|0;j[c]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.gX;if((m.g-m.h|0)<2?0:1)break a;i=AZZ;break a;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new Ca;i.bj=2;i.bC=1;break a;}if((f+4|0)
>g){c=c+(-2)|0;m=h.eJ;if((m.g-m.h|0)<4?0:1)break a;i=AZ0;break a;}j=e.data;k=f+1|0;j[f]=l>>8<<24>>24;f=k+1|0;j[k]=(l&255)<<24>>24;k=f+1|0;j[f]=n>>8<<24>>24;f=k+1|0;j[k]=(n&255)<<24>>24;}}}h.hZ=c;h.ib=f;return i;}
function GI(){var a=this;D2.call(a);a.fF=0;a.ed=null;a.eP=null;a.ef=null;}
function AHY(a){var b,c,d,e,f;b=new $rt_globals.XMLHttpRequest();c=new M6;c.fP=a;c.gU=b;c=BT(c,"handleEvent");b.onreadystatechange=c;c=a.ef;d=a.eP;e=new H$;e.pB=c;e.kv=d;c=BT(e,"handleEvent");b.onprogress=c;d=a.ed;f=a.fF;b.open("GET",$rt_ustr(d),!!f);if(a.fF){d="arraybuffer";b.responseType=d;}b.send();}
function Ti(){var a=this;Dt.call(a);a.lf=null;a.Bt=null;}
function AV2(a,b){var c=new Ti();ATi(c,a,b);return c;}
function ATi(a,b,c){a.Bt=b;a.lf=c;}
function AH1(a,b){a.lf.d$.dW.kX=AZg(b);}
function AOK(a,b){b=a.lf.d$.dW;b.ho=1;b.ek=0;}
function AGJ(a,b,c){c=a.lf;b=null;H9(c.lw,c.lQ,c.k8,b);b=c.d$.dW;b.jD=1;b.ek=0;return 0;}
var WB=G();
function Gm(){C.call(this);this.pP=0;}
var A81=null;var A82=null;var A83=null;function ALj(a){return a.pP;}
function Ul(){var b;b=new Gm;b.pP=1;A81=b;b=new Gm;b.pP=0;A82=b;A83=J($rt_booleancls());}
function II(){var a=this;C.call(a);a.bm=null;a.R=0;}
var A84=null;function CP(a,b){var c,d,e,f;c=a.bm;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=D(e);L(c,0,f,0,a.R);a.bm=f;}
function Jh(a){var b,c,d;b=a.R+4|0;if(b>a.bm.data.length)CP(a,b);c=a.bm.data;d=a.R;b=d+1|0;a.R=b;c[d]=110;d=b+1|0;a.R=d;c[b]=117;b=d+1|0;a.R=b;c[d]=108;a.R=b+1|0;c[b]=108;}
function F_(a,b){var c,d,e;c=a.R;if(c==a.bm.data.length)CP(a,c+1|0);d=a.bm.data;e=a.R;a.R=e+1|0;d[e]=b;}
function MV(a,b,c,d){var e,f,g,h;if(b==(-2147483648)){e=B(646).e.data.length;b=a.R+e|0;if(b>a.bm.data.length)CP(a,b);G5(B(646),0,e,a.bm,a.R);a.R=b;return a;}if(b<0){e=a.R;if(e==a.bm.data.length)CP(a,e+1|0);f=a.bm.data;g=a.R;a.R=g+1|0;f[g]=45;b= -b|0;}a:{if(c>1){h=b>=0?1:2;g=b;while(true){g=g/10|0;if(!g)break;h=h+1|0;}e=c-h|0;while(true){if(e<=0)break a;c=a.R;if(c==a.bm.data.length)CP(a,c+1|0);f=a.bm.data;h=a.R;a.R=h+1|0;f[h]=d;e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){c=A84.data[U(Lo(S_(T(b),F(1410065408, 2)),
T(1000000000)))];d=a.R;if(d==a.bm.data.length)CP(a,d+1|0);f=a.bm.data;e=a.R;a.R=e+1|0;f[e]=c;}if(b>=100000000){c=A84.data[(b%1000000000|0)/100000000|0];d=a.R;if(d==a.bm.data.length)CP(a,d+1|0);f=a.bm.data;e=a.R;a.R=e+1|0;f[e]=c;}if(b>=10000000){c=A84.data[(b%100000000|0)/10000000|0];d=a.R;if(d==a.bm.data.length)CP(a,d+1|0);f=a.bm.data;e=a.R;a.R=e+1|0;f[e]=c;}if(b>=1000000){c=A84.data[(b%10000000|0)/1000000|0];d=a.R;if(d==a.bm.data.length)CP(a,d+1|0);f=a.bm.data;e=a.R;a.R=e+1|0;f[e]=c;}if(b>=100000)F_(a,A84.data[(b
%1000000|0)/100000|0]);F_(a,A84.data[(b%100000|0)/10000|0]);}if(b>=1000)F_(a,A84.data[(b%10000|0)/1000|0]);if(b>=100)F_(a,A84.data[(b%1000|0)/100|0]);if(b>=10)F_(a,A84.data[(b%100|0)/10|0]);F_(a,A84.data[b%10|0]);return a;}
function ZV(){A84=EE([48,49,50,51,52,53,54,55,56,57]);}
var RK=G();
var A33=null;function AKk(){AKk=W(RK);AFj();}
function AD$(){var b,c,d,e,f,g;AKk();b=A33;if(b.eR){b.eR=0;c=b.c8.data;d=null;e=0;f=c.length;if(e>f){b=new Be;b.c=1;b.d=1;H(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}c=b.cl.data;d=null;e=0;f=c.length;if(e>f){b=new Be;b.c=1;b.d=1;H(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}}Ec();BD(b,B(647),A4i);BD(A33,B(648),A4g);BD(A33,B(649),A4c);BD(A33,B(650),A4d);BD(A33,B(651),A4e);BD(A33,B(652),A4f);BD(A33,B(653),A4j);BD(A33,B(654),A4k);BD(A33,B(655),A4l);BD(A33,B(656),A4m);BD(A33,B(657),A4n);BD(A33,B(658),A4o);BD(A33,B(659),A4p);BD(A33,
B(660),A4q);BD(A33,B(661),A4r);BD(A33,B(662),A4s);BD(A33,B(663),A4t);BD(A33,B(664),A4u);BD(A33,B(665),A4v);BD(A33,B(666),A4w);BD(A33,B(667),A4x);BD(A33,B(668),A4y);BD(A33,B(669),A4z);BD(A33,B(670),A4A);BD(A33,B(671),A4B);BD(A33,B(672),A4C);BD(A33,B(673),A4D);BD(A33,B(674),A4E);BD(A33,B(675),A4F);BD(A33,B(676),A4G);BD(A33,B(677),A4H);BD(A33,B(678),A4I);BD(A33,B(679),A4J);BD(A33,B(680),A4K);}
function AFj(){A33=Et(51,0.800000011920929);AD$();}
var Ks=G(BF);
var LW=G(BF);
function Ls(){FY.call(this);this.pN=0;}
function AKc(a){var b,c,d,e,f,g;b=a.pN;c=new O;c.b=D(16);I(c,c.a,B(681));N(c,c.a,b,10);d=new M;e=c.b;f=c.a;P();g=D(f);d.e=g;L(e,0,g,0,f);return d;}
function Ko(){FY.call(this);this.pH=0;}
function AJu(a){var b,c,d,e,f,g;b=a.pH;c=new O;c.b=D(16);I(c,c.a,B(682));N(c,c.a,b,10);d=new M;e=c.b;f=c.a;P();g=D(f);d.e=g;L(e,0,g,0,f);return d;}
function MF(){var a=this;Dt.call(a);a.iz=null;a.r2=null;a.vG=null;a.kg=null;}
function AKU(a,b){a.iz.d$.dW.kX=AZg(b);}
function AFP(a,b){b=a.iz.d$.dW;b.ho=1;b.ek=0;}
function To(a,b,c){var d,e,f,g,h,i;d=$rt_globals.window.document.createElement("img");e=a.r2;if(e!==null)d.setAttribute("crossOrigin",$rt_ustr(e));e=a.kg;e.bt=e.bt+1|0;e=new Ob;e.lI=a;e.CA=b;e.uF=c;e.qK=d;d.addEventListener("load",BT(e,"handleEvent"),!!0);d.addEventListener("error",BT(e,"handleEvent"),!!0);if(!a.kg.vZ){b=$rt_ustr(b);d.src=b;}else{b=a.vG;c=ABA(c);e=new O;e.b=D(16);I(e,e.a,B(683));f=e.a;if(b===null)b=B(2);I(e,f,b);I(e,e.a,B(684));f=e.a;if(c===null)c=B(2);I(e,f,c);b=new M;g=e.b;h=e.a;P();i=D(h);b.e
=i;L(g,0,i,0,h);b=$rt_ustr(b);d.src=b;}return 0;}
function ALn(a,b,c){return To(a,b,c);}
function M6(){var a=this;C.call(a);a.gU=null;a.fP=null;}
function Y7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(ALx()){var $T=Rl();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.gU.readyState==4){if(a.gU.status==200){b=a.fP;if(b.ef.dr){if(A5R===null){c=new Cu;c.b6=AZW;d=new O;d.b=D(16);c.ba=d;c.b4=D(32);c.cm=0;Ct();c.ce=A5l;A5R=c;}e=A5R;b=b.ed;d=new O;d.b=D(16);I(d,d.a,B(500));f=d.a;if(b===null)b=B(2);I(d,f,b);b=new M;g=d.b;h=d.a;P();i
=D(h);b.e=i;L(g,0,i,0,h);Fu(Dy(e.ba,b),10);Cl(e);}e=a.gU.response;j=new $rt_globals.Int8Array(e);b=a.fP;d=b.eP;c=b.ed;b=new H_;b.dz=j;b.oF=e;d.iF(c,b);}else if(a.gU.status!=404&&a.gU.status!=403){try{k=T(100);$p=1;continue _;}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){}else{throw $$e;}}b=a.fP;d=b.ef;f=b.fF;c=b.ed;b=b.eP;if(d.dr){if(A5R===null){j=new Cu;j.b6=AZW;e=new O;e.b=D(16);j.ba=e;j.b4=D(32);j.cm=0;Ct();j.ce=A5l;A5R=j;}j=A5R;e=new O;e.b=D(16);I(e,e.a,B(113));I(e,e.a,c===null?B(2):c);l=new M;g=e.b;m
=e.a;P();i=D(m);l.e=i;L(g,0,i,0,m);e=j.ba;I(e,e.a,l);n=e.a;Bc(e,n,n+1|0);e.b.data[n]=10;Cl(j);}d.bt=d.bt+1|0;e=new GI;e.ef=d;e.fF=f;e.ed=c;e.eP=b;b=null;d=null;e.dI=new C;e.dF=1;e.eG=d;e.e3=b;h=A52;A52=h+1|0;e.e0=T(h);b=new EX;b.eI=e;FQ(b);}else{b=a.fP;b.eP.ir(b.ed);}b=a.fP.ef;b.bt=b.bt-1|0;}return;case 1:a:{try{VP(k);if(Ge()){break _;}break a;}catch($$e){$$je=Bw($$e);if($$je instanceof Dc){}else{throw $$e;}}}b=a.fP;d=b.ef;f=b.fF;c=b.ed;b=b.eP;if(d.dr){if(A5R===null){j=new Cu;j.b6=AZW;e=new O;e.b=D(16);j.ba
=e;j.b4=D(32);j.cm=0;Ct();j.ce=A5l;A5R=j;}j=A5R;e=new O;e.b=D(16);I(e,e.a,B(113));I(e,e.a,c===null?B(2):c);l=new M;g=e.b;m=e.a;P();i=D(m);l.e=i;L(g,0,i,0,m);e=j.ba;I(e,e.a,l);n=e.a;Bc(e,n,n+1|0);e.b.data[n]=10;Cl(j);}d.bt=d.bt+1|0;e=new GI;e.ef=d;e.fF=f;e.ed=c;e.eP=b;b=null;d=null;e.dI=new C;e.dF=1;e.eG=d;e.e3=b;h=A52;A52=h+1|0;e.e0=T(h);b=new EX;b.eI=e;FQ(b);b=a.fP.ef;b.bt=b.bt-1|0;return;default:AFA();}}Rl().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AD6(a,b){var $p,$z;$p=0;if(ALx()){var $T=Rl();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Y7(a,b);if(Ge()){break _;}return;default:AFA();}}Rl().s(a,b,$p);}
var LN=G(Y);
function Ob(){var a=this;C.call(a);a.CA=null;a.uF=null;a.qK=null;a.lI=null;}
function WS(a,b){var c;if(BA($rt_str(b.type),B(685))){b=a.lI.iz.d$.dW;b.ho=1;b.ek=0;}else{b=a.uF;b.oW=a.qK;c=a.lI.iz;H9(c.lw,c.lQ,c.k8,b);b=c.d$.dW;b.jD=1;b.ek=0;}b=a.lI.kg;b.bt=b.bt-1|0;}
function AJ$(a,b){WS(a,b);}
$rt_packages([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang",-1,"physx"]);
$rt_metadata([C,0,0,[],0,3,0,0,["dA",AY4(AJb),"dH",AY5(AOs),"s",AY4(AHO)],Y1,0,C,[],0,3,0,0,0,F4,0,C,[],0,3,0,A0S,0,Ml,0,C,[],3,3,0,0,0,K2,0,C,[Ml],0,3,0,0,0,CT,0,C,[],3,3,0,0,0,ACI,0,K2,[CT],0,3,0,0,0,CL,0,C,[],3,3,0,0,0,FM,0,C,[CL],0,3,0,0,0,C2,0,C,[],3,3,0,0,0,BX,0,C,[],3,3,0,0,0,BC,0,C,[C2,BX],1,3,0,0,["s",AY4(ALy)],EB,0,BC,[],12,3,0,AWx,0,FR,0,C,[],0,3,0,0,0,K6,0,C,[],3,3,0,0,0,Iz,0,FR,[K6],0,3,0,0,0,Gk,0,C,[],3,3,0,0,0,Dh,0,C,[],3,3,0,0,0,GG,0,C,[Gk,Dh],0,3,0,0,0,Gt,0,C,[],3,3,0,0,0,BS,0,C,[Gt],0,3,0,
0,0,G3,0,BS,[],0,3,0,0,0,AAI,0,G3,[],0,0,0,0,0,FT,0,BC,[],12,3,0,ATT,0,LH,0,C,[],3,3,0,0,0,IE,0,C,[LH],3,3,0,0,0,Fm,0,C,[],3,3,0,0,0,Do,0,C,[Fm],1,3,0,0,0,ACp,0,Do,[],0,0,0,0,0,Lt,0,GG,[],0,3,0,0,0,Hx,0,C,[Gt],0,3,0,0,0,VS,0,C,[],1,3,0,0,0,S8,0,C,[],0,3,0,0,0,Sp,0,C,[],3,3,0,0,0,KB,0,C,[Sp],0,3,0,0,0,AAp,0,KB,[],0,0,0,0,0,XP,0,FM,[],0,3,0,0,0,OZ,0,C,[],32,0,0,A01,0,Zd,0,C,[],1,3,0,0,0,Qp,0,C,[],32,0,0,A03,0,ACo,0,Do,[],0,0,0,0,0,Fs,0,C,[LH],0,3,0,0,0,Qk,0,Fs,[IE],0,3,0,0,0,GC,0,C,[],4,3,0,A1b,0,KO,0,C,[Gt],
1,3,0,0,0,Sl,0,G3,[],0,3,0,0,0,OE,0,C,[],0,3,0,0,0,Ji,0,C,[],0,3,0,A1f,0,Ly,0,C,[Gt],1,3,0,0,0,Ip,0,Fs,[IE],0,3,0,0,0]);
$rt_metadata([Sm,0,Fs,[IE],0,3,0,0,0,DI,0,BS,[],0,3,0,0,0,Sb,0,Ip,[],0,3,0,0,0,U8,0,FM,[],0,3,0,0,0,JY,0,C,[],3,3,0,0,0,YT,0,FM,[],0,3,0,0,0,W7,0,C,[CL],4,3,0,0,0,Mf,0,C,[],32,0,0,A1h,0,Cq,0,BC,[],12,3,0,Zz,0,B_,0,C,[CL],1,3,0,0,0,E5,0,B_,[],1,3,0,0,0,Xy,0,E5,[],0,3,0,0,0,AAd,0,E5,[],0,3,0,0,0,CJ,0,B_,[],1,3,0,0,0,ET,0,CJ,[],1,3,0,0,0,Tj,0,ET,[],0,3,0,0,0,Uy,0,C,[Gt],0,0,0,0,0,L7,0,B_,[],0,3,0,0,0,Vg,0,L7,[],0,3,0,0,0,Wu,0,B_,[],0,3,0,0,0,YP,0,B_,[],0,3,0,0,0,ABn,0,B_,[],0,3,0,0,0,ABR,0,C,[],0,3,0,0,0,KJ,0,
B_,[],1,3,0,0,0,Yx,0,KJ,[],0,3,0,0,0,VD,0,CJ,[],0,3,0,0,0,ACk,0,CJ,[],0,3,0,0,0,ACJ,0,ET,[],0,3,0,0,0,AAE,0,B_,[],0,3,0,0,0,AAO,0,ET,[],0,3,0,0,0,ADI,0,CJ,[],0,3,0,0,0,ADg,0,CJ,[],0,3,0,0,0,WK,0,B_,[],0,3,0,0,0,Yh,0,CJ,[],0,3,0,0,0,Yo,0,B_,[],0,3,0,0,0,WY,0,B_,[],0,3,0,0,0,Yy,0,E5,[],0,3,0,0,0,TO,0,CJ,[],0,3,0,0,0,ADJ,0,B_,[],0,3,0,0,0,AAl,0,ET,[],0,3,0,0,0,WN,0,E5,[],0,3,0,0,0,ZU,0,B_,[],0,3,0,0,0,Uz,0,CJ,[],0,3,0,0,0,XX,0,CJ,[],0,3,0,0,0,NP,0,C,[CT],0,3,0,0,0,CU,0,Iz,[JY],0,3,0,0,0,C4,0,CU,[],0,3,0,A1y,0,F1,
0,C4,[Gk],0,3,0,0,0,Kw,0,F1,[],0,3,0,0,0,Vz,0,Kw,[],0,3,0,0,0]);
$rt_metadata([ACm,0,BS,[],0,0,0,0,0,Ld,0,CU,[],0,3,0,0,0,Pq,0,C,[],3,3,0,0,0,EI,0,C,[Pq],1,3,0,0,0,WD,0,EI,[],0,0,0,0,0,C9,0,FR,[JY],0,3,0,0,0,TZ,0,C9,[],0,3,0,0,0,ACl,0,BS,[],0,0,0,0,0,BO,0,C,[],1,3,0,AFn,0,Qv,0,BO,[],0,0,0,0,0,AAq,0,BO,[],0,0,0,0,0,JQ,0,DI,[],0,3,0,0,0,Yu,0,JQ,[],0,3,0,0,0,Se,0,BO,[],0,0,0,0,0,ADy,0,BS,[],0,0,0,0,0,Hq,0,C4,[],0,3,0,0,0,AAr,0,BO,[],0,0,0,0,0,Gi,0,C,[],3,3,0,0,0,Em,0,C,[BX,Gi],0,3,0,0,0,Ee,"Table$DebugRect",12,Em,[],0,3,0,AYP,0,WG,0,EI,[],0,0,0,0,0,Fo,0,C9,[Gk],0,3,0,0,0,VH,
0,Fo,[],0,3,0,0,0,X1,0,BS,[],0,0,0,0,0,Og,0,C,[],3,3,0,0,0,ABq,0,C,[Og],0,3,0,0,0,Gn,0,C,[],0,3,0,0,0,Gy,0,Gn,[],0,3,0,0,0,Q8,0,Gy,[],0,3,0,0,0,Lp,0,C9,[Gk],0,3,0,0,0,Xf,0,Lp,[],0,3,0,0,0,AEr,0,Ld,[],0,0,0,0,0,JZ,0,CU,[],0,3,0,0,0,AEQ,0,F1,[],0,3,0,0,0,LK,0,C9,[K6],0,3,0,0,0,Sc,0,BO,[],0,0,0,0,0,Rt,0,C,[],0,3,0,0,0,WV,0,C,[Fm],0,0,0,0,0,Yv,0,BS,[],0,0,0,0,0,Zi,0,Do,[],0,0,0,0,0,Xz,0,C,[],0,3,0,0,0,ABa,0,BS,[],0,0,0,0,0,AEg,0,DI,[],0,0,0,0,0,XZ,0,Hx,[],0,0,0,0,0,Qr,0,BO,[],0,0,0,0,0,Qu,0,BO,[],0,0,0,0,0,P0,0,
C,[],3,3,0,0,0,Ju,0,C,[],0,3,0,0,0,M2,0,Ju,[],0,3,0,0,0,WE,0,EI,[],0,0,0,0,0]);
$rt_metadata([ACj,0,KO,[],0,0,0,0,0,ACn,0,Ly,[],0,0,0,0,0,ADz,0,BS,[],0,0,0,0,0,ADA,0,DI,[],0,0,0,0,0,Sd,0,BO,[],0,0,0,0,0,Ea,0,C,[CL],0,3,0,A1S,0,Pk,0,Gy,[],0,3,0,0,0,Ya,0,BS,[],0,0,0,0,0,Ub,0,Do,[],0,0,0,0,0,Qw,0,BO,[],0,0,0,0,0,VV,0,CU,[],0,3,0,0,0,X0,0,BS,[],0,0,0,0,0,PC,0,C,[],0,3,0,0,0,Hr,0,BO,[],0,3,0,0,0,WW,0,JZ,[],0,3,0,0,0,Qs,0,BO,[],0,0,0,0,0,Px,0,C9,[Gk],0,3,0,0,0,X9,0,Lt,[],0,0,0,0,0,RT,0,C,[],0,3,0,0,0,J5,0,C9,[],0,3,0,A1W,0,Ni,0,C,[],0,3,0,0,0,AAs,0,BO,[],0,0,0,0,0,Sf,0,BO,[],0,0,0,0,0,ABW,0,
Hq,[],0,3,0,0,0,Qt,0,BO,[],0,0,0,0,0,O0,0,C,[],0,3,0,0,0,AEc,0,C,[],0,3,0,0,0,Dn,0,BC,[],12,3,0,AYt,0,AEl,0,BO,[],0,0,0,0,0,XQ,0,Do,[],0,0,0,0,0,CA,0,C,[],1,3,0,0,0,Sg,0,CA,[],0,0,0,0,0,T3,0,C,[P0],0,3,0,0,0,RY,0,C,[],0,3,0,0,0,PM,0,C,[],0,3,0,0,0,Qm,0,C,[],0,3,0,0,0,Jj,0,BS,[],0,3,0,0,0,Ua,0,Do,[],0,0,0,0,0,ADB,0,LK,[],0,0,0,0,0,T7,0,C,[],3,3,0,0,0,Yb,0,BS,[],0,0,0,0,0,AEG,0,CU,[],0,3,0,0,0,AAc,0,CU,[],0,3,0,0,0,X$,0,DI,[],0,0,0,0,0,Lw,0,C,[],0,3,0,0,0,WC,0,Lw,[],0,0,0,0,0,ADn,0,FR,[CT],0,3,0,0,0,TF,0,BS,[],
0,0,0,0,0,AB6,0,F1,[],0,3,0,0,0,Zw,0,BS,[],0,0,0,0,0]);
$rt_metadata([AD7,0,DI,[],0,0,0,0,0,Ry,0,Gn,[],0,3,0,0,0,AAg,0,CU,[],0,3,0,0,0,PF,0,C,[],0,3,0,0,0,O7,0,C,[],0,3,0,0,0,Zl,0,C9,[],0,3,0,0,0,AEh,0,GG,[],0,0,0,0,0,TG,0,BS,[],0,0,0,0,0,QO,0,CU,[],0,3,0,0,0,AEq,0,Jj,[],0,3,0,0,0,TH,0,C4,[],0,0,0,0,0,WF,0,EI,[],0,0,0,0,0,SN,0,C,[],1,3,0,0,0,R_,0,C,[],0,3,0,0,0,DQ,0,C,[BX],0,3,0,A2c,0,Bk,0,C,[],1,3,0,DP,0,UI,0,Bk,[],0,3,0,0,0,XS,0,C,[],0,3,0,0,0,QZ,0,Bk,[],0,0,0,0,0,ADR,0,C,[],0,3,0,0,0,EM,0,Bk,[],0,3,0,0,0,HB,0,EM,[],0,3,0,0,0,Hu,0,EM,[],0,3,0,0,0,I8,0,C,[],3,3,
0,0,0,Vi,0,C,[I8],0,3,0,0,0,Q2,0,Bk,[],0,0,0,0,0,ACw,0,C,[Gi],0,3,0,0,0,QY,0,Bk,[],0,0,0,0,0,Hw,0,Bk,[],0,3,0,0,0,QX,0,Bk,[],0,0,0,0,0,QW,0,Bk,[],0,0,0,0,0,IZ,0,C,[],4,3,0,0,0,S6,0,CA,[],0,0,0,0,0,IM,0,C,[],3,3,0,0,0,By,0,C,[BX,IM],0,3,0,0,0,Z8,0,Bk,[],0,0,0,0,0,Gw,0,Bk,[],0,3,0,0,0,Zj,0,C,[],0,3,0,0,0,Q4,0,Bk,[],0,0,0,0,0,Sv,0,Gw,[],0,3,0,0,0,WR,0,C,[CL],0,3,0,0,0,ED,0,BC,[],12,3,0,AX1,0,PJ,0,C,[],0,3,0,A20,0,H2,0,Bk,[],0,3,0,0,0,X5,0,H2,[],0,3,0,0,0,Qc,0,Bk,[],0,0,0,0,0,ZN,0,C,[BX],4,3,0,0,0,QV,0,Bk,[],0,
0,0,0,0,DW,0,C,[BX,IM],0,3,0,AXO,0,T5,0,Hw,[],0,3,0,0,0]);
$rt_metadata([Xs,0,Bk,[],0,3,0,0,0,U9,0,C,[],0,3,0,0,0,AEy,0,C,[Gi],0,3,0,0,0,Q0,0,Bk,[],0,0,0,0,0,ADt,0,Bk,[],0,3,0,0,0,Z9,0,Bk,[],0,0,0,0,0,Xo,0,Hw,[],0,3,0,0,0,JA,0,C,[BX],0,3,0,A29,0,JV,0,C,[BX],0,3,0,AYV,0,KL,0,C,[BX],0,3,0,AXu,0,Vm,0,C,[BX],0,3,0,0,0,Ts,0,C,[BX],0,3,0,0,0,AA7,0,C,[BX,Gi],0,3,0,0,0,Xq,0,C,[I8],0,3,0,0,0,QH,0,C,[],4,3,0,AXG,0,Ck,0,C,[],4,3,0,A3z,0,Uf,0,C,[],4,3,0,0,0,WH,0,H2,[],0,3,0,0,0,DF,0,C,[BX],0,3,0,Gq,0,ND,0,C,[],3,3,0,0,0,K7,0,C,[ND,BX],0,3,0,0,0,P5,0,K7,[],0,3,0,0,0,Z7,0,Bk,[],
0,0,0,0,0,Q1,0,Bk,[],0,0,0,0,0,I_,0,C,[],0,3,0,AMx,0,Dw,0,C,[BX],0,3,0,HE,0,S0,0,C,[],0,3,0,0,0,AAa,0,C,[],0,3,0,0,0,Bl,0,C,[BX,IM],0,3,0,CD,0,WU,0,C,[BX,Gi],0,3,0,0,0,VW,0,CA,[],0,0,0,0,0,PA,0,Gw,[],0,3,0,0,0,AAt,0,C,[I8],0,3,0,0,0,Ut,0,C,[],0,3,0,0,0,ACL,0,C,[BX],0,3,0,0,0,Jm,0,C,[BX],0,3,0,0,0,Qe,0,Bk,[],0,0,0,0,0,ACN,0,C,[],0,3,0,0,0,Ux,0,C,[],0,3,0,0,0,AA3,0,C,[],0,3,0,0,0,ACK,0,C,[BX],0,3,0,0,0,ZH,0,C,[],3,3,0,0,0,W0,0,C,[BX],0,3,0,0,0,Q9,0,C,[],0,0,0,0,0,C5,"GlyphLayout",14,C,[CL],0,3,0,Ek,["dK",AY4(ACV),
"s",AY4(APF)],DR,0,C,[],0,3,0,0,0,Z4,0,DR,[],0,3,0,0,0,Kv,"BitmapFont",14,C,[CT],0,3,0,0,0,QJ,0,C,[],0,3,0,A4b,0,Bn,"Color",13,C,[],0,3,0,Ec,["dH",AY5(AJL),"dA",AY4(ANM),"s",AY4(AI7)]]);
$rt_metadata([JB,0,C,[CT],1,3,0,0,0,HI,0,JB,[],0,3,0,0,["s",AY4(AO0)],BN,"Array",8,C,[Dh],0,3,0,0,["dA",AY4(AG0),"dH",AY5(ANn),"s",AY4(AS9)],Jz,0,C,[Dh],0,3,0,0,0,Xa,0,Jz,[],0,3,0,0,0,AEb,0,C,[Dh],0,3,0,0,0,Eq,0,C,[],4,3,0,0,0,AEk,0,C,[],0,3,0,0,0,Yj,0,C,[],0,3,0,0,0,Z6,0,C,[],0,3,0,0,0,Y6,0,C,[],0,3,0,0,0,O$,0,C,[],0,3,0,A4W,0,TB,0,C,[],0,3,0,0,0,Zp,0,C,[],0,3,0,0,0,YQ,0,C,[],0,3,0,0,0,Za,0,C,[],0,3,0,0,0,ACu,0,C,[],0,3,0,0,0,WZ,0,C,[],0,3,0,0,0,ADr,0,C,[],0,3,0,0,0,X6,0,C,[],0,3,0,0,0,UB,0,C,[],0,3,0,0,0,Ve,
0,C,[],0,3,0,0,0,FW,0,BC,[],12,3,0,AXl,0,Zs,0,C,[],0,3,0,0,0,QN,0,C,[],3,3,0,0,0,Dl,0,C,[],0,3,0,0,0,TK,0,Dl,[],0,3,0,0,0,TJ,0,Dl,[],0,3,0,0,0,YA,0,Dl,[],0,3,0,0,0,VT,0,Dl,[],0,3,0,0,0,AA9,0,Dl,[],0,3,0,0,0,KR,0,Dl,[],0,3,0,0,0,VO,0,KR,[],0,3,0,0,0,Hm,0,C,[],3,3,0,0,0,Wm,0,C,[CT,Hm],0,3,0,0,0,Fq,0,C,[],3,3,0,0,0,AA2,0,C,[Fq,Hm],0,3,0,0,0,ADo,0,C,[Fq],0,3,0,0,0,UX,0,C,[],0,3,0,0,0,EU,0,C,[Fq],0,3,0,0,0,AAy,0,EU,[],0,3,0,0,0,Hh,0,EU,[Hm,Fq],1,3,0,0,0,DE,0,Hh,[],1,3,0,A41,0,AAT,0,C,[],0,3,0,0,0,ACs,0,DE,[],4,3,
0,0,0,Ye,0,DE,[],4,3,0,0,0,Si,0,EU,[],0,3,0,0,0,Kq,0,EU,[],0,3,0,0,0,Tv,0,Kq,[],0,3,0,0,0,VL,0,DE,[],4,3,0,0,0]);
$rt_metadata([GJ,0,Hh,[],1,3,0,0,0,Y2,0,GJ,[],4,3,0,0,0,Yc,0,DE,[],4,3,0,0,0,Zc,0,DE,[],4,3,0,0,0,Y0,0,GJ,[],4,3,0,0,0,EF,0,BC,[],12,3,0,AWC,0,FZ,0,C,[CT,Fq,Hm],1,3,0,0,0,Ln,0,FZ,[Fq],1,3,0,0,0,SQ,0,Ln,[Fq],0,3,0,0,0,EL,0,BC,[],12,3,0,AW4,0,CH,0,FZ,[],1,3,0,0,0,HV,0,CH,[],1,3,0,0,0,UT,0,C,[],0,3,0,0,0,EW,0,CH,[],1,3,0,A5c,0,Ez,0,EW,[],1,3,0,0,0,F2,0,Ez,[],1,3,0,0,0,Wl,0,F2,[],0,3,0,0,0,Ht,0,CH,[],1,3,0,0,0,AEB,0,Ht,[],0,3,0,0,0,ACr,0,CH,[],0,3,0,0,0,FE,0,CH,[],1,3,0,0,0,TE,0,FE,[],0,3,0,0,0,G2,0,CH,[],1,3,0,
0,0,Wi,0,Ez,[],0,3,0,0,0,Xm,0,Ez,[],0,3,0,0,0,J$,0,CH,[],1,3,0,0,0,AAz,0,J$,[],0,3,0,0,0,Up,0,FE,[],0,3,0,0,0,Yi,0,F2,[],0,3,0,0,0,AAu,0,CH,[],0,3,0,0,0,Zh,0,FE,[],0,3,0,0,0,AAD,0,CH,[],0,3,0,0,0,ABs,0,EW,[],0,3,0,0,0,Xr,0,CA,[],0,0,0,0,0,UH,0,CA,[],0,0,0,0,0,UP,0,Ez,[],0,3,0,0,0,AAN,0,G2,[],0,3,0,0,0,ADP,0,HV,[],0,3,0,0,0,ZR,0,HV,[],0,3,0,0,0,ABi,0,G2,[],0,3,0,0,0,YM,0,F2,[],0,3,0,0,0,AD8,0,Ht,[],0,3,0,0,0,ER,0,FZ,[],1,3,0,0,0,Y4,0,ER,[],0,3,0,0,0,FJ,0,C,[],1,3,0,0,0,AAZ,0,FJ,[],0,3,0,0,0,ABE,0,ER,[],0,3,0,
0,0,ACq,0,ER,[],0,3,0,0,0,AC1,0,FJ,[],0,3,0,0,0,V9,0,ER,[],0,3,0,0,0]);
$rt_metadata([ACv,0,FJ,[],0,3,0,0,0,JM,0,C,[],3,3,0,0,0,Mj,0,C,[],3,3,0,0,0,BZ,0,C,[JM,Mj],0,3,0,0,["s",AY4(ANS)],Vh,0,C,[],4,0,0,0,0,UM,0,C,[],4,3,0,0,0,Dc,0,C,[],0,3,0,0,["is",AY4(ARD)],CE,0,Dc,[],0,3,0,0,0,BF,"RuntimeException",21,CE,[],0,3,0,0,0,X_,"ClassCastException",21,BF,[],0,3,0,0,0,HY,"CharSequence",21,C,[],3,3,0,0,0,M,"String",21,C,[BX,C2,HY],0,3,0,P,["s",AY4(CZ),"dH",AY5(BA),"dA",AY4(APB)],FH,0,Dc,[],0,3,0,0,0,H7,0,FH,[],0,3,0,0,0,Xe,0,H7,[],0,3,0,0,0,Ey,0,C,[BX],1,3,0,0,0,EA,0,Ey,[C2],0,3,0,0,0,Bi,
0,C,[BX,HY],0,0,0,0,["ic",AY5(M_),"s",AY4(AOU)],Hb,0,C,[],3,3,0,0,0,O,0,Bi,[Hb],0,3,0,0,["tG",AY8(AM9),"yY",AY7(AJA),"s",AY4(Cm),"ic",AY5(ANl),"pA",AY6(AN4),"pi",AY6(CM)],HN,0,H7,[],0,3,0,0,0,AAo,0,HN,[],0,3,0,0,0,WM,0,HN,[],0,3,0,0,0,W$,0,C,[],0,3,0,0,0,NZ,0,C,[],3,3,0,0,0,KG,0,C,[NZ,Fm],0,3,0,0,["ex",AY4(XH)],R6,0,C,[],3,3,0,0,0,K_,0,C,[R6],1,3,0,0,0,AAQ,0,K_,[],0,3,0,0,0,I2,0,C,[],4,3,0,0,0,ABP,0,C,[],4,3,0,0,0,E1,0,BC,[],12,3,0,Iu,0,MD,0,C,[],3,3,0,0,0,B5,0,C,[],3,3,0,0,0,O9,0,C,[B5],3,3,0,0,0,K9,0,C,[MD,
O9],0,3,0,IA,["HD",AY5(AQj)],AAG,0,C,[],0,3,0,0,0,OS,0,C,[],0,3,0,Kr,0,Js,0,Ey,[C2],0,3,0,0,0,Jg,0,C,[],0,3,0,0,0,Xx,0,C,[],4,3,0,0,0,Ex,"GlyphLayout$GlyphRun",14,C,[CL],0,3,0,0,["dK",AY4(AMZ),"s",AY4(TQ)],Dq,0,C,[],0,3,0,0,["dA",AY4(ANP),"dH",AY5(ATH),"s",AY4(ANu)],K0,0,C,[],3,3,0,0,0,Ka,0,C,[K0],1,3,0,0,0,EV,0,C,[],3,3,0,0,0,Gl,0,Ka,[EV,BX],0,3,0,0,0,LY,0,C,[],3,3,0,0,0,Ri,0,C,[LY],0,3,0,0,0,Y,"IndexOutOfBoundsException",21,BF,[],0,3,0,0,0]);
$rt_metadata([ZQ,0,C,[],4,3,0,0,0,CB,"NullPointerException",21,BF,[],0,3,0,0,0,Jn,"ArrayStoreException",21,BF,[],0,3,0,0,0,Dr,0,C,[C2],0,3,0,0,0,VE,0,C,[],0,3,0,0,0,Me,0,C,[],3,3,0,0,0,M7,0,C,[Me],0,3,0,0,0,N1,0,C,[],0,3,0,0,0,Ku,0,C,[],0,3,0,0,0,QB,0,C,[],3,3,0,0,0,J0,0,C,[QB],0,3,0,I3,0,Te,0,C,[],0,3,0,0,0,Dt,0,C,[],0,3,0,0,["jc",AY5(AOw)],Qf,0,C,[],3,3,0,0,0,Eu,0,C,[B5],3,3,0,0,0,Zt,0,C,[Qf,Eu],0,3,0,0,["dG",AY5(AGc)],PH,0,C,[],3,3,0,0,0,ABH,0,C,[PH],0,3,0,0,0,AAR,0,C,[QN],0,3,0,0,0,QC,0,C,[],3,3,0,0,0,W6,
0,C,[QC],0,3,0,0,0,NA,0,C,[],3,3,0,0,0,AAL,0,C,[NA],0,3,0,0,0,El,0,C,[],0,3,0,0,0,Re,0,C,[],3,3,0,0,0,QL,0,C,[Re],3,3,0,0,0,Wp,0,C,[QL],0,3,0,0,0,Tf,0,C,[Eu],0,0,0,0,["dG",AY5(AQX)],Tg,0,C,[Eu],0,0,0,0,["dG",AY5(AUj)],Be,"IllegalArgumentException",21,BF,[],0,3,0,0,0,Uq,0,C,[Dh],0,3,0,0,0,Pv,0,Ey,[C2],0,3,0,0,0,Yw,0,C,[B5],1,3,0,0,0,KW,0,C,[],3,3,0,0,0,H5,"TeaGL20",5,C,[KW],0,3,0,0,["oi",AY5(AMb),"kU",AY6(ALl),"c1",AY6(AUc),"h6",AY6(AH6),"pb",AY6(AM5),"o9",AY8(AKS),"d7",AY8(Oy),"iB",AY8(Ox),"pe",AY5(ASx),"mL",
AY8(AIh),"oc",AY5(AMa),"nt",AY4(AUQ),"oA",AY5(AQk),"hF",AY5(ASy),"g5",AY5(AP7),"ge",AY5(AO2),"kR",AY7(AIU),"n1",AY8(AMN),"oX",AY8(AOE),"jb",AY5(AT0),"gF",AY5(AS6),"kQ",AY5(AFa),"pa",AY8(MY),"pE",AY8(Pn),"jp",AY6(AJY),"kB",AY6(K1),"ij",AY5(AUJ),"iA",AY7(P4),"ol",AY5(ANh),"od",AY7(NW),"ji",AY5(AKE),"kk",AY6(AKz),"mf",AY5(AGP),"mV",AY6(AIT),"pV",AY6(AE_),"f_",function(b,c,d,e,f,g,h,i,j){Qj(this,b,c,d,e,f,g,h,i,j);},"oU",AY7(AN2),"ig",AY7(APJ),"kV",AY6(AP6),"lN",AY5(AGS),"gx",function(b,c,d,e,f,g){ANE(this,b,c,
d,e,f,g);},"mB",AY8(AFw)],PG,0,C,[KW],3,3,0,0,0,L6,"TeaGL30",5,H5,[PG],0,3,0,0,["pX",AY5(AK2),"vs",AY8(AOT),"t0",function(b,c,d,e,f){AU$(this,b,c,d,e,f);},"qN",AY6(APm),"kB",AY6(AMT)],M8,"TeaGL30Debug",5,L6,[],0,3,0,0,["pX",AY5(AJ4),"vs",AY8(AHs),"t0",function(b,c,d,e,f){AT8(this,b,c,d,e,f);},"qN",AY6(AGH),"oi",AY5(AGm),"h6",AY6(AHn),"pb",AY6(AST),"pe",AY5(ASB),"mL",AY8(AN7),"hF",AY5(AGE),"g5",AY5(AS$),"kR",AY7(AJw),"n1",AY8(AQv),"jb",AY5(ARy),"ji",AY5(AE0),"mV",AY6(AFU),"f_",function(b,c,d,e,f,g,h,i,j){AOu(this,
b,c,d,e,f,g,h,i,j);},"oU",AY7(AJk),"mB",AY8(AKX),"kU",AY6(ANm),"c1",AY6(ATJ),"o9",AY8(AJ5),"d7",AY8(AOj),"iB",AY8(ATE),"oc",AY5(APc),"nt",AY4(AUP),"oA",AY5(AQM),"ge",AY5(AUF),"oX",AY8(AG3),"gF",AY5(AQP),"kQ",AY5(ASF),"pa",AY8(AL5),"pE",AY8(ASz),"jp",AY6(AOH),"kB",AY6(AKb),"iA",AY7(AIm),"ij",AY5(AFT),"od",AY7(AUN),"ol",AY5(AGs),"kk",AY6(AFV),"mf",AY5(AT2),"pV",AY6(AFQ),"ig",AY7(AGO),"kV",AY6(AHH),"lN",AY5(AVg),"gx",function(b,c,d,e,f,g){ARb(this,b,c,d,e,f,g);}],Oq,0,C,[],0,3,0,0,0,C7,0,BC,[],12,3,0,Mm,0,QR,0,
C,[B5],3,3,0,0,0,QD,0,C,[QR],0,0,0,0,["JD",AY4(AJo)],R2,"TeaGL20Debug",5,H5,[],0,3,0,0,["oi",AY5(ASa),"h6",AY6(AUo),"pb",AY6(AQF),"pe",AY5(AIt),"mL",AY8(AJh),"hF",AY5(AOi),"g5",AY5(AUX),"kR",AY7(AL_),"n1",AY8(AUw),"jb",AY5(AG8),"ji",AY5(ANc),"mV",AY6(APh),"f_",function(b,c,d,e,f,g,h,i,j){AKd(this,b,c,d,e,f,g,h,i,j);},"oU",AY7(AJF),"mB",AY8(AUK),"kU",AY6(AFO),"c1",AY6(AEY),"o9",AY8(AEV),"d7",AY8(AML),"iB",AY8(AK3),"oc",AY5(AU5),"nt",AY4(APD),"oA",AY5(AUT),"ge",AY5(APA),"oX",AY8(ALc),"gF",AY5(AUY),"kQ",AY5(AOQ),
"pa",AY8(AMO),"pE",AY8(AHq),"jp",AY6(ALm),"kB",AY6(AFB),"iA",AY7(AKi),"ij",AY5(AKn),"od",AY7(AF2),"ol",AY5(ARd),"kk",AY6(ASQ),"mf",AY5(ANJ),"pV",AY6(AUt),"ig",AY7(ASL),"kV",AY6(AUO),"lN",AY5(AF3),"gx",function(b,c,d,e,f,g){AH$(this,b,c,d,e,f,g);}],ABc,0,C,[Dh],0,3,0,0,0,YD,0,C,[],0,3,0,0,0,Ro,0,C,[B5],3,3,0,0,0,PO,0,C,[Ro],0,0,0,0,["DQ",AY4(AFL),"Gw",AY4(AI1),"Lg",AY4(AFu)],So,0,C,[],3,3,0,0,0,Su,0,C,[So],0,3,0,0,0,Mz,0,Dt,[],0,0,0,0,0]);
$rt_metadata([Rm,"CloneNotSupportedException",21,CE,[],0,3,0,0,0,Ik,0,CA,[],0,3,0,0,["i_",AY4(KF)],Fi,0,C,[B5],3,3,0,0,0,N6,0,C,[Fi],3,3,0,0,0,Pe,0,C,[Fi],3,3,0,0,0,O5,0,C,[Fi],3,3,0,0,0,Qd,0,C,[Fi],3,3,0,0,0,Sj,0,C,[Fi],3,3,0,0,0,Q3,0,C,[Fi,N6,Pe,O5,Qd,Sj],3,3,0,0,0,NC,0,C,[],3,3,0,0,0,Kb,0,C,[B5],3,3,0,0,0,TR,0,C,[B5,Q3,NC,Kb],1,3,0,0,["Ck",AY5(APZ),"Fh",AY6(ASm),"Ko",AY6(ARN),"HB",AY7(APR),"F7",AY5(ATV),"Gc",AY4(AIa),"ER",AY7(AFt)],KD,0,C,[],1,3,0,0,0,HT,0,KD,[K0,EV,BX],0,3,0,0,0,Lm,0,HT,[],0,3,0,0,0,W5,
0,C,[],0,3,0,0,0,D6,0,BC,[],12,3,0,F5,0,Du,0,C,[B5],1,3,0,0,0,VQ,0,Du,[],1,3,0,0,0,Vn,0,Du,[],1,3,0,0,0,Ym,0,Du,[],1,3,0,0,0,ZZ,0,Du,[],1,3,0,0,0,Xi,0,Du,[],1,3,0,0,0,OK,0,C,[Eu],0,0,0,0,["dG",AY5(AMw)],OL,0,C,[Eu],0,0,0,0,["dG",AY5(AUx)],OI,0,C,[Eu],0,0,0,0,["dG",AY5(AQD)],Py,0,CA,[],0,3,0,0,0,Ru,0,C,[B5],3,3,0,0,0,MQ,0,C,[Ru],0,0,0,0,["EB",AY4(AJU)],Vf,0,Du,[],1,3,0,0,0,O2,0,C,[BX],4,3,0,0,0,UA,0,C,[],4,3,0,0,0,Dk,"ReflectionException",9,CE,[],0,3,0,0,0,Ds,0,C,[],4,3,0,Bz,0,Kx,0,C,[],3,3,0,0,0,JL,0,C,[Kx],
0,0,0,0,0,Gv,0,C,[],3,3,0,0,0,JK,0,C,[Gv],0,0,0,0,0,LM,0,C,[],3,3,0,0,0,Y3,0,C,[LM],4,3,0,0,0,B8,"NumberFormatException",21,Be,[],0,3,0,0,0,NG,0,C,[],4,3,0,0,0,J4,0,BF,[],0,3,0,0,0,EG,0,CE,[],0,3,0,0,0,G$,"NoSuchMethodException",21,EG,[],0,3,0,0,0,B3,0,C,[],1,0,0,0,["cZ",AY7(AJm),"c3",AY8(ALd),"jV",AY4(AHG),"s",AY4(ARo),"bw",AY5(LO),"cx",AY5(ATj),"gv",AY4(AUp),"eY",AY4(JE)],ADZ,0,C,[B5],1,3,0,0,0,Wz,0,C,[B5],1,3,0,0,0,AEH,0,C,[B5],1,3,0,0,0,Kd,0,C,[B5],3,3,0,0,0]);
$rt_metadata([NK,0,C,[Kd],0,3,0,0,["CG",AY5(AH4)],Xb,0,C,[B5],1,3,0,0,0,NL,0,C,[Kd],0,3,0,0,["CG",AY5(AFy)],Mg,0,C,[],3,3,0,0,0,Hi,0,C,[Mg,EV],0,0,0,0,0,Iq,0,Hi,[],0,0,0,0,0,De,0,B3,[],0,0,0,Fr,["o",AY7(AGN),"S",AY4(ALP),"bp",AY5(AHo)],IY,0,C,[],0,0,0,0,0,C_,"PatternSyntaxException",17,Be,[],0,3,0,0,["is",AY4(AUk)],Ie,0,C,[Dh],3,3,0,0,0,Hp,0,C,[Ie],1,3,0,0,0,Pp,0,C,[Ie],3,3,0,0,0,My,0,C,[Pp],3,3,0,0,0,J6,0,Hp,[My],1,3,0,0,0,QI,0,C,[],3,3,0,0,0,Id,0,J6,[EV,BX,QI],0,3,0,0,0,Pl,0,De,[],0,0,0,0,["o",AY7(AF0),"S",
AY4(AI3),"bp",AY5(ARI)],Sw,0,De,[],0,0,0,0,["o",AY7(AII),"S",AY4(AME)],Oj,0,De,[],0,0,0,0,["o",AY7(AHD),"S",AY4(ATd)],PS,0,De,[],0,0,0,0,["o",AY7(AGg),"S",AY4(ASf),"bp",AY5(AQm)],Hv,0,De,[],0,0,0,0,["o",AY7(ATF),"S",AY4(AHV)],Co,0,B3,[],1,0,0,0,["o",AY7(AU6),"cA",AY4(ASD),"bp",AY5(AMy)],Rz,0,Co,[],0,0,0,0,["cd",AY6(AR7),"cZ",AY7(AKm),"c3",AY8(AIs),"S",AY4(ALR),"bp",AY5(AGa)],Ch,0,B3,[],0,0,0,0,["o",AY7(ALf),"bw",AY5(AQf),"S",AY4(AMJ),"cx",AY5(ANI),"bp",AY5(AQ1),"eY",AY4(AIi)],L5,0,Ch,[],0,0,0,0,["o",AY7(APW),
"S",AY4(ANY),"bp",AY5(ARg)],E4,0,L5,[],0,0,0,0,["o",AY7(AJp),"bw",AY5(AQ5),"S",AY4(AF7)],SZ,0,E4,[],0,0,0,0,["o",AY7(AP9),"bp",AY5(ATq),"S",AY4(AUn)],ACH,0,E4,[],0,0,0,0,["o",AY7(AHf),"bp",AY5(ASO),"S",AY4(AK6)],Xu,0,E4,[],0,0,0,0,["o",AY7(AIc),"bp",AY5(AVq),"S",AY4(APz)],Z5,0,E4,[],0,0,0,0,["o",AY7(AFo),"bp",AY5(ARz),"S",AY4(AHE)],Hj,0,Ch,[],0,0,0,0,["o",AY7(AFM),"cZ",AY7(AN9),"c3",AY8(ARO),"cx",AY5(ANA),"gv",AY4(AQh),"eY",AY4(AUu)],Hz,0,C,[],1,0,0,0,0,Bo,0,Hz,[],1,0,0,Bv,["b8",AY4(AHi),"fE",AY4(AGr),"jw",
AY4(ASu),"iN",AY4(AUm)],Cx,0,Bo,[],0,0,0,0,["A",AY5(AIy),"b8",AY4(AVp),"fE",AY4(AJ_),"jw",AY4(ATa),"s",AY4(AO_),"iN",AY4(AKs)],JI,"MissingResourceException",16,BF,[],0,3,0,0,0,EP,0,B3,[],1,0,0,0,["cx",AY5(ARS),"bp",AY5(ATA),"eY",AY4(AOB)],DG,0,EP,[],0,0,0,0,["o",AY7(AFq),"S",AY4(AIf)],F6,0,DG,[],0,0,0,0,["o",AY7(AGR),"S",AY4(AHm)],DL,0,EP,[],0,0,0,0,["o",AY7(AFK),"S",AY4(AL8)],F3,0,DG,[],0,0,0,0,["o",AY7(AOh),"bw",AY5(AVt)],ACZ,0,DG,[],0,0,0,0,["o",AY7(AUW),"cZ",AY7(AO4)],Bu,0,C,[],1,0,0,0,0,MH,0,Hz,[EV],0,
0,0,0,["s",AY4(P9)],Ng,0,B3,[],0,0,0,0,["o",AY7(AM2),"S",AY4(AP5),"bp",AY5(AQe)],Bp,0,C,[EV,BX],0,3,0,0,0,Mv,0,Ch,[],0,0,0,0,["S",AY4(AQp)],G8,0,Ch,[],0,0,0,0,["o",AY7(AGI),"bw",AY5(APT),"S",AY4(AQK),"bp",AY5(AHL),"cx",AY5(AHh)],DZ,0,Ch,[],0,0,0,0,["o",AY7(AJZ),"S",AY4(AUd),"A",AY5(AKI),"cx",AY5(AGz),"bw",AY5(ASp),"bp",AY5(AKe)],Mw,0,DZ,[],0,0,0,0,["A",AY5(AMz),"S",AY4(AUB)],NB,0,Co,[],0,0,0,0,["cd",AY6(AM6),"S",AY4(AHv)]]);
$rt_metadata([EC,0,Co,[],0,0,0,0,["cd",AY6(AEX),"S",AY4(ANe),"cx",AY5(AQg)],Ih,0,Ch,[],0,0,0,0,["bw",AY5(AOe),"S",AY4(ARA),"o",AY7(AFc),"cx",AY5(AHA),"bp",AY5(ATg)],ES,0,Co,[],0,0,0,0,["cA",AY4(AMK),"cd",AY6(ALA),"cZ",AY7(AJX),"c3",AY8(AMS),"S",AY4(ATv),"cx",AY5(AS7)],Sa,0,Co,[],0,0,0,0,["cd",AY6(AE3),"S",AY4(APS)],Mq,0,Co,[],0,0,0,0,["cd",AY6(AFG),"S",AY4(ALZ)],Gc,0,Ch,[],0,0,0,0,["bw",AY5(AUr),"o",AY7(APU),"S",AY4(APE),"cx",AY5(AM8),"bp",AY5(AQ8)],AD0,0,Gc,[],0,0,0,0,0,AAx,0,Gc,[],0,0,0,0,0,SK,0,DL,[],0,0,
0,0,["o",AY7(AIR)],Of,0,DL,[],0,0,0,0,["o",AY7(AOR)],H1,0,DL,[],0,0,0,0,["o",AY7(ASl),"bw",AY5(ATK)],N3,0,H1,[],0,0,0,0,["o",AY7(AMP),"bw",AY5(APi)],Ga,0,DL,[],0,0,0,0,["o",AY7(AVn),"S",AY4(ATS)],ML,0,Ga,[],0,0,0,0,["o",AY7(AL9)],Ph,0,DL,[],0,0,0,0,["o",AY7(AUI)],WP,0,H1,[],0,0,0,0,["o",AY7(AHN)],Q7,0,Ga,[],0,0,0,0,["o",AY7(AGj)],X4,0,EP,[],0,0,0,0,["o",AY7(AU8),"cZ",AY7(ASv),"S",AY4(AQO)],UE,0,EP,[],0,0,0,0,["o",AY7(AQi),"cZ",AY7(AFk),"S",AY4(ARG)],FL,0,C,[],1,0,0,0,0,AEP,0,DG,[],0,0,0,0,["o",AY7(AGo)],ACW,
0,F3,[],0,0,0,0,["o",AY7(AOM)],U6,0,F6,[],0,0,0,0,["o",AY7(ARX)],WJ,0,DG,[],0,0,0,0,["o",AY7(AP_)],AAJ,0,F3,[],0,0,0,0,["o",AY7(AGu)],Xw,0,F6,[],0,0,0,0,["o",AY7(AR$)],O4,0,B3,[],4,0,0,0,["o",AY7(AND),"bp",AY5(AMo),"S",AY4(AOO)],VR,0,B3,[],0,0,0,0,["o",AY7(AHe),"bp",AY5(AHy),"S",AY4(AVl)],UC,0,B3,[],0,0,0,0,["o",AY7(AMC),"bp",AY5(AVi),"S",AY4(AGW)],R9,0,B3,[],4,0,0,0,["o",AY7(AQS),"bp",AY5(AID),"S",AY4(AOo)],ADf,0,B3,[],0,0,0,0,["o",AY7(APP),"bp",AY5(AE1),"S",AY4(ALe)],TL,0,B3,[],0,0,0,0,["o",AY7(AIg),"bp",
AY5(AKY),"S",AY4(AGD)],AC$,0,Ch,[],0,0,0,0,["o",AY7(AUM),"S",AY4(AJy),"bw",AY5(AHC),"jV",AY4(APs),"bp",AY5(AHB)],UW,0,Ch,[],4,0,0,0,["o",AY7(APG),"S",AY4(AIO),"bw",AY5(ARE),"jV",AY4(AES),"bp",AY5(AU4)],ACX,0,B3,[],4,0,0,0,["o",AY7(ANd),"bp",AY5(AKP),"S",AY4(ANR)],Zr,0,B3,[],0,0,0,0,["o",AY7(APM),"bp",AY5(AKC),"S",AY4(AF4)],ST,0,B3,[],0,0,0,0,["o",AY7(AMd),"bp",AY5(AIG),"S",AY4(AKZ)],HR,0,Ch,[],0,0,0,0,["o",AY7(AGp),"bw",AY5(AQ4),"S",AY4(AF$),"bp",AY5(ARi)],AC2,0,HR,[],0,0,0,0,["o",AY7(AIP),"cZ",AY7(ATm),"c3",
AY8(AF5),"cx",AY5(AOG),"S",AY4(ATI)],Xg,0,HR,[],0,0,0,0,["o",AY7(AN1),"S",AY4(AHz)],J9,0,Bi,[Hb],0,3,0,0,["tG",AY8(AKv),"yY",AY7(AHl),"ic",AY5(AHU),"pA",AY6(ASA),"pi",AY6(AFD)],Yd,0,Co,[],0,0,0,0,["cd",AY6(AJl),"cZ",AY7(AG9),"c3",AY8(AKV),"S",AY4(AP2),"cx",AY5(ALN)],Mk,0,Co,[],0,0,0,0,["cd",AY6(AOa),"S",AY4(AL1)],TD,0,Co,[],0,0,0,0,["cd",AY6(AR0),"S",AY4(AS_)],AEN,0,C,[],4,3,0,0,0,HQ,0,C,[],4,0,0,ARx,0,Mi,0,Co,[],0,0,0,0,["cd",AY6(AR4),"S",AY4(AVj)],IQ,0,Ch,[],0,0,0,0,["bw",AY5(AP8),"o",AY7(NR),"cZ",AY7(ALJ),
"c3",AY8(AJv),"S",AY4(ASJ),"cx",AY5(AFZ),"bp",AY5(ASR)],Lb,0,Ch,[],0,0,0,0,["bw",AY5(AHS),"o",AY7(Mt),"cZ",AY7(AQA),"c3",AY8(ARY),"S",AY4(AUL),"cx",AY5(AJn),"bp",AY5(AQL)],E9,0,Co,[],0,0,0,0,["cd",AY6(ARj),"cZ",AY7(APb),"c3",AY8(AHQ),"S",AY4(ATL),"cx",AY5(AQ$)]]);
$rt_metadata([Rb,0,FL,[],0,0,0,0,["hT",AY5(AH2),"tW",AY6(ARc)],Rc,0,FL,[],0,0,0,0,["hT",AY5(AR_),"tW",AY6(AUg)],ABg,0,C,[],0,0,0,0,0,VB,0,C,[],4,0,0,0,0,UL,0,C,[],4,3,0,0,0,C3,"NegativeArraySizeException",21,BF,[],0,3,0,0,0,TI,0,C,[],0,0,0,0,0,Lr,0,C,[],0,3,0,0,0,W4,0,C,[],4,3,0,0,0,KX,0,Bu,[],0,0,0,0,["bi",AY4(AL6)],Kh,0,Bu,[],0,0,0,0,["bi",AY4(AN3)],ABb,0,Bu,[],0,0,0,0,["bi",AY4(ARH)],ABX,0,Bu,[],0,0,0,0,["bi",AY4(ASS)],AB0,0,Bu,[],0,0,0,0,["bi",AY4(AJ0)],KU,0,Bu,[],0,0,0,0,["bi",AY4(AIw)],Lk,0,KU,[],0,0,
0,0,["bi",AY4(AKJ)],AEC,0,Bu,[],0,0,0,0,["bi",AY4(ALI)],Md,0,Lk,[],0,0,0,0,["bi",AY4(AE7)],X7,0,Md,[],0,0,0,0,["bi",AY4(AOC)],YS,0,Bu,[],0,0,0,0,["bi",AY4(AJd)],VF,0,Bu,[],0,0,0,0,["bi",AY4(AOy)],Vj,0,Bu,[],0,0,0,0,["bi",AY4(AUl)],AB7,0,Bu,[],0,0,0,0,["bi",AY4(APo)],AEO,0,Bu,[],0,0,0,0,["bi",AY4(AFe)],ABh,0,Bu,[],0,0,0,0,["bi",AY4(AMj)],AAX,0,Bu,[],0,0,0,0,["bi",AY4(ARn)],ACF,0,Bu,[],0,0,0,0,["bi",AY4(AJa)],T$,0,Bu,[],0,0,0,0,["bi",AY4(AJB)],Tn,0,Bu,[],0,0,0,0,["bi",AY4(AUa)],ABt,0,Bu,[],0,0,0,0,["bi",AY4(AE4)],ABL,
0,Bu,[],0,0,0,0,["bi",AY4(ANi)],We,0,Bu,[],0,0,0,0,["bi",AY4(AJJ)],YW,0,Bu,[],0,0,0,0,["bi",AY4(AK0)],AD4,0,Bu,[],0,0,0,0,["bi",AY4(ANo)],ABG,0,Bu,[],0,0,0,0,["bi",AY4(ATh)],W_,0,Bu,[],0,0,0,0,["bi",AY4(AQR)],Wd,0,Bu,[],0,0,0,0,["bi",AY4(APe)],AEM,0,Bu,[],0,0,0,0,["bi",AY4(ARB)],JS,0,Bu,[],0,0,0,0,["bi",AY4(ANH)],ACQ,0,JS,[],0,0,0,0,["bi",AY4(AOZ)],Yg,0,KX,[],0,0,0,0,["bi",AY4(AG4)],V7,0,Kh,[],0,0,0,0,["bi",AY4(ALv)],Vt,0,Bu,[],0,0,0,0,["bi",AY4(ANL)],VZ,0,Bu,[],0,0,0,0,["bi",AY4(AT3)],XI,0,Bu,[],0,0,0,0,["bi",
AY4(AKx)],X8,0,Bu,[],0,0,0,0,["bi",AY4(AE5)],Rp,0,C,[],0,3,0,0,0,Ic,0,C,[],0,3,0,0,0,Uc,0,C,[],0,3,0,0,0,X,"StringIndexOutOfBoundsException",21,Y,[],0,3,0,0,0]);
$rt_metadata([ABS,0,C,[],4,3,0,0,0,Wx,0,Dt,[],0,0,0,0,["jc",AY5(ASw),"ir",AY5(AJQ),"iF",AY6(AO6)],B4,0,BC,[],9,3,0,AH8,0,EJ,0,Hi,[],0,0,0,0,0,AEn,0,C,[],3,3,0,0,0,QU,0,C,[B5],3,3,0,0,0,VX,0,C,[QU,B5],1,3,0,0,["DR",AY6(AT6),"Fb",AY5(APv),"EO",AY6(AHT),"HW",AY7(AMU),"J4",AY7(ASi)],Qy,0,C,[Eu],0,0,0,0,["dG",AY5(AOm)],Dm,0,BC,[],12,3,0,E8,0,KI,0,C,[],0,3,0,0,0,Lj,0,C,[JM],0,3,0,0,0,Pg,0,C,[],3,3,0,0,0,Hl,0,Lj,[Pg],0,3,0,0,["s",AY4(AGK)],RP,0,Bo,[],0,0,0,0,["A",AY5(AJ9)],RO,0,Bo,[],0,0,0,0,["A",AY5(AFI)],Nn,0,Bo,
[],0,0,0,0,["A",AY5(ANy),"s",AY4(AK_)],Nt,0,Bo,[],0,0,0,0,["A",AY5(ARl)],Nr,0,Bo,[],0,0,0,0,["A",AY5(AR3)],Ns,0,Bo,[],0,0,0,0,["A",AY5(AN_)],Nw,0,Bo,[],0,0,0,0,["A",AY5(AJE)],Nx,0,Bo,[],0,0,0,0,["A",AY5(AET)],Nu,0,Bo,[],0,0,0,0,["A",AY5(ALh)],Nv,0,Bo,[],0,0,0,0,["A",AY5(AOb)],Ny,0,Bo,[],0,0,0,0,["A",AY5(ATr)],Nz,0,Bo,[],0,0,0,0,["A",AY5(AIY)],Nm,0,Bo,[],0,0,0,0,["A",AY5(AVw)],NT,0,Bo,[],0,0,0,0,["A",AY5(ALo)],Nk,0,Bo,[],0,0,0,0,["A",AY5(AIW)],Nl,0,Bo,[],0,0,0,0,["A",AY5(AKM)],Nq,0,Bo,[],0,0,0,0,["A",AY5(AMF)],Nj,
0,Bo,[],0,0,0,0,["A",AY5(AS1)],No,0,Bo,[],0,0,0,0,["A",AY5(AHp)],Np,0,Bo,[],0,0,0,0,["A",AY5(AQH)],Il,0,C,[],0,0,0,0,0,D2,0,C,[Fm],0,3,0,CF,0,BH,"IllegalStateException",21,BF,[],0,3,0,0,0,Iy,"IllegalMonitorStateException",21,BF,[],0,3,0,0,0,ABy,0,C,[LM],0,0,0,0,0,ABC,0,C,[],0,3,0,0,0,WA,0,C,[],4,3,0,0,0,Tp,0,C,[B5],1,3,0,0,0,F$,0,C,[],3,3,0,0,0,Sx,0,C,[F$],0,3,0,0,["ex",AY4(ATt)],RD,0,B4,[],12,0,0,0,0,RE,0,B4,[],12,0,0,0,0,RI,0,B4,[],12,0,0,0,0,RJ,0,B4,[],12,0,0,0,0,RG,0,B4,[],12,0,0,0,0,RH,0,B4,[],12,0,0,0,
0,RB,0,B4,[],12,0,0,0,0]);
$rt_metadata([RC,0,B4,[],12,0,0,0,0,RA,0,B4,[],12,0,0,0,0,ACT,0,C,[],4,3,0,0,0,MO,0,C,[],3,3,0,0,0,Pt,0,C,[MO],0,3,0,0,0,WL,0,C,[B5],4,3,0,0,0,Pf,0,C,[],3,3,0,0,0,O1,0,C,[Pf],0,0,0,0,["ju",AY5(AM0),"AB",AY5(AUA)],PX,0,C,[F$],0,3,0,0,0,MK,0,Hj,[],0,0,0,0,["cZ",AY7(AKB),"c3",AY8(AVm),"gv",AY4(AIC)],TV,0,C,[Gv],0,0,0,0,0,GH,0,D2,[],0,0,0,0,["ex",AY4(AQc)],MB,0,C,[],32,0,0,AXE,0,ACS,0,C,[B5,Fi],1,3,0,0,["IJ",AY6(ANF),"KA",AY6(AOx),"Fi",AY7(AFs),"F3",AY5(AFF),"Iq",AY7(ALi)],GK,0,C,[B5],3,3,0,0,0,ME,0,C,[GK],0,0,
0,0,["dG",AY5(X2)],P1,0,C,[],0,3,0,0,0,Gd,0,C,[Gv,Dh],0,3,0,0,0,J7,0,C,[Dh],0,3,0,0,0,H_,0,C,[],4,3,0,0,0,MC,0,C,[Fm],0,0,0,0,["ex",AY4(AFl)],Sz,0,C,[],3,3,0,0,0,IV,0,C,[Sz],3,3,0,0,0,QT,0,C,[],3,3,0,0,0,He,0,C,[IV,QT],1,3,0,0,0,JT,0,He,[],0,3,0,0,0,Cu,0,JT,[],0,3,0,0,0,G1,0,He,[],1,3,0,0,0,I1,0,G1,[],0,3,0,0,["m5",AY7(AMM)],H$,0,C,[GK],0,0,0,0,["dG",AY5(APy)],D_,0,C,[C2],1,3,0,0,0,L$,0,D_,[],0,3,0,Ct,["jR",AY4(ADV)],Jb,"IllegalCharsetNameException",19,Be,[],0,3,0,0,0,KH,0,C,[],3,3,0,0,0,LI,0,C,[KH],0,3,0,0,
["l$",AY6(AGb),"lo",AY4(AK4),"iE",AY4(AKq),"lO",AY4(AK7)],MS,0,LI,[],0,3,0,0,["o6",AY4(AKT),"t4",AY5(AKf)],Jy,"NoSuchElementException",16,BF,[],0,3,0,0,0,Ba,"GdxRuntimeException",8,BF,[],0,3,0,0,0,VC,0,C,[],4,3,0,0,0,PY,0,Bo,[],0,0,0,0,["A",AY5(ATC)],Ms,0,Bo,[],0,0,0,0,["A",AY5(AGX)],Ps,0,Bo,[],0,0,0,0,["A",AY5(AGt)],Pr,0,Bo,[],0,0,0,0,["A",AY5(AKw)],RX,0,Bo,[],0,0,0,0,["A",AY5(AMt)],NN,0,Bo,[],0,0,0,0,["A",AY5(ATG)],Nd,0,Bo,[],0,0,0,0,["A",AY5(AP1)],OW,0,Bo,[],0,0,0,0,["A",AY5(ARw)],Mn,0,Bo,[],0,0,0,0,["A",
AY5(AUZ)],Mr,0,Bo,[],0,0,0,0,["A",AY5(AJs)],M9,0,Bo,[],0,0,0,0,["A",AY5(ATZ)]]);
$rt_metadata([N7,0,Bo,[],0,0,0,0,["A",AY5(AOv)],N_,0,Bo,[],0,0,0,0,["A",AY5(AQ2)],Qn,0,Bo,[],0,0,0,0,["A",AY5(ATs)],PI,0,Bo,[],0,0,0,0,["A",AY5(AUy)],MA,0,Bo,[],0,0,0,0,["A",AY5(AJc)],Jt,0,Bo,[],0,0,0,0,["A",AY5(AP4)],Pm,0,Jt,[],0,0,0,0,["A",AY5(ASq)],EX,0,C,[F$],0,3,0,0,["ex",AY4(AGF)],Wh,0,C,[],4,3,0,0,0,Sr,0,C,[],32,0,0,AYB,0,LL,"ConcurrentModificationException",16,BF,[],0,3,0,0,0,IJ,0,G1,[],0,3,0,0,["m5",AY7(AKj)],Oc,0,Ey,[C2],0,3,0,0,0,Gs,0,C,[],0,0,0,0,0,I9,0,C,[],4,3,0,0,0,QE,0,C,[],0,3,0,0,0,D7,0,C,
[],1,3,0,0,0,KT,0,C,[],3,3,0,0,0,K4,0,D7,[C2,Hb,HY,KT],1,3,0,0,0,E$,0,D7,[C2],1,3,0,0,["nw",AY5(AQr),"mi",AY5(AF6)],FC,0,C,[],0,3,0,DS,0,LE,0,C,[],3,3,0,0,0,RQ,0,C,[],3,3,0,0,0,Ne,0,C,[F$,LE,RQ],0,0,0,0,["ex",AY4(AQV)],Kj,0,K4,[],1,0,0,0,0,IC,0,Kj,[],0,0,0,0,0,KV,0,C,[],1,3,0,0,0,Ca,0,C,[],0,3,0,0,0,Rj,0,C,[],0,3,0,0,0,Ei,0,C,[],3,3,0,0,0,Cp,0,E$,[Ei],0,0,0,0,["mH",AY4(AVs)],Gh,0,C,[],4,3,0,B7,0,EH,0,KV,[],1,3,0,0,0,N$,0,EH,[],0,3,0,0,["kh",function(b,c,d,e,f,g,h){return ANj(this,b,c,d,e,f,g,h);}],EQ,"IOException",
20,CE,[],0,3,0,0,0,Is,0,C,[],4,3,0,0,0,Zy,0,C,[KH],0,3,0,0,["o6",AY4(AOf),"t4",AY5(ALp),"l$",AY6(AOS),"iE",AY4(AGT),"lO",AY4(ATD),"lo",AY4(ARh)],Qg,0,C,[Fm],0,3,0,0,0,AB4,0,C,[],0,3,0,0,0,Wo,0,C,[],4,3,0,0,0,Ra,0,C,[GK],0,0,0,0,["dG",AY5(Xk)],AA8,0,C,[F$,LE],3,0,0,0,0,LV,0,C,[],1,3,0,0,0,Tl,0,LV,[],0,3,0,0,0,BL,0,C,[],1,3,0,0,["dH",AY5(ALS),"dA",AY4(AUC),"s",AY4(AMp)],Db,0,BL,[],0,3,0,0,0,Ep,0,BL,[],0,3,0,0,0,DJ,0,BL,[],0,3,0,0,0,Ed,0,DJ,[],0,3,0,0,0,Er,0,BL,[],0,3,0,0,0]);
$rt_metadata([Eb,0,BL,[],0,3,0,0,0,DY,0,BL,[],0,3,0,0,0,KZ,0,C,[],3,3,0,0,0,G0,0,C,[KZ],0,3,0,AV7,0,LJ,0,BL,[],0,3,0,0,0,Q5,0,C,[KZ],0,3,0,AXD,0,AC3,0,C,[CT],0,3,0,0,0,PL,0,C,[],3,3,0,0,0,S1,0,C,[PL,CT],0,3,0,0,0,Ii,0,C,[],0,3,0,0,0,PD,0,C,[B5],3,3,0,0,0,MZ,0,C,[PD],0,0,0,0,["wu",AY4(ALz)],DX,0,BL,[],0,3,0,0,0,P7,0,BL,[],0,3,0,0,0,Ot,0,CA,[],0,0,0,0,["i_",AY4(AN6)],Ou,0,C,[LY],0,0,0,0,0,OC,0,C,[Dh],0,3,0,0,0,Qx,0,CA,[],0,0,0,0,["i_",AY4(AS5)],Un,0,C,[],0,0,0,0,0,W8,"BitmapFont$BitmapFontData",14,C,[],0,3,0,
0,0,Gp,0,C,[CT],0,3,0,SA,0,P_,0,CA,[],0,0,0,0,["i_",AY4(APQ)],NO,0,C,[Ie],3,3,0,0,0,Kl,0,Hp,[NO],1,3,0,0,0,Rr,0,Kl,[EV,BX],0,3,0,0,0,L0,"BitmapFont$Glyph",14,C,[],0,3,0,0,["s",AY4(ALt)],ABo,0,C,[Dh],0,3,0,0,0,ABl,0,C,[],4,3,0,0,0,XD,0,C,[],0,3,0,0,0,GR,0,D7,[C2],1,3,0,0,0,Eo,0,D7,[C2],1,3,0,0,["nw",AY5(AQw),"mi",AY5(AUf)],P$,0,C,[],3,3,0,0,0,Kf,0,C,[P$],0,3,0,0,0,Hs,0,C,[CT],0,3,0,PW,0,JR,0,C,[],0,3,0,0,0,Zu,0,C,[B5],1,3,0,0,0,FU,0,BC,[],12,3,0,HM,0,Ft,0,BC,[],12,3,0,AAS,0,HK,0,JR,[],0,3,0,0,["s",AY4(AVe)],YJ,
0,C,[CT],0,3,0,0,0,Hd,0,GR,[],1,0,0,0,0,Gg,0,Hd,[],0,0,0,0,["j0",AY5(APw),"lp",AY6(ANX),"dw",AY4(AE9)],G4,0,Eo,[],1,0,0,0,0,HP,0,G4,[],0,0,0,0,["pR",AY5(AQI),"ky",AY6(API),"dw",AY4(APY)],Z_,0,C,[B5],1,3,0,0,0,CV,0,BC,[],12,3,0,NS,0,E0,0,BC,[],12,3,0,Mh,0,Ww,0,C,[Kb],1,3,0,0,["Ck",AY5(AU7),"JZ",AY4(AH9)],DA,0,BL,[],0,3,0,0,0,Dz,0,DA,[],0,3,0,0,0]);
$rt_metadata([D1,0,Dz,[],0,3,0,0,0,Hk,0,BL,[],0,3,0,0,0,Da,0,Hk,[],0,3,0,0,0,DB,0,Da,[],0,3,0,0,0,D0,0,DB,[],0,3,0,0,0,HH,0,Hd,[Ei],1,0,0,0,["dw",AY4(ANs)],M$,0,HH,[],0,0,0,0,["j0",AY5(AKL),"lp",AY6(AE8)],P3,0,HH,[],0,0,0,0,["j0",AY5(ASE),"lp",AY6(AGM)],G7,0,G4,[Ei],1,0,0,0,["dw",AY4(AP$),"mH",AY4(AQ6)],M0,0,G7,[],0,0,0,0,["pR",AY5(ANz),"ky",AY6(AQ3)],OX,0,G7,[],0,0,0,0,["pR",AY5(AFh),"ky",AY6(ANp)],Gf,"UnsupportedOperationException",21,BF,[],0,3,0,0,0,DU,"ReadOnlyBufferException",18,Gf,[],0,3,0,0,0,N0,0,C,
[CT],3,3,0,0,0,LB,0,C,[N0],0,3,0,ACc,0,DV,0,BL,[],0,3,0,0,0,Eg,0,BL,[],0,3,0,0,0,Ev,0,BL,[],0,3,0,0,0,Fk,0,Ev,[],0,3,0,0,0,Dx,0,BC,[],12,3,0,IT,0,D8,0,BC,[],12,3,0,Ky,0,IP,0,C,[CT],0,3,0,0,0,GZ,0,C,[IV,KT],1,3,0,0,0,ZL,0,GZ,[],0,3,0,0,0,Ug,0,GZ,[],0,3,0,0,0,SP,0,C,[Kx],0,3,0,0,0,OT,0,C,[],4,3,0,0,0,Rk,0,C,[],0,3,0,AXk,0,CW,0,BC,[],12,3,0,GV,0,L3,0,Hk,[],0,3,0,0,0,HC,0,L3,[],0,3,0,0,0,LX,0,HC,[],0,3,0,0,0,Rx,"PxRigidDynamic",22,LX,[],0,3,[0,0,0],0,0,GF,0,C,[],0,3,0,APV,0,EO,0,BL,[],0,3,0,0,0,E_,0,EO,[],0,3,0,
0,0,Fe,0,BL,[],0,3,0,0,0,Fc,0,Da,[],0,3,0,0,0,UD,0,C,[Dh,C2],4,3,0,0,0,JF,0,C,[],4,3,0,0,0,FN,0,BC,[],12,0,0,XT,0,Cf,0,BC,[],12,3,0,GL,0,E6,0,BL,[],0,3,0,0,0,SG,0,C,[],32,0,0,AXL,0,IX,0,C,[CT],3,3,0,0,0,KM,0,C,[IX],0,3,0,0,["hC",AY7(APC),"l2",AY6(AKg),"lJ",AY6(AGL)],JP,0,C,[CT],3,3,0,0,0,IH,0,C,[JP],0,3,0,0,["i4",AY4(ALW),"m7",AY4(AFY),"oM",AY7(APg),"oY",AY5(AGy),"mr",AY4(ATX),"t$",AY4(ARv)],U2,0,C,[IX],0,3,0,0,["hC",AY7(AHd),"l2",AY6(AO7),"lJ",AY6(AKh)],YC,0,C,[JP],0,3,0,0,["i4",AY4(AQ0),"m7",AY4(AFi),"oM",
AY7(AMi),"oY",AY5(ASW),"mr",AY4(AMV),"t$",AY4(AHK)]]);
$rt_metadata([OB,0,C,[IX],0,3,0,AWB,["hC",AY7(AG_),"l2",AY6(ASG),"lJ",AY6(AJD)],Na,0,KM,[],0,3,0,0,0,Od,0,IH,[],0,3,0,0,0,FB,0,BC,[],12,3,0,AFS,0,QA,0,C,[],0,3,0,0,0,Qh,0,C,[],32,0,0,AWI,0,LR,0,C,[],1,3,0,0,0,GU,0,D7,[C2],1,3,0,0,0,P2,0,C,[],0,3,0,0,["dH",AY5(AAK),"dA",AY4(AIe)],HO,0,GU,[],1,0,0,0,0,LP,0,HO,[],0,0,0,0,["pQ",AY5(AKQ),"nk",AY6(AMB),"dw",AY4(AI_)],Lc,"CoderMalfunctionError",19,FH,[],0,3,0,0,0,FF,"BufferOverflowException",18,BF,[],0,3,0,0,0,Gr,0,C,[],1,3,0,0,0,HL,"BufferUnderflowException",18,BF,
[],0,3,0,0,0,Fd,0,HC,[],0,3,0,0,0,Oz,0,C,[B5],3,3,0,0,0,RN,0,C,[Oz],0,0,0,0,["dG",AY5(AKG)],OM,0,DR,[],0,3,0,0,0,KE,0,LR,[],1,3,0,0,0,Qa,0,KE,[],0,3,0,0,0,VY,0,C,[],0,3,0,0,0,GP,0,HO,[Ei],1,0,0,0,["dw",AY4(ALM),"mH",AY4(ARt)],MN,0,GP,[],0,0,0,0,["pQ",AY5(AIX),"nk",AY6(AH5)],On,0,GP,[],0,0,0,0,["pQ",AY5(APp),"nk",AY6(AIZ)],MX,0,Gr,[],4,3,0,0,0,Qz,0,C,[Fm],0,3,0,0,0,AC4,0,C,[],0,3,0,0,0,Jf,0,Gr,[],4,0,0,AXm,0,Lf,0,C,[],3,3,0,0,0,OY,0,C,[Lf],0,0,0,0,["lx",AY5(AIN),"v$",AY5(AQn)],Qb,0,C,[Lf],0,0,0,0,["lx",AY5(AQJ),
"v$",AY5(ASM)],MJ,0,C,[B5],3,3,0,0,0,R3,0,C,[MJ],0,0,0,0,["wu",AY4(AG5)],Y$,0,C,[B5],1,3,0,0,0,M5,0,C,[],0,3,0,0,0,HA,0,C,[IV],1,3,0,0,["sE",AY7(ATe),"mo",AY4(ALG)],Lz,0,HA,[],0,3,0,0,["qX",AY4(AIu),"sE",AY7(AUz),"mo",AY4(ALU)],Ow,0,EQ,[],0,3,0,0,0,PK,0,C,[],0,3,0,0,0,H0,0,C,[],0,3,0,0,0,LD,0,C,[],0,3,0,0,0,Ss,0,HA,[],0,0,0,0,["qX",AY4(AOg)],OJ,0,Dt,[],0,0,0,0,0,Lv,0,C,[Gv],0,3,0,0,0,R0,0,C,[],0,0,0,AW8,0,Pa,"UnsupportedCharsetException",19,Be,[],0,3,0,0,0,Lg,0,C,[Dh,Gv],1,0,0,0,0,Jx,0,Lg,[],0,3,0,0,0,FV,0,
C,[],4,3,0,AWm,0]);
$rt_metadata([Po,0,D_,[],0,3,0,0,["jR",AY4(AFd)],Os,0,D_,[],0,3,0,0,["jR",AY4(ASg)],IK,0,D_,[],0,3,0,0,["jR",AY4(AFW)],OH,0,Dt,[],0,0,0,0,["jc",AY5(AGV),"ir",AY5(AFp),"iF",AY6(Y_)],KP,0,C,[],0,3,0,0,0,Q$,0,C,[],0,3,0,0,0,FY,0,EQ,[],0,3,0,0,0,LU,"AssertionError",21,FH,[],0,3,0,0,0,MG,0,C,[],32,0,0,AYh,0,La,"InstantiationException",21,EG,[],0,3,0,0,0,JD,"IllegalAccessException",21,EG,[],0,3,0,0,0,MT,0,EG,[],0,3,0,0,0,ZB,0,C,[],0,0,0,0,["s",AY4(ANN)],Rw,0,C,[],0,0,0,0,0,QM,0,EH,[],0,3,0,0,["kh",function(b,c,d,
e,f,g,h){return ALr(this,b,c,d,e,f,g,h);}],RL,0,EH,[],0,3,0,0,["kh",function(b,c,d,e,f,g,h){return ARM(this,b,c,d,e,f,g,h);}],N2,0,EH,[],0,3,0,0,["kh",function(b,c,d,e,f,g,h){return ARs(this,b,c,d,e,f,g,h);}],GI,0,D2,[],0,0,0,0,["ex",AY4(AHY)],Ti,0,Dt,[],0,0,0,0,["jc",AY5(AH1),"ir",AY5(AOK),"iF",AY6(AGJ)],WB,0,C,[],4,3,0,0,0,Gm,0,C,[BX,C2],0,3,0,0,0,II,0,C,[Hb,HY],0,3,0,0,0,RK,0,C,[],4,3,0,AKk,0,Ks,"BufferUnderflowException",19,BF,[],0,3,0,0,0,LW,"BufferOverflowException",19,BF,[],0,3,0,0,0,Ls,"MalformedInputException",
19,FY,[],0,3,0,0,["is",AY4(AKc)],Ko,"UnmappableCharacterException",19,FY,[],0,3,0,0,["is",AY4(AJu)],MF,0,Dt,[],0,0,0,0,["jc",AY5(AKU),"ir",AY5(AFP),"iF",AY6(ALn)],M6,0,C,[GK],0,0,0,0,["dG",AY5(AD6)],LN,"ArrayIndexOutOfBoundsException",21,Y,[],0,3,0,0,0,Ob,0,C,[Eu],0,0,0,0,["dG",AY5(AJ$)]]);
function $rt_array(cls,data){this.cG=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ","none","all","table","cell",
"actor","object cannot be null.","objects cannot be null.","index can\'t be >= size: "," >= ","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","Array is empty.","","If no regions are specified, the font data must have an images path.","0","This TextureData implementation does not upload data itself","Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","start + count must be <= size: "," + "," <= ","end can\'t be >= size: ","start can\'t be > end: "," > ","additionalCapacity must be >= 0: ",
"newSize must be >= 0: ","[]",", ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","javaClass@","<init>",": ","\tat ","Caused by: ","charsetName is null","Should never been thrown","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","Illegal radix: ","java.runtime.name","userAgent","os.name","Windows","OS X","no OS",".html",
"index.html","index-debug.html","assets/","assets.txt","resize","gdx.wasm.js","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","LOAD_ASSETS","APP_CREATE","APP_LOOP","offset + length must be <= size: ","Loading asset : ","Unsupported asset type ","Loading script : ","px","UTF-8","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress",
"keyup","CSS1Compat","hidden","capacity must be >= 0: ","The required capacity is too large: ","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend","GL error: ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","\\.","Invalid version string: ","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop","Applet","WebGL","iOS","Webaudio","Audiocontext unlocked","Unable to create new instance: ","OpenGL",
"GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","object","function","string","number","Exception occurred in constructor for class: ","Could not instantiate instance of class: ","Illegal argument(s) supplied to constructor for class: ","fSet","\\Q","\\E","\\\\E\\Q","Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>",
"JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet"," ","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ",
"CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B",
"IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue",
"KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A",
"SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths",
"CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","Specials",
"Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary","Directory","public","protected","private","abstract","static","final","transient","volatile",
"synchronized","native","strictfp","interface","main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","=","==","Action must be non-null","Index out of bounds","Replacement preconditions do not hold","physx.wasm","New position "," is outside of range [0;","New limit ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ",
"The last byte in dst ","The last byte in src ","IGNORE","REPLACE","REPORT","Capacity is negative: ","Index ","BIG_ENDIAN","LITTLE_ENDIAN","com/badlogic/gdx/utils/lsans-15.fnt","com/badlogic/gdx/utils/lsans-15.png","PhysX loaded, version: ","FPS: ","PhysX Version: ","Boxes: 50x50 = ","Total Physics Time: ","ms","Render Time: ","graphics/zebra.png","Asset loaded: ","false","true","a_position","a_color","a_texCoord0","u_projectionViewMatrix","u_texture","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projectionViewMatrix;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projectionViewMatrix * a_position;\n}\n",
"#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","couldn\'t compile shader: ",".js","Loading JS script: ","imgui.wasm","Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",
".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","The last float in src ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None",
"SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\"," does not exist","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Can\'t have more than 8191 sprites per batch: ","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","Classpath","Internal","External","Absolute","Local","VertexArray","VertexBufferObject",
"VertexBufferObjectSubData","VertexBufferObjectWithVAO","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","newAction must be non-null","The specified font must contain at least one texture page.","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","attributes must be >= 1","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER",
"destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ",
"The last short in src ","file-f:","file-d:","US-ASCII","ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","Comparison method violates its general contract!","fromIndex(",") > toIndex(","-2147483648","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","Malformed input of length ",
"Unmappable characters of length ","data:",";base64,","error"]);
M.prototype.toString=function(){return $rt_ustr(this);};
M.prototype.valueOf=M.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AHO(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_ucompare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x
=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo
+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo
>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r
=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_ucompare=function(a,b){var r=$rt_ucmp(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo
=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo
&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)
<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|
a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo
=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>
16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo
>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==
0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,
b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits
=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,
bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,
b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_ucompare=function(a,b){a=$rt_globals.BigInt.asUintN(64,a);b=$rt_globals.BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CX=Long_add;var O8=Long_sub;var Bf=Long_mul;var Lo=Long_div;var S_=Long_rem;var AJ7=Long_or;var CG=Long_and;var Jk=Long_xor;var Gj=Long_shl;var AWW=Long_shr;var Bh=Long_shru;var A85=Long_compare;var Cn=Long_eq;var AJ8=Long_ne;var AJO=Long_lt;var AJR=Long_le;var AWg=Long_gt;var AWh=Long_ge;var A86=Long_not;var AOL=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}$rt_exports.main=$rt_mainStarter(AVG);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=K9.prototype;c.onAnimationFrame=c.HD;c=Zt.prototype;c.handleEvent=c.dG;c=Tf.prototype;c.handleEvent=c.dG;c=Tg.prototype;c.handleEvent=c.dG;c=QD.prototype;c.fullscreenChanged=c.JD;c=PO.prototype;c.denied=c.Lg;c.prompt=c.Gw;c.granted=c.DQ;c=TR.prototype;c.removeEventListener=c.HB;c.dispatchEvent=c.F7;c.get=c.Ck;c.addEventListener=c.ER;Object.defineProperty(c,"length",{get:c.Gc});c=OK.prototype;c.handleEvent=c.dG;c=OL.prototype;c.handleEvent=c.dG;c=OI.prototype;c.handleEvent=c.dG;c=MQ.prototype;c.unlockFunction
=c.EB;c=NK.prototype;c.accept=c.CG;c=NL.prototype;c.accept=c.CG;c=VX.prototype;c.removeEventListener=c.J4;c.dispatchEvent=c.Fb;c.addEventListener=c.HW;c=Qy.prototype;c.handleEvent=c.dG;c=ACS.prototype;c.removeEventListener=c.Fi;c.dispatchEvent=c.F3;c.addEventListener=c.Iq;c=ME.prototype;c.handleEvent=c.dG;c=H$.prototype;c.handleEvent=c.dG;c=Ra.prototype;c.handleEvent=c.dG;c=MZ.prototype;c.onInit=c.wu;c=Ww.prototype;c.get=c.Ck;Object.defineProperty(c,"length",{get:c.JZ});c=RN.prototype;c.handleEvent=c.dG;c=R3.prototype;c.onInit
=c.wu;c=M6.prototype;c.handleEvent=c.dG;c=Ob.prototype;c.handleEvent=c.dG;})();
}));
