import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transaction')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/09/2021</td>
          </tr>

          <tr>
            <td>Alguem</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>21/09/2021</td>
          </tr>

          <tr>
            <td>Salário</td>
            <td className="deposit">R$3.000</td>
            <td>Desenvolvimento</td>
            <td>21/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
