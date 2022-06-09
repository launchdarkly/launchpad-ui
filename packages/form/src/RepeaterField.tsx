import type { ButtonSize } from '@launchpad-ui/button';

import { Button, ButtonKind, ButtonType } from '@launchpad-ui/button';
import { IconSize, HorizontalRule } from '@launchpad-ui/icons';
import cx from 'clsx';
import { Component, ReactNode } from 'react';

import './styles/RepeaterField.css';

// Item represents any type. It is the calling component's job to provide a
// getItemKey fn if that type does not include a _key field
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Item = any;

type RepeaterFieldProps = {
  name: string;
  addActionLabel: string;
  list: Item[];
  getItemKey: (item: Item) => string;
  validationKey: (item: Item) => string;
  renderItem(obj: RenderItemsTypes): ReactNode;
  onAdd: () => void;
  onRemove: (item: Item) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (item: Item, ...args: any[]) => void;
  onBlur: () => void;
  onBlurItem: (item: Item, field: string) => void;
  canAdd?: boolean;
  minFields?: number;
  size?: ButtonSize;
  className?: string;
  defaultItem?: Item;
};

type RenderItemsTypes = {
  index: number;
  item: Item;
  isFocused: boolean;
  validationKey: string;
  onChange(): void;
  onBlur(item: Item, field: string): void;
};

type RepeaterFieldItemProps = RenderItemsTypes & {
  action: JSX.Element;
};

class RepeaterField extends Component<RepeaterFieldProps> {
  static defaultProps = {
    minFields: 1,
    canAdd: true,
    size: 'tiny',
    getItemKey: (item: Item) => item._key,
  };

  state = {
    focusIndex: null,
  };

  render() {
    const { list, canAdd, minFields, onBlur, name, addActionLabel, size, className } = this.props;

    const customFields = minFields ? minFields : RepeaterField.defaultProps.minFields;
    const canRemove = list.length > customFields;

    return (
      <div className={cx('RepeaterField', className)} onBlurCapture={onBlur.bind(this, name)}>
        {list.map((it) => this.renderField(it, canRemove))}
        {canAdd && (
          <Button size={size} onClick={this.handleAddClick}>
            {addActionLabel}
          </Button>
        )}
      </div>
    );
  }

  renderField(item: Item, canRemove: boolean) {
    const { focusIndex } = this.state;
    const { list, renderItem, validationKey, onChange, onBlurItem, getItemKey } = this.props;
    const name = validationKey(item);
    const index = list.indexOf(item);

    const action = (enabled: boolean) => (
      <Button
        type={ButtonType.ICON}
        kind={ButtonKind.DESTRUCTIVE}
        disabled={!enabled}
        icon={<HorizontalRule size={IconSize.MEDIUM} />}
        className="RepeaterField-delete"
        onClick={enabled ? this.handleRemoveClick.bind(this, item) : undefined}
      />
    );

    const classes = cx('RepeaterField-item', {
      'is-removable': canRemove,
    });

    return (
      <div className={classes} key={getItemKey(item)}>
        {renderItem({
          index,
          item,
          isFocused: focusIndex === index,
          validationKey: name,
          onChange: (...args) => onChange(item, ...args),
          onBlur: onBlurItem,
          ...{ action: action(canRemove) },
        })}
      </div>
    );
  }

  handleAddClick = () => {
    const { list, onAdd } = this.props;
    this.setState({ focusIndex: list.length }, () => onAdd());
  };

  handleRemoveClick = (item: Item, event: React.MouseEvent) => {
    const { list, onRemove } = this.props;
    const nextFocusIndex =
      list[list.length - 1] === item ? this.getPreviousIndex(item) : this.getNextIndex(item);
    event.preventDefault();
    this.setState({ focusIndex: nextFocusIndex }, () => onRemove(item));
  };

  getNextIndex(item: Item) {
    const { list, getItemKey } = this.props;
    const currentIndex = list.findIndex((it) => getItemKey(it) === getItemKey(item));
    return currentIndex;
  }

  getPreviousIndex(item: Item) {
    const { list, getItemKey } = this.props;
    const currentIndex = list.findIndex((it) => getItemKey(it) === getItemKey(item));
    const previousIndex = currentIndex - 1;

    return previousIndex >= 0 ? previousIndex : undefined;
  }
}

export { RepeaterField };
export type { RepeaterFieldProps, RenderItemsTypes, RepeaterFieldItemProps };
