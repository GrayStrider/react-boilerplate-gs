/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  header: {
    taskID: `${scope}.header`,
    defaultMessage: 'Features',
  },
  scaffoldingHeader: {
    taskID: `${scope}.scaffolding.header`,
    defaultMessage: 'Quick scaffolding',
  },
  scaffoldingMessage: {
    taskID: `${scope}.scaffolding.message`,
    defaultMessage: `Automate the creation of components, containers, routes, selectors
  and sagas - and their tests - right from the CLI!`,
  },
  feedbackHeader: {
    taskID: `${scope}.feedback.header`,
    defaultMessage: 'Instant feedback',
  },
  feedbackMessage: {
    taskID: `${scope}.feedback.message`,
    defaultMessage: `
      Enjoy the best DX and code your app at the speed of thought! Your
    saved changes to the CSS and JS are reflected instantaneously
    without refreshing the page. Preserve application state even when
    you update something in the underlying code!
    `,
  },
  stateManagementHeader: {
    taskID: `${scope}.state_management.header`,
    defaultMessage: 'Predictable state management',
  },
  stateManagementMessages: {
    taskID: `${scope}.state_management.message`,
    defaultMessage: `
      Unidirectional data flow allows for change logging and time travel
    debugging.
    `,
  },
  javascriptHeader: {
    taskID: `${scope}.javascript.header`,
    defaultMessage: 'Next generation JavaScript',
  },
  javascriptMessage: {
    taskID: `${scope}.javascript.message`,
    defaultMessage: `Use template strings, object destructuring, arrow functions, JSX
    syntax and more, today.`,
  },
  cssHeader: {
    taskID: `${scope}.css.header`,
    defaultMessage: 'Features',
  },
  cssMessage: {
    taskID: `${scope}.css.message`,
    defaultMessage: 'Next generation CSS',
  },
  routingHeader: {
    taskID: `${scope}.routing.header`,
    defaultMessage: 'Industry-standard routing',
  },
  routingMessage: {
    taskID: `${scope}.routing.message`,
    defaultMessage: `
      Write composable CSS that's co-located with your components for
    complete modularity. Unique generated class names keep the
    specificity low while eliminating style clashes. Ship only the
    styles that are on the page for the best performance.
    `,
  },
  networkHeader: {
    taskID: `${scope}.network.header`,
    defaultMessage: 'Offline-first',
  },
  networkMessage: {
    taskID: `${scope}.network.message`,
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
    `,
  },
  intlHeader: {
    taskID: `${scope}.internationalization.header`,
    defaultMessage:
      'Complete i18n Standard Internationalization & Pluralization',
  },
  intlMessage: {
    taskID: `${scope}.internationalization.message`,
    defaultMessage:
      'Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.',
  },
});
