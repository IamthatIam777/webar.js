!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.WebAR=t()}(this,function(){"use strict";var e="ARSessionDidInit";var t="FRONT",n="BACK",i="LOW",r="COVER",a="STRETCH",o="LOW",s="MEDIUM",u="HIGH";var c=/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(navigator.userAgent),h=!c;function l(e){return e&&h?-90:90}var f=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),v=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},g=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},y=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=function(){function e(t){f(this,e),this.elements=[1,0,0,0,1,0,0,0,1],this.isMatrix3=!0,t>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}return m(e,[{key:"set",value:function(e,t,n,i,r,a,o,s,u){var c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=r,c[5]=s,c[6]=n,c[7]=a,c[8]=u,this}},{key:"identity",value:function(){return this.set(1,0,0,0,1,0,0,0,1),this}},{key:"clone",value:function(){return(new this.constructor).fromArray(this.elements)}},{key:"copy",value:function(e){var t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}},{key:"setFromMatrix4",value:function(e){var t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}},{key:"multiply",value:function(e){return this.multiplyMatrices(this,e)}},{key:"premultiply",value:function(e){return this.multiplyMatrices(e,this)}},{key:"multiplyMatrices",value:function(e,t){var n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],s=n[6],u=n[1],c=n[4],h=n[7],l=n[2],f=n[5],m=n[8],v=i[0],d=i[3],g=i[6],y=i[1],p=i[4],A=i[7],R=i[2],T=i[5],w=i[8];return r[0]=a*v+o*y+s*R,r[3]=a*d+o*p+s*T,r[6]=a*g+o*A+s*w,r[1]=u*v+c*y+h*R,r[4]=u*d+c*p+h*T,r[7]=u*g+c*A+h*w,r[2]=l*v+f*y+m*R,r[5]=l*d+f*p+m*T,r[8]=l*g+f*A+m*w,this}},{key:"multiplyScalar",value:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}},{key:"determinant",value:function(){var e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],s=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-n*r*c+n*o*s+i*r*u-i*a*s}},{key:"getInverse",value:function(e,t){e&&e.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var n=e.elements,i=this.elements,r=n[0],a=n[1],o=n[2],s=n[3],u=n[4],c=n[5],h=n[6],l=n[7],f=n[8],m=f*u-c*l,v=c*h-f*s,d=l*s-u*h,g=r*m+a*v+o*d;if(0===g){var y="THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";if(!0===t)throw new Error(y);return console.warn(y),this.identity()}var p=1/g;return i[0]=m*p,i[1]=(o*l-f*a)*p,i[2]=(c*a-o*u)*p,i[3]=v*p,i[4]=(f*r-o*h)*p,i[5]=(o*s-c*r)*p,i[6]=d*p,i[7]=(a*h-l*r)*p,i[8]=(u*r-a*s)*p,this}},{key:"transpose",value:function(){var e=void 0,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}},{key:"getNormalMatrix",value:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()}},{key:"transposeIntoArray",value:function(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}},{key:"setUvTransform",value:function(e,t,n,i,r,a,o){var s=Math.cos(r),u=Math.sin(r);this.set(n*s,n*u,-n*(s*a+u*o)+a+e,-i*u,i*s,-i*(-u*a+s*o)+o+t,0,0,1)}},{key:"scale",value:function(e,t){var n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}},{key:"rotate",value:function(e){var t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],s=i[1],u=i[4],c=i[7];return i[0]=t*r+n*s,i[3]=t*a+n*u,i[6]=t*o+n*c,i[1]=-n*r+t*s,i[4]=-n*a+t*u,i[7]=-n*o+t*c,this}},{key:"translate",value:function(e,t){var n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}},{key:"equals",value:function(e){for(var t=this.elements,n=e.elements,i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}},{key:"fromArray",value:function(e,t){void 0===t&&(t=0);for(var n=0;n<9;n++)this.elements[n]=e[n+t];return this}},{key:"toArray",value:function(e,t){void 0===e&&(e=[]),void 0===t&&(t=0);var n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}}]),e}(),A=0,R=1,T=2,w=3,S=4,E=5;function x(e){return e instanceof ArrayBuffer?new Uint8Array(e):e}var k=function(){function e(t,n,i){var r=i.cameraPosition,a=i.cameraSize,o=i.orientation,s=i.stPosition,u=i.stMatrix;f(this,e),this.gl=t,this.canvas=t.canvas,this.orientation=c?o:-o,this.stPosition=s,this.stMatrix=u,this.cameraPosition=r,this.cameraSize=a,this.stPosition=s,this.vertexShader=P(t,t.VERTEX_SHADER,n.vshader),this.fragmentShader=P(t,t.FRAGMENT_SHADER,n.fshader),this.program=function(e,t,n){var i=e.createProgram();if(e.attachShader(i,t),e.attachShader(i,n),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS))return i;var r=e.getProgramInfoLog(i);throw e.deleteProgram(i),new Error(r)}(t,this.vertexShader,this.fragmentShader),this.samplers=[],this.plugins=[],this.imageStruct={isGettingImage:!1,cb:null},this.UVArea={width:0,height:0},t.useProgram(this.program)}return m(e,[{key:"setupSamplers",value:function(e){var t=this,n=function(e){switch(e){case A:case R:break;case T:return["uYTex","uUTex","uVTex"].map(function(e){return{name:e,format:"LUMINANCE"}});case w:return["uYTex","uUTex","uVTex"].map(function(e){return{name:e,format:"LUMINANCE"}});case S:case E:return[{name:"uYTex",format:"LUMINANCE"},{name:"uCTex",format:"LUMINANCE_ALPHA"}]}}(e);this.samplers=n.map(function(e,n){return i=t.gl,r=t.program,a=e.name,o=e.format,s=n,t.cameraPosition,t.texture,u=i.createTexture(),c=i.getUniformLocation(r,a),i.activeTexture(i.TEXTURE0+s),i.bindTexture(i.TEXTURE_2D,u),function(e){i.activeTexture(i.TEXTURE0+s),i.bindTexture(i.TEXTURE_2D,u),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.texImage2D(i.TEXTURE_2D,0,i[o],e.width,e.height,0,i[o],i.UNSIGNED_BYTE,e.data),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.uniform1i(c,s)};var i,r,a,o,s,u,c})}},{key:"setupUniforms",value:function(){var e=this;[{name:"uFilterRegionTransform",value:(new p).elements},{name:"uTexCoordTransform",value:function(e){if(e===t)return c?(new p).translate(-.5,-.5).rotate(-Math.PI/2).translate(.5,.5).elements:(new p).translate(-.5,-.5).rotate(Math.PI/2).translate(.5,.5).elements;return(new p).translate(-.5,-.5).rotate(-Math.PI/2).scale(1,-1).translate(.5,.5).elements}(this.cameraPosition)}].forEach(function(t){var n,i,r,a;(n=e.gl,i=e.program,r=t.name,a=n.getUniformLocation(i,r),function(e){n.uniformMatrix3fv(a,!1,e)})(t.value)})}},{key:"setupAttributes",value:function(e,t){var n=this,i=[{name:"aQuad",value:new Float32Array(function(e,t,n){var i=t.width,r=t.height;e||(e={x:0,y:0,width:i,height:r});n.width=e.width/i,n.height=e.height/r;var a=[e.x/i*2-1,(r-e.y)/r*2-1],o=[(e.x+e.width)/i*2-1,a[1]],s=[a[0],(r-e.y-e.height)/r*2-1];return new Float32Array([].concat(a,o,s,[o[0],s[1]]))}(this.stPosition,this.canvas,this.UVArea))},{name:"a_TexCoord",value:_(this.cameraSize,t,e,this.UVArea.width*this.canvas.width,this.UVArea.height*this.canvas.height)}];_(t,e,this.UVArea.width*this.canvas.width,this.UVArea.height*this.canvas.height,this.canvas),i.forEach(function(e){var t,i,r,a,o,s=e.value.BYTES_PER_ELEMENT;(t=n.gl,i=n.program,r=e.name,a=t.createBuffer(),o=t.getAttribLocation(i,r),t.enableVertexAttribArray(o),function(e,n){t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW),t.vertexAttribPointer(o,2,t.FLOAT,!1,n,0)})(e.value,2*s)})}},{key:"resize",value:function(){var e=this.gl,t=e.getParameter(e.VIEWPORT);e.viewport(t[0],t[1],t[2],t[3])}},{key:"update",value:function(e){var t=this;if(e){if(0===this.samplers.length)return this.setupSamplers(e.format),this.setupUniforms(),this.setupAttributes(e.width,e.height),void this.resize();var n=this.gl,i=[];i=function(e){switch(e.format){case A:case R:break;case T:return["uYTex","uUTex","uVTex"].map(function(e){return{name:e,format:"LUMINANCE"}});case w:return[{data:x(e.dataArray[0]),width:e.width,height:e.height},{data:x(e.dataArray[1]),width:e.width/2,height:e.height/2},{data:x(e.dataArray[2]),width:e.width/2,height:e.height/2}];case S:case E:return[{data:e.dataArray[0],width:e.width,height:e.height},{data:e.dataArray[1],width:e.width/2,height:e.height/2}]}}(e),this.samplers.forEach(function(e,t){return e(i[t])}),n.drawArrays(n.TRIANGLE_STRIP,0,4),this.imageStruct.isGettingImage&&(this.imageStruct.isGettingImage=!1,this.imageStruct.cb(n.canvas.toDataURL("image/jpeg"))),this.plugins.forEach(function(e){return e(t)})}}},{key:"applyPlugin",value:function(e){"function"==typeof e&&this.plugins.push(e)}},{key:"getImage",value:function(e){this.imageStruct.isGettingImage=!0,this.imageStruct.cb=e}}]),e}();function _(e,t,n,i,r){if(e===a)return new Float32Array([0,1,1,1,0,0,1,0]);var o=0,s=0,u=void 0,c=void 0,h=void 0,l=void 0;return t/n>=i/r?(s=1,c=[(((o=t/n*r/i)-1)/2+1)/o,1],h=[(u=[(o-1)/2/o,1])[0],0],l=[c[0],0]):(o=1,c=[1,(u=[0,(((s=n/t*i/r)-1)/2+1)/s])[1]],l=[1,(h=[0,(s-1)/2/s])[1]]),new Float32Array([].concat(y(u),y(c),y(h),y(l)))}function P(e,t,n){var i=e.createShader(t);if(e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS))return i;var r=e.getShaderInfoLog(i);throw e.deleteShader(i),new Error(r)}var b,I="vTexCoord",M=(v(b={},"I420","\n    precision mediump float;\n\n    varying vec2 "+I+";\n\n    uniform sampler2D uYTex;\n    uniform sampler2D uUTex;\n    uniform sampler2D uVTex;\n\n    const mat3 mYUV2RGB = mat3(1.,1.,1.,0.,-0.39173,2.017,1.5985,-0.8129,0.);\n\n    void main(){\n      float y = 1.1643*(texture2D(uYTex,"+I+").r - 0.0625);\n      float u = texture2D(uUTex,"+I+").r - 0.5;\n      float v = texture2D(uVTex,"+I+").r - 0.5;\n      \n      gl_FragColor = vec4(mYUV2RGB * vec3(y,u,v),1.0);\n    }"),v(b,"420v","\n    precision mediump float;\n\n    uniform sampler2D uYTex;\n\n    uniform sampler2D uCTex;\n\n    varying vec2 "+I+";\n\n    const mat3 transformYCrCbITURec601FullRangeToRGB = mat3(1.,1.,1.,0., -.18732, 1.8556,1.57481, -.46813,0.);\n\n    void main(){\n      vec3 colourYCrCb;\n      colourYCrCb.x  = texture2D(uYTex, "+I+").r;\n      colourYCrCb.yz = texture2D(uCTex, "+I+").ra - 0.5;\n      gl_FragColor = vec4(transformYCrCbITURec601FullRangeToRGB * colourYCrCb, 1.0);\n    }"),b),D={fshader:h?M.I420:M["420v"],vshader:"\n  precision mediump float;\n\n  attribute vec2 aQuad;\n  attribute vec2 a_TexCoord;\n  varying vec2 vTexCoord;\n  uniform bool uFlipXCoord;\n  uniform mat3 uFilterRegionTransform;\n  uniform mat3 uTexCoordTransform;\n\n  void main(){\n    vec3 point = vec3(aQuad,1.0);\n    vec3 texCoord = point;\n    vec3 tex = vec3(a_TexCoord, 1.0);\n    vec3 tmp = uTexCoordTransform * tex;\n    vTexCoord = tmp.xy;\n    vec3 pos = uFilterRegionTransform * point;\n    gl_Position = vec4(pos.xy,0.0,1.0);\n  }"},C=function(){function e(t,n){f(this,e);var i=n.ARSession,r=n.cameraPosition,a=n.cameraSize,o=n.orientation,s=n.stPosition,u=n.stMatrix;this.gl=t,this.ARSession=i,this.cameraSize=a,t&&(this.renderer=new k(t,D,{cameraPosition:r,cameraSize:a,orientation:l(o),stPosition:s,stMatrix:u}))}return m(e,[{key:"draw",value:function(){this.render()}},{key:"render",value:function(){this.isDirty&&this.isRunning&&this.renderer.update(this.getFrames())}},{key:"dispose",value:function(){}},{key:"getFrames",value:function(){return this.ARSession.getCurrentFrame()}},{key:"applyPlugin",value:function(e){this.renderer.applyPlugin(e)}},{key:"getImage",value:function(e){this.renderer.getImage(e)}},{key:"isRunning",get:function(){return this.ARSession.isRunning}},{key:"isDirty",get:function(){return this.ARSession.isDirty}}]),e}();function U(e){if(!e)return"";var i="";switch(e.split(",")[1].trim()){case"facing back":i=n;break;case"facing front":i=t}return i}var O="FaceDetector",F="MarkerDetector",L="ClassifyDetector",N=function(){function e(t,n){f(this,e),this.ARSession=window.ARSession||window.ucweb.ARSession,this.name=t,this._option=n||{}}return m(e,[{key:"removeMarkers",value:function(){this._ucDetector.removeMarkers()}},{key:"start",value:function(){var e=this;return new Promise(function(t,n){e.ARSession.addEventListener("DetectorInitResult",function(i){e.detectorInitResultFn&&e.detectorInitResultFn(i),c&&t(i),0===i||101===i?t(i):n(i)}),e._ucDetector=e.ARSession.setDetector(e.name),e.setMarkers&&e.setMarkers(e._option),e.setOptions&&e.setOptions(e._option)}).then(function(e){return e},function(e){return Promise.reject(e)})}},{key:"pause",value:function(){this._ucDetector.pause()}},{key:"resume",value:function(){this._ucDetector.resume()}},{key:"onDetectorInitResult",value:function(e){this.detectorInitResultFn=e}},{key:"dispose",value:function(){}},{key:"onResult",value:function(e){var t=this,n=e;this.ARSession.addEventListener("DetectorResult",function(e){if(e){var i=JSON.parse(e);n&&n(t._resultFilter?t._resultFilter(i):i)}})}}]),e}(),Y=["rect","confidence","alignment","pose","direction"],j=["rect","headPose","alignment3d","alignment","alignment_more","alignment_em","alignment_ex","eyepos"];function G(e,t){var n=Object.assign({},e);return n.x=t.width-e.x,e.width&&(n.x-=e.width),n}var H=function(e){function t(e){f(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,O,e));return n.resolution=e.resolution,n.ARSession=e.ARSession,n.defaultOption={mode:0,singleFace:!1,turbo:!1},n}return d(t,N),m(t,[{key:"_resultFilter",value:function(e){var t=this;return e.alignment&&e.alignment.length>0&&(e.alignment=e.alignment.map(function(e){return e.map(function(e){return G(e,t.resolution)})})),e.rect&&e.rect.length>0&&(e.rect=e.rect.map(function(e){return G(e,t.resolution)})),e}},{key:"setOptions",value:function(e){var t,n,i,r,a,o,s,u=[(t=this.defaultOption,n=e,i=n.speed,r=n.singleFace,a=n.turbo,o=0,s=void 0,(s=c?Y:j).forEach(function(e,t){s.indexOf(e)>=0&&n[e]&&(o+=Math.pow(2,t))}),JSON.stringify(Object.assign(t,{speed:i,singleFace:r,turbo:a,mode:o})))];this._ucDetector.setMarkers(u),this._ucDetector.resume()}}]),t}(),V=function(e){function t(e){return f(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,F,e))}return d(t,N),m(t,[{key:"setMarkers",value:function(e){c?(this._onDetected=this._option.onDetected,this._ucDetector.setMarkers([e.option.url]),this._ucDetector.resume()):this._ucDetector.setMarkers(e.markers)}},{key:"setOptions",value:function(e){c||this._ucDetector.setOption(JSON.stringify(e.option))}}]),t}(),X=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{model:"dog"};f(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,L,e));return n.modelDownloadFn=null,n}return d(t,N),m(t,[{key:"setOptions",value:function(e){this._ucDetector.setOption(JSON.stringify(e))}},{key:"onModelDownload",value:function(e){this.ARSession.addEventListener("ModelDownloadResult",e)}}]),t}(),W={},B=null;var z=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,e);var c=a.facing,h=void 0===c?n:c,m=a.quality,v=void 0===m?i:m,d=a.cameraSize,g=void 0===d?r:d,y=a.orientation;this.ARSession=t,this.cameraPosition=h,this.isRejected=!1,this.quality=function(e){switch(e){case u:return{quality:u,width:1080,height:1920};case s:return{quality:s,width:720,height:1280};default:return{quality:o,width:480,height:640}}}(v),this.cameraSize=g,this.orientation=l(y),this.frameSize=null}return m(e,[{key:"isRunning",value:function(){return this.ARSession.isRunning()}},{key:"frameSize",value:function(){}},{key:"openAsync",value:function(){var e=this;return new Promise(function(n,i){var r,a;e.isRejected&&i("No auth"),q(e.ARSession,"SessionFail",i),q(e.ARSession,"SessionStart",n),(r=e.cameraPosition,a=e.quality,new Promise(function(e){if(c)return e({cameraPosition:r,quality:a.quality});var n=a.width,i=a.height,o=r===t?"user":"environment";window.ARSession&&window.ARSession.version?navigator.mediaDevices.enumerateDevices().then(function(t){for(var a=!1,o=void 0,s=0;s!==t.length;++s){var u=t[s];"videoinput"===u.kind&&U(u.label)===r&&(o={video:{deviceId:{exact:u.deviceId},minWidth:i,maxWidth:i,minHeight:n,maxHeight:n}},a=!0)}a||(o={video:!0}),e(o)}).catch(function(e){console.warn(e)}):window.ucweb.ARSession&&MediaStreamTrack.getSources(function(t){for(var r=void 0,a=!1,s=0;s!==t.length;++s){var u=t[s];"video"===u.kind&&u.facing===o&&(r={video:{mandatory:{sourceId:u.id,minWidth:i,maxWidth:i,minHeight:n,maxHeight:n}}},a=!0)}a||(r={video:!0}),e(r)})})).then(function(t){return e.ARSession.start(t)})}).then(function(e){return e},function(t){return c||(e.isRejected=!0),Promise.reject(t)})}},{key:"closeAsync",value:function(){var e=this;return new Promise(function(t){q(e.ARSession,"SessionStop",t),e.ARSession.stop()}).then(function(e){return e})}},{key:"createDisplayTarget",value:function(e,t){var n=Object.assign({ARSession:this.ARSession,cameraPosition:this.cameraPosition,orientation:this.orientation},t);return new C(e,n)}},{key:"pause",value:function(){this.ARSession.pause()}},{key:"resume",value:function(){this.ARSession.resume()}},{key:"setDetector",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(e,t){if(B&&B.setMarkers(t),!W[e])return W[e]=function(){switch(e){case O:B=new H(t);break;case F:B=new V(t);break;case L:B=new X(t)}if(B)return B}(),W[e]}(e,Object.assign(t,{resolution:this.quality,ARSession:this.ARSession}))}}],[{key:"getAvaiableDetectorNames",value:function(){return W[e];var e}}]),e}();function q(e,t,n){e.addEventListener(t,function(){setTimeout(function(){return e.removeEventListener(t,n)},0),n.apply(void 0,arguments)})}return function(){function o(){f(this,o)}return m(o,null,[{key:"getWebCameraAsync",value:function(t){return Object.assign(t,{pollingtime:5e3}),new Promise(function(n,i){var r;(r=t.pollingtime,new Promise(function(t,n){var i=null,a=setTimeout(function(){throw n(),clearInterval(i),new Error("Unsupport ARSession")},r||5e3);if(window.ARSession)return clearTimeout(a),void t(window.ARSession);i=setInterval(function(){if(window.ARSession)return clearInterval(i),clearTimeout(a),void t(window.ucweb.ARSession)},20),window.addEventListener(e,function(){clearInterval(i),clearTimeout(a),t(window.ARSession)})})).then(function(e){n(new z(e,t))},function(e){i(e)})})}},{key:"getWebMicroPhoneAsync",value:function(){}},{key:"CONST",get:function(){return{CAMERA_POSITION:{FRONT:t,BACK:n},CAMERA_QUALITY:{LOW:i,MEDIUM:"MEDIUM",HIGH:"HIGH"},CAMERA_DETECTOR:{FACE:O,MARKER:F},CAMERA_SIZE:{COVER:r,STRETCH:a}}}}]),o}()});
