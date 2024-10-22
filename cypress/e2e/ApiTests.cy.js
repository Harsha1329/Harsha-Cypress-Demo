describe('API Tests', () => {

    it('Get ex', () => {

        let AllIds =[] ;
        cy.request("GET", "https://reqres.in/api/users?page=2")
        
        .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data[0].id).to.equal(7);
            expect(response.body.data[0].id).to.have.length(6);
            
            response.body.forEach(element => 
              {
                
              });
            
          });
    })

   /* it("POST ex", () => {
        cy.request("POST", "https://reqres.in/api/users", {
          name: "morpheus",
          job: "leader",
        }).should((response) => {
          expect(response.status).to.eq(201);
          expect(response.duration).to.lessThan(3000);
        });
     });

     it("PUT ex", () => {
        cy.request("PUT", "https://reqres.in/api/users/2", {
          name: "QAAutomationLabs",
          job: "Testing",
        }).should((response) => {
          expect(response.status).to.eq(200);
        });
      }); */

})