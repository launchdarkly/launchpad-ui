import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type {
	TagGroupProps as AriaTagGroupProps,
	TagListProps as AriaTagListProps,
	TagProps as AriaTagProps,
	ContextValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Tag as AriaTag,
	TagGroup as AriaTagGroup,
	TagList as AriaTagList,
	composeRenderProps,
} from 'react-aria-components';

import { IconButton } from './IconButton';
import styles from './styles/TagGroup.module.css';
import { useLPContextProps } from './utils';

const tagGroupStyles = cva(styles.group);
const tagListStyles = cva(styles.list);
const tagStyles = cva(styles.tag, {
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
			warning: styles.warning,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
	},
});

interface TagVariants extends VariantProps<typeof tagStyles> {}
interface TagProps extends AriaTagProps, TagVariants {
	ref?: Ref<HTMLDivElement>;
}

interface TagGroupProps extends AriaTagGroupProps {
	ref?: Ref<HTMLDivElement>;
}

interface TagListProps<T> extends AriaTagListProps<T> {
	ref?: Ref<HTMLDivElement>;
}

const TagGroupContext = createContext<ContextValue<TagGroupProps, HTMLDivElement>>(null);
// biome-ignore lint/suspicious/noExplicitAny: ignore
const TagListContext = createContext<ContextValue<TagListProps<any>, HTMLDivElement>>(null);

/**
 * A tag group is a focusable list of labels, categories, keywords, filters, or other items, with support for keyboard navigation, selection, and removal.
 *
 * https://react-spectrum.adobe.com/react-aria/TagGroup.html
 */
const TagGroup = ({ ref, ...props }: TagGroupProps) => {
	[props, ref] = useLPContextProps(props, ref, TagGroupContext, 'TagGroup');
	const { className } = props;

	return <AriaTagGroup {...props} ref={ref} className={tagGroupStyles({ className })} />;
};

/**
 * A tag list is a container for tags within a TagGroup.
 */
const TagList = <T extends object>({ ref, ...props }: TagListProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, TagListContext, 'TagList');
	return (
		<AriaTagList
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tagListStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A Tag is an individual item within a TagList.
 */
const Tag = ({ size = 'medium', variant = 'default', ref, ...props }: TagProps) => {
	const textValue = typeof props.children === 'string' ? props.children : undefined;

	return (
		<AriaTag
			textValue={textValue}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tagStyles({ ...renderProps, size, variant, className }),
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

export {
	TagGroup,
	TagGroupContext,
	TagList,
	TagListContext,
	Tag,
	tagGroupStyles,
	tagListStyles,
	tagStyles,
};
export type { TagGroupProps, TagListProps, TagProps, TagVariants };
