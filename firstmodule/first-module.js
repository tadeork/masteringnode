let tempData = "";

module.exports = {
    put: function(d){
        tempData = d;        
    },
    
    get: function(){
        return tempData;
    },

    doIt: function(){
        console.log('did it');        
    },
    
    doSomething: function(){
        console.log('doing something');
    },
    
    getItDone: function(){
        console.log('already done it!');
    }
};