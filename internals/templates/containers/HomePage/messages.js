/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    taskID: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
});
