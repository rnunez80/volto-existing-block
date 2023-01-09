import React from 'react';
import { ExistingSchema } from './Schema';
import { BlockDataForm } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  ExistingBlock: {
    id: 'Existing Block',
    defaultMessage: 'Existing Block',
  },
});

const ExistingData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer } = props;
  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(ExistingSchema({ ...props, intl }), props)
    : ExistingSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title='Existing Block'
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      fieldIndex={data.index}
      block={block}
    />
  );
};

export default ExistingData;
