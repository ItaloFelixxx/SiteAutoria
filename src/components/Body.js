import "./App.css";

function Body() {
  return (
    <article id="container">
      <div id="header">
        <h2>Gazeta do zequinha</h2>
      </div>
      <img
        id="logo"
        src="logo.png"
        alt="Logo do site"
      />
      
      <img
        id="img1"
        src="onca.png"
        alt="Onca selvagem andando nas ruas da cidade de Macaíba do RN"
        height="150"
        width="200"
      />
      <img
        id="img3"
        src="roniecoleman.png"
        alt="romolor noticia 3"
        height="160"
        width="200"
      />
      <img id="img4" src="taniro.png" alt="tanirao" height="190" width="200" />
      <article id="noticia1">
        <h2>
          É a Amazônia? Onça perdida é vista perambulando pelo cidade de
          Macaíba.
        </h2>
        <p>
          Na manhã desta quinta-feira, dia 10 de novembro de 2022, os moradores
          de Macaíba se depararam com uma situação atípica, uma onça parda foi
          avistada andando pelo centro da cidade.
          A mesma tentou invadir diversas residências em busca de comida.
          O ocorrido logo gerou um tumulto, onde donas de casas tiveram suas
          compras do mês surrupiadas pela onça.
        </p>
      </article>
      <article id="noticia2">
        <h2>
          Preferências? Palestrante é avistado privilegiando certas pessoas em
          MiniCurso
        </h2>
        <p>
          <img
            id="img2"
            src="erick.png"
            alt="Palestrante"
            height="130"
            width="200"
          />
          O palestrante de mini curso de PDI Erick, é flagrado durante
          apresentação ignorando metade da turma no momento de tirar duvidas,
          anonimos indicam que o lado esquerdo (lado que ele tirava as duvidas)
          era composto predominantemente por garotas. Ele ainda reforça, "devido
          a falta de meu olho direito, atendi a quem eu vi".
        </p>
      </article>
      <article id="noticia3">
        <h2>Quem cresce natural é planta?</h2>
        <p>
          O aluno Rômulo do TADS conhecido pelo apelido de "Ronnie Coleman",
          afirma em entrevista após quebrar um coco com o biceps: "Medo de
          agulha é algo natural, porem trato com naturalidade, afinal quem
          cresce natural é planta". Logo em seguida, ele afirma que a
          naturalidade de tal ato, merece ser naturalizado entre as pessoas. Tal
          atitude, teve uma inspiração em um professor da EAJ, Taniro conhecido
          popularmente como "Tremniro" foi pego em flagrante junto a Ronnie
          Coleman, utilizando de trembolona, GH e deca.
        </p>
      </article>
      <article id="noticialateral">
        <h2>Desaparecido ou Exilado?</h2>
        <p>
          Esse homem, mais conhecido como Taniro (ou para os intimos, Treniro),
          foi uma grande fonte de inspiração para Ronnie Colerman, onde
          naturalmente, seguiu os mesmos passo do seu mentor. Mas infelizmente,
          Taniro está desaparecido, boatos dizem que ele se mudou para o
          Paraguai, para comprar de forma mais barata, como aumentar suas fibras
          musculares de forma rápida, porém, ilícita.
        </p>
      </article>
      <h1 id="footer">RilJ</h1>;
      <article id="footerdescricao">
      <img
        id="logo2"
        src="logo.png"
        alt="Logo do site"
      />
        <p id="tabela">
          Participantes:
          <br/><br/>
          Email:
        </p>

        <p id="dados">Rômulo Felipe, Judilena Galvão, Luiz Guilherme,<br/>Emanuel Ítalo, João Nahmias <br/> 4002-8922</p>

      </article>
    </article>
  );
}

export default Body;
