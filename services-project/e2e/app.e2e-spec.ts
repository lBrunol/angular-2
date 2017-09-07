import { ServicesProjectPage } from './app.po';

describe('services-project App', () => {
  let page: ServicesProjectPage;

  beforeEach(() => {
    page = new ServicesProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
