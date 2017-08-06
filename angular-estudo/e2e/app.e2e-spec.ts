import { AngularEstudoPage } from './app.po';

describe('angular-estudo App', () => {
  let page: AngularEstudoPage;

  beforeEach(() => {
    page = new AngularEstudoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
