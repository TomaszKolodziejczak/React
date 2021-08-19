import React, { useState } from 'react'
import { addRate, editRate } from './actions/appActions';
import { connect } from 'react-redux';

const Form = ({
  addRate,
  author = '',
  comment = '',
  callback,
  editRate,
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
    id ? editRate(rateObject) : addRate(rateObject);

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

const connectActToProsp = ({
  addRate,
  editRate,
})

const FormConsumer = connect(null, connectActToProsp)(Form);


export default FormConsumer;