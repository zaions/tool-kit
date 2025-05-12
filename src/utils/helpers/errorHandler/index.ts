/**
 * Reports a custom error by logging it along with an optional message.
 *
 * @param errData - The error data to be reported.
 * @param message - An optional message to provide additional context.
 * @param showInConsole - A flag indicating whether to log the error in the console.
 */
export const reportCustomError = (
  errData: unknown,
  message?: string,
  showInConsole = true
): void => {
  try {
    const _data = {
      err: errData,
      message: `[reportCustomError] - ${message ?? ''}`,
    };

    if (showInConsole) {
      // we will do some other logic as well, like sentry or datadog
      console.error(_data);
    }
  } catch (error) {
    console.error({ err: error });
  }
};
