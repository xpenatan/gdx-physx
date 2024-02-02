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
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.cu=f;}
function $rt_cls(cls){return AMz(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return A4k(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.e.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return ANN(t);}
function $rt_throwableCause(t){return AV_(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A4l());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AGI();}
function $rt_setThread(t){return XU(t);}
function $rt_createException(message){return A4m(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var H=$rt_throw;var Bo=$rt_compare;var A4n=$rt_nullCheck;var L=$rt_cls;var Bj=$rt_createArray;var Dk=$rt_isInstance;var SU=$rt_nativeThread;var GG=$rt_suspending;var AS4=$rt_resuming;var AQa=$rt_invalidPointer;var B=$rt_s;var V=$rt_eraseClinit;var Db=$rt_imul;var Br=$rt_wrapException;var A4o=$rt_checkBounds;var A4p=$rt_checkUpperBound;var A4q=$rt_checkLowerBound;var A4r=$rt_wrapFunction0;var A4s=$rt_wrapFunction1;var A4t=$rt_wrapFunction2;var A4u=$rt_wrapFunction3;var A4v=$rt_wrapFunction4;var G=$rt_classWithoutFields;var T
=$rt_createArrayFromData;var E1=$rt_createCharArrayFromData;var A4w=$rt_createByteArrayFromData;var A1a=$rt_createShortArrayFromData;var GA=$rt_createIntArrayFromData;var A4x=$rt_createBooleanArrayFromData;var A4y=$rt_createFloatArrayFromData;var A4z=$rt_createDoubleArrayFromData;var AAP=$rt_createLongArrayFromData;var TC=$rt_createBooleanArray;var BF=$rt_createByteArray;var Rj=$rt_createShortArray;var D=$rt_createCharArray;var Bc=$rt_createIntArray;var A4A=$rt_createLongArray;var Ck=$rt_createFloatArray;var A4B
=$rt_createDoubleArray;var Bo=$rt_compare;var A4C=$rt_castToClass;var A4D=$rt_castToInterface;var A4E=$rt_equalDoubles;var AZw=Long_toNumber;var S=Long_fromInt;var A4F=Long_fromNumber;var F=Long_create;var BI=Long_ZERO;var A4G=Long_hi;var R=Long_lo;
function C(){this.cS=null;this.$id$=0;}
function A4H(){var a=new C();CO(a);return a;}
function Hs(b){var c;if(b.cS===null){c=new Iy;CD();c.cJ=A4I;b.cS=c;}b=b.cS;c=b.cJ;if(c===null){CD();b.cJ=A4I;}else{CD();if(c!==A4I){c=new BK;c.c=1;c.d=1;c.f=B(0);H(c);}}b.dH=b.dH+1|0;}
function Ed(b){var c,d,e;if(!G4(b)){c=b.cS;d=c.cJ;CD();if(d===A4I){e=c.dH-1|0;c.dH=e;if(!e)c.cJ=null;G4(b);return;}}b=new Jy;b.c=1;b.d=1;H(b);}
function A0a(b){AKn(b,1);}
function AKn(b,c){var d,e,$p,$z;$p=0;if(AS4()){var $T=SU();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.cS===null){d=new Iy;CD();d.cJ=A4I;b.cS=d;}d=b.cS;if(d.cJ===null){CD();d.cJ=A4I;}e=d.cJ;CD();if(e===A4I){d.dH=d.dH+c|0;return;}$p=1;case 1:AQu(b,c);if(GG()){break _;}return;default:AQa();}}SU().s(b,c,d,e,$p);}
function A2F(b,c,d){var e,f,g;CD();e=A4I;f=b.cS;if(f===null){f=new Iy;f.cJ=e;b.cS=f;if(e!==e)A4I=e;A4I.f6=Fc();b=b.cS;b.dH=b.dH+c|0;b=null;d.hm.jk(b);return;}if(f.cJ===null){f.cJ=e;if(e!==e)A4I=e;A4I.f6=Fc();b=b.cS;b.dH=b.dH+c|0;b=null;d.hm.jk(b);return;}if(f.fx===null)f.fx=ALg();f=f.fx;g=new OS;g.r_=e;g.sa=b;g.r9=c;g.r$=d;d=g;f.push(d);}
function A3f(b){AG8(b,1);}
function AG8(b,c){var d,e;if(!G4(b)){d=b.cS;e=d.cJ;CD();if(e===A4I){c=d.dH-c|0;d.dH=c;if(c>0)return;d.cJ=null;d=d.fx;if(d!==null&&!(d.length?0:1)){d=new P6;d.wB=b;Pv(d,0);}else G4(b);return;}}b=new Jy;b.c=1;b.d=1;H(b);}
function AN6(b){var c,d,e;if(!G4(b)){c=b.cS;if(c.cJ===null){b=c.fx;if(b!==null&&!(b.length?0:1)){b=c.fx.shift();BB();if(b!==null&&!(b instanceof $rt_objcls()))b=Cb(b);d=b;c.fx=null;b=d.r_;c=d.sa;e=d.r9;d=d.r$;CD();if(A4I!==b)A4I=b;A4I.f6=Fc();c=c.cS;c.cJ=b;c.dH=c.dH+e|0;b=null;d.hm.jk(b);}return;}}}
function G4(a){var b,c;b=a.cS;if(b===null)return 1;a:{if(b.cJ===null){c=b.fx;if(!(c!==null&&!(c.length?0:1))){b=b.op;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.cS=null;return 1;}
function CO(a){}
function AM3(a){var b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new B9;c.G=b;d=c;b.classObject=d;}}return c;}
function AR2(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AL9(a,b){return a!==b?0:1;}
function AIb(a){var b,c,d,e,f,g,h;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=Bk(a.$id$,4);b=new P;b.b=D(16);I(b,b.a,B(1));e=b.a;if(d===null)d=B(2);I(b,e,d);c=new N;f=b.b;g=b.a;Q();h=D(g);c.e=h;M(f,0,h,0,g);return c;}
function Qi(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALw(a){var b,c,d;if(!Dk(a,Fa)&&a.constructor.$meta.item===null){b=new Pt;b.c=1;b.d=1;H(b);}b=AG3(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function MM(a){var b,c,d;a:{b=a.cS;if(b!==null){c=b.cJ;CD();if(c===A4I){d=1;break a;}}d=0;}if(!d){b=new Jy;b.c=1;b.d=1;H(b);}b=b.op;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BB();if(c!==null&&!(c instanceof $rt_objcls()))c=Cb(c);c=c;if(!c.Pg())Pv(c,0);}a.cS.op=null;}
function AQu(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.jk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.Fq=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AZH(callback);thread.suspend(function(){try{A2F(b,c,callback);}catch($e){callback.Fq($rt_exception($e));}});return null;}
var WS=G();
function A1p(b){var c;c=new BA;c.dF=1.0;c.dE=0.0;A4J=c;c=new BA;c.dF=0.0;c.dE=1.0;A4K=c;c=new BA;c.dF=0.0;c.dE=0.0;A4L=c;A4M=new BA;A4N=new BA;A4O=new BA;A4P=new BA;A4Q=new BA;A4R=new BA;A4S=new El;A4T=new El;A4U=0.10000000149011612;Zq();A4V=L($rt_floatcls());A4W=Bj(Hi,111);A4X=new BA;A4Y=new BA;A4Z=new C;ACG();A40=L($rt_intcls());ABH();A41=L($rt_longcls());A42=L($rt_charcls());A43=Bj(DA,128);AAa();ADO();A44=1;A45=new BA;A46=new BA;A47=new BA;A48=0.4000000059604645;A49=0.10000000149011612;A4$=new BA;A4_=new BA;A5a
=new BA;A5b=new BA;A5c=new BA;A5d=new BA;Vf();AEx();A5e=0.0;A5f=Ck(3);A5g=1;A5h=new J7;A5i=new J6;c=new IS;c.ms=BF(1);A5j=c;c=new JD;c.ms=BF(1);A5k=c;A5l=L($rt_doublecls());VU();c=new Cg;c.bo=0;c.bF=0;A5m=c;c=new Cg;c.bo=1;c.bF=0;A5n=c;A5o=50;A5p=50;A5q=2500.0;A5r=0;A5s=1;A5t=new De;A5u=new De;A5v=new De;A5w=new Eo;A5x=new Eo;A5y=new Eo;A5z=new DM;A5A=new DM;A5B=new DM;A5C=new Eg;A5D=new Eg;A5E=new Eg;A5F=new EC;A5G=new EC;A5H=new EC;A5I=new Ef;A5J=new Ef;A5K=new Ef;A5L=new D6;A5M=new D6;A5N=new D6;Ve();A5O
=new D5;A5P=new D5;A5Q=new D5;A5R=new DH;A5S=new DH;A5T=new DH;A5U=new DG;A5V=new DG;A5W=new DG;A5X=new D9;A5Y=new D9;A5Z=new D9;A50=new Dm;A51=new Dm;A52=new Dm;A53=new DV;A54=new DV;A55=new DV;A56=new D8;A57=new D8;A58=new D8;XF();AAE();ABd();Uq();AE3();Zt();Yn();WB();TZ();Xj();Zm();X0();AA6();ADa();AAt();AAS();Wx();X8();AAw();c=A0_(B(3));c.lV=0;c.hy=0;c.pg=1;c.lL=1;ABl(new L7,A1T(),c);}
var Gf=G();
var A59=0;var A5$=0;var A5_=0;var A6a=0;var A6b=0;function A6c(){A6c=V(Gf);ATv();}
function ATv(){A59=CY($rt_str($rt_globals.navigator.platform),B(4));A5$=CY($rt_str($rt_globals.navigator.platform),B(5));A5_=CY($rt_str($rt_globals.navigator.platform),B(6));A6a=!CY($rt_str($rt_globals.navigator.platform),B(7))&&!CY($rt_str($rt_globals.navigator.platform),B(8))?0:1;A6b=!CY($rt_str($rt_globals.navigator.platform),B(9))&&!CY($rt_str($rt_globals.navigator.platform),B(10))&&!CY($rt_str($rt_globals.navigator.platform),B(11))?0:1;}
var Lo=G(0);
var F$=G();
function AQI(a,b){return 0;}
function AXe(a,b,c,d,e){return 0;}
function AVt(a,b,c,d,e){return 0;}
function AOD(a,b,c){return 0;}
function AUK(a,b,c){return 0;}
var CV=G(0);
var YH=G(F$);
var CQ=G(0);
var F8=G();
var C3=G(0);
var B2=G(0);
function BG(){var a=this;C.call(a);a.t=null;a.q=0;}
function YF(a){return a.q;}
function AS5(a){return a.t;}
var EH=G(BG);
var A6d=null;var A6e=null;var A6f=null;var A6g=null;function A19(){A19=V(EH);ANX();}
function ANX(){var b,c,d;b=new EH;A19();b.t=B(12);b.q=0;A6d=b;c=new EH;c.t=B(13);c.q=1;A6e=c;d=new EH;d.t=B(14);d.q=2;A6f=d;A6g=T(EH,[b,c,d]);}
var Ga=G();
var Mh=G(0);
var Jz=G(Ga);
var A4M=null;function AKO(){A4M=new BA;}
var GL=G(0);
var C8=G(0);
var GX=G();
var Gr=G(0);
var BX=G();
var A4N=null;function AXt(){A4N=new BA;}
var G7=G(BX);
var AEh=G(G7);
var FT=G(BG);
var A6h=null;var A6i=null;var A6j=null;function AXn(){AXn=V(FT);AHs();}
function AHs(){var b,c;b=new FT;AXn();b.t=B(15);b.q=0;A6h=b;c=new FT;c.t=B(16);c.q=1;A6i=c;A6j=T(FT,[b,c]);}
var K$=G(0);
var JA=G(0);
var Ft=G(0);
var Dr=G();
var AFa=G(Dr);
var K2=G(GX);
var Hn=G();
var A4O=null;var A4P=null;function ASF(){A4O=new BA;A4P=new BA;}
var ABt=G();
var ZY=G();
var Tv=G(0);
var L3=G();
var AD5=G(L3);
var ACz=G(F8);
var Rw=G();
var A6k=null;function A6l(){A6l=V(Rw);AT9();}
function AT9(){var b,c;AXn();b=Bc((A6j.cu()).data.length);c=b.data;A6k=b;c[A6h.q]=1;c[A6i.q]=2;}
var ADo=G();
var Sn=G();
var A6m=null;function A6n(){A6n=V(Sn);ARD();}
function ARD(){var b,c;ADE();b=Bc((A6o.cu()).data.length);c=b.data;A6m=b;c[A6p.q]=1;c[A6q.q]=2;c[A6r.q]=3;}
var AE_=G(Dr);
var FZ=G();
var O1=G(FZ);
var Gv=G();
var A6s=0;var A6t=0;var A6u=0;var A6v=0;var A6w=0;function A6x(){A6x=V(Gv);AXC();}
function AXC(){A6s=CY($rt_str($rt_globals.navigator.platform),B(4));A6t=CY($rt_str($rt_globals.navigator.platform),B(5));A6u=CY($rt_str($rt_globals.navigator.platform),B(6));A6v=!CY($rt_str($rt_globals.navigator.platform),B(7))&&!CY($rt_str($rt_globals.navigator.platform),B(8))?0:1;A6w=!CY($rt_str($rt_globals.navigator.platform),B(9))&&!CY($rt_str($rt_globals.navigator.platform),B(10))&&!CY($rt_str($rt_globals.navigator.platform),B(11))?0:1;}
var Kz=G();
var Ts=G(G7);
var A4Q=null;function ATP(){A4Q=new BA;}
var Rn=G();
var A4R=null;function APu(){A4R=new BA;}
var JW=G();
var A6y=null;var A6z=null;var A6A=null;function A6B(){A6B=V(JW);AWa();}
function AWa(){var b;b=new BP;b.bj=1;b.r=Bj(C,16);A6y=b;b=new Bm;Cu();A6z=b;A6A=new El;}
var Mt=G();
var Jr=G(FZ);
var P0=G(FZ);
var DL=G(BX);
var A4U=0.0;function AWZ(){A4U=0.10000000149011612;}
var PS=G(Jr);
var UZ=G(F8);
var Ke=G(0);
var WL=G(F8);
var VX=G();
var MV=G();
var A6C=null;function A6D(){A6D=V(MV);AW_();}
function AW_(){var b,c;ADE();b=Bc((A6o.cu()).data.length);c=b.data;A6C=b;c[A6E.q]=1;c[A6F.q]=2;c[A6G.q]=3;c[A6p.q]=4;c[A6q.q]=5;c[A6r.q]=6;c[A6H.q]=7;c[A6I.q]=8;c[A6J.q]=9;c[A6K.q]=10;}
var Cw=G(BG);
var A6p=null;var A6q=null;var A6r=null;var A6H=null;var A6J=null;var A6K=null;var A6I=null;var A6E=null;var A6F=null;var A6G=null;var A6o=null;function ADE(){ADE=V(Cw);AIv();}
function AIv(){var b,c,d,e,f,g,h,i,j,k;b=new Cw;ADE();b.t=B(17);b.q=0;A6p=b;c=new Cw;c.t=B(18);c.q=1;A6q=c;d=new Cw;d.t=B(19);d.q=2;A6r=d;e=new Cw;e.t=B(20);e.q=3;A6H=e;f=new Cw;f.t=B(21);f.q=4;A6J=f;g=new Cw;g.t=B(22);g.q=5;A6K=g;h=new Cw;h.t=B(23);h.q=6;A6I=h;i=new Cw;i.t=B(24);i.q=7;A6E=i;j=new Cw;j.t=B(25);j.q=8;A6F=j;k=new Cw;k.t=B(26);k.q=9;A6G=k;A6o=T(Cw,[b,c,d,e,f,g,h,i,j,k]);}
var Ce=G();
var Fg=G(Ce);
var We=G(Fg);
var Xu=G(Fg);
var CM=G(Ce);
var E_=G(CM);
var Z4=G(E_);
var AAG=G();
var Lg=G(Ce);
var AA3=G(Lg);
var ABT=G(Ce);
var WJ=G(Ce);
var AEB=G(Ce);
var AEU=G();
var L9=G(Ce);
var Wz=G(L9);
var Va=G(CM);
var AE$=G(CM);
var YI=G(E_);
var AEf=G(Ce);
var XI=G(E_);
var AF0=G(CM);
var YZ=G(CM);
var VL=G(Ce);
var Wt=G(CM);
var Wv=G(Ce);
var AB5=G(Ce);
var AC5=G(Fg);
var AAg=G(CM);
var Y$=G(Ce);
var AD1=G(E_);
var ABZ=G(Fg);
var Xi=G(Ce);
var UG=G(CM);
var ACF=G(CM);
var QX=G();
var A6L=null;function Zq(){A6L=T(B9,[L(Ks),L(Bq),L(RV),L(O1),L(P0),L(Jr),L(PS),L(Go),L(RI),L(Py),L(SJ),L(Om),L(Ti),L(J1),L(PQ),L(Sk),L(Qy),L(PF),L(Gu),L(RR),L(SZ),L(OJ),L(RB),L(QH)]);}
var CW=G(Jz);
var C9=G(CW);
var A6M=null;var A6N=null;var A6O=null;var A6P=null;var A6Q=null;var A6R=null;var A6S=null;var A6T=null;function A6U(){A6U=V(C9);AWn();}
function AWn(){var b,c;b=new Bq;Et();b.cd=0.0;b.cc=0.0;b.cb=1.0;b.ca=1.0;Dc(b);A6M=b;b=new Bq;b.cd=1.0;b.cc=0.0;b.cb=0.0;b.ca=1.0;Dc(b);A6N=b;b=new Bq;b.cd=0.0;b.cc=1.0;b.cb=0.0;b.ca=1.0;Dc(b);A6O=b;b=new PX;c=new BP;c.bj=0;c.r=Bj(C,16);b.b3=c;b.dL=2147483647;A6P=b;b=new PW;AGZ();A6Q=b;A6R=new PV;A6S=new PU;A6T=new PT;}
var FX=G(C9);
var Kt=G(FX);
var ABk=G(Kt);
var Yy=G(BX);
var KR=G(CW);
var OB=G(0);
var E7=G();
var VG=G(E7);
var Da=G(Ga);
var AAl=G(Da);
var Yx=G(BX);
var BT=G();
var A6V=null;var A6W=null;var A6X=null;var A6Y=null;var A6Z=null;var A60=null;var A61=null;function AGZ(){AGZ=V(BT);AQ1();}
function AQ1(){var b;b=new Hi;AGZ();b.EB=0.0;A6V=b;A6W=new St;A6X=new Sq;A6Y=new Sp;A6Z=new Ss;A60=new Sr;A61=new So;}
var Ss=G(BT);
var AD6=G(BT);
var Lw=G(DL);
var AC2=G(Lw);
var PV=G(BT);
var AFS=G(BX);
var H9=G(C9);
var A4X=null;var A4Y=null;function ARB(){A4X=new BA;A4Y=new BA;}
var AD7=G(BT);
var GJ=G(0);
var El=G();
var A4S=null;var A4T=null;function ANU(){A4S=new El;A4T=new El;}
var Ev=G(El);
var A62=null;function A09(){A09=V(Ev);AHm();}
function A63(){var a=new Ev();Xk(a);return a;}
function Xk(a){A09();}
function AHm(){var b,c,d,e,f,g,$$je;LY();b=A64;c=CA(b,L(Ev));b=c<0?null:b.cs.data[c];if(b===null){b=new Ix;d=new BP;d.bj=0;d.r=Bj(C,4);b.b3=d;b.dL=100;a:{try{d=KN(L(Ev),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CI){}else{throw $$e;}}try{d=LR(L(Ev),null);IX(d,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dv){}else{throw $$e;}}d=null;}b.ie=d;if(d===null){b=new BJ;d=new P;d.b=D(16);I(d,d.a,B(27));if(L(Ev).bb===null)L(Ev).bb=$rt_str(L(Ev).G.$meta.name);e=L(Ev).bb;I(d,d.a,e);e=new N;f=d.b;c
=d.a;Q();g=D(c);e.e=g;M(f,0,g,0,c);b.c=1;b.d=1;b.f=e;H(b);}BH(A64,L(Ev),b);}A62=b;}
var VJ=G(E7);
var Fu=G(Da);
var A45=null;var A46=null;var A47=null;var A48=0.0;var A49=0.0;function AXP(){A45=new BA;A46=new BA;A47=new BA;A48=0.4000000059604645;A49=0.10000000149011612;}
var Vd=G(Fu);
var ACJ=G(BX);
var NY=G(0);
var AEE=G();
var Go=G();
var Gu=G(Go);
var SJ=G(Gu);
var KZ=G(Da);
var V4=G(KZ);
var AGr=G(KR);
var LB=G(CW);
var ZI=G(FX);
var MB=G(Da);
var PT=G(BT);
var SZ=G();
var AB3=G();
var AC3=G(BX);
var W2=G(Dr);
var ACl=G();
var X1=G(BX);
var Zn=G(DL);
var ACH=G(Hn);
var So=G(BT);
var Sr=G(BT);
var R5=G(0);
var J1=G();
var Qy=G(J1);
var VH=G(E7);
var Yw=G(Kz);
var Yz=G(Mt);
var AFT=G(BX);
var AFU=G(DL);
var PU=G(BT);
var Ee=G();
var A65=null;var A66=null;var A67=null;var A68=null;var A69=null;var A6$=null;var A6_=null;var A7a=null;var A7b=null;function A7c(){A7c=V(Ee);AIG();}
function AIG(){var b;b=new J0;b.ph=0.0;A65=b;b=new J0;b.ph=1.0;A66=b;Fw();A67=A7d.data[128];Fw();b=A7d.data[129];A68=b;A69=b;Fw();A6$=A7d.data[130];Fw();A6_=A7d.data[132];Fw();A7a=A7d.data[136];Fw();A7b=A7d.data[144];}
var RI=G(Gu);
var Wq=G(BX);
var Uu=G(Dr);
var St=G(BT);
var ABw=G(CW);
var ACI=G(BX);
var OJ=G();
function Hi(){BT.call(this);this.EB=0.0;}
var A4W=null;function AXa(){A4W=Bj(Hi,111);}
var VR=G(LB);
var Sp=G(BT);
var RP=G(Da);
var A4$=null;function AOT(){A4$=new BA;}
var ACN=G(K2);
var PF=G();
var LF=G(Da);
var A7e=null;var A7f=null;function A7g(){A7g=V(LF);AQB();}
function AQB(){var b,c;b=new Bq;Et();A7e=b;b=new C7;EB();c=new BP;c.bj=1;c.r=Bj(C,1);b.cK=c;c=new Do;c.dy=1;c.bH=Bc(2);b.ci=c;A7f=b;}
var QH=G();
var AD8=G(BT);
var PW=G(BT);
var AEW=G(H9);
var Sq=G(BT);
var Om=G();
var AGk=G();
var Dy=G(BG);
var A7h=null;var A7i=null;var A7j=null;var A7k=null;var A7l=null;var A7m=null;function A3V(){A3V=V(Dy);ANa();}
function ANa(){var b,c,d,e,f;b=new Dy;A3V();b.t=B(28);b.q=0;A7h=b;c=new Dy;c.t=B(29);c.q=1;A7i=c;d=new Dy;d.t=B(30);d.q=2;A7j=d;e=new Dy;e.t=B(31);e.q=3;A7k=e;f=new Dy;f.t=B(32);f.q=4;A7l=f;A7m=T(Dy,[b,c,d,e,f]);}
var AGo=G(BT);
var ACA=G(Dr);
function CG(){var a=this;C.call(a);a.dL=0;a.gc=0;a.b3=null;}
function TR(a){var b,c,d;b=a.b3;c=b.m;if(!c)b=a.kc();else{if(!c){b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}c=c-1|0;b.m=c;d=b.r.data;b=d[c];d[c]=null;}return b;}
function Iz(a,b){var c,d,e;if(b===null){b=new Bh;b.c=1;b.d=1;b.f=B(34);H(b);}c=a.b3;if(c.m<a.dL){Cf(c,b);d=a.gc;e=a.b3.m;if(d>e)e=d;a.gc=e;if(Dk(b,CQ))b.dY();}else if(Dk(b,CQ))b.dY();}
function AKr(a,b){if(Dk(b,CQ))b.dY();}
function ARS(a,b){if(Dk(b,CQ))b.dY();}
function Lf(a,b){var c,d,e,f,g,h,i;if(b===null){b=new Bh;b.c=1;b.d=1;b.f=B(35);H(b);}c=a.b3;d=a.dL;e=0;f=b.m;while(e<f){if(e>=b.m){g=new Y;c=new P;c.b=D(16);I(c,c.a,B(36));O(c,c.a,e,10);I(c,c.a,B(37));d=b.m;O(c,c.a,d,10);b=new N;h=c.b;e=c.a;Q();i=D(e);b.e=i;M(h,0,i,0,e);g.c=1;g.d=1;g.f=b;H(g);}g=b.r.data[e];if(g!==null){if(c.m<d){Cf(c,g);if(Dk(g,CQ))g.dY();}else if(Dk(g,CQ))g.dY();}e=e+1|0;}d=a.gc;e=c.m;if(d>e)e=d;a.gc=e;}
var PX=G(CG);
var Uo=G();
var Ti=G();
var RV=G();
var Sk=G();
var JX=G(BX);
var A4_=null;function AHo(){A4_=new BA;}
var Ut=G(Dr);
var AFV=G(MB);
var Up=G(0);
var Wr=G(BX);
var AGy=G(CW);
var Xs=G(CW);
var ACO=G(DL);
var K5=G();
var VF=G(K5);
var AFL=G(Ga);
var T$=G(BX);
var AE1=G(FX);
var W7=G(BX);
var AGe=G(DL);
var Py=G(Go);
var Xx=G(CW);
var RR=G();
var RB=G();
var W4=G(Da);
var Zo=G(GX);
var T_=G(BX);
var SE=G(CW);
var A5a=null;function AT2(){A5a=new BA;}
var Zu=G(JX);
var Ua=G(C9);
var VI=G(E7);
var ZK=G();
var PQ=G();
var DT=G();
var A7n=null;var A7o=null;var A7p=null;var A7q=null;var A7r=null;var A7s=null;var A7t=null;var A7u=null;var A7v=null;var A7w=null;var A7x=null;function A7y(){A7y=V(DT);AUc();}
function AUc(){var b;A7n=Ck(16);b=new D0;Hr();b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=1.0;A7o=b;b=new D0;b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=1.0;A7p=b;b=new Bm;Cu();A7q=b;A7r=new Bm;A7s=new Bm;A7t=new Bm;A7u=ET();A7v=new Bm;A7w=new Bm;A7x=new Bm;}
var Bn=G();
var A7z=null;var A7A=null;var A7B=null;var A7C=null;var A7D=null;var A7E=null;var A7F=null;var A7G=null;var A7H=null;var A7I=null;var A7J=null;var A7K=null;var A7L=null;var A7M=null;var A7N=null;var A7O=null;var A7P=null;var A7Q=null;var A7R=null;var A7S=null;var A7T=null;var A7U=null;var A7V=null;var A7W=null;var A7X=null;var A7Y=null;var A7Z=null;var A70=null;var A71=null;var A72=null;var A73=null;var A74=null;var A75=null;var A76=null;var A77=null;var A78=null;var A79=null;var A7$=null;var A7_=null;var A8a
=null;var A8b=null;var A8c=null;var A8d=null;var A8e=null;function DS(){DS=V(Bn);AQ_();}
function AQ_(){var b,c;b=new Pl;DS();A7z=b;A7A=new Pe;A7B=new Pd;b=new Pg;A7C=b;A7D=b;b=new EJ;b.d1=2;A7E=b;b=new H_;b.d1=2;A7F=b;A7G=b;b=new Hk;b.d1=2;A7H=b;A7I=b;A7J=new Pf;A7K=new Pi;b=new EJ;b.d1=3;A7L=b;b=new H_;b.d1=3;A7M=b;b=new Hk;b.d1=3;A7N=b;A7O=new Ph;A7P=new Pk;b=new EJ;b.d1=4;A7Q=b;b=new H_;b.d1=4;A7R=b;b=new Hk;b.d1=4;A7S=b;b=new EJ;b.d1=5;A7T=b;b=new H_;b.d1=5;A7U=b;b=new Hk;b.d1=5;A7V=b;A7W=new Pj;A7X=new Sd;A7Y=new Se;b=new GS;b.kg=2.0;b.jq=10.0;c=JG(2.0,(-10.0));b.jG=c;b.jr=1.0/(1.0-c);A7Z
=b;b=new OI;b.kg=2.0;b.jq=10.0;c=JG(2.0,(-10.0));b.jG=c;b.jr=1.0/(1.0-c);A70=b;b=new P5;XA(b,2.0,10.0);A71=b;A72=A1M(2.0,5.0);A73=A17(2.0,5.0);A74=AZ1(2.0,5.0);A75=AZp();A76=A1_();A77=A3B();A78=A0s(2.0,10.0,7,1.0);A79=A1W(2.0,10.0,6,1.0);A7$=A3a(2.0,10.0,7,1.0);A7_=AZd(1.5);A8a=A37(2.0);A8b=A21(2.0);A8c=AZt(4);A8d=AZY(4);A8e=A1Q(4);}
function UK(){Bn.call(this);this.GC=0.0;}
function A37(a){var b=new UK();ASw(b,a);return b;}
function ASw(a,b){DS();a.GC=b;}
var ACB=G();
var Ph=G(Bn);
var AF5=G();
function EJ(){Bn.call(this);this.d1=0;}
var H_=G(EJ);
var Hk=G(EJ);
var IW=G(0);
var U6=G();
var Pk=G(Bn);
var YD=G();
var Pg=G(Bn);
function Hm(){var a=this;Bn.call(a);a.o2=0.0;a.nh=0.0;a.no=0.0;a.pR=0.0;}
function A0s(a,b,c,d){var e=new Hm();ALc(e,a,b,c,d);return e;}
function ALc(a,b,c,d,e){DS();a.o2=b;a.nh=c;a.no=e;a.pR=d*3.1415927410125732*(d%2|0?(-1):1);}
var Pf=G(Bn);
var Pe=G(Bn);
var JM=G();
var A5b=null;var A5c=null;var A5d=null;function AIW(){A5b=new BA;A5c=new BA;A5d=new BA;}
var ZW=G(CG);
var IM=G(0);
function BA(){var a=this;C.call(a);a.dF=0.0;a.dE=0.0;}
var A4J=null;var A4K=null;var A4L=null;function ARJ(){var b;b=new BA;b.dF=1.0;b.dE=0.0;A4J=b;b=new BA;b.dF=0.0;b.dE=1.0;A4K=b;b=new BA;b.dF=0.0;b.dE=0.0;A4L=b;}
var ADV=G(Bn);
function A1_(){var a=new ADV();AUR(a);return a;}
function AUR(a){DS();}
function GS(){var a=this;Bn.call(a);a.kg=0.0;a.jq=0.0;a.jG=0.0;a.jr=0.0;}
function A1M(a,b){var c=new GS();XA(c,a,b);return c;}
function XA(a,b,c){DS();a.kg=b;a.jq=c;c=JG(b, -c);a.jG=c;a.jr=1.0/(1.0-c);}
var ADt=G();
var Pl=G(Bn);
var P5=G(GS);
function AZ1(a,b){var c=new P5();AKB(c,a,b);return c;}
function AKB(a,b,c){DS();a.kg=b;a.jq=c;c=JG(b, -c);a.jG=c;a.jr=1.0/(1.0-c);}
var VO=G();
var E0=G(BG);
var A8f=null;var A8g=null;var A8h=null;var A8i=null;function A0q(){A0q=V(E0);AXm();}
function AXm(){var b,c,d;b=new E0;A0q();b.t=B(38);b.q=0;A8f=b;c=new E0;c.t=B(39);c.q=1;A8g=c;d=new E0;d.t=B(40);d.q=2;A8h=d;A8i=T(E0,[b,c,d]);}
var ON=G();
var A8j=null;function A8k(){A8k=V(ON);ATN();}
function ATN(){var b;b=new Bm;Cu();A8j=b;}
function In(){var a=this;Bn.call(a);a.Aq=null;a.zB=null;}
function A1Q(a){var b=new In();Oh(b,a);return b;}
function Oh(a,b){var c,d,e,f,g,h,i;DS();if(b>=2&&b<=5){a:{c=Ck(b);a.Aq=c;d=Ck(b);e=d.data;a.zB=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bh;g=new P;g.b=D(16);I(g,g.a,B(41));O(g,g.a,b,10);h=new N;c=g.b;i=g.a;Q();d=D(i);h.e=d;M(c,0,d,0,i);f.c=1;f.d=1;f.f=h;H(f);}
var Wo=G(In);
function AZY(a){var b=new Wo();ATG(b,a);return b;}
function ATG(a,b){Oh(a,b);}
var Sd=G(Bn);
var Xe=G();
var Pd=G(Bn);
function D4(){var a=this;C.call(a);a.j$=0.0;a.j9=0.0;a.ka=0.0;a.j8=0.0;}
var A8l=null;var A8m=null;var A8n=null;var A8o=null;var A8p=null;function A0d(){A0d=V(D4);APw();}
function APw(){var b;b=new D4;A0d();b.j$=1.0;b.j9=0.0;b.ka=0.0;b.j8=0.0;A8l=b;b=new D4;b.j$=0.0;b.j9=1.0;b.ka=0.0;b.j8=0.0;A8m=b;b=new D4;b.j$=0.0;b.j9=0.0;b.ka=1.0;b.j8=0.0;A8n=b;b=new D4;b.j$=0.0;b.j9=0.0;b.ka=0.0;b.j8=1.0;A8o=b;b=new D4;b.j$=0.0;b.j9=0.0;b.ka=0.0;b.j8=0.0;A8p=b;}
var AAo=G(Hm);
function A1W(a,b,c,d){var e=new AAo();AHn(e,a,b,c,d);return e;}
function AHn(a,b,c,d,e){DS();a.o2=b;a.nh=c;a.no=e;a.pR=d*3.1415927410125732*(d%2|0?(-1):1);}
function Wa(){Bn.call(this);this.Dr=0.0;}
function AZd(a){var b=new Wa();AHR(b,a);return b;}
function AHR(a,b){DS();a.Dr=b*2.0;}
var U0=G();
var Zx=G();
var Pi=G(Bn);
function AFO(){Bn.call(this);this.A0=0.0;}
function A21(a){var b=new AFO();ATW(b,a);return b;}
function ATW(a,b){DS();a.A0=b;}
var ADW=G(Bn);
function A3B(){var a=new ADW();ALK(a);return a;}
function ALK(a){DS();}
var V$=G(Hm);
function A3a(a,b,c,d){var e=new V$();AIP(e,a,b,c,d);return e;}
function AIP(a,b,c,d,e){DS();a.o2=b;a.nh=c;a.no=e;a.pR=d*3.1415927410125732*(d%2|0?(-1):1);}
var J2=G();
var A8q=null;var A8r=null;var A8s=null;function A8t(){A8t=V(J2);AQm();}
function AQm(){var b,c,d,e,f,g;A8q=Bj(Bm,15);b=Bj(Bm,8);A8r=b;c=Bj(Bm,9);d=c.data;A8s=c;e=0;f=d.length;while(e<f){g=new Bm;Cu();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bm;Cu();b[e]=g;e=e+1|0;}}
function Kc(){var a=this;C.call(a);a.tE=null;a.tQ=null;a.tj=null;a.xw=null;}
var A8u=null;function A1c(){A1c=V(Kc);AWd();}
function AD$(a,b,c){var d,e,f,g,h,i,j,k;d=a.tE;e=b.k;f=c.k;if(e<f)f=e;e=b.j;g=c.j;if(e<g)g=e;e=b.i;h=c.i;if(e<h)h=e;d.k=f;d.j=g;d.i=h;i=a.tQ;e=b.k;g=c.k;if(e>g)g=e;e=b.j;h=c.j;if(e>h)h=e;e=b.i;f=c.i;if(e>f)f=e;i.k=g;i.j=h;i.i=f;b=a.tj;h=d.k;j=d.j;k=d.i;b.k=h;b.j=j;b.i=k;e=i.k;f=i.j;g=i.i;h=h+e;j=j+f;k=k+g;b.k=h;b.j=j;b.i=k;f=h*0.5;g=j*0.5;e=k*0.5;b.k=f;b.j=g;b.i=e;b=a.xw;g=i.k;h=i.j;j=i.i;b.k=g;b.j=h;b.i=j;e=d.k;f=d.j;k=d.i;g=g-e;e=h-f;f=j-k;b.k=g;b.j=e;b.i=f;return a;}
function AWd(){var b;b=new Bm;Cu();A8u=b;}
function L$(){var a=this;C.call(a);a.Do=null;a.FX=null;}
var A8v=null;function A2X(){A2X=V(L$);AN0();}
function AN0(){var b;b=new Bm;Cu();A8v=b;}
var AA9=G();
var T3=G();
var XW=G();
var ACh=G();
var O7=G();
var A8w=null;function AMI(){AMI=V(O7);AK6();}
function LV(b){var c;AMI();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function AK6(){var b,c,d,e;b=new R9;c=AJz(GK(S(4.294967296E9*$rt_globals.Math.random()+(-2.147483648E9)|0),32),S(4.294967296E9*$rt_globals.Math.random()+(-2.147483648E9)|0));if(BU(c,BI))c=F(0, 2147483648);d=Bf(I3(c,Bi(c,33)),F(3981806797, 4283543511));d=Bf(I3(d,Bi(d,33)),F(444984403, 3301882366));e=I3(d,Bi(d,33));d=Bf(I3(e,Bi(e,33)),F(3981806797, 4283543511));d=Bf(I3(d,Bi(d,33)),F(444984403, 3301882366));d=I3(d,Bi(d,33));b.y9=e;b.y$=d;A8w=b;}
var Cn=G();
var A8x=null;var A8y=null;var A8z=null;var A8A=null;var A8B=null;var A8C=null;var A8D=null;var A8E=null;var A8F=null;var A8G=null;var A8H=null;var A8I=null;var A8J=null;var A8K=null;var A8L=null;var A8M=null;var A8N=null;var A8O=null;var A8P=null;var A8Q=null;var A8R=null;var A8S=null;var A8T=null;var A8U=null;function A8V(){A8V=V(Cn);AIU();}
function AIU(){var b,c;b=new Bm;Cu();A8x=b;A8y=new Bm;A8z=new Bm;b=new JU;b.lJ=1;b.b6=Ck(16);A8A=b;b=new JU;b.lJ=1;b.b6=Ck(16);A8B=b;A8C=new BA;A8D=new BA;A8E=new BA;A8F=new BA;A8G=new BA;A8H=new BA;A8I=new BA;A8J=new BA;A8K=new BA;b=new I6;c=new Bm;b.fr=c;b.gW=0.0;c.k=0.0;c.j=0.0;c.i=0.0;b.gW=0.0;A8L=b;A8M=new Bm;A8N=new Bm;A8O=new Bm;A8P=new Bm;A8Q=new Bm;A8R=new Bm;A8S=new Bm;A8T=new Bm;A8U=new Bm;}
var Ux=G();
var ABW=G(In);
function AZt(a){var b=new ABW();AUv(b,a);return b;}
function AUv(a,b){Oh(a,b);}
function DX(){C.call(this);this.ct=null;}
var A8W=null;var A8X=null;var A8Y=null;var A8Z=null;var A80=null;var A81=null;var A82=null;var A83=null;var A84=null;var A85=null;var A86=null;function FB(){FB=V(DX);AQy();}
function ET(){var a=new DX();X9(a);return a;}
function X9(a){var b,c;FB();b=Ck(16);c=b.data;a.ct=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;}
function Iv(a,b){var c;c=b.data;b=a.ct.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;}
function SI(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u;i=e*2.0;j=f*2.0;k=g*2.0;l=h*i;m=h*j;n=h*k;o=e*i;p=e*j;q=e*k;r=f*j;s=f*k;t=g*k;u=a.ct.data;u[0]=1.0-(r+t);u[4]=p-n;u[8]=q+m;u[12]=b;u[1]=p+n;u[5]=1.0-(o+t);u[9]=s-l;u[13]=c;u[2]=q-m;u[6]=s+l;u[10]=1.0-(o+r);u[14]=d;u[3]=0.0;u[7]=0.0;u[11]=0.0;u[15]=1.0;return a;}
function OT(a,b){var c,d,e,f,g;FB();c=A8W;d=c.data;e=a.ct.data;f=e[0];g=b.ct.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]
=e[2]*g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Iv(a,c);}
function Gj(a){var b;b=a.ct.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;}
function Uw(a,b,c,d,e){var f,g,h,i;Gj(a);f=1.0/AN$(d*0.017453292519943295/2.0);d=c+b;g=b-c;h=d/g;g=2.0*c*b/g;i=a.ct.data;i[0]=f/e;i[1]=0.0;i[2]=0.0;i[3]=0.0;i[4]=0.0;i[5]=f;i[6]=0.0;i[7]=0.0;i[8]=0.0;i[9]=0.0;i[10]=h;i[11]=(-1.0);i[12]=0.0;i[13]=0.0;i[14]=g;i[15]=0.0;return a;}
function ADN(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;Gj(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.ct.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;}
function Vr(a,b,c){var d,e,f,g,h,i;FB();d=A8Z;e=b.k;f=b.j;g=b.i;d.k=e;d.j=f;d.i=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/BO(f);f=d.k*e;g=d.j*e;e=d.i*e;d.k=f;d.j=g;d.i=e;}d=A80;e=b.k;f=b.j;g=b.i;d.k=e;d.j=f;d.i=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/BO(f);f=d.k*e;g=d.j*e;e=d.i*e;d.k=f;d.j=g;d.i=e;}b=F0(A80,c);e=b.k;e=e*e;f=b.j;e=e+f*f;f=b.i;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/BO(e);h=b.k*g;e=b.j*g;f=b.i*g;b.k=h;b.j=e;b.i=f;}b=A81;c=A80;e=c.k;f=c.j;g=c.i;b.k=e;b.j=f;b.i=g;b=F0(b,A8Z);e=b.k;e=e*e;f=b.j;e=
e+f*f;f=b.i;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/BO(f);f=b.k*e;g=b.j*e;e=b.i*e;b.k=f;b.j=g;b.i=e;}Gj(a);i=a.ct.data;b=A80;i[0]=b.k;i[4]=b.j;i[8]=b.i;b=A81;i[1]=b.k;i[5]=b.j;i[9]=b.i;b=A8Z;i[2]= -b.k;i[6]= -b.j;i[10]= -b.i;return a;}
function TX(b,c){var d,e,f;FB();d=b.data;c=c.data;e=Ck(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+
d[6]*c[5]+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];M(e,0,b,0,16);}
function Y6(b){FB();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]
*b[4]*b[10]*b[15]+b[0]*b[5]*b[10]*b[15];}
function Vx(b){var c,d,e;FB();c=Ck(16);d=Y6(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]
*b[10]*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]
=b[12]*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]
*b[3]-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;}
function ACp(b,c,d){var e,f,g,h,i,j,k,l;FB();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;}
function AQy(){var b;A8W=Ck(16);b=new D0;Hr();b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=1.0;A8X=b;b=new D0;b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=1.0;A8Y=b;b=new Bm;Cu();A8Z=b;A80=new Bm;A81=new Bm;A82=new Bm;A83=ET();A84=new Bm;A85=new Bm;A86=new Bm;}
var QS=G(0);
var KM=G();
function R9(){var a=this;KM.call(a);a.y9=BI;a.y$=BI;}
var ADU=G(Bn);
function AZp(){var a=new ADU();AXo(a);return a;}
function AXo(a){DS();}
var Pj=G(Bn);
function IY(){var a=this;C.call(a);a.gM=null;a.fq=null;a.mL=null;}
var A87=null;var A88=null;var A89=null;function AKX(){AKX=V(IY);ATO();}
function A3h(){var a=new IY();Z$(a);return a;}
function Z$(a){var b,c,d,e,f,g;AKX();b=Bj(I6,6);c=b.data;a.gM=b;b=Bj(Bm,8);d=b.data;e=new Bm;Cu();d[0]=e;d[1]=new Bm;d[2]=new Bm;d[3]=new Bm;d[4]=new Bm;d[5]=new Bm;d[6]=new Bm;d[7]=new Bm;a.fq=b;a.mL=Ck(24);f=0;while(f<6){e=new I6;g=new Bm;e.fr=g;e.gW=0.0;g.k=0.0;g.j=0.0;g.i=0.0;e.gW=0.0;c[f]=e;f=f+1|0;}}
function AD2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;AKX();c=A88;d=c.data;M(c,0,a.mL,0,d.length);c=b.ct;e=a.mL;f=0;FB();g=0;while(g<8){ACp(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.fq.data[f];c=a.mL.data;j=h+1|0;i.k=c[h];g=j+1|0;i.j=c[j];h=g+1|0;i.i=c[g];f=f+1|0;}b=a.gM.data[0];c=a.fq.data;i=c[1];k=c[0];l=c[2];m=b.fr;n=i.k;o=i.j;p=i.i;m.k=n;m.j=o;m.i=p;q=k.k;r=k.j;s=k.i;q=n-q;o=o-r;n=p-s;m.k=q;m.j=o;m.i=n;p=k.k-l.k;r=k.j-l.j;s=k.i-l.i;t=o*s-n*r;s=n*p-q*s;q=q*r-o*p;m.k=t;m.j=s;m.i=q;p=t*t+s*s+q*q;if
(p!==0.0&&p!==1.0){o=1.0/BO(p);p=m.k*o;q=m.j*o;o=m.i*o;m.k=p;m.j=q;m.i=o;}k=b.fr;b.gW= -(i.k*k.k+i.j*k.j+i.i*k.i);b=a.gM.data[1];c=a.fq.data;i=c[4];k=c[5];l=c[7];m=b.fr;r=i.k;s=i.j;n=i.i;m.k=r;m.j=s;m.i=n;o=k.k;p=k.j;q=k.i;o=r-o;p=s-p;q=n-q;m.k=o;m.j=p;m.i=q;Is(ADq(m,k.k-l.k,k.j-l.j,k.i-l.i));b.gW= -YX(i,b.fr);b=a.gM.data[2];c=a.fq.data;JE(b,c[0],c[4],c[3]);b=a.gM.data[3];c=a.fq.data;JE(b,c[5],c[1],c[6]);b=a.gM.data[4];c=a.fq.data;JE(b,c[2],c[3],c[6]);b=a.gM.data[5];c=a.fq.data;JE(b,c[4],c[0],c[1]);}
function ATO(){var b,c,d,e,f,g,h,i,j;b=Bj(Bm,8);c=b.data;d=new Bm;Cu();d.k=(-1.0);d.j=(-1.0);d.i=(-1.0);c[0]=d;d=new Bm;d.k=1.0;d.j=(-1.0);d.i=(-1.0);c[1]=d;d=new Bm;d.k=1.0;d.j=1.0;d.i=(-1.0);c[2]=d;d=new Bm;d.k=(-1.0);d.j=1.0;d.i=(-1.0);c[3]=d;d=new Bm;d.k=(-1.0);d.j=(-1.0);d.i=1.0;c[4]=d;d=new Bm;d.k=1.0;d.j=(-1.0);d.i=1.0;c[5]=d;d=new Bm;d.k=1.0;d.j=1.0;d.i=1.0;c[6]=d;d=new Bm;d.k=(-1.0);d.j=1.0;d.i=1.0;c[7]=d;A87=b;b=Ck(24);e=b.data;A88=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]=d.k;j=i+1|0;e[i]
=d.j;f=j+1|0;e[j]=d.i;h=h+1|0;}A89=new Bm;}
function D0(){var a=this;C.call(a);a.bN=0.0;a.bL=0.0;a.bM=0.0;a.bU=0.0;}
var A8$=null;var A8_=null;function Hr(){Hr=V(D0);AKy();}
function A1u(){var a=new D0();Wg(a);return a;}
function Wg(a){Hr();a.bN=0.0;a.bL=0.0;a.bM=0.0;a.bU=1.0;}
function Vm(a,b,c,d,e){a.bN=b;a.bL=c;a.bM=d;a.bU=e;return a;}
function W8(a){var b,c,d;b=a.bN;b=b*b;c=a.bL;b=b+c*c;c=a.bM;b=b+c*c;c=a.bU;d=b+c*c;if(d!==0.0){AMI();if(!(Fk(d-1.0)>9.999999974752427E-7?0:1)){b=BO(d);a.bU=a.bU/b;a.bN=a.bN/b;a.bL=a.bL/b;a.bM=a.bM/b;}}return a;}
function Fn(a){a.bN= -a.bN;a.bL= -a.bL;a.bM= -a.bM;return a;}
function PE(a,b,c,d,e){var f,g,h,i;Cu();f=BO(b*b+c*c+d*d);if(f===0.0){a.bN=0.0;a.bL=0.0;a.bM=0.0;a.bU=1.0;return a;}f=1.0/f;g=(e>=0.0?e%6.2831854820251465:6.2831854820251465- -e%6.2831854820251465)/2.0;h=AFs(g);i=AHt(g);b=f*b*h;c=f*c*h;d=f*d*h;a.bN=b;a.bL=c;a.bM=d;a.bU=i;return W8(a);}
function AKy(){var b;b=new D0;Hr();b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=0.0;A8$=b;b=new D0;b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=0.0;A8_=b;}
var TL=G();
var ADX=G();
function Bm(){var a=this;C.call(a);a.k=0.0;a.j=0.0;a.i=0.0;}
var A9a=null;var A9b=null;var A9c=null;var A9d=null;var A9e=null;function Cu(){Cu=V(Bm);AHB();}
function IB(a,b){var c,d,e;c=b.k;d=b.j;e=b.i;a.k=c;a.j=d;a.i=e;return a;}
function I4(a,b){var c,d,e;c=b.k;d=b.j;e=b.i;c=a.k+c;d=a.j+d;e=a.i+e;a.k=c;a.j=d;a.i=e;return a;}
function WD(a,b,c,d){b=a.k+b;c=a.j+c;d=a.i+d;a.k=b;a.j=c;a.i=d;return a;}
function GR(a,b){var c,d;c=a.k*b;d=a.j*b;b=a.i*b;a.k=c;a.j=d;a.i=b;return a;}
function U1(a){var b,c;b=a.k;b=b*b;c=a.j;b=b+c*c;c=a.i;return b+c*c;}
function Is(a){var b,c,d;b=a.k;b=b*b;c=a.j;b=b+c*c;c=a.i;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/BO(c);c=a.k*b;d=a.j*b;b=a.i*b;a.k=c;a.j=d;a.i=b;return a;}return a;}
function YX(a,b){return a.k*b.k+a.j*b.j+a.i*b.i;}
function F0(a,b){var c,d,e,f,g,h,i;c=a.j;d=b.i;e=c*d;f=a.i;g=b.j;h=e-f*g;e=b.k;f=f*e;i=a.k;d=f-i*d;c=i*g-c*e;a.k=h;a.j=d;a.i=c;return a;}
function ADq(a,b,c,d){var e,f,g,h;e=a.j;f=e*d;g=a.i;h=f-g*c;g=g*b;f=a.k;d=g-f*d;b=f*c-e*b;a.k=h;a.j=d;a.i=b;return a;}
function Pw(a,b){var c,d,e,f,g,h;c=b.ct.data;d=a.k;e=d*c[0];f=a.j;e=e+f*c[4];g=a.i;e=e+g*c[8]+c[12];h=d*c[1]+f*c[5]+g*c[9]+c[13];d=d*c[2]+f*c[6]+g*c[10]+c[14];a.k=e;a.j=h;a.i=d;return a;}
function AHB(){var b;b=new Bm;Cu();b.k=1.0;b.j=0.0;b.i=0.0;A9a=b;b=new Bm;b.k=0.0;b.j=1.0;b.i=0.0;A9b=b;b=new Bm;b.k=0.0;b.j=0.0;b.i=1.0;A9c=b;b=new Bm;b.k=0.0;b.j=0.0;b.i=0.0;A9d=b;A9e=ET();}
var VQ=G();
var Vi=G(CG);
var OI=G(GS);
function A17(a,b){var c=new OI();AUE(c,a,b);return c;}
function AUE(a,b,c){DS();a.kg=b;a.jq=c;c=JG(b, -c);a.jG=c;a.jr=1.0/(1.0-c);}
var AD9=G();
var UD=G();
var AFp=G();
function I6(){var a=this;C.call(a);a.fr=null;a.gW=0.0;}
function JE(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.fr;f=b.k;g=b.j;h=b.i;e.k=f;e.j=g;e.i=h;i=c.k;j=c.j;k=c.i;f=f-i;g=g-j;k=h-k;e.k=f;e.j=g;e.i=k;h=c.k-d.k;j=c.j-d.j;l=c.i-d.i;i=g*l-k*j;k=k*h-f*l;f=f*j-g*h;e.k=i;e.j=k;e.i=f;f=i*i+k*k+f*f;if(f!==0.0&&f!==1.0){k=1.0/BO(f);f=e.k*k;g=e.j*k;k=e.i*k;e.k=f;e.j=g;e.i=k;}c=a.fr;a.gW= -(b.k*c.k+b.j*c.j+b.i*c.i);}
var Se=G(Bn);
var AFr=G();
var AAF=G();
var AEs=G();
var AFo=G();
var W$=G(0);
var AB6=G();
var SL=G();
var A9f=null;function Vf(){var b,c;A9f=Ck(16384);b=0;while(b<16384){A9f.data[b]=AFs((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=A9f.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);}
function C7(){var a=this;C.call(a);a.cK=null;a.ci=null;a.c8=0;a.qt=0.0;a.le=0.0;}
var A9g=null;var A9h=null;function EB(){EB=V(C7);AR4();}
function A9i(){var a=new C7();AF1(a);return a;}
function A9j(a,b){var c=new C7();UF(c,a,b);return c;}
function A9k(a,b,c,d,e,f){var g=new C7();X4(g,a,b,c,d,e,f);return g;}
function A9l(a,b,c,d,e,f,g,h,i){var j=new C7();AET(j,a,b,c,d,e,f,g,h,i);return j;}
function AF1(a){var b;EB();b=new BP;b.bj=1;b.r=Bj(C,1);a.cK=b;b=new Do;b.dy=1;b.bH=Bc(2);a.ci=b;}
function UF(a,b,c){var d;EB();d=new BP;d.bj=1;d.r=Bj(C,1);a.cK=d;d=new Do;d.dy=1;d.bH=Bc(2);a.ci=d;G3(a,b,c,0,c.hH(),b.Kb(),0.0,8,0,null);}
function X4(a,b,c,d,e,f,g){var h;EB();h=new BP;h.bj=1;h.r=Bj(C,1);a.cK=h;h=new Do;h.dy=1;h.bH=Bc(2);a.ci=h;G3(a,b,c,0,c.hH(),d,e,f,g,null);}
function AET(a,b,c,d,e,f,g,h,i,j){var k;EB();k=new BP;k.bj=1;k.r=Bj(C,1);a.cK=k;k=new Do;k.dy=1;k.bH=Bc(2);a.ci=k;G3(a,b,c,d,e,f,g,h,i,j);}
function G3(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;AFx(a);k=b.i6;if(d==e){a.le=k.fb;return;}if(i)g=I9(g,k.q1*3.0);l=!i&&j===null?0:1;m=Jb(f);AFY(a.ci,0,m);n=k.kp;if(n)E4(A9h,m);o=0;p=0.0;q=k.kS;r=null;s=null;t=m;u=d;a:{b:while(true){c:{v=0;if(d==e){if(u==e)break a;o=1;w=e;}else{i=d+1|0;if(d<0)break b;x=c.e.data;if(d>=x.length)break b;d:{switch(x[d]){case 10:w=i-1|0;v=1;d=i;break c;case 91:if(!n){d=i;break d;}y=XJ(a,c,i,e);if(y>=0){w=i-1|0;d=i+(y+1|0)|0;if(d==e){o=1;break c;}m=RO(A9h);break c;}if
(y!=(-2)){d=i;break d;}d=i+1|0;break d;default:}d=i;}continue b;}}f=A9g;b=f.b3;i=b.m;if(!i)b=L6(f);else{if(!i){b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}i=i-1|0;b.m=i;x=b.r.data;b=x[i];x[i]=null;}z=b;z.ey=0.0;z.lf=p;NI(k,z,c,u,w,s);a.c8=a.c8+z.bK.m|0;if(m!=t){b=a.ci;i=FS(b,b.Z-2|0);ba=a.c8;if(i!=ba){E4(a.ci,ba);E4(a.ci,m);}else{b=a.ci;JK(b,b.Z-1|0,m);}t=m;}e:{if(!z.bK.m){Iz(A9g,z);if(r===null)break e;}else if(r!==null){AAc(r,z);Iz(A9g,z);}else{Cf(a.cK,z);r=z;}if(!v&&!o)s=Zk(r.bK);else{Pr(a,k,r);s=null;}if(l&&r.bK.m
&&!(!v&&!o)){bb=Rh(r.cm)+Q1(r.cm,1);bc=2;while(bc<r.cm.bI){b=r.bK;y=bc-1|0;bd=FF(b,y);if(bb+(bd.c1+bd.dP|0)*k.e8-k.f2-9.999999747378752E-5<=g)bb=bb+r.cm.b6.data[bc];else{if(j!==null){Um(a,k,r,g,j);break a;}ba=TJ(k,r.bK,bc);if(!(!ba&&r.ey===0.0)&&ba<r.bK.m)y=ba;r=Yt(a,k,r,y);if(r===null)break e;Cf(a.cK,r);p=p+q;r.ey=0.0;r.lf=p;bb=Rh(r.cm)+Q1(r.cm,1);bc=1;}bc=bc+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.su;}u=d;}b=new X;b.c=1;b.d=1;H(b);}a.le=k.fb+Fk(p);ABp(a,k);ADI(a,g,h);if(n)A9h.Z=0;}
function ABp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=0.0;d=a.cK;e=d.r;f=0;g=d.m;while(f<g){d=e.data[f];h=d.cm.b6.data;i=d.ey+h[0];j=0.0;k=d.bK;l=k.r;m=0;n=k.m;while(m<n){k=l.data[m];j=I9(j,i+(k.c1+k.dP|0)*b.e8-b.f2);m=m+1|0;i=i+h[m];}i=I9(i,j);j=d.ey;i=i-j;d.mX=i;c=I9(c,j+i);f=f+1|0;}a.qt=c;}
function ADI(a,b,c){var d,e,f,g,h;a:{if(!(c&8)){d=!(c&1)?0:1;e=a.cK;f=e.r;g=0;h=e.m;while(true){if(g>=h)break a;e=f.data[g];e.ey=e.ey+(!d?b-e.mX:0.5*(b-e.mX));g=g+1|0;}}}}
function Um(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=c.bK.m;EB();g=A9g;h=g.b3;i=h.m;if(!i)g=L6(g);else{if(!i){b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}i=i-1|0;h.m=i;j=h.r.data;g=j[i];j[i]=null;}k=g;NI(b,k,e,0,e.hH(),null);l=0.0;h=k.cm;m=h.bI;if(m>0){g=k.bK;n=g.m;if(!n){b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}g=g.r.data[n-1|0];if(!g.jC)h.b6.data[m-1|0]=(g.c1+g.dP|0)*b.e8-b.f2;j=h.b6;o=1;while(o<m){l=l+j.data[o];o=o+1|0;}}d=d-l;n=0;p=c.ey;q=c.cm;r=q.b6;a:{while(true){if(n>=q.bI)break a;p=p+r.data[n];if(p>d)break;n
=n+1|0;}}if(n<=1){s=c.bK;j=s.r;i=0;n=s.m;g=null;if(i>n){b=new Bh;b.c=1;b.d=1;H(b);}while(i<n){r=j.data;o=i+1|0;r[i]=g;i=o;}s.m=0;q.bI=0;J8(q,h.b6,0,h.bI);}else{Nc(c.bK,n-1|0);h=c.cm;if(h.bI>n)h.bI=n;g=c.bK;n=g.m;if(!n){b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}g=g.r.data[n-1|0];if(!g.jC)h.b6.data[h.bI-1|0]=(g.c1+g.dP|0)*b.e8-b.f2;g=k.cm;i=g.bI;if(i>0)PA(h,g,1,i-1|0);}b:{i=f-c.bK.m|0;if(i>0){a.c8=a.c8-i|0;if(b.kp)while(true){b=a.ci;i=b.Z;if(i<=2)break b;if(FS(b,i-2|0)<a.c8)break b;b=a.ci;b.Z=b.Z-2|0;}}}b=c.bK;c=k.bK;j
=c.r;n=c.m;r=b.r;t=r.data;o=b.m;m=o+n|0;if(m>t.length){f=8;if(f<=m)f=m;o=o*1.75|0;if(f>o)o=f;r=GC(b,o);}M(j,0,r,b.m,n);b.m=m;a.c8=a.c8+e.hH()|0;Iz(A9g,k);}
function Yt(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;e=c.bK;f=e.m;g=c.cm;h=d;a:{while(true){if(h<=0)break a;i=h-1|0;if(i>=f)break;b:{switch(e.r.data[i].fY&65535){case 9:case 10:case 13:case 32:break;default:j=0;break b;}j=1;}if(!j)break a;h=h+(-1)|0;}c=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,i,10);I(b,b.a,B(37));d=e.m;O(b,b.a,d,10);k=new N;l=b.b;j=b.a;Q();m=D(j);k.e=m;M(l,0,m,0,j);c.c=1;c.d=1;c.f=k;H(c);}c:{while(true){j=Bo(d,f);if(j>=0)break c;if(j>=0)break;d:{switch(e.r.data[d].fY&65535){case 9:case 10:case 13:case 32:break;default:i
=0;break d;}i=1;}if(!i)break c;d=d+1|0;}c=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,d,10);I(b,b.a,B(37));d=e.m;O(b,b.a,d,10);k=new N;l=b.b;j=b.a;Q();m=D(j);k.e=m;M(l,0,m,0,j);c.c=1;c.d=1;c.f=k;H(c);}k=null;if(j>=0){Nc(e,h);f=h+1|0;if(g.bI>f)g.bI=f;n=d-h|0;if(n>0){a.c8=a.c8-n|0;if(b.kp){g=a.ci;if(FS(g,g.Z-2|0)>a.c8){o=RO(a.ci);while(true){g=a.ci;d=FS(g,g.Z-2|0);j=a.c8;if(d<=j)break;g=a.ci;g.Z=g.Z-2|0;}g=a.ci;JK(g,g.Z-2|0,j);g=a.ci;JK(g,g.Z-1|0,o);}}}}else{EB();p=A9g;k=p.b3;k=k.m?Qr(k):L6(p);e:{k=k;p=k.bK;T1(p,
e,0,h);Vc(e,0,d-1|0);c.bK=p;k.bK=e;q=k.cm;PA(q,g,0,h+1|0);Z0(g,1,d);g.b6.data[0]=( -(AGz(e)).dP|0)*b.e8-b.lB;c.cm=q;k.cm=g;j=c.bK.m;i=k.bK.m;n=(f-j|0)-i|0;d=a.c8-n|0;a.c8=d;if(b.kp&&n>0){r=d-i|0;s=a.ci.Z-2|0;while(true){if(s<2)break e;t=FS(a.ci,s);if(t<=r)break;JK(a.ci,s,t-n|0);s=s+(-2)|0;}}}}if(h)Pr(a,b,c);else{EB();Iz(A9g,c);Qr(a.cK);}return k;}
function Pr(a,b,c){var d,e;d=c.bK;e=d.m;if(!e){b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}d=d.r.data[e-1|0];if(!d.jC){c=c.cm;c.b6.data[c.bI-1|0]=(d.c1+d.dP|0)*b.e8-b.f2;}}
function XJ(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c==d)return (-1);if(c>=0){e=b.e;f=e.data;g=f.length;if(c<g){switch(f[c]){case 35:h=0;i=c+1|0;a:{while(true){if(i>=d)break a;if(i<0)break;if(i>=g)break;j=f[i];if(j==93){if(i<(c+2|0))break a;if(i<=(c+9|0)){c=i-c|0;if(c<8)h=h<<((9-c|0)<<2)|255;EB();b=A9h;d=((h&(-16711936))>>>8|0)|(h&16711935)<<8;E4(b,(d>>>16|0)+(d<<16)|0);return c;}break a;}k=(h<<4)+j|0;if(j>=48&&j<=57)h=k+(-48)|0;else if(j>=65&&j<=70)h=k+(-55)|0;else{if(j<97)break a;if(j>102)break a;h=k+(-87)|0;}i
=i+1|0;}b=new X;b.c=1;b.d=1;H(b);}return (-1);case 91:break;case 93:EB();b=A9h;c=b.Z;if(c>1)b.Z=c-1|0;return 0;default:l=c+1|0;b:{while(l<d){if(l<0)break b;i=Bo(l,g);if(i>=0)break b;if(f[l]==93){d=Bo(c,l);if(d>0){b=new Y;b.c=1;b.d=1;H(b);}if(!d){Q();b=A9m;}else if(!(!c&&!i)){b=new N;d=l-c|0;Q();f=D(d);b.e=f;M(e,c,f,0,d);}AJL();m=A9n;d=CA(m,b);m=d<0?null:m.cs.data[d];if(m===null)return (-1);EB();E4(A9h,Jb(m));return l-c|0;}l=l+1|0;}return (-1);}b=new X;b.c=1;b.d=1;H(b);}return (-2);}}b=new X;b.c=1;b.d=1;H(b);}
function AFx(a){var b,c,d,e,f,g,h;EB();Lf(A9g,a.cK);b=a.cK;c=b.r;d=0;e=b.m;f=null;if(d>e){b=new Bh;b.c=1;b.d=1;H(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.m=0;a.ci.Z=0;a.c8=0;a.qt=0.0;a.le=0.0;}
function AMG(a){var b,c,d,e,f,g,h,i,j;if(!a.cK.m)return B(42);b=new P;b.b=D(128);c=a.qt;Dz(b,b.a,c);d=b.a;Bd(b,d,d+1|0);b.b.data[d]=120;c=a.le;Dz(b,b.a,c);d=b.a;Bd(b,d,d+1|0);b.b.data[d]=10;e=0;d=a.cK.m;while(e<d){f=a.cK;if(e>=f.m){g=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,e,10);I(b,b.a,B(37));e=f.m;O(b,b.a,e,10);f=new N;h=b.b;d=b.a;Q();i=D(d);f.e=i;M(h,0,i,0,d);g.c=1;g.d=1;g.f=f;H(g);}f=Ug(f.r.data[e]);I(b,b.a,f);j=b.a;Bd(b,j,j+1|0);b.b.data[j]=10;e=e+1|0;}e=b.a-1|0;b.a=e;f=new N;h=b.b;Q();i=D(e);f.e
=i;M(h,0,i,0,e);return f;}
function AR4(){var b,c,d,e,f,g,$$je;LY();b=A64;c=CA(b,L(EF));b=c<0?null:b.cs.data[c];if(b===null){b=new Ix;d=new BP;d.bj=0;d.r=Bj(C,4);b.b3=d;b.dL=100;a:{try{d=KN(L(EF),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CI){}else{throw $$e;}}try{d=LR(L(EF),null);IX(d,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dv){}else{throw $$e;}}d=null;}b.ie=d;if(d===null){b=new BJ;d=new P;d.b=D(16);I(d,d.a,B(27));if(L(EF).bb===null)L(EF).bb=$rt_str(L(EF).G.$meta.name);e=L(EF).bb;I(d,d.a,e);e=new N;f=d.b;c
=d.a;Q();g=D(c);e.e=g;M(f,0,g,0,c);b.c=1;b.d=1;b.f=e;H(b);}BH(A64,L(EF),b);}A9g=b;e=new Do;e.dy=1;e.bH=Bc(4);A9h=e;}
function DY(){var a=this;C.call(a);a.dv=null;a.lH=0.0;a.h7=0.0;a.yH=0.0;a.mS=0.0;a.hY=0;a.i2=0;}
function JS(a,b,c,d,e){var f,g,h;f=a.dv.em;g=1.0/f.eo;h=1.0/f.ei;UE(a,b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.hY=d;if(e<0)e= -e|0;a.i2=e;}
function UE(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.dv.em;g=f.eo;h=f.ei;i=Fk(d-b);j=g;i=i*j;a.hY=i+Cm(i)*0.5|0;k=Fk(e-c);i=h;k=k*i;l=k+Cm(k)*0.5|0;a.i2=l;if(a.hY==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.lH=b;a.h7=c;a.yH=d;a.mS=e;}
function ABD(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.lH*a.dv.em.eo;e=d+Cm(d)*0.5|0;d=a.h7*a.dv.em.ei;f=d+Cm(d)*0.5|0;g=a.hY;h=a.i2/c|0;i=g/b|0;j=$rt_createMultiArray(DY,[i,h]);k=j.data;l=0;while(l<h){m=0;n=e;while(m<i){o=k[l].data;p=new DY;p.dv=a.dv;JS(p,n,f,b,c);o[m]=p;m=m+1|0;n=n+b|0;}l=l+1|0;f=f+c|0;}return j;}
var ADS=G(DY);
function Ks(){var a=this;C.call(a);a.i6=null;a.f_=null;a.fo=null;a.Di=0;a.yX=0;a.qG=0;}
function A9o(a,b,c){var d=new Ks();AB4(d,a,b,c);return d;}
function AB4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;a.Di=b.nV;a.i6=b;a.yX=d;if(c!==null&&c.m){a.f_=c;a.qG=0;}else{e=b.h5;if(e===null){b=new Bh;b.c=1;b.d=1;b.f=B(43);H(b);}f=e.data.length;c=new BP;c.bj=1;c.r=Bj(C,f);a.f_=c;g=0;while(g<f){h=b.un;if(h!==null){i=A9p;c=b.h5.data[g];j=h.ja;k=XP(i.h1,c,j);}else{c=A9p;h=b.h5.data[g];k=new Hx;i=c.h1;JJ();Jx(k,i,h,A9q);}c=a.f_;h=new DY;l=new Hu;m=null;j=AC1(k,Pn(k),m,0);i=A9r;m=i.l.createTexture();n=i.ek;i.ek=n+1|0;B$(i.eR,n,Cb(m));NN();k=A9s;l.io=k;l.h_=k;Qe();k=A9t;l.ib=
k;l.hE=k;l.kB=1.0;l.eh=3553;l.iu=n;Lb(l,j);k=A9u;i=A9v;if(k===null){i=i.cx.data[0];while(i!==null&&i.cQ!==null){i=i.c2;}}else{d=Qi(k);e=i.cx.data;i=e[d&(e.length-1|0)];while(i!==null&&!(i.eI==d&&AAm(k,i.cQ))){i=i.c2;}}i=i===null?null:i.dZ;if(i===null){i=new BP;i.bj=1;i.r=Bj(C,16);}Cf(i,l);Gt(A9v,k,i);h.dv=l;k=l.em;JS(h,0,0,k.eo,k.ei);Cf(c,h);g=g+1|0;}a.qG=1;}a.fo=A3M(a,a.yX);ZA(a,b);}
function ZA(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.gz.data;d=c.length;e=0;a:while(true){if(e>=d){f=b.nz;if(f!==null){g=a.f_;d=f.iL;if(d>=g.m){f=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,d,10);I(b,b.a,B(37));d=g.m;O(b,b.a,d,10);g=new N;c=b.b;e=b.a;Q();h=D(e);g.e=h;M(c,0,h,0,e);f.c=1;f.d=1;f.f=g;H(f);}Qu(b,f,g.r.data[d]);}return;}b:{h=c[e];if(h!==null){h=h.data;i=h.length;j=0;while(true){if(j>=i)break b;f=h[j];if(f!==null){g=a.f_;k=f.iL;if(k>=g.m)break a;Qu(b,f,g.r.data[k]);}j=j+1|0;}}}e=e+1|0;}b=new Y;l=new P;l.b
=D(16);I(l,l.a,B(36));O(l,l.a,k,10);I(l,l.a,B(37));d=g.m;O(l,l.a,d,10);f=new N;c=l.b;e=l.a;Q();h=D(e);f.e=h;M(c,0,h,0,e);b.c=1;b.d=1;b.f=f;H(b);}
function IC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$$je;Sm(a.fo);f=a.fo;g=c.e.data.length;h=null;LY();i=A64;j=CA(i,L(C7));i=j<0?null:i.cs.data[j];if(i===null){i=new Ix;k=new BP;CO(k);k.bj=0;k.r=Bj(C,4);i.b3=k;i.dL=100;a:{try{k=KN(L(C7),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CI){}else{throw $$e;}}try{k=LR(L(C7),null);IX(k,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dv){}else{throw $$e;}}k=null;}i.ie=k;if(k===null){b=new BJ;c=new P;J9(c,16);CR(c,c.a,B(27));if(L(C7).bb===null)L(C7).bb=$rt_str(L(C7).G.$meta.name);i
=L(C7).bb;CR(c,c.a,i);i=new N;l=c.b;j=c.a;Q();m=D(j);i.e=m;M(l,0,m,0,j);b.c=1;b.d=1;b.f=i;H(b);}BH(A64,L(C7),i);}k=i.b3;n=k.m;if(!n)k=i.kc();else{if(!n){b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}n=n-1|0;k.m=n;l=k.r.data;k=l[n];l[n]=null;}i=k;Cf(f.j5,i);G3(i,f.fN,c,0,g,f.mQ,0.0,8,0,h);OR(f,i,d,e+f.fN.i6.j_);NZ(a.fo,b);return i;}
var O9=G();
var A9w=null;function A9x(){A9x=V(O9);AXq();}
function AXq(){var b;b=new Bq;Et();A9w=b;}
function Bq(){var a=this;C.call(a);a.cd=0.0;a.cc=0.0;a.cb=0.0;a.ca=0.0;}
var A9y=null;var A9z=null;var A9A=null;var A9B=null;var A9C=null;var A9D=0.0;var A9E=null;var A9F=null;var A9G=null;var A9H=null;var A9I=null;var A9J=null;var A9K=null;var A9L=null;var A9M=null;var A9N=null;var A9O=null;var A9P=null;var A9Q=null;var A9R=null;var A9S=null;var A9T=null;var A9U=null;var A9V=null;var A9W=null;var A9X=null;var A9Y=null;var A9Z=null;var A90=null;var A91=null;var A92=null;var A93=null;var A94=null;var A95=null;var A96=null;function Et(){Et=V(Bq);AP1();}
function Dc(a){var b,c;b=a.cd;if(b<0.0)a.cd=0.0;else if(b>1.0)a.cd=1.0;c=a.cc;if(c<0.0)a.cc=0.0;else if(c>1.0)a.cc=1.0;c=a.cb;if(c<0.0)a.cb=0.0;else if(c>1.0)a.cb=1.0;c=a.ca;if(c<0.0)a.ca=0.0;else if(c>1.0)a.ca=1.0;return a;}
function ASg(a,b){var c,d,e,f;if(a===b)return 1;if(b!==null){c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new B9;d.G=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new B9;c.G=e;f=c;e.classObject=f;}}if(d===c){c=b;return Jb(a)!=Jb(c)?0:1;}}return 0;}
function ALI(a){var b,c,d;b=a.cd;c=31*(b===0.0?0:($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b))|0;b=a.cc;c=31*(c+(b===0.0?0:($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b))|0)|0;d=a.cb;c=31*(c+(d===0.0?0:($rt_globals.isNaN(d)?1:0)?2143289344:$rt_floatToRawIntBits(d))|0)|0;d=a.ca;return c+(d===0.0?0:($rt_globals.isNaN(d)?1:0)?2143289344:$rt_floatToRawIntBits(d))|0;}
function Y1(a){return $rt_intBitsToFloat(((255.0*a.ca|0)<<24|(255.0*a.cb|0)<<16|(255.0*a.cc|0)<<8|255.0*a.cd|0)&(-16777217));}
function Jb(a){return (255.0*a.ca|0)<<24|(255.0*a.cb|0)<<16|(255.0*a.cc|0)<<8|255.0*a.cd|0;}
function AIX(a){var b,c,d,e,f;b=Bk((255.0*a.cd|0)<<24|(255.0*a.cc|0)<<16|(255.0*a.cb|0)<<8|255.0*a.ca|0,4);while(b.e.data.length<8){c=new P;c.b=D(16);I(c,c.a,B(44));I(c,c.a,b);b=new N;d=c.b;e=c.a;Q();f=D(e);b.e=f;M(d,0,f,0,e);}return b;}
function Ci(b,c){Et();b.cd=((c&(-16777216))>>>24|0)/255.0;b.cc=((c&16711680)>>>16|0)/255.0;b.cb=((c&65280)>>>8|0)/255.0;b.ca=(c&255)/255.0;}
function AP1(){var b;b=new Bq;Et();b.cd=1.0;b.cc=1.0;b.cb=1.0;b.ca=1.0;Dc(b);A9y=b;b=new Bq;Ci(b,(-1077952513));A9z=b;b=new Bq;Ci(b,2139062271);A9A=b;b=new Bq;Ci(b,1061109759);A9B=b;b=new Bq;b.cd=0.0;b.cc=0.0;b.cb=0.0;b.ca=1.0;Dc(b);A9C=b;A9D=Y1(A9y);b=new Bq;b.cd=0.0;b.cc=0.0;b.cb=0.0;b.ca=0.0;Dc(b);A9E=b;b=new Bq;b.cd=0.0;b.cc=0.0;b.cb=1.0;b.ca=1.0;Dc(b);A9F=b;b=new Bq;b.cd=0.0;b.cc=0.0;b.cb=0.5;b.ca=1.0;Dc(b);A9G=b;b=new Bq;Ci(b,1097458175);A9H=b;b=new Bq;Ci(b,1887473919);A9I=b;b=new Bq;Ci(b,(-2016482305));A9J
=b;b=new Bq;b.cd=0.0;b.cc=1.0;b.cb=1.0;b.ca=1.0;Dc(b);A9K=b;b=new Bq;b.cd=0.0;b.cc=0.5;b.cb=0.5;b.ca=1.0;Dc(b);A9L=b;b=new Bq;Ci(b,16711935);A9M=b;b=new Bq;Ci(b,2147418367);A9N=b;b=new Bq;Ci(b,852308735);A9O=b;b=new Bq;Ci(b,579543807);A9P=b;b=new Bq;Ci(b,1804477439);A9Q=b;b=new Bq;Ci(b,(-65281));A9R=b;b=new Bq;Ci(b,(-2686721));A9S=b;b=new Bq;Ci(b,(-626712321));A9T=b;b=new Bq;Ci(b,(-5963521));A9U=b;b=new Bq;Ci(b,(-1958407169));A9V=b;b=new Bq;Ci(b,(-759919361));A9W=b;b=new Bq;Ci(b,(-1306385665));A9X=b;b=new Bq;Ci(b,
(-16776961));A9Y=b;b=new Bq;Ci(b,(-13361921));A9Z=b;b=new Bq;Ci(b,(-8433409));A90=b;b=new Bq;Ci(b,(-92245249));A91=b;b=new Bq;Ci(b,(-9849601));A92=b;b=new Bq;b.cd=1.0;b.cc=0.0;b.cb=1.0;b.ca=1.0;Dc(b);A93=b;b=new Bq;Ci(b,(-1608453889));A94=b;b=new Bq;Ci(b,(-293409025));A95=b;b=new Bq;Ci(b,(-1339006721));A96=b;}
function Jg(){var a=this;C.call(a);a.eh=0;a.iu=0;a.io=null;a.h_=null;a.ib=null;a.hE=null;a.kB=0.0;}
var A5e=0.0;function XL(a,b,c,d){if(b!==null&&!(!d&&a.ib===b)){A9r.fR(a.eh,10242,b.jI);a.ib=b;}if(c!==null&&!(!d&&a.hE===c)){A9r.fR(a.eh,10243,c.jI);a.hE=c;}}
function TO(a,b,c,d){if(b!==null&&!(!d&&a.io===b)){A9r.fR(a.eh,10241,b.fd);a.io=b;}if(c!==null&&!(!d&&a.h_===c)){A9r.fR(a.eh,10240,c.fd);a.h_=c;}}
function AB0(){var b,c,d,e,f;b=A5e;if(b>0.0)return b;if(!(A97.ii.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){A5e=1.0;return 1.0;}if(!A5g){c=Ck(16);d=c.data.length;e=new Ig;f=0+d|0;e.v=(-1);e.y=d;e.g=d;e.h=0;e.g=f;e.iO=0;e.kk=0;e.it=c;}else{e=new Ch;c=BF(64);e.v=(-1);e.y=64;e.g=64;B6();e.bh=A98;e.bl=0;e.U=c;e.h=0;e.g=64;e.b4=1;e.bt=0;e.bh=CU();e=Fr(e);}BS(e,0);Cj(e,e.y);A99.l3(34047,e);b=Ox(e,0);A5e=b;return b;}
function AGa(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;if(c===null)return;if(!c.g$)Q0(c);AG_();if(A9$===A9_){c=new Bb;c.c=1;c.d=1;c.f=B(45);H(c);}if(!c.g$){e=new Bb;e.c=1;e.d=1;e.f=B(46);H(e);}c.g$=0;f=c.iT;c.iT=null;g=1;h=c.hC;e=f.bD;if(e===null){HT();e=A$a;}else e=HD(e.ch);if(h===e)e=f;else{e=new Hj;h=f.bD;I5(e,h===null?f.c5:h.cN,h===null?f.c6:h.cM,c.hC);Hy();h=A$b;e.kj=h;i=e.bD;if(i===null){FE(e);h=e.cw;HJ();i=$rt_ustr(A$c.t);h.globalCompositeOperation=i;}else{j=h!==h?1:0;SA(i.cG,j);}i=f.bD;g=i===null?f.c5:i.cN;k
=i===null?f.c6:i.cM;h=e.bD;if(h===null){FE(f);J3(e,f.fk,0,0,g,k,0,0,g,k);}else{l=i.cG;m=h.cG;MG(l,m,0,0,g,k,0,0,g,k);}if(f.is){e=new Bb;e.c=1;e.d=1;e.f=B(47);H(e);}IU();Ii(A$d,f.j1);h=f.bD;if(h!==null)Mz(h.cG);f.is=1;g=1;}A9r.kT(3317,1);if(c.w7)AEK(b,e,Ku(e),KE(e));else{h=A9r;c=e.bD;if(c===null)k=6408;else a:{j=c.ch;switch(j){case 1:k=6406;break a;case 2:k=6410;break a;case 3:case 5:k=6407;break a;case 4:case 6:k=6408;break a;default:}c=new Bb;e=new P;e.b=D(16);CR(e,e.a,C2(B(48)));O(e,e.a,j,10);h=new N;n=e.b;d
=e.a;o=D(d);h.e=o;M(n,0,o,0,d);c.c=1;c.d=1;c.f=h;H(c);}l=c===null?e.c5:c.cN;p=c===null?e.c6:c.cM;q=c===null?6408:AOw(c.ch);c=e.bD;h.fw(b,d,k,l,p,0,q,c===null?5121:AOH(c.ch),AES(e));}if(g)QU(e);}
function AKt(){A5e=0.0;}
function Hu(){Jg.call(this);this.em=null;}
var A9v=null;function Lb(a,b){var c,d;a.em=b;if(!b.g$)Q0(b);A9r.fM(a.eh,a.iu);AGa(3553,b,0);TO(a,a.io,a.h_,1);XL(a,a.ib,a.hE,1);c=a.kB;d=AB0();if(d!==1.0){c=Ya(c,d);A99.qq(3553,34046,c);a.kB=c;}A9r.fM(a.eh,0);}
function AMm(a){var b,c,d,e,f,g,h;b=a.em;if(!(b instanceof Kn)){b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=Bk(a.$id$,4);b=new P;b.b=D(16);I(b,b.a,B(1));e=b.a;if(d===null)d=B(2);I(b,e,d);c=new N;f=b.b;g=b.a;Q();h=D(g);c.e=h;M(f,0,h,0,g);return c;}c=b;if(!c.$id$){d=$rt_nextId();c.$id$=d;}d=Bk(b.$id$,4);b=new P;b.b=D(16);I(b,b.a,B(1));e=b.a;if(d===null)d=B(2);I(b,e,d);c=new N;f=b.b;g=b.a;Q();h=D(g);c.e=h;M(f,0,h,0,g);return c;}
function AEx(){var b,c,d,e;b=new Gm;c=HE(16);b.e_=0;d=Bj(E8,c);e=d.data;b.cx=d;b.iS=0.75;b.fz=e.length*0.75|0;A9v=b;}
function BP(){var a=this;C.call(a);a.r=null;a.m=0;a.bj=0;a.hv=null;}
function A03(){var a=new BP();AH8(a);return a;}
function A1J(a,b){var c=new BP();AID(c,a,b);return c;}
function AH8(a){a.bj=1;a.r=Bj(C,16);}
function AID(a,b,c){a.bj=b;a.r=Bj(C,c);}
function Cf(a,b){var c,d,e,f;c=a.r;d=c.data;e=a.m;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=GC(a,e);}c=c.data;f=a.m;a.m=f+1|0;c[f]=b;}
function V3(a,b){var c,d,e,f,g,h,i,j;c=b.r;d=b.m;e=a.r;f=e.data;g=a.m;h=g+d|0;if(h>f.length){i=8;if(i<=h)i=h;j=g*1.75|0;if(i>j)j=i;e=GC(a,j);}M(c,0,e,a.m,d);a.m=h;}
function T1(a,b,c,d){var e,f,g,h,i,j,k,l,m;if((c+d|0)<=b.m){e=b.r;f=a.r;g=f.data;h=a.m;i=h+d|0;if(i>g.length){j=8;if(j<=i)j=i;k=h*1.75|0;if(j>k)k=j;f=GC(a,k);}M(e,c,f,a.m,d);a.m=i;return;}l=new Bh;m=new P;m.b=D(16);I(m,m.a,B(49));O(m,m.a,c,10);I(m,m.a,B(50));O(m,m.a,d,10);I(m,m.a,B(51));c=b.m;O(m,m.a,c,10);b=new N;e=m.b;d=m.a;Q();g=D(d);b.e=g;M(e,0,g,0,d);l.c=1;l.d=1;l.f=b;H(l);}
function FF(a,b){var c,d,e,f,g,h;if(b<a.m)return a.r.data[b];c=new Y;d=new P;d.b=D(16);I(d,d.a,B(36));O(d,d.a,b,10);I(d,d.a,B(37));b=a.m;O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function U9(a,b,c){var d,e,f;a:{d=a.r;if(!(!c&&b!==null)){e=0;f=a.m;while(e<f){if(d.data[e]===b){O_(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.m;while(true){if(e>=f)break a;if(BC(b,d.data[e])){O_(a,e);return 1;}e=e+1|0;}}}return 0;}
function O_(a,b){var c,d,e,f,g,h,i;c=a.m;if(b<c){d=a.r;e=d.data;f=e[b];g=c-1|0;a.m=g;if(!a.bj)e[b]=e[g];else M(d,b+1|0,d,b,g-b|0);e[a.m]=null;return f;}f=new Y;h=new P;h.b=D(16);I(h,h.a,B(36));O(h,h.a,b,10);I(h,h.a,B(37));c=a.m;O(h,h.a,c,10);i=new N;e=h.b;b=h.a;Q();d=D(b);i.e=d;M(e,0,d,0,b);f.c=1;f.d=1;f.f=i;H(f);}
function Vc(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.m;if(c>=d){e=new Y;f=new P;f.b=D(16);I(f,f.a,B(52));O(f,f.a,c,10);I(f,f.a,B(37));g=a.m;O(f,f.a,g,10);h=new N;i=f.b;c=f.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}if(b>c){e=new Y;h=new P;h.b=D(16);I(h,h.a,B(53));O(h,h.a,b,10);I(h,h.a,B(54));O(h,h.a,c,10);f=new N;i=h.b;c=h.a;Q();j=D(c);f.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=f;H(e);}i=a.r;g=(c-b|0)+1|0;k=d-g|0;if(a.bj){c=b+g|0;M(i,c,i,b,d-c|0);}else{l=c+1|0;if(k>l)l=k;M(i,l,i,b,d-l|0);}l=k;while(l<d){i.data[l]
=null;l=l+1|0;}a.m=k;}
function Qr(a){var b,c,d,e;b=a.m;if(b){c=b-1|0;a.m=c;d=a.r.data;e=d[c];d[c]=null;return e;}e=new BK;e.c=1;e.d=1;e.f=B(33);H(e);}
function Zk(a){var b,c;b=a.m;if(b)return a.r.data[b-1|0];c=new BK;c.c=1;c.d=1;c.f=B(33);H(c);}
function AGz(a){var b;if(a.m)return a.r.data[0];b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}
function ABF(a){var b,c,d,e,f,g;b=a.r;c=0;d=a.m;e=null;if(c>d){e=new Bh;e.c=1;e.d=1;H(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.m=0;}
function YP(a,b){var c,d,e,f,g,h,i;if(b<0){c=new Bh;d=new P;d.b=D(16);I(d,d.a,B(55));O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}g=a.m;i=g+b|0;if(i>a.r.data.length){if(8>i)i=8;b=g*1.75|0;if(i>b)b=i;GC(a,b);}return a.r;}
function GC(a,b){var c,d,e,f,g,h;c=a.r;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new B9;e.G=d;f=e;d.classObject=f;}}e=E6(e);if(e===null){e=new CK;e.c=1;e.d=1;H(e);}if(e===L($rt_voidcls())){e=new Bh;e.c=1;e.d=1;H(e);}if(b<0){e=new D1;e.c=1;e.d=1;H(e);}e=EU(e.G,b);d=e.data;g=a.m;h=d.length;if(g<h)h=g;Hh(c,0,e,0,h);a.r=e;return e;}
function Os(a){var b;if(A$e){b=new GF;b.dN=1;b.gi=a;b.ko=1;return b;}if(a.hv===null){b=new LH;b.lc=a;b.mN=1;a.hv=b;}return Rz(a.hv);}
function Nc(a,b){var c,d,e,f,g,h,i;if(b>=0){c=a.m;if(c<=b)return;d=b;while(d<c){a.r.data[d]=null;d=d+1|0;}a.m=b;return;}e=new Bh;f=new P;f.b=D(16);I(f,f.a,B(56));O(f,f.a,b,10);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);e.c=1;e.d=1;e.f=g;H(e);}
function AQZ(a){var b,c,d,e,f,g,h;if(a.bj){b=a.r;c=1;d=0;e=a.m;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.dT()|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=$rt_nextId();g.$id$=h;}return a.$id$;}
function ALv(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.bj)return 0;if(!(b instanceof BP))return 0;c=b;if(!c.bj)return 0;d=a.m;if(d!=c.m)return 0;e=a.r;f=c.r;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.d5(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function AOz(a){var b,c,d,e,f,g,h,i,j,k;if(!a.m)return B(57);b=a.r;c=new JC;d=D(32);e=d.data;c.br=d;f=c.W;if(f==e.length)C0(c,f+1|0);b=b.data;e=c.br.data;g=c.W;c.W=g+1|0;e[g]=91;h=b[0];if(h===null)JV(c);else{h=h.s();if(h===null)JV(c);else{i=h.e.data.length;j=c.W+i|0;if(j>c.br.data.length)C0(c,j);G8(h,0,i,c.br,c.W);c.W=j;}}k=1;while(k<a.m){i=B(58).e.data.length;j=c.W+i|0;if(j>c.br.data.length)C0(c,j);G8(B(58),0,i,c.br,c.W);c.W=j;h=b[k];if(h===null)JV(c);else{h=h.s();if(h===null)JV(c);else{g=h.e.data.length;i
=c.W+g|0;if(i>c.br.data.length)C0(c,i);G8(h,0,g,c.br,c.W);c.W=i;}}k=k+1|0;}f=c.W;if(f==c.br.data.length)C0(c,f+1|0);b=c.br;e=b.data;g=c.W;f=g+1|0;c.W=f;e[g]=93;if(!f)c=B(42);else{c=new N;Q();e=D(f);c.e=e;M(b,0,e,0,f);}return c;}
function Jf(){var a=this;C.call(a);a.ff=0;a.dp=null;a.cs=null;a.wM=0.0;a.o8=0;a.kx=0;a.jx=0;a.qc=null;a.qb=null;}
var A4Z=null;function EE(a,b){var c=new Jf();ADv(c,a,b);return c;}
function ADv(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.wM=c;d=JT(b,c);a.o8=d*c|0;b=d-1|0;a.jx=b;a.kx=Ek(S(b));a.dp=Bj(C,d);a.cs=Bj(C,d);return;}e=new Bh;f=new P;f.b=D(16);I(f,f.a,B(59));Dz(f,f.a,c);g=new N;h=f.b;d=f.a;Q();i=D(d);g.e=i;M(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function CA(a,b){var c,d,e;if(b===null){c=new Bh;c.c=1;c.d=1;c.f=B(60);H(c);}d=a.dp;e=R(Bi(Bf(S(b.dT()),F(2135587861, 2654435769)),a.kx));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.d5(b))break;e=(e+1|0)&a.jx;}return e;}
function BH(a,b,c){var d,e,f;d=CA(a,b);if(d>=0){e=a.cs.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.dp.data;e[d]=b;a.cs.data[d]=c;d=a.ff+1|0;a.ff=d;if(d>=a.o8)AAW(a,e.length<<1);return null;}
function AAB(a,b){var c;c=CA(a,b);return c<0?null:a.cs.data[c];}
function WO(a,b){var c,d,e,f,g,h,i,j;c=CA(a,b);if(c<0)return null;d=a.dp;e=a.cs.data;f=e[c];g=a.jx;h=(c+1|0)&g;while(true){i=d.data;b=i[h];if(b===null)break;j=R(Bi(Bf(S(b.dT()),F(2135587861, 2654435769)),a.kx));if(((h-j|0)&g)>((c-j|0)&g)){i[c]=b;e[c]=e[h];c=h;}h=(h+1|0)&g;}i[c]=null;e[c]=null;a.ff=a.ff-1|0;return f;}
function AAW(a,b){var c,d,e,f,g,h,i,j;a:{c=a.dp.data.length;a.o8=b*a.wM|0;d=b-1|0;a.jx=d;a.kx=Ek(S(d));e=a.dp;f=a.cs;a.dp=Bj(C,b);a.cs=Bj(C,b);if(a.ff>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.dp;b=R(Bi(Bf(S(g.dT()),F(2135587861, 2654435769)),a.kx));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.jx;}j[b]=g;a.cs.data[b]=h;}d=d+1|0;}}}}
function YM(a){var b,c,d,e,f,g;if(A$e){b=new Jc;b.eP=1;b.iB=a;b.ik=(-1);b.cL=(-1);c=a.dp.data;d=c.length;a:{while(true){e=b.cL+1|0;b.cL=e;if(e>=d)break;if(c[e]===null)continue;else{b.dz=1;break a;}}b.dz=0;}return b;}if(a.qc===null){b=new Jc;b.eP=1;b.iB=a;b.ik=(-1);b.cL=(-1);c=a.dp.data;f=c.length;b:{while(true){e=b.cL+1|0;b.cL=e;if(e>=f)break;if(c[e]===null)continue;else{b.dz=1;break b;}}b.dz=0;}a.qc=b;b=new Jc;b.eP=1;b.iB=a;b.ik=(-1);b.cL=(-1);c:{while(true){e=b.cL+1|0;b.cL=e;if(e>=f)break;if(c[e]===null)continue;else
{b.dz=1;break c;}}b.dz=0;}a.qb=b;}b=a.qc;if(b.eP){g=a.qb;g.ik=(-1);g.cL=(-1);c=g.iB.dp.data;d=c.length;d:{while(true){e=g.cL+1|0;g.cL=e;if(e>=d)break;if(c[e]===null)continue;else{g.dz=1;break d;}}g.dz=0;}g.eP=1;b.eP=0;return g;}b.ik=(-1);b.cL=(-1);c=b.iB.dp.data;d=c.length;e:{while(true){e=b.cL+1|0;b.cL=e;if(e>=d)break;if(c[e]===null)continue;else{b.dz=1;break e;}}b.dz=0;}b.eP=1;a.qb.eP=0;return b;}
function AJl(){A4Z=new C;}
var V2=G(Jf);
var AGj=G();
function Dj(){var a=this;C.call(a);a.e0=0;a.cU=0;a.di=0;a.dg=0;a.g1=0;a.c3=null;a.fi=0;a.fg=0;}
var Zr=G();
var ACV=G();
var ADT=G();
var ADl=G();
var Op=G();
var A$f=null;function A$g(){A$g=V(Op);ALf();}
function ALf(){var b,c,d;b=new Kc;A1c();c=new Bm;Cu();b.tE=c;d=new Bm;b.tQ=d;b.tj=new Bm;b.xw=new Bm;c.k=0.0;c.j=0.0;c.i=0.0;d.k=0.0;d.j=0.0;d.i=0.0;AD$(b,c,d);A$f=b;}
var T7=G();
var ADy=G();
var ADc=G();
var WZ=G();
var YB=G();
var VS=G();
var Y5=G();
var Wp=G();
var AAI=G();
var AA1=G();
var Gc=G(BG);
var A$h=null;var A$i=null;var A$j=null;function AZS(){AZS=V(Gc);ATb();}
function ATb(){var b,c;b=new Gc;AZS();b.t=B(61);b.q=0;A$h=b;c=new Gc;c.t=B(62);c.q=1;A$i=c;A$j=T(Gc,[b,c]);}
var W5=G();
var SD=G(0);
var Dw=G();
var Ud=G(Dw);
var Uc=G(Dw);
var WA=G(Dw);
var ABu=G(Dw);
var XY=G(Dw);
var KB=G(Dw);
var ABq=G(KB);
var H7=G(0);
var ABO=G();
var Fv=G(0);
var XS=G();
var Y3=G();
var UT=G();
var EP=G();
var XC=G(EP);
var Hd=G(EP);
var DJ=G(Hd);
var A$k=null;function A$l(){A$l=V(DJ);AQL();}
function AQL(){var b;b=new Bm;Cu();A$k=b;}
var AEo=G();
var AFd=G(DJ);
var ACS=G(DJ);
var PZ=G(EP);
var A5f=null;function AJS(){A5f=Ck(3);}
var LW=G(EP);
var Z_=G(LW);
var ABo=G(DJ);
var G0=G(Hd);
var WT=G(G0);
var ACQ=G(DJ);
var ADn=G(DJ);
var WR=G(G0);
var E2=G(BG);
var A$m=null;var A$n=null;var A$o=null;var A$p=null;function A2g(){A2g=V(E2);AMx();}
function AMx(){var b,c,d;b=new E2;A2g();b.t=B(63);b.q=0;A$m=b;c=new E2;c.t=B(64);c.q=1;A$n=c;d=new E2;d.t=B(65);d.q=2;A$o=d;A$p=T(E2,[b,c,d]);}
var Gd=G();
var KX=G(Gd);
var ZM=G(KX);
var E9=G(BG);
var A$q=null;var A$r=null;var A$s=null;var A$t=null;function AZD(){AZD=V(E9);ATt();}
function ATt(){var b,c,d;b=new E9;AZD();b.t=B(66);b.q=0;A$q=b;c=new E9;c.t=B(67);c.q=1;A$r=c;d=new E9;d.t=B(68);d.q=2;A$s=d;A$t=T(E9,[b,c,d]);}
var CL=G(Gd);
var Ij=G(CL);
var AAQ=G();
var EQ=G(CL);
var A$u=null;var A$v=null;var A$w=null;var A$x=null;function A$y(){A$y=V(EQ);ATT();}
function ATT(){var b;b=new Bm;Cu();A$u=b;A$v=new Bm;A$w=new Bm;b=new D0;Hr();b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=1.0;A$x=b;}
var EG=G(EQ);
var FY=G(EG);
var ABN=G(FY);
var H$=G(CL);
var ZB=G(H$);
var AFc=G(CL);
var F2=G(CL);
var T9=G(F2);
var G6=G(CL);
var ABL=G(EG);
var V8=G(EG);
var Kk=G(CL);
var AEb=G(Kk);
var AAz=G(F2);
var ACU=G(FY);
var XB=G(CL);
var ADs=G(F2);
var AEe=G(CL);
var X7=G(EQ);
var ACi=G(CG);
var UJ=G(CG);
var UP=G(EG);
var XH=G(G6);
var AF4=G(Ij);
var Xg=G(Ij);
var AEw=G(G6);
var AC_=G(FY);
var AGf=G(H$);
var E$=G(Gd);
var WU=G(E$);
var F5=G();
var XO=G(F5);
var AEN=G(E$);
var AFb=G(E$);
var YQ=G(F5);
var Vq=G(E$);
var YC=G(F5);
var Lv=G(0);
var Qg=G(0);
function B9(){var a=this;C.call(a);a.bb=null;a.uH=null;a.G=null;a.hO=null;}
var A$z=0;function A3j(a){var b=new B9();AWA(b,a);return b;}
function AWA(a,b){var c;a.G=b;c=a;b.classObject=c;}
function AMz(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new B9;c.G=b;d=c;b.classObject=d;}return c;}
function ALN(a){var b,c,d,e,f,g;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;b=new P;b.b=D(16);I(b,b.a,B(69));O(b,b.a,d,10);c=new N;e=b.b;f=b.a;Q();g=D(f);c.e=g;M(e,0,g,0,f);return c;}
function LJ(a){var b,c,d,e,f,g,h,i;b=a.uH;if(b===null){if(a.G.$meta.item===null?0:1){b=LJ(E6(a));c=new P;c.b=D(16);d=c.a;if(b===null)b=B(2);I(c,d,b);I(c,c.a,B(57));b=new N;e=c.b;f=c.a;Q();g=D(f);b.e=g;M(e,0,g,0,f);}else{h=a.G.$meta.enclosingClass;if(h===null)b=null;else{b=h.classObject;if(b===null){b=new B9;b.G=h;c=b;h.classObject=c;}}if(b!==null){b=$rt_str(a.G.$meta.simpleName);if(b===null)b=B(42);}else{b=$rt_str(a.G.$meta.name);i=EX(b,36,b.e.data.length-1|0);if(i==(-1)){f=EX(b,46,b.e.data.length-1|0);if(f
!=(-1)){d=f+1|0;g=b.e;i=g.data.length;f=Bo(d,i);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A9m;else if(!(!d&&i==i)){b=new N;f=i-d|0;e=D(f);b.e=e;M(g,d,e,0,f);}}}else{d=i+1|0;g=b.e;i=g.data.length;f=Bo(d,i);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A9m;else if(!(!d&&i==i)){b=new N;f=i-d|0;e=D(f);b.e=e;M(g,d,e,0,f);}e=b.e.data;f=Bo(0,e.length);if(f>=0){b=new X;b.c=1;b.d=1;H(b);}if(e[0]>=48){if(f>=0){b=new X;b.c=1;b.d=1;H(b);}if(e[0]<=57)b=B(42);}}}}a.uH=b;}return b;}
function E6(a){var b,c,d;b=a.G.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new B9;c.G=b;d=c;b.classObject=d;}}return c;}
function ATM(){Ev.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Xk(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A09();AHm();return null;}}];EF.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ASO(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes
:[EF],returnType:$rt_voidcls(),callable:function(obj,args){AAc(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ALi(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:N,callable:function(obj,args){return Ug(obj);}}];C7.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AF1(obj);return null;}},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[Ks,Ik],returnType:$rt_voidcls(),callable:function(obj,args){UF(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ks,Ik,Bq,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){X4(obj,args[0],args[1],args[2],AW0(args[3]),Lz(args[4]),ASZ(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ks,Ik,$rt_intcls(),$rt_intcls(),Bq,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),
N],returnType:$rt_voidcls(),callable:function(obj,args){AET(obj,args[0],args[1],Lz(args[2]),Lz(args[3]),args[4],AW0(args[5]),Lz(args[6]),ASZ(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Ks,Ik],returnType:$rt_voidcls(),callable:function(obj,args){A$A(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Ks,Ik,Bq,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A$B(obj,args[0],
args[1],args[2],AW0(args[3]),Lz(args[4]),ASZ(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Ks,Ik,$rt_intcls(),$rt_intcls(),Bq,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),N],returnType:$rt_voidcls(),callable:function(obj,args){G3(obj,args[0],args[1],Lz(args[2]),Lz(args[3]),args[4],AW0(args[5]),Lz(args[6]),ASZ(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[VY],returnType:$rt_voidcls(),callable:function(obj,args){ABp(obj,
args[0]);return null;}},{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){ADI(obj,AW0(args[0]),Lz(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[VY,EF,$rt_floatcls(),N],returnType:$rt_voidcls(),callable:function(obj,args){Um(obj,args[0],args[1],AW0(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[VY,EF,$rt_intcls()],returnType:EF,callable:function(obj,
args){return Yt(obj,args[0],args[1],Lz(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[VY,EF],returnType:$rt_voidcls(),callable:function(obj,args){Pr(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[ML,VY],returnType:$rt_floatcls(),callable:function(obj,args){return A$C(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers:0,accessLevel:1,parameterTypes:[BP,VY],returnType:$rt_floatcls(),callable:function(obj,args){return A$D(obj
,args[0],args[1]);}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[Ik,$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){return XJ(obj,args[0],Lz(args[1]),Lz(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AFx(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:N,callable:function(obj,args){return AMG(obj);}},{name:"<clinit>",modifiers:512,accessLevel
:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){EB();AR4();return null;}}];}
function MS(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.G.$meta.primitive?1:0)&&!(a.G.$meta.item===null?0:1)){if(a.hO===null){if(!A$z){A$z=1;ATM();}b=a.G.$meta.methods;a.hO=Bj(H6,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof $rt_objcls())?e:e.Q;if(BC($rt_str(f.name),B(70))){g=f.parameterTypes;h=Bj(B9,g.length);i=h.data;j=0;k=i.length;while(j<k){l=g[j];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new B9;e.G=l;m=e;l.classObject=m;}}i[j]=e;j=j+1|0;}i=a.hO.data;j=c+1|0;e=new H6;g
=$rt_str(f.name);k=f.modifiers;n=f.accessLevel;f=Ds(f.callable,"call");e.fv=a;e.D3=g;e.jn=k;e.me=n;e.f7=h;e.oH=f;i[c]=e;c=j;}d=d+1|0;}h=a.hO;f=h.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new B9;g.G=f;e=g;f.classObject=e;}}e=E6(g);if(e===null){e=new CK;e.c=1;e.d=1;H(e);}if(e===L($rt_voidcls())){e=new Bh;e.c=1;e.d=1;H(e);}if(c<0){e=new D1;e.c=1;e.d=1;H(e);}h=h.data;f=EU(e.G,c);d=h.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=h[c];c=c+1|0;}a.hO=f;}return a.hO.cu();}return Bj(H6,0);}
function Zf(a){var b,c,d,e,f,g,h,i,j,k;b=(MS(a)).data;c=b.length;d=Bj(H6,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(N1(h.jn,h.me)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=Bo(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new B9;h.G=j;k=h;j.classObject=k;}}j=E6(h);if(j===null){h=new CK;h.c=1;h.d=1;H(h);}if(j===L($rt_voidcls())){h=new Bh;h.c=1;h.d=1;H(h);}if(f<0){h=new D1;h.c=1;h.d=1;H(h);}k=EU(j.G,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;}
function AE8(a,b){var c,d,e,f;c=(MS(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HY;f.c=1;f.d=1;H(f);}f=c[e];if(AE7(f.f7.cu(),b))break;e=e+1|0;}return f;}
function AE5(a,b){var c,d,e,f,g;c=(MS(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HY;f.c=1;f.d=1;H(f);}f=c[e];g=!(N1(f.jn,f.me)&1)?0:1;if(g&&AE7(f.f7.cu(),b))break;e=e+1|0;}return f;}
var AA4=G();
function ATU(b){var c,d,e,f;if(b===null)return null;b=b.data;c=b.length;d=new $rt_globals.Array(c);e=0;while(e<c){f=b[e];e;d[e]=f;e=e+1|0;}return d;}
function ANh(b){var c,d,e,f,g;if(b===null)return null;c=BF(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof $rt_objcls())?g:g.Q;e=e+1|0;}return c;}
function BY(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Ds(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AAN=G();
function AG3(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Sh(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Sh(d[e],c))return 1;e=e+1|0;}return 0;}
function FR(b){return setTimeout(function(){$rt_threadStarter(A1x)(b);},0);}
function A1x(b){b.eO();}
function Pv(b,c){return setTimeout(function(){A1x(b);},c);}
function ALg(){return [];}
function Dg(){var a=this;C.call(a);a.f=null;a.cX=null;a.c=0;a.d=0;a.zY=null;}
function A$E(){var a=new Dg();Df(a);return a;}
function A$F(a){var b=new Dg();Il(b,a);return b;}
function Df(a){a.c=1;a.d=1;}
function Il(a,b){a.c=1;a.d=1;a.f=b;}
function CE(a){return a;}
function ANN(a){return a.f;}
function AJ_(a){return a.iW();}
function AV_(a){var b;b=a.cX;if(b===a)b=null;return b;}
function ATd(a){var b,c;if(A$G===null){b=new Ct;b.cf=A5k;c=new P;c.b=D(16);b.bc=c;b.b$=D(32);b.ck=0;Cr();b.cg=A$H;A$G=b;}Ja(a,A$G);}
function Ja(a,b){var c,d,e,f,g,h,i,j,k;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new B9;d.G=c;e=d;c.classObject=e;}}if(d.bb===null)d.bb=$rt_str(d.G.$meta.name);e=d.bb;c=b.bc;I(c,c.a,e);Co(b);f=a.iW();if(f!==null){c=new P;c.b=D(16);I(c,c.a,B(71));I(c,c.a,f);e=new N;g=c.b;h=c.a;Q();i=D(h);e.e=i;M(g,0,i,0,h);c=b.bc;I(c,c.a,e);Co(b);}a:{g=b.b$;g.data[0]=10;QF(b,g,0,1);g=a.zY;if(g!==null){g=g.data;j=g.length;k=0;while(true){if(k>=j)break a;d=g[k];c=b.bc;I(c,c.a,B(72));Co(b);e=b.bc;I(e,
e.a,d===null?B(2):d.s());h=e.a;Bd(e,h,h+1|0);e.b.data[h]=10;Co(b);k=k+1|0;}}}c=a.cX;if(c!==null&&c!==a){e=b.bc;I(e,e.a,B(73));Co(b);Ja(a.cX,b);}}
var CI=G(Dg);
function A$I(){var a=new CI();Pb(a);return a;}
function Pb(a){a.c=1;a.d=1;}
var BJ=G(CI);
function A4m(a){var b=new BJ();Tp(b,a);return b;}
function Tp(a,b){a.c=1;a.d=1;a.f=b;}
var ACP=G(BJ);
var Ik=G(0);
function N(){var a=this;C.call(a);a.e=null;a.bE=0;}
var A$J=null;var A9m=null;var A$K=null;function Q(){Q=V(N);AOF();}
function A4k(a){var b=new N();AAb(b,a);return b;}
function AIr(a,b,c){var d=new N();TE(d,a,b,c);return d;}
function AW7(a,b,c){var d=new N();TH(d,a,b,c);return d;}
function AAb(a,b){var c,d;Q();c=b.data.length;d=D(c);a.e=d;M(b,0,d,0,c);}
function TE(a,b,c,d){var e;Q();e=D(d);a.e=e;M(b,c,e,0,d);}
function TH(a,b,c,d){var e,f,g,h,i,j,k,l;Q();e=D(d*2|0);f=e.data;a.e=e;g=0;h=0;while(h<d){e=b.data;i=c+1|0;j=e[c];if(j<65536){k=g+1|0;f[g]=j&65535;}else{l=g+1|0;f[g]=(55296|(j-65536|0)>>10&1023)&65535;k=l+1|0;f[l]=(56320|j&1023)&65535;}h=h+1|0;c=i;g=k;}c=f.length;d=Bo(g,c);if(d<0){b=D(g);if(d<0)c=g;e=b.data;d=0;while(d<c){e[d]=f[d];d=d+1|0;}a.e=b;}}
function CZ(a,b){var c,d;if(b>=0){c=a.e.data;if(b<c.length)return c[b];}d=new X;d.c=1;d.d=1;H(d);}
function Jw(a){return a.e.data.length;}
function G8(a,b,c,d,e){var f,g,h,i;if(b>=0&&b<=c){f=a.e;if(c<=f.data.length&&e>=0){g=d.data;h=c-b|0;if((e+h|0)<=g.length){M(f,b,d,e,h);return;}}}i=new Y;i.c=1;i.d=1;H(i);}
function JP(a,b,c){var d,e,f,g,h,i,j;d=b.e.data;e=d.length;f=c+e|0;g=a.e.data;h=g.length;if(f>h)return 0;i=0;a:{b:{while(true){f=Bo(i,e);if(f>=0)break;if(i<0)break a;if(f>=0)break a;j=d[i];f=c+1|0;if(c<0)break b;if(c>=h)break b;if(j!=g[c])return 0;i=i+1|0;c=f;}return 1;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function FA(a,b){if(a===b)return 1;return JP(a,b,0);}
function Ri(a,b){var c,d,e,f,g,h,i,j;if(a===b)return 1;c=b.e.data;d=c.length;e=a.e.data;f=e.length;if(d>f)return 0;g=0;h=f-d|0;a:{b:{while(true){i=Bo(h,f);if(i>=0)break;if(h<0)break a;if(i>=0)break a;j=e[h];i=g+1|0;if(g<0)break b;if(g>=d)break b;if(j!=c[g])return 0;h=h+1|0;g=i;}return 1;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function Ea(a,b,c){var d,e,f,g;if(0>c)c=0;if(b<65536){d=b&65535;while(true){e=a.e.data;if(c>=e.length)return (-1);if(e[c]==d)break;c=c+1|0;}return c;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){e=a.e.data;if(c>=(e.length-1|0))return (-1);if(e[c]==f&&e[c+1|0]==g)break;c=c+1|0;}return c;}
function ABB(a,b){return Ea(a,b,0);}
function EX(a,b,c){var d,e,f,g,h;d=a.e.data;e=d.length-1|0;if(c<e)e=c;if(b<65536){f=b&65535;while(true){if(e<0)return (-1);if(d[e]==f)break;e=e+(-1)|0;}return e;}g=(55296|(b-65536|0)>>10&1023)&65535;h=(56320|b&1023)&65535;while(true){if(e<1)return (-1);if(d[e]==h){b=e-1|0;if(d[b]==g)break;}e=e+(-1)|0;}return b;}
function LQ(a,b,c){var d,e,f,g,h,i,j,k,l;if(0>c)c=0;d=a.e.data;e=d.length;f=b.e.data;g=f.length;h=e-g|0;a:{b:{c:while(true){if(c>h)return (-1);i=0;while(true){j=Bo(i,g);if(j>=0)break c;k=c+i|0;if(k<0)break a;if(k>=e)break a;l=d[k];if(i<0)break b;if(j>=0)break b;if(l!=f[i])break;i=i+1|0;}c=c+1|0;}return c;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function AEd(a,b){return LQ(a,b,0);}
function N2(a,b,c){var d,e,f,g,h,i,j,k;d=a.e.data;e=d.length;f=b.e.data;g=f.length;h=e-g|0;if(c<h)h=c;a:{b:{c:while(true){if(h<0)return (-1);i=0;while(true){j=Bo(i,g);if(j>=0)break c;k=h+i|0;if(k<0)break a;if(k>=e)break a;k=d[k];if(i<0)break b;if(j>=0)break b;if(k!=f[i])break;i=i+1|0;}h=h+(-1)|0;}return h;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function FI(a,b,c){var d,e,f,g;d=Bo(b,c);if(d>0){e=new Y;e.c=1;e.d=1;H(e);}if(!d){Q();return A9m;}if(!b&&c==a.e.data.length)return a;e=new N;f=a.e;c=c-b|0;Q();g=D(c);e.e=g;M(f,b,g,0,c);return e;}
function Hc(a,b){var c,d,e,f,g;c=a.e;d=c.data.length;e=Bo(b,d);if(e>0){f=new Y;f.c=1;f.d=1;H(f);}if(!e){Q();a=A9m;}else if(!(!b&&d==d)){a=new N;e=d-b|0;Q();g=D(e);a.e=g;M(c,b,g,0,e);}return a;}
function N7(a,b,c){var d,e,f,g;d=Bo(b,c);if(d>0){e=new Y;e.c=1;e.d=1;H(e);}if(!d){Q();e=A9m;}else if(!b&&c==a.e.data.length)e=a;else{e=new N;f=a.e;c=c-b|0;Q();g=D(c);e.e=g;M(f,b,g,0,c);}return e;}
function CY(a,b){var c,d,e,f,g,h,i,j,k;c=a.e.data;d=c.length;e=b.e.data;f=e.length;g=d-f|0;h=0;a:{b:{while(h<=g){i=0;while(true){j=Bo(i,f);if(j>=0)return 1;k=h+i|0;if(k<0)break a;if(k>=d)break a;k=c[k];if(i<0)break b;if(j>=0)break b;if(k!=e[i])break;i=i+1|0;}h=h+1|0;}return 0;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function Mq(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=new P;d.b=D(16);e=a.e.data.length-b.e.data.length|0;f=0;a:{b:{c:while(true){if(f>e){g=a.e;h=g.data.length;i=Bo(f,h);if(i>0){b=new Y;b.c=1;b.d=1;H(b);}if(!i){Q();a=A9m;}else if(!(!f&&h==h)){a=new N;i=h-f|0;Q();j=D(i);a.e=j;M(g,f,j,0,i);}i=d.a;if(a===null)a=B(2);I(d,i,a);b=new N;j=d.b;h=d.a;Q();g=D(h);b.e=g;M(j,0,g,0,h);return b;}k=0;d:{while(true){j=b.e.data;l=Bo(k,j.length);if(l>=0)break;i=f+k|0;if(i<0)break b;g=a.e.data;h=g.length;if(i>=h)break b;m=g[i];if(k<0)break c;if
(l>=0)break c;if(m!=j[k]){if(f<0)break a;if(f>=h)break a;h=g[f];i=d.a;Bd(d,i,i+1|0);d.b.data[i]=h;break d;}k=k+1|0;}I(d,d.a,c===null?B(2):c);f=f+(b.e.data.length-1|0)|0;}f=f+1|0;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function AC6(a){var b,c,d,e,f,g,h;b=0;c=a.e;d=c.data;e=d.length;f=e-1|0;a:{while(true){if(b>f)break a;if(b<0)break;if(b>=e)break;if(d[b]>32)break a;b=b+1|0;}g=new X;g.c=1;g.d=1;H(g);}b:{while(true){if(b>f)break b;if(f<0)break;if(f>=e)break;if(d[f]>32)break b;f=f+(-1)|0;}g=new X;g.c=1;g.d=1;H(g);}h=f+1|0;f=Bo(b,h);if(f>0){g=new Y;g.c=1;g.d=1;H(g);}if(!f){Q();a=A9m;}else if(!(!b&&h==e)){a=new N;h=h-b|0;Q();d=D(h);a.e=d;M(c,b,d,0,h);}return a;}
function C2(a){return a;}
function LO(b){Q();return b===null?B(2):b.s();}
function BC(a,b){var c,d,e,f,g,h,i;if(a===b)return 1;if(!(b instanceof N))return 0;c=b.e.data;d=c.length;e=a.e.data;f=e.length;if(d!=f)return 0;g=0;a:{b:{while(true){h=Bo(g,d);if(h>=0)break;if(g<0)break a;if(g>=f)break a;i=e[g];if(g<0)break b;if(h>=0)break b;if(i!=c[g])return 0;g=g+1|0;}return 1;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function Xb(a,b){var c,d,e,f,g,h,i,j,$$je;if(b===null){b=new Bh;b.c=1;b.d=1;b.f=B(74);H(b);}DQ(b);A2D();c=A$L;d=ADJ(b);if(d===null){c=c.cx.data[0];while(c!==null&&c.cQ!==null){c=c.c2;}}else{a:{if(!d.bE){e=d.e.data;f=e.length;g=0;while(true){if(g>=f)break a;h=e[g];d.bE=(31*d.bE|0)+h|0;g=g+1|0;}}}h=d.bE;e=c.cx.data;c=e[h&(e.length-1|0)];while(c!==null){if(c.eI==h){i=c.cQ;if(d!==i&&!BC(d,i)?0:1)break;}c=c.c2;}}c=c===null?null:c.dZ;if(c===null){c=new RF;c.c=1;c.d=1;c.ED=b;H(c);}e=a.e;g=e.data.length;b=new IF;j=
0+g|0;b.v=(-1);b.y=g;b.g=g;b.h=0;b.g=j;b.hh=0;b.iQ=0;b.gB=e;b:{try{d=c.kw();DU();b=Rf(PY(OL(d,A$M),A$M),b);break b;}catch($$e){$$je=Br($$e);if($$je instanceof FV){c=$$je;}else{throw $$e;}}d=new MI;d.c=1;d.d=1;d.f=B(75);d.cX=c;H(d);}h=b.h;if(!h&&b.g==b.y)e=b.U;else{e=BF(b.g-h|0);Q5(b,e,0,e.data.length);}return e;}
function AU2(a){var b,c,d,e;a:{if(!a.bE){b=a.e.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.bE=(31*a.bE|0)+e|0;d=d+1|0;}}}return a.bE;}
function ABb(a){var b,c,d,e,f,g,h;b=a.e.data;c=b.length;if(c?0:1)return a;d=0;e=0;f=0;a:{while(f<c){g=b[f];if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}if((B0(A$N,g)&65535)!=g){d=1;break a;}h=g&64512;g=h!=55296?0:1;if(!g&&!(h!=56320?0:1)?0:1)e=1;f=f+1|0;}}if(!d)return a;return !e?UV(a):UN(a);}
function UV(a){var b,c,d,e,f,g;b=D(a.e.data.length);c=b.data;d=0;while(true){e=a.e.data;if(d>=e.length)break;f=e[d];if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}c[d]=B0(A$N,f)&65535;d=d+1|0;}g=new N;Q();f=c.length;c=D(f);g.e=c;M(b,0,c,0,f);return g;}
function UN(a){var b,c,d,e,f,g,h;b=Bc(a.e.data.length);c=b.data;d=0;e=0;while(true){f=a.e.data;g=f.length;if(e>=g)break;a:{if(e!=(g-1|0)&&((f[e]&64512)!=55296?0:1)){g=e+1|0;if((f[g]&64512)!=56320?0:1){h=d+1|0;e=((f[e]&1023)<<10|f[g]&1023)+65536|0;if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}c[d]=B0(A$N,e);d=h;break a;}}h=d+1|0;g=f[e];if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}c[d]=B0(A$N,g)&65535;d=h;g=e;}e=g
+1|0;}return AW7(b,0,d);}
function ADJ(a){var b,c,d,e,f,g,h;b=a.e.data;c=b.length;if(c?0:1)return a;d=0;e=0;f=0;a:{while(f<c){g=b[f];if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}if((B0(A$P,g)&65535)!=g){d=1;break a;}h=g&64512;g=h!=55296?0:1;if(!g&&!(h!=56320?0:1)?0:1)e=1;f=f+1|0;}}if(!d)return a;return !e?VT(a):AA8(a);}
function VT(a){var b,c,d,e,f,g;b=D(a.e.data.length);c=b.data;d=0;while(true){e=a.e.data;if(d>=e.length)break;f=e[d];if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}c[d]=B0(A$P,f)&65535;d=d+1|0;}g=new N;Q();f=c.length;c=D(f);g.e=c;M(b,0,c,0,f);return g;}
function AA8(a){var b,c,d,e,f,g,h;b=Bc(a.e.data.length);c=b.data;d=0;e=0;while(true){f=a.e.data;g=f.length;if(e>=g)break;a:{if(e!=(g-1|0)&&((f[e]&64512)!=55296?0:1)){g=e+1|0;if((f[g]&64512)!=56320?0:1){h=d+1|0;e=((f[e]&1023)<<10|f[g]&1023)+65536|0;if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}c[d]=B0(A$P,e);d=h;break a;}}h=d+1|0;g=f[e];if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}c[d]=B0(A$P,g)&65535;d=h;g=e;}e=
g+1|0;}return AW7(b,0,d);}
function AC$(a,b){return Jk(GE(b,0),a,0);}
function PL(a,b,c){return Jk(GE(b,0),a,c);}
function Vt(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;b=N9(GE(b,0),a);d=new Kj;d.b=D(16);b.k1=0;e=b.iv;f=e.e.data.length;b.l8=f;g=b.dB;g.dA=0;g.iJ=2;h=g.bR.data;i=0;j=h.length;if(i>j){b=new Bh;Df(b);H(b);}while(i<j){k=i+1|0;h[i]=(-1);i=k;}h=g.bB.data;l=0;i=h.length;if(l>i){b=new Bh;Df(b);H(b);}while(l<i){j=l+1|0;h[l]=(-1);l=j;}g.gD=e;g.dq=0;g.Y=f;g.eC=0;b.mc=0;b.nm=null;g.h0=(-1);while(true){if(!Ha(b)){c=b.iv;k=b.mc;m=c.e;l=m.data.length;n=Bo(k,l);if(n>0){b=new Y;b.c=1;b.d=1;CE(b);H(b);}if(!n){Q();c=A9m;}else if(!(!k
&&l==l)){c=new N;n=l-k|0;Q();h=D(n);c.e=h;M(m,k,h,0,n);}l=c.e.data.length;RZ(d,d.a,c,0,l);b=new N;h=d.b;n=d.a;Q();m=D(n);b.e=m;M(h,0,m,0,n);return b;}b.nD=AEl(b,c);e=b.iv;i=b.mc;g=b.dB;if(!g.dA)break;if(0>=g.ec){b=new Y;Q();c=new P;Ki(c);Nu(c,0);d=new N;h=c.b;n=c.a;m=D(n);d.e=m;M(h,0,m,0,n);b.c=1;b.d=1;b.f=d;H(b);}l=g.bR.data[0];k=Bo(i,l);if(k>0){b=new Y;b.c=1;b.d=1;CE(b);H(b);}if(!k){Q();g=A9m;}else if(!i&&l==e.e.data.length)g=e;else{g=new N;h=e.e;k=l-i|0;Q();m=D(k);g.e=m;M(h,i,m,0,k);}i=g.e.data.length;RZ(d,
d.a,g,0,i);e=b.nD;I(d,d.a,e);e=b.dB;ACZ(e,0);b.mc=e.bR.data[1];}b=new BK;Pb(b);H(b);}
function AOF(){var b,c;b=D(0);A$J=b;c=new N;Q();c.e=b;A9m=c;A$K=new SS;}
var F4=G(Dg);
var Ir=G(F4);
var ACc=G(Ir);
var EY=G();
function EZ(){EY.call(this);this.fP=0;}
var A40=null;var A7d=null;function LN(b,c){var d;if(!(c>=2&&c<=36))c=10;d=new Bl;d.b=D(20);return (O(d,d.a,b,c)).s();}
function Kf(b,c){if(b!==null)return PO(b,0,b.e.data.length,c);b=new Cc;b.c=1;b.d=1;b.f=B(76);H(b);}
function PO(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=Bo(c,d);if(!f){b=new Cc;b.c=1;b.d=1;b.f=B(77);H(b);}if(e>=2&&e<=36){g=0;if(c>=0){h=b.e.data;if(c<h.length){a:{switch(h[c]){case 43:i=c+1|0;break a;case 45:g=1;i=c+1|0;break a;default:}i=c;}j=0;if(i==d){b=new Cc;b.c=1;b.d=1;H(b);}b:{while(i<d){k=i+1|0;if(i<0)break b;h=b.e.data;if(i>=h.length)break b;l=Jq(h[i]);if(l<0){m=new Cc;if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f){Q();n=A9m;}else if(!c&&d==b.e.data.length)n=b;else{n=new N;h=b.e;d=d-c|0;Q();o=D(d);n.e=o;M(h,
c,o,0,d);}Q();if(n===null)n=B(2);b=new P;b.b=D(16);I(b,b.a,B(78));I(b,b.a,n);p=new N;h=b.b;d=b.a;o=D(d);p.e=o;M(h,0,o,0,d);m.c=1;m.d=1;m.f=p;H(m);}if(l>=e){m=new Cc;q=FI(b,c,d);if(q===null)q=B(2);b=new P;J9(b,16);RE(b,B(79));CS(CS(Ei(b,e),B(71)),q);IL(m,Cy(b));H(m);}j=Db(e,j)+l|0;if(j<0){if(k==d&&j==(-2147483648)&&g)return (-2147483648);m=new Cc;b=LO(N7(b,c,d));p=Eq();CS(CS(p,B(80)),b);IL(m,Cy(p));H(m);}i=k;}if(g)j= -j|0;return j;}b=new X;b.c=1;b.d=1;H(b);}}b=new X;b.c=1;b.d=1;H(b);}b=new Cc;m=new P;m.b=D(16);I(m,
m.a,B(81));O(m,m.a,e,10);p=new N;h=m.b;d=m.a;Q();o=D(d);p.e=o;M(h,0,o,0,d);b.c=1;b.d=1;b.f=p;H(b);}
function Cz(b){if(b!==null)return PO(b,0,b.e.data.length,10);b=new Cc;b.c=1;b.d=1;b.f=B(76);H(b);}
function Ur(b){var c;if(b>=(-128)&&b<=127){Fw();return A7d.data[b+128|0];}c=new EZ;c.fP=b;return c;}
function Fw(){var b,c,d,e,f;a:{if(A7d===null){b=Bj(EZ,256);c=b.data;A7d=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new EZ;f.fP=d-128|0;c[d]=f;d=d+1|0;}}}}
function Lz(a){return a.fP;}
function LA(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Dt(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AWs(){A40=L($rt_intcls());}
function Bl(){var a=this;C.call(a);a.b=null;a.a=0;}
function A$R(){var a=new Bl();Ki(a);return a;}
function A$S(a){var b=new Bl();J9(b,a);return b;}
function Ki(a){a.b=D(16);}
function J9(a,b){a.b=D(b);}
function RE(a,b){I(a,a.a,b===null?B(2):b.s());return a;}
function I(a,b,c){var d,e,f,g,h,i;if(b>=0){d=a.a;if(b<=d){if(c===null)c=B(2);else if(c.e.data.length?0:1)return a;a.iP(d+c.e.data.length|0);d=a.a;e=d-1|0;while(e>=b){f=a.b.data;f[e+c.e.data.length|0]=f[e];e=e+(-1)|0;}f=c.e.data;g=f.length;a.a=d+g|0;d=0;a:{while(true){e=Bo(d,g);if(e>=0)break;h=a.b;i=b+1|0;if(d<0)break a;if(e>=0)break a;h.data[b]=f[d];d=d+1|0;b=i;}return a;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}
function Nu(a,b){return O(a,a.a,b,10);}
function O(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Bd(a,b,b+1|0);else{Bd(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=Ip(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Db(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bd(a,b,b+i|0);if(e)e=b;else{f=a.b.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.b.data;b=e+1|0;f[e]=Ip($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function KF(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(AJn(c,BI)){e=0;c=AUu(c);}a:{f=S(d);if(D_(c,f)<0){if(e)Bd(a,b,b+1|0);else{Bd(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=Ip(R(c),d);}else{i=1;j=S(1);k=DR(S(-1),f);b:{while(true){l=Bf(j,f);if(D_(l,c)>0){l=j;break b;}i=i+1|0;if(D_(l,k)>0)break;j=l;}}if(!e)i=i+1|0;Bd(a,b,b+i|0);if(e)e=b;else{g=a.b.data;e=b+1|0;g[b]=45;}while(true){if(BU(l,BI))break a;g=a.b.data;b=e+1|0;g[e]=Ip(R((DR(c,l))),d);c=AAh(c,l);l=DR(l,f);e=b;}}}return a;}
function Dz(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bo(c,0.0);if(!d){if(1.0/c===Infinity){Bd(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bd(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bd(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bd(a,b,b+8|0);d=b;}else{Bd(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A$T;ADF(c,f);d=f.nR;g=f.nA;h=f.rN;i=1;j=1;if(h)j=2;k=9;l=AOj(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=RG(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bd(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.b.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.b.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.b.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.b.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function Q_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bo(c,0.0);if(!d){if(1.0/c===Infinity){Bd(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bd(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bd(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bd(a,b,b+8|0);d=b;}else{Bd(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A$U;Wj(c,f);g=f.oh;h=f.nj;i=f.rB;j=1;k=1;if(i)k=2;l=18;m=ANg(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=RG(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bd(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.b.data;k=b+1|0;e[b]=45;}p=F(1569325056, 23283064);if(o){e=a.b.data;b=k+1|0;e[k]
=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AJp(p,BI))d=0;else{d=R(KY(g,p));g=Z1(g,p);}e=a.b.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=KY(p,S(10));q=q+1|0;}if(h){e=a.b.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AOj(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ANg(b){var c,d,e,f,g;c=S(1);d=0;e=16;f=A$V.data;g=f.length-1|0;while(g>=0){if(BU(Z1(b,Bf(c,f[g])),BI)){d=d|e;c=Bf(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function ACW(a,b){return a.qO(a.a,b);}
function AGb(a,b,c){Bd(a,b,b+1|0);a.b.data[b]=c;return a;}
function DI(a,b,c){I(a,b,c===null?B(2):c.s());return a;}
function QC(a,b){var c,d,e,f,g,h;c=a.b.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=D(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.b=g;}
function AUB(a){var b,c,d,e;b=new N;c=a.b;d=a.a;Q();e=D(d);b.e=e;M(c,0,e,0,d);return b;}
function ADD(a,b,c,d,e){var f,g,h;if(d<=e&&e<=c.e.data.length&&d>=0){Bd(a,b,(b+e|0)-d|0);a:{while(d<e){f=a.b;g=b+1|0;if(d<0)break a;h=c.e.data;if(d>=h.length)break a;f.data[b]=h[d];d=d+1|0;b=g;}return a;}c=new X;c.c=1;c.d=1;H(c);}c=new Y;c.c=1;c.d=1;H(c);}
function Lu(a,b,c,d,e){var f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Th(a,b){var c,d,e,f;if(b>=0){c=a.a;if(b<c){c=c-1|0;a.a=c;while(b<c){d=a.b.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new X;f.c=1;f.d=1;H(f);}
function AFZ(a,b,c){var d,e,f,g,h,i;if(b>=0){d=Bo(b,c);if(d<=0){e=a.a;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.a=e-(c-b|0)|0;g=0;while(g<f){h=a.b.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new X;i.c=1;i.d=1;H(i);}
function Bd(a,b,c){var d,e,f,g;d=a.a;e=d-b|0;a.iP((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.b.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.a=a.a+(c-b|0)|0;}
var H1=G(0);
var P=G(Bl);
function Eq(){var a=new P();AXI(a);return a;}
function AXI(a){a.b=D(16);}
function CS(a,b){I(a,a.a,b===null?B(2):b.s());return a;}
function DF(a,b){I(a,a.a,b);return a;}
function Ei(a,b){O(a,a.a,b,10);return a;}
function Rs(a,b){KF(a,a.a,b,10);return a;}
function Fh(a,b){var c;c=a.a;Bd(a,c,c+1|0);a.b.data[c]=b;return a;}
function AGl(a,b,c){I(a,b,c===null?B(2):c.s());return a;}
function Xv(a,b,c){Bd(a,b,b+1|0);a.b.data[b]=c;return a;}
function Y9(a,b,c){AFZ(a,b,c);return a;}
function Ew(a,b,c){I(a,b,c);return a;}
function AEH(a,b,c){var d,e,f;if(b<=c&&b>=0&&c<=a.a){d=new N;e=a.b;c=c-b|0;Q();f=D(c);d.e=f;M(e,b,f,0,c);return d;}d=new Y;d.c=1;d.d=1;H(d);}
function ATK(a,b,c,d,e){var f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function AJd(a,b,c,d){var e,f,g,h,i;e=a.a;Bd(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.b.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
function HM(a){return a.a;}
function Cy(a){var b,c,d,e;b=new N;c=a.b;d=a.a;Q();e=D(d);b.e=e;M(c,0,e,0,d);return b;}
function ALu(a,b){QC(a,b);}
function AT_(a,b,c){Bd(a,b,b+1|0);a.b.data[b]=c;return a;}
function CR(a,b,c){I(a,b,c);return a;}
var If=G(Ir);
var AD4=G(If);
function A$W(a){var b=new AD4();AIf(b,a);return b;}
function AIf(a,b){a.c=1;a.d=1;a.f=b;}
var ABY=G(If);
function A$X(a){var b=new ABY();AIA(b,a);return b;}
function AIA(a,b){a.c=1;a.d=1;a.f=b;}
function V0(){var a=this;C.call(a);a.lL=0;a.u2=0;a.qr=0;a.vY=null;a.yG=0;a.yP=null;a.pg=0;a.vf=null;a.lV=0;a.hy=0;a.nB=0;a.q5=0;a.wH=0;a.wg=0;a.x8=0;a.tz=0;a.xv=0;a.oR=0;a.mt=0;}
function A0_(a){var b=new V0();AHx(b,a);return b;}
function AEG(a){return !a.lV&&!a.hy?1:0;}
function AHx(a,b){a.lL=0;a.u2=1;a.qr=0;a.yG=1;a.yP=B(42);a.pg=0;a.lV=(-1);a.hy=(-1);a.nB=0;a.q5=0;a.wH=0;a.wg=0;a.x8=0;a.tz=0;a.xv=0;a.oR=0;a.mt=1;a.vf=b;}
var NS=G(0);
function L7(){var a=this;C.call(a);a.eM=null;a.kl=null;a.tc=null;a.tG=null;a.Ez=null;a.en=null;a.l2=null;a.hF=null;a.kK=null;a.f8=null;a.h4=null;a.m$=0;a.oS=0;a.zo=null;a.iF=0;a.kP=null;a.Dx=null;a.Dc=null;a.jw=null;a.o9=null;a.fS=null;}
var A$Y=null;function A$Z(a,b){var c=new L7();ABl(c,a,b);return c;}
function ABl(a,b,c){var d;d=new BP;d.bj=1;d.r=Bj(C,4);a.kK=d;Jv();a.h4=A$0;a.m$=(-1);a.oS=1;a.iF=1;a.Dx=EE(51,0.800000011920929);d=new BP;d.bj=1;d.r=Bj(C,16);a.jw=d;d=new BP;d.bj=1;d.r=Bj(C,16);a.o9=d;ID();a.f8=A$1;a.en=c;a.l2=b;Yh(a);}
function Yh(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;A$Y=AUD();LT();DP(A$2,B(82),B(42));b=$rt_str(A$Y.userAgent);LT();DP(A$2,B(83),b);if(A$Y.windows?1:0){LT();DP(A$2,B(84),B(85));}else if(A$Y.macOS?1:0)Pa(B(84),B(86));else if(!(A$Y.linux?1:0))Pa(B(84),B(87));else Pa(B(84),B(7));c=new Np;d=a.en.pg;c.yd=0;c.vb=0;c.dI=1;c.dI=d;A$3=c;ID();b=$rt_str(A$1.ee.location.href);a.fS=b;if(CY(b,B(88))){c=Mq(a.fS,B(89),B(42));a.fS=c;a.fS=Mq(c,B(90),B(42));}e=Ea(a.fS,63,0);if(e>=0)a.fS=FI(a.fS,0,e);c=a.en;A$4=c.u2;b=A0i(c);a.eM=b;c
=AZZ(a.fS,b.cv,a);a.kP=c;d=a.en.yG;f=A$3;g=c.l9;h=new P;h.b=D(16);i=h.a;if(g===null)g=B(2);I(h,i,g);I(h,h.a,B(91));j=new N;k=h.b;l=h.a;m=D(l);j.e=m;M(k,0,m,0,l);g=new P;g.b=D(16);I(g,g.a,j);I(g,g.a,B(92));h=new N;m=g.b;n=g.a;k=D(n);h.e=k;M(m,0,k,0,n);T6(f,1,h,A2A(c,B(92),d));a.kl=A1E(a.eM.cv);a.tc=AYU(a.kP);a.tG=AZo();a.zo=A1v();a.Dc=AZ0();if(a.en.qr)ADk(a);A9u=a;c=a.eM;A97=c;A9r=O$(c);A99=O$(a.eM);A$5=AAj(a.eM);A$6=a.kl;A9p=a.tc;A$7=a.tG;c=A4c();a.Ez=c;A$8=c;c=ACb(a.f8);g=A3z(a);c.addEventListener("visibilitychange",
BY(g,"handleEvent"));AFe(a.f8,a);if(AEG(a.en))AA0(a.f8,B(93),AYR(a));}
function ACt(a){var b,c,d,e,f,g,h,$$je;b=a.h4;a:{try{b:{AZ6();switch(A$9.data[YF(b)]){case 1:c=Wk(AGY());if(!c){Jv();a.h4=A$$;d=$rt_globals.window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.kP.p3;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=$rt_globals.window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=Eq();Fh(Ei(g,f),37);h=Cy(g);d.setProperty("width",$rt_ustr(h));}}break b;case 2:break;default:break b;}if(a.l2!==null){b=a.hF;if(b!==null)
{ADz(b);AEc(a.hF);}Vo(a.kl,null);Or(a.kl);ABF(a.jw);a.hF=a.l2;a.l2=null;Jv();a.h4=A$_;a.eM.lF=BI;}Ue(a,a.hF);}}catch($$e){$$je=Br($$e);if($$je instanceof Dg){h=$$je;break a;}else{throw $$e;}}b=a.f8;b.lZ=a;$rt_globals.requestAnimationFrame(BY(b,"onAnimationFrame"));return;}if(A$G===null){d=new Ct;d.cf=A5k;b=new P;b.b=D(16);d.bc=b;d.b$=D(32);d.ck=0;Cr();d.cg=A$H;A$G=d;}Ja(h,A$G);H(h);}
function Ue(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;U8(a.eM);c=A97.cv.width;d=A97.cv.height;e=0;f=a.h4;Jv();if(f===A$_){a.h4=A$$;g=new Nf;g.l1=0;g.sN=b;f=b.dU;if(f!==null)f.mr();b.dU=g;g.ly();b.dU.mU(A97.cv.width,A97.cv.height);g=b.dU;if(g!==null)g.mH();e=1;}if(!(c==a.m$&&d==a.oS&&!e)){a.m$=c;a.oS=d;A9r.pm(0,0,c,d);g=b.dU;if(g!==null)g.mU(c,d);}g=a.o9;f=a.jw;h=f.r;i=f.m;j=g.r;k=j.data;l=g.m;m=l+i|0;if(m<=k.length)f=j;else{e=8;if(e<=m)e=m;l=l*1.75|0;if(e>l)l=e;n=j.constructor;if(n===null)f=null;else{f=n.classObject;if
(f===null){f=new B9;f.G=n;o=f;n.classObject=o;}}p=f.G.$meta.item;if(p===null)n=null;else{n=p.classObject;if(n===null){n=new B9;n.G=p;f=n;p.classObject=f;}}if(n===null){b=new CK;Df(b);H(b);}if(n===L($rt_voidcls())){b=new Bh;Df(b);H(b);}if(l<0){b=new D1;Df(b);H(b);}f=EU(n.G,l);n=f.data;d=g.m;c=n.length;if(d<c)c=d;Hh(j,0,f,0,c);g.r=f;}Hh(h,0,f,g.m,i);g.m=m;g=a.jw;k=g.r;e=0;l=g.m;f=null;if(e>l){b=new Bh;b.c=1;b.d=1;H(b);}while(e<l){h=k.data;d=e+1|0;h[e]=f;e=d;}g.m=0;l=0;while(true){g=a.o9;e=g.m;if(l>=e)break;(FF(g,
l)).eO();l=l+1|0;}k=g.r;l=0;f=null;if(l>e){b=new Bh;b.c=1;b.d=1;H(b);}while(l<e){h=k.data;d=l+1|0;h[l]=f;l=d;}g.m=0;g=a.eM;q=C4(g.lF,S(1));g.lF=q;if(AY0(q,S(60)))ACD(b);Or(a.kl);}
function ADk(a){var b,c,d,e,f,g,h,i,j;b=a.kP;c=new M3;c.y_=a;d=A$3;b=b.l9;e=new P;e.b=D(16);f=e.a;if(b===null)b=B(2);I(e,f,b);I(e,e.a,B(91));b=new N;g=e.b;h=e.a;Q();i=D(h);b.e=i;M(g,0,i,0,h);e=new P;e.b=D(16);I(e,e.a,b);I(e,e.a,B(94));j=new N;g=e.b;h=e.a;i=D(h);j.e=i;M(g,0,i,0,h);Lk(d,1,j,c);}
var PN=G(0);
function Mi(){C.call(this);this.dU=null;}
function AEc(a){var b;b=a.dU;if(b!==null)b.mr();}
function ADz(a){var b;b=a.dU;if(b!==null)b.i3();}
function ACD(a){var b;b=a.dU;if(b!==null)b.t4(A97.g6);}
var AEm=G(Mi);
function A1T(){var a=new AEm();AN3(a);return a;}
function AN3(a){}
var IT=G();
var A_a=null;var A$G=null;var A$2=null;function Hh(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mp(b)&&(e+f|0)<=Mp(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new B9;h.G=g;i=h;g.classObject=i;}}j=E6(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new B9;h.G=g;i=h;g.classObject=i;}}i=E6(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.G.$meta.primitive?1:0)&&!(i.G.$meta.primitive?1:0)){k=b;l=0;m
=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p=i.G;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&Sh(g.constructor,p)?1:0)){Mb(b,c,d,e,l);b=new I7;b.c=1;b.d=1;H(b);}l=l+1|0;m=o;}Mb(b,c,d,e,f);return;}if(!(j.G.$meta.primitive?1:0))break a;if(i.G.$meta.primitive?1:0)break b;else break a;}b=new I7;b.c=1;b.d=1;H(b);}}Mb(b,c,d,e,f);return;}b=new I7;b.c=1;b.d=1;H(b);}b=new Y;b.c=1;b.d=1;H(b);}d=new CK;d.c=1;d.d=1;d.f=B(95);H(d);}
function M(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mp(b)&&(e+f|0)<=Mp(d)){Mb(b,c,d,e,f);return;}b=new Y;b.c=1;b.d=1;H(b);}
function Mb(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fc(){return Long_fromNumber(new Date().getTime());}
function LT(){var b,c;if(A$2===null){b=new KW;LI(b,11);DP(b,B(96),B(97));DP(b,B(84),B(98));DP(b,B(99),B(100));DP(b,B(101),B(102));DP(b,B(103),B(104));DP(b,B(105),B(106));DP(b,B(107),B(97));DP(b,B(108),B(100));c=new KW;LI(c,11);c.Bp=b;A$2=c;}}
function Pa(b,c){LT();return DP(A$2,b,c);}
var Ye=G();
function Bk(b,c){var d,e,f,g,h,i,j,k,l;if(!b)return B(44);d=1<<c;e=d-1|0;f=(((32-LA(b)|0)+c|0)-1|0)/c|0;g=D(f);h=g.data;i=Db(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=Ip((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new N;Q();c=h.length;h=D(c);l.e=h;M(g,0,h,0,c);return l;}
var ER=G(BG);
var A$0=null;var A$_=null;var A$$=null;var A_b=null;function Jv(){Jv=V(ER);AT7();}
function AT7(){var b,c,d;b=new ER;Jv();b.t=B(109);b.q=0;A$0=b;c=new ER;c.t=B(110);c.q=1;A$_=c;d=new ER;d.t=B(111);d.q=2;A$$=d;A_b=T(ER,[b,c,d]);}
var M7=G(0);
var Ca=G(0);
var RD=G(0);
function KO(){var a=this;C.call(a);a.ee=null;a.lZ=null;}
var A$1=null;function ID(){ID=V(KO);ASW();}
function ACb(a){return a.ee.document;}
function AFe(a,b){a.lZ=b;$rt_globals.requestAnimationFrame(BY(a,"onAnimationFrame"));}
function AA0(a,b,c){var d;d=Ds(c,"handleEvent");a.ee.addEventListener($rt_ustr(b),BY(d,"handleEvent"));}
function ASW(){var b;b=new KO;ID();b.ee=$rt_globals.window;A$1=b;}
function AVl(a,b){var c;b;c=a.lZ;a.lZ=null;ACt(c);}
var XE=G();
var Oj=G();
var A64=null;function LY(){LY=V(Oj);AUT();}
function Xm(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;LY();if(b===null){d=new Bh;d.c=1;d.d=1;d.f=B(35);H(d);}d=null;e=0;f=b.m;while(e<f){if(e>=b.m){g=new Y;d=new P;d.b=D(16);I(d,d.a,B(36));O(d,d.a,e,10);I(d,d.a,B(37));c=b.m;O(d,d.a,c,10);b=new N;h=d.b;e=d.a;Q();i=D(e);b.e=i;M(h,0,i,0,e);g.c=1;g.d=1;g.f=b;H(g);}a:{g=b.r.data[e];if(g!==null){if(d===null){d=A64;j=g.constructor;if(j===null)k=null;else{k=j.classObject;if(k===null){k=new B9;k.G=j;l=k;j.classObject=l;}}m=CA(d,k);d=m<0?null:d.cs.data[m];if(d===null)break a;}k
=d.b3;if(k.m<d.dL){Cf(k,g);n=d.gc;o=d.b3.m;if(n>o)o=n;d.gc=o;if(Dk(g,CQ))g.dY();}else if(Dk(g,CQ))g.dY();if(!c)d=null;}}e=e+1|0;}}
function AUT(){A64=EE(51,0.800000011920929);}
function J0(){EY.call(this);this.ph=0.0;}
var A4V=null;function AW0(a){return a.ph;}
function F_(b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.e.data;d=c.length;if(d?0:1){b=new Cc;b.c=1;b.d=1;H(b);}e=0;while(e>=0&&e<d){if(c[e]>32){f=d;while(true){g=f-1|0;if(g<0)break;if(g>=d)break;if(c[g]>32){g=0;if(CZ(b,e)==45){e=e+1|0;g=1;}else if(CZ(b,e)==43)e=e+1|0;if(e==f){b=new Cc;b.c=1;b.d=1;H(b);}a:{h=CZ(b,e);i=0;j=(-1);k=100000000;l=0;if(h!=46){l=1;if(h>=48&&h<=57){b:{while(e<f){if(CZ(b,e)!=48)break b;e=e+1|0;}}while(e<f){m=CZ(b,e);if(m<48)break a;if(m>57)break a;if(k>0){i=i+Db(k,m-48|0)|0;k=$rt_udiv(k,10);}j
=j+1|0;e=e+1|0;}}else{b=new Cc;Pb(b);H(b);}}}if(e<f&&CZ(b,e)==46){e=e+1|0;c:{while(true){if(e>=f)break c;d=CZ(b,e);m=Bo(d,48);if(m<0)break c;if(d>57)break;if(!i&&!m)j=j+(-1)|0;else if(k>0){i=i+Db(k,d-48|0)|0;k=$rt_udiv(k,10);}e=e+1|0;l=1;}}if(!l)H(TA());}if(e<f){m=CZ(b,e);if(m!=101&&m!=69)H(TA());m=e+1|0;d=0;if(m==f)H(TA());if(CZ(b,m)==45){m=m+1|0;d=1;}else if(CZ(b,m)==43)m=m+1|0;n=0;e=0;d:{while(true){if(m>=f)break d;k=CZ(b,m);if(k<48)break d;if(k>57)break;n=(10*n|0)+(k-48|0)|0;e=1;m=m+1|0;}}if(!e)H(TA());if
(d)n= -n|0;j=j+n|0;}return AGc(i,j,g);}f=f+(-1)|0;}b=new X;b.c=1;b.d=1;H(b);}e=e+1|0;if(e==d){b=new Cc;b.c=1;b.d=1;H(b);}}b=new X;b.c=1;b.d=1;H(b);}
function ANf(){A4V=L($rt_floatcls());}
function JU(){var a=this;C.call(a);a.b6=null;a.bI=0;a.lJ=0;}
function QV(a,b){var c,d,e,f,g;c=a.b6;d=c.data;e=a.bI;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Ck(f);g=d.data.length;if(e<g)g=e;M(c,0,d,0,g);a.b6=d;}c=d.data;f=a.bI;a.bI=f+1|0;c[f]=b;}
function PA(a,b,c,d){var e,f,g,h;if((c+d|0)<=b.bI){J8(a,b.b6,c,d);return;}e=new Bh;f=new P;f.b=D(16);I(f,f.a,B(112));O(f,f.a,c,10);I(f,f.a,B(50));O(f,f.a,d,10);I(f,f.a,B(51));c=b.bI;O(f,f.a,c,10);b=new N;g=f.b;d=f.a;Q();h=D(d);b.e=h;M(g,0,h,0,d);e.c=1;e.d=1;e.f=b;H(e);}
function J8(a,b,c,d){var e,f,g,h,i,j;e=a.b6;f=e.data;g=a.bI;h=g+d|0;if(h<=f.length)f=e;else{if(8>h)h=8;i=g*1.75|0;if(h>i)i=h;f=Ck(i);j=f.data.length;if(g<j)j=g;M(e,0,f,0,j);a.b6=f;}M(b,c,f,a.bI,d);a.bI=a.bI+d|0;}
function Q1(a,b){var c,d,e,f,g,h;if(b<a.bI)return a.b6.data[b];c=new Y;d=new P;d.b=D(16);I(d,d.a,B(36));O(d,d.a,b,10);I(d,d.a,B(37));b=a.bI;O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function Z0(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.bI;if(c>=d){e=new Y;f=new P;f.b=D(16);I(f,f.a,B(52));O(f,f.a,c,10);I(f,f.a,B(37));g=a.bI;O(f,f.a,g,10);h=new N;i=f.b;c=f.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}if(b<=c){g=(c-b|0)+1|0;k=d-g|0;if(a.lJ){i=a.b6;c=b+g|0;M(i,c,i,b,d-c|0);}else{l=c+1|0;if(k>l)l=k;i=a.b6;M(i,l,i,b,d-l|0);}a.bI=k;return;}e=new Y;f=new P;f.b=D(16);I(f,f.a,B(53));O(f,f.a,b,10);I(f,f.a,B(54));O(f,f.a,c,10);h=new N;i=f.b;c=f.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function Rh(a){var b;if(a.bI)return a.b6.data[0];b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}
function Yb(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Bh;d=new P;d.b=D(16);I(d,d.a,B(55));O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}i=a.bI;g=i+b|0;h=a.b6;if(g>h.data.length){if(8>g)g=8;b=i*1.75|0;if(g>b)b=g;f=Ck(b);j=f.data.length;if(i<j)j=i;M(h,0,f,0,j);a.b6=f;}return a.b6;}
var ACk=G();
function AFs(b){return Math.sin(b);}
function AHt(b){return Math.cos(b);}
function AN$(b){return Math.tan(b);}
function BO(b){return Math.sqrt(b);}
function AR$(b){return Math.ceil(b);}
function JG(b,c){return Math.pow(b,c);}
function RG(b,c){if(b>c)c=b;return c;}
function Ya(b,c){return Math.min(b,c);}
function AWN(b,c){return Ya(b,c);}
function I9(b,c){return Math.max(b,c);}
function AH_(b,c){return I9(b,c);}
function Fk(b){return Math.abs(b);}
function Cm(b){return Math.sign(b);}
function EF(){var a=this;C.call(a);a.bK=null;a.cm=null;a.ey=0.0;a.lf=0.0;a.mX=0.0;}
function A_c(){var a=new EF();ASO(a);return a;}
function ASO(a){var b;b=new BP;b.bj=1;b.r=Bj(C,16);a.bK=b;b=new JU;b.lJ=1;b.b6=Ck(16);a.cm=b;}
function AAc(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.bK;d=b.bK;e=d.r;f=d.m;g=c.r;h=g.data;i=c.m;j=i+f|0;if(j>h.length){k=8;if(k<=j)k=j;l=i*1.75|0;if(k>l)l=k;g=GC(c,l);}M(e,0,g,c.m,f);c.m=j;c=a.cm;m=c.bI;if(m<=0?0:1)c.bI=m-1|0;b=b.cm;J8(c,b.b6,0,b.bI);}
function ALi(a){var b,c,d,e,f,g,h;b=a.bK;c=b.r;d=0;e=b.m;f=null;if(d>e){b=new Bh;b.c=1;b.d=1;H(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.m=0;a.cm.bI=0;}
function Ug(a){var b,c,d,e,f,g,h,i,j,k,l;b=new P;c=a.bK;d=c.m;b.b=D(d+32|0);e=0;while(e<d){if(e>=c.m){f=new Y;g=new P;g.b=D(16);I(g,g.a,B(36));O(g,g.a,e,10);I(g,g.a,B(37));e=c.m;O(g,g.a,e,10);b=new N;h=g.b;d=g.a;Q();i=D(d);b.e=i;M(h,0,i,0,d);f.c=1;f.d=1;f.f=b;H(f);}j=c.r.data[e].fY&65535;k=b.a;Bd(b,k,k+1|0);b.b.data[k]=j;e=e+1|0;}I(b,b.a,B(58));l=a.ey;Dz(b,b.a,l);I(b,b.a,B(58));l=a.lf;Dz(b,b.a,l);I(b,b.a,B(58));l=a.mX;Dz(b,b.a,l);c=new N;h=b.b;d=b.a;Q();i=D(d);c.e=i;M(h,0,i,0,d);return c;}
function Do(){var a=this;C.call(a);a.bH=null;a.Z=0;a.dy=0;}
function E4(a,b){var c,d,e,f,g;c=a.bH;d=c.data;e=a.Z;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Bc(f);g=d.data.length;if(e<g)g=e;M(c,0,d,0,g);a.bH=d;}c=d.data;f=a.Z;a.Z=f+1|0;c[f]=b;}
function AFY(a,b,c){var d,e,f,g,h,i,j;d=a.bH;e=d.data;f=a.Z;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=Bc(h);i=g.data.length;if(f<i)i=f;M(d,0,g,0,i);a.bH=g;}e=g.data;j=a.Z;e[j]=b;e[j+1|0]=c;a.Z=j+2|0;}
function FS(a,b){var c,d,e,f,g,h;if(b<a.Z)return a.bH.data[b];c=new Y;d=new P;d.b=D(16);I(d,d.a,B(36));O(d,d.a,b,10);I(d,d.a,B(37));b=a.Z;O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function JK(a,b,c){var d,e,f,g,h;if(b<a.Z){a.bH.data[b]=c;return;}d=new Y;e=new P;e.b=D(16);I(e,e.a,B(36));O(e,e.a,b,10);I(e,e.a,B(37));b=a.Z;O(e,e.a,b,10);f=new N;g=e.b;c=e.a;Q();h=D(c);f.e=h;M(g,0,h,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function AFG(a,b){var c,d,e,f,g,h,i,j;c=a.Z;if(b<c){d=a.bH;e=d.data;f=e[b];g=c-1|0;a.Z=g;if(!a.dy)e[b]=e[g];else M(d,b+1|0,d,b,g-b|0);return f;}h=new Y;i=new P;i.b=D(16);I(i,i.a,B(36));O(i,i.a,b,10);I(i,i.a,B(37));g=a.Z;O(i,i.a,g,10);j=new N;d=i.b;g=i.a;Q();e=D(g);j.e=e;M(d,0,e,0,g);h.c=1;h.d=1;h.f=j;H(h);}
function RO(a){return a.bH.data[a.Z-1|0];}
function Xp(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Bh;d=new P;d.b=D(16);I(d,d.a,B(55));O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}i=a.Z;g=i+b|0;h=a.bH;if(g>h.data.length){if(8>g)g=8;b=i*1.75|0;if(g>b)b=g;f=Bc(b);j=f.data.length;if(i<j)j=i;M(h,0,f,0,j);a.bH=f;}return a.bH;}
function ALL(a){var b,c,d,e,f,g,h;if(a.dy){b=a.bH;c=1;d=0;e=a.Z;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=$rt_nextId();g.$id$=h;}return a.$id$;}
function AXg(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.dy)return 0;if(!(b instanceof Do))return 0;c=b;if(!c.dy)return 0;d=a.Z;if(d!=c.Z)return 0;e=a.bH;f=c.bH;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function ATV(a){var b,c,d,e,f,g,h,i;if(!a.Z)return B(57);b=a.bH;c=new JC;d=D(32);e=d.data;c.br=d;f=c.W;if(f==e.length)C0(c,f+1|0);b=b.data;e=c.br.data;g=c.W;c.W=g+1|0;e[g]=91;Nh(c,b[0],0,48);h=1;while(h<a.Z){g=B(58).e.data.length;i=c.W+g|0;if(i>c.br.data.length)C0(c,i);G8(B(58),0,g,c.br,c.W);c.W=i;Nh(c,b[h],0,48);h=h+1|0;}f=c.W;if(f==c.br.data.length)C0(c,f+1|0);b=c.br;e=b.data;g=c.W;f=g+1|0;c.W=f;e[g]=93;if(!f)c=B(42);else{c=new N;Q();e=D(f);c.e=e;M(b,0,e,0,f);}return c;}
var KH=G(0);
var Kl=G();
var Fa=G(0);
function Gm(){var a=this;Kl.call(a);a.e_=0;a.cx=null;a.mT=0;a.iS=0.0;a.fz=0;}
function HE(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Ww(a,b){var c,d,e,f;if(b===null){c=a.cx.data[0];while(c!==null&&c.cQ!==null){c=c.c2;}}else{d=b.dT();e=a.cx.data;c=e[d&(e.length-1|0)];while(c!==null){if(c.eI==d){f=c.cQ;if(b!==f&&!b.d5(f)?0:1)break;}c=c.c2;}}return c;}
function Gt(a,b,c){var d,e,f,g,h,i;if(b===null){d=a.cx.data;e=d[0];while(e!==null&&e.cQ!==null){e=e.c2;}if(e===null){a.mT=a.mT+1|0;f=null;e=new E8;b=null;e.cQ=f;e.dZ=b;e.eI=0;e.c2=d[0];d[0]=e;g=a.e_+1|0;a.e_=g;if(g>a.fz)Rp(a,d.length);}}else{h=b.dT();d=a.cx.data;i=h&(d.length-1|0);e=d[i];while(e!==null){if(e.eI==h){f=e.cQ;if(b!==f&&!b.d5(f)?0:1)break;}e=e.c2;}if(e===null){a.mT=a.mT+1|0;e=new E8;f=null;e.cQ=b;e.dZ=f;e.eI=h;d=a.cx.data;e.c2=d[i];d[i]=e;g=a.e_+1|0;a.e_=g;if(g>a.fz)Rp(a,d.length);}}f=e.dZ;e.dZ=
c;return f;}
function Rp(a,b){var c,d,e,f,g,h,i,j;c=HE(!b?1:b<<1);d=Bj(E8,c);e=d.data;f=0;c=c-1|0;while(true){g=a.cx.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.eI&c;j=h.c2;h.c2=e[i];e[i]=h;h=j;}f=f+1|0;}a.cx=d;a.fz=e.length*a.iS|0;}
function AAm(b,c){return b!==c&&!b.d5(c)?0:1;}
var Ld=G(0);
var SS=G();
var Y=G(BJ);
function A_d(){var a=new Y();UQ(a);return a;}
function A_e(a){var b=new Y();ACn(b,a);return b;}
function UQ(a){a.c=1;a.d=1;}
function ACn(a,b){a.c=1;a.d=1;a.f=b;}
var ADM=G();
function Mp(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A_f());}return b.data.length;}
function ANp(b,c){if(b===null){b=new CK;b.c=1;b.d=1;H(b);}if(b===L($rt_voidcls())){b=new Bh;b.c=1;b.d=1;H(b);}if(c>=0)return EU(b.G,c);b=new D1;b.c=1;b.d=1;H(b);}
function EU(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var CK=G(BJ);
var I7=G(BJ);
var DA=G();
var A42=null;var A_g=null;var A$P=null;var A$N=null;var A_h=null;var A43=null;var A$O=null;var A$Q=null;var A_i=null;var A_j=null;function Y8(b){var c,d,e,f;c=new N;d=D(1);e=d.data;e[0]=b;Q();f=e.length;e=D(f);c.e=e;M(d,0,e,0,f);return c;}
function Y0(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function AAM(b,c,d){var e;if(c<(d-1|0)){e=b.data;if((e[c]&64512)!=55296?0:1){d=c+1|0;if((e[d]&64512)!=56320?0:1)return ((e[c]&1023)<<10|e[d]&1023)+65536|0;}}return b.data[c];}
function ADd(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function YY(b){return (56320|b&1023)&65535;}
function AFz(b){if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}return B0(A$N,b)&65535;}
function ACw(){if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}return A$N;}
function ZX(b){if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}return B0(A$P,b)&65535;}
function T5(){if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}return A$P;}
function B0(b,c){var d,e;d=b.xk.data;if(c<d.length)return c+d[c]|0;d=b.to;e=AFf(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;}
function AFf(b,c){var d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=Bo(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;}
function Jq(b){var c,d,e,f,g,h;if(A_g===null){if(A_i===null)A_i=ACe();A_g=AXK((A_i.value!==null?$rt_str(A_i.value):null));}c=A_g.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=Bo(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);}
function Ip(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function CH(b){var c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(A_h===null){if(A_j===null)A_j=Zw();A_h=APJ((A_j.value!==null?$rt_str(A_j.value):null));}e=A_h.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.oi)c=f+1|0;else{d=g.pL;if(b>=d)return g.pO.data[b-d|0];d=f-1|0;}}return 0;}
function H2(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CH(b)!=16?0:1;}
function AQE(){A42=L($rt_charcls());A43=Bj(DA,128);}
function C5(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function C6(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ACe(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function Zw(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var ABn=G();
function AUD(){var userAgent=$rt_globals.navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
var Qc=G(0);
function Np(){var a=this;C.call(a);a.bx=0;a.yd=0;a.vb=0;a.dI=0;}
function Wk(a){return a.bx;}
function UX(a,b,c,d,e,f){var g,h,i,j,k,l;a:{A3I();switch(A_k.data[d.q]){case 1:if(a.dI){if(A_a===null){e=new Ct;e.cf=A5j;d=new P;d.b=D(16);e.bc=d;e.b$=D(32);e.ck=0;Cr();e.cg=A$H;A_a=e;}e=A_a;g=new P;g.b=D(16);I(g,g.a,B(113));I(g,g.a,c===null?B(2):c);d=new N;h=g.b;i=g.a;Q();j=D(i);d.e=j;M(h,0,j,0,i);g=e.bc;I(g,g.a,d);k=g.a;Bd(g,k,k+1|0);g.b.data[k]=10;Co(e);}a.bx=a.bx+1|0;d=new GY;d.eJ=a;d.gT=b;d.ev=c;d.e$=f;CD();c=null;e=null;d.d7=new C;d.d3=1;d.eU=e;d.fn=c;l=A_l;A_l=l+1|0;d.fl=S(l);c=new Fb;c.eW=d;FR(c);break a;case 2:d
=null;g=new M9;g.kM=a;g.iZ=f;g.ws=d;g.u0=e;if(a.dI){if(A_a===null){e=new Ct;e.cf=A5j;d=new P;CO(d);d.b=D(16);e.bc=d;e.b$=D(32);e.ck=0;Cr();e.cg=A$H;A_a=e;}f=A_a;d=new P;d.b=D(16);CR(d,d.a,C2(B(113)));CR(d,d.a,c===null?B(2):C2(c));e=new N;h=d.b;i=d.a;j=D(i);e.e=j;M(h,0,j,0,i);d=f.bc;I(d,d.a,e);AGb(d,d.a,10);Co(f);}a.bx=a.bx+1|0;d=new GZ;d.ew=a;d.fJ=b;d.eF=c;d.fe=g;CD();c=null;e=null;d.d7=new C;d.d3=1;d.eU=e;d.fn=c;l=A_l;A_l=l+1|0;d.fl=S(l);c=new Fb;c.eW=d;FR(c);break a;case 3:break;case 4:Q2(a,b,c,AYQ(a,f));break a;case 5:WY(f,
c,null);break a;default:c=new Bb;e=new P;Ki(e);CS(CS(e,B(114)),d);Vl(c,Cy(e));H(c);}Q2(a,b,c,f);}}
function T6(a,b,c,d){var e,f,g,h,i,j,k;if(a.dI){if(A_a===null){e=new Ct;e.cf=A5j;f=new P;f.b=D(16);e.bc=f;e.b$=D(32);e.ck=0;Cr();e.cg=A$H;A_a=e;}e=A_a;f=new P;f.b=D(16);I(f,f.a,B(113));I(f,f.a,c===null?B(2):c);g=new N;h=f.b;i=f.a;Q();j=D(i);g.e=j;M(h,0,j,0,i);f=e.bc;I(f,f.a,g);i=f.a;Bd(f,i,i+1|0);f.b.data[i]=10;Co(e);}a.bx=a.bx+1|0;e=new GY;e.eJ=a;e.gT=b;e.ev=c;e.e$=d;CD();c=null;d=null;e.d7=new C;e.d3=1;e.eU=d;e.fn=c;k=A_l;A_l=k+1|0;e.fl=S(k);c=new Fb;c.eW=e;FR(c);}
function Lk(a,b,c,d){var e,f,g,h,i,j,k;if(a.dI){if(A_a===null){e=new Ct;e.cf=A5j;f=new P;f.b=D(16);e.bc=f;e.b$=D(32);e.ck=0;Cr();e.cg=A$H;A_a=e;}e=A_a;f=new P;f.b=D(16);I(f,f.a,B(115));I(f,f.a,c===null?B(2):c);g=new N;h=f.b;i=f.a;Q();j=D(i);g.e=j;M(h,0,j,0,i);f=e.bc;I(f,f.a,g);k=f.a;Bd(f,k,k+1|0);f.b.data[k]=10;Co(e);}a.bx=a.bx+1|0;f=new $rt_globals.XMLHttpRequest();e=new M8;e.iI=a;e.gy=f;e.n3=b;e.mj=c;e.oE=d;e=BY(e,"handleEvent");f.onreadystatechange=e;e=new Iu;e.oQ=a;e.l0=d;d=BY(e,"handleEvent");f.onprogress
=d;f.open("GET",$rt_ustr(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();}
function Q2(a,b,c,d){var e,f,g,h,i,j,k;if(a.dI){if(A_a===null){e=new Ct;e.cf=A5j;f=new P;f.b=D(16);e.bc=f;e.b$=D(32);e.ck=0;Cr();e.cg=A$H;A_a=e;}e=A_a;f=new P;f.b=D(16);I(f,f.a,B(113));I(f,f.a,c===null?B(2):c);g=new N;h=f.b;i=f.a;Q();j=D(i);g.e=j;M(h,0,j,0,i);f=e.bc;I(f,f.a,g);i=f.a;Bd(f,i,i+1|0);f.b.data[i]=10;Co(e);}a.bx=a.bx+1|0;e=new GZ;e.ew=a;e.fJ=b;e.eF=c;e.fe=d;CD();c=null;d=null;e.d7=new C;e.d3=1;e.eU=d;e.fn=c;k=A_l;A_l=k+1|0;e.fl=S(k);c=new Fb;c.eW=e;FR(c);}
var NT=G();
var A$3=null;function AGY(){return A$3;}
var L0=G();
var A5g=0;var A$4=0;function ATe(){A5g=1;}
var O5=G(0);
function LC(){var a=this;C.call(a);a.ii=null;a.cv=null;a.yp=null;a.hQ=null;a.tH=null;a.zK=null;a.q6=0.0;a.pe=BI;a.lF=BI;a.g6=0.0;a.mI=0.0;a.q0=0;}
var A_m=0;var A$d=null;function IU(){IU=V(LC);AQ0();}
function A0i(a){var b=new LC();ADg(b,a);return b;}
function ADg(a,b){var c,d,e,f,g,h,i,j,k;IU();a.q6=0.0;a.pe=Fc();a.lF=S(-1);a.g6=0.0;a.mI=0.0;a.yp=b;ID();c=$rt_globals.window.document;d=b.vf;a.cv=c.getElementById($rt_ustr(d));e=AJh();d=!!b.x8;e.alpha=d;d=!!b.wg;e.antialias=d;d=!!b.wH;e.stencil=d;d=!!b.tz;e.premultipliedAlpha=d;d=!!b.xv;e.preserveDrawingBuffer=d;f=a.cv;if(b.lL)a.ii=f.getContext("webgl2",e);a:{if(b.lL){d=a.ii;if(d!==null){if(!b.oR)f=A32(d);else{f=new QB;ZN(f,d);}a.tH=f;a.hQ=f;break a;}}f=f.getContext("webgl",e);a.ii=f;if(!b.oR)d=A3P(f);else
{d=new Tk;R_(d,f);}a.hQ=d;}d=a.hQ.jh(7938);c=a.hQ.jh(7936);g=a.hQ.jh(7937);f=new N3;Lp();WF(f,A_n,d,c,g);a.zK=f;h=b.lV;if(!(h<0&&b.hy<0)){if(h&&b.hy?1:0)Lr(a,h,b.hy);else{i=A$1;h=i.ee.document.documentElement.clientWidth-b.nB|0;j=i.ee.document.documentElement.clientHeight-b.q5|0;k=!b.mt?1.0:$rt_globals.devicePixelRatio||1;Lr(a,k*h|0,k*j|0);}}b=a.cv;d=new Sx;d.zi=a;T4(b,BY(d,"fullscreenChanged"));}
function U8(a){var b,c,d;b=Fc();c=AZw(RC(b,a.pe))/1000.0;a.g6=c;a.pe=b;c=a.mI+c;a.mI=c;d=a.q0+1|0;a.q0=d;if(c>1.0){a.q6=d;a.mI=0.0;a.q0=0;}}
function O$(a){return a.hQ;}
function AAj(a){return a.tH;}
function Tr(a){return a.cv.width;}
function Qa(a){return a.cv.height;}
function Lr(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.cv;e=b;d.width=e;d=a.cv;e=c;d.height=e;if(a.yp.mt){f=$rt_globals.devicePixelRatio||1;e=a.cv.style;g=b/f;ARw();h=new P;h.b=D(16);Q_(h,h.a,g);I(h,h.a,B(116));i=new N;j=h.b;k=h.a;Q();l=D(k);i.e=l;M(j,0,l,0,k);e.setProperty("width",$rt_ustr(i));f=c/f;h=new P;h.b=D(16);Q_(h,h.a,f);I(h,h.a,B(116));d=new N;l=h.b;c=h.a;j=D(c);d.e=j;M(l,0,j,0,c);e.setProperty("height",$rt_ustr(d));}}
function AQ0(){A_m=0;A$d=Dp(51,0.800000011920929);}
function T4(b,c){if(b.requestFullscreen){$rt_globals.document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){$rt_globals.document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){$rt_globals.document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){$rt_globals.document.addEventListener("msfullscreenchange",c,false);}}
function Z3(){var a=this;C.call(a);a.qk=null;a.ji=null;a.mq=null;a.kt=null;a.kv=null;a.wt=null;a.kZ=null;a.p3=0;a.l9=null;}
function AZZ(a,b,c){var d=new Z3();ATH(d,a,b,c);return d;}
function ATH(a,b,c,d){var e;a.qk=EE(51,0.800000011920929);a.ji=EE(51,0.800000011920929);a.mq=EE(51,0.800000011920929);a.kt=EE(51,0.800000011920929);a.kv=EE(51,0.800000011920929);a.wt=EE(51,0.800000011920929);e=new BP;e.bj=1;e.r=Bj(C,16);a.kZ=e;a.p3=(-1);a.l9=b;Yp(a,c,d);}
function Yp(a,b,c){var d,e,f;d=c.en;if(d.vY!==null){e=b.ownerDocument;f=new Oe;f.ET=a;e.addEventListener("dragenter",BY(f,"handleEvent"),!!0);f=new Of;f.B8=a;e.addEventListener("dragover",BY(f,"handleEvent"),!!0);f=new Oc;f.v4=a;f.rJ=c;f.vy=d;e.addEventListener("drop",BY(f,"handleEvent"));}}
function V_(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(Wf(a,b.pT)){b.k$=b.yx;b.kr=1;b.hI=0;b.ez=0;return 0;}if(b.ez)return 0;b.hI=0;b.kr=0;b.ez=1;c=b.pT;d=b.sb;e=b.v2;f=new Od;f.Ct=a;f.ea=b;g=A$3;b=a.l9;h=new P;h.b=D(16);i=h.a;if(b===null)b=B(2);Ew(h,i,b);Ew(h,h.a,B(91));b=new N;j=h.b;k=h.a;Q();l=D(k);b.e=l;M(j,0,l,0,k);h=new P;h.b=D(16);I(h,h.a,b);I(h,h.a,c===null?B(2):c);m=new N;j=h.b;k=h.a;l=D(k);m.e=l;M(j,0,l,0,k);b=new Ob;b.mu=a;b.eq=f;b.lC=d;b.mh=c;UX(g,1,m,d,e,b);return 1;}
function It(a,b,c,d){a:{A0V();switch(A_o.data[b.q]){case 1:break;case 2:BH(a.ji,c,d);break a;case 3:BH(a.kv,c,d);break a;case 4:BH(a.mq,c,d);break a;case 5:BH(a.qk,c,null);break a;default:break a;}BH(a.kt,c,d);}}
function UL(a,b){var c,d,e,f,$$je;if(CA(a.kt,b)<0?0:1){a:{try{c=ARY(Xb(AAB(a.kt,b),B(117)));}catch($$e){$$je=Br($$e);if($$je instanceof Rk){break a;}else{throw $$e;}}return c;}return null;}if(CA(a.ji,b)<0?0:1){b=new Mu;d=BF(1);e=d.data.length;b.j0=d;b.gb=0;b.n5=0;b.i_=0+e|0;return b;}if(CA(a.kv,b)<0?0:1){c=a.kv;f=CA(c,b);b=f<0?null:c.cs.data[f];c=new P3;c.qo=b;return c;}if(!(CA(a.mq,b)<0?0:1))return null;b=new Mu;d=BF(1);e=d.data.length;b.j0=d;b.gb=0;b.n5=0;b.i_=0+e|0;return b;}
function Wf(a,b){var c;c=CA(a.kt,b)<0?0:1;return !c&&!(CA(a.ji,b)<0?0:1)&&!(CA(a.kv,b)<0?0:1)&&!(CA(a.mq,b)<0?0:1)&&!(CA(a.qk,b)<0?0:1)?0:1;}
var DC=G();
function AL$(a,b){}
var Sf=G(0);
var EV=G(0);
function ADB(){var a=this;C.call(a);a.bX=null;a.jO=0;a.fy=null;a.eZ=null;a.cr=null;a.cq=null;a.jc=null;a.jd=null;a.mz=null;a.j4=0;a.nb=null;a.lt=0;a.lg=null;a.oX=null;a.n7=null;a.da=null;a.fK=BI;a.hV=0;}
function A1E(a){var b=new ADB();ANd(b,a);return b;}
function APt(b){var c,d,e,f;c=A$Y;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(Fk(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
function ANd(a,b){a.jO=0;a.fy=Dp(20,0.800000011920929);a.eZ=TC(20);a.cr=Bc(20);a.cq=Bc(20);a.jc=Bc(20);a.jd=Bc(20);a.mz=AHA(51,0.800000011920929);a.j4=0;a.nb=TC(256);a.lt=0;a.lg=TC(256);a.oX=TC(5);a.n7=AHA(51,0.800000011920929);a.hV=1;a.bX=b;ADx(a);}
function ADx(a){var b;b=a.bX.ownerDocument;b.addEventListener("mousedown",BY(a,"handleEvent"),!!0);b.addEventListener("mouseup",BY(a,"handleEvent"),!!0);b.addEventListener("mousemove",BY(a,"handleEvent"),!!0);b.addEventListener("wheel",BY(a,"handleEvent"),!!0);b.addEventListener("keydown",BY(a,"handleEvent"),!!0);b.addEventListener("keyup",BY(a,"handleEvent"),!!0);b.addEventListener("keypress",BY(a,"handleEvent"),!!0);a.bX.addEventListener("touchstart",BY(a,"handleEvent"),!!1);a.bX.addEventListener("touchmove",
BY(a,"handleEvent"),!!1);a.bX.addEventListener("touchcancel",BY(a,"handleEvent"),!!1);a.bX.addEventListener("touchend",BY(a,"handleEvent"),!!1);}
function ADK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;a:{c=$rt_str(b.type);if(BC(c,B(118))){$rt_globals.window.focus();d=b.target;e=a.bX;if(d!==e?0:1){f=a.eZ.data;if(!f[0]){a.hV=1;a.jO=1;f[0]=1;g=K6(b.button);AA_(a.mz,g);a.oX.data[g]=1;a.jc.data[0]=0;a.jd.data[0]=0;if(!KP(a)){h=Hg(a,b,a.bX);i=Hv(a,b,a.bX);a.cr.data[0]=h;a.cq.data[0]=i;}else{f=a.cr.data;f[0]=f[0]+b.movementX|0;f=a.cq.data;f[0]=f[0]+b.movementY|0;}a.fK=FM();j=a.da;if(j!==null)Ka(j,a.cr.data[0],a.cq.data[0],0,K6(b.button));b.preventDefault();b.stopPropagation();break a;}}k
=Hg(a,b,e);l=Hv(a,b,a.bX);if(!(k>=0.0&&k<=Tr(A97)&&l>=0.0&&l<=Qa(A97)))a.hV=0;return;}if(BC(c,B(119))){if(!a.eZ.data[0])return;Y2(a.mz,K6(b.button));f=a.eZ;f.data[0]=a.mz.es<=0?0:1;if(!KP(a)){FP(a,0,Hg(a,b,a.bX)-a.cr.data[0]|0,Hv(a,b,a.bX)-a.cq.data[0]|0);a.cr.data[0]=Hg(a,b,a.bX);a.cq.data[0]=Hv(a,b,a.bX);}else{FP(a,0,b.movementX|0,b.movementY|0);f=a.cr.data;f[0]=f[0]+b.movementX|0;f=a.cq.data;f[0]=f[0]+b.movementY|0;}a.fK=FM();a.eZ.data[0]=0;j=a.da;if(j!==null)I1(j,a.cr.data[0],a.cq.data[0],0,K6(b.button));}
else if(!BC(c,B(120))){if(BC(c,B(121))){if(a.da!==null){m=APt(b);R3(a.da,0.0,m|0);}a.fK=FM();}else if(BC(c,B(122))){a.jO=1;n=b.changedTouches;o=0;p=n.length;while(o<p){j=n.item(o);q=j.identifier;e=a.fy;r=AFE(a);B$(e,q,Ur(r));a.eZ.data[r]=1;a.cr.data[r]=H0(a,j,a.bX);a.cq.data[r]=Ht(a,j,a.bX);a.jc.data[r]=0;a.jd.data[r]=0;j=a.da;if(j!==null)Ka(j,a.cr.data[r],a.cq.data[r],r,0);o=o+1|0;}a.fK=FM();b.preventDefault();}}else{if(!KP(a)){h=Hg(a,b,a.bX);i=Hv(a,b,a.bX);FP(a,0,h-a.cr.data[0]|0,i-a.cq.data[0]|0);a.cr.data[0]
=h;a.cq.data[0]=i;}else{FP(a,0,b.movementX|0,b.movementY|0);f=a.cr.data;f[0]=f[0]+b.movementX|0;f=a.cq.data;f[0]=f[0]+b.movementY|0;}a.fK=FM();j=a.da;if(j!==null){if(!a.eZ.data[0])PH(j,a.cr.data[0],a.cq.data[0]);else Kr(j,a.cr.data[0],a.cq.data[0],0);}}}if(BC(c,B(123))){n=b.changedTouches;o=0;p=n.length;while(o<p){s=n.item(o);q=s.identifier;t=Lz(Jd(a.fy,q));FP(a,t,H0(a,s,a.bX)-a.cr.data[t]|0,Ht(a,s,a.bX)-a.cq.data[t]|0);a.cr.data[t]=H0(a,s,a.bX);a.cq.data[t]=Ht(a,s,a.bX);j=a.da;if(j!==null)Kr(j,a.cr.data[t],
a.cq.data[t],t);o=o+1|0;}a.fK=FM();b.preventDefault();}if(BC(c,B(124))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=Lz(Jd(a.fy,q));Ii(a.fy,q);a.eZ.data[t]=0;h=H0(a,s,a.bX);i=Ht(a,s,a.bX);FP(a,t,h-a.cr.data[t]|0,i-a.cq.data[t]|0);f=a.cr.data;f[t]=h;v=a.cq.data;v[t]=i;j=a.da;if(j!==null)I1(j,f[t],v[t],t,0);o=o+1|0;}a.fK=FM();b.preventDefault();}if(BC(c,B(125))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=Lz(Jd(a.fy,q));Ii(a.fy,q);a.eZ.data[t]=0;h=H0(a,
s,a.bX);i=Ht(a,s,a.bX);FP(a,t,h-a.cr.data[t]|0,i-a.cq.data[t]|0);f=a.cr.data;f[t]=h;v=a.cq.data;v[t]=i;j=a.da;if(j!==null)I1(j,f[t],v[t],t,0);o=o+1|0;}a.fK=FM();b.preventDefault();}}
function TU(a,b){var c,d,e,f,g,h,i;c=$rt_str(b.type);if(!(BC(c,B(126))&&a.hV)){if(BC(c,B(127))&&a.hV){d=b.charCode&65535;e=a.da;if(e!==null)Lm(e,d);if(d==9){b.preventDefault();b.stopPropagation();}}else if(BC(c,B(128))&&a.hV){f=WH(b.keyCode);e=a.n7;if(!f)d=e.iC;else{g=e.fE;h=R(Bi(Bf(S(f),F(2135587861, 2654435769)),e.hD));a:{while(true){d=g.data[h];if(!d){h= -(h+1|0)|0;break a;}if(d==f)break;h=(h+1|0)&e.fZ;}}d=h<0?0:1;}if(d)b.preventDefault();g=a.nb.data;if(g[f]){a.j4=a.j4-1|0;g[f]=0;}e=a.da;if(e!==null)Ll(e,
f);if(f==61){b.preventDefault();b.stopPropagation();}}}else{b:{f=WH(b.keyCode);h=0;switch(f){case 67:h=8;break b;case 112:h=127;break b;default:}}e=a.n7;if(!f)d=e.iC;else{g=e.fE;d=R(Bi(Bf(S(f),F(2135587861, 2654435769)),e.hD));c:{while(true){i=g.data[d];if(!i){d= -(d+1|0)|0;break c;}if(i==f)break;d=(d+1|0)&e.fZ;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.da;if(e!==null){Kx(e,f);Lm(a.da,h);}}else{g=a.nb.data;if(!g[f]){a.j4=a.j4+1|0;g[f]=1;a.lt=1;a.lg.data[f]=1;e=a.da;if(e
!==null)Kx(e,f);}}if(f==61){b.preventDefault();b.stopPropagation();}}}
function AFE(a){var b,c,d;b=0;while(true){if(b>=20)return (-1);c=a.fy;if(b>=(-128)&&b<=127){Fw();d=A7d.data[b+128|0];}else{d=new EZ;d.fP=b;}if(!Zp(c,d,0))break;b=b+1|0;}return b;}
function Or(a){var b,c,d;a:{if(a.jO){a.jO=0;b=0;while(true){c=a.oX.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.lt){a.lt=0;d=0;while(true){c=a.lg.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}}
function FP(a,b,c,d){a.jc.data[b]=c;a.jd.data[b]=d;}
function Hg(a,b,c){var d,e;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Ni(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;if(BC($rt_str(b.compatMode),B(129)))b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Cm(d)*0.5|0;}
function Hv(a,b,c){var d,e;d=c.height*1.0/c.clientHeight;e=(b.clientY-(O6(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;if(BC($rt_str(b.compatMode),B(129)))b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Cm(d)*0.5|0;}
function H0(a,b,c){var d,e;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Ni(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;if(BC($rt_str(b.compatMode),B(129)))b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Cm(d)*0.5|0;}
function Ht(a,b,c){var d,e;d=c.height*1.0/c.clientHeight;e=(b.clientY-(O6(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;if(BC($rt_str(b.compatMode),B(129)))b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Cm(d)*0.5|0;}
function O6(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function Ni(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function Vo(a,b){a.da=b;}
function KP(a){return AWS(a.bX)?1:0;}
function AWS(b){if($rt_globals.document.pointerLockElement===$rt_globals.canvas||$rt_globals.document.mozPointerLockElement===$rt_globals.canvas){return true;}return false;}
function AHl(a,b){ADK(a,b);TU(a,b);}
var OM=G(0);
function X_(){C.call(this);this.h1=null;}
function AYU(a){var b=new X_();AND(b,a);return b;}
function AND(a,b){a.h1=b;}
function AEn(){C.call(this);this.AP=null;}
function AZo(){var a=new AEn();ALA(a);return a;}
function ALA(a){var b,c,d,e;b=new Gm;c=HE(16);b.e_=0;d=Bj(E8,c);e=d.data;b.cx=d;b.iS=0.75;b.fz=e.length*0.75|0;a.AP=b;}
var Sw=G(0);
var VW=G();
function A1v(){var a=new VW();ATq(a);return a;}
function ATq(a){}
var QR=G(0);
function AEk(){var a=this;C.call(a);a.Eu=0;a.mi=0;a.Dp=null;a.og=null;}
function AZ0(){var a=new AEk();AJm(a);return a;}
function AJm(a){var b;a.Eu=0;a.mi=1;b=new RY;b.l6=a;a.Dp=b;a.og=B(42);}
function AEX(b){if("clipboard" in $rt_globals.navigator){$rt_globals.navigator.clipboard.writeText(b);}}
var Ej=G();
var A9u=null;var A97=null;var A$8=null;var A$6=null;var A9p=null;var A$7=null;var A9r=null;var A99=null;var A$5=null;var SQ=G(0);
var SB=G(0);
function ABQ(){C.call(this);this.uj=null;}
function A4c(){var a=new ABQ();AHQ(a);return a;}
function AHQ(a){a.uj=null;a.uj=A3Z();}
function TV(){C.call(this);this.iU=null;}
function A3z(a){var b=new TV();ARx(b,a);return b;}
function ARx(a,b){a.iU=b;}
function ABG(a,b){var c,$$je;if(!BC(B(130),$rt_str(a.iU.f8.ee.document.visibilityState))){b=a.iU.kK;Hs(b);a:{try{c=Os(b);while(RH(c)){Xd(LK(c));}Ed(b);break a;}catch($$e){$$je=Br($$e);c=$$je;}Ed(b);H(c);}b=a.iU.hF.dU;if(b!==null)b.mH();}else{b=a.iU.kK;Hs(b);b:{try{c=Os(b);while(RH(c)){Yr(LK(c));}Ed(b);break b;}catch($$e){$$je=Br($$e);c=$$je;}Ed(b);H(c);}b=a.iU.hF.dU;if(b!==null)b.i3();}}
function AVI(a,b){ABG(a,b);}
function TW(){C.call(this);this.je=null;}
function AYR(a){var b=new TW();AHL(b,a);return b;}
function AHL(a,b){a.je=b;}
function AGu(a,b){var c,d,e,f,g;c=a.je.f8.ee.document.documentElement.clientWidth;b=a.je;d=c-b.en.nB|0;e=b.f8.ee.document.documentElement.clientHeight;b=a.je;f=b.en;c=e-f.q5|0;if(d>0&&c>0){if(b.eM!==null){if(f.mt){g=$rt_globals.devicePixelRatio||1;d=d*g|0;c=c*g|0;}Lr(a.je.eM,d,c);}return;}}
function APc(a,b){AGu(a,b);}
var Bh=G(BJ);
function ALV(a){var b=new Bh();AGB(b,a);return b;}
function AGB(a,b){a.c=1;a.d=1;a.f=b;}
var AAA=G();
function JT(b,c){var d,e,f,g,h,i,j;if(b<0){d=new Bh;e=new P;e.b=D(16);I(e,e.a,B(131));O(e,e.a,b,10);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);d.c=1;d.d=1;d.f=f;H(d);}j=AR$(b/c)|0;if(2>j)j=2;h=LV(j);if(h<=1073741824)return h;d=new Bh;e=new P;e.b=D(16);I(e,e.a,B(132));O(e,e.a,b,10);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);d.c=1;d.d=1;d.f=f;H(d);}
var RN=G(EY);
var A41=null;function YL(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;if(e>=2&&e<=36){f=Bo(c,d);if(!f){b=new Cc;b.c=1;b.d=1;b.f=B(77);H(b);}g=0;if(c>=0){h=b.e.data;if(c<h.length){a:{switch(h[c]){case 43:i=c+1|0;break a;case 45:g=1;i=c+1|0;break a;default:}i=c;}j=BI;k=S(e);b:{while(i<d){l=i+1|0;if(i<0)break b;h=b.e.data;if(i>=h.length)break b;m=Jq(h[i]);if(m<0){n=new Cc;if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f){Q();o=A9m;}else if(!c&&d==b.e.data.length)o=b;else{o=new N;h=b.e;d=d-c|0;Q();p=D(d);o.e=p;M(h,c,p,0,d);}Q();if
(o===null)o=B(2);b=new P;b.b=D(16);I(b,b.a,B(78));I(b,b.a,o);q=new N;h=b.b;d=b.a;p=D(d);q.e=p;M(h,0,p,0,d);Il(n,q);H(n);}if(m>=e){n=new Cc;b=LO(FI(b,c,d));q=new P;Ki(q);RE(q,B(79));CS(CS(Ei(q,e),B(71)),b);IL(n,Cy(q));H(n);}j=C4(Bf(k,j),S(m));if(AJn(j,BI)){if(l==d&&BU(j,F(0, 2147483648))&&g)return F(0, 2147483648);n=new Cc;b=LO(N7(b,c,d));q=Eq();CS(CS(q,B(80)),b);IL(n,Cy(q));H(n);}i=l;}if(g)j=AUu(j);return j;}b=new X;b.c=1;b.d=1;H(b);}}b=new X;b.c=1;b.d=1;H(b);}b=new Cc;n=new P;n.b=D(16);I(n,n.a,B(81));O(n,n.a,
e,10);q=new N;h=n.b;d=n.a;Q();p=D(d);q.e=p;M(h,0,p,0,d);b.c=1;b.d=1;b.f=q;H(b);}
function Ek(b){var c,d;if(BU(b,BI))return 64;c=0;d=Bi(b,32);if(AJA(d,BI))c=32;else d=b;b=Bi(d,16);if(BU(b,BI))b=d;else c=c|16;d=Bi(b,8);if(BU(d,BI))d=b;else c=c|8;b=Bi(d,4);if(BU(b,BI))b=d;else c=c|4;d=Bi(b,2);if(BU(d,BI))d=b;else c=c|2;if(AJA(Bi(d,1),BI))c=c|1;return (64-c|0)-1|0;}
function DR(b,c){return Long_udiv(b, c);}
function AAh(b,c){return Long_urem(b, c);}
function D_(b,c){return Long_ucompare(b, c);}
function AS3(){A41=L($rt_longcls());}
var AC4=G();
function AJh(){return {};}
var Me=G(0);
function Iq(){var a=this;C.call(a);a.l=null;a.gY=0;a.gr=0;a.cZ=0;a.zO=0;a.DG=0;a.ek=0;a.g8=0;a.b9=null;a.cV=null;a.dX=null;a.E0=null;a.Aa=null;a.eR=null;a.ds=null;a.d6=0;a.ky=null;a.g3=null;a.jQ=null;a.kG=null;a.C7=null;}
function A3P(a){var b=new Iq();R_(b,a);return b;}
function R_(a,b){a.gY=1;a.gr=1;a.cZ=1;a.zO=1;a.DG=1;a.ek=1;a.g8=1;a.b9=Dp(51,0.800000011920929);a.cV=Dp(51,0.800000011920929);a.dX=Dp(51,0.800000011920929);a.E0=Dp(51,0.800000011920929);a.Aa=Dp(51,0.800000011920929);a.eR=Dp(51,0.800000011920929);a.ds=Dp(51,0.800000011920929);a.d6=0;a.ky=new $rt_globals.Float32Array(40000);a.g3=new $rt_globals.Int32Array(12000);a.jQ=new $rt_globals.Int16Array(12000);a.kG=new $rt_globals.Int8Array(12000);a.C7=new $rt_globals.Uint8Array(240000);a.l=b;b.pixelStorei(37441,0);}
function Li(a,b){var c,d,e,f,g;if(A$4){c=(!Dk(b,Ey)?null:b.gm.U.data).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Float32Array(c,d,e);}if((b.g-b.h|0)>a.ky.length)a.ky=new $rt_globals.Float32Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.ky;g=Ox(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.ky;e=f-b.h|0;return c.subarray(0,e);}
function OH(a,b){var c,d,e,f,g;if(A$4){c=(!Dk(b,Ey)?null:b.gh.U.data).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Int16Array(c,d,e);}if((b.g-b.h|0)>a.jQ.length)a.jQ=new $rt_globals.Int16Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.jQ;g=AEA(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.jQ;e=f-b.h|0;return c.subarray(0,e);}
function Tn(a,b){var c,d,e,f,g;if(A$4){c=(!Dk(b,Ey)?null:b.nd()).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Int32Array(c,d,e);}if((b.g-b.h|0)>a.g3.length)a.g3=new $rt_globals.Int32Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.g3;g=b.lE(e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.g3;e=f-b.h|0;return c.subarray(0,e);}
function Mg(a,b){var c,d,e,f,g;if(A$4)return !Dk(b,Ey)?null:b.U.data;if((b.g-b.h|0)>a.kG.length)a.kG=new $rt_globals.Int8Array(b.g-b.h|0);c=b.h;d=0;while(true){e=b.g;if(c>=e)break;f=a.kG;g=TI(b,c);d;f[d]=g;c=c+1|0;d=d+1|0;}f=a.kG;c=e-b.h|0;return f.subarray(0,c);}
function AOU(a,b){if((b.g-b.h|0)>a.g3.length)a.g3=new $rt_globals.Int32Array(b.g-b.h|0);}
function AGS(a,b){var c,d,e,f,g;c=a.ds;d=a.d6;if(!d)c=!c.O?null:c.M;else{e=c.K;f=R(Bi(Bf(S(d),F(2135587861, 2654435769)),c.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.N;}}c=f<0?null:c.L.data[f];}c=c;if(!b)c=!c.O?null:c.M;else{e=c.K;d=R(Bi(Bf(S(b),F(2135587861, 2654435769)),c.P));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.N;}}c=d<0?null:c.L.data[d];}BB();return c===null?null:c.Q;}
function AKL(a,b){a.l.activeTexture(b);}
function AKh(a,b,c){var d,e,f,g,h,i;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();h=d===null?null:d.Q;d=a.cV;if(!c)d=!d.O?null:d.M;else{e=d.K;b=R(Bi(Bf(S(c),F(2135587861, 2654435769)),d.P));b:{while(true){g=e.data[b];if(!g){b= -(b+1|0)|0;break b;}if(g==c)break;b=(b+1|0)&d.N;}}d=b<0?null:d.L.data[b];}i=d===null?null:d.Q;a.l.attachShader(h,i);}
function AO$(a,b,c){var d,e,f,g,h;d=a.l;e=a.dX;if(!c)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(c),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.bindBuffer(b,e);}
function ARv(a,b,c){var d,e,f,g,h;d=a.l;e=a.eR;if(!c)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(c),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.bindTexture(b,e);}
function AU6(a,b){a.l.blendEquation(b);}
function ALk(a,b,c){a.l.blendFunc(b,c);}
function ASM(a,b,c,d,e){a.l.blendFuncSeparate(b,c,d,e);}
function N8(a,b,c,d,e){var f,g;if(d instanceof En){f=a.l;d=Li(a,d);f.bufferData(b,d,e);}else if(d instanceof HP){f=a.l;d=Tn(a,d);f.bufferData(b,d,e);}else if(d instanceof HS){f=a.l;d=OH(a,d);f.bufferData(b,d,e);}else if(d instanceof Fx){f=a.l;g=Mg(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Bb;f.c=1;f.d=1;f.f=B(133);H(f);}a.l.bufferData(b,c,e);}}
function Rl(a,b,c,d,e){var f,g;if(e instanceof En){f=a.l;e=Li(a,e);f.bufferSubData(b,c,e);}else if(e instanceof HP){f=a.l;g=Tn(a,e);f.bufferSubData(b,c,g);}else if(e instanceof HS){f=a.l;e=OH(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof Fx)){f=new Bb;f.c=1;f.d=1;f.f=B(133);H(f);}f=a.l;e=Mg(a,e);f.bufferSubData(b,c,e);}}
function AWD(a,b){a.l.clear(b);}
function AIt(a,b,c,d,e){a.l.clearColor(b,c,d,e);}
function AKK(a,b){var c,d,e,f;c=a.cV;if(!b)c=!c.O?null:c.M;else{d=c.K;e=R(Bi(Bf(S(b),F(2135587861, 2654435769)),c.P));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.N;}}c=e<0?null:c.L.data[e];}BB();c=c===null?null:c.Q;a.l.compileShader(c);}
function APs(a){var b,c;b=a.l.createProgram();c=a.gY;a.gY=c+1|0;B$(a.b9,c,Cb(b));return c;}
function AM7(a,b){var c,d;c=a.l.createShader(b);d=a.gr;a.gr=d+1|0;B$(a.cV,d,Cb(c));return d;}
function AOe(a,b){a.l.depthMask(!!b);}
function AMZ(a,b){a.l.disable(b);}
function AUH(a,b){a.l.disableVertexAttribArray(b);}
function AIO(a,b,c,d){a.l.drawArrays(b,c,d);}
function AK$(a,b,c,d,e){var f,g;f=a.l;g=e.h;f.drawElements(b,c,d,g);}
function AMe(a,b,c,d,e){a.l.drawElements(b,c,d,e);}
function AO1(a,b){a.l.enable(b);}
function AWV(a,b){a.l.enableVertexAttribArray(b);}
function AN7(a){a.l.flush();}
function ACx(a){var b,c;b=a.l.createBuffer();c=a.cZ;a.cZ=c+1|0;B$(a.dX,c,Cb(b));return c;}
function AGQ(a,b){a.l.generateMipmap(b);}
function AO7(a){var b,c;b=a.l.createTexture();c=a.ek;a.ek=c+1|0;B$(a.eR,c,Cb(b));return c;}
function Qw(a,b,c,d,e){var f,g,h,i,j;f=a.l;g=a.b9;if(!b)g=!g.O?null:g.M;else{h=g.K;i=R(Bi(Bf(S(b),F(2135587861, 2654435769)),g.P));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.N;}}g=i<0?null:g.L.data[i];}BB();g=g===null?null:g.Q;g=f.getActiveAttrib(g,c);EA(d,g.size);EA(e,g.type);d.h=0;d.g=d.y;d.v=(-1);e.h=0;e.g=e.y;e.v=(-1);return $rt_str(g.name);}
function RL(a,b,c,d,e){var f,g,h,i,j;f=a.l;g=a.b9;if(!b)g=!g.O?null:g.M;else{h=g.K;i=R(Bi(Bf(S(b),F(2135587861, 2654435769)),g.P));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.N;}}g=i<0?null:g.L.data[i];}BB();g=g===null?null:g.Q;g=f.getActiveUniform(g,c);EA(d,g.size);EA(e,g.type);d.h=0;d.g=d.y;d.v=(-1);e.h=0;e.g=e.y;e.v=(-1);return $rt_str(g.name);}
function ASk(a,b,c){var d,e,f,g,h;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();h=d===null?null:d.Q;return a.l.getAttribLocation(h,$rt_ustr(c));}
function KI(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new Bb;c.c=1;c.d=1;c.f=B(134);H(c);}MO(c,0,a.l.getParameter(b));c.h=0;c.g=c.y;c.v=(-1);}
function APp(a,b){var c,d,e,f,g;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;return $rt_str(c.getProgramInfoLog(d));}
function R8(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.l;f=a.b9;if(!b)f=!f.O?null:f.M;else{g=f.K;h=R(Bi(Bf(S(b),F(2135587861, 2654435769)),f.P));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.N;}}f=h<0?null:f.L.data[h];}BB();f=f===null?null:f.Q;EA(d,e.getProgramParameter(f,c));}else{f=a.l;e=a.b9;if(!b)e=!e.O?null:e.M;else{g=e.K;i=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e.P));b:{while(true){h=g.data[i];if(!h){i= -(i+1|0)|0;break b;}if(h==b)break;i=(i+1|0)&
e.N;}}e=i<0?null:e.L.data[i];}BB();e=e===null?null:e.Q;EA(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.h=0;d.g=d.y;d.v=(-1);}
function ALr(a,b){var c,d,e,f,g;c=a.l;d=a.cV;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;return $rt_str(c.getShaderInfoLog(d));}
function NR(a,b,c,d){var e,f,g,h,i;if(c!=35713&&c!=35712){e=a.l;f=a.cV;if(!b)f=!f.O?null:f.M;else{g=f.K;h=R(Bi(Bf(S(b),F(2135587861, 2654435769)),f.P));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.N;}}f=h<0?null:f.L.data[h];}BB();f=f===null?null:f.Q;EA(d,e.getShaderParameter(f,c));}else{f=a.l;e=a.cV;if(!b)e=!e.O?null:e.M;else{g=e.K;h=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e.P));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h=(h+1|0)&e.N;}}e=h<0
?null:e.L.data[h];}BB();e=e===null?null:e.Q;EA(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.h=0;d.g=d.y;d.v=(-1);}
function AJU(a,b){return $rt_str(a.l.getParameter(b));}
function ASB(a,b,c){var d,e,f,g,h,i;d=a.l;e=a.b9;if(!b)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d=d.getUniformLocation(e,$rt_ustr(c));if(d===null)return (-1);c=a.ds;if(!b)c=!c.O?null:c.M;else{i=c.K;h=R(Bi(Bf(S(b),F(2135587861, 2654435769)),c.P));b:{while(true){g=i.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&c.N;}}c=h<0?null
:c.L.data[h];}c=c;if(c===null){c=Dp(51,0.800000011920929);B$(a.ds,b,c);}h=a.g8;a.g8=h+1|0;B$(c,h,Cb(d));return h;}
function AUx(a,b){return a.l.isEnabled(b)?1:0;}
function AQS(a,b){var c,d,e,f,g;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c.linkProgram(d);}
function AIN(a,b,c){a.l.pixelStorei(b,c);}
function AQ8(a,b,c,d,e){a.l.scissor(b,c,d,e);}
function APX(a,b,c){var d,e,f,g,h;d=a.l;e=a.cV;if(!b)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.shaderSource(e,$rt_ustr(c));}
function Si(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;if(j===null){j=a.l;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.g>4){if(!A$4)l=!(j instanceof En)?$rt_globals.Uint8Array.from(Mg(a,j)):Li(a,j);else{m=!Dk(j,Ey)?null:j.U.data;if(!(j instanceof En)){n=j.g-j.h|0;o=m.byteOffset+j.h|0;l=new $rt_globals.Uint8Array(m.buffer,o,n);}else{n=j.g-j.h|0;o=m.byteOffset+j.h|0;l=new $rt_globals.Float32Array(m.buffer,o,n);}}a.l.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=AFl(j,0);IU();j=A$d;if(!p)j=!j.O?null:j.M;else{q=j.K;n
=R(Bi(Bf(S(p),F(2135587861, 2654435769)),j.P));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.N;}}j=n<0?null:j.L.data[n];}k=j;r=k.fk;if(r===null&&k.bD!==null?1:0){j=a.l;s=k.bD.kA;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.hB!==null?1:0){j=a.l;s=k.hB;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.i7!==null?1:0){j=a.l;s=k.i7;j.texImage2D(b,c,d,h,i,s);}else{j=a.l;FE(k);s=k.fk;j.texImage2D(b,c,d,h,i,s);}}}
function ALU(a,b,c,d){a.l.texParameterf(b,c,d);}
function AMK(a,b,c,d){var e,f;e=a.l;f=d;e.texParameterf(b,c,f);}
function AMY(a,b,c){var d,e,f,g,h,i;d=a.ds;e=a.d6;if(!e)d=!d.O?null:d.M;else{f=d.K;g=R(Bi(Bf(S(e),F(2135587861, 2654435769)),d.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.N;}}d=g<0?null:d.L.data[g];}d=d;if(!b)d=!d.O?null:d.M;else{f=d.K;g=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.N;}}d=g<0?null:d.L.data[g];}BB();i=d===null?null:d.Q;a.l.uniform1i(i,c);}
function ASE(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;g=a.ds;f=a.d6;if(!f)g=!g.O?null:g.M;else{h=g.K;i=R(Bi(Bf(S(f),F(2135587861, 2654435769)),g.P));a:{while(true){c=h.data[i];if(!c){i= -(i+1|0)|0;break a;}if(c==f)break;i=(i+1|0)&g.N;}}g=i<0?null:g.L.data[i];}g=g;if(!b)g=!g.O?null:g.M;else{h=g.K;c=R(Bi(Bf(S(b),F(2135587861, 2654435769)),g.P));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.N;}}g=c<0?null:g.L.data[c];}BB();j=g===null?null:g.Q;g=a.l;k="uniformMatrix4fv";l=!!d;if(e===
null)m=null;else{e=e.data;b=e.length;m=new $rt_globals.Array(b);c=0;while(c<b){n=e[c];c;m[c]=n;c=c+1|0;}}g[k](j,l,m);}
function AHI(a,b){var c,d,e,f,g;a.d6=b;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c.useProgram(d);}
function AT0(a,b,c,d,e,f,g){a.l.vertexAttribPointer(b,c,d,!!e,f,g);}
function AP8(a,b,c,d,e){a.l.viewport(b,c,d,e);}
var RS=G(0);
function MQ(){var a=this;Iq.call(a);a.R=null;a.Cg=null;a.FP=0;a.Dd=null;a.zX=0;a.Em=null;a.CR=0;a.ju=null;a.jl=0;a.Fj=null;}
function A32(a){var b=new MQ();ZN(b,a);return b;}
function ZN(a,b){R_(a,b);a.Cg=Dp(51,0.800000011920929);a.FP=1;a.Dd=Dp(51,0.800000011920929);a.zX=1;a.Em=Dp(51,0.800000011920929);a.CR=1;a.ju=Dp(51,0.800000011920929);a.jl=1;a.Fj=new $rt_globals.Uint32Array(12000);a.R=b;}
function ASQ(a,b){var c,d,e,f,g;c=a.R;d=a.ju;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c.bindVertexArray(d);}
function AUA(a,b,c,d,e){a.R.drawArraysInstanced(b,c,d,e);}
function AX6(a,b,c,d,e,f){a.R.drawElementsInstanced(b,c,d,e,f);}
function AUU(a,b,c){var d,e,f,g;d=c.h;e=0;while(e<b){f=a.R.createVertexArray();g=a.jl;a.jl=g+1|0;B$(a.ju,g,Cb(f));EA(c,g);e=e+1|0;}BS(c,d);}
function ATB(a,b,c){if(b!=34045)KI(a,b,c);else{MO(c,0,a.R.getParameter(b));c.h=0;c.g=c.y;c.v=(-1);}}
var QB=G(MQ);
function ASn(a,b){var c,d,e,f,g,h,i,j;c=a.R;d=a.ju;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c.bindVertexArray(d);b=a.R.getError();if(!b)return;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function ARd(a,b,c,d,e){var f,g,h,i,j,k;a.R.drawArraysInstanced(b,c,d,e);b=a.R.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AXw(a,b,c,d,e,f){var g,h,i,j,k,l;a.R.drawElementsInstanced(b,c,d,e,f);b=a.R.getError();if(!b)return;g=new Bb;h=Bk(b,4);i=new P;i.b=D(16);I(i,i.a,B(135));O(i,i.a,b,10);I(i,i.a,B(58));b=i.a;if(h===null)h=B(2);I(i,b,h);j=new N;k=i.b;c=i.a;Q();l=D(c);j.e=l;M(k,0,l,0,c);g.c=1;g.d=1;g.f=j;H(g);}
function AHC(a,b,c){var d,e,f,g,h,i,j,k;d=c.h;e=0;while(e<b){f=a.R.createVertexArray();g=a.jl;a.jl=g+1|0;B$(a.ju,g,Cb(f));EA(c,g);e=e+1|0;}BS(c,d);b=a.R.getError();if(!b)return;c=new Bb;h=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(h===null)h=B(2);I(f,b,h);i=new N;j=f.b;e=f.a;Q();k=D(e);i.e=k;M(j,0,k,0,e);c.c=1;c.d=1;c.f=i;H(c);}
function AQD(a,b){var c,d,e,f,g,h,i;a.l.activeTexture(b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AHX(a,b,c){var d,e,f,g,h,i,j,k;d=a.l;e=a.eR;if(!c)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(c),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.bindTexture(b,e);b=a.R.getError();if(!b)return;d=new Bb;i=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(i===null)i=B(2);I(e,b,i);j=new N;f=e.b;c=e.a;Q();k=D(c);j.e=k;M(f,0,k,0,c);d.c=1;d.d=1;d.f=j;H(d);}
function AOr(a,b,c){var d,e,f,g,h,i;a.l.blendFunc(b,c);b=a.R.getError();if(!b)return;d=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AOg(a,b){var c,d,e,f,g,h,i;a.l.clear(b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function ALX(a,b,c,d,e){var f,g,h,i,j,k,l,m;a.l.clearColor(b,c,d,e);f=a.R.getError();if(!f)return;g=new Bb;h=Bk(f,4);i=new P;i.b=D(16);I(i,i.a,B(135));O(i,i.a,f,10);I(i,i.a,B(58));f=i.a;if(h===null)h=B(2);I(i,f,h);j=new N;k=i.b;l=i.a;Q();m=D(l);j.e=m;M(k,0,m,0,l);g.c=1;g.d=1;g.f=j;H(g);}
function AQN(a,b){var c,d,e,f,g,h,i;a.l.depthMask(!!b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AWX(a,b){var c,d,e,f,g,h,i;a.l.disable(b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function ASa(a,b,c,d){var e,f,g,h,i,j;a.l.drawArrays(b,c,d);b=a.R.getError();if(!b)return;e=new Bb;f=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new N;i=g.b;c=g.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AVs(a,b,c,d,e){var f,g,h,i,j,k;f=a.l;g=e.h;f.drawElements(b,c,d,g);b=a.R.getError();if(!b)return;e=new Bb;h=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(h===null)h=B(2);I(f,b,h);i=new N;j=f.b;c=f.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);e.c=1;e.d=1;e.f=i;H(e);}
function AV2(a,b){var c,d,e,f,g,h,i;a.l.enable(b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AVc(a){var b,c,d,e,f,g,h,i;a.l.flush();b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function APQ(a,b){return $rt_str(a.l.getParameter(b));}
function AQn(a,b,c){var d,e,f,g,h,i;a.l.pixelStorei(b,c);b=a.R.getError();if(!b)return;d=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AT6(a,b,c,d,e){var f,g,h,i,j,k;a.l.scissor(b,c,d,e);b=a.R.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AUm(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o;Si(a,b,c,d,e,f,g,h,i,j);b=a.R.getError();if(!b)return;j=new Bb;k=Bk(b,4);l=new P;l.b=D(16);I(l,l.a,B(135));O(l,l.a,b,10);I(l,l.a,B(58));b=l.a;if(k===null)k=B(2);I(l,b,k);m=new N;n=l.b;c=l.a;Q();o=D(c);m.e=o;M(n,0,o,0,c);j.c=1;j.d=1;j.f=m;H(j);}
function AR7(a,b,c,d){var e,f,g,h,i,j;a.l.texParameterf(b,c,d);b=a.R.getError();if(!b)return;e=new Bb;f=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new N;i=g.b;c=g.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AJ4(a,b,c,d,e){var f,g,h,i,j,k;a.l.viewport(b,c,d,e);b=a.R.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function ATQ(a,b,c){var d,e,f,g,h,i,j,k;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();h=d===null?null:d.Q;d=a.cV;if(!c)d=!d.O?null:d.M;else{e=d.K;b=R(Bi(Bf(S(c),F(2135587861, 2654435769)),d.P));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.N;}}d=b<0?null:d.L.data[b];}i=d===null?null:d.Q;a.l.attachShader(h,i);b=a.R.getError();if
(!b)return;d=new Bb;j=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(j===null)j=B(2);I(h,b,j);i=new N;e=h.b;c=h.a;Q();k=D(c);i.e=k;M(e,0,k,0,c);d.c=1;d.d=1;d.f=i;H(d);}
function AOS(a,b,c){var d,e,f,g,h,i,j,k;d=a.l;e=a.dX;if(!c)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(c),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.bindBuffer(b,e);b=a.R.getError();if(!b)return;d=new Bb;i=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(i===null)i=B(2);I(e,b,i);j=new N;f=e.b;c=e.a;Q();k=D(c);j.e=k;M(f,0,k,0,c);d.c=1;d.d=1;d.f=j;H(d);}
function AGR(a,b){var c,d,e,f,g,h,i;a.l.blendEquation(b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AJx(a,b,c,d,e){var f,g,h,i,j,k;a.l.blendFuncSeparate(b,c,d,e);b=a.R.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AL5(a,b,c,d,e){var f,g,h,i,j;N8(a,b,c,d,e);b=a.R.getError();if(!b)return;d=new Bb;f=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new N;i=g.b;c=g.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);d.c=1;d.d=1;d.f=h;H(d);}
function AOQ(a,b,c,d,e){var f,g,h,i,j;Rl(a,b,c,d,e);b=a.R.getError();if(!b)return;e=new Bb;f=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new N;i=g.b;c=g.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AMt(a,b){var c,d,e,f,g,h,i,j;c=a.cV;if(!b)c=!c.O?null:c.M;else{d=c.K;e=R(Bi(Bf(S(b),F(2135587861, 2654435769)),c.P));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.N;}}c=e<0?null:c.L.data[e];}BB();g=c===null?null:c.Q;a.l.compileShader(g);b=a.R.getError();if(!b)return;c=new Bb;h=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(h===null)h=B(2);I(g,b,h);i=new N;d=g.b;e=g.a;Q();j=D(e);i.e=j;M(d,0,j,0,e);c.c=1;c.d=1;c.f=i;H(c);}
function AXW(a){var b,c,d,e,f,g,h,i;b=a.l.createProgram();c=a.gY;a.gY=c+1|0;B$(a.b9,c,Cb(b));d=a.R.getError();if(!d)return c;b=new Bb;e=Bk(d,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,d,10);I(f,f.a,B(58));d=f.a;if(e===null)e=B(2);I(f,d,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);b.c=1;b.d=1;b.f=g;H(b);}
function AVC(a,b){var c,d,e,f,g,h,i;c=a.l.createShader(b);d=a.gr;a.gr=d+1|0;B$(a.cV,d,Cb(c));b=a.R.getError();if(!b)return d;c=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;d=f.a;Q();i=D(d);g.e=i;M(h,0,i,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function APm(a,b){var c,d,e,f,g,h,i;a.l.disableVertexAttribArray(b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AQ2(a,b,c,d,e){var f,g,h,i,j,k;a.l.drawElements(b,c,d,e);b=a.R.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AVE(a,b){var c,d,e,f,g,h,i;a.l.enableVertexAttribArray(b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AWI(a,b){var c,d,e,f,g,h,i;a.l.generateMipmap(b);b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AKF(a,b,c,d,e){var f,g,h,i;f=Qw(a,b,c,d,e);b=a.R.getError();if(!b)return f;d=new Bb;g=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(g===null)g=B(2);I(e,b,g);f=new N;h=e.b;c=e.a;Q();i=D(c);f.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function AOf(a,b,c,d,e){var f,g,h,i;f=RL(a,b,c,d,e);b=a.R.getError();if(!b)return f;d=new Bb;g=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(g===null)g=B(2);I(e,b,g);f=new N;h=e.b;c=e.a;Q();i=D(c);f.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function AUq(a,b,c){var d,e,f,g,h,i,j;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();h=d===null?null:d.Q;b=a.l.getAttribLocation(h,$rt_ustr(c));f=a.R.getError();if(!f)return b;c=new Bb;i=Bk(f,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,f,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);h=new N;e=d.b;f=d.a;Q();j=D(f);h.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f
=h;H(c);}
function AJD(a,b,c){var d,e,f,g,h,i;if(b!=34045)KI(a,b,c);else{MO(c,0,a.R.getParameter(b));c.h=0;c.g=c.y;c.v=(-1);}b=a.R.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AIy(a,b,c,d){var e,f,g,h,i;R8(a,b,c,d);b=a.R.getError();if(!b)return;d=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AHa(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c=$rt_str(c.getProgramInfoLog(d));b=a.R.getError();if(!b)return c;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;H(c);}
function AXV(a,b,c,d){var e,f,g,h,i;NR(a,b,c,d);b=a.R.getError();if(!b)return;d=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AQH(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.cV;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c=$rt_str(c.getShaderInfoLog(d));b=a.R.getError();if(!b)return c;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;H(c);}
function AHb(a,b,c){var d,e,f,g,h,i,j;d=a.l;e=a.b9;if(!b)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;c=d.getUniformLocation(e,$rt_ustr(c));if(c===null)h=(-1);else{d=a.ds;if(!b)d=!d.O?null:d.M;else{f=d.K;h=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&d.N;}}d=h<0?null
:d.L.data[h];}d=d;if(d===null){d=Dp(51,0.800000011920929);B$(a.ds,b,d);}h=a.g8;a.g8=h+1|0;B$(d,h,Cb(c));}b=a.R.getError();if(!b)return h;c=new Bb;i=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);e=new N;f=d.b;h=d.a;Q();j=D(h);e.e=j;M(f,0,j,0,h);c.c=1;c.d=1;c.f=e;H(c);}
function AW8(a,b){var c,d,e,f,g,h,i;b=a.l.isEnabled(b)?1:0;c=a.R.getError();if(!c)return b;d=new Bb;e=Bk(c,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,c,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AXr(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c.linkProgram(d);b=a.R.getError();if(!b)return;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function AQl(a,b,c){var d,e,f,g,h,i,j;d=a.l;e=a.cV;if(!b)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.shaderSource(e,$rt_ustr(c));b=a.R.getError();if(!b)return;c=new Bb;i=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);e=new N;f=d.b;g=d.a;Q();j=D(g);e.e=j;M(f,0,j,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function AHH(a,b,c,d){var e,f,g,h,i,j,k;e=a.l;f=d;e.texParameterf(b,c,f);b=a.R.getError();if(!b)return;e=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);e.c=1;e.d=1;e.f=i;H(e);}
function AH7(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.ds;e=a.d6;if(!e)d=!d.O?null:d.M;else{f=d.K;g=R(Bi(Bf(S(e),F(2135587861, 2654435769)),d.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.N;}}d=g<0?null:d.L.data[g];}d=d;if(!b)d=!d.O?null:d.M;else{f=d.K;e=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));b:{while(true){h=f.data[e];if(!h){e= -(e+1|0)|0;break b;}if(h==b)break;e=(e+1|0)&d.N;}}d=e<0?null:d.L.data[e];}BB();i=d===null?null:d.Q;a.l.uniform1i(i,c);b=a.R.getError();if(!b)return;d
=new Bb;i=Bk(b,4);j=new P;j.b=D(16);I(j,j.a,B(135));O(j,j.a,b,10);I(j,j.a,B(58));b=j.a;if(i===null)i=B(2);I(j,b,i);k=new N;f=j.b;c=j.a;Q();l=D(c);k.e=l;M(f,0,l,0,c);d.c=1;d.d=1;d.f=k;H(d);}
function AX_(a,b){var c,d,e,f,g,h,i,j;a.d6=b;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c.useProgram(d);b=a.R.getError();if(!b)return;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function AVQ(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.l.vertexAttribPointer(b,c,d,!!e,f,g);b=a.R.getError();if(!b)return;h=new Bb;i=Bk(b,4);j=new P;j.b=D(16);I(j,j.a,B(135));O(j,j.a,b,10);I(j,j.a,B(58));b=j.a;if(i===null)i=B(2);I(j,b,i);k=new N;l=j.b;c=j.a;Q();m=D(c);k.e=m;M(l,0,m,0,c);h.c=1;h.d=1;h.f=k;H(h);}
function N3(){var a=this;C.call(a);a.q3=0;a.oo=0;a.oA=0;a.CY=null;a.Eo=null;a.gS=null;a.y1=B(136);}
function A_p(a,b,c,d){var e=new N3();WF(e,a,b,c,d);return e;}
function WF(a,b,c,d,e){a.y1=B(136);Lp();if(b===A_q){Gg();a.gS=A_r;}else if(b===A_s){Gg();a.gS=A_r;}else if(b===A_t){Gg();a.gS=A_u;}else if(b===A_v){Gg();a.gS=A_u;}else if(b!==A_n){Gg();a.gS=A_w;}else{Gg();a.gS=A_x;}b=a.gS;Gg();if(b===A_r)LZ(a,B(137),c);else if(b===A_x)LZ(a,B(138),c);else if(b===A_u)LZ(a,B(139),c);else{a.q3=(-1);a.oo=(-1);a.oA=(-1);d=B(42);e=B(42);}a.CY=d;a.Eo=e;}
function LZ(a,b,c){var d,e,f,g,h,i,j,k,l;d=N9(GE(b,0),c);if(Ha(d)){b=d.dB;e=b.dA;if(!e){b=new BK;b.c=1;b.d=1;CE(b);H(b);}f=Bo(1,b.ec);if(f>=0){b=new Y;Q();c=new P;CO(c);c.b=D(16);O(c,c.a,1,10);g=new N;h=c.b;i=c.a;j=D(i);g.e=j;M(h,0,j,0,i);b.c=1;b.d=1;b.f=g;H(b);}h=b.bR.data;if(h[2]<0)g=null;else{c=b.gD;if(!e){b=new BK;b.c=1;b.d=1;CE(b);H(b);}if(f>=0){b=new Y;Q();c=new P;CO(c);c.b=D(16);O(c,c.a,1,10);Tp(b,Cy(c));H(b);}g=FI(c,h[2],WG(b,1));}h=(AC$(g,B(140))).data;a.q3=LU(a,h[0],2);k=h.length;a.oo=k<2?0:LU(a,h[1],
0);a.oA=k<3?0:LU(a,h[2],0);}else{g=A9u;b=new P;b.b=D(16);I(b,b.a,B(141));I(b,b.a,c);l=new N;h=b.b;i=b.a;Q();j=D(i);l.e=j;M(h,0,j,0,i);if(g.iF>=2){if(A_a===null){c=new Ct;c.cf=A5j;b=new P;b.b=D(16);c.bc=b;c.b$=D(32);c.ck=0;Cr();c.cg=A$H;A_a=c;}g=A_a;b=new P;b.b=D(16);I(b,b.a,B(136));I(b,b.a,B(71));I(b,b.a,l);c=new N;h=b.b;i=b.a;j=D(i);c.e=j;M(h,0,j,0,i);b=g.bc;I(b,b.a,c);i=b.a;Bd(b,i,i+1|0);b.b.data[i]=10;Co(g);}a.q3=2;a.oo=0;a.oA=0;}}
function LU(a,b,c){var d,e,f,g,h,i,j,$$je;a:{try{d=Cz(b);}catch($$e){$$je=Br($$e);if($$je instanceof Cc){break a;}else{throw $$e;}}return d;}e=A9u;f=new P;f.b=D(16);I(f,f.a,B(142));I(f,f.a,b);I(f,f.a,B(143));O(f,f.a,c,10);b=new N;g=f.b;h=f.a;Q();i=D(h);b.e=i;M(g,0,i,0,h);if(e.iF>=1){if(A$G===null){e=new Ct;e.cf=A5k;f=new P;f.b=D(16);e.bc=f;e.b$=D(32);e.ck=0;Cr();e.cg=A$H;A$G=e;}e=A$G;f=new P;f.b=D(16);I(f,f.a,B(144));I(f,f.a,B(71));I(f,f.a,b);b=new N;i=f.b;h=f.a;g=D(h);b.e=g;M(i,0,g,0,h);j=e.bc;I(j,j.a,b);h
=j.a;Bd(j,h,h+1|0);j.b.data[h]=10;Co(e);}return c;}
var C_=G(BG);
var A_q=null;var A_t=null;var A_y=null;var A_v=null;var A_n=null;var A_s=null;var A_z=null;function Lp(){Lp=V(C_);ARN();}
function ARN(){var b,c,d,e,f,g;b=new C_;Lp();b.t=B(4);b.q=0;A_q=b;c=new C_;c.t=B(145);c.q=1;A_t=c;d=new C_;d.t=B(146);d.q=2;A_y=d;e=new C_;e.t=B(147);e.q=3;A_v=e;f=new C_;f.t=B(148);f.q=4;A_n=f;g=new C_;g.t=B(149);g.q=5;A_s=g;A_z=T(C_,[b,c,d,e,f,g]);}
var SF=G(0);
function Sx(){C.call(this);this.zi=null;}
function AR8(a){}
var Tk=G(Iq);
function AN2(a,b){var c,d,e,f,g,h,i;a.l.activeTexture(b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AXG(a,b,c){var d,e,f,g,h,i,j,k;d=a.l;e=a.eR;if(!c)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(c),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.bindTexture(b,e);b=a.l.getError();if(!b)return;d=new Bb;i=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(i===null)i=B(2);I(e,b,i);j=new N;f=e.b;c=e.a;Q();k=D(c);j.e=k;M(f,0,k,0,c);d.c=1;d.d=1;d.f=j;H(d);}
function ANj(a,b,c){var d,e,f,g,h,i;a.l.blendFunc(b,c);b=a.l.getError();if(!b)return;d=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function ARF(a,b){var c,d,e,f,g,h,i;a.l.clear(b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AI4(a,b,c,d,e){var f,g,h,i,j,k,l,m;a.l.clearColor(b,c,d,e);f=a.l.getError();if(!f)return;g=new Bb;h=Bk(f,4);i=new P;i.b=D(16);I(i,i.a,B(135));O(i,i.a,f,10);I(i,i.a,B(58));f=i.a;if(h===null)h=B(2);I(i,f,h);j=new N;k=i.b;l=i.a;Q();m=D(l);j.e=m;M(k,0,m,0,l);g.c=1;g.d=1;g.f=j;H(g);}
function AL4(a,b){var c,d,e,f,g,h,i;a.l.depthMask(!!b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AXZ(a,b){var c,d,e,f,g,h,i;a.l.disable(b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AKJ(a,b,c,d){var e,f,g,h,i,j;a.l.drawArrays(b,c,d);b=a.l.getError();if(!b)return;e=new Bb;f=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new N;i=g.b;c=g.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function APh(a,b,c,d,e){var f,g,h,i,j,k;f=a.l;g=e.h;f.drawElements(b,c,d,g);b=a.l.getError();if(!b)return;e=new Bb;h=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(h===null)h=B(2);I(f,b,h);i=new N;j=f.b;c=f.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);e.c=1;e.d=1;e.f=i;H(e);}
function AHO(a,b){var c,d,e,f,g,h,i;a.l.enable(b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AJZ(a){var b,c,d,e,f,g,h,i;a.l.flush();b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function ALn(a,b){return $rt_str(a.l.getParameter(b));}
function AMw(a,b,c){var d,e,f,g,h,i;a.l.pixelStorei(b,c);b=a.l.getError();if(!b)return;d=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AOo(a,b,c,d,e){var f,g,h,i,j,k;a.l.scissor(b,c,d,e);b=a.l.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AJG(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o;Si(a,b,c,d,e,f,g,h,i,j);b=a.l.getError();if(!b)return;j=new Bb;k=Bk(b,4);l=new P;l.b=D(16);I(l,l.a,B(135));O(l,l.a,b,10);I(l,l.a,B(58));b=l.a;if(k===null)k=B(2);I(l,b,k);m=new N;n=l.b;c=l.a;Q();o=D(c);m.e=o;M(n,0,o,0,c);j.c=1;j.d=1;j.f=m;H(j);}
function ASd(a,b,c,d){var e,f,g,h,i,j;a.l.texParameterf(b,c,d);b=a.l.getError();if(!b)return;e=new Bb;f=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new N;i=g.b;c=g.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function AXT(a,b,c,d,e){var f,g,h,i,j,k;a.l.viewport(b,c,d,e);b=a.l.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AG$(a,b,c){var d,e,f,g,h,i,j,k;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();h=d===null?null:d.Q;d=a.cV;if(!c)d=!d.O?null:d.M;else{e=d.K;b=R(Bi(Bf(S(c),F(2135587861, 2654435769)),d.P));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.N;}}d=b<0?null:d.L.data[b];}i=d===null?null:d.Q;a.l.attachShader(h,i);b=a.l.getError();if
(!b)return;d=new Bb;j=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(j===null)j=B(2);I(h,b,j);i=new N;e=h.b;c=h.a;Q();k=D(c);i.e=k;M(e,0,k,0,c);d.c=1;d.d=1;d.f=i;H(d);}
function AGK(a,b,c){var d,e,f,g,h,i,j,k;d=a.l;e=a.dX;if(!c)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(c),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.bindBuffer(b,e);b=a.l.getError();if(!b)return;d=new Bb;i=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(i===null)i=B(2);I(e,b,i);j=new N;f=e.b;c=e.a;Q();k=D(c);j.e=k;M(f,0,k,0,c);d.c=1;d.d=1;d.f=j;H(d);}
function ASs(a,b){var c,d,e,f,g,h,i;a.l.blendEquation(b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AGH(a,b,c,d,e){var f,g,h,i,j,k;a.l.blendFuncSeparate(b,c,d,e);b=a.l.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function AK8(a,b,c,d,e){var f,g,h,i,j;N8(a,b,c,d,e);b=a.l.getError();if(!b)return;d=new Bb;f=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new N;i=g.b;c=g.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);d.c=1;d.d=1;d.f=h;H(d);}
function ASR(a,b,c,d,e){var f,g,h,i,j;Rl(a,b,c,d,e);b=a.l.getError();if(!b)return;e=new Bb;f=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(f===null)f=B(2);I(g,b,f);h=new N;i=g.b;c=g.a;Q();j=D(c);h.e=j;M(i,0,j,0,c);e.c=1;e.d=1;e.f=h;H(e);}
function APC(a,b){var c,d,e,f,g,h,i,j;c=a.cV;if(!b)c=!c.O?null:c.M;else{d=c.K;e=R(Bi(Bf(S(b),F(2135587861, 2654435769)),c.P));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.N;}}c=e<0?null:c.L.data[e];}BB();g=c===null?null:c.Q;a.l.compileShader(g);b=a.l.getError();if(!b)return;c=new Bb;h=Bk(b,4);g=new P;g.b=D(16);I(g,g.a,B(135));O(g,g.a,b,10);I(g,g.a,B(58));b=g.a;if(h===null)h=B(2);I(g,b,h);i=new N;d=g.b;e=g.a;Q();j=D(e);i.e=j;M(d,0,j,0,e);c.c=1;c.d=1;c.f=i;H(c);}
function AMF(a){var b,c,d,e,f,g,h,i;b=a.l.createProgram();c=a.gY;a.gY=c+1|0;B$(a.b9,c,Cb(b));d=a.l.getError();if(!d)return c;b=new Bb;e=Bk(d,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,d,10);I(f,f.a,B(58));d=f.a;if(e===null)e=B(2);I(f,d,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);b.c=1;b.d=1;b.f=g;H(b);}
function APv(a,b){var c,d,e,f,g,h,i;c=a.l.createShader(b);d=a.gr;a.gr=d+1|0;B$(a.cV,d,Cb(c));b=a.l.getError();if(!b)return d;c=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;d=f.a;Q();i=D(d);g.e=i;M(h,0,i,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function AME(a,b){var c,d,e,f,g,h,i;a.l.disableVertexAttribArray(b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function ASX(a,b,c,d,e){var f,g,h,i,j,k;a.l.drawElements(b,c,d,e);b=a.l.getError();if(!b)return;f=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);f.c=1;f.d=1;f.f=i;H(f);}
function APx(a,b){var c,d,e,f,g,h,i;a.l.enableVertexAttribArray(b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AUw(a,b){var c,d,e,f,g,h,i;a.l.generateMipmap(b);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function ATA(a,b,c,d,e){var f,g,h,i;f=Qw(a,b,c,d,e);b=a.l.getError();if(!b)return f;d=new Bb;g=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(g===null)g=B(2);I(e,b,g);f=new N;h=e.b;c=e.a;Q();i=D(c);f.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function AHZ(a,b,c,d,e){var f,g,h,i;f=RL(a,b,c,d,e);b=a.l.getError();if(!b)return f;d=new Bb;g=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(g===null)g=B(2);I(e,b,g);f=new N;h=e.b;c=e.a;Q();i=D(c);f.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=f;H(d);}
function AS0(a,b,c){var d,e,f,g,h,i,j;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();h=d===null?null:d.Q;b=a.l.getAttribLocation(h,$rt_ustr(c));f=a.l.getError();if(!f)return b;c=new Bb;i=Bk(f,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,f,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);h=new N;e=d.b;f=d.a;Q();j=D(f);h.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f
=h;H(c);}
function AQb(a,b,c){var d,e,f,g,h,i;KI(a,b,c);b=a.l.getError();if(!b)return;c=new Bb;d=Bk(b,4);e=new P;e.b=D(16);I(e,e.a,B(135));O(e,e.a,b,10);I(e,e.a,B(58));b=e.a;if(d===null)d=B(2);I(e,b,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c.c=1;c.d=1;c.f=f;H(c);}
function AJJ(a,b,c,d){var e,f,g,h,i;R8(a,b,c,d);b=a.l.getError();if(!b)return;d=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function ASv(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c=$rt_str(c.getProgramInfoLog(d));b=a.l.getError();if(!b)return c;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;H(c);}
function AHe(a,b,c,d){var e,f,g,h,i;NR(a,b,c,d);b=a.l.getError();if(!b)return;d=new Bb;e=Bk(b,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,b,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function AVS(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.cV;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c=$rt_str(c.getShaderInfoLog(d));b=a.l.getError();if(!b)return c;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;H(c);}
function AWM(a,b,c){var d,e,f,g,h,i,j;d=a.l;e=a.b9;if(!b)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;c=d.getUniformLocation(e,$rt_ustr(c));if(c===null)h=(-1);else{d=a.ds;if(!b)d=!d.O?null:d.M;else{f=d.K;h=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&d.N;}}d=h<0?null
:d.L.data[h];}d=d;if(d===null){d=Dp(51,0.800000011920929);B$(a.ds,b,d);}h=a.g8;a.g8=h+1|0;B$(d,h,Cb(c));}b=a.l.getError();if(!b)return h;c=new Bb;i=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);e=new N;f=d.b;h=d.a;Q();j=D(h);e.e=j;M(f,0,j,0,h);c.c=1;c.d=1;c.f=e;H(c);}
function AIL(a,b){var c,d,e,f,g,h,i;b=a.l.isEnabled(b)?1:0;c=a.l.getError();if(!c)return b;d=new Bb;e=Bk(c,4);f=new P;f.b=D(16);I(f,f.a,B(135));O(f,f.a,c,10);I(f,f.a,B(58));b=f.a;if(e===null)e=B(2);I(f,b,e);g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function ALF(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c.linkProgram(d);b=a.l.getError();if(!b)return;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function APe(a,b,c){var d,e,f,g,h,i,j;d=a.l;e=a.cV;if(!b)e=!e.O?null:e.M;else{f=e.K;g=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.N;}}e=g<0?null:e.L.data[g];}BB();e=e===null?null:e.Q;d.shaderSource(e,$rt_ustr(c));b=a.l.getError();if(!b)return;c=new Bb;i=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(i===null)i=B(2);I(d,b,i);e=new N;f=d.b;g=d.a;Q();j=D(g);e.e=j;M(f,0,j,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function AWJ(a,b,c,d){var e,f,g,h,i,j,k;e=a.l;f=d;e.texParameterf(b,c,f);b=a.l.getError();if(!b)return;e=new Bb;g=Bk(b,4);h=new P;h.b=D(16);I(h,h.a,B(135));O(h,h.a,b,10);I(h,h.a,B(58));b=h.a;if(g===null)g=B(2);I(h,b,g);i=new N;j=h.b;c=h.a;Q();k=D(c);i.e=k;M(j,0,k,0,c);e.c=1;e.d=1;e.f=i;H(e);}
function APr(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.ds;e=a.d6;if(!e)d=!d.O?null:d.M;else{f=d.K;g=R(Bi(Bf(S(e),F(2135587861, 2654435769)),d.P));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.N;}}d=g<0?null:d.L.data[g];}d=d;if(!b)d=!d.O?null:d.M;else{f=d.K;e=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));b:{while(true){h=f.data[e];if(!h){e= -(e+1|0)|0;break b;}if(h==b)break;e=(e+1|0)&d.N;}}d=e<0?null:d.L.data[e];}BB();i=d===null?null:d.Q;a.l.uniform1i(i,c);b=a.l.getError();if(!b)return;d
=new Bb;i=Bk(b,4);j=new P;j.b=D(16);I(j,j.a,B(135));O(j,j.a,b,10);I(j,j.a,B(58));b=j.a;if(i===null)i=B(2);I(j,b,i);k=new N;f=j.b;c=j.a;Q();l=D(c);k.e=l;M(f,0,l,0,c);d.c=1;d.d=1;d.f=k;H(d);}
function AQs(a,b){var c,d,e,f,g,h,i,j;a.d6=b;c=a.l;d=a.b9;if(!b)d=!d.O?null:d.M;else{e=d.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),d.P));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.N;}}d=f<0?null:d.L.data[f];}BB();d=d===null?null:d.Q;c.useProgram(d);b=a.l.getError();if(!b)return;c=new Bb;h=Bk(b,4);d=new P;d.b=D(16);I(d,d.a,B(135));O(d,d.a,b,10);I(d,d.a,B(58));b=d.a;if(h===null)h=B(2);I(d,b,h);i=new N;e=d.b;f=d.a;Q();j=D(f);i.e=j;M(e,0,j,0,f);c.c=1;c.d=1;c.f=i;H(c);}
function AIo(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.l.vertexAttribPointer(b,c,d,!!e,f,g);b=a.l.getError();if(!b)return;h=new Bb;i=Bk(b,4);j=new P;j.b=D(16);I(j,j.a,B(135));O(j,j.a,b,10);I(j,j.a,B(58));b=j.a;if(i===null)i=B(2);I(j,b,i);k=new N;l=j.b;c=j.a;Q();m=D(c);k.e=m;M(l,0,m,0,c);h.c=1;h.d=1;h.f=k;H(h);}
function X3(){var a=this;C.call(a);a.e4=0;a.K=null;a.L=null;a.M=null;a.O=0;a.sp=0.0;a.m4=0;a.P=0;a.N=0;}
function Dp(a,b){var c=new X3();AJ7(c,a,b);return c;}
function AJ7(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.sp=c;d=JT(b,c);a.m4=d*c|0;b=d-1|0;a.N=b;a.P=Ek(S(b));a.K=Bc(d);a.L=Bj(C,d);return;}e=new Bh;f=new P;f.b=D(16);I(f,f.a,B(59));Dz(f,f.a,c);g=new N;h=f.b;d=f.a;Q();i=D(d);g.e=i;M(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function Oi(a,b){return R(Bi(Bf(S(b),F(2135587861, 2654435769)),a.P));}
function AA5(a,b){var c,d,e;c=a.K;d=R(Bi(Bf(S(b),F(2135587861, 2654435769)),a.P));while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.N;}return d;}
function B$(a,b,c){var d,e,f,g,h;if(!b){d=a.M;a.M=c;if(!a.O){a.O=1;a.e4=a.e4+1|0;}return d;}e=a.K;f=R(Bi(Bf(S(b),F(2135587861, 2654435769)),a.P));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.N;}}if(f>=0){e=a.L.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.L.data[f]=c;b=a.e4+1|0;a.e4=b;if(b>=a.m4)Yu(a,g.length<<1);return null;}
function Jd(a,b){var c,d,e;if(!b)return !a.O?null:a.M;c=a.K;d=R(Bi(Bf(S(b),F(2135587861, 2654435769)),a.P));a:{while(true){e=c.data[d];if(!e){d= -(d+1|0)|0;break a;}if(e==b)break;d=(d+1|0)&a.N;}}return d<0?null:a.L.data[d];}
function Ii(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.O)return null;a.O=0;c=a.M;a.M=null;a.e4=a.e4-1|0;return c;}d=a.K;e=Bf(S(b),F(2135587861, 2654435769));f=a.P;g=R(Bi(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.N;}}if(g<0)return null;j=a.L.data;k=j[g];l=a.N;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=R(Bi(Bf(S(n),F(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.e4=a.e4-1|0;return k;}
function Zp(a,b,c){var d,e,f,g;a:{d=a.L;if(b===null){if(a.O&&a.M===null)return 1;d=d.data;e=a.K;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.M)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.O){g=a.M;if(b===g?1:g instanceof EZ&&g.fP==b.fP?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof EZ&&g.fP==b.fP?1:0)return 1;f=f+(-1)|0;}}return 0;}
function Yu(a,b){var c,d,e,f,g,h,i,j,k,l;a:{c=a.K.data.length;a.m4=b*a.sp|0;d=b-1|0;a.N=d;d=Ek(S(d));a.P=d;e=a.K;f=a.L;g=Bc(b);a.K=g;h=Bj(C,b);a.L=h;if(a.e4>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=R(Bi(Bf(S(k),F(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.N;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
function WC(){var a=this;C.call(a);a.es=0;a.fE=null;a.iC=0;a.yQ=0.0;a.nl=0;a.hD=0;a.fZ=0;}
function AHA(a,b){var c=new WC();ASe(c,a,b);return c;}
function ASe(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.yQ=c;d=JT(b,c);a.nl=d*c|0;b=d-1|0;a.fZ=b;a.hD=Ek(S(b));a.fE=Bc(d);return;}e=new Bh;f=new P;f.b=D(16);I(f,f.a,B(59));Dz(f,f.a,c);g=new N;h=f.b;d=f.a;Q();i=D(d);g.e=i;M(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function AA_(a,b){var c,d,e,f;if(!b){if(a.iC)return 0;a.iC=1;a.es=a.es+1|0;return 1;}c=a.fE;d=R(Bi(Bf(S(b),F(2135587861, 2654435769)),a.hD));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.fZ;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.es+1|0;a.es=b;if(b>=a.nl)ABh(a,e.length<<1);return 1;}
function Y2(a,b){var c,d,e,f,g,h,i,j;if(!b){if(!a.iC)return 0;a.iC=0;a.es=a.es-1|0;return 1;}c=a.fE;d=Bf(S(b),F(2135587861, 2654435769));e=a.hD;f=R(Bi(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.fZ;}}if(f<0)return 0;h=a.fZ;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=R(Bi(Bf(S(b),F(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.es=a.es-1|0;return 1;}
function ABh(a,b){var c,d,e,f,g,h,i;a:{c=a.fE.data.length;a.nl=b*a.yQ|0;d=b-1|0;a.fZ=d;d=Ek(S(d));a.hD=d;e=a.fE;f=Bc(b);a.fE=f;if(a.es>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=R(Bi(Bf(S(h),F(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.fZ;}f[i]=h;}g=g+1|0;}}}}
var Pu=G(0);
function RY(){C.call(this);this.l6=null;}
function AQi(a){var b;b=a.l6;b.mi=1;AEX($rt_ustr(b.og));}
function AIS(a){var b;b=a.l6;b.mi=1;AEX($rt_ustr(b.og));}
function AP7(a){a.l6.mi=0;}
var Tu=G(0);
function Tx(){var a=this;C.call(a);a.hW=null;a.qL=null;a.F2=null;}
var A_A=0;function A3Z(){var a=new Tx();AW5(a);return a;}
function AW5(a){var b,c,d,e,f,g,h,$$je;b=AIe();a.hW=b;c=AMB(b);a.qL=c;b=new OG;d=a.hW;e=new BP;e.bj=0;e.r=Bj(C,16);b.b3=e;b.dL=2147483647;b.zN=d;b.z1=c;a.F2=b;b=A9u.kK;Hs(b);a:{try{Cf(b,a);Ed(b);break a;}catch($$e){$$je=Br($$e);d=$$je;}Ed(b);H(d);}if(a.hW.state!=='running'?1:0){b=new Qt;b.FS=a;AIm(a.hW,BY(b,"unlockFunction"));}else{if(!A_A&&A9u.iF>=2){if(A_a===null){e=new Ct;e.cf=A5j;c=new P;CO(c);c.b=D(16);e.bc=c;e.b$=D(32);e.ck=0;Cr();e.cg=A$H;A_a=e;}e=A_a;c=new P;c.b=D(16);CR(c,c.a,C2(B(150)));CR(c,c.a,C2(B(71)));CR(c,
c.a,C2(B(151)));b=new N;f=c.b;g=c.a;h=D(g);b.e=h;M(f,0,h,0,g);d=e.bc;I(d,d.a,b);g=d.a;Bd(d,g,g+1|0);d.b.data[g]=10;Co(e);}A_A=1;}}
function Yr(a){a.qL.disconnect(a.hW.destination);}
function Xd(a){a.qL.connect(a.hW.destination);}
function AIm(b,c){var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){$rt_globals.document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){$rt_globals.document.addEventListener(eventName,unlock);});}
function AIe(){var AudioContext=$rt_globals.window.AudioContext||$rt_globals.window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
function AMB(b){var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function M3(){DC.call(this);this.y_=null;}
var Pt=G(CI);
function Ix(){CG.call(this);this.ie=null;}
function A3$(a,b,c){var d=new Ix();AO9(d,a,b,c);return d;}
function AO9(a,b,c,d){var e,f,g,h,$$je;e=new BP;e.bj=0;e.r=Bj(C,c);a.b3=e;a.dL=d;a:{try{e=KN(b,null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CI){}else{throw $$e;}}try{e=LR(b,null);IX(e,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dv){}else{throw $$e;}}e=null;}a.ie=e;if(e!==null)return;e=new BJ;f=new P;f.b=D(16);I(f,f.a,B(27));if(b.bb===null)b.bb=$rt_str(b.G.$meta.name);b=b.bb;I(f,f.a,b);b=new N;g=f.b;d=f.a;Q();h=D(d);b.e=h;M(g,0,h,0,d);e.c=1;e.d=1;e.f=b;H(e);}
function L6(a){var b,c,d,e,f,g,h,i,$$je;a:{try{b=AGA(a.ie,null);}catch($$e){$$je=Br($$e);if($$je instanceof CI){c=$$je;break a;}else{throw $$e;}}return b;}d=new Bb;b=new P;b.b=D(16);I(b,b.a,B(152));e=a.ie.ga.fv;if(e.bb===null)e.bb=$rt_str(e.G.$meta.name);f=e.bb;I(b,b.a,f);f=new N;g=b.b;h=b.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);d.c=1;d.d=1;d.f=f;d.cX=c;H(d);}
var FC=G(0);
var Q7=G(0);
var Ot=G(0);
var RA=G(0);
var OY=G(0);
var Tq=G(0);
var SH=G(0);
var NG=G(0);
var Km=G(0);
var Uh=G();
function AMT(a,b){b=a.lq(b);BB();return b===null?null:b instanceof $rt_objcls()&&b instanceof DB?b.Q:b;}
function AWv(a,b,c){a.E8($rt_str(b),Ds(c,"handleEvent"));}
function AWb(a,b,c){a.DZ($rt_str(b),Ds(c,"handleEvent"));}
function AMP(a,b,c,d){a.zm($rt_str(b),Ds(c,"handleEvent"),d?1:0);}
function AOY(a,b){return !!a.Fc(b);}
function AIq(a){return a.FE();}
function AG2(a,b,c,d){a.A3($rt_str(b),Ds(c,"handleEvent"),d?1:0);}
var L5=G();
function HC(){var a=this;L5.call(a);a.pk=0;a.gw=null;a.w6=0.0;a.pt=0;a.jH=0;a.kn=0;a.yV=0;}
var A5h=null;var A5i=null;function A_B(a){var b=new HC();LI(b,a);return b;}
function LI(a,b){var c,d,e;a.kn=(-1);if(b<0){c=new Bh;c.c=1;c.d=1;H(c);}a.pk=0;if(!b)b=1;d=Bj(Js,b);e=d.data;a.gw=d;b=e.length;a.jH=b;a.w6=0.75;a.pt=b*0.75|0;}
function DP(a,b,c){var d,e,f,g,h,i,j,k,l;Hs(a);try{if(b!==null&&c!==null){a:{if(!b.bE){d=b.e.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.bE=(31*b.bE|0)+g|0;f=f+1|0;}}}h=b.bE&2147483647;d=a.gw.data;i=h%d.length|0;j=d[i];while(j!==null){b:{e=j.tW;if(!b.bE){d=b.e.data;f=d.length;g=0;while(true){if(g>=f)break b;k=d[g];b.bE=(31*b.bE|0)+k|0;g=g+1|0;}}}if(e==b.bE&&j.cQ.d5(b)?1:0)break;j=j.mw;}if(j!==null){l=j.dZ;j.dZ=c;return l;}a.yV=a.yV+1|0;e=a.pk+1|0;a.pk=e;if(e>a.pt){WW(a);i=h%a.gw.data.length|0;}if
(i<a.jH)a.jH=i;if(i>a.kn)a.kn=i;c:{l=new Js;l.cQ=b;l.dZ=c;if(!b.bE){d=b.e.data;e=d.length;f=0;while(true){if(f>=e)break c;g=d[f];b.bE=(31*b.bE|0)+g|0;f=f+1|0;}}}l.tW=b.bE;d=a.gw.data;l.mw=d[i];d[i]=l;return null;}b=new CK;b.c=1;b.d=1;H(b);}finally{Ed(a);}}
function WW(a){var b,c,d,e,f,g,h,i,j;b=(a.gw.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Bj(Js,b);e=d.data;f=a.kn+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.jH)break;h=a.gw.data[f];while(h!==null){i=(h.cQ.dT()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.mw;h.mw=e[i];e[i]=h;h=j;}}a.jH=g;a.kn=c;a.gw=d;a.pt=e.length*a.w6|0;}
function AXX(){A5h=new J7;A5i=new J6;}
function KW(){HC.call(this);this.Bp=null;}
var AB$=G();
var Eb=G(BG);
var A_u=null;var A_r=null;var A_x=null;var A_w=null;var A_C=null;function Gg(){Gg=V(Eb);AL7();}
function AL7(){var b,c,d,e;b=new Eb;Gg();b.t=B(153);b.q=0;A_u=b;c=new Eb;c.t=B(154);c.q=1;A_r=c;d=new Eb;d.t=B(148);d.q=2;A_x=d;e=new Eb;e.t=B(155);e.q=3;A_w=e;A_C=T(Eb,[b,c,d,e]);}
var Du=G();
var ABs=G(Du);
var AA$=G(Du);
var ACY=G(Du);
var ADQ=G(Du);
var V5=G(Du);
function Oe(){C.call(this);this.ET=null;}
function ATw(a,b){b.preventDefault();}
function Of(){C.call(this);this.B8=null;}
function AXL(a,b){b.preventDefault();}
function Oc(){var a=this;C.call(a);a.rJ=null;a.vy=null;a.v4=null;}
function W6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new BP;e.bj=1;e.r=Bj(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=$rt_str(g.name);i=EX(h,46,h.e.data.length-1|0);if(i==(-1))b=B(42);else{j=i+1|0;k=h.e;i=k.data.length;l=Bo(j,i);if(l>0){b=new Y;b.c=1;b.d=1;CE(b);H(b);}if(!l)b=A9m;else if(!j&&i==i)b=h;else{b=new N;i=i-j|0;m=D(i);b.e=m;M(k,j,m,0,i);}}b=ABb(b);if(ARe(b)){Fl();n=A_D;}else if(!BC(b,B(156))&&!BC(b,B(157))&&!BC(b,B(158))?0:1){Fl();n=A_E;}
else if(!AKG(b)){Fl();n=A_F;}else{Fl();n=A_G;}o=new $rt_globals.FileReader();b=new O4;b.lx=a;b.pI=n;b.o7=h;b.kV=e;b.q9=d;o.addEventListener("load",BY(b,"handleEvent"));Fl();if(n!==A_F&&n!==A_E){if(n===A_D)o.readAsDataURL(g);else if(n===A_G)o.readAsText(g);}else o.readAsArrayBuffer(g);f=f+1|0;}}}}
function ANi(a,b){W6(a,b);}
function OG(){var a=this;CG.call(a);a.zN=null;a.z1=null;}
var S0=G(0);
function Qt(){C.call(this);this.FS=null;}
function ASi(a){var b,c,d,e,f,g,h;if(!A_A&&A9u.iF>=2){if(A_a===null){b=new Ct;c=A5j;CO(b);b.cf=c;c=new P;J9(c,16);b.bc=c;b.b$=D(32);b.ck=0;Cr();b.cg=A$H;A_a=b;}b=A_a;c=new P;c.b=D(16);DI(c,c.a,B(150));DI(c,c.a,B(71));DI(c,c.a,B(151));d=new N;e=c.b;f=c.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);h=b.bc;Ew(h,h.a,d);Xv(h,h.a,10);Co(b);}A_A=1;}
var U5=G(Du);
function Ry(){var a=this;C.call(a);a.J=null;a.c4=0;a.nt=null;a.rE=0;a.iD=0;a.f9=0;a.co=0;a.tu=null;}
function Rq(a,b){return N9(a,b);}
function Jk(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=new Jm;d.bY=Bj(C,10);e=N9(a,b);f=0;g=0;if(!b.e.data.length){h=Bj(N,1);h.data[0]=B(42);return h;}a:{while(true){if(!Ha(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.dB;if(!j.dA){b=new BK;b.c=1;b.d=1;CE(b);H(b);}if(0>=j.ec){b=new Y;Q();d=new P;CO(d);d.b=D(16);O(d,d.a,0,10);e=new N;h=d.b;k=d.a;l=D(k);e.e=l;M(h,0,l,0,k);b.c=1;b.d=1;b.f=e;H(b);}f=j.bR.data[0];k=Bo(g,f);if(k>0){b=new Y;b.c=1;b.d=1;H(b);}if(!k){Q();j=A9m;}else if(!g&&f==b.e.data.length)j=b;else{j=new N;h=
b.e;k=f-g|0;Q();l=D(k);j.e=l;M(h,g,l,0,k);}Gy(d,d.bi+1|0);h=d.bY.data;k=d.bi;d.bi=k+1|0;h[k]=j;d.cI=d.cI+1|0;j=e.dB;if(!j.dA)break;if(0>=j.ec){b=new Y;Q();d=new P;CO(d);d.b=D(16);Nu(d,0);Tp(b,Cy(d));H(b);}g=j.bR.data[1];f=i;}b=new BK;b.c=1;b.d=1;CE(b);H(b);}l=b.e;m=l.data.length;k=Bo(g,m);if(k>0){b=new Y;b.c=1;b.d=1;H(b);}if(!k){Q();b=A9m;}else if(!(!g&&m==m)){b=new N;k=m-g|0;Q();h=D(k);b.e=h;M(l,g,h,0,k);}b:{Gy(d,d.bi+1|0);h=d.bY.data;m=d.bi;d.bi=m+1|0;h[m]=b;d.cI=d.cI+1|0;k=f+1|0;if(!c)while(true){k=k+(-1)
|0;if(k<0)break;if(Jw(Ib(d,k)))break b;Pq(d,k);}}if(k<0)k=0;return ABC(d,Bj(N,k));}
function Q9(a){return a.J.c0;}
function GE(b,c){var d;if(b===null){b=new CK;b.c=1;b.d=1;b.f=B(159);H(b);}if(c&&(c|255)!=255){b=new Bh;b.c=1;b.d=1;b.f=B(42);H(b);}A44=1;d=new Ry;d.nt=Bj(Di,10);d.iD=(-1);d.f9=(-1);d.co=(-1);return ABR(d,b,c);}
function ABR(a,b,c){var d,e,f;a.J=A18(b,c);a.c4=c;b=P$(a,(-1),c,null);a.tu=b;d=a.J;if(!d.b_&&!d.E&&d.F==d.dt&&!(d.bZ===null?0:1)?1:0){if(a.rE)b.e6();return a;}b=new Dd;e=d.c0;f=d.gR;b.c=1;b.d=1;b.bG=(-1);b.c_=B(42);b.c$=e;b.bG=f;H(b);}
function AF7(a,b){var c,d,e,f,g,h;c=new CB;d=a.c4;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;Bz();g=new Bt;g.w=Bc(64);c.z=g;g=new Bt;g.w=Bc(2);c.D=g;c.mp=e;c.m_=f;while(true){h=a.J;d=h.b_;if(!d&&!h.E&&h.F==h.dt&&!(h.bZ===null?0:1)?1:0)break;f=!d&&!h.E&&h.F==h.dt&&!(h.bZ===null?0:1)?1:0;if(!(!f&&!(h.bZ===null?0:1)&&(d<0?0:1)?1:0))break;f=h.E;if(f&&f!=(-536870788)&&f!=(-536870871))break;Cx(h);CP(c,h.ft);g=a.J;if(g.b_!=(-536870788))continue;Cx(g);}g=KC(a,c);g.bA(b);return g;}
function P$(a,b,c,d){var e,f,g,h,i,j,k,l;e=new Jm;e.bY=Bj(C,10);f=a.c4;g=0;if(c!=f)a.c4=c;a:{switch(b){case -1073741784:h=new Oy;c=a.co+1|0;a.co=c;FG();i=A44;A44=i+1|0;d=new Bl;d.b=D(20);h.A=(O(d,d.a,i,10)).s();h.cy=c;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new N0;j=a.co+1|0;a.co=j;FG();c=A44;A44=c+1|0;d=new Bl;d.b=D(20);h.A=(O(d,d.a,c,10)).s();h.cy=j;break a;case -33554392:h=new OP;k=a.co+1|0;a.co=k;FG();c=A44;A44=c+1|0;d=new Bl;d.b=D(20);h.A=(O(d,d.a,c,10)).s();h.cy=
k;break a;default:c=a.iD+1|0;a.iD=c;if(d===null){h=A2m();g=1;}else{h=new Di;FG();JR(h);h.cy=c;}i=a.iD;if(i<=(-1))break a;if(i>=10)break a;a.nt.data[i]=h;break a;}h=new Ty;FG();i=A44;A44=i+1|0;d=new Bl;d.b=D(20);h.A=(O(d,d.a,i,10)).s();h.cy=(-1);}while(true){if(P1(a.J)&&Gz(a.J)==(-536870788))l=AF7(a,h);else if(a.J.b_==(-536870788)){l=JO(h);BW(a.J);}else{l=QY(a,h);if(F6(a.J)==(-536870788))BW(a.J);}if(l!==null)I8(e,l);if(L4(a.J))break;if(F6(a.J)==(-536870871))break;}if(Vu(a.J)==(-536870788))I8(e,JO(h));if(a.c4
!=f&&!g){a.c4=f;AAL(a.J,f);}switch(b){case -1073741784:break;case -536870872:return A1U(e,h);case -268435416:return A1e(e,h);case -134217688:return AYY(e,h);case -67108824:return A2c(e,h);case -33554392:return A1s(e,h);default:switch(Mm(e)){case 0:break;case 1:return A3e(Ib(e,0),h);default:return AZE(e,h);}return JO(h);}return A04(e,h);}
function AEQ(a){var b,c,d,e,f,g,h,i,j,k;b=new Kj;b.b=D(16);while(true){c=a.J;d=c.b_;if(!d&&!c.E&&c.F==c.dt&&!(c.bZ===null?0:1)?1:0)break;e=!d&&!c.E&&c.F==c.dt&&!(c.bZ===null?0:1)?1:0;if(!(!e&&!(c.bZ===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.eY;e=f===null?0:1;if(!(!e&&!c.E)){e=f===null?0:1;if(!(!e&&(c.E<0?0:1))){d=c.E;if(d!=(-536870871)&&(d&(-2147418113))!=(-2147483608)&&d!=(-536870788)&&d!=(-536870876))break;}}Cx(c);g=c.ft;e=Bo(g,65536);if(!(e>=0&&
g<=1114111?1:0)){e=g&65535;h=b.a;Bd(b,h,h+1|0);b.b.data[h]=e;}else{if(e<0){i=D(1);i.data[0]=g&65535;}else i=E1([(55296|(g-65536|0)>>10&1023)&65535,(56320|g&1023)&65535]);i=i.data;e=0;h=i.length;d=b.a;Bd(b,d,d+h|0);j=h+e|0;while(e<j){k=b.b.data;g=d+1|0;h=e+1|0;k[d]=i[e];d=g;e=h;}}}h=a.c4;if(!((h&2)!=2?0:1))return AZv(b);if(!((h&64)!=64?0:1))return A4i(b);c=new MX;e=A44;A44=e+1|0;c.A=LN(e,10);c.bq=1;f=new P;f.b=D(16);e=0;while(e<AGt(b)){Fh(f,AFz(ZX(ZS(b,e))));e=e+1|0;}c.p9=Cy(f);c.bq=HM(f);return c;}
function AEV(a){var b,c,d,e,f,g,h,i,j;b=Bc(4);c=(-1);d=(-1);e=a.J;f=e.b_;if(!(!f&&!e.E&&e.F==e.dt&&!(e.bZ===null?0:1)?1:0)){g=!f&&!e.E&&e.F==e.dt&&!(e.bZ===null?0:1)?1:0;if(!g&&!(e.bZ===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Cx(e);c=e.ft;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=D(3);b=h.data;b[0]=c&65535;e=a.J;i=e.b_;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Cx(e);e=a.J;i=e.b_;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Cx(e);e=new Jp;c=A44;A44=c+1|0;j=new Bl;j.b=D(20);e.A=(O(j,j.a,c,10)).s();e.fT=h;e.jv=3;return e;}j=new Jp;i
=A44;A44=i+1|0;e=new Bl;e.b=D(20);j.A=(O(e,e.a,i,10)).s();j.fT=h;j.jv=2;return j;}c=a.c4;if(!((c&2)!=2?0:1)){e=new EO;i=b[0];c=A44;A44=c+1|0;e.A=LN(c,10);e.bq=1;e.dj=i;return e;}if((c&64)!=64?0:1)return A3n(b[0]);return A1I(b[0]);}h=b.data;c=1;while(c<4&&!L4(a.J)&&P1(a.J)){i=c+1|0;e=a.J;Cx(e);h[c]=e.ft;c=i;}if(c==1&&!ALO(h[0]))return P4(a,h[0]);if(!Er(a,2))return A4h(b,c);if(Er(a,64))return A31(b,c);return AZF(b,c);}
function QY(a,b){var c,d,e,f,g,h;c=a.J;d=c.b_;e=!d&&!c.E&&c.F==c.dt&&!(c.bZ===null?0:1)?1:0;e=!e&&!(c.bZ===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.eY===null?0:1)&&(c.E<0?0:1)){if(!((a.c4&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!AEJ(c)?AEQ(a):Le(a,b,Tt(a,b));}else{f=AEV(a);g=a.J;d=g.b_;if(!(!d&&!g.E&&g.F==g.dt&&!(g.bZ===null?0:1)?1:0)&&!(d==(-536870871)&&!(b instanceof Hl))&&d!=(-536870788)){e=!d&&!g.E&&g.F==g.dt&&!(g.bZ===null?0:1)?1:0;if(!(!e&&!(g.bZ===null?0:1)&&(d<0?0:1)?1:0))f=Le(a,b,f);}}}else if(d!=
(-536870871))f=Le(a,b,Tt(a,b));else{if(b instanceof Hl)H(Ex(B(42),Eh(c),FL(a.J)));f=new Pz;AAd(f,b);f.bq=0;}c=a.J;e=c.b_;h=!e&&!c.E&&c.F==c.dt&&!(c.bZ===null?0:1)?1:0;if(!h&&!(e==(-536870871)&&!(b instanceof Hl))&&e!=(-536870788)){g=QY(a,b);if(f instanceof DK&&!(f instanceof Gh)&&!(f instanceof DO)&&!(f instanceof Ge)){c=f;if(!g.cH(c.V))f=AYT(c);}if((g.jA()&65535)!=43)f.bA(g);else f.bA(g.V);}else{if(f===null)return null;f.bA(b);}if((f.jA()&65535)!=43)return f;return f.V;}
function Le(a,b,c){var d,e,f,g,h,i;d=a.J;e=d.b_;if(c!==null&&!(c instanceof Cs)){switch(e){case -2147483606:Cx(d);d=new Qb;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);d.A=(O(g,g.a,f,10)).s();d.p=b;d.V=c;d.b0=e;FG();c.bA(A_H);return d;case -2147483605:Cx(d);d=new Rd;e=A44;A44=e+1|0;g=new Bl;g.b=D(20);d.A=(O(g,g.a,e,10)).s();d.p=b;d.V=c;d.b0=(-2147483606);FG();c.bA(A_H);return d;case -2147483585:Cx(d);d=new NU;e=A44;A44=e+1|0;g=new Bl;CO(g);g.b=D(20);d.A=(O(g,g.a,e,10)).s();d.p=b;d.V=c;d.b0=(-536870849);FG();c.bA(A_H);return d;case -2147483525:g
=new Nb;h=d.bZ;Cx(d);d=h;f=a.f9+1|0;a.f9=f;i=A44;A44=i+1|0;g.A=LN(i,10);g.p=b;g.V=c;g.b0=(-536870849);g.eV=d;g.d0=f;FG();c.bA(A_H);return g;case -1073741782:case -1073741781:Cx(d);d=new Ow;UB(d,c,b,e);c.bA(d);return d;case -1073741761:Cx(d);d=AY6(c,b,(-536870849));c.bA(b);return d;case -1073741701:h=new Po;d=HR(d);e=a.f9+1|0;a.f9=e;Xl(h,d,c,b,(-536870849),e);c.bA(h);return h;case -536870870:case -536870869:BW(d);d=c.jA()!=(-2147483602)?A1K(c,b,e):Er(a,32)?AZb(c,b,e):AYI(c,b,e,Q6(a.c4));c.bA(d);return d;case -536870849:BW(d);d
=A3_(c,b,(-536870849));c.bA(b);return d;case -536870789:h=new GD;d=HR(d);e=a.f9+1|0;a.f9=e;ZZ(h,d,c,b,(-536870849),e);c.bA(h);return h;default:}return c;}g=null;if(c!==null)g=c;switch(e){case -2147483606:case -2147483605:BW(d);d=A0w(g,b,e);La(g,d);return d;case -2147483585:BW(d);return A1k(g,b,(-2147483585));case -2147483525:return A0R(HR(d),g,b,(-2147483525));case -1073741782:case -1073741781:BW(d);d=A3S(g,b,e);La(g,d);return d;case -1073741761:BW(d);return A3G(g,b,(-1073741761));case -1073741701:return AZs(HR(d),
g,b,(-1073741701));case -536870870:case -536870869:BW(d);d=A0g(g,b,e);La(g,d);return d;case -536870849:BW(d);return AZU(g,b,(-536870849));case -536870789:return A1Y(HR(d),g,b,(-536870789));default:}return c;}
function Tt(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Hl;while(true){a:{e=a.J;f=e.b_;if((f&(-2147418113))==(-2147483608)){Cx(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c4=g;else{if(f!=(-1073741784))g=a.c4;c=P$(a,f,g,b);e=a.J;if(e.b_!=(-536870871)){b=new Dd;h=e.c0;i=e.gR;b.c=1;b.d=1;b.bG=(-1);b.c_=B(42);b.c$=h;b.bG=i;H(b);}Cx(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:BW(e);c
=new On;JR(c);break a;case -2147483582:BW(e);c=AWT(0);break a;case -2147483577:break;case -2147483558:BW(e);c=new PP;j=a.co+1|0;a.co=j;AFk(c,j);break a;case -2147483550:BW(e);c=AWT(1);break a;case -2147483526:BW(e);c=A0K();break a;case -536870876:BW(e);a.co=a.co+1|0;if(Er(a,8)){if(Er(a,1)){c=AZq(a.co);break a;}c=AYp(a.co);break a;}if(Er(a,1)){c=AZN(a.co);break a;}c=A0C(a.co);break a;case -536870866:BW(e);if(Er(a,32)){c=A00();break a;}c=A0n(Q6(a.c4));break a;case -536870821:BW(e);i=0;if(F6(a.J)==(-536870818))
{i=1;BW(a.J);}c=Xn(a,i,b);if(F6(a.J)!=(-536870819))H(Ex(B(42),Eh(a.J),FL(a.J)));QT(a.J,1);BW(a.J);break a;case -536870818:BW(e);a.co=a.co+1|0;if(!Er(a,8)){c=A0Q();break a;}c=A3O(Q6(a.c4));break a;case 0:e=NV(e);if(e!==null)c=KC(a,e);else{if(L4(a.J)){c=JO(b);break a;}c=AI9(f&65535);}BW(a.J);break a;default:break b;}BW(e);c=AY4();break a;}j=(f&2147483647)-48|0;if(a.iD<j)H(Ex(B(42),Eh(e),FL(a.J)));BW(e);a.co=a.co+1|0;c=!Er(a,2)?A1r(j,a.co):Er(a,64)?AZr(j,a.co):A4d(j,a.co);a.nt.data[j].pv=1;a.rE=1;break a;}if(f
>=0&&!IV(e)){c=P4(a,f);BW(a.J);}else if(f==(-536870788))c=JO(b);else{if(f!=(-536870871))H(Ex(!IV(a.J)?Y8(f&65535):(NV(a.J)).s(),Eh(a.J),FL(a.J)));if(d)H(Ex(B(42),Eh(a.J),FL(a.J)));c=JO(b);}}}if(f!=(-16777176))break;}return c;}
function Xn(a,b,c){var d;d=KC(a,HK(a,b));d.bA(c);return d;}
function HK(a,b){var c,d,e,f,g,h,i,j,k,l,$$je;c=new CB;d=a.c4;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;Bz();f=new Bt;f.w=Bc(64);c.z=f;f=new Bt;f.w=Bc(2);c.D=f;c.mp=e;c.m_=d;ES(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){f=a.J;if(!f.b_&&!f.E&&f.F==f.dt&&!IV(f)?1:0)break a;f=a.J;b=f.b_;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)CP(c,g);g=BW(a.J);if(F6(a.J)!=(-536870874)){g=38;break d;}if(Gz(a.J)==(-536870821)){BW(a.J);h=1;g=(-1);break d;}BW(a.J);if(j){c=HK(a,0);break d;}if(F6(a.J)==(-536870819))break d;PJ(c,
HK(a,0));break d;case -536870867:if(!j&&Gz(f)!=(-536870819)&&Gz(a.J)!=(-536870821)&&g>=0){BW(a.J);d=F6(a.J);if(IV(a.J))break c;if(d<0&&Gz(a.J)!=(-536870819)&&Gz(a.J)!=(-536870821)&&g>=0)break c;e:{try{if(AS$(d))break e;d=d&65535;break e;}catch($$e){$$je=Br($$e);if($$je instanceof CI){break b;}else{throw $$e;}}}try{BN(c,g,d);}catch($$e){$$je=Br($$e);if($$je instanceof CI){break b;}else{throw $$e;}}BW(a.J);g=(-1);break d;}if(g>=0)CP(c,g);g=45;BW(a.J);break d;case -536870821:if(g>=0){CP(c,g);g=(-1);}BW(a.J);e=
0;f=a.J;if(f.b_==(-536870818)){BW(f);e=1;}if(!h)ZQ(c,HK(a,e));else PJ(c,HK(a,e));h=0;BW(a.J);break d;case -536870819:break;case -536870818:if(g>=0)CP(c,g);g=94;BW(a.J);break d;case 0:if(g>=0)CP(c,g);f=a.J.bZ;if(f===null)g=0;else{AGw(c,f);g=(-1);}Cx(a.J);break d;default:if(g>=0)CP(c,g);f=a.J;Cx(f);g=f.ft;break d;}if(g>=0)CP(c,g);g=93;BW(a.J);}j=0;}H(Ex(B(42),Q9(a),FL(a.J)));}H(Ex(B(42),Q9(a),FL(a.J)));}if(!i){if(g>=0)CP(c,g);return c;}c=new Dd;k=a.J;l=k.c0;b=k.gR-1|0;c.c=1;c.d=1;c.bG=(-1);c.c_=B(42);c.c$=l;c.bG
=b;H(c);}
function P4(a,b){var c,d,e,f,g;c=b>=65536&&b<=1114111?1:0;d=a.c4;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new MZ;b=b&65535;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);e.A=(O(g,g.a,f,10)).s();e.bq=1;e.lG=b;e.pn=HQ(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Qf;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);e.A=(O(g,g.a,f,10)).s();e.bq=1;e.bq=2;if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}b=B0(A$P,b);if(A$N===null){if(A$O===null)A$O=C5();A$N
=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}e.n6=B0(A$N,b);return e;}if(b<=57343&&b>=56320?1:0){e=new JF;b=b&65535;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);e.A=(O(g,g.a,f,10)).s();e.fF=b;return e;}if(b<=56319&&b>=55296?1:0)return ATr(b&65535);e=new PR;b=b&65535;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);e.A=(O(g,g.a,f,10)).s();e.bq=1;b=B0(T5(),b)&65535;e.lO=B0(ACw(),b)&65535;return e;}}if(c)return AYC(b);if(AIz(b))return AZ5(b&65535);if(!ALS(b))return AI9(b&65535);return ATr(b&65535);}
function KC(a,b){var c,d,e,f,g,h;if(!ADp(b)){if(!b.by){if(b.i8())return AZm(b);return A0N(b);}if(b.i8())return A20(b);return A2v(b);}c=Un(b);d=new M1;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);d.A=(O(f,f.a,e,10)).s();d.k7=c;d.pf=c.T;if(!b.by){if(!b.i8()){c=new G_;f=new EI;b=Jo(b);JR(f);f.bq=1;f.ej=b;f.on=b.T;AAR(c);c.gH=f;c.g_=d;return c;}c=new G_;f=new NF;b=Jo(b);e=A44;A44=e+1|0;g=new Bl;g.b=D(20);f.A=(O(g,g.a,e,10)).s();f.bq=1;f.md=b;f.nX=b.T;e=A44;A44=e+1|0;b=new Bl;b.b=D(20);c.A=(O(b,b.a,e,10)).s();c.gH=f;c.g_=
d;return c;}if(!b.i8()){c=new G_;f=new D7;b=Jo(b);e=A44;A44=e+1|0;g=new Bl;g.b=D(20);f.A=(O(g,g.a,e,10)).s();f.dl=b;f.hM=b.T;e=A44;A44=e+1|0;b=new Bl;b.b=D(20);c.A=(O(b,b.a,e,10)).s();c.gH=f;c.g_=d;return c;}c=new G_;f=new Ql;g=Jo(b);h=A44;A44=h+1|0;b=new Bl;b.b=D(20);f.A=(O(b,b.a,h,10)).s();f.dl=g;f.hM=g.T;e=A44;A44=e+1|0;b=new Bl;b.b=D(20);c.A=(O(b,b.a,e,10)).s();c.gH=f;c.g_=d;return c;}
function ABj(b){return GE(b,0);}
function HQ(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Er(a,b){return (a.c4&b)!=b?0:1;}
var AAH=G();
function KN(b,c){var d,e,f,g,h,i,j,$$je;if(c!==null&&c.data.length){a:{b:{try{d=AH6(AE5(b,c));}catch($$e){$$je=Br($$e);if($$je instanceof Kg){d=$$je;break a;}else if($$je instanceof HY){d=$$je;break b;}else{throw $$e;}}return d;}e=new Dv;if(b.bb===null)b.bb=$rt_str(b.G.$meta.name);f=b.bb;b=new P;b.b=D(16);I(b,b.a,B(160));g=b.a;if(f===null)f=B(2);I(b,g,f);h=new N;c=b.b;i=b.a;Q();j=D(i);h.e=j;M(c,0,j,0,i);e.c=1;e.d=1;e.f=h;e.cX=d;H(e);}e=new Dv;if(b.bb===null)b.bb=$rt_str(b.G.$meta.name);f=b.bb;b=new P;b.b=D(16);I(b,
b.a,B(161));g=b.a;if(f===null)f=B(2);I(b,g,f);I(b,b.a,B(162));h=new N;c=b.b;i=b.a;Q();j=D(i);h.e=j;M(c,0,j,0,i);e.c=1;e.d=1;e.f=h;e.cX=d;H(e);}c=(Zf(b)).data;if(c.length<=0)b=null;else{b=new NH;b.ga=c[0];}return b;}
function LR(b,c){var d,e,f,g,h,i,j,$$je;a:{try{d=AH6(AE8(b,c));}catch($$e){$$je=Br($$e);if($$je instanceof Kg){d=$$je;break a;}else if($$je instanceof HY){d=$$je;e=new Dv;if(b.bb===null)b.bb=$rt_str(b.G.$meta.name);b=b.bb;f=new P;f.b=D(16);I(f,f.a,B(160));g=f.a;if(b===null)b=B(2);I(f,g,b);b=new N;c=f.b;h=f.a;Q();i=D(h);b.e=i;M(c,0,i,0,h);e.c=1;e.d=1;e.f=b;e.cX=d;H(e);}else{throw $$e;}}return d;}e=new Dv;if(b.bb===null)b.bb=$rt_str(b.G.$meta.name);j=b.bb;b=new P;b.b=D(16);I(b,b.a,B(163));g=b.a;if(j===null)j=
B(2);I(b,g,j);f=new N;c=b.b;h=b.a;Q();i=D(h);f.e=i;M(c,0,i,0,h);e.c=1;e.d=1;e.f=f;e.cX=d;H(e);}
var Dv=G(CI);
function A_I(a,b){var c=new Dv();AEO(c,a,b);return c;}
function AEO(a,b,c){a.c=1;a.d=1;a.f=b;a.cX=c;}
function DB(){C.call(this);this.Q=null;}
var A_J=null;var A_K=null;var A_L=null;var A_M=null;var A_N=null;var A_O=null;function BB(){BB=V(DB);ARC();}
function Cb(b){var c,d,e,f,g,h;BB();if(b===null)return null;a:{c=b;if(A_K!==null){d=$rt_str(typeof c);if(!BC(d,B(164))&&!BC(d,B(165))){if(BC(d,B(166))){e=A_L.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=new DB;g.Q=c;h=g;A_L.set(c,new $rt_globals.WeakRef(h));Nn(A_N,h,c);return g;}if(!BC(d,B(167)))break a;else{e=A_M.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=new DB;g.Q=c;h=g;A_M.set(c,new $rt_globals.WeakRef(h));Nn(A_O,
h,c);return g;}}e=A_K.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=new DB;g.Q=c;A_K.set(c,new $rt_globals.WeakRef(g));return g;}}b=new DB;b.Q=c;return b;}
function U3(b){BB();if(b===null)return null;return b.Q;}
function ARC(){A_J=new $rt_globals.WeakMap();A_K=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();A_L=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();A_M=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();A_N=A_L===null?null:new $rt_globals.FinalizationRegistry(BY(new NK,"accept"));A_O=A_M===null?null:new $rt_globals.FinalizationRegistry(BY(new NL,"accept"));}
function Nn(b,c,d){return b.register(c,d);}
var L1=G(0);
var J7=G();
var Gs=G(0);
var J6=G();
var K_=G(0);
function ADj(){var a=this;C.call(a);a.zP=null;a.yo=null;a.iv=null;a.dB=null;a.k1=0;a.l8=0;a.mc=0;a.nm=null;a.nD=null;a.f$=null;}
function N9(a,b){var c=new ADj();AGM(c,a,b);return c;}
function AEl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=a.nm;if(c!==null&&BC(c,b)){if(a.f$===null)return a.nD;d=new P;d.b=D(16);e=0;while(true){b=a.f$;f=Bo(e,b.bi);if(f>=0){b=new N;g=d.b;h=d.a;i=D(h);b.e=i;M(g,0,i,0,h);return b;}if(e<0)break;if(f>=0)break;b=b.bY.data[e];I(d,d.a,b===null?B(2):b.s());e=e+1|0;}b=new Y;b.c=1;b.d=1;H(b);}a.nm=b;g=b.e.data;i=D(g.length);j=i.data;f=0;e=j.length;while(f<e){j[f]=g[f];f=f+1|0;}c=new P;c.b=D(16);a.f$=null;h=0;k=0;l=0;a:{b:while(true){if(h>=e){b=a.f$;if(b!==null){h=c.a;f
=Bo(k,h);if(f){if(f<=0&&k>=0&&h<=h){m=new N;g=c.b;f=h-k|0;Q();i=D(f);m.e=i;M(g,k,i,0,f);Gy(b,b.bi+1|0);g=b.bY.data;h=b.bi;b.bi=h+1|0;g[h]=m;b.cI=b.cI+1|0;}else{b=new Y;b.c=1;b.d=1;CE(b);H(b);}}}b=new N;g=c.b;h=c.a;Q();i=D(h);b.e=i;M(g,0,i,0,h);return b;}if(j[h]==92&&!l){l=1;h=h+1|0;}c:{if(l){if(h>=e)break b;l=j[h];n=c.a;Bd(c,n,n+1|0);c.b.data[n]=l;l=0;}else if(j[h]!=36){n=j[h];o=c.a;Bd(c,o,o+1|0);c.b.data[o]=n;}else{if(a.f$===null){b=new Jm;b.bY=Bj(C,10);a.f$=b;}d:{try{b=new N;h=h+1|0;TE(b,i,h,1);f=Cz(b);if
(k==HM(c))break d;I8(a.f$,AEH(c,k,HM(c)));k=HM(c);break d;}catch($$e){$$je=Br($$e);if($$je instanceof CI){break a;}else{throw $$e;}}}try{I8(a.f$,AZO(a,f));m=KJ(a,f);k=k+Jw(m)|0;DF(c,m);break c;}catch($$e){$$je=Br($$e);if($$je instanceof CI){break a;}else{throw $$e;}}}}h=h+1|0;}b=new Y;b.c=1;b.d=1;H(b);}b=new Bh;b.c=1;b.d=1;b.f=B(42);H(b);}
function KJ(a,b){var c,d,e,f,g,h,i,j,k;c=a.dB;d=c.dA;if(!d){c=new BK;c.c=1;c.d=1;H(c);}if(b>=0){e=Bo(b,c.ec);if(e<0){a:{f=c.bR.data;g=b*2|0;if(f[g]<0)h=null;else{c=c.gD;if(!d){c=new BK;c.c=1;c.d=1;H(c);}if(b>=0&&e<0){i=f[g];if(!d){c=new BK;c.c=1;c.d=1;H(c);}if(b>=0&&e<0){g=f[g+1|0];b=Bo(i,g);if(b>0){c=new Y;c.c=1;c.d=1;H(c);}if(!b){Q();h=A9m;}else if(!i&&g==c.e.data.length)h=c;else{h=new N;f=c.e;b=g-i|0;Q();j=D(b);h.e=j;M(f,i,j,0,b);}break a;}c=new Y;Q();h=new P;h.b=D(16);O(h,h.a,b,10);k=new N;f=h.b;i=h.a;j
=D(i);k.e=j;M(f,0,j,0,i);c.c=1;c.d=1;c.f=k;H(c);}c=new Y;Q();h=new P;h.b=D(16);O(h,h.a,b,10);k=new N;f=h.b;i=h.a;j=D(i);k.e=j;M(f,0,j,0,i);c.c=1;c.d=1;c.f=k;H(c);}}return h;}}c=new Y;Q();h=new P;h.b=D(16);O(h,h.a,b,10);k=new N;f=h.b;i=h.a;j=D(i);k.e=j;M(f,0,j,0,i);c.c=1;c.d=1;c.f=k;H(c);}
function MY(a,b){var c,d,e,f,g,h,i,j,k;c=a.iv;d=c.e.data.length;if(b>=0&&b<=d){e=a.dB;e.dA=0;e.iJ=2;f=e.bR.data;g=0;h=f.length;if(g>h){c=new Bh;Df(c);H(c);}while(g<h){i=g+1|0;f[g]=(-1);g=i;}f=e.bB.data;g=0;h=f.length;if(g>h){c=new Bh;Df(c);H(c);}while(g<h){i=g+1|0;f[g]=(-1);g=i;}e.eC=e.dq;e.iJ=1;e.eC=b;d=e.h0;if(d<0)d=b;e.h0=d;b=a.yo.c9(b,c,e);if(b==(-1))a.dB.dn=1;if(b>=0){c=a.dB;b=c.dA;if(b){f=c.bR.data;if(f[0]==(-1)){g=c.eC;f[0]=g;f[1]=g;}if(!b){c=new BK;c.c=1;c.d=1;CE(c);H(c);}if(0<c.ec){c.h0=f[1];return 1;}c
=new Y;Q();e=new P;CO(e);e.b=D(16);O(e,e.a,0,10);j=new N;f=e.b;d=e.a;k=D(d);j.e=k;M(f,0,k,0,d);c.c=1;c.d=1;c.f=j;H(c);}}a.dB.eC=(-1);return 0;}c=new Y;Q();e=new P;e.b=D(16);O(e,e.a,b,10);j=new N;f=e.b;d=e.a;k=D(d);j.e=k;M(f,0,k,0,d);c.c=1;c.d=1;c.f=j;H(c);}
function Ha(a){var b,c,d,e,f,g,h,i,j,k,l;b=a.iv.e.data.length;c=a.dB;if(!c.li)b=a.l8;if(c.eC>=0&&c.iJ==1){d=c.dA;if(!d){c=new BK;c.c=1;c.d=1;H(c);}e=Bo(0,c.ec);if(e>=0){c=new Y;Q();f=new P;f.b=D(16);O(f,f.a,0,10);g=new N;h=f.b;b=f.a;i=D(b);g.e=i;M(h,0,i,0,b);c.c=1;c.d=1;c.f=g;H(c);}h=c.bR.data;j=h[1];c.eC=j;if(!d){c=new BK;c.c=1;c.d=1;H(c);}if(e>=0){c=new Y;Q();f=new P;f.b=D(16);O(f,f.a,0,10);g=new N;h=f.b;b=f.a;i=D(b);g.e=i;M(h,0,i,0,b);c.c=1;c.d=1;c.f=g;H(c);}k=h[1];if(!d){c=new BK;c.c=1;c.d=1;H(c);}if(e<
0){if(k==h[0])c.eC=j+1|0;l=c.eC;return l<=b&&MY(a,l)?1:0;}c=new Y;Q();f=new P;f.b=D(16);O(f,f.a,0,10);g=new N;h=f.b;b=f.a;i=D(b);g.e=i;M(h,0,i,0,b);c.c=1;c.d=1;c.f=g;H(c);}return MY(a,a.k1);}
function AGM(a,b,c){var d,e;a.k1=(-1);a.l8=(-1);a.zP=b;a.yo=b.tu;a.iv=c;a.k1=0;d=c.e.data.length;a.l8=d;e=A0O(c,0,d,b.iD,b.f9+1|0,b.co+1|0);a.dB=e;e.g7=1;}
var Cc=G(Bh);
function TA(){var a=new Cc();AQK(a);return a;}
function A_P(a){var b=new Cc();IL(b,a);return b;}
function AQK(a){a.c=1;a.d=1;}
function IL(a,b){a.c=1;a.d=1;a.f=b;}
function NH(){C.call(this);this.ga=null;}
function AH6(a){var b=new NH();AOL(b,a);return b;}
function AOL(a,b){a.ga=b;}
function IX(a,b){}
function AGA(a,b){var c,d,e,f,g,h,i,j,$$je;if(b===null)b=Bj(C,0);a:{b:{c:{try{c=AE9(a.ga,b);}catch($$e){$$je=Br($$e);if($$je instanceof Bh){c=$$je;break b;}else if($$je instanceof KQ){c=$$je;break c;}else if($$je instanceof Ln){c=$$je;break a;}else if($$je instanceof Qv){c=$$je;d=new Dv;e=a.ga.fv;if(e.bb===null)e.bb=$rt_str(e.G.$meta.name);e=e.bb;f=new P;f.b=D(16);I(f,f.a,B(168));g=f.a;if(e===null)e=B(2);I(f,g,e);h=new N;b=f.b;i=f.a;Q();j=D(i);h.e=j;M(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cX=c;H(d);}else{throw $$e;}}return c;}d
=new Dv;e=a.ga.fv;if(e.bb===null)e.bb=$rt_str(e.G.$meta.name);e=e.bb;f=new P;f.b=D(16);I(f,f.a,B(169));DI(f,f.a,e);AEO(d,Cy(f),c);H(d);}d=new Dv;e=a.ga.fv;if(e.bb===null)e.bb=$rt_str(e.G.$meta.name);e=e.bb;f=new P;f.b=D(16);I(f,f.a,B(170));g=f.a;if(e===null)e=B(2);I(f,g,e);h=new N;b=f.b;i=f.a;Q();j=D(i);h.e=j;M(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cX=c;H(d);}d=new Dv;e=a.ga.fv;if(e.bb===null)e.bb=$rt_str(e.G.$meta.name);e=e.bb;f=new P;f.b=D(16);I(f,f.a,B(169));g=f.a;if(e===null)e=B(2);I(f,g,e);h=new N;b=f.b;i=f.a;Q();j
=D(i);h.e=j;M(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cX=c;H(d);}
var Kg=G(BJ);
var E3=G(CI);
var HY=G(E3);
function B7(){var a=this;C.call(a);a.p=null;a.df=0;a.A=null;a.b0=0;}
var A44=0;function JR(a){var b,c;b=A44;A44=b+1|0;c=new Bl;c.b=D(20);a.A=(O(c,c.a,b,10)).s();}
function AI7(a,b,c,d){var e;e=d.Y;while(true){if(b>e)return (-1);if(a.o(b,c,d)>=0)break;b=b+1|0;}return b;}
function AKb(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.o(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ARP(a,b){a.b0=b;}
function ARl(a){return a.b0;}
function AMh(a){var b,c,d,e,f,g,h;b=a.A;c=a.X();d=new P;d.b=D(16);e=d.a;Bd(d,e,e+1|0);d.b.data[e]=60;f=d.a;if(b===null)b=B(2);I(d,f,b);e=d.a;Bd(d,e,e+1|0);d.b.data[e]=58;f=d.a;if(c===null)c=B(2);I(d,f,c);e=d.a;Bd(d,e,e+1|0);g=d.b;g.data[e]=62;b=new N;e=d.a;Q();h=D(e);b.e=h;M(g,0,h,0,e);return b;}
function ANF(a){var b,c,d,e,f,g,h;b=a.A;c=a.X();d=new P;d.b=D(16);e=d.a;Bd(d,e,e+1|0);d.b.data[e]=60;f=d.a;if(b===null)b=B(2);I(d,f,b);e=d.a;Bd(d,e,e+1|0);d.b.data[e]=58;f=d.a;if(c===null)c=B(2);I(d,f,c);e=d.a;Bd(d,e,e+1|0);g=d.b;g.data[e]=62;b=new N;e=d.a;Q();h=D(e);b.e=h;M(g,0,h,0,e);return b;}
function AN5(a){return a.p;}
function La(a,b){a.p=b;}
function AW4(a,b){return 1;}
function AXH(a){return null;}
function J4(a){var b;a.df=1;b=a.p;if(b!==null){if(!b.df){b=b.hf();if(b!==null){a.p.df=1;a.p=b;}a.p.e6();}else if(b instanceof H5&&b.dd.pv)a.p=b.p;}}
function APz(){A44=1;}
var Zg=G();
var VE=G();
var ZE=G();
var LL=G(0);
var NK=G();
function AIl(a,b){var c;BB();b=b===null?null:b instanceof $rt_objcls()?b:Cb(b);c=A_L;b=b===null?null:b.Q;c.delete(b);}
var ACa=G();
var NL=G();
function AP$(a,b){var c;BB();b=b===null?null:b instanceof $rt_objcls()?b:Cb(b);c=A_M;b=b===null?null:b.Q;c.delete(b);}
var Qd=G(0);
function He(){var a=this;C.call(a);a.cQ=null;a.dZ=null;}
function Js(){var a=this;He.call(a);a.mw=null;a.tW=0;}
function Di(){var a=this;B7.call(a);a.pv=0;a.cy=0;}
var A_H=null;function FG(){FG=V(Di);ASp();}
function AHG(a,b,c,d){var e,f,g;e=a.cy;f=d.bR.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.p.o(b,c,d);if(g<0){b=a.cy;d.bR.data[(b*2|0)+1|0]=e;}return g;}
function AUl(a){return a.cy;}
function AKv(a){return B(171);}
function AHY(a,b){return 0;}
function ASp(){var b,c,d;b=new QG;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);b.A=(O(d,d.a,c,10)).s();A_H=b;}
function IQ(){var a=this;C.call(a);a.b2=null;a.cA=0;a.fD=0;a.uJ=0;a.ft=0;a.b_=0;a.E=0;a.dt=0;a.bZ=null;a.eY=null;a.F=0;a.cp=0;a.gR=0;a.ki=0;a.c0=null;}
var A_Q=null;var A_R=null;var A_S=0;function A18(a,b){var c=new IQ();AW6(c,a,b);return c;}
function AW6(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{a.fD=1;a.c0=b;if((c&16)>0){d=new P;d.b=D(16);I(d,d.a,B(172));e=0;while(true){f=LQ(b,B(173),e);if(f<0){g=b.e;f=g.data.length;h=Bo(e,f);if(h>0){b=new Y;b.c=1;b.d=1;H(b);}if(!h)b=A9m;else if(!(!e&&f==f)){b=new N;h=f-e|0;i=D(h);b.e=i;M(g,e,i,0,h);}I(d,d.a,b);I(d,d.a,B(173));b=new N;i=d.b;f=d.a;g=D(f);b.e=g;M(i,0,g,0,f);break a;}j=f+2|0;h=Bo(e,j);if(h>0)break;if(!h)k=A9m;else if(!e&&j==b.e.data.length)k=b;else{k=new N;g=b.e;h=j-e|0;i=D(h);k.e=i;M(g,e,i,0,h);}I(d,d.a,
k);I(d,d.a,B(174));e=j;}b=new Y;b.c=1;b.d=1;H(b);}else if((c&128)<=0){}}i=b.e.data;f=i.length;g=D(f+2|0);a.b2=g;l=D(f);m=l.data;h=0;e=m.length;while(h<e){m[h]=i[h];h=h+1|0;}M(l,0,g,0,f);i=a.b2.data;h=i.length;i[h-1|0]=0;i[h-2|0]=0;a.dt=h;a.cA=c;Cx(a);Cx(a);}
function F6(a){return a.b_;}
function QT(a,b){if(b>0&&b<3)a.fD=b;if(b==1){a.E=a.b_;a.eY=a.bZ;a.F=a.ki;a.ki=a.gR;Cx(a);}}
function AAL(a,b){var c;a.cA=b;a.E=a.b_;a.eY=a.bZ;c=a.gR;a.F=c+1|0;a.ki=c;Cx(a);}
function NV(a){return a.bZ;}
function IV(a){return a.bZ===null?0:1;}
function BW(a){Cx(a);return a.ft;}
function HR(a){var b;b=a.bZ;Cx(a);return b;}
function Gz(a){return a.E;}
function Vu(a){return a.ft;}
function Cx(a){var b,c,d,e,f,g,h,$$je;a.ft=a.b_;a.b_=a.E;a.bZ=a.eY;a.gR=a.ki;a.ki=a.F;while(true){b=0;c=a.F>=a.b2.data.length?0:K3(a);a.E=c;a.eY=null;if(a.fD==4){if(c!=92)return;c=a.F;d=a.b2.data;c=c>=d.length?0:d[D3(a)];a.E=c;switch(c){case 69:break;default:a.E=92;a.F=a.cp;return;}a.fD=a.uJ;a.E=a.F>(a.b2.data.length-2|0)?0:K3(a);}a:{c=a.E;if(c!=92){e=a.fD;if(e==1)switch(c){case 36:a.E=(-536870876);break a;case 40:if(a.b2.data[a.F]!=63){a.E=(-2147483608);break a;}D3(a);c=a.b2.data[a.F];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.E=(-134217688);D3(a);break b;default:H(Ex(B(42),Eh(a),a.F));}a.E=(-67108824);D3(a);}else{switch(c){case 33:break;case 60:D3(a);c=a.b2.data[a.F];e=1;break b;case 61:a.E=(-536870872);D3(a);break b;case 62:a.E=(-33554392);D3(a);break b;default:f=AGq(a);a.E=f;if(f<256){a.cA=f;f=f<<16;a.E=f;a.E=(-1073741784)|f;break b;}f=f&255;a.E=f;a.cA=f;f=f<<16;a.E=f;a.E=(-16777176)|f;break b;}a.E=(-268435416);D3(a);}}if(!e)break;}break a;case 41:a.E=(-536870871);break a;case 42:case 43:case 63:e
=a.F;d=a.b2.data;switch(e>=d.length?42:d[e]){case 43:a.E=c|(-2147483648);D3(a);break a;case 63:a.E=c|(-1073741824);D3(a);break a;default:}a.E=c|(-536870912);break a;case 46:a.E=(-536870866);break a;case 91:a.E=(-536870821);QT(a,2);break a;case 93:if(e!=2)break a;a.E=(-536870819);break a;case 94:a.E=(-536870818);break a;case 123:a.eY=Y4(a,c);break a;case 124:a.E=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.E=(-536870874);break a;case 45:a.E=(-536870867);break a;case 91:a.E=(-536870821);break a;case 93:a.E
=(-536870819);break a;case 94:a.E=(-536870818);break a;default:}}else{c=a.F>=(a.b2.data.length-2|0)?(-1):K3(a);c:{a.E=c;switch(c){case -1:H(Ex(B(42),Eh(a),a.F));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.E
=Xy(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fD!=1)break a;a.E=(-2147483648)|c;break a;case 65:a.E=(-2147483583);break a;case 66:a.E=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:H(Ex(B(42),Eh(a),a.F));case 68:case 83:case 87:case 100:case 115:case 119:a.eY=OF(AIr(a.b2,
a.cp,1),0);a.E=0;break a;case 71:a.E=(-2147483577);break a;case 80:case 112:break c;case 81:a.uJ=a.fD;a.fD=4;b=1;break a;case 90:a.E=(-2147483558);break a;case 97:a.E=7;break a;case 98:a.E=(-2147483550);break a;case 99:c=a.F;d=a.b2.data;if(c>=(d.length-2|0))H(Ex(B(42),Eh(a),a.F));a.E=d[D3(a)]&31;break a;case 101:a.E=27;break a;case 102:a.E=12;break a;case 110:a.E=10;break a;case 114:a.E=13;break a;case 116:a.E=9;break a;case 117:a.E=Re(a,4);break a;case 120:a.E=Re(a,2);break a;case 122:a.E=(-2147483526);break a;default:}break a;}g
=ADL(a);h=0;if(a.E==80)h=1;try{a.eY=OF(g,h);}catch($$e){$$je=Br($$e);if($$je instanceof Lt){H(Ex(B(42),Eh(a),a.F));}else{throw $$e;}}a.E=0;}}if(b)continue;else break;}}
function ADL(a){var b,c,d,e,f,g,h,i;b=new P;b.b=D(10);c=a.F;d=a.b2;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=new N;a.cp=c;if(a.cA&4)C$(a);else a.F=c+1|0;f=a.cp;Q();e=D(1);b.e=e;M(d,f,e,0,1);g=new P;g.b=D(16);I(g,g.a,B(175));I(g,g.a,b);b=new N;d=g.b;h=g.a;e=D(h);b.e=e;M(d,0,e,0,h);return b;}a.cp=c;if(a.cA&4)C$(a);else a.F=c+1|0;c=0;a:{while(true){h=a.F;d=a.b2.data;if(h>=(d.length-2|0))break;a.cp=h;if(a.cA&4)C$(a);else a.F=h+1|0;c=d[a.cp];if(c==125)break a;h=b.a;Bd(b,h,h+1|0);b.b.data[h]=c;}}if(c!=125){b=
new Dd;i=a.c0;c=a.F;b.c=1;b.d=1;b.bG=(-1);b.c_=B(42);b.c$=i;b.bG=c;H(b);}}c=b.a;if(!c){b=new Dd;i=a.c0;c=a.F;b.c=1;b.d=1;b.bG=(-1);b.c_=B(42);b.c$=i;b.bG=c;H(b);}g=new N;d=b.b;Q();e=D(c);g.e=e;M(d,0,e,0,c);h=g.e.data.length;if(h==1){b=new P;b.b=D(16);I(b,b.a,B(175));I(b,b.a,g);g=new N;d=b.b;h=b.a;e=D(h);g.e=e;M(d,0,e,0,h);return g;}b:{c:{if(h>3){if(g===B(175)?1:JP(g,B(175),0))break c;if(g===B(176)?1:JP(g,B(176),0))break c;}break b;}g=FI(g,2,g.e.data.length);}return g;}
function Y4(a,b){var c,d,e,f,g,h,i,$$je;c=new P;c.b=D(4);d=(-1);e=2147483647;a:{while(true){f=a.F;g=a.b2.data;if(f>=g.length)break a;a.cp=f;if(a.cA&4)C$(a);else a.F=f+1|0;b=g[a.cp];if(b==125)break a;if(b==44&&d<0)try{d=Kf(Cy(c),10);Y9(c,0,HM(c));continue;}catch($$e){$$je=Br($$e);if($$je instanceof Cc){break;}else{throw $$e;}}h=b&65535;f=c.a;Bd(c,f,f+1|0);c.b.data[f]=h;}c=new Dd;i=a.c0;b=a.F;c.c=1;c.d=1;c.bG=(-1);c.c_=B(42);c.c$=i;c.bG=b;H(c);}if(b!=125){c=new Dd;i=a.c0;b=a.F;c.c=1;c.d=1;c.bG=(-1);c.c_=B(42);c.c$
=i;c.bG=b;H(c);}if(c.a>0)b:{try{e=Kf(Cy(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Br($$e);if($$je instanceof Cc){}else{throw $$e;}}c=new Dd;i=a.c0;b=a.F;c.c=1;c.d=1;c.bG=(-1);c.c_=B(42);c.c$=i;c.bG=b;H(c);}else if(d<0){c=new Dd;i=a.c0;b=a.F;c.c=1;c.d=1;c.bG=(-1);c.c_=B(42);c.c$=i;c.bG=b;H(c);}if((d|e|(e-d|0))<0){c=new Dd;i=a.c0;b=a.F;c.c=1;c.d=1;c.bG=(-1);c.c_=B(42);c.c$=i;c.bG=b;H(c);}f=a.F;g=a.b2.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.E=(-2147483525);a.cp=f;if(a.cA&4)C$(a);else a.F=f+
1|0;break c;case 63:a.E=(-1073741701);a.cp=f;if(a.cA&4)C$(a);else a.F=f+1|0;break c;default:}a.E=(-536870789);}c=new Qo;c.f5=d;c.f3=e;return c;}
function Eh(a){return a.c0;}
function L4(a){return !a.b_&&!a.E&&a.F==a.dt&&!(a.bZ===null?0:1)?1:0;}
function AS$(b){return b<0?0:1;}
function P1(a){var b,c;b=a.b_;c=!b&&!a.E&&a.F==a.dt&&!(a.bZ===null?0:1)?1:0;return !c&&!(a.bZ===null?0:1)&&(b<0?0:1)?1:0;}
function AEJ(a){var b;b=a.b_;return b<=57343&&b>=56320?1:0;}
function ALS(b){return b<=56319&&b>=55296?1:0;}
function AIz(b){return b<=57343&&b>=56320?1:0;}
function Re(a,b){var c,d,e,f,g,h,i,j,$$je;c=new P;c.b=D(b);d=a.b2.data.length-2|0;e=0;while(true){f=Bo(e,b);if(f>=0)break;g=a.F;if(g>=d)break;h=a.b2;a.cp=g;if(a.cA&4)C$(a);else a.F=g+1|0;g=h.data[a.cp];i=c.a;Bd(c,i,i+1|0);c.b.data[i]=g;e=e+1|0;}if(!f)a:{try{b=Kf(Cy(c),16);}catch($$e){$$je=Br($$e);if($$je instanceof Cc){break a;}else{throw $$e;}}return b;}c=new Dd;j=a.c0;b=a.F;c.c=1;c.d=1;c.bG=(-1);c.c_=B(42);c.c$=j;c.bG=b;H(c);}
function Xy(a){var b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.b2.data;e=d.length-2|0;f=Jq(d[a.F]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.F;a.cp=g;if(a.cA&4)C$(a);else a.F=g+1|0;a:{while(true){if(c>=b)break a;h=a.F;if(h>=e)break a;i=Jq(a.b2.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.F;a.cp=g;if(a.cA&4)C$(a);else a.F=g+1|0;c=c+1|0;}}return f;}j=new Dd;k=a.c0;b=a.F;j.c=1;j.d=1;j.bG=(-1);j.c_=B(42);j.c$=k;j.bG=b;H(j);}
function AGq(a){var b,c,d,e,f,g,h;b=1;c=a.cA;a:while(true){d=a.F;e=a.b2.data;if(d>=e.length){f=new Dd;g=a.c0;f.c=1;f.d=1;f.bG=(-1);f.c_=B(42);f.c$=g;f.bG=d;H(f);}b:{c:{switch(e[d]){case 41:a.cp=d;if(a.cA&4)C$(a);else a.F=d+1|0;return c|256;case 45:if(!b){h=new Dd;g=a.c0;h.c=1;h.d=1;h.bG=(-1);h.c_=B(42);h.c$=g;h.bG=d;H(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.cp=d;if(a.cA&4)C$(a);else a.F=d+1|0;}a.cp=d;if(a.cA&4)C$(a);else a.F=d+1|0;return c;}
function D3(a){var b;b=a.F;a.cp=b;if(a.cA&4)C$(a);else a.F=b+1|0;return a.cp;}
function C$(a){var b,c,d,e;b=a.b2.data.length-2|0;a.F=a.F+1|0;a:while(true){c=a.F;if(c<b){b:{c=a.b2.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CH(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.F=a.F+1|0;continue;}}c=a.F;if(c>=b)break;d=a.b2.data;if(d[c]!=35)break;a.F=c+1|0;while(true){e=a.F;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.F
=e+1|0;}}return c;}
function AI5(b){var c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?GA([d,e]):GA([d,e,4519+f|0]);}return null;}
function ALO(b){return A_R.lE(b)==A_S?0:1;}
function AVp(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function K3(a){var b,c,d,e,f;b=a.b2;c=a.F;a.cp=c;if(a.cA&4)C$(a);else a.F=c+1|0;b=b.data;d=a.cp;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.b2.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.F;a.cp=d;if(a.cA&4)C$(a);else a.F=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;}
function FL(a){return a.gR;}
function Dd(){var a=this;Bh.call(a);a.c_=null;a.c$=null;a.bG=0;}
function Ex(a,b,c){var d=new Dd();AQC(d,a,b,c);return d;}
function AQC(a,b,c,d){a.c=1;a.d=1;a.bG=(-1);a.c_=b;a.c$=c;a.bG=d;}
function AXD(a){var b,c,d,e,f,g,h,i,j,k;b=B(42);c=a.bG;if(c>=1){d=D(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bh;b.c=1;b.d=1;H(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new N;Q();e=D(f);b.e=e;M(d,0,e,0,f);}h=a.c_;i=a.c$;if(i!==null&&i.e.data.length){j=a.bG;k=new P;k.b=D(16);O(k,k.a,j,10);I(k,k.a,B(58));I(k,k.a,i);I(k,k.a,B(58));I(k,k.a,b);b=new N;d=k.b;c=k.a;Q();e=D(c);b.e=e;M(d,0,e,0,c);}else b=B(42);i=new P;i.b=D(16);j=i.a;if(h===null)h=B(2);I(i,j,h);I(i,i.a,b);b=new N;d=i.b;c=i.a;Q();e=D(c);b.e=e;M(d,0,e,0,c);return b;}
var Jn=G(0);
var H8=G();
function ABC(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.bi;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new B9;b.G=f;c=b;f.classObject=c;}}b=E6(b);if(b===null){b=new CK;b.c=1;b.d=1;H(b);}if(b===L($rt_voidcls())){b=new Bh;b.c=1;b.d=1;H(b);}if(d<0){b=new D1;b.c=1;b.d=1;H(b);}b=EU(b.G,d);}e=0;g=0;h=a.cI;i=a.bi;d=Bo(h,h);a:{while(true){j=Bo(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new MC;b.c=1;b.d=1;H(b);}k=g+1|0;if(g<0)break a;if(j
>=0)break a;b.data[e]=a.bY.data[g];e=h;g=k;}return b;}b=new Y;b.c=1;b.d=1;H(b);}
var RM=G(0);
var Qn=G(0);
function LG(){H8.call(this);this.cI=0;}
var O8=G(0);
function Jm(){var a=this;LG.call(a);a.bY=null;a.bi=0;}
function AZ$(){var a=new Jm();AJV(a);return a;}
function AJV(a){a.bY=Bj(C,10);}
function Gy(a,b){var c,d,e,f,g,h,i,j;c=a.bY;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new B9;i.G=h;j=i;h.classObject=j;}}h=E6(i);if(h===null){i=new CK;i.c=1;i.d=1;H(i);}if(h===L($rt_voidcls())){i=new Bh;i.c=1;i.d=1;H(i);}if(f<0){i=new D1;i.c=1;i.d=1;H(i);}j=EU(h.G,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.bY=j;}}
function Ib(a,b){var c;if(b>=0&&b<a.bi)return a.bY.data[b];c=new Y;c.c=1;c.d=1;H(c);}
function Mm(a){return a.bi;}
function I8(a,b){var c,d;Gy(a,a.bi+1|0);c=a.bY.data;d=a.bi;a.bi=d+1|0;c[d]=b;a.cI=a.cI+1|0;return 1;}
function ACE(a,b,c){var d,e,f;if(b>=0){d=a.bi;if(b<=d){Gy(a,d+1|0);d=a.bi;e=d;while(e>b){f=a.bY.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.bY.data[b]=c;a.bi=d+1|0;a.cI=a.cI+1|0;return;}}c=new Y;c.c=1;c.d=1;H(c);}
function Pq(a,b){var c,d,e,f;if(b>=0){c=a.bi;if(b<c){d=a.bY.data;e=d[b];c=c-1|0;a.bi=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.cI=a.cI+1|0;return e;}}e=new Y;e.c=1;e.d=1;H(e);}
var Oy=G(Di);
function AQq(a,b,c,d){var e,f;e=a.cy;f=d.bB.data;f[e]=b-f[e]|0;return a.p.o(b,c,d);}
function ARX(a){return B(177);}
function AV$(a,b){return 0;}
var Ty=G(Di);
function ARM(a,b,c,d){return b;}
function ATy(a){return B(178);}
var N0=G(Di);
function AH4(a,b,c,d){var e;e=a.cy;if(d.bB.data[e]!=b)b=(-1);return b;}
function AW1(a){return B(179);}
function OP(){Di.call(this);this.vB=0;}
function AQz(a,b,c,d){var e,f;e=a.cy;f=d.bB.data;f[e]=b-f[e]|0;a.vB=b;return b;}
function AN8(a){return B(180);}
function AVn(a,b){return 0;}
var Hl=G(Di);
function A2m(){var a=new Hl();AWW(a);return a;}
function AWW(a){var b,c;FG();b=A44;A44=b+1|0;c=new Bl;c.b=D(20);a.A=(O(c,c.a,b,10)).s();a.cy=0;}
function AOR(a,b,c,d){if(d.iJ!=1&&b!=d.Y)return (-1);d.dA=1;d.bR.data[1]=b;return b;}
function ARq(a){return B(181);}
function Cs(){B7.call(this);this.bq=0;}
function AAd(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.p=b;a.bq=1;a.b0=1;}
function AX2(a,b,c,d){var e;if((b+a.cP()|0)>d.Y){d.dn=1;return (-1);}e=a.cn(b,c);if(e<0)return (-1);return a.p.o(b+e|0,c,d);}
function AWH(a){return a.bq;}
function AKY(a,b){return 1;}
var Pz=G(Cs);
function JO(a){var b=new Pz();AUo(b,a);return b;}
function AUo(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.p=b;a.bq=1;a.b0=1;a.bq=0;}
function AWm(a,b,c){return 0;}
function ASu(a,b,c,d){var e,f,g,h,i;e=d.Y;f=d.dq;a:{b:{while(true){g=Bo(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;h=c.e.data;i=h.length;if(b>=i)break b;if(((h[b]&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=i)break a;if((h[g]&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.p.o(b,c,d)>=0)break;b=b+1|0;}return b;}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}
function ARE(a,b,c,d,e){var f,g,h,i,j;f=e.Y;g=e.dq;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;h=d.e.data;i=h.length;if(c>=i)break b;if(((h[c]&64512)!=56320?0:1)&&c>g){j=c-1|0;if(j<0)break a;if(j>=i)break a;if((h[j]&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.p.o(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new X;d.c=1;d.d=1;H(d);}d=new X;d.c=1;d.d=1;H(d);}
function AKw(a){return B(182);}
function AQw(a,b){return 0;}
function Cl(){var a=this;B7.call(a);a.b7=null;a.dd=null;a.bO=0;}
function A_T(){var a=new Cl();AAR(a);return a;}
function AZE(a,b){var c=new Cl();AML(c,a,b);return c;}
function AAR(a){var b,c;b=A44;A44=b+1|0;c=new Bl;c.b=D(20);a.A=(O(c,c.a,b,10)).s();}
function AML(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.b7=b;a.dd=c;a.bO=c.cy;}
function AKd(a,b,c,d){var e,f,g,h,i,j;e=a.b7;if(e===null)return (-1);f=a.bO;g=d.bR.data;h=f*2|0;i=g[h];g[h]=b;f=e.bi;j=0;a:{while(true){if(j>=f){b=a.bO;d.bR.data[b*2|0]=i;return (-1);}e=a.b7;if(j<0)break a;if(j>=e.bi)break a;h=e.bY.data[j].o(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new Y;c.c=1;c.d=1;H(c);}
function AM4(a,b){a.dd.p=b;}
function AK7(a){return B(183);}
function AT3(a,b){var c,d,e,f,g;a:{b:{c=a.b7;if(c!==null){d=0;e=c.cI;f=c.bi;while(true){if(!(d>=f?0:1))break b;if(e<c.cI){b=new MC;b.c=1;b.d=1;H(b);}g=d+1|0;if(d<0)break a;if(d>=c.bi)break a;if(c.bY.data[d].cH(b))break;d=g;}return 1;}}return 0;}b=new Y;b.c=1;b.d=1;H(b);}
function ANt(a,b){var c,d,e;c=a.bO;d=b.bR.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;}
function AIu(a){var b,c,d,e;a.df=1;b=a.dd;if(b!==null&&!b.df)J4(b);a:{b:{b=a.b7;if(b!==null){c=b.bi;d=0;while(true){if(d>=c)break b;b=a.b7;if(d<0)break a;if(d>=b.bi)break a;b=b.bY.data[d];e=b.hf();if(e===null)e=b;else{b.df=1;Pq(a.b7,d);ACE(a.b7,d,e);}if(!e.df)e.e6();d=d+1|0;}}}if(a.p!==null)J4(a);return;}b=new Y;b.c=1;b.d=1;H(b);}
var MP=G(Cl);
function A04(a,b){var c=new MP();AQJ(c,a,b);return c;}
function AQJ(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.b7=b;a.dd=c;a.bO=c.cy;}
function AMR(a,b,c,d){var e,f,g,h,i,j;e=a.bO;f=d.bB.data;g=f[e];f[e]=b;h=a.b7.bi;e=0;a:{while(true){if(e>=h){b=a.bO;d.bB.data[b]=g;return (-1);}i=a.b7;if(e<0)break a;if(e>=i.bi)break a;j=i.bY.data[e].o(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new Y;c.c=1;c.d=1;H(c);}
function ALR(a){return B(184);}
function AVU(a,b){var c;c=a.bO;return !b.bB.data[c]?0:1;}
var Fe=G(MP);
function A1s(a,b){var c=new Fe();AKM(c,a,b);return c;}
function AKM(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.b7=b;a.dd=c;a.bO=c.cy;}
function AR9(a,b,c,d){var e,f,g,h,i,j;e=a.bO;f=d.bB.data;g=f[e];f[e]=b;h=a.b7.bi;i=0;a:{while(i<h){j=a.b7;if(i<0)break a;if(i>=j.bi)break a;if(j.bY.data[i].o(b,c,d)>=0)return a.p.o(a.dd.vB,c,d);i=i+1|0;}b=a.bO;d.bB.data[b]=g;return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function AVM(a,b){a.p=b;}
function AHh(a){return B(184);}
var ZT=G(Fe);
function A1U(a,b){var c=new ZT();AJ$(c,a,b);return c;}
function AJ$(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.b7=b;a.dd=c;a.bO=c.cy;}
function AM0(a,b,c,d){var e,f,g;e=a.b7.bi;f=0;a:{while(f<e){g=a.b7;if(f<0)break a;if(f>=g.bi)break a;if(g.bY.data[f].o(b,c,d)>=0)return a.p.o(b,c,d);f=f+1|0;}return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function AOI(a,b){return 0;}
function AXF(a){return B(185);}
var AFn=G(Fe);
function A1e(a,b){var c=new AFn();AJM(c,a,b);return c;}
function AJM(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.b7=b;a.dd=c;a.bO=c.cy;}
function AHU(a,b,c,d){var e,f,g;e=a.b7.bi;f=0;a:{while(true){if(f>=e)return a.p.o(b,c,d);g=a.b7;if(f<0)break a;if(f>=g.bi)break a;if(g.bY.data[f].o(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function AWK(a,b){return 0;}
function AJ9(a){return B(186);}
var ACj=G(Fe);
function AYY(a,b){var c=new ACj();AOk(c,a,b);return c;}
function AOk(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.b7=b;a.dd=c;a.bO=c.cy;}
function AIs(a,b,c,d){var e,f,g,h,i;e=a.b7.bi;f=d.li?0:d.dq;a:{b:{g=a.p.o(b,c,d);if(g>=0){h=a.bO;d.bB.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.b7;if(h<0)break a;if(h>=i.bi)break a;if(i.bY.data[h].dh(f,b,c,d)>=0){b=a.bO;d.bB.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function AYg(a,b){return 0;}
function AMD(a){return B(187);}
var Xo=G(Fe);
function A2c(a,b){var c=new Xo();AQo(c,a,b);return c;}
function AQo(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.b7=b;a.dd=c;a.bO=c.cy;}
function AP4(a,b,c,d){var e,f,g;e=a.b7.bi;f=a.bO;d.bB.data[f]=b;f=0;a:{while(true){if(f>=e)return a.p.o(b,c,d);g=a.b7;if(f<0)break a;if(f>=g.bi)break a;if(g.bY.data[f].dh(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new Y;c.c=1;c.d=1;H(c);}
function AV3(a,b){return 0;}
function AH5(a){return B(188);}
function H5(){Cl.call(this);this.dJ=null;}
function A3e(a,b){var c=new H5();AIR(c,a,b);return c;}
function AIR(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.dJ=b;a.dd=c;a.bO=c.cy;}
function AG9(a,b,c,d){var e,f,g;e=a.bO;f=d.bR.data;e=e*2|0;g=f[e];f[e]=b;e=a.dJ.o(b,c,d);if(e>=0)return e;e=a.bO;d.bR.data[e*2|0]=g;return (-1);}
function ALZ(a,b,c,d){var e;e=a.dJ.c9(b,c,d);if(e>=0){b=a.bO;d.bR.data[b*2|0]=e;}return e;}
function AWc(a,b,c,d,e){var f;f=a.dJ.dh(b,c,d,e);if(f>=0){b=a.bO;e.bR.data[b*2|0]=f;}return f;}
function ATX(a,b){return a.dJ.cH(b);}
function AVk(a){var b,c,d,e,f;b=new M_;c=a.dJ;d=a.dd;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);b.A=(O(f,f.a,e,10)).s();b.dJ=c;b.dd=d;b.bO=d.cy;a.p=b;return b;}
function APf(a){var b;a.df=1;b=a.dd;if(b!==null&&!b.df)J4(b);b=a.dJ;if(b!==null&&!b.df){b=b.hf();if(b!==null){a.dJ.df=1;a.dJ=b;}a.dJ.e6();}}
var Hp=G();
function Bs(){var a=this;Hp.call(a);a.T=0;a.de=0;a.z=null;a.mP=null;a.nc=null;a.by=0;}
var A_U=null;function Bz(){Bz=V(Bs);AIV();}
function Kv(a){var b;Bz();b=new Bt;b.w=Bc(64);a.z=b;}
function AQ$(a){return null;}
function AQG(a){return a.z;}
function ADp(a){return !a.de?(Io(a.z,0)>=2048?0:1):XN(a.z,0)>=2048?0:1;}
function AS8(a){return a.by;}
function AWB(a){return a;}
function Un(a){var b,c;if(a.nc===null){b=a.gg();c=new PC;c.Gi=a;c.vJ=b;b=new Bt;b.w=Bc(64);c.z=b;a.nc=c;ES(c,a.de);}return a.nc;}
function Jo(a){var b,c;if(a.mP===null){b=a.gg();c=new PB;c.BC=a;c.yi=b;c.uN=a;b=new Bt;b.w=Bc(64);c.z=b;a.mP=c;ES(c,a.T);a.mP.by=a.by;}return a.mP;}
function AXE(a){return 0;}
function ES(a,b){var c;c=a.T;if(c^b){a.T=c?0:1;a.de=a.de?0:1;}if(!a.by)a.by=1;return a;}
function AJN(a){return a.T;}
function OF(b,c){Bz();b=AFW(A_U,b);if(!c&&b.hU===null)b.hU=b.bm();else if(c&&b.hJ===null)b.hJ=ES(b.bm(),1);return c?b.hJ:b.hU;}
function AIV(){var b;b=new HA;ANK();A_U=b;}
function CB(){var a=this;Bs.call(a);a.mp=0;a.m_=0;a.iE=0;a.n2=0;a.eL=0;a.d9=0;a.D=null;a.bz=null;}
function CP(a,b){var c;a:{if(a.mp){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eL){MT(a.D,HQ(b&65535));break a;}KV(a.D,HQ(b&65535));break a;}if(a.m_&&b>128){a.iE=1;if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}b=B0(A$P,b);if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}b=B0(A$N,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.n2)MT(a.z,b-55296|0);else KV(a.z,b-55296|0);}if(a.eL)MT(a.D,
b);else KV(a.D,b);if(!a.by&&(b>=65536&&b<=1114111?1:0))a.by=1;return a;}
function AGw(a,b){var c,d,e;if(!a.by&&b.by)a.by=1;if(a.n2){if(!b.de)Gw(a.z,b.gg());else DZ(a.z,b.gg());}else if(!b.de)GU(a.z,b.gg());else{GM(a.z,b.gg());DZ(a.z,b.gg());a.de=a.de?0:1;a.n2=1;}if(!a.d9&&b.cl()!==null){if(a.eL){if(!b.T)Gw(a.D,b.cl());else DZ(a.D,b.cl());}else if(!b.T)GU(a.D,b.cl());else{GM(a.D,b.cl());DZ(a.D,b.cl());a.T=a.T?0:1;a.eL=1;}}else{c=a.T;d=a.bz;if(d!==null){if(!c){e=new QN;e.Dn=a;e.yL=c;e.uE=d;e.uz=b;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}else{e=new QO;e.GK=a;e.tn=c;e.wQ=d;e.wz=b;Bz();b
=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}}else{if(c&&!a.eL&&(a.D.b5?0:1)){d=new QK;d.EN=a;d.wU=b;Bz();b=new Bt;b.w=Bc(64);d.z=b;a.bz=d;}else if(!c){d=new QI;d.pQ=a;d.pc=c;d.v3=b;Bz();b=new Bt;b.w=Bc(64);d.z=b;a.bz=d;}else{d=new QJ;d.or=a;d.m8=c;d.uB=b;Bz();b=new Bt;b.w=Bc(64);d.z=b;a.bz=d;}a.d9=1;}}return a;}
function BN(a,b,c){var d;if(b>c){d=new Bh;d.c=1;d.d=1;H(d);}a:{b:{if(!a.mp){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CP(a,b);b=b+1|0;}}if(a.eL)Z8(a.D,b,c+1|0);else IE(a.D,b,c+1|0);}return a;}
function ZQ(a,b){var c,d,e,f;if(!a.by&&b.by)a.by=1;if(b.iE)a.iE=1;c=a.de;if(!(c^b.de)){if(!c)GU(a.z,b.z);else DZ(a.z,b.z);}else if(c)Gw(a.z,b.z);else{GM(a.z,b.z);DZ(a.z,b.z);a.de=1;}a:{if(!a.d9){d=b.d9;if((!d?b.D:null)!==null){c=a.T;if(!(c^b.T)){if(!c){GU(a.D,!d?b.D:null);break a;}DZ(a.D,!d?b.D:null);break a;}if(c){Gw(a.D,!d?b.D:null);break a;}GM(a.D,!d?b.D:null);DZ(a.D,!b.d9?b.D:null);a.T=1;break a;}}c=a.T;e=a.bz;if(e!==null){if(c){f=new NO;f.zW=a;f.yy=c;f.rh=e;f.rz=b;Kv(f);a.bz=f;}else{f=new NA;f.zg=a;f.uf
=c;f.yn=e;f.uV=b;Bz();f.z=AVN(2048);a.bz=f;}}else{if(!a.eL&&(a.D.b5?0:1)){if(!c){e=new QL;e.GO=a;e.ss=b;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}else{e=new QM;e.DI=a;e.yw=b;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}}else if(!c){e=new QP;e.ug=a;e.tt=b;e.wT=c;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}else{e=new QQ;e.tD=a;e.tN=b;e.xy=c;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}a.d9=1;}}}
function PJ(a,b){var c,d,e,f;if(!a.by&&b.by)a.by=1;if(b.iE)a.iE=1;c=a.de;if(!(c^b.de)){if(!c)DZ(a.z,b.z);else GU(a.z,b.z);}else if(!c)Gw(a.z,b.z);else{GM(a.z,b.z);DZ(a.z,b.z);a.de=0;}a:{if(!a.d9){d=b.d9;if((!d?b.D:null)!==null){c=a.T;if(!(c^b.T)){if(!c){DZ(a.D,!d?b.D:null);break a;}GU(a.D,!d?b.D:null);break a;}if(!c){Gw(a.D,!d?b.D:null);break a;}GM(a.D,!d?b.D:null);DZ(a.D,!b.d9?b.D:null);a.T=0;break a;}}c=a.T;e=a.bz;if(e!==null){if(c){f=new ND;f.DR=a;f.xL=c;f.vs=e;f.x0=b;Kv(f);a.bz=f;}else{f=new NC;f.Dk=a;f.x4
=c;f.vH=e;f.tk=b;Bz();f.z=AVN(2048);a.bz=f;}}else{if(!a.eL&&(a.D.b5?0:1)){if(!c){e=new Ny;e.z7=a;e.wk=b;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}else{e=new Nz;e.GH=a;e.sm=b;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}}else if(!c){e=new NE;e.yZ=a;e.yK=b;e.tJ=c;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}else{e=new Nx;e.tI=a;e.xV=b;e.wX=c;Bz();b=new Bt;b.w=Bc(64);e.z=b;a.bz=e;}a.d9=1;}}}
function AIC(a,b){var c;c=a.bz;if(c!==null)return a.T^c.C(b);return a.T^CC(a.D,b);}
function API(a){if(!a.d9)return a.D;return null;}
function ASo(a){return a.z;}
function AOA(a){var b,c;if(a.bz!==null)return a;b=!a.d9?a.D:null;c=new NB;c.CV=a;c.l7=b;Bz();b=new Bt;b.w=Bc(64);c.z=b;return ES(c,a.T);}
function AUM(a){var b,c,d,e,f,g,h,i,j,k;b=new P;b.b=D(16);c=Io(a.D,0);while(c>=0){if(c<65536){d=D(1);d.data[0]=c&65535;}else d=E1([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;f=0;g=e.length;h=b.a;Bd(b,h,h+g|0);g=g+f|0;while(f<g){d=b.b.data;i=h+1|0;j=f+1|0;d[h]=e[f];h=i;f=j;}g=b.a;Bd(b,g,g+1|0);b.b.data[g]=124;c=Io(a.D,c+1|0);}h=b.a;if(h>0)Th(b,h-1|0);k=new N;d=b.b;h=b.a;Q();e=D(h);k.e=e;M(d,0,e,0,h);return k;}
function AJP(a){return a.iE;}
function Lt(){var a=this;BJ.call(a);a.Cp=null;a.Gl=null;}
function EM(){B7.call(this);this.V=null;}
function UB(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;}
function AX7(a){return a.V;}
function ANS(a,b){return !a.V.cH(b)&&!a.p.cH(b)?0:1;}
function AXc(a,b){return 1;}
function AMc(a){var b;a.df=1;b=a.p;if(b!==null&&!b.df){b=b.hf();if(b!==null){a.p.df=1;a.p=b;}a.p.e6();}b=a.V;if(b!==null){if(!b.df){b=b.hf();if(b!==null){a.V.df=1;a.V=b;}a.V.e6();}else if(b instanceof H5&&b.dd.pv)a.V=b.p;}}
function DK(){EM.call(this);this.bp=null;}
function A0g(a,b,c){var d=new DK();AMU(d,a,b,c);return d;}
function AMU(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;a.bp=b;}
function AP6(a,b,c,d){var e,f;e=0;a:{while((b+a.bp.cP()|0)<=d.Y){f=a.bp.cn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.p.o(b,c,d);if(f>=0)break;b=b-a.bp.cP()|0;e=e+(-1)|0;}return f;}
function ARz(a){return B(189);}
function Gh(){DK.call(this);this.gG=null;}
function A1Y(a,b,c,d){var e=new Gh();ALy(e,a,b,c,d);return e;}
function ALy(a,b,c,d,e){var f,g;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);a.A=(O(g,g.a,f,10)).s();a.p=d;a.V=c;a.b0=e;a.bp=c;a.gG=b;}
function AQU(a,b,c,d){var e,f,g,h,i;e=a.gG;f=e.f5;g=e.f3;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bp.cP()|0)>d.Y)break a;i=a.bp.cn(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.p.o(b,c,d);if(i>=0)break;b=b-a.bp.cP()|0;h=h+(-1)|0;}return i;}if((b+a.bp.cP()|0)>d.Y){d.dn=1;return (-1);}i=a.bp.cn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function ARb(a){return Sa(a.gG);}
var DO=G(EM);
function A1K(a,b,c){var d=new DO();AN_(d,a,b,c);return d;}
function AN_(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;}
function AQh(a,b,c,d){var e;if(!a.V.bs(d))return a.p.o(b,c,d);e=a.V.o(b,c,d);if(e>=0)return e;return a.p.o(b,c,d);}
function ATm(a){return B(190);}
var Ge=G(DK);
function AZU(a,b,c){var d=new Ge();AUa(d,a,b,c);return d;}
function AUa(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;a.bp=b;}
function AUf(a,b,c,d){var e;e=a.V.o(b,c,d);if(e<0)e=a.p.o(b,c,d);return e;}
function APL(a,b){a.p=b;a.V.bA(b);}
var YO=G(DK);
function AYT(a){var b=new YO();AKU(b,a);return b;}
function AKU(a,b){var c,d,e,f;c=b.V;d=b.p;e=b.b0;f=A44;A44=f+1|0;b=new Bl;b.b=D(20);a.A=(O(b,b.a,f,10)).s();a.p=d;a.V=c;a.b0=e;a.bp=c;c.bA(a);}
function AXY(a,b,c,d){while((b+a.bp.cP()|0)<=d.Y&&a.bp.cn(b,c)>0){b=b+a.bp.cP()|0;}return a.p.o(b,c,d);}
function AMn(a,b,c,d){var e,f,g;e=a.p.c9(b,c,d);if(e<0)return (-1);f=e-a.bp.cP()|0;while(f>=b&&a.bp.cn(f,c)>0){g=f-a.bp.cP()|0;e=f;f=g;}return e;}
function By(){var a=this;C.call(a);a.hU=null;a.hJ=null;}
function AVX(a,b){if(!b&&a.hU===null)a.hU=a.bm();else if(b&&a.hJ===null)a.hJ=ES(a.bm(),1);if(b)return a.hJ;return a.hU;}
function Qo(){var a=this;Hp.call(a);a.f5=0;a.f3=0;}
function Sa(a){var b,c,d,e,f,g,h;b=a.f5;c=a.f3;if(c==2147483647)d=B(42);else{d=new Bl;d.b=D(20);d=(O(d,d.a,c,10)).s();}e=new P;e.b=D(16);c=e.a;Bd(e,c,c+1|0);e.b.data[c]=123;O(e,e.a,b,10);b=e.a;Bd(e,b,b+1|0);e.b.data[b]=44;f=e.a;if(d===null)d=B(2);I(e,f,d);b=e.a;Bd(e,b,b+1|0);g=e.b;g.data[b]=125;d=new N;b=e.a;Q();h=D(b);d.e=h;M(g,0,h,0,b);return d;}
var QG=G(B7);
function ALj(a,b,c,d){return b;}
function AVe(a){return B(191);}
function AVj(a,b){return 0;}
function Bt(){var a=this;C.call(a);a.w=null;a.b5=0;}
function AVN(a){var b=new Bt();AQj(b,a);return b;}
function AQj(a,b){var c;if(b>=0){a.w=Bc(((b+32|0)-1|0)/32|0);return;}c=new D1;c.c=1;c.d=1;H(c);}
function KV(a,b){var c,d,e;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=b/32|0;if(b>=a.b5){JN(a,d+1|0);a.b5=b+1|0;}e=a.w.data;e[d]=e[d]|1<<(b%32|0);}
function IE(a,b,c){var d,e,f,g,h,i;if(b>=0){d=Bo(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.b5){JN(a,e+1|0);a.b5=c;}if(d==e){f=a.w.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.w.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new Y;i.c=1;i.d=1;H(i);}
function MT(a,b){var c,d,e,f,g;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=b/32|0;e=a.w.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.b5-1|0))HB(a);}}
function Z8(a,b,c){var d,e,f,g,h,i;if(b>=0&&b<=c){d=a.b5;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.w.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.w.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}HB(a);return;}i=new Y;i.c=1;i.d=1;H(i);}
function CC(a,b){var c,d,e;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=b/32|0;e=a.w.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
function Io(a,b){var c,d,e,f,g;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=a.b5;if(b>=d)return (-1);e=b/32|0;f=a.w.data;g=f[e]>>>(b%32|0)|0;if(g)return Dt(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+Dt(f[g])|0;g=g+1|0;}return (-1);}
function XN(a,b){var c,d,e,f,g,h;if(b<0){c=new Y;c.c=1;c.d=1;H(c);}d=a.b5;if(b>=d)return b;e=b/32|0;f=a.w.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return Dt(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+Dt(f[h]^(-1))|0;h=h+1|0;}return d;}
function JN(a,b){var c,d,e,f,g,h;c=a.w.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=Bc(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.w=g;}
function HB(a){var b,c,d;b=(a.b5+31|0)/32|0;a.b5=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=LA(a.w.data[c]);if(d<32)break;c=c+(-1)|0;a.b5=a.b5-32|0;}a.b5=a.b5-d|0;}}
function IR(a,b){var c,d,e,f,g;c=a.w.data;d=c.length;e=b.w.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;}
function DZ(a,b){var c,d,e,f,g,h,i;c=a.w.data;d=c.length;e=b.w.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.b5;i=b.b5;if(h<i)i=h;a.b5=i;HB(a);}
function Gw(a,b){var c,d,e,f,g;c=a.w.data;d=c.length;e=b.w.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}HB(a);}
function GU(a,b){var c,d,e,f,g;c=a.b5;d=b.b5;if(c>d)d=c;a.b5=d;JN(a,(d+31|0)/32|0);e=a.w.data;c=e.length;f=b.w.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}}
function GM(a,b){var c,d,e,f,g;c=a.b5;d=b.b5;if(c>d)d=c;a.b5=d;JN(a,(d+31|0)/32|0);e=a.w.data;c=e.length;f=b.w.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}HB(a);}
function M1(){var a=this;Cl.call(a);a.k7=null;a.pf=0;}
function V9(a,b,c,d){var e,f,g,h,i,j,k;e=d.dq;f=d.Y;g=b+1|0;f=Bo(g,f);if(f>0){d.dn=1;return (-1);}if(b>=0){h=c.e.data;if(b<h.length){i=h[b];if(!a.k7.C(i))return (-1);j=i&64512;k=j!=55296?0:1;a:{if(k){if(f>=0)break a;if(g>=0){h=c.e.data;if(g<h.length){if((h[g]&64512)!=56320?0:1)return (-1);break a;}}c=new X;c.c=1;c.d=1;H(c);}if((j!=56320?0:1)&&b>e){k=b-1|0;if(k>=0){h=c.e.data;if(k<h.length){if(!((h[k]&64512)!=55296?0:1))break a;return (-1);}}c=new X;c.c=1;c.d=1;H(c);}}return a.p.o(g,c,d);}}c=new X;c.c=1;c.d=
1;H(c);}
function AVq(a){var b,c,d,e,f,g,h;b=!a.pf?B(192):B(193);c=a.k7.s();d=new P;d.b=D(16);I(d,d.a,B(194));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new N;f=d.b;g=d.a;Q();h=D(g);b.e=h;M(f,0,h,0,g);return b;}
function G_(){var a=this;Cl.call(a);a.gH=null;a.g_=null;}
function AHD(a,b,c,d){var e;e=a.gH.o(b,c,d);if(e<0)e=V9(a.g_,b,c,d);if(e>=0)return e;return (-1);}
function AU_(a,b){a.p=b;a.g_.p=b;a.gH.bA(b);}
function AVA(a){var b,c,d,e,f,g,h,i;b=a.gH;Q();if(b===null)b=B(2);else{c=b.A;b=b.X();d=new P;d.b=D(16);e=d.a;Bd(d,e,e+1|0);d.b.data[e]=60;CR(d,d.a,c===null?B(2):C2(c));e=d.a;Bd(d,e,e+1|0);d.b.data[e]=58;CR(d,d.a,b===null?B(2):C2(b));e=d.a;Bd(d,e,e+1|0);f=d.b;f.data[e]=62;b=new N;e=d.a;g=D(e);b.e=g;M(f,0,g,0,e);}c=a.g_;if(c===null)h=B(2);else{d=c.A;h=!c.pf?B(192):B(193);c=c.k7.s();i=new P;i.b=D(16);DI(i,i.a,B(194));DI(i,i.a,h);DI(i,i.a,c);c=new N;g=i.b;e=i.a;f=D(e);c.e=f;M(g,0,f,0,e);i=new P;i.b=D(16);e=i.a;Bd(i,
e,e+1|0);i.b.data[e]=60;CR(i,i.a,d===null?B(2):C2(d));e=i.a;Bd(i,e,e+1|0);i.b.data[e]=58;CR(i,i.a,C2(c));e=i.a;Bd(i,e,e+1|0);g=i.b;g.data[e]=62;h=new N;e=i.a;f=D(e);h.e=f;M(g,0,f,0,e);}c=new P;c.b=D(16);I(c,c.a,B(195));I(c,c.a,b);I(c,c.a,B(196));I(c,c.a,h);b=new N;g=c.b;e=c.a;f=D(e);b.e=f;M(g,0,f,0,e);return b;}
function AH$(a,b){return 1;}
function AHV(a,b){return 1;}
function D7(){var a=this;Cl.call(a);a.dl=null;a.hM=0;}
function A2v(a){var b=new D7();AVx(b,a);return b;}
function AVx(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.dl=b.kq();a.hM=b.T;}
function ASl(a,b,c,d){var e,f,g,h,i;a:{e=d.Y;if(b<e){f=b+1|0;if(b>=0){g=c.e.data;if(b<g.length){h=g[b];if(a.C(h)){i=a.p.o(f,c,d);if(i>0)return i;}if(f>=e)break a;e=f+1|0;if(f>=0){g=c.e.data;if(f<g.length){f=g[f];b=(h&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.C(((h&1023)<<10|f&1023)+65536|0))break a;else return a.p.o(e,c,d);}}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}}return (-1);}
function AXA(a){var b,c,d,e,f,g,h;b=!a.hM?B(192):B(193);c=a.dl.s();d=new P;d.b=D(16);I(d,d.a,B(194));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new N;f=d.b;g=d.a;Q();h=D(g);b.e=h;M(f,0,h,0,g);return b;}
function AJW(a,b){return a.dl.C(b);}
function AHz(a,b){var c,d,e;if(b instanceof Fm){c=a.dl;d=b.hx;Bz();return c.C(d);}if(b instanceof EO){c=a.dl;d=b.dj;Bz();return c.C(d);}if(b instanceof D7){c=a.dl;b=b.dl;Bz();return c.cl()!==null&&b.cl()!==null?IR(c.cl(),b.cl()):1;}if(!(b instanceof EI))return 1;c=a.dl;e=b.ej;Bz();return c.cl()!==null&&e.cl()!==null?IR(c.cl(),e.cl()):1;}
function ALa(a){return a.dl;}
function AWy(a,b){a.p=b;}
function AJH(a,b){return 1;}
var Ql=G(D7);
function A20(a){var b=new Ql();AI3(b,a);return b;}
function AI3(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.dl=b.kq();a.hM=b.T;}
function AKZ(a,b){var c;c=a.dl;if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}b=B0(A$P,b);if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}return c.C(B0(A$N,b));}
function APl(a){var b,c,d,e,f,g,h;b=!a.hM?B(192):B(193);c=a.dl.s();d=new P;d.b=D(16);I(d,d.a,B(197));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new N;f=d.b;g=d.a;Q();h=D(g);b.e=h;M(f,0,h,0,g);return b;}
function NF(){var a=this;Cs.call(a);a.md=null;a.nX=0;}
function AZm(a){var b=new NF();AMy(b,a);return b;}
function AMy(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.bq=1;a.md=b.kq();a.nX=b.T;}
function ATI(a,b,c){var d,e;d=a.md;if(b>=0){e=c.e.data;if(b<e.length){b=e[b];if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}b=B0(A$P,b)&65535;if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}return !d.C(B0(A$N,b)&65535)?(-1):1;}}c=new X;c.c=1;c.d=1;H(c);}
function ARf(a){var b,c,d,e,f,g,h;b=!a.nX?B(192):B(193);c=a.md.s();d=new P;d.b=D(16);I(d,d.a,B(197));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new N;f=d.b;g=d.a;Q();h=D(g);b.e=h;M(f,0,h,0,g);return b;}
function EI(){var a=this;Cs.call(a);a.ej=null;a.on=0;}
function A0N(a){var b=new EI();ANm(b,a);return b;}
function ANm(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.bq=1;a.ej=b.kq();a.on=b.T;}
function APP(a,b,c){var d,e;d=a.ej;if(b>=0){e=c.e.data;if(b<e.length)return !d.C(e[b])?(-1):1;}c=new X;c.c=1;c.d=1;H(c);}
function ALp(a){var b,c,d,e,f,g,h;b=!a.on?B(192):B(193);c=a.ej.s();d=new P;d.b=D(16);I(d,d.a,B(194));I(d,d.a,b);e=d.a;if(c===null)c=B(2);I(d,e,c);b=new N;f=d.b;g=d.a;Q();h=D(g);b.e=h;M(f,0,h,0,g);return b;}
function AM5(a,b){var c,d,e;if(b instanceof EO){c=a.ej;d=b.dj;Bz();return c.C(d);}if(b instanceof EI){c=a.ej;b=b.ej;Bz();return c.cl()!==null&&b.cl()!==null?IR(c.cl(),b.cl()):1;}if(!(b instanceof D7)){if(!(b instanceof Fm))return 1;return 0;}c=a.ej;e=b.dl;Bz();return c.cl()!==null&&e.cl()!==null?IR(c.cl(),e.cl()):1;}
function Jp(){var a=this;Cl.call(a);a.fT=null;a.fj=null;a.jv=0;}
function AL3(a,b){a.p=b;}
function ANL(a){var b,c,d,e,f,g,h;if(a.fj===null){b=new N;c=a.fT;d=c.data;Q();e=d.length;d=D(e);b.e=d;M(c,0,d,0,e);a.fj=b;}f=a.fj;b=new P;b.b=D(16);I(b,b.a,B(198));g=b.a;if(f===null)f=B(2);I(b,g,f);h=new N;c=b.b;e=b.a;Q();d=D(e);h.e=d;M(c,0,d,0,e);return h;}
function AGT(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.Y;f=Bc(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0){j=c.e.data;if(b<j.length){k=j[b];j=AI5(k);if(j!==null){j=j.data;l=0;b=j.length;k=a.jv;if(b!=k)return (-1);while(true){if(l>=k)return a.p.o(i,c,d);if(j[l]!=a.fT.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=k;m=k-4352|0;if(m>=0&&m<19){a:{if(i<e){if(i>=0){j=c.e.data;if(i<j.length){k=j[i];g=k-4449|0;break a;}}c=new X;c.c=1;c.d=1;H(c);}}if(g>=0&&g<21){b:{b=i+1|0;f[1]=k;if(b<e){if(b>=0){j=c.e.data;if(b
<j.length){k=j[b];h=k-4519|0;break b;}}c=new X;c.c=1;c.d=1;H(c);}}if(h>=0&&h<28){c:{b=b+1|0;f[2]=k;if(a.jv==3){k=f[0];j=a.fT.data;if(k==j[0]&&f[1]==j[1]&&f[2]==j[2]){b=a.p.o(b,c,d);break c;}}b=(-1);}return b;}d:{if(a.jv==2){k=f[0];j=a.fT.data;if(k==j[0]&&f[1]==j[1]){b=a.p.o(b,c,d);break d;}}b=(-1);}return b;}return (-1);}return (-1);}}c=new X;c.c=1;c.d=1;H(c);}
function ARi(a,b){var c,d,e,f,g;a:{if(b instanceof Jp){b=b;if(b.fj===null){c=new N;d=b.fT;e=d.data;Q();f=e.length;e=D(f);c.e=e;M(d,0,e,0,f);b.fj=c;}c=b.fj;if(a.fj===null){b=new N;d=a.fT;e=d.data;Q();f=e.length;e=D(f);b.e=e;M(d,0,e,0,f);a.fj=b;}if(!BC(c,a.fj)){g=0;break a;}}g=1;}return g;}
function AOC(a,b){return 1;}
function EO(){Cs.call(this);this.dj=0;}
function AI9(a){var b=new EO();ANn(b,a);return b;}
function ANn(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.bq=1;a.dj=b;}
function ATz(a){return 1;}
function AKq(a,b,c){var d,e;d=a.dj;if(b>=0){e=c.e.data;if(b<e.length)return d!=e[b]?(-1):1;}c=new X;c.c=1;c.d=1;H(c);}
function AJt(a,b,c,d){var e,f,g,h,i,j;if(c instanceof N){e=d.Y;while(true){if(b>=e)return (-1);f=Ea(c,a.dj,b);if(f<0)return (-1);g=a.p;b=f+1|0;if(g.o(b,c,d)>=0)break;}return f;}h=d.Y;a:{b:{while(true){if(b>h){b=(-1);break b;}f=b+1|0;if(f>d.Y){d.dn=1;i=(-1);}else{i=a.dj;if(b<0)break a;j=c.e.data;if(b>=j.length)break a;i=i!=j[b]?(-1):1;i=i<0?(-1):a.p.o(b+i|0,c,d);}if(i>=0)break;b=f;}}return b;}c=new X;Df(c);H(c);}
function ALd(a,b,c,d,e){var f,g;if(d instanceof N){a:{while(true){if(c<b)return (-1);f=EX(d,a.dj,c);if(f<0)break a;if(f<b)break a;if(a.p.o(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.Y){e.dn=1;f=(-1);}else{f=a.dj;if(c<0)break b;g=d.e.data;if(c>=g.length)break b;f=f!=g[c]?(-1):1;f=f<0?(-1):a.p.o(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new X;Df(d);H(d);}
function AOK(a){var b,c,d,e,f,g;b=a.dj;c=new P;c.b=D(16);d=c.a;Bd(c,d,d+1|0);e=c.b;e.data[d]=b;f=new N;d=c.a;Q();g=D(d);f.e=g;M(e,0,g,0,d);return f;}
function AOy(a,b){var c,d,e,f,g;if(b instanceof EO)return b.dj!=a.dj?0:1;if(!(b instanceof EI)){if(b instanceof D7)return b.C(a.dj);if(!(b instanceof Fm))return 1;return 0;}b=b;c=a.dj;d=D(1);e=d.data;e[0]=c;Q();f=e.length;g=D(f);e=g.data;M(d,0,g,0,f);b=b.ej;if(0>=e.length){b=new X;b.c=1;b.d=1;H(b);}return (!b.C(e[0])?(-1):1)<=0?0:1;}
function PR(){Cs.call(this);this.lO=0;}
function A3n(a){var b=new PR();AUG(b,a);return b;}
function AUG(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.bq=1;if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}b=B0(A$P,b)&65535;if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}a.lO=B0(A$N,b)&65535;}
function APS(a,b,c){var d,e;d=a.lO;if(b>=0){e=c.e.data;if(b<e.length){b=e[b];if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}b=B0(A$P,b)&65535;if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}return d!=(B0(A$N,b)&65535)?(-1):1;}}c=new X;c.c=1;c.d=1;H(c);}
function AU$(a){var b,c,d,e,f,g;b=a.lO;c=new P;c.b=D(16);I(c,c.a,B(199));d=c.a;Bd(c,d,d+1|0);e=c.b;e.data[d]=b;f=new N;d=c.a;Q();g=D(d);f.e=g;M(e,0,g,0,d);return f;}
function MZ(){var a=this;Cs.call(a);a.lG=0;a.pn=0;}
function A1I(a){var b=new MZ();ANH(b,a);return b;}
function ANH(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.bq=1;a.lG=b;a.pn=HQ(b);}
function AG6(a,b,c){var d,e,f;d=a.lG;if(b>=0){e=c.e.data;f=Bo(b,e.length);if(f<0){a:{b:{if(d!=e[b]){d=a.pn;if(b<0)break a;if(f>=0)break a;if(d!=e[b]){b=(-1);break b;}}b=1;}return b;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}
function AKD(a){var b,c,d,e,f,g;b=a.lG;c=new P;c.b=D(16);I(c,c.a,B(200));d=c.a;Bd(c,d,d+1|0);e=c.b;e.data[d]=b;f=new N;d=c.a;Q();g=D(d);f.e=g;M(e,0,g,0,d);return f;}
function Gk(){var a=this;Cl.call(a);a.g9=0;a.eT=null;a.gq=null;a.gp=0;}
function A4h(a,b){var c=new Gk();AHN(c,a,b);return c;}
function AHN(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.g9=1;a.gq=b;a.gp=c;}
function AXJ(a,b){a.p=b;}
function AMQ(a,b,c,d){var e,f,g,h,i,j,k;e=Bc(4);f=d.Y;if(b>=f)return (-1);g=Ky(a,b,c,f);h=b+a.g9|0;i=A_Q.AR(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;M(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=Ky(a,h,c,f);while(b<4){if(!AVp(g)){k=b+1|0;i[b]=g;}else{j=(A_Q.AR(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.g9|0;if(h>=f){b=k;break a;}g=Ky(a,h,c,f);b=k;}}}if(b!=a.gp)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.p.o(h,c,d);if(j[g]!=a.gq.data[g])break;g
=g+1|0;}return (-1);}
function AU4(a){var b,c,d,e,f,g,h,i;if(a.eT===null){b=new P;b.b=D(16);c=0;while(c<a.gp){d=a.gq.data[c];if(d<65536){e=D(1);e.data[0]=d&65535;}else e=E1([(55296|(d-65536|0)>>10&1023)&65535,(56320|d&1023)&65535]);f=e.data.length;Lu(b,b.a,e,0,f);c=c+1|0;}g=new N;h=b.b;d=b.a;Q();e=D(d);g.e=e;M(h,0,e,0,d);a.eT=g;}i=a.eT;b=new P;b.b=D(16);I(b,b.a,B(201));c=b.a;if(i===null)i=B(2);I(b,c,i);g=new N;h=b.b;d=b.a;Q();e=D(d);g.e=e;M(h,0,e,0,d);return g;}
function Ky(a,b,c,d){var e,f,g,h;a:{a.g9=1;if(b>=(d-1|0)){if(b>=0){e=c.e.data;if(b<e.length){f=e[b];break a;}}c=new X;c.c=1;c.d=1;H(c);}d=b+1|0;if(b>=0){e=c.e.data;g=e.length;if(b<g){f=e[b];if(d>=0&&d<g){g=e[d];b=(f&64512)!=55296?0:1;if(b&&((g&64512)!=56320?0:1)?1:0){e=D(2);h=e.data;h[0]=f;h[1]=g;f=AAM(e,0,h.length);a.g9=2;}break a;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}return f;}
function ALl(a,b){var c,d,e,f,g,h,i,j,k;a:{if(b instanceof Gk){b=b;if(b.eT===null){c=new P;c.b=D(16);d=0;while(d<b.gp){e=b.gq.data[d];if(e<65536){f=D(1);f.data[0]=e&65535;}else f=E1([(55296|(e-65536|0)>>10&1023)&65535,(56320|e&1023)&65535]);g=f.data.length;Lu(c,c.a,f,0,g);d=d+1|0;}h=new N;f=c.b;e=c.a;Q();i=D(e);h.e=i;M(f,0,i,0,e);b.eT=h;}c=b.eT;if(a.eT===null){b=new P;b.b=D(16);d=0;while(d<a.gp){j=a.gq.data[d];if(j<65536){f=D(1);f.data[0]=j&65535;}else f=E1([(55296|(j-65536|0)>>10&1023)&65535,(56320|j&1023)
&65535]);k=f.data.length;Lu(b,b.a,f,0,k);d=d+1|0;}h=new N;f=b.b;e=b.a;Q();i=D(e);h.e=i;M(f,0,i,0,e);a.eT=h;}if(!BC(c,a.eT)){d=0;break a;}}d=1;}return d;}
function AVO(a,b){return 1;}
var Zh=G(Gk);
function A31(a,b){var c=new Zh();ATk(c,a,b);return c;}
function ATk(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.g9=1;a.gq=b;a.gp=c;}
var AEa=G(Gk);
function AZF(a,b){var c=new AEa();ARm(c,a,b);return c;}
function ARm(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.g9=1;a.gq=b;a.gp=c;}
var Qb=G(DO);
function ART(a,b,c,d){var e;while(true){e=a.V.o(b,c,d);if(e<=0)break;b=e;}return a.p.o(b,c,d);}
var Rd=G(DO);
function AUy(a,b,c,d){var e;e=a.V.o(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.V.o(e,c,d);if(b<=e)break;e=b;}b=e;}return a.p.o(b,c,d);}
var Im=G(DO);
function A3_(a,b,c){var d=new Im();AP9(d,a,b,c);return d;}
function AP9(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;}
function AWu(a,b,c,d){var e;if(!a.V.bs(d))return a.p.o(b,c,d);e=a.V.o(b,c,d);if(e>=0)return e;return a.p.o(b,c,d);}
function AXj(a,b){a.p=b;a.V.bA(b);}
var NU=G(Im);
function AK_(a,b,c,d){var e;e=a.V.o(b,c,d);if(e<=0)e=b;return a.p.o(e,c,d);}
function AUQ(a,b){a.p=b;}
function GD(){var a=this;DO.call(a);a.eV=null;a.d0=0;}
function A_V(a,b,c,d,e){var f=new GD();ZZ(f,a,b,c,d,e);return f;}
function ZZ(a,b,c,d,e,f){var g,h;g=A44;A44=g+1|0;h=new Bl;h.b=D(20);a.A=(O(h,h.a,g,10)).s();a.p=d;a.V=c;a.b0=e;a.eV=b;a.d0=f;}
function AYe(a,b,c,d){var e,f,g,h;e=a.d0;e=d.eG.data[e];if(!a.V.bs(d))return a.p.o(b,c,d);if(e>=a.eV.f3)return a.p.o(b,c,d);f=a.d0;e=e+1|0;d.eG.data[f]=e;g=a.V.o(b,c,d);if(g>=0){b=a.d0;d.eG.data[b]=0;return g;}g=a.d0;e=e+(-1)|0;h=d.eG.data;h[g]=e;if(e>=a.eV.f5)return a.p.o(b,c,d);h[g]=0;return (-1);}
function AOX(a){return Sa(a.eV);}
var Nb=G(GD);
function AKH(a,b,c,d){var e,f,g;e=0;f=a.eV.f3;a:{while(true){g=a.V.o(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.eV.f5)return (-1);return a.p.o(b,c,d);}
var Ow=G(DO);
function APo(a,b,c,d){var e;if(!a.V.bs(d))return a.p.o(b,c,d);e=a.p.o(b,c,d);if(e>=0)return e;return a.V.o(b,c,d);}
var AB1=G(Im);
function AY6(a,b,c){var d=new AB1();AM9(d,a,b,c);return d;}
function AM9(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;}
function AIa(a,b,c,d){var e;if(!a.V.bs(d))return a.p.o(b,c,d);e=a.p.o(b,c,d);if(e<0)e=a.V.o(b,c,d);return e;}
var Po=G(GD);
function A_W(a,b,c,d,e){var f=new Po();Xl(f,a,b,c,d,e);return f;}
function Xl(a,b,c,d,e,f){var g,h;g=A44;A44=g+1|0;h=new Bl;h.b=D(20);a.A=(O(h,h.a,g,10)).s();a.p=d;a.V=c;a.b0=e;a.eV=b;a.d0=f;}
function AQA(a,b,c,d){var e,f,g;e=a.d0;f=d.eG.data[e];if(!a.V.bs(d))return a.p.o(b,c,d);g=a.eV;if(f>=g.f3){e=a.d0;d.eG.data[e]=0;return a.p.o(b,c,d);}if(f<g.f5){e=a.d0;d.eG.data[e]=f+1|0;e=a.V.o(b,c,d);}else{e=a.p.o(b,c,d);if(e>=0){b=a.d0;d.eG.data[b]=0;return e;}e=a.d0;d.eG.data[e]=f+1|0;e=a.V.o(b,c,d);}return e;}
var Wn=G(EM);
function AZb(a,b,c){var d=new Wn();AHw(d,a,b,c);return d;}
function AHw(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;}
function AX4(a,b,c,d){var e;e=d.Y;if(e>b)return a.p.dh(b,e,c,d);return a.p.o(b,c,d);}
function AOc(a,b,c,d){var e;e=d.Y;if(a.p.dh(b,e,c,d)>=0)return b;return (-1);}
function AVD(a){return B(202);}
function AAK(){EM.call(this);this.k4=null;}
function AYI(a,b,c,d){var e=new AAK();AVy(e,a,b,c,d);return e;}
function AVy(a,b,c,d,e){var f,g;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);a.A=(O(g,g.a,f,10)).s();a.p=c;a.V=b;a.b0=d;a.k4=e;}
function AM6(a,b,c,d){var e,f,g,h;e=d.Y;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.k4;if(f<0)break;h=c.e.data;if(f>=h.length)break;if(g.hX(h[f]))break a;f=f+1|0;}c=new X;c.c=1;c.d=1;H(c);}if(f>=0)e=f;if(e>b)return a.p.dh(b,e,c,d);return a.p.o(b,c,d);}
function AGW(a,b,c,d){var e,f,g,h,i,j,k;e=d.Y;f=a.p.c9(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.k4;if(g<0)break;i=c.e.data;if(g>=i.length)break;if(h.hX(i[g]))break a;g=g+1|0;}c=new X;c.c=1;c.d=1;H(c);}if(g>=0)e=g;j=a.p.dh(f,e,c,d);if(f>j)j=f;if(j<=0)k=j?(-1):0;else{k=j-1|0;b:{while(true){if(k<b){k=(-1);break b;}d=a.k4;if(k<0)break;i=c.e.data;if(k>=i.length)break;if(d.hX(i[k]))break b;k=k+(-1)|0;}c=new X;c.c=1;c.d=1;H(c);}}if(k>=b)b=k>=j?k:k+1|0;return b;}
function AV8(a){return B(203);}
var F7=G();
var A_X=null;var A_Y=null;function Q6(b){var c;if(!(b&1)){c=A_Y;if(c!==null)return c;c=new SP;A_Y=c;return c;}c=A_X;if(c!==null)return c;c=new SO;A_X=c;return c;}
var AGE=G(DK);
function A0w(a,b,c){var d=new AGE();ANv(d,a,b,c);return d;}
function ANv(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;a.bp=b;}
function AHq(a,b,c,d){var e;a:{while(true){if((b+a.bp.cP()|0)>d.Y)break a;e=a.bp.cn(b,c);if(e<1)break;b=b+e|0;}}return a.p.o(b,c,d);}
var YN=G(Ge);
function A1k(a,b,c){var d=new YN();AXQ(d,a,b,c);return d;}
function AXQ(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;a.bp=b;}
function AMg(a,b,c,d){var e;if((b+a.bp.cP()|0)<=d.Y){e=a.bp.cn(b,c);if(e>=1)b=b+e|0;}return a.p.o(b,c,d);}
var AAV=G(Gh);
function A0R(a,b,c,d){var e=new AAV();AUr(e,a,b,c,d);return e;}
function AUr(a,b,c,d,e){var f,g;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);a.A=(O(g,g.a,f,10)).s();a.p=d;a.V=c;a.b0=e;a.bp=c;a.gG=b;}
function AWh(a,b,c,d){var e,f,g,h,i;e=a.gG;f=e.f5;g=e.f3;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bp.cP()|0)>d.Y)break a;i=a.bp.cn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.p.o(b,c,d);}if((b+a.bp.cP()|0)>d.Y){d.dn=1;return (-1);}i=a.bp.cn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var ABX=G(DK);
function A3S(a,b,c){var d=new ABX();APM(d,a,b,c);return d;}
function APM(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;a.bp=b;}
function AM1(a,b,c,d){var e;while(true){e=a.p.o(b,c,d);if(e>=0)break;if((b+a.bp.cP()|0)<=d.Y){e=a.bp.cn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var AEi=G(Ge);
function A3G(a,b,c){var d=new AEi();ASy(d,a,b,c);return d;}
function ASy(a,b,c,d){var e,f;e=A44;A44=e+1|0;f=new Bl;f.b=D(20);a.A=(O(f,f.a,e,10)).s();a.p=c;a.V=b;a.b0=d;a.bp=b;}
function AHv(a,b,c,d){var e;e=a.p.o(b,c,d);if(e>=0)return e;return a.V.o(b,c,d);}
var Wd=G(Gh);
function AZs(a,b,c,d){var e=new Wd();AVu(e,a,b,c,d);return e;}
function AVu(a,b,c,d,e){var f,g;f=A44;A44=f+1|0;g=new Bl;g.b=D(20);a.A=(O(g,g.a,f,10)).s();a.p=d;a.V=c;a.b0=e;a.bp=c;a.gG=b;}
function AWo(a,b,c,d){var e,f,g,h,i,j;e=a.gG;f=e.f5;g=e.f3;h=0;while(true){if(h>=f){a:{while(true){i=a.p.o(b,c,d);if(i>=0)break;if((b+a.bp.cP()|0)<=d.Y){i=a.bp.cn(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bp.cP()|0)>d.Y){d.dn=1;return (-1);}j=a.bp.cn(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var On=G(B7);
function A0Q(){var a=new On();AI_(a);return a;}
function AI_(a){var b,c;b=A44;A44=b+1|0;c=new Bl;c.b=D(20);a.A=(O(c,c.a,b,10)).s();}
function ATZ(a,b,c,d){if(b&&!(d.g7&&b==d.dq))return (-1);return a.p.o(b,c,d);}
function ATu(a,b){return 0;}
function AMi(a){return B(204);}
function Vh(){B7.call(this);this.uI=0;}
function AWT(a){var b=new Vh();AK2(b,a);return b;}
function AK2(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.uI=b;}
function AQ7(a,b,c,d){var e,f,g,h;a:{if(b>=d.Y)e=32;else{if(b>=0){f=c.e.data;if(b<f.length){e=f[b];break a;}}c=new X;c.c=1;c.d=1;H(c);}}b:{if(!b)g=32;else{g=b-1|0;if(g>=0){f=c.e.data;if(g<f.length){g=f[g];break b;}}c=new X;c.c=1;c.d=1;H(c);}}h=d.li?0:d.dq;return (e!=32&&!Rr(a,e,b,h,c)?0:1)^(g!=32&&!Rr(a,g,b-1|0,h,c)?0:1)^a.uI?(-1):a.p.o(b,c,d);}
function ARg(a,b){return 0;}
function AYc(a){return B(205);}
function Rr(a,b,c,d,e){var f,g;a:{b:{switch(CH(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CH(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;g=e.e.data;if(c>=g.length)break c;e:{f:{b=g[c];switch(CH(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}f=1;break e;}f=0;}if(f)return 0;if(CH(b)!=6)return 1;}}return 1;}e=new X;e.c=1;e.d=1;H(e);}return 0;}
var AAJ=G(B7);
function AY4(){var a=new AAJ();AOa(a);return a;}
function AOa(a){var b,c;b=A44;A44=b+1|0;c=new Bl;c.b=D(20);a.A=(O(c,c.a,b,10)).s();}
function AK1(a,b,c,d){if(b!=d.h0)return (-1);return a.p.o(b,c,d);}
function APG(a,b){return 0;}
function AQX(a){return B(206);}
function PP(){B7.call(this);this.jg=0;}
function A0C(a){var b=new PP();AFk(b,a);return b;}
function AFk(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.jg=b;}
function AVF(a,b,c,d){var e,f,g,h;e=d.g7?d.Y:c.e.data.length;if(b>=e){f=a.jg;d.bB.data[f]=0;return a.p.o(b,c,d);}a:{g=e-b|0;if(g==2){if(b>=0){h=c.e.data;f=h.length;if(b<f){if(h[b]!=13)break a;e=b+1|0;if(e>=0&&e<f){if(h[e]!=10)break a;f=a.jg;d.bB.data[f]=0;return a.p.o(b,c,d);}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}}b:{c:{if(g==1){if(b>=0){h=c.e.data;if(b<h.length){f=h[b];if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}}c=new X;c.c=1;c.d=1;H(c);}}return (-1);}e
=a.jg;d.bB.data[e]=0;return a.p.o(b,c,d);}
function ARK(a,b){var c,d,e;c=a.jg;d=b.bB.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AUj(a){return B(207);}
var AFH=G(B7);
function A0K(){var a=new AFH();AKS(a);return a;}
function AKS(a){var b,c;b=A44;A44=b+1|0;c=new Bl;c.b=D(20);a.A=(O(c,c.a,b,10)).s();}
function AU9(a,b,c,d){if(b<(!d.li?d.Y:c.e.data.length))return (-1);d.dn=1;d.F8=1;return a.p.o(b,c,d);}
function APR(a,b){return 0;}
function AKc(a){return B(208);}
function AAe(){B7.call(this);this.w3=null;}
function A3O(a){var b=new AAe();AVG(b,a);return b;}
function AVG(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.w3=b;}
function ARA(a,b,c,d){var e,f,g,h,i;a:{b:{c:{if(b!=d.Y){if(!b)break b;if(d.g7&&b==d.dq)break b;e=a.w3;f=b-1|0;if(f>=0){g=c.e.data;h=g.length;if(f<h){i=g[f];if(b<0)break a;if(b>=h)break a;if(!e.xO(i,g[b]))break c;else break b;}}c=new X;c.c=1;c.d=1;H(c);}}return (-1);}return a.p.o(b,c,d);}c=new X;c.c=1;c.d=1;H(c);}
function AJ5(a,b){return 0;}
function AQM(a){return B(209);}
var YU=G(Cl);
function A00(){var a=new YU();AU0(a);return a;}
function AU0(a){var b,c;b=A44;A44=b+1|0;c=new Bl;c.b=D(20);a.A=(O(c,c.a,b,10)).s();}
function APq(a,b,c,d){var e,f,g,h,i,j,k;e=d.Y;f=b+1|0;if(f>e){d.dn=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){i=Bo(g[b]&64512,55296);j=i?0:1;a:{if(j){k=b+2|0;if(k<=e){if(f>=0&&f<h){j=g[f];b=i?0:1;if(!(b&&((j&64512)!=56320?0:1)?1:0))break a;else return a.p.o(k,c,d);}c=new X;c.c=1;c.d=1;H(c);}}}return a.p.o(f,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function AJc(a){return B(210);}
function ARk(a,b){a.p=b;}
function AUY(a){return (-2147483602);}
function ARj(a,b){return 1;}
function US(){Cl.call(this);this.n$=null;}
function A0n(a){var b=new US();AIE(b,a);return b;}
function AIE(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.n$=b;}
function AU5(a,b,c,d){var e,f,g,h,i,j,k,l;e=d.Y;f=b+1|0;if(f>e){d.dn=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){i=g[b];j=Bo(i&64512,55296);k=j?0:1;a:{if(k){l=b+2|0;if(l<=e){if(f>=0&&f<h){k=g[f];b=j?0:1;if(!(b&&((k&64512)!=56320?0:1)?1:0))break a;else return a.n$.hX(((i&1023)<<10|k&1023)+65536|0)?(-1):a.p.o(l,c,d);}c=new X;c.c=1;c.d=1;H(c);}}}return a.n$.hX(i)?(-1):a.p.o(f,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function ARR(a){return B(211);}
function AV6(a,b){a.p=b;}
function AGF(a){return (-2147483602);}
function APB(a,b){return 1;}
function AFy(){B7.call(this);this.ml=0;}
function AZN(a){var b=new AFy();ASL(b,a);return b;}
function ASL(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.ml=b;}
function ALo(a,b,c,d){var e,f,g;e=d.g7?d.Y:c.e.data.length;if(b>=e){e=a.ml;d.bB.data[e]=0;return a.p.o(b,c,d);}a:{if((e-b|0)==1){if(b>=0){f=c.e.data;if(b<f.length){if(f[b]!=10)break a;else{g=a.ml;d.bB.data[g]=1;return a.p.o(b+1|0,c,d);}}}c=new X;c.c=1;c.d=1;H(c);}}return (-1);}
function ASK(a,b){var c,d,e;c=a.ml;d=b.bB.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function ALM(a){return B(207);}
function ADA(){B7.call(this);this.lo=0;}
function AZq(a){var b=new ADA();AS9(b,a);return b;}
function AS9(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.lo=b;}
function AMM(a,b,c,d){var e,f,g;if((d.g7?d.Y-b|0:c.e.data.length-b|0)<=0){e=a.lo;d.bB.data[e]=0;return a.p.o(b,c,d);}if(b>=0){f=c.e.data;if(b<f.length){if(f[b]!=10)return (-1);g=a.lo;d.bB.data[g]=1;return a.p.o(b+1|0,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function ASD(a,b){var c,d,e;c=a.lo;d=b.bB.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AHf(a){return B(212);}
function ZP(){B7.call(this);this.iN=0;}
function AYp(a){var b=new ZP();AYf(b,a);return b;}
function AYf(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.iN=b;}
function ATo(a,b,c,d){var e,f,g,h;e=d.g7?d.Y-b|0:c.e.data.length-b|0;if(!e){e=a.iN;d.bB.data[e]=0;return a.p.o(b,c,d);}a:{if(e<2){if(b>=0){f=c.e.data;if(b<f.length){g=f[b];h=97;break a;}}c=new X;c.c=1;c.d=1;H(c);}if(b>=0){f=c.e.data;h=f.length;if(b<h){g=f[b];e=b+1|0;if(e>=0&&e<h){h=f[e];break a;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}switch(g){case 10:case 133:case 8232:case 8233:e=a.iN;d.bB.data[e]=0;return a.p.o(b,c,d);case 13:if(h!=10){e=a.iN;d.bB.data[e]=0;return a.p.o(b,c,d);}e=a.iN;d.bB.data[e]
=0;return a.p.o(b,c,d);default:}return (-1);}
function AII(a,b){var c,d,e;c=a.iN;d=b.bB.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AJ6(a){return B(213);}
function Ih(){var a=this;Cl.call(a);a.iY=0;a.gJ=0;}
function A4d(a,b){var c=new Ih();AIw(c,a,b);return c;}
function AIw(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.iY=b;a.gJ=c;}
function AHr(a,b,c,d){var e,f,g,h,i,j,k;e=IA(a,d);if(e!==null&&(b+e.e.data.length|0)<=d.Y){f=0;a:{b:{c:{d:{while(true){g=e.e.data;h=g.length;i=Bo(f,h);if(i>=0){f=a.gJ;d.bB.data[f]=h;return a.p.o(b+h|0,c,d);}if(f<0)break c;if(i>=0)break c;j=g[f];h=b+f|0;if(h<0)break d;k=c.e.data;if(h>=k.length)break d;if(j!=k[h]){if(f<0)break a;if(i>=0)break a;i=HQ(g[f]);if(h<0)break b;k=c.e.data;if(h>=k.length)break b;if(i!=k[h])break;}f=f+1|0;}return (-1);}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d
=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}return (-1);}
function AVL(a,b){a.p=b;}
function IA(a,b){var c,d,e,f,g,h,i;a:{c=a.iY;d=b.bR.data;e=c*2|0;f=d[e];g=d[e+1|0];c=g|f;e=g-f|0;if((c|e)>=0){h=b.gD;i=h.e;c=Bo(g,i.data.length);if(c<=0){g=Bo(f,g);if(g>0){b=new Y;b.c=1;b.d=1;H(b);}if(!g){Q();h=A9m;}else if(!(!f&&!c)){h=new N;Q();d=D(e);h.e=d;M(i,f,d,0,e);}break a;}}h=null;}return h;}
function AQv(a){var b,c,d,e,f,g;b=a.bO;c=new P;c.b=D(16);I(c,c.a,B(214));O(c,c.a,b,10);d=new N;e=c.b;f=c.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);return d;}
function ANB(a,b){var c,d,e;c=a.gJ;d=b.bB.data;e=!d[c]?0:1;d[c]=(-1);return e;}
var AFA=G(Ih);
function A1r(a,b){var c=new AFA();AXd(c,a,b);return c;}
function AXd(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.iY=b;a.gJ=c;}
function AIK(a,b,c,d){var e,f,g;e=IA(a,d);if(e!==null&&(b+e.e.data.length|0)<=d.Y){f=!JP(c,e,b)?(-1):e.e.data.length;if(f<0)return (-1);g=a.gJ;d.bB.data[g]=f;return a.p.o(b+f|0,c,d);}return (-1);}
function AOG(a,b,c,d){var e,f;e=IA(a,d);f=d.dq;if(e!==null&&(b+e.e.data.length|0)<=f){while(true){if(b>f)return (-1);b=LQ(c,e,b);if(b<0)return (-1);if(a.p.o(b+e.e.data.length|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AHg(a,b,c,d,e){var f,g;f=IA(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=N2(d,f,c);if(g<0)break a;if(g<b)break a;if(a.p.o(g+f.e.data.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AUp(a,b){return 1;}
function AXh(a){var b,c,d,e,f,g;b=a.bO;c=new P;c.b=D(16);I(c,c.a,B(215));O(c,c.a,b,10);d=new N;e=c.b;f=c.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);return d;}
function ACd(){Ih.call(this);this.zn=0;}
function AZr(a,b){var c=new ACd();AJ0(c,a,b);return c;}
function AJ0(a,b,c){var d,e;d=A44;A44=d+1|0;e=new Bl;e.b=D(20);a.A=(O(e,e.a,d,10)).s();a.iY=b;a.gJ=c;}
function ALT(a,b,c,d){var e,f,g,h,i,j,k;a:{e=a.iY;f=d.bR.data;g=e*2|0;h=f[g];i=f[g+1|0];e=i|h;g=i-h|0;if((e|g)>=0){j=d.gD;k=j.e;e=Bo(i,k.data.length);if(e<=0){i=Bo(h,i);if(i>0){c=new Y;c.c=1;c.d=1;CE(c);H(c);}if(!i){Q();j=A9m;}else if(!(!h&&!e)){j=new N;Q();f=D(g);j.e=f;M(k,h,f,0,g);}break a;}}j=null;}if(j!==null&&(b+j.e.data.length|0)<=d.Y){i=0;b:{c:{while(true){f=j.e.data;g=f.length;e=Bo(i,g);if(e>=0){e=a.gJ;d.bB.data[e]=g;return a.p.o(b+g|0,c,d);}if(i<0)break b;if(e>=0)break b;e=f[i];if(A$P===null){if(A$Q
===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}e=B0(A$P,e)&65535;if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}g=B0(A$N,e)&65535;h=b+i|0;if(h<0)break c;f=c.e.data;if(h>=f.length)break c;e=f[h];if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}e=B0(A$P,e)&65535;if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}if(g!=(B0(A$N,e)&65535))break;i=i+1|0;}return (-1);}c
=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}return (-1);}
function ARh(a){var b,c,d,e,f,g;b=a.zn;c=new P;c.b=D(16);I(c,c.a,B(216));O(c,c.a,b,10);d=new N;e=c.b;f=c.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);return d;}
var Kj=G(Bl);
function RZ(a,b,c,d,e){ADD(a,b,c,d,e);return a;}
function AJR(a,b,c,d,e){var f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function ARa(a,b,c,d){var e,f,g,h,i;e=a.a;Bd(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.b.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
function ZS(a,b){var c;if(b>=0&&b<a.a)return a.b.data[b];c=new Y;c.c=1;c.d=1;H(c);}
function AGt(a){return a.a;}
function ARp(a,b){QC(a,b);}
function AWE(a,b,c){Bd(a,b,b+1|0);a.b.data[b]=c;return a;}
function AQd(a,b,c){I(a,b,c);return a;}
function ACR(){var a=this;Cs.call(a);a.dx=null;a.pF=null;a.ok=null;}
function AZv(a){var b=new ACR();AR5(b,a);return b;}
function AR5(a,b){var c,d,e,f,g,h;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.bq=1;d=new N;e=b.b;f=b.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);a.dx=d;c=b.a;a.bq=c;a.pF=AUX(c);a.ok=AUX(a.bq);c=0;a:{b:{while(true){f=a.bq;if(c>=(f-1|0))break;b=a.pF;d=a.dx;if(c<0)break a;e=d.e.data;if(c>=e.length)break a;Oo(b,e[c],(f-c|0)-1|0);b=a.ok;d=a.dx;h=(a.bq-c|0)-1|0;if(h<0)break b;e=d.e.data;if(h>=e.length)break b;Oo(b,e[h],h);c=c+1|0;}return;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function AI6(a,b,c){var d,e,f,g,h,i;d=0;a:{b:{c:{while(true){e=a.bq;if(d>=e)break;f=d+b|0;if(f<0)break a;g=c.e.data;if(f>=g.length)break a;h=g[f];i=a.dx;if(d<0)break b;g=i.e.data;if(d>=g.length)break b;if(h!=g[d]){b=0;break c;}d=d+1|0;}b=1;}if(!b)e=(-1);return e;}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}
function AQ5(a,b,c,d){var e,f;e=d.Y;while(true){if(b>e)return (-1);f=AFJ(a,c,b,e);if(f<0)return (-1);if(a.p.o(f+a.bq|0,c,d)>=0)break;b=f+1|0;}return f;}
function ASN(a,b,c,d,e){while(true){if(c<b)return (-1);c=AFj(a,d,b,c);if(c<0)return (-1);if(a.p.o(c+a.bq|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AMW(a){var b,c,d,e,f,g;b=a.dx;c=new P;c.b=D(16);I(c,c.a,B(217));d=c.a;if(b===null)b=B(2);I(c,d,b);b=new N;e=c.b;f=c.a;Q();g=D(f);b.e=g;M(e,0,g,0,f);return b;}
function AKu(a,b){var c,d,e,f,g,h,i;if(b instanceof EO){c=b.dj;d=a.dx.e.data;if(0<d.length)return c!=d[0]?0:1;b=new X;b.c=1;b.d=1;H(b);}if(b instanceof EI){b=b;e=a.dx;d=e.e;if(1!=d.data.length){e=new N;Q();f=D(1);e.e=f;M(d,0,f,0,1);}b=b.ej;d=e.e.data;if(0>=d.length){b=new X;b.c=1;b.d=1;H(b);}return (!b.C(d[0])?(-1):1)<=0?0:1;}if(!(b instanceof D7)){if(!(b instanceof Fm))return 1;a:{d=a.dx.e.data;g=d.length;if(g>1){h=b.hx;if(0>=g){b=new X;b.c=1;b.d=1;H(b);}i=d[0];if(1>=g){b=new X;UQ(b);H(b);}if(h==Y0(i,d[1]))
{c=1;break a;}}c=0;}return c;}b=b;d=a.dx.e.data;if(0>=d.length){b=new X;b.c=1;b.d=1;H(b);}b:{c:{if(!b.C(d[0])){d=a.dx.e.data;i=d.length;if(i<=1)break c;if(0>=i){b=new X;b.c=1;b.d=1;H(b);}h=d[0];if(1>=i){b=new X;b.c=1;b.d=1;H(b);}if(!b.C(((h&1023)<<10|d[1]&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;}
function AFJ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=a.dx;f=a.bq-1|0;if(f>=0){g=e.e.data;if(f<g.length){h=g[f];a:{b:{c:{while(true){i=a.bq;if(c>(d-i|0))return (-1);j=(c+i|0)-1|0;if(j<0)break c;g=b.e.data;k=g.length;if(j>=k)break c;f=g[j];if(f==h){j=0;d:{while(j<i){l=j+c|0;if(l<0)break a;if(l>=k)break a;m=g[l];e=a.dx;if(j<0)break b;n=e.e.data;if(j>=n.length)break b;if(m!=n[j]){k=0;break d;}j=j+1|0;}k=1;}if(k)break;}c=c+RW(a.pF,f)|0;}return c;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}}b
=new X;b.c=1;b.d=1;H(b);}
function AFj(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.dx.e.data;if(0>=e.length){b=new X;b.c=1;b.d=1;H(b);}f=e[0];g=(b.e.data.length-d|0)-a.bq|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;e=b.e.data;g=e.length;if(d>=g)break c;h=e[d];if(h==f){i=0;d:{while(i<a.bq){j=i+d|0;if(j<0)break a;if(j>=g)break a;j=e[j];k=a.dx;if(i<0)break b;l=k.e.data;if(i>=l.length)break b;if(j!=l[i]){j=0;break d;}i=i+1|0;}j=1;}if(j)break;}d=d-RW(a.ok,h)|0;}return d;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}b
=new X;b.c=1;b.d=1;H(b);}
function MX(){Cs.call(this);this.p9=null;}
function AL0(a,b,c){var d,e,f,g,h;d=0;a:{b:{while(true){e=a.p9.e.data;f=e.length;g=Bo(d,f);if(g>=0)break;if(d<0)break a;if(g>=0)break a;f=e[d];h=b+d|0;if(h<0)break b;e=c.e.data;if(h>=e.length)break b;g=e[h];if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}g=B0(A$P,g)&65535;if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}if(f!=(B0(A$N,g)&65535))return (-1);d=d+1|0;}return f;}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=
1;H(c);}
function AKE(a){var b,c,d,e,f,g;b=a.p9;c=new P;c.b=D(16);I(c,c.a,B(218));d=c.a;if(b===null)b=B(2);I(c,d,b);b=new N;e=c.b;f=c.a;Q();g=D(f);b.e=g;M(e,0,g,0,f);return b;}
function T8(){Cs.call(this);this.p4=null;}
function A4i(a){var b=new T8();AS7(b,a);return b;}
function AS7(a,b){var c,d,e,f,g;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.bq=1;d=new N;e=b.b;f=b.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);a.p4=d;a.bq=b.a;}
function AWi(a,b,c){var d,e,f,g,h,i,j;d=0;a:{b:{c:{d:{while(true){e=a.p4.e.data;f=e.length;g=Bo(d,f);if(g>=0)break;if(d<0)break c;if(g>=0)break c;h=e[d];i=b+d|0;if(i<0)break d;j=c.e.data;if(i>=j.length)break d;if(h!=j[i]){if(d<0)break a;if(g>=0)break a;f=HQ(e[d]);if(i<0)break b;e=c.e.data;if(i>=e.length)break b;if(f!=e[i])return (-1);}d=d+1|0;}return f;}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}c=new X;c.c=1;c.d=1;H(c);}
function AWY(a){var b,c,d,e,f,g;b=a.p4;c=new P;c.b=D(16);I(c,c.a,B(219));d=c.a;if(b===null)b=B(2);I(c,d,b);b=new N;e=c.b;f=c.a;Q();g=D(f);b.e=g;M(e,0,g,0,f);return b;}
var AGD=G();
var HA=G();
var A_Z=null;var A_0=null;var A_1=null;function ANK(){ANK=V(HA);AJi();}
function AFW(a,b){var c,d,e;c=0;while(true){ANK();d=A_1.data;if(c>=d.length){e=new Lt;e.c=1;e.d=1;e.f=B(42);e.Cp=B(42);e.Gl=b;H(e);}d=d[c].data;if(BC(b,d[0]))break;c=c+1|0;}return d[1];}
function AJi(){A_Z=A0H();A_0=A2B();A_1=T($rt_arraycls(C),[T(C,[B(220),A0$()]),T(C,[B(221),AYm()]),T(C,[B(222),A3J()]),T(C,[B(223),A30()]),T(C,[B(224),A_0]),T(C,[B(225),A2P()]),T(C,[B(226),AZy()]),T(C,[B(227),A1y()]),T(C,[B(228),A1q()]),T(C,[B(229),AYE()]),T(C,[B(230),AY7()]),T(C,[B(231),A1A()]),T(C,[B(232),A0f()]),T(C,[B(233),AYj()]),T(C,[B(234),A3U()]),T(C,[B(235),AY5()]),T(C,[B(236),A2M()]),T(C,[B(237),A1X()]),T(C,[B(238),A2N()]),T(C,[B(239),AYM()]),T(C,[B(240),A35()]),T(C,[B(241),A1N()]),T(C,[B(242),AZW()]),
T(C,[B(243),A3H()]),T(C,[B(244),A3F()]),T(C,[B(245),A0W()]),T(C,[B(246),AYK()]),T(C,[B(247),A3p()]),T(C,[B(248),A_Z]),T(C,[B(249),AZ3()]),T(C,[B(250),A1z()]),T(C,[B(251),A_Z]),T(C,[B(252),AYi()]),T(C,[B(253),A_0]),T(C,[B(254),AZf()]),T(C,[B(255),Be(0,127)]),T(C,[B(256),Be(128,255)]),T(C,[B(257),Be(256,383)]),T(C,[B(258),Be(384,591)]),T(C,[B(259),Be(592,687)]),T(C,[B(260),Be(688,767)]),T(C,[B(261),Be(768,879)]),T(C,[B(262),Be(880,1023)]),T(C,[B(263),Be(1024,1279)]),T(C,[B(264),Be(1280,1327)]),T(C,[B(265),Be(1328,
1423)]),T(C,[B(266),Be(1424,1535)]),T(C,[B(267),Be(1536,1791)]),T(C,[B(268),Be(1792,1871)]),T(C,[B(269),Be(1872,1919)]),T(C,[B(270),Be(1920,1983)]),T(C,[B(271),Be(2304,2431)]),T(C,[B(272),Be(2432,2559)]),T(C,[B(273),Be(2560,2687)]),T(C,[B(274),Be(2688,2815)]),T(C,[B(275),Be(2816,2943)]),T(C,[B(276),Be(2944,3071)]),T(C,[B(277),Be(3072,3199)]),T(C,[B(278),Be(3200,3327)]),T(C,[B(279),Be(3328,3455)]),T(C,[B(280),Be(3456,3583)]),T(C,[B(281),Be(3584,3711)]),T(C,[B(282),Be(3712,3839)]),T(C,[B(283),Be(3840,4095)]),
T(C,[B(284),Be(4096,4255)]),T(C,[B(285),Be(4256,4351)]),T(C,[B(286),Be(4352,4607)]),T(C,[B(287),Be(4608,4991)]),T(C,[B(288),Be(4992,5023)]),T(C,[B(289),Be(5024,5119)]),T(C,[B(290),Be(5120,5759)]),T(C,[B(291),Be(5760,5791)]),T(C,[B(292),Be(5792,5887)]),T(C,[B(293),Be(5888,5919)]),T(C,[B(294),Be(5920,5951)]),T(C,[B(295),Be(5952,5983)]),T(C,[B(296),Be(5984,6015)]),T(C,[B(297),Be(6016,6143)]),T(C,[B(298),Be(6144,6319)]),T(C,[B(299),Be(6400,6479)]),T(C,[B(300),Be(6480,6527)]),T(C,[B(301),Be(6528,6623)]),T(C,[B(302),
Be(6624,6655)]),T(C,[B(303),Be(6656,6687)]),T(C,[B(304),Be(7424,7551)]),T(C,[B(305),Be(7552,7615)]),T(C,[B(306),Be(7616,7679)]),T(C,[B(307),Be(7680,7935)]),T(C,[B(308),Be(7936,8191)]),T(C,[B(309),Be(8192,8303)]),T(C,[B(310),Be(8304,8351)]),T(C,[B(311),Be(8352,8399)]),T(C,[B(312),Be(8400,8447)]),T(C,[B(313),Be(8448,8527)]),T(C,[B(314),Be(8528,8591)]),T(C,[B(315),Be(8592,8703)]),T(C,[B(316),Be(8704,8959)]),T(C,[B(317),Be(8960,9215)]),T(C,[B(318),Be(9216,9279)]),T(C,[B(319),Be(9280,9311)]),T(C,[B(320),Be(9312,
9471)]),T(C,[B(321),Be(9472,9599)]),T(C,[B(322),Be(9600,9631)]),T(C,[B(323),Be(9632,9727)]),T(C,[B(324),Be(9728,9983)]),T(C,[B(325),Be(9984,10175)]),T(C,[B(326),Be(10176,10223)]),T(C,[B(327),Be(10224,10239)]),T(C,[B(328),Be(10240,10495)]),T(C,[B(329),Be(10496,10623)]),T(C,[B(330),Be(10624,10751)]),T(C,[B(331),Be(10752,11007)]),T(C,[B(332),Be(11008,11263)]),T(C,[B(333),Be(11264,11359)]),T(C,[B(334),Be(11392,11519)]),T(C,[B(335),Be(11520,11567)]),T(C,[B(336),Be(11568,11647)]),T(C,[B(337),Be(11648,11743)]),T(C,
[B(338),Be(11776,11903)]),T(C,[B(339),Be(11904,12031)]),T(C,[B(340),Be(12032,12255)]),T(C,[B(341),Be(12272,12287)]),T(C,[B(342),Be(12288,12351)]),T(C,[B(343),Be(12352,12447)]),T(C,[B(344),Be(12448,12543)]),T(C,[B(345),Be(12544,12591)]),T(C,[B(346),Be(12592,12687)]),T(C,[B(347),Be(12688,12703)]),T(C,[B(348),Be(12704,12735)]),T(C,[B(349),Be(12736,12783)]),T(C,[B(350),Be(12784,12799)]),T(C,[B(351),Be(12800,13055)]),T(C,[B(352),Be(13056,13311)]),T(C,[B(353),Be(13312,19893)]),T(C,[B(354),Be(19904,19967)]),T(C,[B(355),
Be(19968,40959)]),T(C,[B(356),Be(40960,42127)]),T(C,[B(357),Be(42128,42191)]),T(C,[B(358),Be(42752,42783)]),T(C,[B(359),Be(43008,43055)]),T(C,[B(360),Be(44032,55203)]),T(C,[B(361),Be(55296,56191)]),T(C,[B(362),Be(56192,56319)]),T(C,[B(363),Be(56320,57343)]),T(C,[B(364),Be(57344,63743)]),T(C,[B(365),Be(63744,64255)]),T(C,[B(366),Be(64256,64335)]),T(C,[B(367),Be(64336,65023)]),T(C,[B(368),Be(65024,65039)]),T(C,[B(369),Be(65040,65055)]),T(C,[B(370),Be(65056,65071)]),T(C,[B(371),Be(65072,65103)]),T(C,[B(372),Be(65104,
65135)]),T(C,[B(373),Be(65136,65279)]),T(C,[B(374),Be(65280,65519)]),T(C,[B(29),Be(0,1114111)]),T(C,[B(375),A1B()]),T(C,[B(376),Cd(0,1)]),T(C,[B(377),JY(62,1)]),T(C,[B(378),Cd(1,1)]),T(C,[B(379),Cd(2,1)]),T(C,[B(380),Cd(3,0)]),T(C,[B(381),Cd(4,0)]),T(C,[B(382),Cd(5,1)]),T(C,[B(383),JY(448,1)]),T(C,[B(384),Cd(6,1)]),T(C,[B(385),Cd(7,0)]),T(C,[B(386),Cd(8,1)]),T(C,[B(387),JY(3584,1)]),T(C,[B(388),Cd(9,1)]),T(C,[B(389),Cd(10,1)]),T(C,[B(390),Cd(11,1)]),T(C,[B(391),JY(28672,0)]),T(C,[B(392),Cd(12,0)]),T(C,[B(393),
Cd(13,0)]),T(C,[B(394),Cd(14,0)]),T(C,[B(395),A2q(983040,1,1)]),T(C,[B(396),Cd(15,0)]),T(C,[B(397),Cd(16,1)]),T(C,[B(398),Cd(18,1)]),T(C,[B(399),AZI(19,0,1)]),T(C,[B(400),JY(1643118592,1)]),T(C,[B(401),Cd(20,0)]),T(C,[B(402),Cd(21,0)]),T(C,[B(403),Cd(22,0)]),T(C,[B(404),Cd(23,0)]),T(C,[B(405),Cd(24,1)]),T(C,[B(406),JY(2113929216,1)]),T(C,[B(407),Cd(25,1)]),T(C,[B(408),Cd(26,0)]),T(C,[B(409),Cd(27,0)]),T(C,[B(410),Cd(28,1)]),T(C,[B(411),Cd(29,0)]),T(C,[B(412),Cd(30,0)])]);}
function Qf(){Cs.call(this);this.n6=0;}
function ANZ(a,b,c){var d,e,f,g;d=b+1|0;if(b>=0){e=c.e.data;f=e.length;if(b<f){g=e[b];if(d>=0&&d<f){d=e[d];b=a.n6;d=((g&1023)<<10|d&1023)+65536|0;if(A$P===null){if(A$Q===null)A$Q=C6();A$P=B3(B4((A$Q.value!==null?$rt_str(A$Q.value):null)));}d=B0(A$P,d);if(A$N===null){if(A$O===null)A$O=C5();A$N=B3(B4((A$O.value!==null?$rt_str(A$O.value):null)));}return b!=B0(A$N,d)?(-1):2;}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}
function AYb(a){var b,c,d,e,f,g;b=new N;c=a.n6;if(c<65536){d=D(1);d.data[0]=c&65535;}else d=E1([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;Q();f=e.length;e=D(f);b.e=e;M(d,0,e,0,f);g=new P;g.b=D(16);I(g,g.a,B(199));I(g,g.a,b);b=new N;d=g.b;f=g.a;e=D(f);b.e=e;M(d,0,e,0,f);return b;}
function JF(){Cl.call(this);this.fF=0;}
function AZ5(a){var b=new JF();AIc(b,a);return b;}
function AIc(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.fF=b;}
function AVf(a,b){a.p=b;}
function QZ(a,b,c,d){var e,f,g,h,i;e=b+1|0;if(e>d.Y){d.dn=1;return (-1);}if(b>=0){f=c.e.data;g=f.length;if(b<g){a:{h=f[b];if(b>d.dq){i=b-1|0;if(i>=0&&i<g){if(!((f[i]&64512)!=55296?0:1))break a;return (-1);}c=new X;c.c=1;c.d=1;H(c);}}if(a.fF!=h)return (-1);return a.p.o(e,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function AKs(a,b,c,d){var e,f,g,h,i,j;if(!(c instanceof N)){e=d.Y;a:{while(true){if(b>e){b=(-1);break a;}if(QZ(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.dq;g=d.Y;b:{while(true){if(b>=g)return (-1);h=Ea(c,a.fF,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;i=c.e.data;if(b>=i.length)break b;if((i[b]&64512)!=55296?0:1){b=h+1|0;continue;}}j=a.p;b=h+1|0;if(j.o(b,c,d)>=0)break;}return h;}c=new X;c.c=1;c.d=1;H(c);}
function AR_(a,b,c,d,e){var f,g,h;if(!(d instanceof N)){a:{while(true){if(c<b){c=(-1);break a;}if(QZ(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.dq;b:{c:{while(true){if(c<b)return (-1);g=EX(d,a.fF,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;h=d.e.data;if(c>=h.length)break b;if((h[c]&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.p.o(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new X;d.c=1;d.d=1;H(d);}
function AOl(a){var b,c,d,e,f,g;b=a.fF;c=new P;c.b=D(16);d=c.a;Bd(c,d,d+1|0);e=c.b;e.data[d]=b;f=new N;d=c.a;Q();g=D(d);f.e=g;M(e,0,g,0,d);return f;}
function AHd(a,b){if(b instanceof EO)return 0;if(b instanceof EI)return 0;if(b instanceof D7)return 0;if(b instanceof Fm)return 0;if(b instanceof Mj)return 0;if(!(b instanceof JF))return 1;return b.fF!=a.fF?0:1;}
function AOp(a,b){return 1;}
function Mj(){Cl.call(this);this.gv=0;}
function ATr(a){var b=new Mj();AMH(b,a);return b;}
function AMH(a,b){var c,d;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.gv=b;}
function ARn(a,b){a.p=b;}
function M0(a,b,c,d){var e,f,g,h,i;e=d.Y;f=b+1|0;e=Bo(f,e);if(e>0){d.dn=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){a:{i=g[b];if(e<0){if(f>=0&&f<h){if(!((g[f]&64512)!=56320?0:1))break a;return (-1);}c=new X;c.c=1;c.d=1;H(c);}}if(a.gv!=i)return (-1);return a.p.o(f,c,d);}}c=new X;c.c=1;c.d=1;H(c);}
function AVv(a,b,c,d){var e,f,g;if(!(c instanceof N)){e=d.Y;a:{while(true){if(b>e){b=(-1);break a;}if(M0(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.Y;b:{while(true){if(b>=e)return (-1);f=Ea(c,a.gv,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;g=c.e.data;if(b>=g.length)break b;if((g[b]&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.p.o(b,c,d)>=0)break;}return f;}c=new X;c.c=1;c.d=1;H(c);}
function ANV(a,b,c,d,e){var f,g,h;if(!(d instanceof N)){a:{while(true){if(c<b){c=(-1);break a;}if(M0(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.Y;b:{c:{while(true){if(c<b)return (-1);g=EX(d,a.gv,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;h=d.e.data;if(c>=h.length)break b;if((h[c]&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.p.o(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new X;d.c=1;d.d=1;H(d);}
function AXU(a){var b,c,d,e,f,g;b=a.gv;c=new P;c.b=D(16);d=c.a;Bd(c,d,d+1|0);e=c.b;e.data[d]=b;f=new N;d=c.a;Q();g=D(d);f.e=g;M(e,0,g,0,d);return f;}
function AI8(a,b){if(b instanceof EO)return 0;if(b instanceof EI)return 0;if(b instanceof D7)return 0;if(b instanceof Fm)return 0;if(b instanceof JF)return 0;if(!(b instanceof Mj))return 1;return b.gv!=a.gv?0:1;}
function AVB(a,b){return 1;}
function Fm(){var a=this;Cs.call(a);a.hl=0;a.g0=0;a.hx=0;}
function AYC(a){var b=new Fm();APA(b,a);return b;}
function APA(a,b){var c,d,e;c=A44;A44=c+1|0;d=new Bl;d.b=D(20);a.A=(O(d,d.a,c,10)).s();a.bq=1;a.bq=2;a.hx=b;if(b<65536){e=D(1);e.data[0]=b&65535;}else e=E1([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);e=e.data;a.hl=e[0];a.g0=e[1];}
function AVV(a,b,c){var d,e,f,g;d=b+1|0;if(b>=0){e=c.e.data;f=e.length;if(b<f){g=e[b];if(d>=0&&d<f){d=e[d];return a.hl==g&&a.g0==d?2:(-1);}c=new X;c.c=1;c.d=1;H(c);}}c=new X;c.c=1;c.d=1;H(c);}
function AUN(a,b,c,d){var e,f,g,h,i;if(c instanceof N){e=d.Y;a:{while(b<e){b=Ea(c,a.hl,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;f=c.e.data;if(b>=f.length)break a;g=f[b];if(a.g0==g&&a.p.o(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new X;c.c=1;c.d=1;H(c);}h=d.Y;b:{c:{d:{while(true){if(b>h){b=(-1);break d;}if((b+a.bq|0)>d.Y){d.dn=1;g=(-1);}else{g=b+1|0;if(b<0)break b;f=c.e.data;e=f.length;if(b>=e)break b;i=f[b];if(g<0)break c;if(g>=e)break c;e=f[g];g=a.hl==i&&a.g0==e?2:(-1);g=g<
0?(-1):a.p.o(b+g|0,c,d);}if(g>=0)break;b=b+1|0;}}return b;}c=new X;Df(c);H(c);}c=new X;Df(c);H(c);}
function AId(a,b,c,d,e){var f,g,h,i,j;if(d instanceof N){a:{b:{while(true){if(c<b)return (-1);c=EX(d,a.g0,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.hl;if(c<0)break a;g=d.e.data;if(c>=g.length)break a;if(f==g[c]&&a.p.o(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new X;d.c=1;d.d=1;H(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.bq|0)>e.Y){e.dn=1;f=(-1);}else{h=c+1|0;if(c<0)break c;g=d.e.data;f=g.length;if(c>=f)break c;i=g[c];if(h<0)break d;if(h>=f)break d;j=g[h];f=a.hl==i&&a.g0==j?2:
(-1);f=f<0?(-1):a.p.o(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new X;Df(d);H(d);}d=new X;Df(d);H(d);}
function AXk(a){var b,c,d,e,f,g,h;b=a.hl;c=a.g0;d=new P;d.b=D(16);e=d.a;Bd(d,e,e+1|0);d.b.data[e]=b;b=d.a;Bd(d,b,b+1|0);f=d.b;f.data[b]=c;g=new N;c=d.a;Q();h=D(c);g.e=h;M(f,0,h,0,c);return g;}
function AVP(a,b){if(b instanceof Fm)return b.hx!=a.hx?0:1;if(b instanceof D7)return b.C(a.hx);if(b instanceof EO)return 0;if(!(b instanceof EI))return 1;return 0;}
var SO=G(F7);
function AIj(a,b){return b!=10?0:1;}
function ANy(a,b,c){return b!=10?0:1;}
var SP=G(F7);
function AWp(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function APa(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function X6(){var a=this;C.call(a);a.o4=null;a.m7=null;a.jT=0;a.u8=0;}
function AUX(a){var b=new X6();AK0(b,a);return b;}
function AK0(a,b){var c,d;while(true){c=a.jT;if(b<c)break;a.jT=c<<1|1;}d=c<<1|1;a.jT=d;d=d+1|0;a.o4=Bc(d);a.m7=Bc(d);a.u8=b;}
function Oo(a,b,c){var d,e,f,g;d=0;e=a.jT;f=b&e;while(true){g=a.o4.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.m7.data[f]=c;}
function RW(a,b){var c,d,e,f;c=a.jT;d=b&c;e=0;while(true){f=a.o4.data[d];if(!f)break;if(f==b)return a.m7.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.u8;}
var ABm=G();
var UM=G();
function AXK(b){var c,d,e,f,g,h,i,j,k,l,m;c=new K0;d=b.e.data;e=D(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}c.pw=e;g=HO(c);d=Bc(g*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<g){l=HO(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=HO(c);m=l/2|0;if(l%2|0)m= -m|0;j=j+m|0;m=h+1|0;e[h]=i;h=m+1|0;e[m]=j;k=k+1|0;}return d;}
function B4(b){var c,d,e,f,g,h,i,j,k,l;c=new K0;d=b.e.data;e=D(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}c.pw=e;g=HO(c);d=Bc(g*2|0);e=d.data;h=0;i=0;while(i<g){h=h+HO(c)|0;j=i*2|0;e[j]=h;k=j+1|0;l=HO(c);j=l/2|0;if(l%2|0)j= -j|0;e[k]=j;i=i+1|0;}return d;}
function B3(b){var c,d,e,f,g,h,i,j,k,l,m;c=Bc(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bh;l.c=1;l.d=1;H(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new SW;l.to=b;l.xk=c;return l;}
function Ma(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function APJ(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=Bj(Jl,16384);d=c.data;e=BF(16384).data;f=0;g=0;h=0;i=0;a:{b:{while(true){j=b.e.data;k=Bo(i,j.length);if(k>=0){l=c.constructor;if(l===null)b=null;else{b=l.classObject;if(b===null){b=new B9;b.G=l;m=b;l.classObject=m;}}b=E6(b);if(b===null){b=new CK;b.c=1;b.d=1;H(b);}if(b===L($rt_voidcls())){b=new Bh;b.c=1;b.d=1;H(b);}if(g<0){b=new D1;b.c=1;b.d=1;H(b);}m=EU(b.G,g);f=d.length;if(g<f)f=g;g=0;while(g<f){m.data[g]=d[g];g=g+1|0;}return m;}if(i<0)break;if(k>=0)break;n
=Ma(j[i]);if(n==64){i=i+1|0;if(i<0)break b;j=b.e.data;if(i>=j.length)break b;n=Ma(j[i]);o=0;p=1;q=0;while(q<3){i=i+1|0;if(i<0)break a;j=b.e.data;if(i>=j.length)break a;o=o|Db(p,Ma(j[i]));p=p*64|0;q=q+1|0;}}else if(n<32)o=1;else{n=(n-32|0)<<24>>24;i=i+1|0;o=Ma(CZ(b,i));}if(!n&&o>=128){if(f>0){k=g+1|0;l=new Jl;p=h+f|0;j=BF(f);q=e.length;if(f<q)q=f;r=j.data;s=0;while(s<q){r[s]=e[s];s=s+1|0;}l.pL=h;l.oi=p;l.pO=j;d[g]=l;g=k;}h=h+(f+o|0)|0;f=0;}else{k=f+o|0;p=e.length;if(k<p)q=g;else{q=g+1|0;l=new Jl;s=h+f|0;j=BF(f);if
(f<p)p=f;r=j.data;f=0;while(f<p){r[f]=e[f];f=f+1|0;}l.pL=h;l.oi=s;l.pO=j;d[g]=l;h=h+k|0;f=0;}while(true){g=o+(-1)|0;if(o<=0)break;k=f+1|0;e[f]=n;f=k;o=g;}g=q;}i=i+1|0;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
var D1=G(BJ);
var Ub=G();
function K0(){var a=this;C.call(a);a.pw=null;a.wK=0;}
var AB9=G();
function HO(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.pw.data;f=b.wK;b.wK=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Db(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
var Mf=G(By);
function A0H(){var a=new Mf();AKI(a);return a;}
function AKI(a){}
function ATl(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return CP(BN(b,9,13),32);}
var LP=G(By);
function A2B(){var a=new LP();AOm(a);return a;}
function AOm(a){}
function AT$(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(b,48,57);}
var X2=G(By);
function A0$(){var a=new X2();AKe(a);return a;}
function AKe(a){}
function AV9(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(b,97,122);}
var Yk=G(By);
function AYm(){var a=new Yk();AK4(a);return a;}
function AK4(a){}
function AOq(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(b,65,90);}
var Ym=G(By);
function A3J(){var a=new Ym();AHP(a);return a;}
function AHP(a){}
function AJu(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(b,0,127);}
var Md=G(By);
function A30(){var a=new Md();AIM(a);return a;}
function AIM(a){}
function AIB(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(BN(b,97,122),65,90);}
var KU=G(Md);
function A2P(){var a=new KU();AKQ(a);return a;}
function AKQ(a){}
function AJX(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(BN(BN(b,97,122),65,90),48,57);}
var ZC=G(By);
function AZy(){var a=new ZC();AUC(a);return a;}
function AUC(a){}
function ATa(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(BN(BN(b,33,64),91,96),123,126);}
var MU=G(KU);
function A1y(){var a=new MU();ANr(a);return a;}
function ANr(a){}
function APV(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(BN(BN(BN(BN(BN(b,97,122),65,90),48,57),33,64),91,96),123,126);}
var ACL=G(MU);
function A1q(){var a=new ACL();AOb(a);return a;}
function AOb(a){}
function AMd(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return CP(BN(BN(BN(BN(BN(BN(b,97,122),65,90),48,57),33,64),91,96),123,126),32);}
var WK=G(By);
function AYE(){var a=new WK();AWj(a);return a;}
function AWj(a){}
function AR3(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return CP(CP(b,32),9);}
var Vb=G(By);
function AY7(){var a=new Vb();AXv(a);return a;}
function AXv(a){}
function AMa(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return CP(BN(b,0,31),127);}
var AA7=G(By);
function A1A(){var a=new AA7();AH1(a);return a;}
function AH1(a){}
function APd(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(BN(BN(b,48,57),97,102),65,70);}
var AE2=G(By);
function A0f(){var a=new AE2();AQT(a);return a;}
function AQT(a){}
function AUV(a){var b,c;b=new R4;b.EC=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var ZH=G(By);
function AYj(){var a=new ZH();ANx(a);return a;}
function ANx(a){}
function APZ(a){var b,c;b=new Qk;b.EO=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var AEv=G(By);
function A3U(){var a=new AEv();AHS(a);return a;}
function AHS(a){}
function AKN(a){var b,c;b=new OD;b.D9=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;return b;}
var XM=G(By);
function AY5(){var a=new XM();AMb(a);return a;}
function AMb(a){}
function ANE(a){var b,c;b=new OC;b.z$=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;return b;}
var YG=G(By);
function A2M(){var a=new YG();AIJ(a);return a;}
function AIJ(a){}
function AR0(a){var b,c;b=new PK;b.B2=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;IE(c,0,2048);b.by=1;return b;}
var Us=G(By);
function A1X(){var a=new Us();AIg(a);return a;}
function AIg(a){}
function AJe(a){var b,c;b=new QW;b.Fh=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var Z5=G(By);
function A2N(){var a=new Z5();ALY(a);return a;}
function ALY(a){}
function AXy(a){var b,c;b=new Ns;b.Cs=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var AEF=G(By);
function AYM(){var a=new AEF();AMk(a);return a;}
function AMk(a){}
function APT(a){var b,c;b=new Ru;b.A9=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;return b;}
var Yc=G(By);
function A35(){var a=new Yc();ATh(a);return a;}
function ATh(a){}
function ALs(a){var b,c;b=new Qh;b.y5=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var ABI=G(By);
function A1N(){var a=new ABI();AHj(a);return a;}
function AHj(a){}
function AJj(a){var b,c;b=new Qj;b.Bk=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var WP=G(By);
function AZW(){var a=new WP();AIp(a);return a;}
function AIp(a){}
function ASP(a){var b,c;b=new Nq;b.BZ=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var Zi=G(By);
function A3H(){var a=new Zi();ALz(a);return a;}
function ALz(a){}
function ATR(a){var b,c;b=new Q8;b.Gp=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var AEP=G(By);
function A3F(){var a=new AEP();AUP(a);return a;}
function AUP(a){}
function AOE(a){var b,c;b=new Q$;b.AD=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;return b;}
var V1=G(By);
function A0W(){var a=new V1();AIh(a);return a;}
function AIh(a){}
function ANo(a){var b,c;b=new Sl;b.Fw=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;return b;}
var Vs=G(By);
function AYK(){var a=new Vs();AVY(a);return a;}
function AVY(a){}
function AMu(a){var b,c;b=new RT;b.y7=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var ZG=G(By);
function A3p(){var a=new ZG();ATf(a);return a;}
function ATf(a){}
function AV4(a){var b,c;b=new M4;b.GS=a;Bz();c=new Bt;c.w=Bc(64);b.z=c;b.by=1;return b;}
var J_=G(By);
function AZ3(){var a=new J_();AJr(a);return a;}
function AJr(a){}
function ALE(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return CP(BN(BN(BN(b,97,122),65,90),48,57),95);}
var AFt=G(J_);
function A1z(){var a=new AFt();ATj(a);return a;}
function ATj(a){}
function AMl(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;b=ES(CP(BN(BN(BN(b,97,122),65,90),48,57),95),1);b.by=1;return b;}
var ACT=G(Mf);
function AYi(){var a=new ACT();AOV(a);return a;}
function AOV(a){}
function AQ3(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;b=ES(CP(BN(b,9,13),32),1);b.by=1;return b;}
var Vp=G(LP);
function AZf(){var a=new Vp();ATF(a);return a;}
function ATF(a){}
function AKo(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;b=ES(BN(b,48,57),1);b.by=1;return b;}
function ABc(){var a=this;By.call(a);a.td=0;a.wY=0;}
function Be(a,b){var c=new ABc();AXx(c,a,b);return c;}
function AXx(a,b,c){a.td=b;a.wY=c;}
function ALH(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(b,a.td,a.wY);}
var ABy=G(By);
function A1B(){var a=new ABy();APg(a);return a;}
function APg(a){}
function AO3(a){var b,c;b=new CB;Bz();c=new Bt;c.w=Bc(64);b.z=c;c=new Bt;c.w=Bc(2);b.D=c;return BN(BN(b,65279,65279),65520,65533);}
function ACu(){var a=this;By.call(a);a.qF=0;a.o$=0;a.wb=0;}
function Cd(a,b){var c=new ACu();AIH(c,a,b);return c;}
function AZI(a,b,c){var d=new ACu();AO8(d,a,b,c);return d;}
function AIH(a,b,c){a.o$=c;a.qF=b;}
function AO8(a,b,c,d){a.wb=d;a.o$=c;a.qF=b;}
function ASA(a){var b,c,d;b=new I_;c=a.qF;Bz();d=new Bt;d.w=Bc(64);b.z=d;b.lp=c;if(a.wb)IE(d,0,2048);b.by=a.o$;return b;}
function ACM(){var a=this;By.call(a);a.oD=0;a.m9=0;a.ry=0;}
function JY(a,b){var c=new ACM();AJk(c,a,b);return c;}
function A2q(a,b,c){var d=new ACM();APU(d,a,b,c);return d;}
function AJk(a,b,c){a.m9=c;a.oD=b;}
function APU(a,b,c,d){a.ry=d;a.m9=c;a.oD=b;}
function AGN(a){var b,c,d;b=new RK;c=a.oD;Bz();d=new Bt;d.w=Bc(64);b.z=d;b.lp=c;if(a.ry)IE(d,0,2048);b.by=a.m9;return b;}
function SW(){var a=this;C.call(a);a.to=null;a.xk=null;}
function Jl(){var a=this;C.call(a);a.pL=0;a.oi=0;a.pO=null;}
var AAr=G();
function UR(b,c,d,e){var f,g;if(c<=d){while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}return;}e=new Bh;e.c=1;e.d=1;H(e);}
function AVi(b,c,d,e){var f,g,h,i,j;if(c>d){f=new Bh;f.c=1;f.d=1;H(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;}
function AVT(b,c,d,e){var f,g,h,i;if(c>d){f=new Bh;f.c=1;f.d=1;H(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=Bo(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;}
function AE7(b,c){var d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;}
var X=G(Y);
var Yg=G();
function VB(){var a=this;DC.call(a);a.rY=null;a.rU=0;a.jK=null;}
function A2A(a,b,c){var d=new VB();AIk(d,a,b,c);return d;}
function AIk(a,b,c,d){a.jK=b;a.rY=c;a.rU=d;}
function AOd(a,b){}
function AJo(a,b){var c,d,e,f,g,h,i;if(A_a===null){c=new Ct;c.cf=A5j;b=new P;b.b=D(16);c.bc=b;c.b$=D(32);c.ck=0;Cr();c.cg=A$H;A_a=c;}b=A_a;c=a.rY;d=new P;d.b=D(16);I(d,d.a,B(413));e=d.a;if(c===null)c=B(2);I(d,e,c);f=new N;g=d.b;h=d.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);c=b.bc;I(c,c.a,f);h=c.a;Bd(c,h,h+1|0);c.b.data[h]=10;Co(b);}
function Uf(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=(Jk(GE(B(104),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.jK;b.p3=b.kZ.m;if(a.rU){e=0;while(true){b=a.jK;c=b.kZ;f=Bo(e,c.m);if(f>=0)break a;if(f>=0){g=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,e,10);I(b,b.a,B(37));e=c.m;O(b,b.a,e,10);c=new N;d=b.b;f=b.a;Q();h=D(f);c.e=h;M(d,0,h,0,f);g.c=1;g.d=1;g.f=c;H(g);}V_(b,c.r.data[e]);e=e+1|0;}}}return 0;}i=d[f];h=(Jk(GE(B(102),0),i,0)).data;if(h.length!=4)break;g=h[0];j=AC6(h[1]);b=h[2];if(b===null){b=new Cc;b.c
=1;b.d=1;b.f=B(76);H(b);}k=YL(b,0,b.e.data.length,10);l=h[3];Fl();m=A_G;if(BC(g,B(414)))m=A_D;if(BC(g,B(415)))m=A_F;if(BC(g,B(416)))m=A_E;if(BC(g,B(253)))m=A_2;if(m===A_E&&!A$3.yd)k=BI;n=new RU;n.pT=j;n.sb=m;n.yx=k;n.v2=l;BH(a.jK.wt,j,j);Cf(a.jK.kZ,n);f=f+1|0;}b=new Bb;b.c=1;b.d=1;b.f=B(417);H(b);}
function AMo(a,b,c){return Uf(a,b,c);}
var B8=G(BG);
var A_3=null;var A_4=null;var A_5=null;var A_6=null;var A_7=null;var A_8=null;var A_9=null;var A_$=null;var A__=null;var Baa=null;function ARw(){ARw=V(B8);AQx();}
function AQx(){var b,c,d,e,f,g,h,i,j;b=new S7;ARw();b.t=B(418);b.q=0;A_3=b;c=new S8;c.t=B(419);c.q=1;A_4=c;d=new S_;d.t=B(420);d.q=2;A_5=d;e=new Ta;e.t=B(421);e.q=3;A_6=e;f=new S9;f.t=B(422);f.q=4;A_7=f;g=new S$;g.t=B(423);g.q=5;A_8=g;h=new S5;h.t=B(424);h.q=6;A_9=h;i=new S6;i.t=B(425);i.q=7;A_$=i;j=new S4;j.t=B(426);j.q=8;A__=j;Baa=T(B8,[b,c,d,e,f,g,h,i,j]);}
function E8(){var a=this;He.call(a);a.eI=0;a.c2=null;}
var AGp=G(0);
function ARe(b){return !BC(b,B(427))&&!BC(b,B(428))&&!BC(b,B(429))&&!BC(b,B(430))&&!BC(b,B(431))?0:1;}
function AKG(b){var c;a:{b:{if(BC(b,B(432)))break b;if(BC(b,B(433)))break b;if(BC(b,B(434)))break b;if(BC(b,B(435)))break b;if(BC(b,B(436)))break b;if(BC(b,B(437)))break b;if(BC(b,B(438)))break b;if(BC(b,B(439)))break b;if(!BC(b,B(440))){c=0;break a;}}c=1;}return c;}
var Pc=G(0);
var ABx=G();
function AXu(a,b,c){a.G9($rt_str(b),Ds(c,"handleEvent"));}
function AMA(a,b){return !!a.Jf(b);}
function ARo(a,b,c){a.Bs($rt_str(b),Ds(c,"handleEvent"));}
function ATD(a,b,c,d){a.He($rt_str(b),Ds(c,"handleEvent"),d?1:0);}
function AWr(a,b,c,d){a.I_($rt_str(b),Ds(c,"handleEvent"),d?1:0);}
function O4(){var a=this;C.call(a);a.pI=null;a.o7=null;a.kV=null;a.q9=0;a.lx=null;}
function ADZ(a,b){var c,d,e;c=b.target;d=null;e=a.pI;Fl();if(e!==A_F&&e!==A_E){if(e===A_D){b=$rt_globals.window.document.createElement("img");d=$rt_ustr($rt_str(c.result));b.src=d;e=c.result;c=new $rt_globals.Int8Array(e);d=new Ji;d.dS=c;d.qj=e;d.ow=b;}else if(e===A_G)d=$rt_str(c.result);}else{e=c.result;b=new $rt_globals.Int8Array(e);d=new Ji;d.dS=b;d.qj=e;}if(d!==null){It(a.lx.v4,a.pI,a.o7,d);Cf(a.kV,a.o7);if(a.kV.m==a.q9){b=a.lx.rJ;d=new M6;d.of=a;Cf(b.jw,d);}}}
function AUi(a,b){ADZ(a,b);}
function Dx(){BG.call(this);this.ks=null;}
var A_D=null;var A_E=null;var A_G=null;var A_F=null;var A_2=null;var Bab=null;function Fl(){Fl=V(Dx);AU8();}
function AU8(){var b,c,d,e,f;b=new Dx;Fl();b.t=B(441);b.q=0;b.ks=B(414);A_D=b;c=new Dx;c.t=B(442);c.q=1;c.ks=B(416);A_E=c;d=new Dx;d.t=B(443);d.q=2;d.ks=B(444);A_G=d;e=new Dx;e.t=B(445);e.q=3;e.ks=B(415);A_F=e;f=new Dx;f.t=B(446);f.q=4;f.ks=B(253);A_2=f;Bab=T(Dx,[b,c,d,e,f]);}
var L8=G();
var Bac=null;var Bad=null;function AFm(b){var c,d,e,f,g,h,i,j,k,l;c=new P;c.b=D(16);d=AER();e=0;f=Bad.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.a;if(i>0){Bd(c,i,i+1|0);c.b.data[i]=32;}j=d.data[e];I(c,c.a,j);}e=e+1|0;h=h+1|0;}j=new N;d=c.b;k=c.a;Q();l=D(k);j.e=l;M(d,0,l,0,k);return j;}
function AER(){if(Bac===null)Bac=T(N,[B(447),B(448),B(449),B(450),B(451),B(452),B(453),B(454),B(455),B(456),B(457),B(458)]);return Bac;}
function AAa(){Bad=GA([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
var KT=G();
var Ov=G(0);
function H6(){var a=this;KT.call(a);a.fv=null;a.D3=null;a.jn=0;a.me=0;a.f7=null;a.oH=null;}
function AHE(a){var b,c,d,e,f,g,h;b=new P;b.b=D(16);c=AFm(N1(a.jn,a.me));I(b,b.a,c);d=b.a;if(d>0){Bd(b,d,d+1|0);b.b.data[d]=32;}c=a.fv;if(c.bb===null)c.bb=$rt_str(c.G.$meta.name);c=c.bb;I(b,b.a,c);d=b.a;Bd(b,d,d+1|0);b.b.data[d]=40;e=a.f7.cu();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.a;Bd(b,h,h+1|0);b.b.data[h]=44;}c=g[f];if(c.bb===null)c.bb=$rt_str(c.G.$meta.name);c=c.bb;I(b,b.a,c);f=f+1|0;}d=b.a;Bd(b,d,d+1|0);e=b.b;e.data[d]=41;c=new N;d=b.a;Q();g=D(d);c.e=g;M(e,0,g,0,d);return c;}
function AE9(a,b){var c,d,e,f,g;if(a.jn&1){c=new KQ;c.c=1;c.d=1;H(c);}if(a.oH===null){c=new Ln;c.c=1;c.d=1;H(c);}d=b.data;e=d.length;if(e!=a.f7.data.length){c=new Bh;c.c=1;c.d=1;H(c);}f=0;while(f<e){if(!(a.f7.data[f].G.$meta.primitive?1:0)&&d[f]!==null){c=a.f7.data[f];g=d[f];c=c.G;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&Sh(g.constructor,c)?1:0)){c=new Bh;c.c=1;c.d=1;H(c);}}if((a.f7.data[f].G.$meta.primitive?1:0)&&d[f]===null){c=new Bh;c.c=1;c.d=1;H(c);}f=f+1|0;}c=b.data;g=new (a.fv.G);a.oH.call(g,
c);return g;}
function PC(){var a=this;Bs.call(a);a.vJ=null;a.Gi=null;}
function AJB(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.de^CC(a.vJ,c):0;}
function PB(){var a=this;Bs.call(a);a.yi=null;a.uN=null;a.BC=null;}
function AQg(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.de^CC(a.yi,c):0;return a.uN.C(b)&&!d?1:0;}
function NB(){var a=this;Bs.call(a);a.l7=null;a.CV=null;}
function ALB(a,b){return a.T^CC(a.l7,b);}
function ASU(a){var b,c,d,e,f,g,h,i,j,k;b=new P;b.b=D(16);c=Io(a.l7,0);while(c>=0){if(c<65536){d=D(1);d.data[0]=c&65535;}else d=E1([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;f=0;g=e.length;h=b.a;Bd(b,h,h+g|0);g=g+f|0;while(f<g){d=b.b.data;i=h+1|0;j=f+1|0;d[h]=e[f];h=i;f=j;}g=b.a;Bd(b,g,g+1|0);b.b.data[g]=124;c=Io(a.l7,c+1|0);}h=b.a;if(h>0)Th(b,h-1|0);k=new N;d=b.b;h=b.a;Q();e=D(h);k.e=e;M(d,0,e,0,h);return k;}
function QK(){var a=this;Bs.call(a);a.wU=null;a.EN=null;}
function AVW(a,b){return a.wU.C(b);}
function QI(){var a=this;Bs.call(a);a.pc=0;a.v3=null;a.pQ=null;}
function ANY(a,b){return !(a.pc^CC(a.pQ.D,b))&&!(a.pc^a.pQ.eL^a.v3.C(b))?0:1;}
function QJ(){var a=this;Bs.call(a);a.m8=0;a.uB=null;a.or=null;}
function AUb(a,b){return !(a.m8^CC(a.or.D,b))&&!(a.m8^a.or.eL^a.uB.C(b))?1:0;}
function QN(){var a=this;Bs.call(a);a.yL=0;a.uE=null;a.uz=null;a.Dn=null;}
function ASc(a,b){return a.yL^(!a.uE.C(b)&&!a.uz.C(b)?0:1);}
function QO(){var a=this;Bs.call(a);a.tn=0;a.wQ=null;a.wz=null;a.GK=null;}
function AGG(a,b){return a.tn^(!a.wQ.C(b)&&!a.wz.C(b)?0:1)?0:1;}
function QL(){var a=this;Bs.call(a);a.ss=null;a.GO=null;}
function AKf(a,b){var c,d;c=a.ss;d=c.bz;return d!==null?c.T^d.C(b):c.T^CC(c.D,b);}
function QM(){var a=this;Bs.call(a);a.yw=null;a.DI=null;}
function AL1(a,b){var c,d;c=a.yw;d=c.bz;return (d!==null?c.T^d.C(b):c.T^CC(c.D,b))?0:1;}
function QP(){var a=this;Bs.call(a);a.tt=null;a.wT=0;a.ug=null;}
function AOJ(a,b){var c,d,e;c=a.tt;d=c.bz;e=d!==null?c.T^d.C(b):c.T^CC(c.D,b);return !e&&!(a.wT^CC(a.ug.D,b))?0:1;}
function QQ(){var a=this;Bs.call(a);a.tN=null;a.xy=0;a.tD=null;}
function ARV(a,b){var c,d,e;c=a.tN;d=c.bz;e=d!==null?c.T^d.C(b):c.T^CC(c.D,b);return !e&&!(a.xy^CC(a.tD.D,b))?1:0;}
function NA(){var a=this;Bs.call(a);a.uf=0;a.yn=null;a.uV=null;a.zg=null;}
function AYh(a,b){var c,d;a:{if(!(a.uf^a.yn.C(b))){c=a.uV;d=c.bz;if(!(d!==null?c.T^d.C(b):c.T^CC(c.D,b))){b=0;break a;}}b=1;}return b;}
function NO(){var a=this;Bs.call(a);a.yy=0;a.rh=null;a.rz=null;a.zW=null;}
function AKj(a,b){var c,d;a:{if(!(a.yy^a.rh.C(b))){c=a.rz;d=c.bz;if(!(d!==null?c.T^d.C(b):c.T^CC(c.D,b))){b=1;break a;}}b=0;}return b;}
function Ny(){var a=this;Bs.call(a);a.wk=null;a.z7=null;}
function AIQ(a,b){var c,d;c=a.wk;d=c.bz;return d!==null?c.T^d.C(b):c.T^CC(c.D,b);}
function Nz(){var a=this;Bs.call(a);a.sm=null;a.GH=null;}
function ASJ(a,b){var c,d;c=a.sm;d=c.bz;return (d!==null?c.T^d.C(b):c.T^CC(c.D,b))?0:1;}
function NE(){var a=this;Bs.call(a);a.yK=null;a.tJ=0;a.yZ=null;}
function AK3(a,b){var c,d,e;c=a.yK;d=c.bz;e=d!==null?c.T^d.C(b):c.T^CC(c.D,b);return e&&a.tJ^CC(a.yZ.D,b)?1:0;}
function Nx(){var a=this;Bs.call(a);a.xV=null;a.wX=0;a.tI=null;}
function AWU(a,b){var c,d,e;c=a.xV;d=c.bz;e=d!==null?c.T^d.C(b):c.T^CC(c.D,b);return e&&a.wX^CC(a.tI.D,b)?0:1;}
function NC(){var a=this;Bs.call(a);a.x4=0;a.vH=null;a.tk=null;a.Dk=null;}
function ARc(a,b){var c,d;a:{if(a.x4^a.vH.C(b)){c=a.tk;d=c.bz;if(d!==null?c.T^d.C(b):c.T^CC(c.D,b)){b=1;break a;}}b=0;}return b;}
function ND(){var a=this;Bs.call(a);a.xL=0;a.vs=null;a.x0=null;a.DR=null;}
function ANk(a,b){var c,d;a:{if(a.xL^a.vs.C(b)){c=a.x0;d=c.bz;if(d!==null?c.T^d.C(b):c.T^CC(c.D,b)){b=0;break a;}}b=1;}return b;}
function Iy(){var a=this;C.call(a);a.fx=null;a.op=null;a.cJ=null;a.dH=0;}
function D$(){var a=this;C.call(a);a.Cz=null;a.fl=BI;a.f6=BI;a.d7=null;a.wd=null;a.eU=null;a.d3=0;a.fn=null;}
var Bae=null;var A4I=null;var A_l=0;var Baf=0;var Bag=null;function CD(){CD=V(D$);AHM();}
function ADb(a){var b,c,$$je;a:{b:{c:{d:{try{CD();Baf=Baf+1|0;XU(a);a.eO();}catch($$e){$$je=Br($$e);if($$je instanceof Dg){b=$$je;break d;}else{b=$$je;break c;}}b=a.d7;Hs(b);e:{try{MM(b);Ed(b);break e;}catch($$e){$$je=Br($$e);c=$$je;}Ed(b);H(c);}a.d3=0;Baf=Baf-1|0;b=Bae;if(A4I!==b)A4I=b;A4I.f6=Fc();break a;}try{Uj(VZ(a),a,b);break b;}catch($$e){$$je=Br($$e);b=$$je;}}c=a.d7;Hs(c);f:{try{MM(c);Ed(c);break f;}catch($$e){$$je=Br($$e);b=$$je;}Ed(c);H(b);}a.d3=0;Baf=Baf-1|0;c=Bae;if(A4I!==c)A4I=c;A4I.f6=Fc();H(b);}b
=a.d7;Hs(b);g:{try{MM(b);Ed(b);break g;}catch($$e){$$je=Br($$e);c=$$je;}Ed(b);H(c);}a.d3=0;Baf=Baf-1|0;b=Bae;if(A4I!==b)A4I=b;A4I.f6=Fc();}}
function XU(b){CD();if(A4I!==b)A4I=b;A4I.f6=Fc();}
function AGI(){CD();return A4I;}
function ABr(b){var $p,$z;$p=0;if(AS4()){var $T=SU();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:CD();$p=1;case 1:YV(b);if(GG()){break _;}return;default:AQa();}}SU().s(b,$p);}
function AJf(b,c){var d,e;CD();d=A4I;e=new Nt;e.vg=d;e.uy=c;e.Gj=Pv(e,AY2(b,S(2147483647))?2147483647:R(b));d.wd=e;}
function VZ(a){var b;b=a.Cz;if(b!==null)return b;CD();return Bag;}
function AHM(){var b,c,d;b=new D$;CD();c=null;b.d7=new C;b.d3=1;b.eU=B(459);b.fn=c;d=A_l;A_l=d+1|0;b.fl=S(d);Bae=b;A4I=b;A_l=1;Baf=1;Bag=new OE;}
function YV(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.jk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.Fq=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AZH(callback);thread.suspend(function(){try{AJf(b,callback);}catch($e){callback.Fq($rt_exception($e));}});return null;}
var BK=G(BJ);
function AZg(a){var b=new BK();AVh(b,a);return b;}
function AVh(a,b){a.c=1;a.d=1;a.f=b;}
var Jy=G(BJ);
function AEI(){var a=this;C.call(a);a.bR=null;a.bB=null;a.eG=null;a.gD=null;a.ec=0;a.dA=0;a.dq=0;a.Y=0;a.eC=0;a.li=0;a.g7=0;a.dn=0;a.F8=0;a.h0=0;a.iJ=0;}
function A0O(a,b,c,d,e,f){var g=new AEI();AMq(g,a,b,c,d,e,f);return g;}
function AMq(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.h0=(-1);h=e+1|0;a.ec=h;i=Bc(h*2|0);a.bR=i;j=Bc(g);k=j.data;a.bB=j;e=0;g=k.length;l=Bo(e,g);if(l>0){b=new Bh;b.c=1;b.d=1;H(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.eG=Bc(f);i=i.data;h=0;m=i.length;e=Bo(h,m);if(e>0){b=new Bh;b.c=1;b.d=1;H(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.dA=0;a.iJ=2;f=0;if(e>0){b=new Bh;b.c=1;b.d=1;H(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bh;b.c=1;b.d=1;H(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.gD=b;if(c>=
0){a.dq=c;a.Y=d;}a.eC=a.dq;}
function WG(a,b){var c,d,e,f,g,h;if(!a.dA){c=new BK;c.c=1;c.d=1;H(c);}if(b>=0&&b<a.ec)return a.bR.data[(b*2|0)+1|0];c=new Y;Q();d=new P;d.b=D(16);O(d,d.a,b,10);e=new N;f=d.b;g=d.a;h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function ACZ(a,b){var c,d,e,f,g,h;if(!a.dA){c=new BK;c.c=1;c.d=1;H(c);}if(b>=0&&b<a.ec)return;c=new Y;Q();d=new P;d.b=D(16);O(d,d.a,b,10);e=new N;f=d.b;g=d.a;h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
var AEL=G();
function WH(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function K6(b){if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
var ABU=G();
function FM(){return A4F($rt_globals.performance.now()*1000000.0);}
function Ul(b){return KY(b,S(1000000));}
var Z7=G();
var Gi=G(0);
function P6(){C.call(this);this.wB=null;}
function AW$(a){AN6(a.wB);}
var S7=G(B8);
var S8=G(B8);
var S_=G(B8);
var Ta=G(B8);
var S9=G(B8);
var S$=G(B8);
var S5=G(B8);
var S6=G(B8);
var S4=G(B8);
var AFv=G();
var Nd=G(0);
var OE=G();
function Uj(a,b,c){var d;if(A$G===null){d=new Ct;d.cf=A5k;b=new P;b.b=D(16);d.bc=b;d.b$=D(32);d.ck=0;Cr();d.cg=A$H;A$G=d;}Ja(c,A$G);}
var VM=G();
var Ou=G(0);
function Rx(){C.call(this);this.hm=null;}
function AZH(b){var c;c=new Rx;c.hm=b;return c;}
function ATE(a,b){a.hm.jk(b);}
function APk(a,b){a.hm.Fq(b);}
function OS(){var a=this;C.call(a);a.r_=null;a.sa=null;a.r9=0;a.r$=null;}
var M_=G(H5);
function AJT(a,b,c,d){var e,f,g,h,i,j;e=0;f=d.Y;a:{while(true){if(b>f){b=e;break a;}g=a.bO;h=d.bR.data;i=g*2|0;j=h[i];h[i]=b;e=a.dJ.o(b,c,d);if(e>=0)break;i=a.bO;d.bR.data[i*2|0]=j;b=b+1|0;}}return b;}
function AYd(a,b,c,d,e){var f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.bO;h=e.bR.data;i=g*2|0;j=h[i];h[i]=c;f=a.dJ.o(c,d,e);if(f>=0)break;i=a.bO;e.bR.data[i*2|0]=j;c=c+(-1)|0;}}return c;}
function AIF(a){return null;}
function AAi(){var a=this;C.call(a);a.O6=0;a.O8=0;a.Nh=0;a.NS=0;a.Mt=null;}
function GY(){var a=this;D$.call(a);a.gT=0;a.ev=null;a.e$=null;a.eJ=null;}
function AM2(a){var b,c,d,e,f;b=new $rt_globals.XMLHttpRequest();c=new Pp;c.f1=a;c.iA=b;c=BY(c,"handleEvent");b.onreadystatechange=c;c=a.eJ;d=a.e$;e=new Iu;e.oQ=c;e.l0=d;c=BY(e,"handleEvent");b.onprogress=c;d=a.ev;f=a.gT;b.open("GET",$rt_ustr(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
var M5=G();
var A$9=null;function AZ6(){AZ6=V(M5);AWe();}
function AWe(){var b,c;Jv();b=Bc((A_b.cu()).data.length);c=b.data;A$9=b;c[A$0.q]=1;c[A$$.q]=2;}
var AFu=G();
function AT1(a,b,c){a.E8($rt_str(b),Ds(c,"handleEvent"));}
function AL_(a,b,c){a.DZ($rt_str(b),Ds(c,"handleEvent"));}
function AG1(a,b,c,d){a.zm($rt_str(b),Ds(c,"handleEvent"),d?1:0);}
function AG5(a,b){return !!a.Fc(b);}
function ASY(a,b,c,d){a.A3($rt_str(b),Ds(c,"handleEvent"),d?1:0);}
var HI=G(0);
function M8(){var a=this;C.call(a);a.gy=null;a.n3=0;a.mj=null;a.oE=null;a.iI=null;}
function Zj(a,b){var c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(AS4()){var $T=SU();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.gy.readyState==4){if(a.gy.status==200){if(a.iI.dI){if(A_a===null){c=new Ct;c.cf=A5j;b=new P;b.b=D(16);c.bc=b;c.b$=D(32);c.ck=0;Cr();c.cg=A$H;A_a=c;}d=A_a;b=a.mj;c=new P;c.b=D(16);I(c,c.a,B(460));e=c.a;if(b===null)b=B(2);I(c,e,b);f=new N;g=c.b;h=c.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);b=d.bc;I(b,b.a,f);h=
b.a;Bd(b,h,h+1|0);b.b.data[h]=10;Co(d);}c=a.gy.response;ID();d=A$1.ee.document;f=d.createElement("script");b=d.createTextNode(c);f.appendChild(b);d.body.appendChild(f);$rt_str(a.gy.responseText);}else if(a.gy.status!=404&&a.gy.status!=403){try{j=S(100);$p=1;continue _;}catch($$e){$$je=Br($$e);if($$je instanceof Dg){}else{throw $$e;}}Lk(a.iI,a.n3,a.mj,a.oE);}b=a.iI;b.bx=b.bx-1|0;}return;case 1:a:{try{ABr(j);if(GG()){break _;}break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dg){}else{throw $$e;}}}Lk(a.iI,a.n3,
a.mj,a.oE);b=a.iI;b.bx=b.bx-1|0;return;default:AQa();}}SU().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Wm(a,b){var $p,$z;$p=0;if(AS4()){var $T=SU();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Zj(a,b);if(GG()){break _;}return;default:AQa();}}SU().s(a,b,$p);}
var OU=G();
var A$e=0;function GF(){var a=this;C.call(a);a.gi=null;a.ko=0;a.hw=0;a.dN=0;}
function RH(a){var b;if(a.dN)return a.hw>=a.gi.m?0:1;b=new Bb;b.c=1;b.d=1;b.f=B(461);H(b);}
function LK(a){var b,c,d,e,f,g;b=a.hw;c=a.gi;if(b<c.m){if(a.dN){d=c.r.data;a.hw=b+1|0;return d[b];}c=new Bb;c.c=1;c.d=1;c.f=B(461);H(c);}c=new Je;Q();e=new P;e.b=D(16);O(e,e.a,b,10);f=new N;d=e.b;b=e.a;g=D(b);f.e=g;M(d,0,g,0,b);c.c=1;c.d=1;c.f=f;H(c);}
function LH(){var a=this;C.call(a);a.lc=null;a.mN=0;a.qh=null;a.qi=null;}
function Rz(a){var b,c,d;if(A$e){b=new GF;c=a.lc;d=a.mN;b.dN=1;b.gi=c;b.ko=d;return b;}if(a.qh===null){b=new GF;c=a.lc;d=a.mN;b.dN=1;b.gi=c;b.ko=d;a.qh=b;b=new GF;b.dN=1;b.gi=c;b.ko=d;a.qi=b;}b=a.qh;if(b.dN){c=a.qi;c.hw=0;c.dN=1;b.dN=0;return c;}b.hw=0;b.dN=1;a.qi.dN=0;return b;}
function Ji(){var a=this;C.call(a);a.qj=null;a.dS=null;a.ow=null;}
function X$(a){var b,c,d,e,f,g,h,i,j;b=a.dS.length;c=new P;c.b=D(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{while(true){if(d>=b){e=new N;f=c.b;g=c.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);return e;}i=b-d|0;if(i<3){if(i>=2){g=((a.dS[d]&255)<<16)+((a.dS[d+1|0]&255)<<8)|0;ACW(c,CZ(B(462),g>>18&63));Fh(c,CZ(B(462),g>>12&63));Fh(c,CZ(B(462),g>>6&63));DF(c,B(463));}else{i=(a.dS[d]&255)<<16;g=i>>18&63;if(g<0)break a;f=B(462).e.data;if(g>=f.length)break a;j=f[g];g=c.a;Bd(c,g,g+1|0);c.b.data[g]=j;i=CZ(B(462),i>>12&63);g=c.a;Bd(c,g,g
+1|0);c.b.data[g]=i;I(c,c.a,B(464));}}else{i=(((a.dS[d]&255)<<16)+((a.dS[d+1|0]&255)<<8)|0)+(a.dS[d+2|0]&255)|0;g=i>>18&63;if(g<0)break b;f=B(462).e.data;if(g>=f.length)break b;j=f[g];g=c.a;Bd(c,g,g+1|0);c.b.data[g]=j;g=i>>12&63;if(g<0)break c;f=B(462).e.data;if(g>=f.length)break c;j=f[g];g=c.a;Bd(c,g,g+1|0);c.b.data[g]=j;g=i>>6&63;if(g<0)break d;f=B(462).e.data;if(g>=f.length)break d;j=f[g];g=c.a;Bd(c,g,g+1|0);c.b.data[g]=j;i=i&63;if(i<0)break;f=B(462).e.data;if(i>=f.length)break;g=f[i];i=c.a;Bd(c,i,i+1|0);c.b.data[i]
=g;}d=d+3|0;}e=new X;e.c=1;e.d=1;H(e);}e=new X;e.c=1;e.d=1;H(e);}e=new X;e.c=1;e.d=1;H(e);}e=new X;e.c=1;e.d=1;H(e);}e=new X;e.c=1;e.d=1;H(e);}
function M6(){C.call(this);this.of=null;}
function AGX(a){var b,c,d,e,f,g,h;b=a.of.kV;c=b.r.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new B9;d.G=c;e=d;c.classObject=e;}}f=d.G.$meta.item;if(f===null)c=null;else{c=f.classObject;if(c===null){c=new B9;c.G=f;d=c;f.classObject=d;}}g=b.m;if(c===null){b=new CK;b.c=1;b.d=1;CE(b);H(b);}if(c===L($rt_voidcls())){b=new Bh;b.c=1;b.d=1;CE(b);H(b);}if(g<0){b=new D1;b.c=1;b.d=1;CE(b);H(b);}d=EU(c.G,g);Hh(b.r,0,d,0,b.m);h=d;a.of.lx.vy.vY.Po(h);}
var P8=G(0);
var IP=G(0);
var SG=G(0);
var Hb=G();
function Ly(){Hb.call(this);this.cf=null;}
function Ct(){var a=this;Ly.call(a);a.ck=0;a.hL=0;a.bc=null;a.b$=null;a.cg=null;}
function QF(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;d=d-c|0;f=new IF;g=e.length;h=c+d|0;f.v=(-1);f.y=g;f.g=g;f.h=c;f.g=h;f.hh=0;f.iQ=0;f.gB=b;i=1024;if(d<i)i=d;if(16>i)i=16;e=BF(i);h=e.data.length;j=new Ch;c=0+h|0;j.v=(-1);j.y=h;j.g=h;B6();j.bh=A98;j.bl=0;j.U=e;j.h=0;j.g=c;j.b4=0;j.bt=0;k=Zd(a.cg);DU();l=A$M;if(l===null){f=new Bh;f.c=1;f.d=1;f.f=B(465);H(f);}k.gF=l;k.gA=l;while(true){g=(LD(k,f,j,1)).bo!=1?0:1;i=j.h;l=a.cf;if(l===null)a.hL=1;if(a.hL?0:1)a:{try{l.nu(e,0,i);break a;}catch($$e){$$je=Br($$e);if
($$je instanceof EN){}else{throw $$e;}}a.hL=1;}j.h=0;j.g=j.y;j.v=(-1);if(!g)break;}while(true){g=(M2(k,j)).bo!=1?0:1;i=j.h;f=a.cf;if(f===null)a.hL=1;if(a.hL?0:1)b:{try{f.nu(e,0,i);break b;}catch($$e){$$je=Br($$e);if($$je instanceof EN){}else{throw $$e;}}a.hL=1;}j.h=0;j.g=j.y;j.v=(-1);if(!g)break;}}
function Co(a){var b,c,d,e,f,g,h,i,j;b=a.bc;c=b.a;d=a.b$;if(c>d.data.length)d=D(c);e=0;f=0;if(e>c){b=new Y;b.c=1;b.d=1;b.f=B(466);H(b);}while(e<c){g=d.data;h=f+1|0;i=b.b.data;j=e+1|0;g[f]=i[e];f=h;e=j;}QF(a,d,0,c);a.bc.a=0;}
function HV(){Hb.call(this);this.ms=null;}
var IS=G(HV);
var A5j=null;function AK9(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ANq(){var b;b=new IS;b.ms=BF(1);A5j=b;}
function Iu(){var a=this;C.call(a);a.l0=null;a.oQ=null;}
function AMC(a,b){a.l0.ke(b.loaded);}
function Es(){var a=this;C.call(a);a.fW=null;a.iq=null;}
function DQ(b){var c,d,e,f;c=b.e.data;d=c.length;if(d?0:1){e=new I0;e.c=1;e.d=1;e.nf=b;H(e);}if(0>=d){b=new X;b.c=1;b.d=1;H(b);}if(!AEM(c[0])){e=new I0;e.c=1;e.d=1;e.nf=b;H(e);}f=1;a:{while(true){c=b.e.data;d=Bo(f,c.length);if(d>=0)break;if(f<0)break a;if(d>=0)break a;b:{d=c[f];switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AEM(d))break b;else{e=new I0;e.c=1;e.d=1;e.nf=b;H(e);}}}f=f+1|0;}return;}b=new X;b.c=1;b.d=1;H(b);}
function AEM(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function AUZ(a){return a.fW;}
function APb(a,b){var c,d,$$je;a:{try{c=a.kw();DU();b=Rf(PY(OL(c,A$M),A$M),b);}catch($$e){$$je=Br($$e);if($$je instanceof FV){d=$$je;break a;}else{throw $$e;}}return b;}c=new MI;c.c=1;c.d=1;c.f=B(75);c.cX=d;H(c);}
var Lj=G(Es);
var A$H=null;function Cr(){Cr=V(Lj);AJv();}
function Zd(a){var b,c,d,e,f;b=new NW;c=BF(1);d=c.data;d[0]=63;DU();e=Bah;b.gF=e;b.gA=e;f=d.length;if(f&&f>=b.fU){b.lT=a;b.jf=c.cu();b.jp=2.0;b.fU=4.0;b.j3=D(512);b.i5=BF(512);return b;}e=new Bh;Il(e,B(467));H(e);}
function AJv(){var b,c,d,e,f;b=new Lj;Cr();c=Bj(N,0);d=c.data;DQ(B(117));e=d.length;f=0;while(f<e){DQ(d[f]);f=f+1|0;}b.fW=B(117);b.iq=c.cu();A$H=b;}
function I0(){Bh.call(this);this.nf=null;}
var Oq=G(0);
var Id=G();
function AHk(a,b,c){}
function AJ8(a){}
function ASx(a){}
function AST(a){}
function Nf(){var a=this;Id.call(a);a.sN=null;a.l1=0;}
function AJ2(a){var b,c,d;b=new O0;b.rF=a;c=new Iw;d=new Qx;d.tv=b;$rt_globals.window.physxOnInit=BY(d,"onInit");QE(c,B(468),null,null);}
function ASq(a,b){var c,d,e;if(a.l1){a.l1=0;c=a.sN;d=AZM();e=c.dU;if(e!==null)e.mr();c.dU=d;d.ly();c.dU.mU(A97.cv.width,A97.cv.height);}}
var Je=G(BJ);
var Bb=G(BJ);
function AUg(a,b){var c=new Bb();AHi(c,a,b);return c;}
function FJ(a){var b=new Bb();Vl(b,a);return b;}
function AHi(a,b,c){a.c=1;a.d=1;a.f=b;a.cX=c;}
function Vl(a,b){a.c=1;a.d=1;a.f=b;}
var U_=G();
function N1(b,c){var d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function R4(){Bs.call(this);this.EC=null;}
function AOO(a,b){return CH(b)!=2?0:1;}
function Qk(){Bs.call(this);this.EO=null;}
function AQY(a,b){return CH(b)!=1?0:1;}
function OD(){Bs.call(this);this.D9=null;}
function AHu(a,b){a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CH(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;}
function OC(){Bs.call(this);this.z$=null;}
function ASz(a,b){return 0;}
function PK(){Bs.call(this);this.B2=null;}
function AKV(a,b){return !CH(b)?0:1;}
function QW(){Bs.call(this);this.Fh=null;}
function AXf(a,b){return CH(b)!=9?0:1;}
function Ns(){Bs.call(this);this.Cs=null;}
function AMV(a,b){return H2(b);}
function Ru(){Bs.call(this);this.A9=null;}
function ANJ(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Qh(){Bs.call(this);this.y5=null;}
function AX0(a,b){a:{b:{switch(CH(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=H2(b);}return b;}
function Qj(){Bs.call(this);this.Bk=null;}
function AI$(a,b){a:{b:{switch(CH(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=H2(b);}return b;}
function Nq(){Bs.call(this);this.BZ=null;}
function AO0(a,b){a:{switch(CH(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Q8(){Bs.call(this);this.Gp=null;}
function AUn(a,b){a:{b:{switch(CH(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;}
function Q$(){Bs.call(this);this.AD=null;}
function AVJ(a,b){a:{switch(CH(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;}
function Sl(){Bs.call(this);this.Fw=null;}
function AW9(a,b){return CH(b)!=3?0:1;}
function RT(){Bs.call(this);this.y7=null;}
function APi(a,b){a:{b:{switch(CH(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=H2(b);}return b;}
function M4(){Bs.call(this);this.GS=null;}
function AIZ(a,b){a:{b:{switch(CH(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=H2(b);}return b;}
function I_(){Bs.call(this);this.lp=0;}
function AMX(a,b){return a.T^(a.lp!=CH(b&65535)?0:1);}
var RK=G(I_);
function AWz(a,b){return a.T^(!(a.lp>>CH(b&65535)&1)?0:1);}
function Fb(){C.call(this);this.eW=null;}
function AQO(a){ADb(a.eW);}
var ABK=G();
var P2=G();
var A_o=null;function A0V(){A0V=V(P2);AN9();}
function AN9(){var b,c;Fl();b=Bc((Bab.cu()).data.length);c=b.data;A_o=b;c[A_G.q]=1;c[A_D.q]=2;c[A_F.q]=3;c[A_E.q]=4;c[A_2.q]=5;}
var MC=G(BJ);
var JD=G(HV);
var A5k=null;function AJK(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function APN(){var b;b=new JD;b.ms=BF(1);A5k=b;}
var Rb=G(EY);
var A5l=null;function ARI(){A5l=L($rt_doublecls());}
var GP=G();
var Bai=null;var Baj=null;var A$V=null;var A$U=null;var A$T=null;function ACG(){Bai=GA([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Baj=AAP([S(1),S(10),S(100),S(1000),S(10000),S(100000),S(1000000),S(10000000),S(100000000),S(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);A$V=AAP([S(1),S(10),S(100),S(10000),S(100000000),F(1874919424, 2328306)]);A$U
=new Sz;A$T=new Ps;}
var JQ=G();
var Bak=BI;var Bal=null;var Bam=null;function Wj(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):F(0, 2146959360);c.rB=BU(CN(d,F(0, 2147483648)),BI)?0:1;e=CN(d,F(4294967295, 1048575));f=R(A2r(d,52))&2047;if(BU(e,BI)&&!f){c.oh=BI;c.nj=0;return;}if(f)e=AJz(e,F(0, 1048576));else{e=GK(e,1);while(BU(CN(e,F(0, 1048576)),BI)){e=GK(e,1);f=f+(-1)|0;}}g=Bam;h=AVT(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=Bam.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=IH(e,Bal.data[i],j);if(AJp(k,
Bak)){while(D_(k,Bak)<=0){h=h+(-1)|0;k=C4(Bf(k,S(10)),S(9));}g=Bam.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=IH(e,Bal.data[i],j);}e=GK(e,1);d=C4(e,S(1));g=Bal.data;i=h+1|0;l=g[i];f=j-1|0;m=IH(d,l,f);l=IH(RC(e,S(1)),Bal.data[i],f);n=S(1);while(true){o=Bf(n,S(10));if(D_(DR(k,o),DR(l,o))<=0)break;n=o;}p=S(1);while(true){q=Bf(p,S(10));if(D_(DR(k,q),DR(m,q))>=0)break;p=q;}i=D_(n,p);e=i>0?Bf(DR(k,n),n):i<0?C4(Bf(DR(k,p),p),p):Bf(DR(C4(k,KY(p,S(2))),p),p);if(D_(e,F(2808348672, 232830643))>=0)while(true){h=h+1|0;e=DR(e,S(10));if
(D_(e,F(2808348672, 232830643))<0)break;}else if(D_(e,F(1569325056, 23283064))<0){h=h+(-1)|0;e=Bf(e,S(10));}c.oh=e;c.nj=h-330|0;}
function IH(b,c,d){var e,f,g,h,i,j,k,l;e=CN(b,S(65535));f=CN(Bi(b,16),S(65535));g=CN(Bi(b,32),S(65535));h=CN(Bi(b,48),S(65535));i=CN(c,S(65535));j=CN(Bi(c,16),S(65535));k=CN(Bi(c,32),S(65535));l=CN(Bi(c,48),S(65535));return C4(C4(C4(GK(Bf(l,h),32+d|0),GK(C4(Bf(l,g),Bf(k,h)),16+d|0)),GK(C4(C4(Bf(l,f),Bf(k,g)),Bf(j,h)),d)),Bi(C4(C4(C4(Bf(k,e),Bf(j,f)),Bf(i,g)),GK(C4(C4(C4(Bf(l,e),Bf(k,f)),Bf(j,g)),Bf(i,h)),16)),32-d|0));}
function VU(){Bak=DR(S(-1),S(10));Bal=AAP([F(3251292512, 2194092222),F(1766094183, 3510547556),F(553881887, 2808438045),F(443105509, 2246750436),F(3285949193, 3594800697),F(910772436, 2875840558),F(2446604867, 2300672446),F(2196580869, 3681075914),F(2616258154, 2944860731),F(1234013064, 2355888585),F(1974420903, 3769421736),F(720543263, 3015537389),F(1435428070, 2412429911),F(578697993, 3859887858),F(2180945313, 3087910286),F(885762791, 2470328229),F(3135207384, 3952525166),F(1649172448, 3162020133),F(3037324877, 2529616106),
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
F(3348809418, 2876309015),F(2679047534, 2301047212),F(850502218, 3681675540),F(680401775, 2945340432),F(3121301797, 2356272345),F(699115580, 3770035753),F(2277279382, 3016028602),F(103836587, 2412822882),F(1025131999, 3860516611),F(4256079436, 3088413288),F(827883168, 2470730631),F(3901593088, 3953169009)]);Bam=A1a([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Sz(){var a=this;C.call(a);a.oh=BI;a.nj=0;a.rB=0;}
function Ec(){var a=this;C.call(a);a.y=0;a.h=0;a.g=0;a.v=0;}
function AFg(a,b){a.v=(-1);a.y=b;a.g=b;}
function AJq(a){return a.y;}
function AU7(a){return a.h;}
function BS(a,b){var c,d,e,f,g,h;if(b>=0&&b<=a.g){a.h=b;if(b<a.v)a.v=0;return a;}c=new Bh;d=a.g;e=new P;e.b=D(16);I(e,e.a,B(469));O(e,e.a,b,10);I(e,e.a,B(470));O(e,e.a,d,10);d=e.a;Bd(e,d,d+1|0);f=e.b;f.data[d]=93;g=new N;d=e.a;Q();h=D(d);g.e=h;M(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function AOs(a){return a.g;}
function Cj(a,b){var c,d,e,f,g,h;if(b>=0&&b<=a.y){if(a.v>b)a.v=(-1);a.g=b;if(a.h>b)a.h=b;return a;}c=new Bh;d=a.y;e=new P;e.b=D(16);I(e,e.a,B(471));O(e,e.a,b,10);I(e,e.a,B(470));O(e,e.a,d,10);d=e.a;Bd(e,d,d+1|0);f=e.b;f.data[d]=93;g=new N;d=e.a;Q();h=D(d);g.e=h;M(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function AGm(a){a.g=a.h;a.h=0;a.v=(-1);return a;}
function AOt(a){return a.g-a.h|0;}
var Mc=G(0);
var KK=G(Ec);
function Nm(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Y;i=new P;i.b=D(16);I(i,i.a,B(472));O(i,i.a,g,10);I(i,i.a,B(473));O(i,i.a,f,10);j=new N;b=i.b;d=i.a;Q();e=D(d);j.e=e;M(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}f=a.g;k=a.h;if((f-k|0)<d){h=new Ie;h.c=1;h.d=1;H(h);}if(d>=0){g=0;l=k;while(g<d){m=c+1|0;f=l+1|0;e[c]=a.gB.data[l+a.hh|0];g=g+1|0;c=m;l=f;}a.h=k+d|0;return a;}h=new Y;i=new P;i.b=D(16);I(i,i.a,B(474));O(i,i.a,d,10);I(i,i.a,B(475));j=new N;b=i.b;d=i.a;Q();e
=D(d);j.e=e;M(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}}b=b.data;h=new Y;d=b.length;i=new P;i.b=D(16);I(i,i.a,B(476));O(i,i.a,c,10);I(i,i.a,B(470));O(i,i.a,d,10);d=i.a;Bd(i,d,d+1|0);b=i.b;b.data[d]=41;j=new N;d=i.a;Q();e=D(d);j.e=e;M(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}
function AGv(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(a.iQ){e=new DD;e.c=1;e.d=1;H(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new F3;e.c=1;e.d=1;H(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Y;j=new P;j.b=D(16);I(j,j.a,B(477));O(j,j.a,i,10);I(j,j.a,B(473));O(j,j.a,f,10);k=new N;b=j.b;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}if(d>=0){i=0;l=g;while(i<d){m=l+1|0;f=c+1|0;a.gB.data[l+a.hh|0]=h[c];i=i+1|0;l=m;c=f;}a.h=g+d|0;return a;}e=new Y;j=new P;j.b=D(16);I(j,j.a,B(474));O(j,j.a,d,10);I(j,
j.a,B(475));k=new N;b=j.b;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}}b=b.data;e=new Y;d=b.length;j=new P;j.b=D(16);I(j,j.a,B(476));O(j,j.a,c,10);I(j,j.a,B(470));O(j,j.a,d,10);f=j.a;Bd(j,f,f+1|0);b=j.b;b.data[f]=41;k=new N;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}
function LE(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.iQ){b=new DD;b.c=1;b.d=1;H(b);}e=d-c|0;f=a.g;g=a.h;if((f-g|0)<e){b=new F3;b.c=1;b.d=1;H(b);}if(c>=0){h=b.e.data.length;if(c<=h){if(d>h){b=new Y;i=new P;i.b=D(16);I(i,i.a,B(477));O(i,i.a,d,10);I(i,i.a,B(478));O(i,i.a,h,10);j=new N;k=i.b;d=i.a;Q();l=D(d);j.e=l;M(k,0,l,0,d);b.c=1;b.d=1;b.f=j;H(b);}if(c<=d){a:{while(c<d){h=g+1|0;f=c+1|0;if(c<0)break a;k=b.e.data;if(c>=k.length)break a;ADh(a,g,k[c]);g=h;c=f;}a.h=a.h+e|0;return a;}b=new X;b.c=1;b.d=1;H(b);}b=new Y;i=new P;i.b
=D(16);I(i,i.a,B(479));O(i,i.a,c,10);I(i,i.a,B(480));O(i,i.a,d,10);j=new N;k=i.b;d=i.a;Q();l=D(d);j.e=l;M(k,0,l,0,d);b.c=1;b.d=1;b.f=j;H(b);}}i=new Y;d=b.e.data.length;b=new P;b.b=D(16);I(b,b.a,B(479));O(b,b.a,c,10);I(b,b.a,B(470));O(b,b.a,d,10);d=b.a;Bd(b,d,d+1|0);k=b.b;k.data[d]=41;j=new N;d=b.a;Q();l=D(d);j.e=l;M(k,0,l,0,d);i.c=1;i.d=1;i.f=j;H(i);}
function Fx(){var a=this;Ec.call(a);a.bl=0;a.U=null;a.bh=null;}
function Q5(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Y;i=new P;i.b=D(16);I(i,i.a,B(481));O(i,i.a,g,10);I(i,i.a,B(473));O(i,i.a,f,10);j=new N;b=i.b;d=i.a;Q();e=D(d);j.e=e;M(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}f=a.g;k=a.h;if((f-k|0)<d){h=new Ie;h.c=1;h.d=1;H(h);}if(d>=0){g=k+a.bl|0;l=0;while(l<d){m=c+1|0;b=a.U.data;f=g+1|0;e[c]=b[g];l=l+1|0;c=m;g=f;}a.h=k+d|0;return a;}h=new Y;i=new P;i.b=D(16);I(i,i.a,B(474));O(i,i.a,d,10);I(i,i.a,B(475));j=new N;b=i.b;d=i.a;Q();e
=D(d);j.e=e;M(b,0,e,0,d);h.c=1;h.d=1;h.f=j;H(h);}}b=b.data;h=new Y;d=b.length;i=new P;i.b=D(16);I(i,i.a,B(476));O(i,i.a,c,10);I(i,i.a,B(470));O(i,i.a,d,10);d=i.a;Bd(i,d,d+1|0);e=i.b;e.data[d]=41;j=new N;d=i.a;Q();b=D(d);j.e=b;M(e,0,b,0,d);h.c=1;h.d=1;h.f=j;H(h);}
function Tj(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.bt){e=new DD;e.c=1;e.d=1;H(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new F3;e.c=1;e.d=1;H(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Y;j=new P;j.b=D(16);I(j,j.a,B(482));O(j,j.a,i,10);I(j,j.a,B(473));O(j,j.a,f,10);k=new N;b=j.b;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}if(d>=0){i=g+a.bl|0;l=0;while(l<d){b=a.U.data;m=i+1|0;f=c+1|0;b[i]=h[c];l=l+1|0;i=m;c=f;}a.h=g+d|0;return a;}e=new Y;j=new P;j.b=D(16);I(j,j.a,B(474));O(j,
j.a,d,10);I(j,j.a,B(475));k=new N;b=j.b;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}}b=b.data;e=new Y;d=b.length;j=new P;j.b=D(16);I(j,j.a,B(476));O(j,j.a,c,10);I(j,j.a,B(470));O(j,j.a,d,10);d=j.a;Bd(j,d,d+1|0);h=j.b;h.data[d]=41;k=new N;d=j.a;Q();b=D(d);k.e=b;M(h,0,b,0,d);e.c=1;e.d=1;e.f=k;H(e);}
function SR(a,b){a.bh=b;return a;}
function AM$(a,b){Cj(a,b);return a;}
function AQt(a,b){BS(a,b);return a;}
function FO(){C.call(this);this.oM=null;}
var Ban=null;var A$M=null;var Bah=null;function DU(){DU=V(FO);AL8();}
function AL8(){var b;b=new FO;DU();b.oM=B(483);Ban=b;b=new FO;b.oM=B(484);A$M=b;b=new FO;b.oM=B(485);Bah=b;}
var K8=G(0);
var PD=G(0);
function Nt(){var a=this;C.call(a);a.vg=null;a.uy=null;a.EA=0;a.Gj=0;}
function AVH(a){var b,c;if(!a.EA){b=a.vg;b.wd=null;CD();if(A4I!==b)A4I=b;A4I.f6=Fc();c=a.uy;b=null;c.hm.jk(b);}}
var Ko=G(KK);
function Ui(a){var b,c,d,e,f,g,h,i;if(a.iQ){b=new DD;b.c=1;b.d=1;H(b);}a:{c=a.g;d=a.h;e=c-d|0;if(d>0){f=0;while(true){if(f>=e)break a;c=d+1|0;g=a.gB.data;h=a.hh;i=g[d+h|0];g[f+h|0]=i;f=f+1|0;d=c;}}}a.h=e;a.g=a.y;a.v=(-1);return a;}
function IF(){var a=this;Ko.call(a);a.iQ=0;a.hh=0;a.gB=null;}
function ADh(a,b,c){a.gB.data[b+a.hh|0]=c;}
function KD(){var a=this;C.call(a);a.lT=null;a.jf=null;a.jp=0.0;a.fU=0.0;a.gF=null;a.gA=null;a.ir=0;}
function OL(a,b){var c;if(b!==null){a.gF=b;return a;}c=new Bh;c.c=1;c.d=1;c.f=B(465);H(c);}
function APn(a,b){}
function PY(a,b){var c;if(b!==null){a.gA=b;return a;}c=new Bh;c.c=1;c.d=1;c.f=B(465);H(c);}
function ATn(a,b){}
function LD(a,b,c,d){var e,f,g,h,i,j,k,$$je;a:{e=a.ir;if(e!=3){if(d)break a;if(e!=2)break a;}b=new BK;b.c=1;b.d=1;H(b);}a.ir=!d?1:2;while(true){try{f=Uv(a,b,c);}catch($$e){$$je=Br($$e);if($$je instanceof BJ){g=$$je;b=new Mk;b.c=1;b.d=1;b.cX=g;H(b);}else{throw $$e;}}e=f.bo;if(e?0:1){if(!d)return f;e=b.g-b.h|0;if(e<=0)return f;f=new Cg;f.bo=2;f.bF=e;}else if(e!=1?0:1)break;h=!(f.bo!=3?0:1)?a.gF:a.gA;b:{DU();if(h!==A$M){if(h===Ban)break b;else return f;}i=c.g-c.h|0;j=a.jf;e=j.data.length;if(i<e)return A5n;Tj(c,
j,0,e);}k=b.h;e=f.bo;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Gl;b.c=1;b.d=1;H(b);}BS(b,k+f.bF|0);}return f;}
function Rf(a,b){var c,d,e,f,g,h;c=b.g-b.h|0;if(!c){b=new Ch;d=BF(0);b.v=(-1);b.y=0;b.g=0;B6();b.bh=A98;b.bl=0;b.U=d;b.h=0;b.g=0;b.b4=0;b.bt=0;return b;}a.ir=0;e=c*a.jp|0;if(e<0){b=new Bh;f=new P;f.b=D(16);I(f,f.a,B(486));O(f,f.a,e,10);g=new N;d=f.b;c=f.a;Q();h=D(c);g.e=h;M(d,0,h,0,c);b.c=1;b.d=1;b.f=g;H(b);}f=new Ch;d=BF(e);f.v=(-1);f.y=e;f.g=e;B6();f.bh=A98;f.bl=0;f.U=d;f.h=0;f.g=e;f.b4=0;f.bt=0;while(true){g=LD(a,b,f,0);if(g===A5m)break;if(g===A5n){f=No(a,f);continue;}if(!AC8(g))continue;Yi(g);}b=LD(a,b,
f,1);c=b.bo;e=c!=2?0:1;e=!e&&!(c!=3?0:1)?0:1;a:{if(e){switch(c){case 0:break;case 1:b=new Lc;b.c=1;b.d=1;H(b);case 2:f=new K1;e=b.bF;f.c=1;f.d=1;f.oY=e;H(f);case 3:f=new Kp;e=b.bF;f.c=1;f.d=1;f.qR=e;H(f);default:break a;}b=new Kq;b.c=1;b.d=1;H(b);}}while(true){c=(M2(a,f)).bo;if(c?0:1)break;if(!(c!=1?0:1))continue;f=No(a,f);}AGm(f);return f;}
function No(a,b){var c,d,e,f,g,h,i;c=b.U.data;d=c.length;e=d*2|0;f=BF(e);if(e<d)d=e;g=f.data;e=0;while(e<d){g[e]=c[e];e=e+1|0;}d=g.length;h=new Ch;i=0+d|0;h.v=(-1);h.y=d;h.g=d;B6();h.bh=A98;h.bl=0;h.U=f;h.h=0;h.g=i;h.b4=0;h.bt=0;BS(h,b.h);return h;}
function M2(a,b){var c,d;c=a.ir;if(c!=2&&c!=4){b=new BK;b.c=1;b.d=1;H(b);}d=A5m;if(d===d)a.ir=3;return d;}
function AUk(a,b){return A5m;}
function AG4(a){a.ir=0;return a;}
function AMS(a){}
function Cg(){var a=this;C.call(a);a.bo=0;a.bF=0;}
var A5m=null;var A5n=null;function AYG(a,b){var c=new Cg();ABa(c,a,b);return c;}
function ABa(a,b,c){a.bo=b;a.bF=c;}
function AC8(a){var b,c;b=a.bo;c=b!=2?0:1;return !c&&!(b!=3?0:1)?0:1;}
function AD_(b){var c;c=new Cg;c.bo=2;c.bF=b;return c;}
function Yi(a){var b,c;switch(a.bo){case 0:b=new Kq;b.c=1;b.d=1;H(b);case 1:b=new Lc;b.c=1;b.d=1;H(b);case 2:b=new K1;c=a.bF;b.c=1;b.d=1;b.oY=c;H(b);case 3:b=new Kp;c=a.bF;b.c=1;b.d=1;b.qR=c;H(b);default:}}
function ASj(){var b;b=new Cg;b.bo=0;b.bF=0;A5m=b;b=new Cg;b.bo=1;b.bF=0;A5n=b;}
function Ps(){var a=this;C.call(a);a.nR=0;a.nA=0;a.rN=0;}
var Ey=G(0);
function Ch(){var a=this;Fx.call(a);a.b4=0;a.bt=0;}
function TI(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.U.data[a.bl+b|0];c=new Y;d=a.g;e=new P;e.b=D(16);I(e,e.a,B(487));O(e,e.a,b,10);I(e,e.a,B(470));O(e,e.a,d,10);d=e.a;Bd(e,d,d+1|0);f=e.b;f.data[d]=41;g=new N;d=e.a;Q();h=D(d);g.e=h;M(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function LM(a,b,c){var d,e,f,g,h;if(a.bt){d=new DD;d.c=1;d.d=1;H(d);}if(b>=0&&b<a.g){a.U.data[a.bl+b|0]=c;return a;}d=new Y;c=a.g;e=new P;e.b=D(16);I(e,e.a,B(487));O(e,e.a,b,10);I(e,e.a,B(470));O(e,e.a,c,10);c=e.a;Bd(e,c,c+1|0);f=e.b;f.data[c]=41;g=new N;c=e.a;Q();h=D(c);g.e=h;M(f,0,h,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function W0(a){var b,c,d,e,f,g,h,i,j;if(a.bt){b=new DD;b.c=1;b.d=1;H(b);}a:{c=a.g;d=a.h;e=c-d|0;if(d>0){c=a.bl;f=c+d|0;g=0;while(true){if(g>=e)break a;h=a.U.data;i=c+1|0;j=f+1|0;h[c]=h[f];g=g+1|0;c=i;f=j;}}}a.h=e;a.g=a.y;a.v=(-1);return a;}
function MR(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/2|0;e=a.bh;B6();if(e!==A98){e=new Qs;f=a.bl+c|0;c=a.bt;e.v=(-1);e.y=d;e.g=d;e.h=0;e.g=d;e.ix=f;e.gh=a;e.nF=c;return e;}e=new Rg;b=a.bl+c|0;g=a.bt;e.v=(-1);e.y=d;e.g=d;e.h=0;e.g=d;e.ix=b;e.gh=a;e.nF=g;return e;}
function AFl(a,b){var c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.g){c=a.U.data;b=a.bl+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;h=a.bh;B6();if(h!==A98)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}i=new Y;d=a.g-3|0;h=new P;h.b=D(16);I(h,h.a,B(487));O(h,h.a,b,10);I(h,h.a,B(470));O(h,h.a,d,10);d=h.a;Bd(h,d,d+1|0);c=h.b;c.data[d]=41;j=new N;d=h.a;Q();k=D(d);j.e=k;M(c,0,k,0,d);i.c=1;i.d=1;i.f=j;H(i);}
function VK(a,b,c){var d,e,f,g,h;if(a.bt){d=new DD;d.c=1;d.d=1;H(d);}if(b>=0&&(b+3|0)<a.g){d=a.bh;B6();if(d!==A98){e=a.U.data;b=a.bl+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.U.data;b=a.bl+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new Y;c=a.g-3|0;f=new P;f.b=D(16);I(f,f.a,B(487));O(f,f.a,b,10);I(f,f.a,B(470));O(f,f.a,c,10);c=f.a;Bd(f,c,c+1|0);e=f.b;e.data[c]=41;g=new N;c=f.a;Q();h=D(c);g.e=h;M(e,
0,h,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function Gx(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/4|0;e=a.bh;B6();if(e!==A98){e=new Nr;f=a.bl+c|0;c=a.bt;e.v=(-1);e.y=d;e.g=d;e.h=0;e.g=d;e.hA=f;e.ij=a;e.od=c;return e;}e=new R7;b=a.bl+c|0;g=a.bt;e.v=(-1);e.y=d;e.g=d;e.h=0;e.g=d;e.hA=b;e.ij=a;e.od=g;return e;}
function Fr(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/4|0;e=a.bh;B6();if(e!==Bao){e=new Nl;f=a.bl+c|0;c=a.bt;e.v=(-1);e.y=d;e.g=d;e.h=0;e.g=d;e.hp=f;e.gm=a;e.qT=c;return e;}e=new Ol;b=a.bl+c|0;g=a.bt;e.v=(-1);e.y=d;e.g=d;e.h=0;e.g=d;e.hp=b;e.gm=a;e.qT=g;return e;}
function APK(a){return a.U.data;}
function GI(){C.call(this);this.tY=null;}
var A98=null;var Bao=null;var Bap=null;function B6(){B6=V(GI);AX9();}
function CU(){var b,c;B6();if(Bap===null){b=new $rt_globals.ArrayBuffer(2);c=new $rt_globals.Int16Array(b);0;c[0]=1;Bap=(new $rt_globals.Int8Array(b))[0]?Bao:A98;}return Bap;}
function AX9(){var b;b=new GI;B6();b.tY=B(488);A98=b;b=new GI;b.tY=B(489);Bao=b;}
function E5(){var a=this;KD.call(a);a.j3=null;a.i5=null;}
function Uv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=a.j3;e=0;f=0;g=a.i5;a:{while(true){if((e+32|0)>f){h=b.h;i=b.g;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;Nm(b,d,j,f-j|0);e=0;}}j=c.h;m=c.g;if(!(j>=m?0:1)){j=b.h>=b.g?0:1;n=!j&&e>=f?A5m:A5n;break a;}k=g.data;h=m-j|0;m=k.length;if(h<m)m=h;o=new Qz;o.hs=b;o.fa=c;n=a.kN(d,e,f,g,0,m,o);e=o.hZ;l=o.h8;if(n===null){j=b.h>=b.g?0:1;if(!j&&e>=f)n=A5m;else if(!(c.h>=c.g?0:1)&&e>=f)n=A5n;}Tj(c,g,0,l);if
(n!==null)break;}}BS(b,b.h-(f-e|0)|0);return n;}
var NW=G(E5);
function ALt(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;n=h.fa;if((n.g-n.h|0)<2?0:1)break a;i=A5n;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{o=l&64512;m=Bo(o,55296);c=m?0:1;if(!(!c&&!(o!=56320?0:1)?0:1)){if((f+3|0)>g){j=j+(-1)|0;n=h.fa;if((n.g-n.h|0)<3?0:1)break a;i=A5n;break a;}k=e.data;c=f+1|0;k[f]=(224|l>>12)<<24>>24;f
=c+1|0;k[c]=(128|l>>6&63)<<24>>24;m=f+1|0;k[f]=(128|l&63)<<24>>24;}else{if(!(m?0:1)){i=new Cg;i.bo=2;i.bF=1;break a;}if(j>=d){n=h.hs;if(n.h>=n.g?0:1)break a;i=A5m;break a;}p=j+1|0;m=k[j];if(!((m&64512)!=56320?0:1)){j=p+(-2)|0;i=new Cg;i.bo=2;i.bF=1;break a;}if((f+4|0)>g){j=p+(-2)|0;n=h.fa;if((n.g-n.h|0)<4?0:1)break a;i=A5n;break a;}k=e.data;o=((l&1023)<<10|m&1023)+65536|0;m=f+1|0;k[f]=(240|o>>18)<<24>>24;c=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=c+1|0;k[c]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j
=p;}}c=j;f=m;}j=c;}h.hZ=j;h.h8=f;return i;}
var EN=G(CI);
var Jt=G();
var Baq=0;var Bar=null;var Bas=null;function ADF(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rN=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nR=0;c.nA=0;return;}if(f)d=e|8388608;else{d=e<<1;while(BU(CN(S(d),S(8388608)),BI)){d=d<<1;f=f+(-1)|0;}}g=Bas;h=AVi(g,0,g.data.length,f);if(h<0)h= -h|0;g=Bas.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=Bar.data[e];j=CN(S(d),F(4294967295, 0));k=R(Bi(Bf(j,CN(S(e),F(4294967295, 0))),32-i|0));if(k<Baq){while
($rt_ucmp(k,Baq)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=Bas.data;e=h+1|0;i=9+(f-g[e]|0)|0;k=R(Bi(Bf(j,CN(S(Bar.data[e]),F(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=Bar.data;f=h+1|0;e=g[f];m=i-1|0;n=Bf(CN(S(l),F(4294967295, 0)),CN(S(e),F(4294967295, 0)));e=32-m|0;o=R(Bi(n,e));p=R(Bi(Bf(CN(S(d-1|0),F(4294967295, 0)),CN(S(g[f]),F(4294967295, 0))),e));q=1;while(true){r=q*10|0;if($rt_ucmp($rt_udiv(k,r),$rt_udiv(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if($rt_ucmp($rt_udiv(k,l),$rt_udiv(o,l))>=0)break;m=l;}s=$rt_ucmp(q,
m);d=s>0?Db($rt_udiv(k,q),q):s<0?Db($rt_udiv(k,m),m)+m|0:Db($rt_udiv((k+(m/2|0)|0),m),m);if(D_(S(d),S(1000000000))>=0)while(true){h=h+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.nR=d;c.nA=h-50|0;}
function ABH(){Baq=$rt_udiv((-1),10);Bar=GA([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Bas=GA([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Ml(){var a=this;Id.call(a);a.rX=null;a.mk=null;a.q$=null;}
function AB_(a){var b,c,d,e;Lp();b=A_n;if(b!==b)$rt_globals.imgui.ImGui.prototype.CreateContext();else $rt_globals.imgui.ImGui.prototype.CreateContext();c=S(ED());if(BU(c,BI))b=null;else{if(Bat===null)Bat=new Dl;b=Bat;if(!b.bP)b.x=c;}A3c();d=Bau;Wi(R(b.x),d);b=new Tw;e=new Mr;e.bj=1;e.r=Bj(C,4);b.bk=e;e=new Do;e.dy=1;e.bH=Bc(16);b.i$=e;b.ht=new RX;a.q$=b;a.rX=A3o();b=a.mk;e=a.q$;if(e!==null){Cf(b.bk,e);A$6.da=a.mk;return;}e=new CK;e.c=1;e.d=1;e.f=B(490);H(e);}
function AXi(a,b){var c,d,e,f,g,h,i;c=A97;b=c.g6;d=c.cv.width;e=A97.cv.height;f=A97.cv.width;g=A97.cv.height;AHp(b,d,e,f,g);ADr(a);$rt_globals.imgui.ImGui.prototype.Render();h=S(AWO());if(BU(h,BI))c=null;else{if(Bav===null){c=new NQ;i=new S3;i.DJ=0;i.yj=new Tz;c.vw=i;Bav=c;}c=Bav;if(!c.bP)c.x=h;}AA2(a.rX,c,0);}
function JI(){var a=this;Ml.call(a);a.pC=null;a.rA=null;a.fI=null;a.gx=null;a.oZ=null;a.k_=0;a.gt=0;a.fX=0.0;a.w5=BI;a.lX=BI;a.v0=BI;a.fC=null;a.qg=0;a.q4=0;a.nJ=0;a.pa=0;a.wc=null;a.Ce=null;a.uO=null;a.t_=null;a.hP=null;a.he=null;a.hg=null;a.uv=0;a.vv=null;a.pG=null;a.qw=null;a.AN=null;a.nW=null;a.nY=null;a.dr=null;a.wu=null;a.F6=null;a.jS=null;a.ov=null;a.b1=null;a.fO=null;a.qH=null;a.gO=0;a.hN=0;a.ol=null;}
var A5o=0;var A5p=0;var A5q=0.0;function AZM(){var a=new JI();ADi(a);return a;}
function ADi(a){var b,c,d,e,f,g,h,i,j,k,l;b=new I$;c=new Mr;c.bj=1;c.r=Bj(C,4);b.bk=c;a.mk=b;b=new Ks;c=A9p;d=new Hx;e=c.h1;JJ();Jx(d,e,B(491),Baw);e=A9p;f=XP(e.h1,B(492),Baw);c=A1t(d,0);d=new DY;e=new Hu;g=null;h=AC1(f,Pn(f),g,0);f=A9r;g=f.l.createTexture();i=f.ek;f.ek=i+1|0;B$(f.eR,i,Cb(g));NN();f=A9s;e.io=f;e.h_=f;Qe();f=A9t;e.ib=f;e.hE=f;e.kB=1.0;e.eh=3553;e.iu=i;Lb(e,h);f=A9u;g=Ww(A9v,f);g=g===null?null:g.dZ;if(g===null)g=A1J(1,16);Cf(g,e);Gt(A9v,f,g);d.dv=e;f=e.em;JS(d,0,0,f.eo,f.ei);j=Bj(DY,1);k=j.data;k[0]
=d;f=new BP;i=k.length;e=j.constructor;if(e===null)d=null;else{d=e.classObject;if(d===null)d=A3j(e);}d=AMz(d.G.$meta.item);f.bj=1;d=ANp(d,i);f.r=d;f.m=i;Hh(j,0,d,0,i);AB4(b,c,f,1);b.qG=1;a.gx=b;a.oZ=A1u();a.fC=A2p(45.0,Tr(A97),Qa(A97));l=AF9();a.qg=l;a.q4=l>>24;a.nJ=l>>16&255;a.pa=l>>8&255;a.wc=A0y();b=A29();a.Ce=b;a.uO=UU(a.qg,a.wc,b);b=A3t();a.t_=b;a.hP=A3E(b);b=ABz(a.qg,a.uO,a.t_);a.he=b;a.hg=RQ(b,a.hP);a.uv=0;a.pG=Zb(a.he,0.5,0.5,0.5);b=new D6;AYS();OV(b,Bax<<24>>24);a.qw=b;a.dr=A03();b=new MA;A27();YS(b,
Bay);a.jS=b;a.fO=AZ$();b=new Tf;l=A5o;UC(b,Db(l,l)+1|0,A23(a.fC));a.qH=b;a.gO=1;a.hN=1;}
function AUd(a){var b,c,d,e,f,g,h,i,j,k,l;AB_(a);if(A_a===null){b=new Ct;b.cf=A5j;c=new P;c.b=D(16);b.bc=c;b.b$=D(32);b.ck=0;Cr();b.cg=A$H;A_a=b;}d=A_a;e=a.q4;f=a.nJ;g=a.pa;c=new P;c.b=D(16);I(c,c.a,B(493));O(c,c.a,e,10);h=c.a;Bd(c,h,h+1|0);c.b.data[h]=46;O(c,c.a,f,10);f=c.a;Bd(c,f,f+1|0);c.b.data[f]=46;O(c,c.a,g,10);b=new N;i=c.b;f=c.a;Q();j=D(f);b.e=j;M(i,0,j,0,f);c=d.bc;I(c,c.a,b);f=c.a;Bd(c,f,f+1|0);c.b.data[f]=10;Co(d);c=new K7;Ys();NJ(c,1000,null);a.fI=c;c=a.gx;Et();b=A9Y;c=c.fo.mQ;c.cd=b.cd;c.cc=b.cc;c.cb
=b.cb;c.ca=b.ca;a.fX=0.0;a.gt=0;c=new Ff;k=S(ABM(0.0,(-1.5),0.0));c.cj=1;c.u=k;a.b1=c;l=S(ABg(a.uv));if(BU(l,BI))c=null;else{if(Baz===null)Baz=new Fy;c=Baz;if(!c.cj)c.u=l;}a.vv=c;c=a.hP;b=a.b1;e=R(c.u);f=b===null?0:R(b.u);Y7(e,f);c=a.hP;b=a.vv;e=R(c.u);f=b===null?0:R(b.u);XD(e,f);c=a.hP;b=XG();e=R(c.u);f=b===null?0:R(b.u);AAp(e,f);a.hg=RQ(a.he,a.hP);Yf(a.b1,100.0);To(a.b1,(-1.0));Nv(a.b1,100.0);AF$(a.jS,a.b1);a.ov=A0l(1,1,0,0);c=AYH(200.0,1.0,200.0);a.AN=c;a.nW=R1(a.he,c,a.pG,1,a.qw);a.nY=Za(a.he,a.jS);W9(a.nW,
a.ov);AFX(a.nY,a.nW);AAD(a.hg,a.nY);ACK(a);c=AY$(a.fC);a.ol=c;c.gl=20.0;Z2(c,0.10000000149011612);AAf(a.mk,a.ol);}
function ADr(a){A9r.ng(1.0,1.0,1.0,1.0);A9r.qE(16640);ADe(a.ol,A97.g6);if(!(!a.gO&&!a.hN))AFI(a);Yl(a,!a.gO&&!a.hN?0:1);Xf(a);a.hN=0;AFh(a);}
function AFh(a){var b,c,d,e;AWG("Debug")?1:0;AQF();b=BaA;c=a.gO;ANG(R(b.x),0,!!c);d=A$6.lg.data;if(d[62])a.gO=a.gO?0:1;if(d[54])a.hN=1;e=BaA;c=e===null?0:R(S(AXS(R(e.x))));if(AR1("AutoPlay (Space key)",c)?1:0)a.gO=AH3(R(BaA.x),0)?1:0;ASH();e=BaB;c=A5o;AWx(R(e.x),0,c);c=R(S(AI0(R(e.x))));if(AM8("Wall width",c)?1:0){c=Kh(R(BaB.x),0);A5o=c;A5p=c;A5q=Db(c,c);}if(ZU("Reset")?1:0){a.gt=2;a.fX=5.0;}if(ZU("Step (Z key)")?1:0)a.hN=1;$rt_globals.imgui.ImGui.prototype.End();}
function AFI(a){var b,c,d,e,f,g;a:{b:{c:{d:{b=a.fX+A97.g6;a.fX=b;switch(a.gt){case 0:break;case 1:break d;case 2:break b;case 3:break c;case 4:break a;default:break a;}if(b<=1.5)break a;a.gt=1;a.fX=0.0;break a;}if(b<=1.5)break a;a.gt=2;a.fX=0.0;Qp(a);break a;}if(b<=2.5)break a;a.gt=4;a.fX=0.0;Qp(a);break a;}if(b>4.0){a.gt=3;a.fX=0.0;Vn(a);O2(a,a.pC);c=a.fC;d=c.bn;e=A5p/2.0;b=100.0-A5o*1.75;d.k=100.0;d.j=e;d.i=b;Oa(c,100.0,e,100.0);c=a.fC;d=c.du;Cu();f=A9b;b=f.k;g=f.j;e=f.i;d.k=b;d.j=g;d.i=e;Hw(c,1);}}}
function Yl(a,b){var c,d,e,f,g,h,i,j,k,l;a.lX=A4F($rt_globals.performance.now()*1000000.0);if(b){c=a.hg;d=A97.g6;XQ(R(c.u),d)?1:0;AAq(R(a.hg.u),!!1)?1:0;}e=0;while(e<Mm(a.fO)){c=a.oZ;f=a.dr;if(e>=f.m){g=new Y;c=new P;c.b=D(16);I(c,c.a,B(36));O(c,c.a,e,10);I(c,c.a,B(37));b=f.m;O(c,c.a,b,10);f=new N;h=c.b;e=c.a;Q();i=D(e);f.e=i;M(h,0,i,0,e);g.c=1;g.d=1;g.f=f;H(g);}j=ADH(R((Ju(F1(f.r.data[e]))).u));f=a.dr;if(e>=f.m){g=new Y;c=new P;c.b=D(16);I(c,c.a,B(36));O(c,c.a,e,10);I(c,c.a,B(37));b=f.m;O(c,c.a,b,10);f=new N;h
=c.b;e=c.a;Q();i=D(e);f.e=i;M(h,0,i,0,e);g.c=1;g.d=1;g.f=f;H(g);}k=AGC(R((Ju(F1(f.r.data[e]))).u));f=a.dr;if(e>=f.m){g=new Y;c=new P;c.b=D(16);I(c,c.a,B(36));O(c,c.a,e,10);I(c,c.a,B(37));b=f.m;O(c,c.a,b,10);ACn(g,AIr(c.b,0,c.a));H(g);}Vm(c,j,k,ABJ(Ju(F1(f.r.data[e]))),WE(Ju(F1(FF(a.dr,e)))));Wb(Ib(a.fO,e),a.oZ);AFK(Ib(a.fO,e),W3(Kd(F1(FF(a.dr,e)))),ACm(Kd(F1(FF(a.dr,e)))),AE0(Kd(F1(FF(a.dr,e)))));AGs(a.qH,Ib(a.fO,e));e=e+1|0;}l=a.lX;a.w5=RC(A4F($rt_globals.performance.now()*1000000.0),l);}
function Xf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a.lX=A4F($rt_globals.performance.now()*1000000.0);Hw(a.fC,1);b=a.qH;Wy(b);c=b.j2;while(true){d=c.eH;if(d===null)break;e=c.kC;f=e.b3;if(f.m<e.dL){Cf(f,d);g=e.gc;h=e.b3.m;if(g>h)h=g;e.gc=h;if(Dk(d,CQ))d.dY();}else if(Dk(d,CQ))d.dY();c.eH=c.eH.eS;}c.gj=0;Lf(b.m3,b.k2);b=b.k2;i=b.r;g=0;h=b.m;c=null;if(g>h){b=new Bh;b.c=1;b.d=1;CE(b);H(b);}while(g<h){j=i.data;k=g+1|0;j[g]=c;g=k;}b.m=0;l=a.lX;a.v0=RC(A4F($rt_globals.performance.now()*1000000.0),l);AB8(a.fI);c=a.gx;d
=a.fI;k=A97.q6|0;b=new P;b.b=D(16);I(b,b.a,B(494));O(b,b.a,k,10);e=new N;i=b.b;h=b.a;Q();j=D(h);e.e=j;M(i,0,j,0,h);Sm(c.fo);b=c.fo;m=e.e.data.length;f=null;LY();n=A64;o=CA(n,L(C7));n=o<0?null:n.cs.data[o];if(n===null){n=A3$(L(C7),4,100);BH(A64,L(C7),n);}p=TR(n);Cf(b.j5,p);G3(p,b.fN,e,0,m,b.mQ,0.0,8,0,f);U4(b,p,10.0,20.0);NZ(c.fo,d);b=a.gx;e=a.fI;g=a.q4;h=a.nJ;k=a.pa;c=Eq();Ei(Fh(Ei(Fh(Ei(CS(c,B(495)),g),46),h),46),k);IC(b,e,Cy(c),10.0,40.0);b=a.gx;c=a.fI;g=A5o;h=A5p;k=Mm(a.fO);d=Eq();Ei(CS(Ei(Fh(Ei(CS(d,B(496)),
g),120),h),B(497)),k);IC(b,c,Cy(d),10.0,60.0);b=a.gx;c=a.fI;l=Ul(a.w5);d=Eq();CS(Rs(CS(d,B(498)),l),B(499));IC(b,c,Cy(d),10.0,80.0);b=a.gx;c=a.fI;l=Ul(a.v0);d=Eq();CS(Rs(CS(d,B(500)),l),B(499));IC(b,c,Cy(d),10.0,100.0);YE(a.fI);}
function O2(a,b){var c,d,e;a.k_=0;AC0(a,b);c=0.5;while(c<A5p){d=( -A5o|0)/2.0;while(d<A5o/2.0){b=new Bm;e=100.5+d;Cu();b.k=e;b.j=c;b.i=100.0;ACg(a,b);a.k_=a.k_+1|0;d=d+1.0;}c=c+1.0;}}
function AC0(a,b){var c,d,e,f,g,h,i,j,k;c=ABD(b,b.hY/A5o|0,b.i2/A5p|0);d=A5o;e=A5p;f=Bj(DY,Db(d,e));g=f.data;a.rA=f;h=0;i=0;while(i<d){j=0;while(j<e){f=c.data;k=h+1|0;g[h]=f[i].data[j];j=j+1|0;h=k;}i=i+1|0;}}
function ACg(a,b){var c,d,e,f,g,h,i,j,k;c=a.rA.data;d=a.k_;e=c[d];f=e.h7;e.h7=e.mS;e.mS=f;e=c[d];AVa();g=A1L();g.eK.il=e;U7(g);e=g.eK;e.iK=(-1);e.kf=(-1);e=g.p2;e.dF=1.0;e.dE=1.0;ACy(g,1.0,1.0,1.0,1.0);e=g.bv;f=b.k;h=b.j;i=b.i;e.k=f;e.j=h;e.i=i;g.hd=0;e=a.fO;Gy(e,e.bi+1|0);c=e.bY.data;j=e.bi;e.bi=j+1|0;c[j]=g;e.cI=e.cI+1|0;e=a.b1;f=b.k;Gp(R(e.u),f);e=a.b1;f=b.j;HL(R(e.u),f);e=a.b1;f=b.i;H4(R(e.u),f);b=a.jS;e=a.b1;d=R(b.u);j=e===null?0:R(e.u);Vw(d,j);b=new Fs;k=S(NP(0.5,0.5,0.5));b.cj=1;b.u=k;a.F6=b;b=R1(a.he,
b,a.pG,1,a.qw);a.wu=b;e=a.ov;d=R(b.u);j=e===null?0:R(e.u);TF(d,j);e=Yv(a.he,a.jS);b=a.wu;d=R(e.u);j=b===null?0:R(b.u);AEp(d,j)?1:0;ANR(R(e.u),1.0);Cf(a.dr,e);d=R(a.hg.u);j=R(e.u);PI(d,j)?1:0;AJQ(R(e.u));}
function AMj(a,b,c){}
function AHJ(a){}
function AOP(a){}
function ANA(a){}
function Qp(a){var b,c,d,e,f,g,h,i,j,k;b=A5o/2|0;c=a.b1;d= -A5q;Gp(R(c.u),d);c=a.b1;d=A5q*2.0;HL(R(c.u),d);H4(R(a.b1.u),10.0);c=a.dr;if(b>=c.m){e=new Y;f=new P;f.b=D(16);I(f,f.a,B(36));O(f,f.a,b,10);I(f,f.a,B(37));b=c.m;O(f,f.a,b,10);c=new N;g=f.b;h=f.a;Q();i=D(h);c.e=i;M(g,0,i,0,h);e.c=1;e.d=1;e.f=c;H(e);}c=c.r.data[b];f=a.b1;h=R(c.u);j=f===null?0:R(f.u);Mw(h,j);c=a.b1;d=A5q;Gp(R(c.u),d);c=a.b1;d=A5q*2.0;HL(R(c.u),d);H4(R(a.b1.u),10.0);c=a.dr;h=b+1|0;if(h>=c.m){e=new Y;f=new P;f.b=D(16);I(f,f.a,B(36));O(f,
f.a,h,10);I(f,f.a,B(37));b=c.m;O(f,f.a,b,10);c=new N;g=f.b;h=f.a;Q();i=D(h);c.e=i;M(g,0,i,0,h);e.c=1;e.d=1;e.f=c;H(e);}c=c.r.data[h];f=a.b1;j=R(c.u);k=f===null?0:R(f.u);Mw(j,k);c=a.b1;d= -A5q;Gp(R(c.u),d);c=a.b1;d= -A5q*2.0;HL(R(c.u),d);H4(R(a.b1.u),10.0);c=FF(a.dr,b+A5o|0);f=a.b1;b=R(c.u);j=f===null?0:R(f.u);Mw(b,j);c=a.b1;d=A5q;Gp(R(c.u),d);To(a.b1,A5q*2.0);Nv(a.b1,10.0);ABS(FF(a.dr,h+A5o|0),a.b1);}
function Vn(a){var b,c,d,e,f,g,h,i;b=0;while(true){c=a.dr;d=c.m;e=Bo(b,d);if(e>=0){f=c.r;b=0;g=null;if(b>d){c=new Bh;c.c=1;c.d=1;H(c);}while(b<d){h=f.data;e=b+1|0;h[b]=g;b=e;}c.m=0;c=a.fO;f=c.bY;b=0;d=c.bi;g=null;if(b>d){c=new Bh;c.c=1;c.d=1;H(c);}while(b<d){h=f.data;e=b+1|0;h[b]=g;b=e;}c.bi=0;c.cI=c.cI+1|0;return;}g=a.hg;if(e>=0){i=new Y;g=new P;g.b=D(16);I(g,g.a,B(36));O(g,g.a,b,10);I(g,g.a,B(37));b=c.m;O(g,g.a,b,10);c=new N;f=g.b;d=g.a;Q();h=D(d);c.e=h;M(f,0,h,0,d);i.c=1;i.d=1;i.f=c;H(i);}c=c.r.data[b];d
=R(g.u);e=c===null?0:R(c.u);ADf(d,e);c=a.dr;if(b>=c.m)break;ALh(R(c.r.data[b].u));b=b+1|0;}i=new Y;g=new P;g.b=D(16);I(g,g.a,B(36));O(g,g.a,b,10);I(g,g.a,B(37));b=c.m;O(g,g.a,b,10);c=new N;f=g.b;d=g.a;Q();h=D(d);c.e=h;M(f,0,h,0,d);i.c=1;i.d=1;i.f=c;H(i);}
function ACK(a){var b,c,d,e,f,g,h,i,j,k,l;b=new DY;c=new Hu;d=A9p;e=new Hx;f=d.h1;JJ();Jx(e,f,B(501),A9q);g=null;f=AC1(e,Pn(e),g,0);g=A9r;d=g.l.createTexture();h=g.ek;g.ek=h+1|0;B$(g.eR,h,Cb(d));NN();d=A9s;c.io=d;c.h_=d;Qe();d=A9t;c.ib=d;c.hE=d;c.kB=1.0;c.eh=3553;c.iu=h;Lb(c,f);e=A9u;d=A9v;if(e===null){f=d.cx.data[0];while(f!==null&&f.cQ!==null){f=f.c2;}}else{h=Qi(e);i=d.cx.data;f=i[h&(i.length-1|0)];while(f!==null&&!(f.eI==h&&AAm(e,f.cQ))){f=f.c2;}}d=f===null?null:f.dZ;if(d===null){d=new BP;d.bj=1;d.r=Bj(C,
16);}Cf(d,c);Gt(A9v,e,d);b.dv=c;c=c.em;JS(b,0,0,c.eo,c.ei);a.pC=b;b=a.fC;b.oN=1.0;b.qn=300.0;c=b.bn;j=100-A5o|0;k=A5p/2.0;c.k=j;c.j=k;c.i=j;Oa(b,100.0,k,100.0);b=a.fC;c=b.du;Cu();d=A9b;j=d.k;k=d.j;l=d.i;c.k=j;c.j=k;c.i=l;Hw(b,1);O2(a,a.pC);}
function AWt(){A5o=50;A5p=50;A5q=2500.0;}
function O0(){C.call(this);this.rF=null;}
var Yo=G();
var Vv=G();
function Pp(){var a=this;C.call(a);a.iA=null;a.f1=null;}
function AFC(a,b){var c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(AS4()){var $T=SU();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.iA.readyState==4){if(a.iA.status==200){b=a.f1;if(b.eJ.dI){if(A_a===null){c=new Ct;c.cf=A5j;d=new P;d.b=D(16);c.bc=d;c.b$=D(32);c.ck=0;Cr();c.cg=A$H;A_a=c;}e=A_a;b=b.ev;d=new P;d.b=D(16);I(d,d.a,B(502));f=d.a;if(b===null)b=B(2);I(d,f,b);b=new N;g=d.b;h=d.a;Q();i=D(h);b.e
=i;M(g,0,i,0,h);d=e.bc;I(d,d.a,b);h=d.a;Bd(d,h,h+1|0);d.b.data[h]=10;Co(e);}b=a.f1;b.e$.jR(b.ev,$rt_str(a.iA.responseText));}else if(a.iA.status!=404&&a.iA.status!=403){try{j=S(100);$p=1;continue _;}catch($$e){$$je=Br($$e);if($$je instanceof Dg){}else{throw $$e;}}b=a.f1;d=b.eJ;f=b.gT;c=b.ev;b=b.e$;if(d.dI){if(A_a===null){k=new Ct;k.cf=A5j;e=new P;e.b=D(16);k.bc=e;k.b$=D(32);k.ck=0;Cr();k.cg=A$H;A_a=k;}l=A_a;e=new P;e.b=D(16);I(e,e.a,B(113));I(e,e.a,c===null?B(2):c);k=new N;g=e.b;m=e.a;Q();i=D(m);k.e=i;M(g,0,
i,0,m);e=l.bc;I(e,e.a,k);m=e.a;Bd(e,m,m+1|0);e.b.data[m]=10;Co(l);}d.bx=d.bx+1|0;e=new GY;e.eJ=d;e.gT=f;e.ev=c;e.e$=b;b=null;d=null;e.d7=new C;e.d3=1;e.eU=d;e.fn=b;h=A_l;A_l=h+1|0;e.fl=S(h);b=new Fb;b.eW=e;FR(b);}else{b=a.f1;b.e$.iV(b.ev);}b=a.f1.eJ;b.bx=b.bx-1|0;}return;case 1:a:{try{ABr(j);if(GG()){break _;}break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dg){}else{throw $$e;}}}b=a.f1;d=b.eJ;f=b.gT;c=b.ev;b=b.e$;if(d.dI){if(A_a===null){k=new Ct;k.cf=A5j;e=new P;e.b=D(16);k.bc=e;k.b$=D(32);k.ck=0;Cr();k.cg
=A$H;A_a=k;}l=A_a;e=new P;e.b=D(16);I(e,e.a,B(113));I(e,e.a,c===null?B(2):c);k=new N;g=e.b;m=e.a;Q();i=D(m);k.e=i;M(g,0,i,0,m);e=l.bc;I(e,e.a,k);m=e.a;Bd(e,m,m+1|0);e.b.data[m]=10;Co(l);}d.bx=d.bx+1|0;e=new GY;e.eJ=d;e.gT=f;e.ev=c;e.e$=b;b=null;d=null;e.d7=new C;e.d3=1;e.eU=d;e.fn=b;h=A_l;A_l=h+1|0;e.fl=S(h);b=new Fb;b.eW=e;FR(b);b=a.f1.eJ;b.bx=b.bx-1|0;return;default:AQa();}}SU().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ACf(a,b){var $p,$z;$p=0;if(AS4()){var $T=SU();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFC(a,b);if(GG()){break _;}return;default:AQa();}}SU().s(a,b,$p);}
var XX=G(0);
function MJ(){var a=this;C.call(a);a.bn=null;a.dQ=null;a.du=null;a.pM=null;a.oB=null;a.jt=null;a.mg=null;a.oN=0.0;a.qn=0.0;a.nK=0.0;a.p_=0.0;a.tP=null;a.jV=null;a.zk=null;}
function X5(a){var b,c,d;b=new Bm;Cu();a.bn=b;b=new Bm;b.k=0.0;b.j=0.0;b.i=(-1.0);a.dQ=b;b=new Bm;b.k=0.0;b.j=1.0;b.i=0.0;a.du=b;a.pM=ET();a.oB=ET();a.jt=ET();a.mg=ET();a.oN=1.0;a.qn=100.0;a.nK=0.0;a.p_=0.0;a.tP=A3h();a.jV=new Bm;b=new L$;A2X();c=new Bm;b.Do=c;d=new Bm;b.FX=d;c.k=0.0;c.j=0.0;c.i=0.0;d.k=0.0;d.j=0.0;d.i=0.0;a.zk=b;}
function Oa(a,b,c,d){var e,f,g,h,i;e=a.jV;e.k=b;e.j=c;e.i=d;f=a.bn;g=f.k;h=f.j;i=f.i;b=b-g;c=c-h;d=d-i;e.k=b;e.j=c;e.i=d;c=b*b+c*c+d*d;if(c!==0.0&&c!==1.0){b=1.0/BO(c);c=e.k*b;d=e.j*b;b=e.i*b;e.k=c;e.j=d;e.i=b;}e=a.jV;c=e.k;if(!(c===0.0&&e.j===0.0&&e.i===0.0?1:0)){f=a.du;g=c*f.k+e.j*f.j+e.i*f.i;if(Fk(g-1.0)<9.999999717180685E-10){e=a.du;f=a.dQ;c=f.k;d=f.j;g=f.i;e.k=c;e.j=d;e.i=g;c=c*(-1.0);d=d*(-1.0);b=g*(-1.0);e.k=c;e.j=d;e.i=b;}else if(Fk(g+1.0)<9.999999717180685E-10){e=a.du;f=a.dQ;b=f.k;c=f.j;d=f.i;e.k=b;e.j
=c;e.i=d;}e=a.dQ;f=a.jV;b=f.k;c=f.j;d=f.i;e.k=b;e.j=c;e.i=d;f.k=b;f.j=c;f.i=d;F0(f,a.du);e=a.du;f=a.jV;b=f.k;c=f.j;d=f.i;e.k=b;e.j=c;e.i=d;e=F0(e,a.dQ);b=e.k;b=b*b;c=e.j;b=b+c*c;c=e.i;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/BO(c);c=e.k*b;d=e.j*b;b=e.i*b;e.k=c;e.j=d;e.i=b;}}}
function T0(){var a=this;MJ.call(a);a.o5=0.0;a.um=null;}
function A2p(a,b,c){var d=new T0();AJy(d,a,b,c);return d;}
function AJy(a,b,c,d){var e;X5(a);a.o5=67.0;e=new Bm;Cu();a.um=e;a.o5=b;a.nK=c;a.p_=d;Hw(a,1);}
function Hw(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.nK/a.p_;Uw(a.pM,Fk(a.oN),Fk(a.qn),a.o5,c);d=a.oB;e=a.bn;f=a.um;g=e.k;h=e.j;i=e.i;f.k=g;f.j=h;f.i=i;j=a.dQ;c=j.k;k=j.j;l=j.i;g=g+c;h=h+k;i=i+l;f.k=g;f.j=h;f.i=i;f=a.du;j=A82;j.k=g;j.j=h;j.i=i;c=e.k;k=e.j;l=e.i;c=g-c;k=h-k;l=i-l;j.k=c;j.j=k;j.i=l;Vr(d,j,f);f=A83;c= -e.k;k= -e.j;l= -e.i;Gj(f);m=f.ct.data;m[12]=c;m[13]=k;m[14]=l;OT(d,f);Iv(a.jt,a.pM.ct);TX(a.jt.ct,a.oB.ct);if(b){Iv(a.mg,a.jt.ct);Vx(a.mg.ct);AD2(a.tP,a.mg);}}
function BR(){var a=this;C.call(a);a.u=BI;a.cj=0;}
var A5r=0;var A5s=0;function AKx(a,b){return b instanceof BR&&BU(b.u,a.u)?1:0;}
function AXO(a){return R(a.u);}
function AN4(a){return a.u;}
function AKR(a){var b,c,d,e,f,g,h,i,j;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new B9;c.G=b;d=c;b.classObject=d;}}c=LJ(c);e=a.u;f=a.cj;b=new P;b.b=D(16);g=b.a;if(c===null)c=B(2);I(b,g,c);h=b.a;Bd(b,h,h+1|0);b.b.data[h]=40;KF(b,b.a,e,10);h=b.a;Bd(b,h,h+1|0);b.b.data[h]=44;I(b,b.a,!f?B(503):B(504));g=b.a;Bd(b,g,g+1|0);i=b.b;i.data[g]=41;c=new N;g=b.a;Q();j=D(g);c.e=j;M(i,0,j,0,g);return c;}
function AP_(){A5r=0;A5s=1;}
var De=G(BR);
var A5t=null;var A5u=null;var A5v=null;var BaC=null;var BaD=null;var BaE=null;var Baz=null;function XG(){var b,c;b=S(AGx());if(BU(b,BI))return null;if(BaC===null)BaC=new Fp;c=BaC;if(!c.cj)c.u=b;return c;}
function UU(b,c,d){var e,f,g;e=c===null?0:R(c.u);f=d===null?0:R(d.u);g=S(AFM(b,e,f));if(BU(g,BI))return null;if(BaD===null)BaD=new D5;c=BaD;if(!c.cj)c.u=g;return c;}
function ABz(b,c,d){var e,f,g;e=c===null?0:R(c.u);f=d===null?0:R(d.u);g=S(V7(b,e,f));if(BU(g,BI))return null;if(BaE===null)BaE=new R$;c=BaE;if(!c.cj)c.u=g;return c;}
function AF9(){return $rt_globals.physx.PxTopLevelFunctions.prototype.get_PHYSICS_VERSION();}
function ATJ(){A5t=new De;A5u=new De;A5v=new De;}
function AGx(){var returnedJSObj=$rt_globals.physx.PxTopLevelFunctions.prototype.DefaultFilterShader();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AFM(b,c,d){var returnedJSObj=$rt_globals.physx.PxTopLevelFunctions.prototype.CreateFoundation(b,c,d);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function V7(b,c,d){var returnedJSObj=$rt_globals.physx.PxTopLevelFunctions.prototype.CreatePhysics(b,c,d);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function ABg(b){var returnedJSObj=$rt_globals.physx.PxTopLevelFunctions.prototype.DefaultCpuDispatcherCreate(b);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
var Eo=G(BR);
var A5w=null;var A5x=null;var A5y=null;function A0y(){var a=new Eo();ZR(a);return a;}
function ZR(a){var b;b=S(UO());a.cj=1;a.u=b;}
function AKg(){A5w=new Eo;A5x=new Eo;A5y=new Eo;}
function UO(){var jsObj=new $rt_globals.physx.PxDefaultAllocator();return $rt_globals.physx.getPointer(jsObj);}
var DM=G(BR);
var A5z=null;var A5A=null;var A5B=null;function AJs(){A5z=new DM;A5A=new DM;A5B=new DM;}
var Eg=G(DM);
var A5C=null;var A5D=null;var A5E=null;function A29(){var a=new Eg();Zz(a);return a;}
function Zz(a){var b;b=S(AFF());a.cj=1;a.u=b;}
function AKW(){A5C=new Eg;A5D=new Eg;A5E=new Eg;}
function AFF(){var jsObj=new $rt_globals.physx.PxDefaultErrorCallback();return $rt_globals.physx.getPointer(jsObj);}
var EC=G(BR);
var A5F=null;var A5G=null;var A5H=null;function A3t(){var a=new EC();AAX(a);return a;}
function AAX(a){var b;b=S(Xw());a.cj=1;a.u=b;}
function AO4(){A5F=new EC;A5G=new EC;A5H=new EC;}
function Xw(){var jsObj=new $rt_globals.physx.PxTolerancesScale();return $rt_globals.physx.getPointer(jsObj);}
var Ef=G(BR);
var A5I=null;var A5J=null;var A5K=null;function A3E(a){var b=new Ef();W_(b,a);return b;}
function W_(a,b){var c;c=S(ZJ(b===null?0:R(b.u)));a.cj=1;a.u=c;}
function AKC(){A5I=new Ef;A5J=new Ef;A5K=new Ef;}
function ZJ(b){var jsObj=new $rt_globals.physx.PxSceneDesc(b);return $rt_globals.physx.getPointer(jsObj);}
function Y7(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxSceneDesc);jsObj.set_gravity(c);}
function AAp(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxSceneDesc);jsObj.set_filterShader(c);}
function XD(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxSceneDesc);jsObj.set_cpuDispatcher(c);}
var D6=G(BR);
var A5L=null;var A5M=null;var A5N=null;function BaF(a){var b=new D6();OV(b,a);return b;}
function OV(a,b){var c;c=S(AEq(b));a.cj=1;a.u=c;}
function AWF(){A5L=new D6;A5M=new D6;A5N=new D6;}
function AEq(b){var jsObj=new $rt_globals.physx.PxShapeFlags(b);return $rt_globals.physx.getPointer(jsObj);}
var KG=G(0);
var HU=G();
var Bax=0;var BaG=0;var BaH=0;var BaI=0;function AYS(){AYS=V(HU);APH();}
function APH(){Bax=$rt_globals.physx.eSIMULATION_SHAPE;BaG=$rt_globals.physx.eSCENE_QUERY_SHAPE;BaH=$rt_globals.physx.eTRIGGER_SHAPE;BaI=$rt_globals.physx.eVISUALIZATION;}
function MA(){var a=this;BR.call(a);a.qs=null;a.p$=null;}
function BaJ(a){var b=new MA();YS(b,a);return b;}
function YS(a,b){var c;c=S(AOM(b));a.cj=1;a.u=c;}
function Ju(a){var b,c;b=S(AJO(R(a.u)));if(BU(b,BI))return null;if(a.qs===null)a.qs=new Fi;c=a.qs;if(!c.cj)c.u=b;return c;}
function Kd(a){var b,c;b=S(AXl(R(a.u)));if(BU(b,BI))return null;if(a.p$===null)a.p$=new Ff;c=a.p$;if(!c.cj)c.u=b;return c;}
function AF$(a,b){var c,d;c=R(a.u);d=b===null?0:R(b.u);Vw(c,d);}
function AOM(b){var jsObj=new $rt_globals.physx.PxTransform(b);return $rt_globals.physx.getPointer(jsObj);}
function AJO(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxTransform);var returnedJSObj=jsObj.get_q();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AXl(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxTransform);var returnedJSObj=jsObj.get_p();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function Vw(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxTransform);jsObj.set_p(c);}
var Pm=G();
var Bay=0;function A27(){A27=V(Pm);AUL();}
function AUL(){Bay=$rt_globals.physx.PxIdentity;}
function Tf(){var a=this;C.call(a);a.kF=null;a.g2=null;a.j2=null;a.ls=null;a.m3=null;a.k2=null;}
function BaK(a,b){var c=new Tf();UC(c,a,b);return c;}
function UC(a,b,c){var d,e,f;d=new N_;e=new Sb;f=new BP;f.bj=0;f.r=Bj(C,16);e.b3=f;e.dL=2147483647;d.kC=e;d.gj=0;a.j2=d;f=new O3;f.GG=a;e=new BP;e.bj=0;e.r=Bj(C,16);f.b3=e;f.dL=2147483647;a.m3=f;e=new BP;e.bj=1;e.r=Bj(C,16);a.k2=e;Xh(a,b);a.ls=c;}
function Xh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a.kF=Ck(b*24|0);L2();c=BaL;if(A$5!==null)c=BaM;d=new IN;e=b*4|0;f=b*6|0;g=Bj(Dj,3);h=g.data;i=new Dj;i.e0=1;i.cU=3;i.dg=5126;i.di=0;i.c3=B(505);i.fi=0;i.fg=Dt(1);h[0]=i;j=new Dj;j.e0=4;j.cU=4;j.dg=5121;j.di=1;j.c3=B(506);j.fi=0;j.fg=Dt(4);h[1]=j;i=new Dj;i.e0=16;i.cU=2;i.dg=5126;i.di=0;i.c3=B(507);i.fi=0;i.fg=Dt(16);h[2]=i;MH(d,c,0,e,f,AS2(g));a.g2=d;g=Rj(f);h=g.data;k=0;l=0;b=h.length;while(l<b){h[l]=k<<16>>16;m=l+1|0;n=(k+2|0)<<16>>16;h[m]=n;m=l+2|0;o=(k+1|0)
<<16>>16;h[m]=o;h[l+3|0]=o;h[l+4|0]=n;h[l+5|0]=(k+3|0)<<16>>16;l=l+6|0;k=k+4|0;}d.c7.qm(g,0,b);}
function AGs(a,b){var c,d,e,f,g,h,i,j,k;c=!(b.eK.iK!=(-1)?0:1)?1:0;d=a.j2;e=null;d=d.eH;if(d!==null){while(true){f=d.eS;if(f===null)break;if(d.e7>=c)break;d=f;}if(d.e7==c)e=d.hb;}if(e===null){d=a.m3.b3;g=d.m;if(!g){d=new BP;d.bj=0;d.r=Bj(C,100);}else{if(!g){b=new BK;b.c=1;b.d=1;b.f=B(33);H(b);}g=g-1|0;d.m=g;h=d.r.data;d=h[g];h[g]=null;}e=d;h=e.r;g=0;i=e.m;d=null;if(g>i){b=new Bh;b.c=1;b.d=1;H(b);}while(g<i){j=h.data;k=g+1|0;j[g]=d;g=k;}e.m=0;Cf(a.k2,e);AAy(a.j2,c,e);}Cf(e,b);}
function Wy(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.ls;A9r.d8(2929);c=b.ip;d=A99;if(c.ba){B_(c,c.bV,c.bT);c.ba=0;}d.jz(c.cO);c=b.ip;e=b.bQ.jt;Lh();f=GN(c,B(508),BaN);d=A99;if(c.ba){B_(c,c.bV,c.bT);c.ba=0;}g=e.ct;c=d.ds;h=d.d6;if(!h)c=!c.O?null:c.M;else{i=c.K;j=Oi(c,h);a:{while(true){k=i.data[j];if(!k){j= -(j+1|0)|0;break a;}if(k==h)break;j=(j+1|0)&c.N;}}c=j<0?null:c.L.data[j];}c=c;if(!f)c=!c.O?null:c.M;else{i=c.K;h=Oi(c,f);b:{while(true){j=i.data[h];if(!j){h= -(h+1|0)|0;break b;}if(j==f)break;h=(h+1|0)&c.N;}}c
=h<0?null:c.L.data[h];}BB();e=c===null?null:c.Q;c=d.l;d="uniformMatrix4fv";l=!!0;if(g===null)m=null;else{g=g.data;n=g.length;m=new $rt_globals.Array(n);h=0;while(h<n){o=g[h];h;m[h]=o;h=h+1|0;}}c[d](e,l,m);b=b.ip;d=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}d.kb(GN(b,B(509),BaN),0);b=a.j2;if(A$e){c=new K4;c.p1=b;c.jo=b.eH;c.k3=null;}else{c=b.uM;if(c!==null){c.jo=c.p1.eH;c.k3=null;}else{c=new K4;c.p1=b;c.jo=b.eH;c.k3=null;b.uM=c;}}while(true){e=c.jo;if(!(e===null?0:1))break;c.k3=e;c.jo=e.eS;AAY(a.ls,e.e7,e.hb);AGg(a,
a.ls.ip,e.hb);if(e.e7==1){A9r.dG(3042);A9r.hR(1);}}A9r.dG(2929);}
function AGg(a,b,c){var d,e,f,g,h,i,j,k;d=null;e=0;if(A$e){f=new GF;f.dN=1;f.gi=c;f.ko=1;}else{if(c.hv===null){f=new LH;f.lc=c;f.mN=1;c.hv=f;}f=Rz(c.hv);}while(f.dN){if(!(f.hw>=f.gi.m?0:1)){if(e>0){c=a.g2;g=a.kF;c.eN.iy(g,0,e);c=a.g2;JH(c,b,4,0,e/4|0,c.jX);}return;}h=LK(f);if(!(d!==null&&AEj(d,h.eK))){if(e>0){c=a.g2;g=a.kF;c.eN.iy(g,0,e);c=a.g2;JH(c,b,4,0,e/4|0,c.jX);e=0;}i=h.eK;d=i.il.dv;A9r.oc(33984);A9r.fM(d.eh,d.iu);j=i.iK;if(!(j!=(-1)?0:1))A9r.qB(j,i.kf);d=h.eK;}if(!h.hd){ZD(h);AB2(h);}g=h.dw;k=g.data;M(g,
0,a.kF,e,k.length);e=e+h.dw.data.length|0;g=a.kF;if(e==g.data.length){a.g2.eN.iy(g,0,e);c=a.g2;JH(c,b,4,0,e/4|0,c.jX);e=0;}}c=new Bb;c.c=1;c.d=1;c.f=B(461);H(c);}
var OO=G(0);
function TM(){var a=this;C.call(a);a.ps=null;a.mM=null;a.kH=null;a.bQ=null;a.ip=null;a.vi=null;}
function A23(a){var b=new TM();ALm(b,a);return b;}
function ALm(a,b){var c,d,e,f,g,h;c=new N5;c.Fs=a;d=new BP;d.bj=0;d.r=Bj(C,16);c.b3=d;c.dL=2147483647;a.ps=c;c=new BP;c.bj=1;c.r=Bj(C,16);a.mM=c;a.kH=EE(51,0.800000011920929);a.bQ=b;b=new N6;b.bS=a;a.vi=b;c=VD(B(510),B(511));a.ip=c;if(c.eg)return;b=new Bh;c=new P;c.b=D(16);I(c,c.a,B(512));d=a.ip;if(!d.eg)e=d.dK;else{e=A99.gP(d.cO);d.dK=e;}I(c,c.a,e);d=new N;f=c.b;g=c.a;Q();h=D(g);d.e=h;M(f,0,h,0,g);b.c=1;b.d=1;b.f=d;H(b);}
function AAY(a,b,c){var d,e,f,g,h,i,j,k,l;a:{if(b==1){A9r.d8(3042);A9r.hR(0);d=a.vi;if(BaO===null)BaO=new KA;e=BaO;f=c.r;g=c.m;if(e.ni===null){c=new S2;c.jP=7;c.fH=0;c.jL=Bj(C,256);c.qW=Bc(40);c.f0=Bc(40);e.ni=c;}ZV(e.ni,f,d,0,g);}else{g=0;h=c.m;while(true){if(g>=h){f=c.r;b=0;g=c.m;d=null;if(b>g){c=new Bh;c.c=1;c.d=1;H(c);}while(b<g){i=f.data;h=b+1|0;i[b]=d;b=h;}c.m=0;d=YM(a.kH);while(AFD(d)){V3(c,WQ(d));}c=a.kH;if(c.ff){c.ff=0;f=c.dp.data;d=null;b=0;g=f.length;if(b>g){c=new Bh;c.c=1;c.d=1;H(c);}while(b<g){h
=b+1|0;f[b]=d;b=h;}f=c.cs;UR(f,0,f.data.length,null);}Lf(a.ps,a.mM);c=a.mM;UR(c.r,0,c.m,null);c.m=0;break a;}if(g>=c.m){e=new Y;d=new P;d.b=D(16);I(d,d.a,B(36));O(d,d.a,g,10);I(d,d.a,B(37));b=c.m;O(d,d.a,b,10);c=new N;f=d.b;g=d.a;Q();i=D(g);c.e=i;M(f,0,i,0,g);e.c=1;e.d=1;e.f=c;H(e);}d=c.r.data[g];e=a.kH;b=CA(e,d.eK);e=b<0?null:e.cs.data[b];if(e===null){e=a.ps.b3;b=e.m;if(!b){e=new BP;e.bj=1;e.r=Bj(C,16);}else{if(!b){c=new BK;c.c=1;c.d=1;c.f=B(33);H(c);}b=b-1|0;e.m=b;f=e.r.data;e=f[b];f[b]=null;}e=e;f=e.r;b=
0;j=e.m;k=null;if(b>j)break;while(b<j){i=f.data;l=b+1|0;i[b]=k;b=l;}e.m=0;Cf(a.mM,e);BH(a.kH,d.eK,e);}Cf(e,d);g=g+1|0;}c=new Bh;c.c=1;c.d=1;H(c);}}}
var Iw=G();
var BaP=null;function QE(a,b,c,d){var e,f,g,h,i,j,k,l;e=new P;e.b=D(16);I(e,e.a,B(91));f=e.a;g=b===null?B(2):b;a:{I(e,f,g);I(e,e.a,B(513));h=new N;i=e.b;j=e.a;Q();k=D(j);h.e=k;M(i,0,k,0,j);g=BaP.nM;if(!h.bE){i=h.e.data;f=i.length;j=0;while(true){if(j>=f)break a;l=i[j];h.bE=(31*h.bE|0)+l|0;j=j+1|0;}}}l=h.bE;i=g.cx.data;g=i[l&(i.length-1|0)];while(g!==null){if(g.eI==l){e=g.cQ;if(h!==e&&!BC(h,e)?0:1)break;}g=g.c2;}if(g===null?0:1)return;if(b!==null){if(A_a===null){c=new Ct;c.cf=A5j;b=new P;b.b=D(16);c.bc=b;c.b$
=D(32);c.ck=0;Cr();c.cg=A$H;A_a=c;}c=A_a;g=new P;g.b=D(16);I(g,g.a,B(514));I(g,g.a,h===null?B(2):h);b=new N;k=g.b;j=g.a;i=D(j);b.e=i;M(k,0,i,0,j);g=c.bc;I(g,g.a,b);j=g.a;Bd(g,j,j+1|0);g.b.data[j]=10;Co(c);g=$rt_globals.window.document;e=g.createElement("script");b=$rt_ustr(h);e.src=b;b=new Te;b.GL=a;b.wL=h;b.xz=d;e.addEventListener("load",BY(b,"handleEvent"));g.body.appendChild(e);}}
function Ve(){var b,c,d,e,f;b=new SX;c=new Gm;d=HE(16);c.e_=0;e=Bj(E8,d);f=e.data;c.cx=e;c.iS=0.75;c.fz=f.length*0.75|0;b.nM=c;BaP=b;}
var OK=G(0);
function Qx(){C.call(this);this.tv=null;}
function AKp(a){var b,c,d;b=a.tv.rF;c=new Su;c.ur=b;b=new Iw;d=new Tl;d.wl=c;$rt_globals.window.imguiOnInit=BY(d,"onInit");QE(b,B(515),null,null);}
function I$(){C.call(this);this.bk=null;}
function AAf(a,b){var c;if(b!==null){Cf(a.bk,b);return;}c=new CK;c.c=1;c.d=1;c.f=B(490);H(c);}
function Kx(a,b){var c,d,e,f,$$je;c=a.bk;Fj(c);d=c.r;c.eb=d;c.cR=c.cR+1|0;a:{try{e=0;f=a.bk.m;}catch($$e){$$je=Br($$e);c=$$je;break a;}b:{try{while(e<f){if(d.data[e].lU(b))break b;e=e+1|0;}}catch($$e){$$je=Br($$e);c=$$je;break a;}Cv(a.bk);return 0;}try{}catch($$e){$$je=Br($$e);c=$$je;break a;}Cv(a.bk);return 1;}Cv(a.bk);H(c);}
function Ll(a,b){var c,d,e,f,$$je;c=a.bk;Fj(c);d=c.r;c.eb=d;c.cR=c.cR+1|0;a:{try{e=0;f=a.bk.m;}catch($$e){$$je=Br($$e);c=$$je;break a;}b:{try{while(e<f){if(d.data[e].lQ(b))break b;e=e+1|0;}}catch($$e){$$je=Br($$e);c=$$je;break a;}Cv(a.bk);return 0;}try{}catch($$e){$$je=Br($$e);c=$$je;break a;}Cv(a.bk);return 1;}Cv(a.bk);H(c);}
function Lm(a,b){var c,d,e,f,$$je;c=a.bk;Fj(c);d=c.r;c.eb=d;c.cR=c.cR+1|0;a:{try{e=0;f=a.bk.m;}catch($$e){$$je=Br($$e);c=$$je;break a;}b:{try{while(e<f){if(d.data[e].o_(b))break b;e=e+1|0;}}catch($$e){$$je=Br($$e);c=$$je;break a;}Cv(a.bk);return 0;}try{}catch($$e){$$je=Br($$e);c=$$je;break a;}Cv(a.bk);return 1;}Cv(a.bk);H(c);}
function Ka(a,b,c,d,e){var f,g,h,i,$$je;f=a.bk;Fj(f);g=f.r;f.eb=g;f.cR=f.cR+1|0;a:{try{h=0;i=a.bk.m;}catch($$e){$$je=Br($$e);f=$$je;break a;}b:{try{while(h<i){if(g.data[h].kO(b,c,d,e))break b;h=h+1|0;}}catch($$e){$$je=Br($$e);f=$$je;break a;}Cv(a.bk);return 0;}try{}catch($$e){$$je=Br($$e);f=$$je;break a;}Cv(a.bk);return 1;}Cv(a.bk);H(f);}
function I1(a,b,c,d,e){var f,g,h,i,$$je;f=a.bk;Fj(f);g=f.r;f.eb=g;f.cR=f.cR+1|0;a:{try{h=0;i=a.bk.m;}catch($$e){$$je=Br($$e);f=$$je;break a;}b:{try{while(h<i){if(g.data[h].mb(b,c,d,e))break b;h=h+1|0;}}catch($$e){$$je=Br($$e);f=$$je;break a;}Cv(a.bk);return 0;}try{}catch($$e){$$je=Br($$e);f=$$je;break a;}Cv(a.bk);return 1;}Cv(a.bk);H(f);}
function Kr(a,b,c,d){var e,f,g,h,$$je;e=a.bk;Fj(e);f=e.r;e.eb=f;e.cR=e.cR+1|0;a:{try{g=0;h=a.bk.m;}catch($$e){$$je=Br($$e);e=$$je;break a;}b:{try{while(g<h){if(f.data[g].oU(b,c,d))break b;g=g+1|0;}}catch($$e){$$je=Br($$e);e=$$je;break a;}Cv(a.bk);return 0;}try{}catch($$e){$$je=Br($$e);e=$$je;break a;}Cv(a.bk);return 1;}Cv(a.bk);H(e);}
function PH(a,b,c){var d,e,f,g,$$je;d=a.bk;Fj(d);e=d.r;d.eb=e;d.cR=d.cR+1|0;a:{try{f=0;g=a.bk.m;}catch($$e){$$je=Br($$e);d=$$je;break a;}b:{try{while(f<g){if(e.data[f].np(b,c))break b;f=f+1|0;}}catch($$e){$$je=Br($$e);d=$$je;break a;}Cv(a.bk);return 0;}try{}catch($$e){$$je=Br($$e);d=$$je;break a;}Cv(a.bk);return 1;}Cv(a.bk);H(d);}
function R3(a,b,c){var d,e,f,g,$$je;d=a.bk;Fj(d);e=d.r;d.eb=e;d.cR=d.cR+1|0;a:{try{f=0;g=a.bk.m;}catch($$e){$$je=Br($$e);d=$$je;break a;}b:{try{while(f<g){if(e.data[f].pl(b,c))break b;f=f+1|0;}}catch($$e){$$je=Br($$e);d=$$je;break a;}Cv(a.bk);return 0;}try{}catch($$e){$$je=Br($$e);d=$$je;break a;}Cv(a.bk);return 1;}Cv(a.bk);H(d);}
var D5=G(BR);
var A5O=null;var A5P=null;var A5Q=null;function AK5(){A5O=new D5;A5P=new D5;A5Q=new D5;}
function R$(){var a=this;BR.call(a);a.qZ=null;a.pD=null;a.n_=null;a.nO=null;}
function Yv(a,b){var c,d,e,f;c=R(a.u);d=b===null?0:R(b.u);e=S(AQV(c,d));if(BU(e,BI))return null;f=new Px;if(!f.cj)f.u=e;return f;}
function RQ(a,b){var c,d,e;c=R(a.u);d=b===null?0:R(b.u);e=S(AXR(c,d));if(BU(e,BI))return null;if(a.qZ===null)a.qZ=new D9;b=a.qZ;if(!b.cj)b.u=e;return b;}
function Za(a,b){var c,d,e;c=R(a.u);d=b===null?0:R(b.u);e=S(AL6(c,d));if(BU(e,BI))return null;if(a.pD===null)a.pD=new Fo;b=a.pD;if(!b.cj)b.u=e;return b;}
function R1(a,b,c,d,e){var f,g,h,i,j;f=R(a.u);g=b===null?0:R(b.u);h=c===null?0:R(c.u);i=e===null?0:R(e.u);j=S(AM_(f,g,h,!!d,i));if(BU(j,BI))return null;if(a.n_===null)a.n_=new Fz;b=a.n_;if(!b.cj)b.u=j;return b;}
function Zb(a,b,c,d){var e,f;e=S(AN1(R(a.u),b,c,d));if(BU(e,BI))return null;if(a.nO===null)a.nO=new D8;f=a.nO;if(!f.cj)f.u=e;return f;}
function AQV(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createRigidDynamic(c);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AXR(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createScene(c);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AL6(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createRigidStatic(c);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AM_(b,c,d,e,f){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createShape(c,d,e,f);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AN1(b,c,d,e){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxPhysics);var returnedJSObj=jsObj.createMaterial(c,d,e);if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function N5(){CG.call(this);this.Fs=null;}
function ALW(a){var b;b=new BP;b.bj=1;b.r=Bj(C,16);return b;}
function N6(){C.call(this);this.bS=null;}
function N_(){var a=this;C.call(a);a.kC=null;a.uM=null;a.gj=0;a.eH=null;}
function AAy(a,b,c){var d,e,f,g,h,i;d=a.eH;if(d===null){e=a.kC;d=null;f=null;e=e.b3;g=e.m;if(!g)e=new HF;else{if(!g){c=new BK;c.c=1;c.d=1;c.f=B(33);H(c);}g=g-1|0;e.m=g;h=e.r.data;e=h[g];h[g]=null;}e=e;e.jb=d;e.eS=f;e.hb=c;e.e7=b;a.eH=e;a.gj=a.gj+1|0;}else{e=d;while(true){i=e.eS;if(i===null)break;if(i.e7>b)break;e=i;}g=Bo(b,e.e7);if(g<=0){if(g>=0)e.hb=c;else{e=a.kC;i=null;e=e.b3;g=e.m;if(!g)e=new HF;else{if(!g){c=new BK;c.c=1;c.d=1;c.f=B(33);H(c);}g=g-1|0;e.m=g;h=e.r.data;e=h[g];h[g]=null;}f=e;f.jb=i;f.eS=d;f.hb
=c;f.e7=b;d.jb=f;a.eH=f;a.gj=a.gj+1|0;}}else{d=a.kC.b3;g=d.m;if(!g)d=new HF;else{if(!g){c=new BK;c.c=1;c.d=1;c.f=B(33);H(c);}g=g-1|0;d.m=g;h=d.r.data;d=h[g];h[g]=null;}d=d;d.jb=e;d.eS=i;d.hb=c;d.e7=b;e.eS=d;c=d.eS;if(c!==null)c.jb=d;a.gj=a.gj+1|0;}}return null;}
function O3(){CG.call(this);this.GG=null;}
function AOx(a){var b;b=new BP;b.bj=0;b.r=Bj(C,100);return b;}
var AAx=G();
function Mr(){var a=this;BP.call(a);a.eb=null;a.mY=null;a.cR=0;}
function Cv(a){var b,c,d,e;b=a.cR-1|0;if(0>b)b=0;a.cR=b;c=a.eb;if(c===null)return;a:{if(c!==a.r&&!b){d=c.data;a.mY=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.eb=null;}
function Fj(a){var b,c,d,e,f,g,h,i,j,k;b=a.eb;if(b!==null){c=a.r;if(b===c){a:{b=a.mY;if(b!==null){d=b.data.length;e=a.m;if(d>=e){M(c,0,b,0,e);a.r=a.mY;a.mY=null;break a;}}d=c.data.length;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new B9;g.G=f;h=g;f.classObject=h;}}g=g.G.$meta.item;if(g===null)i=null;else{i=g.classObject;if(i===null){i=new B9;i.G=g;h=i;g.classObject=h;}}if(i===null){h=new CK;h.c=1;h.d=1;H(h);}if(i===L($rt_voidcls())){h=new Bh;h.c=1;h.d=1;H(h);}if(d<0){h=new D1;h.c
=1;h.d=1;H(h);}i=EU(i.G,d);h=i.data;j=a.m;k=h.length;if(j<k)k=j;Hh(c,0,i,0,k);a.r=i;}return;}}}
function VY(){var a=this;C.call(a);a.E_=null;a.h5=null;a.un=null;a.nV=0;a.uQ=0.0;a.f2=0.0;a.nw=0.0;a.lB=0.0;a.oy=0.0;a.fb=0.0;a.j_=0.0;a.hG=0.0;a.kS=0.0;a.su=0.0;a.e8=0.0;a.u5=0.0;a.kp=0;a.gz=null;a.nz=null;a.q1=0.0;a.pK=0.0;a.E$=null;a.rV=null;a.sJ=null;}
function A1t(a,b){var c=new VY();AUJ(c,a,b);return c;}
function AUJ(a,b,c){a.fb=1.0;a.su=1.0;a.e8=1.0;a.u5=1.0;a.gz=Bj($rt_arraycls(ML),128);a.pK=1.0;a.rV=E1([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.sJ=E1([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.un=b;a.nV=c;UY(a,b,c);}
function UY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$$je;if(a.h5!==null)H(AZg(B(516)));a.E_=AF_(b);d=AZ_(A1H(Xr(b)),512);a:{b:{try{e=HG(d);if(e===null)H(FJ(B(517)));e=Hc(e,AEd(e,B(518))+8|0);f=(PL(FI(e,0,ABB(e,32)),B(519),4)).data;if(f.length!=4)H(FJ(B(520)));a.uQ=Cz(f[0]);a.f2=Cz(f[1]);a.nw=Cz(f[2]);a.lB=Cz(f[3]);g=a.uQ+a.nw;e=HG(d);if(e===null)H(FJ(B(521)));f=(PL(e,B(192),9)).data;h=f.length;if(h<3)H(FJ(B(522)));if(!FA(f[1],B(523)))H(FJ(B(524)));a.oy=Cz(Hc(f[1],
11));if(!FA(f[2],B(525)))H(FJ(B(526)));c:{i=Cz(Hc(f[2],5));j=1;if(h<6)k=j;else if(f[5]===null)k=j;else if(!FA(f[5],B(527)))k=j;else{try{k=RG(1,Cz(Hc(f[5],6)));j=k;break c;}catch($$e){$$je=Br($$e);if($$je instanceof Cc){}else{throw $$e;}}k=j;}}a.h5=Bj(N,k);h=0;d:{e:{f:{while(true){if(h>=k)break d;e=HG(d);if(e===null)H(FJ(B(528)));g:{l=Rq(ABj(B(529)),e);if(Ha(l)){m=KJ(l,1);try{if(Cz(m)!=h)break f;break g;}catch($$e){$$je=Br($$e);if($$je instanceof Cc){n=$$je;break e;}else{throw $$e;}}}}e=Rq(ABj(B(530)),e);if(!Ha(e))break;o
=KJ(e,1);a.h5.data[h]=Vt(TN(TK(TS(b),o)),B(531),B(100));h=h+1|0;}H(FJ(B(532)));}try{H(FJ(Cy(DF(DF(Eq(),B(533)),m))));}catch($$e){$$je=Br($$e);if($$je instanceof Cc){n=$$je;}else{throw $$e;}}}H(AUg(Cy(DF(DF(Eq(),B(534)),m)),n));}a.hG=0.0;h:{while(true){e=HG(d);if(e===null)break;if(FA(e,B(535)))break h;if(FA(e,B(536)))break h;if(!FA(e,B(537)))continue;p=AH2();q=YR(e,B(538));BL(q);BL(q);k=Cz(BL(q));if(k<=0)a.nz=p;else{if(k>65535)continue;P7(a,k,p);}p.fY=k;BL(q);p.vK=Cz(BL(q));BL(q);p.vL=Cz(BL(q));BL(q);p.c1=Cz(BL(q));BL(q);p.dW
=Cz(BL(q));BL(q);p.dP=Cz(BL(q));BL(q);if(c)p.h9=Cz(BL(q));else p.h9= -(p.dW+Cz(BL(q))|0)|0;BL(q);p.gZ=Cz(BL(q));if(TB(q))BL(q);i:{if(TB(q))try{p.iL=Cz(BL(q));break i;}catch($$e){$$je=Br($$e);if($$je instanceof Cc){}else{throw $$e;}}}if(p.c1>0&&p.dW>0)a.hG=AWN(i+p.h9,a.hG);}}a.hG=a.hG+a.nw;j:{while(true){e=HG(d);if(e===null)break;if(!FA(e,B(539)))break j;q=YR(e,B(538));BL(q);BL(q);r=Cz(BL(q));BL(q);s=Cz(BL(q));if(r<0)continue;if(r>65535)continue;if(s<0)continue;if(s>65535)continue;p=G2(a,r&65535);BL(q);t=Cz(BL(q));if
(p!==null)AEt(p,s,t);}}u=0;v=0.0;w=0.0;x=0.0;y=0.0;z=0.0;ba=0.0;bb=0.0;if(e!==null&&FA(e,B(536))){u=1;q=YR(e,B(538));BL(q);BL(q);v=F_(BL(q));BL(q);w=F_(BL(q));BL(q);x=F_(BL(q));BL(q);y=F_(BL(q));BL(q);z=F_(BL(q));BL(q);ba=F_(BL(q));BL(q);bb=F_(BL(q));}bc=G2(a,32);if(bc===null){bc=AH2();bc.fY=32;bd=G2(a,108);if(bd===null)bd=R0(a);bc.gZ=bd.gZ;P7(a,32,bc);}if(!bc.c1){be=a.lB;bc.c1=be+bc.gZ+a.f2|0;bc.dP= -be|0;}a.q1=bc.gZ;bf=null;f=a.rV.data;k=f.length;h=0;k:{while(h<k){bf=G2(a,f[h]);if(bf!==null)break k;h=h+1|
0;}}if(bf===null)bf=R0(a);a.pK=bf.dW-g;bg=null;f=a.sJ.data;k=f.length;h=0;l:{while(h<k){bg=G2(a,f[h]);if(bg!==null)break l;h=h+1|0;}}if(bg!==null)a.fb=bg.dW;else{bh=a.gz.data;j=bh.length;k=0;while(k<j){m:{bi=bh[k];if(bi!==null){f=bi.data;h=f.length;r=0;while(true){if(r>=h)break m;p=f[r];if(p!==null){s=p.dW;if(s&&p.c1)a.fb=AH_(a.fb,s);}r=r+1|0;}}}k=k+1|0;}}g=a.fb-g;a.fb=g;i=i-g;a.j_=i;g= -a.oy;a.kS=g;if(c){a.j_= -i;a.kS= -g;}if(u){a.j_=v;a.hG=w;a.kS=x;a.fb=y;a.oy=z;a.q1=ba;a.pK=bb;}}catch($$e){$$je=Br($$e);if
($$je instanceof CI){n=$$je;break b;}else{b=$$je;break a;}}P9(d);return;}try{H(AUg(Cy(CS(DF(Eq(),B(540)),b)),n));}catch($$e){$$je=Br($$e);b=$$je;}}P9(d);H(b);}
function Qu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=c.dv.em;e=1.0/d.eo;f=1.0/d.ei;g=0.0;h=0.0;i=c.lH;j=c.h7;k=c.hY;l=c.i2;if(c instanceof Og){m=c;g=m.EF;h=(m.DQ-m.Fr|0)-m.EE;}n=b.vK;o=n;p=b.c1;q=n+p|0;n=b.vL;r=n;s=b.dW;t=n+s|0;if(g<=0.0)k=q;else{o=o-g;if(o<0.0){b.c1=p+o|0;b.dP=b.dP-o|0;o=0.0;}g=q-g;if(g<=k)k=g;else b.c1=b.c1-(g-k)|0;}if(h<=0.0)l=t;else{r=r-h;if(r<0.0){n=s+r|0;b.dW=n;if(n<0)b.dW=0;r=0.0;}g=t-h;if(g<=l)l=g;else{u=g-l;b.dW=b.dW-u|0;b.h9=b.h9+u|0;}}b.rb=i+o*e;b.vQ=i+k*e;if(!a.nV){b.px=
j+r*f;b.m0=j+l*f;}else{b.m0=j+r*f;b.px=j+l*f;}}
function P7(a,b,c){var d,e,f;d=a.gz.data;e=b/512|0;f=d[e];if(f===null){f=Bj(ML,512);d[e]=f;}f.data[b&511]=c;}
function R0(a){var b,c,d,e,f,g,h,i;b=a.gz.data;c=b.length;d=0;a:while(true){if(d>=c){e=new Bb;e.c=1;e.d=1;e.f=B(541);H(e);}b:{f=b[d];if(f!==null){f=f.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.dW&&i.c1)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function G2(a,b){var c;c=a.gz.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function NI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;g=e-d|0;if(!g)return;h=a.kp;i=a.e8;j=b.bK;k=b.cm;YP(j,g);Yb(b.cm,g+1|0);a:{while(true){l=d+1|0;if(d<0)break;m=c.e.data;if(d>=m.length)break;b:{n=m[d];if(n!=13){m=a.gz.data[n/512|0];o=m===null?null:m.data[n&511];if(o===null){o=a.nz;if(o===null)break b;}Cf(j,o);if(f===null)p=o.jC?0.0:( -o.dP|0)*i-a.lB;else{c:{d=f.gZ;m=f.la;if(m!==null){m=m.data[n>>>9|0];if(m!==null){g=m.data[n&511];break c;}}g=0;}p=(d+g|0)*i;}QV(k,p);if(!h)f=o;else if(n!=91)f=o;else if(l>=e)f=o;else
{if(l<0)break a;m=c.e.data;if(l>=m.length)break a;if(m[l]!=91)f=o;else{l=l+1|0;f=o;}}}}if(l>=e){if(f!==null)QV(k,f.jC?f.gZ*i:(f.c1+f.dP|0)*i-a.f2);return;}d=l;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function TJ(a,b,c){var d,e,f,g,h,i;a:{d=c-1|0;e=b.r.data;f=e[d].fY&65535;switch(f){case 9:case 10:case 13:case 32:break;default:c=0;break a;}c=1;}if(c)return d;b:{g=a.E$;if(g===null)c=0;else{h=g.data;c=h.length;i=0;while(i<c){if(f==h[i]){c=1;break b;}i=i+1|0;}c=0;}}if(c)d=d+(-1)|0;c:{while(d>0){d:{c=e[d].fY&65535;switch(c){case 9:case 10:case 13:case 32:break;default:f=0;break d;}f=1;}if(f)break c;e:{if(g===null)c=0;else{h=g.data;f=h.length;i=0;while(i<f){if(c==h[i]){c=1;break e;}i=i+1|0;}c=0;}}if(c)break c;d
=d+(-1)|0;}return 0;}return d+1|0;}
function GO(){var a=this;C.call(a);a.dK=null;a.eg=0;a.lN=null;a.wF=null;a.xU=null;a.w1=null;a.dM=null;a.wZ=null;a.ul=null;a.wi=null;a.cO=0;a.nL=0;a.vu=0;a.Gv=null;a.bV=null;a.bT=null;a.ba=0;a.B4=0;a.d_=null;a.jN=null;}
var BaN=0;var BaQ=null;var BaR=null;var BaS=null;var BaT=null;function Lh(){Lh=V(GO);ANw();}
function VD(a,b){var c=new GO();Zs(c,a,b);return c;}
function Zs(a,b,c){var d,e,f,g,h;Lh();a.dK=B(42);a.lN=JB(51,0.800000011920929);a.wF=JB(51,0.800000011920929);a.xU=JB(51,0.800000011920929);a.dM=JB(51,0.800000011920929);a.wZ=JB(51,0.800000011920929);a.ul=JB(51,0.800000011920929);a.B4=0;if(!A5g){d=Bc(1);e=d.data.length;f=new GH;g=0+e|0;f.v=(-1);f.y=e;f.g=e;f.h=0;f.g=g;f.hc=0;f.h6=0;f.gX=d;}else{h=new Ch;d=BF(4);h.v=(-1);h.y=4;h.g=4;B6();h.bh=A98;h.bl=0;h.U=d;h.h=0;h.g=4;h.b4=1;h.bt=0;h.bh=CU();f=Gx(h);}a.d_=f;if(!A5g){d=Bc(1);e=d.data.length;f=new GH;g=0+e|0;f.v
=(-1);f.y=e;f.g=e;f.h=0;f.g=g;f.hc=0;f.h6=0;f.gX=d;}else{h=new Ch;d=BF(4);h.v=(-1);h.y=4;h.g=4;B6();h.bh=A98;h.bl=0;h.U=d;h.h=0;h.g=4;h.b4=1;h.bt=0;SR(h,CU());f=Gx(h);}a.jN=f;if(b===null)H(ALV(B(542)));if(c===null)H(ALV(B(543)));f=BaQ;if(f!==null&&Jw(f)>0)b=Cy(DF(DF(Eq(),BaQ),b));f=BaR;if(f!==null&&Jw(f)>0)c=Cy(DF(DF(Eq(),BaR),c));a.bV=b;a.bT=c;a.Gv=AMs(16);B_(a,b,c);if(AFN(a)){Vy(a);W1(a);AEg(a,A9u,a);}}
function B_(a,b,c){var d;a.nL=TD(a,35633,b);d=TD(a,35632,c);a.vu=d;if(a.nL!=(-1)&&d!=(-1)){d=A99.pH();if(!d)d=(-1);d=AFq(a,d);a.cO=d;if(d!=(-1)){a.eg=1;return;}a.eg=0;return;}a.eg=0;}
function TD(a,b,c){var d,e,f,g,h,i,j,k;d=A99;if(!A5g){e=Bc(1);f=e.data.length;g=new GH;h=0+f|0;g.v=(-1);g.y=f;g.g=f;g.h=0;g.g=h;g.hc=0;g.h6=0;g.gX=e;}else{i=new Ch;j=BF(4);i.v=(-1);i.y=4;i.g=4;B6();i.bh=A98;i.bl=0;i.U=j;i.h=0;i.g=4;i.b4=1;i.bt=0;i.bh=CU();g=Gx(i);}k=d.qf(b);if(!k)return (-1);d.qX(k,c);d.n9(k);d.p7(k,35713,g);if(Fq(g,0))return k;i=d.p8(k);c=new P;c.b=D(16);d=a.dK;I(c,c.a,d);d=b!=35633?B(544):B(545);I(c,c.a,d);d=new N;j=c.b;k=c.a;Q();e=D(k);d.e=e;M(j,0,e,0,k);a.dK=d;c=new P;c.b=D(16);I(c,c.a,
d);I(c,c.a,i);d=new N;j=c.b;k=c.a;e=D(k);d.e=e;M(j,0,e,0,k);a.dK=d;return (-1);}
function AFq(a,b){var c,d,e,f;c=A99;if(b==(-1))return (-1);c.k9(b,a.nL);c.k9(b,a.vu);c.pb(b);d=new Ch;e=BF(4);d.v=(-1);d.y=4;d.g=4;B6();d.bh=A98;d.bl=0;d.U=e;d.h=0;d.g=4;d.b4=1;d.bt=0;d.bh=CU();f=Gx(d);c.i0(b,35714,f);if(Fq(f,0))return b;a.dK=A99.gP(b);return (-1);}
function AFN(a){return a.eg;}
function GN(a,b,c){var d,e,f,g,h,i;d=a.lN;e=(-2);f=Eu(d,b);if(f>=0)e=d.dC.data[f];if(e==(-2)){e=A99.lS(a.cO,b);if(e==(-1)&&c){if(a.eg){d=new Bh;g=new P;g.b=D(16);I(g,g.a,B(546));I(g,g.a,b);I(g,g.a,B(547));b=new N;h=g.b;e=g.a;Q();i=D(e);b.e=i;M(h,0,i,0,e);d.c=1;d.d=1;d.f=b;H(d);}b=new BK;d=new P;d.b=D(16);I(d,d.a,B(548));if(!a.eg)g=a.dK;else{g=A99.gP(a.cO);a.dK=g;}I(d,d.a,g);g=new N;h=d.b;e=d.a;Q();i=D(e);g.e=i;M(h,0,i,0,e);b.c=1;b.d=1;b.f=g;H(b);}Ep(a.lN,b,e);}return e;}
function AGn(a,b,c,d,e,f,g){var h;h=A99;if(a.ba){B_(a,a.bV,a.bT);a.ba=0;}h.gf(b,c,d,e,f,g);}
function AEr(a,b){var c;c=A99;if(a.ba){B_(a,a.bV,a.bT);a.ba=0;}c.gn(b);}
function ACs(a){if(a.ba){B_(a,a.bV,a.bT);a.ba=0;}}
function AEg(a,b,c){var d,e;Lh();d=BaS;e=CA(d,b);d=e<0?null:d.cs.data[e];if(d===null){d=new BP;d.bj=1;d.r=Bj(C,16);}Cf(d,c);BH(BaS,b,d);}
function W1(a){var b,c,d,e,f;b=a.d_;b.h=0;b.g=b.y;b.v=(-1);A99.i0(a.cO,35718,b);c=Fq(a.d_,0);a.w1=Bj(N,c);d=0;while(d<c){b=a.d_;b.h=0;b.g=b.y;b.v=(-1);Tg(b,0,1);b=a.jN;b.h=0;b.g=b.y;b.v=(-1);e=A99.qQ(a.cO,d,a.d_,b);f=A99.lS(a.cO,e);Ep(a.lN,e,f);Ep(a.wF,e,Fq(a.jN,0));Ep(a.xU,e,Fq(a.d_,0));a.w1.data[d]=e;d=d+1|0;}}
function Vy(a){var b,c,d,e,f;b=a.d_;b.h=0;b.g=b.y;b.v=(-1);A99.i0(a.cO,35721,b);c=Fq(a.d_,0);a.wi=Bj(N,c);d=0;while(d<c){b=a.d_;b.h=0;b.g=b.y;b.v=(-1);Tg(b,0,1);b=a.jN;b.h=0;b.g=b.y;b.v=(-1);e=A99.qA(a.cO,d,a.d_,b);f=A99.iw(a.cO,e);Ep(a.dM,e,f);Ep(a.wZ,e,Fq(a.jN,0));Ep(a.ul,e,Fq(a.d_,0));a.wi.data[d]=e;d=d+1|0;}}
function Uz(a,b){var c,d,e;c=a.dM;d=(-1);e=Eu(c,b);if(e>=0)d=c.dC.data[e];return d;}
function ANw(){var b,c,d,e;BaN=1;BaQ=B(42);BaR=B(42);BaS=EE(51,0.800000011920929);if(!A5g){b=Bc(1);c=b.data.length;d=new GH;e=0+c|0;d.v=(-1);d.y=c;d.g=c;d.h=0;d.g=e;d.hc=0;d.h6=0;d.gX=b;}else{d=new Ch;b=BF(4);d.v=(-1);d.y=4;d.g=4;B6();d.bh=A98;d.bl=0;d.U=b;d.h=0;d.g=4;d.b4=1;d.bt=0;d.bh=CU();d=Gx(d);}BaT=d;}
var Sb=G(CG);
function AMO(a){return new HF;}
var NM=G(0);
var LS=G(H8);
function SX(){LS.call(this);this.nM=null;}
function ML(){var a=this;C.call(a);a.fY=0;a.vK=0;a.vL=0;a.c1=0;a.dW=0;a.rb=0.0;a.m0=0.0;a.vQ=0.0;a.px=0.0;a.dP=0;a.h9=0;a.gZ=0;a.la=null;a.jC=0;a.iL=0;}
function AH2(){var a=new ML();AWw(a);return a;}
function AWw(a){a.iL=0;}
function AEt(a,b,c){var d,e,f;if(a.la===null)a.la=Bj($rt_arraycls($rt_bytecls()),128);d=a.la.data;e=b>>>9|0;f=d[e];if(f===null){f=BF(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AKm(a){var b,c,d,e,f;b=a.fY&65535;c=new N;d=D(1);e=d.data;e[0]=b;Q();f=e.length;e=D(f);c.e=e;M(d,0,e,0,f);return c;}
function AEC(){var a=this;C.call(a);a.po=0;a.id=null;a.dC=null;a.sf=0.0;a.pz=0;a.qN=0;a.mF=0;}
function JB(a,b){var c=new AEC();AS6(c,a,b);return c;}
function AS6(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.sf=c;d=JT(b,c);a.pz=d*c|0;b=d-1|0;a.mF=b;a.qN=Ek(S(b));a.id=Bj(C,d);a.dC=Bc(d);return;}e=new Bh;f=new P;f.b=D(16);I(f,f.a,B(59));Dz(f,f.a,c);g=new N;h=f.b;d=f.a;Q();i=D(d);g.e=i;M(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function Eu(a,b){var c,d,e,f,g,h;if(b===null){c=new Bh;c.c=1;c.d=1;c.f=B(60);H(c);}a:{d=a.id;if(!b.bE){e=b.e.data;f=e.length;g=0;while(true){if(g>=f)break a;h=e[g];b.bE=(31*b.bE|0)+h|0;g=g+1|0;}}}h=R(Bi(Bf(S(b.bE),F(2135587861, 2654435769)),a.qN));while(true){c=d.data[h];if(c===null)return  -(h+1|0)|0;if(BC(c,b))break;h=(h+1|0)&a.mF;}return h;}
function Ep(a,b,c){var d,e;d=Eu(a,b);if(d>=0){a.dC.data[d]=c;return;}d= -(d+1|0)|0;e=a.id.data;e[d]=b;a.dC.data[d]=c;c=a.po+1|0;a.po=c;if(c>=a.pz)YK(a,e.length<<1);}
function YK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.id.data.length;a.pz=b*a.sf|0;d=b-1|0;a.mF=d;d=Ek(S(d));a.qN=d;e=a.id;f=a.dC;g=Bj(C,b);a.id=g;h=Bc(b);a.dC=h;if(a.po>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k!==null){b:{l=f.data[j];if(!k.bE){g=k.e.data;m=g.length;n=0;while(true){if(n>=m)break b;o=g[n];k.bE=(31*k.bE|0)+o|0;n=n+1|0;}}}b=R(Bi(Bf(S(k.bE),F(2135587861, 2654435769)),d));while(h[b]!==null){b=(b+1|0)&a.mF;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
var AEz=G();
function AMs(b){var c,d,e,f,g,h,i;if(!A5g){c=Ck(b);d=c.data.length;e=new Ig;f=0+d|0;e.v=(-1);e.y=d;e.g=d;e.h=0;e.g=f;e.iO=0;e.kk=0;e.it=c;return e;}b=b*4|0;if(b>=0){e=new Ch;c=BF(b);e.v=(-1);e.y=b;e.g=b;B6();e.bh=A98;e.bl=0;e.U=c;e.h=0;e.g=b;e.b4=1;e.bt=0;e.bh=CU();return Fr(e);}e=new Bh;g=new P;g.b=D(16);I(g,g.a,B(486));O(g,g.a,b,10);h=new N;c=g.b;d=g.a;Q();i=D(d);h.e=i;M(c,0,i,0,d);e.c=1;e.d=1;e.f=h;H(e);}
var ACo=G();
var HP=G(Ec);
function ANO(a){a.h=0;a.g=a.y;a.v=(-1);return a;}
function AP0(a,b){BS(a,b);return a;}
function AUI(a){a.h=0;a.g=a.y;a.v=(-1);return a;}
var En=G(Ec);
function IO(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.dO()){e=new DD;e.c=1;e.d=1;H(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new F3;e.c=1;e.d=1;H(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Y;j=new P;j.b=D(16);I(j,j.a,B(549));O(j,j.a,i,10);I(j,j.a,B(473));O(j,j.a,f,10);k=new N;b=j.b;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.kX(g,h[c]);i=i+1|0;g=l;c=f;}a.h=a.h+d|0;return a;}e=new Y;j=new P;j.b=D(16);I(j,j.a,B(474));O(j,j.a,d,10);I(j,j.a,B(475));k=
new N;b=j.b;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}}b=b.data;e=new Y;d=b.length;j=new P;j.b=D(16);I(j,j.a,B(476));O(j,j.a,c,10);I(j,j.a,B(470));O(j,j.a,d,10);d=j.a;Bd(j,d,d+1|0);h=j.b;h.data[d]=41;k=new N;d=j.a;Q();b=D(d);k.e=b;M(h,0,b,0,d);e.c=1;e.d=1;e.f=k;H(e);}
function AL2(a){a.h=0;a.g=a.y;a.v=(-1);return a;}
function AQ9(a){a.g=a.h;a.h=0;a.v=(-1);return a;}
function AKa(a,b){Cj(a,b);return a;}
function AUS(a,b){BS(a,b);return a;}
function AKl(a){a.g=a.h;a.h=0;a.v=(-1);return a;}
function APF(a){a.h=0;a.g=a.y;a.v=(-1);return a;}
function ANc(a,b){Cj(a,b);return a;}
function AO_(a,b){BS(a,b);return a;}
var OW=G(0);
function Kn(){var a=this;C.call(a);a.wq=null;a.eo=0;a.ei=0;a.hC=null;a.iT=null;a.w7=0;a.g$=0;}
var BaU=0;function AC1(a,b,c,d){var e=new Kn();ARL(e,a,b,c,d);return e;}
function ARL(a,b,c,d,e){a.eo=0;a.ei=0;a.g$=0;a.wq=b;a.iT=c;a.hC=d;a.w7=e;if(c!==null){b=SV(a,c);a.iT=b;c=b.bD;a.eo=c===null?b.c5:c.cN;a.ei=c===null?b.c6:c.cM;if(d===null){if(c===null){HT();b=A$a;}else b=HD(c.ch);a.hC=b;}}}
function Q0(a){var b,c;if(a.g$){b=new Bb;b.c=1;b.d=1;b.f=B(550);H(b);}if(a.iT===null){b=SV(a,Pn(a.wq));a.iT=b;c=b.bD;a.eo=c===null?b.c5:c.cN;a.ei=c===null?b.c6:c.cM;if(a.hC===null){if(c===null){HT();b=A$a;}else b=HD(c.ch);a.hC=b;}}a.g$=1;}
function SV(a,b){var c,d,e,f,g,h,i,j;a:{if(A99===null&&BaU){c=b.bD;d=c===null?b.c5:c.cN;e=c===null?b.c6:c.cM;f=LV(d);g=LV(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new Hj;c=b.bD;if(c===null){HT();c=A$a;}else c=HD(c.ch);I5(h,f,g,c);c=h.bD;if(c===null){FE(b);J3(h,b.fk,0,0,d,e,0,0,d,e);}else{i=b.bD.cG;j=c.cG;MG(i,j,0,0,d,e,0,0,d,e);}if(b.is){c=new Bb;c.c=1;c.d=1;c.f=B(47);H(c);}IU();Ii(A$d,b.j1);c=b.bD;if(c!==null)Mz(c.cG);b.is=1;return h;}
function Hj(){var a=this;C.call(a);a.c5=0;a.c6=0;a.fk=null;a.cw=null;a.j1=0;a.h2=null;a.uU=0;a.uW=0;a.uY=0;a.uX=0.0;a.ld=null;a.kj=null;a.uA=null;a.BX=null;a.hB=null;a.i7=null;a.rS=0;a.bD=null;a.is=0;}
var BaV=null;function R2(){R2=V(Hj);ALq();}
function Pn(a){var b=new Hj();T2(b,a);return b;}
function BaW(a,b,c){var d=new Hj();I5(d,a,b,c);return d;}
function T2(a,b){var c,d,e,f,g,h,i,j;R2();a.uU=255;a.uW=255;a.uY=255;a.ld=Mo(255,255,255,a.uX);Hy();a.kj=BaX;XK();a.uA=BaY;a.rS=0;c=b.cY;d=b.iX.ji;e=CA(d,c);d=e<0?null:d.cs.data[e];if(A9u.en.qr){f=ANh(d.dS);a.bD=A2U(f,0,f.data.length,0);Ls(a,(-1),(-1),null,null);}else{Ls(a,(-1),(-1),d.ow,null);if(a.hB===null){d=new Bb;g=b.cY;b=new P;b.b=D(16);I(b,b.a,B(551));e=b.a;if(g===null)g=B(2);I(b,e,g);I(b,b.a,B(552));h=new N;i=b.b;j=b.a;Q();f=D(j);h.e=f;M(i,0,f,0,j);d.c=1;d.d=1;d.f=h;H(d);}}}
function I5(a,b,c,d){R2();a.uU=255;a.uW=255;a.uY=255;a.ld=Mo(255,255,255,a.uX);Hy();a.kj=BaX;XK();a.uA=BaY;a.rS=0;Ls(a,b,c,null,null);}
function Ls(a,b,c,d,e){var f,g,h;if(e!==null){a.i7=e;a.c5=e.getWidth();a.c6=e.getHeight();}else if(d===null){a.c5=b;a.c6=c;}else{a.hB=d;a.c5=d.width;a.c6=d.height;}if(!A5g){f=BF(4);g=f.data.length;d=new Ch;h=0+g|0;d.v=(-1);d.y=g;d.g=g;B6();d.bh=A98;d.bl=0;d.U=f;d.h=0;d.g=h;d.b4=0;d.bt=0;}else{d=new Ch;f=BF(4);d.v=(-1);d.y=4;d.g=4;B6();d.bh=A98;d.bl=0;d.U=f;d.h=0;d.g=4;d.b4=1;d.bt=0;d.bh=CU();}a.h2=d;IU();c=A_m;A_m=c+1|0;a.j1=c;VK(d,0,c);B$(A$d,a.j1,a);}
function Wh(a){var b,c;ID();b=A$1.ee.document.createElement("canvas");a.fk=b;c=a.c5;b.width=c;b=a.fk;c=a.c6;b.height=c;b=a.fk.getContext("2d");a.cw=b;R2();HJ();c=$rt_ustr(A$c.t);b.globalCompositeOperation=c;}
function Mo(b,c,d,e){var f,g,h,i,j;R2();f=new P;f.b=D(16);I(f,f.a,B(553));O(f,f.a,b,10);g=f.a;Bd(f,g,g+1|0);f.b.data[g]=44;O(f,f.a,c,10);c=f.a;Bd(f,c,c+1|0);f.b.data[c]=44;O(f,f.a,d,10);c=f.a;Bd(f,c,c+1|0);f.b.data[c]=44;Dz(f,f.a,e);d=f.a;Bd(f,d,d+1|0);h=f.b;h.data[d]=41;i=new N;c=f.a;Q();j=D(c);i.e=j;M(h,0,j,0,c);return i;}
function FE(a){var b,c;if(a.fk===null){Wh(a);if(a.hB!==null){b=a.cw;HJ();c=$rt_ustr(BaZ.db);b.globalCompositeOperation=c;b=a.cw;c=a.hB;b.drawImage(c,0.0,0.0);b=a.cw;c=$rt_ustr(A$c.db);b.globalCompositeOperation=c;}if(a.i7!==null){c=a.cw;HJ();b=$rt_ustr(BaZ.db);c.globalCompositeOperation=b;b=a.cw;c=a.i7;b.drawImage(c,0.0,0.0);b=a.cw;c=$rt_ustr(A$c.db);b.globalCompositeOperation=c;}}}
function XZ(a,b,c,d,e,f,g,h,i,j){var k,l,m;k=a.bD;if(k===null){FE(b);J3(a,b.fk,c,d,e,f,g,h,i,j);}else{l=b.bD.cG;m=k.cG;MG(l,m,c,d,e,f,g,h,i,j);}}
function Ku(a){var b;b=a.bD;if(b===null)return a.c5;return b.cN;}
function KE(a){var b;b=a.bD;if(b===null)return a.c6;return b.cM;}
function QU(a){var b,c;if(a.is){b=new Bb;b.c=1;b.d=1;b.f=B(47);H(b);}IU();Ii(A$d,a.j1);c=a.bD;if(c!==null)Mz(c.cG);a.is=1;}
function Xa(a){var b,c,d,e,f,g,h;b=a.bD;if(b===null)return 6408;a:{c=b.ch;switch(c){case 1:break;case 2:c=6410;break a;case 3:case 5:c=6407;break a;case 4:case 6:c=6408;break a;default:b=new Bb;d=new P;d.b=D(16);CR(d,d.a,C2(B(48)));O(d,d.a,c,10);e=new N;f=d.b;g=d.a;h=D(g);e.e=h;M(f,0,h,0,g);b.c=1;b.d=1;b.f=e;H(b);}c=6406;}return c;}
function Wl(a){var b,c,d,e,f,g,h;b=a.bD;if(b===null)return 6408;a:{c=b.ch;switch(c){case 1:break;case 2:c=6410;break a;case 3:case 5:c=6407;break a;case 4:case 6:c=6408;break a;default:b=new Bb;d=new P;d.b=D(16);I(d,d.a,B(48));O(d,d.a,c,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);b.c=1;b.d=1;b.f=e;H(b);}c=6406;}return c;}
function Yq(a){var b,c,d,e,f,g,h;b=a.bD;if(b===null)return 5121;a:{c=b.ch;switch(c){case 1:case 2:case 3:case 4:break;case 5:c=33635;break a;case 6:c=32819;break a;default:b=new Bb;d=new P;d.b=D(16);I(d,d.a,B(48));O(d,d.a,c,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);b.c=1;b.d=1;b.f=e;H(b);}c=5121;}return c;}
function AES(a){return a.h2;}
function TQ(a,b){var c,d;a.kj=b;c=a.bD;if(c===null){FE(a);b=a.cw;HJ();c=$rt_ustr(A$c.t);b.globalCompositeOperation=c;}else{Hy();d=b!==A$b?1:0;SA(c.cG,d);}}
function J3(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v;FE(a);k=a.kj;Hy();if(k===A$b){a:{l=a.cw;k=$rt_ustr(BaV);l.fillStyle=k;l=a.cw;k=$rt_ustr(BaV);l.strokeStyle=k;l=a.cw;k="destination-out";l.globalCompositeOperation=k;a.cw.beginPath();m=a.cw;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);ACC();l=Ba0;FE(a);AZh();switch(Ba1.data[l.q]){case 1:break;case 2:a.cw.stroke();break a;default:break a;}a.cw.fill();}a.cw.closePath();r=a.cw;l=$rt_ustr(a.ld);r.fillStyle=l;r=a.cw;k=$rt_ustr(a.ld);r.strokeStyle=k;r=a.cw;HJ();l=$rt_ustr(A$c.db);r.globalCompositeOperation
=l;}if(e&&f&&i&&j){l=a.cw;n=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;l.drawImage(b,n,o,p,q,s,t,u,v);}a.BX=null;}
function ALq(){BaV=Mo(255,255,255,1.0);}
var Lx=G();
var ADC=G();
var FU=G(BG);
var A$b=null;var BaX=null;var Ba2=null;function Hy(){Hy=V(FU);ASV();}
function ASV(){var b,c;b=new FU;Hy();b.t=B(554);b.q=0;A$b=b;c=new FU;c.t=B(555);c.q=1;BaX=c;Ba2=T(FU,[b,c]);}
var FH=G(BG);
var Ba3=null;var BaY=null;var Ba4=null;function XK(){XK=V(FH);AWl();}
function AWl(){var b,c;b=new FH;XK();b.t=B(556);b.q=0;Ba3=b;c=new FH;c.t=B(557);c.q=1;BaY=c;Ba4=T(FH,[b,c]);}
function Hx(){var a=this;Lx.call(a);a.iX=null;a.cY=null;a.ja=null;}
function XP(a,b,c){var d=new Hx();Jx(d,a,b,c);return d;}
function Jx(a,b,c,d){var e,f,g,h,i,j;JJ();if(d!==A9q&&d!==Baw&&d!==Ba5){b=new Bb;c=new P;c.b=D(16);I(c,c.a,B(558));I(c,c.a,d===null?B(2):d.t);I(c,c.a,B(559));d=new N;e=c.b;f=c.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);b.c=1;b.d=1;b.f=d;H(b);}a.iX=b;b=Mq(c,B(560),B(100));if(Ri(b,B(100))){g=b.e;h=g.data.length;i=h-1|0;j=Bo(0,i);if(j>0){b=new Y;b.c=1;b.d=1;H(b);}if(!j)b=A9m;else if(i!=h){b=new N;i=i-0|0;e=D(i);b.e=e;M(g,0,e,0,i);}}a.cY=b;a.ja=d;}
function TN(a){return a.cY;}
function AF_(a){var b,c,d,e,f,g;b=a.cY;c=EX(b,47,b.e.data.length-1|0);if(c<0)b=a.cY;else{b=a.cY;c=c+1|0;d=b.e;e=d.data.length;f=Bo(c,e);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A9m;else if(!(!c&&e==e)){b=new N;f=e-c|0;g=D(f);b.e=g;M(d,c,g,0,f);}}e=EX(b,46,b.e.data.length-1|0);if(e==(-1))return b;f=Bo(0,e);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A9m;else{g=b.e;if(e!=g.data.length){b=new N;f=e-0|0;d=D(f);b.e=d;M(g,0,d,0,f);}}return b;}
function Xr(a){var b,c,d,e,f,g,h,i;b=a.ja;JJ();if(b===Ba5){if(Ba6===null){c=new Nk;b=new I2;d=new Rv;e=A9u.en.yP;d.nC=$rt_globals.window.localStorage;d.nk=e;AZT();b.hK=d;c.wD=b;b=new I2;d=new Sc;e=new BP;e.bj=1;e.r=Bj(C,16);d.wJ=e;d.oK=EE(16,0.800000011920929);b.hK=d;c.nI=b;Ba6=c;}b=Ba6;return !AFw(b.nI,a)?PG(b.wD,a):PG(b.nI,a);}c=UL(a.iX,a.cY);if(c!==null)return c;c=new Bb;b=a.cY;d=new P;d.b=D(16);f=d.a;if(b===null)b=B(2);I(d,f,b);I(d,d.a,B(561));b=new N;g=d.b;h=d.a;Q();i=D(h);b.e=i;M(g,0,i,0,h);c.c=1;c.d=
1;c.f=b;H(c);}
function TK(a,b){var c,d,e,f,g,h,i,j,k;c=new Hx;d=a.iX;e=a.cY;if(e.e.data.length?0:1)e=B(42);else{f=!Ri(e,B(100))?B(100):B(42);g=new P;g.b=D(16);I(g,g.a,e);I(g,g.a,f);e=new N;h=g.b;i=g.a;j=D(i);e.e=j;M(h,0,j,0,i);}g=new P;g.b=D(16);I(g,g.a,e);k=g.a;if(b===null)b=B(2);I(g,k,b);b=new N;j=g.b;i=g.a;Q();h=D(i);b.e=h;M(j,0,h,0,i);Jx(c,d,b,a.ja);return c;}
function TS(a){var b,c,d,e,f,g;b=a.cY;c=N2(b,B(100),b.e.data.length);d=B(42);if(c>0){d=a.cY;e=Bo(0,c);if(e>0){d=new Y;d.c=1;d.d=1;H(d);}if(!e)d=A9m;else{f=d.e;if(c!=f.data.length){d=new N;e=c-0|0;g=D(e);d.e=g;M(f,0,g,0,e);}}}return XP(a.iX,d,a.ja);}
function AX$(a){return a.cY;}
function AC9(){var a=this;C.call(a);a.cG=0;a.cN=0;a.cM=0;a.ch=0;a.iM=null;a.kA=null;}
function A2U(a,b,c,d){var e=new AC9();ARO(e,a,b,c,d);return e;}
function A1$(a,b,c){var d=new AC9();AYa(d,a,b,c);return d;}
function AOw(b){var c,d,e,f,g,h;switch(b){case 1:break;case 2:return 6410;case 3:case 5:return 6407;case 4:case 6:return 6408;default:c=new Bb;d=new P;d.b=D(16);I(d,d.a,B(48));O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}return 6406;}
function AOH(b){var c,d,e,f,g,h;switch(b){case 1:case 2:case 3:case 4:break;case 5:return 33635;case 6:return 32819;default:c=new Bb;d=new P;d.b=D(16);I(d,d.a,B(48));O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}return 5121;}
function ARO(a,b,c,d,e){var f,g,h,i,j,k;f=Bc(4);a.iM=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new $rt_globals.Array(i);j=0;while(j<i){k=b[j];j;h[j]=k;j=j+1|0;}}a.kA=AWL(g,h,c,d);b=a.iM.data;a.cG=b[0];a.cN=b[1];a.cM=b[2];c=b[3];a.ch=c;if(e&&e!=c)AAU(a,e);}
function AYa(a,b,c,d){var e;e=Bc(4);a.iM=e;a.kA=ANC(e.data,b,c,d);e=a.iM.data;a.cG=e[0];a.cN=e[1];a.cM=e[2];a.ch=e[3];}
function AAU(a,b){var c,d,e,f,g;c=A1$(a.cN,a.cM,b);SA(c.cG,0);d=a.cN;e=a.cM;f=a.cG;g=c.cG;MG(f,g,0,0,d,e,0,0,d,e);Mz(a.cG);a.cG=c.cG;a.ch=c.ch;a.cM=c.cM;a.iM=c.iM;a.kA=c.kA;a.cN=c.cN;}
function AWL(b,c,d,e){var cBufferSize=c.length*$rt_globals.Uint8Array.BYTES_PER_ELEMENT;var cBuffer=$rt_globals.Gdx._malloc(cBufferSize);$rt_globals.Gdx.writeArrayToMemory(c,cBuffer);var pixmap=$rt_globals.Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);$rt_globals.Gdx._free(cBuffer);var pixels=$rt_globals.Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=$rt_globals.Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]
=height;b[3]=format;var bytesPerPixel=$rt_globals.Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=$rt_globals.Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
function ANC(b,c,d,e){var pixmap=$rt_globals.Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=$rt_globals.Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=$rt_globals.Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=$rt_globals.Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=$rt_globals.Gdx.HEAPU8.slice(startIndex,
endIndex);return newArray;}
function Mz(b){var nativeObject=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_free(nativeObject);}
function MG(b,c,d,e,f,g,h,i,j,k){var nativeObjectSrc=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);var nativeObjectDst=$rt_globals.Gdx.wrapPointer(c,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);}
function SA(b,c){var nativeObject=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);}
var H3=G(HP);
function AOu(a){var b,c;b=a.h;if(b<a.g){a.h=b+1|0;return a.kE(b);}c=new Ie;c.c=1;c.d=1;H(c);}
function EA(a,b){var c,d;if(a.dO()){c=new DD;c.c=1;c.d=1;H(c);}d=a.h;if(d<a.g){a.h=d+1|0;a.ln(d,b);return a;}c=new F3;c.c=1;c.d=1;H(c);}
function Fq(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.kE(b);c=new Y;d=a.g;e=new P;e.b=D(16);I(e,e.a,B(487));O(e,e.a,b,10);I(e,e.a,B(470));O(e,e.a,d,10);d=e.a;Bd(e,d,d+1|0);f=e.b;f.data[d]=41;g=new N;d=e.a;Q();h=D(d);g.e=h;M(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function Tg(a,b,c){var d,e,f,g,h;if(a.dO()){d=new DD;d.c=1;d.d=1;H(d);}if(b>=0&&b<a.g){a.ln(b,c);return a;}d=new Y;c=a.g;e=new P;e.b=D(16);I(e,e.a,B(487));O(e,e.a,b,10);I(e,e.a,B(470));O(e,e.a,c,10);c=e.a;Bd(e,c,c+1|0);f=e.b;f.data[c]=41;g=new N;c=e.a;Q();h=D(c);g.e=h;M(f,0,h,0,c);d.c=1;d.d=1;d.f=g;H(d);}
function ALG(a){return a.dO();}
function GH(){var a=this;H3.call(a);a.h6=0;a.hc=0;a.gX=null;}
function AU1(a,b){return a.gX.data[b+a.hc|0];}
function AT8(a,b,c){a.gX.data[b+a.hc|0]=c;}
function AGP(a){return a.h6;}
var HW=G(En);
function Ox(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.qV(b);c=new Y;d=a.g;e=new P;e.b=D(16);I(e,e.a,B(487));O(e,e.a,b,10);I(e,e.a,B(470));O(e,e.a,d,10);d=e.a;Bd(e,d,d+1|0);f=e.b;f.data[d]=41;g=new N;d=e.a;Q();h=D(d);g.e=h;M(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function MO(a,b,c){var d,e,f,g,h,i;if(a.dO()){d=new DD;d.c=1;d.d=1;H(d);}if(b>=0&&b<a.g){a.kX(b,c);return a;}d=new Y;e=a.g;f=new P;f.b=D(16);I(f,f.a,B(487));O(f,f.a,b,10);I(f,f.a,B(470));O(f,f.a,e,10);e=f.a;Bd(f,e,e+1|0);g=f.b;g.data[e]=41;h=new N;e=f.a;Q();i=D(e);h.e=i;M(g,0,i,0,e);d.c=1;d.d=1;d.f=h;H(d);}
function AR6(a){return a.dO();}
function Ig(){var a=this;HW.call(a);a.kk=0;a.iO=0;a.it=null;}
function ANl(a,b){return a.it.data[b+a.iO|0];}
function AMJ(a,b,c){a.it.data[b+a.iO|0]=c;}
function AVb(a){return a.kk;}
var Xq=G();
function CX(){BG.call(this);this.fd=0;}
var A9s=null;var Ba7=null;var Ba8=null;var Ba9=null;var Ba$=null;var Ba_=null;var Bba=null;var Bbb=null;function NN(){NN=V(CX);AH0();}
function AH0(){var b,c,d,e,f,g,h;b=new CX;NN();b.t=B(562);b.q=0;b.fd=9728;A9s=b;c=new CX;c.t=B(563);c.q=1;c.fd=9729;Ba7=c;d=new CX;d.t=B(564);d.q=2;d.fd=9987;Ba8=d;e=new CX;e.t=B(565);e.q=3;e.fd=9984;Ba9=e;f=new CX;f.t=B(566);f.q=4;f.fd=9985;Ba$=f;g=new CX;g.t=B(567);g.q=5;g.fd=9986;Ba_=g;h=new CX;h.t=B(568);h.q=6;h.fd=9987;Bba=h;Bbb=T(CX,[b,c,d,e,f,g,h]);}
function Fd(){BG.call(this);this.jI=0;}
var Bbc=null;var A9t=null;var Bbd=null;var Bbe=null;function Qe(){Qe=V(Fd);ATi();}
function ATi(){var b,c,d;b=new Fd;Qe();b.t=B(569);b.q=0;b.jI=33648;Bbc=b;c=new Fd;c.t=B(570);c.q=1;c.jI=33071;A9t=c;d=new Fd;d.t=B(571);d.q=2;d.jI=10497;Bbd=d;Bbe=T(Fd,[b,c,d]);}
var VA=G();
function AX3(a,b){b=a.lq(b);BB();return b===null?null:b instanceof $rt_objcls()&&b instanceof DB?b.Q:b;}
function AIn(a){return a.FE();}
var DH=G(BR);
var A5R=null;var A5S=null;var A5T=null;function AIT(){A5R=new DH;A5S=new DH;A5T=new DH;}
var DG=G(DH);
var A5U=null;var A5V=null;var A5W=null;function AUO(){A5U=new DG;A5V=new DG;A5W=new DG;}
var D9=G(DG);
var A5X=null;var A5Y=null;var A5Z=null;function AAD(a,b){var c,d;c=R(a.u);d=b===null?0:R(b.u);return PI(c,d)?1:0;}
function AMN(){A5X=new D9;A5Y=new D9;A5Z=new D9;}
function PI(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxScene);var returnedJSObj=jsObj.addActor(c);return returnedJSObj;}
function ADf(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxScene);jsObj.removeActor(c);}
function XQ(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxScene);var returnedJSObj=jsObj.simulate(c);return returnedJSObj;}
function AAq(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxScene);var returnedJSObj=jsObj.fetchResults(c);return returnedJSObj;}
var Hf=G(BR);
function ALh(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxBase);jsObj.release();}
var Dm=G(Hf);
var A50=null;var A51=null;var A52=null;function AQc(){A50=new Dm;A51=new Dm;A52=new Dm;}
var DV=G(Dm);
var A53=null;var A54=null;var A55=null;function ANI(){A53=new DV;A54=new DV;A55=new DV;}
var D8=G(DV);
var A56=null;var A57=null;var A58=null;function AGL(){A56=new D8;A57=new D8;A58=new D8;}
function Ic(){var a=this;H3.call(a);a.ij=null;a.od=0;a.hA=0;}
function ALx(a){return a.od;}
var Nr=G(Ic);
function AJY(a,b){var c;c=a.ij.U.data;b=a.hA+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;}
function AGO(a,b,c){var d;d=a.ij.U.data;b=a.hA+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;}
var R7=G(Ic);
function AOh(a,b){var c;c=a.ij.U.data;b=a.hA+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;}
function AHF(a,b,c){var d;d=a.ij.U.data;b=a.hA+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;}
function G$(){var a=this;HW.call(a);a.gm=null;a.qT=0;a.hp=0;}
function AVg(a){return a.qT;}
function ANu(a){return a.gm.U.data;}
var Nl=G(G$);
function ALC(a,b){var c;c=a.gm.U.data;b=a.hp+(b*4|0)|0;return $rt_intBitsToFloat((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);}
function AVK(a,b,c){var d,e;d=($rt_globals.isNaN(c)?1:0)?2143289344:$rt_floatToRawIntBits(c);e=a.gm.U.data;b=a.hp+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;}
var Ol=G(G$);
function AP2(a,b){var c;c=a.gm.U.data;b=a.hp+(b*4|0)|0;return $rt_intBitsToFloat(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);}
function ATS(a,b,c){var d,e;d=($rt_globals.isNaN(c)?1:0)?2143289344:$rt_floatToRawIntBits(c);e=a.gm.U.data;b=a.hp+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;}
var Gl=G(BJ);
var DD=G(Gl);
function CF(){var a=this;C.call(a);a.x=BI;a.bP=0;a.zC=0;a.tw=0;}
var Bbf=0;var Bbg=0;function AWC(a,b,c){a.bP=c;a.x=b;}
function AQR(a){return a.x;}
function MW(a){var b,c,d,e,f;if(a.tw>0&&Bbf&&Bbg){b=ACX(a);c=a.tw;d=new P;d.b=D(16);I(d,d.a,B(572));e=d.a;if(b===null)b=B(2);I(d,e,b);I(d,d.a,B(573));O(d,d.a,c,10);I(d,d.a,B(574));f=d.b;e=d.a;Q();M(f,0,D(e),0,e);}if(a.bP){a.zC=1;a.x=BI;}}
function ACX(a){var b,c,d,e,f,g,h,i,j;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new B9;c.G=b;d=c;b.classObject=d;}}c=LJ(c);e=a.x;f=a.bP;b=new P;b.b=D(16);g=b.a;if(c===null)c=B(2);I(b,g,c);h=b.a;Bd(b,h,h+1|0);b.b.data[h]=40;KF(b,b.a,e,10);h=b.a;Bd(b,h,h+1|0);b.b.data[h]=44;I(b,b.a,!f?B(503):B(504));g=b.a;Bd(b,g,g+1|0);i=b.b;i.data[g]=41;c=new N;g=b.a;Q();j=D(g);c.e=j;M(i,0,j,0,g);return c;}
function XF(){Bbf=0;Bbg=1;}
var Kb=G(CF);
var Bat=null;var Bav=null;function AHp(b,c,d,e,f){var io=$rt_globals.imgui.ImGui.prototype.GetIO();(io.get_DisplaySize()).set_x(c);(io.get_DisplaySize()).set_y(d);if(c>0&&d>0){(io.get_DisplayFramebufferScale()).set_x(e/c);(io.get_DisplayFramebufferScale()).set_y(f/d);}io.set_DeltaTime=b;$rt_globals.imgui.ImGui.prototype.NewFrame();}
function ED(){var returnedJSObj=$rt_globals.imgui.ImGui.prototype.GetIO();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.imgui.getPointer(returnedJSObj);}
function AWO(){var returnedJSObj=$rt_globals.imgui.ImGui.prototype.GetDrawData();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.imgui.getPointer(returnedJSObj);}
function AWG(b){var returnedJSObj=$rt_globals.imgui.ImGui.prototype.Begin(b);return returnedJSObj;}
function Qm(b){var returnedJSObj=$rt_globals.imgui.ImGui.prototype.IsWindowFocused(b);return returnedJSObj;}
function ZU(b){var returnedJSObj=$rt_globals.imgui.ImGui.prototype.Button(b);return returnedJSObj;}
function AR1(b,c){var returnedJSObj=$rt_globals.imgui.ImGui.prototype.Checkbox(b,c);return returnedJSObj;}
function AM8(b,c){var returnedJSObj=$rt_globals.imgui.ImGui.prototype.InputInt(b,c);return returnedJSObj;}
var Q3=G(0);
function K7(){var a=this;C.call(a);a.oW=null;a.j7=null;a.ef=0;a.kI=null;a.u9=0.0;a.vC=0.0;a.ho=0;a.x9=null;a.oz=null;a.mJ=null;a.qy=0;a.ub=0;a.sc=0;a.wp=0;a.ra=0;a.hq=null;a.jM=null;a.C5=0;a.EV=null;a.Gk=0.0;a.k0=0;a.nS=0;a.qP=0;}
var Bbh=null;function Ys(){Ys=V(K7);AUs();}
function Bbi(a,b){var c=new K7();NJ(c,a,b);return c;}
function NJ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;Ys();a.ef=0;a.kI=null;a.u9=0.0;a.vC=0.0;a.ho=0;a.x9=ET();a.oz=ET();a.mJ=ET();a.qy=0;a.ub=770;a.sc=771;a.wp=770;a.ra=771;a.jM=null;d=new Bq;Et();d.cd=1.0;d.cc=1.0;d.cb=1.0;d.ca=1.0;Dc(d);a.EV=d;a.Gk=A9D;a.k0=0;a.nS=0;a.qP=0;if(b>8191){c=new Bh;d=new P;d.b=D(16);I(d,d.a,B(575));O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}if(A$5===null)i=Bbh;else{L2();i=BaM;}j=new IN;k=b*4|0;l=b*6|0;f=Bj(Dj,3);h=f.data;d=new Dj;d.e0=1;d.cU
=2;d.dg=5126;d.di=0;d.c3=B(505);d.fi=0;d.fg=Dt(1);h[0]=d;d=new Dj;d.e0=4;d.cU=4;d.dg=5121;d.di=1;d.c3=B(506);d.fi=0;d.fg=Dt(4);h[1]=d;d=new Dj;d.e0=16;d.cU=2;d.dg=5126;d.di=0;d.c3=B(507);d.fi=0;d.fg=Dt(16);h[2]=d;MH(j,i,0,k,l,AS2(f));a.oW=j;i=a.oz;m=A97.cv.width;n=A97.cv.height;ADN(i,0.0,0.0+m,0.0,0.0+n,0.0,1.0);a.j7=Ck(b*20|0);h=Rj(l);f=h.data;o=0;p=0;while(p<l){f[p]=o;f[p+1|0]=(o+1|0)<<16>>16;b=p+2|0;g=(o+2|0)<<16>>16;f[b]=g;f[p+3|0]=g;f[p+4|0]=(o+3|0)<<16>>16;f[p+5|0]=o;p=p+6|0;o=(o+4|0)<<16>>16;}a.oW.c7.qm(h,
0,f.length);if(c!==null)a.hq=c;else{a.hq=XT();a.C5=1;}}
function XT(){var b,c,d,e,f,g,h;Ys();b=VD(B(576),B(577));if(b.eg)return b;c=new Bh;d=new P;d.b=D(16);I(d,d.a,B(578));if(!b.eg)e=b.dK;else{e=A99.gP(b.cO);b.dK=e;}I(d,d.a,e);b=new N;f=d.b;g=d.a;Q();h=D(g);b.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=b;H(c);}
function AB8(a){var b,c;if(a.ho){b=new BK;b.c=1;b.d=1;b.f=B(579);H(b);}a.k0=0;A9r.hR(0);c=a.jM;if(c!==null)c.m6();else{c=a.hq;b=A99;if(c.ba){B_(c,c.bV,c.bT);c.ba=0;}b.jz(c.cO);}Vg(a);a.ho=1;}
function YE(a){var b,c;if(!a.ho){b=new BK;b.c=1;b.d=1;b.f=B(580);H(b);}if(a.ef>0)IG(a);a.kI=null;a.ho=0;c=A9r;c.hR(1);if(a.qy?0:1)c.dG(3042);}
function Ws(a,b,c,d,e){var f,g;if(!a.ho){b=new BK;b.c=1;b.d=1;b.f=B(581);H(b);}f=a.j7.data.length;if(b!==a.kI){IG(a);a.kI=b;b=b.em;a.u9=1.0/b.eo;a.vC=1.0/b.ei;g=f;}else{g=f-a.ef|0;if(!g){IG(a);g=f;}}if(g>=e)g=e;M(c,d,a.j7,a.ef,g);a.ef=a.ef+g|0;e=e-g|0;while(e>0){d=d+g|0;IG(a);g=f>=e?e:f;M(c,d,a.j7,0,g);a.ef=a.ef+g|0;e=e-g|0;}}
function IG(a){var b,c,d,e,f,g;b=a.ef;if(!b)return;a.k0=a.k0+1|0;a.nS=a.nS+1|0;c=b/20|0;if(c>a.qP)a.qP=c;b=c*6|0;d=a.kI;A9r.fM(d.eh,d.iu);d=a.oW;e=a.j7;f=a.ef;d.eN.iy(e,0,f);g=d.c7.ox(1);BS(g,0);Cj(g,b);if(a.qy)A9r.dG(3042);else{A9r.d8(3042);c=a.ub;if(c!=(-1))A9r.lA(c,a.sc,a.wp,a.ra);}g=a.jM;if(g===null)g=a.hq;JH(d,g,4,0,b,d.jX);a.ef=0;}
function Vg(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;OT(Iv(a.mJ,a.oz.ct),a.x9);b=a.jM;if(b!==null){b.Pb(B(582),a.mJ);a.jM.JB(B(509),0);}else{b=a.hq;c=a.mJ;Lh();d=GN(b,B(582),BaN);e=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}f=c.ct;b=e.ds;g=e.d6;if(!g)b=!b.O?null:b.M;else{h=b.K;i=R(Bi(Bf(S(g),F(2135587861, 2654435769)),b.P));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==g)break;i=(i+1|0)&b.N;}}b=i<0?null:b.L.data[i];}b=b;if(!d)b=!b.O?null:b.M;else{h=b.K;j=R(Bi(Bf(S(d),F(2135587861, 2654435769)),b.P));b:{while
(true){i=h.data[j];if(!i){j= -(j+1|0)|0;break b;}if(i==d)break;j=(j+1|0)&b.N;}}b=j<0?null:b.L.data[j];}BB();k=b===null?null:b.Q;b=e.l;e="uniformMatrix4fv";c=!!0;if(f===null)l=null;else{f=f.data;m=f.length;l=new $rt_globals.Array(m);j=0;while(j<m){n=f[j];j;l[j]=n;j=j+1|0;}}b[e](k,c,l);b=a.hq;c=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}c.kb(GN(b,B(509),BaN),0);}}
function AUs(){L2();Bbh=BaL;}
var Ff=G(BR);
var Bbj=null;var Bbk=null;var Bbl=null;function W3(a){return TT(R(a.u));}
function Yf(a,b){Gp(R(a.u),b);}
function ACm(a){return AEZ(R(a.u));}
function To(a,b){HL(R(a.u),b);}
function AE0(a){return ADw(R(a.u));}
function Nv(a,b){H4(R(a.u),b);}
function AAE(){Bbj=new Ff;Bbk=new Ff;Bbl=new Ff;}
function ABM(b,c,d){var jsObj=new $rt_globals.physx.PxVec3(b,c,d);return $rt_globals.physx.getPointer(jsObj);}
function TT(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);return jsObj.get_x();}
function Gp(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);jsObj.set_x(c);}
function AEZ(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);return jsObj.get_y();}
function HL(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);jsObj.set_y(c);}
function ADw(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);return jsObj.get_z();}
function H4(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxVec3);jsObj.set_z(c);}
var FQ=G(BR);
var Bbm=null;var Bbn=null;var Bbo=null;function A0l(a,b,c,d){var e=new FQ();VN(e,a,b,c,d);return e;}
function VN(a,b,c,d,e){var f;f=S(ADm(b,c,d,e));a.cj=1;a.u=f;}
function ABd(){Bbm=new FQ;Bbn=new FQ;Bbo=new FQ;}
function ADm(b,c,d,e){var jsObj=new $rt_globals.physx.PxFilterData(b,c,d,e);return $rt_globals.physx.getPointer(jsObj);}
var EW=G(BR);
var Bbp=null;var Bbq=null;var Bbr=null;function Uq(){Bbp=new EW;Bbq=new EW;Bbr=new EW;}
var Fs=G(EW);
var Bbs=null;var Bbt=null;var Bbu=null;function AYH(a,b,c){var d=new Fs();AE6(d,a,b,c);return d;}
function AE6(a,b,c,d){var e;e=S(NP(b,c,d));a.cj=1;a.u=e;}
function AE3(){Bbs=new Fs;Bbt=new Fs;Bbu=new Fs;}
function NP(b,c,d){var jsObj=new $rt_globals.physx.PxBoxGeometry(b,c,d);return $rt_globals.physx.getPointer(jsObj);}
function V6(){var a=this;F$.call(a);a.cC=null;a.e9=null;a.y0=0;a.yc=0;a.rP=0;a.x7=0;a.sC=0;a.sd=0;a.vd=0;a.gl=0.0;a.ob=0.0;a.dk=null;}
function AY$(a){var b=new V6();ARr(b,a);return b;}
function ARr(a,b){var c;a.e9=A3D(51,0.800000011920929);a.y0=29;a.yc=32;a.rP=51;a.x7=47;a.sC=45;a.sd=33;a.vd=1;a.gl=5.0;a.ob=0.5;c=new Bm;Cu();a.dk=c;a.cC=b;}
function AQf(a,b){Vj(a.e9,b,b);return 1;}
function AUz(a,b){TP(a.e9,b,0);return 1;}
function Z2(a,b){a.ob=b;}
function AON(a,b,c,d){var e,f,g,h,i,j,k;e=A$6;f= -e.jc.data[0]|0;g=a.ob;f=f*g;g=( -e.jd.data[0]|0)*g;e=a.cC;h=e.dQ;e=e.du;Cu();i=A9e;if(f===0.0)Gj(i);else{FB();e=PE(A8X,e.k,e.j,e.i,f*0.01745329238474369);SI(i,0.0,0.0,0.0,e.bN,e.bL,e.bM,e.bU);}Pw(h,A9e);e=a.dk;h=a.cC;i=h.dQ;j=i.k;f=i.j;k=i.i;e.k=j;e.j=f;e.i=k;e=F0(e,h.du);f=e.k;f=f*f;k=e.j;f=f+k*k;k=e.i;k=f+k*k;if(k!==0.0&&k!==1.0){f=1.0/BO(k);k=e.k*f;j=e.j*f;f=e.i*f;e.k=k;e.j=j;e.i=f;}e=a.cC.dQ;h=a.dk;i=A9e;if(g===0.0)Gj(i);else{FB();h=PE(A8X,h.k,h.j,h.i,g*
0.01745329238474369);SI(i,0.0,0.0,0.0,h.bN,h.bL,h.bM,h.bU);}Pw(e,A9e);return 1;}
function ADe(a,b){var c,d,e,f,g,h,i,j,k;c=a.e9;d=a.rP;if(!d)d=c.fL;else{e=c.eA;f=R(Bi(Bf(S(d),F(2135587861, 2654435769)),c.fG));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.eB;}}d=f<0?0:1;}if(d){c=a.dk;h=a.cC.dQ;i=h.k;j=h.j;k=h.i;c.k=i;c.j=j;c.i=k;j=i*i+j*j+k*k;if(j!==0.0&&j!==1.0){i=1.0/BO(j);j=c.k*i;k=c.j*i;i=c.i*i;c.k=j;c.j=k;c.i=i;}i=b*a.gl;j=c.k*i;k=c.j*i;i=c.i*i;c.k=j;c.j=k;c.i=i;c=a.cC.bn;h=a.dk;i=h.k;j=h.j;k=h.i;i=c.k+i;j=c.j+j;k=c.i+k;c.k=i;c.j=j;c.i=k;}c=a.e9;d
=a.x7;if(!d)d=c.fL;else{e=c.eA;g=R(Bi(Bf(S(d),F(2135587861, 2654435769)),c.fG));b:{while(true){f=e.data[g];if(!f){g= -(g+1|0)|0;break b;}if(f==d)break;g=(g+1|0)&c.eB;}}d=g<0?0:1;}if(d){c=a.dk;h=a.cC.dQ;i=h.k;j=h.j;k=h.i;c.k=i;c.j=j;c.i=k;j=U1(c);if(j!==0.0&&j!==1.0)c=GR(c,1.0/BO(j));GR(c, -b*a.gl);c=a.cC.bn;h=a.dk;WD(c,h.k,h.j,h.i);}c=a.e9;d=a.y0;if(!d)d=c.fL;else{e=c.eA;g=R(Bi(Bf(S(d),F(2135587861, 2654435769)),c.fG));c:{while(true){f=e.data[g];if(!f){g= -(g+1|0)|0;break c;}if(f==d)break;g=(g+1|0)&c.eB;}}d
=g<0?0:1;}if(d){GR(Is(F0(IB(a.dk,a.cC.dQ),a.cC.du)), -b*a.gl);I4(a.cC.bn,a.dk);}if(My(a.e9,a.yc)){GR(Is(F0(IB(a.dk,a.cC.dQ),a.cC.du)),b*a.gl);I4(a.cC.bn,a.dk);}if(My(a.e9,a.sC)){GR(Is(IB(a.dk,a.cC.du)),b*a.gl);I4(a.cC.bn,a.dk);}if(My(a.e9,a.sd)){GR(Is(IB(a.dk,a.cC.du)), -b*a.gl);I4(a.cC.bn,a.dk);}if(a.vd)Hw(a.cC,1);}
var DE=G(BG);
var Baw=null;var A9q=null;var Bbv=null;var Bbw=null;var Ba5=null;var Bbx=null;function JJ(){JJ=V(DE);AJw();}
function AJw(){var b,c,d,e,f;b=new DE;JJ();b.t=B(583);b.q=0;Baw=b;c=new DE;c.t=B(584);c.q=1;A9q=c;d=new DE;d.t=B(585);d.q=2;Bbv=d;e=new DE;e.t=B(586);e.q=3;Bbw=e;f=new DE;f.t=B(587);f.q=4;Ba5=f;Bbx=T(DE,[b,c,d,e,f]);}
var D2=G(BG);
var BaL=null;var Bby=null;var Bbz=null;var BaM=null;var BbA=null;function L2(){L2=V(D2);AO2();}
function AO2(){var b,c,d,e;b=new D2;L2();b.t=B(588);b.q=0;BaL=b;c=new D2;c.t=B(589);c.q=1;Bby=c;d=new D2;d.t=B(590);d.q=2;Bbz=d;e=new D2;e.t=B(591);e.q=3;BaM=e;BbA=T(D2,[b,c,d,e]);}
function IN(){var a=this;C.call(a);a.eN=null;a.c7=null;a.jX=0;a.ku=0;a.kh=null;a.mK=0;a.BB=null;}
var BbB=null;function BbC(a,b,c,d,e){var f=new IN();MH(f,a,b,c,d,e);return f;}
function MH(a,b,c,d,e,f){var g,h,i,j,k;a:{b:{a.jX=1;a.mK=0;g=new Bm;Cu();a.BB=g;A2_();switch(BbD.data[b.q]){case 1:a.eN=A2K(c,d,f);b=new IJ;b.go=1;b.kd=0;b.sj=1;if(!A5g){h=Rj(e);e=h.data.length;f=new ME;i=0+e|0;CO(f);f.v=(-1);f.y=e;f.g=e;f.h=0;f.g=i;f.lw=0;f.pd=0;f.ma=h;}else{d=e*2|0;if(d<0){b=new Bh;f=new P;f.b=D(16);CR(f,f.a,C2(B(486)));O(f,f.a,d,10);g=new N;h=f.b;d=f.a;j=D(d);g.e=j;M(h,0,j,0,d);b.c=1;b.d=1;b.f=g;H(b);}f=new Ch;h=BF(d);f.v=(-1);f.y=d;f.g=d;B6();f.bh=A98;f.bl=0;f.U=h;f.h=0;f.g=d;f.b4=1;f.bt
=0;f.bh=CU();f=MR(f);}b.fV=f;f.g=f.h;f.h=0;f.v=(-1);f=A99;g=f.l.createBuffer();e=f.cZ;f.cZ=e+1|0;B$(f.dX,e,Cb(g));b.py=e;b.lm=!c?35048:35044;a.c7=b;a.ku=0;break a;case 2:break;case 3:a.eN=A2C(c,d,f);a.c7=AX1(c,e);a.ku=0;break a;case 4:break b;default:break b;}a.eN=A33(c,d,f);a.c7=AX1(c,e);a.ku=0;break a;}b=new QD;ADP(b,0,d,f);a.eN=b;b=new NX;b.go=1;b.kd=0;b.sj=1;if(!A5g){h=Rj(e);d=h.data.length;f=new ME;k=0+d|0;AFg(f,d);f.h=0;f.g=k;f.lw=0;f.pd=0;f.ma=h;}else{c=e*2|0;if(c<0){b=new Bh;f=new P;f.b=D(16);DI(f,f.a,
B(486));Ei(f,c);AGB(b,Cy(f));H(b);}g=new Ch;h=BF(c);CO(g);g.v=(-1);g.y=c;g.g=c;B6();g.bh=A98;g.bl=0;g.U=h;g.h=0;g.g=c;g.b4=1;g.bt=0;SR(g,CU());f=MR(g);}b.fV=f;AFP(f);b.py=ACx(A99);b.lm=35044;a.c7=b;a.ku=1;}Wu(A9u,a);}
function JH(a,b,c,d,e,f){var g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.eN.mR(b,g);g=a.kh;if(g!==null&&g.u6()>0)a.kh.mR(b,h);if(a.c7.j6()>0)a.c7.m6();}if(a.ku){if(a.c7.j6()<=0)A99.k6(c,d,e);else{g=a.c7.ox(0);i=g.h;BS(g,d);A99.p0(c,e,5123,g);BS(g,i);}}else{j=0;if(a.mK)j=a.kh.u6();if(a.c7.j6()<=0){if(a.mK&&j>0)A$5.yD(c,d,e,j);else A99.k6(c,d,e);}else{if((e+d|0)>a.c7.nv()){b=new Bb;g=new P;g.b=D(16);I(g,g.a,B(592));O(g,g.a,e,10);I(g,g.a,B(593));O(g,g.a,d,10);I(g,g.a,B(594));c=a.c7.nv();O(g,g.a,c,10);I(g,g.a,
B(595));h=new N;k=g.b;d=g.a;Q();l=D(d);h.e=l;M(k,0,l,0,d);b.c=1;b.d=1;b.f=h;H(b);}if(a.mK&&j>0)A$5.t2(c,e,5123,d*2|0,j);else A99.my(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.eN.mD(b,g);g=a.kh;if(g!==null&&g.u6()>0)a.kh.mD(b,h);if(a.c7.j6()>0)a.c7.qv();}}
function Wu(b,c){var d,e,f,g,h;d=BbB;if(b===null){d=d.cx.data[0];while(d!==null&&d.cQ!==null){d=d.c2;}}else{e=b;if(!e.$id$){f=$rt_nextId();e.$id$=f;}g=b.$id$;h=d.cx.data;d=h[g&(h.length-1|0)];while(d!==null){if(d.eI==g){f=d.cQ;if(b!==f&&!(b!==f?0:1)?0:1)break;}d=d.c2;}}d=d===null?null:d.dZ;if(d===null){d=new BP;d.bj=1;d.r=Bj(C,16);}Cf(d,c);Gt(BbB,b,d);}
function Zt(){var b,c,d,e;b=new Gm;c=HE(16);b.e_=0;d=Bj(E8,c);e=d.data;b.cx=d;b.iS=0.75;b.fz=e.length*0.75|0;BbB=b;}
function G5(){C.call(this);this.so=null;}
function Xc(){var a=this;G5.call(a);a.kD=null;a.mf=null;a.hn=0;a.kW=0;a.qe=0;a.up=0;}
function AZ_(a,b){var c=new Xc();ASb(c,a,b);return c;}
function ASb(a,b,c){a.so=new C;a.up=(-1);if(c<0){b=new Bh;b.c=1;b.d=1;H(b);}a.kD=b;if(64>c)c=64;a.mf=D(c);}
function WI(a){var b;b=a.kD;if(b!==null){b.qu.m5();a.kD=null;return;}b=new EN;b.c=1;b.d=1;H(b);}
function HG(a){var b,c,d,e,f,g;if(a.kD===null){b=new EN;b.c=1;b.d=1;H(b);}if(a.qe&&a.hn>=a.kW)return null;b=new P;b.b=D(16);a:{while(true){if(a.hn>=a.kW&&!OQ(a,0))break a;c=a.mf.data;d=a.hn;e=d+1|0;a.hn=e;d=c[d];if(d==10)break;if(d==13){if(e>=a.kW&&!OQ(a,0))break a;c=a.mf.data;e=a.hn;if(c[e]!=10)break a;a.hn=e+1|0;break a;}e=b.a;Bd(b,e,e+1|0);b.b.data[e]=d;}}f=new N;c=b.b;d=b.a;Q();g=D(d);f.e=g;M(c,0,g,0,d);return f;}
function OQ(a,b){var c,d;if(a.qe)return 0;a:{while(true){c=a.mf;d=c.data.length;if(b>=d)break a;d=Wc(a.kD,c,b,d-b|0);if(d==(-1)){a.qe=1;break a;}if(!d)break;b=b+d|0;}}a.kW=b;a.hn=0;a.up=(-1);return 1;}
function Uy(){var a=this;G5.call(a);a.qu=null;a.qM=null;a.GM=null;a.fc=null;a.DN=null;a.ha=null;a.mO=0;a.qK=0;}
function A1H(a){var b=new Uy();AG0(b,a);return b;}
function BbE(a,b){var c=new Uy();AEy(c,a,b);return c;}
function AG0(a,b){var c,d;Cr();c=A$H;d=new OX;Zv(d,c,0.3333333432674408,0.5);d.vP=BF(512);d.xE=D(512);DU();c=A$M;if(c!==null){d.jW=c;d.oC=c;AEy(a,b,d);return;}c=new Bh;c.c=1;c.d=1;c.f=B(596);H(c);}
function AEy(a,b,c){var d,e,f,g,h,i,j;a.so=new C;d=BF(8192);e=d.data;a.GM=d;f=e.length;g=new Ch;h=0+f|0;g.v=(-1);g.y=f;g.g=f;B6();g.bh=A98;g.bl=0;g.U=d;g.h=0;g.g=h;g.b4=0;g.bt=0;a.fc=g;d=D(1024);e=d.data;a.DN=d;i=e.length;g=new IF;j=0+i|0;g.v=(-1);g.y=i;g.g=i;g.h=0;g.g=j;g.hh=0;g.iQ=0;g.gB=d;a.ha=g;a.qu=b;a.qM=c;BS(g,j);b=a.fc;BS(b,b.g);}
function Wc(a,b,c,d){var e,f,g,h;if(a.qK){e=a.ha;if(!(e.h>=e.g?0:1))return (-1);}f=0;a:{while(d>0){e=a.ha;g=e.g-e.h|0;if(d<g)g=d;Nm(e,b,c+f|0,g);d=d-g|0;f=f+g|0;e=a.ha;h=e.h>=e.g?0:1;if(!h&&!AF2(a))break a;}}return f;}
function AF2(a){var b,c,d;if(a.qK)return 0;Ui(a.ha);a:{while(true){b=a.fc;c=b.h>=b.g?0:1;if(!c&&!AED(a))break a;if(!((ABP(a.qM,a.fc,a.ha,a.mO)).bo!=1?0:1))continue;else break;}}b=a.fc;c=b.h>=b.g?0:1;if(!c&&a.mO){b=a.qM;d=b.lb;if(d!=3&&d!=2){b=new BK;b.c=1;b.d=1;H(b);}b.lb=3;if(A5m.bo?0:1)a.qK=1;}b=a.ha;b.g=b.h;b.h=0;b.v=(-1);return 1;}
function AED(a){var b,c,d;if(a.mO)return 0;W0(a.fc);a:{while(true){b=a.fc;c=b.h;d=b.g;if(!(c>=d?0:1))break a;c=a.qu.tg(b.U,c,d-c|0);if(c==(-1)){a.mO=1;break a;}b=a.fc;BS(b,b.h+c|0);if(!c)break;}}b=a.fc;b.g=b.h;b.h=0;b.v=(-1);return 1;}
function ZL(){var a=this;C.call(a);a.d$=null;a.g4=null;a.oG=0;a.cW=0;}
function YR(a,b){var c=new ZL();AXb(c,a,b);return c;}
function AXb(a,b,c){if(b!==null){a.d$=b;a.g4=c;a.oG=0;a.cW=0;return;}b=new CK;b.c=1;b.d=1;H(b);}
function TB(a){var b,c,d,e,f;if(a.g4===null){b=new CK;b.c=1;b.d=1;H(b);}a:{b:{c=a.d$.e.data.length;d=a.cW;if(d<c){if(a.oG)return 1;while(true){if(d>=c)break b;b=a.g4;e=a.d$;if(d<0)break a;f=e.e.data;if(d>=f.length)break a;if(Ea(b,f[d],0)==(-1))return 1;d=d+1|0;}}}return 0;}b=new X;b.c=1;b.d=1;H(b);}
function BL(a){var b,c,d,e,f,g,h,i;b=a.g4;if(b===null){b=new CK;b.c=1;b.d=1;H(b);}c=a.cW;d=a.d$.e.data;e=d.length;f=Bo(c,e);if(f<0){if(a.oG){if(c>=0&&f<0){if(Ea(b,d[c],0)>=0){b=a.d$;c=a.cW;a.cW=c+1|0;if(c>=0){d=b.e.data;if(c<d.length){c=d[c];b=new N;d=D(1);g=d.data;g[0]=c;c=g.length;g=D(c);b.e=g;M(d,0,g,0,c);return b;}}b=new X;b.c=1;b.d=1;H(b);}a.cW=a.cW+1|0;while(true){f=a.cW;if(f>=e){b=a.d$;g=b.e;h=g.data.length;f=Bo(c,h);if(f>0){b=new Y;b.c=1;b.d=1;H(b);}if(!f)b=A9m;else if(!(!c&&h==h)){b=new N;f=h-c|0;d
=D(f);b.e=d;M(g,c,d,0,f);}return b;}b=a.g4;i=a.d$;if(f<0)break;d=i.e.data;if(f>=d.length)break;if(Ea(b,d[f],0)>=0){b=a.d$;f=a.cW;h=Bo(c,f);if(h>0){b=new Y;b.c=1;b.d=1;H(b);}if(!h)i=A9m;else if(!c&&f==b.e.data.length)i=b;else{i=new N;d=b.e;f=f-c|0;g=D(f);i.e=g;M(d,c,g,0,f);}return i;}a.cW=a.cW+1|0;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}a:{while(true){f=Bo(c,e);if(f>=0)break a;b=a.g4;i=a.d$;if(c<0)break;d=i.e.data;if(c>=d.length)break;if(Ea(b,d[c],0)<0)break a;c=c+1|0;}b=new X;Df(b);H(b);}a.cW=c;if
(f<0){a.cW=c+1|0;while(true){f=a.cW;if(f>=e)break;if(Ea(a.g4,CZ(a.d$,f),0)>=0)return FI(a.d$,c,a.cW);a.cW=a.cW+1|0;}return Hc(a.d$,c);}}b=new Je;b.c=1;b.d=1;H(b);}
var Ok=G();
var BbF=null;function P9(b){var $$je;a:{if(b!==null)try{WI(b);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dg){}else{throw $$e;}}}}
function Yn(){BbF=BF(0);}
function ST(){var a=this;C.call(a);a.fN=null;a.wr=0;a.o6=null;a.j5=null;a.uZ=0;a.zM=0.0;a.zL=0.0;a.mQ=null;a.z8=0.0;a.er=null;a.gV=null;a.iR=null;a.pj=null;}
var BbG=null;function A2R(){A2R=V(ST);ALP();}
function A3M(a,b){var c=new ST();AF3(c,a,b);return c;}
function AF3(a,b,c){var d,e,f,g,h,i;A2R();d=new BP;d.bj=1;d.r=Bj(C,16);a.o6=d;d=new BP;d.bj=1;d.r=Bj(C,16);a.j5=d;d=new Bq;Et();d.cd=1.0;d.cc=1.0;d.cb=1.0;d.ca=1.0;Dc(d);a.mQ=d;a.fN=b;a.wr=c;e=b.f_.m;if(!e){b=new Bh;b.c=1;b.d=1;b.f=B(597);H(b);}a:{a.er=Bj($rt_arraycls($rt_floatcls()),e);a.gV=Bc(e);if(e>1){f=Bj(Do,e);g=f.data;a.iR=f;h=0;i=g.length;while(true){if(h>=i)break a;b=new Do;b.dy=1;b.bH=Bc(16);g[h]=b;h=h+1|0;}}}a.pj=Bc(e);}
function NZ(a,b){var c,d,e,f,g,h,i;c=a.fN.f_;d=0;e=a.er.data.length;while(d<e){f=a.gV.data;if(f[d]>0){g=a.er.data[d];if(d>=c.m){h=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,d,10);I(b,b.a,B(37));i=c.m;O(b,b.a,i,10);c=new N;f=b.b;d=b.a;Q();g=D(d);c.e=g;M(f,0,g,0,d);h.c=1;h.d=1;h.f=c;H(h);}Ws(b,c.r.data[d].dv,g,0,f[d]);}d=d+1|0;}}
function Sm(a){var b,c,d,e,f,g,h;a.zM=0.0;a.zL=0.0;Xm(a.j5,1);b=a.j5;c=b.r;d=0;e=b.m;f=null;if(d>e){b=new Bh;b.c=1;b.d=1;H(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.m=0;b=a.o6;c=b.r;d=0;e=b.m;f=null;if(d>e){b=new Bh;b.c=1;b.d=1;H(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.m=0;e=0;c=a.gV.data;h=c.length;while(e<h){g=a.iR;if(g!==null)g.data[e].Z=0;c[e]=0;e=e+1|0;}}
function AAk(a,b){var c,d,e,f,g,h,i,j,k,l,m;a:{if(a.er.data.length==1)SN(a,0,b.c8);else{c=a.pj.data;d=0;e=c.length;if(d>e){b=new Bh;b.c=1;b.d=1;H(b);}while(d<e){f=d+1|0;c[d]=0;d=f;}g=0;b=b.cK;d=b.m;while(true){f=Bo(g,d);if(f>=0)break;if(f>=0){h=new Y;i=new P;i.b=D(16);I(i,i.a,B(36));O(i,i.a,g,10);I(i,i.a,B(37));g=b.m;O(i,i.a,g,10);b=new N;j=i.b;d=i.a;Q();c=D(d);b.e=c;M(j,0,c,0,d);h.c=1;h.d=1;h.f=b;H(h);}i=b.r.data[g].bK;k=i.r;f=0;l=i.m;while(f<l){m=k.data[f].iL;c[m]=c[m]+1|0;f=f+1|0;}g=g+1|0;}g=0;while(true)
{if(g>=e)break a;SN(a,g,c[g]);g=g+1|0;}}}}
function SN(a,b,c){var d,e,f,g;d=a.iR;if(d!==null){e=d.data;if(c>e[b].bH.data.length)Xp(e[b],c-e[b].Z|0);}d=a.gV.data;f=d[b]+(c*20|0)|0;e=a.er.data;g=e[b];if(g===null)e[b]=Ck(f);else if(g.data.length<f){e=Ck(f);M(g,0,e,0,d[b]);a.er.data[b]=e;}}
function U2(a,b){var c,d,e,f,g;c=Bj($rt_arraycls($rt_floatcls()),b);d=a.er;M(d,0,c,0,d.data.length);a.er=c;e=Bc(b);c=a.gV;M(c,0,e,0,c.data.length);a.gV=e;d=Bj(Do,b);f=0;e=a.iR;if(e!==null){f=e.data.length;M(e,0,d,0,f);}e=d.data;while(f<b){g=new Do;g.dy=1;g.bH=Bc(16);e[f]=g;f=f+1|0;}a.iR=d;a.pj=Bc(b);}
function OR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;e=b.cK.m;if(!e)return;f=a.er.data.length;g=a.fN.f_.m;if(f<g)U2(a,g);Cf(a.o6,b);AAk(a,b);h=b.ci;i=0;j=0;k=0;l=0.0;f=0;while(f<e){m=b.cK;if(f>=m.m){n=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,f,10);I(b,b.a,B(37));e=m.m;O(b,b.a,e,10);m=new N;o=b.b;f=b.a;Q();p=D(f);m.e=p;M(o,0,p,0,f);n.c=1;n.d=1;n.f=m;H(n);}m=m.r.data[f];n=m.bK;o=n.r;p=m.cm.b6;q=c+m.ey;r=d+m.lf;g=0;s=n.m;while(g<s){t=k+1|0;if(k==j){i=i+1|0;if(i>=h.Z){m=new Y;b=new P;b.b=D(16);I(b,
b.a,B(36));O(b,b.a,i,10);I(b,b.a,B(37));e=h.Z;O(b,b.a,e,10);n=new N;o=b.b;f=b.a;Q();p=D(f);n.e=p;M(o,0,p,0,f);m.c=1;m.d=1;m.f=n;H(m);}l=$rt_intBitsToFloat(h.bH.data[i]&(-16777217));i=i+1|0;j=Bo(i,h.Z);if(j>=0)j=(-1);else{if(j>=0){m=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,i,10);I(b,b.a,B(37));e=h.Z;O(b,b.a,e,10);n=new N;o=b.b;f=b.a;Q();p=D(f);n.e=p;M(o,0,p,0,f);m.c=1;m.d=1;m.f=n;H(m);}j=h.bH.data[i];}}u=p.data;v=o.data;q=q+u[g];Yd(a,v[g],q,r,l);g=g+1|0;k=t;}f=f+1|0;}Et();a.z8=A9D;}
function Yd(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.fN.i6;g=f.e8;h=f.u5;i=c+b.dP*g;j=d+b.h9*h;k=b.c1*g;l=b.dW*h;m=b.rb;n=b.vQ;o=b.m0;p=b.px;if(a.wr){i=i+Cm(i)*0.5|0;j=j+Cm(j)*0.5|0;k=k+Cm(k)*0.5|0;l=l+Cm(l)*0.5|0;}q=i+k;r=j+l;s=b.iL;t=a.gV.data;u=t[s];t[s]=t[s]+20|0;t=a.iR;if(t!==null){b=t.data[s];v=a.uZ;a.uZ=v+1|0;E4(b,v);}t=a.er.data[s].data;v=u+1|0;t[u]=i;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=o;w=v+1|0;t[v]=i;s=w+1|0;t[w]=r;v=s+1|0;t[s]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=p;w
=v+1|0;t[v]=q;v=w+1|0;t[w]=r;w=v+1|0;t[v]=e;v=w+1|0;t[w]=n;w=v+1|0;t[v]=p;v=w+1|0;t[w]=q;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=n;t[w]=o;}
function U4(a,b,c,d){OR(a,b,c,d+a.fN.i6.j_);}
function ALP(){var b;b=new Bq;Et();b.cd=1.0;b.cc=1.0;b.cb=1.0;b.ca=1.0;Dc(b);BbG=b;}
var C1=G(BG);
var BbH=null;var BbI=null;var BbJ=null;var BbK=null;var BbL=null;var BbM=null;var A$a=null;var BbN=null;function HT(){HT=V(C1);APW();}
function HD(b){var c,d,e,f,g,h;HT();if(b==1)return BbH;if(b==2)return BbJ;if(b==5)return BbK;if(b==6)return BbL;if(b==3)return BbM;if(b==4)return A$a;c=new Bb;d=new P;d.b=D(16);I(d,d.a,B(598));O(d,d.a,b,10);e=new N;f=d.b;g=d.a;Q();h=D(g);e.e=h;M(f,0,h,0,g);c.c=1;c.d=1;c.f=e;H(c);}
function APW(){var b,c,d,e,f,g,h;b=new C1;HT();b.t=B(223);b.q=0;BbH=b;c=new C1;c.t=B(599);c.q=1;BbI=c;d=new C1;d.t=B(600);d.q=2;BbJ=d;e=new C1;e.t=B(601);e.q=3;BbK=e;f=new C1;f.t=B(602);f.q=4;BbL=f;g=new C1;g.t=B(603);g.q=5;BbM=g;h=new C1;h.t=B(604);h.q=6;A$a=h;BbN=T(C1,[b,c,d,e,f,g,h]);}
function AFi(){var a=this;C.call(a);a.hr=null;a.wj=0;a.vD=0;a.qd=null;a.fB=null;a.xJ=0;a.CW=null;a.Aj=null;}
function A3o(){var a=new AFi();ASt(a);return a;}
function ASt(a){var b,c,d,e,f,g,h,i;a.qd=ET();a.CW=B(605);a.Aj=B(606);b=new Nw;c=Bj(Dj,3);d=c.data;e=new Dj;e.e0=1;e.cU=2;e.dg=5126;e.di=0;e.c3=B(607);e.fi=0;e.fg=Dt(1);d[0]=e;e=new Dj;e.e0=16;e.cU=2;e.dg=5126;e.di=0;e.c3=B(608);e.fi=0;e.fg=Dt(16);d[1]=e;e=new Dj;e.e0=4;e.cU=4;e.dg=5121;e.di=1;e.c3=B(609);e.fi=0;e.fg=Dt(4);d[2]=e;ADu(b,c);a.hr=b;e=VD(B(605),B(606));a.fB=e;f=e.eg;if(!f){g=A9u;if(!f)h=e.dK;else{h=A99.gP(e.cO);e.dK=h;}if(g.iF>=2){if(A_a===null){g=new Ct;g.cf=A5j;e=new P;e.b=D(16);g.bc=e;g.b$=D(32);g.ck
=0;Cr();g.cg=A$H;A_a=g;}g=A_a;e=new P;e.b=D(16);Ew(e,e.a,B(610));Ew(e,e.a,B(71));f=e.a;if(h===null)h=B(2);Ew(e,f,h);b=new N;c=e.b;i=e.a;Q();d=D(i);b.e=d;M(c,0,d,0,i);e=g.bc;I(e,e.a,b);i=e.a;Bd(e,i,i+1|0);e.b.data[i]=10;Co(g);}}Zy(a);e=A99;g=e.l.createBuffer();i=e.cZ;e.cZ=i+1|0;B$(e.dX,i,Cb(g));a.wj=i;e=A99;g=e.l.createBuffer();i=e.cZ;e.cZ=i+1|0;B$(e.dX,i,Cb(g));a.vD=i;}
function Zy(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=new Ch;c=BF(131072);b.v=(-1);b.y=131072;b.g=131072;B6();b.bh=A98;b.bl=0;b.U=c;b.h=0;b.g=131072;b.b4=1;b.bt=0;d=S(II(1));e=S(II(1));f=S(II(1));g=S(S1(131072));h=S(ED());if(BU(h,BI))i=null;else{if(Bat===null)Bat=new Dl;i=Bat;if(!i.bP)i.x=h;}j=R(i.x);k=R(g);l=R(d);m=R(e);n=R(f);Vz(j,k,l,m,n);o=Kh(l,0);p=Kh(m,0);Kh(n,0);l=Db(o,p)*4|0;m=0;while(m<l){LM(b,m,Na(k,m));m=m+1|0;}BS(b,0);Cj(b,l);q=A9r;r=q.l.createTexture();k=q.ek;q.ek=k+1|0;B$(q.eR,k,Cb(r));a.xJ=k;A9r.fM(3553,
k);A9r.fR(3553,10241,9729);A9r.fR(3553,10240,9729);A9r.kT(3317,1);A9r.fw(3553,0,6408,o,p,0,6408,5121,b);j=a.xJ;Yj(R(i.x),j);}
function AA2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;d=AVR(R(b.x));if(d>0){e=A9r.hj(3042);f=A9r.hj(2884);g=A9r.hj(2929);h=A9r.hj(2960);i=A9r.hj(3089);j=TG(R(b.x))*AD3(R(b.x))|0;k=Xz(R(b.x))*U$(R(b.x))|0;AFR(a,b,j,k);l=Nj(R(b.x));m=RJ(R(b.x));n=AD3(R(b.x));o=U$(R(b.x));p=0;q=k;while(p<d){r=S(APj(R(b.x),p));s=b.vw;if(!s.bP)s.x=r;t=ZO(s);u=AAs(s);v=t.g;w=u.g;A9r.dR(34962,v,t,35040);A9r.dR(34963,w,u,35040);v=AXM(R(s.x));x=0;while(x<v){r=S(AXz(R(s.x),x));t=s.yj;if(!t.bP)t.x=r;y=ZF(t);z
=ABf(R(y.x));ba=Zl(R(y.x));bb=Xt(R(y.x));bc=Z9(R(y.x));z=(z-l)*n;ba=(ba-m)*o;bb=(bb-l)*n;bc=(bc-m)*o;if(bb>=z&&bc>=ba){A9r.m1(z|0,q-bc|0,bb-z|0,bc-ba|0);w=ASf(R(t.x));bd=AQW(R(t.x));j=AUF(R(t.x));A9r.fM(3553,w);A9r.my(4,j,5123,bd*2|0);}x=x+1|0;}p=p+1|0;}AAv(a);if(!e)A9r.dG(3042);else A9r.d8(3042);if(!f)A9r.dG(2884);else A9r.d8(2884);if(!g)A9r.dG(2929);else A9r.d8(2929);if(!h)A9r.dG(2960);else A9r.d8(2960);if(!i)A9r.dG(3089);else A9r.d8(3089);}}
function AFR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;A9r.d8(3042);A9r.qp(32774);A9r.lA(770,771,1,771);A9r.dG(2884);A9r.dG(2929);A9r.dG(2960);A9r.d8(3089);e=Nj(R(b.x));f=Nj(R(b.x))+TG(R(b.x));g=RJ(R(b.x));h=RJ(R(b.x))+Xz(R(b.x));i=a.qd.ct.data;i[0]=2.0/(f-e);i[1]=0.0;i[2]=0.0;i[3]=0.0;i[4]=0.0;i[5]=2.0/(g-h);i[6]=0.0;i[7]=0.0;i[8]=0.0;i[9]=0.0;i[10]=(-1.0);i[11]=0.0;i[12]=(f+e)/(e-f);i[13]=(g+h)/(h-g);i[14]=0.0;i[15]=1.0;b=a.fB;j=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}j.jz(b.cO);b=a.fB;k=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba
=0;}Lh();k.kb(GN(b,B(611),BaN),0);b=a.fB;k=a.qd;l=GN(b,B(612),BaN);j=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}i=k.ct;b=j.ds;d=j.d6;if(!d)b=!b.O?null:b.M;else{d=AA5(b,d);b=d<0?null:b.L.data[d];}k=U3(Jd(b,l));j.l.uniformMatrix4fv(k,!!0,ATU(i));A9r.cB(34962,a.wj);A9r.cB(34963,a.vD);m=a.hr.cD.data.length;l=0;while(l<m){j=AB7(a.hr,l);n=Uz(a.fB,j.c3);if(n>=0){AEr(a.fB,n);AGn(a.fB,n,j.cU,j.dg,j.di,a.hr.eu,j.g1);}l=l+1|0;}}
function AAv(a){var b,c,d,e,f,g,h,i,j;A9r.cB(34962,0);b=a.hr.cD.data.length;c=0;while(c<b){d=a.fB;e=a.hr.cD.data[c].c3;f=A99;if(d.ba){B_(d,d.bV,d.bT);d.ba=0;}g=A99;h=d.dM;i=(-2);j=Eu(h,e);if(j>=0)i=h.dC.data[j];if(i==(-2)){i=g.iw(d.cO,e);Ep(d.dM,e,i);}if(i!=(-1))f.fA(i);c=c+1|0;}A9r.cB(34963,0);A9r.qz();}
function NQ(){CF.call(this);this.vw=null;}
function AVR(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawData);return nativeObject.get_CmdListsCount();}
function APj(b,c){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawData);var cmdList=nativeObject.get_CmdLists(c);return $rt_globals.imgui.getPointer(cmdList);}
function Nj(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawData);return nativeObject.DisplayPos.get_x();}
function RJ(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawData);return nativeObject.DisplayPos.get_y();}
function TG(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawData);return nativeObject.DisplaySize.get_x();}
function Xz(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawData);return nativeObject.DisplaySize.get_y();}
function AD3(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawData);return nativeObject.FramebufferScale.get_x();}
function U$(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawData);return nativeObject.FramebufferScale.get_y();}
var Jj=G(0);
var DN=G();
var BbO=0;var BbP=0;var BbQ=0;var BbR=0;var BbS=0;var BbT=0;var BbU=0;var Bau=0;var BbV=0;var BbW=0;var BbX=0;function A3c(){A3c=V(DN);ANb();}
function ANb(){BbO=$rt_globals.imgui.ImGuiConfigFlags_None;BbP=$rt_globals.imgui.ImGuiConfigFlags_NavEnableKeyboard;BbQ=$rt_globals.imgui.ImGuiConfigFlags_NavEnableGamepad;BbR=$rt_globals.imgui.ImGuiConfigFlags_NavEnableSetMousePos;BbS=$rt_globals.imgui.ImGuiConfigFlags_NavNoCaptureKeyboard;BbT=$rt_globals.imgui.ImGuiConfigFlags_NoMouse;BbU=$rt_globals.imgui.ImGuiConfigFlags_NoMouseCursorChange;Bau=$rt_globals.imgui.ImGuiConfigFlags_DockingEnable;BbV=$rt_globals.imgui.ImGuiConfigFlags_ViewportsEnable;BbW=$rt_globals.imgui.ImGuiConfigFlags_DpiEnableScaleViewports;BbX
=$rt_globals.imgui.ImGuiConfigFlags_DpiEnableScaleFonts;}
function Tw(){var a=this;I$.call(a);a.ht=null;a.i$=null;}
function AGJ(a,b,c,d,e){var f,g,h,i,j;if(XV(a.ht,b,c,d,e)){Ka(a,b,c,d,e);return 1;}if(a.i$.Z>0){b=0;while(true){f=a.i$;c=Bo(b,f.Z);if(c>=0)break;if(c>=0){g=new Y;h=new P;h.b=D(16);I(h,h.a,B(36));O(h,h.a,b,10);I(h,h.a,B(37));b=f.Z;O(h,h.a,b,10);f=new N;i=h.b;c=h.a;Q();j=D(c);f.e=j;M(i,0,j,0,c);g.c=1;g.d=1;g.f=f;H(g);}Ll(a,f.bH.data[b]);b=b+1|0;}f.Z=0;}return 0;}
function ATC(a,b,c,d){var e,f,g,h,i;e=a.ht;f=S(ED());if(BU(f,BI))g=null;else{if(Bat===null)Bat=new Dl;g=Bat;if(!g.bP)g.x=f;}h=b;i=c;Sy(R(g.x),h,i);if(!(!e.l$?0:1))return 0;Kr(a,b,c,d);return 1;}
function ALb(a,b,c,d,e){UH(a.ht,b,c,d,e);I1(a,b,c,d,e);return 0;}
function AOv(a,b){var c,d;c=S(ED());if(BU(c,BI))d=null;else{if(Bat===null)Bat=new Dl;d=Bat;if(!d.bP)d.x=c;}if(b!=127&&b!=10)VV(R(d.x),b);Zc();if(!(!(Qm(BbY)?1:0)?0:1))return 0;Lm(a,b);return 1;}
function AO5(a,b){if(!YJ(a.ht,b))return 0;E4(a.i$,b);Kx(a,b);return 1;}
function AWk(a,b){var c,d,e,f;if(!WN(a.ht,b))return 0;c=a.i$;d=c.bH;e=0;f=c.Z;a:{while(e<f){if(d.data[e]==b){AFG(c,e);break a;}e=e+1|0;}}Ll(a,b);return 1;}
function AI2(a,b,c){var d,e,f;d=S(ED());if(BU(d,BI))e=null;else{if(Bat===null)Bat=new Dl;e=Bat;if(!e.bP)e.x=d;}f= -c;XR(R(e.x),b,f);if(!(!(Oz(R(e.x))?1:0)?0:1))return 0;R3(a,b,c);return 1;}
function AWg(a,b,c){var d,e,f,g;d=S(ED());if(BU(d,BI))e=null;else{if(Bat===null)Bat=new Dl;e=Bat;if(!e.bP)e.x=d;}f=b;g=c;Sy(R(e.x),f,g);PH(a,b,c);return 0;}
var EL=G(BR);
var BbZ=null;var Bb0=null;var Bb1=null;function WB(){BbZ=new EL;Bb0=new EL;Bb1=new EL;}
var Fy=G(EL);
var Bb2=null;var Bb3=null;var Bb4=null;function TZ(){Bb2=new Fy;Bb3=new Fy;Bb4=new Fy;}
var Fp=G(BR);
var Bb5=null;var Bb6=null;var Bb7=null;function Xj(){Bb5=new Fp;Bb6=new Fp;Bb7=new Fp;}
var Fz=G(Dm);
var Bb8=null;var Bb9=null;var Bb$=null;function W9(a,b){var c,d;c=R(a.u);d=b===null?0:R(b.u);TF(c,d);}
function Zm(){Bb8=new Fz;Bb9=new Fz;Bb$=new Fz;}
function TF(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxShape);jsObj.setSimulationFilterData(c);}
var MN=G(Hf);
function Ia(){MN.call(this);this.oO=null;}
function F1(a){var b,c;b=S(AOB(R(a.u)));if(BU(b,BI))return null;if(a.oO===null)a.oO=new MA;c=a.oO;if(!c.cj)c.u=b;return c;}
function AFX(a,b){var c,d;c=R(a.u);d=b===null?0:R(b.u);return AEp(c,d)?1:0;}
function AOB(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidActor);var returnedJSObj=jsObj.getGlobalPose();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.physx.getPointer(returnedJSObj);}
function AEp(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidActor);var returnedJSObj=jsObj.attachShape(c);return returnedJSObj;}
function ABA(){var a=this;C.call(a);a.eX=0;a.eA=null;a.iz=null;a.tq=0;a.fL=0;a.rK=0.0;a.oJ=0;a.fG=0;a.eB=0;}
function A3D(a,b){var c=new ABA();AVw(c,a,b);return c;}
function AVw(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.rK=c;d=JT(b,c);a.oJ=d*c|0;b=d-1|0;a.eB=b;a.fG=Ek(S(b));a.eA=Bc(d);a.iz=Bc(d);return;}e=new Bh;f=new P;f.b=D(16);I(f,f.a,B(59));Dz(f,f.a,c);g=new N;h=f.b;d=f.a;Q();i=D(d);g.e=i;M(h,0,i,0,d);e.c=1;e.d=1;e.f=g;H(e);}
function Vj(a,b,c){var d,e,f,g;if(!b){a.tq=c;if(!a.fL){a.fL=1;a.eX=a.eX+1|0;}return;}d=a.eA;e=R(Bi(Bf(S(b),F(2135587861, 2654435769)),a.fG));a:{while(true){f=d.data;g=f[e];if(!g){e= -(e+1|0)|0;break a;}if(g==b)break;e=(e+1|0)&a.eB;}}if(e>=0){a.iz.data[e]=c;return;}e= -(e+1|0)|0;f[e]=b;a.iz.data[e]=c;b=a.eX+1|0;a.eX=b;if(b>=a.oJ)WM(a,f.length<<1);}
function TP(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(!b){if(!a.fL)return c;a.fL=0;a.eX=a.eX-1|0;return a.tq;}d=a.eA;e=Bf(S(b),F(2135587861, 2654435769));f=a.fG;g=R(Bi(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.eB;}}if(g<0)return c;j=a.iz.data;i=j[g];k=a.eB;l=(g+1|0)&k;while(true){b=h[l];if(!b)break;m=R(Bi(Bf(S(b),F(2135587861, 2654435769)),f));if(((l-m|0)&k)>((g-m|0)&k)){h[g]=b;j[g]=j[l];g=l;}l=(l+1|0)&k;}h[g]=0;a.eX=a.eX-1|0;return i;}
function My(a,b){var c,d,e;if(!b)return a.fL;c=a.eA;d=R(Bi(Bf(S(b),F(2135587861, 2654435769)),a.fG));a:{while(true){e=c.data[d];if(!e){d= -(d+1|0)|0;break a;}if(e==b)break;d=(d+1|0)&a.eB;}}return d<0?0:1;}
function WM(a,b){var c,d,e,f,g,h,i,j,k,l;a:{c=a.eA.data.length;a.oJ=b*a.rK|0;d=b-1|0;a.eB=d;d=Ek(S(d));a.fG=d;e=a.eA;f=a.iz;g=Bc(b);a.eA=g;h=Bc(b);a.iz=h;if(a.eX>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){b=f.data[j];l=R(Bi(Bf(S(k),F(2135587861, 2654435769)),d));while(h[l]){l=(l+1|0)&a.eB;}h[l]=k;i[l]=b;}j=j+1|0;}}}}
function Nw(){var a=this;C.call(a);a.cD=null;a.eu=0;a.zu=BI;a.Ey=0;a.FH=0;}
function AS2(a){var b=new Nw();ADu(b,a);return b;}
function ADu(a,b){var c,d,e,f,g,h;b=b.data;a.zu=S(-1);a.Ey=(-1);a.FH=(-1);c=b.length;if(!c){d=new Bh;d.c=1;d.d=1;d.f=B(613);H(d);}e=Bj(Dj,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.cD=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.g1=c;switch(d.dg){case 5120:case 5121:break;case 5122:case 5123:g=2*d.cU|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.cU|0;break a;default:break b;}g=d.cU;break a;}g=0;}c=c+g|0;h=h+1|0;}a.eu=c;}
function AB7(a,b){return a.cD.data[b];}
var Lq=G();
var Bb_=null;var Bca=null;function AGc(b,c,d){var e,f,g,h,i,j;e=50+c|0;if(b){f=Bb_.data;if(e<=f.length&&e>=0){g=A4G(Bf(CN(S(b),F(4294967295, 0)),CN(S(f[e]),F(4294967295, 0))));h=Bca.data[e]-1|0;i=(32-LA(g)|0)-30|0;b=i>=0?g>>>i|0:g<<( -i|0);c=h+i|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){c=( -c|0)+1|0;e=32;if(c<e)e=c;b=b>>e;c=0;}j=(b>>>6|0)&8388607|c<<23;if(d)j=j^(-2147483648);return $rt_intBitsToFloat(j);}}return $rt_intBitsToFloat(!d?0:(-2147483648));}
function X0(){Bb_=GA([(-1598972629),(-924973963),(-82475629),(-1662160004),(-1003958181),(-181205903),(-1723866425),(-1081091207),(-277622185),(-1784126602),(-1156416428),(-371778711),(-1842974431),(-1229976214),(-463728444),(-1900443013),(-1301811943),(-553523104),(-1956564676),(-1371964021),(-641213203),(-2011370988),(-1440471911),(-726848064),(-2064892776),(-1507374146),(-810475859),(-2117160148),(-1572708361),(-892143627),(-41437709),(-1636511304),(-971897307),(-141129809),(-1698818867),(-1049781759),(-238485375),
(-1759666096),(-1125840795),(-333559170),(-1819087217),(-1200117198),(-426404673),(-1877115657),(-1272652747),(-517074110),(-1933784055),(-1343488244),(-605618481),(-1989124287),(-1412663534),(-692087594),(-2043167482),(-1480217529),(-776530087),(-2095944040),(-1546188227),(-858993459),(-2147483648),(-1610612736),(-939524096),(-100663296),(-1673527296),(-1018167296),(-198967296),(-1734967296),(-1094967296),(-294967296),(-1794967296),(-1169967296),(-388717296),(-1853561046),(-1243209483),(-480270030),(-1910781505),
(-1314735057),(-569676998),(-1966660859),(-1384584250),(-656988489),(-2021230542),(-1452796353),(-742253617),(-2074521247),(-1519409734),(-825520344),(-2126562951),(-1584461865),(-906835507),(-59802560),(-1647989336),(-986244846),(-159064233),(-1710027882),(-1063793028),(-255999461),(-1770612399),(-1139523675),(-350662770),(-1829776967)]);Bca=GA([(-35),(-32),(-29),(-25),(-22),(-19),(-15),(-12),(-9),(-5),(-2),1,5,8,11,15,18,21,25,28,31,35,38,41,45,48,51,55,58,61,64,68,71,74,78,81,84,88,91,94,98,101,104,108,111,
114,118,121,124,128,131,134,138,141,144,148,151,154,158,161,164,167,171,174,177,181,184,187,191,194,197,201,204,207,211,214,217,221,224,227,231,234,237,241,244,247,251,254,257,260,264,267,270,274,277,280,284,287,290,294]);}
var F9=G(BG);
var Ba0=null;var Bcb=null;var Bcc=null;function ACC(){ACC=V(F9);APD();}
function APD(){var b,c;b=new F9;ACC();b.t=B(614);b.q=0;Ba0=b;c=new F9;c.t=B(615);c.q=1;Bcb=c;Bcc=T(F9,[b,c]);}
function Cp(){BG.call(this);this.db=null;}
var BaZ=null;var Bcd=null;var Bce=null;var Bcf=null;var Bcg=null;var Bch=null;var Bci=null;var Bcj=null;var Bck=null;var A$c=null;var Bcl=null;var Bcm=null;function HJ(){HJ=V(Cp);ASS();}
function ASS(){var b,c,d,e,f,g,h,i,j,k,l;b=new Cp;HJ();b.t=B(616);b.q=0;b.db=B(617);BaZ=b;c=new Cp;c.t=B(618);c.q=1;c.db=B(619);Bcd=c;d=new Cp;d.t=B(620);d.q=2;d.db=B(621);Bce=d;e=new Cp;e.t=B(622);e.q=3;e.db=B(623);Bcf=e;f=new Cp;f.t=B(624);f.q=4;f.db=B(625);Bcg=f;g=new Cp;g.t=B(626);g.q=5;g.db=B(627);Bch=g;h=new Cp;h.t=B(628);h.q=6;h.db=B(629);Bci=h;i=new Cp;i.t=B(630);i.q=7;i.db=B(631);Bcj=i;j=new Cp;j.t=B(632);j.q=8;j.db=B(633);Bck=j;k=new Cp;k.t=B(634);k.q=9;k.db=B(635);A$c=k;l=new Cp;l.t=B(636);l.q=10;l.db
=B(637);Bcl=l;Bcm=T(Cp,[b,c,d,e,f,g,h,i,j,k,l]);}
function S3(){var a=this;CF.call(a);a.DJ=0;a.kJ=null;a.mC=null;a.fu=null;a.gd=null;a.yj=null;}
function AAs(a){var b,c,d,e,f,g,h,i,j;b=AG7(R(a.x))*2|0;c=a.gd;if(!(c!==null&&c.y>=b)){if(c!==null){c.h=0;c.g=c.y;c.v=(-1);}c=a.mC;if(c!==null)MW(c);c=new LX;d=b+5000|0;e=S(S1(d));c.bP=1;c.x=e;a.mC=c;if(d<0){c=new Bh;f=new P;f.b=D(16);I(f,f.a,B(486));O(f,f.a,d,10);g=new N;h=f.b;b=f.a;Q();i=D(b);g.e=i;M(h,0,i,0,b);c.c=1;c.d=1;c.f=g;H(c);}f=new Ch;h=BF(d);f.v=(-1);f.y=d;f.g=d;B6();f.bh=A98;f.bl=0;f.U=h;f.h=0;f.g=d;f.b4=1;f.bt=0;f.bh=CU();a.gd=f;}d=R(a.x);j=R(a.mC.x);AT4(d,j,b);BS(a.gd,0);Cj(a.gd,b);d=0;while(d
<b){LM(a.gd,d,Na(R(a.mC.x),d));d=d+1|0;}BS(a.gd,0);Cj(a.gd,b);return a.gd;}
function ZO(a){var b,c,d,e,f,g,h,i,j;b=AXs(R(a.x))*20|0;c=a.fu;if(!(c!==null&&c.y>=b)){if(c!==null){c.h=0;c.g=c.y;c.v=(-1);}c=a.kJ;if(c!==null)MW(c);c=new LX;d=b+5000|0;e=S(S1(d));c.bP=1;c.x=e;a.kJ=c;if(d<0){c=new Bh;f=new P;f.b=D(16);I(f,f.a,B(486));O(f,f.a,d,10);g=new N;h=f.b;b=f.a;Q();i=D(b);g.e=i;M(h,0,i,0,b);c.c=1;c.d=1;c.f=g;H(c);}f=new Ch;h=BF(d);f.v=(-1);f.y=d;f.g=d;B6();f.bh=A98;f.bl=0;f.U=h;f.h=0;f.g=d;f.b4=1;f.bt=0;f.bh=CU();a.fu=f;}d=R(a.x);j=R(a.kJ.x);AO6(d,j,b);BS(a.fu,0);Cj(a.fu,b);d=0;while(d
<b){LM(a.fu,d,Na(R(a.kJ.x),d));d=d+1|0;}BS(a.fu,0);Cj(a.fu,b);return a.fu;}
function AXz(b,c){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawList);var cmdBuffer=nativeObject.get_CmdBuffer();var drawCmd=cmdBuffer.getData(c);return $rt_globals.imgui.getPointer(drawCmd);}
function AXM(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawList);return nativeObject.CmdBuffer.size();}
function AT4(b,c,d){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawList);var charArray=$rt_globals.imgui.wrapPointer(c,$rt_globals.imgui.IDLByteArray);var charArrayPtr=charArray.getPointer();$rt_globals.imgui.ImHelper.prototype.memcpyIdx(charArrayPtr,nativeObject,d);}
function AG7(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawList);return nativeObject.IdxBuffer.size();}
function AO6(b,c,d){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawList);var charArray=$rt_globals.imgui.wrapPointer(c,$rt_globals.imgui.IDLByteArray);var charArrayPtr=charArray.getPointer();$rt_globals.imgui.ImHelper.prototype.memcpyVtx(charArrayPtr,nativeObject,d);}
function AXs(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawList);return nativeObject.VtxBuffer.size();}
var Dl=G(CF);
var Bcn=null;function AA6(){Bcn=new Dl;}
function Wi(b,c){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImGuiIO);io.set_ConfigFlags(c);}
function Oz(b){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImGuiIO);return io.get_WantCaptureMouse();}
function Vz(b,c,d,e,f){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.IDLImGuiIO);var widthIntArray=$rt_globals.imgui.wrapPointer(d,$rt_globals.imgui.IDLIntArray);var heightIntArray=$rt_globals.imgui.wrapPointer(e,$rt_globals.imgui.IDLIntArray);var bytesPerPixelArray=$rt_globals.imgui.wrapPointer(f,$rt_globals.imgui.IDLIntArray);var pixelBufferArray=$rt_globals.imgui.wrapPointer(c,$rt_globals.imgui.IDLByteArray);var widthArr=widthIntArray.getPointer();var heightArr=heightIntArray.getPointer();var bytesPerPixelArr
=bytesPerPixelArray.getPointer();var pixelBufferArr=pixelBufferArray.getPointer();$rt_globals.imgui.ImHelper.prototype.memcpyFont(io,pixelBufferArr,widthArr,heightArr,bytesPerPixelArr);}
function Yj(b,c){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImGuiIO);(io.get_Fonts()).set_TexID(c);}
function VV(b,c){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImGuiIO);if(c>0&&c<0x10000)io.AddInputCharacter(c);}
function Ez(b,c,d){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImGuiIO);io.AddKeyEvent(c,d);}
function Sy(b,c,d){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImGuiIO);io.AddMousePosEvent(c,d);}
function OZ(b,c,d){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImGuiIO);io.AddMouseButtonEvent(c,d);}
function XR(b,c,d){var io=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImGuiIO);io.AddMouseWheelEvent(c,d);}
function RX(){var a=this;F$.call(a);a.t$=0;a.t8=0;a.t9=0;a.l$=0;}
function XV(a,b,c,d,e){var f,g,h;f=S(ED());if(BU(f,BI))g=null;else{if(Bat===null)Bat=new Dl;g=Bat;if(!g.bP)g.x=f;}if(!e)a.t$=1;c=Bo(e,1);if(!c)a.t8=1;if(e==2)a.t9=1;f=S(ED());if(BU(f,BI))h=null;else{if(Bat===null)Bat=new Dl;h=Bat;if(!h.bP)h.x=f;}a.l$=Oz(R(h.x))?1:0;OZ(R(g.x),e,!!1);if(a.l$)return 1;if(!c)$rt_globals.imgui.ImGui.prototype.SetWindowFocus($rt_ustr(null));return 0;}
function UH(a,b,c,d,e){var f,g;f=S(ED());if(BU(f,BI))g=null;else{if(Bat===null)Bat=new Dl;g=Bat;if(!g.bP)g.x=f;}if(!e)a.t$=0;if(e==1)a.t8=0;if(e==2)a.t9=0;OZ(R(g.x),e,!!0);a.l$=0;return 0;}
function YJ(a,b){var c,d,e,f,g,h,i;c=S(ED());if(BU(c,BI))d=null;else{if(Bat===null)Bat=new Dl;d=Bat;if(!d.bP)d.x=c;}e=0;f=0;g=0;h=0;if(!(b!=129&&b!=130))e=1;if(!(b!=59&&b!=60))f=1;if(!(b!=57&&b!=58))g=1;if(b==63)h=1;i=AGi(b);if(h){Bg();b=Bco;Ez(R(d.x),b,!!1);}else if(e){Bg();b=Bcp;Ez(R(d.x),b,!!1);}else if(f){Bg();b=Bcq;Ez(R(d.x),b,!!1);}else if(g){Bg();e=Bcr;Ez(R(d.x),e,!!1);}Ez(R(d.x),i,!!1);Zc();if(!(Qm(BbY)?1:0))return 0;return 1;}
function WN(a,b){var c,d,e,f,g,h,i;c=S(ED());if(BU(c,BI))d=null;else{if(Bat===null)Bat=new Dl;d=Bat;if(!d.bP)d.x=c;}e=0;f=0;g=0;h=0;if(!(b!=129&&b!=130))e=1;if(!(b!=59&&b!=60))f=1;if(!(b!=57&&b!=58))g=1;if(b==63)h=1;i=AGi(b);if(h){Bg();b=Bco;Ez(R(d.x),b,!!0);}else if(e){Bg();b=Bcp;Ez(R(d.x),b,!!0);}else if(f){Bg();b=Bcq;Ez(R(d.x),b,!!0);}else if(g){Bg();e=Bcr;Ez(R(d.x),e,!!0);}Ez(R(d.x),i,!!0);Zc();if(!(Qm(BbY)?1:0))return 0;return 1;}
function AGi(b){a:{switch(b){case 3:break;case 4:case 5:case 6:case 17:case 18:case 23:case 24:case 25:case 26:case 27:case 28:case 64:case 65:case 77:case 78:case 79:case 80:case 81:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 91:case 94:case 95:case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 113:case 114:case 117:case 118:case 119:case 122:case 125:case 126:case 127:case 128:case 159:break a;case 7:Bg();return Bcs;case 8:Bg();return Bct;case 9:Bg();return Bcu;case 10:Bg();return Bcv;case 11:Bg();return Bcw;case 12:Bg();return Bcx;case 13:Bg();return Bcy;case 14:Bg();return Bcz;case 15:Bg();return BcA;case 16:Bg();return BcB;case 19:Bg();return BcC;case 20:Bg();return BcD;case 21:Bg();return BcE;case 22:Bg();return BcF;case 29:Bg();return BcG;case 30:Bg();return BcH;case 31:Bg();return BcI;case 32:Bg();return BcJ;case 33:Bg();return BcK;case 34:Bg();return BcL;case 35:Bg();return BcM;case 36:Bg();return BcN;case 37:Bg();return BcO;case 38:Bg();return BcP;case 39:Bg();return BcQ;case 40:Bg();return BcR;case 41:Bg();return BcS;case 42:Bg();return BcT;case 43:Bg();return BcU;case 44:Bg();return BcV;case 45:Bg();return BcW;case 46:Bg();return BcX;case 47:Bg();return BcY;case 48:Bg();return BcZ;case 49:Bg();return Bc0;case 50:Bg();return Bc1;case 51:Bg();return Bc2;case 52:Bg();return Bc3;case 53:Bg();return Bc4;case 54:Bg();return Bc5;case 55:Bg();return Bc6;case 56:Bg();return Bc7;case 57:Bg();return Bc8;case 58:Bg();return Bc9;case 59:Bg();return Bc$;case 60:Bg();return Bc_;case 61:Bg();return Bda;case 62:Bg();return Bdb;case 63:Bg();return Bdc;case 66:Bg();return Bdd;case 67:Bg();return Bde;case 68:Bg();return Bdf;case 69:Bg();return Bdg;case 70:Bg();return Bdh;case 71:Bg();return Bdi;case 72:Bg();return Bdj;case 73:Bg();return Bdk;case 74:Bg();return Bdl;case 75:Bg();return Bdm;case 76:Bg();return Bdn;case 82:Bg();return Bdo;case 92:Bg();return Bdp;case 93:Bg();return Bdq;case 111:Bg();return Bdr;case 112:Bg();return Bds;case 115:Bg();return Bdt;case 116:Bg();return Bdu;case 120:Bg();return Bdv;case 121:Bg();return Bdw;case 123:Bg();return Bdx;case 124:Bg();return Bdy;case 129:Bg();return Bdz;case 130:Bg();return BdA;case 131:Bg();return BdB;case 132:Bg();return BdC;case 133:Bg();return BdD;case 134:Bg();return BdE;case 135:Bg();return BdF;case 136:Bg();return BdG;case 137:Bg();return BdH;case 138:Bg();return BdI;case 139:Bg();return BdJ;case 140:Bg();return BdK;case 141:Bg();return BdL;case 142:Bg();return BdM;case 143:Bg();return BdN;case 144:Bg();return BdO;case 145:Bg();return BdP;case 146:Bg();return BdQ;case 147:Bg();return BdR;case 148:Bg();return BdS;case 149:Bg();return BdT;case 150:Bg();return BdU;case 151:Bg();return BdV;case 152:Bg();return BdW;case 153:Bg();return BdX;case 154:Bg();return BdY;case 155:Bg();return BdZ;case 156:Bg();return Bd0;case 157:Bg();return Bd1;case 158:Bg();return Bd2;case 160:Bg();return Bd3;case 161:Bg();return Bd4;default:break a;}Bg();return Bd5;}Bg();return Bd6;}
var P_=G();
var BbD=null;function A2_(){A2_=V(P_);AV5();}
function AV5(){var b,c;L2();b=Bc((BbA.cu()).data.length);c=b.data;BbD=b;c[Bby.q]=1;c[Bbz.q]=2;c[BaM.q]=3;c[BaL.q]=4;}
var JL=G(0);
function L_(){var a=this;C.call(a);a.gk=null;a.h3=null;a.tx=0;a.Cd=0;a.pZ=0;a.jy=0;a.lR=0;}
function A2K(a,b,c){var d=new L_();ADP(d,a,b,c);return d;}
function ADP(a,b,c,d){var e,f,g,h,i,j;a.jy=0;a.lR=0;a.Cd=b;a.gk=d;c=Db(d.eu/4|0,c);if(!A5g){e=Ck(c);f=e.data.length;d=new Ig;g=0+f|0;d.v=(-1);d.y=f;d.g=f;d.h=0;d.g=g;d.iO=0;d.kk=0;d.it=e;}else{c=c*4|0;if(c<0){d=new Bh;h=new P;h.b=D(16);Ew(h,h.a,B(486));O(h,h.a,c,10);i=new N;e=h.b;c=h.a;Q();j=D(c);i.e=j;M(e,0,j,0,c);d.c=1;d.d=1;d.f=i;H(d);}h=new Ch;e=BF(c);h.v=(-1);h.y=c;h.g=c;B6();h.bh=A98;h.bl=0;h.U=e;h.h=0;h.g=c;h.b4=1;h.bt=0;h.bh=CU();d=Fr(h);}a.h3=d;d.g=d.h;d.h=0;d.v=(-1);d=A99;h=d.l.createBuffer();f=d.cZ;d.cZ
=f+1|0;B$(d.dX,f,Cb(h));a.tx=f;a.pZ=!b?35048:35044;}
function AU3(a,b,c,d){var e,f,g;a.jy=1;e=a.h3;f=null;g=e instanceof Fx;if(g)f=Fr(e);else if(e instanceof En)f=e;if(f===null){f=new Bb;f.c=1;f.d=1;f.f=B(638);H(f);}f.h=0;f.g=f.y;f.v=(-1);BS(e,0);IO(f,b,c,d);BS(e,0);if(!g)Cj(e,d);else Cj(e,d<<2);BS(a.h3,0);Cj(a.h3,d);if(a.lR){e=A99;f=a.h3;e.dR(34962,f.g,f,a.pZ);a.jy=0;}}
function ASr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=A99;d.cB(34962,a.tx);if(a.jy){e=a.h3;d.dR(34962,e.g,e,a.pZ);a.jy=0;}a:{f=a.gk.cD.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.gk.cD.data[g];j=h[g];if(j>=0){e=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}e.gn(j);k=i.cU;l=i.dg;m=i.di;n=a.gk.eu;o=i.g1;e=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}e.gf(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.gk.cD.data[g];d=i.c3;e=b.dM;p=(-1);j=Eu(e,d);if(j>=0)p=e.dC.data[j];if(p>=0){e=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba
=0;}e.gn(p);j=i.cU;k=i.dg;l=i.di;m=a.gk.eu;n=i.g1;e=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}e.gf(p,j,k,l,m,n);}g=g+1|0;}}a.lR=1;}
function AQQ(a,b,c){var d,e,f,g,h,i,j,k,l;a:{d=A99;e=a.gk.cD.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}h.fA(g);}f=f+1|0;}}i=0;while(i<e){j=a.gk.cD.data[i].c3;k=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}l=A99;h=b.dM;g=(-2);f=Eu(h,j);if(f>=0)g=h.dC.data[f];if(g==(-2)){g=l.iw(b.cO,j);Ep(b.dM,j,g);}if(g!=(-1))k.fA(g);i=i+1|0;}}d.cB(34962,0);a.lR=0;}
var J$=G(0);
function IJ(){var a=this;C.call(a);a.fV=null;a.py=0;a.sj=0;a.go=0;a.kd=0;a.lm=0;}
function AKA(a){return a.fV.g;}
function AQp(a){return a.fV.y;}
function AMv(a,b,c,d){var e;a.go=1;e=a.fV;e.h=0;e.g=e.y;e.v=(-1);Td(e,b,c,d);e=a.fV;c=e.h;e.g=c;e.h=0;e.v=(-1);if(a.kd){A99.dR(34963,c,e,a.lm);a.go=0;}}
function AHy(a,b){a.go=a.go|b;return a.fV;}
function AXp(a){var b,c,d;b=a.py;if(!b){c=new Bb;c.c=1;c.d=1;c.f=B(639);H(c);}A99.cB(34963,b);if(a.go){c=A99;d=a.fV;c.dR(34963,d.g,d,a.lm);a.go=0;}a.kd=1;}
function AV1(a){A99.cB(34963,0);a.kd=0;}
function AAT(){var a=this;C.call(a);a.ge=null;a.fs=null;a.fm=null;a.ru=0;a.rQ=0;a.C4=0;a.pp=0;a.jm=0;a.l4=0;}
function A33(a,b,c){var d=new AAT();AMf(d,a,b,c);return d;}
function AMf(a,b,c,d){var e,f,g,h,i,j,k;a.jm=0;a.l4=0;a.C4=b;a.ge=d;c=Db(d.eu,c);if(!A5g){e=BF(c);f=e.data.length;d=new Ch;g=0+f|0;d.v=(-1);d.y=f;d.g=f;B6();d.bh=A98;d.bl=0;d.U=e;d.h=0;d.g=g;d.b4=0;d.bt=0;}else{if(c<0){d=new Bh;h=new P;h.b=D(16);Ew(h,h.a,B(486));O(h,h.a,c,10);i=new N;e=h.b;c=h.a;Q();j=D(c);i.e=j;M(e,0,j,0,c);d.c=1;d.d=1;d.f=i;H(d);}d=new Ch;e=BF(c);d.v=(-1);d.y=c;d.g=c;B6();d.bh=A98;d.bl=0;d.U=e;d.h=0;d.g=c;d.b4=1;d.bt=0;d.bh=CU();}a.fm=d;a.rQ=1;a.pp=!b?35048:35044;a.fs=Fr(d);d=A99;h=d.l.createBuffer();k
=d.cZ;d.cZ=k+1|0;B$(d.dX,k,Cb(h));A99.cB(34962,k);A99.dR(34962,a.fm.y,null,a.pp);A99.cB(34962,0);a.ru=k;d=a.fs;d.g=d.h;d.h=0;d.v=(-1);d=a.fm;d.g=d.h;d.h=0;d.v=(-1);}
function AHT(a,b,c,d){var e,f,g;a.jm=1;if(!a.rQ){e=a.fs;e.h=0;e.g=e.y;e.v=(-1);IO(e,b,c,d);e=a.fs;e.g=e.h;e.h=0;e.v=(-1);BS(a.fm,0);Cj(a.fm,a.fs.g<<2);}else{e=a.fm;f=null;g=e instanceof Fx;if(g)f=Fr(e);else if(e instanceof En)f=e;if(f===null){f=new Bb;f.c=1;f.d=1;f.f=B(638);H(f);}f.h=0;f.g=f.y;f.v=(-1);BS(e,0);IO(f,b,c,d);BS(e,0);if(!g)Cj(e,d);else Cj(e,d<<2);BS(a.fs,0);Cj(a.fs,d);}if(a.l4){e=A99;f=a.fm;e.i1(34962,0,f.g,f);a.jm=0;}}
function AMp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=A99;d.cB(34962,a.ru);if(a.jm){Cj(a.fm,a.fs.g*4|0);e=a.fm;d.dR(34962,e.g,e,a.pp);a.jm=0;}a:{f=a.ge.cD.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.ge.cD.data[g];j=h[g];if(j>=0){e=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}e.gn(j);k=i.cU;l=i.dg;m=i.di;n=a.ge.eu;o=i.g1;e=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}e.gf(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.ge.cD.data[g];p=i.c3;e=b.dM;q=(-1);j=Eu(e,p);if(j>=0)q=e.dC.data[j];if(q>=0){e=A99;if
(b.ba){B_(b,b.bV,b.bT);b.ba=0;}e.gn(q);j=i.cU;k=i.dg;l=i.di;m=a.ge.eu;n=i.g1;e=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}e.gf(q,j,k,l,m,n);}g=g+1|0;}}a.l4=1;}
function AJI(a,b,c){var d,e,f,g,h,i,j,k,l;a:{d=A99;e=a.ge.cD.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}h.fA(g);}f=f+1|0;}}i=0;while(i<e){j=a.ge.cD.data[i].c3;k=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}l=A99;h=b.dM;g=(-2);f=Eu(h,j);if(f>=0)g=h.dC.data[f];if(g==(-2)){g=l.iw(b.cO,j);Ep(b.dM,j,g);}if(g!=(-1))k.fA(g);i=i+1|0;}}d.cB(34962,0);a.l4=0;}
function AC7(){var a=this;C.call(a);a.gI=null;a.fp=null;a.tB=0;a.AO=0;a.gN=0;a.l5=0;a.ua=0;}
function AX1(a,b){var c=new AC7();ASh(c,a,b);return c;}
function ASh(a,b,c){var d,e,f,g,h,i,j,k;a.gN=1;a.l5=0;c=c*2|0;if(!A5g){d=BF(c);e=d.data.length;f=new Ch;g=0+e|0;f.v=(-1);f.y=e;f.g=e;B6();f.bh=A98;f.bl=0;f.U=d;f.h=0;f.g=g;f.b4=0;f.bt=0;}else{if(c<0){f=new Bh;h=new P;h.b=D(16);Ew(h,h.a,B(486));O(h,h.a,c,10);i=new N;d=h.b;c=h.a;Q();j=D(c);i.e=j;M(d,0,j,0,c);f.c=1;f.d=1;f.f=i;H(f);}f=new Ch;d=BF(c);f.v=(-1);f.y=c;f.g=c;B6();f.bh=A98;f.bl=0;f.U=d;f.h=0;f.g=c;f.b4=1;f.bt=0;f.bh=CU();}a.fp=f;a.AO=1;a.ua=!b?35048:35044;f=MR(f);a.gI=f;f.g=f.h;f.h=0;f.v=(-1);f=a.fp;f.g
=f.h;f.h=0;f.v=(-1);f=A99;h=f.l.createBuffer();k=f.cZ;f.cZ=k+1|0;B$(f.dX,k,Cb(h));A99.cB(34963,k);A99.dR(34963,a.fp.y,null,a.ua);A99.cB(34963,0);a.tB=k;}
function ANs(a){return a.gI.g;}
function AP3(a){return a.gI.y;}
function ATs(a,b,c,d){var e,f;a.gN=1;e=a.gI;e.h=0;e.g=e.y;e.v=(-1);Td(e,b,c,d);e=a.gI;e.g=e.h;e.h=0;e.v=(-1);BS(a.fp,0);Cj(a.fp,d<<1);if(a.l5){e=A99;f=a.fp;e.i1(34963,0,f.g,f);a.gN=0;}}
function AWP(a,b){a.gN=a.gN|b;return a.gI;}
function ALe(a){var b,c,d;b=a.tB;if(!b){c=new Bb;c.c=1;c.d=1;c.f=B(640);H(c);}A99.cB(34963,b);if(a.gN){Cj(a.fp,a.gI.g*2|0);c=A99;d=a.fp;c.i1(34963,0,d.g,d);a.gN=0;}a.l5=1;}
function AH9(a){A99.cB(34963,0);a.l5=0;}
function N$(){var a=this;C.call(a);a.ia=null;a.hi=null;a.os=0;a.Ck=0;a.qa=0;a.js=0;a.mW=0;a.pE=0;a.ex=null;}
var Bd7=null;function AZa(){AZa=V(N$);AX8();}
function A2C(a,b,c){var d=new N$();ABe(d,a,b,c);return d;}
function ABe(a,b,c,d){var e,f,g,h,i,j;AZa();a.js=0;a.mW=0;a.pE=(-1);e=new Do;e.dy=1;e.bH=Bc(16);a.ex=e;a.Ck=b;a.ia=d;c=Db(d.eu/4|0,c);if(!A5g){f=Ck(c);g=f.data.length;d=new Ig;h=0+g|0;d.v=(-1);d.y=g;d.g=g;d.h=0;d.g=h;d.iO=0;d.kk=0;d.it=f;}else{c=c*4|0;if(c<0){d=new Bh;e=new P;e.b=D(16);Ew(e,e.a,B(486));O(e,e.a,c,10);i=new N;f=e.b;c=e.a;Q();j=D(c);i.e=j;M(f,0,j,0,c);d.c=1;d.d=1;d.f=i;H(d);}e=new Ch;f=BF(c);e.v=(-1);e.y=c;e.g=c;B6();e.bh=A98;e.bl=0;e.U=f;e.h=0;e.g=c;e.b4=1;e.bt=0;e.bh=CU();d=Fr(e);}a.hi=d;d.g
=d.h;d.h=0;d.v=(-1);d=A99;e=d.l.createBuffer();g=d.cZ;d.cZ=g+1|0;B$(d.dX,g,Cb(e));a.os=g;a.qa=!b?35048:35044;d=Bd7;d.h=0;d.g=d.y;d.v=(-1);A$5.vG(1,d);d=Bd7;c=d.h;if(c<d.g){d.h=c+1|0;a.pE=d.kE(c);return;}d=new Ie;d.c=1;d.d=1;H(d);}
function AQ6(a,b,c,d){var e,f,g;a.js=1;e=a.hi;f=null;g=e instanceof Fx;if(g)f=Fr(e);else if(e instanceof En)f=e;if(f===null){f=new Bb;f.c=1;f.d=1;f.f=B(638);H(f);}f.h=0;f.g=f.y;f.v=(-1);BS(e,0);IO(f,b,c,d);BS(e,0);if(!g)Cj(e,d);else Cj(e,d<<2);BS(a.hi,0);Cj(a.hi,d);if(a.mW){e=A99;f=a.hi;e.dR(34962,f.g,f,a.qa);a.js=0;}}
function AOi(a,b,c){var d;d=A$5;d.qY(a.pE);AE4(a,b,c);if(a.js){d.cB(34962,a.os);b=a.hi;Cj(b,b.g);b=a.hi;d.dR(34962,b.g,b,a.qa);a.js=0;}a.mW=1;}
function AE4(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.ex.Z;e=!d?0:1;a:{f=a.ia.cD.data.length;if(e){if(c===null){d=0;b:{while(true){if(!e)break b;if(d>=f)break b;g=a.ia.cD.data[d].c3;h=b.dM;i=(-1);e=Eu(h,g);if(e>=0)i=h.dC.data[e];g=a.ex;if(d>=g.Z)break;e=i!=g.bH.data[d]?0:1;d=d+1|0;}h=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,d,10);I(b,b.a,B(37));f=g.Z;O(b,b.a,f,10);g=new N;c=b.b;d=b.a;Q();j=D(d);g.e=j;M(c,0,j,0,d);h.c=1;h.d=1;h.f=g;H(h);}}else{j=c.data;e=j.length!=d?0:1;d=0;while(e){if(d>=f)break a;e=j[d]
!=FS(a.ex,d)?0:1;d=d+1|0;}}}}c:{if(!e){d:{A9r.cB(34962,a.os);if(a.ex.Z){k=a.ia.cD.data.length;d=0;while(true){if(d>=k)break d;g=a.ex;if(d>=g.Z)break;i=g.bH.data[d];if(i>=0){g=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}g.fA(i);}d=d+1|0;}h=new Y;b=new P;b.b=D(16);I(b,b.a,B(36));O(b,b.a,d,10);I(b,b.a,B(37));f=g.Z;O(b,b.a,f,10);g=new N;c=b.b;d=b.a;Q();j=D(d);g.e=j;M(c,0,j,0,d);h.c=1;h.d=1;h.f=g;H(h);}}a.ex.Z=0;d=0;while(true){if(d>=f)break c;l=a.ia.cD.data[d];if(c!==null){j=c.data;E4(a.ex,j[d]);}else{g=a.ex;h=l.c3;m=
b.dM;e=(-1);i=Eu(m,h);if(i>=0)e=m.dC.data[i];E4(g,e);}i=FS(a.ex,d);if(i>=0){g=A99;if(b.ba){B_(b,b.bV,b.bT);b.ba=0;}g.gn(i);e=l.cU;k=l.dg;n=l.di;o=a.ia.eu;p=l.g1;g=A99;ACs(b);g.gf(i,e,k,n,o,p);}d=d+1|0;}}}}
function AJg(a,b,c){A$5.qY(0);a.mW=0;}
function AX8(){var b,c,d,e;if(!A5g){b=Bc(1);c=b.data.length;d=new GH;e=0+c|0;d.v=(-1);d.y=c;d.g=c;d.h=0;d.g=e;d.hc=0;d.h6=0;d.gX=b;}else{d=new Ch;b=BF(4);d.v=(-1);d.y=4;d.g=4;B6();d.bh=A98;d.bl=0;d.U=b;d.h=0;d.g=4;d.b4=1;d.bt=0;d.bh=CU();d=Gx(d);}Bd7=d;}
var QD=G(L_);
var NX=G(IJ);
var FN=G(BG);
var A9$=null;var A9_=null;var Bd8=null;function AG_(){AG_=V(FN);ARH();}
function ARH(){var b,c;b=new FN;AG_();b.t=B(641);b.q=0;A9$=b;c=new FN;c.t=B(642);c.q=1;A9_=c;Bd8=T(FN,[b,c]);}
var Sv=G();
var Bd9=0;function AEK(b,c,d,e){var f,g,h,i,j,k,l,m,n;if(!Bd9){Rc(b,c,d,e);return;}Lp();f=A_n;if(f!==A_q&&f!==f&&f!==A_s)AEu(b,c,d,e);else{g=A9r;f=c.bD;if(f===null)h=6408;else a:{e=f.ch;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Bb;g=new P;g.b=D(16);DI(g,g.a,B(48));O(g,g.a,e,10);f=new N;i=g.b;d=g.a;Q();j=D(d);f.e=j;M(i,0,j,0,d);c.c=1;c.d=1;c.f=f;H(c);}k=f===null?c.c5:f.cN;l=f===null?c.c6:f.cM;if(f===null)m=6408;else b:{m=f.ch;switch
(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Bb;g=new P;CO(g);g.b=D(16);AGl(g,g.a,B(48));O(g,g.a,m,10);f=new N;i=g.b;d=g.a;Q();j=D(d);f.e=j;M(i,0,j,0,d);c.c=1;c.d=1;c.f=f;H(c);}if(f===null)n=5121;else c:{n=f.ch;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new Bb;g=new P;g.b=D(16);DI(g,g.a,B(48));O(g,g.a,n,10);f=new N;i=g.b;d=g.a;Q();j=D(d);f.e=j;M(i,0,j,0,d);c.c=1;c.d=1;c.f=f;H(c);}n
=5121;}g.fw(b,0,h,k,l,0,m,n,c.h2);A99.k5(b);}}
function AEu(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=A97.ii.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(A97.ii.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=A99.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new B9;h.G=g;i=h;g.classObject=i;}}if(h.bb===null)h.bb=$rt_str(h.G.$meta.name);if(!BC(h.bb,B(643))&&A$5===null){Rc(b,c,d,e);break a;}}g=A9r;i=c.bD;if(i===null)j=6408;else b:{e=i.ch;switch(e){case 1:j=6406;break b;case 2:j=6410;break b;case 3:case 5:j=6407;break b;case 4:case 6:j
=6408;break b;default:}c=new Bb;g=new P;g.b=D(16);CR(g,g.a,C2(B(48)));O(g,g.a,e,10);i=new N;k=g.b;d=g.a;l=D(d);i.e=l;M(k,0,l,0,d);c.c=1;c.d=1;c.f=i;H(c);}m=i===null?c.c5:i.cN;n=i===null?c.c6:i.cM;if(i===null)o=6408;else c:{f=i.ch;switch(f){case 1:o=6406;break c;case 2:o=6410;break c;case 3:case 5:o=6407;break c;case 4:case 6:o=6408;break c;default:}c=new Bb;g=new P;g.b=D(16);DI(g,g.a,B(48));O(g,g.a,f,10);i=new N;k=g.b;d=g.a;Q();l=D(d);i.e=l;M(k,0,l,0,d);c.c=1;c.d=1;c.f=i;H(c);}if(i===null)f=5121;else d:{f=i.ch;switch
(f){case 1:case 2:case 3:case 4:break;case 5:f=33635;break d;case 6:f=32819;break d;default:c=new Bb;g=new P;g.b=D(16);CR(g,g.a,C2(B(48)));O(g,g.a,f,10);i=new N;k=g.b;d=g.a;l=D(d);i.e=l;M(k,0,l,0,d);c.c=1;c.d=1;c.f=i;H(c);}f=5121;}g.fw(b,0,j,m,n,0,o,f,c.h2);A99.k5(b);}}
function Rc(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=A9r;g=c.bD;if(g===null)h=6408;else a:{i=g.ch;switch(i){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Bb;f=new P;f.b=D(16);CR(f,f.a,C2(B(48)));O(f,f.a,i,10);g=new N;j=f.b;d=f.a;k=D(d);g.e=k;M(j,0,k,0,d);c.c=1;c.d=1;c.f=g;H(c);}l=g===null?c.c5:g.cN;m=g===null?c.c6:g.cM;if(g===null)n=6408;else b:{n=g.ch;switch(n){case 1:n=6406;break b;case 2:n=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n
=6408;break b;default:}c=new Bb;f=new P;f.b=D(16);DI(f,f.a,B(48));O(f,f.a,n,10);g=new N;j=f.b;d=f.a;Q();k=D(d);g.e=k;M(j,0,k,0,d);c.c=1;c.d=1;c.f=g;H(c);}if(g===null)o=5121;else c:{o=g.ch;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new Bb;f=new P;f.b=D(16);CR(f,f.a,C2(B(48)));O(f,f.a,o,10);g=new N;j=f.b;d=f.a;k=D(d);g.e=k;M(j,0,k,0,d);c.c=1;c.d=1;c.f=g;H(c);}f.fw(b,0,h,l,m,0,n,o,c.h2);if(A99===null&&d!=e){c=new Bb;c.c=1;c.d=1;c.f=B(644);H(c);}f
=c.bD;p=(f===null?c.c5:f.cN)/2|0;i=(f===null?c.c6:f.cM)/2|0;h=1;while(p>0&&i>0){g=new Hj;f=c.bD;if(f===null){HT();f=A$a;}else f=HD(f.ch);I5(g,p,i,f);Hy();TQ(g,A$b);f=c.bD;XZ(g,c,0,0,f===null?c.c5:f.cN,f===null?c.c6:f.cM,0,0,p,i);if(h>1)QU(c);A9r.fw(b,h,Wl(g),Ku(g),KE(g),0,Xa(g),Yq(g),g.h2);p=Ku(g)/2|0;i=KE(g)/2|0;h=h+1|0;c=g;}}
function ADa(){Bd9=1;}
var Sg=G();
var Ba1=null;function AZh(){AZh=V(Sg);AX5();}
function AX5(){var b,c;ACC();b=Bc((Bcc.cu()).data.length);c=b.data;Ba1=b;c[Ba0.q]=1;c[Bcb.q]=2;}
function Tz(){CF.call(this);this.p6=null;}
function ZF(a){var b,c;b=S(ATg(R(a.x)));if(BU(b,BI))return null;if(a.p6===null){c=new Dh;AGU();a.p6=c;}c=a.p6;if(!c.bP)c.x=b;return c;}
function ASf(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawCmd);var textureId=$rt_globals.imgui.ImHelper.prototype.getTextureId(nativeObject);return textureId;}
function AQW(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawCmd);var jsObj=nativeObject.get_IdxOffset();return jsObj;}
function AUF(b){var nativeObject=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawCmd);var jsObj=nativeObject.get_ElemCount();return jsObj;}
function ATg(b){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImDrawCmd);var returnedJSObj=jsObj.get_ClipRect();if(!returnedJSObj.hasOwnProperty('ptr'))return 0;return $rt_globals.imgui.getPointer(returnedJSObj);}
var KL=G(CF);
function II(b){var jsObj=new $rt_globals.imgui.IDLIntArray(b);return $rt_globals.imgui.getPointer(jsObj);}
function Kh(b,c){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.IDLIntArray);var returnedJSObj=jsObj.getValue(c);return returnedJSObj;}
function AWx(b,c,d){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.IDLIntArray);jsObj.setValue(c,d);}
function AI0(b){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.IDLIntArray);var returnedJSObj=jsObj.getPointer();return returnedJSObj;}
var LX=G(CF);
function S1(b){var jsObj=new $rt_globals.imgui.IDLByteArray(b);return $rt_globals.imgui.getPointer(jsObj);}
function Na(b,c){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.IDLByteArray);var returnedJSObj=jsObj.getValue(c);return returnedJSObj;}
function HH(){var a=this;C.call(a);a.dw=null;a.bv=null;a.eE=null;a.kz=null;a.tp=null;a.wV=null;a.p2=null;a.eK=null;a.hd=0;}
var Bd$=null;var Bd_=null;var Bea=null;var Beb=null;function AVa(){AVa=V(HH);ASC();}
function A1L(){var a=new HH();ABi(a);return a;}
function ABi(a){var b;AVa();a.dw=Ck(24);b=new Bm;Cu();a.bv=b;b=new D0;Hr();b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=1.0;a.eE=b;b=new BA;b.dF=1.0;b.dE=1.0;a.kz=b;b=new Bq;Et();a.tp=b;a.wV=null;a.p2=new BA;a.hd=0;a.eK=new R6;}
function ACy(a,b,c,d,e){var f,g;f=a.tp;f.cd=b;f.cc=c;f.cb=d;f.ca=e;Dc(f);b=$rt_intBitsToFloat(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));g=a.dw.data;g[3]=b;g[9]=b;g[15]=b;g[21]=b;}
function Wb(a,b){var c,d,e,f,g;c=a.eE;d=b.bN;e=b.bL;f=b.bM;g=b.bU;c.bN=d;c.bL=e;c.bM=f;c.bU=g;a.hd=0;}
function AFK(a,b,c,d){var e;e=a.bv;e.k=b;e.j=c;e.i=d;a.hd=0;}
function AB2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.wV;if(b===null){c=0.0;d=c;}else{d= -b.dF;c= -b.dE;}e=a.dw.data;f=e[0]+d;b=a.kz;g=f*b.dF;h=(e[1]+c)*b.dE;f=e[2];b=a.eE;i=b.bU;j=i*g;k=b.bL;j=j+k*f;l=b.bM;e[0]=j-l*h;j=i*h+l*g;m=b.bN;e[1]=j-m*f;e[2]=i*f+m*h-k*g;i= -m*g-k*h-l*f;Fn(b);e=a.dw.data;f=e[0];j=e[1];k=e[2];b=a.eE;l=b.bN;m=i*l;n=b.bU;m=m+f*n;g=b.bM;m=m+j*g;h=b.bL;e[0]=m-k*h;e[1]=i*h+j*n+k*l-f*g;e[2]=i*g+k*n+f*h-j*l;Fn(b);e=a.dw.data;f=e[0];b=a.bv;e[0]=f+b.k-d;e[1]=e[1]+b.j-c;e[2]=e[2]+b.i;f=e[6]+d;b=a.kz;f
=f*b.dF;i=(e[7]+c)*b.dE;j=e[8];b=a.eE;k=b.bU;l=k*f;m=b.bL;l=l+m*j;n=b.bM;e[6]=l-n*i;l=k*i+n*f;g=b.bN;e[7]=l-g*j;e[8]=k*j+g*i-m*f;f= -g*f-m*i-n*j;Fn(b);e=a.dw.data;i=e[6];j=e[7];k=e[8];b=a.eE;l=b.bN;m=f*l;n=b.bU;m=m+i*n;g=b.bM;m=m+j*g;h=b.bL;e[6]=m-k*h;e[7]=f*h+j*n+k*l-i*g;e[8]=f*g+k*n+i*h-j*l;Fn(b);e=a.dw.data;f=e[6];b=a.bv;e[6]=f+b.k-d;e[7]=e[7]+b.j-c;e[8]=e[8]+b.i;f=e[12]+d;b=a.kz;f=f*b.dF;i=(e[13]+c)*b.dE;j=e[14];b=a.eE;k=b.bU;l=k*f;m=b.bL;l=l+m*j;n=b.bM;e[12]=l-n*i;l=k*i+n*f;g=b.bN;e[13]=l-g*j;e[14]=k*j
+g*i-m*f;f= -g*f-m*i-n*j;Fn(b);e=a.dw.data;i=e[12];j=e[13];k=e[14];b=a.eE;l=b.bN;m=f*l;n=b.bU;m=m+i*n;g=b.bM;m=m+j*g;h=b.bL;e[12]=m-k*h;e[13]=f*h+j*n+k*l-i*g;e[14]=f*g+k*n+i*h-j*l;Fn(b);e=a.dw.data;f=e[12];b=a.bv;e[12]=f+b.k-d;e[13]=e[13]+b.j-c;e[14]=e[14]+b.i;f=e[18]+d;b=a.kz;f=f*b.dF;i=(e[19]+c)*b.dE;j=e[20];b=a.eE;k=b.bU;l=k*f;m=b.bL;l=l+m*j;n=b.bM;e[18]=l-n*i;l=k*i+n*f;g=b.bN;e[19]=l-g*j;e[20]=k*j+g*i-m*f;f= -g*f-m*i-n*j;Fn(b);e=a.dw.data;i=e[18];j=e[19];k=e[20];b=a.eE;l=b.bN;m=f*l;n=b.bU;m=m+i*n;g=b.bM;m
=m+j*g;h=b.bL;e[18]=m-k*h;e[19]=f*h+j*n+k*l-i*g;e[20]=f*g+k*n+i*h-j*l;Fn(b);e=a.dw.data;f=e[18];b=a.bv;e[18]=f+b.k-d;e[19]=e[19]+b.j-c;e[20]=e[20]+b.i;a.hd=1;}
function ZD(a){var b,c,d,e,f,g;b=a.p2;c=b.dF;d= -c/2.0;c=d+c;e=b.dE;f=e/2.0;e=f-e;g=a.dw.data;g[0]=d;g[1]=f;g[2]=0.0;g[6]=c;g[7]=f;g[8]=0.0;g[12]=d;g[13]=e;g[14]=0.0;g[18]=c;g[19]=e;g[20]=0.0;a.hd=0;}
function U7(a){var b,c,d,e,f;b=a.eK.il;c=a.dw.data;d=b.lH;c[4]=d;e=b.h7;c[5]=e;f=b.yH;c[10]=f;c[11]=e;c[16]=d;d=b.mS;c[17]=d;c[22]=f;c[23]=d;}
function ASC(){var b;b=new Bm;Cu();Bd$=b;Bd_=new Bm;Bea=new Bm;b=new D0;Hr();b.bN=0.0;b.bL=0.0;b.bM=0.0;b.bU=0.0;Beb=b;}
function MF(){var a=this;C.call(a);a.DT=null;a.CP=0.0;a.AM=0.0;a.jY=null;a.jW=null;a.oC=null;a.lb=0;}
function Zv(a,b,c,d){var e,f,g,h,i;a.jY=B(645);DU();e=Bah;a.jW=e;a.oC=e;if(c<=0.0){b=new Bh;e=new P;e.b=D(16);I(e,e.a,B(646));Dz(e,e.a,c);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);b.c=1;b.d=1;b.f=f;H(b);}if(d>0.0){a.DT=b;a.CP=c;a.AM=d;return;}b=new Bh;e=new P;e.b=D(16);I(e,e.a,B(647));Dz(e,e.a,d);f=new N;g=e.b;h=e.a;Q();i=D(h);f.e=i;M(g,0,i,0,h);b.c=1;b.d=1;b.f=f;H(b);}
function ABP(a,b,c,d){var e,f,g,h,i,$$je;e=a.lb;if(!(e==2&&!d)&&e!=3){a.lb=d?2:1;while(true){try{f=YW(a,b,c);}catch($$e){$$je=Br($$e);if($$je instanceof BJ){g=$$je;b=new Mk;b.c=1;b.d=1;b.cX=g;H(b);}else{throw $$e;}}e=f.bo;if(e!=1?0:1)break;if(e?0:1){if(d){e=b.h;h=b.g;if(e>=h?0:1){g=a.jW;DU();if(g===Bah){i=h-e|0;b=new Cg;b.bo=2;b.bF=i;return b;}if((c.g-c.h|0)<=a.jY.e.data.length)return A5n;BS(b,e+(h-e|0)|0);if(a.jW===A$M){b=a.jY;LE(c,b,0,b.e.data.length);}}}return f;}if(e!=2?0:1){g=a.jW;DU();if(g===Bah)return f;if
(g===A$M){i=c.g-c.h|0;g=a.jY;e=g.e.data.length;if(i<e)return A5n;LE(c,g,0,e);}h=b.h;e=f.bo;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Gl;b.c=1;b.d=1;H(b);}BS(b,h+f.bF|0);}else if(e!=3?0:1){g=a.oC;DU();if(g===Bah)return f;if(g===A$M){i=c.g-c.h|0;g=a.jY;e=g.e.data.length;if(i<e)return A5n;LE(c,g,0,e);}h=b.h;e=f.bo;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Gl;b.c=1;b.d=1;H(b);}BS(b,h+f.bF|0);}}return f;}b=new BK;b.c=1;b.d=1;H(b);}
var MK=G(Ia);
function ANR(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidBody);jsObj.setMass(c);}
var Px=G(MK);
function ABS(a,b){var c,d;c=R(a.u);d=b===null?0:R(b.u);Mw(c,d);}
function Mw(b,c){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidDynamic);jsObj.setLinearVelocity(c);}
function AJQ(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxRigidDynamic);jsObj.putToSleep();}
var HS=G(Ec);
function Td(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.dO()){e=new DD;e.c=1;e.d=1;H(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new F3;e.c=1;e.d=1;H(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Y;j=new P;j.b=D(16);I(j,j.a,B(648));O(j,j.a,i,10);I(j,j.a,B(473));O(j,j.a,f,10);k=new N;b=j.b;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.nG(g,h[c]);i=i+1|0;g=l;c=f;}a.h=a.h+d|0;return a;}e=new Y;j=new P;j.b=D(16);I(j,j.a,B(474));O(j,j.a,d,10);I(j,j.a,B(475));k=
new N;b=j.b;d=j.a;Q();h=D(d);k.e=h;M(b,0,h,0,d);e.c=1;e.d=1;e.f=k;H(e);}}b=b.data;e=new Y;d=b.length;j=new P;j.b=D(16);I(j,j.a,B(476));O(j,j.a,c,10);I(j,j.a,B(470));O(j,j.a,d,10);d=j.a;Bd(j,d,d+1|0);h=j.b;h.data[d]=41;k=new N;d=j.a;Q();b=D(d);k.e=b;M(h,0,b,0,d);e.c=1;e.d=1;e.f=k;H(e);}
function AOZ(a){a.h=0;a.g=a.y;a.v=(-1);return a;}
function AFP(a){a.g=a.h;a.h=0;a.v=(-1);return a;}
function ANz(a,b){Cj(a,b);return a;}
function AWf(a,b){BS(a,b);return a;}
function AWQ(a){a.g=a.h;a.h=0;a.v=(-1);return a;}
function APy(a){a.h=0;a.g=a.y;a.v=(-1);return a;}
function AUh(a,b){Cj(a,b);return a;}
function AQr(a,b){BS(a,b);return a;}
function R6(){var a=this;C.call(a);a.il=null;a.iK=0;a.kf=0;}
function AEj(a,b){var c;if(b===null)return 0;c=b;return a.kf==c.kf&&a.iK==c.iK&&a.il.dv===c.il.dv?1:0;}
function ARy(a){var b,c,d,e;b=a.il.dv;if(b===null)c=0;else{d=b;if(!d.$id$){e=$rt_nextId();d.$id$=e;}c=b.$id$;}return (31*((31*c|0)+a.iK|0)|0)+a.kf|0;}
var Hz=G(HS);
function AEA(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.qU(b);c=new Y;d=a.g;e=new P;e.b=D(16);I(e,e.a,B(487));O(e,e.a,b,10);I(e,e.a,B(470));O(e,e.a,d,10);d=e.a;Bd(e,d,d+1|0);f=e.b;f.data[d]=41;g=new N;d=e.a;Q();h=D(d);g.e=h;M(f,0,h,0,d);c.c=1;c.d=1;c.f=g;H(c);}
function ATL(a){return a.dO();}
function ME(){var a=this;Hz.call(a);a.pd=0;a.lw=0;a.ma=null;}
function AJ1(a,b){return a.ma.data[b+a.lw|0];}
function ATx(a,b,c){a.ma.data[b+a.lw|0]=c;}
function ARZ(a){return a.pd;}
var Mk=G(F4);
var F3=G(BJ);
var Gq=G();
var Ba6=null;function AAt(){Ba6=null;}
var Ie=G(BJ);
var Fo=G(Ia);
var Bec=null;var Bed=null;var Bee=null;function AAS(){Bec=new Fo;Bed=new Fo;Bee=new Fo;}
var Rm=G(0);
function Te(){var a=this;C.call(a);a.wL=null;a.xz=null;a.GL=null;}
function ASG(a,b){var c;b=BaP;c=a.wL;Gt(b.nM,c,b);b=a.xz;if(b!==null)b.eO();}
function Og(){var a=this;DY.call(a);a.EF=0.0;a.EE=0.0;a.Fr=0;a.DQ=0;}
function Kw(){var a=this;MF.call(a);a.vP=null;a.xE=null;}
function YW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.vP;e=0;f=0;g=a.xE;a:{while(true){if((e+32|0)>f){h=b.h;i=b.g;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;Q5(b,d,j,f-j|0);e=0;}}j=c.h;l=c.g;if(!(j>=l?0:1)){j=b.h>=b.g?0:1;m=!j&&e>=f?A5m:A5n;break a;}k=g.data;l=l-j|0;h=k.length;if(l<h)h=l;n=new SM;n.lj=b;n.yk=c;m=AF8(a,d,e,f,g,0,h,n);e=n.u3;if(m===null&&0==n.nn)m=A5m;AGv(c,g,0,n.nn);if(m!==null)break;}}BS(b,b.h-(f-e|0)|0);return m;}
var OX=G(Kw);
function AF8(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;n=h.lj;if((n.g-n.h|0)<2?0:1)break a;i=A5m;break a;}o=k+1|0;k=j[k];if(!((k&192)!=128?0:1)){c=o+(-2)|0;i=new Cg;i.bo=2;i.bF=1;break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=o;}else if((l&240)!=224){if((l&248)!=240){c=k+(-1)|0;i=AYG(2,1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(ACr(h,4))break a;i
=A5m;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AAC(h,2))break a;i=A5n;break a;}o=k+1|0;m=j[k];c=o+1|0;o=j[o];k=c+1|0;p=j[c];if(!Mx(a,m))break c;if(!Mx(a,o))break c;if(!Mx(a,p))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|p&63;c=f+1|0;j[f]=ADd(q);m=c+1|0;j[c]=YY(q);}else{if((k+2|0)>d){c=k+(-1)|0;n=h.lj;if((n.g-n.h|0)<3?0:1)break a;i=A5m;break a;}c=k+1|0;r=j[k];k=c+1|0;o=j[c];if(!((r&192)!=128?0:1))break b;if(!((o&192)!=128?0:1))break b;s=((l&15)<<12|(r&63)<<6|o&63)&65535;m=s&64512;c=m!=55296?0:1;if(!c&&!(m!=
56320?0:1)?0:1){c=k+(-3)|0;i=new Cg;i.bo=2;i.bF=3;break a;}j=e.data;m=f+1|0;j[f]=s;}c=k;f=m;}break a;}c=k+(-3)|0;i=AD_(1);break a;}c=k+(-3)|0;i=new Cg;i.bo=2;i.bF=1;}h.u3=c;h.nn=f;return i;}
function Mx(a,b){return (b&192)!=128?0:1;}
var Vk=G();
function HN(){var a=this;Hz.call(a);a.gh=null;a.nF=0;a.ix=0;}
function ATc(a){return a.nF;}
function AV0(a){return a.gh.U.data;}
var Qs=G(HN);
function ARU(a,b){var c;c=a.gh.U.data;b=a.ix+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;}
function ARu(a,b,c){var d;d=a.gh.U.data;b=a.ix+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;}
var Rg=G(HN);
function AUW(a,b){var c;c=a.gh.U.data;b=a.ix+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;}
function ARW(a,b,c){var d;d=a.gh.U.data;b=a.ix+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;}
function Nk(){var a=this;Gq.call(a);a.wD=null;a.nI=null;}
var K9=G(CF);
function ACq(b){var jsObj=new $rt_globals.imgui.IDLBoolArray(b);return $rt_globals.imgui.getPointer(jsObj);}
function AH3(b,c){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.IDLBoolArray);var returnedJSObj=jsObj.getValue(c);return returnedJSObj;}
function ANG(b,c,d){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.IDLBoolArray);jsObj.setValue(c,d);}
function AXS(b){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.IDLBoolArray);var returnedJSObj=jsObj.getPointer();return returnedJSObj;}
var G9=G(K9);
var BaA=null;var Bef=null;function AQF(){AQF=V(G9);AI1();}
function AI1(){var b,c;b=new G9;AQF();c=S(ACq(1));b.bP=1;b.x=c;BaA=b;b=new G9;c=S(ACq(1));b.bP=1;b.x=c;Bef=b;}
var G1=G(KL);
var BaB=null;var Beg=null;function ASH(){ASH=V(G1);AT5();}
function AT5(){var b,c;b=new G1;ASH();c=S(II(1));b.bP=1;b.x=c;BaB=b;b=new G1;c=S(II(1));b.bP=1;b.x=c;Beg=b;}
function Su(){C.call(this);this.ur=null;}
var AFB=G();
function I2(){Gq.call(this);this.hK=null;}
var Beh=0;function AZT(){AZT=V(I2);ASI();}
function PG(a,b){var c,d,e,f,g,h,i,j,$$je;c=a.hK;d=b.cY;e=new P;e.b=D(16);I(e,e.a,B(649));f=e.a;if(d===null)d=B(2);I(e,f,d);g=new N;h=e.b;i=e.a;Q();j=D(i);g.e=j;M(h,0,j,0,i);c=c.mv(g);a:{try{e=ARY(ACv(c));}catch($$e){$$je=Br($$e);if($$je instanceof BJ){e=$$je;break a;}else{throw $$e;}}return e;}c=a.hK;d=b.cY;b=new P;b.b=D(16);I(b,b.a,B(649));f=b.a;if(d===null)d=B(2);I(b,f,d);g=new N;h=b.b;i=b.a;j=D(i);g.e=j;M(h,0,j,0,i);c.vj(g);H(e);}
function AFw(a,b){var c,d,e,f,g,h,i,j;c=a.hK;d=b.cY;e=new P;e.b=D(16);I(e,e.a,B(650));f=e.a;if(d===null)d=B(2);a:{I(e,f,d);g=new N;h=e.b;i=e.a;Q();j=D(i);g.e=j;M(h,0,j,0,i);if(c.mv(g)===null){c=a.hK;g=b.cY;b=new P;b.b=D(16);I(b,b.a,B(649));f=b.a;if(g===null)g=B(2);I(b,f,g);e=new N;h=b.b;i=b.a;j=D(i);e.e=j;M(h,0,j,0,i);if(c.mv(e)===null){f=0;break a;}}f=1;}return f;}
function ASI(){Beh=B(649).e.data.length;}
var Mn=G(0);
function Rv(){var a=this;C.call(a);a.nC=null;a.nk=null;}
function ARQ(a,b){var c,d,e,f,g,h,i;c=a.nC;d=a.nk;e=new P;e.b=D(16);f=e.a;if(d===null)d=B(2);I(e,f,d);f=e.a;if(b===null)b=B(2);I(e,f,b);d=new N;g=e.b;h=e.a;Q();i=D(h);d.e=i;M(g,0,i,0,h);return $rt_str(c.getItem($rt_ustr(d)));}
function AVo(a,b){var c,d,e,f,g,h,i;c=a.nC;d=a.nk;e=new P;e.b=D(16);f=e.a;if(d===null)d=B(2);I(e,f,d);f=e.a;if(b===null)b=B(2);I(e,f,b);d=new N;g=e.b;h=e.a;Q();i=D(h);d.e=i;M(g,0,i,0,h);c.removeItem($rt_ustr(d));}
function Sc(){var a=this;C.call(a);a.wJ=null;a.oK=null;}
function AVz(a,b){var c,d;c=a.oK;d=CA(c,b);return d<0?null:c.cs.data[d];}
function AOn(a,b){U9(a.wJ,b,0);WO(a.oK,b);}
var Fi=G(BR);
var Bei=null;var Bej=null;var Bek=null;function ABJ(a){return AF6(R(a.u));}
function WE(a){return AD0(R(a.u));}
function Wx(){Bei=new Fi;Bej=new Fi;Bek=new Fi;}
function ADH(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxQuat);return jsObj.get_x();}
function AGC(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxQuat);return jsObj.get_y();}
function AF6(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxQuat);return jsObj.get_z();}
function AD0(b){var jsObj=$rt_globals.physx.wrapPointer(b,$rt_globals.physx.PxQuat);return jsObj.get_w();}
var Qq=G(0);
function Tl(){C.call(this);this.wl=null;}
function AQ4(a){a.wl.ur.l1=1;}
var WX=G();
function Qz(){var a=this;C.call(a);a.hs=null;a.fa=null;a.hZ=0;a.h8=0;}
var Hq=G();
function AW2(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.vN();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function AS_(a){}
function Mu(){var a=this;Hq.call(a);a.j0=null;a.gb=0;a.n5=0;a.i_=0;}
function ARY(a){var b=new Mu();AHW(b,a);return b;}
function AHW(a,b){var c;c=b.data.length;a.j0=b;a.gb=0;a.n5=0;a.i_=0+c|0;}
function ARG(a){var b,c,d;b=a.gb;if(b>=a.i_)c=(-1);else{d=a.j0.data;a.gb=b+1|0;c=d[b]&255;}return c;}
function AXN(a,b,c,d){var e,f,g,h,i;e=a.i_-a.gb|0;if(d<e)e=d;f=0;while(f<e){g=b.data;d=c+1|0;h=a.j0.data;i=a.gb;a.gb=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function AKz(a){}
var Rk=G(EN);
function RU(){var a=this;C.call(a);a.kr=0;a.hI=0;a.ez=0;a.k$=BI;a.pT=null;a.sb=null;a.yx=BI;a.v2=null;}
var Dh=G(CF);
var Bel=null;var Bem=null;var Ben=null;var Beo=null;var Bep=null;var Beq=null;function AGU(){AGU=V(Dh);ANe();}
function ANe(){var b,c;b=new Dh;AGU();c=S(GW());b.bP=1;b.x=c;Bel=b;b=new Dh;c=S(GW());b.bP=1;b.x=c;Bem=b;b=new Dh;c=S(GW());b.bP=1;b.x=c;Ben=b;b=new Dh;c=S(GW());b.bP=1;b.x=c;Beo=b;b=new Dh;c=S(GW());b.bP=1;b.x=c;Bep=b;b=new Dh;c=S(GW());b.bP=1;b.x=c;Beq=b;}
function GW(){var jsObj=new $rt_globals.imgui.ImVec4();return $rt_globals.imgui.getPointer(jsObj);}
function ABf(b){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImVec4);return jsObj.get_x();}
function Zl(b){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImVec4);return jsObj.get_y();}
function Xt(b){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImVec4);return jsObj.get_z();}
function Z9(b){var jsObj=$rt_globals.imgui.wrapPointer(b,$rt_globals.imgui.ImVec4);return jsObj.get_w();}
var Mv=G();
var Ber=null;var Bes=null;function ACv(b){var c,d,e,f,g,h,i,j,k,l;c=b.e.data;d=c.length;e=BF(d/2|0);f=e.data;g=0;h=f.length;a:{b:{while(g<h){i=g*2|0;if(i<0)break a;if(i>=d)break a;j=c[i];i=i+1|0;if(i<0)break b;if(i>=d)break b;k=c[i];l=Bes.data;f[g]=((l[j]<<4)+l[k]|0)<<24>>24;g=g+1|0;}return e;}b=new X;b.c=1;b.d=1;H(b);}b=new X;b.c=1;b.d=1;H(b);}
function X8(){var b,c,d,e;b=D(16);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;Ber=b;b=Bc(128);d=b.data;Bes=b;e=0;while(e<c.length){d[c[e]]=e;if(c[e]>=65)d[(c[e]-65|0)+97|0]=e;e=e+1|0;}}
function P3(){var a=this;Hq.call(a);a.pY=0;a.qo=null;}
function AUe(a){var b,c;if(a.pY==a.qo.dS.length)return (-1);b=a.qo;c=a.pY;a.pY=c+1|0;return b.dS[c]&255;}
function Od(){var a=this;DC.call(a);a.ea=null;a.Ct=null;}
function HF(){var a=this;C.call(a);a.jb=null;a.eS=null;a.hb=null;a.e7=0;}
var PM=G();
var A$L=null;function A2D(){A2D=V(PM);ANW();}
function ANW(){var b,c,d,e,f;b=new Gm;c=HE(16);b.e_=0;d=Bj(E8,c);e=d.data;b.cx=d;b.iS=0.75;b.fz=e.length*0.75|0;A$L=b;e=Bj(Es,6).data;A1Z();e[0]=Bet;e[1]=Beu;e[2]=Bev;e[3]=Bew;e[4]=Bex;e[5]=Bey;c=e.length;f=0;while(f<c){b=e[f];Gt(A$L,b.fW,b);f=f+1|0;}}
function RF(){Bh.call(this);this.ED=null;}
var Gb=G();
var Bet=null;var Beu=null;var Bev=null;var Bew=null;var Bex=null;var Bey=null;function A1Z(){A1Z=V(Gb);AMr();}
function AMr(){var b,c,d,e,f,g,h,i;Cr();Bet=A$H;b=new OA;c=Bj(N,0);d=c.data;DQ(B(651));e=d.length;f=0;while(f<e){DQ(d[f]);f=f+1|0;}b.fW=B(651);b.iq=c.cu();Beu=b;b=new N4;c=Bj(N,0);d=c.data;DQ(B(652));e=d.length;f=0;while(f<e){DQ(d[f]);f=f+1|0;}b.fW=B(652);b.iq=c.cu();Bev=b;g=new IK;c=Bj(N,0);d=c.data;DQ(B(653));h=d.length;i=0;while(i<h){DQ(d[i]);i=i+1|0;}g.fW=B(653);g.iq=c.cu();g.mx=1;g.lP=0;Bew=g;b=new IK;c=Bj(N,0);d=c.data;DQ(B(654));h=d.length;i=0;while(i<h){DQ(d[i]);i=i+1|0;}b.fW=B(654);b.iq=c.cu();b.mx
=0;b.lP=0;Bex=b;b=new IK;c=Bj(N,0);d=c.data;DQ(B(655));h=d.length;i=0;while(i<h){DQ(d[i]);i=i+1|0;}b.fW=B(655);b.iq=c.cu();b.mx=0;b.lP=1;Bey=b;}
var OA=G(Es);
function APY(a){var b,c,d,e,f;b=new SC;c=BF(1);d=c.data;d[0]=63;DU();e=Bah;b.gF=e;b.gA=e;f=d.length;if(f&&f>=b.fU){b.lT=a;b.jf=c.cu();b.jp=1.0;b.fU=1.0;b.j3=D(512);b.i5=BF(512);return b;}e=new Bh;Il(e,B(467));H(e);}
var N4=G(Es);
function AWq(a){var b,c,d,e,f;b=new Tc;c=BF(1);d=c.data;d[0]=63;DU();e=Bah;b.gF=e;b.gA=e;f=d.length;if(f&&f>=b.fU){b.lT=a;b.jf=c.cu();b.jp=1.0;b.fU=1.0;b.j3=D(512);b.i5=BF(512);return b;}e=new Bh;Il(e,B(467));H(e);}
function IK(){var a=this;Es.call(a);a.mx=0;a.lP=0;}
function AHc(a){var b,c,d,e,f,g,h;b=new Q4;c=a.mx;d=a.lP;e=BF(1);f=e.data;f[0]=63;DU();g=Bah;b.gF=g;b.gA=g;h=f.length;if(h&&h>=b.fU){b.lT=a;b.jf=e.cu();b.jp=2.0;b.fU=4.0;b.j3=D(512);b.i5=BF(512);b.pN=c;b.n8=d;return b;}g=new Bh;Il(g,B(467));H(g);}
var Z=G();
var Bd6=0;var Bda=0;var BcE=0;var BcF=0;var BcC=0;var BcD=0;var Bdp=0;var Bdq=0;var Bd5=0;var Bdx=0;var Bdy=0;var Bds=0;var Bde=0;var Bdb=0;var Bdd=0;var Bdr=0;var Bdz=0;var Bc$=0;var Bc8=0;var Bdc=0;var BdA=0;var Bc_=0;var Bc9=0;var Bez=0;var Bdo=0;var Bcs=0;var Bct=0;var Bcu=0;var Bcv=0;var Bcw=0;var Bcx=0;var Bcy=0;var Bcz=0;var BcA=0;var BcB=0;var BcG=0;var BcH=0;var BcI=0;var BcJ=0;var BcK=0;var BcL=0;var BcM=0;var BcN=0;var BcO=0;var BcP=0;var BcQ=0;var BcR=0;var BcS=0;var BcT=0;var BcU=0;var BcV=0;var BcW
=0;var BcX=0;var BcY=0;var BcZ=0;var Bc0=0;var Bc1=0;var Bc2=0;var Bc3=0;var Bc4=0;var Bc5=0;var BdB=0;var BdC=0;var BdD=0;var BdE=0;var BdF=0;var BdG=0;var BdH=0;var BdI=0;var BdJ=0;var BdK=0;var BdL=0;var BdM=0;var Bdm=0;var Bc6=0;var Bdg=0;var Bc7=0;var Bdn=0;var Bdl=0;var Bdh=0;var Bdi=0;var Bdk=0;var Bdj=0;var Bdf=0;var Bdt=0;var Bdu=0;var BdN=0;var Bdv=0;var Bdw=0;var BdO=0;var BdP=0;var BdQ=0;var BdR=0;var BdS=0;var BdT=0;var BdU=0;var BdV=0;var BdW=0;var BdX=0;var Bd2=0;var BdY=0;var BdZ=0;var Bd0=0;var Bd1
=0;var Bd3=0;var Bd4=0;var BeA=0;var BeB=0;var BeC=0;var BeD=0;var BeE=0;var BeF=0;var BeG=0;var BeH=0;var BeI=0;var BeJ=0;var BeK=0;var BeL=0;var BeM=0;var BeN=0;var BeO=0;var BeP=0;var BeQ=0;var BeR=0;var BeS=0;var BeT=0;var BeU=0;var BeV=0;var BeW=0;var BeX=0;var BeY=0;var BeZ=0;var Be0=0;var Be1=0;var Be2=0;var Be3=0;var Be4=0;var Be5=0;var Bcp=0;var Bcq=0;var Bcr=0;var Bco=0;var Be6=0;var Be7=0;function Bg(){Bg=V(Z);AJE();}
function AJE(){Bd6=$rt_globals.imgui.ImGuiKey_None;Bda=$rt_globals.imgui.ImGuiKey_Tab;BcE=$rt_globals.imgui.ImGuiKey_LeftArrow;BcF=$rt_globals.imgui.ImGuiKey_RightArrow;BcC=$rt_globals.imgui.ImGuiKey_UpArrow;BcD=$rt_globals.imgui.ImGuiKey_DownArrow;Bdp=$rt_globals.imgui.ImGuiKey_PageUp;Bdq=$rt_globals.imgui.ImGuiKey_PageDown;Bd5=$rt_globals.imgui.ImGuiKey_Home;Bdx=$rt_globals.imgui.ImGuiKey_End;Bdy=$rt_globals.imgui.ImGuiKey_Insert;Bds=$rt_globals.imgui.ImGuiKey_Delete;Bde=$rt_globals.imgui.ImGuiKey_Backspace;Bdb
=$rt_globals.imgui.ImGuiKey_Space;Bdd=$rt_globals.imgui.ImGuiKey_Enter;Bdr=$rt_globals.imgui.ImGuiKey_Escape;Bdz=$rt_globals.imgui.ImGuiKey_LeftCtrl;Bc$=$rt_globals.imgui.ImGuiKey_LeftShift;Bc8=$rt_globals.imgui.ImGuiKey_LeftAlt;Bdc=$rt_globals.imgui.ImGuiKey_LeftSuper;BdA=$rt_globals.imgui.ImGuiKey_RightCtrl;Bc_=$rt_globals.imgui.ImGuiKey_RightShift;Bc9=$rt_globals.imgui.ImGuiKey_RightAlt;Bez=$rt_globals.imgui.ImGuiKey_RightSuper;Bdo=$rt_globals.imgui.ImGuiKey_Menu;Bcs=$rt_globals.imgui.ImGuiKey_0;Bct=$rt_globals.imgui.ImGuiKey_1;Bcu
=$rt_globals.imgui.ImGuiKey_2;Bcv=$rt_globals.imgui.ImGuiKey_3;Bcw=$rt_globals.imgui.ImGuiKey_4;Bcx=$rt_globals.imgui.ImGuiKey_5;Bcy=$rt_globals.imgui.ImGuiKey_6;Bcz=$rt_globals.imgui.ImGuiKey_7;BcA=$rt_globals.imgui.ImGuiKey_8;BcB=$rt_globals.imgui.ImGuiKey_9;BcG=$rt_globals.imgui.ImGuiKey_A;BcH=$rt_globals.imgui.ImGuiKey_B;BcI=$rt_globals.imgui.ImGuiKey_C;BcJ=$rt_globals.imgui.ImGuiKey_D;BcK=$rt_globals.imgui.ImGuiKey_E;BcL=$rt_globals.imgui.ImGuiKey_F;BcM=$rt_globals.imgui.ImGuiKey_G;BcN=$rt_globals.imgui.ImGuiKey_H;BcO
=$rt_globals.imgui.ImGuiKey_I;BcP=$rt_globals.imgui.ImGuiKey_J;BcQ=$rt_globals.imgui.ImGuiKey_K;BcR=$rt_globals.imgui.ImGuiKey_L;BcS=$rt_globals.imgui.ImGuiKey_M;BcT=$rt_globals.imgui.ImGuiKey_N;BcU=$rt_globals.imgui.ImGuiKey_O;BcV=$rt_globals.imgui.ImGuiKey_P;BcW=$rt_globals.imgui.ImGuiKey_Q;BcX=$rt_globals.imgui.ImGuiKey_R;BcY=$rt_globals.imgui.ImGuiKey_S;BcZ=$rt_globals.imgui.ImGuiKey_T;Bc0=$rt_globals.imgui.ImGuiKey_U;Bc1=$rt_globals.imgui.ImGuiKey_V;Bc2=$rt_globals.imgui.ImGuiKey_W;Bc3=$rt_globals.imgui.ImGuiKey_X;Bc4
=$rt_globals.imgui.ImGuiKey_Y;Bc5=$rt_globals.imgui.ImGuiKey_Z;BdB=$rt_globals.imgui.ImGuiKey_F1;BdC=$rt_globals.imgui.ImGuiKey_F2;BdD=$rt_globals.imgui.ImGuiKey_F3;BdE=$rt_globals.imgui.ImGuiKey_F4;BdF=$rt_globals.imgui.ImGuiKey_F5;BdG=$rt_globals.imgui.ImGuiKey_F6;BdH=$rt_globals.imgui.ImGuiKey_F7;BdI=$rt_globals.imgui.ImGuiKey_F8;BdJ=$rt_globals.imgui.ImGuiKey_F9;BdK=$rt_globals.imgui.ImGuiKey_F10;BdL=$rt_globals.imgui.ImGuiKey_F11;BdM=$rt_globals.imgui.ImGuiKey_F12;Bdm=$rt_globals.imgui.ImGuiKey_Apostrophe;Bc6
=$rt_globals.imgui.ImGuiKey_Comma;Bdg=$rt_globals.imgui.ImGuiKey_Minus;Bc7=$rt_globals.imgui.ImGuiKey_Period;Bdn=$rt_globals.imgui.ImGuiKey_Slash;Bdl=$rt_globals.imgui.ImGuiKey_Semicolon;Bdh=$rt_globals.imgui.ImGuiKey_Equal;Bdi=$rt_globals.imgui.ImGuiKey_LeftBracket;Bdk=$rt_globals.imgui.ImGuiKey_Backslash;Bdj=$rt_globals.imgui.ImGuiKey_RightBracket;Bdf=$rt_globals.imgui.ImGuiKey_GraveAccent;Bdt=$rt_globals.imgui.ImGuiKey_CapsLock;Bdu=$rt_globals.imgui.ImGuiKey_ScrollLock;BdN=$rt_globals.imgui.ImGuiKey_NumLock;Bdv
=$rt_globals.imgui.ImGuiKey_PrintScreen;Bdw=$rt_globals.imgui.ImGuiKey_Pause;BdO=$rt_globals.imgui.ImGuiKey_Keypad0;BdP=$rt_globals.imgui.ImGuiKey_Keypad1;BdQ=$rt_globals.imgui.ImGuiKey_Keypad2;BdR=$rt_globals.imgui.ImGuiKey_Keypad3;BdS=$rt_globals.imgui.ImGuiKey_Keypad4;BdT=$rt_globals.imgui.ImGuiKey_Keypad5;BdU=$rt_globals.imgui.ImGuiKey_Keypad6;BdV=$rt_globals.imgui.ImGuiKey_Keypad7;BdW=$rt_globals.imgui.ImGuiKey_Keypad8;BdX=$rt_globals.imgui.ImGuiKey_Keypad9;Bd2=$rt_globals.imgui.ImGuiKey_KeypadDecimal;BdY
=$rt_globals.imgui.ImGuiKey_KeypadDivide;BdZ=$rt_globals.imgui.ImGuiKey_KeypadMultiply;Bd0=$rt_globals.imgui.ImGuiKey_KeypadSubtract;Bd1=$rt_globals.imgui.ImGuiKey_KeypadAdd;Bd3=$rt_globals.imgui.ImGuiKey_KeypadEnter;Bd4=$rt_globals.imgui.ImGuiKey_KeypadEqual;BeA=$rt_globals.imgui.ImGuiKey_GamepadStart;BeB=$rt_globals.imgui.ImGuiKey_GamepadBack;BeC=$rt_globals.imgui.ImGuiKey_GamepadFaceLeft;BeD=$rt_globals.imgui.ImGuiKey_GamepadFaceRight;BeE=$rt_globals.imgui.ImGuiKey_GamepadFaceUp;BeF=$rt_globals.imgui.ImGuiKey_GamepadFaceDown;BeG
=$rt_globals.imgui.ImGuiKey_GamepadDpadLeft;BeH=$rt_globals.imgui.ImGuiKey_GamepadDpadRight;BeI=$rt_globals.imgui.ImGuiKey_GamepadDpadUp;BeJ=$rt_globals.imgui.ImGuiKey_GamepadDpadDown;BeK=$rt_globals.imgui.ImGuiKey_GamepadL1;BeL=$rt_globals.imgui.ImGuiKey_GamepadR1;BeM=$rt_globals.imgui.ImGuiKey_GamepadL2;BeN=$rt_globals.imgui.ImGuiKey_GamepadR2;BeO=$rt_globals.imgui.ImGuiKey_GamepadL3;BeP=$rt_globals.imgui.ImGuiKey_GamepadR3;BeQ=$rt_globals.imgui.ImGuiKey_GamepadLStickLeft;BeR=$rt_globals.imgui.ImGuiKey_GamepadLStickRight;BeS
=$rt_globals.imgui.ImGuiKey_GamepadLStickUp;BeT=$rt_globals.imgui.ImGuiKey_GamepadLStickDown;BeU=$rt_globals.imgui.ImGuiKey_GamepadRStickLeft;BeV=$rt_globals.imgui.ImGuiKey_GamepadRStickRight;BeW=$rt_globals.imgui.ImGuiKey_GamepadRStickUp;BeX=$rt_globals.imgui.ImGuiKey_GamepadRStickDown;BeY=$rt_globals.imgui.ImGuiKey_MouseLeft;BeZ=$rt_globals.imgui.ImGuiKey_MouseRight;Be0=$rt_globals.imgui.ImGuiKey_MouseMiddle;Be1=$rt_globals.imgui.ImGuiKey_MouseX1;Be2=$rt_globals.imgui.ImGuiKey_MouseX2;Be3=$rt_globals.imgui.ImGuiKey_MouseWheelX;Be4
=$rt_globals.imgui.ImGuiKey_MouseWheelY;Be5=$rt_globals.imgui.ImGuiMod_None;Bcp=$rt_globals.imgui.ImGuiMod_Ctrl;Bcq=$rt_globals.imgui.ImGuiMod_Shift;Bcr=$rt_globals.imgui.ImGuiMod_Alt;Bco=$rt_globals.imgui.ImGuiMod_Super;Be6=$rt_globals.imgui.ImGuiMod_Shortcut;Be7=$rt_globals.imgui.ImGuiMod_Mask_;}
var FD=G();
var Be8=0;var Be9=0;var Be$=0;var BbY=0;var Be_=0;var Bfa=0;var Bfb=0;function Zc(){Zc=V(FD);AS1();}
function AS1(){Be8=$rt_globals.imgui.ImGuiFocusedFlags_None;Be9=$rt_globals.imgui.ImGuiFocusedFlags_ChildWindows;Be$=$rt_globals.imgui.ImGuiFocusedFlags_RootWindow;BbY=$rt_globals.imgui.ImGuiFocusedFlags_AnyWindow;Be_=$rt_globals.imgui.ImGuiFocusedFlags_NoPopupHierarchy;Bfa=$rt_globals.imgui.ImGuiFocusedFlags_DockHierarchy;Bfb=$rt_globals.imgui.ImGuiFocusedFlags_RootAndChildWindows;}
function Ob(){var a=this;DC.call(a);a.eq=null;a.lC=null;a.mh=null;a.mu=null;}
function AHK(a,b){a.eq.ea.k$=A4F(b);}
function AP5(a,b){b=a.eq.ea;b.hI=1;b.ez=0;}
function WY(a,b,c){It(a.mu,a.lC,a.mh,c);b=a.eq.ea;b.kr=1;b.ez=0;return 0;}
function K4(){var a=this;C.call(a);a.jo=null;a.k3=null;a.p1=null;}
function KS(){var a=this;C.call(a);a.dz=0;a.iB=null;a.cL=0;a.ik=0;a.eP=0;}
var Jc=G(KS);
function AFD(a){var b;if(a.eP)return a.dz;b=new Bb;b.c=1;b.d=1;b.f=B(461);H(b);}
function WQ(a){var b,c,d,e,f;if(!a.dz){b=new Je;b.c=1;b.d=1;H(b);}if(!a.eP){c=new Bb;c.c=1;c.d=1;c.f=B(461);H(c);}b=a.iB;d=b.cs.data;e=a.cL;c=d[e];a.ik=e;d=b.dp.data;f=d.length;a:{while(true){e=a.cL+1|0;a.cL=e;if(e>=f)break;if(d[e]===null)continue;else{a.dz=1;break a;}}a.dz=0;}return c;}
function SM(){var a=this;C.call(a);a.lj=null;a.yk=null;a.u3=0;a.nn=0;}
function ACr(a,b){var c;c=a.lj;return (c.g-c.h|0)<b?0:1;}
function AAC(a,b){var c;c=a.yk;return (c.g-c.h|0)<b?0:1;}
var FV=G(EN);
var MI=G(F4);
var M$=G();
var A_k=null;function A3I(){A3I=V(M$);ALQ();}
function ALQ(){var b,c;Fl();b=Bc((Bab.cu()).data.length);c=b.data;A_k=b;c[A_G.q]=1;c[A_D.q]=2;c[A_F.q]=3;c[A_E.q]=4;c[A_2.q]=5;}
function ADG(){var a=this;C.call(a);a.vS=0;a.Gs=0;a.x3=null;}
function AZO(a,b){var c=new ADG();AJb(c,a,b);return c;}
function AJb(a,b,c){a.x3=b;a.Gs=c;a.vS=c;}
function ALJ(a){var b,c,d,e,f,g,h,i,j,k;b=a.x3;c=a.vS;b=b.dB;d=b.dA;if(!d){b=new BK;b.c=1;b.d=1;CE(b);H(b);}if(c>=0){e=Bo(c,b.ec);if(e<0){a:{f=b.bR.data;g=c*2|0;if(f[g]<0)h=null;else{b=b.gD;if(!d){b=new BK;b.c=1;b.d=1;CE(b);H(b);}if(c>=0&&e<0){i=f[g];if(!d){b=new BK;b.c=1;b.d=1;CE(b);H(b);}if(c>=0&&e<0){g=f[g+1|0];c=Bo(i,g);if(c>0){b=new Y;b.c=1;b.d=1;CE(b);H(b);}if(!c){Q();h=A9m;}else if(!i&&g==b.e.data.length)h=b;else{h=new N;f=b.e;c=g-i|0;Q();j=D(c);h.e=j;M(f,i,j,0,c);}break a;}b=new Y;Q();h=new P;CO(h);h.b
=D(16);O(h,h.a,c,10);k=new N;f=h.b;i=h.a;CO(k);j=D(i);k.e=j;M(f,0,j,0,i);b.c=1;b.d=1;CE(b);b.f=k;H(b);}b=new Y;Q();h=new P;CO(h);h.b=D(16);O(h,h.a,c,10);k=new N;f=h.b;i=h.a;CO(k);j=D(i);k.e=j;M(f,0,j,0,i);b.c=1;b.d=1;CE(b);b.f=k;H(b);}}return h;}}b=new Y;Q();h=new P;CO(h);h.b=D(16);O(h,h.a,c,10);k=new N;f=h.b;i=h.a;CO(k);j=D(i);k.e=j;M(f,0,j,0,i);b.c=1;b.d=1;CE(b);b.f=k;H(b);}
function KA(){C.call(this);this.ni=null;}
var BaO=null;var SC=G(E5);
function AKk(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j>=d){n=h.hs;if(!((n.g-n.h|0)<2?0:1)){i=A5m;break a;}j=j+(-1)|0;break a;}if(!((k[j]&64512)!=56320?0:1)){i=new Cg;i.bo=2;i.bF=1;break a;}j=j+(-1)|0;i=new Cg;i.bo=3;i.bF=2;break a;}if(m!=56320?0:1){i=new Cg;i.bo=2;i.bF=1;}if(l>=128){i=new Cg;i.bo=3;i.bF=1;j=j+(-1)|0;break a;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.hZ=j;h.h8=f;return i;}
var Tc=G(E5);
function ANP(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j==d){n=h.hs;if(!((n.g-n.h|0)<2?0:1)){i=A5m;break a;}j=j+(-1)|0;break a;}if(!((k[j]&64512)!=56320?0:1)){i=new Cg;i.bo=2;i.bF=1;break a;}j=j+(-1)|0;i=new Cg;i.bo=3;i.bF=2;break a;}if(m!=56320?0:1){i=new Cg;i.bo=2;i.bF=1;}if(l>=256){j=j+(-1)|0;i=new Cg;i.bo=3;i.bF=1;break a;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.hZ=j;h.h8=f;return i;}
function Q4(){var a=this;E5.call(a);a.pN=0;a.n8=0;}
function AVZ(a,b,c,d,e,f,g,h){var i,j;if(a.pN){if((f+2|0)>g){h=h.fa;return !(h.h>=h.g?0:1)?A5n:null;}a.pN=0;if(!a.n8){i=e.data;j=f+1|0;i[f]=(-2);f=j+1|0;i[j]=(-1);}else{i=e.data;j=f+1|0;i[f]=(-1);f=j+1|0;i[j]=(-2);}}return !a.n8?UA(a,b,c,d,e,f,g,h):AAn(a,b,c,d,e,f,g,h);}
function AAn(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new Cg;i.bo=2;i.bF=1;break a;}if((f+2|0)>g){c=k+(-1)|0;m=h.fa;if((m.g-m.h|0)<2?0:1)break a;i=A5n;break a;}j=e.data;c=f+1|0;j[f]=(l&255)<<24>>24;f=c+1|0;j[c]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.hs;if((m.g-m.h|0)<2?0:1)break a;i=A5m;break a;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new Cg;i.bo=2;i.bF=1;break a;}if((f+4|
0)>g){c=c+(-2)|0;m=h.fa;if((m.g-m.h|0)<4?0:1)break a;i=A5n;break a;}j=e.data;k=f+1|0;j[f]=(l&255)<<24>>24;f=k+1|0;j[k]=l>>8<<24>>24;k=f+1|0;j[f]=(n&255)<<24>>24;f=k+1|0;j[k]=n>>8<<24>>24;}}}h.hZ=c;h.h8=f;return i;}
function UA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new Cg;i.bo=2;i.bF=1;break a;}if((f+2|0)>g){c=k+(-1)|0;m=h.fa;if((m.g-m.h|0)<2?0:1)break a;i=A5n;break a;}j=e.data;c=f+1|0;j[f]=l>>8<<24>>24;f=c+1|0;j[c]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.hs;if((m.g-m.h|0)<2?0:1)break a;i=A5m;break a;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new Cg;i.bo=2;i.bF=1;break a;}if((f+4|0)
>g){c=c+(-2)|0;m=h.fa;if((m.g-m.h|0)<4?0:1)break a;i=A5n;break a;}j=e.data;k=f+1|0;j[f]=l>>8<<24>>24;f=k+1|0;j[k]=(l&255)<<24>>24;k=f+1|0;j[f]=n>>8<<24>>24;f=k+1|0;j[k]=(n&255)<<24>>24;}}}h.hZ=c;h.h8=f;return i;}
function GZ(){var a=this;D$.call(a);a.fJ=0;a.eF=null;a.fe=null;a.ew=null;}
function ARt(a){var b,c,d,e,f;b=new $rt_globals.XMLHttpRequest();c=new QA;c.fQ=a;c.ic=b;c=BY(c,"handleEvent");b.onreadystatechange=c;c=a.ew;d=a.fe;e=new Iu;e.oQ=c;e.l0=d;c=BY(e,"handleEvent");b.onprogress=c;d=a.eF;f=a.fJ;b.open("GET",$rt_ustr(d),!!f);if(a.fJ){d="arraybuffer";b.responseType=d;}b.send();}
function TY(){var a=this;DC.call(a);a.mn=null;a.BR=null;}
function AYQ(a,b){var c=new TY();AW3(c,a,b);return c;}
function AW3(a,b,c){a.BR=b;a.mn=c;}
function AIi(a,b){a.mn.eq.ea.k$=A4F(b);}
function AUt(a,b){b=a.mn.eq.ea;b.hI=1;b.ez=0;}
function AQP(a,b,c){c=a.mn;b=null;It(c.mu,c.lC,c.mh,b);b=c.eq.ea;b.kr=1;b.ez=0;return 0;}
var KQ=G(E3);
var Ln=G(E3);
var Qv=G(E3);
function JC(){var a=this;C.call(a);a.br=null;a.W=0;}
var Bfc=null;function C0(a,b){var c,d,e,f;c=a.br;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=D(e);M(c,0,f,0,a.W);a.br=f;}
function JV(a){var b,c,d;b=a.W+4|0;if(b>a.br.data.length)C0(a,b);c=a.br.data;d=a.W;b=d+1|0;a.W=b;c[d]=110;d=b+1|0;a.W=d;c[b]=117;b=d+1|0;a.W=b;c[d]=108;a.W=b+1|0;c[b]=108;}
function GB(a,b){var c,d,e;c=a.W;if(c==a.br.data.length)C0(a,c+1|0);d=a.br.data;e=a.W;a.W=e+1|0;d[e]=b;}
function Nh(a,b,c,d){var e,f,g,h;if(b==(-2147483648)){e=B(656).e.data.length;b=a.W+e|0;if(b>a.br.data.length)C0(a,b);G8(B(656),0,e,a.br,a.W);a.W=b;return a;}if(b<0){e=a.W;if(e==a.br.data.length)C0(a,e+1|0);f=a.br.data;g=a.W;a.W=g+1|0;f[g]=45;b= -b|0;}a:{if(c>1){h=b>=0?1:2;g=b;while(true){g=g/10|0;if(!g)break;h=h+1|0;}e=c-h|0;while(true){if(e<=0)break a;c=a.W;if(c==a.br.data.length)C0(a,c+1|0);f=a.br.data;h=a.W;a.W=h+1|0;f[h]=d;e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){c=Bfc.data[R(KY(Z1(S(b),F(1410065408, 2)),
S(1000000000)))];d=a.W;if(d==a.br.data.length)C0(a,d+1|0);f=a.br.data;e=a.W;a.W=e+1|0;f[e]=c;}if(b>=100000000){c=Bfc.data[(b%1000000000|0)/100000000|0];d=a.W;if(d==a.br.data.length)C0(a,d+1|0);f=a.br.data;e=a.W;a.W=e+1|0;f[e]=c;}if(b>=10000000){c=Bfc.data[(b%100000000|0)/10000000|0];d=a.W;if(d==a.br.data.length)C0(a,d+1|0);f=a.br.data;e=a.W;a.W=e+1|0;f[e]=c;}if(b>=1000000){c=Bfc.data[(b%10000000|0)/1000000|0];d=a.W;if(d==a.br.data.length)C0(a,d+1|0);f=a.br.data;e=a.W;a.W=e+1|0;f[e]=c;}if(b>=100000)GB(a,Bfc.data[(b
%1000000|0)/100000|0]);GB(a,Bfc.data[(b%100000|0)/10000|0]);}if(b>=1000)GB(a,Bfc.data[(b%10000|0)/1000|0]);if(b>=100)GB(a,Bfc.data[(b%1000|0)/100|0]);if(b>=10)GB(a,Bfc.data[(b%100|0)/10|0]);GB(a,Bfc.data[b%10|0]);return a;}
function ADO(){Bfc=E1([48,49,50,51,52,53,54,55,56,57]);}
var Kq=G(BJ);
var Lc=G(BJ);
function K1(){FV.call(this);this.oY=0;}
function AJF(a){var b,c,d,e,f,g;b=a.oY;c=new P;c.b=D(16);I(c,c.a,B(657));O(c,c.a,b,10);d=new N;e=c.b;f=c.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);return d;}
function Kp(){FV.call(this);this.qR=0;}
function AJa(a){var b,c,d,e,f,g;b=a.qR;c=new P;c.b=D(16);I(c,c.a,B(658));O(c,c.a,b,10);d=new N;e=c.b;f=c.a;Q();g=D(f);d.e=g;M(e,0,g,0,f);return d;}
function S2(){var a=this;C.call(a);a.gu=null;a.hz=null;a.jP=0;a.jL=null;a.lY=0;a.fH=0;a.qW=null;a.f0=null;}
function ZV(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=b.data;a.fH=0;AKT(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){AFQ(b,d,e,d+Ze(b,d,e,c)|0,c);return;}a.gu=b;a.hz=c;a.lY=0;h=0;i=g;while(i>=32){h=h|i&1;i=i>>1;}j=i+h|0;while(true){h=Ze(b,d,e,c);if(h>=j)i=h;else{i=g>j?j:g;AFQ(b,d,d+i|0,d+h|0,c);}f=a.qW.data;k=a.fH;f[k]=d;a.f0.data[k]=i;a.fH=k+1|0;ABE(a);d=d+i|0;g=g-i|0;if(!g)break;}YA(a);a.gu=null;a.hz=null;f=a.jL;l=0;m=a.lY;while(l<m){f.data[l]=null;l=l+1|0;}}
function AFQ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=h;j=e;k=c;while(k<j){l=(k+j|0)>>>1|0;m=g[l];n=f.bS.bQ.bn;o=i.bv;p=o.k-n.k;q=o.j-n.j;r=o.i-n.i;s=BO(p*p+q*q+r*r);n=f.bS.bQ.bn;m=m.bv;q=m.k-n.k;r=m.j-n.j;p=m.i-n.i;if((Cm(BO(q*q+r*r+p*p)-s)|0)<0)j=l;else k=l+1|0;}a:{b:{t=e-k|0;switch(t){case 1:break b;case 2:g[k+2|0]=g[k+1|0];break b;default:}M(b,k,b,k+1|0,t);break a;}g[k+1|0]=g[k];}g[k]=h;e=e+1|0;}}
function Ze(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=c+1|0;if(f==d)return 1;a:{b=b.data;g=f+1|0;h=b[f];i=b[c];h=h;i=i;j=e.bS.bQ.bn;h=h.bv;k=h.k-j.k;l=h.j-j.j;m=h.i-j.i;n=BO(k*k+l*l+m*m);h=e.bS.bQ.bn;i=i.bv;k=i.k-h.k;l=i.j-h.j;m=i.i-h.i;if((Cm(BO(k*k+l*l+m*m)-n)|0)>=0)while(g<d){h=b[g];i=b[g-1|0];h=h;i=i;j=e.bS.bQ.bn;h=h.bv;k=h.k-j.k;l=h.j-j.j;m=h.i-j.i;n=BO(k*k+l*l+m*m);h=e.bS.bQ.bn;i=i.bv;k=i.k-h.k;l=i.j-h.j;m=i.i-h.i;if((Cm(BO(k*k+l*l+m*m)-n)|0)<0)break a;g=g+1|0;}else{while(g<d){h=b[g];i=b[g-1|0];h=h;i=i;j=e.bS.bQ.bn;h
=h.bv;k=h.k-j.k;l=h.j-j.j;m=h.i-j.i;n=BO(k*k+l*l+m*m);h=e.bS.bQ.bn;i=i.bv;k=i.k-h.k;l=i.j-h.j;m=i.i-h.i;if((Cm(BO(k*k+l*l+m*m)-n)|0)>=0)break;g=g+1|0;}o=g+(-1)|0;f=c;while(f<o){e=b[f];d=f+1|0;b[f]=b[o];p=o+(-1)|0;b[o]=e;f=d;o=p;}}}return g-c|0;}
function ABE(a){var b,c;a:{b:while(true){b=a.fH;if(b<=1)break a;c:{d:{b=b-2|0;if(b>=1){c=a.f0.data;if(c[b-1|0]<=(c[b]+c[b+1|0]|0))break d;}if(b>=2){c=a.f0.data;if(c[b-2|0]<=(c[b]+c[b-1|0]|0))break d;}c=a.f0.data;if(c[b]>c[b+1|0])break b;break c;}c=a.f0.data;if(c[b-1|0]<c[b+1|0])b=b+(-1)|0;}Ro(a,b);}}}
function YA(a){var b,c;while(true){b=a.fH;if(b<=1)break;b=b-2|0;if(b>0){c=a.f0.data;if(c[b-1|0]<c[b+1|0])b=b+(-1)|0;}Ro(a,b);}}
function Ro(a,b){var c,d,e,f,g,h,i,j;c=a.qW.data;d=c[b];e=a.f0.data;f=e[b];g=b+1|0;h=c[g];i=e[g];e[b]=f+i|0;j=a.fH;if(b==(j-3|0)){b=b+2|0;c[g]=c[b];e[g]=e[b];}a.fH=j-1|0;c=a.gu;j=Sj(c.data[h],c,d,f,0,a.hz);b=d+j|0;j=f-j|0;if(!j)return;c=a.gu;d=Ne(c.data[(b+j|0)-1|0],c,h,i,i-1|0,a.hz);if(!d)return;if(j>d)Y_(a,b,j,h,d);else AAu(a,b,j,h,d);}
function Ne(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;c=c.data;h=0;i=1;j=d+f|0;k=c[j];l=b;b=k;k=g.bS.bQ.bn;m=l.bv;n=m.k-k.k;o=m.j-k.j;p=m.i-k.i;q=BO(n*n+o*o+p*p);k=g.bS.bQ.bn;b=b.bv;n=b.k-k.k;o=b.j-k.j;p=b.i-k.i;if((Cm(BO(n*n+o*o+p*p)-q)|0)>0){r=e-f|0;while(true){s=Bo(i,r);if(s>=0)break;k=c[j+i|0];b=g.bS.bQ.bn;m=l.bv;n=m.k-b.k;o=m.j-b.j;p=m.i-b.i;q=BO(n*n+o*o+p*p);b=g.bS.bQ.bn;k=k.bv;n=k.k-b.k;o=k.j-b.j;p=k.i-b.i;if((Cm(BO(n*n+o*o+p*p)-q)|0)<=0)break;e=(i<<1)+1|0;if(e>0){h=i;i=e;continue;}e=r;h=i;i=e;}if(s
<=0)r=i;e=h+f|0;f=r+f|0;}else{r=f+1|0;while(true){e=Bo(i,r);if(e>=0)break;b=c[j-i|0];k=g.bS.bQ.bn;m=l.bv;o=m.k-k.k;p=m.j-k.j;n=m.i-k.i;n=BO(o*o+p*p+n*n);k=g.bS.bQ.bn;b=b.bv;o=b.k-k.k;p=b.j-k.j;t=b.i-k.i;if((Cm(BO(o*o+p*p+t*t)-n)|0)>0)break;e=(i<<1)+1|0;if(e>0){h=i;i=e;continue;}e=r;h=i;i=e;}if(e<=0)r=i;e=f-r|0;f=f-h|0;}h=e+1|0;while(h<f){j=h+((f-h|0)>>>1|0)|0;b=c[d+j|0];k=g.bS.bQ.bn;m=l.bv;n=m.k-k.k;o=m.j-k.j;p=m.i-k.i;p=BO(n*n+o*o+p*p);k=g.bS.bQ.bn;b=b.bv;n=b.k-k.k;o=b.j-k.j;t=b.i-k.i;if((Cm(BO(n*n+o*o+t*t)
-p)|0)>0){h=j+1|0;j=f;}f=j;}return f;}
function Sj(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;c=c.data;h=1;i=0;j=d+f|0;k=c[j];l=b;b=k;k=g.bS.bQ.bn;m=l.bv;n=m.k-k.k;o=m.j-k.j;p=m.i-k.i;q=BO(n*n+o*o+p*p);k=g.bS.bQ.bn;b=b.bv;n=b.k-k.k;o=b.j-k.j;p=b.i-k.i;if((Cm(BO(n*n+o*o+p*p)-q)|0)>=0){r=e-f|0;while(true){e=Bo(h,r);if(e>=0)break;b=c[j+h|0];k=g.bS.bQ.bn;m=l.bv;o=m.k-k.k;p=m.j-k.j;n=m.i-k.i;n=BO(o*o+p*p+n*n);k=g.bS.bQ.bn;b=b.bv;o=b.k-k.k;p=b.j-k.j;s=b.i-k.i;if((Cm(BO(o*o+p*p+s*s)-n)|0)<0)break;e=(h<<1)+1|0;if(e>0){i=h;h=e;continue;}e=r;i=h;h=e;}if(e
<=0)r=h;e=i+f|0;f=r+f|0;}else{r=f+1|0;while(true){t=Bo(h,r);if(t>=0)break;k=c[j-h|0];b=g.bS.bQ.bn;m=l.bv;n=m.k-b.k;o=m.j-b.j;p=m.i-b.i;q=BO(n*n+o*o+p*p);b=g.bS.bQ.bn;k=k.bv;n=k.k-b.k;o=k.j-b.j;p=k.i-b.i;if((Cm(BO(n*n+o*o+p*p)-q)|0)>=0)break;e=(h<<1)+1|0;if(e>0){i=h;h=e;continue;}e=r;i=h;h=e;}if(t<=0)r=h;e=f-r|0;f=f-i|0;}h=e+1|0;while(h<f){j=h+((f-h|0)>>>1|0)|0;b=c[d+j|0];k=g.bS.bQ.bn;m=l.bv;n=m.k-k.k;o=m.j-k.j;p=m.i-k.i;p=BO(n*n+o*o+p*p);k=g.bS.bQ.bn;b=b.bv;n=b.k-k.k;o=b.j-k.j;s=b.i-k.i;if((Cm(BO(n*n+o*o+s*
s)-p)|0)<0)f=j;else h=j+1|0;}return f;}
function AAu(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.gu;g=f.data;h=Tm(a,c);M(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){M(h,i,f,j,c);return;}if(c==1){h=h.data;M(f,k,f,j,l);g[j+l|0]=h[i];return;}m=a.hz;n=a.jP;a:{b:while(true){o=0;p=0;d=j;e=k;q=i;while(true){r=h.data;s=g[e];t=r[q];u=s;s=t;t=m.bS.bQ.bn;u=u.bv;v=u.k-t.k;w=u.j-t.j;x=u.i-t.i;v=BO(v*v+w*w+x*x);t=m.bS.bQ.bn;s=s.bv;w=s.k-t.k;x=s.j-t.j;y=s.i-t.i;if((Cm(BO(w*w+x*x+y*y)-v)|0)<0){j=d+1|0;k=e+1|0;g[d]=g[e];p=p+1|0;o=0;l
=l+(-1)|0;if(!l)break a;e=k;i=q;}else{j=d+1|0;i=q+1|0;g[d]=r[q];o=o+1|0;p=0;c=c+(-1)|0;if(c==1){q=i;k=e;break a;}}if((o|p)>=n)break;d=j;q=i;}k=e;while(true){b=Sj(g[k],h,i,c,0,m);if(!b){d=j;q=i;}else{M(h,i,f,j,b);j=j+b|0;q=i+b|0;c=c-b|0;if(c<=1)break a;d=j;}j=d+1|0;e=k+1|0;g[d]=g[k];l=l+(-1)|0;if(!l){k=e;break a;}d=Ne(r[q],f,e,l,0,m);if(!d){o=j;k=e;}else{M(f,e,f,j,d);j=j+d|0;k=e+d|0;l=l-d|0;if(!l)break b;o=j;}j=o+1|0;i=q+1|0;g[o]=r[q];c=c+(-1)|0;if(c==1){q=i;break a;}n=n+(-1)|0;if(!((b<7?0:1)|(d<7?0:1)))break;}if
(n<0)n=0;n=n+2|0;}}if(n<1)n=1;a.jP=n;if(c==1){M(f,k,f,j,l);g[j+l|0]=r[q];}else{if(!c){s=new Bh;s.c=1;s.d=1;s.f=B(659);H(s);}M(h,q,f,j,c);}}
function Y_(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.gu;g=f.data;h=Tm(a,e);M(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];k=c+(-1)|0;if(!k){M(h,0,f,l-j|0,e);return;}if(e==1){h=h.data;b=l-k|0;M(f,(m-k|0)+1|0,f,b+1|0,k);g[b]=h[j];return;}n=a.hz;o=a.jP;a:{b:while(true){p=0;q=0;i=l;while(true){r=h.data;s=r[j];t=g[m];s=s;t=t;u=n.bS.bQ.bn;s=s.bv;v=s.k-u.k;w=s.j-u.j;x=s.i-u.i;v=BO(v*v+w*w+x*x);s=n.bS.bQ.bn;t=t.bv;x=t.k-s.k;w=t.j-s.j;y=t.i-s.i;if((Cm(BO(x*x+w*w+y*
y)-v)|0)<0){l=i+(-1)|0;c=m+(-1)|0;g[i]=g[m];p=p+1|0;q=0;k=k+(-1)|0;if(!k)break a;m=c;d=j;}else{l=i+(-1)|0;d=j+(-1)|0;g[i]=r[j];q=q+1|0;p=0;e=e+(-1)|0;if(e==1){c=m;j=d;break a;}}if((p|q)>=o)break;i=l;j=d;}j=d;while(true){d=k-Sj(r[j],f,b,k,k-1|0,n)|0;if(!d){p=l;c=m;}else{l=l-d|0;c=m-d|0;k=k-d|0;M(f,c+1|0,f,l+1|0,d);if(!k)break a;p=l;}l=p+(-1)|0;i=j+(-1)|0;g[p]=r[j];e=e+(-1)|0;if(e==1){j=i;break a;}p=e-Ne(g[c],h,0,e,e-1|0,n)|0;if(!p){q=l;j=i;}else{l=l-p|0;j=i-p|0;e=e-p|0;M(h,j+1|0,f,l+1|0,p);if(e<=1)break b;q=
l;}l=q+(-1)|0;m=c+(-1)|0;g[q]=g[c];k=k+(-1)|0;if(!k){c=m;break a;}o=o+(-1)|0;if(!((d<7?0:1)|(p<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.jP=o;if(e==1){b=l-k|0;M(f,(c-k|0)+1|0,f,b+1|0,k);g[b]=r[j];}else{if(!e){s=new Bh;s.c=1;s.d=1;s.f=B(659);H(s);}M(h,0,f,l-(e-1|0)|0,e);}}
function Tm(a,b){var c;c=a.lY;if(c<=b)c=b;a.lY=c;if(a.jL.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=(c|c>>16)+1|0;if(c>=0){b=a.gu.data.length>>>1|0;if(c<b)b=c;}a.jL=Bj(C,b);}return a.jL;}
function AKT(b,c,d){var e,f,g,h,i;if(c<=d){if(c<0){e=new MD;f=new Bl;f.b=D(20);f=(O(f,f.a,c,10)).s();e.c=1;e.d=1;e.f=f;H(e);}if(d<=b)return;e=new MD;f=new Bl;f.b=D(20);f=(O(f,f.a,d,10)).s();e.c=1;e.d=1;e.f=f;H(e);}e=new Bh;f=new P;f.b=D(16);I(f,f.a,B(660));O(f,f.a,c,10);I(f,f.a,B(661));O(f,f.a,d,10);I(f,f.a,B(595));g=new N;h=f.b;c=f.a;Q();i=D(c);g.e=i;M(h,0,i,0,c);e.c=1;e.d=1;e.f=g;H(e);}
function M9(){var a=this;DC.call(a);a.iZ=null;a.ws=null;a.u0=null;a.kM=null;}
function AJ3(a,b){a.iZ.eq.ea.k$=A4F(b);}
function AQk(a,b){b=a.iZ.eq.ea;b.hI=1;b.ez=0;}
function Z6(a,b,c){var d,e,f,g,h,i;d=$rt_globals.window.document.createElement("img");e=a.ws;if(e!==null)d.setAttribute("crossOrigin",$rt_ustr(e));e=a.kM;e.bx=e.bx+1|0;e=new Ra;e.mB=a;e.Cv=b;e.ut=c;e.rH=d;d.addEventListener("load",BY(e,"handleEvent"),!!0);d.addEventListener("error",BY(e,"handleEvent"),!!0);if(!a.kM.vb){b=$rt_ustr(b);d.src=b;}else{b=a.u0;c=X$(c);e=new P;e.b=D(16);I(e,e.a,B(662));f=e.a;if(b===null)b=B(2);I(e,f,b);I(e,e.a,B(663));f=e.a;if(c===null)c=B(2);I(e,f,c);b=new N;g=e.b;h=e.a;Q();i=D(h);b.e
=i;M(g,0,i,0,h);b=$rt_ustr(b);d.src=b;}return 0;}
function AKi(a,b,c){return Z6(a,b,c);}
function QA(){var a=this;C.call(a);a.ic=null;a.fQ=null;}
function WV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(AS4()){var $T=SU();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ic.readyState==4){if(a.ic.status==200){b=a.fQ;if(b.ew.dI){if(A_a===null){c=new Ct;c.cf=A5j;d=new P;d.b=D(16);c.bc=d;c.b$=D(32);c.ck=0;Cr();c.cg=A$H;A_a=c;}e=A_a;b=b.eF;d=new P;d.b=D(16);I(d,d.a,B(502));f=d.a;if(b===null)b=B(2);I(d,f,b);b=new N;g=d.b;h=d.a;Q();i
=D(h);b.e=i;M(g,0,i,0,h);Fh(DF(e.bc,b),10);Co(e);}e=a.ic.response;j=new $rt_globals.Int8Array(e);b=a.fQ;d=b.fe;c=b.eF;b=new Ji;b.dS=j;b.qj=e;d.jR(c,b);}else if(a.ic.status!=404&&a.ic.status!=403){try{k=S(100);$p=1;continue _;}catch($$e){$$je=Br($$e);if($$je instanceof Dg){}else{throw $$e;}}b=a.fQ;d=b.ew;f=b.fJ;c=b.eF;b=b.fe;if(d.dI){if(A_a===null){j=new Ct;j.cf=A5j;e=new P;e.b=D(16);j.bc=e;j.b$=D(32);j.ck=0;Cr();j.cg=A$H;A_a=j;}j=A_a;e=new P;e.b=D(16);I(e,e.a,B(113));I(e,e.a,c===null?B(2):c);l=new N;g=e.b;m
=e.a;Q();i=D(m);l.e=i;M(g,0,i,0,m);e=j.bc;I(e,e.a,l);n=e.a;Bd(e,n,n+1|0);e.b.data[n]=10;Co(j);}d.bx=d.bx+1|0;e=new GZ;e.ew=d;e.fJ=f;e.eF=c;e.fe=b;b=null;d=null;e.d7=new C;e.d3=1;e.eU=d;e.fn=b;h=A_l;A_l=h+1|0;e.fl=S(h);b=new Fb;b.eW=e;FR(b);}else{b=a.fQ;b.fe.iV(b.eF);}b=a.fQ.ew;b.bx=b.bx-1|0;}return;case 1:a:{try{ABr(k);if(GG()){break _;}break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dg){}else{throw $$e;}}}b=a.fQ;d=b.ew;f=b.fJ;c=b.eF;b=b.fe;if(d.dI){if(A_a===null){j=new Ct;j.cf=A5j;e=new P;e.b=D(16);j.bc
=e;j.b$=D(32);j.ck=0;Cr();j.cg=A$H;A_a=j;}j=A_a;e=new P;e.b=D(16);I(e,e.a,B(113));I(e,e.a,c===null?B(2):c);l=new N;g=e.b;m=e.a;Q();i=D(m);l.e=i;M(g,0,i,0,m);e=j.bc;I(e,e.a,l);n=e.a;Bd(e,n,n+1|0);e.b.data[n]=10;Co(j);}d.bx=d.bx+1|0;e=new GZ;e.ew=d;e.fJ=f;e.eF=c;e.fe=b;b=null;d=null;e.d7=new C;e.d3=1;e.eU=d;e.fn=b;h=A_l;A_l=h+1|0;e.fl=S(h);b=new Fb;b.eW=e;FR(b);b=a.fQ.ew;b.bx=b.bx-1|0;return;default:AQa();}}SU().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AGd(a,b){var $p,$z;$p=0;if(AS4()){var $T=SU();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WV(a,b);if(GG()){break _;}return;default:AQa();}}SU().s(a,b,$p);}
var ABV=G();
function Gn(){C.call(this);this.o0=0;}
var Bfd=null;var Bfe=null;var Bff=null;function ASZ(a){return a.o0;}
function AAw(){var b;b=new Gn;b.o0=1;Bfd=b;b=new Gn;b.o0=0;Bfe=b;Bff=L($rt_booleancls());}
var Tb=G();
var A9n=null;function AJL(){AJL=V(Tb);AGV();}
function AGh(){var b,c,d,e,f,g;AJL();b=A9n;if(b.ff){b.ff=0;c=b.dp.data;d=null;e=0;f=c.length;if(e>f){b=new Bh;b.c=1;b.d=1;H(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}c=b.cs.data;d=null;e=0;f=c.length;if(e>f){b=new Bh;b.c=1;b.d=1;H(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}}Et();BH(b,B(664),A9E);BH(A9n,B(665),A9C);BH(A9n,B(666),A9y);BH(A9n,B(667),A9z);BH(A9n,B(668),A9A);BH(A9n,B(669),A9B);BH(A9n,B(670),A9F);BH(A9n,B(671),A9G);BH(A9n,B(672),A9H);BH(A9n,B(673),A9I);BH(A9n,B(674),A9J);BH(A9n,B(675),A9K);BH(A9n,B(676),A9L);BH(A9n,
B(677),A9M);BH(A9n,B(678),A9N);BH(A9n,B(679),A9O);BH(A9n,B(680),A9P);BH(A9n,B(681),A9Q);BH(A9n,B(682),A9R);BH(A9n,B(683),A9S);BH(A9n,B(684),A9T);BH(A9n,B(685),A9U);BH(A9n,B(686),A9V);BH(A9n,B(687),A9W);BH(A9n,B(688),A9X);BH(A9n,B(689),A9Y);BH(A9n,B(690),A9Z);BH(A9n,B(691),A90);BH(A9n,B(692),A91);BH(A9n,B(693),A92);BH(A9n,B(694),A93);BH(A9n,B(695),A94);BH(A9n,B(696),A95);BH(A9n,B(697),A96);}
function AGV(){A9n=EE(51,0.800000011920929);AGh();}
var MD=G(Y);
function Ra(){var a=this;C.call(a);a.Cv=null;a.ut=null;a.rH=null;a.mB=null;}
function VP(a,b){var c;if(BC($rt_str(b.type),B(698))){b=a.mB.iZ.eq.ea;b.hI=1;b.ez=0;}else{b=a.ut;b.ow=a.rH;c=a.mB.iZ;It(c.mu,c.lC,c.mh,b);b=c.eq.ea;b.kr=1;b.ez=0;}b=a.mB.kM;b.bx=b.bx-1|0;}
function AJC(a,b){VP(a,b);}
$rt_packages([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang",-1,"physx",-1,"imgui",23,"idl",24,"helper"]);
$rt_metadata([C,0,0,[],0,3,0,0,["dT",A4r(AR2),"d5",A4s(AL9),"s",A4r(AIb)],WS,0,C,[],0,3,0,0,0,Gf,0,C,[],0,3,0,A6c,0,Lo,0,C,[],3,3,0,0,0,F$,0,C,[Lo],0,3,0,0,["o_",A4s(AQI),"kO",A4v(AXe),"mb",A4v(AVt),"np",A4t(AOD),"pl",A4t(AUK)],CV,0,C,[],3,3,0,0,0,YH,0,F$,[CV],0,3,0,0,0,CQ,0,C,[],3,3,0,0,0,F8,0,C,[CQ],0,3,0,0,0,C3,0,C,[],3,3,0,0,0,B2,0,C,[],3,3,0,0,0,BG,0,C,[C3,B2],1,3,0,0,["s",A4r(AS5)],EH,0,BG,[],12,3,0,A19,0,Ga,0,C,[],0,3,0,0,0,Mh,0,C,[],3,3,0,0,0,Jz,0,Ga,[Mh],0,3,0,0,0,GL,0,C,[],3,3,0,0,0,C8,0,C,[],3,3,
0,0,0,GX,0,C,[GL,C8],0,3,0,0,0,Gr,0,C,[],3,3,0,0,0,BX,0,C,[Gr],0,3,0,0,0,G7,0,BX,[],0,3,0,0,0,AEh,0,G7,[],0,0,0,0,0,FT,0,BG,[],12,3,0,AXn,0,K$,0,C,[],3,3,0,0,0,JA,0,C,[K$],3,3,0,0,0,Ft,0,C,[],3,3,0,0,0,Dr,0,C,[Ft],1,3,0,0,0,AFa,0,Dr,[],0,0,0,0,0,K2,0,GX,[],0,3,0,0,0,Hn,0,C,[Gr],0,3,0,0,0,ABt,0,C,[],1,3,0,0,0,ZY,0,C,[],0,3,0,0,0,Tv,0,C,[],3,3,0,0,0,L3,0,C,[Tv],0,3,0,0,0,AD5,0,L3,[],0,0,0,0,0,ACz,0,F8,[],0,3,0,0,0,Rw,0,C,[],32,0,0,A6l,0,ADo,0,C,[],1,3,0,0,0,Sn,0,C,[],32,0,0,A6n,0,AE_,0,Dr,[],0,0,0,0,0,FZ,0,C,
[K$],0,3,0,0,0,O1,0,FZ,[JA],0,3,0,0,0,Gv,0,C,[],4,3,0,A6x,0,Kz,0,C,[Gr],1,3,0,0,0,Ts,0,G7,[],0,3,0,0,0,Rn,0,C,[],0,3,0,0,0,JW,0,C,[],0,3,0,A6B,0,Mt,0,C,[Gr],1,3,0,0,0,Jr,0,FZ,[JA],0,3,0,0,0]);
$rt_metadata([P0,0,FZ,[JA],0,3,0,0,0,DL,0,BX,[],0,3,0,0,0,PS,0,Jr,[],0,3,0,0,0,UZ,0,F8,[],0,3,0,0,0,Ke,0,C,[],3,3,0,0,0,WL,0,F8,[],0,3,0,0,0,VX,0,C,[CQ],4,3,0,0,0,MV,0,C,[],32,0,0,A6D,0,Cw,0,BG,[],12,3,0,ADE,0,Ce,0,C,[CQ],1,3,0,0,0,Fg,0,Ce,[],1,3,0,0,0,We,0,Fg,[],0,3,0,0,0,Xu,0,Fg,[],0,3,0,0,0,CM,0,Ce,[],1,3,0,0,0,E_,0,CM,[],1,3,0,0,0,Z4,0,E_,[],0,3,0,0,0,AAG,0,C,[Gr],0,0,0,0,0,Lg,0,Ce,[],0,3,0,0,0,AA3,0,Lg,[],0,3,0,0,0,ABT,0,Ce,[],0,3,0,0,0,WJ,0,Ce,[],0,3,0,0,0,AEB,0,Ce,[],0,3,0,0,0,AEU,0,C,[],0,3,0,0,0,L9,
0,Ce,[],1,3,0,0,0,Wz,0,L9,[],0,3,0,0,0,Va,0,CM,[],0,3,0,0,0,AE$,0,CM,[],0,3,0,0,0,YI,0,E_,[],0,3,0,0,0,AEf,0,Ce,[],0,3,0,0,0,XI,0,E_,[],0,3,0,0,0,AF0,0,CM,[],0,3,0,0,0,YZ,0,CM,[],0,3,0,0,0,VL,0,Ce,[],0,3,0,0,0,Wt,0,CM,[],0,3,0,0,0,Wv,0,Ce,[],0,3,0,0,0,AB5,0,Ce,[],0,3,0,0,0,AC5,0,Fg,[],0,3,0,0,0,AAg,0,CM,[],0,3,0,0,0,Y$,0,Ce,[],0,3,0,0,0,AD1,0,E_,[],0,3,0,0,0,ABZ,0,Fg,[],0,3,0,0,0,Xi,0,Ce,[],0,3,0,0,0,UG,0,CM,[],0,3,0,0,0,ACF,0,CM,[],0,3,0,0,0,QX,0,C,[CV],0,3,0,0,0,CW,0,Jz,[Ke],0,3,0,0,0,C9,0,CW,[],0,3,0,A6U,
0,FX,0,C9,[GL],0,3,0,0,0,Kt,0,FX,[],0,3,0,0,0,ABk,0,Kt,[],0,3,0,0,0]);
$rt_metadata([Yy,0,BX,[],0,0,0,0,0,KR,0,CW,[],0,3,0,0,0,OB,0,C,[],3,3,0,0,0,E7,0,C,[OB],1,3,0,0,0,VG,0,E7,[],0,0,0,0,0,Da,0,Ga,[Ke],0,3,0,0,0,AAl,0,Da,[],0,3,0,0,0,Yx,0,BX,[],0,0,0,0,0,BT,0,C,[],1,3,0,AGZ,0,Ss,0,BT,[],0,0,0,0,0,AD6,0,BT,[],0,0,0,0,0,Lw,0,DL,[],0,3,0,0,0,AC2,0,Lw,[],0,3,0,0,0,PV,0,BT,[],0,0,0,0,0,AFS,0,BX,[],0,0,0,0,0,H9,0,C9,[],0,3,0,0,0,AD7,0,BT,[],0,0,0,0,0,GJ,0,C,[],3,3,0,0,0,El,0,C,[B2,GJ],0,3,0,0,0,Ev,"Table$DebugRect",12,El,[],0,3,0,A09,0,VJ,0,E7,[],0,0,0,0,0,Fu,0,Da,[GL],0,3,0,0,0,Vd,
0,Fu,[],0,3,0,0,0,ACJ,0,BX,[],0,0,0,0,0,NY,0,C,[],3,3,0,0,0,AEE,0,C,[NY],0,3,0,0,0,Go,0,C,[],0,3,0,0,0,Gu,0,Go,[],0,3,0,0,0,SJ,0,Gu,[],0,3,0,0,0,KZ,0,Da,[GL],0,3,0,0,0,V4,0,KZ,[],0,3,0,0,0,AGr,0,KR,[],0,0,0,0,0,LB,0,CW,[],0,3,0,0,0,ZI,0,FX,[],0,3,0,0,0,MB,0,Da,[Mh],0,3,0,0,0,PT,0,BT,[],0,0,0,0,0,SZ,0,C,[],0,3,0,0,0,AB3,0,C,[Ft],0,0,0,0,0,AC3,0,BX,[],0,0,0,0,0,W2,0,Dr,[],0,0,0,0,0,ACl,0,C,[],0,3,0,0,0,X1,0,BX,[],0,0,0,0,0,Zn,0,DL,[],0,0,0,0,0,ACH,0,Hn,[],0,0,0,0,0,So,0,BT,[],0,0,0,0,0,Sr,0,BT,[],0,0,0,0,0,R5,
0,C,[],3,3,0,0,0,J1,0,C,[],0,3,0,0,0,Qy,0,J1,[],0,3,0,0,0,VH,0,E7,[],0,0,0,0,0]);
$rt_metadata([Yw,0,Kz,[],0,0,0,0,0,Yz,0,Mt,[],0,0,0,0,0,AFT,0,BX,[],0,0,0,0,0,AFU,0,DL,[],0,0,0,0,0,PU,0,BT,[],0,0,0,0,0,Ee,0,C,[CQ],0,3,0,A7c,0,RI,0,Gu,[],0,3,0,0,0,Wq,0,BX,[],0,0,0,0,0,Uu,0,Dr,[],0,0,0,0,0,St,0,BT,[],0,0,0,0,0,ABw,0,CW,[],0,3,0,0,0,ACI,0,BX,[],0,0,0,0,0,OJ,0,C,[],0,3,0,0,0,Hi,0,BT,[],0,3,0,0,0,VR,0,LB,[],0,3,0,0,0,Sp,0,BT,[],0,0,0,0,0,RP,0,Da,[GL],0,3,0,0,0,ACN,0,K2,[],0,0,0,0,0,PF,0,C,[],0,3,0,0,0,LF,0,Da,[],0,3,0,A7g,0,QH,0,C,[],0,3,0,0,0,AD8,0,BT,[],0,0,0,0,0,PW,0,BT,[],0,0,0,0,0,AEW,0,
H9,[],0,3,0,0,0,Sq,0,BT,[],0,0,0,0,0,Om,0,C,[],0,3,0,0,0,AGk,0,C,[],0,3,0,0,0,Dy,0,BG,[],12,3,0,A3V,0,AGo,0,BT,[],0,0,0,0,0,ACA,0,Dr,[],0,0,0,0,0,CG,0,C,[],1,3,0,0,0,PX,0,CG,[],0,0,0,0,0,Uo,0,C,[R5],0,3,0,0,0,Ti,0,C,[],0,3,0,0,0,RV,0,C,[],0,3,0,0,0,Sk,0,C,[],0,3,0,0,0,JX,0,BX,[],0,3,0,0,0,Ut,0,Dr,[],0,0,0,0,0,AFV,0,MB,[],0,0,0,0,0,Up,0,C,[],3,3,0,0,0,Wr,0,BX,[],0,0,0,0,0,AGy,0,CW,[],0,3,0,0,0,Xs,0,CW,[],0,3,0,0,0,ACO,0,DL,[],0,0,0,0,0,K5,0,C,[],0,3,0,0,0,VF,0,K5,[],0,0,0,0,0,AFL,0,Ga,[CV],0,3,0,0,0,T$,0,BX,
[],0,0,0,0,0,AE1,0,FX,[],0,3,0,0,0,W7,0,BX,[],0,0,0,0,0]);
$rt_metadata([AGe,0,DL,[],0,0,0,0,0,Py,0,Go,[],0,3,0,0,0,Xx,0,CW,[],0,3,0,0,0,RR,0,C,[],0,3,0,0,0,RB,0,C,[],0,3,0,0,0,W4,0,Da,[],0,3,0,0,0,Zo,0,GX,[],0,0,0,0,0,T_,0,BX,[],0,0,0,0,0,SE,0,CW,[],0,3,0,0,0,Zu,0,JX,[],0,3,0,0,0,Ua,0,C9,[],0,0,0,0,0,VI,0,E7,[],0,0,0,0,0,ZK,0,C,[],1,3,0,0,0,PQ,0,C,[],0,3,0,0,0,DT,0,C,[B2],0,3,0,A7y,0,Bn,0,C,[],1,3,0,DS,0,UK,0,Bn,[],0,3,0,0,0,ACB,0,C,[],0,3,0,0,0,Ph,0,Bn,[],0,0,0,0,0,AF5,0,C,[],0,3,0,0,0,EJ,0,Bn,[],0,3,0,0,0,H_,0,EJ,[],0,3,0,0,0,Hk,0,EJ,[],0,3,0,0,0,IW,0,C,[],3,3,0,
0,0,U6,0,C,[IW],0,3,0,0,0,Pk,0,Bn,[],0,0,0,0,0,YD,0,C,[GJ],0,3,0,0,0,Pg,0,Bn,[],0,0,0,0,0,Hm,0,Bn,[],0,3,0,0,0,Pf,0,Bn,[],0,0,0,0,0,Pe,0,Bn,[],0,0,0,0,0,JM,0,C,[],4,3,0,0,0,ZW,0,CG,[],0,0,0,0,0,IM,0,C,[],3,3,0,0,0,BA,0,C,[B2,IM],0,3,0,0,0,ADV,0,Bn,[],0,0,0,0,0,GS,0,Bn,[],0,3,0,0,0,ADt,0,C,[],0,3,0,0,0,Pl,0,Bn,[],0,0,0,0,0,P5,0,GS,[],0,3,0,0,0,VO,0,C,[CQ],0,3,0,0,0,E0,0,BG,[],12,3,0,A0q,0,ON,0,C,[],0,3,0,A8k,0,In,0,Bn,[],0,3,0,0,0,Wo,0,In,[],0,3,0,0,0,Sd,0,Bn,[],0,0,0,0,0,Xe,0,C,[B2],4,3,0,0,0,Pd,0,Bn,[],0,0,
0,0,0,D4,0,C,[B2,IM],0,3,0,A0d,0,AAo,0,Hm,[],0,3,0,0,0]);
$rt_metadata([Wa,0,Bn,[],0,3,0,0,0,U0,0,C,[],0,3,0,0,0,Zx,0,C,[GJ],0,3,0,0,0,Pi,0,Bn,[],0,0,0,0,0,AFO,0,Bn,[],0,3,0,0,0,ADW,0,Bn,[],0,0,0,0,0,V$,0,Hm,[],0,3,0,0,0,J2,0,C,[B2],0,3,0,A8t,0,Kc,0,C,[B2],0,3,0,A1c,0,L$,0,C,[B2],0,3,0,A2X,0,AA9,0,C,[B2],0,3,0,0,0,T3,0,C,[B2],0,3,0,0,0,XW,0,C,[B2,GJ],0,3,0,0,0,ACh,0,C,[IW],0,3,0,0,0,O7,0,C,[],4,3,0,AMI,0,Cn,0,C,[],4,3,0,A8V,0,Ux,0,C,[],4,3,0,0,0,ABW,0,In,[],0,3,0,0,0,DX,0,C,[B2],0,3,0,FB,0,QS,0,C,[],3,3,0,0,0,KM,0,C,[QS,B2],0,3,0,0,0,R9,0,KM,[],0,3,0,0,0,ADU,0,Bn,
[],0,0,0,0,0,Pj,0,Bn,[],0,0,0,0,0,IY,0,C,[],0,3,0,AKX,0,D0,0,C,[B2],0,3,0,Hr,0,TL,0,C,[],0,3,0,0,0,ADX,0,C,[],0,3,0,0,0,Bm,0,C,[B2,IM],0,3,0,Cu,0,VQ,0,C,[B2,GJ],0,3,0,0,0,Vi,0,CG,[],0,0,0,0,0,OI,0,GS,[],0,3,0,0,0,AD9,0,C,[IW],0,3,0,0,0,UD,0,C,[],0,3,0,0,0,AFp,0,C,[B2],0,3,0,0,0,I6,0,C,[B2],0,3,0,0,0,Se,0,Bn,[],0,0,0,0,0,AFr,0,C,[],0,3,0,0,0,AAF,0,C,[],0,3,0,0,0,AEs,0,C,[],0,3,0,0,0,AFo,0,C,[B2],0,3,0,0,0,W$,0,C,[],3,3,0,0,0,AB6,0,C,[B2],0,3,0,0,0,SL,0,C,[],0,0,0,0,0,C7,"GlyphLayout",14,C,[CQ],0,3,0,EB,["dY",
A4r(AFx),"s",A4r(AMG)],DY,0,C,[],0,3,0,0,0,ADS,0,DY,[],0,3,0,0,0,Ks,"BitmapFont",14,C,[CV],0,3,0,0,0,O9,0,C,[],0,3,0,A9x,0,Bq,"Color",13,C,[],0,3,0,Et,["d5",A4s(ASg),"dT",A4r(ALI),"s",A4r(AIX)]]);
$rt_metadata([Jg,0,C,[CV],1,3,0,0,0,Hu,0,Jg,[],0,3,0,0,["s",A4r(AMm)],BP,"Array",8,C,[C8],0,3,0,0,["dT",A4r(AQZ),"d5",A4s(ALv),"s",A4r(AOz)],Jf,0,C,[C8],0,3,0,0,0,V2,0,Jf,[],0,3,0,0,0,AGj,0,C,[C8],0,3,0,0,0,Dj,0,C,[],4,3,0,0,0,Zr,0,C,[],0,3,0,0,0,ACV,0,C,[],0,3,0,0,0,ADT,0,C,[],0,3,0,0,0,ADl,0,C,[],0,3,0,0,0,Op,0,C,[],0,3,0,A$g,0,T7,0,C,[],0,3,0,0,0,ADy,0,C,[],0,3,0,0,0,ADc,0,C,[],0,3,0,0,0,WZ,0,C,[],0,3,0,0,0,YB,0,C,[],0,3,0,0,0,VS,0,C,[],0,3,0,0,0,Y5,0,C,[],0,3,0,0,0,Wp,0,C,[],0,3,0,0,0,AAI,0,C,[],0,3,0,0,
0,AA1,0,C,[],0,3,0,0,0,Gc,0,BG,[],12,3,0,AZS,0,W5,0,C,[],0,3,0,0,0,SD,0,C,[],3,3,0,0,0,Dw,0,C,[],0,3,0,0,0,Ud,0,Dw,[],0,3,0,0,0,Uc,0,Dw,[],0,3,0,0,0,WA,0,Dw,[],0,3,0,0,0,ABu,0,Dw,[],0,3,0,0,0,XY,0,Dw,[],0,3,0,0,0,KB,0,Dw,[],0,3,0,0,0,ABq,0,KB,[],0,3,0,0,0,H7,0,C,[],3,3,0,0,0,ABO,0,C,[CV,H7],0,3,0,0,0,Fv,0,C,[],3,3,0,0,0,XS,0,C,[Fv,H7],0,3,0,0,0,Y3,0,C,[Fv],0,3,0,0,0,UT,0,C,[],0,3,0,0,0,EP,0,C,[Fv],0,3,0,0,0,XC,0,EP,[],0,3,0,0,0,Hd,0,EP,[H7,Fv],1,3,0,0,0,DJ,0,Hd,[],1,3,0,A$l,0,AEo,0,C,[],0,3,0,0,0,AFd,0,DJ,[],
4,3,0,0,0,ACS,0,DJ,[],4,3,0,0,0,PZ,0,EP,[],0,3,0,0,0,LW,0,EP,[],0,3,0,0,0,Z_,0,LW,[],0,3,0,0,0,ABo,0,DJ,[],4,3,0,0,0]);
$rt_metadata([G0,0,Hd,[],1,3,0,0,0,WT,0,G0,[],4,3,0,0,0,ACQ,0,DJ,[],4,3,0,0,0,ADn,0,DJ,[],4,3,0,0,0,WR,0,G0,[],4,3,0,0,0,E2,0,BG,[],12,3,0,A2g,0,Gd,0,C,[CV,Fv,H7],1,3,0,0,0,KX,0,Gd,[Fv],1,3,0,0,0,ZM,0,KX,[Fv],0,3,0,0,0,E9,0,BG,[],12,3,0,AZD,0,CL,0,Gd,[],1,3,0,0,0,Ij,0,CL,[],1,3,0,0,0,AAQ,0,C,[],0,3,0,0,0,EQ,0,CL,[],1,3,0,A$y,0,EG,0,EQ,[],1,3,0,0,0,FY,0,EG,[],1,3,0,0,0,ABN,0,FY,[],0,3,0,0,0,H$,0,CL,[],1,3,0,0,0,ZB,0,H$,[],0,3,0,0,0,AFc,0,CL,[],0,3,0,0,0,F2,0,CL,[],1,3,0,0,0,T9,0,F2,[],0,3,0,0,0,G6,0,CL,[],1,
3,0,0,0,ABL,0,EG,[],0,3,0,0,0,V8,0,EG,[],0,3,0,0,0,Kk,0,CL,[],1,3,0,0,0,AEb,0,Kk,[],0,3,0,0,0,AAz,0,F2,[],0,3,0,0,0,ACU,0,FY,[],0,3,0,0,0,XB,0,CL,[],0,3,0,0,0,ADs,0,F2,[],0,3,0,0,0,AEe,0,CL,[],0,3,0,0,0,X7,0,EQ,[],0,3,0,0,0,ACi,0,CG,[],0,0,0,0,0,UJ,0,CG,[],0,0,0,0,0,UP,0,EG,[],0,3,0,0,0,XH,0,G6,[],0,3,0,0,0,AF4,0,Ij,[],0,3,0,0,0,Xg,0,Ij,[],0,3,0,0,0,AEw,0,G6,[],0,3,0,0,0,AC_,0,FY,[],0,3,0,0,0,AGf,0,H$,[],0,3,0,0,0,E$,0,Gd,[],1,3,0,0,0,WU,0,E$,[],0,3,0,0,0,F5,0,C,[],1,3,0,0,0,XO,0,F5,[],0,3,0,0,0,AEN,0,E$,[],
0,3,0,0,0,AFb,0,E$,[],0,3,0,0,0,YQ,0,F5,[],0,3,0,0,0,Vq,0,E$,[],0,3,0,0,0]);
$rt_metadata([YC,0,F5,[],0,3,0,0,0,Lv,0,C,[],3,3,0,0,0,Qg,0,C,[],3,3,0,0,0,B9,0,C,[Lv,Qg],0,3,0,0,["s",A4r(ALN)],AA4,0,C,[],4,0,0,0,0,AAN,0,C,[],4,3,0,0,0,Dg,0,C,[],0,3,0,0,["iW",A4r(ANN)],CI,0,Dg,[],0,3,0,0,0,BJ,"RuntimeException",21,CI,[],0,3,0,0,0,ACP,"ClassCastException",21,BJ,[],0,3,0,0,0,Ik,"CharSequence",21,C,[],3,3,0,0,0,N,"String",21,C,[B2,C3,Ik],0,3,0,Q,["s",A4r(C2),"d5",A4s(BC),"dT",A4r(AU2)],F4,0,Dg,[],0,3,0,0,0,Ir,0,F4,[],0,3,0,0,0,ACc,0,Ir,[],0,3,0,0,0,EY,0,C,[B2],1,3,0,0,0,EZ,0,EY,[C3],0,3,0,
0,0,Bl,0,C,[B2,Ik],0,0,0,0,["iP",A4s(QC),"s",A4r(AUB)],H1,0,C,[],3,3,0,0,0,P,0,Bl,[H1],0,3,0,0,["xA",A4v(ATK),"Ek",A4u(AJd),"s",A4r(Cy),"iP",A4s(ALu),"qO",A4t(AT_),"uu",A4t(CR)],If,0,Ir,[],0,3,0,0,0,AD4,0,If,[],0,3,0,0,0,ABY,0,If,[],0,3,0,0,0,V0,0,C,[],0,3,0,0,0,NS,0,C,[],3,3,0,0,0,L7,0,C,[NS,Ft],0,3,0,0,["eO",A4r(ACt)],PN,0,C,[],3,3,0,0,0,Mi,0,C,[PN],1,3,0,0,0,AEm,0,Mi,[],0,3,0,0,0,IT,0,C,[],4,3,0,0,0,Ye,0,C,[],4,3,0,0,0,ER,0,BG,[],12,3,0,Jv,0,M7,0,C,[],3,3,0,0,0,Ca,0,C,[],3,3,0,0,0,RD,0,C,[Ca],3,3,0,0,0,KO,
0,C,[M7,RD],0,3,0,ID,["JE",A4s(AVl)],XE,0,C,[],0,3,0,0,0,Oj,0,C,[],0,3,0,LY,0,J0,0,EY,[C3],0,3,0,0,0,JU,0,C,[],0,3,0,0,0,ACk,0,C,[],4,3,0,0,0,EF,"GlyphLayout$GlyphRun",14,C,[CQ],0,3,0,0,["dY",A4r(ALi),"s",A4r(Ug)],Do,0,C,[],0,3,0,0,["dT",A4r(ALL),"d5",A4s(AXg),"s",A4r(ATV)],KH,0,C,[],3,3,0,0,0,Kl,0,C,[KH],1,3,0,0,0,Fa,0,C,[],3,3,0,0,0,Gm,0,Kl,[Fa,B2],0,3,0,0,0,Ld,0,C,[],3,3,0,0,0,SS,0,C,[Ld],0,3,0,0,0,Y,"IndexOutOfBoundsException",21,BJ,[],0,3,0,0,0]);
$rt_metadata([ADM,0,C,[],4,3,0,0,0,CK,"NullPointerException",21,BJ,[],0,3,0,0,0,I7,"ArrayStoreException",21,BJ,[],0,3,0,0,0,DA,0,C,[C3],0,3,0,0,0,ABn,0,C,[],0,3,0,0,0,Qc,0,C,[],3,3,0,0,0,Np,0,C,[Qc],0,3,0,0,0,NT,0,C,[],0,3,0,0,0,L0,0,C,[],0,3,0,0,0,O5,0,C,[],3,3,0,0,0,LC,0,C,[O5],0,3,0,IU,0,Z3,0,C,[],0,3,0,0,0,DC,0,C,[],0,3,0,0,["ke",A4s(AL$)],Sf,0,C,[],3,3,0,0,0,EV,0,C,[Ca],3,3,0,0,0,ADB,0,C,[Sf,EV],0,3,0,0,["d4",A4s(AHl)],OM,0,C,[],3,3,0,0,0,X_,0,C,[OM],0,3,0,0,0,AEn,0,C,[SD],0,3,0,0,0,Sw,0,C,[],3,3,0,0,0,VW,
0,C,[Sw],0,3,0,0,0,QR,0,C,[],3,3,0,0,0,AEk,0,C,[QR],0,3,0,0,0,Ej,0,C,[],0,3,0,0,0,SQ,0,C,[],3,3,0,0,0,SB,0,C,[SQ],3,3,0,0,0,ABQ,0,C,[SB],0,3,0,0,0,TV,0,C,[EV],0,0,0,0,["d4",A4s(AVI)],TW,0,C,[EV],0,0,0,0,["d4",A4s(APc)],Bh,"IllegalArgumentException",21,BJ,[],0,3,0,0,0,AAA,0,C,[C8],0,3,0,0,0,RN,0,EY,[C3],0,3,0,0,0,AC4,0,C,[Ca],1,3,0,0,0,Me,0,C,[],3,3,0,0,0,Iq,"TeaGL20",5,C,[Me],0,3,0,0,["oc",A4s(AKL),"k9",A4t(AKh),"cB",A4t(AO$),"fM",A4t(ARv),"qp",A4s(AU6),"qB",A4t(ALk),"lA",A4v(ASM),"dR",A4v(N8),"i1",A4v(Rl),
"qE",A4s(AWD),"ng",A4v(AIt),"n9",A4s(AKK),"pH",A4r(APs),"qf",A4s(AM7),"hR",A4s(AOe),"dG",A4s(AMZ),"fA",A4s(AUH),"k6",A4u(AIO),"p0",A4v(AK$),"my",A4v(AMe),"d8",A4s(AO1),"gn",A4s(AWV),"qz",A4r(AN7),"k5",A4s(AGQ),"qA",A4v(Qw),"qQ",A4v(RL),"iw",A4t(ASk),"l3",A4t(KI),"gP",A4s(APp),"i0",A4u(R8),"p8",A4s(ALr),"p7",A4u(NR),"jh",A4s(AJU),"lS",A4t(ASB),"hj",A4s(AUx),"pb",A4s(AQS),"kT",A4t(AIN),"m1",A4v(AQ8),"qX",A4t(APX),"fw",function(b,c,d,e,f,g,h,i,j){Si(this,b,c,d,e,f,g,h,i,j);},"qq",A4u(ALU),"fR",A4u(AMK),"kb",A4t(AMY),
"jz",A4s(AHI),"gf",function(b,c,d,e,f,g){AT0(this,b,c,d,e,f,g);},"pm",A4v(AP8)],RS,0,C,[Me],3,3,0,0,0,MQ,"TeaGL30",5,Iq,[RS],0,3,0,0,["qY",A4s(ASQ),"yD",A4v(AUA),"t2",function(b,c,d,e,f){AX6(this,b,c,d,e,f);},"vG",A4t(AUU),"l3",A4t(ATB)],QB,"TeaGL30Debug",5,MQ,[],0,3,0,0,["qY",A4s(ASn),"yD",A4v(ARd),"t2",function(b,c,d,e,f){AXw(this,b,c,d,e,f);},"vG",A4t(AHC),"oc",A4s(AQD),"fM",A4t(AHX),"qB",A4t(AOr),"qE",A4s(AOg),"ng",A4v(ALX),"hR",A4s(AQN),"dG",A4s(AWX),"k6",A4u(ASa),"p0",A4v(AVs),"d8",A4s(AV2),"qz",A4r(AVc),
"jh",A4s(APQ),"kT",A4t(AQn),"m1",A4v(AT6),"fw",function(b,c,d,e,f,g,h,i,j){AUm(this,b,c,d,e,f,g,h,i,j);},"qq",A4u(AR7),"pm",A4v(AJ4),"k9",A4t(ATQ),"cB",A4t(AOS),"qp",A4s(AGR),"lA",A4v(AJx),"dR",A4v(AL5),"i1",A4v(AOQ),"n9",A4s(AMt),"pH",A4r(AXW),"qf",A4s(AVC),"fA",A4s(APm),"my",A4v(AQ2),"gn",A4s(AVE),"k5",A4s(AWI),"qA",A4v(AKF),"qQ",A4v(AOf),"iw",A4t(AUq),"l3",A4t(AJD),"i0",A4u(AIy),"gP",A4s(AHa),"p7",A4u(AXV),"p8",A4s(AQH),"lS",A4t(AHb),"hj",A4s(AW8),"pb",A4s(AXr),"qX",A4t(AQl),"fR",A4u(AHH),"kb",A4t(AH7),"jz",
A4s(AX_),"gf",function(b,c,d,e,f,g){AVQ(this,b,c,d,e,f,g);}],N3,0,C,[],0,3,0,0,0,C_,0,BG,[],12,3,0,Lp,0,SF,0,C,[Ca],3,3,0,0,0,Sx,0,C,[SF],0,0,0,0,["KK",A4r(AR8)],Tk,"TeaGL20Debug",5,Iq,[],0,3,0,0,["oc",A4s(AN2),"fM",A4t(AXG),"qB",A4t(ANj),"qE",A4s(ARF),"ng",A4v(AI4),"hR",A4s(AL4),"dG",A4s(AXZ),"k6",A4u(AKJ),"p0",A4v(APh),"d8",A4s(AHO),"qz",A4r(AJZ),"jh",A4s(ALn),"kT",A4t(AMw),"m1",A4v(AOo),"fw",function(b,c,d,e,f,g,h,i,j){AJG(this,b,c,d,e,f,g,h,i,j);},"qq",A4u(ASd),"pm",A4v(AXT),"k9",A4t(AG$),"cB",A4t(AGK),
"qp",A4s(ASs),"lA",A4v(AGH),"dR",A4v(AK8),"i1",A4v(ASR),"n9",A4s(APC),"pH",A4r(AMF),"qf",A4s(APv),"fA",A4s(AME),"my",A4v(ASX),"gn",A4s(APx),"k5",A4s(AUw),"qA",A4v(ATA),"qQ",A4v(AHZ),"iw",A4t(AS0),"l3",A4t(AQb),"i0",A4u(AJJ),"gP",A4s(ASv),"p7",A4u(AHe),"p8",A4s(AVS),"lS",A4t(AWM),"hj",A4s(AIL),"pb",A4s(ALF),"qX",A4t(APe),"fR",A4u(AWJ),"kb",A4t(APr),"jz",A4s(AQs),"gf",function(b,c,d,e,f,g){AIo(this,b,c,d,e,f,g);}],X3,0,C,[C8],0,3,0,0,0,WC,0,C,[],0,3,0,0,0,Pu,0,C,[Ca],3,3,0,0,0,RY,0,C,[Pu],0,0,0,0,["L6",A4r(AQi),
"IX",A4r(AIS),"PC",A4r(AP7)],Tu,0,C,[],3,3,0,0,0,Tx,0,C,[Tu],0,3,0,0,0,M3,0,DC,[],0,0,0,0,0]);
$rt_metadata([Pt,"CloneNotSupportedException",21,CI,[],0,3,0,0,0,Ix,0,CG,[],0,3,0,0,["kc",A4r(L6)],FC,0,C,[Ca],3,3,0,0,0,Q7,0,C,[FC],3,3,0,0,0,Ot,0,C,[FC],3,3,0,0,0,RA,0,C,[FC],3,3,0,0,0,OY,0,C,[FC],3,3,0,0,0,Tq,0,C,[FC],3,3,0,0,0,SH,0,C,[FC,Q7,Ot,RA,OY,Tq],3,3,0,0,0,NG,0,C,[],3,3,0,0,0,Km,0,C,[Ca],3,3,0,0,0,Uh,0,C,[Ca,SH,NG,Km],1,3,0,0,["Cl",A4s(AMT),"Ib",A4t(AWv),"Lc",A4t(AWb),"JD",A4u(AMP),"IH",A4s(AOY),"Nd",A4r(AIq),"Mz",A4u(AG2)],L5,0,C,[],1,3,0,0,0,HC,0,L5,[KH,Fa,B2],0,3,0,0,0,KW,0,HC,[],0,3,0,0,0,AB$,
0,C,[],0,3,0,0,0,Eb,0,BG,[],12,3,0,Gg,0,Du,0,C,[Ca],1,3,0,0,0,ABs,0,Du,[],1,3,0,0,0,AA$,0,Du,[],1,3,0,0,0,ACY,0,Du,[],1,3,0,0,0,ADQ,0,Du,[],1,3,0,0,0,V5,0,Du,[],1,3,0,0,0,Oe,0,C,[EV],0,0,0,0,["d4",A4s(ATw)],Of,0,C,[EV],0,0,0,0,["d4",A4s(AXL)],Oc,0,C,[EV],0,0,0,0,["d4",A4s(ANi)],OG,0,CG,[],0,3,0,0,0,S0,0,C,[Ca],3,3,0,0,0,Qt,0,C,[S0],0,0,0,0,["Ms",A4r(ASi)],U5,0,Du,[],1,3,0,0,0,Ry,0,C,[B2],4,3,0,0,0,AAH,0,C,[],4,3,0,0,0,Dv,"ReflectionException",9,CI,[],0,3,0,0,0,DB,0,C,[],4,3,0,BB,0,L1,0,C,[],3,3,0,0,0,J7,0,C,
[L1],0,0,0,0,0,Gs,0,C,[],3,3,0,0,0,J6,0,C,[Gs],0,0,0,0,0,K_,0,C,[],3,3,0,0,0,ADj,0,C,[K_],4,3,0,0,0,Cc,"NumberFormatException",21,Bh,[],0,3,0,0,0,NH,0,C,[],4,3,0,0,0,Kg,0,BJ,[],0,3,0,0,0,E3,0,CI,[],0,3,0,0,0,HY,"NoSuchMethodException",21,E3,[],0,3,0,0,0,B7,0,C,[],1,0,0,0,["c9",A4u(AI7),"dh",A4v(AKb),"jA",A4r(ARl),"s",A4r(ANF),"bA",A4s(La),"cH",A4s(AW4),"hf",A4r(AXH),"e6",A4r(J4)],Zg,0,C,[Ca],1,3,0,0,0,VE,0,C,[Ca],1,3,0,0,0,ZE,0,C,[Ca],1,3,0,0,0,LL,0,C,[Ca],3,3,0,0,0]);
$rt_metadata([NK,0,C,[LL],0,3,0,0,["Cy",A4s(AIl)],ACa,0,C,[Ca],1,3,0,0,0,NL,0,C,[LL],0,3,0,0,["Cy",A4s(AP$)],Qd,0,C,[],3,3,0,0,0,He,0,C,[Qd,Fa],0,0,0,0,0,Js,0,He,[],0,0,0,0,0,Di,0,B7,[],0,0,0,FG,["o",A4u(AHG),"X",A4r(AKv),"bs",A4s(AHY)],IQ,0,C,[],0,0,0,0,0,Dd,"PatternSyntaxException",17,Bh,[],0,3,0,0,["iW",A4r(AXD)],Jn,0,C,[C8],3,3,0,0,0,H8,0,C,[Jn],1,3,0,0,0,RM,0,C,[Jn],3,3,0,0,0,Qn,0,C,[RM],3,3,0,0,0,LG,0,H8,[Qn],1,3,0,0,0,O8,0,C,[],3,3,0,0,0,Jm,0,LG,[Fa,B2,O8],0,3,0,0,0,Oy,0,Di,[],0,0,0,0,["o",A4u(AQq),"X",
A4r(ARX),"bs",A4s(AV$)],Ty,0,Di,[],0,0,0,0,["o",A4u(ARM),"X",A4r(ATy)],N0,0,Di,[],0,0,0,0,["o",A4u(AH4),"X",A4r(AW1)],OP,0,Di,[],0,0,0,0,["o",A4u(AQz),"X",A4r(AN8),"bs",A4s(AVn)],Hl,0,Di,[],0,0,0,0,["o",A4u(AOR),"X",A4r(ARq)],Cs,0,B7,[],1,0,0,0,["o",A4u(AX2),"cP",A4r(AWH),"bs",A4s(AKY)],Pz,0,Cs,[],0,0,0,0,["cn",A4t(AWm),"c9",A4u(ASu),"dh",A4v(ARE),"X",A4r(AKw),"bs",A4s(AQw)],Cl,0,B7,[],0,0,0,0,["o",A4u(AKd),"bA",A4s(AM4),"X",A4r(AK7),"cH",A4s(AT3),"bs",A4s(ANt),"e6",A4r(AIu)],MP,0,Cl,[],0,0,0,0,["o",A4u(AMR),
"X",A4r(ALR),"bs",A4s(AVU)],Fe,0,MP,[],0,0,0,0,["o",A4u(AR9),"bA",A4s(AVM),"X",A4r(AHh)],ZT,0,Fe,[],0,0,0,0,["o",A4u(AM0),"bs",A4s(AOI),"X",A4r(AXF)],AFn,0,Fe,[],0,0,0,0,["o",A4u(AHU),"bs",A4s(AWK),"X",A4r(AJ9)],ACj,0,Fe,[],0,0,0,0,["o",A4u(AIs),"bs",A4s(AYg),"X",A4r(AMD)],Xo,0,Fe,[],0,0,0,0,["o",A4u(AP4),"bs",A4s(AV3),"X",A4r(AH5)],H5,0,Cl,[],0,0,0,0,["o",A4u(AG9),"c9",A4u(ALZ),"dh",A4v(AWc),"cH",A4s(ATX),"hf",A4r(AVk),"e6",A4r(APf)],Hp,0,C,[],1,0,0,0,0,Bs,0,Hp,[],1,0,0,Bz,["cl",A4r(AQ$),"gg",A4r(AQG),"kq",
A4r(AWB),"i8",A4r(AXE)],CB,0,Bs,[],0,0,0,0,["C",A4s(AIC),"cl",A4r(API),"gg",A4r(ASo),"kq",A4r(AOA),"s",A4r(AUM),"i8",A4r(AJP)],Lt,"MissingResourceException",16,BJ,[],0,3,0,0,0,EM,0,B7,[],1,0,0,0,["cH",A4s(ANS),"bs",A4s(AXc),"e6",A4r(AMc)],DK,0,EM,[],0,0,0,0,["o",A4u(AP6),"X",A4r(ARz)],Gh,0,DK,[],0,0,0,0,["o",A4u(AQU),"X",A4r(ARb)],DO,0,EM,[],0,0,0,0,["o",A4u(AQh),"X",A4r(ATm)],Ge,0,DK,[],0,0,0,0,["o",A4u(AUf),"bA",A4s(APL)],YO,0,DK,[],0,0,0,0,["o",A4u(AXY),"c9",A4u(AMn)],By,0,C,[],1,0,0,0,0,Qo,0,Hp,[Fa],0,0,
0,0,["s",A4r(Sa)],QG,0,B7,[],0,0,0,0,["o",A4u(ALj),"X",A4r(AVe),"bs",A4s(AVj)],Bt,0,C,[Fa,B2],0,3,0,0,0,M1,0,Cl,[],0,0,0,0,["X",A4r(AVq)],G_,0,Cl,[],0,0,0,0,["o",A4u(AHD),"bA",A4s(AU_),"X",A4r(AVA),"bs",A4s(AH$),"cH",A4s(AHV)],D7,0,Cl,[],0,0,0,0,["o",A4u(ASl),"X",A4r(AXA),"C",A4s(AJW),"cH",A4s(AHz),"bA",A4s(AWy),"bs",A4s(AJH)],Ql,0,D7,[],0,0,0,0,["C",A4s(AKZ),"X",A4r(APl)],NF,0,Cs,[],0,0,0,0,["cn",A4t(ATI),"X",A4r(ARf)]]);
$rt_metadata([EI,0,Cs,[],0,0,0,0,["cn",A4t(APP),"X",A4r(ALp),"cH",A4s(AM5)],Jp,0,Cl,[],0,0,0,0,["bA",A4s(AL3),"X",A4r(ANL),"o",A4u(AGT),"cH",A4s(ARi),"bs",A4s(AOC)],EO,0,Cs,[],0,0,0,0,["cP",A4r(ATz),"cn",A4t(AKq),"c9",A4u(AJt),"dh",A4v(ALd),"X",A4r(AOK),"cH",A4s(AOy)],PR,0,Cs,[],0,0,0,0,["cn",A4t(APS),"X",A4r(AU$)],MZ,0,Cs,[],0,0,0,0,["cn",A4t(AG6),"X",A4r(AKD)],Gk,0,Cl,[],0,0,0,0,["bA",A4s(AXJ),"o",A4u(AMQ),"X",A4r(AU4),"cH",A4s(ALl),"bs",A4s(AVO)],Zh,0,Gk,[],0,0,0,0,0,AEa,0,Gk,[],0,0,0,0,0,Qb,0,DO,[],0,0,
0,0,["o",A4u(ART)],Rd,0,DO,[],0,0,0,0,["o",A4u(AUy)],Im,0,DO,[],0,0,0,0,["o",A4u(AWu),"bA",A4s(AXj)],NU,0,Im,[],0,0,0,0,["o",A4u(AK_),"bA",A4s(AUQ)],GD,0,DO,[],0,0,0,0,["o",A4u(AYe),"X",A4r(AOX)],Nb,0,GD,[],0,0,0,0,["o",A4u(AKH)],Ow,0,DO,[],0,0,0,0,["o",A4u(APo)],AB1,0,Im,[],0,0,0,0,["o",A4u(AIa)],Po,0,GD,[],0,0,0,0,["o",A4u(AQA)],Wn,0,EM,[],0,0,0,0,["o",A4u(AX4),"c9",A4u(AOc),"X",A4r(AVD)],AAK,0,EM,[],0,0,0,0,["o",A4u(AM6),"c9",A4u(AGW),"X",A4r(AV8)],F7,0,C,[],1,0,0,0,0,AGE,0,DK,[],0,0,0,0,["o",A4u(AHq)],YN,
0,Ge,[],0,0,0,0,["o",A4u(AMg)],AAV,0,Gh,[],0,0,0,0,["o",A4u(AWh)],ABX,0,DK,[],0,0,0,0,["o",A4u(AM1)],AEi,0,Ge,[],0,0,0,0,["o",A4u(AHv)],Wd,0,Gh,[],0,0,0,0,["o",A4u(AWo)],On,0,B7,[],4,0,0,0,["o",A4u(ATZ),"bs",A4s(ATu),"X",A4r(AMi)],Vh,0,B7,[],0,0,0,0,["o",A4u(AQ7),"bs",A4s(ARg),"X",A4r(AYc)],AAJ,0,B7,[],0,0,0,0,["o",A4u(AK1),"bs",A4s(APG),"X",A4r(AQX)],PP,0,B7,[],4,0,0,0,["o",A4u(AVF),"bs",A4s(ARK),"X",A4r(AUj)],AFH,0,B7,[],0,0,0,0,["o",A4u(AU9),"bs",A4s(APR),"X",A4r(AKc)],AAe,0,B7,[],0,0,0,0,["o",A4u(ARA),"bs",
A4s(AJ5),"X",A4r(AQM)],YU,0,Cl,[],0,0,0,0,["o",A4u(APq),"X",A4r(AJc),"bA",A4s(ARk),"jA",A4r(AUY),"bs",A4s(ARj)],US,0,Cl,[],4,0,0,0,["o",A4u(AU5),"X",A4r(ARR),"bA",A4s(AV6),"jA",A4r(AGF),"bs",A4s(APB)],AFy,0,B7,[],4,0,0,0,["o",A4u(ALo),"bs",A4s(ASK),"X",A4r(ALM)],ADA,0,B7,[],0,0,0,0,["o",A4u(AMM),"bs",A4s(ASD),"X",A4r(AHf)],ZP,0,B7,[],0,0,0,0,["o",A4u(ATo),"bs",A4s(AII),"X",A4r(AJ6)],Ih,0,Cl,[],0,0,0,0,["o",A4u(AHr),"bA",A4s(AVL),"X",A4r(AQv),"bs",A4s(ANB)],AFA,0,Ih,[],0,0,0,0,["o",A4u(AIK),"c9",A4u(AOG),"dh",
A4v(AHg),"cH",A4s(AUp),"X",A4r(AXh)],ACd,0,Ih,[],0,0,0,0,["o",A4u(ALT),"X",A4r(ARh)],Kj,0,Bl,[H1],0,3,0,0,["xA",A4v(AJR),"Ek",A4u(ARa),"iP",A4s(ARp),"qO",A4t(AWE),"uu",A4t(AQd)],ACR,0,Cs,[],0,0,0,0,["cn",A4t(AI6),"c9",A4u(AQ5),"dh",A4v(ASN),"X",A4r(AMW),"cH",A4s(AKu)],MX,0,Cs,[],0,0,0,0,["cn",A4t(AL0),"X",A4r(AKE)],T8,0,Cs,[],0,0,0,0,["cn",A4t(AWi),"X",A4r(AWY)],AGD,0,C,[],4,3,0,0,0,HA,0,C,[],4,0,0,ANK,0,Qf,0,Cs,[],0,0,0,0,["cn",A4t(ANZ),"X",A4r(AYb)],JF,0,Cl,[],0,0,0,0,["bA",A4s(AVf),"o",A4u(QZ),"c9",A4u(AKs),
"dh",A4v(AR_),"X",A4r(AOl),"cH",A4s(AHd),"bs",A4s(AOp)],Mj,0,Cl,[],0,0,0,0,["bA",A4s(ARn),"o",A4u(M0),"c9",A4u(AVv),"dh",A4v(ANV),"X",A4r(AXU),"cH",A4s(AI8),"bs",A4s(AVB)],Fm,0,Cs,[],0,0,0,0,["cn",A4t(AVV),"c9",A4u(AUN),"dh",A4v(AId),"X",A4r(AXk),"cH",A4s(AVP)]]);
$rt_metadata([SO,0,F7,[],0,0,0,0,["hX",A4s(AIj),"xO",A4t(ANy)],SP,0,F7,[],0,0,0,0,["hX",A4s(AWp),"xO",A4t(APa)],X6,0,C,[],0,0,0,0,0,ABm,0,C,[],4,0,0,0,0,UM,0,C,[],4,3,0,0,0,D1,"NegativeArraySizeException",21,BJ,[],0,3,0,0,0,Ub,0,C,[],0,0,0,0,0,K0,0,C,[],0,3,0,0,0,AB9,0,C,[],4,3,0,0,0,Mf,0,By,[],0,0,0,0,["bm",A4r(ATl)],LP,0,By,[],0,0,0,0,["bm",A4r(AT$)],X2,0,By,[],0,0,0,0,["bm",A4r(AV9)],Yk,0,By,[],0,0,0,0,["bm",A4r(AOq)],Ym,0,By,[],0,0,0,0,["bm",A4r(AJu)],Md,0,By,[],0,0,0,0,["bm",A4r(AIB)],KU,0,Md,[],0,0,0,
0,["bm",A4r(AJX)],ZC,0,By,[],0,0,0,0,["bm",A4r(ATa)],MU,0,KU,[],0,0,0,0,["bm",A4r(APV)],ACL,0,MU,[],0,0,0,0,["bm",A4r(AMd)],WK,0,By,[],0,0,0,0,["bm",A4r(AR3)],Vb,0,By,[],0,0,0,0,["bm",A4r(AMa)],AA7,0,By,[],0,0,0,0,["bm",A4r(APd)],AE2,0,By,[],0,0,0,0,["bm",A4r(AUV)],ZH,0,By,[],0,0,0,0,["bm",A4r(APZ)],AEv,0,By,[],0,0,0,0,["bm",A4r(AKN)],XM,0,By,[],0,0,0,0,["bm",A4r(ANE)],YG,0,By,[],0,0,0,0,["bm",A4r(AR0)],Us,0,By,[],0,0,0,0,["bm",A4r(AJe)],Z5,0,By,[],0,0,0,0,["bm",A4r(AXy)],AEF,0,By,[],0,0,0,0,["bm",A4r(APT)],Yc,
0,By,[],0,0,0,0,["bm",A4r(ALs)],ABI,0,By,[],0,0,0,0,["bm",A4r(AJj)],WP,0,By,[],0,0,0,0,["bm",A4r(ASP)],Zi,0,By,[],0,0,0,0,["bm",A4r(ATR)],AEP,0,By,[],0,0,0,0,["bm",A4r(AOE)],V1,0,By,[],0,0,0,0,["bm",A4r(ANo)],Vs,0,By,[],0,0,0,0,["bm",A4r(AMu)],ZG,0,By,[],0,0,0,0,["bm",A4r(AV4)],J_,0,By,[],0,0,0,0,["bm",A4r(ALE)],AFt,0,J_,[],0,0,0,0,["bm",A4r(AMl)],ACT,0,Mf,[],0,0,0,0,["bm",A4r(AQ3)],Vp,0,LP,[],0,0,0,0,["bm",A4r(AKo)],ABc,0,By,[],0,0,0,0,["bm",A4r(ALH)],ABy,0,By,[],0,0,0,0,["bm",A4r(AO3)],ACu,0,By,[],0,0,0,0,
["bm",A4r(ASA)],ACM,0,By,[],0,0,0,0,["bm",A4r(AGN)],SW,0,C,[],0,3,0,0,0,Jl,0,C,[],0,3,0,0,0,AAr,0,C,[],0,3,0,0,0,X,"StringIndexOutOfBoundsException",21,Y,[],0,3,0,0,0]);
$rt_metadata([Yg,0,C,[],4,3,0,0,0,VB,0,DC,[],0,0,0,0,["ke",A4s(AOd),"iV",A4s(AJo),"jR",A4t(AMo)],B8,0,BG,[],9,3,0,ARw,0,E8,0,He,[],0,0,0,0,0,AGp,0,C,[],3,3,0,0,0,Pc,0,C,[Ca],3,3,0,0,0,ABx,0,C,[Pc,Ca],1,3,0,0,["L7",A4t(AXu),"MJ",A4s(AMA),"HV",A4t(ARo),"NX",A4u(ATD),"OZ",A4u(AWr)],O4,0,C,[EV],0,0,0,0,["d4",A4s(AUi)],Dx,0,BG,[],12,3,0,Fl,0,L8,0,C,[],0,3,0,0,0,KT,0,C,[Lv],0,3,0,0,0,Ov,0,C,[],3,3,0,0,0,H6,0,KT,[Ov],0,3,0,0,["s",A4r(AHE)],PC,0,Bs,[],0,0,0,0,["C",A4s(AJB)],PB,0,Bs,[],0,0,0,0,["C",A4s(AQg)],NB,0,Bs,
[],0,0,0,0,["C",A4s(ALB),"s",A4r(ASU)],QK,0,Bs,[],0,0,0,0,["C",A4s(AVW)],QI,0,Bs,[],0,0,0,0,["C",A4s(ANY)],QJ,0,Bs,[],0,0,0,0,["C",A4s(AUb)],QN,0,Bs,[],0,0,0,0,["C",A4s(ASc)],QO,0,Bs,[],0,0,0,0,["C",A4s(AGG)],QL,0,Bs,[],0,0,0,0,["C",A4s(AKf)],QM,0,Bs,[],0,0,0,0,["C",A4s(AL1)],QP,0,Bs,[],0,0,0,0,["C",A4s(AOJ)],QQ,0,Bs,[],0,0,0,0,["C",A4s(ARV)],NA,0,Bs,[],0,0,0,0,["C",A4s(AYh)],NO,0,Bs,[],0,0,0,0,["C",A4s(AKj)],Ny,0,Bs,[],0,0,0,0,["C",A4s(AIQ)],Nz,0,Bs,[],0,0,0,0,["C",A4s(ASJ)],NE,0,Bs,[],0,0,0,0,["C",A4s(AK3)],Nx,
0,Bs,[],0,0,0,0,["C",A4s(AWU)],NC,0,Bs,[],0,0,0,0,["C",A4s(ARc)],ND,0,Bs,[],0,0,0,0,["C",A4s(ANk)],Iy,0,C,[],0,0,0,0,0,D$,0,C,[Ft],0,3,0,CD,0,BK,"IllegalStateException",21,BJ,[],0,3,0,0,0,Jy,"IllegalMonitorStateException",21,BJ,[],0,3,0,0,0,AEI,0,C,[K_],0,0,0,0,0,AEL,0,C,[],0,3,0,0,0,ABU,0,C,[],4,3,0,0,0,Z7,0,C,[Ca],1,3,0,0,0,Gi,0,C,[],3,3,0,0,0,P6,0,C,[Gi],0,3,0,0,["eO",A4r(AW$)],S7,0,B8,[],12,0,0,0,0,S8,0,B8,[],12,0,0,0,0,S_,0,B8,[],12,0,0,0,0,Ta,0,B8,[],12,0,0,0,0,S9,0,B8,[],12,0,0,0,0,S$,0,B8,[],12,0,0,
0,0,S5,0,B8,[],12,0,0,0,0]);
$rt_metadata([S6,0,B8,[],12,0,0,0,0,S4,0,B8,[],12,0,0,0,0,AFv,0,C,[],4,3,0,0,0,Nd,0,C,[],3,3,0,0,0,OE,0,C,[Nd],0,3,0,0,0,VM,0,C,[Ca],4,3,0,0,0,Ou,0,C,[],3,3,0,0,0,Rx,0,C,[Ou],0,0,0,0,["jk",A4s(ATE),"Fq",A4s(APk)],OS,0,C,[Gi],0,3,0,0,0,M_,0,H5,[],0,0,0,0,["c9",A4u(AJT),"dh",A4v(AYd),"hf",A4r(AIF)],AAi,0,C,[Gs],0,0,0,0,0,GY,0,D$,[],0,0,0,0,["eO",A4r(AM2)],M5,0,C,[],32,0,0,AZ6,0,AFu,0,C,[Ca,FC],1,3,0,0,["Or",A4t(AT1),"Pf",A4t(AL_),"Ic",A4u(AG1),"M9",A4s(AG5),"J7",A4u(ASY)],HI,0,C,[Ca],3,3,0,0,0,M8,0,C,[HI],0,0,
0,0,["d4",A4s(Wm)],OU,0,C,[],0,3,0,0,0,GF,0,C,[Gs,C8],0,3,0,0,0,LH,0,C,[C8],0,3,0,0,0,Ji,0,C,[],4,3,0,0,0,M6,0,C,[Ft],0,0,0,0,["eO",A4r(AGX)],P8,0,C,[],3,3,0,0,0,IP,0,C,[P8],3,3,0,0,0,SG,0,C,[],3,3,0,0,0,Hb,0,C,[IP,SG],1,3,0,0,0,Ly,0,Hb,[],0,3,0,0,0,Ct,0,Ly,[],0,3,0,0,0,HV,0,Hb,[],1,3,0,0,0,IS,0,HV,[],0,3,0,0,["nu",A4u(AK9)],Iu,0,C,[HI],0,0,0,0,["d4",A4s(AMC)],Es,0,C,[C3],1,3,0,0,0,Lj,0,Es,[],0,3,0,Cr,["kw",A4r(Zd)],I0,"IllegalCharsetNameException",19,Bh,[],0,3,0,0,0,Oq,0,C,[],3,3,0,0,0,Id,0,C,[Oq],0,3,0,0,
["mU",A4t(AHk),"mr",A4r(AJ8),"i3",A4r(ASx),"mH",A4r(AST)],Nf,0,Id,[],0,3,0,0,["ly",A4r(AJ2),"t4",A4s(ASq)],Je,"NoSuchElementException",16,BJ,[],0,3,0,0,0,Bb,"GdxRuntimeException",8,BJ,[],0,3,0,0,0,U_,0,C,[],4,3,0,0,0,R4,0,Bs,[],0,0,0,0,["C",A4s(AOO)],Qk,0,Bs,[],0,0,0,0,["C",A4s(AQY)],OD,0,Bs,[],0,0,0,0,["C",A4s(AHu)],OC,0,Bs,[],0,0,0,0,["C",A4s(ASz)],PK,0,Bs,[],0,0,0,0,["C",A4s(AKV)],QW,0,Bs,[],0,0,0,0,["C",A4s(AXf)],Ns,0,Bs,[],0,0,0,0,["C",A4s(AMV)],Ru,0,Bs,[],0,0,0,0,["C",A4s(ANJ)],Qh,0,Bs,[],0,0,0,0,["C",
A4s(AX0)],Qj,0,Bs,[],0,0,0,0,["C",A4s(AI$)],Nq,0,Bs,[],0,0,0,0,["C",A4s(AO0)]]);
$rt_metadata([Q8,0,Bs,[],0,0,0,0,["C",A4s(AUn)],Q$,0,Bs,[],0,0,0,0,["C",A4s(AVJ)],Sl,0,Bs,[],0,0,0,0,["C",A4s(AW9)],RT,0,Bs,[],0,0,0,0,["C",A4s(APi)],M4,0,Bs,[],0,0,0,0,["C",A4s(AIZ)],I_,0,Bs,[],0,0,0,0,["C",A4s(AMX)],RK,0,I_,[],0,0,0,0,["C",A4s(AWz)],Fb,0,C,[Gi],0,3,0,0,["eO",A4r(AQO)],ABK,0,C,[],4,3,0,0,0,P2,0,C,[],32,0,0,A0V,0,MC,"ConcurrentModificationException",16,BJ,[],0,3,0,0,0,JD,0,HV,[],0,3,0,0,["nu",A4u(AJK)],Rb,0,EY,[C3],0,3,0,0,0,GP,0,C,[],0,0,0,0,0,JQ,0,C,[],4,3,0,0,0,Sz,0,C,[],0,3,0,0,0,Ec,0,C,
[],1,3,0,0,0,Mc,0,C,[],3,3,0,0,0,KK,0,Ec,[C3,H1,Ik,Mc],1,3,0,0,0,Fx,0,Ec,[C3],1,3,0,0,["nN",A4s(AM$),"mZ",A4s(AQt)],FO,0,C,[],0,3,0,DU,0,K8,0,C,[],3,3,0,0,0,PD,0,C,[],3,3,0,0,0,Nt,0,C,[Gi,K8,PD],0,0,0,0,["eO",A4r(AVH)],Ko,0,KK,[],1,0,0,0,0,IF,0,Ko,[],0,0,0,0,0,KD,0,C,[],1,3,0,0,0,Cg,0,C,[],0,3,0,0,0,Ps,0,C,[],0,3,0,0,0,Ey,0,C,[],3,3,0,0,0,Ch,0,Fx,[Ey],0,0,0,0,["nd",A4r(APK)],GI,0,C,[],4,3,0,B6,0,E5,0,KD,[],1,3,0,0,0,NW,0,E5,[],0,3,0,0,["kN",function(b,c,d,e,f,g,h){return ALt(this,b,c,d,e,f,g,h);}],EN,"IOException",
20,CI,[],0,3,0,0,0,Jt,0,C,[],4,3,0,0,0,Ml,0,Id,[],1,3,0,0,["t4",A4s(AXi)],JI,0,Ml,[],0,3,0,0,["ly",A4r(AUd),"mU",A4t(AMj),"i3",A4r(AHJ),"mH",A4r(AOP),"mr",A4r(ANA)],O0,0,C,[Ft],0,3,0,0,0,Yo,0,C,[],0,3,0,0,0,Vv,0,C,[],4,3,0,0,0,Pp,0,C,[HI],0,0,0,0,["d4",A4s(ACf)],XX,0,C,[Gi,K8],3,0,0,0,0,MJ,0,C,[],1,3,0,0,0,T0,0,MJ,[],0,3,0,0,0,BR,0,C,[],1,3,0,0,["d5",A4s(AKx),"dT",A4r(AXO),"s",A4r(AKR)],De,0,BR,[],0,3,0,0,0,Eo,0,BR,[],0,3,0,0,0,DM,0,BR,[],0,3,0,0,0,Eg,0,DM,[],0,3,0,0,0]);
$rt_metadata([EC,0,BR,[],0,3,0,0,0,Ef,0,BR,[],0,3,0,0,0,D6,0,BR,[],0,3,0,0,0,KG,0,C,[],3,3,0,0,0,HU,0,C,[KG],0,3,0,AYS,0,MA,0,BR,[],0,3,0,0,0,Pm,0,C,[KG],0,3,0,A27,0,Tf,0,C,[CV],0,3,0,0,0,OO,0,C,[],3,3,0,0,0,TM,0,C,[OO,CV],0,3,0,0,0,Iw,0,C,[],0,3,0,0,0,OK,0,C,[Ca],3,3,0,0,0,Qx,0,C,[OK],0,0,0,0,["za",A4r(AKp)],I$,0,C,[Lo],0,3,0,0,0,D5,0,BR,[],0,3,0,0,0,R$,0,BR,[],0,3,0,0,0,N5,0,CG,[],0,0,0,0,["kc",A4r(ALW)],N6,0,C,[Ld],0,0,0,0,0,N_,0,C,[C8],0,3,0,0,0,O3,0,CG,[],0,0,0,0,["kc",A4r(AOx)],AAx,0,C,[],0,0,0,0,0,Mr,
0,BP,[],0,3,0,0,0,VY,"BitmapFont$BitmapFontData",14,C,[],0,3,0,0,0,GO,0,C,[CV],0,3,0,Lh,0,Sb,0,CG,[],0,0,0,0,["kc",A4r(AMO)],NM,0,C,[Jn],3,3,0,0,0,LS,0,H8,[NM],1,3,0,0,0,SX,0,LS,[Fa,B2],0,3,0,0,0,ML,"BitmapFont$Glyph",14,C,[],0,3,0,0,["s",A4r(AKm)],AEC,0,C,[C8],0,3,0,0,0,AEz,0,C,[],4,3,0,0,0,ACo,0,C,[],0,3,0,0,0,HP,0,Ec,[C3],1,3,0,0,0,En,0,Ec,[C3],1,3,0,0,["nN",A4s(ANc),"mZ",A4s(AO_)],OW,0,C,[],3,3,0,0,0,Kn,0,C,[OW],0,3,0,0,0,Hj,0,C,[CV],0,3,0,R2,0,Lx,0,C,[],0,3,0,0,0,ADC,0,C,[Ca],1,3,0,0,0,FU,0,BG,[],12,3,
0,Hy,0,FH,0,BG,[],12,3,0,XK,0,Hx,0,Lx,[],0,3,0,0,["s",A4r(AX$)],AC9,0,C,[CV],0,3,0,0,0,H3,0,HP,[],1,0,0,0,0,GH,0,H3,[],0,0,0,0,["kE",A4s(AU1),"ln",A4t(AT8),"dO",A4r(AGP)],HW,0,En,[],1,0,0,0,0,Ig,0,HW,[],0,0,0,0,["qV",A4s(ANl),"kX",A4t(AMJ),"dO",A4r(AVb)],Xq,0,C,[Ca],1,3,0,0,0,CX,0,BG,[],12,3,0,NN,0,Fd,0,BG,[],12,3,0,Qe,0]);
$rt_metadata([VA,0,C,[Km],1,3,0,0,["Cl",A4s(AX3),"OX",A4r(AIn)],DH,0,BR,[],0,3,0,0,0,DG,0,DH,[],0,3,0,0,0,D9,0,DG,[],0,3,0,0,0,Hf,0,BR,[],0,3,0,0,0,Dm,0,Hf,[],0,3,0,0,0,DV,0,Dm,[],0,3,0,0,0,D8,0,DV,[],0,3,0,0,0,Ic,0,H3,[Ey],1,0,0,0,["dO",A4r(ALx)],Nr,0,Ic,[],0,0,0,0,["kE",A4s(AJY),"ln",A4t(AGO)],R7,0,Ic,[],0,0,0,0,["kE",A4s(AOh),"ln",A4t(AHF)],G$,0,HW,[Ey],1,0,0,0,["dO",A4r(AVg),"nd",A4r(ANu)],Nl,0,G$,[],0,0,0,0,["qV",A4s(ALC),"kX",A4t(AVK)],Ol,0,G$,[],0,0,0,0,["qV",A4s(AP2),"kX",A4t(ATS)],Gl,"UnsupportedOperationException",
21,BJ,[],0,3,0,0,0,DD,"ReadOnlyBufferException",18,Gl,[],0,3,0,0,0,CF,0,C,[],1,3,0,0,0,Kb,0,CF,[],0,3,0,0,0,Q3,0,C,[CV],3,3,0,0,0,K7,0,C,[Q3],0,3,0,Ys,0,Ff,0,BR,[],0,3,0,0,0,FQ,0,BR,[],0,3,0,0,0,EW,0,BR,[],0,3,0,0,0,Fs,0,EW,[],0,3,0,0,0,V6,0,F$,[],0,3,0,0,["lU",A4s(AQf),"lQ",A4s(AUz),"oU",A4u(AON)],DE,0,BG,[],12,3,0,JJ,0,D2,0,BG,[],12,3,0,L2,0,IN,0,C,[CV],0,3,0,0,0,G5,0,C,[IP,Mc],1,3,0,0,0,Xc,0,G5,[],0,3,0,0,0,Uy,0,G5,[],0,3,0,0,0,ZL,0,C,[L1],0,3,0,0,0,Ok,0,C,[],4,3,0,0,0,ST,0,C,[],0,3,0,A2R,0,C1,0,BG,[],12,
3,0,HT,0,AFi,0,C,[],0,3,0,0,0,NQ,0,CF,[],4,3,0,0,0,Jj,0,C,[],3,3,0,0,0,DN,0,C,[Jj],0,3,0,A3c,0,Tw,0,I$,[],0,3,0,0,["kO",A4v(AGJ),"oU",A4u(ATC),"mb",A4v(ALb),"o_",A4s(AOv),"lU",A4s(AO5),"lQ",A4s(AWk),"pl",A4t(AI2),"np",A4t(AWg)],EL,0,BR,[],0,3,0,0,0,Fy,0,EL,[],0,3,0,0,0,Fp,0,BR,[],0,3,0,0,0,Fz,0,Dm,[],0,3,0,0,0,MN,0,Hf,[],0,3,0,0,0,Ia,0,MN,[],0,3,0,0,0,ABA,0,C,[C8],0,3,0,0,0,Nw,0,C,[C8,C3],4,3,0,0,0,Lq,0,C,[],4,3,0,0,0,F9,0,BG,[],12,0,0,ACC,0]);
$rt_metadata([Cp,0,BG,[],12,3,0,HJ,0,S3,0,CF,[],0,3,0,0,0,Dl,0,CF,[],0,3,0,0,0,RX,0,F$,[],0,3,0,0,0,P_,0,C,[],32,0,0,A2_,0,JL,0,C,[CV],3,3,0,0,0,L_,0,C,[JL],0,3,0,0,["iy",A4u(AU3),"mR",A4t(ASr),"mD",A4t(AQQ)],J$,0,C,[CV],3,3,0,0,0,IJ,0,C,[J$],0,3,0,0,["j6",A4r(AKA),"nv",A4r(AQp),"qm",A4u(AMv),"ox",A4s(AHy),"m6",A4r(AXp),"qv",A4r(AV1)],AAT,0,C,[JL],0,3,0,0,["iy",A4u(AHT),"mR",A4t(AMp),"mD",A4t(AJI)],AC7,0,C,[J$],0,3,0,0,["j6",A4r(ANs),"nv",A4r(AP3),"qm",A4u(ATs),"ox",A4s(AWP),"m6",A4r(ALe),"qv",A4r(AH9)],N$,
0,C,[JL],0,3,0,AZa,["iy",A4u(AQ6),"mR",A4t(AOi),"mD",A4t(AJg)],QD,0,L_,[],0,3,0,0,0,NX,0,IJ,[],0,3,0,0,0,FN,0,BG,[],12,3,0,AG_,0,Sv,0,C,[],0,3,0,0,0,Sg,0,C,[],32,0,0,AZh,0,Tz,0,CF,[],0,3,0,0,0,KL,0,CF,[],0,3,0,0,0,LX,"IDLByteArray",25,CF,[],0,3,[0,0,0],0,0,HH,0,C,[],0,3,0,AVa,0,MF,0,C,[],1,3,0,0,0,MK,0,Ia,[],0,3,0,0,0,Px,"PxRigidDynamic",22,MK,[],0,3,[0,0,0],0,0,HS,0,Ec,[C3],1,3,0,0,0,R6,0,C,[],0,3,0,0,["d5",A4s(AEj),"dT",A4r(ARy)],Hz,0,HS,[],1,0,0,0,0,ME,0,Hz,[],0,0,0,0,["qU",A4s(AJ1),"nG",A4t(ATx),"dO",A4r(ARZ)],Mk,
"CoderMalfunctionError",19,F4,[],0,3,0,0,0,F3,"BufferOverflowException",18,BJ,[],0,3,0,0,0,Gq,0,C,[],1,3,0,0,0,Ie,"BufferUnderflowException",18,BJ,[],0,3,0,0,0,Fo,0,Ia,[],0,3,0,0,0,Rm,0,C,[Ca],3,3,0,0,0,Te,0,C,[Rm],0,0,0,0,["d4",A4s(ASG)],Og,0,DY,[],0,3,0,0,0,Kw,0,MF,[],1,3,0,0,0,OX,0,Kw,[],0,3,0,0,0,Vk,0,C,[],0,3,0,0,0,HN,0,Hz,[Ey],1,0,0,0,["dO",A4r(ATc),"nd",A4r(AV0)],Qs,0,HN,[],0,0,0,0,["qU",A4s(ARU),"nG",A4t(ARu)],Rg,0,HN,[],0,0,0,0,["qU",A4s(AUW),"nG",A4t(ARW)],Nk,0,Gq,[],4,3,0,0,0,K9,0,CF,[],0,3,0,0,0,G9,
0,K9,[],0,3,0,AQF,0,G1,0,KL,[],0,3,0,ASH,0,Su,0,C,[Ft],0,3,0,0,0,AFB,0,C,[],0,3,0,0,0,I2,0,Gq,[],4,0,0,AZT,0,Mn,0,C,[],3,3,0,0,0]);
$rt_metadata([Rv,0,C,[Mn],0,0,0,0,["mv",A4s(ARQ),"vj",A4s(AVo)],Sc,0,C,[Mn],0,0,0,0,["mv",A4s(AVz),"vj",A4s(AOn)],Fi,0,BR,[],0,3,0,0,0,Qq,0,C,[Ca],3,3,0,0,0,Tl,0,C,[Qq],0,0,0,0,["za",A4r(AQ4)],WX,0,C,[Ca],1,3,0,0,0,Qz,0,C,[],0,3,0,0,0,Hq,0,C,[IP],1,3,0,0,["tg",A4u(AW2),"m5",A4r(AS_)],Mu,0,Hq,[],0,3,0,0,["vN",A4r(ARG),"tg",A4u(AXN),"m5",A4r(AKz)],Rk,0,EN,[],0,3,0,0,0,RU,0,C,[],0,3,0,0,0,Dh,0,CF,[],0,3,0,AGU,0,Mv,0,C,[],0,3,0,0,0,P3,0,Hq,[],0,0,0,0,["vN",A4r(AUe)],Od,0,DC,[],0,0,0,0,0,HF,0,C,[],0,3,0,0,0,PM,0,
C,[],0,0,0,A2D,0,RF,"UnsupportedCharsetException",19,Bh,[],0,3,0,0,0,Gb,0,C,[],4,3,0,A1Z,0,OA,0,Es,[],0,3,0,0,["kw",A4r(APY)],N4,0,Es,[],0,3,0,0,["kw",A4r(AWq)],IK,0,Es,[],0,3,0,0,["kw",A4r(AHc)],Z,0,C,[Jj],0,3,0,Bg,0,FD,0,C,[Jj],0,3,0,Zc,0,Ob,0,DC,[],0,0,0,0,["ke",A4s(AHK),"iV",A4s(AP5),"jR",A4t(WY)],K4,0,C,[Gs],0,3,0,0,0,KS,0,C,[C8,Gs],1,0,0,0,0,Jc,0,KS,[],0,3,0,0,0,SM,0,C,[],0,3,0,0,0,FV,0,EN,[],0,3,0,0,0,MI,"AssertionError",21,F4,[],0,3,0,0,0,M$,0,C,[],32,0,0,A3I,0,ADG,0,C,[],0,0,0,0,["s",A4r(ALJ)],KA,0,
C,[],0,3,0,0,0,SC,0,E5,[],0,3,0,0,["kN",function(b,c,d,e,f,g,h){return AKk(this,b,c,d,e,f,g,h);}],Tc,0,E5,[],0,3,0,0,["kN",function(b,c,d,e,f,g,h){return ANP(this,b,c,d,e,f,g,h);}],Q4,0,E5,[],0,3,0,0,["kN",function(b,c,d,e,f,g,h){return AVZ(this,b,c,d,e,f,g,h);}],GZ,0,D$,[],0,0,0,0,["eO",A4r(ARt)],TY,0,DC,[],0,0,0,0,["ke",A4s(AIi),"iV",A4s(AUt),"jR",A4t(AQP)],KQ,"InstantiationException",21,E3,[],0,3,0,0,0,Ln,"IllegalAccessException",21,E3,[],0,3,0,0,0,Qv,0,E3,[],0,3,0,0,0,JC,0,C,[H1,Ik],0,3,0,0,0,Kq,"BufferUnderflowException",
19,BJ,[],0,3,0,0,0,Lc,"BufferOverflowException",19,BJ,[],0,3,0,0,0,K1,"MalformedInputException",19,FV,[],0,3,0,0,["iW",A4r(AJF)],Kp,"UnmappableCharacterException",19,FV,[],0,3,0,0,["iW",A4r(AJa)],S2,0,C,[],0,0,0,0,0,M9,0,DC,[],0,0,0,0,["ke",A4s(AJ3),"iV",A4s(AQk),"jR",A4t(AKi)],QA,0,C,[HI],0,0,0,0,["d4",A4s(AGd)]]);
$rt_metadata([ABV,0,C,[],4,3,0,0,0,Gn,0,C,[B2,C3],0,3,0,0,0,Tb,0,C,[],4,3,0,AJL,0,MD,"ArrayIndexOutOfBoundsException",21,Y,[],0,3,0,0,0,Ra,0,C,[EV],0,0,0,0,["d4",A4s(AJC)]]);
function $rt_array(cls,data){this.cS=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ","none","all","table","cell",
"actor","Array is empty.","object cannot be null.","objects cannot be null.","index can\'t be >= size: "," >= ","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","","If no regions are specified, the font data must have an images path.","0","This TextureData implementation does not upload data itself","Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","start + count must be <= size: "," + "," <= ","end can\'t be >= size: ","start can\'t be > end: "," > ","additionalCapacity must be >= 0: ",
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
"The last byte in dst ","The last byte in src ","IGNORE","REPLACE","REPORT","Capacity is negative: ","Index ","BIG_ENDIAN","LITTLE_ENDIAN","processor cannot be null","com/badlogic/gdx/utils/lsans-15.fnt","com/badlogic/gdx/utils/lsans-15.png","PhysX loaded, version: ","FPS: ","PhysX Version: ","Boxes: "," = ","Total Physics Time: ","ms","Render Time: ","graphics/zebra.png","Asset loaded: ","false","true","a_position","a_color","a_texCoord0","u_projectionViewMatrix","u_texture","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projectionViewMatrix;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projectionViewMatrix * a_position;\n}\n",
"#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","couldn\'t compile shader: ",".js","Loading JS script: ","imgui.wasm","Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",
".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","The last float in src ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None",
"SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\"," does not exist","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Disposing "," while it still has "," references.","Can\'t have more than 8191 sprites per batch: ","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","Classpath","Internal","External","Absolute","Local","VertexArray","VertexBufferObject",
"VertexBufferObjectSubData","VertexBufferObjectWithVAO","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","newAction must be non-null","The specified font must contain at least one texture page.","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","uniform mat4 ProjMtx;\nattribute vec2 Position;\nattribute vec2 UV;\nattribute vec4 Color;\nvarying vec2 Frag_UV;\nvarying vec4 Frag_Color;\nvoid main()\n{\n    Frag_UV = UV;\n    Frag_Color = Color;\n    gl_Position = ProjMtx * vec4(Position.xy,0,1);\n}\n",
"#ifdef GL_ES\n    precision mediump float;\n#endif\nuniform sampler2D Texture;\nvarying vec2 Frag_UV;\nvarying vec4 Frag_Color;\nvoid main()\n{\n    gl_FragColor = Frag_Color * texture2D(Texture, Frag_UV.st);\n}\n","Position","UV","Color","ShaderTest","Texture","ProjMtx","attributes must be >= 1","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop",
"SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","The last short in src ","file-f:","file-d:","US-ASCII",
"ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","-2147483648","Malformed input of length ","Unmappable characters of length ","Comparison method violates its general contract!","fromIndex(",") > toIndex(","data:",";base64,","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","error"]);
N.prototype.toString=function(){return $rt_ustr(this);};
N.prototype.valueOf=N.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AIb(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var C4=Long_add;var RC=Long_sub;var Bf=Long_mul;var KY=Long_div;var Z1=Long_rem;var AJz=Long_or;var CN=Long_and;var I3=Long_xor;var GK=Long_shl;var A2r=Long_shr;var Bi=Long_shru;var Bfg=Long_compare;var BU=Long_eq;var AJA=Long_ne;var AJn=Long_lt;var AJp=Long_le;var AY0=Long_gt;var AY2=Long_ge;var Bfh=Long_not;var AUu=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}$rt_exports.main=$rt_mainStarter(A1p);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=KO.prototype;c.onAnimationFrame=c.JE;c=ADB.prototype;c.handleEvent=c.d4;c=TV.prototype;c.handleEvent=c.d4;c=TW.prototype;c.handleEvent=c.d4;c=Sx.prototype;c.fullscreenChanged=c.KK;c=RY.prototype;c.denied=c.PC;c.prompt=c.IX;c.granted=c.L6;c=Uh.prototype;c.removeEventListener=c.JD;c.dispatchEvent=c.IH;c.get=c.Cl;c.addEventListener=c.Mz;Object.defineProperty(c,"length",{get:c.Nd});c=Oe.prototype;c.handleEvent=c.d4;c=Of.prototype;c.handleEvent=c.d4;c=Oc.prototype;c.handleEvent=c.d4;c=Qt.prototype;c.unlockFunction
=c.Ms;c=NK.prototype;c.accept=c.Cy;c=NL.prototype;c.accept=c.Cy;c=ABx.prototype;c.removeEventListener=c.OZ;c.dispatchEvent=c.MJ;c.addEventListener=c.NX;c=O4.prototype;c.handleEvent=c.d4;c=AFu.prototype;c.removeEventListener=c.Ic;c.dispatchEvent=c.M9;c.addEventListener=c.J7;c=M8.prototype;c.handleEvent=c.d4;c=Iu.prototype;c.handleEvent=c.d4;c=Pp.prototype;c.handleEvent=c.d4;c=Qx.prototype;c.onInit=c.za;c=VA.prototype;c.get=c.Cl;Object.defineProperty(c,"length",{get:c.OX});c=Te.prototype;c.handleEvent=c.d4;c=
Tl.prototype;c.onInit=c.za;c=QA.prototype;c.handleEvent=c.d4;c=Ra.prototype;c.handleEvent=c.d4;})();
}));
