import React from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';

export default function AddingCountry() {
  const errors = useActionData();

  return (
    <>
      <Form method='post' action='http://localhost:8000/country'>
        <p><input type='text' name='country' placeholder='Name of the country' />
          {errors?.country && <span>{errors.country}</span>}
        </p>
        <p><input type='text' name='language' placeholder='Language' />
          {errors?.language && <span>{errors.language}</span>}</p>
        <p><input type='text' name='capital' placeholder='Capital' />
          {errors?.capital && <span>{errors.capital}</span>}</p>
        <button type='submit'>Create</button>
      </Form>
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const country = formData.get('country');
  const language = formData.get('language');
  const capital = formData.get('capital');
  const errors = {};

  if (typeof country !== 'string') {
    errors.country =
      "This is not a country"
  }

  if (typeof language !== 'string') {
    errors.language =
      "This is not a language"
  }


  if (typeof capital !== 'string') {
    errors.capital =
      "This is not a capital"
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  await createCountry(country, language, capital)
  return redirect('/')
}