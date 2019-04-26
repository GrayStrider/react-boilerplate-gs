/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LocaleToggle';

export default defineMessages({
  en: {
    taskID: `${scope}.en`,
    defaultMessage: 'en',
  },
  de: {
    taskID: `${scope}.de`,
    defaultMessage: 'de',
  },
});
