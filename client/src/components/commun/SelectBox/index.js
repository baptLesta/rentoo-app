import React from 'react';
import Select from 'react-select';
import css from './styles.scss';

class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    this.props.handleChange(target.value);
  }

  render() {
    const { options, placeholder } = this.props;

    return (
      <div className={css.component}>
        <Select
          placeholder={placeholder}
          options={options}
          onChange={this.handleChange}
          isLoading={!options.length}
        />
      </div>
    );
  }
}
export default SelectBox;
