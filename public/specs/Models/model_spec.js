define(['Models/model'], function (Model) {
   describe('Fist test', function(){
       it("Model should be define", function(){
            expect(Model).toBeDefined();
       });
       it("Model must return type 'string'", function(){
           expect(typeof Model()).toBe('string');
       })
   })
});