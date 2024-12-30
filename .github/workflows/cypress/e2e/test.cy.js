describe("Basic Server Tests", () => {
  it("should return the correct welcome message", () => {
    // Visit the root URL
    cy.request("GET", "/").then((response) => {
      // Check the status code
      expect(response.status).to.equal(200);

      // Check the response body
      expect(response.body).to.equal("Welcome to the world!");
    });
  });
});
