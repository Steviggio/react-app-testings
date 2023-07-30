import React, { useEffect, useState } from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';


async function getDatas({ request }) {
  const datas = await fetch("http://localhost:8000/api/country", { method: "POST", headers: "Application/json" })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error)
    })
}

function AddingCountry() {
  const errors = useActionData();

  return (
    <>
      <Form method='post' action={action}>
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


async function loader({ params }) {
  const data = await getDatas(params.body);
  return { data };
}

async function action({ request }) {
  const data = Object.fromEntries(await request.formData());
  console.log(data)
}


// async function action({ request }) {
//   await fetch("http://localhost://8000/api/country",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "Application/json",
//         "Accept": "*"
//       },
//       body: await JSON.stringify(request.FormData()),
//     }).then(response => {
//       if (response.status === 201) {
//         console.log("Cet élément à bien été ajouté à la liste!");
//         // data.reset()
//       }
//     });
//   redirect("/")
// }

export { AddingCountry, action };