const SlidesInfo = {
  deck: {
    title: 'WCAG 2.1 Highlights'
  },
  slides: [
    {
      title: 'Overview',
      shortTitle: 'Overview',
      contentFile: 'Overview',
      sectionSlide: false,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null
    },
    {
      title: 'Mobile Checkpoints',
      shortTitle: 'Mobile Checkpoints',
      contentFile: 'SectionMobile',
      sectionSlide: true,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null
    },
    {
      title: 'Orientation',
      shortTitle: 'Orientation',
      contentFile: 'Orientation',
      sectionSlide: false,
      number: '1.3.4',
      level: 'AA',
      detailLink: 'orientation.html',
      quote: `Content does not restrict its view and operation to a single display
      orientation, such as portrait or landscape, unless a specific display
      orientation is essential.`,
      knowabilityLink: ''
    },
    {
      title: 'Reflow',
      shortTitle: 'Reflow',
      contentFile: 'Reflow',
      sectionSlide: false,
      number: '1.4.10',
      level: 'AA',
      detailLink: 'reflow.html',
      quote: `Content can be presented without loss of information or functionality,
      and without requiring scrolling in two dimensions for:`,
      knowabilityLink: ''
    },
    {
      title: 'Motion actuation',
      shortTitle: 'Motion actuation',
      contentFile: 'MotionActuation',
      sectionSlide: false,
      number: '2.5.4',
      level: 'A',
      detailLink: 'motion-actuation.html',
      quote: `Functionality that can be operated by device motion or user motion can
      also be operated by user interface components and responding to the
      motion can be disabled to prevent accidental actuation.`,
      knowabilityLink: ''
    },
    {
      title: 'Input Checkpoints',
      shortTitle: 'Input Checkpoints',
      contentFile: 'SectionInput',
      sectionSlide: true,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null
    },
    {
      title: 'Pointer Gestures',
      shortTitle: 'Pointer Gestures',
      contentFile: 'PointerGestures',
      sectionSlide: false,
      number: '2.5.1',
      level: 'A',
      detailLink: 'pointer-gestures.html',
      quote: `All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without
      a path-based gesture, unless a multipoint or path-based gesture is
      essential.`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-251PointerGestures/'
    },
    {
      title: 'Pointer Cancellation',
      shortTitle: 'Pointer Cancellation',
      contentFile: 'PointerCancellation',
      sectionSlide: false,
      number: '2.5.2',
      level: 'A',
      detailLink: 'pointer-cancellation.html',
      quote: `For functionality that can be operated using a single pointer, at least
      one of the following is true:`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-252PointerCancellation/'
    },
    {
      title: 'Target Size',
      shortTitle: 'Target Size',
      contentFile: 'TargetSize',
      sectionSlide: false,
      number: '2.5.5',
      level: 'AAA',
      detailLink: 'target-size.html',
      quote: `The size of the target for pointer inputs is at least 44 by 44 CSS
      pixels`,
      knowabilityLink: ''
    },
    {
      title: 'Label in Name',
      shortTitle: 'Label in Name',
      contentFile: 'LabelInName',
      sectionSlide: false,
      number: '2.5.3',
      level: 'A',
      detailLink: 'label-in-name.html',
      quote: `For user interface components with labels that include text or images of
      text, the name contains the text that is presented visually.`,
      knowabilityLink: 'https://knowbility.org/blog/2018/WCAG21-253LabelInName/'
    },
    {
      title: 'Character Key Shortcuts',
      shortTitle: 'Character Key Shortcuts',
      contentFile: 'CharacterKeyShortcuts',
      sectionSlide: false,
      number: '2.1.4',
      level: 'A',
      detailLink: 'character-key-shortcuts.html',
      quote: `If a keyboard shortcut is implemented in content using only letter
      (including upper- and lower-case letters), punctuation, number, or
      symbol characters, then at least one of the following is true:`,
      knowabilityLink: ''
    },
    {
      title: 'Input Purpose',
      shortTitle: 'Input Purpose',
      contentFile: 'InputPurpose',
      sectionSlide: false,
      number: '1.3.5',
      level: 'AA',
      detailLink: 'identify-input-purpose.html',
      quote: `The purpose of each input field collecting information about the user
      can be programmatically determined when:`,
      knowabilityLink: ''
    },
    {
      title: 'Identify Purpose',
      shortTitle: 'Identify Purpose',
      contentFile: 'IdentifyPurpose',
      sectionSlide: false,
      number: '1.3.6',
      level: 'AAA',
      detailLink: 'identify-purpose.html',
      quote: `In content implemented using markup languages, the purpose of User
      Interface Components, icons, and regions can be programmatically
      determined.`,
      knowabilityLink: ''
    },

    {
      title: 'Non Text Contrast',
      shortTitle: 'Non Text Contrast',
      contentFile: 'NonTextContrast',
      sectionSlide: false,
      number: '1.4.1',
      level: 'AA',
      detailLink: 'non-text-contrast.html',
      quote: `The visual presentation of the following have a contrast ratio of at
      least 3:1 against adjacent color(s):`,
      knowabilityLink: ''
    },
    {
      title: 'Content on Hover',
      shortTitle: 'Content on Hover',
      contentFile: 'ContentOnHover',
      sectionSlide: false,
      number: '1.4.13',
      level: 'AA',
      detailLink: 'content-on-hover-or-focus.html',
      quote: `Where receiving and then removing pointer hover or keyboard focus
      triggers additional content to become visible and then hidden, the
      following are true:`,
      knowabilityLink: ''
    },
    {
      title: 'Status Messages',
      shortTitle: 'Status Messages',
      contentFile: 'StatusMessages',
      sectionSlide: false,
      number: '4.1.3',
      level: 'AA',
      detailLink: 'status-messages.html',
      quote: `In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-413StatusMessages/'
    },
    {
      title: 'Text Spacing',
      shortTitle: 'Text Spacing',
      contentFile: 'TextSpacing',
      sectionSlide: false,
      number: '1.4.2',
      level: 'AA',
      detailLink: 'text-spacing.html',
      quote: `In content implemented using markup languages that support the following
      text style properties, no loss of content or functionality occurs by
      setting all of the following and by changing no other style property:`,
      knowabilityLink: ''
    },

    {
      title: 'Resources',
      shortTitle: 'Resources',
      contentFile: 'Resources',
      sectionSlide: false,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null
    }
  ]
};

export default SlidesInfo;
