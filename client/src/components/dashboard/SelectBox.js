import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Title = styled.h1`
  color: rgba(0,0,0,0.5);
  font-weight: 800;
  font-size: 3em;
  margin-bottom: 0.5em;
`;

class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    this.props.handleChange(target.value);
  }

  render() {
    const categories = this.props.categories.map(
      categorie => ({ label: categorie, value: categorie })
    );

    return (
      <div>
        <Title>Select a type of demographic data:</Title>
        <Select
          options={categories}
          onChange={this.handleChange}
          isLoading={!this.props.categories.length}
        />
      </div>
    );
  }
}
export default SelectBox;
