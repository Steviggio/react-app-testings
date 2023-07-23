import './AddCountry.scss';
import { Form } from 'react-router-dom';

export default function AddingCountry() {
  return (
    <>
      <Form method='post' action='country'>
        <h3>Add a country to the database</h3>
        <label for='country' >Name of the country</label><input type='country' name='country' id='country' />
        <label for='language'>Language spoken</label><input type='language' name='language' id='language' />
        <label for='capital' >Official capital</label><input type='capital' name='capital' id='capital' />
        {/* For the flag url, it's a specific category to manipulate the data */}
        <label for='flag' ></label><input type='flag' name='flag' id='flag' />
        <input type='submit' value='Add the country' />
      </Form>
    </>
  )
}