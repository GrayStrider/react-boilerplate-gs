/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    taskID: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    taskID: `${scope}.features`,
    defaultMessage: 'Features',
  },
  playground: {
    taskID: `${scope}.playground`,
    defaultMessage: 'Playground',
  },
});
