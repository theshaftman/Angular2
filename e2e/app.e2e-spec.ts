import { WebApplicationPage } from './app.po';

describe('web-application App', function() {
  let page: WebApplicationPage;

  beforeEach(() => {
    page = new WebApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
