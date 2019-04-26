/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    taskID: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    taskID: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
