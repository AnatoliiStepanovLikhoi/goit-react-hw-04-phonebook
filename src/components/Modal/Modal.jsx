// import { Component } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    // console.log(event.target);
    // console.log(event.currentTarget);

    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('натиснули esc');
        onClose();
      }
    };
    console.log('modal componentDidMount');

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      console.log('modal componentWillUnmount');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={styles.Modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};

// export class Modal extends Component {
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('натиснули esc');
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     // console.log(event.target);
//     // console.log(event.currentTarget);

//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   componentDidMount() {
//     console.log('modal componentDidMount');

//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log('modal componentWillUnmount');

//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   render() {
//     return createPortal(
//       <div
//         className={styles.Modal__backdrop}
//         onClick={this.handleBackdropClick}
//       >
//         <div className={styles.Modal__content}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
