import type { DummyItem } from './constants';
import type { MultiSelectTriggerProps } from '../MultiSelect';
import type { SingleSelectTriggerProps } from '../SingleSelect';

import { Tooltip } from '@launchpad-ui/tooltip';

const CustomMultiSelectTrigger = (props: MultiSelectTriggerProps<DummyItem>) => {
  const { state, triggerProps, triggerRef } = props;

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
      <button {...triggerProps} data-test-id="custom-trigger" ref={triggerRef}>
        +
      </button>
    </div>
  );
};

const CustomSingleSelectTrigger = (props: SingleSelectTriggerProps<DummyItem>) => {
  const { state, triggerProps, triggerRef } = props;

  const getRenderedSelected = () => {
    const item = state.selectedItem;

    if (!item) return 'Select option';

    return <span>{item.textValue}</span>;
  };
  return (
    <button {...triggerProps} data-test-id="custom-trigger" ref={triggerRef}>
      {getRenderedSelected()}
    </button>
  );
};

export { CustomMultiSelectTrigger, CustomSingleSelectTrigger };
