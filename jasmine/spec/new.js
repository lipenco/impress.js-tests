describe("toNumber function", function () {  
    it("return given int", function () {  
        expect(toNumber(10)).toEqual(10);  
    });  
    it("changes string with a number to a int", function () {  
        expect(toNumber("10")).toEqual(10);  
    });  
    it("return given int negative value form a string", function () {  
        expect(toNumber("-10")).toEqual(-10);  
    });  
    it("returns 0 for string", function () {  
        expect(toNumber("foo")).toEqual(0);  
    });
    it("returns fallback when the first parameters is a string", function () {  
        expect(toNumber("foo", 1)).toEqual(1);  
    });  
}); 


describe("translate function", function () {  
    it("returns CSS value for from given ints", function () {  
        expect(translate({ x: 100, y: 50, z: -200 })).toEqual(" translate3d(100px,50px,-200px) ");  
    });  

     it("returns CSS value for from given strings", function () {  
        expect(translate({ x: "100", y: "50",z: "-200" })).toEqual(" translate3d(100px,50px,-200px) ");  
    });   
}); 


describe("rotate function ", function () {  
    it("returns CSS value for from given ints", function () {  
        expect(rotate({ x: 100, y: 50, z: -200 })).toEqual(" rotateX(100deg)  rotateY(50deg)  rotateZ(-200deg) ");  
    });  

     it("returns CSS value for from given string", function () {  
        expect(rotate({ x: "100", y: "50", z: "-200" })).toEqual(" rotateX(100deg)  rotateY(50deg)  rotateZ(-200deg) ");  
    });   
}); 


describe( "scale function", function () {  
    it("returns CSS value for from given ints", function () {  
        expect(scale(2)).toEqual(" scale(2) ");  
    });  

     it("returns CSS value for from given string", function () {  
        expect(scale("2")).toEqual(" scale(2) ");  
    }); 
    it("returns CSS value for from nagative ints", function () {  
        expect(scale(-2)).toEqual(" scale(-2) ");  
    });   
});
 

describe( "perspective function", function () {  
    it("returns CSS value for from given ints", function () {  
        expect(perspective(1000)).toEqual(" perspective(1000px) ");  
    });  

     it("returns CSS value for from given string", function () {  
        expect(perspective("2000")).toEqual(" perspective(2000px) ");  
    }); 
    it("returns CSS value for from nagative ints", function () {  
        expect(perspective(-1000)).toEqual(" perspective(-1000px) ");  
    });  

});

  

