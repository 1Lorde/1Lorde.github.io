import i18next from 'i18next'

export function success(message) {
  return {
    title: i18next.t('success'),
    message: message,
    type: 'success',
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  }
}

export function danger(message) {
  return {
    title: i18next.t('error'),
    message: message,
    type: 'danger',
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  }
}

export function info(message) {
  return {
    title: i18next.t('info'),
    message: message,
    type: 'info',
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  }
}

export function warning(message) {
  return {
    title: i18next.t('warning'),
    message: message,
    type: 'warning',
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  }
}
