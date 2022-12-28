import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CoursesModule } from "../courses.module";
import { DebugElement } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CoursesService } from "../services/courses.service";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { setupCourses } from "../common/setup-test-data";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";

describe("HomeComponent", () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let element: DebugElement;
  let courseService: any;

  const beginnerCourses = setupCourses().filter(
    (course) => course.category === "BEGINNER"
  );

  beforeEach(waitForAsync(() => {
    const coursesServiceSpy = jasmine.createSpyObj("CoursesService", [
      "findAllCourses",
    ]);

    TestBed.configureTestingModule({
      imports: [CoursesModule, NoopAnimationsModule],
      providers: [
        {
          provide: CoursesService,
          useValue: coursesServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        courseService = TestBed.inject(CoursesService);
      });
  }));

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should display only beginner courses", () => {
    courseService.findAllCourses.and.returnValue(of(beginnerCourses));
    fixture.detectChanges();

    const tabs = element.queryAll(By.css(".mdc-tab"));

    expect(tabs.length).withContext("Unexpected numbers of tabs found").toBe(1);
  });

  it("should display only advanced courses", () => {
    pending();
  });

  it("should display both tabs", () => {
    pending();
  });

  it("should display advanced courses when tab clicked", () => {
    pending();
  });
});
