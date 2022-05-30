import useInput from '../hooks/user-input';

const validateText = (value) => value.trim() !== '';
const validateEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(validateText);
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(validateText);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(validateEmail);

  let formIsValid = false;

  if (lastNameIsValid && emailIsValid && firstNameIsValid) formIsValid = true;

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!lastNameIsValid || !emailIsValid || !firstNameIsValid) {
      return;
    }

    resetLastNameInput();
    resetFirstNameInput();
    resetEmailInput();
  };

  const lastNameClass = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const firstNameClass = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameClass}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
