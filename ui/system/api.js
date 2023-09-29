define(['ui/system/index'], function(){
  alt.factory('Api', ['System',function(System){
    var a = System('api');
    // untuk request get
    a.Get=function(url,data){
        var d=data||{};
        var p=$.param(d);
        url='/?u='+url;
        return this.connect(url+'&'+p,{},{method:'GET'});
    }
    // untuk request post
    a.Post=function(url,data){
        url='/?u='+url;
        return this.connect(url,data);
    }
    a.Put=function(url,id,data){
        url='/?u='+url+'/'+id;
        return this.connect(url,data,{method:'PUT'});
    }
    a.Delete=function(url,id){
        url='/?u='+url+'/'+id;
        return this.connect(url,{},{method:'DELETE'});
    }
    a.Upload=function(url,data){
        url='/?u='+url;
        return this.connect(url,data,{ismultipart:true});
    }
    a.Save=function(url,data){
        if(data.id) return this.Put(url,data.id,data);
        return this.Post(url,data);
    }
    return a;

    }]);
});
