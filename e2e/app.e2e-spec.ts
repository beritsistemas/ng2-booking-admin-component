import { Angular2FullStackPage } from './app.po';

describe('angular2-full-stack App', function() {
  let page: Angular2FullStackPage;

  beforeEach(() => {
    page = new Angular2FullStackPage();
  });

  it('should display 201703 and 1', () => {
    page.navigateTo();
    
    expect(page.getParagraphText()).toEqual('201703');

    page.selectOption("doble")

    expect(page.getDayNumber("0103")).toEqual('1');

  });
});
