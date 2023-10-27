(function(){
    try{
        AudioManager.audioFileExt = function() {
            return '.m4a';
        };
        var open =  XMLHttpRequest.prototype.open
        XMLHttpRequest.prototype.open = function(m,u,a,b,c){
            if(/\.ogg$/.test(u)){
                u = u.replace(/\.ogg$/,".m4a");
            }else if(/\.rpgmvo$/i.test(u)){
                u = u.replace(/\.rpgmvo$/,".rpgmvm");
            }
            if(a!=undefined){
                return open.call(this,m,u,a,b,c);
            }else{
                return open.call(this,m,u);
            }
        }
    }catch(e){

    }
})()
