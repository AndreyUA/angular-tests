describe("Home page", () => {
  it("should display a list of courses", () => {
    // Mock http response
    cy.fixture("courses.json").as("courseJSON");
    // Start cypress servet
    cy.server();
    // Mock end-point
    cy.route("/api/courses", "@courseJSON").as("courses");
    // Visit page
    cy.visit("/");
    // Check page content
    cy.contains("All Courses");
    // Wait for http response
    cy.wait("@courses");
    // Check page content after http request
    cy.get("mat-card").should("have.length", 9);
  });
});
