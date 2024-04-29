import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FormBuilder } from '@ginkgo-bioworks/react-json-schema-form-builder';


export default function App() {

  const customFormInputs = {
    shortAnswer: {
      displayName: "Email2",
      matchIf: [
        {
          types: ["string"],
          widget: "email"
        },
      ],
      defaultDataSchema: {},
      defaultUiSchema: {
        "ui:widget": "password"
      },
      type: "string",
      cardBody: (parameters, onChange) => <div>
        <h5>Default email</h5>
        <input
          value={parameters.default}
          placeholder="Default"
          type="text"
          onChange={(ev) =>
            onChange({ ...parameters, default: ev.target.value })
          }
        />
      </div>,
      modalBody: (parameters, onChange) => <div>
        Extra editing options in modal appear hear
      </div>,
    },
  };

  const [state, setState] = useState({
    schema: '',
    uischema: ''
  });

  return (
    <FormBuilder
      schema={state.schema}
      uischema={state.uischema}
      onChange={(newSchema, newUiSchema) => {
        setState({
          schema: newSchema,
          uischema: newUiSchema
        })
      }}
      mods={{
        customFormInputs: customFormInputs
      }}
    />
  );
}
