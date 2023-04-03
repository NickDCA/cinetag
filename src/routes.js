import Favoritos from "Pages/Favoritos";
import Inicio from "Pages/Inicio";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Favoritos" element={<Favoritos />} />
        </Routes>
      </Container>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
