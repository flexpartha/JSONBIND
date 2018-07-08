import { JsonBindPage } from './app.po';

describe('json-bind App', function() {
  let page: JsonBindPage;

  beforeEach(() => {
    page = new JsonBindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
