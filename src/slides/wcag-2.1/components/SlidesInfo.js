const SlidesInfo = {
  deck: {
    title: 'WCAG 2.1 Highlights'
  },
  slides: [
    {
      title: 'Overview',
      shortTitle: 'Overview',
      contentFile: 'Overview',
      sectionSlide: true,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null,
      furtherReading: []
    },
    {
      title: 'Mobile and responsive checkpoints',
      shortTitle: 'Mobile checkpoints',
      contentFile: 'SectionMobile',
      sectionSlide: true,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null,
      furtherReading: []
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
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-134Orientation/',
      furtherReading: []
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
      knowabilityLink: 'https://knowbility.org/blog/2018/WCAG21-1410Reflow/',
      furtherReading: []
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
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-254MotionActuation/',
      furtherReading: []
    },
    {
      title: 'Input related checkpoints',
      shortTitle: 'Input checkpoints',
      contentFile: 'SectionInput',
      sectionSlide: true,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null,
      furtherReading: []
    },
    {
      title: 'Pointer gestures',
      shortTitle: 'Pointer gestures',
      contentFile: 'PointerGestures',
      sectionSlide: false,
      number: '2.5.1',
      level: 'A',
      detailLink: 'pointer-gestures.html',
      quote: `All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without
      a path-based gesture, unless a multipoint or path-based gesture is
      essential.`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-251PointerGestures/',
      furtherReading: []
    },
    {
      title: 'Pointer cancellation',
      shortTitle: 'Pointer cancellation',
      contentFile: 'PointerCancellation',
      sectionSlide: false,
      number: '2.5.2',
      level: 'A',
      detailLink: 'pointer-cancellation.html',
      quote: `For functionality that can be operated using a single pointer, at least
      one of the following is true:`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-252PointerCancellation/',
      furtherReading: []
    },
    {
      title: 'Target size',
      shortTitle: 'Target size',
      contentFile: 'TargetSize',
      sectionSlide: false,
      number: '2.5.5',
      level: 'AAA',
      detailLink: 'target-size.html',
      quote: `The size of the target for pointer inputs is at least 44 by 44 CSS
      pixels`,
      knowabilityLink: 'https://knowbility.org/blog/2018/WCAG21-255TargetSize/',
      furtherReading: []
    },
    {
      title: 'Label in name',
      shortTitle: 'Label in name',
      contentFile: 'LabelInName',
      sectionSlide: false,
      number: '2.5.3',
      level: 'A',
      detailLink: 'label-in-name.html',
      quote: `For user interface components with labels that include text or images of
      text, the name contains the text that is presented visually.`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-253LabelInName/',
      furtherReading: []
    },
    {
      title: 'Character key shortcuts',
      shortTitle: 'Character key shortcuts',
      contentFile: 'CharacterKeyShortcuts',
      sectionSlide: false,
      number: '2.1.4',
      level: 'A',
      detailLink: 'character-key-shortcuts.html',
      quote: `If a keyboard shortcut is implemented in content using only letter
      (including upper- and lower-case letters), punctuation, number, or
      symbol characters, then at least one of the following is true:`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-214CharacterKeyShortcuts/',
      furtherReading: []
    },
    {
      title: 'Input purpose',
      shortTitle: 'Input purpose',
      contentFile: 'InputPurpose',
      sectionSlide: false,
      number: '1.3.5',
      level: 'AA',
      detailLink: 'identify-input-purpose.html',
      quote: `The purpose of each input field collecting information about the user
      can be programmatically determined when:`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-135InputPurpose/',
      furtherReading: [
        {
          link:
            'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete',
          title: 'MDN article on autocomplete'
        }
      ]
    },
    {
      title: 'Low vision checkpoints',
      shortTitle: 'Low vision checkpoints',
      contentFile: 'SectionLowVision',
      sectionSlide: true,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null,
      furtherReading: []
    },
    {
      title: 'Text spacing',
      shortTitle: 'Text spacing',
      contentFile: 'TextSpacing',
      sectionSlide: false,
      number: '1.4.2',
      level: 'AA',
      detailLink: 'text-spacing.html',
      quote: `In content implemented using markup languages that support the following
      text style properties, no loss of content or functionality occurs by
      setting all of the following and by changing no other style property:`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-1412TextSpacing/',
      furtherReading: []
    },

    {
      title: 'Non text contrast',
      shortTitle: 'Non text contrast',
      contentFile: 'NonTextContrast',
      sectionSlide: false,
      number: '1.4.1',
      level: 'AA',
      detailLink: 'non-text-contrast.html',
      quote: `The visual presentation of the following have a contrast ratio of at
      least 3:1 against adjacent color(s):`,
      knowabilityLink: 'https://knowbility.org/blog/2018/WCAG21-1411Contrast/',
      furtherReading: [
        {
          link: 'http://a11yrocks.com/colorPalette/',
          title: 'A11y Rocks color palette'
        },
        {
          link:
            'https://toolness.github.io/accessible-color-matrix/?n=white&n=light%20gold&n=metallic&n=purple&n=black&v=FFFFFF&v=E8E3D3&v=85754D&v=4B2E83&v=000000',
          title: 'Toolness Accessible Color Color Palette Builder'
        }
      ]
    },
    {
      title: 'Other checkpoints',
      shortTitle: 'Other checkpoints',
      contentFile: 'SectionOther',
      sectionSlide: true,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null,
      furtherReading: []
    },
    // {
    //   title: 'Identify purpose',
    //   shortTitle: 'Identify purpose',
    //   contentFile: 'IdentifyPurpose',
    //   sectionSlide: false,
    //   number: '1.3.6',
    //   level: 'AAA',
    //   detailLink: 'identify-purpose.html',
    //   quote: `In content implemented using markup languages, the purpose of User
    //   Interface Components, icons, and regions can be programmatically
    //   determined.`,
    //   knowabilityLink: '',
    //   furtherReading: []
    // },

    {
      title: 'Content on hover',
      shortTitle: 'Content on hover',
      contentFile: 'ContentOnHover',
      sectionSlide: false,
      number: '1.4.13',
      level: 'AA',
      detailLink: 'content-on-hover-or-focus.html',
      quote: `Where receiving and then removing pointer hover or keyboard focus
      triggers additional content to become visible and then hidden, the
      following are true:`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-1413ContentHoverFocus/',
      furtherReading: []
    },
    {
      title: 'Status messages',
      shortTitle: 'Status messages',
      contentFile: 'StatusMessages',
      sectionSlide: false,
      number: '4.1.3',
      level: 'AA',
      detailLink: 'status-messages.html',
      quote: `In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.`,
      knowabilityLink:
        'https://knowbility.org/blog/2018/WCAG21-413StatusMessages/',
      furtherReading: []
    },

    {
      title: 'Thanks!',
      shortTitle: 'Thanks!',
      contentFile: 'Thanks',
      sectionSlide: true,
      number: null,
      level: null,
      detailLink: null,
      quote: null,
      knowabilityLink: null,
      furtherReading: []
    }
  ]
};

export default SlidesInfo;
