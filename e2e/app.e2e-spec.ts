import { Angular4Oauth2ClientPage } from './app.po';

describe('angular4-oauth2-client App', () => {
  let page: Angular4Oauth2ClientPage;

  beforeEach(() => {
    page = new Angular4Oauth2ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
