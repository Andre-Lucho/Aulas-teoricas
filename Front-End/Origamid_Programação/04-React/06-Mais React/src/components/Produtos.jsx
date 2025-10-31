import React from 'react';

export class Produtos extends React.Component {
  constructor(props) {
    super(props);
    // propriedade estática
    this.test = 'teste';

    // prorpiedade reativa
    this.state = {
      contar: 0,
      titulo: 'mudou o titulo',
    };
    this.handleClick = this.handleClick.bind(this);
    // para THIS fazer referência a class Produtos e não ao callback do onClick
  }

  componentDidMount() {
    console.log('Montou');
  }

  componentDidUpdate() {
    console.log('Atualizou');
    document.title = this.state.titulo + ' ' + this.state.contar;
  }

  // Mesmo efeito do retorno do callback do useEffect
  componentWillUnmount() {
    console.log('Desmontou');
  }

  handleClick() {
    // console.log(this);
    this.setState((state) => ({ contar: state.contar - 1 }));
  }

  render() {
    return (
      <div>
        {/* herda props direto do React.Component */}
        {this.props.titulo}
        {/* para retornar outros elementos, preciso ter um constructor setado */}
        <p>{this.test}</p>
        <p>{this.state.contar}</p>
        <button
          // onClick={() => this.setState({ contar: this.state.contar + 1 })} ou:
          onClick={() =>
            this.setState((state) => ({
              contar: state.contar + 1,
            }))
          }
        >
          Somar
        </button>
        <button onClick={this.handleClick}>Diminuir</button>
      </div>
    );
  }
}
