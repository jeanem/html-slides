const SlidesInfo = {
  deck: {
    title: 'WCAG 2.1 Highlights'
  },
  slides: [
    {
      title: 'Overview',
      shortTitle: 'Overview',
      contentFile: 'Overview',
      number: null,
      level: null,
      detailLink: null,
      quote: null
    },
    {
      title: 'Orientation',
      shortTitle: 'Orientation',
      contentFile: 'Orientation',
      number: '1.3.4',
      level: 'AA',
      detailLink: 'orientation.html',
      quote: `Content does not restrict its view and operation to a single display
      orientation, such as portrait or landscape, unless a specific display
      orientation is essential.`
    },
    {
      title: 'Input Purpose',
      shortTitle: 'Input Purpose',
      contentFile: 'InputPurpose',
      number: '1.3.5',
      level: 'AA',
      detailLink: 'identify-input-purpose.html',
      quote: `The purpose of each input field collecting information about the user
      can be programmatically determined when:`
    },
    {
      title: 'Target Size',
      shortTitle: 'Target Size',
      contentFile: 'TargetSize',
      number: '2.5.5',
      level: 'AAA',
      detailLink: 'target-size.html',
      quote: `The size of the target for pointer inputs is at least 44 by 44 CSS
      pixels`
    },
    {
      title: 'Text Spacing',
      shortTitle: 'Text Spacing',
      contentFile: 'TextSpacing',
      number: '1.4.2',
      level: 'AA',
      detailLink: 'text-spacing.html',
      quote: `In content implemented using markup languages that support the following
      text style properties, no loss of content or functionality occurs by
      setting all of the following and by changing no other style property:`
    },
    {
      title: 'Label in Name',
      shortTitle: 'Label in Name',
      contentFile: 'LabelInName',
      number: '2.5.3',
      level: 'A',
      detailLink: 'label-in-name.html',
      quote: `For user interface components with labels that include text or images of
      text, the name contains the text that is presented visually.`
    },
    {
      title: 'Identify Purpose',
      shortTitle: 'Identify Purpose',
      contentFile: 'IdentifyPurpose',
      number: '1.3.6',
      level: 'AAA',
      detailLink: 'identify-purpose.html',
      quote: `In content implemented using markup languages, the purpose of User
      Interface Components, icons, and regions can be programmatically
      determined.`
    },
    {
      title: 'Reflow',
      shortTitle: 'Reflow',
      contentFile: 'Reflow',
      number: '1.4.10',
      level: 'AA',
      detailLink: 'reflow.html',
      quote: `Content can be presented without loss of information or functionality,
      and without requiring scrolling in two dimensions for:`
    },
    {
      title: 'Non Text Contrast',
      shortTitle: 'Non Text Contrast',
      contentFile: 'NonTextContrast',
      number: '1.4.1',
      level: 'AA',
      detailLink: 'non-text-contrast.html',
      quote: `The visual presentation of the following have a contrast ratio of at
      least 3:1 against adjacent color(s):`
    },
    {
      title: 'Content on Hover',
      shortTitle: 'Content on Hover',
      contentFile: 'ContentOnHover',
      number: '1.4.13',
      level: 'AA',
      detailLink: 'content-on-hover-or-focus.html',
      quote: `Where receiving and then removing pointer hover or keyboard focus
      triggers additional content to become visible and then hidden, the
      following are true:`
    },
    {
      title: 'Character Key Shortcuts',
      shortTitle: 'Character Key Shortcuts',
      contentFile: 'CharacterKeyShortcuts',
      number: '2.1.4',
      level: 'A',
      detailLink: 'character-key-shortcuts.html',
      quote: `If a keyboard shortcut is implemented in content using only letter
      (including upper- and lower-case letters), punctuation, number, or
      symbol characters, then at least one of the following is true:`
    },
    {
      title: 'Pointer Gestures',
      shortTitle: 'Pointer Gestures',
      contentFile: 'PointerGestures',
      number: '2.5.1',
      level: 'A',
      detailLink: 'pointer-gestures.html',
      quote: `All functionality that uses multipoint or path-based gestures for
      operation can be operated with a <strong>single pointer</strong> without
      a path-based gesture, unless a multipoint or path-based gesture is
      essential.`
    },
    {
      title: 'Pointer Cancellation',
      shortTitle: 'Pointer Cancellation',
      contentFile: 'PointerCancellation',
      number: '2.5.2',
      level: 'A',
      detailLink: 'pointer-cancellation.html',
      quote: `For functionality that can be operated using a single pointer, at least
      one of the following is true:`
    },
    {
      title: 'Motion actuation',
      shortTitle: 'Motion actuation',
      contentFile: 'MotionActuation',
      number: '2.5.4',
      level: 'A',
      detailLink: 'motion-actuation.html',
      quote: `Functionality that can be operated by device motion or user motion can
      also be operated by user interface components and responding to the
      motion can be disabled to prevent accidental actuation.`
    }
  ]
};

export default SlidesInfo;
