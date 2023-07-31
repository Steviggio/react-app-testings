import React from 'react';
import { Form, useActionData } from 'react-router-dom';


// async function getDatas({ request }) {
//   const datas = await fetch("http://localhost:8000/api/country", { method: "POST", headers: "Application/json" })
//     .then((response) => response.json())
//     .catch((error) => {
//       console.log(error)
//     })
// }



export default function AddingCountry() {

  const handleSubmit = async (event) => { 
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Convert datas to JSON
    const formJSON = {};
    formData.forEach((value, key) => {
      formJSON[key] = value;
    });

    console.log('FORMJSON---------', formJSON)

    const jsonData = JSON.stringify(formJSON);

    console.log("JSONDATA", jsonData)

    try {
      const response = await fetch("http://localhost:8000/api/country", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*"
        },
        body: jsonData,
      });

      if (response.status === 201) {
        console.log("This element has been successfully added to the list.");

      } else {
        console.log("An error as occurred during the request.");

      }
    } catch (error) {
      console.log("An error as occurred during the request.", error);

    }
  };

  const errors = useActionData();

  return (
    <>
      <Form method='post' onSubmit={handleSubmit}>
        <p><input type='text' name='name' placeholder='Name of the country' />
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


// async function loader({ params }) {
//   const data = await getDatas(params.body);
//   return { data };
// }

// async function action({ request }) {
//   const data = Object.fromEntries(await request.formData());
//   console.log(data)
// }


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

