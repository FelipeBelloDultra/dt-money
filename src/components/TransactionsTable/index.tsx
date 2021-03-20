import { useEffect } from "react";

import api from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data));
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
