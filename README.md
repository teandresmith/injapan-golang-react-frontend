# InJapan

InJapan is a raw and real blog about Japan related topics from a foreigners experience.

The new version of InJapan can be found at: https://injapan.netlify.app/

## Under the Hood

InJapan's user facing design remains the same, but the underlying architecture is completely different.

In comparsion to the last version of InJapan, which used a Express + Node.js server alongside server rendered templates, the new version of InJapan implements SPA with React and state management with Redux Toolkit. At the same time, the frontend implements RTK Queries/Mutations to handle most API calls to the backend.
