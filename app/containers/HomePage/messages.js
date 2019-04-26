/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    taskID: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    taskID: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeHeader: {
    taskID: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    taskID: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    taskID: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
