import type { DummyItem } from './constants';
import type { SelectTriggerProps } from '../Select';

import { Tooltip } from '@launchpad-ui/tooltip';

const CustomMultiSelectTrigger = (props: SelectTriggerProps<DummyItem>) => {
  const { state, buttonProps, innerRef } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }} data-test-id="selected-options">
        {(state.selectedItems || []).map(({ key, textValue }) => (
          <div
            style={{
              backgroundColor: '#efefef',
              marginRight: '5px',
              fontSize: '12px',
            }}
            key={key}
          >
            <span data-test-id="selected-option">{textValue}</span>
            <Tooltip content="Unselect">
              <button
                style={{ marginLeft: '5px' }}
                onClick={() => state.selectionManager.select(key)}
                data-test-id="unselect-option-btn"
              >
                x
              </button>
            </Tooltip>
          </div>
        ))}
      </div>
      <button {...buttonProps} data-test-id="custom-trigger" ref={innerRef}>
        +
      </button>
    </div>
  );
};

const CustomSingleSelectTrigger = (props: SelectTriggerProps<DummyItem>) => {
  const { state, buttonProps, innerRef } = props;

  const getRenderedSelected = () => {
    const items = state.selectedItems;

    if (!items) return 'Select option';

    return <span>{items[0].textValue}</span>;
  };
  return (
    <button {...buttonProps} data-test-id="custom-trigger" ref={innerRef}>
      {getRenderedSelected()}
    </button>
  );
};

export { CustomMultiSelectTrigger, CustomSingleSelectTrigger };
