import * as React from 'react';
import { StandardProps } from '@material-ui/core';
import { FabProps } from '@material-ui/core/Fab';
import { TransitionProps } from 'react-transition-group/Transition';
import { TransitionHandlerProps } from '@material-ui/core/transitions';

export interface SpeedDialProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement> & Partial<TransitionHandlerProps>,
    SpeedDialClassKey,
    'children'
  > {
  /**
   * SpeedDialActions to display when the SpeedDial is `open`.
   */
  children?: React.ReactNode;
  /**
   * The aria-label of the button element.
   * Also used to provide the `id` for the `SpeedDial` element and its children.
   */
  ariaLabel: string;
  /**
   * The direction the actions open relative to the floating action button.
   */
  direction?: 'up' | 'down' | 'left' | 'right';
  /**
   * If `true`, the SpeedDial will be hidden.
   */
  hidden?: boolean;
  /**
   * Props applied to the [`Fab`](/api/fab/) element.
   */
  FabProps?: Partial<FabProps>;
  /**
   * The icon to display in the SpeedDial Fab. The `SpeedDialIcon` component
   * provides a default Icon with animation.
   */
  icon?: React.ReactNode;
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} key The key pressed.
   */
  onClose?: (event: React.SyntheticEvent<{}>, key: string) => void;
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen?: (event: React.SyntheticEvent<{}>) => void;
  /**
   * If `true`, the SpeedDial is open.
   */
  open: boolean;
  /**
   * The icon to display in the SpeedDial Fab when the SpeedDial is open.
   */
  openIcon?: React.ReactNode;
  /**
   * The component used for the transition.
   */
  TransitionComponent?: React.ComponentType<TransitionProps>;
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration?: TransitionProps['timeout'];
  /**
   * Props applied to the `Transition` element.
   */
  TransitionProps?: TransitionProps;
}

export type SpeedDialClassKey =
  | 'root'
  | 'fab'
  | 'directionUp'
  | 'directionDown'
  | 'directionLeft'
  | 'directionRight'
  | 'actions'
  | 'actionsClosed';

export default function SpeedDial(props: SpeedDialProps): JSX.Element;
