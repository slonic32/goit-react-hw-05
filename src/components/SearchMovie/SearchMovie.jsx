import css from "./SearchMovie.module.css";

export default function SearchMovie({ handleSubmit }) {
  function formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const filter = form.elements.filter.value;
    handleSubmit(filter);
    form.reset();
  }

  return (
    <form onSubmit={formSubmit}>
      <input type="text" name="filter" />
      <button type="submit">Search</button>
    </form>
  );
}
