import { RouterProjectPage } from './app.po';

describe('router-project App', () => {
  let page: RouterProjectPage;

  beforeEach(() => {
    page = new RouterProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
