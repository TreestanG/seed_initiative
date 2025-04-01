import { Field } from 'payload/types';

type LinkArgs = {
  appearances?: false | {
    defaultValue?: string
  }
  overrides?: {
    label?: string
    name?: string
  }
}

export default ({ appearances = {}, overrides = {} }: LinkArgs): Field => {
  const generatedLink: Field = {
    name: overrides?.name || 'link',
    label: overrides?.label || 'Link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'label',
            label: 'Label',
            type: 'text',
            required: true,
            admin: {
              width: '50%',
            },
          },
          {
            name: 'url',
            label: 'URL',
            type: 'text',
            required: true,
            admin: {
              width: '50%',
            },
          },
        ],
      },
      {
        type: 'row',
        fields: [
          {
            name: 'newTab',
            label: 'Open in new tab',
            type: 'checkbox',
            admin: {
              width: '50%',
            },
          },
        ],
      },
    ],
  };

  // Add appearance field if specified
  if (appearances !== false) {
    const appearanceField: Field = {
      name: 'appearance',
      type: 'select',
      label: 'Appearance',
      defaultValue: appearances.defaultValue || 'primary',
      options: [
        {
          label: 'Primary Button',
          value: 'primary',
        },
        {
          label: 'Secondary Button',
          value: 'secondary',
        },
        {
          label: 'Text Link',
          value: 'text',
        },
      ],
      admin: {
        width: '50%',
      },
    };

    // @ts-expect-error - We're pushing to the fields array which exists
    const rowWithAppearance = generatedLink.fields[1].fields;
    rowWithAppearance.push(appearanceField);
  }

  return generatedLink;
}; 