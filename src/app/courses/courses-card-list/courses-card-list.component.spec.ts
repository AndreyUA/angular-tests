import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CoursesCardListComponent } from "./courses-card-list.component";
import { CoursesModule } from "../courses.module";
import { setupCourses } from "../common/setup-test-data";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("CoursesCardListComponent", () => {
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let element: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesCardListComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
      });
  }));

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should display the course list", () => {
    component.courses = setupCourses();
    fixture.detectChanges();

    const cards = element.queryAll(By.css(".course-card"));

    expect(cards).withContext("Could not find cards").toBeTruthy();
    expect(cards.length).withContext("Unexpected number on courses").toBe(12);
  });

  it("should display the first course", () => {
    component.courses = setupCourses();
    fixture.detectChanges();

    const course = component.courses[0];
    const card = element.query(By.css(".course-card:first-child"));
    const title = element.query(By.css("mat-card-title"));
    const image = element.query(By.css("img"));

    expect(card).withContext("Could not find card").toBeTruthy();
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    expect(image.nativeElement.src).toBe(course.iconUrl);
  });
});
