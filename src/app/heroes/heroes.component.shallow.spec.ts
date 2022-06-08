import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";

describe("HeroesComponent (shallow tests", () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "SpiderDude", strength: 8 },
      { id: 2, name: "WonderFul Woman", strength: 24 },
      { id: 3, name: "SuperDude", strength: 55 },
    ];
    mockHeroService = jasmine.createSpyObj([
      "GetHeroes",
      "addHero",
      "deleteHero",
    ]);
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: HeroService,
          useValue: mockHeroService,
        },
      ],
    });
  });

  it("should set heroes correctly from the service", () => {
    mockHeroService.getHeroes.expect("true").toBe("true");
  });
});
