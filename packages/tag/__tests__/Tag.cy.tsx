import { TagGroup, TagItem } from '../src';

import { MOCK_TAGS } from './constants';

describe('Tag', () => {
  it('renders', () => {
    cy.mount(<TagGroup items={MOCK_TAGS}>{(item) => <TagItem>{item.name}</TagItem>}</TagGroup>);
    cy.getByTestId('tag').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<TagGroup items={MOCK_TAGS}>{(item) => <TagItem>{item.name}</TagItem>}</TagGroup>);
    cy.checkA11y();
  });
});
