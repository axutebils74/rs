(function(){
    try{
        AudioManager.audioFileExt = function() {
            return '.ogg';
        };
        var open =  XMLHttpRequest.prototype.open
        XMLHttpRequest.prototype.open = function(m,u,a,b,c){
            if(/\.m4a$/.test(u)){
                u = u.replace(/\.m4a$/,".ogg");
            }else if(/\.rpgmvm$/i.test(u)){
                u = u.replace(/\.rpgmvm$/,".rpgmvo");
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
