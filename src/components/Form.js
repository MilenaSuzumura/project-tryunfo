import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <form>
        <label htmlFor="name-input">
          Inserir o nome da carta
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <label htmlFor="description-input">
          Inserir a descrição da carta
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr1-input">
          Inserir o primeiro atributo da carta
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr2-input">
          Inserir o segundo atributo da carta
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr3-input">
          Inserir o terceiro atributo da carta
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <label htmlFor="image-input">
          Inserir o caminho para imagem da carta
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <label htmlFor="rare-input">
          Escolher a raridade da carta
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ this.onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo-input">
          A carta é o Super Trunfo?
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            value={ cardTrunfo }
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="save-button"
          name="isSaveButtonDisabled"
          value={ isSaveButtonDisabled }
          onChange={ this.onSaveButtonClick }
          disabled={ !cardTrunfo }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
