describe("Home page", () => {
  beforeEach(() => {
    // Mock http response
    cy.fixture("courses.json").as("courseJSON");
    // Start cypress servet
    cy.server();
    // Mock end-point
    cy.route("/api/courses", "@courseJSON").as("courses");
    // Visit page
    cy.visit("/");
  });

  it("should display a list of courses", () => {
    // Check page content
    cy.contains("All Courses");
    // Wait for http response
    cy.wait("@courses");
    // Check page content after http request
    cy.get("mat-card").should("have.length", 9);
  });

  it("should display the advanced courses", () => {
    cy.get(".mdc-tab").should("have.length", 2);

    cy.get(".mdc-tab").last().click();
    cy.get(".mat-mdc-tab-body-active .mat-mdc-card-title")
      .its("length")
      .should("be.gt", 1);

    cy.get(".mat-mdc-tab-body-active .mat-mdc-card-title")
      .first()
      .should(
        "contain.text",
        "Angular Security Course"
      );
  });
});
