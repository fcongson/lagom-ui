// Questions a Lagom consumer might ask, with what a correct answer needs.
//
// Each question is answered by a fresh agent that can only use the Storybook
// MCP server, then graded criterion by criterion:
// - mustInclude: facts the answer has to state (in any wording)
// - mustNotInclude: likely hallucinations or bad advice the answer must avoid
//
// When a question fails, the fix is usually in the docs, not here. Change a
// rubric only when it's wrong about Lagom.

export const questions = [
  // Setup
  {
    id: "setup-install",
    category: "Setup",
    question: "How do I install Lagom UI in a new React app?",
    mustInclude: [
      "Both @fcongson/lagom-ui and @fcongson/lagom-tokens are installed from GitHub Packages, with the @fcongson scope pointed at https://npm.pkg.github.com",
      "Authentication needs a GitHub token with read:packages",
      "Import @fcongson/lagom-ui/style.css and a lagom-tokens theme stylesheet (css/theme/_light.css)",
      "Wrap the app in ThemeProvider",
    ],
    mustNotInclude: [
      "Says the packages are on the public npm registry, or that no token is needed",
    ],
  },
  {
    id: "setup-401",
    category: "Setup",
    question:
      "pnpm install fails with a 401 fetching @fcongson/lagom-tokens, even though my project's .npmrc has //npm.pkg.github.com/:_authToken=${TOKEN} and TOKEN is set. Why?",
    mustInclude: [
      "pnpm 12 ignores credentials (including ${TOKEN}-style variables) in a project's .npmrc",
      "Put the token in the user-level ~/.npmrc instead",
    ],
    mustNotInclude: [],
  },
  {
    id: "setup-growthbook",
    category: "Setup",
    question:
      'My app crashes with "Missing or invalid GrowthBookProvider" when I render a Lagom Button. How do I fix it?',
    mustInclude: ["Wrap the app (or the Button) in Lagom's ThemeProvider"],
    mustNotInclude: [
      "Tells the user to install or configure GrowthBook themselves as the main fix",
    ],
  },

  // Choosing components
  {
    id: "choose-button-vs-link",
    category: "Components",
    question:
      'Should I use Button or LinkButton for a "View all posts" link that goes to /blog?',
    mustInclude: [
      "LinkButton, because it navigates to another page",
      "Button is for actions on the current page",
    ],
    mustNotInclude: ["Recommends Button with an onClick that navigates"],
  },
  {
    id: "linkbutton-next",
    category: "Components",
    question: "How do I use LinkButton with Next.js's Link component?",
    mustInclude: [
      "Pass the link component through LinkButton's Component prop",
      "LinkButton passes the destination as a `to` prop, while Next's Link expects `href`, so a small wrapper that maps to → href is needed",
    ],
    mustNotInclude: [
      "Passes Next's Link directly as Component with no wrapper and claims it works as-is",
      "Uses an `href` prop on LinkButton",
    ],
  },
  {
    id: "full-width-image",
    category: "Components",
    question: "How do I make an image span the full width of the page?",
    mustInclude: [
      "Use ImageCaption with the fullwidth prop",
      "Place it directly in the page, not inside a Container",
    ],
    mustNotInclude: ["Invents a component or prop that doesn't exist"],
  },
  {
    id: "imagecaption-variants",
    category: "Components",
    question:
      "What's the difference between ImageCaption's emphasized and fullwidth props?",
    mustInclude: [
      "emphasized widens the image to 130% of the content column, on screens 1456px and wider",
      "fullwidth spans the full viewport width",
      "If both are set, emphasized takes precedence",
    ],
    mustNotInclude: [],
  },
  {
    id: "featuredsection-image",
    category: "Components",
    question:
      "I passed an image to FeaturedSection but it doesn't show up. What am I missing?",
    mustInclude: ["Set the imageAsBackground prop as well as image"],
    mustNotInclude: [],
  },
  {
    id: "cta-button-missing",
    category: "Components",
    question: "My CallToAction renders the heading and text but no button. Why?",
    mustInclude: [
      "The button only renders when both actionLink and actionText are set",
    ],
    mustNotInclude: [],
  },
  {
    id: "cta-heading-level",
    category: "Components",
    question:
      "I want to put a CallToAction under an h3 section heading. Can I make its heading an h4?",
    mustInclude: [
      "No: CallToAction's heading is always an h2 (it uses SectionHeader), with no prop to change the level",
    ],
    mustNotInclude: ["Invents a prop such as headingLevel or as that exists today"],
  },
  {
    id: "missing-component",
    category: "Components",
    question: "Does Lagom have a Card or Modal component I can use?",
    mustInclude: ["No, Lagom has neither a Card nor a Modal component"],
    mustNotInclude: [
      "Invents a Card or Modal component, or shows an import of one from @fcongson/lagom-ui",
    ],
  },

  // Theming and tokens
  {
    id: "theme-button-section",
    category: "Theming",
    question:
      "How do I make the primary buttons purple in just one section of my page?",
    mustInclude: [
      "Set --themed-component-button-color-primary-background (and optionally the -border / -text properties) on a wrapping element around that section",
    ],
    mustNotInclude: [
      "Recommends inline style overrides on each Button as the main approach",
      "Recommends overriding .lagom-button class styles directly",
    ],
  },
  {
    id: "theme-serif",
    category: "Theming",
    question: "How do I change Lagom's serif font, and what will it affect?",
    mustInclude: [
      "Use createTheme's core.fontFamilies.serif, or set --themed-core-font-families-serif",
      "It affects Quote",
    ],
    mustNotInclude: [],
  },
  {
    id: "token-caption",
    category: "Theming",
    question:
      "Which colour token should I use for small caption text in my own CSS?",
    mustInclude: ["--lagom-semantic-color-fg-subtle"],
    mustNotInclude: [
      "Recommends a core colour token (--lagom-core-colors-*) or a hard-coded hex value",
    ],
  },
  {
    id: "dark-section",
    category: "Theming",
    question: "How do I make just one section of my page use dark mode?",
    mustInclude: [
      "Import lagom-tokens' css/theme/_dark.css",
      'Set data-lagom-theme="dark" on the element wrapping that section',
    ],
    mustNotInclude: [],
  },
  {
    id: "token-spacing",
    category: "Theming",
    question: "Which Lagom spacing token is 16px?",
    mustInclude: ["--lagom-core-spacing-lg"],
    mustNotInclude: [],
  },
  {
    id: "createtheme-width",
    category: "Theming",
    question:
      "If I pass MAX_WIDTH_CONTAINER: 960 to createTheme, will Lagom's containers become 960px wide?",
    mustInclude: [
      "No: the theme's layout values are only exposed to JavaScript (via useTheme) and don't change Lagom's CSS",
    ],
    mustNotInclude: ["Says yes, the containers will become 960px wide"],
  },

  // Layout and accessibility
  {
    id: "layout-about",
    category: "Layout",
    question:
      "Lay out an About page with Lagom: a title over a photo, a few text sections, and a contact prompt at the end.",
    mustInclude: [
      "A Hero with a PageHeader inside for the title over the photo",
      "Text sections as Section > Container blocks with h2 headings",
      "A FeaturedSection with a CallToAction for the contact prompt, placed directly in the page (not inside a Container)",
      "Only one h1 on the page",
    ],
    mustNotInclude: [
      "Wraps Hero or FeaturedSection inside a Container",
      "Uses a second PageHeader",
    ],
  },
  {
    id: "layout-article",
    category: "Layout",
    question: "How should I structure a long blog post with Lagom?",
    mustInclude: [
      "A Section > Container block per heading group",
      "Plain h2/h3 elements for headings in the body text, not SectionHeader",
      "ImageCaption (usually emphasized) between sections for images",
    ],
    mustNotInclude: [],
  },
  {
    id: "a11y-hero-contrast",
    category: "Accessibility",
    question:
      "If I put a PageHeader over a Hero image, will the text always be readable?",
    mustInclude: [
      "No: the overlay is light and doesn't guarantee contrast",
      "Choose a calm image and check contrast at different screen sizes",
    ],
    mustNotInclude: ["Says the overlay guarantees accessible contrast"],
  },
  {
    id: "a11y-disabled-button",
    category: "Accessibility",
    question: "How do I show a disabled Button in Lagom?",
    mustInclude: [
      "A disabled Button currently looks the same as an enabled one (no distinct disabled style)",
      "Prefer keeping the button enabled and explaining what's missing, or explain nearby why it's disabled",
    ],
    mustNotInclude: ["Claims Lagom styles disabled buttons distinctly"],
  },
];
