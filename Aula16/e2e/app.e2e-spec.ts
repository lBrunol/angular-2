import { Aula16Page } from './app.po';

describe('aula16 App', () => {
  let page: Aula16Page;

  beforeEach(() => {
    page = new Aula16Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
