import type { forwardRefType } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { TagProps as AriaTagProps, TagGroupProps, TagListProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	Tag as AriaTag,
	TagGroup as AriaTagGroup,
	TagList as AriaTagList,
	composeRenderProps,
} from 'react-aria-components';

import { IconButton } from './IconButton';
import styles from './styles/TagGroup.module.css';

const group = cva(styles.group);
const list = cva(styles.list);
const tag = cva(styles.tag, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
		},
		variant: {
			default: styles.default,
			success: styles.success,
			error: styles.error,
			beta: styles.beta,
			federal: styles.federal,
			new: styles.new,
			info: styles.info,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
	},
});

interface TagVariants extends VariantProps<typeof tag> {}
interface TagProps extends AriaTagProps, TagVariants {}

const _TagGroup = ({ className, ...props }: TagGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
	return <AriaTagGroup {...props} ref={ref} className={group({ className })} />;
};

/**
 * A tag group is a focusable list of labels, categories, keywords, filters, or other items, with support for keyboard navigation, selection, and removal.
 *
 * https://react-spectrum.adobe.com/react-aria/TagGroup.html
 */
const TagGroup = forwardRef(_TagGroup);

const _TagList = <T extends object>(props: TagListProps<T>, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaTagList
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				list({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A tag list is a container for tags within a TagGroup.
 */
const TagList = (forwardRef as forwardRefType)(_TagList);

const _Tag = (
	{ size = 'medium', variant = 'default', ...props }: TagProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	const textValue = typeof props.children === 'string' ? props.children : undefined;

	return (
		<AriaTag
			textValue={textValue}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tag({ ...renderProps, size, variant, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { allowsRemoving }) => (
				<>
					{children}
					{allowsRemoving && (
						<IconButton
							aria-label={`Remove ${textValue ?? ''}`.trim()}
							size="small"
							variant="minimal"
							icon="cancel-circle-outline"
							slot="remove"
						/>
					)}
				</>
			))}
		</AriaTag>
	);
};

/**
 * A Tag is an individual item within a TagList.
 */
const Tag = forwardRef(_Tag);

export { TagGroup, TagList, Tag, tag };
export type { TagGroupProps, TagListProps, TagProps, TagVariants };
