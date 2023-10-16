/* General "stack" component, which helps arrange a vertical stack of components
with even spacing between them */

<script lang="ts">
import { h, VNode, PropType, Fragment } from 'vue';
import {
  FunctionalComponentContextArg,
  FunctionalComponentPropsType,
  getSlotChildren,
} from './utils';
import Divider from './Divider.vue';

const propsDefinition = {
  tagName: { type: String as PropType<'div' | 'section'>, default: 'div' },
  dividers: Boolean,
} as const;

const Stack = (
  props: FunctionalComponentPropsType<typeof propsDefinition>,
  context: FunctionalComponentContextArg
): VNode => {
  const classes = {
    stack: true,
    [`--spacing-${props.spacing}`]: true,
    [`--spacing-${props.spacingMobile}-mobile-only`]: !!props.spacingMobile,
    [`--spacing-${props.spacingTablet}-tablet`]: !!props.spacingTablet,
    [`--spacing-${props.spacingDesktop}-desktop`]: !!props.spacingDesktop,
    [`--spacing-${props.spacingWide}-wide`]: !!props.spacingWide,
    [`--spacing-${props.spacingHuge}-huge`]: !!props.spacingHuge,
  };

  const wrappedChildren = [] as VNode[];
  const children = getSlotChildren(context.slots.default);
  for (let i = 0; i < children.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    wrappedChildren.push(children[i]!);
    if (props.dividers && i < children.length - 1) {
      wrappedChildren.push(h(Divider));
    }
  }

  return h(
    props.tagName || 'div',
    {
      class: classes,
    },
    wrappedChildren
  );
};

Stack.props = propsDefinition;

export default Stack;
</script>

<style lang="less">
.stack {
  display: flex;
  flex-direction: column;
  row-gap: 5x;
  > p {
    margin: 0;
  }
}
</style>
