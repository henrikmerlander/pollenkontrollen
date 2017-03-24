import { PollenkontrollenPage } from './app.po';

describe('pollenkontrollen App', () => {
  let page: PollenkontrollenPage;

  beforeEach(() => {
    page = new PollenkontrollenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
