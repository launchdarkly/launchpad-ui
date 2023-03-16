import type { FormProps } from '../src';

import { Info } from '@launchpad-ui/icons';

import {
  Checkbox,
  CompactTextField,
  Form,
  FormField,
  IconField,
  Label,
  RadioGroup,
  Radio,
  SelectField,
  TextArea,
  TextField,
} from '../src';

const createComponent = (props?: FormProps) => (
  <Form id="testing" name="My Form" aria-label="My Form" {...props}>
    <h4>Form Field</h4>
    <FormField
      isRequired={true}
      label="Email"
      name="Email"
      htmlFor="Email"
      errorMessage="Oops, you entered an incorrect email"
      isInvalid={true}
    >
      <TextField id="Email" value="testing@launchdarkly.com" />
    </FormField>
    <h4>Compact Text Field</h4>
    <CompactTextField label="Email" aria-label="Email" onChange={() => undefined} />
    <h4>Icon Field</h4>
    <IconField icon={Info}>
      <FormField isRequired={true} label="Date" name="Date" htmlFor="Date">
        <TextField id="Date" value="12/01/2022" />
      </FormField>
    </IconField>
    <h4>SelectField</h4>
    <SelectField name="select" aria-label="My select" value="one" onChange={() => undefined}>
      <option value="one" aria-label="option one">
        One
      </option>
      <option value="two" aria-label="option two">
        Two
      </option>
    </SelectField>
    <h4>Text Area</h4>
    <TextArea
      value="my text"
      aria-label="My Text Area"
      name="mytextarea"
      onChange={() => undefined}
    />
    <h4>Radio Group</h4>
    <RadioGroup name="radio group" value="one" onChange={() => undefined}>
      <Radio value="one" id="one" aria-label="radio one" />
      <Label htmlFor="one">One</Label>
      <Radio value="two" id="two" aria-label="radio two" />
      <Label htmlFor="one">Two</Label>
    </RadioGroup>
    <h4>Checkbox</h4>
    <Checkbox checked={false} aria-label="Test checkbox" onChange={() => undefined} disabled={true}>
      Label
    </Checkbox>
  </Form>
);

describe('Form', () => {
  it('renders', () => {
    cy.mount(createComponent());
    cy.getByTestId('form').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(createComponent());
    cy.checkA11y();
  });
});
