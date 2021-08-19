import React, { useState } from 'react'

const Form = ({
  author = '',
  comment = '',
  callback,
  id,
  rate = 0,
}) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [commentInput, setCommentInput] = useState(comment);
  const [rateInput, setRateInput] = useState(rate);


  const hadleChangeAuthor = event =>
    setAuthorInput(event.target.value);

  const hadleChangeCommment = event =>
    setCommentInput(event.target.value);

  const hadleChangeRate = event =>
    setRateInput(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    if (!commentInput.length) {
      return;
    }

    const rateObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };

    console.log(rateObject)
    id ? console.log('Updating') : console.log('Adding');

    if (id) {
      callback();
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          Author
          <input
            onChange={hadleChangeAuthor}
            type="text"
            value={authorInput}
          />
        </label>
      </div>
      <div>
        <label>
          Comment
          <input
            onChange={hadleChangeCommment}
            type="text"
            value={commentInput}
          />
        </label>
      </div>
      <div>
        <label>
          Rate
          <input
            onChange={hadleChangeRate}
            type="number"
            value={rateInput}
          />
        </label>
      </div>

      <button type="submit">
        {id ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default Form;