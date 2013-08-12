describe( "toNumber always givs a number or fallback 0", function () {  
    it("integer", function () {  
        expect(toNumber(10)).toEqual(10);  
    });  
    it("string with a number", function () {  
        expect(toNumber("10")).toEqual(10);  
    });  
    it("negative value", function () {  
        expect(toNumber("-10")).toEqual(-10);  
    });  
    it("string with a word", function () {  
        expect(toNumber("foo")).toEqual(0);  
    });
    it("string with a fallback", function () {  
        expect(toNumber("foo", 1)).toEqual(1);  
    });  
}); 


describe( "translate returns translate3d", function () {  
    it("integers", function () {  
        expect(translate({ x: 100, y: 50, z: -200 })).toEqual(" translate3d(100px,50px,-200px) ");  
    });  

     it("strings", function () {  
        expect(translate({ x: "100", y: "50",z: "-200" })).toEqual(" translate3d(100px,50px,-200px) ");  
    });   
}); 


describe( "rotate returns ", function () {  
    it("integers", function () {  
        expect(translate({ x: 100, y: 50, z: -200 })).toEqual(" translate3d(100px,50px,-200px) ");  
    });  

     it("strings", function () {  
        expect(translate({ x: "100", y: "50",z: "-200" })).toEqual(" translate3d(100px,50px,-200px) ");  
    });   
}); 


describe( "rotate returns scale ", function () {  
    it("integers", function () {  
        expect(scale(2)).toEqual(" scale(2) ");  
    });  

     it("strings", function () {  
        expect(scale("2")).toEqual(" scale(2) ");  
    }); 
    it("negative value", function () {  
        expect(scale(-2)).toEqual(" scale(-2) ");  
    });   
});
 

describe( "rotate returns perspective with px", function () {  
    it("integers", function () {  
        expect(perspective(1000)).toEqual(" perspective(1000px) ");  
    });  

     it("strings", function () {  
        expect(perspective("2000")).toEqual(" perspective(2000px) ");  
    }); 
    it("negative value", function () {  
        expect(perspective(-1000)).toEqual(" perspective(-1000px) ");  
    });  

});

  

