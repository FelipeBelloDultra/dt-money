import { Container } from "./styles";

export function TransactionsTable() {
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
            <td>Desenvolvimento</td>
            <td className="deposit">12000</td>
            <td>Desenvolvimento</td>
            <td>14/02/2002</td>
          </tr>

          <tr>
            <td>Alugel</td>
            <td className="withdraw">100</td>
            <td>Casa</td>
            <td>14/02/2002</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
