export const ExistingSchema = (props) => {
  const {intl} = props;

  return {
    title: 'Existing Block',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['pageURL', 'elementID'],
      },
    ],

    properties: {
      pageURL: {
        title: 'Page URL',
        required: true,
        widget: 'url',
      },
      elementID: {
        title: 'Element ID',
        default: 'page-document',
        required: true,
      },
    },
    required: [],
  };
};
