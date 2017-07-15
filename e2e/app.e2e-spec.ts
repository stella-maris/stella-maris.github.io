import { StellaMaris.Github.IoPage } from './app.po';

describe('stella-maris.github.io App', () => {
  let page: StellaMaris.Github.IoPage;

  beforeEach(() => {
    page = new StellaMaris.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
