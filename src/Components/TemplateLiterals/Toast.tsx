// type props

/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type horizontalPosition = 'left' | 'center' | 'right';
type verticalPosition = 'top' | 'center' | 'bottom';

// Exclude key word will exclude what we do not want
type ToastProps = {
  position: Exclude<`${horizontalPosition}-${verticalPosition}`, 'center-center'> | 'center';
};
const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
