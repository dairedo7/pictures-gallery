import styles from './Searchbar.module.css';
import { Component } from 'react';
import { Notify } from 'notiflix';
export class Searchbar extends Component {
  state = {
    input: '',
  };

  reset = () => {
    this.setState({ input: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { input } = this.state;

    if (input.trim() === '') {
      return Notify.warning('Please, enter the proper search request');
    }
    this.props.submit(input);
    this.reset();
  };

  onInputChange = ({ target }) => {
    const { value } = target;

    console.log(value);
    this.setState({ input: value.toLowerCase() });
  };

  render() {
    const { input } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button className={styles.SearchForm_button} type="submit">
            Find
            <span className={styles.SearchForm_button_label} type="submit">
              Search
            </span>
          </button>
          <label className={styles.SearchForm_button_label}></label>
          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.onInputChange}
            value={input}
            placeholder="Search images and photos..."
          />
        </form>
      </header>
    );
  }
}
