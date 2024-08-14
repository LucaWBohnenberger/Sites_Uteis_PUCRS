
import Button from './componets/button/button';
import './App.css';

function App() {


  return (
    <div className='page'>
      <div style={{ display: 'flex', gap: '5rem' }} >
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1rem' }} >Links úteis</h3>
          <Button text="Todos os planos de aula/Ementas" link="https://www.politecnica.pucrs.br/programas/index.php" />
          <Button text="Biblioteca" link="https://www.pucrs.br/biblioteca/" />
          <Button text="Moodle" link="https://moodle.pucrs.br/" />
          <Button text="Intranet?" link="https://intranet.pucrs.br/" />
          <Button text="Trabalho de Conclusão de Curso" link="https://www.politecnica.pucrs.br/conclusao/consulta/index.php" />
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1rem' }} > Informções detalhadas do curso</h3>
          <Button text="Engenharia de Software" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=engenharia-de-software" />
          <Button text="Engenharia de Computação" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=engenharia-de-computacao" />
          <Button text="Engenharia de Controle e Automação" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=engenharia-de-controle-e-automacao" />
          <Button text="Engenharia Mecânica" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=engenharia-mecanica" />
          <Button text="Engenharia de Produção" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=engenharia-de-producao" />
          <Button text="Engenharia Química" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=engenharia-quimica" />
          <Button text="Engenharia Civil" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=engenharia-civil" />
          <Button text="Ciência da Computação" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=ciencia-da-computacao" />
          <Button text="Sistemas de Informação" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=sistemas-de-informacao" />
          <Button text="Ciência de Dados" link="https://www.pucrs.br/grade-corpo-docente/dados-do-curso/?slug=ciencia-de-dados" />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'column' }}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <p style={{ display: 'flex' , margin: '0'}} >Site por Luca W. Bohnenberger</p>
          <input style={{backgroundColor: '#353535', border: '0', color: 'white'}} type="button" value="Contato" onClick={() => window.open('https://github.com/LucaWBohnenberger')} />
        </div>
      </div>
    </div>

  )
}

export default App
