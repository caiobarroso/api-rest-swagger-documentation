const pool = require("../db");

exports.addBirthday = async (req, res) => {
  try {
    const { nome, dia, mes } = req.body;
    const novoRecurso = await pool.query(
      "INSERT INTO aniversariantes (nome, dia, mes) VALUES($1,$2,$3) RETURNING *",
      [nome, dia, mes]
    );

    res.send(novoRecurso);
  } catch (e) {
    console.log(e);
  }
};

exports.showAllBirthdays = async (req, res) => {
  try {
    const mostrarTodosRecursos = await pool.query("SELECT * from aniversariantes");
    res.json(mostrarTodosRecursos.rows);
  } catch (e) {
    console.log(e);
  }
};

exports.showBirthdaysByMonth = async (req, res) => {
  try {
    const { mes } = req.params;
    const mostrarRecurso = await pool.query(
      "SELECT * from aniversariantes WHERE mes = $1",
      [mes]
    );

    res.json(mostrarRecurso);
  } catch (e) {
    console.log(e);
  }
};

exports.editByName = async (req, res) => {
  try {
    const { nome } = req.params;
    const { dia, mes } = req.body;
    const editarRecurso = await pool.query(
      "UPDATE aniversariantes SET dia = $1, mes = $2 WHERE nome = $3",
      [dia, mes, nome]
    );

    res.json("atualizado!");
  } catch (e) {
    console.log(e);
  }
};

exports.deleteByName = async (req, res) => {
    try {
      const { nome } = req.params;
      const deletarRecurso = await pool.query(
        "DELETE FROM aniversariantes WHERE nome = $1 ",
        [nome]
      );
      res.json("deletado");
    } catch (e) {
      console.log(e);
    }
};
